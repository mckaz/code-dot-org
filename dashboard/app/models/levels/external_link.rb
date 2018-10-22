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

class ExternalLink < Level
  serialized_attrs %w(
    link_title
    url
    teacher_markdown
  )

  validates_presence_of :url
  validates_presence_of :link_title

  def icon
    'fa-external-link-square'
  end

  before_validation do
    unless url.try(:match, /https?:\/\//)
      url.prepend 'http://'
    end
  end

  def self.create_from_level_builder(params, level_params)
    create!(level_params.merge(user: params[:user], game: Game.external_link, level_num: 'custom'))
  end
end
