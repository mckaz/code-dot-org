require 'rdl'
require 'types/core'
#require_relative 'db_types'
require_relative '../db-types/sequel/db_types.rb'
require_relative 'orm'
require_relative './shared/middleware/helpers/auth_helpers.rb'
require 'date'
#require 'rdl'
#require 'types/core'
#DASHBOARD_DB[:users].insert(id: 1)
#test = current_user
#puts "HERE WE GOT #{test}"

RDL.nowrap ActiveRecord::Associations::ClassMethods if Object.const_defined?("ActiveRecord")
=begin
class AddLoginTypeToSections < ActiveRecord::Migration[4.2]

  def add_lt
    #add_column :sections, :login_type, :string
    add_column :sections, :course_id, :integer
  end
  self.new.add_lt

end
=end
module RDL::Globals
  # Map from table names (symbols) to their schema types, which should be a Table type
  @seq_db_schema = {}
end

class << RDL::Globals
  attr_accessor :seq_db_schema
end

RDL::Globals.info.info['ActiveRecord::Associations::ClassMethods'] = nil

puts "GOT HERE"


Rails.application.eager_load! if Object.const_defined?("Rails")
=begin
MODELS = ActiveRecord::Base.descendants.each { |m|
  begin
    m.send(:load_schema) unless m.abstract_class?
    RDL.nowrap model
    puts "WOOOOOOOO #{m} DID WORK"
  rescue
    puts "#{m} didn't work"
  end }
=end

#puts DASHBOARD_DB.tables

#puts PEGASUS_DB.tables

#puts DB == PEGASUS_DB
#TestRunUtils.run_shared_tests
require 'rails'
def gen_schema(db)
  db.tables.each { |table|
    hash_str = "{ "
    kl_name = table.to_s.camelize.singularize
    db.schema(table).each { |col|
      hash_str << "#{col[0]}: "
      typ = col[1][:type].to_s.camelize
      if typ == "Datetime"
        typ = "DateTime or Time" ## Sequel accepts both
      elsif typ == "Boolean"
        typ = "%bool"
      elsif typ == "Text"
        typ = "String"
      end
      hash_str << "#{typ},"
      RDL.type kl_name, col[0], "() -> #{typ}", wrap: false
      RDL.type kl_name, "#{col[0]}=", "(#{typ}) -> #{typ}", wrap: false
    }
    hash_str.chomp!(",") << " }"
    RDL::Globals.seq_db_schema[table] = RDL::Globals.parser.scan_str "#T #{hash_str}"
  }
end

gen_schema(DASHBOARD_DB)
gen_schema(PEGASUS_DB)

def fht(trec)
  case trec
  when RDL::Type::FiniteHashType
    trec
  else
    puts "GOT #{trec}"
    RDL::Globals.types[:bot]
  end
end


fetch_if_allowed_output = "{ id: Integer, studio_person_id: Integer, email: String, parent_email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: Time or DateTime, remember_created_at: Time or DateTime, sign_in_count: Integer, current_sign_in_at: Time or DateTime, last_sign_in_at: Time or DateTime, current_sign_in_ip: String, last_sign_in_ip: String, created_at: Time or DateTime, updated_at: Time or DateTime, username: String, provider: String, uid: String, admin: false or true, gender: String, name: String, locale: String, birthday: Date, user_type: String, school: String, full_address: String, school_info_id: Integer, total_lines: Integer, secret_picture_id: Integer, active: false or true, hashed_email: String, deleted_at: Time or DateTime, purged_at: Time or DateTime, secret_words: String, properties: String, invitation_token: String, invitation_created_at: Time or DateTime, invitation_sent_at: Time or DateTime, invitation_accepted_at: Time or DateTime, invitation_limit: Integer, invited_by_id: Integer, invited_by_type: String, invitations_count: Integer, terms_of_service_version: Integer, urm: false or true, races: String, primary_contact_info_id: Integer, path: String, age: String or Integer }"

user_record = "{ id: Integer, studio_person_id: Integer, email: String, parent_email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: Time or DateTime, remember_created_at: Time or DateTime, sign_in_count: Integer, current_sign_in_at: Time or DateTime, last_sign_in_at: Time or DateTime, current_sign_in_ip: String, last_sign_in_ip: String, created_at: Time or DateTime, updated_at: Time or DateTime, username: String, provider: String, uid: String, admin: false or true, gender: String, name: String, locale: String, birthday: Date, user_type: String, school: String, full_address: String, school_info_id: Integer, total_lines: Integer, secret_picture_id: Integer, active: false or true, hashed_email: String, deleted_at: Time or DateTime, purged_at: Time or DateTime, secret_words: String, properties: String, invitation_token: String, invitation_created_at: Time or DateTime, invitation_sent_at: Time or DateTime, invitation_accepted_at: Time or DateTime, invitation_limit: Integer, invited_by_id: Integer, invited_by_type: String, invitations_count: Integer, terms_of_service_version: Integer, urm: false or true, races: String, primary_contact_info_id: Integer } or { id: Integer, email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: Time or DateTime, remember_created_at: Time or DateTime, sign_in_count: Integer, current_sign_in_at: Time or DateTime, last_sign_in_at: Time or DateTime, current_sign_in_ip: String, last_sign_in_ip: String, created_at: Time or DateTime, updated_at: Time or DateTime, username: String, provider: String, uid: String, admin: false or true, gender: String, name: String, language: String, birthday: Date, parent_email: String, deleted_at: DateTime or Time, hashed_email: String, properties: String, user_type: String, school: String, full_address: String, address: String, city: String, state: String, zip: String, lat: Float, lon: Float, total_lines: Integer, secret_words: String, secret_picture_id: Integer, secret_word_1_id: Integer, secret_word_2_id: Integer }"

section_record = "{ id: Integer, user_id: Integer, name: String, created_at: Time or DateTime, updated_at: Time or DateTime, code: String, deleted_at: Time or DateTime, login_type: String, script_id: Integer, login_method: Integer, grade: String, admin_code: String, stage_extras: false or true, pairing_allowed: false or true, hidden: false or true, course_id: Integer, sharing_disabled: false or true, student_user_id: Integer, section_id: Integer, email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: Time or DateTime, remember_created_at: Time or DateTime, sign_in_count: Integer, current_sign_in_at: Time or DateTime, last_sign_in_at: Time or DateTime, current_sign_in_ip: String, last_sign_in_ip: String, username: String, provider: String, uid: String, admin: false or true, gender: String, language: String, birthday: Date, parent_email: String, hashed_email: String, properties: String, user_type: String, school: String, full_address: String, address: String, city: String, state: String, zip: String, lat: Float, lon: Float, total_lines: Integer, secret_words: String, secret_picture_id: Integer, secret_word_1_id: Integer, secret_word_2_id: Integer }"

student_record = "{ name: String, age: Integer, gender: String, birthday: Date, sharing_disabled: %bool, id: Integer, admin: %bool }"

#script_record = "{ id: Integer, name: String, created_at: Time or DateTime, updated_at: Time or DateTime, wrapup_video_id: Integer, hidden: %bool, trophies: %bool }"

script_record = "{ id: Integer, name: String, created_at: DateTime or Time, updated_at: DateTime or Time, wrapup_video_id: Integer, hidden: false or true, user_id: Integer, login_required: false or true, properties: String, new_name: String, family_name: String }"

storage_apps_record = "{ id: Integer, storage_id: Integer, value: String, updated_at: Time or DateTime, updated_ip: String, state: String, created_at: Time or DateTime, abuse_score: Integer, project_type: String, published_at: Time or DateTime, standalone: false or true, remix_parent_id: Integer }"

### non-type checked methods
RDL.type Dashboard, 'self.db', '() -> Sequel::Mysql2::Database', wrap: false
RDL.type Dashboard::User, 'initialize', '(``fht(targs[0])``) -> self', wrap: false
RDL.type Dashboard::User, :id, '() -> Integer', wrap: false
RDL.type Dashboard::User, :teacher?, "() -> %bool", wrap: false
RDL.type Object, :current_user_id, '() -> Integer', wrap: false
RDL.var_type Object, :@user_permissions, "Array<String>"
RDL.var_type Object, :@dashboard_user, "#{user_record}"
RDL.type Object, :tap, "() { (self) -> x } -> self"
RDL.type Object, :nil_or_empty?, "() -> %bool", wrap: false
RDL.type DashboardStudent, 'self.encrypt_password', "(String) -> String", wrap: false
RDL.type DashboardStudent, 'self.valid_gender?', "(String) -> %bool", wrap: false
RDL.type DashboardStudent, 'self.birthday_to_age', "(Date) -> Integer or String", wrap: false
RDL.type DashboardStudent, 'self.age_to_birthday', "(Integer or String) -> Date", wrap: false
RDL.type SecureRandom, 'self.random_number', "(Integer) -> Integer", wrap: false
RDL.type DashboardStudent, 'self.random_secret_words', "() -> String", wrap: false
RDL.type DashboardSection, 'self.valid_login_type?', "(String) -> %bool", wrap: false
RDL.type DashboardSection, 'self.valid_grade?', "(String) -> %bool", wrap: false
RDL.type DashboardSection, 'self.valid_course_id?', "(Integer) -> %bool", wrap: false
RDL.type DashboardSection, 'self.valid_script_id?', "(Integer, ?Integer) -> %bool", wrap: false
## I'm not sure how to have VarArg types for different kinds of Arrays. So in the meantime the below hack, which handles a specific number of args, will have to do.
RDL.type :Array, :zip, '(Array<u>, Array<v>, Array<w>, Array<x>) -> ``param = promoted_or_t(trec); RDL::Type::GenericType.new(RDL::Globals.types[:array], RDL::Type::TupleType.new(param, RDL::Globals.parser.scan_str("#T u"), RDL::Globals.parser.scan_str("#T v"), RDL::Globals.parser.scan_str("#T w"), RDL::Globals.parser.scan_str("#T x")))``', wrap: false
RDL.type DashboardSection, :to_member_hash, "() -> { id: Integer, location: String, name: String, login_type: String, grade: String, code: String, stage_extras: %bool, pairing_allowed: %bool, hidden: %bool }", wrap: false
RDL.type DashboardSection, :to_owner_hash, "() -> { id: Integer, location: String, name: String, login_type: String, grade: String, code: String, stage_extras: %bool, pairing_allowed: %bool, hidden: %bool, script: { id: Integer }, teachers: { id: Integer, location: String }, students: {}, studentCount: Integer }", wrap: false ## can get more precise
RDL.type DashboardSection, :initialize, "(%any) -> self", wrap: false
RDL.type Hash, :to_json, "() -> String", wrap: false
RDL.type UserHelpers, 'self.generate_username', "(%any, String) -> String", wrap: false ## can make more precise
RDL.var_type DashboardSection, :@row, section_record
RDL.type Object, :blank?, '() -> %bool', wrap: false
RDL.var_type DashboardCourseExperiments, :@@course_experiments, "Array<String>"
RDL.var_type DashboardCourseExperiments, :@@course_experiment_map, "%any"
RDL.var_type DashboardCourseExperiments, :@@course_experiment_map_last_update, "Integer or Time"
RDL.type Time, :+, "(Integer or Time) -> Time", wrap: false
RDL.type Time, :>, "(Time or Integer) -> %bool", wrap: false ## Integer can be an argument under rails
RDL.type CodeGeneration, 'self.random_unique_code', "({ length: Integer }) -> String", wrap: false
RDL.var_type DashboardSection, :@students, "{ }"
RDL.var_type DashboardSection, :@script, script_record
RDL.type DashboardSection, :member?, "(Integer) -> %bool", wrap: false
RDL.type I18n, 'self.locale', "() -> String", wrap: false
RDL.var_type DashboardSection, :@@script_cache, "Hash<String, Array<{ id: Integer, name: String, category: String, script_name: String, position: Integer, category_priority: Integer }>>"
RDL.type DashboardSection, 'self.assignable_info', "(%bool, { name: String, hidden: false or true, id: Integer }) -> { id: Integer, name: String, category: String, script_name: String, position: Integer, category_priority: Integer }", wrap: false ### HAD TO SWITCH ARG PLACES HERE
RDL.type Object, :rack_env?, "() -> Hash<Symbol, %bool>", wrap: false
RDL.type Object, 'self.rack_env?', "(Symbol) -> %bool", wrap: false
RDL.type Object, :get_sharing_disabled_from_properties, "(String) -> %bool", wrap: false
RDL.var_type StorageApps, :@storage_id, "Integer"
RDL.var_type StorageApps, :@table, "Table<#{storage_apps_record.chomp('}')}, __selected: nil, __last_joined: :storage_apps, __all_joined: :storage_apps, __orm: false}>"
RDL.type Object, :storage_encrypt_channel_id, "(Integer, Integer) -> String", wrap: false
RDL.type Object, :storage_decrypt_channel_id, "(Integer) -> [Integer, Integer]", wrap: false
RDL.type String, :to_json, "() -> String", wrap: false
RDL.type StorageApps, 'self.get_published_project_data', "(Integer, #{storage_apps_record}) -> {channel: Integer, name: String, thumbnailUrl: String, type: String, publishedAt: DateTime }", wrap: false ## HAD TO SWITCH ORDER OF ARGUMENTS
RDL.type UserHelpers, 'self.initial', "(String) -> String", wrap: false
RDL.type UserHelpers, 'self.age_range_from_birthday', "(DateTime) -> String", wrap: false
RDL.type Object, :user_storage_ids_table, "() -> ``Sequel::Mysql2::Database.gen_output_type([RDL::Type::SingletonType.new(:user_storage_ids)])``", wrap: false
RDL.type JSON, 'self.parse', "(String) -> Hash<String, %any>", wrap: false
RDL.var_type Dashboard::User, :@row, user_record


### type checked methods
RDL.type Dashboard, 'self.admin?', '(Integer) -> %bool', typecheck: :later, wrap: true
RDL.type Dashboard::User, 'self.get_with_deleted', '(Integer) -> Dashboard::User', typecheck: :later, wrap: false
RDL.type Dashboard::User, 'self.get', '(Integer) -> Dashboard::User', typecheck: :later, wrap: false
RDL.type Dashboard::User, :get_followed_bys, '(Array<Integer>) -> Array<Integer>', typecheck: :later, wrap: false
RDL.type Dashboard::User, :followed_by?, '(Integer) -> %bool', typecheck: :later, wrap: false
RDL.type Dashboard::User, :owned_sections, "() -> Array<{id: Integer}>", typecheck: :later, wrap: false
RDL.type Dashboard::User, :admin?, "() -> %bool", wrap: false, typecheck: :later
RDL.type Dashboard::User, :has_permission?, '(String) -> %bool', wrap: false, typecheck: :later
RDL.type Object, :teaches_student?, "(Integer, ?Integer) -> %bool", typecheck: :later, wrap: false
RDL.type Object, :owns_section?, "(Integer) -> %bool", typecheck: :later, wrap: false
RDL.type Object, :has_permission?, "(String) -> %bool", typecheck: :later, wrap: false
RDL.type Object, :current_user, "() -> User", wrap: false, typecheck: :later ## this one had the annotation error
RDL.type Object, :get_user_sharing_disabled, '(Integer) -> %bool', wrap: false, typecheck: :later
RDL.type DashboardStudent, 'self.fetch_user_students', "(Integer) -> Array<{ gender: String, user_type: String, hashed_email: String, secret_words: String, total_lines: Integer, birthday: Date, email: String, username: String, name: String, id: Integer }>", typecheck: :later, wrap: false ## "returns all users"
RDL.type DashboardStudent, 'self.fields', '() -> [:users__id___id,:users__name___name,:users__username___username,:users__email___email,:users__hashed_email___hashed_email,:users__user_type___user_type,:users__gender___gender,:users__birthday___birthday,:users__total_lines___total_lines,:users__secret_words___secret_words]', wrap: false, typecheck: :later
RDL.type DashboardSection, 'self.fields', '() -> [:sections__id___id,:sections__name___name,:sections__code___code,:sections__stage_extras___stage_extras,:sections__pairing_allowed___pairing_allowed,:sections__login_type___login_type,:sections__sharing_disabled___sharing_disabled,:sections__hidden___hidden,:sections__grade___grade,:sections__script_id___script_id,:sections__course_id___course_id,:sections__user_id___teacher_id]', wrap: false, typecheck: :later
RDL.type DashboardStudent, 'self.random_secrets', '() -> { secret_picture_id: Integer,secret_words: String }', wrap: false, typecheck: :later

RDL.type DashboardStudent, 'self.fetch_if_allowed', "(Integer, Integer) -> #{fetch_if_allowed_output}", typecheck: :later, wrap: false
## NOTE: I had to manually switch arg positions in "update_if_allowed" method because RDL doesn't allow FHT to appear as first arg.
RDL.type DashboardStudent, 'self.random_secret_picture_id', "() -> Integer", wrap: false, typecheck: :later
RDL.type DashboardStudent, 'self.update_if_allowed', "(Integer, { id: Integer, name: String, age: Integer, password: String, gender: String, secrets: String }) -> #{fetch_if_allowed_output}", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.update_if_owner', "({ id : Integer, user: #{user_record}, name: String, login_type: String, stage_extras: %bool, hidden: %bool, course_id: Integer, script: {id: Integer }, grade: String, pairing_allowed: %bool }) -> DashboardSection", typecheck: :later, wrap: false
RDL.type DashboardUserScript, 'self.assign_script_to_user', "(Integer, Integer) -> Integer", typecheck: :later, wrap: false
RDL.type DashboardUserScript, 'self.assign_script_to_users', "(Integer, Array<Integer>) -> Array<String>", typecheck: :later, wrap: false
RDL.type DashboardUserScript, 'self.assign_script_to_section', "(Integer, Integer) -> Array<String>", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.fetch_student_sections', "(Integer) -> Array<{ id: Integer, location: String, name: String, login_type: String, grade: String, code: String, stage_extras: false or true, pairing_allowed: false or true, hidden: false or true }>", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.fetch_user_sections', "(Integer) -> Array<{ id: Integer, location: String, name: String, login_type: String, grade: String, code: String, stage_extras: false or true, pairing_allowed: false or true, hidden: false or true, script: { id: Integer }, teachers: { id: Integer, location: String }, students: {}, studentCount: Integer }>", typecheck: :later, wrap: false
RDL.type DashboardSection, :add_student, "(#{student_record}) -> Integer", typecheck: :later, wrap: false
RDL.type DashboardSection, :add_students, "(Array<#{student_record}>) -> Array<Integer>", typecheck: :later, wrap: false
RDL.type DashboardSection, :remove_student, "(Integer) -> %bool", typecheck: :later, wrap: false
RDL.type DashboardStudent, 'self.create', "(#{student_record}) -> Integer", typecheck: :later, wrap: false
RDL.type DashboardCourseExperiments, 'self.course_experiments', "() -> Array<String>", typecheck: :later, wrap: false
RDL.type DashboardCourseExperiments, 'self.course_experiment_map', "() -> %any", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.create', "({user: { user_type: String, id: Integer }, name: String, login_type: String, grade: String, script: {id: Integer}, script_id: Integer, course_id: Integer, stage_extras: %bool, pairing_allowed: %bool }) -> Integer", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.delete_if_owner', "(Integer, Integer) -> { id: Integer, user_id: Integer, name: String, created_at: DateTime or Time, updated_at: DateTime or Time, code: String, script_id: Integer, course_id: Integer, grade: String, login_type: String, deleted_at: DateTime or Time, stage_extras: false or true, section_type: String, first_activity_at: DateTime or Time, pairing_allowed: false or true, sharing_disabled: false or true, hidden: false or true }", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.fetch_if_teacher', "(Integer, Integer) -> DashboardSection", typecheck: :later, wrap: false
#RDL.type DashboardSection, :students, "() -> {}", typecheck: :later, wrap: false ##TODO
RDL.type DashboardSection, :script, "() -> #{script_record}", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.fetch_if_allowed', "(Integer, Integer) -> DashboardSection", typecheck: :later, wrap: false
RDL.type DashboardStudent, 'self.random_secret_word', "() -> String", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.valid_default_scripts', "(Integer, %bool) -> {} or Array<{ id: Integer, name: String, category: String, script_name: String, position: Integer, category_priority: Integer }>", typecheck: :later, wrap: false ## TODO: FIGURE OUT IF USES OF THIS METHOD ARE OKAY
RDL.type StorageApps, :users_paired_on_level?, "(Integer, Integer, Integer, Integer) -> %bool", typecheck: :later, wrap: false
RDL.type StorageApps, :initialize, "(Integer) -> self", wrap: false, typecheck: :later
RDL.type StorageApps, :create, "(String, ip: String, type: ?String, published_at: ?DateTime, remix_parent_id: ?Integer) -> String", wrap: false, typecheck: :later
RDL.type StorageApps, :delete, "(Integer) -> true", wrap: false, typecheck: :later
RDL.type StorageApps, :publish, "(Integer, String, { name: String, birthday: DateTime }) -> { channel: Integer, name: String, thumbnailUrl: String, type: String, publishedAt: DateTime, studentName: { name: String, birthday: DateTime } or String, studentAgeRange: { name: String, birthday: DateTime } or String }", wrap: false, typecheck: :later
RDL.type StorageApps, :unpublish, "(Integer) -> Integer", wrap: false, typecheck: :later
RDL.type StorageApps, :get_abuse, "(Integer) -> Integer", wrap: false, typecheck: :later
RDL.type StorageApps, :get_sharing_disabled, "(Integer, Integer) -> %bool", wrap: false, typecheck: :later
RDL.type StorageApps, :increment_abuse, "(Integer) -> Integer", wrap: false, typecheck: :later
RDL.type StorageApps, :reset_abuse, "(Integer) -> Integer", wrap: false, typecheck: :later


RDL.do_typecheck :later


#### NOTE: Since first submitting paper, number of type casts has been revised down by 1, from 5 to 4.


