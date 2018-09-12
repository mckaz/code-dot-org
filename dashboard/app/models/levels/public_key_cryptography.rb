# == Schema Information
#
# Table name: levels
#
#  id           :integer          not null, primary key
#  game_id      :integer
#  name         :string(255)
#  level_url    :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#  level_num    :string(255)
#  instructions :string(255)
#  skin         :string(255)
#

# Level type for standalone widget teaching public key cryptography
class PublicKeyCryptography < Widget
  serialized_attrs %w(
    cryptography_widget_view
  )

  before_validation do
    self.href = 'public_key_cryptography/public_key_cryptography.html'
  end

  def self.create_from_level_builder(params, level_params)
    create!(level_params.merge(user: params[:user], game: Game.public_key_cryptography, level_num: 'custom'))
  end
end
