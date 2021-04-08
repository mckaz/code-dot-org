webpackJsonp([20],{

/***/ 2747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Load Skin for Flappy.
 */
// background: Number of 400x400 background images. Randomly select one if
// specified, otherwise, use background.png.
// graph: Colour of optional grid lines, or false.

var skinsBase = __webpack_require__(744);

var CONFIGS = {

  flappy: {}

};

exports.load = function (assetUrl, id) {
  var skin = skinsBase.load(assetUrl, id);
  var config = CONFIGS[skin.id];

  // todo: the way these are organized ends up being a little bit ugly as
  // lot of our assets are individual items not necessarily attached to a
  // specific theme

  skin.scifi = {
    background: skin.assetUrl('background_scifi.png'),
    avatar: skin.assetUrl('avatar_scifi.png'),
    obstacle_bottom: skin.assetUrl('obstacle_bottom_scifi.png'),
    obstacle_bottom_thumb: skin.assetUrl('obstacle_bottom_scifi_thumb.png'),
    obstacle_top: skin.assetUrl('obstacle_top_scifi.png'),
    ground: skin.assetUrl('ground_scifi.png'),
    ground_thumb: skin.assetUrl('ground_scifi_thumb.png')
  };

  skin.underwater = {
    background: skin.assetUrl('background_underwater.png'),
    avatar: skin.assetUrl('avatar_underwater.png'),
    obstacle_bottom: skin.assetUrl('obstacle_bottom_underwater.png'),
    obstacle_bottom_thumb: skin.assetUrl('obstacle_bottom_underwater_thumb.png'),
    obstacle_top: skin.assetUrl('obstacle_top_underwater.png'),
    ground: skin.assetUrl('ground_underwater.png'),
    ground_thumb: skin.assetUrl('ground_underwater_thumb.png')
  };

  skin.cave = {
    background: skin.assetUrl('background_cave.png'),
    avatar: skin.assetUrl('avatar_cave.png'),
    obstacle_bottom: skin.assetUrl('obstacle_bottom_cave.png'),
    obstacle_bottom_thumb: skin.assetUrl('obstacle_bottom_cave_thumb.png'),
    obstacle_top: skin.assetUrl('obstacle_top_cave.png'),
    ground: skin.assetUrl('ground_cave.png'),
    ground_thumb: skin.assetUrl('ground_cave_thumb.png')
  };

  skin.santa = {
    background: skin.assetUrl('background_santa.png'),
    avatar: skin.assetUrl('santa.png'),
    obstacle_bottom: skin.assetUrl('obstacle_bottom_santa.png'),
    obstacle_bottom_thumb: skin.assetUrl('obstacle_bottom_santa_thumb.png'),
    obstacle_top: skin.assetUrl('obstacle_top_santa.png'),
    ground: skin.assetUrl('ground_santa.png'),
    ground_thumb: skin.assetUrl('ground_santa_thumb.png')
  };

  skin.night = {
    background: skin.assetUrl('background_night.png')
  };

  skin.redbird = {
    avatar: skin.assetUrl('avatar_redbird.png')
  };

  skin.laser = {
    obstacle_bottom: skin.assetUrl('obstacle_bottom_laser.png'),
    obstacle_bottom_thumb: skin.assetUrl('obstacle_bottom_laser_thumb.png'),
    obstacle_top: skin.assetUrl('obstacle_top_laser.png')
  };

  skin.lava = {
    ground: skin.assetUrl('ground_lava.png'),
    ground_thumb: skin.assetUrl('ground_lava_thumb.png')
  };

  skin.shark = {
    avatar: skin.assetUrl('shark.png')
  };

  skin.easter = {
    avatar: skin.assetUrl('easterbunny.png')
  };

  skin.batman = {
    avatar: skin.assetUrl('batman.png')
  };

  skin.submarine = {
    avatar: skin.assetUrl('submarine.png')
  };

  skin.unicorn = {
    avatar: skin.assetUrl('unicorn.png')
  };

  skin.fairy = {
    avatar: skin.assetUrl('fairy.png')
  };

  skin.superman = {
    avatar: skin.assetUrl('superman.png')
  };

  skin.turkey = {
    avatar: skin.assetUrl('turkey.png')
  };

  // Images
  skin.ground = skin.assetUrl('ground.png');
  skin.ground_thumb = skin.assetUrl('ground_thumb.png');
  skin.obstacle_top = skin.assetUrl('obstacle_top.png');
  skin.obstacle_bottom = skin.assetUrl('obstacle_bottom.png');
  skin.obstacle_bottom_thumb = skin.assetUrl('obstacle_bottom_thumb.png');
  skin.instructions = skin.assetUrl('instructions.png');
  skin.clickrun = skin.assetUrl('clickrun.png');
  skin.getready = skin.assetUrl('getready.png');
  skin.gameover = skin.assetUrl('gameover.png');
  skin.flapIcon = skin.assetUrl('flap-bird.png');
  skin.crashIcon = skin.assetUrl('when-crash.png');
  skin.collideObstacleIcon = skin.assetUrl('when-obstacle.png');
  skin.collideGroundIcon = skin.assetUrl('when-crash.png');
  skin.enterObstacleIcon = skin.assetUrl('when-pass.png');
  skin.tiles = skin.assetUrl('tiles.png');
  skin.goal = skin.assetUrl('goal.png');
  skin.goalSuccess = skin.assetUrl('goal_success.png');
  skin.obstacle = skin.assetUrl('obstacle.png');
  skin.obstacleScale = config.obstacleScale || 1.0;
  skin.largerObstacleAnimationTiles = skin.assetUrl(config.largerObstacleAnimationTiles);
  skin.hittingWallAnimation = skin.assetUrl(config.hittingWallAnimation);
  skin.approachingGoalAnimation = skin.assetUrl(config.approachingGoalAnimation);
  // Sounds
  skin.obstacleSound = [skin.assetUrl('obstacle.mp3'), skin.assetUrl('obstacle.ogg')];
  skin.wallSound = [skin.assetUrl('wall.mp3'), skin.assetUrl('wall.ogg')];
  skin.winGoalSound = [skin.assetUrl('win_goal.mp3'), skin.assetUrl('win_goal.ogg')];
  skin.wall0Sound = [skin.assetUrl('wall0.mp3'), skin.assetUrl('wall0.ogg')];

  skin.dieSound = [skin.assetUrl('sfx_die.mp3'), skin.assetUrl('sfx_die.ogg')];
  skin.hitSound = [skin.assetUrl('sfx_hit.mp3'), skin.assetUrl('sfx_hit.ogg')];
  skin.pointSound = [skin.assetUrl('sfx_point.mp3'), skin.assetUrl('sfx_point.ogg')];
  skin.swooshingSound = [skin.assetUrl('sfx_swooshing.mp3'), skin.assetUrl('sfx_swooshing.ogg')];
  skin.wingSound = [skin.assetUrl('sfx_wing.mp3'), skin.assetUrl('sfx_wing.ogg')];

  skin.jetSound = [skin.assetUrl('jet.mp3'), skin.assetUrl('jet.ogg')];
  skin.crashSound = [skin.assetUrl('crash.mp3'), skin.assetUrl('crash.ogg')];
  skin.jingleSound = [skin.assetUrl('jingle.mp3'), skin.assetUrl('jingle.ogg')];
  skin.laserSound = [skin.assetUrl('laser.mp3'), skin.assetUrl('laser.ogg')];
  skin.splashSound = [skin.assetUrl('splash.mp3'), skin.assetUrl('splash.ogg')];

  // Settings
  skin.graph = config.graph;
  skin.background = skin.assetUrl('background.png');

  return skin;
};

/***/ }),

/***/ 2893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  WORKSPACE_BUFFER: 20,
  WORKSPACE_COL_WIDTH: 210,
  WORKSPACE_ROW_HEIGHT: 120,

  AVATAR_HEIGHT: 24,
  AVATAR_WIDTH: 34,
  AVATAR_Y_OFFSET: 0
};

/***/ }),

/***/ 3069:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3070);


/***/ }),

/***/ 3070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadFlappy = __webpack_require__(3071);

var _loadFlappy2 = _interopRequireDefault(_loadFlappy);

var _loadApp = __webpack_require__(820);

var _loadApp2 = _interopRequireDefault(_loadApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _loadApp2.default)().then(_loadFlappy2.default);

/***/ }),

/***/ 3071:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadFlappy;

var _appMain = __webpack_require__(853);

var _appMain2 = _interopRequireDefault(_appMain);

var _flappy = __webpack_require__(3072);

var _flappy2 = _interopRequireDefault(_flappy);

var _blocks = __webpack_require__(2894);

var _blocks2 = _interopRequireDefault(_blocks);

var _levels = __webpack_require__(3076);

var _levels2 = _interopRequireDefault(_levels);

var _skins = __webpack_require__(2747);

var _skins2 = _interopRequireDefault(_skins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Flappy = _flappy2.default;
if (typeof global !== 'undefined') {
  global.Flappy = window.Flappy;
}
function loadFlappy(options) {
  options.skinsModule = _skins2.default;
  options.blocksModule = _blocks2.default;
  (0, _appMain2.default)(window.Flappy, _levels2.default, options);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),

/***/ 3072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CustomMarshalingInterpreter = __webpack_require__(850);

var _CustomMarshalingInterpreter2 = _interopRequireDefault(_CustomMarshalingInterpreter);

var _twitterHelper = __webpack_require__(1735);

var _redux = __webpack_require__(237);

var _constants = __webpack_require__(216);

var _placeholder = __webpack_require__(3073);

var _placeholder2 = _interopRequireDefault(_placeholder);

var _imageUtils = __webpack_require__(1157);

var _progressRedux = __webpack_require__(498);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Blockly App: Flappy
 *
 * Copyright 2013 Code.org
 *
 */

var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(32);
var studioApp = __webpack_require__(597).singleton;
var commonMsg = __webpack_require__(40);
var flappyMsg = __webpack_require__(2746);

var api = __webpack_require__(3074);
var Provider = __webpack_require__(53).Provider;
var AppView = __webpack_require__(944);
var FlappyVisualizationColumn = __webpack_require__(3075);
var dom = __webpack_require__(594);
var constants = __webpack_require__(2893);
var utils = __webpack_require__(71);


/**
 * Create a namespace for the application.
 */
var Flappy = module.exports;

Flappy.GameStates = {
  WAITING: 0,
  ACTIVE: 1,
  ENDING: 2,
  OVER: 3
};

Flappy.gameState = Flappy.GameStates.WAITING;

Flappy.clickPending = false;

Flappy.avatarVelocity = 0;

var level;
var skin;

Flappy.obstacles = [];

// whether to show Get Ready and Game Over
var infoText;

//TODO: Make configurable.
studioApp().setCheckForEmptyBlocks(true);

var randomObstacleHeight = function randomObstacleHeight() {
  var min = Flappy.MIN_OBSTACLE_HEIGHT;
  var max = Flappy.MAZE_HEIGHT - Flappy.GROUND_HEIGHT - Flappy.MIN_OBSTACLE_HEIGHT - Flappy.GAP_SIZE;
  return Math.floor(Math.random() * (max - min) + min);
};

//The number of blocks to show as feedback.

// Default Scalings
Flappy.scale = {
  'snapRadius': 1,
  'stepSpeed': 33
};

var twitterOptions = {
  text: flappyMsg.shareFlappyTwitterDonor({ donor: (0, _twitterHelper.getRandomDonorTwitter)() }),
  hashtag: "FlappyCode"
};

var AVATAR_HEIGHT = constants.AVATAR_HEIGHT;
var AVATAR_WIDTH = constants.AVATAR_WIDTH;

var loadLevel = function loadLevel() {
  // Load maps.
  infoText = utils.valueOr(level.infoText, true);
  if (!infoText) {
    Flappy.gameState = Flappy.GameStates.ACTIVE;
  }

  // Override scalars.
  for (var key in level.scale) {
    Flappy.scale[key] = level.scale[key];
  }

  // Height and width of the goal and obstacles.
  Flappy.MARKER_HEIGHT = 43;
  Flappy.MARKER_WIDTH = 50;

  Flappy.MAZE_WIDTH = 400;
  Flappy.MAZE_HEIGHT = 400;

  Flappy.GROUND_WIDTH = 400;
  Flappy.GROUND_HEIGHT = 48;

  Flappy.GOAL_SIZE = 55;

  Flappy.OBSTACLE_WIDTH = 52;
  Flappy.OBSTACLE_HEIGHT = 320;
  Flappy.MIN_OBSTACLE_HEIGHT = 48;

  Flappy.setGapHeight(api.GapHeight.NORMAL);

  Flappy.OBSTACLE_SPACING = 250; // number of horizontal pixels between the start of obstacles

  var numObstacles = 2 * Flappy.MAZE_WIDTH / Flappy.OBSTACLE_SPACING;
  if (!level.obstacles) {
    numObstacles = 0;
  }

  var resetObstacle = function resetObstacle(x) {
    this.x = x;
    this.gapStart = randomObstacleHeight();
    this.hitAvatar = false;
  };

  var containsAvatar = function containsAvatar() {
    var flappyRight = Flappy.avatarX + AVATAR_WIDTH;
    var flappyBottom = Flappy.avatarY + AVATAR_HEIGHT;
    var obstacleRight = this.x + Flappy.OBSTACLE_WIDTH;
    var obstacleBottom = this.gapStart + Flappy.GAP_SIZE;
    return flappyRight > this.x && flappyRight < obstacleRight && Flappy.avatarY > this.gapStart && flappyBottom < obstacleBottom;
  };

  for (var i = 0; i < numObstacles; i++) {
    Flappy.obstacles.push({
      x: Flappy.MAZE_WIDTH * 1.5 + i * Flappy.OBSTACLE_SPACING,
      gapStart: randomObstacleHeight(), // y coordinate of the top of the gap
      hitAvatar: false,
      reset: resetObstacle,
      containsAvatar: containsAvatar
    });
  }
};

var drawMap = function drawMap() {
  var svg = document.getElementById('svgFlappy');
  var i, tile;

  // Adjust outer element size.
  svg.setAttribute('width', Flappy.MAZE_WIDTH);
  svg.setAttribute('height', Flappy.MAZE_HEIGHT);

  // Adjust visualizationColumn width.
  var visualizationColumn = document.getElementById('visualizationColumn');
  visualizationColumn.style.width = Flappy.MAZE_WIDTH + 'px';

  if (skin.background) {
    tile = document.createElementNS(Blockly.SVG_NS, 'image');
    tile.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.background);
    tile.setAttribute('id', 'background');
    tile.setAttribute('height', Flappy.MAZE_HEIGHT);
    tile.setAttribute('width', Flappy.MAZE_WIDTH);
    tile.setAttribute('x', 0);
    tile.setAttribute('y', 0);
    svg.appendChild(tile);
  }

  // Add obstacles
  Flappy.obstacles.forEach(function (obstacle, index) {
    var obstacleTopIcon = document.createElementNS(Blockly.SVG_NS, 'image');
    obstacleTopIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.obstacle_top);
    obstacleTopIcon.setAttribute('id', 'obstacle_top' + index);
    obstacleTopIcon.setAttribute('height', Flappy.OBSTACLE_HEIGHT);
    obstacleTopIcon.setAttribute('width', Flappy.OBSTACLE_WIDTH);
    svg.appendChild(obstacleTopIcon);

    var obstacleBottomIcon = document.createElementNS(Blockly.SVG_NS, 'image');
    obstacleBottomIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.obstacle_bottom);
    obstacleBottomIcon.setAttribute('id', 'obstacle_bottom' + index);
    obstacleBottomIcon.setAttribute('height', Flappy.OBSTACLE_HEIGHT);
    obstacleBottomIcon.setAttribute('width', Flappy.OBSTACLE_WIDTH);
    svg.appendChild(obstacleBottomIcon);
  });

  if (level.ground) {
    for (i = 0; i < Flappy.MAZE_WIDTH / Flappy.GROUND_WIDTH + 1; i++) {
      var groundIcon = document.createElementNS(Blockly.SVG_NS, 'image');
      groundIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.ground);
      groundIcon.setAttribute('id', 'ground' + i);
      groundIcon.setAttribute('height', Flappy.GROUND_HEIGHT);
      groundIcon.setAttribute('width', Flappy.GROUND_WIDTH);
      groundIcon.setAttribute('x', 0);
      groundIcon.setAttribute('y', Flappy.MAZE_HEIGHT - Flappy.GROUND_HEIGHT);
      svg.appendChild(groundIcon);
    }
  }

  if (level.goal && level.goal.startX) {
    var goal = document.createElementNS(Blockly.SVG_NS, 'image');
    goal.setAttribute('id', 'goal');
    goal.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.goal);
    goal.setAttribute('height', Flappy.GOAL_SIZE);
    goal.setAttribute('width', Flappy.GOAL_SIZE);
    goal.setAttribute('x', level.goal.startX);
    goal.setAttribute('y', level.goal.startY);
    svg.appendChild(goal);
  }

  var avatArclip = document.createElementNS(Blockly.SVG_NS, 'clipPath');
  avatArclip.setAttribute('id', 'avatArclipPath');
  var avatArclipRect = document.createElementNS(Blockly.SVG_NS, 'rect');
  avatArclipRect.setAttribute('id', 'avatArclipRect');
  avatArclipRect.setAttribute('width', Flappy.MAZE_WIDTH);
  avatArclipRect.setAttribute('height', Flappy.MAZE_HEIGHT - Flappy.GROUND_HEIGHT);
  avatArclip.appendChild(avatArclipRect);
  svg.appendChild(avatArclip);

  // Add avatar.
  var avatarIcon = document.createElementNS(Blockly.SVG_NS, 'image');
  avatarIcon.setAttribute('id', 'avatar');
  avatarIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.avatar);
  avatarIcon.setAttribute('height', AVATAR_HEIGHT);
  avatarIcon.setAttribute('width', AVATAR_WIDTH);
  if (level.ground) {
    avatarIcon.setAttribute('clip-path', 'url(#avatArclipPath)');
  }
  svg.appendChild(avatarIcon);

  var instructions = document.createElementNS(Blockly.SVG_NS, 'image');
  instructions.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.instructions);
  instructions.setAttribute('id', 'instructions');
  instructions.setAttribute('height', 50);
  instructions.setAttribute('width', 159);
  instructions.setAttribute('x', 110);
  instructions.setAttribute('y', 170);
  instructions.setAttribute('visibility', 'hidden');
  svg.appendChild(instructions);

  var getready = document.createElementNS(Blockly.SVG_NS, 'image');
  getready.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.getready);
  getready.setAttribute('id', 'getready');
  getready.setAttribute('height', 50);
  getready.setAttribute('width', 183);
  getready.setAttribute('x', 108);
  getready.setAttribute('y', 80);
  getready.setAttribute('visibility', 'hidden');
  svg.appendChild(getready);

  var clickrun = document.createElementNS(Blockly.SVG_NS, 'image');
  clickrun.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.clickrun);
  clickrun.setAttribute('id', 'clickrun');
  clickrun.setAttribute('height', 41);
  clickrun.setAttribute('width', 273);
  clickrun.setAttribute('x', 64);
  clickrun.setAttribute('y', 200);
  clickrun.setAttribute('visibility', 'visibile');
  svg.appendChild(clickrun);

  var gameover = document.createElementNS(Blockly.SVG_NS, 'image');
  gameover.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.gameover);
  gameover.setAttribute('id', 'gameover');
  gameover.setAttribute('height', 41);
  gameover.setAttribute('width', 192);
  gameover.setAttribute('x', 104);
  gameover.setAttribute('y', 80);
  gameover.setAttribute('visibility', 'hidden');
  svg.appendChild(gameover);

  var score = document.createElementNS(Blockly.SVG_NS, 'text');
  score.setAttribute('id', 'score');
  score.setAttribute('class', 'flappy-score');
  score.setAttribute('x', Flappy.MAZE_WIDTH / 2);
  score.setAttribute('y', 60);
  score.appendChild(document.createTextNode('0'));
  score.setAttribute('visibility', 'hidden');
  svg.appendChild(score);

  var clickRect = document.createElementNS(Blockly.SVG_NS, 'rect');
  clickRect.setAttribute('width', Flappy.MAZE_WIDTH);
  clickRect.setAttribute('height', Flappy.MAZE_HEIGHT);
  clickRect.setAttribute('fill-opacity', 0);
  clickRect.addEventListener('touchstart', function (e) {
    Flappy.onMouseDown(e);
    e.preventDefault(); // don't want to see mouse down
  });
  clickRect.addEventListener('mousedown', function (e) {
    Flappy.onMouseDown(e);
  });
  svg.appendChild(clickRect);
};

Flappy.calcDistance = function (xDist, yDist) {
  return Math.sqrt(xDist * xDist + yDist * yDist);
};

/**
 * Check to see if avatar is in collision with given obstacle
 * @param obstacle Object : The obstacle object we're checking
 */
var checkForObstacleCollision = function checkForObstacleCollision(obstacle) {
  var insideObstacleColumn = Flappy.avatarX + AVATAR_WIDTH >= obstacle.x && Flappy.avatarX <= obstacle.x + Flappy.OBSTACLE_WIDTH;
  if (insideObstacleColumn && (Flappy.avatarY <= obstacle.gapStart || Flappy.avatarY + AVATAR_HEIGHT >= obstacle.gapStart + Flappy.GAP_SIZE)) {
    return true;
  }
  return false;
};

Flappy.activeTicks = function () {
  if (Flappy.firstActiveTick < 0) {
    return 0;
  }

  return Flappy.tickCount - Flappy.firstActiveTick;
};

/**
 * We want to swallow exceptions when executing user generated code. This provides
 * a single place to do so.
 */
Flappy.callUserGeneratedCode = function (fn) {
  try {
    fn.call(Flappy, api);
  } catch (e) {
    // swallow error. should we also log this somewhere?
    if (console) {
      console.log(e);
    }
  }
};

Flappy.onTick = function () {
  var avatarWasAboveGround, avatarIsAboveGround;

  if (Flappy.firstActiveTick < 0 && Flappy.gameState === Flappy.GameStates.ACTIVE) {
    Flappy.firstActiveTick = Flappy.tickCount;
  }

  Flappy.tickCount++;

  if (Flappy.tickCount === 1) {
    Flappy.callUserGeneratedCode(Flappy.whenRunButton);
  }

  // Check for click
  if (Flappy.clickPending && Flappy.gameState <= Flappy.GameStates.ACTIVE) {
    Flappy.callUserGeneratedCode(Flappy.whenClick);
    Flappy.clickPending = false;
  }

  avatarWasAboveGround = Flappy.avatarY + AVATAR_HEIGHT < Flappy.MAZE_HEIGHT - Flappy.GROUND_HEIGHT;

  // Action doesn't start until user's first click
  if (Flappy.gameState === Flappy.GameStates.ACTIVE) {
    // Update avatar's vertical position
    Flappy.avatarVelocity += Flappy.gravity;
    Flappy.avatarY = Flappy.avatarY + Flappy.avatarVelocity;

    // never let the avatar go too far off the top or bottom
    var bottomLimit = level.ground ? Flappy.MAZE_HEIGHT - Flappy.GROUND_HEIGHT - AVATAR_HEIGHT + 1 : Flappy.MAZE_HEIGHT * 1.5;

    Flappy.avatarY = Math.min(Flappy.avatarY, bottomLimit);
    Flappy.avatarY = Math.max(Flappy.avatarY, Flappy.MAZE_HEIGHT * -0.5);

    // Update obstacles
    Flappy.obstacles.forEach(function (obstacle, index) {
      var wasRightOfAvatar = obstacle.x > Flappy.avatarX + AVATAR_WIDTH;

      obstacle.x -= Flappy.SPEED;

      var isRightOfAvatar = obstacle.x > Flappy.avatarX + AVATAR_WIDTH;
      if (wasRightOfAvatar && !isRightOfAvatar) {
        if (Flappy.avatarY > obstacle.gapStart && Flappy.avatarY + AVATAR_HEIGHT < obstacle.gapStart + Flappy.GAP_SIZE) {
          Flappy.callUserGeneratedCode(Flappy.whenEnterObstacle);
        }
      }

      if (!obstacle.hitAvatar && checkForObstacleCollision(obstacle)) {
        obstacle.hitAvatar = true;
        try {
          Flappy.whenCollideObstacle(api);
        } catch (e) {}
      }

      // If obstacle moves off left side, repurpose as a new obstacle to our right
      var numObstacles = Flappy.obstacles.length;
      var previousObstacleIndex = (index - 1 + numObstacles) % numObstacles;
      if (obstacle.x + Flappy.OBSTACLE_WIDTH < 0) {
        obstacle.reset(Flappy.obstacles[previousObstacleIndex].x + Flappy.OBSTACLE_SPACING);
      }
    });

    // check for ground collision
    avatarIsAboveGround = Flappy.avatarY + AVATAR_HEIGHT < Flappy.MAZE_HEIGHT - Flappy.GROUND_HEIGHT;
    if (avatarWasAboveGround && !avatarIsAboveGround) {
      Flappy.callUserGeneratedCode(Flappy.whenCollideGround);
    }

    // update goal
    if (level.goal && level.goal.moving) {
      Flappy.goalX -= Flappy.SPEED;
      if (Flappy.goalX + Flappy.GOAL_SIZE < 0) {
        // if it disappears off of left, reappear on right
        Flappy.goalX = Flappy.MAZE_WIDTH + Flappy.GOAL_SIZE;
      }
    }
  }

  if (Flappy.gameState === Flappy.GameStates.ENDING) {
    Flappy.avatarY += 10;

    // we use avatar width instead of height bc he is rotating
    // the extra 4 is so that he buries his beak (similar to mobile game)
    var max = Flappy.MAZE_HEIGHT - Flappy.GROUND_HEIGHT - AVATAR_WIDTH + 4;
    if (Flappy.avatarY >= max) {
      Flappy.avatarY = max;
      Flappy.gameState = Flappy.GameStates.OVER;
      Flappy.gameOverTick = Flappy.tickCount;
    }

    document.getElementById('avatar').setAttribute('transform', 'translate(' + AVATAR_WIDTH + ', 0) ' + 'rotate(90, ' + Flappy.avatarX + ', ' + Flappy.avatarY + ')');
    if (infoText) {
      document.getElementById('gameover').setAttribute('visibility', 'visibile');
    }
  }

  Flappy.displayAvatar(Flappy.avatarX, Flappy.avatarY);
  Flappy.displayObstacles();
  if (Flappy.gameState <= Flappy.GameStates.ACTIVE) {
    Flappy.displayGround(Flappy.tickCount);
    Flappy.displayGoal();
  }

  if (checkFinished()) {
    Flappy.onPuzzleComplete();
  }
};

Flappy.onMouseDown = function (e) {
  if (Flappy.intervalId) {
    Flappy.clickPending = true;
    if (Flappy.gameState === Flappy.GameStates.WAITING) {
      Flappy.gameState = Flappy.GameStates.ACTIVE;
    } else if (Flappy.gameState === Flappy.GameStates.OVER && Flappy.gameOverTick + 10 < Flappy.tickCount) {
      // do a reset
      var resetButton = document.getElementById('resetButton');
      if (resetButton) {
        resetButton.click();
      }
    }
    document.getElementById('instructions').setAttribute('visibility', 'hidden');
    document.getElementById('getready').setAttribute('visibility', 'hidden');
  } else if (Flappy.gameState === Flappy.GameStates.WAITING) {
    Flappy.runButtonClick();
  }
};
/**
 * Initialize Blockly and the Flappy app.  Called on page load.
 */
Flappy.init = function (config) {
  // replace studioApp() methods with our own
  studioApp().reset = this.reset.bind(this);
  studioApp().runButtonClick = this.runButtonClick.bind(this);

  Flappy.clearEventHandlersKillTickLoop();
  skin = config.skin;
  level = config.level;

  config.grayOutUndeletableBlocks = level.grayOutUndeletableBlocks;

  loadLevel();

  config.loadAudio = function () {
    studioApp().loadAudio(skin.winSound, 'win');
    studioApp().loadAudio(skin.startSound, 'start');
    studioApp().loadAudio(skin.failureSound, 'failure');
    studioApp().loadAudio(skin.obstacleSound, 'obstacle');

    studioApp().loadAudio(skin.dieSound, 'sfx_die');
    studioApp().loadAudio(skin.hitSound, 'sfx_hit');
    studioApp().loadAudio(skin.pointSound, 'sfx_point');
    studioApp().loadAudio(skin.swooshingSound, 'sfx_swooshing');
    studioApp().loadAudio(skin.wingSound, 'sfx_wing');
    studioApp().loadAudio(skin.winGoalSound, 'winGoal');
    studioApp().loadAudio(skin.jetSound, 'jet');
    studioApp().loadAudio(skin.jingleSound, 'jingle');
    studioApp().loadAudio(skin.crashSound, 'crash');
    studioApp().loadAudio(skin.laserSound, 'laser');
    studioApp().loadAudio(skin.splashSound, 'splash');
    studioApp().loadAudio(skin.wallSound, 'wall');
    studioApp().loadAudio(skin.wall0Sound, 'wall0');
  };

  config.afterInject = function () {
    /**
     * The richness of block colours, regardless of the hue.
     * MOOC blocks should be brighter (target audience is younger).
     * Must be in the range of 0 (inclusive) to 1 (exclusive).
     * Blockly's default is 0.45.
     */
    Blockly.HSV_SATURATION = 0.6;

    Blockly.SNAP_RADIUS *= Flappy.scale.snapRadius;

    drawMap();
  };

  config.trashcan = false;

  config.twitter = twitterOptions;

  // for flappy show make your own button if on share page
  config.makeYourOwn = config.share;

  config.makeString = commonMsg.makeYourOwnFlappy();
  config.makeUrl = "http://code.org/flappy";
  config.makeImage = studioApp().assetUrl('media/flappy_promo.png');

  config.enableShowCode = false;
  config.enableShowBlockCount = false;

  if (level.isK1) {
    // k1 blocks are taller
    constants.WORKSPACE_ROW_HEIGHT *= 1.5;
  }

  // define how our blocks should be arranged
  var col1 = constants.WORKSPACE_BUFFER;
  var col2 = col1 + constants.WORKSPACE_COL_WIDTH;
  var row1 = constants.WORKSPACE_BUFFER;
  var row2 = row1 + constants.WORKSPACE_ROW_HEIGHT;
  var row3 = row2 + constants.WORKSPACE_ROW_HEIGHT;

  config.blockArrangement = {
    'flappy_whenClick': { x: col1, y: row1 },
    'when_run': { x: col1, y: row1 },
    'flappy_whenCollideGround': { x: col2, y: row1 },
    'flappy_whenCollideObstacle': { x: col2, y: row2 },
    'flappy_whenEnterObstacle': { x: col2, y: row3 }
  };

  // if we dont have collide events, have enter obstacle in top row
  if (level.startBlocks.indexOf('whenCollide') === -1) {
    config.blockArrangement.flappy_whenEnterObstacle = { x: col2, y: row1 };
  }

  // when we have when_run and when_click, put when_run in top row
  if (level.startBlocks.indexOf('when_run') !== -1) {
    config.blockArrangement.flappy_whenClick.y = row2;
  }

  if (config.embed && config.level.markdownInstructions && !config.level.instructions) {
    // if we are an embedded level with markdown instructions but no regular
    // instructions, we want to display CSP-style instructions and not be
    // centered
    config.noInstructionsWhenCollapsed = true;
    config.centerEmbedded = false;
  }

  var onMount = function onMount() {
    studioApp().init(config);

    var rightButton = document.getElementById('rightButton');
    if (rightButton) {
      dom.addClickTouchEvent(rightButton, Flappy.onPuzzleComplete);
    }
  };

  studioApp().setPageConstants(config);

  ReactDOM.render(React.createElement(
    Provider,
    { store: (0, _redux.getStore)() },
    React.createElement(AppView, {
      visualizationColumn: React.createElement(FlappyVisualizationColumn, {
        showFinishButton: !config.level.isProjectLevel
      }),
      onMount: onMount
    })
  ), document.getElementById(config.containerId));
};

/**
 * Clear the event handlers and stop the onTick timer.
 */
Flappy.clearEventHandlersKillTickLoop = function () {
  Flappy.whenClick = null;
  Flappy.whenCollideGround = null;
  Flappy.whenCollideObstacle = null;
  Flappy.whenEnterObstacle = null;
  Flappy.whenRunButton = null;
  if (Flappy.intervalId) {
    window.clearInterval(Flappy.intervalId);
  }
  Flappy.intervalId = 0;
};

/**
 * Reset the app to the start position and kill any pending animation tasks.
 * @param {boolean} first True if an opening animation is to be played.
 */
Flappy.reset = function (first) {
  Flappy.clearEventHandlersKillTickLoop();

  Flappy.gameState = Flappy.GameStates.WAITING;

  // Reset the score.
  Flappy.playerScore = 0;

  Flappy.avatarVelocity = 0;

  // Reset obstacles
  Flappy.obstacles.forEach(function (obstacle, index) {
    obstacle.reset(Flappy.MAZE_WIDTH * 1.5 + index * Flappy.OBSTACLE_SPACING);
  });

  // reset configurable values
  Flappy.SPEED = 0;
  Flappy.FLAP_VELOCITY = -11;
  Flappy.setBackground('flappy');
  Flappy.setObstacle('flappy');
  Flappy.setPlayer('flappy');
  Flappy.setGround('flappy');
  Flappy.setGapHeight(api.GapHeight.NORMAL);
  Flappy.gravity = api.Gravity.NORMAL;

  // Move Avatar into position.
  Flappy.avatarX = 110;
  Flappy.avatarY = 150;

  if (level.goal && level.goal.startX) {
    Flappy.goalX = level.goal.startX;
    Flappy.goalY = level.goal.startY;
  }

  document.getElementById('avatar').setAttribute('transform', '');
  document.getElementById('score').setAttribute('visibility', 'hidden');
  document.getElementById('instructions').setAttribute('visibility', 'hidden');
  document.getElementById('clickrun').setAttribute('visibility', 'visible');
  document.getElementById('getready').setAttribute('visibility', 'hidden');
  document.getElementById('gameover').setAttribute('visibility', 'hidden');

  Flappy.displayAvatar(Flappy.avatarX, Flappy.avatarY);
  Flappy.displayObstacles();
  Flappy.displayGround(0);
  Flappy.displayGoal();
};

/**
 * Click the run button.  Start the program.
 */
// XXX This is the only method used by the templates!
Flappy.runButtonClick = function () {
  if (level.edit_blocks) {
    Flappy.onPuzzleComplete();
  }

  var runButton = document.getElementById('runButton');
  var resetButton = document.getElementById('resetButton');
  // Ensure that Reset button is at least as wide as Run button.
  if (!resetButton.style.minWidth) {
    resetButton.style.minWidth = runButton.offsetWidth + 'px';
  }
  document.getElementById('clickrun').setAttribute('visibility', 'hidden');
  document.getElementById('instructions').setAttribute('visibility', 'visible');
  document.getElementById('getready').setAttribute('visibility', 'visible');

  studioApp().toggleRunReset('reset');
  Blockly.mainBlockSpace.traceOn(true);
  // studioApp().reset(false);
  studioApp().attempts++;
  Flappy.execute();

  if (level.freePlay && !level.isProjectLevel) {
    var rightButtonCell = document.getElementById('right-button-cell');
    rightButtonCell.className = 'right-button-cell-enabled';
  }
  if (level.score) {
    document.getElementById('score').setAttribute('visibility', 'visible');
    Flappy.displayScore();
  }
};

/**
 * App specific displayFeedback function that calls into
 * studioApp().displayFeedback when appropriate
 */
var displayFeedback = function displayFeedback() {
  var isSignedIn = (0, _redux.getStore)().getState().progress.signInState === _progressRedux.SignInState.SignedIn;
  if (!Flappy.waitingForReport) {
    (0, _imageUtils.dataURIFromURI)(_placeholder2.default).then(function (feedbackImageUri) {
      studioApp().displayFeedback({
        feedbackType: Flappy.testResults,
        response: Flappy.response,
        level: level,
        showingSharing: level.freePlay && level.shareable,
        twitter: twitterOptions,
        appStrings: {
          reinfFeedbackMsg: flappyMsg.reinfFeedbackMsg(),
          sharingText: flappyMsg.shareGame()
        },
        saveToProjectGallery: true,
        feedbackImage: feedbackImageUri,
        disableSaveToGallery: !isSignedIn
      });
    });
  }
};

/**
 * Function to be called when the service report call is complete
 * @param {MilestoneResponse} response - JSON response (if available)
 */
Flappy.onReportComplete = function (response) {
  Flappy.response = response;
  Flappy.waitingForReport = false;
  studioApp().onReportComplete(response);
  displayFeedback();
};

/**
 * Execute the user's code.  Heaven help us...
 */
Flappy.execute = function () {
  Flappy.result = _constants.ResultType.UNSET;
  Flappy.testResults = _constants.TestResults.NO_TESTS_RUN;
  Flappy.waitingForReport = false;
  Flappy.response = null;

  // Map event handler hooks (e.g. Flappy.whenClick) to the generated code.
  var generator = Blockly.Generator.blockSpaceToCode.bind(Blockly.Generator, 'JavaScript');
  var events = {
    whenClick: { code: generator('flappy_whenClick') },
    whenCollideGround: { code: generator('flappy_whenCollideGround') },
    whenEnterObstacle: { code: generator('flappy_whenEnterObstacle') },
    whenCollideObstacle: { code: generator('flappy_whenCollideObstacle') },
    whenRunButton: { code: generator('when_run') }
  };

  _CustomMarshalingInterpreter2.default.evalWithEvents({ Flappy: api }, events).hooks.forEach(function (hook) {
    Flappy[hook.name] = hook.func;
  });

  studioApp().playAudio('start');

  Flappy.tickCount = 0;
  Flappy.firstActiveTick = -1;
  Flappy.gameOverTick = 0;
  if (Flappy.intervalId) {
    window.clearInterval(Flappy.intervalId);
  }
  Flappy.intervalId = window.setInterval(Flappy.onTick, Flappy.scale.stepSpeed);
};

Flappy.onPuzzleComplete = function () {
  if (level.freePlay) {
    Flappy.result = _constants.ResultType.SUCCESS;
  }

  // Stop everything on screen
  Flappy.clearEventHandlersKillTickLoop();

  // If we know they succeeded, mark levelComplete true
  // Note that we have not yet animated the succesful run
  var levelComplete = Flappy.result === _constants.ResultType.SUCCESS;

  // If the current level is a free play, always return the free play
  // result type
  if (level.freePlay) {
    Flappy.testResults = _constants.TestResults.FREE_PLAY;
  } else {
    Flappy.testResults = studioApp().getTestResults(levelComplete);
  }

  // Special case for Flappy level 1 where you have the right blocks, but you
  // don't flap to the goal.  Note: See pivotal item 66362504 for why we
  // check for both TOO_FEW_BLOCKS_FAIL and LEVEL_INCOMPLETE_FAIL here.
  if (level.appSpecificFailError && (Flappy.testResults === _constants.TestResults.TOO_FEW_BLOCKS_FAIL || Flappy.testResults === _constants.TestResults.LEVEL_INCOMPLETE_FAIL)) {
    // Feedback message is found in level.other1StarError.
    Flappy.testResults = _constants.TestResults.APP_SPECIFIC_FAIL;
  }

  if (Flappy.testResults >= _constants.TestResults.FREE_PLAY) {
    studioApp().playAudioOnWin();
  } else {
    studioApp().playAudioOnFailure();
  }

  if (level.editCode) {
    Flappy.testResults = levelComplete ? _constants.TestResults.ALL_PASS : _constants.TestResults.TOO_FEW_BLOCKS_FAIL;
  }

  sendReport();
};

function sendReport() {
  var xml = Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace);
  var textBlocks = Blockly.Xml.domToText(xml);

  Flappy.waitingForReport = true;

  // Report result to server.
  studioApp().report({
    app: 'flappy',
    level: level.id,
    result: Flappy.result === _constants.ResultType.SUCCESS,
    testResult: Flappy.testResults,
    program: encodeURIComponent(textBlocks),
    onComplete: Flappy.onReportComplete
  });
}

/**
 * Display Avatar at the specified location
 * @param {number} x Horizontal Pixel location.
 * @param {number} y Vertical Pixel location.
 */
Flappy.displayAvatar = function (x, y) {
  var avatarIcon = document.getElementById('avatar');
  avatarIcon.setAttribute('x', x);
  avatarIcon.setAttribute('y', y);
};

/**
 * display moving goal
 */
Flappy.displayGoal = function () {
  if (!Flappy.goalX) {
    return;
  }
  var goal = document.getElementById('goal');
  goal.setAttribute('x', Flappy.goalX);
  goal.setAttribute('y', Flappy.goalY);
};

/**
 * Display ground at given tickCount
 */
Flappy.displayGround = function (tickCount) {
  if (!level.ground) {
    return;
  }
  var offset = tickCount * Flappy.SPEED;
  offset = offset % Flappy.GROUND_WIDTH;
  for (var i = 0; i < Flappy.MAZE_WIDTH / Flappy.GROUND_WIDTH + 1; i++) {
    var ground = document.getElementById('ground' + i);
    ground.setAttribute('x', -offset + i * Flappy.GROUND_WIDTH);
    ground.setAttribute('y', Flappy.MAZE_HEIGHT - Flappy.GROUND_HEIGHT);
  }
};

/**
 * Display all obstacles
 */
Flappy.displayObstacles = function () {
  for (var i = 0; i < Flappy.obstacles.length; i++) {
    var obstacle = Flappy.obstacles[i];
    var topIcon = document.getElementById('obstacle_top' + i);
    topIcon.setAttribute('x', obstacle.x);
    topIcon.setAttribute('y', obstacle.gapStart - Flappy.OBSTACLE_HEIGHT);

    var bottomIcon = document.getElementById('obstacle_bottom' + i);
    bottomIcon.setAttribute('x', obstacle.x);
    bottomIcon.setAttribute('y', obstacle.gapStart + Flappy.GAP_SIZE);
  }
};

Flappy.displayScore = function () {
  var score = document.getElementById('score');
  score.textContent = Flappy.playerScore;
};

Flappy.flap = function (amount) {
  var defaultFlap = level.defaultFlap || "NORMAL";
  Flappy.avatarVelocity = amount || api.FlapHeight[defaultFlap];
};

Flappy.setGapHeight = function (value) {
  var minGapSize = Flappy.MAZE_HEIGHT - Flappy.MIN_OBSTACLE_HEIGHT - Flappy.OBSTACLE_HEIGHT;
  if (value < minGapSize) {
    value = minGapSize;
  }
  Flappy.GAP_SIZE = value;
};

var skinTheme = function skinTheme(value) {
  if (value === 'flappy') {
    return skin;
  }
  return skin[value];
};

Flappy.setBackground = function (value) {
  var element = document.getElementById('background');
  element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skinTheme(value).background);
};

Flappy.setPlayer = function (value) {
  var element = document.getElementById('avatar');
  element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skinTheme(value).avatar);
};

Flappy.setObstacle = function (value) {
  var element;
  Flappy.obstacles.forEach(function (obstacle, index) {
    element = document.getElementById('obstacle_top' + index);
    element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skinTheme(value).obstacle_top);

    element = document.getElementById('obstacle_bottom' + index);
    element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skinTheme(value).obstacle_bottom);
  });
};

Flappy.setGround = function (value) {
  if (!level.ground) {
    return;
  }
  var element, i;
  for (i = 0; i < Flappy.MAZE_WIDTH / Flappy.GROUND_WIDTH + 1; i++) {
    element = document.getElementById('ground' + i);
    element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skinTheme(value).ground);
  }
};

var checkFinished = function checkFinished() {
  // if we have a success condition and have accomplished it, we're done and successful
  if (level.goal && level.goal.successCondition && level.goal.successCondition()) {
    Flappy.result = _constants.ResultType.SUCCESS;
    return true;
  }

  // if we have a failure condition, and it's been reached, we're done and failed
  if (level.goal && level.goal.failureCondition && level.goal.failureCondition()) {
    Flappy.result = _constants.ResultType.FAILURE;
    return true;
  }

  return false;
};

/***/ }),

/***/ 3073:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "placeholderwpa6fe4f1306776d8b941704e83016db21.jpg";

/***/ }),

/***/ 3074:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var studioApp = __webpack_require__(597).singleton;

exports.FlapHeight = {
  VERY_SMALL: -6,
  SMALL: -8,
  NORMAL: -11,
  LARGE: -13,
  VERY_LARGE: -15
};

exports.LevelSpeed = {
  VERY_SLOW: 1,
  SLOW: 3,
  NORMAL: 4,
  FAST: 6,
  VERY_FAST: 8
};

exports.GapHeight = {
  VERY_SMALL: 65,
  SMALL: 75,
  NORMAL: 100,
  LARGE: 125,
  VERY_LARGE: 150
};

exports.Gravity = {
  VERY_LOW: 0.5,
  LOW: 0.75,
  NORMAL: 1,
  HIGH: 1.25,
  VERY_HIGH: 1.5
};

exports.random = function (values) {
  var key = Math.floor(Math.random() * values.length);
  return values[key];
};

exports.setScore = function (id, value) {
  studioApp().highlight(id);
  Flappy.playerScore = value;
  Flappy.displayScore();
};

exports.setGravity = function (id, value) {
  studioApp().highlight(id);
  Flappy.gravity = value;
};

exports.setGround = function (id, value) {
  studioApp().highlight(id);
  Flappy.setGround(value);
};

exports.setObstacle = function (id, value) {
  studioApp().highlight(id);
  Flappy.setObstacle(value);
};

exports.setPlayer = function (id, value) {
  studioApp().highlight(id);
  Flappy.setPlayer(value);
};

exports.setGapHeight = function (id, value) {
  studioApp().highlight(id);
  Flappy.setGapHeight(value);
};

exports.setBackground = function (id, value) {
  studioApp().highlight(id);
  Flappy.setBackground(value);
};

exports.setSpeed = function (id, value) {
  studioApp().highlight(id);
  Flappy.SPEED = value;
};

exports.playSound = function (id, soundName) {
  studioApp().highlight(id);
  studioApp().playAudio(soundName);
};

exports.flap = function (id, amount) {
  studioApp().highlight(id);
  Flappy.flap(amount);
};

exports.endGame = function (id) {
  studioApp().highlight(id);
  Flappy.gameState = Flappy.GameStates.ENDING;
};

exports.incrementPlayerScore = function (id) {
  studioApp().highlight(id);
  Flappy.playerScore++;
  Flappy.displayScore();
};

/***/ }),

/***/ 3075:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ProtectedVisualizationDiv = __webpack_require__(788);

var _ProtectedVisualizationDiv2 = _interopRequireDefault(_ProtectedVisualizationDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msg = __webpack_require__(40);

var GameButtons = __webpack_require__(819).default;
var BelowVisualization = __webpack_require__(824);


var FlappyVisualizationColumn = function FlappyVisualizationColumn(_ref) {
  var showFinishButton = _ref.showFinishButton;

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      _ProtectedVisualizationDiv2.default,
      null,
      _react2.default.createElement('svg', { version: '1.1', id: 'svgFlappy' })
    ),
    _react2.default.createElement(
      GameButtons,
      null,
      showFinishButton && _react2.default.createElement(
        'div',
        { id: 'right-button-cell' },
        _react2.default.createElement(
          'button',
          { id: 'rightButton', className: 'share' },
          _react2.default.createElement('img', { src: '/blockly/media/1x1.gif' }),
          msg.finish()
        )
      )
    ),
    _react2.default.createElement(BelowVisualization, null)
  );
};
FlappyVisualizationColumn.propTypes = {
  showFinishButton: _react.PropTypes.bool.isRequired
};

module.exports = FlappyVisualizationColumn;

/***/ }),

/***/ 3076:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// todo - i think our prepoluated code counts as LOCs

var constants = __webpack_require__(2893);
var flappyMsg = __webpack_require__(2746);
var tb = __webpack_require__(743).createToolbox;
var utils = __webpack_require__(71);

var flapBlock = '<block type="flappy_flap"></block>';
var flapHeightBlock = '<block type="flappy_flap_height"></block>';
var endGameBlock = '<block type="flappy_endGame"></block>';
var playSoundBlock = '<block type="flappy_playSound"></block>';
var incrementScoreBlock = '<block type="flappy_incrementPlayerScore"></block>';

var setSpeedBlock = '<block type="flappy_setSpeed"></block>';
var setBackgroundBlock = '<block type="flappy_setBackground"></block>';
var setGapHeightBlock = '<block type="flappy_setGapHeight"></block>';
var setPlayerBlock = '<block type="flappy_setPlayer"></block>';
var setObstacleBlock = '<block type="flappy_setObstacle"></block>';
var setGroundBlock = '<block type="flappy_setGround"></block>';
var setGravityBlock = '<block type="flappy_setGravity"></block>';
var setScoreBlock = '<block type="flappy_setScore"></block>';

var AVATAR_HEIGHT = constants.AVATAR_HEIGHT;
var AVATAR_WIDTH = constants.AVATAR_WIDTH;

var eventBlock = function eventBlock(type, child) {
  return '<block type="' + type + '" deletable="false">' + (child ? '<next>' + child + '</next>' : '') + '</block>';
};

// not movable or deletable
var anchoredBlock = function anchoredBlock(type, child) {
  return '<block type="' + type + '" deletable="false" movable="false">' + (child ? '<next>' + child + '</next>' : '') + '</block>';
};

/*
 * Configuration for all levels.
 */

/**
 * Explanation of options:
 * goal.startX/startY
 * - start location of flag image
 * goal.moving
 * - whether the goal stays in one spot or moves at level's speed
 * goal.successCondition
 * - condition(s), which if true at any point, indicate user has successfully
 *   completed the puzzle
 * goal.failureCondition
 * - condition(s), which if true at any point, indicates the puzzle is
     complete (indicating failure if success condition not met)
 */

module.exports = {
  '1': {
    'instructionsImportant': true,
    'requiredBlocks': [[{ 'test': 'flap', 'type': 'flappy_flap' }]],
    'obstacles': false,
    'ground': false,
    'score': false,
    'freePlay': false,
    'goal': {
      startX: 100,
      startY: 0,
      successCondition: function successCondition() {
        return Flappy.avatarY <= 40;
      },
      failureCondition: function failureCondition() {
        return Flappy.avatarY > Flappy.MAZE_HEIGHT;
      }
    },
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapBlock + playSoundBlock),
    'startBlocks': eventBlock('flappy_whenClick'),
    'appSpecificFailError': flappyMsg.flappySpecificFail()
  },

  '2': {
    'requiredBlocks': [[{ 'test': 'endGame', 'type': 'flappy_endGame' }]],
    'obstacles': false,
    'ground': true,
    'score': false,
    'freePlay': false,
    'goal': {
      startX: 100,
      startY: 400 - 48 - 56 / 2,
      successCondition: function successCondition() {
        // this only happens after avatar hits ground, and we spin him because of
        // game over
        return Flappy.avatarY === 322 && Flappy.avatarX === 110;
      },
      failureCondition: function failureCondition() {
        var avatarBottom = Flappy.avatarY + AVATAR_HEIGHT;
        var ground = Flappy.MAZE_HEIGHT - Flappy.GROUND_HEIGHT;
        return avatarBottom >= ground && Flappy.gameState === Flappy.GameStates.ACTIVE;
      }
    },
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapBlock + endGameBlock + playSoundBlock),
    'startBlocks': eventBlock('flappy_whenClick', flapBlock) + eventBlock('flappy_whenCollideGround')
  },

  '3': {
    'requiredBlocks': [[{ 'test': 'setSpeed', 'type': 'flappy_setSpeed' }]],
    'obstacles': false,
    'ground': true,
    'score': false,
    'freePlay': false,
    'goal': {
      startX: 400 - 55,
      startY: 0,
      moving: true,
      successCondition: function successCondition() {
        var avatarCenter = {
          x: (Flappy.avatarX + AVATAR_WIDTH) / 2,
          y: (Flappy.avatarY + AVATAR_HEIGHT) / 2
        };
        var goalCenter = {
          x: (Flappy.goalX + Flappy.GOAL_SIZE) / 2,
          y: (Flappy.goalY + Flappy.GOAL_SIZE) / 2
        };

        var diff = {
          x: Math.abs(avatarCenter.x - goalCenter.x),
          y: Math.abs(avatarCenter.y - goalCenter.y)
        };

        return diff.x < 15 && diff.y < 15;
      },
      failureCondition: function failureCondition() {
        return Flappy.activeTicks() >= 120 && Flappy.SPEED === 0;
      }
    },
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapBlock + playSoundBlock + setSpeedBlock),
    'startBlocks': eventBlock('flappy_whenClick', flapBlock) + eventBlock('when_run')
  },

  '4': {
    'requiredBlocks': [[{ 'test': 'endGame', 'type': 'flappy_endGame' }]],
    'obstacles': true,
    'ground': true,
    'score': false,
    'freePlay': false,
    'goal': {
      startX: 600 - 56 / 2,
      startY: 400 - 48 - 56 / 2,
      moving: true,
      successCondition: function successCondition() {
        return Flappy.obstacles[0].hitAvatar && Flappy.gameState === Flappy.GameStates.OVER;
      },
      failureCondition: function failureCondition() {
        // todo - would be nice if we could distinguish feedback for
        // flew through pipe vs. didnt hook up endGame block
        var obstacleEnd = Flappy.obstacles[0].x + Flappy.OBSTACLE_WIDTH;
        return obstacleEnd < Flappy.avatarX;
      }
    },
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapBlock + endGameBlock + playSoundBlock + setSpeedBlock),
    'startBlocks': eventBlock('flappy_whenClick', flapBlock) + eventBlock('when_run', setSpeedBlock) + eventBlock('flappy_whenCollideObstacle')
  },

  '5': {
    'requiredBlocks': [[{ 'test': 'incrementPlayerScore', 'type': 'flappy_incrementPlayerScore' }]],
    'defaultFlap': 'SMALL',
    'obstacles': true,
    'ground': true,
    'score': true,
    'freePlay': false,
    'goal': {
      // todo - kind of ugly that we end up loopin through all obstacles twice,
      // once to check for success and again to check for failure
      successCondition: function successCondition() {
        var insideObstacle = false;
        Flappy.obstacles.forEach(function (obstacle) {
          if (!obstacle.hitAvatar && obstacle.containsAvatar()) {
            insideObstacle = true;
          }
        });
        return insideObstacle && Flappy.playerScore > 0;
      },
      failureCondition: function failureCondition() {
        var insideObstacle = false;
        Flappy.obstacles.forEach(function (obstacle) {
          if (!obstacle.hitAvatar && obstacle.containsAvatar()) {
            insideObstacle = true;
          }
        });
        return insideObstacle && Flappy.playerScore === 0;
      }
    },
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapBlock + endGameBlock + incrementScoreBlock + playSoundBlock + setSpeedBlock),
    'startBlocks': eventBlock('flappy_whenClick', flapBlock) + eventBlock('flappy_whenEnterObstacle') + eventBlock('when_run', setSpeedBlock)
  },

  '6': {
    'requiredBlocks': [[{ 'test': 'flap', 'type': 'flappy_flap_height' }]],
    'obstacles': true,
    'ground': true,
    'score': true,
    'freePlay': false,
    'goal': {
      successCondition: function successCondition() {
        var insideObstacle = false;
        Flappy.obstacles.forEach(function (obstacle) {
          if (obstacle.containsAvatar()) {
            insideObstacle = true;
          }
        });
        return insideObstacle && Flappy.playerScore > 0;
      },
      failureCondition: function failureCondition() {
        var insideObstacle = false;
        Flappy.obstacles.forEach(function (obstacle) {
          if (obstacle.containsAvatar()) {
            insideObstacle = true;
          }
        });
        return insideObstacle && Flappy.playerScore === 0;
      }
    },
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapHeightBlock + endGameBlock + incrementScoreBlock + playSoundBlock + setSpeedBlock),
    'startBlocks': eventBlock('flappy_whenClick') +
    // eventBlock('flappy_whenCollideGround', endGameBlock) +
    // eventBlock('flappy_whenCollideObstacle', endGameBlock) +
    eventBlock('flappy_whenEnterObstacle', incrementScoreBlock) + eventBlock('when_run', setSpeedBlock)
  },

  '7': {
    'requiredBlocks': [[{ 'test': 'setBackground', 'type': 'flappy_setBackground' }]],
    'obstacles': true,
    'ground': true,
    'score': true,
    'freePlay': false,
    'goal': {
      successCondition: function successCondition() {
        return Flappy.gameState === Flappy.GameStates.OVER;
      }
    },
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapHeightBlock + endGameBlock + incrementScoreBlock + playSoundBlock + setSpeedBlock + setBackgroundBlock),
    'startBlocks': eventBlock('flappy_whenClick', flapHeightBlock) + eventBlock('flappy_whenCollideGround', endGameBlock) + eventBlock('flappy_whenCollideObstacle', endGameBlock) + eventBlock('flappy_whenEnterObstacle', incrementScoreBlock) + eventBlock('when_run', setSpeedBlock)
  },

  '8': {
    'requiredBlocks': [[{
      test: function test(block) {
        return (block.type === 'flappy_setBackground' || block.type === 'flappy_setPlayer') && block.getTitleValue('VALUE') === 'random';
      },
      type: 'flappy_setBackground',
      titles: {
        'VALUE': 'random'
      }
    }]],
    'obstacles': true,
    'ground': true,
    'score': true,
    'freePlay': false,
    'goal': {
      successCondition: function successCondition() {
        return Flappy.gameState === Flappy.GameStates.OVER;
      }
    },
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapHeightBlock + endGameBlock + incrementScoreBlock + playSoundBlock + setSpeedBlock + setBackgroundBlock + setPlayerBlock),
    'startBlocks': eventBlock('flappy_whenClick', flapHeightBlock) + eventBlock('flappy_whenCollideGround', endGameBlock) + eventBlock('flappy_whenCollideObstacle', endGameBlock) + eventBlock('flappy_whenEnterObstacle', incrementScoreBlock) + eventBlock('when_run', setSpeedBlock)
  },

  '9': {
    'requiredBlocks': [[{
      test: function test(block) {
        return block.type === 'flappy_setScore';
      },
      type: 'flappy_setScore'
    }]],
    'obstacles': true,
    'ground': true,
    'score': true,
    'freePlay': false,
    'goal': {
      successCondition: function successCondition() {
        return Flappy.gameState === Flappy.GameStates.OVER;
      }
    },
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapHeightBlock + endGameBlock + incrementScoreBlock + playSoundBlock + setSpeedBlock + setBackgroundBlock + setPlayerBlock + setScoreBlock),
    'startBlocks': eventBlock('flappy_whenClick', flapHeightBlock) + eventBlock('flappy_whenCollideGround', endGameBlock) + eventBlock('flappy_whenCollideObstacle') + eventBlock('flappy_whenEnterObstacle', incrementScoreBlock) + eventBlock('when_run', setSpeedBlock)
  },

  '11': {
    shareable: true,
    'requiredBlocks': [],
    'obstacles': true,
    'ground': true,
    'score': true,
    'freePlay': true,
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapHeightBlock + playSoundBlock + incrementScoreBlock + endGameBlock + setSpeedBlock + setBackgroundBlock + setPlayerBlock + setObstacleBlock + setGroundBlock + setGapHeightBlock + setGravityBlock + setScoreBlock),
    'startBlocks': eventBlock('flappy_whenClick') + eventBlock('flappy_whenCollideGround') + eventBlock('flappy_whenCollideObstacle') + eventBlock('flappy_whenEnterObstacle') + eventBlock('when_run')
  },
  'k1': {
    'requiredBlocks': [],
    'obstacles': true,
    'ground': true,
    'score': true,
    'freePlay': true,
    isK1: true,
    'scale': {
      'snapRadius': 2
    },
    'toolbox': tb(flapBlock + endGameBlock + setBackgroundBlock + setPlayerBlock + setObstacleBlock + setGroundBlock + playSoundBlock + flapHeightBlock + setSpeedBlock + incrementScoreBlock + setGapHeightBlock + setGravityBlock + setScoreBlock),
    'startBlocks': eventBlock('flappy_whenClick') + eventBlock('flappy_whenCollideGround') + eventBlock('flappy_whenCollideObstacle') + eventBlock('flappy_whenEnterObstacle') + eventBlock('when_run')
  }
};

module.exports.k1_1 = {
  'isK1': true,
  grayOutUndeletableBlocks: true,
  'requiredBlocks': [],
  'obstacles': true,
  'ground': true,
  'score': true,
  'freePlay': true,
  'scale': {
    'snapRadius': 2
  },
  'toolbox': '',
  'startBlocks': anchoredBlock('flappy_whenClick', anchoredBlock('flappy_flap')) + anchoredBlock('flappy_whenCollideGround', anchoredBlock('flappy_endGame')) + anchoredBlock('flappy_whenCollideObstacle', anchoredBlock('flappy_endGame')) + anchoredBlock('flappy_whenEnterObstacle', anchoredBlock('flappy_incrementPlayerScore')) + anchoredBlock('when_run', anchoredBlock('flappy_setSpeed'))
};

// flap to goal
module.exports.k1_2 = utils.extend(module.exports['1'], { 'isK1': true });

// hit ground
module.exports.k1_3 = utils.extend(module.exports['2'], { 'isK1': true });

// set speed
module.exports.k1_4 = utils.extend(module.exports['3'], { 'isK1': true });

// crash into obstacle
module.exports.k1_5 = utils.extend(module.exports['4'], { 'isK1': true });

// pass through obstacle, score a point
module.exports.k1_6 = utils.extend(module.exports['5'], { 'isK1': true });

// score multiple points for each pass
module.exports.k1_7 = {
  'isK1': true,
  'requiredBlocks': [[{ 'test': 'incrementPlayerScore', 'type': 'flappy_incrementPlayerScore' }]],
  'defaultFlap': 'SMALL',
  'obstacles': true,
  'ground': true,
  'score': true,
  'freePlay': false,
  'goal': {
    // todo - kind of ugly that we end up loopin through all obstacles twice,
    // once to check for success and again to check for failure
    successCondition: function successCondition() {
      var insideObstacle = false;
      Flappy.obstacles.forEach(function (obstacle) {
        if (!obstacle.hitAvatar && obstacle.containsAvatar()) {
          insideObstacle = true;
        }
      });
      return insideObstacle && Flappy.playerScore > 1;
    },
    failureCondition: function failureCondition() {
      var insideObstacle = false;
      Flappy.obstacles.forEach(function (obstacle) {
        if (!obstacle.hitAvatar && obstacle.containsAvatar()) {
          insideObstacle = true;
        }
      });
      return insideObstacle && Flappy.playerScore <= 1;
    }
  },
  'scale': {
    'snapRadius': 2
  },
  'toolbox': tb(flapBlock + endGameBlock + incrementScoreBlock + playSoundBlock + setSpeedBlock),
  'startBlocks': eventBlock('flappy_whenClick', flapBlock) + eventBlock('flappy_whenEnterObstacle') + eventBlock('when_run', setSpeedBlock)
};

// change the scene
module.exports.k1_8 = utils.extend(module.exports['7'], {
  'isK1': true,
  // override regular flappy so that we dont use variable flap block
  'toolbox': tb(flapBlock + endGameBlock + incrementScoreBlock + playSoundBlock + setSpeedBlock + setBackgroundBlock),
  'startBlocks': eventBlock('flappy_whenClick', flapBlock) + eventBlock('flappy_whenCollideGround', endGameBlock) + eventBlock('flappy_whenCollideObstacle', endGameBlock) + eventBlock('flappy_whenEnterObstacle', incrementScoreBlock) + eventBlock('when_run', setSpeedBlock)
});

// changing the player
module.exports.k1_9 = {
  'isK1': true,
  'requiredBlocks': [[{ 'test': 'setPlayer', 'type': 'flappy_setPlayer' }]],
  'obstacles': true,
  'ground': true,
  'score': true,
  'freePlay': false,
  'goal': {
    successCondition: function successCondition() {
      return Flappy.gameState === Flappy.GameStates.OVER;
    }
  },
  'scale': {
    'snapRadius': 2
  },
  'toolbox': tb(flapBlock + endGameBlock + incrementScoreBlock + playSoundBlock + setSpeedBlock + setBackgroundBlock + setPlayerBlock),
  'startBlocks': eventBlock('flappy_whenClick', flapBlock) + eventBlock('flappy_whenCollideGround', endGameBlock) + eventBlock('flappy_whenCollideObstacle', endGameBlock) + eventBlock('flappy_whenEnterObstacle', incrementScoreBlock) + eventBlock('when_run', setSpeedBlock)
};

// custom
module.exports.custom = {
  'requiredBlocks': [],
  'obstacles': true,
  'ground': true,
  'score': true,
  'freePlay': false,
  'goal': {
    successCondition: function successCondition() {
      return Flappy.gameState === Flappy.GameStates.OVER;
    }
  },
  'scale': {
    'snapRadius': 2
  },
  'toolbox': tb(flapBlock + endGameBlock + incrementScoreBlock + playSoundBlock + setSpeedBlock + setBackgroundBlock + setPlayerBlock),
  'startBlocks': eventBlock('flappy_whenClick', flapBlock) + eventBlock('flappy_whenCollideGround', endGameBlock) + eventBlock('flappy_whenCollideObstacle', endGameBlock) + eventBlock('flappy_whenEnterObstacle', incrementScoreBlock) + eventBlock('when_run', setSpeedBlock)
};

/***/ })

},[3069]);