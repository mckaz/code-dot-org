Kernel.silence_warnings {
  require 'rdl'
  require 'types/core'
  require_relative '../db-types/sequel/db_types.rb'
  #require_relative '../db_type_check/sequel_types.rb'
  require_relative './shared/middleware/helpers/auth_helpers.rb'
  require 'date'

  ## The file below defines global vars for some commonly used finite hash types. These types are long and get used multiple times, so we've factored them out below.
  require_relative './record_types.rb'

  ## The file below builds a schema model used during type checking.
  require_relative './build_schema.rb'

}


### Annotations for type checked methods.
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
## Method below had documentation error.
RDL.type Object, :current_user, "() -> User", wrap: false, typecheck: :later 
RDL.type Object, :get_user_sharing_disabled, '(Integer) -> %bool', wrap: false, typecheck: :later
RDL.type DashboardStudent, 'self.fetch_user_students', "(Integer) -> Array<{ gender: String, user_type: String, hashed_email: String, secret_words: String, total_lines: Integer, birthday: Date, email: String, username: String, name: String, id: Integer }>", typecheck: :later, wrap: false 
RDL.type DashboardStudent, 'self.fields', '() -> [:users__id___id,:users__name___name,:users__username___username,:users__email___email,:users__hashed_email___hashed_email,:users__user_type___user_type,:users__gender___gender,:users__birthday___birthday,:users__total_lines___total_lines,:users__secret_words___secret_words]', wrap: false, typecheck: :later
RDL.type DashboardSection, 'self.fields', '() -> [:sections__id___id,:sections__name___name,:sections__code___code,:sections__stage_extras___stage_extras,:sections__pairing_allowed___pairing_allowed,:sections__login_type___login_type,:sections__sharing_disabled___sharing_disabled,:sections__hidden___hidden,:sections__grade___grade,:sections__script_id___script_id,:sections__course_id___course_id,:sections__user_id___teacher_id]', wrap: false, typecheck: :later
RDL.type DashboardStudent, 'self.random_secrets', '() -> { secret_picture_id: Integer,secret_words: String }', wrap: false, typecheck: :later

RDL.type DashboardStudent, 'self.fetch_if_allowed', "(Integer, Integer) -> #{$fetch_if_allowed_output}", typecheck: :later, wrap: false
RDL.type DashboardStudent, 'self.random_secret_picture_id', "() -> Integer", wrap: false, typecheck: :later
RDL.type DashboardStudent, 'self.update_if_allowed', "(Integer, { id: Integer, name: String, age: Integer, password: String, gender: String, secrets: String }) -> #{$fetch_if_allowed_output}", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.update_if_owner', "({ id : Integer, user: #{$user_record}, name: String, login_type: String, stage_extras: %bool, hidden: %bool, course_id: Integer, script: {id: Integer }, grade: String, pairing_allowed: %bool }) -> DashboardSection", typecheck: :later, wrap: false
RDL.type DashboardUserScript, 'self.assign_script_to_user', "(Integer, Integer) -> Integer", typecheck: :later, wrap: false
RDL.type DashboardUserScript, 'self.assign_script_to_users', "(Integer, Array<Integer>) -> Array<String>", typecheck: :later, wrap: false
RDL.type DashboardUserScript, 'self.assign_script_to_section', "(Integer, Integer) -> Array<String>", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.fetch_student_sections', "(Integer) -> Array<{ id: Integer, location: String, name: String, login_type: String, grade: String, code: String, stage_extras: false or true, pairing_allowed: false or true, hidden: false or true }>", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.fetch_user_sections', "(Integer) -> Array<{ id: Integer, location: String, name: String, login_type: String, grade: String, code: String, stage_extras: false or true, pairing_allowed: false or true, hidden: false or true, script: { id: Integer }, teachers: { id: Integer, location: String }, students: {}, studentCount: Integer }>", typecheck: :later, wrap: false
RDL.type DashboardSection, :add_student, "(#{$student_record}) -> Integer", typecheck: :later, wrap: false
RDL.type DashboardSection, :add_students, "(Array<#{$student_record}>) -> Array<Integer>", typecheck: :later, wrap: false
RDL.type DashboardSection, :remove_student, "(Integer) -> %bool", typecheck: :later, wrap: false
RDL.type DashboardStudent, 'self.create', "(#{$student_record}) -> Integer", typecheck: :later, wrap: false
RDL.type DashboardCourseExperiments, 'self.course_experiments', "() -> Array<String>", typecheck: :later, wrap: false
RDL.type DashboardCourseExperiments, 'self.course_experiment_map', "() -> %any", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.create', "({user: { user_type: String, id: Integer }, name: String, login_type: String, grade: String, script: {id: Integer}, script_id: Integer, course_id: Integer, stage_extras: %bool, pairing_allowed: %bool }) -> Integer", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.delete_if_owner', "(Integer, Integer) -> { id: Integer, user_id: Integer, name: String, created_at: DateTime or Time, updated_at: DateTime or Time, code: String, script_id: Integer, course_id: Integer, grade: String, login_type: String, deleted_at: DateTime or Time, stage_extras: false or true, section_type: String, first_activity_at: DateTime or Time, pairing_allowed: false or true, sharing_disabled: false or true, hidden: false or true }", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.fetch_if_teacher', "(Integer, Integer) -> DashboardSection", typecheck: :later, wrap: false
RDL.type DashboardSection, :script, "() -> #{$script_record}", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.fetch_if_allowed', "(Integer, Integer) -> DashboardSection", typecheck: :later, wrap: false
RDL.type DashboardStudent, 'self.random_secret_word', "() -> String", typecheck: :later, wrap: false
RDL.type DashboardSection, 'self.valid_default_scripts', "(Integer, %bool) -> {} or Array<{ id: Integer, name: String, category: String, script_name: String, position: Integer, category_priority: Integer }>", typecheck: :later, wrap: false 
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



### Annotations for variables and non-checked methods. These methods come from code.org or external libraries.
RDL.type Dashboard, 'self.db', '() -> Sequel::Mysql2::Database', wrap: false
RDL.type Dashboard::User, 'initialize', '(``fht(targs[0])``) -> self', wrap: false
RDL.type Dashboard::User, :id, '() -> Integer', wrap: false
RDL.type Dashboard::User, :teacher?, "() -> %bool", wrap: false
RDL.type Object, :current_user_id, '() -> Integer', wrap: false
RDL.var_type Object, :@user_permissions, "Array<String>"
RDL.var_type Object, :@dashboard_user, "#{$user_record}"
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
RDL.type :Array, :zip, '(Array<u>, Array<v>, Array<w>, Array<x>) -> ``param = promoted_or_t(trec); RDL::Type::GenericType.new(RDL::Globals.types[:array], RDL::Type::TupleType.new(param, RDL::Globals.parser.scan_str("#T u"), RDL::Globals.parser.scan_str("#T v"), RDL::Globals.parser.scan_str("#T w"), RDL::Globals.parser.scan_str("#T x")))``', wrap: false
RDL.type DashboardSection, :to_member_hash, "() -> { id: Integer, location: String, name: String, login_type: String, grade: String, code: String, stage_extras: %bool, pairing_allowed: %bool, hidden: %bool }", wrap: false
RDL.type DashboardSection, :to_owner_hash, "() -> { id: Integer, location: String, name: String, login_type: String, grade: String, code: String, stage_extras: %bool, pairing_allowed: %bool, hidden: %bool, script: { id: Integer }, teachers: { id: Integer, location: String }, students: {}, studentCount: Integer }", wrap: false 
RDL.type DashboardSection, :initialize, "(%any) -> self", wrap: false
RDL.type Hash, :to_json, "() -> String", wrap: false
RDL.type UserHelpers, 'self.generate_username', "(%any, String) -> String", wrap: false 
RDL.var_type DashboardSection, :@row, $section_record
RDL.type Object, :blank?, '() -> %bool', wrap: false
RDL.var_type DashboardCourseExperiments, :@@course_experiments, "Array<String>"
RDL.var_type DashboardCourseExperiments, :@@course_experiment_map, "%any"
RDL.var_type DashboardCourseExperiments, :@@course_experiment_map_last_update, "Integer or Time"
RDL.type Time, :+, "(Integer or Time) -> Time", wrap: false
RDL.type Time, :>, "(Time or Integer) -> %bool", wrap: false 
RDL.type CodeGeneration, 'self.random_unique_code', "({ length: Integer }) -> String", wrap: false
RDL.var_type DashboardSection, :@students, "{ }"
RDL.var_type DashboardSection, :@script, $script_record
RDL.type DashboardSection, :member?, "(Integer) -> %bool", wrap: false
RDL.type I18n, 'self.locale', "() -> String", wrap: false
RDL.var_type DashboardSection, :@@script_cache, "Hash<String, Array<{ id: Integer, name: String, category: String, script_name: String, position: Integer, category_priority: Integer }>>"
RDL.type DashboardSection, 'self.assignable_info', "(%bool, { name: String, hidden: false or true, id: Integer }) -> { id: Integer, name: String, category: String, script_name: String, position: Integer, category_priority: Integer }", wrap: false 
RDL.type Object, :rack_env?, "() -> Hash<Symbol, %bool>", wrap: false
RDL.type Object, 'self.rack_env?', "(Symbol) -> %bool", wrap: false
RDL.type Object, :get_sharing_disabled_from_properties, "(String) -> %bool", wrap: false
RDL.var_type StorageApps, :@storage_id, "Integer"
RDL.var_type StorageApps, :@table, "Table<#{$storage_apps_record.chomp('}')}, __selected: nil, __last_joined: :storage_apps, __all_joined: :storage_apps, __orm: false}>"
RDL.type Object, :storage_encrypt_channel_id, "(Integer, Integer) -> String", wrap: false
RDL.type Object, :storage_decrypt_channel_id, "(Integer) -> [Integer, Integer]", wrap: false
RDL.type String, :to_json, "() -> String", wrap: false
RDL.type StorageApps, 'self.get_published_project_data', "(Integer, #{$storage_apps_record}) -> {channel: Integer, name: String, thumbnailUrl: String, type: String, publishedAt: DateTime }", wrap: false 
RDL.type UserHelpers, 'self.initial', "(String) -> String", wrap: false
RDL.type UserHelpers, 'self.age_range_from_birthday', "(DateTime) -> String", wrap: false
RDL.type Object, :user_storage_ids_table, "() -> ``Sequel::Mysql2::Database.gen_output_type(RDL::Type::SingletonType.new(:user_storage_ids))``", wrap: false
RDL.type JSON, 'self.parse', "(String) -> Hash<String, %any>", wrap: false
RDL.var_type Dashboard::User, :@row, $user_record




## Call to `do_typecheck` will type check all methods above with :later tag.
## The second argument is optional and is used for printing configurations.
RDL.do_typecheck :later, (ENV["NODYNCHECK"] || ENV["TYPECHECK"])






