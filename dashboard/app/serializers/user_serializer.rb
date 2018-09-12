# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0)
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#  username               :string(255)
#  provider               :string(255)
#  uid                    :string(255)
#  admin                  :boolean
#  gender                 :string(1)
#  name                   :string(255)
#  language               :string(2)
#  birthday               :date
#  parent_email           :string(255)
#  deleted_at             :datetime
#  hashed_email           :string(255)
#  properties             :text(65535)
#  user_type              :string(16)       default("student")
#  school                 :string(255)
#  full_address           :string(1024)
#  address                :string(255)
#  city                   :string(255)
#  state                  :string(255)
#  zip                    :string(255)
#  lat                    :float(24)
#  lon                    :float(24)
#  total_lines            :integer          default(0), not null
#  secret_words           :string(255)
#  secret_picture_id      :integer
#  secret_word_1_id       :integer
#  secret_word_2_id       :integer
#
# Indexes
#
#  index_users_on_deleted_at            (deleted_at)
#  index_users_on_email                 (email)
#  index_users_on_hashed_email          (hashed_email)
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_username              (username) UNIQUE
#

class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :ops_first_name, :ops_last_name, :district, :ops_school, :ops_gender, :races
  def district
    DistrictSerializer.new(object.district).attributes if object
  end
end
