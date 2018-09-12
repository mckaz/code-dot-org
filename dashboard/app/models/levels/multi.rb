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

class Multi < Match
  def dsl_default
    <<ruby
name 'unique level name here'
title 'title'
description 'description here'
question 'Question'
wrong 'wrong answer'
right 'right answer'
ruby
  end

  # Return a string containing the correct indexes.  e.g. "3" or "0,1"
  def correct_answer_indexes
    # We use variable name _index so that the linter ignores the fact that it's not explicitly used.
    properties["answers"].each_with_index.select {|a, _index| a["correct"] == true}.map(&:last).join(",")
  end

  # Converts a value (e.g. 0 or 1) to its displayed letter (e.g. "A" or "B")
  def self.value_to_letter(value)
    ("A".ord + value).chr
  end
end
