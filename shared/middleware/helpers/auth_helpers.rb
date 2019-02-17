require 'cdo/user_helpers'
require 'json'

#
# Utility methods that help middleware access dashboard authentication and
# permissions information.
#
# Note: This file should be loaded in the context of a Sinatra application;
#       see net_sim_api.rb for an example of this.
#

# @returns [Integer] the user_id associated with the current request
def current_user_id
  # @request is a Sinatra::Request < Rack::Request provided by Sinatra::Base
  @request.nil? ? nil : @request.user_id
end

# @returns [User] the dashboard user associated with the current request.
def current_user
  nil if current_user_id.nil?
  @dashboard_user ||= RDL.type_cast(DASHBOARD_DB[:users][id: current_user_id], "{ id: Integer, email: String, encrypted_password: String, reset_password_token: String, reset_password_sent_at: DateTime or Time, remember_created_at: DateTime or Time, sign_in_count: Integer, current_sign_in_at: DateTime or Time, last_sign_in_at: DateTime or Time, current_sign_in_ip: String, last_sign_in_ip: String, created_at: DateTime or Time, updated_at: DateTime or Time, username: String, provider: String, uid: String, admin: false or true, gender: String, name: String, language: String, birthday: Date, parent_email: String, deleted_at: DateTime or Time, hashed_email: String, properties: String, user_type: String, school: String, full_address: String, address: String, city: String, state: String, zip: String, lat: Float, lon: Float, total_lines: Integer, secret_words: String, secret_picture_id: Integer, secret_word_1_id: Integer, secret_word_2_id: Integer }", force: true) 
end

# Returns true if the current user is under 13 or if age is unknown.
# Duplicates User#under_13? without using the rails model.
def under_13?
  return true unless current_user
  birthday = current_user[:birthday]
  age = UserHelpers.age_from_birthday(birthday)
  age < 13
end

# Returns the sharing_disabled property of a user with a given user_id,
# always defaulting sharing to enabled.
def get_user_sharing_disabled(user_id)
  user_properties = DASHBOARD_DB[:users].select(:properties).first(id: user_id)
  return false unless user_properties
  get_sharing_disabled_from_properties(RDL.type_cast(user_properties[:properties], "String", force: true)) ## MKCHANGE
end

def get_sharing_disabled_from_properties(properties)
  return false unless properties
  parsed_properties = JSON.parse(properties)
  !!parsed_properties["sharing_disabled"]
end

# @returns [Boolean] true if the current user is an admin.
def admin?
  current_user && !!current_user[:admin]
end

# @param [String] permission - Name of the permission we're interested in
# @returns [Boolean] true if the current user has the specified dashboard permission
def has_permission?(permission)
  return false unless current_user

  if @user_permissions.nil?
    @user_permissions = RDL.type_cast(DASHBOARD_DB[:user_permissions].where(user_id: current_user_id).pluck(:permission), "Array<String>", force: true)
  end
  @user_permissions.include? permission
end

# @param [Integer] section_id
# @returns [Boolean] true iff the current user is the owner of the given section.
#          Note: NOT always true for admins.
def owns_section?(section_id)
  return false unless section_id && current_user_id
  DASHBOARD_DB[:sections].where(id: section_id, user_id: current_user_id).any?
end


# @param [Integer] student_id
# @returns [Boolean] true iff the current user, or given user, is the teacher for the student of the given id
def teaches_student?(student_id, user_id = current_user_id)#RDL.type_cast(current_user_id, "Integer", force: true))
  return false unless student_id && user_id
  DASHBOARD_DB[:sections].
      join(:followers, section_id: :sections__id).
      join(:users, id: :followers__student_user_id).
      where(sections__user_id: user_id, sections__deleted_at: nil).
      where(followers__student_user_id: student_id, followers__deleted_at: nil).
      where(users__deleted_at: nil).
      any? ## MKCHANGE
end
