# == Schema Information
#
# Table name: sections
#
#  id               :integer          not null, primary key
#  user_id          :integer          not null
#  name             :string(255)
#  created_at       :datetime
#  updated_at       :datetime
#  code             :string(255)
#  deleted_at       :datetime
#  login_type       :string(255)
#  script_id        :integer
#  login_method     :integer          default(0)
#  grade            :string(255)
#  admin_code       :string(255)
#  stage_extras     :boolean          default(FALSE), not null
#  pairing_allowed  :boolean          default(TRUE), not null
#  hidden           :boolean          default(FALSE), not null
#  course_id        :integer
#  sharing_disabled :boolean          default(FALSE), not null
#
# Indexes
#
#  index_sections_on_user_id_and_name  (user_id,name) UNIQUE
#

class GoogleClassroomSection < OmniAuthSection
  def self.from_service(course_id, owner_id, student_list, section_name)
    code = "G-#{course_id}"

    students = student_list.map do |student|
      OmniAuth::AuthHash.new(
        uid: student.user_id,
        provider: 'google_oauth2',
        info: {
          name: student.profile.name.full_name,
        },
      )
    end

    from_omniauth(
      code: code,
      type: Section::LOGIN_TYPE_GOOGLE_CLASSROOM,
      owner_id: owner_id,
      students: students,
      section_name: section_name,
    )
  end
end
