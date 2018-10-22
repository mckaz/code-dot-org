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

class EvaluationMulti < Multi
  def dsl_default
    <<ruby
name 'Unique question name here'
question 'Question'
answer 'Answer1', weight: 1, stage_name: 'stage_name'
answer 'Answer2', weight: 1, stage_name: 'stage_name'
ruby
  end

  def answers
    properties['answers']
  end
end
