require 'sinatra/base'
require 'cdo/db'
require 'cdo/rack/request'
require 'csv'
require '../shared/middleware/helpers/redis_property_bag'

# NetSimApi implements a rest service for interacting with NetSim tables.
class NetSimApi < Sinatra::Base

  helpers do
    %w{
      core.rb
      storage_id.rb
      table.rb
      null_pub_sub_api.rb
      pusher_api.rb
    }.each do |file|
      load(CDO.dir('shared', 'middleware', 'helpers', file))
    end

  end

  # For test, make it possible to override the usual configured API choice
  @@overridden_pub_sub_api = nil

  def initialize(app = nil)
    super(app)
    @redis = get_redis_client
    @pubsub = get_pub_sub_api
  end

  # Return a new RedisTable instance for the given shard_id and table_name.
  def get_table(shard_id, table_name)
    RedisTable.new(shard_id, table_name, @redis, @pubsub)
  end

  #
  # GET /v3/netsim/<shard-id>/<table-name>
  #
  # Returns all of the rows in the table.
  #
  get %r{/v3/netsim/([^/]+)/(\w+)$} do |shard_id, table_name|
    dont_cache
    content_type :json
    get_table(shard_id, table_name).to_a.to_json
  end

  #
  # GET /v3/netsim/<shard-id>/<table-name>/<row-id>
  #
  # Returns a single row by id.
  #
  get %r{/v3/netsim/([^/]+)/(\w+)/(\d+)$} do |shard_id, table_name, id|
    dont_cache
    content_type :json
    get_table(shard_id, table_name).fetch(id).to_json
  end

  #
  # DELETE /v3/netsim/<shard-id>/<table-name>/<row-id>
  #
  # Deletes a row by id.
  delete %r{/v3/netsim/([^/]+)/(\w+)/(\d+)$} do |shard_id, table_name, id|
    dont_cache
    get_table(shard_id, table_name).delete(id)
    no_content
  end

  #
  # POST /v3/netsim/<shard-id>/<table-name>/<row-id>/delete
  #
  # This mapping exists for older browsers that don't support the DELETE verb.
  #
  post %r{/v3/netsim/([^/]+)/(\w+)/(\d+)/delete$} do |shard_id, table_name, id|
    call(env.merge('REQUEST_METHOD'=>'DELETE', 'PATH_INFO'=>File.dirname(request.path_info)))
  end

  #
  # POST /v3/netsim/<shard-id>/<table-name>
  #
  # Insert a new row.
  #
  post %r{/v3/netsim/([^/]+)/(\w+)$} do |shard_id, table_name|
    dont_cache
    unsupported_media_type unless has_json_utf8_headers(request)

    begin
      json = request.body.read
      JSON.parse(json)  # Parse the JSON to be sure it's valid.
      value = get_table(shard_id, table_name).
          insert(JSON.parse(request.body.read))
      status 201
      value.to_json
    rescue JSON::ParserError
      bad_request
    end
  end

  #
  # PATCH (PUT, POST) /v3/netsim/<shard-id>/<table-name>/<row-id>
  #
  # Update an existing row.
  #
  post %r{/v3/netsim/([^/]+)/(\w+)/(\d+)$} do |shard_id, table_name, id|
    dont_cache
    unsupported_media_type unless has_json_utf8_headers(request)

    begin
      table = get_table(shard_id, table_name)
      value = table.update(id, JSON.parse(request.body.read))
    rescue JSON::ParserError
      bad_request
    end

  end
  patch %r{/v3/netsim/([^/]+)/(\w+)/(\d+)$} do |shard_id, table_name, id|
    call(env.merge('REQUEST_METHOD'=>'POST'))
  end
  put %r{/v3/netsim/([^/]+)/(\w+)/(\d+)$} do |shard_id, table_name, id|
    call(env.merge('REQUEST_METHOD'=>'POST'))
  end

  # Returns a new Redis client.
  #
  # @return [Redis]
  # @private
  def get_redis_client
    Redis.new(host: 'localhost')
  end

  # Get the Pub/Sub API interface for the current configuration
  #
  # @return [PusherApi]
  def get_pub_sub_api
    return @@overridden_pub_sub_api unless @@overridden_pub_sub_api.nil?
    CDO.use_pusher ? PusherApi : NullPubSubApi
  end

  # Set a particular Pub/Sub API interface to use - for use in tests.
  #
  # @param [PubSubApi] override_api
  def self.override_pub_sub_api_for_test(override_api)
    @@overridden_pub_sub_api = override_api
  end

  # Return true if the request's content type is application/json and charset
  # is utf-8.
  #
  # @param [Request] request
  # @return [Boolean]
  # @private
  def has_json_utf8_headers(request)
    request.content_type.to_s.split(';').first == 'application/json' and
        request.content_charset.to_s.downcase == 'utf-8'
  end

end

