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

class StarWarsGrid < Studio
  def self.create_from_level_builder(params, level_params)
    level = new(
      level_params.merge(
        user: params[:user],
        game: Game.custom_studio,
        level_num: 'custom',
        start_blocks: '<xml><block type="when_run"/></xml>',
      )
    )
    level.create_maze(level_params, params)
    level
  end

  # List of possible skins, the first is used as a default.
  def self.skins
    %w(hoc2015x)
  end

  def common_blocks(_)
    <<-XML.strip_heredoc.chomp
      <category name="Direction Movement (Text)">
        <block type="studio_move">
          <title name="DIR">1</title>
        </block>
        <block type="studio_move">
          <title name="DIR">4</title>
        </block>
        <block type="studio_move">
          <title name="DIR">8</title>
        </block>
        <block type="studio_move">
          <title name="DIR">2</title>
        </block>
        <block type="controls_repeat">
          <title name="TIMES">5</title>
        </block>
      </category>
      <category name="Direction Movement (K1)">
        <block type="studio_moveNorth"/>
        <block type="studio_moveSouth"/>
        <block type="studio_moveEast"/>
        <block type="studio_moveWest"/>
        <block type="controls_repeat_simplified">
          <title name="TIMES">5</title>
        </block>
        <block type="controls_repeat_simplified_dropdown">
          <title name="TIMES" config="2-10">3</title>
        </block>
      </category>
      <category name="Orientation Movement">
        <block type="studio_moveOrientation"/>
        <block type="studio_turnOrientation"/>
      </category>
    XML
  end
end
