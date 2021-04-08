require 'rdl'
RDL::Config.instance.number_mode = true
require 'types/core'
require 'types/active_record'
require_relative '../shared/middleware/helpers/auth_helpers.rb'
require_relative './record_types.rb'
require_relative './orig_types.rb'


Rails.application.eager_load! ## load Rails app


RDL::Heuristic.get_rank_accs(:arg)
RDL::Heuristic.get_rank_accs(:ret)
