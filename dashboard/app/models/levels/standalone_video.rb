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

class StandaloneVideo < Level
  serialized_attrs %w(
    encrypted_teacher_markdown
    skip_dialog
    skip_sound
  )

  before_validation do
    self.skip_dialog = true
    self.skip_sound = true
  end

  validate :has_video_key?

  def has_video_key?
    unless video_key.present?
      errors.add :video_key, :blank
    end
  end

  def icon
    'fa-video-camera'
  end

  def concept_level?
    true
  end

  def self.create_from_level_builder(params, level_params)
    create!(level_params.merge(user: params[:user], game: Game.standalone_video, level_num: 'custom'))
  end
end
