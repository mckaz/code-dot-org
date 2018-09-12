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

class Pixelation < Widget
  serialized_attrs %w(
    version
    data
    hex
    hide_encoding_controls
    v1_initial_width
    v1_initial_height
    v1_hide_sliders
  )

  before_validation do
    self.href = 'pixelation/pixelation.html'
  end

  def self.create_from_level_builder(params, level_params)
    create!(level_params.merge(user: params[:user], game: Game.pixelation, level_num: 'custom'))
  end
end
