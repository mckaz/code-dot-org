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

class TextCompression < Widget
  serialized_attrs %w(
    poems
    dictionary
  )

  before_validation do
    self.href = 'text-compression/text-compression.html'
  end

  before_save do
    unless poems.nil?
      self.poems = poems.select(&:present?)
      self.poems = nil if poems.count == 0
    end
  end

  def self.create_from_level_builder(params, level_params)
    create!(level_params.merge(user: params[:user], game: Game.text_compression, level_num: 'custom'))
  end
end
