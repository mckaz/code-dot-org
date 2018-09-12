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

require "csv"

class Match < DSLDefined
  def dsl_default
    <<ruby
name 'unique level name here'
title 'title'
description 'description here'
question 'Question'
answer 'Answer 1'
ruby
  end

  def supports_markdown?
    true
  end

  def icon
    'fa-check-square-o'
  end
end
