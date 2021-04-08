# typed: strong
class [s]Dashboard
  # RDL Type: ((Array<Number> or Number)) -> (false or true)
  sig { params(user_id: T.any(T::Array[Integer], Integer)).returns(T.any(FalseClass, TrueClass)) }
  def admin?(user_id); end

  class User
    # RDL Type: ((Array<Number> or Number)) -> Dashboard::User
    sig { params(user_id: T.any(T::Array[Integer], Integer)).returns(Dashboard::User) }
    def get_with_deleted(user_id); end

    # RDL Type: ((Array<Number> or Number)) -> Dashboard::User
    sig { params(user_id: T.any(T::Array[Integer], Integer)).returns(Dashboard::User) }
    def get(user_id); end
  end
end

module Dashboard
  class User
    # RDL Type: ((Array<Number> or Number)) -> Array<Number>
    sig { params(other_user_ids: T.any(T::Array[Integer], Integer)).returns(T::Array[Integer]) }
    def get_followed_bys(other_user_ids); end

    # RDL Type: ((Array<Number> or Number)) -> (false or true)
    sig { params(other_user_id: T.any(T::Array[Integer], Integer)).returns(T.any(FalseClass, TrueClass)) }
    def followed_by?(other_user_id); end

    # RDL Type: () -> Array<{ id: Number }>
    sig { returns(T::Array[T::Hash[Symbol, Integer]]) }
    def owned_sections; end

    # RDL Type: () -> (false or true)
    sig { returns(T.any(FalseClass, TrueClass)) }
    def admin?; end

    # RDL Type: ((Array<String> or String)) -> (false or true)
    sig { params(permission: T.any(T::Array[String], String)).returns(T.any(FalseClass, TrueClass)) }
    def has_permission?(permission); end

    # RDL Type: ({ id: Number, studio_person_id: Number, email: String, parent_email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: (DateTime or Time), remember_created_at: (DateTime or Time), sign_in_count: Number, current_sign_in_at: (DateTime or Time), last_sign_in_at: (DateTime or Time), current_sign_in_ip: String, last_sign_in_ip: String, created_at: (DateTime or Time), updated_at: (DateTime or Time), username: String, provider: String, uid: String, admin: (false or true), gender: String, name: String, locale: String, birthday: Date, user_type: String, school: String, full_address: String, school_info_id: Number, total_lines: Number, secret_picture_id: Number, active: (false or true), hashed_email: String, deleted_at: (DateTime or Time), purged_at: (DateTime or Time), secret_words: String, properties: String, invitation_token: String, invitation_created_at: (DateTime or Time), invitation_sent_at: (DateTime or Time), invitation_accepted_at: (DateTime or Time), invitation_limit: Number, invited_by_id: Number, invited_by_type: String, invitations_count: Number, terms_of_service_version: Number, urm: (false or true), races: String, primary_contact_info_id: Number }) -> self
    sig { params(user_row: T::Hash[Symbol, T.any(Date, FalseClass, Integer, String, Time, TrueClass)]).returns(T.self_type) }
    def initialize(user_row); end

    # RDL Type: () -> Number
    sig { returns(Integer) }
    def id; end

    # RDL Type: () -> (false or true)
    sig { returns(T.any(FalseClass, TrueClass)) }
    def teacher?; end
  end
end

class Object
  # RDL Type: ((Array<Number> or Number), ?((Array<Number> or Number))) -> (false or true)
  sig { params(student_id: T.any(T::Array[Integer], Integer), user_id: T.any(T::Array[Integer], Integer)).returns(T.any(FalseClass, TrueClass)) }
  def teaches_student?(student_id, user_id = nil); end

  # RDL Type: ((Array<Number> or Number)) -> (false or true)
  sig { params(section_id: T.any(T::Array[Integer], Integer)).returns(T.any(FalseClass, TrueClass)) }
  def owns_section?(section_id); end

  # RDL Type: (String) -> (false or true)
  sig { params(permission: String).returns(T.any(FalseClass, TrueClass)) }
  def has_permission?(permission); end

  # RDL Type: () -> { id: Number, studio_person_id: Number, email: String, parent_email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: (DateTime or Time), remember_created_at: (DateTime or Time), sign_in_count: Number, current_sign_in_at: (DateTime or Time), last_sign_in_at: (DateTime or Time), current_sign_in_ip: String, last_sign_in_ip: String, created_at: (DateTime or Time), updated_at: (DateTime or Time), username: String, provider: String, uid: String, admin: (false or true), gender: String, name: String, locale: String, birthday: Date, user_type: String, school: String, full_address: String, school_info_id: Number, total_lines: Number, secret_picture_id: Number, active: (false or true), hashed_email: String, deleted_at: (DateTime or Time), purged_at: (DateTime or Time), secret_words: String, properties: String, invitation_token: String, invitation_created_at: (DateTime or Time), invitation_sent_at: (DateTime or Time), invitation_accepted_at: (DateTime or Time), invitation_limit: Number, invited_by_id: Number, invited_by_type: String, invitations_count: Number, terms_of_service_version: Number, urm: (false or true), races: String, primary_contact_info_id: Number }
  sig { returns(T::Hash[Symbol, T.any(Date, FalseClass, Integer, String, Time, TrueClass)]) }
  def current_user; end

  # RDL Type: ((Array<Number> or Number)) -> (false or true)
  sig { params(user_id: T.any(T::Array[Integer], Integer)).returns(T.any(FalseClass, TrueClass)) }
  def get_user_sharing_disabled(user_id); end

  # RDL Type: () -> nil
  sig { void }
  def current_user_id; end

  # RDL Type: (String) -> (false or true)
  sig { params(properties: String).returns(T.any(FalseClass, TrueClass)) }
  def get_sharing_disabled_from_properties(properties); end

  # RDL Type: (Number, Number) -> String
  sig { params(storage_id: Integer, channel_id: Integer).returns(String) }
  def storage_encrypt_channel_id(storage_id, channel_id); end

  # RDL Type: (String) -> [XXX, XXX]
  sig { params(encrypted: String).returns(T::Array[T.untyped]) }
  def storage_decrypt_channel_id(encrypted); end

  # RDL Type: () -> Table<{ id: Number, user_id: Number, __selected: nil, __last_joined: :user_storage_ids, __all_joined: :user_storage_ids, __orm: false }>
  sig { returns(Table[T::Hash[Symbol, T.any(FalseClass, NilClass, Integer, Symbol)]]) }
  def user_storage_ids_table; end
end

class [s]DashboardStudent
  # RDL Type: ((Array<Number> or Number)) -> Array<{ id: Number, user_id: Number, name: String, created_at: (DateTime or Time), updated_at: (DateTime or Time), code: String, script_id: Number, course_id: Number, grade: String, login_type: String, deleted_at: (DateTime or Time), stage_extras: (false or true), section_type: String, first_activity_at: (DateTime or Time), pairing_allowed: (false or true), sharing_disabled: (false or true), hidden: (false or true), student_user_id: Number, section_id: Number, studio_person_id: Number, email: String, parent_email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: (DateTime or Time), remember_created_at: (DateTime or Time), sign_in_count: Number, current_sign_in_at: (DateTime or Time), last_sign_in_at: (DateTime or Time), current_sign_in_ip: String, last_sign_in_ip: String, username: String, provider: String, uid: String, admin: (false or true), gender: String, locale: String, birthday: Date, user_type: String, school: String, full_address: String, school_info_id: Number, total_lines: Number, secret_picture_id: Number, active: (false or true), hashed_email: String, purged_at: (DateTime or Time), secret_words: String, properties: String, invitation_token: String, invitation_created_at: (DateTime or Time), invitation_sent_at: (DateTime or Time), invitation_accepted_at: (DateTime or Time), invitation_limit: Number, invited_by_id: Number, invited_by_type: String, invitations_count: Number, terms_of_service_version: Number, urm: (false or true), races: String, primary_contact_info_id: Number }>
  sig { params(user_id: T.any(T::Array[Integer], Integer)).returns(T::Array[T::Hash[Symbol, T.any(Date, FalseClass, Integer, String, Time, TrueClass)]]) }
  def fetch_user_students(user_id); end

  # RDL Type: () -> [:users__id___id, :users__name___name, :users__username___username, :users__email___email, :users__hashed_email___hashed_email, :users__user_type___user_type, :users__gender___gender, :users__birthday___birthday, :users__total_lines___total_lines, :users__secret_words___secret_words]
  sig { returns(T::Array[Symbol]) }
  def fields; end

  # RDL Type: () -> Hash<Symbol, (XXX or XXX)>
  sig { returns(T::Hash[Symbol, T.untyped]) }
  def random_secrets; end

  # RDL Type: ((Array<Number> or Number), (Array<Number> or Number)) -> { id: Number, studio_person_id: Number, email: String, parent_email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: (DateTime or Time), remember_created_at: (DateTime or Time), sign_in_count: Number, current_sign_in_at: (DateTime or Time), last_sign_in_at: (DateTime or Time), current_sign_in_ip: String, last_sign_in_ip: String, created_at: (DateTime or Time), updated_at: (DateTime or Time), username: String, provider: String, uid: String, admin: (false or true), gender: String, name: String, locale: String, birthday: Date, user_type: String, school: String, full_address: String, school_info_id: Number, total_lines: Number, secret_picture_id: Number, active: (false or true), hashed_email: String, deleted_at: (DateTime or Time), purged_at: (DateTime or Time), secret_words: String, properties: String, invitation_token: String, invitation_created_at: (DateTime or Time), invitation_sent_at: (DateTime or Time), invitation_accepted_at: (DateTime or Time), invitation_limit: Number, invited_by_id: Number, invited_by_type: String, invitations_count: Number, terms_of_service_version: Number, urm: (false or true), races: String, primary_contact_info_id: Number, path: String, age: XXX }
  sig { params(id: T.any(T::Array[Integer], Integer), dashboard_user_id: T.any(T::Array[Integer], Integer)).returns(T.untyped) }
  def fetch_if_allowed(id, dashboard_user_id); end

  # RDL Type: () -> %any
  sig { returns(T.nilable(BasicObject)) }
  def random_secret_picture_id; end

  # RDL Type: (([ []: (:age) -> XXX ] and [ []: (:gender) -> XXX ] and [ []: (:id) -> XXX ] and [ []: (:name) -> XXX ] and [ []: (:password) -> XXX ] and [ []: (:secrets) -> XXX ]), (Array<Number> or Number)) -> { id: Number, studio_person_id: Number, email: String, parent_email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: (DateTime or Time), remember_created_at: (DateTime or Time), sign_in_count: Number, current_sign_in_at: (DateTime or Time), last_sign_in_at: (DateTime or Time), current_sign_in_ip: String, last_sign_in_ip: String, created_at: (DateTime or Time), updated_at: (DateTime or Time), username: String, provider: String, uid: String, admin: (false or true), gender: String, name: String, locale: String, birthday: Date, user_type: String, school: String, full_address: String, school_info_id: Number, total_lines: Number, secret_picture_id: Number, active: (false or true), hashed_email: String, deleted_at: (DateTime or Time), purged_at: (DateTime or Time), secret_words: String, properties: String, invitation_token: String, invitation_created_at: (DateTime or Time), invitation_sent_at: (DateTime or Time), invitation_accepted_at: (DateTime or Time), invitation_limit: Number, invited_by_id: Number, invited_by_type: String, invitations_count: Number, terms_of_service_version: Number, urm: (false or true), races: String, primary_contact_info_id: Number, path: String, age: XXX }
  sig { params(params: T.untyped, dashboard_user_id: T.any(T::Array[Integer], Integer)).returns(T.untyped) }
  def update_if_allowed(params, dashboard_user_id); end

  # RDL Type: (([ []: (:age) -> XXX ] and [ []: (:birthday) -> XXX ] and [ []: (:gender) -> XXX ] and [ []: (:name) -> XXX ] and [ []: (:sharing_disabled) -> XXX ])) -> Number
  sig { params(params: T.untyped).returns(Integer) }
  def create(params); end

  # RDL Type: () -> String
  sig { returns(String) }
  def random_secret_word; end

  # RDL Type: (String) -> String
  sig { params(password: String).returns(String) }
  def encrypt_password(password); end

  # RDL Type: (String) -> (false or true)
  sig { params(gender: String).returns(T.any(FalseClass, TrueClass)) }
  def valid_gender?(gender); end

  # RDL Type: ([ nil?: () -> XXX ]) -> (Number or String)
  sig { params(birthday: T.untyped).returns(T.any(Integer, String)) }
  def birthday_to_age(birthday); end

  # RDL Type: (([ *: (Number) -> XXX ] and [ ==: (Number) -> (false or true) ] and [ to_i: () -> Number ])) -> %any
  sig { params(age: T.untyped).returns(T.nilable(BasicObject)) }
  def age_to_birthday(age); end

  # RDL Type: () -> String
  sig { returns(String) }
  def random_secret_words; end
end

class [s]DashboardSection
  # RDL Type: () -> [:sections__id___id, :sections__name___name, :sections__code___code, :sections__stage_extras___stage_extras, :sections__pairing_allowed___pairing_allowed, :sections__login_type___login_type, :sections__sharing_disabled___sharing_disabled, :sections__hidden___hidden, :sections__grade___grade, :sections__script_id___script_id, :sections__course_id___course_id, :sections__user_id___teacher_id]
  sig { returns(T::Array[Symbol]) }
  def fields; end

  # RDL Type: (([ []: (:course_id) -> XXX ] and [ []: (:grade) -> XXX ] and [ []: (:hidden) -> XXX ] and [ []: (:id) -> XXX ] and [ []: (:login_type) -> XXX ] and [ []: (:name) -> XXX ] and [ []: (:pairing_allowed) -> XXX ] and [ []: (:script) -> XXX ] and [ []: (:script_id) -> XXX ] and [ []: (:stage_extras) -> XXX ] and [ []: (:user) -> XXX ])) -> DashboardSection
  sig { params(params: T.untyped).returns(DashboardSection) }
  def update_if_owner(params); end

  # RDL Type: ((Array<Number> or Number), (Array<Number> or Number)) -> DashboardSection
  sig { params(id: T.any(T::Array[Integer], Integer), user_id: T.any(T::Array[Integer], Integer)).returns(DashboardSection) }
  def fetch_if_allowed(id, user_id); end

  # RDL Type: ((Array<Number> or Number)) -> Array<{ id: XXX, location: String, name: XXX, login_type: XXX, grade: XXX, code: XXX, stage_extras: XXX, pairing_allowed: XXX, hidden: XXX }>
  sig { params(student_id: T.any(T::Array[Integer], Integer)).returns(T::Array[T.untyped]) }
  def fetch_student_sections(student_id); end

  # RDL Type: (([ []: (:course_id) -> XXX ] and [ []: (:grade) -> XXX ] and [ []: (:login_type) -> XXX ] and [ []: (:name) -> XXX ] and [ []: (:pairing_allowed) -> XXX ] and [ []: (:script) -> XXX ] and [ []: (:script_id) -> XXX ] and [ []: (:stage_extras) -> XXX ] and [ []: (:user) -> XXX ])) -> Number
  sig { params(params: T.untyped).returns(Integer) }
  def create(params); end

  # RDL Type: ((Array<Number> or Number), (Array<Number> or Number)) -> { id: Number, user_id: Number, name: String, created_at: (DateTime or Time), updated_at: (DateTime or Time), code: String, script_id: Number, course_id: Number, grade: String, login_type: String, deleted_at: (DateTime or Time), stage_extras: (false or true), section_type: String, first_activity_at: (DateTime or Time), pairing_allowed: (false or true), sharing_disabled: (false or true), hidden: (false or true) }
  sig { params(id: T.any(T::Array[Integer], Integer), user_id: T.any(T::Array[Integer], Integer)).returns(T::Hash[Symbol, T.any(DateTime, FalseClass, Integer, String, Time, TrueClass)]) }
  def delete_if_owner(id, user_id); end

  # RDL Type: ((Array<Number> or Number), (Array<Number> or Number)) -> DashboardSection
  sig { params(id: T.any(T::Array[Integer], Integer), user_id: T.any(T::Array[Integer], Integer)).returns(DashboardSection) }
  def fetch_if_teacher(id, user_id); end

  # RDL Type: (Number, Number) -> (Array<XXX> or Hash<XXX, XXX>)
  sig { params(user_id: Integer, with_hidden: Integer).returns(T.any(T::Array[T.untyped], T::Hash[T.untyped, T.untyped])) }
  def valid_default_scripts(user_id, with_hidden); end

  # RDL Type: (String) -> (false or true)
  sig { params(login_type: String).returns(T.any(FalseClass, TrueClass)) }
  def valid_login_type?(login_type); end

  # RDL Type: (String) -> (false or true)
  sig { params(grade: String).returns(T.any(FalseClass, TrueClass)) }
  def valid_grade?(grade); end

  # RDL Type: (String) -> (false or true)
  sig { params(course_id: String).returns(T.any(FalseClass, TrueClass)) }
  def valid_course_id?(course_id); end

  # RDL Type: (Number, ?Number) -> (false or true)
  sig { params(script_id: Integer, user_id: Integer).returns(T.any(FalseClass, TrueClass)) }
  def valid_script_id?(script_id, user_id = nil); end

  # RDL Type: (XXX, XXX) -> XXX
  sig { params(hidden: T.untyped, course_or_script: T.untyped).returns(T.untyped) }
  def assignable_info(hidden, course_or_script); end
end

class [s]DashboardUserScript
  # RDL Type: (Number, Number) -> Number
  sig { params(script_id: Integer, user_id: Integer).returns(Integer) }
  def assign_script_to_user(script_id, user_id); end

  # RDL Type: ((Array<Number> or Number), ((Array<Number> or Number) and [ empty?: () -> XXX ] and [ select: () {(XXX) -> XXX} -> XXX ])) -> Array<String>
  sig { params(script_id: T.any(T::Array[Integer], Integer), user_ids: T.untyped).returns(T::Array[String]) }
  def assign_script_to_users(script_id, user_ids); end

  # RDL Type: ((Array<Number> or Number), (Array<Number> or Number)) -> Array<String>
  sig { params(script_id: T.any(T::Array[Integer], Integer), section_id: T.any(T::Array[Integer], Integer)).returns(T::Array[String]) }
  def assign_script_to_section(script_id, section_id); end
end

class DashboardSection
  # RDL Type: (([ []: (:admin) -> XXX ] and [ []: (:age) -> XXX ] and [ []: (:birthday) -> XXX ] and [ []: (:gender) -> XXX ] and [ []: (:id) -> XXX ] and [ []: (:name) -> XXX ] and [ []: (:sharing_disabled) -> XXX ])) -> Number
  sig { params(student: T.untyped).returns(Integer) }
  def add_student(student); end

  # RDL Type: ([ map: () {(XXX) -> XXX} -> XXX ]) -> XXX
  sig { params(students: T.untyped).returns(T.untyped) }
  def add_students(students); end

  # RDL Type: ((Array<Number> or Number)) -> (false or true)
  sig { params(student_id: T.any(T::Array[Integer], Integer)).returns(T.any(FalseClass, TrueClass)) }
  def remove_student(student_id); end

  # RDL Type: () -> { id: Number, name: String, created_at: (DateTime or Time), updated_at: (DateTime or Time), wrapup_video_id: Number, hidden: (false or true), user_id: Number, login_required: (false or true), properties: String, new_name: String, family_name: String }
  sig { returns(T::Hash[Symbol, T.any(DateTime, FalseClass, Integer, String, Time, TrueClass)]) }
  def script; end

  # RDL Type: () -> { id: XXX, location: String, name: XXX, login_type: XXX, grade: XXX, code: XXX, stage_extras: XXX, pairing_allowed: XXX, hidden: XXX }
  sig { returns(T.untyped) }
  def to_member_hash; end

  # RDL Type: () -> { id: XXX, location: String, name: XXX, login_type: XXX, grade: XXX, code: XXX, stage_extras: XXX, pairing_allowed: XXX, hidden: XXX, script: XXX, course_id: XXX, teachers: XXX, students: XXX, studentCount: XXX }
  sig { returns(T.untyped) }
  def to_owner_hash; end

  # RDL Type: ((({ id: Number, user_id: Number, name: String, created_at: (DateTime or Time), updated_at: (DateTime or Time), code: String, script_id: Number, course_id: Number, grade: String, login_type: String, deleted_at: (DateTime or Time), stage_extras: (false or true), section_type: String, first_activity_at: (DateTime or Time), pairing_allowed: (false or true), sharing_disabled: (false or true), hidden: (false or true) } or { id: Number, user_id: Number, name: String, created_at: (DateTime or Time), updated_at: (DateTime or Time), code: String, script_id: Number, course_id: Number, grade: String, login_type: String, deleted_at: (DateTime or Time), stage_extras: (false or true), section_type: String, first_activity_at: (DateTime or Time), pairing_allowed: (false or true), sharing_disabled: (false or true), hidden: (false or true), student_user_id: Number, section_id: Number, studio_person_id: Number, email: String, parent_email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: (DateTime or Time), remember_created_at: (DateTime or Time), sign_in_count: Number, current_sign_in_at: (DateTime or Time), last_sign_in_at: (DateTime or Time), current_sign_in_ip: String, last_sign_in_ip: String, username: String, provider: String, uid: String, admin: (false or true), gender: String, locale: String, birthday: Date, user_type: String, school: String, full_address: String, school_info_id: Number, total_lines: Number, secret_picture_id: Number, active: (false or true), hashed_email: String, purged_at: (DateTime or Time), secret_words: String, properties: String, invitation_token: String, invitation_created_at: (DateTime or Time), invitation_sent_at: (DateTime or Time), invitation_accepted_at: (DateTime or Time), invitation_limit: Number, invited_by_id: Number, invited_by_type: String, invitations_count: Number, terms_of_service_version: Number, urm: (false or true), races: String, primary_contact_info_id: Number } or { id: Number, user_id: Number, name: String, created_at: (DateTime or Time), updated_at: (DateTime or Time), code: String, script_id: Number, course_id: Number, grade: String, login_type: String, deleted_at: (DateTime or Time), stage_extras: (false or true), section_type: String, first_activity_at: (DateTime or Time), pairing_allowed: (false or true), sharing_disabled: (false or true), hidden: (false or true), studio_person_id: Number, email: String, parent_email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: (DateTime or Time), remember_created_at: (DateTime or Time), sign_in_count: Number, current_sign_in_at: (DateTime or Time), last_sign_in_at: (DateTime or Time), current_sign_in_ip: String, last_sign_in_ip: String, username: String, provider: String, uid: String, admin: (false or true), gender: String, locale: String, birthday: Date, user_type: String, school: String, full_address: String, school_info_id: Number, total_lines: Number, secret_picture_id: Number, active: (false or true), hashed_email: String, purged_at: (DateTime or Time), secret_words: String, properties: String, invitation_token: String, invitation_created_at: (DateTime or Time), invitation_sent_at: (DateTime or Time), invitation_accepted_at: (DateTime or Time), invitation_limit: Number, invited_by_id: Number, invited_by_type: String, invitations_count: Number, terms_of_service_version: Number, urm: (false or true), races: String, primary_contact_info_id: Number }) and [ []: (:course_id) -> XXX ] and [ []: (:grade) -> XXX ] and [ []: (:hidden) -> XXX ] and [ []: (:id) -> XXX ] and [ []: (:login_type) -> XXX ] and [ []: (:name) -> XXX ] and [ []: (:pairing_allowed) -> XXX ] and [ []: (:script_id) -> XXX ] and [ []: (:stage_extras) -> XXX ])) -> self
  sig { params(row: T.untyped).returns(T.self_type) }
  def initialize(row); end

  # RDL Type: (XXX) -> XXX
  sig { params(user_id: T.untyped).returns(T.untyped) }
  def member?(user_id); end
end

class [s]DashboardCourseExperiments
  # RDL Type: () -> Array<String>
  sig { returns(T::Array[String]) }
  def course_experiments; end

  # RDL Type: () -> Hash<Number, Hash<String, (false or true)>>
  sig { returns(T::Hash[Integer, T::Hash[String, T.any(FalseClass, TrueClass)]]) }
  def course_experiment_map; end
end

class StorageApps
  # RDL Type: ((Array<Number> or Number), (Array<Number> or Number), (Array<Number> or Number), (Array<Number> or Number)) -> (false or true)
  sig do
    params(
      storage_app_id: T.any(T::Array[Integer], Integer),
      current_user_id: T.any(T::Array[Integer], Integer),
      owner_user_id: T.any(T::Array[Integer], Integer),
      owner_storage_id: T.any(T::Array[Integer], Integer)
    ).returns(T.any(FalseClass, TrueClass))
  end
  def users_paired_on_level?(storage_app_id, current_user_id, owner_user_id, owner_storage_id); end

  # RDL Type: (Number) -> self
  sig { params(storage_id: Integer).returns(T.self_type) }
  def initialize(storage_id); end

  # RDL Type: (String, { ip: String, type: ?String, published_at: ?((DateTime or Time)), remix_parent_id: ?Number }) -> String
  sig do
    params(
      value: String,
      ip: String,
      type: T.nilable(String),
      published_at: T.nilable(T.any(DateTime, Time)),
      remix_parent_id: T.nilable(Integer)
    ).returns(String)
  end
  def create(value, ip:, type: nil, published_at: nil, remix_parent_id: nil); end

  # RDL Type: (String) -> (false or true)
  sig { params(channel_id: String).returns(T.any(FalseClass, TrueClass)) }
  def delete(channel_id); end

  # RDL Type: (String, String, ([ []: (:birthday) -> XXX ] and [ []: (:name) -> XXX ])) -> { channel: XXX, name: Object, thumbnailUrl: XXX, type: XXX, publishedAt: XXX, studentName: (XXX or XXX), studentAgeRange: (XXX or XXX) }
  sig { params(channel_id: String, type: String, user: T.untyped).returns(T.untyped) }
  def publish(channel_id, type, user); end

  # RDL Type: (String) -> nil
  sig { params(channel_id: String).void }
  def unpublish(channel_id); end

  # RDL Type: (String) -> String
  sig { params(channel_id: String).returns(String) }
  def get_abuse(channel_id); end

  # RDL Type: (String, (Array<Number> or Number)) -> (false or true)
  sig { params(channel_id: String, current_user_id: T.any(T::Array[Integer], Integer)).returns(T.any(FalseClass, TrueClass)) }
  def get_sharing_disabled(channel_id, current_user_id); end

  # RDL Type: (String) -> String
  sig { params(channel_id: String).returns(String) }
  def increment_abuse(channel_id); end

  # RDL Type: (String) -> Number
  sig { params(channel_id: String).returns(Integer) }
  def reset_abuse(channel_id); end
end

class [s]UserHelpers
  # RDL Type: (([ respond_to?: (:connection) -> XXX ] and [ where: ({ username: (String or XXX) }) -> XXX ]), String) -> String
  sig { params(queryable: T.untyped, name: String).returns(String) }
  def generate_username(queryable, name); end

  # RDL Type: (String) -> String
  sig { params(name: String).returns(String) }
  def initial(name); end

  # RDL Type: (String) -> String
  sig { params(birthday: String).returns(String) }
  def age_range_from_birthday(birthday); end
end

class [s]StorageApps
  # RDL Type: (String, ([ []: (:project_type) -> XXX ] and [ []: (:published_at) -> XXX ] and [ []: (:value) -> XXX ])) -> { channel: XXX, name: Object, thumbnailUrl: XXX, type: XXX, publishedAt: XXX }
  sig { params(channel_id: String, project: T.untyped).returns(T.untyped) }
  def get_published_project_data(channel_id, project); end
end
