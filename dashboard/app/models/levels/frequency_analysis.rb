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

class FrequencyAnalysis < Widget
  before_validation do
    self.href = 'frequency/frequency.html'
  end

  serialized_attrs :cipher, :texts

  def self.ciphers
    %w(default caesar substitution)
  end

  def self.create_from_level_builder(params, level_params)
    create!(level_params.merge(user: params[:user], game: Game.frequency_analysis, level_num: 'custom'))
  end
end
