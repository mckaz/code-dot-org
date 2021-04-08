webpackJsonp([24],{

/***/ 1736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants for cardinal directions.  Subsequent code assumes these are
 * in the range 0..3 and that opposites have an absolute difference of 2.
 * @enum {number}
 */
exports.Direction = {
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3
};

exports.PADDLE_BALL_COLLIDE_DISTANCE = 0.7;
exports.FINISH_COLLIDE_DISTANCE = 0.5;
exports.DEFAULT_BALL_SPEED = 0.1;
exports.DEFAULT_BALL_DIRECTION = 1.25 * Math.PI;
exports.DEFAULT_PADDLE_SPEED = 0.1;
exports.DEFAULT_BALL_START_Y = 2;
exports.Y_TOP_BOUNDARY = -0.2;

/**
 * The types of squares in the maze, which is represented
 * as a 2D array of SquareType values.
 * @enum {number}
 */
exports.SquareType = {
  OPEN: 0,
  WALL: 1,
  GOAL: 2,
  BALLSTART: 4,
  PADDLEFINISH: 8,
  PADDLESTART: 16,
  BALLFINISH: 32,
  OBSTACLE: 64
};

/***/ }),

/***/ 2709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Load Skin for Bounce.
 */
// tiles: A 250x200 set of 20 map images.
// goal: A 20x34 goal image.
// background: Number of 400x400 background images. Randomly select one if
// specified, otherwise, use background.png.
// graph: Colour of optional grid lines, or false.

var skinsBase = __webpack_require__(744);
var msg = __webpack_require__(2127);

var CONFIGS = {
  bounce: {
    nonDisappearingPegmanHittingObstacle: true,
    backgrounds: ['hardcourt', 'retro'],
    balls: ['hardcourt', 'retro'],
    ballYOffset: 10,
    drawTiles: true,
    markerHeight: 43,
    markerWidth: 50,
    blockMsgs: {
      launchBall: msg.launchBall(),
      launchBallTooltip: msg.launchBallTooltip(),
      paddleCollide: msg.whenPaddleCollided(),
      paddleCollideTooltip: msg.whenPaddleCollidedTooltip(),
      paddleMiss: msg.whenBallMissesPaddle(),
      paddleSpeedRandom: msg.setPaddleSpeedRandom(),
      paddleSpeedVerySlow: msg.setPaddleSpeedVerySlow(),
      paddleSpeedSlow: msg.setPaddleSpeedSlow(),
      paddleSpeedNormal: msg.setPaddleSpeedNormal(),
      paddleSpeedFast: msg.setPaddleSpeedFast(),
      paddleSpeedVeryFast: msg.setPaddleSpeedVeryFast(),
      paddleSpeedTooltip: msg.setPaddleSpeedTooltip(),
      setPaddle: msg.setPaddle()
    },
    customSounds: {
      ballstart: {
        filenames: ['ball_start.mp3', 'ball_start.ogg']
      },
      flag: {
        filenames: ['win_goal.mp3', 'win_goal.ogg']
      },

      hit: {
        msg: msg.playSoundHit(),
        filenames: ['2_wall_bounce.mp3', '2_wall_bounce.ogg']
      },
      wood: {
        msg: msg.playSoundWood(),
        filenames: ['1_paddle_bounce.mp3', '1_paddle_bounce.ogg']
      },
      retro: {
        msg: msg.playSoundRetro(),
        filenames: ['2_paddle_bounce.mp3', '2_paddle_bounce.ogg']
      },
      slap: {
        msg: msg.playSoundSlap(),
        filenames: ['1_wall_bounce.mp3', '1_wall_bounce.ogg']
      },
      rubber: {
        msg: msg.playSoundRubber(),
        filenames: ['wall.mp3', 'wall.ogg']
      },
      crunch: {
        msg: msg.playSoundCrunch(),
        filenames: ['wall0.mp3', 'wall0.ogg']
      },
      winpoint: {
        msg: msg.playSoundWinPoint(),
        filenames: ['1_we_win.mp3', '1_we_win.ogg']
      },
      winpoint2: {
        msg: msg.playSoundWinPoint2(),
        filenames: ['2_we_win.mp3', '2_we_win.ogg']
      },
      losepoint: {
        msg: msg.playSoundLosePoint(),
        filenames: ['1_we_lose.mp3', '1_we_lose.ogg']
      },
      losepoint2: {
        msg: msg.playSoundLosePoint2(),
        filenames: ['2_we_lose.mp3', '2_we_lose.ogg']
      },
      goal1: {
        msg: msg.playSoundGoal1(),
        filenames: ['1_goal.mp3', '1_goal.ogg']
      },
      goal2: {
        msg: msg.playSoundGoal2(),
        filenames: ['2_goal.mp3', '2_goal.ogg']
      }
    }
  },

  basketball: {
    drawTiles: true,
    goalSuccess: 'goal.png',
    paddle: 'hand_1.png',
    markerHeight: 61,
    markerWidth: 54,
    balls: ['hardcourt', 'retro'],
    paddles: ['hand_1', 'hand_2', 'hand_3'],
    teams: ['Atlanta Dream', 'Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 'Chicago Sky', 'Cleveland Cavaliers', 'Connecticut Sun', 'Dallas Mavericks', 'Dallas Wings', 'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Fever', 'Indiana Pacers', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Los Angeles Sparks', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Lynx', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks', 'New York Liberty', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Mercury', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'San Antonio Stars', 'Seattle Storm', 'Toronto Raptors', 'Utah Jazz', 'Washington Mystics', 'Washington Wizards'],
    blockMsgs: {
      launchBall: msg.basketballLaunchBall(),
      launchBallTooltip: msg.basketballLaunchBallTooltip(),
      paddleCollide: msg.basketballWhenPaddleCollided(),
      paddleCollideTooltip: msg.whenPaddleCollidedTooltip(),
      paddleMiss: msg.basketballWhenBallMissesPaddle(),
      paddleSpeedRandom: msg.basketballSetPaddleSpeedRandom(),
      paddleSpeedVerySlow: msg.basketballSetPaddleSpeedVerySlow(),
      paddleSpeedSlow: msg.basketballSetPaddleSpeedSlow(),
      paddleSpeedNormal: msg.basketballSetPaddleSpeedNormal(),
      paddleSpeedFast: msg.basketballSetPaddleSpeedFast(),
      paddleSpeedVeryFast: msg.basketballSetPaddleSpeedVeryFast(),
      paddleSpeedTooltip: msg.basketballSetPaddleSpeedTooltip(),
      setPaddle: msg.basketballSetPaddle()
    },
    customSounds: {
      bounce: {
        msg: msg.playSoundBounce(),
        filenames: ['bounce.mp3', 'bounce.ogg']
      },
      cheer: {
        msg: msg.playSoundCheer(),
        filenames: ['cheer.mp3', 'cheer.ogg']
      },
      whistle: {
        msg: msg.playSoundWhistle(),
        filenames: ['whistle.mp3', 'whistle.ogg']
      },
      swish: {
        msg: msg.playSoundSwish(),
        filenames: ['swish.mp3', 'swish.ogg']
      }
    }
  },

  sports: {
    drawTiles: true,
    backgrounds: ['basketball', 'football', 'hockey', 'soccer'],
    balls: ['basketball', 'football', 'hockey', 'soccer'],
    paddles: ['hand_1', 'hand_2', 'hand_3', 'hockey_stick', 'foot'],
    background: 'basketball_background.png',
    ball: 'basketball_ball.png',
    paddle: 'basketball_paddle.png',
    blockMsgs: {
      launchBall: msg.basketballLaunchBall(),
      launchBallTooltip: msg.basketballLaunchBallTooltip(),
      paddleCollide: msg.whenPlayerCollided(),
      paddleCollideTooltip: msg.whenPlayerCollidedTooltip(),
      paddleMiss: msg.whenBallMissesPlayer(),
      paddleSpeedRandom: msg.setPlayerSpeedRandom(),
      paddleSpeedVerySlow: msg.setPlayerSpeedVerySlow(),
      paddleSpeedSlow: msg.setPlayerSpeedSlow(),
      paddleSpeedNormal: msg.setPlayerSpeedNormal(),
      paddleSpeedFast: msg.setPlayerSpeedFast(),
      paddleSpeedVeryFast: msg.setPlayerSpeedVeryFast(),
      paddleSpeedTooltip: msg.setPlayerSpeedTooltip(),
      setPaddle: msg.setPlayer()
    },
    customSounds: {
      bounce: {
        msg: msg.playSoundBounce(),
        filenames: ['bounce.mp3', 'bounce.ogg']
      },
      cheer: {
        msg: msg.playSoundCheer(),
        filenames: ['cheer.mp3', 'cheer.ogg']
      },
      whistle: {
        msg: msg.playSoundWhistle(),
        filenames: ['whistle.mp3', 'whistle.ogg']
      },
      swish: {
        msg: msg.playSoundSwish(),
        filenames: ['swish.mp3', 'swish.ogg']
      },
      slapshot: {
        msg: msg.playSoundSlapshot(),
        filenames: ['slapshot.mp3', 'slapshot.ogg']
      },
      kick: {
        msg: msg.playSoundKick(),
        filenames: ['kick.mp3', 'kick.ogg']
      }
    }
  }
};

exports.load = function (assetUrl, id) {
  var skin = skinsBase.load(assetUrl, id);
  var config = CONFIGS[skin.id];

  skin.retro = {
    background: skin.assetUrl('retro_background.png'),
    tiles: skin.assetUrl('retro_tiles_wall.png'),
    goalTiles: skin.assetUrl('retro_tiles_goal.png'),
    paddle: skin.assetUrl('retro_paddle.png'),
    ball: skin.assetUrl('retro_ball.png')
  };
  skin.hand_1 = {
    paddle: skin.assetUrl('hand_1.png')
  };
  skin.hand_2 = {
    paddle: skin.assetUrl('hand_2.png')
  };
  skin.hand_3 = {
    paddle: skin.assetUrl('hand_3.png')
  };
  skin.hockey_stick = {
    paddle: skin.assetUrl('hockey_paddle.png')
  };
  skin.foot = {
    paddle: skin.assetUrl('soccer_paddle.png')
  };
  skin.basketball = {
    background: skin.assetUrl('basketball_background.png'),
    ball: skin.assetUrl('basketball_ball.png'),
    paddle: skin.hand_1.paddle
  };
  skin.soccer = {
    background: skin.assetUrl('soccer_background.png'),
    ball: skin.assetUrl('soccer_ball.png'),
    drawTiles: false,
    paddle: skin.foot.paddle
  };
  skin.hockey = {
    background: skin.assetUrl('hockey_background.png'),
    ball: skin.assetUrl('hockey_ball.png'),
    drawTiles: false,
    paddle: skin.hockey_stick.paddle
  };
  skin.football = {
    background: skin.assetUrl('football_background.png'),
    ball: skin.assetUrl('football_ball.png'),
    drawTiles: false,
    paddle: skin.foot.paddle,
    rotateBall: true
  };

  // Images
  skin.tiles = skin.assetUrl(config.tiles || 'tiles_wall.png');
  skin.goalTiles = skin.assetUrl(config.goalTiles || 'tiles_goal.png');
  skin.goal = skin.assetUrl(config.goal || 'goal.png');
  skin.goalSuccess = skin.assetUrl(config.goalSuccess || 'goal_success.png');
  skin.flagGoal = skin.assetUrl('flag_goal.png');
  skin.flagGoalSuccess = skin.assetUrl('flag_goal_success.png');
  skin.ball = skin.assetUrl(config.ball || 'ball.png');
  skin.paddle = skin.assetUrl(config.paddle || 'paddle.png');
  skin.obstacle = skin.assetUrl(config.obstacle || 'obstacle.png');
  skin.background = skin.assetUrl(config.background || 'background.png');

  skin.nonDisappearingPegmanHittingObstacle = !!config.nonDisappearingPegmanHittingObstacle;

  skin.obstacleScale = config.obstacleScale || 1.0;

  skin.largerObstacleAnimationTiles = skin.assetUrl(config.largerObstacleAnimationTiles);
  skin.hittingWallAnimation = skin.assetUrl(config.hittingWallAnimation);
  skin.approachingGoalAnimation = skin.assetUrl(config.approachingGoalAnimation);
  skin.drawTiles = config.drawTiles;
  skin.backgrounds = config.backgrounds || [];
  skin.balls = config.balls || [];
  skin.paddles = config.paddles || ['paddle'];
  skin.teams = config.teams || [];
  skin.teamBackgrounds = {};
  skin.teams.forEach(function (team) {
    return skin.teamBackgrounds[team] = skin.assetUrl('teams/' + team + '.png');
  });
  skin.blockMsgs = config.blockMsgs;

  // Sounds
  skin.customSounds = config.customSounds || {};
  for (var sound in skin.customSounds) {
    skin.customSounds[sound].urls = skin.customSounds[sound].filenames.map(skin.assetUrl);
  }

  skin.pegmanHeight = config.pegmanHeight || 52;
  skin.pegmanWidth = config.pegmanWidth || 49;
  skin.ballYOffset = config.ballYOffset || 0;
  skin.paddleYOffset = config.paddleYOffset || 0;
  skin.markerHeight = config.markerHeight || 50;
  skin.markerWidth = config.markerWidth || 50;
  skin.flagHeight = 43;
  skin.flagWidth = 50;
  return skin;
};

/***/ }),

/***/ 3017:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3018);


/***/ }),

/***/ 3018:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadBounce = __webpack_require__(3019);

var _loadBounce2 = _interopRequireDefault(_loadBounce);

var _loadApp = __webpack_require__(820);

var _loadApp2 = _interopRequireDefault(_loadApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _loadApp2.default)().then(_loadBounce2.default);

/***/ }),

/***/ 3019:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadBounce;

var _appMain = __webpack_require__(853);

var _appMain2 = _interopRequireDefault(_appMain);

var _bounce = __webpack_require__(3020);

var _bounce2 = _interopRequireDefault(_bounce);

var _blocks = __webpack_require__(2880);

var _blocks2 = _interopRequireDefault(_blocks);

var _levels = __webpack_require__(3023);

var _levels2 = _interopRequireDefault(_levels);

var _skins = __webpack_require__(2709);

var _skins2 = _interopRequireDefault(_skins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Bounce = _bounce2.default;
if (typeof global !== "undefined") {
  global.Bounce = window.Bounce;
}
function loadBounce(options) {
  options.skinsModule = _skins2.default;
  options.blocksModule = _blocks2.default;
  (0, _appMain2.default)(_bounce2.default, _levels2.default, options);
}
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),

/***/ 3020:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CustomMarshalingInterpreter = __webpack_require__(850);

var _CustomMarshalingInterpreter2 = _interopRequireDefault(_CustomMarshalingInterpreter);

var _redux = __webpack_require__(237);

var _twitterHelper = __webpack_require__(1735);

var _constants = __webpack_require__(216);

__webpack_require__(1724);

var _progressRedux = __webpack_require__(498);

var _timeoutList = __webpack_require__(1014);

var timeoutList = _interopRequireWildcard(_timeoutList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Blockly App: Bounce
 *
 * Copyright 2013 Code.org
 *
 */
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(32);
var studioApp = __webpack_require__(597).singleton;
var bounceMsg = __webpack_require__(2127);
var tiles = __webpack_require__(1736);

var api = __webpack_require__(3021);
var Provider = __webpack_require__(53).Provider;
var AppView = __webpack_require__(944);
var BounceVisualizationColumn = __webpack_require__(3022);
var dom = __webpack_require__(594);
var Hammer = __webpack_require__(2879);
var constants = __webpack_require__(216);

var KeyCodes = constants.KeyCodes;


var SquareType = tiles.SquareType;

/**
 * Create a namespace for the application.
 */
var Bounce = module.exports;

Bounce.keyState = {};
Bounce.gesturesObserved = {};
Bounce.btnState = {};

var ButtonState = {
  UP: 0,
  DOWN: 1
};

Bounce.BallFlags = {
  MISSED_PADDLE: 1,
  IN_GOAL: 2,
  LAUNCHING: 4
};

var ArrowIds = {
  LEFT: 'leftButton',
  UP: 'upButton',
  RIGHT: 'rightButton',
  DOWN: 'downButton'
};

var DRAG_DISTANCE_TO_MOVE_RATIO = 25;

var level;
var skin;

//TODO: Make configurable.
studioApp().setCheckForEmptyBlocks(true);

// Default Scalings
Bounce.scale = {
  'snapRadius': 1,
  'stepSpeed': 33
};

var twitterOptions = {
  text: bounceMsg.shareBounceTwitterDonor({ donor: (0, _twitterHelper.getRandomDonorTwitter)() }),
  hashtag: "BounceCode"
};

var loadLevel = function loadLevel() {
  // Load maps.
  Bounce.map = level.map;
  Bounce.timeoutFailureTick = level.timeoutFailureTick || Infinity;
  Bounce.minWorkspaceHeight = level.minWorkspaceHeight;
  Bounce.softButtons_ = level.softButtons || [];
  Bounce.respawnBalls = level.respawnBalls || false;
  Bounce.failOnBallExit = level.failOnBallExit || false;
  Bounce.goal = level.useFlagGoal ? skin.flagGoal : skin.goal;
  Bounce.goalSuccess = level.useFlagGoal ? skin.flagGoalSuccess : skin.goalSuccess;

  // Override scalars.
  for (var key in level.scale) {
    Bounce.scale[key] = level.scale[key];
  }

  // Measure maze dimensions and set sizes.
  // ROWS: Number of tiles down.
  Bounce.ROWS = Bounce.map.length;
  // COLS: Number of tiles across.
  Bounce.COLS = Bounce.map[0].length;
  // Initialize the wallMap.
  initWallMap();
  // Pixel height and width of each maze square (i.e. tile).
  Bounce.SQUARE_SIZE = 50;
  Bounce.PEGMAN_HEIGHT = skin.pegmanHeight;
  Bounce.PEGMAN_WIDTH = skin.pegmanWidth;
  Bounce.BALL_Y_OFFSET = skin.ballYOffset;
  Bounce.PADDLE_Y_OFFSET = skin.paddleYOffset;
  // Height and width of the goal and obstacles.
  Bounce.MARKER_HEIGHT = skin.markerHeight;
  Bounce.MARKER_WIDTH = skin.markerWidth;
  Bounce.GOAL_HEIGHT = level.useFlagGoal ? skin.flagHeight : skin.markerHeight;
  Bounce.GOAL_WIDTH = level.useFlagGoal ? skin.flagWidth : skin.markerWidth;

  Bounce.MAZE_WIDTH = Bounce.SQUARE_SIZE * Bounce.COLS;
  Bounce.MAZE_HEIGHT = Bounce.SQUARE_SIZE * Bounce.ROWS;
  Bounce.PATH_WIDTH = Bounce.SQUARE_SIZE / 3;
};

var initWallMap = function initWallMap() {
  Bounce.wallMap = new Array(Bounce.ROWS);
  for (var y = 0; y < Bounce.ROWS; y++) {
    Bounce.wallMap[y] = new Array(Bounce.COLS);
  }
};

/**
 * PIDs of async tasks currently executing.
 */


// Map each possible shape to a sprite.
// Input: Binary string representing Centre/North/East/South/West squares.
// Output: [x, y] coordinates of each tile's sprite in tiles.png.
var WALL_TILE_SHAPES = {
  '1X101': [1, 0], // Horiz top
  '11X10': [2, 1], // Vert right
  '11XX0': [2, 1], // Bottom right corner
  '1XX11': [2, 0], // Top right corner
  '1X001': [1, 0], // Top horiz right end
  '1X100': [1, 0], // Top horiz left end
  '1101X': [0, 1], // Vert left
  '110XX': [0, 1], // Bottom left corner
  '1X11X': [0, 0], // Top left corner
  'null0': [1, 1] // Empty
};

var GOAL_TILE_SHAPES = {
  '1X101': [2, 3], // Horiz top
  '1XX11': [3, 3], // Top right corner
  '1X001': [3, 3], // Top horiz right end
  '1X11X': [0, 2], // Top left corner
  '1X100': [0, 2], // Top horiz left end
  'null0': [1, 1] // Empty
};

// Return a value of '0' if the specified square is not a wall, '1' for
// a wall, 'X' for out of bounds
var wallNormalize = function wallNormalize(x, y) {
  return Bounce.map[y] === undefined || Bounce.map[y][x] === undefined ? 'X' : Bounce.map[y][x] & SquareType.WALL ? '1' : '0';
};

// Return a value of '0' if the specified square is not a wall, '1' for
// a wall, 'X' for out of bounds
var goalNormalize = function goalNormalize(x, y) {
  return Bounce.map[y] === undefined || Bounce.map[y][x] === undefined ? 'X' : Bounce.map[y][x] & SquareType.GOAL ? '1' : '0';
};

// Create ball elements
Bounce.createBallElements = function (i) {
  var svg = document.getElementById('svgBounce');
  // Ball's clipPath element, whose (x, y) is reset by Bounce.displayBall
  var ballClip = document.createElementNS(Blockly.SVG_NS, 'clipPath');
  ballClip.setAttribute('id', 'ballClipPath' + i);
  var ballClipRect = document.createElementNS(Blockly.SVG_NS, 'rect');
  ballClipRect.setAttribute('id', 'ballClipRect' + i);
  ballClipRect.setAttribute('width', Bounce.PEGMAN_WIDTH);
  ballClipRect.setAttribute('height', Bounce.PEGMAN_HEIGHT);
  ballClip.appendChild(ballClipRect);
  svg.appendChild(ballClip);

  // Add ball.
  var ballIcon = document.createElementNS(Blockly.SVG_NS, 'image');
  ballIcon.setAttribute('id', 'ball' + i);
  ballIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Bounce.ballImage);
  ballIcon.setAttribute('height', Bounce.PEGMAN_HEIGHT);
  ballIcon.setAttribute('width', Bounce.PEGMAN_WIDTH);
  ballIcon.setAttribute('clip-path', 'url(#ballClipPath' + i + ')');
  svg.appendChild(ballIcon);
};

// Delete ball elements
Bounce.deleteBallElements = function (i) {
  var ballClipPath = document.getElementById('ballClipPath' + i);
  ballClipPath.parentNode.removeChild(ballClipPath);

  var ballIcon = document.getElementById('ball' + i);
  ballIcon.parentNode.removeChild(ballIcon);
};

var drawMap = function drawMap() {
  var svg = document.getElementById('svgBounce');
  var i, x, y, tile;

  // Adjust outer element size.
  svg.setAttribute('width', Bounce.MAZE_WIDTH);
  svg.setAttribute('height', Bounce.MAZE_HEIGHT);

  // Attach drag handler.
  var hammerSvg = new Hammer(svg);
  hammerSvg.on("drag", Bounce.onSvgDrag);

  // Adjust visualizationColumn width.
  var visualizationColumn = document.getElementById('visualizationColumn');
  visualizationColumn.style.width = Bounce.MAZE_WIDTH + 'px';

  if (skin.background) {
    tile = document.createElementNS(Blockly.SVG_NS, 'image');
    tile.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.background);
    tile.setAttribute('id', 'background');
    tile.setAttribute('height', Bounce.MAZE_HEIGHT);
    tile.setAttribute('width', Bounce.MAZE_WIDTH);
    tile.setAttribute('x', 0);
    tile.setAttribute('y', 0);
    svg.appendChild(tile);
  }

  // Draw the tiles making up the maze map.

  // Compute and draw the tile for each square.
  var tileId = 0;
  for (y = 0; y < Bounce.ROWS; y++) {
    for (x = 0; x < Bounce.COLS; x++) {
      var left;
      var top;
      var image;
      // Compute the tile index.
      tile = wallNormalize(x, y) + wallNormalize(x, y - 1) + // North.
      wallNormalize(x + 1, y) + // East.
      wallNormalize(x, y + 1) + // South.
      wallNormalize(x - 1, y); // West.

      // Draw the tile.
      if (WALL_TILE_SHAPES[tile]) {
        left = WALL_TILE_SHAPES[tile][0];
        top = WALL_TILE_SHAPES[tile][1];
        image = skin.tiles;
      } else {
        // Compute the tile index.
        tile = goalNormalize(x, y) + goalNormalize(x, y - 1) + // North.
        goalNormalize(x + 1, y) + // East.
        goalNormalize(x, y + 1) + // South.
        goalNormalize(x - 1, y); // West.

        if (!GOAL_TILE_SHAPES[tile]) {
          // Empty square.  Use null0.
          tile = 'null0';
        }
        left = GOAL_TILE_SHAPES[tile][0];
        top = GOAL_TILE_SHAPES[tile][1];
        image = skin.goalTiles;
      }
      if (tile !== 'null0' && Bounce.drawTiles) {
        // Tile's clipPath element.
        var tileClip = document.createElementNS(Blockly.SVG_NS, 'clipPath');
        tileClip.setAttribute('id', 'tileClipPath' + tileId);
        var tileClipRect = document.createElementNS(Blockly.SVG_NS, 'rect');
        tileClipRect.setAttribute('width', Bounce.SQUARE_SIZE);
        tileClipRect.setAttribute('height', Bounce.SQUARE_SIZE);

        tileClipRect.setAttribute('x', x * Bounce.SQUARE_SIZE);
        tileClipRect.setAttribute('y', y * Bounce.SQUARE_SIZE);

        tileClip.appendChild(tileClipRect);
        svg.appendChild(tileClip);
        // Tile sprite.
        var tileElement = document.createElementNS(Blockly.SVG_NS, 'image');
        tileElement.setAttribute('id', 'tileElement' + tileId);
        tileElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', image);
        tileElement.setAttribute('height', Bounce.SQUARE_SIZE * 4);
        tileElement.setAttribute('width', Bounce.SQUARE_SIZE * 5);
        tileElement.setAttribute('clip-path', 'url(#tileClipPath' + tileId + ')');
        tileElement.setAttribute('x', (x - left) * Bounce.SQUARE_SIZE);
        tileElement.setAttribute('y', (y - top) * Bounce.SQUARE_SIZE);
        svg.appendChild(tileElement);
        // Tile animation
        var tileAnimation = document.createElementNS(Blockly.SVG_NS, 'animate');
        tileAnimation.setAttribute('id', 'tileAnimation' + tileId);
        tileAnimation.setAttribute('attributeType', 'CSS');
        tileAnimation.setAttribute('attributeName', 'opacity');
        tileAnimation.setAttribute('from', 1);
        tileAnimation.setAttribute('to', 0);
        tileAnimation.setAttribute('dur', '1s');
        tileAnimation.setAttribute('begin', 'indefinite');
        tileElement.appendChild(tileAnimation);
      }

      tileId++;
    }
  }

  Bounce.ballImage = level.theme ? skin[level.theme].ball : skin.ball;
  for (i = 0; i < Bounce.ballCount; i++) {
    Bounce.createBallElements(i);
  }

  if (Bounce.paddleStart_) {
    // Paddle's clipPath element, whose (x, y) is reset by Bounce.displayPaddle
    var paddleClip = document.createElementNS(Blockly.SVG_NS, 'clipPath');
    paddleClip.setAttribute('id', 'paddleClipPath');
    var paddleClipRect = document.createElementNS(Blockly.SVG_NS, 'rect');
    paddleClipRect.setAttribute('id', 'paddleClipRect');
    paddleClipRect.setAttribute('width', Bounce.PEGMAN_WIDTH);
    paddleClipRect.setAttribute('height', Bounce.PEGMAN_HEIGHT);
    paddleClip.appendChild(paddleClipRect);
    svg.appendChild(paddleClip);

    // Add paddle.
    var paddleIcon = document.createElementNS(Blockly.SVG_NS, 'image');
    paddleIcon.setAttribute('id', 'paddle');
    paddleIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.paddle);
    paddleIcon.setAttribute('height', Bounce.PEGMAN_HEIGHT);
    paddleIcon.setAttribute('width', Bounce.PEGMAN_WIDTH);
    paddleIcon.setAttribute('clip-path', 'url(#paddleClipPath)');
    svg.appendChild(paddleIcon);
  }

  if (Bounce.paddleFinish_) {
    for (i = 0; i < Bounce.paddleFinishCount; i++) {
      // Add finish markers.
      var paddleFinishMarker = document.createElementNS(Blockly.SVG_NS, 'image');
      paddleFinishMarker.setAttribute('id', 'paddlefinish' + i);
      paddleFinishMarker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Bounce.goal);
      paddleFinishMarker.setAttribute('height', Bounce.GOAL_HEIGHT);
      paddleFinishMarker.setAttribute('width', Bounce.GOAL_WIDTH);
      svg.appendChild(paddleFinishMarker);
    }
  }

  if (Bounce.ballFinish_) {
    // Add ball finish marker.
    var ballFinishMarker = document.createElementNS(Blockly.SVG_NS, 'image');
    ballFinishMarker.setAttribute('id', 'ballfinish');
    ballFinishMarker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Bounce.goal);
    ballFinishMarker.setAttribute('height', Bounce.GOAL_HEIGHT);
    ballFinishMarker.setAttribute('width', Bounce.GOAL_WIDTH);
    svg.appendChild(ballFinishMarker);
  }

  var score = document.createElementNS(Blockly.SVG_NS, 'text');
  score.setAttribute('id', 'score');
  score.setAttribute('class', 'bounce-score');
  score.setAttribute('x', Bounce.MAZE_WIDTH / 2);
  score.setAttribute('y', 60);
  score.appendChild(document.createTextNode('0'));
  score.setAttribute('visibility', 'hidden');
  svg.appendChild(score);

  // Add wall hitting animation
  if (skin.hittingWallAnimation) {
    var wallAnimationIcon = document.createElementNS(Blockly.SVG_NS, 'image');
    wallAnimationIcon.setAttribute('id', 'wallAnimation');
    wallAnimationIcon.setAttribute('height', Bounce.SQUARE_SIZE);
    wallAnimationIcon.setAttribute('width', Bounce.SQUARE_SIZE);
    wallAnimationIcon.setAttribute('visibility', 'hidden');
    svg.appendChild(wallAnimationIcon);
  }

  // Add obstacles.
  var obsId = 0;
  for (y = 0; y < Bounce.ROWS; y++) {
    for (x = 0; x < Bounce.COLS; x++) {
      if (Bounce.map[y][x] === SquareType.OBSTACLE) {
        var obsIcon = document.createElementNS(Blockly.SVG_NS, 'image');
        obsIcon.setAttribute('id', 'obstacle' + obsId);
        obsIcon.setAttribute('height', Bounce.MARKER_HEIGHT * skin.obstacleScale);
        obsIcon.setAttribute('width', Bounce.MARKER_WIDTH * skin.obstacleScale);
        obsIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.obstacle);
        obsIcon.setAttribute('x', Bounce.SQUARE_SIZE * (x + 0.5) - obsIcon.getAttribute('width') / 2);
        obsIcon.setAttribute('y', Bounce.SQUARE_SIZE * (y + 0.9) - obsIcon.getAttribute('height'));
        svg.appendChild(obsIcon);
      }
      ++obsId;
    }
  }
};

Bounce.calcDistance = function (xDist, yDist) {
  return Math.sqrt(xDist * xDist + yDist * yDist);
};

var essentiallyEqual = function essentiallyEqual(float1, float2, opt_variance) {
  var variance = opt_variance || 0.01;
  return Math.abs(float1 - float2) < variance;
};

Bounce.isBallOutOfBounds = function (i) {
  if (Bounce.ballX[i] < 0) {
    return true;
  }
  if (Bounce.ballX[i] > Bounce.COLS - 1) {
    return true;
  }
  if (Bounce.ballY[i] < tiles.Y_TOP_BOUNDARY) {
    return true;
  }
  if (Bounce.ballY[i] > Bounce.ROWS - 1) {
    return true;
  }
  return false;
};

/**
 * @param scope Object :  The scope in which to execute the delegated function.
 * @param func Function : The function to execute
 * @param data Object or Array : The data to pass to the function. If the function is also passed arguments, the data is appended to the arguments list. If the data is an Array, each item is appended as a new argument.
 */
var delegate = function delegate(scope, func, data) {
  return function () {
    var args = Array.prototype.slice.apply(arguments).concat(data);
    func.apply(scope, args);
  };
};

/**
 * We want to swallow exceptions when executing user generated code. This provides
 * a single place to do so.
 */
Bounce.callUserGeneratedCode = function (fn) {
  try {
    fn.call(Bounce, api);
  } catch (e) {
    // swallow error. should we also log this somewhere?
    if (console) {
      console.log(e);
    }
  }
};

Bounce.onTick = function () {
  Bounce.tickCount++;

  if (Bounce.tickCount === 1) {
    Bounce.callUserGeneratedCode(Bounce.whenGameStarts);
  }

  // Run key event handlers for any keys that are down:
  for (var key in KeyCodes) {
    if (Bounce.keyState[KeyCodes[key]] && Bounce.keyState[KeyCodes[key]] === "keydown") {
      switch (KeyCodes[key]) {
        case KeyCodes.LEFT:
          Bounce.callUserGeneratedCode(Bounce.whenLeft);
          break;
        case KeyCodes.UP:
          Bounce.callUserGeneratedCode(Bounce.whenUp);
          break;
        case KeyCodes.RIGHT:
          Bounce.callUserGeneratedCode(Bounce.whenRight);
          break;
        case KeyCodes.DOWN:
          Bounce.callUserGeneratedCode(Bounce.whenDown);
          break;
      }
    }
  }

  for (var btn in ArrowIds) {
    if (Bounce.btnState[ArrowIds[btn]] && Bounce.btnState[ArrowIds[btn]] === ButtonState.DOWN) {
      switch (ArrowIds[btn]) {
        case ArrowIds.LEFT:
          Bounce.callUserGeneratedCode(Bounce.whenLeft);
          break;
        case ArrowIds.UP:
          Bounce.callUserGeneratedCode(Bounce.whenUp);
          break;
        case ArrowIds.RIGHT:
          Bounce.callUserGeneratedCode(Bounce.whenRight);
          break;
        case ArrowIds.DOWN:
          Bounce.callUserGeneratedCode(Bounce.whenDown);
          break;
      }
    }
  }

  for (var gesture in Bounce.gesturesObserved) {
    switch (gesture) {
      case 'left':
        Bounce.callUserGeneratedCode(Bounce.whenLeft);
        break;
      case 'up':
        Bounce.callUserGeneratedCode(Bounce.whenUp);
        break;
      case 'right':
        Bounce.callUserGeneratedCode(Bounce.whenRight);
        break;
      case 'down':
        Bounce.callUserGeneratedCode(Bounce.whenDown);
        break;
    }
    if (0 === Bounce.gesturesObserved[gesture]--) {
      delete Bounce.gesturesObserved[gesture];
    }
  }

  for (var i = 0; i < Bounce.ballCount; i++) {
    var deltaX = Bounce.ballSpeed[i] * Math.sin(Bounce.ballDir[i]);
    var deltaY = -Bounce.ballSpeed[i] * Math.cos(Bounce.ballDir[i]);

    var wasXOK = Bounce.ballX[i] >= 0 && Bounce.ballX[i] <= Bounce.COLS - 1;
    var wasYOK = Bounce.ballY[i] >= tiles.Y_TOP_BOUNDARY;
    var wasYAboveBottom = Bounce.ballY[i] <= Bounce.ROWS - 1;

    Bounce.ballX[i] += deltaX;
    Bounce.ballY[i] += deltaY;
    Bounce.ballRotation[i] += Bounce.ballRotationSpeed;

    if (0 === (Bounce.ballFlags[i] & (Bounce.BallFlags.MISSED_PADDLE | Bounce.BallFlags.IN_GOAL))) {
      var nowXOK = Bounce.ballX[i] >= 0 && Bounce.ballX[i] <= Bounce.COLS - 1;
      var nowYOK = Bounce.ballY[i] >= tiles.Y_TOP_BOUNDARY;
      var nowYAboveBottom = Bounce.ballY[i] <= Bounce.ROWS - 1;

      if (wasYOK && wasXOK && !nowXOK) {
        //" x=" + Bounce.ballX[i] + " y=" + Bounce.ballY[i]);
        Bounce.callUserGeneratedCode(Bounce.whenWallCollided);
      }

      if (wasXOK && wasYOK && !nowYOK) {
        if (Bounce.map[0][Math.round(Bounce.ballX[i])] & SquareType.GOAL) {
          //" x=" + Bounce.ballX[i] + " y=" + Bounce.ballY[i]);
          Bounce.callUserGeneratedCode(Bounce.whenBallInGoal);
          Bounce.ballFlags[i] |= Bounce.BallFlags.IN_GOAL;
          timeoutList.setTimeout(delegate(this, Bounce.moveBallOffscreen, i), 1000);
          if (Bounce.respawnBalls) {
            Bounce.launchBall(i);
          }
        } else {
          //" x=" + Bounce.ballX[i] + " y=" + Bounce.ballY[i]);
          Bounce.callUserGeneratedCode(Bounce.whenWallCollided);
        }
      }

      var xPaddleBall = Bounce.ballX[i] - Bounce.paddleX;
      var yPaddleBall = Bounce.ballY[i] - Bounce.paddleY;
      var distPaddleBall = Bounce.calcDistance(xPaddleBall, yPaddleBall);

      if (distPaddleBall < tiles.PADDLE_BALL_COLLIDE_DISTANCE) {
        // paddle ball collision
        //" x=" + Bounce.ballX[i] + " y=" + Bounce.ballY[i]);
        Bounce.callUserGeneratedCode(Bounce.whenPaddleCollided);
      } else if (wasYAboveBottom && !nowYAboveBottom) {
        // ball missed paddle
        //" x=" + Bounce.ballX[i] + " y=" + Bounce.ballY[i]);
        Bounce.callUserGeneratedCode(Bounce.whenBallMissesPaddle);
        Bounce.ballFlags[i] |= Bounce.BallFlags.MISSED_PADDLE;
        timeoutList.setTimeout(delegate(this, Bounce.moveBallOffscreen, i), 1000);
        if (Bounce.respawnBalls) {
          Bounce.launchBall(i);
        } else if (Bounce.failOnBallExit) {
          Bounce.result = _constants.ResultType.FAILURE;
          Bounce.onPuzzleComplete();
        }
      }
    }

    Bounce.displayBall(i, Bounce.ballX[i], Bounce.ballY[i], Bounce.ballRotation[i]);
  }

  Bounce.displayPaddle(Bounce.paddleX, Bounce.paddleY);

  if (checkFinished()) {
    Bounce.onPuzzleComplete();
  }
};

Bounce.onSvgDrag = function (e) {
  if (Bounce.intervalId) {
    Bounce.gesturesObserved[e.gesture.direction] = Math.round(e.gesture.distance / DRAG_DISTANCE_TO_MOVE_RATIO);
    e.gesture.preventDefault();
  }
};

Bounce.onKey = function (e) {
  // Store the most recent event type per-key
  Bounce.keyState[e.keyCode] = e.type;

  // If we are actively running our tick loop, suppress default event handling
  if (Bounce.intervalId && e.keyCode >= KeyCodes.LEFT && e.keyCode <= KeyCodes.DOWN) {
    e.preventDefault();
  }
};

Bounce.onArrowButtonDown = function (e, idBtn) {
  // Store the most recent event type per-button
  Bounce.btnState[idBtn] = ButtonState.DOWN;
  e.preventDefault(); // Stop normal events so we see mouseup later.
};

Bounce.onArrowButtonUp = function (e, idBtn) {
  // Store the most recent event type per-button
  Bounce.btnState[idBtn] = ButtonState.UP;
};

Bounce.onMouseUp = function (e) {
  // Reset btnState on mouse up
  Bounce.btnState = {};
};

/**
 * Initialize Blockly and the Bounce app.  Called on page load.
 */
Bounce.init = function (config) {
  // replace studioApp() methods with our own
  studioApp().reset = this.reset.bind(this);
  studioApp().runButtonClick = this.runButtonClick.bind(this);

  Bounce.clearEventHandlersKillTickLoop();
  skin = config.skin;
  level = config.level;
  loadLevel();

  window.addEventListener("keydown", Bounce.onKey, false);
  window.addEventListener("keyup", Bounce.onKey, false);

  config.loadAudio = function () {
    studioApp().loadAudio(skin.winSound, 'win');
    studioApp().loadAudio(skin.startSound, 'start');
    studioApp().loadAudio(skin.failureSound, 'failure');

    for (var sound in skin.customSounds) {
      studioApp().loadAudio(skin.customSounds[sound].urls, sound);
    }
  };

  config.afterInject = function () {
    // Connect up arrow button event handlers
    for (var btn in ArrowIds) {
      dom.addMouseUpTouchEvent(document.getElementById(ArrowIds[btn]), delegate(this, Bounce.onArrowButtonUp, ArrowIds[btn]));
      dom.addMouseDownTouchEvent(document.getElementById(ArrowIds[btn]), delegate(this, Bounce.onArrowButtonDown, ArrowIds[btn]));
    }
    document.addEventListener('mouseup', Bounce.onMouseUp, false);

    /**
     * The richness of block colours, regardless of the hue.
     * MOOC blocks should be brighter (target audience is younger).
     * Must be in the range of 0 (inclusive) to 1 (exclusive).
     * Blockly's default is 0.45.
     */
    Blockly.HSV_SATURATION = 0.6;

    Blockly.SNAP_RADIUS *= Bounce.scale.snapRadius;

    Bounce.ballStart_ = [];
    Bounce.ballX = [];
    Bounce.ballY = [];
    Bounce.ballRotation = [];
    Bounce.ballDir = [];
    Bounce.ballSpeed = [];
    Bounce.ballFlags = [];
    Bounce.ballCount = 0;
    Bounce.originalBallCount = 0;
    Bounce.paddleFinishCount = 0;
    Bounce.ballRotationSpeed = 0;
    Bounce.defaultBallSpeed = level.ballSpeed || tiles.DEFAULT_BALL_SPEED;
    Bounce.defaultBallDir = level.ballDirection || tiles.DEFAULT_BALL_DIRECTION;
    Bounce.drawTiles = level.theme ? skin[level.theme].drawTiles : skin.drawTiles;

    // Locate the start and finish squares.
    for (var y = 0; y < Bounce.ROWS; y++) {
      for (var x = 0; x < Bounce.COLS; x++) {
        if (Bounce.map[y][x] & SquareType.PADDLEFINISH) {
          if (0 === Bounce.paddleFinishCount) {
            Bounce.paddleFinish_ = [];
          }
          Bounce.paddleFinish_[Bounce.paddleFinishCount] = { x: x, y: y };
          Bounce.paddleFinishCount++;
        } else if (Bounce.map[y][x] & SquareType.BALLSTART) {
          Bounce.ballStart_[Bounce.ballCount] = { x: x, y: y };
          Bounce.ballCount++;
        } else if (Bounce.map[y][x] & SquareType.PADDLESTART) {
          Bounce.paddleStart_ = { x: x, y: y };
        } else if (Bounce.map[y][x] & SquareType.BALLFINISH) {
          Bounce.ballFinish_ = { x: x, y: y };
        } else if (Bounce.map[y][x] & SquareType.GOAL) {
          Bounce.goalLocated_ = true;
        }
      }
    }

    Bounce.originalBallCount = Bounce.ballCount;

    drawMap();
  };

  // Block placement default (used as fallback in the share levels)
  config.blockArrangement = {
    'when_run': { x: 20, y: 20 },
    'bounce_whenLeft': { x: 20, y: 220 },
    'bounce_whenRight': { x: 180, y: 220 },
    'bounce_whenPaddleCollided': { x: 20, y: 310 },
    'bounce_whenWallCollided': { x: 20, y: 410 },
    'bounce_whenBallInGoal': { x: 20, y: 510 },
    'bounce_whenBallMissesPaddle': { x: 20, y: 630 }
  };

  config.twitter = twitterOptions;

  // for this app, show make your own button if on share page
  config.makeYourOwn = config.share;

  config.makeString = bounceMsg.makeYourOwn();
  config.makeUrl = "http://code.org/bounce";
  config.makeImage = studioApp().assetUrl('media/promo.png');

  config.enableShowCode = false;
  config.enableShowBlockCount = false;

  if (config.embed && config.level.markdownInstructions && !config.level.instructions) {
    // if we are an embedded level with markdown instructions but no regular
    // instructions, we want to display CSP-style instructions and not be
    // centered
    config.noInstructionsWhenCollapsed = true;
    config.centerEmbedded = false;
  }

  var onMount = function onMount() {
    studioApp().init(config);

    var finishButton = document.getElementById('finishButton');
    dom.addClickTouchEvent(finishButton, Bounce.onPuzzleComplete);
  };

  studioApp().setPageConstants(config);

  ReactDOM.render(React.createElement(
    Provider,
    { store: (0, _redux.getStore)() },
    React.createElement(AppView, {
      visualizationColumn: React.createElement(BounceVisualizationColumn, null),
      onMount: onMount
    })
  ), document.getElementById(config.containerId));
};

/**
 * Clear the event handlers and stop the onTick timer.
 */
Bounce.clearEventHandlersKillTickLoop = function () {
  Bounce.whenWallCollided = null;
  Bounce.whenBallInGoal = null;
  Bounce.whenBallMissesPaddle = null;
  Bounce.whenPaddleCollided = null;
  Bounce.whenDown = null;
  Bounce.whenLeft = null;
  Bounce.whenRight = null;
  Bounce.whenUp = null;
  Bounce.whenGameStarts = null;
  if (Bounce.intervalId) {
    window.clearInterval(Bounce.intervalId);
  }
  Bounce.intervalId = 0;
  // Kill all tasks.
  timeoutList.clearTimeouts();
};

/**
 * Move ball to a safe place off of the screen.
 * @param {int} i Index of ball to be moved.
 */
Bounce.moveBallOffscreen = function (i) {
  Bounce.ballX[i] = 100;
  Bounce.ballY[i] = 100;
  Bounce.ballDir[i] = 0;
  Bounce.ballRotation[i] = 0;
  // stop the ball from moving if we're not planning to respawn:
  Bounce.ballSpeed[i] = 0;
};

/**
 * Play a start sound and reset the ball at index i and redraw it.
 * @param {int} i Index of ball to be reset.
 */
Bounce.playSoundAndResetBall = function (i) {
  Bounce.resetBall(i, { randomPosition: true });
  studioApp().playAudio('ballstart');
};

/**
 * Launch the ball from index i from a start position and launch it.
 * @param {int} i Index of ball to be launched.
 */
Bounce.launchBall = function (i) {
  Bounce.ballFlags[i] |= Bounce.BallFlags.LAUNCHING;
  timeoutList.setTimeout(delegate(this, Bounce.playSoundAndResetBall, i), 3000);
};

/**
 * Reset the ball from index i to the start position and redraw it.
 * @param {int} i Index of ball to be reset.
 * @param {options} randomPosition: random start
 */
Bounce.resetBall = function (i, options) {
  var randStart = options.randomPosition || typeof Bounce.ballStart_[i] === 'undefined';
  Bounce.ballX[i] = randStart ? Math.floor(Math.random() * Bounce.COLS) : Bounce.ballStart_[i].x;
  Bounce.ballY[i] = randStart ? tiles.DEFAULT_BALL_START_Y : Bounce.ballStart_[i].y;
  Bounce.ballRotation[i] = 0;
  Bounce.ballDir[i] = randStart ? Math.random() * Math.PI / 2 + Math.PI * 0.75 : Bounce.defaultBallDir;
  Bounce.ballSpeed[i] = Bounce.currentBallSpeed;
  Bounce.ballFlags[i] = 0;

  Bounce.displayBall(i, Bounce.ballX[i], Bounce.ballY[i], Bounce.ballRotation[i]);
};

/**
 * Reset the app to the start position and kill any pending animation tasks.
 * @param {boolean} first True if an opening animation is to be played.
 */
Bounce.reset = function (first) {
  var i;
  Bounce.clearEventHandlersKillTickLoop();

  // Soft buttons
  var softButtonCount = 0;
  for (i = 0; i < Bounce.softButtons_.length; i++) {
    document.getElementById(Bounce.softButtons_[i]).style.display = 'inline';
    softButtonCount++;
  }
  if (softButtonCount) {
    var softButtonsCell = document.getElementById('soft-buttons');
    softButtonsCell.className = 'soft-buttons-' + softButtonCount;
  }

  Bounce.gesturesObserved = {};

  // Reset the score.
  Bounce.playerScore = 0;
  Bounce.opponentScore = 0;
  document.getElementById('score').setAttribute('visibility', 'hidden');

  // Reset configurable variables
  var theme = level.theme || 'hardcourt';
  Bounce.setBackground(theme);
  Bounce.setBall(theme);
  Bounce.setPaddle(theme);
  Bounce.currentBallSpeed = Bounce.defaultBallSpeed;

  // Remove any extra balls that were created dynamically.
  for (i = Bounce.originalBallCount; i < Bounce.ballCount; i++) {
    Bounce.deleteBallElements(i);
  }
  // Reset ballCount back to the original value
  Bounce.ballCount = Bounce.originalBallCount;
  // Move ball(s) into position.
  for (i = 0; i < Bounce.ballCount; i++) {
    Bounce.resetBall(i, {});
  }

  // Move Paddle into position.
  Bounce.paddleX = Bounce.paddleStart_.x;
  Bounce.paddleY = Bounce.paddleStart_.y;
  Bounce.paddleSpeed = tiles.DEFAULT_PADDLE_SPEED;

  Bounce.displayPaddle(Bounce.paddleX, Bounce.paddleY);

  if (Bounce.paddleFinish_) {
    for (i = 0; i < Bounce.paddleFinishCount; i++) {
      // Mark each finish as incomplete.
      Bounce.paddleFinish_[i].finished = false;

      // Move the finish icons into position.
      var paddleFinishIcon = document.getElementById('paddlefinish' + i);
      paddleFinishIcon.setAttribute('x', Bounce.SQUARE_SIZE * (Bounce.paddleFinish_[i].x + 0.5) - paddleFinishIcon.getAttribute('width') / 2);
      paddleFinishIcon.setAttribute('y', Bounce.SQUARE_SIZE * (Bounce.paddleFinish_[i].y + 0.9) - paddleFinishIcon.getAttribute('height'));
      paddleFinishIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Bounce.goal);
    }
  }

  if (Bounce.ballFinish_) {
    // Move the finish icon into position.
    var ballFinishIcon = document.getElementById('ballfinish');
    ballFinishIcon.setAttribute('x', Bounce.SQUARE_SIZE * (Bounce.ballFinish_.x + 0.5) - ballFinishIcon.getAttribute('width') / 2);
    ballFinishIcon.setAttribute('y', Bounce.SQUARE_SIZE * (Bounce.ballFinish_.y + 0.9) - ballFinishIcon.getAttribute('height'));
    ballFinishIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Bounce.goal);
  }

  // Reset the obstacle image.
  var obsId = 0;
  var x, y;
  for (y = 0; y < Bounce.ROWS; y++) {
    for (x = 0; x < Bounce.COLS; x++) {
      var obsIcon = document.getElementById('obstacle' + obsId);
      if (obsIcon) {
        obsIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.obstacle);
      }
      ++obsId;
    }
  }

  // Reset the tiles
  var tileId = 0;
  for (y = 0; y < Bounce.ROWS; y++) {
    for (x = 0; x < Bounce.COLS; x++) {
      // Tile's clipPath element.
      var tileClip = document.getElementById('tileClipPath' + tileId);
      if (tileClip) {
        tileClip.setAttribute('visibility', 'visible');
      }
      // Tile sprite.
      var tileElement = document.getElementById('tileElement' + tileId);
      if (tileElement) {
        tileElement.setAttribute('opacity', 1);
      }
      tileId++;
    }
  }
};

/**
 * Click the run button.  Start the program.
 */
// XXX This is the only method used by the templates!
Bounce.runButtonClick = function () {
  if (level.edit_blocks) {
    Bounce.onPuzzleComplete();
  }
  var runButton = document.getElementById('runButton');
  var resetButton = document.getElementById('resetButton');
  // Ensure that Reset button is at least as wide as Run button.
  if (!resetButton.style.minWidth) {
    resetButton.style.minWidth = runButton.offsetWidth + 'px';
  }
  studioApp().toggleRunReset('reset');
  Blockly.mainBlockSpace.traceOn(true);
  studioApp().reset(false);
  studioApp().attempts++;
  Bounce.execute();

  if (level.freePlay && !level.isProjectLevel && !studioApp().hideSource) {
    var shareCell = document.getElementById('share-cell');
    shareCell.className = 'share-cell-enabled';
  }
  if (Bounce.goalLocated_) {
    document.getElementById('score').setAttribute('visibility', 'visible');
    Bounce.displayScore();
  }
};

/**
 * App specific displayFeedback function that calls into
 * studioApp().displayFeedback when appropriate
 */
var displayFeedback = function displayFeedback() {
  var isSignedIn = (0, _redux.getStore)().getState().progress.signInState === _progressRedux.SignInState.SignedIn;
  if (!Bounce.waitingForReport) {
    studioApp().displayFeedback({
      feedbackType: Bounce.testResults,
      response: Bounce.response,
      level: level,
      showingSharing: level.freePlay,
      feedbackImage: Bounce.feedbackImage,
      twitter: twitterOptions,
      appStrings: {
        reinfFeedbackMsg: bounceMsg.reinfFeedbackMsg(),
        sharingText: bounceMsg.shareGame()
      },
      saveToProjectGallery: true,
      disableSaveToGallery: !isSignedIn
    });
  }
};

/**
 * Function to be called when the service report call is complete
 * @param {MilestoneResponse} response - JSON response (if available)
 */
Bounce.onReportComplete = function (response) {
  Bounce.response = response;
  Bounce.waitingForReport = false;
  studioApp().onReportComplete(response);
  displayFeedback();
};

/**
 * Execute the user's code.  Heaven help us...
 */
Bounce.execute = function () {
  Bounce.result = _constants.ResultType.UNSET;
  Bounce.testResults = _constants.TestResults.NO_TESTS_RUN;
  Bounce.waitingForReport = false;
  Bounce.response = null;

  // Map event handler hooks (e.g. Bounce.whenLeft) to the generated code.
  var generator = Blockly.Generator.blockSpaceToCode.bind(Blockly.Generator, 'JavaScript');
  var events = {
    whenWallCollided: { code: generator('bounce_whenWallCollided') },
    whenBallInGoal: { code: generator('bounce_whenBallInGoal') },
    whenBallMissesPaddle: { code: generator('bounce_whenBallMissesPaddle') },
    whenPaddleCollided: { code: generator('bounce_whenPaddleCollided') },
    whenLeft: { code: generator('bounce_whenLeft') },
    whenRight: { code: generator('bounce_whenRight') },
    whenUp: { code: generator('bounce_whenUp') },
    whenDown: { code: generator('bounce_whenDown') },
    whenGameStarts: { code: generator('when_run') }
  };

  studioApp().playAudio(Bounce.ballCount > 0 ? 'ballstart' : 'start');
  studioApp().reset(false);

  _CustomMarshalingInterpreter2.default.evalWithEvents({ Bounce: api }, events).hooks.forEach(function (hook) {
    Bounce[hook.name] = hook.func;
  });

  Bounce.tickCount = 0;
  Bounce.intervalId = window.setInterval(Bounce.onTick, Bounce.scale.stepSpeed);
};

Bounce.onPuzzleComplete = function () {
  if (level.freePlay) {
    Bounce.result = _constants.ResultType.SUCCESS;
  }

  // Stop everything on screen
  Bounce.clearEventHandlersKillTickLoop();

  // If we know they succeeded, mark levelComplete true
  // Note that we have not yet animated the succesful run
  var levelComplete = Bounce.result === _constants.ResultType.SUCCESS;

  // If the current level is a free play, always return the free play
  // result type
  if (level.freePlay) {
    Bounce.testResults = _constants.TestResults.FREE_PLAY;
  } else {
    Bounce.testResults = studioApp().getTestResults(levelComplete);
  }

  if (Bounce.testResults >= _constants.TestResults.FREE_PLAY) {
    studioApp().playAudioOnWin();
  } else {
    studioApp().playAudioOnFailure();
  }

  if (level.editCode) {
    Bounce.testResults = levelComplete ? _constants.TestResults.ALL_PASS : _constants.TestResults.TOO_FEW_BLOCKS_FAIL;
  }

  var xml = Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace);
  var textBlocks = Blockly.Xml.domToText(xml);

  Bounce.waitingForReport = true;

  var sendReport = function sendReport() {
    // Report result to server.
    studioApp().report({
      app: 'bounce',
      level: level.id,
      result: Bounce.result === _constants.ResultType.SUCCESS,
      testResult: Bounce.testResults,
      program: encodeURIComponent(textBlocks),
      image: Bounce.encodedFeedbackImage,
      onComplete: Bounce.onReportComplete
    });
  };

  if (typeof document.getElementById('svgBounce').toDataURL === 'undefined') {
    sendReport();
  } else {
    document.getElementById('svgBounce').toDataURL("image/jpeg", {
      callback: function callback(imageDataUrl) {
        Bounce.feedbackImage = imageDataUrl;
        Bounce.encodedFeedbackImage = encodeURIComponent(Bounce.feedbackImage.split(',')[1]);

        sendReport();
      }
    });
  }
};

/**
 * Set the tiles to be transparent gradually.
 */
Bounce.setTileTransparent = function () {
  var tileId = 0;
  for (var y = 0; y < Bounce.ROWS; y++) {
    for (var x = 0; x < Bounce.COLS; x++) {
      // Tile sprite.
      var tileElement = document.getElementById('tileElement' + tileId);
      var tileAnimation = document.getElementById('tileAnimation' + tileId);
      if (tileElement) {
        tileElement.setAttribute('opacity', 0);
      }
      if (tileAnimation) {
        tileAnimation.beginElement();
      }
      tileId++;
    }
  }
};

/**
 * Display Ball at the specified location, facing the specified direction.
 * @param {number} i Ball index..
 * @param {number} x Horizontal grid (or fraction thereof).
 * @param {number} y Vertical grid (or fraction thereof).
 */
Bounce.displayBall = function (i, x, y, rotation) {
  var ballIcon = document.getElementById('ball' + i);
  ballIcon.setAttribute('x', x * Bounce.SQUARE_SIZE);
  ballIcon.setAttribute('y', y * Bounce.SQUARE_SIZE + Bounce.BALL_Y_OFFSET);

  var xCenter = x * Bounce.SQUARE_SIZE + Bounce.PEGMAN_WIDTH / 2;
  var yCenter = y * Bounce.SQUARE_SIZE + Bounce.BALL_Y_OFFSET + Bounce.PEGMAN_HEIGHT / 2;
  ballIcon.setAttribute('transform', 'rotate(' + rotation + ' ' + xCenter + ' ' + yCenter + ')');

  var ballClipRect = document.getElementById('ballClipRect' + i);
  ballClipRect.setAttribute('x', x * Bounce.SQUARE_SIZE);
  ballClipRect.setAttribute('y', ballIcon.getAttribute('y'));
};

/**
 * Display Paddle at the specified location
 * @param {number} x Horizontal grid (or fraction thereof).
 * @param {number} y Vertical grid (or fraction thereof).
 */
Bounce.displayPaddle = function (x, y) {
  var paddleIcon = document.getElementById('paddle');
  paddleIcon.setAttribute('x', x * Bounce.SQUARE_SIZE);
  paddleIcon.setAttribute('y', y * Bounce.SQUARE_SIZE + Bounce.PADDLE_Y_OFFSET);

  var paddleClipRect = document.getElementById('paddleClipRect');
  paddleClipRect.setAttribute('x', x * Bounce.SQUARE_SIZE);
  paddleClipRect.setAttribute('y', paddleIcon.getAttribute('y'));
};

Bounce.displayScore = function () {
  var score = document.getElementById('score');
  score.textContent = bounceMsg.scoreText({
    playerScore: Bounce.playerScore,
    opponentScore: Bounce.opponentScore
  });
};

var skinTheme = function skinTheme(value) {
  if (value === 'hardcourt' || value === 'basketball') {
    return skin;
  }
  return skin[value];
};

Bounce.setTeam = function (value) {
  Bounce.setBackgroundImage(skin.teamBackgrounds[value]);
  Bounce.loadTiles(skin.tiles, skin.goalTiles);
};

Bounce.setBackground = function (value) {
  var theme = skinTheme(value);
  Bounce.drawTiles = theme.drawTiles === undefined ? skin.drawTiles : theme.drawTiles;
  if (level.maps) {
    Bounce.map = level.maps[value === 'hardcourt' ? 'basketball' : value];
  }
  Bounce.setBackgroundImage(theme.background);
  Bounce.loadTiles(theme.tiles, theme.goalTiles);
};

Bounce.setBackgroundImage = function (backgroundUrl) {
  var element = document.getElementById('background');
  element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', backgroundUrl);
};

Bounce.loadTiles = function (tiles, goalTiles) {
  // Recompute all of the tiles to determine if they are walls, goals, or empty
  // TODO: do this once during init and cache the result
  var tileId = 0;
  for (var y = 0; y < Bounce.ROWS; y++) {
    for (var x = 0; x < Bounce.COLS; x++) {
      var empty = false;
      var image;
      // Compute the tile index.
      var tile = wallNormalize(x, y) + wallNormalize(x, y - 1) + // North.
      wallNormalize(x + 1, y) + // East.
      wallNormalize(x, y + 1) + // South.
      wallNormalize(x - 1, y); // West.

      // Draw the tile.
      if (WALL_TILE_SHAPES[tile]) {
        image = tiles;
      } else {
        // Compute the tile index.
        tile = goalNormalize(x, y) + goalNormalize(x, y - 1) + // North.
        goalNormalize(x + 1, y) + // East.
        goalNormalize(x, y + 1) + // South.
        goalNormalize(x - 1, y); // West.

        if (!GOAL_TILE_SHAPES[tile]) {
          empty = true;
        }
        image = goalTiles;
      }
      var element = document.getElementById('tileElement' + tileId);
      if (!empty && Bounce.drawTiles) {
        element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', image);
        element.setAttribute('visibility', 'visible');
      } else if (element) {
        element.setAttribute('visibility', 'hidden');
      }
      tileId++;
    }
  }
};

Bounce.setBall = function (value) {
  var theme = skinTheme(value);
  Bounce.ballImage = theme.ball;
  Bounce.ballRotationSpeed = theme.rotateBall ? 10 : 0;
  for (var i = 0; i < Bounce.ballCount; i++) {
    var element = document.getElementById('ball' + i);
    element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Bounce.ballImage);
    if (!theme.rotateBall) {
      Bounce.ballRotation[i] = 0;
    }
  }
};

Bounce.setPaddle = function (value) {
  var element = document.getElementById('paddle');
  element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skinTheme(value).paddle);
};

Bounce.timedOut = function () {
  return Bounce.tickCount > Bounce.timeoutFailureTick;
};

Bounce.allFinishesComplete = function () {
  var i;
  if (Bounce.paddleFinish_) {
    var finished, playSound;
    for (i = 0, finished = 0; i < Bounce.paddleFinishCount; i++) {
      if (!Bounce.paddleFinish_[i].finished) {
        if (essentiallyEqual(Bounce.paddleX, Bounce.paddleFinish_[i].x, tiles.FINISH_COLLIDE_DISTANCE) && essentiallyEqual(Bounce.paddleY, Bounce.paddleFinish_[i].y, tiles.FINISH_COLLIDE_DISTANCE)) {
          Bounce.paddleFinish_[i].finished = true;
          finished++;
          playSound = true;

          // Change the finish icon to goalSuccess.
          var paddleFinishIcon = document.getElementById('paddlefinish' + i);
          paddleFinishIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Bounce.goalSuccess);
        }
      } else {
        finished++;
      }
    }
    if (playSound && finished !== Bounce.paddleFinishCount) {
      // Play a sound unless we've hit the last flag
      studioApp().playAudio('flag');
    }
    return finished === Bounce.paddleFinishCount;
  }
  if (Bounce.ballFinish_) {
    for (i = 0; i < Bounce.ballCount; i++) {
      if (essentiallyEqual(Bounce.ballX[i], Bounce.ballFinish_.x, tiles.FINISH_COLLIDE_DISTANCE) && essentiallyEqual(Bounce.ballY[i], Bounce.ballFinish_.y, tiles.FINISH_COLLIDE_DISTANCE)) {
        // Change the finish icon to goalSuccess.
        var ballFinishIcon = document.getElementById('ballfinish');
        ballFinishIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Bounce.goalSuccess);
        return true;
      }
    }
  }
  return false;
};

var checkFinished = function checkFinished() {
  // if we have a succcess condition and have accomplished it, we're done and successful
  if (level.goal && level.goal.successCondition && level.goal.successCondition()) {
    Bounce.result = _constants.ResultType.SUCCESS;
    return true;
  }

  // if we have a failure condition, and it's been reached, we're done and failed
  if (level.goal && level.goal.failureCondition && level.goal.failureCondition()) {
    Bounce.result = _constants.ResultType.FAILURE;
    return true;
  }

  if (Bounce.allFinishesComplete()) {
    Bounce.result = _constants.ResultType.SUCCESS;
    return true;
  }

  if (Bounce.timedOut()) {
    Bounce.result = _constants.ResultType.FAILURE;
    return true;
  }

  return false;
};

/***/ }),

/***/ 3021:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tiles = __webpack_require__(1736);
var studioApp = __webpack_require__(597).singleton;

exports.PaddleSpeed = {
  VERY_SLOW: 0.04,
  SLOW: 0.06,
  NORMAL: 0.1,
  FAST: 0.15,
  VERY_FAST: 0.23
};

exports.BallSpeed = {
  VERY_SLOW: 0.04,
  SLOW: 0.06,
  NORMAL: 0.1,
  FAST: 0.15,
  VERY_FAST: 0.23
};

exports.random = function (values) {
  var key = Math.floor(Math.random() * values.length);
  return values[key];
};

exports.setBallSpeed = function (id, value) {
  studioApp().highlight(id);
  Bounce.currentBallSpeed = value;
  for (var i = 0; i < Bounce.ballCount; i++) {
    Bounce.ballSpeed[i] = value;
  }
};

exports.setBackground = function (id, value) {
  studioApp().highlight(id);
  Bounce.setBackground(value);
};

exports.setTeam = function (id, value) {
  studioApp().highlight(id);
  Bounce.setTeam(value);
};

exports.setBall = function (id, value) {
  studioApp().highlight(id);
  Bounce.setBall(value);
};

exports.setPaddle = function (id, value) {
  studioApp().highlight(id);
  Bounce.setPaddle(value);
};

exports.setBackground = function (id, value) {
  studioApp().highlight(id);
  Bounce.setBackground(value);
};

exports.setPaddleSpeed = function (id, value) {
  studioApp().highlight(id);
  Bounce.paddleSpeed = value;
};

exports.playSound = function (id, soundName) {
  studioApp().highlight(id);
  studioApp().playAudio(soundName);
};

exports.moveLeft = function (id) {
  studioApp().highlight(id);
  Bounce.paddleX -= Bounce.paddleSpeed;
  if (Bounce.paddleX < 0) {
    Bounce.paddleX = 0;
  }
};

exports.moveRight = function (id) {
  studioApp().highlight(id);
  Bounce.paddleX += Bounce.paddleSpeed;
  if (Bounce.paddleX > Bounce.COLS - 1) {
    Bounce.paddleX = Bounce.COLS - 1;
  }
};

exports.moveUp = function (id) {
  studioApp().highlight(id);
  Bounce.paddleY -= Bounce.paddleSpeed;
  if (Bounce.paddleY < 0) {
    Bounce.paddleY = 0;
  }
};

exports.moveDown = function (id) {
  studioApp().highlight(id);
  Bounce.paddleY += Bounce.paddleSpeed;
  if (Bounce.paddleY > Bounce.ROWS - 1) {
    Bounce.paddleY = Bounce.ROWS - 1;
  }
};

exports.incrementOpponentScore = function (id) {
  studioApp().highlight(id);
  Bounce.opponentScore++;
  Bounce.displayScore();
};

exports.incrementPlayerScore = function (id) {
  studioApp().highlight(id);
  Bounce.playerScore++;
  Bounce.displayScore();
};

exports.launchBall = function (id) {
  studioApp().highlight(id);

  // look for an "out of play" ball to re-launch:
  for (var i = 0; i < Bounce.ballCount; i++) {
    if (Bounce.isBallOutOfBounds(i) && 0 === (Bounce.ballFlags[i] & Bounce.BallFlags.LAUNCHING)) {
      // found an out-of-bounds ball that is not already launching...
      Bounce.launchBall(i);
      return;
    }
  }

  // we didn't find an "out of play" ball, so create and launch a new one:
  i = Bounce.ballCount;
  Bounce.ballCount++;
  Bounce.createBallElements(i);
  Bounce.playSoundAndResetBall(i);
};

exports.bounceBall = function (id) {
  studioApp().highlight(id);

  var i;
  for (i = 0; i < Bounce.ballCount; i++) {
    if (0 === (Bounce.ballFlags[i] & (Bounce.BallFlags.MISSED_PADDLE | Bounce.BallFlags.IN_GOAL))) {
      if (Bounce.ballX[i] < 0) {
        Bounce.ballX[i] = 0;
        Bounce.ballDir[i] = 2 * Math.PI - Bounce.ballDir[i];
      } else if (Bounce.ballX[i] > Bounce.COLS - 1) {
        Bounce.ballX[i] = Bounce.COLS - 1;
        Bounce.ballDir[i] = 2 * Math.PI - Bounce.ballDir[i];
      }

      if (Bounce.ballY[i] < tiles.Y_TOP_BOUNDARY) {
        Bounce.ballY[i] = tiles.Y_TOP_BOUNDARY;
        Bounce.ballDir[i] = Math.PI - Bounce.ballDir[i];
      }

      var xPaddleBall = Bounce.ballX[i] - Bounce.paddleX;
      var yPaddleBall = Bounce.ballY[i] - Bounce.paddleY;
      var distPaddleBall = Bounce.calcDistance(xPaddleBall, yPaddleBall);

      if (distPaddleBall < tiles.PADDLE_BALL_COLLIDE_DISTANCE) {
        // paddle ball collision
        if (Math.cos(Bounce.ballDir[i]) < 0) {
          // rather than just bounce the ball off a flat paddle, we offset the
          // angle after collision based on whether you hit the left or right
          // side of the paddle.  And then we cap the resulting angle to be in a
          // certain range of radians so the resulting angle isn't too flat
          var paddleAngleBias = 3 * Math.PI / 8 * (xPaddleBall / tiles.PADDLE_BALL_COLLIDE_DISTANCE);
          // Add 5 PI instead of PI to ensure that the resulting angle is
          // positive to simplify the ternary operation in the next statement
          Bounce.ballDir[i] = (Math.PI * 5 + paddleAngleBias - Bounce.ballDir[i]) % (Math.PI * 2);
          Bounce.ballDir[i] = Bounce.ballDir[i] < Math.PI ? Math.min(Math.PI / 2 - 0.2, Bounce.ballDir[i]) : Math.max(3 * Math.PI / 2 + 0.2, Bounce.ballDir[i]);
        }
      }
    }
  }
};

/***/ }),

/***/ 3022:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ProtectedVisualizationDiv = __webpack_require__(788);

var _ProtectedVisualizationDiv2 = _interopRequireDefault(_ProtectedVisualizationDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msg = __webpack_require__(40);

var GameButtons = __webpack_require__(819).default;
var ArrowButtons = __webpack_require__(1737);
var BelowVisualization = __webpack_require__(824);
var ProtectedStatefulDiv = __webpack_require__(737);


var BounceVisualizationColumn = function BounceVisualizationColumn() {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      _ProtectedVisualizationDiv2.default,
      null,
      _react2.default.createElement('svg', { version: '1.1', id: 'svgBounce' })
    ),
    _react2.default.createElement(
      GameButtons,
      null,
      _react2.default.createElement(ArrowButtons, null),
      " " /* Explicitly insert whitespace so that this behaves like our ejs file*/,
      _react2.default.createElement(
        ProtectedStatefulDiv,
        { id: 'share-cell-wrapper' },
        _react2.default.createElement(
          'div',
          { id: 'share-cell', className: 'share-cell-none' },
          _react2.default.createElement(
            'button',
            { id: 'finishButton', className: 'share' },
            _react2.default.createElement('img', { src: '/blockly/media/1x1.gif' }),
            msg.finish()
          )
        )
      )
    ),
    _react2.default.createElement(BelowVisualization, null)
  );
};

module.exports = BounceVisualizationColumn;

/***/ }),

/***/ 3023:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _block_utils = __webpack_require__(743);

var _utils = __webpack_require__(71);

/*
 * Configuration for all levels.
 */
var levels = {};

levels['1'] = {
  'instructionsImportant': true,
  'requiredBlocks': [[{ 'test': 'moveLeft', 'type': 'bounce_moveLeft' }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton'],
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [8, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block>'),
  'startBlocks': '<block type="bounce_whenLeft" deletable="false" x="20" y="20"></block>'
};
levels['1_basketball'] = (0, _utils.extend)(levels['1'], {
  'useFlagGoal': true,
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [8, 0, 0, 16, 0, 0, 0, 0]]
});
levels['1_sports'] = (0, _utils.extend)(levels['1_basketball'], {
  theme: 'soccer'
});
levels['2'] = {
  'ideal': 5,
  'requiredBlocks': [[{ 'test': 'moveRight', 'type': 'bounce_moveRight' }], [{ 'test': 'moveLeft', 'type': 'bounce_moveLeft' }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton'],
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [8, 0, 0, 16, 0, 0, 0, 8], [0, 0, 0, 0, 0, 0, 0, 0]],
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block>'),
  'startBlocks': '<block type="bounce_whenLeft" deletable="false" x="20" y="20"></block> \
    <block type="bounce_whenRight" deletable="false" x="180" y="20"></block>'
};
levels['2_basketball'] = (0, _utils.extend)(levels['2'], {
  'useFlagGoal': true,
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [8, 0, 0, 16, 0, 0, 0, 8]]
});
levels['2_sports'] = (0, _utils.extend)(levels['2_basketball'], {
  theme: 'soccer'
});
levels['3'] = {
  'requiredBlocks': [[{ 'test': 'moveUp', 'type': 'bounce_moveUp' }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['upButton'],
  'map': [[0, 0, 0, 8, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block> \
        <block type="bounce_moveUp"></block> \
        <block type="bounce_moveDown"></block>'),
  'startBlocks': '<block type="bounce_whenUp" deletable="false" x="20" y="20"></block>'
};
levels['4'] = {
  'requiredBlocks': [[{ 'test': 'moveRight', 'type': 'bounce_moveRight' }], [{ 'test': 'moveLeft', 'type': 'bounce_moveLeft' }], [{ 'test': 'moveUp', 'type': 'bounce_moveUp' }], [{ 'test': 'moveDown', 'type': 'bounce_moveDown' }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'map': [[0, 0, 8, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 8], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [8, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 8, 0, 0]],
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block> \
        <block type="bounce_moveUp"></block> \
        <block type="bounce_moveDown"></block>'),
  'startBlocks': '<block type="bounce_whenLeft" deletable="false" x="20" y="20"></block> \
    <block type="bounce_whenRight" deletable="false" x="180" y="20"></block> \
    <block type="bounce_whenUp" deletable="false" x="20" y="120"></block> \
    <block type="bounce_whenDown" deletable="false" x="180" y="120"></block>'
};
levels['5'] = {
  'timeoutFailureTick': 100,
  'requiredBlocks': [[{ 'test': 'bounceBall', 'type': 'bounce_bounceBall' }]],
  'scale': {
    'snapRadius': 2
  },
  'ballDirection': 1.285 * Math.PI,
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [32, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 4, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0]],
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_bounceBall"></block> \
        <block type="bounce_playSound"></block>'),
  'startBlocks': '<block type="bounce_whenPaddleCollided" deletable="false" x="20" y="20"></block>'
};
levels['5_basketball'] = (0, _utils.extend)(levels['5'], {
  'useFlagGoal': true,
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_bounceBall"></block>')
});
levels['5_sports'] = (0, _utils.extend)(levels['5_basketball'], {
  theme: 'hockey'
});
levels['6'] = {
  'timeoutFailureTick': 140,
  'requiredBlocks': [[{ 'test': 'bounceBall', 'type': 'bounce_bounceBall' }]],
  'scale': {
    'snapRadius': 2
  },
  'ballDirection': 1.285 * Math.PI,
  'map': [[1, 1, 33, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 4, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 16, 0, 0, 0, 1]],
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_bounceBall"></block> \
        <block type="bounce_playSound"></block>'),
  'startBlocks': '<block type="bounce_whenPaddleCollided" deletable="false" x="20" y="20"></block> \
    <block type="bounce_whenWallCollided" deletable="false" x="20" y="120"></block>'
};
levels['6_basketball'] = (0, _utils.extend)(levels['6'], {
  'useFlagGoal': true,
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_bounceBall"></block>')
});
levels['6_sports'] = (0, _utils.extend)(levels['6_basketball'], {
  theme: 'hockey'
});
levels['7'] = {
  'timeoutFailureTick': 900,
  'requiredBlocks': [[{ 'test': 'moveLeft', 'type': 'bounce_moveLeft' }], [{ 'test': 'moveRight', 'type': 'bounce_moveRight' }], [{ 'test': 'bounceBall', 'type': 'bounce_bounceBall' }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton'],
  'failOnBallExit': true,
  'map': [[1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 32, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 4, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 16, 0, 0, 0, 0, 1]],
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block> \
        <block type="bounce_bounceBall"></block> \
        <block type="bounce_playSound"></block>'),
  'startBlocks': '<block type="bounce_whenLeft" deletable="false" x="20" y="20"></block> \
    <block type="bounce_whenRight" deletable="false" x="180" y="20"></block> \
    <block type="bounce_whenPaddleCollided" deletable="false" x="20" y="120"></block> \
    <block type="bounce_whenWallCollided" deletable="false" x="20" y="220"></block>'
};
levels['7_basketball'] = (0, _utils.extend)(levels['7'], {
  'useFlagGoal': true
});
levels['7_sports'] = (0, _utils.extend)(levels['7_basketball'], {
  theme: 'football'
});
/*
  '8': {
    'requiredBlocks': [
      [{'test': 'moveRight', 'type': 'bounce_moveRight'}]
    ],
    'scale': {
      'snapRadius': 2
    },
    'softButtons': [
      'leftButton',
      'rightButton'
    ],
    'map': [
      [1, 1, 1, 1, 5, 1, 1, 1],
      [1, 0, 4, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 4, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 4, 1],
      [1, 4, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0,16, 0, 0, 0, 0, 1]
    ],
    'toolbox':
      tb('<block type="bounce_moveLeft"></block> \
          <block type="bounce_moveRight"></block> \
          <block type="bounce_bounceBall"></block> \
          <block type="bounce_playSound"></block>'),
    'startBlocks':
     '<block type="bounce_whenLeft" deletable="false" x="20" y="20"></block> \
      <block type="bounce_whenRight" deletable="false" x="180" y="20"></block> \
      <block type="bounce_whenPaddleCollided" deletable="false" x="20" y="120"></block> \
      <block type="bounce_whenWallCollided" deletable="false" x="20" y="220"></block>'
  },
  '9': {
    'requiredBlocks': [
      [{'test': 'moveRight', 'type': 'bounce_moveRight'}]
    ],
    'scale': {
      'snapRadius': 2
    },
    'softButtons': [
      'leftButton',
      'rightButton'
    ],
    'map': [
      [1, 5, 1, 5, 1, 5, 1, 5],
      [5, 0, 4, 0, 4, 0, 4, 1],
      [1, 4, 0, 4, 0, 4, 0, 5],
      [5, 0, 4, 0, 4, 0, 4, 1],
      [1, 4, 0, 4, 0, 4, 0, 5],
      [5, 0, 4, 0, 4, 0, 4, 1],
      [1, 4, 0, 4, 0, 4, 0, 5],
      [1, 0,16, 0, 0, 0, 0, 1]
    ],
    'toolbox':
      tb('<block type="bounce_moveLeft"></block> \
          <block type="bounce_moveRight"></block> \
          <block type="bounce_bounceBall"></block> \
          <block type="bounce_playSound"></block>'),
    'startBlocks':
     '<block type="bounce_whenLeft" deletable="false" x="20" y="20"></block> \
      <block type="bounce_whenRight" deletable="false" x="180" y="20"></block> \
      <block type="bounce_whenPaddleCollided" deletable="false" x="20" y="120"></block> \
      <block type="bounce_whenWallCollided" deletable="false" x="20" y="220"></block>'
  },
*/
levels['10'] = {
  'requiredBlocks': [[{ 'test': 'moveLeft', 'type': 'bounce_moveLeft' }], [{ 'test': 'moveRight', 'type': 'bounce_moveRight' }], [{ 'test': 'bounceBall', 'type': 'bounce_bounceBall' }], [{ 'test': 'incrementPlayerScore', 'type': 'bounce_incrementPlayerScore' }], [{ 'test': 'incrementOpponentScore', 'type': 'bounce_incrementOpponentScore' }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton'],
  'goal': {
    successCondition: function successCondition() {
      return Bounce.opponentScore >= 2;
    }
  },
  'respawnBalls': true,
  'map': [[1, 1, 2, 2, 2, 2, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 4, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 16, 0, 0, 0, 0, 1]],
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block> \
        <block type="bounce_bounceBall"></block> \
        <block type="bounce_playSound"></block> \
        <block type="bounce_incrementPlayerScore"></block> \
        <block type="bounce_incrementOpponentScore"></block>'),
  'startBlocks': '<block type="bounce_whenLeft" deletable="false" x="20" y="20"></block> \
    <block type="bounce_whenRight" deletable="false" x="180" y="20"></block> \
    <block type="bounce_whenPaddleCollided" deletable="false" x="20" y="100"></block> \
    <block type="bounce_whenWallCollided" deletable="false" x="20" y="180"></block> \
    <block type="bounce_whenBallInGoal" deletable="false" x="20" y="260"></block> \
    <block type="bounce_whenBallMissesPaddle" deletable="false" x="20" y="340"></block>'
};
levels['10_basketball'] = (0, _utils.extend)(levels['10'], {
  'map': [[1, 1, 1, 2, 2, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 4, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 16, 0, 0, 0, 0, 1]]
});
levels['10_sports'] = (0, _utils.extend)(levels['10_basketball'], {
  'map': [[1, 1, 2, 2, 2, 2, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 4, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 16, 0, 0, 0, 0, 1]],
  theme: 'football'
});
levels['11'] = {
  'requiredBlocks': [[{ 'test': 'moveLeft', 'type': 'bounce_moveLeft' }], [{ 'test': 'moveRight', 'type': 'bounce_moveRight' }], [{ 'test': 'bounceBall', 'type': 'bounce_bounceBall' }], [{ 'test': 'incrementPlayerScore', 'type': 'bounce_incrementPlayerScore' }], [{ 'test': 'incrementOpponentScore', 'type': 'bounce_incrementOpponentScore' }], [{ 'test': 'launchBall', 'type': 'bounce_launchBall' }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton'],
  'minWorkspaceHeight': 750,
  'goal': {
    successCondition: function successCondition() {
      return Bounce.opponentScore >= 2;
    }
  },
  'map': [[1, 1, 2, 2, 2, 2, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 16, 0, 0, 0, 0, 1]],
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block> \
        <block type="bounce_bounceBall"></block> \
        <block type="bounce_playSound"></block> \
        <block type="bounce_incrementPlayerScore"></block> \
        <block type="bounce_incrementOpponentScore"></block> \
        <block type="bounce_launchBall"></block> \
        <block type="bounce_setPaddleSpeed"></block> \
        <block type="bounce_setBallSpeed"></block> \
        <block type="bounce_setBackground"></block> \
        <block type="bounce_setBall"></block> \
        <block type="bounce_setPaddle"></block>'),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block> \
    <block type="bounce_whenLeft" deletable="false" x="20" y="180"></block> \
    <block type="bounce_whenRight" deletable="false" x="180" y="180"></block> \
    <block type="bounce_whenPaddleCollided" deletable="false" x="20" y="270"></block> \
    <block type="bounce_whenWallCollided" deletable="false" x="20" y="370"></block> \
    <block type="bounce_whenBallInGoal" deletable="false" x="20" y="470"></block> \
    <block type="bounce_whenBallMissesPaddle" deletable="false" x="20" y="590"></block>'
};
levels['11_basketball'] = (0, _utils.extend)(levels['11'], {
  'map': [[1, 1, 1, 2, 2, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 16, 0, 0, 0, 0, 1]],
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block> \
        <block type="bounce_bounceBall"></block> \
        <block type="bounce_playSound"></block> \
        <block type="bounce_incrementPlayerScore"></block> \
        <block type="bounce_incrementOpponentScore"></block> \
        <block type="bounce_launchBall"></block> \
        <block type="bounce_setPaddleSpeed"></block> \
        <block type="bounce_setBallSpeed"></block> \
        <block type="bounce_setPaddleDropdown"></block>')
});
levels['11_sports'] = (0, _utils.extend)(levels['11_basketball'], {});
var topGoalLarge = [[1, 1, 2, 2, 2, 2, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 16, 0, 0, 0, 0, 1]];
var topGoalSmall = [[1, 1, 1, 2, 2, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 16, 0, 0, 0, 0, 1]];
levels['12'] = {
  'requiredBlocks': [],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton'],
  'minWorkspaceHeight': 800,
  'freePlay': true,
  'map': topGoalLarge,
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block> \
        <block type="bounce_bounceBall"></block> \
        <block type="bounce_playSound"></block> \
        <block type="bounce_incrementPlayerScore"></block> \
        <block type="bounce_incrementOpponentScore"></block> \
        <block type="bounce_launchBall"></block> \
        <block type="bounce_setPaddleSpeed"></block> \
        <block type="bounce_setBallSpeed"></block> \
        <block type="bounce_setBackground"></block> \
        <block type="bounce_setBall"></block> \
        <block type="bounce_setPaddle"></block>'),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block> \
    <block type="bounce_whenLeft" deletable="false" x="20" y="220"></block> \
    <block type="bounce_whenRight" deletable="false" x="180" y="220"></block> \
    <block type="bounce_whenPaddleCollided" deletable="false" x="20" y="310"></block> \
    <block type="bounce_whenWallCollided" deletable="false" x="20" y="410"></block> \
    <block type="bounce_whenBallInGoal" deletable="false" x="20" y="510"></block> \
    <block type="bounce_whenBallMissesPaddle" deletable="false" x="20" y="630"></block>'
};
levels['12_basketball'] = {
  'requiredBlocks': [],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton'],
  'minWorkspaceHeight': 800,
  'freePlay': true,
  'map': topGoalSmall,
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block> \
        <block type="bounce_bounceBall"></block> \
        <block type="bounce_playSound"></block> \
        <block type="bounce_incrementPlayerScore"></block> \
        <block type="bounce_incrementOpponentScore"></block> \
        <block type="bounce_launchBall"></block> \
        <block type="bounce_setTeam"></block> \
        <block type="bounce_setPaddleSpeed"></block> \
        <block type="bounce_setPaddleDropdown"></block> \
        <block type="bounce_setBallSpeed"></block>'),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block> \
    <block type="bounce_whenLeft" deletable="false" x="20" y="220"></block> \
    <block type="bounce_whenRight" deletable="false" x="180" y="220"></block> \
    <block type="bounce_whenPaddleCollided" deletable="false" x="20" y="310"></block> \
    <block type="bounce_whenWallCollided" deletable="false" x="20" y="410"></block> \
    <block type="bounce_whenBallInGoal" deletable="false" x="20" y="510"></block> \
    <block type="bounce_whenBallMissesPaddle" deletable="false" x="20" y="630"></block>'
};
levels['12_sports'] = (0, _utils.extend)(levels['12_basketball'], {
  'toolbox': (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block> \
        <block type="bounce_bounceBall"></block> \
        <block type="bounce_playSound"></block> \
        <block type="bounce_incrementPlayerScore"></block> \
        <block type="bounce_incrementOpponentScore"></block> \
        <block type="bounce_launchBall"></block> \
        <block type="bounce_setBackground"></block> \
        <block type="bounce_setPaddleDropdown"></block> \
        <block type="bounce_setBall"></block> \
        <block type="bounce_setPaddleSpeed"></block> \
        <block type="bounce_setBallSpeed"></block>'),
  'maps': {
    'basketball': topGoalSmall,
    'football': topGoalLarge,
    'hockey': topGoalSmall,
    'soccer': topGoalLarge
  }
});

levels['custom'] = {
  requiredBlocks: [],
  scale: {
    snapRadius: 2
  },
  softButtons: ['leftButton', 'rightButton', 'downButton', 'upButton'],
  map: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 8, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  toolbox: (0, _block_utils.createToolbox)('<block type="bounce_moveLeft"></block> \
        <block type="bounce_moveRight"></block> \
        <block type="bounce_bounceBall"></block> \
        <block type="bounce_playSound"></block> \
        <block type="bounce_incrementPlayerScore"></block> \
        <block type="bounce_incrementOpponentScore"></block> \
        <block type="bounce_launchBall"></block> \
        <block type="bounce_setPaddleSpeed"></block> \
        <block type="bounce_setBackground"></block> \
        <block type="bounce_setBall"></block> \
        <block type="bounce_setPaddle"></block> \
        <block type="bounce_setBallSpeed"></block>'),
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"></block> \
    <block type="bounce_whenLeft" deletable="false" x="20" y="220"></block> \
    <block type="bounce_whenRight" deletable="false" x="180" y="220"></block> \
    <block type="bounce_whenPaddleCollided" deletable="false" x="20" y="310"></block> \
    <block type="bounce_whenWallCollided" deletable="false" x="20" y="410"></block> \
    <block type="bounce_whenBallInGoal" deletable="false" x="20" y="510"></block> \
    <block type="bounce_whenBallMissesPaddle" deletable="false" x="20" y="630"></block>'
};

module.exports = levels;

/***/ })

},[3017]);