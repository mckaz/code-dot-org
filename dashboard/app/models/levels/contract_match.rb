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

# Contract Match type.
class ContractMatch < DSLDefined
  def dsl_default
    <<ruby
name 'Enter name here'
title 'Enter title here'
content1 'Enter prompt here'
answer 'Contract Name|Number|Domain1:Number|Domain2:String'
ruby
  end

  def supports_markdown?
    true
  end

  def icon
    'fa-check-square-o'
  end
end
