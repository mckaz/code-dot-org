require 'rdl'
RDL::Config.instance.number_mode = true
require 'types/core'
require 'types/sequel'
require 'types/active_record'
require_relative '../shared/middleware/helpers/auth_helpers.rb'
require_relative './record_types.rb'
require_relative './orig_types.rb'

#RDL::Config.instance.log_levels[:inference] = :debug
#RDL::Config.instance.log_levels[:typecheck] = :debug
#RDL::Config.instance.log_levels[:heuristic] = :trace




Rails.application.eager_load! ## load Rails app

RDL.nowrap ActiveRecord::Associations::ClassMethods if Object.const_defined?("ActiveRecord")

puts 'here we are!'


RDL.load_sequel_schema(DASHBOARD_DB)
RDL.load_sequel_schema(PEGASUS_DB)



## Methods to infer
## Methods located in ~/code-dot-org/pegasus/helper_modules/dashboard.rb
## Many of the below infer (String or Array<String>), where as original type just said String.
## Reason is either is accepted in queries like `where`.
RDL.infer Dashboard, 'self.admin?', time: :later
RDL.infer Dashboard::User, 'self.get_with_deleted', time: :later
RDL.infer Dashboard::User, 'self.get', time: :later
RDL.infer Dashboard::User, 'get_followed_bys', time: :later
RDL.infer Dashboard::User, 'followed_by?', time: :later
RDL.infer Dashboard::User, 'owned_sections', time: :later
RDL.infer Dashboard::User, :admin?, time: :later
RDL.infer Dashboard::User, :has_permission?, time: :later
## Methods located in ~/code-dot-org/shared/middleware/helpers/auth_helpers.rb
RDL.infer Object, :teaches_student?, time: :later
RDL.infer Object, :owns_section?, time: :later
RDL.infer Object, :has_permission?, time: :later ## infers %bot for arg type. Could be fixed with Bree's `include?` rule.
## method below HAD documentation error
RDL.infer Object, :current_user, time: :later
RDL.infer Object, :get_user_sharing_disabled, time: :later
## Methods located in ~/code-dot-org/pegasus/helpers/section_api_helpers.rb
RDL.infer DashboardStudent, 'self.fetch_user_students', time: :later 
RDL.infer DashboardStudent, 'self.fields', time: :later ## comes out as Array, original type is tuple. results from use of splat.
RDL.infer DashboardSection, 'self.fields', time: :later
RDL.infer DashboardStudent, 'self.random_secrets', time: :later
RDL.infer DashboardStudent, 'self.fetch_if_allowed', time: :later 
RDL.infer DashboardStudent, 'self.random_secret_picture_id', time: :later
RDL.infer DashboardStudent, 'self.update_if_allowed', time: :later
RDL.infer DashboardSection, 'self.update_if_owner', time: :later
RDL.infer DashboardUserScript, 'self.assign_script_to_user', time: :later
RDL.infer DashboardUserScript, 'self.assign_script_to_users', time: :later
RDL.infer DashboardUserScript, 'self.assign_script_to_section', time: :later
RDL.infer DashboardSection, 'self.fetch_if_allowed', time: :later
RDL.infer DashboardSection, 'self.fetch_student_sections', time: :later
RDL.infer DashboardSection, :add_student, time: :later
RDL.infer DashboardSection, :add_students, time: :later
RDL.infer DashboardSection, :remove_student, time: :later
RDL.infer DashboardStudent, 'self.create', time: :later
RDL.infer DashboardCourseExperiments, 'self.course_experiments', time: :later
RDL.infer DashboardCourseExperiments, 'self.course_experiment_map', time: :later
RDL.infer DashboardSection, 'self.create', time: :later
RDL.infer DashboardSection, 'self.delete_if_owner', time: :later
RDL.infer DashboardSection, 'self.fetch_if_teacher', time: :later
RDL.infer DashboardSection, :script, time: :later
RDL.infer DashboardStudent, 'self.random_secret_word', time: :later
RDL.infer DashboardSection, 'self.valid_default_scripts', time: :later ## got (%bot, %bot) for input types. One could be fixed if we treat all things in conditional position as bools. Other isn't used anywhere in body, could potentially use name though.
RDL.infer StorageApps, :users_paired_on_level?, time: :later
RDL.infer StorageApps, :initialize, time: :later
RDL.infer StorageApps, :create, time: :later ## takes default args
RDL.infer StorageApps, :delete, time: :later
RDL.infer StorageApps, :publish, time: :later
RDL.infer StorageApps, :unpublish, time: :later ## return type is more precise: it is nil, I said Integer
RDL.infer StorageApps, :get_abuse, time: :later
RDL.infer StorageApps, :get_sharing_disabled, time: :later
RDL.infer StorageApps, :increment_abuse, time: :later
RDL.infer StorageApps, :reset_abuse, time: :later
#49

# var types
#RDL.var_type Object, :@user_permissions, "Array<String>"
RDL.infer_var_type Object, :@user_permissions
#RDL.var_type Object, :@dashboard_user, "#{$user_record}"
RDL.infer_var_type Object, :@dashboard_user
#RDL.var_type DashboardSection, :@row, $section_record
RDL.infer_var_type DashboardSection, :@row
#RDL.var_type DashboardCourseExperiments, :@@course_experiments, "Array<String>"
RDL.infer_var_type DashboardCourseExperiments, :@@course_experiments
#RDL.var_type DashboardCourseExperiments, :@@course_experiment_map, "%any"
RDL.infer_var_type DashboardCourseExperiments, :@@course_experiment_map
#RDL.var_type DashboardCourseExperiments, :@@course_experiment_map_last_update, "Integer or Time"
RDL.infer_var_type DashboardCourseExperiments, :@@course_experiment_map_last_update
#RDL.var_type DashboardSection, :@script, $script_record
RDL.infer_var_type DashboardSection, :@script
#RDL.var_type DashboardSection, :@@script_cache, "Hash<String, Array<{ id: Integer, name: String, category: String, script_name: String, position: Integer, category_priority: Integer }>>"
RDL.infer_var_type DashboardSection, :@@script_cache
#RDL.var_type StorageApps, :@storage_id, "Integer"
RDL.infer_var_type StorageApps, :@storage_id
#RDL.var_type StorageApps, :@table, "Table<#{$storage_apps_record.chomp('}')}, __selected: nil, __last_joined: :storage_apps, __all_joined: :storage_apps, __orm: false}>"
RDL.infer_var_type StorageApps, :@table
#RDL.var_type Dashboard::User, :@row, $user_record
RDL.infer_var_type Dashboard::User, :@row


### Annotations for variables and non-checked methods. These methods come from code.org or external libraries.
RDL.type Dashboard, 'self.db', '() -> Sequel::Mysql2::Database', wrap: false
#RDL.type Dashboard::User, 'initialize', '(``fht(targs[0])``) -> self', wrap: false
RDL.infer Dashboard::User, 'initialize', time: :later
#RDL.type Dashboard::User, :id, '() -> Integer', wrap: false
RDL.infer Dashboard::User, :id, time: :later
#RDL.type Dashboard::User, :teacher?, "() -> %bool", wrap: false
RDL.infer Dashboard::User, :teacher?, time: :later
#RDL.type Object, :current_user_id, '() -> Integer', wrap: false
RDL.infer Object, :current_user_id, time: :later
## above relies on this
RDL.infer_var_type Object, :@request

#RDL.type DashboardStudent, 'self.encrypt_password', "(String) -> String", wrap: false
RDL.infer DashboardStudent, 'self.encrypt_password', time: :later
#RDL.type DashboardStudent, 'self.valid_gender?', "(String) -> %bool", wrap: false
RDL.infer DashboardStudent, 'self.valid_gender?', time: :later
#RDL.type DashboardStudent, 'self.birthday_to_age', "(Date) -> Integer or String", wrap: false
RDL.infer DashboardStudent, 'self.birthday_to_age', time: :later
#RDL.type DashboardStudent, 'self.age_to_birthday', "(Integer or String) -> Date", wrap: false
RDL.infer DashboardStudent, 'self.age_to_birthday', time: :later
#RDL.type DashboardStudent, 'self.random_secret_words', "() -> String", wrap: false
RDL.infer DashboardStudent, 'self.random_secret_words', time: :later
#RDL.type DashboardSection, 'self.valid_login_type?', "(String) -> %bool", wrap: false
RDL.infer DashboardSection, 'self.valid_login_type?', time: :later
#RDL.type DashboardSection, 'self.valid_grade?', "(String) -> %bool", wrap: false
RDL.infer DashboardSection, 'self.valid_grade?', time: :later
#RDL.type DashboardSection, 'self.valid_course_id?', "(Integer) -> %bool", wrap: false
RDL.infer DashboardSection, 'self.valid_course_id?', time: :later
#RDL.type DashboardSection, 'self.valid_script_id?', "(Integer, ?Integer) -> %bool", wrap: false
RDL.infer DashboardSection, 'self.valid_script_id?', time: :later

#RDL.type DashboardSection, :to_member_hash, "() -> { id: Integer, location: String, name: String, login_type: String, grade: String, code: String, stage_extras: %bool, pairing_allowed: %bool, hidden: %bool }", wrap: false
RDL.infer DashboardSection, :to_member_hash, time: :later
#RDL.type DashboardSection, :to_owner_hash, "() -> { id: Integer, location: String, name: String, login_type: String, grade: String, code: String, stage_extras: %bool, pairing_allowed: %bool, hidden: %bool, script: { id: Integer }, teachers: { id: Integer, location: String }, students: {}, studentCount: Integer }", wrap: false 
RDL.infer DashboardSection, :to_owner_hash, time: :later
#RDL.type DashboardSection, :initialize, "(%any) -> self", wrap: false
RDL.infer DashboardSection, :initialize, time: :later
#RDL.type UserHelpers, 'self.generate_username', "(%any, String) -> String", wrap: false
RDL.infer UserHelpers, 'self.generate_username', time: :later
#RDL.type DashboardSection, :member?, "(Integer) -> %bool", wrap: false
RDL.infer DashboardSection, :member?, time: :later
#RDL.type DashboardSection, 'self.assignable_info', "(%bool, { name: String, hidden: false or true, id: Integer }) -> { id: Integer, name: String, category: String, script_name: String, position: Integer, category_priority: Integer }", wrap: false 
RDL.infer DashboardSection, 'self.assignable_info', time: :later
#RDL.type Object, :get_sharing_disabled_from_properties, "(String) -> %bool", wrap: false
RDL.infer Object, :get_sharing_disabled_from_properties, time: :later
#RDL.type Object, :storage_encrypt_channel_id, "(Integer, Integer) -> String", wrap: false
RDL.infer Object, :storage_encrypt_channel_id, time: :later
#RDL.type Object, :storage_decrypt_channel_id, "(Integer) -> [Integer, Integer]", wrap: false
RDL.infer Object, :storage_decrypt_channel_id, time: :later
#RDL.type StorageApps, 'self.get_published_project_data', "(Integer, #{$storage_apps_record}) -> {channel: Integer, name: String, thumbnailUrl: String, type: String, publishedAt: DateTime }", wrap: false 
RDL.infer StorageApps, 'self.get_published_project_data', time: :later
#RDL.type UserHelpers, 'self.initial', "(String) -> String", wrap: false
RDL.infer UserHelpers, 'self.initial', time: :later
#RDL.type UserHelpers, 'self.age_range_from_birthday', "(DateTime) -> String", wrap: false
RDL.infer UserHelpers, 'self.age_range_from_birthday', time: :later
#RDL.type Object, :user_storage_ids_table, "() -> ``Sequel::Mysql2::Database.gen_output_type(RDL::Type::SingletonType.new(:user_storage_ids))``", wrap: false
RDL.infer Object, :user_storage_ids_table, time: :later




#RDL.type Object, :rack_env?, "() -> Hash<Symbol, %bool>", wrap: false
#RDL.type Object, 'self.rack_env?', "(Symbol) -> %bool", wrap: false


RDL.type Object, :tap, "() { (self) -> x } -> self"
RDL.type Object, :nil_or_empty?, "() -> %bool", wrap: false
RDL.type SecureRandom, 'self.random_number', "(Integer) -> Integer", wrap: false
RDL.type :Array, :zip, '(Array<u>, Array<v>, Array<w>, Array<x>) -> ``param = promoted_or_t(trec); RDL::Type::GenericType.new(RDL::Globals.types[:array], RDL::Type::TupleType.new(param, RDL::Globals.parser.scan_str("#T u"), RDL::Globals.parser.scan_str("#T v"), RDL::Globals.parser.scan_str("#T w"), RDL::Globals.parser.scan_str("#T x")))``', wrap: false
RDL.type Hash, :to_json, "() -> String", wrap: false
RDL.type Object, :blank?, '() -> %bool', wrap: false
RDL.type Time, :+, "(Integer or Time) -> Time", wrap: false
RDL.type Time, :>, "(Time or Integer) -> %bool", wrap: false 
#RDL.type CodeGeneration, 'self.random_unique_code', "({ length: Integer }) -> String", wrap: false
RDL.type I18n, 'self.locale', "() -> String", wrap: false
RDL.type String, :to_json, "() -> String", wrap: false
RDL.type JSON, 'self.parse', "(String) -> Hash<String, Object>", wrap: false
RDL.type I18n, 'self.t', "(String, ?Hash<Symbol, String>) -> String", wrap: false ## uses keyrest argument, which is not currently supported for inference, so we must write a type for it.

def fht(trec)
  case trec
  when RDL::Type::FiniteHashType
    trec
  else
    RDL::Globals.types[:bot]
  end
end




RDL.do_infer :later, num_times: 1

