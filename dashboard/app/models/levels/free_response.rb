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

class FreeResponse < Level
  serialized_attrs %w(
    title
    height
    placeholder
    encrypted_solution
    allow_user_uploads
    skip_dialog
    skip_sound
    submittable
    peer_reviewable
  )

  before_validation do
    self.skip_dialog = true
    self.skip_sound = true
  end

  def self.create_from_level_builder(params, level_params)
    create!(level_params.merge(user: params[:user], game: Game.free_response, level_num: 'custom'))
  end

  def peer_reviewable?
    try(:peer_reviewable).to_bool
  end

  def icon
    'fa-check-square-o'
  end
end
