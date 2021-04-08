webpackJsonp([15],{

/***/ 2152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var skinBase = __webpack_require__(744);

exports.load = function (assetUrl, id) {
  var skin = skinBase.load(assetUrl, id);

  skin.linePatterns = {
    rainbowMenu: assetUrl('media/common_images/rainbow-menuicon.png'),
    ropeMenu: assetUrl('media/common_images/rope-menuicon.png'),
    squigglyMenu: assetUrl('media/common_images/squiggly-menuicon.png'),
    swirlyMenu: assetUrl('media/common_images/swirlyline-menuicon.png'),
    patternDefault: assetUrl('media/common_images/defaultline-menuicon.png'),
    rainbowLine: assetUrl('media/common_images/rainbow.png'),
    ropeLine: assetUrl('media/common_images/rope.png'),
    squigglyLine: assetUrl('media/common_images/squiggly.png'),
    swirlyLine: assetUrl('media/common_images/swirlyline.png')
  };

  var CONFIGS = {
    anna: {
      // slider speed gets divided by this value
      speedModifier: 10,
      avatarSettings: {
        width: 73,
        height: 100,
        numHeadings: 36,
        numFrames: 10,
        visible: true
      },
      smoothAnimate: true,
      consolidateTurnAndMove: true,
      linePatterns: {
        annaLine: skin.assetUrl('annaline.png'),
        annaLine_2x: skin.assetUrl('annaline_2x.png')
      },
      // Used to populate the Set Pattern block
      lineStylePatternOptions: [[skin.assetUrl('annaline-menuicon.png'), 'annaLine']],
      artistOptions: ['anna', 'elsa'],
      avatarAllowedScripts: ['frozen'],
      blankAvatar: skin.assetUrl('blank.png')
    },

    elsa: {
      speedModifier: 10,
      avatarSettings: {
        width: 73,
        height: 100,
        numHeadings: 18,
        numFrames: 20,
        visible: true
      },
      smoothAnimate: true,
      consolidateTurnAndMove: true,
      linePatterns: {
        elsaLine: skin.assetUrl('elsaline.png'),
        elsaLine_2x: skin.assetUrl('elsaline_2x.png')
      },
      // Used to populate the Set Pattern block
      lineStylePatternOptions: [[skin.assetUrl('elsaline-menuicon.png'), 'elsaLine']],
      artistOptions: ['anna', 'elsa'],
      avatarAllowedScripts: ['frozen'],
      blankAvatar: skin.assetUrl('blank.png')
    },

    artist: {
      // Used to populate the Set Pattern block
      lineStylePatternOptions: [[skin.linePatterns.rainbowMenu, 'rainbowLine'], [skin.linePatterns.ropeMenu, 'ropeLine'], [skin.linePatterns.squigglyMenu, 'squigglyLine'], [skin.linePatterns.swirlyMenu, 'swirlyLine']]
    }
  };

  /**
   * Generates a mapping of sticker names to the urls of their images.
   *
   * @return the mapping of names to urls
   */
  var stickers = function stickers() {

    // Playlab characters
    var playlab = ['Alien', 'Bat', 'Bird', 'Cat', 'Caveboy', 'Cavegirl', 'Dinosaur', 'Dog', 'Dragon', 'Ghost', 'Knight', 'Monster', 'Ninja', 'Octopus', 'Penguin', 'Pirate', 'Princess', 'Robot', 'Soccerboy', 'Soccergirl', 'Spacebot', 'Squirrel', 'Tennisboy', 'Tennisgirl', 'Unicorn', 'Witch', 'Wizard', 'Zombie'];

    // Miscellaneous stickers
    var misc = ['Beaver', 'Bunny', 'Chicken', 'Elephant', 'Giraffe', 'Goat', 'Grasshopper', 'Hippo', 'Lion', 'Llama', 'Monkey', 'Moose', 'Mouse', 'Owl', 'Peacock', 'Rocket', 'Triceratops', 'Turtle', 'Zebra'];

    var mapping = {};

    var i, name;
    for (i = 0; i < playlab.length; i++) {
      name = playlab[i];
      mapping[name] = assetUrl('media/skins/studio/' + name.toLowerCase() + '_thumb.png');
    }

    for (i = 0; i < misc.length; i++) {
      name = misc[i];
      mapping[name] = assetUrl('media/common_images/stickers/' + name.toLowerCase() + '.png');
    }

    return mapping;
  };

  skin.stickers = stickers();

  var config = CONFIGS[skin.id];

  // base skin properties here (can be overriden by CONFIG)
  skin.speedModifier = 1;
  skin.avatarSettings = {
    width: 70,
    height: 51,
    numHeadings: 180,
    numFrames: 1,
    visible: true
  };

  // Get properties from config
  for (var prop in config) {
    skin[prop] = config[prop];
  }

  // Declare available line style patterns. This array of arrays is eventually used
  // to populate the image dropdown in the Set Pattern block.

  // All skins have the default line style (solid coloured line)
  var lineStylePatternOptions = [[skin.linePatterns.patternDefault, 'DEFAULT']];

  // If the skin provided line patterns, add them to the pattern set
  if (config && config.lineStylePatternOptions) {
    lineStylePatternOptions = lineStylePatternOptions.concat(config.lineStylePatternOptions);
  }

  skin.lineStylePatternOptions = lineStylePatternOptions;

  return skin;
};

/***/ }),

/***/ 2950:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(71);

var _ = __webpack_require__(82);


/**
 * An instantiable Artist API logic. The methods on this object are called by
 * generated user code. As they are called, they insert commands into this.log.
 * NOTE: this.log is also modified in some cases externally (both accessed and
 * I think cleared).
 */
var ArtistAPI = function ArtistAPI() {
  this.log = [];
};

module.exports = ArtistAPI;

ArtistAPI.prototype.random = function (values) {
  return (0, _utils.randomValue)(values);
};

ArtistAPI.prototype.drawCircle = function (size, id) {
  for (var i = 0; i < 36; i++) {
    this.moveForward(size, id);
    this.turnRight(10, id);
  }
};

ArtistAPI.prototype.drawSnowflake = function (type, id) {
  var i, j, k;

  // mirors Blockly.JavaScript.colour_random.
  var random_colour = function random_colour() {
    var colors = Blockly.FieldColour.COLOURS;
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (type === 'random') {
    type = _.sample(['fractal', 'flower', 'spiral', 'line', 'parallelogram', 'square']);
  }

  switch (type) {
    case 'fractal':
      for (i = 0; i < 8; i++) {
        this.jumpForward(45, id);
        this.turnLeft(45, id);
        for (j = 0; j < 3; j++) {
          for (k = 0; k < 3; k++) {
            this.moveForward(15, id);
            this.moveBackward(15, id);
            this.turnRight(45, id);
          }
          this.turnLeft(90, id);
          this.moveBackward(15, id);
          this.turnLeft(45, id);
        }
        this.turnRight(90, id);
      }
      break;

    case 'flower':
      for (i = 0; i < 5; i++) {
        this.drawCircle(2, id);
        this.drawCircle(4, id);
        this.turnRight(72, id);
      }
      break;

    case 'spiral':
      for (i = 0; i < 20; i++) {
        this.drawCircle(3, id);
        this.moveForward(20, id);
        this.turnRight(18, id);
      }
      break;

    case 'line':
      for (i = 0; i < 90; i++) {
        this.penColour(random_colour());
        this.moveForward(50, id);
        this.moveBackward(50, id);
        this.turnRight(4, id);
      }
      this.penColour("#FFFFFF", id);
      break;

    case 'parallelogram':
      for (i = 0; i < 10; i++) {
        for (j = 0; j < 2; j++) {
          this.moveForward(50, id);
          this.turnRight(60, id);
          this.moveForward(50, id);
          this.turnRight(120, id);
        }
        this.turnRight(36, id);
      }
      break;

    case 'square':
      for (i = 0; i < 10; i++) {
        for (j = 0; j < 4; j++) {
          this.moveForward(50, id);
          this.turnRight(90, id);
        }
        this.turnRight(36, id);
      }
      break;
  }
};

ArtistAPI.prototype.moveForward = function (distance, id) {
  this.log.push(['FD', distance, id]);
};

ArtistAPI.prototype.moveBackward = function (distance, id) {
  this.log.push(['FD', -distance, id]);
};

ArtistAPI.prototype.moveUp = function (distance, id) {
  this.log.push(['MV', distance, 0, id]);
};

ArtistAPI.prototype.moveDown = function (distance, id) {
  this.log.push(['MV', distance, 180, id]);
};

ArtistAPI.prototype.moveLeft = function (distance, id) {
  this.log.push(['MV', distance, 270, id]);
};

ArtistAPI.prototype.moveRight = function (distance, id) {
  this.log.push(['MV', distance, 90, id]);
};

ArtistAPI.prototype.jumpTo = function (position, id) {
  this.log.push(['JT', position, id]);
};

ArtistAPI.prototype.jumpToXY = function (x, y, id) {
  this.log.push(['JT', [x, y], id]);
};

ArtistAPI.prototype.moveUpRight = function (distance, id) {
  this.log.push(['MD', distance, 45, id]);
};

ArtistAPI.prototype.moveDownRight = function (distance, id) {
  this.log.push(['MD', distance, 135, id]);
};

ArtistAPI.prototype.moveDownLeft = function (distance, id) {
  this.log.push(['MD', distance, 225, id]);
};

ArtistAPI.prototype.moveUpLeft = function (distance, id) {
  this.log.push(['MD', distance, 315, id]);
};

ArtistAPI.prototype.jumpUp = function (distance, id) {
  this.log.push(['JD', distance, 0, id]);
};

ArtistAPI.prototype.jumpDown = function (distance, id) {
  this.log.push(['JD', distance, 180, id]);
};

ArtistAPI.prototype.jumpLeft = function (distance, id) {
  this.log.push(['JD', distance, 270, id]);
};

ArtistAPI.prototype.jumpRight = function (distance, id) {
  this.log.push(['JD', distance, 90, id]);
};

ArtistAPI.prototype.jumpUpRight = function (distance, id) {
  this.log.push(['JD', distance, 45, id]);
};

ArtistAPI.prototype.jumpDownRight = function (distance, id) {
  this.log.push(['JD', distance, 135, id]);
};

ArtistAPI.prototype.jumpDownLeft = function (distance, id) {
  this.log.push(['JD', distance, 225, id]);
};

ArtistAPI.prototype.jumpUpLeft = function (distance, id) {
  this.log.push(['JD', distance, 315, id]);
};

ArtistAPI.prototype.jumpForward = function (distance, id) {
  this.log.push(['JF', distance, id]);
};

ArtistAPI.prototype.jumpBackward = function (distance, id) {
  this.log.push(['JF', -distance, id]);
};

ArtistAPI.prototype.turnRight = function (angle, id) {
  this.log.push(['RT', angle, id]);
};

ArtistAPI.prototype.turnLeft = function (angle, id) {
  this.log.push(['RT', -angle, id]);
};

ArtistAPI.prototype.globalAlpha = function (alpha, id) {
  this.log.push(['GA', alpha, id]);
};

ArtistAPI.prototype.penUp = function (id) {
  this.log.push(['PU', id]);
};

ArtistAPI.prototype.penDown = function (id) {
  this.log.push(['PD', id]);
};

ArtistAPI.prototype.penWidth = function (width, id) {
  this.log.push(['PW', Math.max(width, 0), id]);
};

ArtistAPI.prototype.penColour = function (colour, id) {
  this.log.push(['PC', colour, id]);
};

ArtistAPI.prototype.penPattern = function (pattern, id) {
  this.log.push(['PS', pattern, id]);
};

ArtistAPI.prototype.hideTurtle = function (id) {
  this.log.push(['HT', id]);
};

ArtistAPI.prototype.showTurtle = function (id) {
  this.log.push(['ST', id]);
};

ArtistAPI.prototype.drawSticker = function (sticker, size, id) {
  this.log.push(['sticker', sticker, size, id]);
};

ArtistAPI.prototype.setArtist = function (artist, id) {
  this.log.push(['setArtist', artist, id]);
};

/***/ }),

/***/ 2951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArtistApi;

exports.injectArtistAPI = function (artistApi) {
  ArtistApi = artistApi;
};

exports.moveForward = function (distance) {
  ArtistApi.log.push(['FD', distance, null]);
};

exports.moveBackward = function (distance) {
  ArtistApi.log.push(['FD', -distance, null]);
};

exports.moveUp = function (distance) {
  ArtistApi.log.push(['MV', distance, 0, null]);
};

exports.moveDown = function (distance) {
  ArtistApi.log.push(['MV', distance, 180, null]);
};

exports.moveLeft = function (distance) {
  ArtistApi.log.push(['MV', distance, 270, null]);
};

exports.moveRight = function (distance) {
  ArtistApi.log.push(['MV', distance, 90, null]);
};

exports.moveUpRight = function (distance) {
  ArtistApi.log.push(['MD', distance, 45, null]);
};

exports.moveDownRight = function (distance) {
  ArtistApi.log.push(['MD', distance, 135, null]);
};

exports.moveDownLeft = function (distance) {
  ArtistApi.log.push(['MD', distance, 225, null]);
};

exports.moveUpLeft = function (distance) {
  ArtistApi.log.push(['MD', distance, 315, null]);
};

exports.jumpUp = function (distance) {
  ArtistApi.log.push(['JD', distance, 0, null]);
};

exports.jumpDown = function (distance) {
  ArtistApi.log.push(['JD', distance, 180, null]);
};

exports.jumpLeft = function (distance) {
  ArtistApi.log.push(['JD', distance, 270, null]);
};

exports.jumpRight = function (distance) {
  ArtistApi.log.push(['JD', distance, 90, null]);
};

exports.jumpUpRight = function (distance) {
  ArtistApi.log.push(['JD', distance, 45, null]);
};

exports.jumpDownRight = function (distance) {
  ArtistApi.log.push(['JD', distance, 135, null]);
};

exports.jumpDownLeft = function (distance) {
  ArtistApi.log.push(['JD', distance, 225, null]);
};

exports.jumpUpLeft = function (distance) {
  ArtistApi.log.push(['JD', distance, 315, null]);
};

exports.jumpForward = function (distance) {
  ArtistApi.log.push(['JF', distance, null]);
};

exports.jumpBackward = function (distance) {
  ArtistApi.log.push(['JF', -distance, null]);
};

exports.turnRight = function (angle) {
  ArtistApi.log.push(['RT', angle, null]);
};

exports.turnLeft = function (angle) {
  ArtistApi.log.push(['RT', -angle, null]);
};

exports.globalAlpha = function (alpha) {
  ArtistApi.log.push(['GA', alpha, null]);
};

exports.penUp = function (id) {
  ArtistApi.log.push(['PU', null]);
};

exports.penDown = function (id) {
  ArtistApi.log.push(['PD', null]);
};

exports.penWidth = function (width) {
  ArtistApi.log.push(['PW', Math.max(width, 0), null]);
};

exports.penColour = function (colour) {
  ArtistApi.log.push(['PC', colour, null]);
};

exports.penPattern = function (pattern) {
  ArtistApi.log.push(['PS', pattern, null]);
};

exports.hideTurtle = function (id) {
  ArtistApi.log.push(['HT', null]);
};

exports.showTurtle = function (id) {
  ArtistApi.log.push(['ST', null]);
};

exports.drawSticker = function (sticker) {
  ArtistApi.log.push(['sticker', sticker, null]);
};

exports.setArtist = function (artist) {
  ArtistApi.log.push(['setArtist', artist, null]);
};

/***/ }),

/***/ 3321:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3322);


/***/ }),

/***/ 3322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadArtist = __webpack_require__(3323);

var _loadArtist2 = _interopRequireDefault(_loadArtist);

var _loadApp = __webpack_require__(820);

var _loadApp2 = _interopRequireDefault(_loadApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _loadApp2.default)().then(_loadArtist2.default);

/***/ }),

/***/ 3323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadArtist;

var _appMain = __webpack_require__(853);

var _appMain2 = _interopRequireDefault(_appMain);

var _StudioApp = __webpack_require__(597);

var _turtle = __webpack_require__(3324);

var _turtle2 = _interopRequireDefault(_turtle);

var _blocks = __webpack_require__(2952);

var _blocks2 = _interopRequireDefault(_blocks);

var _skins = __webpack_require__(2152);

var _skins2 = _interopRequireDefault(_skins);

var _levels = __webpack_require__(3330);

var _levels2 = _interopRequireDefault(_levels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadArtist(options) {
  options.skinsModule = _skins2.default;
  options.blocksModule = _blocks2.default;
  var artist = new _turtle2.default();

  window.__TestInterface.setSpeedSliderValue = function (value) {
    artist.speedSlider.setValue(value);
  };
  artist.injectStudioApp((0, _StudioApp.singleton)());
  (0, _appMain2.default)(artist, _levels2.default, options);
}
module.exports = exports["default"];

/***/ }),

/***/ 3324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _CustomMarshalingInterpreter = __webpack_require__(850);

var _CustomMarshalingInterpreter2 = _interopRequireDefault(_CustomMarshalingInterpreter);

var _containedLevels = __webpack_require__(1005);

var _redux = __webpack_require__(237);

var _constants = __webpack_require__(216);

var _thumbnail = __webpack_require__(1158);

var _block_utils = __webpack_require__(743);

var _skins = __webpack_require__(2152);

var _skins2 = _interopRequireDefault(_skins);

var _dom = __webpack_require__(594);

var _dom2 = _interopRequireDefault(_dom);

var _progressRedux = __webpack_require__(498);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Blockly Demo: Turtle Graphics
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Globals used in this file:
//  Blockly

/**
 * @fileoverview Demonstration of Blockly: Turtle Graphics.
 * @author fraser@google.com (Neil Fraser)
 */

var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(32);
var color = __webpack_require__(44);
var commonMsg = __webpack_require__(40);
var turtleMsg = __webpack_require__(1744);

var ArtistAPI = __webpack_require__(2950);
var apiJavascript = __webpack_require__(2951);
var Provider = __webpack_require__(53).Provider;
var AppView = __webpack_require__(944);
var ArtistVisualizationColumn = __webpack_require__(3325);
var utils = __webpack_require__(71);
var Slider = __webpack_require__(3326);
var _ = __webpack_require__(82);
var dropletConfig = __webpack_require__(3327);
var JSInterpreter = __webpack_require__(1291);
var JsInterpreterLogger = __webpack_require__(1731);


var CANVAS_HEIGHT = 400;
var CANVAS_WIDTH = 400;

var DEFAULT_X = CANVAS_WIDTH / 2;
var DEFAULT_Y = CANVAS_HEIGHT / 2;
var DEFAULT_DIRECTION = 90;

var MAX_STICKER_SIZE = 100;

var JOINT_RADIUS = 4;

var SMOOTH_ANIMATE_STEP_SIZE = 5;
var FAST_SMOOTH_ANIMATE_STEP_SIZE = 15;

var decorationAnimationWidth = 85;
var decorationAnimationHeight = 85;
var decorationAnimationNumFrames = 19;

/**
* Minimum joint segment length
*/
var JOINT_SEGMENT_LENGTH = 50;

/**
 * An x offset against the sprite edge where the decoration should be drawn,
 * along with whether it should be drawn before or after the turtle sprite itself.
 */
var ELSA_DECORATION_DETAILS = [{ x: 15, when: "after" }, { x: 26, when: "after" }, { x: 37, when: "after" }, { x: 46, when: "after" }, { x: 60, when: "after" }, { x: 65, when: "after" }, { x: 66, when: "after" }, { x: 64, when: "after" }, { x: 62, when: "before" }, { x: 55, when: "before" }, { x: 48, when: "before" }, { x: 33, when: "before" }, { x: 31, when: "before" }, { x: 22, when: "before" }, { x: 17, when: "before" }, { x: 12, when: "before" }, { x: 8, when: "after" }, { x: 10, when: "after" }];

var REMIX_PROPS = [{
  defaultValues: {
    initialX: DEFAULT_X,
    initialY: DEFAULT_Y
  },
  generateBlock: function generateBlock(args) {
    return (0, _block_utils.blockAsXmlNode)('jump_to_xy', {
      titles: {
        'XPOS': args.initialX,
        'YPOS': args.initialY
      }
    });
  }
}, {
  defaultValues: {
    startDirection: DEFAULT_DIRECTION
  },
  generateBlock: function generateBlock(args) {
    return (0, _block_utils.blockAsXmlNode)('draw_turn', {
      titles: {
        'DIR': 'turnRight'
      },
      values: {
        'VALUE': {
          type: 'math_number',
          titleName: 'NUM',
          titleValue: args.startDirection - DEFAULT_DIRECTION
        }
      }
    });
  }
}];

var FROZEN_REMIX_PROPS = [{
  defaultValues: {
    initialX: DEFAULT_X,
    initialY: DEFAULT_Y
  },
  generateBlock: function generateBlock(args) {
    return (0, _block_utils.blockAsXmlNode)('jump_to_xy', {
      titles: {
        'XPOS': args.initialX,
        'YPOS': args.initialY
      }
    });
  }
}, {
  defaultValues: {
    startDirection: 180
  },
  generateBlock: function generateBlock(args) {
    return (0, _block_utils.blockAsXmlNode)('draw_turn', {
      titles: {
        'DIR': 'turnRight'
      },
      values: {
        'VALUE': {
          type: 'math_number',
          titleName: 'NUM',
          titleValue: args.startDirection - 180
        }
      }
    });
  }
}, {
  defaultValues: {
    skin: "elsa"
  },
  generateBlock: function generateBlock(args) {
    return (0, _block_utils.blockAsXmlNode)('turtle_setArtist', {
      titles: {
        'VALUE': args.skin
      }
    });
  }
}];

var REMIX_PROPS_BY_SKIN = {
  artist: REMIX_PROPS,
  anna: FROZEN_REMIX_PROPS,
  elsa: FROZEN_REMIX_PROPS
};

var PUBLISHABLE_SKINS = ['artist', 'artist_zombie', 'anna', 'elsa'];

var Visualization = function () {
  function Visualization() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Visualization);

    this.x = DEFAULT_X;
    this.y = DEFAULT_Y;
    this.heading = DEFAULT_DIRECTION;
    this.penDownValue = true;

    this.avatar = options.avatar;
    this.isFrozenSkin = !!options.isFrozenSkin;
    this.isK1 = !!options.isK1;
    this.decorationAnimationImage = options.decorationAnimationImage;
    this.showDecoration = options.showDecoration;

    // Internal state.
    this.turtleFrame_ = 0;
    this.isPredrawing_ = false;
    this.currentPathPattern = new Image();
    this.isDrawingWithPattern = false;

    // This flag is used to draw a version of code (either user code or solution
    // code) that normalizes patterns and stickers to always use the "first"
    // option, so that validation can be agnostic.
    this.shouldDrawNormalized_ = false;

    // Create hidden canvases.
    this.ctxAnswer = this.createCanvas_('answer', 400, 400).getContext('2d');
    this.ctxImages = this.createCanvas_('images', 400, 400).getContext('2d');
    this.ctxPredraw = this.createCanvas_('predraw', 400, 400).getContext('2d');
    this.ctxScratch = this.createCanvas_('scratch', 400, 400).getContext('2d');
    this.ctxPattern = this.createCanvas_('pattern', 400, 400).getContext('2d');
    this.ctxFeedback = this.createCanvas_('feedback', 154, 154).getContext('2d');
    this.ctxThumbnail = this.createCanvas_('thumbnail', 180, 180).getContext('2d');

    // Create hidden canvases for normalized versions
    this.ctxNormalizedScratch = this.createCanvas_('normalizedScratch', 400, 400).getContext('2d');
    this.ctxNormalizedAnswer = this.createCanvas_('normalizedAnswer', 400, 400).getContext('2d');

    // Create display canvas.
    this.displayCanvas = this.createCanvas_('display', 400, 400);
    this.ctxDisplay = this.displayCanvas.getContext('2d');
  }

  Visualization.prototype.resetTurtleFrame = function resetTurtleFrame() {
    this.turtleFrame_ = 0;
  };

  // Helper for creating canvas elements.


  Visualization.prototype.createCanvas_ = function createCanvas_(id, width, height) {
    var el = document.createElement('canvas');
    el.id = id;
    el.width = width;
    el.height = height;
    return el;
  };

  /**
   * Draw the turtle image based on this.visualization.x, this.visualization.y, and this.visualization.heading.
   */


  Visualization.prototype.drawTurtle = function drawTurtle() {
    if (!this.avatar.visible) {
      return;
    }
    this.drawDecorationAnimation("before");

    // Computes the index of the image in the sprite.
    var index = Math.floor(this.heading * this.avatar.numHeadings / 360);
    if (this.isFrozenSkin) {
      // the rotations in the sprite sheet go in the opposite direction.
      index = this.avatar.numHeadings - index;

      // and they are 180 degrees out of phase.
      index = (index + this.avatar.numHeadings / 2) % this.avatar.numHeadings;
    }
    var sourceX = this.avatar.width * index;
    var sourceY = this.avatar.height * this.turtleFrame_;
    this.turtleFrame_ = (this.turtleFrame_ + 1) % this.avatar.numFrames;

    var sourceWidth = this.avatar.width;
    var sourceHeight = this.avatar.height;
    var destWidth = this.avatar.width;
    var destHeight = this.avatar.height;
    var destX = this.x - destWidth / 2;
    var destY = this.y - destHeight + 7;

    if (!this.avatar.image) {
      return;
    }

    if (sourceX < 0 || sourceY < 0 || sourceX + sourceWidth - 0 > this.avatar.image.width || sourceY + sourceHeight > this.avatar.image.height) {
      return;
    }

    if (this.avatar.image.width !== 0) {
      this.ctxDisplay.drawImage(this.avatar.image, Math.round(sourceX), Math.round(sourceY), sourceWidth - 0, sourceHeight, Math.round(destX), Math.round(destY), destWidth - 0, destHeight);
    }

    this.drawDecorationAnimation("after");
  };

  /**
   * This is called twice, once with "before" and once with "after", referring to before or after
   * the sprite is drawn.  For some angles it should be drawn before, and for some after.
   */


  Visualization.prototype.drawDecorationAnimation = function drawDecorationAnimation(when) {
    if (this.showDecoration()) {
      var frameIndex = (this.turtleFrame_ + 10) % decorationAnimationNumFrames;

      var angleIndex = Math.floor(this.heading * this.avatar.numHeadings / 360);

      // the rotations in the Anna & Elsa sprite sheets go in the opposite direction.
      angleIndex = this.avatar.numHeadings - angleIndex;

      // and they are 180 degrees out of phase.
      angleIndex = (angleIndex + this.avatar.numHeadings / 2) % this.avatar.numHeadings;

      if (ELSA_DECORATION_DETAILS[angleIndex].when === when) {
        var sourceX = decorationAnimationWidth * frameIndex;
        var sourceY = 0;
        var sourceWidth = decorationAnimationWidth;
        var sourceHeight = decorationAnimationHeight;
        var destWidth = sourceWidth;
        var destHeight = sourceHeight;
        var destX = this.x - destWidth / 2 - 15 - 15 + ELSA_DECORATION_DETAILS[angleIndex].x;
        var destY = this.y - destHeight / 2 - 100;

        if (this.decorationAnimationImage.width !== 0) {
          this.ctxDisplay.drawImage(this.decorationAnimationImage, Math.round(sourceX), Math.round(sourceY), sourceWidth, sourceHeight, Math.round(destX), Math.round(destY), destWidth, destHeight);
        }
      }
    }
  };

  /**
   * Copy the scratch canvas to the display canvas. Add a turtle marker.
   */


  Visualization.prototype.display = function display() {
    // FF on linux retains drawing of previous location of artist unless we clear
    // the canvas first.
    var style = this.ctxDisplay.fillStyle;
    this.ctxDisplay.fillStyle = color.white;
    this.ctxDisplay.clearRect(0, 0, this.ctxDisplay.canvas.width, this.ctxDisplay.canvas.width);
    this.ctxDisplay.fillStyle = style;

    this.ctxDisplay.globalCompositeOperation = 'copy';
    // Draw the images layer.
    this.ctxDisplay.globalCompositeOperation = 'source-over';
    this.ctxDisplay.drawImage(this.ctxImages.canvas, 0, 0);

    // Draw the predraw layer.
    this.ctxDisplay.globalCompositeOperation = 'source-over';
    this.ctxDisplay.drawImage(this.ctxPredraw.canvas, 0, 0);

    // Draw the answer layer.
    if (this.isFrozenSkin) {
      this.ctxDisplay.globalAlpha = 0.4;
    } else {
      this.ctxDisplay.globalAlpha = 0.3;
    }
    this.ctxDisplay.drawImage(this.ctxAnswer.canvas, 0, 0);
    this.ctxDisplay.globalAlpha = 1;

    // Draw the pattern layer.
    this.ctxDisplay.globalCompositeOperation = 'source-over';
    this.ctxDisplay.drawImage(this.ctxPattern.canvas, 0, 0);

    // Draw the user layer.
    this.ctxDisplay.globalCompositeOperation = 'source-over';
    this.ctxDisplay.drawImage(this.ctxScratch.canvas, 0, 0);

    // Draw the turtle.
    this.drawTurtle();
  };

  Visualization.prototype.jumpTo = function jumpTo(pos) {
    var _pos = _slicedToArray(pos, 2),
        x = _pos[0],
        y = _pos[1];

    this.x = Number(x);
    this.y = Number(y);
  };

  Visualization.prototype.jumpForward = function jumpForward(distance) {
    this.x += distance * Math.sin(this.degreesToRadians_(this.heading));
    this.y -= distance * Math.cos(this.degreesToRadians_(this.heading));
  };

  Visualization.prototype.circleAt_ = function circleAt_(x, y, radius) {
    this.ctxScratch.arc(x, y, radius, 0, 2 * Math.PI);
  };

  Visualization.prototype.drawToTurtle_ = function drawToTurtle_(distance) {
    var isDot = distance === 0;
    if (isDot) {
      // WebKit (unlike Gecko) draws nothing for a zero-length line, so draw a very short line.
      this.ctxScratch.lineTo(this.x + 0.1, this.y);
    } else {
      this.ctxScratch.lineTo(this.x, this.y);
    }
  };

  Visualization.prototype.turnByDegrees = function turnByDegrees(degreesRight) {
    this.setHeading(this.heading + degreesRight);
  };

  Visualization.prototype.setHeading = function setHeading(heading) {
    heading = this.constrainDegrees_(heading);
    this.heading = heading;
  };

  /**
   * Converts degrees into radians.
   *
   * @param {number} degrees - The degrees to convert to radians
   * @return {number} `degrees` converted to radians
   */


  Visualization.prototype.degreesToRadians_ = function degreesToRadians_(degrees) {
    return degrees * (Math.PI / 180);
  };

  Visualization.prototype.constrainDegrees_ = function constrainDegrees_(degrees) {
    degrees %= 360;
    if (degrees < 0) {
      degrees += 360;
    }
    return degrees;
  };

  Visualization.prototype.moveForward = function moveForward(distance, isDiagonal) {
    if (!this.penDownValue) {
      this.jumpForward(distance);
      return;
    }
    if (this.isDrawingWithPattern) {
      this.drawForwardLineWithPattern_(distance);

      // Frozen gets both a pattern and a line over the top of it.
      if (!this.isFrozenSkin) {
        return;
      }
    }

    this.drawForward_(distance, isDiagonal);
  };

  Visualization.prototype.drawForward_ = function drawForward_(distance, isDiagonal) {
    if (this.shouldDrawJoints_()) {
      this.drawForwardWithJoints_(distance, isDiagonal);
    } else {
      this.drawForwardLine_(distance);
    }
  };

  /**
   * Draws a line of length `distance`, adding joint knobs along the way at
   * intervals of `JOINT_SEGMENT_LENGTH` if `isDiagonal` is false, or
   * `JOINT_SEGMENT_LENGTH * sqrt(2)` if `isDiagonal` is true.
   * @param distance
   * @param isDiagonal
   */


  Visualization.prototype.drawForwardWithJoints_ = function drawForwardWithJoints_(distance, isDiagonal) {
    var remainingDistance = distance;
    var segmentLength = JOINT_SEGMENT_LENGTH * (isDiagonal ? Math.sqrt(2) : 1);

    if (remainingDistance >= segmentLength) {
      this.drawJointAtTurtle_();
    }

    while (remainingDistance > 0) {
      var enoughForFullSegment = remainingDistance >= segmentLength;
      var currentSegmentLength = enoughForFullSegment ? segmentLength : remainingDistance;

      remainingDistance -= currentSegmentLength;

      this.drawForwardLine_(currentSegmentLength);

      if (enoughForFullSegment) {
        this.drawJointAtTurtle_();
      }
    }
  };

  Visualization.prototype.drawForwardLine_ = function drawForwardLine_(distance) {
    if (this.isFrozenSkin) {
      this.ctxScratch.beginPath();
      this.ctxScratch.moveTo(this.stepStartX, this.stepStartY);
      this.jumpForward(distance);
      this.drawToTurtle_(distance);
      this.ctxScratch.stroke();
    } else {
      this.ctxScratch.beginPath();
      this.ctxScratch.moveTo(this.x, this.y);
      this.jumpForward(distance);
      this.drawToTurtle_(distance);
      this.ctxScratch.stroke();
    }
  };

  Visualization.prototype.drawForwardLineWithPattern_ = function drawForwardLineWithPattern_(distance) {
    var img;
    var startX;
    var startY;

    if (this.isFrozenSkin) {
      this.ctxPattern.moveTo(this.stepStartX, this.stepStartY);
      img = this.currentPathPattern;
      startX = this.stepStartX;
      startY = this.stepStartY;

      var lineDistance = Math.abs(this.stepDistanceCovered);

      this.ctxPattern.save();
      this.ctxPattern.translate(startX, startY);
      // increment the angle and rotate the image.
      // Need to subtract 90 to accomodate difference in canvas vs. Turtle direction
      this.ctxPattern.rotate(this.degreesToRadians_(this.heading - 90));

      var clipSize;
      if (lineDistance % this.smoothAnimateStepSize === 0) {
        clipSize = this.smoothAnimateStepSize;
      } else if (lineDistance > this.smoothAnimateStepSize) {
        // this happens when our line was not divisible by smoothAnimateStepSize
        // and we've hit our last chunk
        clipSize = lineDistance % this.smoothAnimateStepSize;
      } else {
        clipSize = lineDistance;
      }
      if (img.width > 0 && img.height > 0 && clipSize > 0) {
        this.ctxPattern.drawImage(img,
        // Start point for clipping image
        Math.round(lineDistance), 0,
        // clip region size
        clipSize, img.height,
        // some mysterious hand-tweaking done by Brendan
        Math.round(this.stepDistanceCovered - clipSize - 2), Math.round(-18), clipSize, img.height);
      }

      this.ctxPattern.restore();
    } else {

      this.ctxScratch.moveTo(this.x, this.y);
      img = this.currentPathPattern;
      startX = this.x;
      startY = this.y;

      this.jumpForward(distance);
      this.ctxScratch.save();
      this.ctxScratch.translate(startX, startY);
      // increment the angle and rotate the image.
      // Need to subtract 90 to accommodate difference in canvas vs. Turtle direction
      this.ctxScratch.rotate(this.degreesToRadians_(this.heading - 90));

      if (distance > 0 && img.width !== 0) {
        this.ctxScratch.drawImage(img,
        // Start point for clipping image forward
        0, 0,
        // clip region size
        distance, img.height,
        // draw location relative to the ctx.translate point pre-rotation
        -img.height / 4, -img.height / 2, distance + img.height / 2, img.height);
      } else if (distance < 0 && img.width !== 0) {
        this.ctxScratch.drawImage(img,
        // Start point for clipping image backward
        img.width, 0,
        // clip region size
        distance, img.height,
        // draw location relative to the ctx.translate point pre-rotation
        -img.height / 4, -img.height / 2, distance + img.height / 2, img.height);
      }

      this.ctxScratch.restore();
    }
  };

  Visualization.prototype.shouldDrawJoints_ = function shouldDrawJoints_() {
    return this.isK1 && !this.isPredrawing_;
  };

  Visualization.prototype.drawJointAtTurtle_ = function drawJointAtTurtle_() {
    this.ctxScratch.beginPath();
    this.ctxScratch.moveTo(this.x, this.y);
    this.circleAt_(this.x, this.y, JOINT_RADIUS);
    this.ctxScratch.stroke();
  };

  return Visualization;
}();

/**
 * An instantiable Artist class
 * @param {StudioApp} studioApp The studioApp instance to build upon.
 */


var Artist = function Artist() {
  this.skin = null;
  this.level = null;

  this.api = new ArtistAPI();
  apiJavascript.injectArtistAPI(this.api);

  /** @type {JSInterpreter} */
  this.JSInterpreter = null;

  /** @private {JsInterpreterLogger} */
  this.consoleLogger_ = new JsInterpreterLogger(window.console);

  // image icons and image paths for the 'set pattern block'
  this.lineStylePatternOptions = [];

  // PID of animation task currently executing.
  this.pid = 0;

  // The avatar animation decoration image
  this.decorationAnimationImage = new Image();

  // Drawing with a pattern
  this.loadedPathPatterns = [];
  this.linePatterns = [];

  // these get set by init based on skin.
  this.speedSlider = null;
};

module.exports = Artist;
module.exports.Visualization = Visualization;

/**
 * todo
 */
Artist.prototype.injectStudioApp = function (studioApp) {
  this.studioApp_ = studioApp;
  this.studioApp_.reset = _.bind(this.reset, this);
  this.studioApp_.runButtonClick = _.bind(this.runButtonClick, this);

  this.studioApp_.setCheckForEmptyBlocks(true);
};

/**
 * Initializes all sticker images as defined in this.skin.stickers, if any,
 * storing the created images in this.stickers.
 *
 * NOTE: initializes this.stickers as a side effect
 *
 * @return {Promise} that resolves once all images have finished loading,
 *         whether they did so successfully or not (or that resolves instantly
 *         if there are no images to load).
 */
Artist.prototype.preloadAllStickerImages = function () {
  var _this = this;

  this.stickers = {};

  var loadSticker = function loadSticker(name) {
    return new Promise(function (resolve) {
      var img = new Image();

      img.onload = function () {
        return resolve();
      };
      img.onerror = function () {
        return resolve();
      };

      img.src = _this.skin.stickers[name];
      _this.stickers[name] = img;
    });
  };

  var stickers = this.skin && this.skin.stickers || {};
  var stickerNames = Object.keys(stickers);

  if (stickerNames.length) {
    return Promise.all(stickerNames.map(loadSticker));
  } else {
    return Promise.resolve();
  }
};

/**
 * Initializes all pattern images as defined in
 * this.skin.lineStylePatternOptions, if any, storing the created images in
 * this.loadedPathPatterns.
 *
 * @return {Promise} that resolves once all images have finished loading,
 *         whether they did so successfully or not (or that resolves instantly
 *         if there are no images to load).
 */
Artist.prototype.preloadAllPatternImages = function () {
  var _this2 = this;

  var loadPattern = function loadPattern(patternOption) {
    return new Promise(function (resolve) {
      var pattern = patternOption[1];

      if (_this2.linePatterns[pattern] && !_this2.loadedPathPatterns[pattern]) {
        var img = new Image();

        img.onload = function () {
          return resolve();
        };
        img.onerror = function () {
          return resolve();
        };

        img.src = _this2.linePatterns[pattern];
        _this2.loadedPathPatterns[pattern] = img;
      } else {
        resolve();
      }
    });
  };

  var patternOptions = this.skin && this.skin.lineStylePatternOptions;
  if (patternOptions.length) {
    return Promise.all(patternOptions.map(loadPattern));
  } else {
    return Promise.resolve();
  }
};

Artist.prototype.isFrozenSkin = function () {
  return this.skin.id === "anna" || this.skin.id === "elsa";
};

/**
 * Initialize Blockly and the turtle.  Called on page load.
 */
Artist.prototype.init = function (config) {
  var _this3 = this;

  if (!this.studioApp_) {
    throw new Error("Artist requires a StudioApp");
  }

  this.skin = config.skin;
  this.level = config.level;

  if (this.isFrozenSkin()) {
    // let's try adding a background image
    this.level.images = [{}];
    this.level.images[0].filename = 'background.jpg';

    this.level.images[0].position = [0, 0];
    this.level.images[0].scale = 1;
  }

  this.linePatterns = config.skin.linePatterns;

  this.visualization = new Visualization({
    avatar: config.skin.avatarSettings,
    isK1: config.level.isK1,
    isFrozenSkin: this.isFrozenSkin(),
    decorationAnimationImage: this.decorationAnimationImage,
    showDecoration: function showDecoration() {
      return _this3.skin.id === "elsa";
    }
  });

  config.grayOutUndeletableBlocks = true;
  config.forceInsertTopBlock = 'when_run';
  config.dropletConfig = dropletConfig;
  config.prepareForRemix = Artist.prototype.prepareForRemix.bind(this);

  config.loadAudio = _.bind(this.loadAudio_, this);
  config.afterInject = _.bind(this.afterInject_, this, config);

  if (config.embed && config.level.markdownInstructions && !config.level.instructions) {
    // if we are an embedded level with markdown instructions but no regular
    // instructions, we want to display CSP-style instructions and not be
    // centered
    config.noInstructionsWhenCollapsed = true;
    config.centerEmbedded = false;
  }

  // Push initial level properties into the Redux store
  var appSpecificConstants = {};
  if (config.skin.avatarAllowedScripts && !config.skin.avatarAllowedScripts.includes(config.scriptName)) {
    appSpecificConstants.smallStaticAvatar = config.skin.blankAvatar;
    appSpecificConstants.failureAvatar = config.skin.blankAvatar;
  }
  this.studioApp_.setPageConstants(config, appSpecificConstants);

  var iconPath = '/blockly/media/turtle/' + (config.isLegacyShare && config.hideSource ? 'icons_white.png' : 'icons.png');
  var visualizationColumn = React.createElement(ArtistVisualizationColumn, {
    showFinishButton: !!config.level.freePlay && !config.level.isProjectLevel,
    iconPath: iconPath
  });

  function onMount() {
    this.studioApp_.init(config);
    var finishButton = document.getElementById('finishButton');
    if (finishButton) {
      _dom2.default.addClickTouchEvent(finishButton, this.checkAnswer.bind(this));
    }
  }

  return Promise.all([this.preloadAllStickerImages(), this.preloadAllPatternImages()]).then(function () {
    ReactDOM.render(React.createElement(
      Provider,
      { store: (0, _redux.getStore)() },
      React.createElement(AppView, {
        visualizationColumn: visualizationColumn,
        onMount: onMount.bind(_this3)
      })
    ), document.getElementById(config.containerId));
  });
};

/**
 * Add blocks that mimic level properties that are set on the current level
 * but not set by default, in this case the artist's starting position and
 * orientation.
 */
Artist.prototype.prepareForRemix = function () {
  var _this4 = this;

  var blocksDom = Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace);
  var blocksDocument = blocksDom.ownerDocument;
  var remix_props = REMIX_PROPS_BY_SKIN[this.skin.id] || REMIX_PROPS;
  var next = false;
  if (remix_props.every(function (group) {
    return Object.keys(group.defaultValues).every(function (prop) {
      return _this4.level[prop] === undefined || _this4.level[prop] === group.defaultValues[prop];
    });
  })) {
    // If all of the level props we need to worry about are undefined or equal
    // to the default value, we don't need to insert any new blocks.
    return Promise.resolve();
  }

  var whenRun = blocksDom.querySelector('block[type="when_run"]');
  if (!whenRun) {
    whenRun = blocksDocument.createElement('block');
    whenRun.setAttribute('type', 'when_run');
    blocksDom.appendChild(whenRun);
  }
  next = whenRun.querySelector('next');
  if (next) {
    whenRun.removeChild(next);
  }

  var insertBeforeNext = function insertBeforeNext(block) {
    if (next) {
      block.appendChild(next);
    }
    next = blocksDocument.createElement('next');
    next.appendChild(block);
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = remix_props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var group = _step.value;

      var customized = false;
      for (var prop in group.defaultValues) {
        var value = this.level[prop];
        if (value !== undefined && value !== group.defaultValues[prop]) {
          customized = true;
          break;
        }
      }
      if (!customized) {
        continue;
      }
      var blockArgs = {};
      for (var _prop in group.defaultValues) {
        blockArgs[_prop] = this.level[_prop] !== undefined ? this.level[_prop] : group.defaultValues[_prop];
      }
      insertBeforeNext(group.generateBlock(blockArgs));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  whenRun.appendChild(next);

  (0, _block_utils.cleanBlocks)(blocksDom);

  Blockly.mainBlockSpace.clear();
  Blockly.Xml.domToBlockSpace(Blockly.mainBlockSpace, blocksDom);
  return Promise.resolve();
};

Artist.prototype.loadAudio_ = function () {
  this.studioApp_.loadAudio(this.skin.winSound, 'win');
  this.studioApp_.loadAudio(this.skin.startSound, 'start');
  this.studioApp_.loadAudio(this.skin.failureSound, 'failure');
};

/**
 * We only attempt normalization for blockly levels, for two reasons;
 *
 * First, the blocks that we normalize (sticker and pattern) only exist in
 * blockly land.
 *
 * Second, the way we retrieve the user code in droplet does not use
 * this.api.log, so we'd have to make an alternate pathway for that use
 * case.
 *
 * @return {boolean}
 */
Artist.prototype.shouldSupportNormalization = function () {
  return this.studioApp_.isUsingBlockly();
};

/**
 * Code called after the blockly div + blockly core is injected into the document
 */
Artist.prototype.afterInject_ = function (config) {
  // Initialize the slider.
  var slider = document.getElementById('slider');
  this.speedSlider = new Slider(10, 35, 130, slider);

  // Change default speed (eg Speed up levels that have lots of steps).
  if (config.level.sliderSpeed) {
    this.speedSlider.setValue(config.level.sliderSpeed);
  }

  // Do not animate drawing, used for tests
  if (config.level.instant) {
    this.instant_ = true;
  }

  if (this.studioApp_.isUsingBlockly()) {
    // Add to reserved word list: API, local variables in execution evironment
    // (execute) and the infinite loop detection function.
    Blockly.JavaScript.addReservedWords('Turtle,code');
  }

  var visualization = document.getElementById('visualization');
  visualization.appendChild(this.visualization.displayCanvas);

  if (this.studioApp_.isUsingBlockly() && this.isFrozenSkin()) {
    // Override colour_random to only generate random colors from within our frozen
    // palette
    Blockly.JavaScript.colour_random = function () {
      // Generate a random colour.
      if (!Blockly.JavaScript.definitions_.colour_random) {
        var functionName = Blockly.JavaScript.variableDB_.getDistinctName('colour_random', Blockly.Generator.NAME_TYPE);
        Blockly.JavaScript.colour_random.functionName = functionName;
        var func = [];
        func.push('function ' + functionName + '() {');
        func.push('   var colors = ' + JSON.stringify(Blockly.FieldColour.COLOURS) + ';');
        func.push('  return colors[Math.floor(Math.random()*colors.length)];');
        func.push('}');
        Blockly.JavaScript.definitions_.colour_random = func.join('\n');
      }
      var code = Blockly.JavaScript.colour_random.functionName + '()';
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    };
  }

  this.loadDecorationAnimation();

  // Set their initial contents.
  this.loadTurtle(true /* initializing */);
  this.drawImages();

  // Draw the answer twice; once to the display canvas and once again in a
  // normalized version to the validation canvas
  this.drawAnswer(this.visualization.ctxAnswer);
  this.visualization.shouldDrawNormalized_ = true;
  this.drawAnswer(this.visualization.ctxNormalizedAnswer);
  this.visualization.shouldDrawNormalized_ = false;

  if (this.level.predrawBlocks) {
    this.visualization.isPredrawing_ = true;
    this.drawBlocksOnCanvas(this.level.predrawBlocks, this.visualization.ctxPredraw);
    this.visualization.isPredrawing_ = false;
  }

  // Adjust visualizationColumn width.
  var visualizationColumn = document.getElementById('visualizationColumn');
  visualizationColumn.style.width = '400px';
};

/**
 * On startup draw the expected answer and save it to the given canvas.
 */
Artist.prototype.drawAnswer = function (canvas) {
  if (this.level.solutionBlocks) {
    this.drawBlocksOnCanvas(this.level.solutionBlocks, canvas);
  } else {
    this.drawLogOnCanvas(this.level.answer.slice(), canvas);
  }
};

/**
 * Given a set of commands and a canvas, draws the commands onto the canvas
 * composited over the scratch canvas.
 */
Artist.prototype.drawLogOnCanvas = function (log, canvas) {
  this.studioApp_.reset();
  while (log.length) {
    var tuple = log.shift();
    this.step(tuple[0], tuple.slice(1), { smoothAnimate: false });
    this.resetStepInfo_();
  }
  canvas.globalCompositeOperation = 'copy';
  canvas.drawImage(this.visualization.ctxScratch.canvas, 0, 0);
  canvas.globalCompositeOperation = 'source-over';
};

/**
 * Evaluates blocks or code, and draws onto given canvas.
 */
Artist.prototype.drawBlocksOnCanvas = function (blocksOrCode, canvas) {
  var code;
  if (this.studioApp_.isUsingBlockly()) {
    var domBlocks = Blockly.Xml.textToDom(blocksOrCode);
    code = Blockly.Generator.xmlToCode('JavaScript', domBlocks);
  } else {
    code = blocksOrCode;
  }
  this.evalCode(code);
  this.drawCurrentBlocksOnCanvas(canvas);
};

/**
 * Draws the results of block evaluation (stored on api.log) onto the given
 * canvas.
 */
Artist.prototype.drawCurrentBlocksOnCanvas = function (canvas) {
  this.drawLogOnCanvas(this.api.log, canvas);
};

/**
 * Place an image at the specified coordinates.
 * Code from http://stackoverflow.com/questions/5495952. Thanks, Phrogz.
 * @param {string} filename Relative path to image.
 * @param {!Array} position An x-y pair.
 * @param {number} optional scale at which image is drawn
 */
Artist.prototype.placeImage = function (filename, position, scale) {
  var img = new Image();
  img.onload = _.bind(function () {
    if (img.width !== 0) {
      if (scale) {
        this.visualization.ctxImages.drawImage(img, position[0], position[1], img.width, img.height, 0, 0, img.width * scale, img.height * scale);
      } else {
        this.visualization.ctxImages.drawImage(img, position[0], position[1]);
      }
    }
    this.visualization.display();
  }, this);

  if (this.isFrozenSkin()) {
    img.src = this.skin.assetUrl(filename);
  } else {
    // This is necessary when loading images from image.code.org to
    // request the image with ACAO headers so that canvas will not flag
    // it as tainted
    img.crossOrigin = "anonymous";
    img.src = filename.startsWith('http') ? filename : this.studioApp_.assetUrl('media/turtle/' + filename);
  }
};

/**
 * Draw the images for this page and level onto this.visualization.ctxImages.
 */
Artist.prototype.drawImages = function () {
  if (!this.level.images) {
    return;
  }
  for (var i = 0; i < this.level.images.length; i++) {
    var image = this.level.images[i];
    this.placeImage(image.filename, image.position, image.scale);
  }
  this.visualization.ctxImages.globalCompositeOperation = 'copy';
  this.visualization.ctxImages.drawImage(this.visualization.ctxScratch.canvas, 0, 0);
  this.visualization.ctxImages.globalCompositeOperation = 'source-over';
};

/**
 * Initialize the turtle image on load.
 */
Artist.prototype.loadTurtle = function () {
  var _this5 = this;

  var initializing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var onloadCallback = initializing ? function () {
    return _this5.visualization.display();
  } : function () {
    return _this5.visualization.drawTurtle();
  };
  this.visualization.avatar.image = new Image();
  this.visualization.avatar.image.onload = _.bind(onloadCallback, this);

  this.visualization.avatar.image.src = this.skin.avatar;
};

/**
 * Initial the turtle animation deocration on load.
 */
Artist.prototype.loadDecorationAnimation = function () {
  if (this.skin.id === "elsa") {
    this.decorationAnimationImage.src = this.skin.decorationAnimation;
  }
};

/**
 * Reset the turtle to the start position, clear the display, and kill any
 * pending tasks.
 * @param {boolean} ignore Required by the API but ignored by this
 *     implementation.
 */
Artist.prototype.reset = function (ignore) {
  // Standard starting location and heading of the turtle.
  this.visualization.x = DEFAULT_X;
  this.visualization.y = DEFAULT_Y;
  this.visualization.heading = this.level.startDirection !== undefined ? this.level.startDirection : DEFAULT_DIRECTION;
  this.visualization.penDownValue = true;
  this.visualization.avatar.visible = true;
  this.visualization.resetTurtleFrame();

  // For special cases, use a different initial location.
  if (this.level.initialX !== undefined) {
    this.visualization.x = this.level.initialX;
  }
  if (this.level.initialY !== undefined) {
    this.visualization.y = this.level.initialY;
  }
  // Clear the display.
  this.visualization.ctxScratch.canvas.width = this.visualization.ctxScratch.canvas.width;
  this.visualization.ctxPattern.canvas.width = this.visualization.ctxPattern.canvas.width;
  if (this.isFrozenSkin()) {
    this.visualization.ctxScratch.strokeStyle = 'rgb(255,255,255)';
    this.visualization.ctxScratch.fillStyle = 'rgb(255,255,255)';
    this.visualization.ctxScratch.lineWidth = 2;
  } else {
    this.visualization.ctxScratch.strokeStyle = '#000000';
    this.visualization.ctxScratch.fillStyle = '#000000';
    this.visualization.ctxScratch.lineWidth = 5;
  }

  this.visualization.ctxScratch.lineCap = 'round';
  this.visualization.ctxScratch.font = 'normal 18pt Arial';
  this.visualization.display();

  // Clear the feedback.
  this.visualization.ctxFeedback.clearRect(0, 0, this.visualization.ctxFeedback.canvas.width, this.visualization.ctxFeedback.canvas.height);

  this.selectPattern();

  // Kill any task.
  if (this.pid) {
    window.clearTimeout(this.pid);
  }
  this.pid = 0;

  // Discard the interpreter.
  this.consoleLogger_.detach();

  // Discard the interpreter.
  if (this.JSInterpreter) {
    this.JSInterpreter.deinitialize();
    this.JSInterpreter = null;
  }
  this.executionError = null;

  // Stop the looping sound.
  this.studioApp_.stopLoopingAudio('start');
  this.resetStepInfo_();
};

/**
 * Click the run button.  Start the program.
 */
Artist.prototype.runButtonClick = function () {
  this.studioApp_.toggleRunReset('reset');
  document.getElementById('spinner').style.visibility = 'visible';
  if (this.studioApp_.isUsingBlockly()) {
    Blockly.mainBlockSpace.traceOn(true);
  }
  this.studioApp_.attempts++;
  this.execute();
};

Artist.prototype.evalCode = function (code) {
  try {
    _CustomMarshalingInterpreter2.default.evalWith(code, {
      Turtle: this.api
    });
  } catch (e) {
    // Infinity is thrown if we detect an infinite loop. In that case we'll
    // stop further execution, animate what occurred before the infinite loop,
    // and analyze success/failure based on what was drawn.
    // Otherwise, abnormal termination is a user error.
    if (e !== 'Infinity') {
      // call window.onerror so that we get new relic collection.  prepend with
      // UserCode so that it's clear this is in eval'ed code.
      if (window.onerror) {
        window.onerror("UserCode:" + e.message, document.URL, 0);
      }
      window.alert(e);
    }
  }
};

/**
 * Set up the JSInterpreter and consoleLogger for editCode levels
 */
Artist.prototype.initInterpreter = function () {
  if (!this.level.editCode) {
    return;
  }
  this.JSInterpreter = new JSInterpreter({
    studioApp: this.studioApp_,
    shouldRunAtMaxSpeed: function shouldRunAtMaxSpeed() {
      return false;
    }
  });
  this.JSInterpreter.onExecutionError.register(this.handleExecutionError.bind(this));
  this.consoleLogger_.attachTo(this.JSInterpreter);
  this.JSInterpreter.parse({
    code: this.studioApp_.getCode(),
    blocks: dropletConfig.blocks,
    blockFilter: this.level.executePaletteApisOnly && this.level.codeFunctions
  });
};

/**
 * Handle an execution error from the interpreter
 */
Artist.prototype.handleExecutionError = function (err, lineNumber, outputString) {
  this.consoleLogger_.log(outputString);

  this.executionError = { err: err, lineNumber: lineNumber };

  if (err instanceof SyntaxError) {
    this.testResults = _constants.TestResults.SYNTAX_ERROR_FAIL;
  }

  this.finishExecution_();
};

/**
 * Execute the user's code.  Heaven help us...
 */
Artist.prototype.execute = function () {
  this.api.log = [];

  // Reset the graphic.
  this.studioApp_.reset();

  if (this.studioApp_.hasUnwantedExtraTopBlocks() || this.studioApp_.hasDuplicateVariablesInForLoops()) {
    // immediately check answer, which will fail and report top level blocks
    this.checkAnswer();
    return;
  }

  if (this.level.editCode) {
    this.initInterpreter();
  } else {
    var codeBlocks = Blockly.mainBlockSpace.getTopBlocks(true);
    if (this.studioApp_.initializationBlocks) {
      codeBlocks = this.studioApp_.initializationBlocks.concat(codeBlocks);
    }

    this.code = Blockly.Generator.blocksToCode('JavaScript', codeBlocks);
    this.evalCode(this.code);
  }

  // api.log now contains a transcript of all the user's actions.

  // If this is a free play level, save the code every time the run button is
  // clicked rather than only on finish
  if (this.level.freePlay) {
    this.levelComplete = true;
    this.testResults = _constants.TestResults.FREE_PLAY;
    this.report(false);
  }

  if (this.shouldSupportNormalization()) {
    // First, draw a normalized version of the user's actions (ie, one which
    // doesn't vary patterns or stickers) to a dedicated context. Note that we
    // clone this.api.log so the real log doesn't get mutated
    this.visualization.shouldDrawNormalized_ = true;
    this.drawLogOnCanvas(this.api.log.slice(), this.visualization.ctxNormalizedScratch);
    this.visualization.shouldDrawNormalized_ = false;

    // Then, reset our state and draw the user's actions in a visible, animated
    // way
    this.studioApp_.reset();
  }

  this.studioApp_.playAudio('start', { loop: true });

  // animate the transcript.

  if (this.instant_) {
    while (this.animate()) {}
  } else {
    this.pid = window.setTimeout(_.bind(this.animate, this), 100);
  }

  if (this.studioApp_.isUsingBlockly()) {
    // Disable toolbox while running
    Blockly.mainBlockSpaceEditor.setEnableToolbox(false);
  }
};

/**
 * Special case: if we have a turn, followed by a move forward, then we can just
 * do the turn instantly and then begin the move forward in the same frame.
 */
Artist.prototype.checkforTurnAndMove_ = function () {
  var nextIsForward = false;

  var currentTuple = this.api.log[0];
  var currentCommand = currentTuple[0];
  var currentValues = currentTuple.slice(1);

  // Check first for a small turn movement.
  if (currentCommand === 'RT') {
    var currentAngle = currentValues[0];
    if (Math.abs(currentAngle) <= 10) {
      // Check that next command is a move forward.
      if (this.api.log.length > 1) {
        var nextTuple = this.api.log[1];
        var nextCommand = nextTuple[0];
        if (nextCommand === 'FD') {
          nextIsForward = true;
        }
      }
    }
  }

  return nextIsForward;
};

/**
 * Attempt to execute one command from the log of API commands.
 */
Artist.prototype.executeTuple_ = function () {
  if (this.api.log.length === 0) {
    return false;
  }

  var executeSecondTuple;

  do {
    // Unless something special happens, we will just execute a single tuple.
    executeSecondTuple = false;

    var tuple = this.api.log[0];
    var command = tuple[0];
    var id = tuple[tuple.length - 1];

    this.studioApp_.highlight(String(id));

    // Should we execute another tuple in this frame of animation?
    if (this.skin.consolidateTurnAndMove && this.checkforTurnAndMove_()) {
      executeSecondTuple = true;
    }

    // We only smooth animate for Anna & Elsa, and only if there is not another tuple to be done.
    var tupleDone = this.step(command, tuple.slice(1), { smoothAnimate: this.skin.smoothAnimate && !executeSecondTuple });
    this.visualization.display();

    if (tupleDone) {
      this.api.log.shift();
      this.resetStepInfo_();
    }
  } while (executeSecondTuple);

  return true;
};

/**
 * Handle the tasks to be done after the user program is finished.
 */
Artist.prototype.finishExecution_ = function () {
  this.studioApp_.stopLoopingAudio('start');

  document.getElementById('spinner').style.visibility = 'hidden';
  if (this.studioApp_.isUsingBlockly()) {
    Blockly.mainBlockSpace.highlightBlock(null);
  }

  (0, _thumbnail.captureThumbnailFromCanvas)(this.getThumbnailCanvas_());

  if (this.level.freePlay) {
    window.dispatchEvent(new Event('artistDrawingComplete'));
  } else {
    this.checkAnswer();
  }
};

/**
 * Iterate through the recorded path and animate the turtle's actions.
 * @return boolean true if there is more to animate, false if finished
 */
Artist.prototype.animate = function () {

  // All tasks should be complete now.  Clean up the PID list.
  this.pid = 0;

  // Scale the speed non-linearly, to give better precision at the fast end.
  var stepSpeed = 1000 * Math.pow(1 - this.speedSlider.getValue(), 2) / this.skin.speedModifier;

  // when smoothAnimate is true, we divide long steps into partitions of this
  // size.
  this.visualization.smoothAnimateStepSize = stepSpeed === 0 ? FAST_SMOOTH_ANIMATE_STEP_SIZE : SMOOTH_ANIMATE_STEP_SIZE;

  if (this.level.editCode && this.JSInterpreter && this.JSInterpreter.initialized()) {

    var programDone = false;
    var completedTuple = false;

    do {
      programDone = this.JSInterpreter.isProgramDone();

      if (!programDone) {
        this.JSInterpreter.executeInterpreter();

        completedTuple = this.executeTuple_();
      }
    } while (!programDone && !completedTuple);

    if (!completedTuple) {
      completedTuple = this.executeTuple_();
    }
    if (programDone && !completedTuple) {
      // All done:
      this.finishExecution_();
      return false;
    }
  } else {
    if (!this.executeTuple_()) {
      this.finishExecution_();
      return false;
    }
  }

  if (!this.instant_) {
    this.pid = window.setTimeout(_.bind(this.animate, this), stepSpeed);
  }
  return true;
};

Artist.prototype.calculateSmoothAnimate = function (options, distance) {
  var tupleDone = true;
  var stepDistanceCovered = this.visualization.stepDistanceCovered;

  if (options && options.smoothAnimate) {
    var fullDistance = distance;
    var smoothAnimateStepSize = this.visualization.smoothAnimateStepSize;

    if (fullDistance < 0) {
      // Going backward.
      if (stepDistanceCovered - smoothAnimateStepSize <= fullDistance) {
        // clamp at maximum
        distance = fullDistance - stepDistanceCovered;
        stepDistanceCovered = fullDistance;
      } else {
        distance = -smoothAnimateStepSize;
        stepDistanceCovered -= smoothAnimateStepSize;
        tupleDone = false;
      }
    } else {
      // Going forward.
      if (stepDistanceCovered + smoothAnimateStepSize >= fullDistance) {
        // clamp at maximum
        distance = fullDistance - stepDistanceCovered;
        stepDistanceCovered = fullDistance;
      } else {
        distance = smoothAnimateStepSize;
        stepDistanceCovered += smoothAnimateStepSize;
        tupleDone = false;
      }
    }
  }

  this.visualization.stepDistanceCovered = stepDistanceCovered;

  return { tupleDone: tupleDone, distance: distance };
};

/**
 * Execute one step.
 * @param {string} command Logo-style command (e.g. 'FD' or 'RT').
 * @param {!Array} values List of arguments for the command.
 * @param {number} fraction How much of this step's distance do we draw?
 * @param {object} single option for now: smoothAnimate (true/false)
 */
Artist.prototype.step = function (command, values, options) {
  var _this6 = this;

  var tupleDone = true;
  var result;
  var distance;
  var heading;

  switch (command) {
    case 'FD':
      // Forward
      distance = values[0];
      result = this.calculateSmoothAnimate(options, distance);
      tupleDone = result.tupleDone;
      this.visualization.moveForward(result.distance);
      break;
    case 'JF':
      // Jump forward
      distance = values[0];
      result = this.calculateSmoothAnimate(options, distance);
      tupleDone = result.tupleDone;
      this.visualization.jumpForward(result.distance);
      break;
    case 'MV':
      // Move (direction)
      distance = values[0];
      heading = values[1];
      result = this.calculateSmoothAnimate(options, distance);
      tupleDone = result.tupleDone;
      this.visualization.setHeading(heading);
      this.visualization.moveForward(result.distance);
      break;
    case 'JT':
      // Jump To Location
      if (Array.isArray(values[0])) {
        this.visualization.jumpTo(values[0]);
      } else {
        this.visualization.jumpTo([utils.xFromPosition(values[0], CANVAS_WIDTH), utils.yFromPosition(values[0], CANVAS_HEIGHT)]);
      }
      break;
    case 'MD':
      // Move diagonally (use longer steps if showing joints)
      distance = values[0];
      heading = values[1];
      result = this.calculateSmoothAnimate(options, distance);
      tupleDone = result.tupleDone;
      this.visualization.setHeading(heading);
      this.visualization.moveForward(result.distance, true);
      break;
    case 'JD':
      // Jump (direction)
      distance = values[0];
      heading = values[1];
      result = this.calculateSmoothAnimate(options, distance);
      tupleDone = result.tupleDone;
      this.visualization.setHeading(heading);
      this.visualization.jumpForward(result.distance);
      break;
    case 'RT':
      // Right Turn
      distance = values[0];
      result = this.calculateSmoothAnimate(options, distance);
      tupleDone = result.tupleDone;
      this.visualization.turnByDegrees(result.distance);
      break;
    case 'GA':
      // Global Alpha
      var alpha = values[0];
      alpha = Math.max(0, alpha);
      alpha = Math.min(100, alpha);
      this.visualization.ctxScratch.globalAlpha = alpha / 100;
      break;
    case 'PU':
      // Pen Up
      this.visualization.penDownValue = false;
      break;
    case 'PD':
      // Pen Down
      this.visualization.penDownValue = true;
      break;
    case 'PW':
      // Pen Width
      this.visualization.ctxScratch.lineWidth = values[0];
      break;
    case 'PC':
      // Pen Colour
      this.visualization.ctxScratch.strokeStyle = values[0];
      this.visualization.ctxScratch.fillStyle = values[0];
      if (!this.isFrozenSkin()) {
        this.visualization.isDrawingWithPattern = false;
      }
      break;
    case 'PS':
      // Pen style with image
      if (!values[0] || values[0] === 'DEFAULT') {
        this.setPattern(null);
      } else {
        this.setPattern(values[0]);
      }
      break;
    case 'HT':
      // Hide Turtle
      this.visualization.avatar.visible = false;
      break;
    case 'ST':
      // Show Turtle
      this.visualization.avatar.visible = true;
      break;
    case 'sticker':
      {
        var size = MAX_STICKER_SIZE;

        if (typeof values[1] === 'number') {
          size = values[1];
        }

        if (this.visualization.shouldDrawNormalized_) {
          values = Object.keys(this.stickers);
        }

        var img = this.stickers[values[0]];

        var dimensions = scaleToBoundingBox(size, img.width, img.height);
        var width = dimensions.width;
        var height = dimensions.height;

        // Rotate the image such the the turtle is at the center of the bottom of
        // the image and the image is pointing (from bottom to top) in the same
        // direction as the turtle.
        this.visualization.ctxScratch.save();
        this.visualization.ctxScratch.translate(this.visualization.x, this.visualization.y);
        this.visualization.ctxScratch.rotate(this.visualization.degreesToRadians_(this.visualization.heading));
        this.visualization.ctxScratch.drawImage(img, 0, 0, width, height, -width / 2, -height, width, height);

        this.visualization.ctxScratch.restore();

        break;
      }
    case 'setArtist':
      if (this.skin.id !== values[0]) {
        this.skin = _skins2.default.load(this.studioApp_.assetUrl, values[0]);
        this.visualization.avatar = this.skin.avatarSettings;
        this.linePatterns = this.skin.linePatterns;
        this.loadTurtle(false /* initializing */);
        this.preloadAllPatternImages().then(function () {
          return _this6.selectPattern();
        });
      }
      break;
  }

  return tupleDone;
};

/**
 * Given the width and height of a rectangle this scales the dimensions
 * proportionally such that neither is larger than a given maximum size.
 *
 * @param maxSize - The maximum size of either dimension
 * @param width - The current width of a rectangle
 * @param height - The current height of a rectangle
 * @return an object containing the scaled width and height.
 */
function scaleToBoundingBox(maxSize, width, height) {
  if (width < maxSize && height < maxSize) {
    return { width: width, height: height };
  }

  var newWidth;
  var newHeight;

  if (width > height) {
    newWidth = maxSize;
    newHeight = height * (maxSize / width);
  } else {
    newHeight = maxSize;
    newWidth = width * (maxSize / height);
  }

  return { width: newWidth, height: newHeight };
}

Artist.prototype.selectPattern = function () {
  if (this.skin.id === "anna") {
    this.setPattern("annaLine");
  } else if (this.skin.id === "elsa") {
    this.setPattern("elsaLine");
  } else {
    // Reset to empty pattern
    this.setPattern(null);
  }
};

Artist.prototype.setPattern = function (pattern) {
  if (this.visualization.shouldDrawNormalized_) {
    pattern = null;
  }

  if (this.loadedPathPatterns[pattern]) {
    this.visualization.currentPathPattern = this.loadedPathPatterns[pattern];
    this.visualization.isDrawingWithPattern = true;
  } else if (pattern === null) {
    this.visualization.currentPathPattern = new Image();
    this.visualization.isDrawingWithPattern = false;
  }
};

/**
 * Validate whether the user's answer is correct.
 * @param {number} pixelErrors Number of pixels that are wrong.
 * @param {number} permittedErrors Number of pixels allowed to be wrong.
 * @return {boolean} True if the level is solved, false otherwise.
 */
Artist.prototype.isCorrect_ = function (pixelErrors, permittedErrors) {
  return pixelErrors <= permittedErrors;
};

/**
 * App specific displayFeedback function that calls into
 * this.studioApp_.displayFeedback when appropriate
 */
Artist.prototype.displayFeedback_ = function () {
  var level = this.level;
  // Don't save impressive levels as projects, because this would create too
  // many projects. Instead store them as /c/ links, which are much more
  // space-efficient since they store only one copy of identical projects made
  // by different users.
  var saveToProjectGallery = !level.impressive && PUBLISHABLE_SKINS.includes(this.skin.id);
  var isSignedIn = (0, _redux.getStore)().getState().progress.signInState === _progressRedux.SignInState.SignedIn;

  this.studioApp_.displayFeedback({
    feedbackType: this.testResults,
    message: this.message,
    response: this.response,
    level: level,
    feedbackImage: this.getFeedbackImage_(180, 180),
    // add 'impressive':true to non-freeplay levels that we deem are relatively impressive (see #66990480)
    showingSharing: !level.disableSharing && (level.freePlay || level.impressive),
    // impressive levels are already saved
    alreadySaved: level.impressive,
    // allow users to save freeplay levels to their gallery (impressive non-freeplay levels are autosaved)
    saveToLegacyGalleryUrl: level.freePlay && this.response && this.response.save_to_gallery_url,
    // save to the project gallery instead of the legacy gallery
    saveToProjectGallery: saveToProjectGallery,
    disableSaveToGallery: !isSignedIn,
    appStrings: {
      reinfFeedbackMsg: turtleMsg.reinfFeedbackMsg(),
      sharingText: turtleMsg.shareDrawing()
    }
  });
};

/**
 * Function to be called when the service report call is complete
 * @param {MilestoneResponse} response - JSON response (if available)
 */
Artist.prototype.onReportComplete = function (response) {
  this.response = response;
  // Disable the run button until onReportComplete is called.
  var runButton = document.getElementById('runButton');
  runButton.disabled = false;
  this.studioApp_.onReportComplete(response);
  this.displayFeedback_();
};

// This removes lengths from the text version of the XML of programs.
// It is used to determine if the user program and model solution are
// identical except for lengths.
var removeK1Lengths = function removeK1Lengths(s) {
  return s.replace(removeK1Lengths.regex, '">');
};

removeK1Lengths.regex = /_length"><title name="length">.*?<\/title>/;

/**
 * Verify if the answer is correct.
 * If so, move on to next level.
 */
Artist.prototype.checkAnswer = function () {
  var _this7 = this;

  // Compare the Alpha (opacity) byte of each pixel in the user's image and
  // the sample answer image.

  var userCanvas = this.shouldSupportNormalization() ? this.visualization.ctxNormalizedScratch : this.visualization.ctxScratch;

  var userImage = userCanvas.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  var answerImage = this.visualization.ctxNormalizedAnswer.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  var len = Math.min(userImage.data.length, answerImage.data.length);
  var delta = 0;
  // Pixels are in RGBA format.  Only check the Alpha bytes.
  for (var i = 3; i < len; i += 4) {
    // Copying and compositing images across canvases seems to distort the
    // alpha. Use a large error value (250) to compensate.
    if (Math.abs(userImage.data[i] - answerImage.data[i]) > 250) {
      delta++;
    }
  }

  var level = this.level;

  // Optionally allow some number of pixels to be off, default to
  // pixel-perfect strictness
  var permittedErrors = level.permittedErrors || 0;

  // Test whether the student can progress to the next level. There can be no
  // errors, and this either needs to be a free play/preidction level, or they
  // need to have met success conditions.
  this.levelComplete = (!level.editCode || !this.executionError) && (level.freePlay || this.studioApp_.hasContainedLevels || this.isCorrect_(delta, permittedErrors));
  this.testResults = this.studioApp_.getTestResults(this.levelComplete);

  var program = this.getUserCode();

  // Make sure we don't reuse an old message, since not all paths set one.
  this.message = undefined;

  // In level K1, check if only lengths differ.
  if (level.isK1 && !this.levelComplete && !this.studioApp_.editCode && level.solutionBlocks && removeK1Lengths(program) === removeK1Lengths(level.solutionBlocks)) {
    this.testResults = _constants.TestResults.APP_SPECIFIC_ERROR;
    this.message = turtleMsg.lengthFeedback();
  }

  // For levels where using too many blocks would allow students
  // to miss the point, convert that feedback to a failure.
  if (level.failForTooManyBlocks && this.testResults === _constants.TestResults.TOO_MANY_BLOCKS_FAIL) {
    this.testResults = _constants.TestResults.TOO_MANY_BLOCKS_FAIL;
  } else if (this.testResults === _constants.TestResults.TOO_MANY_BLOCKS_FAIL || this.testResults === _constants.TestResults.ALL_PASS) {
    // Check that they didn't use a crazy large repeat value when drawing a
    // circle.  This complains if the limit doesn't start with 3.
    // Note that this level does not use colour, so no need to check for that.
    if (level.failForCircleRepeatValue && this.studioApp_.isUsingBlockly()) {
      var code = Blockly.Generator.blockSpaceToCode('JavaScript');
      if (code.indexOf('count < 3') === -1) {
        this.testResults = _constants.TestResults.APP_SPECIFIC_ACCEPTABLE_FAIL;
        this.message = commonMsg.tooMuchWork();
      }
    }
  }

  // If the current level is a free play, always return the free play
  // result type
  if (level.freePlay) {
    this.testResults = _constants.TestResults.FREE_PLAY;
  }

  // Play sound
  if (this.testResults === _constants.TestResults.FREE_PLAY || this.testResults >= _constants.TestResults.TOO_MANY_BLOCKS_FAIL) {
    this.studioApp_.playAudioOnWin();
  } else {
    this.studioApp_.playAudioOnFailure();
  }

  if (this.studioApp_.hasContainedLevels && !level.edit_blocks) {
    (0, _containedLevels.postContainedLevelAttempt)(this.studioApp_);
    (0, _containedLevels.runAfterPostContainedLevel)(function () {
      _this7.message = (0, _containedLevels.getContainedLevelResultInfo)().feedback;
      _this7.onReportComplete();
    });
  } else {
    this.report();
  }

  if (this.studioApp_.isUsingBlockly()) {
    // reenable toolbox
    Blockly.mainBlockSpaceEditor.setEnableToolbox(true);
  }

  // The call to displayFeedback() will happen later in onReportComplete()
};

Artist.prototype.getUserCode = function () {
  if (this.studioApp_.isUsingBlockly()) {
    var xml = Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace);
    return Blockly.Xml.domToText(xml);
  } else if (this.level.editCode) {
    // If we want to "normalize" the JavaScript to avoid proliferation of nearly
    // identical versions of the code on the service, we could do either of these:

    // do an acorn.parse and then use escodegen to generate back a "clean" version
    // or minify (uglifyjs) and that or js-beautify to restore a "clean" version
    return this.studioApp_.editor.getValue();
  }
};

/**
 * Send the milestone post, including level progress (result and testResults)
 * and saved user code.
 *
 * @param {boolean} [enableOnComplete=true] whether or not to attach the
 *        onComplete handler to the StudioApp.report call
 */
Artist.prototype.report = function () {
  var enableOnComplete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var reportData = {
    app: 'turtle',
    level: this.level.id,
    result: this.levelComplete,
    testResult: this.testResults,
    program: encodeURIComponent(this.getUserCode()),
    save_to_gallery: !!this.level.impressive
  };

  if (enableOnComplete) {
    reportData.onComplete = this.onReportComplete.bind(this);
  }

  reportData = this.setReportDataImage_(this.level, reportData);

  this.studioApp_.report(reportData);
};

/**
 * Adds the feedback image to the report data if indicated by the level config.
 * @param {Object} level Level config.
 * @param {Object} reportData Original reportData.
 * @returns {Object} Updated reportData, or original report data if not updated.
 * @private
 */
Artist.prototype.setReportDataImage_ = function (level, reportData) {
  // https://www.pivotaltracker.com/story/show/84171560
  // Never send up frozen images for now.
  var isFrozen = this.skin.id === 'anna' || this.skin.id === 'elsa';

  // Include the feedback image whenever a levelbuilder edits solution blocks.
  var isEditingSolution = level.editBlocks === 'solution_blocks';

  var didPassLevel = this.testResults >= _constants.TestResults.TOO_MANY_BLOCKS_FAIL;

  // Get the canvas data for feedback.
  if (isEditingSolution || didPassLevel && !isFrozen && (level.freePlay || level.impressive)) {
    var image = isEditingSolution ? this.getFeedbackImage_(CANVAS_WIDTH, CANVAS_HEIGHT) : this.getFeedbackImage_();
    var encodedImage = encodeURIComponent(image.split(',')[1]);
    return _extends({}, reportData, {
      image: encodedImage
    });
  }
  return reportData;
};

Artist.prototype.getFeedbackImage_ = function (width, height) {

  var origWidth = this.visualization.ctxFeedback.canvas.width;
  var origHeight = this.visualization.ctxFeedback.canvas.height;

  this.visualization.ctxFeedback.canvas.width = width || origWidth;
  this.visualization.ctxFeedback.canvas.height = height || origHeight;

  // Clear the feedback layer
  this.clearImage_(this.visualization.ctxFeedback);

  if (this.isFrozenSkin() && this.level.impressive) {
    // For impressive levels in frozen skins, show everything - including
    // background, characters, and pattern - along with drawing.
    this.visualization.ctxFeedback.globalCompositeOperation = 'copy';
    this.visualization.ctxFeedback.drawImage(this.visualization.ctxDisplay.canvas, 0, 0, this.visualization.ctxFeedback.canvas.width, this.visualization.ctxFeedback.canvas.height);
  } else {
    // Frozen free play levels must not show the character, since we don't know
    // how the drawing will look, and it could be off-brand.
    this.drawImage_(this.visualization.ctxFeedback);
  }

  // Save the canvas as a png
  var image = this.visualization.ctxFeedback.canvas.toDataURL("image/png");

  // Restore the canvas' original size
  this.visualization.ctxFeedback.canvas.width = origWidth;
  this.visualization.ctxFeedback.canvas.height = origHeight;

  return image;
};

/**
 * Renders the artist's image onto a canvas. Relies on this.visualization.ctxImages,
 * this.visualization.ctxPredraw, and this.visualization.ctxScratch to have already been drawn.
 * @returns {HTMLCanvasElement} A canvas containing the thumbnail.
 * @private
 */
Artist.prototype.getThumbnailCanvas_ = function () {
  this.clearImage_(this.visualization.ctxThumbnail);
  this.drawImage_(this.visualization.ctxThumbnail);
  return this.visualization.ctxThumbnail.canvas;
};

Artist.prototype.clearImage_ = function (context) {
  var style = context.fillStyle;
  context.fillStyle = color.white;
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.fillStyle = style;
};

Artist.prototype.drawImage_ = function (context) {
  // Draw the images layer.
  if (!this.level.discardBackground) {
    context.globalCompositeOperation = 'source-over';
    context.drawImage(this.visualization.ctxImages.canvas, 0, 0, context.canvas.width, context.canvas.height);
  }

  // Draw the predraw layer.
  context.globalCompositeOperation = 'source-over';
  context.drawImage(this.visualization.ctxPredraw.canvas, 0, 0, context.canvas.width, context.canvas.height);

  // Draw the user layer.
  context.globalCompositeOperation = 'source-over';
  context.drawImage(this.visualization.ctxScratch.canvas, 0, 0, context.canvas.width, context.canvas.height);
};

/**
* When smooth animate is true, steps can be broken up into multiple animations.
* At the end of each step, we want to reset any incremental information, which
* is what this does.
*/
Artist.prototype.resetStepInfo_ = function () {
  this.visualization.stepStartX = this.visualization.x;
  this.visualization.stepStartY = this.visualization.y;
  this.visualization.stepDistanceCovered = 0;
};

/***/ }),

/***/ 3325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ProtectedVisualizationDiv = __webpack_require__(788);

var _ProtectedVisualizationDiv2 = _interopRequireDefault(_ProtectedVisualizationDiv);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameButtons = __webpack_require__(819).default;
var BelowVisualization = __webpack_require__(824);


var styles = {
  invisible: {
    visibility: 'hidden'
  }
};

var ArtistVisualizationColumn = function ArtistVisualizationColumn(props) {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_ProtectedVisualizationDiv2.default, null),
    _react2.default.createElement(
      GameButtons,
      null,
      _react2.default.createElement(
        'div',
        { id: 'slider-cell' },
        _react2.default.createElement(
          'svg',
          {
            id: 'slider',
            version: '1.1',
            width: '150',
            height: '50'
          },
          _react2.default.createElement(
            'clipPath',
            { id: 'slowClipPath' },
            _react2.default.createElement('rect', { width: '26', height: '12', x: '5', y: '14' })
          ),
          _react2.default.createElement('image', {
            xlinkHref: props.iconPath,
            height: '42',
            width: '84',
            x: '-21',
            y: '-10',
            clipPath: 'url(#slowClipPath)'
          }),
          _react2.default.createElement(
            'clipPath',
            { id: 'fastClipPath' },
            _react2.default.createElement('rect', { width: '26', height: '16', x: '120', y: '10' })
          ),
          _react2.default.createElement('image', {
            xlinkHref: props.iconPath,
            height: '42',
            width: '84',
            x: '120',
            y: '-11',
            clipPath: 'url(#fastClipPath)'
          })
        ),
        " " /* Explicitly insert whitespace so that this behaves like our ejs file*/,
        _react2.default.createElement('img', {
          id: 'spinner',
          style: styles.invisible,
          src: '/blockly/media/turtle/loading.gif',
          height: '15',
          width: '15'
        }),
        " ",
        props.showFinishButton && _react2.default.createElement(
          'button',
          { id: 'finishButton', className: 'share' },
          _react2.default.createElement('img', { src: '/blockly/media/1x1.gif' }),
          _locale2.default.finish()
        )
      )
    ),
    _react2.default.createElement(BelowVisualization, null)
  );
};

ArtistVisualizationColumn.propTypes = {
  showFinishButton: _react.PropTypes.bool.isRequired,
  iconPath: _react.PropTypes.string.isRequired
};

module.exports = ArtistVisualizationColumn;

/***/ }),

/***/ 3326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Blockly Apps: SVG Slider
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview A slider control in SVG.
 * @author fraser@google.com (Neil Fraser)
 */
var SVG_NS = __webpack_require__(216).SVG_NS;
var dom = __webpack_require__(594);
var trySetSessionStorage = __webpack_require__(71).trySetSessionStorage;

var OVERRIDE_STORAGE_KEY = 'slider_value_override';

/**
 * Object representing a horizontal slider widget.
 * @param {number} x The horizontal offset of the slider.
 * @param {number} y The vertical offset of the slider.
 * @param {number} width The total width of the slider.
 * @param {!Element} svgParent The SVG element to append the slider to.
 * @param {Function} opt_changeFunc Optional callback function that will be
 *     called when the slider is moved.  The current value is passed.
 * @constructor
 */
var Slider = function Slider(x, y, width, svgParent, opt_changeFunc) {
  this.KNOB_Y_ = y - 12;
  this.KNOB_MIN_X_ = x + 8;
  this.KNOB_MAX_X_ = x + width - 8;
  this.value_ = 0.5;
  this.changeFunc_ = opt_changeFunc;
  this.isAndroid_ = dom.isAndroid();
  this.isIOS_ = dom.isIOS();
  this.isWindowsTouch_ = dom.isWindowsTouch();

  // Draw the slider.
  /*
  <line class="sliderTrack" x1="10" y1="35" x2="140" y2="35" />
  <path id="knob"
      transform="translate(67, 23)"
      d="m 8,0 l -8,8 v 12 h 16 v -12 z" />
  */
  var track = document.createElementNS(SVG_NS, 'line');
  track.setAttribute('class', 'sliderTrack');
  track.setAttribute('x1', x);
  track.setAttribute('y1', y);
  track.setAttribute('x2', x + width);
  track.setAttribute('y2', y);
  svgParent.appendChild(track);
  this.track_ = track;
  var knob = document.createElementNS(SVG_NS, 'path');
  knob.setAttribute('class', 'sliderKnob');
  knob.setAttribute('d', 'm 0,0 l -8,8 v 12 h 16 v -12 z');
  svgParent.appendChild(knob);
  this.knob_ = knob;
  this.setValue(0.5);

  // Find the root SVG object.
  while (svgParent && svgParent.nodeName.toLowerCase() !== 'svg') {
    svgParent = svgParent.parentNode;
  }
  this.SVG_ = svgParent;

  // Bind the events to this slider.
  var thisSlider = this;
  dom.addMouseDownTouchEvent(this.knob_, function (e) {
    return thisSlider.knobMouseDown_(e);
  });
  dom.addMouseDownTouchEvent(this.track_, function (e) {
    return thisSlider.trackMouseDown_(e);
  });
  dom.addMouseUpTouchEvent(this.SVG_, Slider.knobMouseUp_);
  dom.addMouseMoveTouchEvent(this.SVG_, Slider.knobMouseMove_);
  // Don't add touch events for mouseover. The UX is better on Android
  // and iOS if the drag action is allowed to continue when the
  // touchmove target moves above or below the SVG element.
  Slider.bindEvent_(document, 'mouseover', Slider.mouseOver_);
};

Slider.activeSlider_ = null;
Slider.startMouseX_ = 0;
Slider.startKnobX_ = 0;

/**
 * Start a drag when clicking down on the knob.
 * @param {!Event} e Mouse-down event.
 * @private
 */
Slider.prototype.knobMouseDown_ = function (e) {
  this.beginDrag_(this.mouseToSvg_(e));

  // Stop browser from attempting to drag the knob.
  e.preventDefault();
  return false;
};

/**
 * Snap the knob to the mouse location and start a drag
 * when clicking on the track (but not on the knob).
 * @param {!Event} e Mouse-down event.
 * @private
 */
Slider.prototype.trackMouseDown_ = function (e) {
  var mouseSVGPosition = this.mouseToSvg_(e);
  this.snapToPosition_(mouseSVGPosition.x);
  this.beginDrag_(mouseSVGPosition);

  // Stop browser from attempting to drag the track.
  e.preventDefault();
  return false;
};

/**
 * Start dragging the slider knob.
 * @param {!Object} mouseStartSVG Mouse start position in SVG space
 * @private
 */
Slider.prototype.beginDrag_ = function (startMouseSVG) {
  Slider.activeSlider_ = this;
  Slider.startMouseX_ = startMouseSVG.x;
  Slider.startKnobX_ = 0;
  var transform = this.knob_.getAttribute('transform');
  if (transform) {
    var r = transform.match(/translate\(\s*([-\d.]+)/);
    if (r) {
      Slider.startKnobX_ = Number(r[1]);
    }
  }
};

/**
 * Snap the slider knob to the clicked position.
 * @param {number} xPosition SVG x-coordinate
 * @private
 */
Slider.prototype.snapToPosition_ = function (xPosition) {
  var x = Math.min(Math.max(xPosition, this.KNOB_MIN_X_), this.KNOB_MAX_X_);
  this.knob_.setAttribute('transform', 'translate(' + x + ',' + this.KNOB_Y_ + ')');

  this.value_ = (x - this.KNOB_MIN_X_) / (this.KNOB_MAX_X_ - this.KNOB_MIN_X_);
  this.setValueOverride_(this.defaultValue_, this.value_);
  if (this.changeFunc_) {
    this.changeFunc_(this.value_);
  }
};

/**
 * Stop a drag when clicking up anywhere.
 * @param {Event} e Mouse-up event.
 * @private
 */
Slider.knobMouseUp_ = function (e) {
  Slider.activeSlider_ = null;
};

/**
 * Stop a drag when the mouse enters a node not part of the SVG.
 * @param {Event} e Mouse-up event.
 * @private
 */
Slider.mouseOver_ = function (e) {
  if (!Slider.activeSlider_) {
    return;
  }
  // Find the root SVG object.
  for (var node = e.target; node; node = node.parentNode) {
    if (node === Slider.activeSlider_.SVG_) {
      return;
    }
  }
  Slider.knobMouseUp_(e);
};

/**
 * Drag the knob to follow the mouse.
 * @param {!Event} e Mouse-move event.
 * @private
 */
Slider.knobMouseMove_ = function (e) {
  var thisSlider = Slider.activeSlider_;
  if (!thisSlider) {
    return;
  }
  var x = thisSlider.mouseToSvg_(e).x - Slider.startMouseX_ + Slider.startKnobX_;
  thisSlider.snapToPosition_(x);
};

/**
 * Returns the slider's value (0.0 - 1.0).
 * @return {number} Current value.
 */
Slider.prototype.getValue = function () {
  return this.value_;
};

/**
 * Sets the slider's value (0.0 - 1.0).
 * @param {number} value New value.
 */
Slider.prototype.setValue = function (value) {
  value = Math.min(Math.max(value, 0), 1);
  this.defaultValue_ = value;

  var override = this.getValueOverride_();
  if (override && value === override.from) {
    value = override.to;
  }
  this.value_ = value;

  var x = this.KNOB_MIN_X_ + (this.KNOB_MAX_X_ - this.KNOB_MIN_X_) * this.value_;
  this.knob_.setAttribute('transform', 'translate(' + x + ',' + this.KNOB_Y_ + ')');
};

/**
 * Read the value override from sessionStorage.
 * @return {Object} containing the value to override and the new value
 */
Slider.prototype.getValueOverride_ = function () {
  var override = sessionStorage.getItem(OVERRIDE_STORAGE_KEY);
  if (override) {
    return JSON.parse(override);
  }
};

/**
 * Store a new override in sessionStorage.
 */
Slider.prototype.setValueOverride_ = function (from, to) {
  trySetSessionStorage(OVERRIDE_STORAGE_KEY, JSON.stringify({ from: from, to: to }));
};

/**
 * Convert the mouse coordinates into SVG coordinates.
 * @param {!Object} e Object with x and y mouse coordinates.
 * @return {!Object} Object with x and y properties in SVG coordinates.
 * @private
 */
Slider.prototype.mouseToSvg_ = function (e) {
  var svgPoint = this.SVG_.createSVGPoint();
  // Most browsers provide clientX/Y. iOS only provides pageX/Y.
  // Chrome only provides coordinates within e.changedTouches if this is a
  // touch event (unless it's just a tap, that mimics a normal mouse event).
  if (this.isWindowsTouch_) {
    // Only screenX/Y properly accounts for zooming in on windows touch.
    svgPoint.x = e.screenX;
    svgPoint.y = e.screenY;
  } else if (e.changedTouches && e.changedTouches.length > 0) {
    svgPoint.x = e.changedTouches[0].pageX;
    svgPoint.y = e.changedTouches[0].pageY;
  } else if (this.isIOS_) {
    svgPoint.x = e.pageX;
    svgPoint.y = e.pageY;
  } else {
    svgPoint.x = e.clientX;
    svgPoint.y = e.clientY;
  }
  var matrix = this.SVG_.getScreenCTM().inverse();
  return svgPoint.matrixTransform(matrix);
};

/**
 * Bind an event to a function call.
 * @param {!Element} element Element upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {!Function} func Function to call when event is triggered.
 * @private
 */
Slider.bindEvent_ = function (element, name, func) {
  element.addEventListener(name, func, false);
};

module.exports = Slider;

/***/ }),

/***/ 3327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var api = __webpack_require__(2951);

module.exports.blocks = [{ func: 'moveForward', parent: api, category: 'Artist', params: ["100"] }, { func: 'turnRight', parent: api, category: 'Artist', params: ["90"] }, { func: 'penColour', parent: api, category: 'Artist', params: ["'#ff0000'"] }, { func: 'penWidth', parent: api, category: 'Artist', params: ["1"] }];

module.exports.categories = {
  Artist: {
    color: 'red',
    blocks: []
  }
};

/***/ }),

/***/ 3330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var levelBase = __webpack_require__(2908);
var answer = __webpack_require__(3331).answer;
var msg = __webpack_require__(1744);
var blockUtils = __webpack_require__(743);
var utils = __webpack_require__(71);

// An early hack introduced some levelbuilder levels as page 5, level 7. Long
// term we can probably do something much cleaner, but for now I'm calling
// out that this level is special (on page 5).
var LEVELBUILDER_LEVEL = 7;

//TODO: Fix hacky level-number-dependent toolbox.
var toolbox = function toolbox(page, level) {
  return __webpack_require__(3332)({
    page: page,
    level: level
  });
};

//TODO: Fix hacky level-number-dependent startBlocks.
var startBlocks = function startBlocks(page, level) {
  return __webpack_require__(3333)({
    page: page,
    level: level
  });
};

var req = __webpack_require__(3334);
var makeMathNumber = req.makeMathNumber;
var simpleBlock = req.simpleBlock;
var repeat = req.repeat;
var drawASquare = req.drawASquare;
var drawASnowman = req.drawASnowman;
var MOVE_FORWARD_INLINE = req.MOVE_FORWARD_INLINE;
var MOVE_FORWARD_OR_BACKWARD_INLINE = req.MOVE_FORWARD_OR_BACKWARD_INLINE;
var moveForwardInline = req.moveForwardInline;
var MOVE_BACKWARD_INLINE = req.MOVE_BACKWARD_INLINE;
var turnLeftRestricted = req.turnLeftRestricted;
var turnRightRestricted = req.turnRightRestricted;
var turnRightByConstant = req.turnRightByConstant;
var turnRight = req.turnRight;
var turnLeft = req.turnLeft;
var move = req.move;
var drawTurnRestricted = req.drawTurnRestricted;
var drawTurn = req.drawTurn;
var defineWithArg = req.defineWithArg;

var blocks = {
  SIMPLE_MOVE_UP: blockUtils.blockOfType('simple_move_up'),
  SIMPLE_MOVE_DOWN: blockUtils.blockOfType('simple_move_down'),
  SIMPLE_MOVE_LEFT: blockUtils.blockOfType('simple_move_left'),
  SIMPLE_MOVE_RIGHT: blockUtils.blockOfType('simple_move_right'),
  SIMPLE_JUMP_UP: blockUtils.blockOfType('simple_jump_up'),
  SIMPLE_JUMP_DOWN: blockUtils.blockOfType('simple_jump_down'),
  SIMPLE_JUMP_LEFT: blockUtils.blockOfType('simple_jump_left'),
  SIMPLE_JUMP_RIGHT: blockUtils.blockOfType('simple_jump_right'),
  SIMPLE_MOVE_UP_LENGTH: blockUtils.blockOfType('simple_move_up_length'),
  SIMPLE_MOVE_DOWN_LENGTH: blockUtils.blockOfType('simple_move_down_length'),
  SIMPLE_MOVE_LEFT_LENGTH: blockUtils.blockOfType('simple_move_left_length'),
  SIMPLE_MOVE_RIGHT_LENGTH: blockUtils.blockOfType('simple_move_right_length'),
  simpleMoveBlocks: function simpleMoveBlocks() {
    return this.SIMPLE_MOVE_UP + this.SIMPLE_MOVE_DOWN + this.SIMPLE_MOVE_LEFT + this.SIMPLE_MOVE_RIGHT;
  },
  simpleJumpBlocks: function simpleJumpBlocks() {
    return this.SIMPLE_JUMP_UP + this.SIMPLE_JUMP_DOWN + this.SIMPLE_JUMP_LEFT + this.SIMPLE_JUMP_RIGHT;
  },
  simpleMoveLengthBlocks: function simpleMoveLengthBlocks() {
    return this.SIMPLE_MOVE_UP_LENGTH + this.SIMPLE_MOVE_DOWN_LENGTH + this.SIMPLE_MOVE_LEFT_LENGTH + this.SIMPLE_MOVE_RIGHT_LENGTH;
  }
};

/**
 * Information about level-specific requirements.
 */
var levels = module.exports = {
  // Level 1: El.
  '1_1': {
    instructionsImportant: true,
    answer: answer(1, 1),
    ideal: 4,
    toolbox: toolbox(1, 1),
    startBlocks: startBlocks(1, 1),
    requiredBlocks: [[MOVE_FORWARD_INLINE], [turnRightRestricted(90)]],
    freePlay: false
  },
  // Level 2: Square (without repeat).
  '1_2': {
    answer: answer(1, 2),
    ideal: 8,
    toolbox: toolbox(1, 2),
    startBlocks: startBlocks(1, 2),
    requiredBlocks: [[MOVE_FORWARD_INLINE], [turnRightRestricted(90)]],
    freePlay: false
  },
  // Level 3: Square (with repeat).
  '1_3': {
    answer: answer(1, 3),
    ideal: 4,
    toolbox: toolbox(1, 3),
    startBlocks: startBlocks(1, 3),
    requiredBlocks: [[MOVE_FORWARD_INLINE], [turnRightRestricted(90)], [repeat(4)]],
    freePlay: false
  },
  // Level 4: Triangle.
  '1_4': {
    answer: answer(1, 4),
    ideal: 4,
    toolbox: toolbox(1, 4),
    startBlocks: startBlocks(1, 4),
    requiredBlocks: [[MOVE_FORWARD_OR_BACKWARD_INLINE], [repeat(3)], [{
      // allow turn right or left, but show turn right block if they've done neither
      test: function test(block) {
        return block.type === 'draw_turn_by_constant_restricted';
      },
      type: 'draw_turn_by_constant',
      titles: { VALUE: '???' }
    }]],
    freePlay: false
  },
  // Level 5: Envelope.
  '1_5': {
    answer: answer(1, 5),
    ideal: 7,
    toolbox: toolbox(1, 5),
    startBlocks: startBlocks(1, 5),
    requiredBlocks: [[repeat(3)], [turnRightRestricted(120)], [MOVE_FORWARD_INLINE]],
    freePlay: false
  },
  // Level 6: triangle and square.
  '1_6': {
    answer: answer(1, 6),
    ideal: 8,
    toolbox: toolbox(1, 6),
    startBlocks: startBlocks(1, 6),
    requiredBlocks: [[repeat(3)], [turnRightRestricted(120), turnLeftRestricted(120)], [MOVE_FORWARD_INLINE, MOVE_BACKWARD_INLINE]],
    freePlay: false
  },
  // Level 7: glasses.
  '1_7': {
    answer: answer(1, 7),
    ideal: 11,
    toolbox: toolbox(1, 7),
    startBlocks: startBlocks(1, 7),
    requiredBlocks: [[drawTurnRestricted(90)], [repeat(4)], [MOVE_BACKWARD_INLINE, MOVE_FORWARD_INLINE]],
    freePlay: false,
    startDirection: 0
  },
  // Level 8: spikes.
  '1_8': {
    answer: answer(1, 8),
    ideal: 5,
    toolbox: toolbox(1, 8),
    startBlocks: startBlocks(1, 8),
    requiredBlocks: [[repeat(8)]],
    freePlay: false
  },
  // Level 9: circle.
  '1_9': {
    answer: answer(1, 9),
    ideal: 6,
    toolbox: toolbox(1, 9),
    startBlocks: startBlocks(1, 9),
    requiredBlocks: [],
    freePlay: false,
    sliderSpeed: 0.9,
    permittedErrors: 10,
    failForCircleRepeatValue: true
  },
  // Level 10: playground.
  '1_10': {
    answer: answer(1, 10),
    toolbox: toolbox(1, 10),
    startBlocks: startBlocks(1, 10),
    requiredBlocks: [],
    freePlay: true
  },
  // Formerly Page 2.
  // Level 1: Square.
  '2_1': {
    instructionsImportant: true,
    answer: answer(2, 1),
    ideal: 6,
    toolbox: toolbox(2, 1),
    startBlocks: startBlocks(2, 1),
    requiredBlocks: [[repeat(4)], [{
      // allow turn right or left, but show turn right block if they've done neither
      test: function test(block) {
        return block.type === 'draw_turn';
      },
      type: 'draw_turn',
      titles: { 'DIR': 'turnRight' },
      values: { 'VALUE': makeMathNumber(90) }
    }], [{
      // allow move forward or backward, but show forward block if they've done neither
      test: function test(block) {
        return block.type === 'draw_move';
      },
      type: 'draw_move',
      values: { 'VALUE': makeMathNumber(100) }
    }]],
    freePlay: false
  },
  // Level 2: Small green square.
  '2_2': {
    answer: answer(2, 2),
    ideal: 3,
    toolbox: toolbox(2, 2),
    startBlocks: startBlocks(2, 2),
    requiredBlocks: [[drawASquare('??')]],
    freePlay: false
  },
  // Level 3: Three squares.
  '2_3': {
    answer: answer(2, 3),
    ideal: 6,
    toolbox: toolbox(2, 3),
    startBlocks: startBlocks(2, 3),
    requiredBlocks: [[repeat(3)], [drawASquare(100)], [drawTurn()]],
    freePlay: false
  },
  // Level 4: 36 squares.
  '2_4': {
    answer: answer(2, 4),
    ideal: 6,
    toolbox: toolbox(2, 4),
    startBlocks: startBlocks(2, 4),
    freePlay: false,
    impressive: true
  },
  // Level 5: Different size squares.
  '2_5': {
    answer: answer(2, 5),
    ideal: 11,
    toolbox: toolbox(2, 5),
    startBlocks: startBlocks(2, 5),
    requiredBlocks: [[drawASquare('??')]],
    freePlay: false
  },
  // Level 6: For-loop squares.
  '2_6': {
    answer: answer(2, 6),
    ideal: 7,
    toolbox: toolbox(2, 6),
    startBlocks: startBlocks(2, 6),
    // This is not displayed properly.
    requiredBlocks: [[simpleBlock('variables_get_counter')]],
    freePlay: false
  },
  // Level 7: Boxy spiral.
  '2_7': {
    minWorkspaceHeight: 1200,
    answer: answer(2, 7),
    ideal: 9,
    toolbox: toolbox(2, 7),
    startBlocks: startBlocks(2, 7),
    requiredBlocks: [[simpleBlock('controls_for_counter')], [move('??')], [simpleBlock('variables_get_counter')], [turnRight(90)]],
    freePlay: false
  },
  // Prep for Level 8: Two snowmen.
  '2_7_5': {
    answer: answer(2, 7.5),
    initialY: 300,
    ideal: 5,
    toolbox: toolbox(2, 8),
    startBlocks: startBlocks(2, 7.5),
    requiredBlocks: [[drawASnowman(250)], [drawASnowman(100)]],
    freePlay: false,
    sliderSpeed: 0.9,
    startDirection: 0
  },
  // Level 8: Three snowmen.
  '2_8': {
    answer: answer(2, 8),
    initialX: 100,
    ideal: 10,
    toolbox: toolbox(2, 8),
    startBlocks: startBlocks(2, 8),
    requiredBlocks: [[drawASnowman(150)], [turnRight(90)], [turnLeft(90)], [{
      test: 'jump',
      type: 'jump',
      values: { 'VALUE': makeMathNumber(100) }
    }], [simpleBlock('jump')], [repeat(3)]],
    freePlay: false,
    sliderSpeed: 0.9,
    startDirection: 0
  },
  // Level 9: Snowman family.
  '2_9': {
    answer: answer(2, 9),
    initialX: 100,
    ideal: 13,
    toolbox: toolbox(2, 9),
    startBlocks: startBlocks(2, 9),
    requiredBlocks: [[drawASnowman('??')], [simpleBlock('controls_for_counter')], [simpleBlock('variables_get_counter')], [turnRight(90)], [turnLeft(90)], [{
      test: 'jump',
      type: 'jump',
      values: { 'VALUE': makeMathNumber(60) }
    }]],
    freePlay: false,
    sliderSpeed: 0.9,
    startDirection: 0
  },
  // Level 10: playground.
  '2_10': {
    answer: answer(2, 10),
    freePlay: true,
    toolbox: toolbox(2, 10),
    startBlocks: startBlocks(2, 10)
  },
  // Formerly Page 3.
  // Level 1: Call 'draw a square'.
  '3_1': {
    instructionsImportant: true,
    answer: answer(3, 1),
    ideal: 14,
    toolbox: toolbox(3, 1),
    startBlocks: startBlocks(3, 1),
    requiredBlocks: [[levelBase.call(msg.drawASquare())]],
    freePlay: false
  },
  // Level 2: Create "draw a triangle".
  '3_2': {
    answer: answer(3, 2),
    ideal: 14,
    toolbox: toolbox(3, 2),
    startBlocks: startBlocks(3, 2),
    requiredBlocks: [[repeat(3)], [move(100)], [turnRight(120)], [levelBase.call(msg.drawATriangle())]],
    freePlay: false
  },
  // Level 3: Fence the animals.
  '3_3': {
    answer: answer(3, 3),
    initialY: 350,
    ideal: 20,
    toolbox: toolbox(3, 3),
    startBlocks: startBlocks(3, 3),
    requiredBlocks: [[levelBase.call(msg.drawATriangle())], [move(100)], [levelBase.call(msg.drawASquare())]],
    freePlay: false,
    images: [{
      filename: 'cat.svg',
      position: [170, 247]
    }, {
      filename: 'cat.svg',
      position: [170, 47]
    }, {
      filename: 'cow.svg',
      position: [182, 147]
    }],
    startDirection: 0
  },
  // Level 4: House the lion.
  '3_4': {
    answer: answer(3, 4),
    ideal: 19,
    toolbox: toolbox(3, 4),
    startBlocks: startBlocks(3, 4),
    requiredBlocks: [[levelBase.call(msg.drawASquare())], [move(100)], [turnRight(30)], [levelBase.call(msg.drawATriangle())]],
    freePlay: false,
    images: [{
      filename: 'lion.svg',
      position: [195, 97]
    }],
    startDirection: 0
  },
  // Level 5: Create "draw a house".
  '3_5': {
    answer: answer(3, 5),
    ideal: 21,
    toolbox: toolbox(3, 5),
    startBlocks: startBlocks(3, 5),
    requiredBlocks: [[levelBase.define(msg.drawAHouse())], [levelBase.call(msg.drawASquare())], [move(100)], [turnRight(30)], [levelBase.call(msg.drawATriangle())], [levelBase.call(msg.drawAHouse())]],
    freePlay: false,
    images: [{
      filename: 'cat.svg',
      position: [170, 90]
    }, {
      filename: 'cat.svg',
      position: [222, 90]
    }],
    startDirection: 0
  },
  // Level 6: Add parameter to "draw a triangle".
  '3_6': {
    answer: answer(3, 6),
    initialY: 350,
    ideal: 19,
    toolbox: toolbox(3, 6),
    startBlocks: startBlocks(3, 6),
    requiredBlocks: [[defineWithArg(msg.drawATriangle(), msg.lengthParameter())], [simpleBlock('variables_get_length')], [levelBase.callWithArg(msg.drawATriangle(), msg.lengthParameter())]],
    disableParamEditing: false,
    freePlay: false,
    images: [{
      filename: 'lion.svg',
      position: [185, 100]
    }, {
      filename: 'cat.svg',
      position: [175, 248]
    }],
    startDirection: 0
  },
  // Level 7: Add parameter to "draw a house".
  '3_7': {
    answer: answer(3, 7),
    initialY: 350,
    ideal: 24,
    toolbox: toolbox(3, 7),
    startBlocks: startBlocks(3, 7),
    requiredBlocks: [[defineWithArg(msg.drawAHouse(), msg.lengthParameter())], [levelBase.callWithArg(msg.drawASquare(), msg.lengthParameter())], [levelBase.callWithArg(msg.drawATriangle(), msg.lengthParameter())], [simpleBlock('variables_get_length')], [levelBase.callWithArg(msg.drawAHouse(), msg.lengthParameter())]],
    freePlay: false,
    images: [{
      filename: 'elephant.svg',
      position: [205, 220]
    }],
    startDirection: 0,
    disableParamEditing: false
  },
  // Level 8: Draw houses.
  '3_8': {
    minWorkspaceHeight: 1200,
    answer: answer(3, 8),
    initialX: 20,
    initialY: 350,
    ideal: 40,
    toolbox: toolbox(3, 8),
    startBlocks: startBlocks(3, 8),
    freePlay: false,
    images: [{
      filename: 'cat.svg',
      position: [16, 170]
    }, {
      filename: 'lion.svg',
      position: [15, 250]
    }, {
      filename: 'elephant.svg',
      position: [127, 220]
    }, {
      filename: 'cow.svg',
      position: [255, 250]
    }],
    startDirection: 0,
    disableParamEditing: false
  },
  // Level 9: Draw houses with for loop.
  '3_9': {
    minWorkspaceHeight: 1200,
    answer: answer(3, 9),
    initialX: 20,
    initialY: 350,
    ideal: 38,
    toolbox: toolbox(3, 9),
    startBlocks: startBlocks(3, 9),
    requiredBlocks: [[defineWithArg(msg.drawAHouse(), msg.lengthParameter())], [levelBase.callWithArg(msg.drawASquare(), msg.lengthParameter())], [levelBase.callWithArg(msg.drawATriangle(), msg.lengthParameter())], [simpleBlock('variables_get_length')], [levelBase.callWithArg(msg.drawAHouse(), msg.lengthParameter())]],
    freePlay: false,
    images: [{
      filename: 'cat.svg',
      position: [-10, 270]
    }, {
      filename: 'cow.svg',
      position: [53, 250]
    }, {
      filename: 'elephant.svg',
      position: [175, 220]
    }],
    failForTooManyBlocks: true,
    startDirection: 0,
    disableParamEditing: false
  },
  // Level 10: playground.
  '3_10': {
    minWorkspaceHeight: 1600,
    answer: answer(3, 10),
    freePlay: true,
    toolbox: toolbox(3, 10),
    startBlocks: startBlocks(3, 10)
  },
  // Formerly Page 4.
  // Level 1: One triangle.
  '4_1': {
    instructionsImportant: true,
    answer: answer(4, 1),
    ideal: 4,
    toolbox: toolbox(4, 1),
    startBlocks: startBlocks(4, 1),
    requiredBlocks: [[MOVE_FORWARD_OR_BACKWARD_INLINE], [repeat(3)], [{
      // allow turn right or left, but show turn right block if they've done neither
      test: function test(block) {
        return block.type === 'draw_turn_by_constant';
      },
      type: 'draw_turn_by_constant',
      titles: { VALUE: '???' }
    }]]
  },
  // Level 2: Two triangles.
  '4_2': {
    answer: answer(4, 2),
    ideal: 8,
    toolbox: toolbox(4, 2),
    startBlocks: startBlocks(4, 2),
    requiredBlocks: [[turnRightByConstant('???')]],
    sliderSpeed: 0.5
  },
  // Level 3: Four triangles using repeat.
  '4_3': {
    answer: answer(4, 3),
    ideal: 6,
    toolbox: toolbox(4, 3),
    startBlocks: startBlocks(4, 3),
    requiredBlocks: [[repeat(4)], [turnRightByConstant('???')]],
    sliderSpeed: 0.7
  },
  // Level 4: Ten triangles with missing repeat number.
  '4_4': {
    answer: answer(4, 4),
    ideal: 6,
    toolbox: toolbox(4, 4),
    startBlocks: startBlocks(4, 4),
    requiredBlocks: [[repeat('???')]],
    sliderSpeed: 0.7,
    impressive: true
  },
  // Level 5: 36 triangles with missing angle number.
  '4_5': {
    answer: answer(4, 5),
    ideal: 6,
    toolbox: toolbox(4, 5),
    startBlocks: startBlocks(4, 5),
    requiredBlocks: [[turnRightByConstant('???')]],
    sliderSpeed: 0.9,
    impressive: true
  },
  // Level 6: 1 square.
  '4_6': {
    answer: answer(4, 6),
    ideal: 4,
    toolbox: toolbox(4, 6),
    startBlocks: startBlocks(4, 6),
    requiredBlocks: [[moveForwardInline(20)], [repeat(4)], [{
      test: 'turnRight',
      type: 'draw_turn_by_constant',
      titles: { VALUE: '???' }
    }]],
    permittedErrors: 10,
    startDirection: 0
  },
  // Level 7: Square Ladder.
  '4_7': {
    answer: answer(4, 7),
    initialY: 300,
    ideal: 6,
    toolbox: toolbox(4, 7),
    startBlocks: startBlocks(4, 7),
    requiredBlocks: [[moveForwardInline(20)], [repeat(10)]],
    startDirection: 0,
    sliderSpeed: 0.7
  },
  // Level 8: Ladder square.
  '4_8': {
    answer: answer(4, 8),
    initialX: 100,
    initialY: 300,
    ideal: 8,
    toolbox: toolbox(4, 8),
    startBlocks: startBlocks(4, 8),
    requiredBlocks: [[repeat(4)], [turnRightByConstant('???')]],
    startDirection: 0,
    sliderSpeed: 0.9
  },
  // Level 9: Ladder square with a different angle.
  '4_9': {
    answer: answer(4, 9),
    initialX: 150,
    initialY: 350,
    ideal: 8,
    toolbox: toolbox(4, 9),
    startBlocks: startBlocks(4, 9),
    requiredBlocks: [[turnRightByConstant('???')]],
    startDirection: 330,
    sliderSpeed: 0.9
  },
  // Level 10: Ladder polygon.
  '4_10': {
    answer: answer(4, 10),
    initialX: 75,
    initialY: 300,
    ideal: 8,
    toolbox: toolbox(4, 10),
    startBlocks: startBlocks(4, 10),
    requiredBlocks: [[repeat('???')]],
    startDirection: 0,
    sliderSpeed: 0.9,
    impressive: true
  },
  // Level 11: playground.
  '4_11': {
    answer: answer(4, 11),
    freePlay: true,
    initialX: 75,
    initialY: 300,
    toolbox: toolbox(4, 11),
    startBlocks: startBlocks(4, 11),
    requiredBlocks: [],
    startDirection: 0,
    sliderSpeed: 0.9
  },

  // Formerly Page 5.
  // Level 1: playground.
  '5_1': {
    instructionsImportant: true,
    minWorkspaceHeight: 1200,
    answer: answer(5, 1),
    freePlay: true,
    toolbox: toolbox(5, 1),
    startBlocks: startBlocks(5, 1),
    sliderSpeed: 0.9
  },
  // Level 2: playground.
  '5_2': {
    minWorkspaceHeight: 1200,
    answer: answer(5, 2),
    freePlay: true,
    toolbox: toolbox(5, 2),
    startBlocks: startBlocks(5, 2),
    sliderSpeed: 1.0
  },
  // Level 3: playground.
  '5_3': {
    minWorkspaceHeight: 1200,
    answer: answer(5, 3),
    freePlay: true,
    toolbox: toolbox(5, 3),
    startBlocks: startBlocks(5, 3),
    sliderSpeed: 1.0
  },
  // Level 4: playground.
  '5_4': {
    minWorkspaceHeight: 1600,
    answer: answer(5, 4),
    freePlay: true,
    toolbox: toolbox(5, 4),
    startBlocks: startBlocks(5, 4),
    sliderSpeed: 1.0
  },
  // Level 5: playground.
  '5_5': {
    minWorkspaceHeight: 1600,
    answer: answer(5, 5),
    freePlay: true,
    toolbox: toolbox(5, 5),
    startBlocks: startBlocks(5, 5),
    sliderSpeed: 1.0
  },
  // Level 6: playground.
  '5_6': {
    minWorkspaceHeight: 1600,
    answer: answer(5, 6),
    freePlay: true,
    initialY: 300,
    toolbox: toolbox(5, 6),
    startBlocks: startBlocks(5, 6),
    startDirection: 0,
    sliderSpeed: 1.0
  },
  // The level for building new levels.
  'builder': {
    answer: [],
    freePlay: true,
    initialY: 300,
    toolbox: toolbox(5, LEVELBUILDER_LEVEL),
    startBlocks: '',
    startDirection: 0,
    sliderSpeed: 1.0
  },
  // The default level newly created levels use.
  'custom': {
    answer: [],
    freePlay: false,
    initialY: 300,
    toolbox: toolbox(5, LEVELBUILDER_LEVEL),
    startBlocks: '',
    startDirection: 0,
    sliderSpeed: 1.0
  },
  'k1_demo': {
    answer: [],
    freePlay: false,
    initialY: 300,
    isK1: true,
    toolbox: blockUtils.createToolbox(blocks.simpleMoveBlocks() + blocks.simpleJumpBlocks() + blocks.simpleMoveLengthBlocks() + blockUtils.blockOfType('controls_repeat_simplified') + blockUtils.blockOfType('draw_colour_simple')),
    startBlocks: '',
    startDirection: 0,
    sliderSpeed: 1.0
  }
};

levels.ec_1_1 = utils.extend(levels['1_1'], {
  'editCode': true,
  'codeFunctions': {
    'moveForward': null,
    'turnRight': null
  },
  'startBlocks': "moveForward(100);\n"
});
levels.ec_1_2 = utils.extend(levels['1_2'], {
  'editCode': true,
  'codeFunctions': {
    'moveForward': null,
    'turnRight': null,
    'penColour': null
  },
  'startBlocks': "penColour('#ff0000');\nmoveForward(100);\n"
});
levels.ec_1_3 = utils.extend(levels['1_3'], {
  'editCode': true,
  'codeFunctions': {
    'moveForward': null,
    'turnRight': null,
    'penColour': null,
    'forLoop_i_0_4': { 'category': 'Artist' }
  },
  'startBlocks': "for (var i = 0; i < 4; i++) {\n  __\n}\n"
});
levels.ec_1_4 = utils.extend(levels['1_4'], {
  'editCode': true,
  'codeFunctions': {
    'moveForward': null,
    'turnRight': null,
    'penColour': null,
    'forLoop_i_0_4': { 'category': 'Artist' }
  },
  'startBlocks': "for (var i = 0; i < 3; i++) {\n  penColour('#ff0000');\n}\n"
});
levels.ec_1_10 = utils.extend(levels['1_10'], {
  'editCode': true,
  'codeFunctions': {
    'moveForward': null,
    'turnRight': null,
    'penColour': null,
    'penWidth': null,
    'forLoop_i_0_4': { 'category': 'Artist' }
  },
  'startBlocks': "moveForward(100);\n"
});

/***/ }),

/***/ 3331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Blockly Demo: Turtle Graphics
 *
 * Copyright 2013 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Sample answers for Turtle levels. Used for prompts and marking.
 * @author fraser@google.com (Neil Fraser)
 */

var ArtistAPI = __webpack_require__(2950);
var api = new ArtistAPI();

var setRandomVisibleColour = function setRandomVisibleColour() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  // Make sure at least one component is below 0x80 and the rest
  // below 0xA0, to prevent too light of colours.
  num &= 0x9f7f9f;
  var colour = '#' + ('00000' + num.toString(16)).substr(-6);
  api.penColour(colour);
};

var drawSquare = function drawSquare(length, random_colour) {
  for (var count = 0; count < 4; count++) {
    if (random_colour) {
      setRandomVisibleColour();
    }
    api.moveForward(length);
    api.turnRight(90);
  }
};

var drawTriangle = function drawTriangle(length, random_colour) {
  for (var count = 0; count < 3; count++) {
    if (random_colour) {
      setRandomVisibleColour();
    }
    api.moveForward(length);
    api.turnRight(120);
  }
};

var drawSnowman = function drawSnowman(height) {
  api.turnLeft(90);
  var distances = [height * 0.5, height * 0.3, height * 0.2];
  for (var i = 0; i < 6; i++) {
    var distance = distances[i < 3 ? i : 5 - i] / 57.5;
    for (var d = 0; d < 180; d += 2) {
      api.moveForward(distance);
      api.turnRight(2);
    }
    if (i !== 2) {
      api.turnRight(180);
    }
  }
  api.turnLeft(90);
};

var drawHouse = function drawHouse(length) {
  drawSquare(length);
  api.moveForward(length);
  api.turnRight(30);
  drawTriangle(length);
  api.turnRight(60);
  api.moveForward(length);
  api.turnLeft(90);
  api.moveBackward(length);
};

/**
 * Returns the log of a sample solutions for each level.
 * To create an answer, just solve the level in Blockly, then paste the
 * resulting JavaScript here, moving any functions to the beginning of
 * this function.
 */
exports.answer = function (page, level) {
  api.log = [];
  var count, sideIdx, len;
  if (page === 1) {
    switch (level) {
      case 1:
        // El.
        api.moveForward(100);
        api.turnRight(90);
        api.moveForward(100);
        break;
      case 2:
        // Square.
        setRandomVisibleColour();
        drawSquare(100, false);
        break;
      case 3:
        // Use repeat to draw a square.
        drawSquare(100, false);
        break;
      case 4:
        // Equilateral triangle.
        drawTriangle(100, true);
        break;
      case 5:
        // Sideways envelope.
        drawSquare(100);
        drawTriangle(100);
        break;
      case 6:
        // Triangle and square.
        drawTriangle(100);
        api.turnRight(180);
        drawSquare(100);
        break;
      case 7:
        // Glasses.
        api.penColour('#00cc00'); // blue
        api.turnRight(90);
        drawSquare(100);
        api.moveBackward(150);
        drawSquare(100);
        break;
      case 8:
        // Spiky.
        for (count = 0; count < 8; count++) {
          setRandomVisibleColour();
          api.moveForward(100);
          api.moveBackward(100);
          api.turnRight(45);
        }
        break;
      case 9:
        // Circle.
        for (count = 0; count < 360; count++) {
          api.moveForward(1);
          api.turnRight(1);
        }
        break;
    }
  } else if (page === 2) {
    switch (level) {
      case 1:
        // Single square in some color.
        setRandomVisibleColour();
        drawSquare(100);
        break;
      case 2:
        // Single green square.
        api.penColour('#00ff00'); // green
        drawSquare(50);
        break;
      case 3:
        // Three squares, 120 degrees apart, in random colors.
        for (count = 0; count < 3; count++) {
          setRandomVisibleColour();
          drawSquare(100);
          api.turnRight(120);
        }
        break;
      case 4:
        // 36 squares, 10 degrees apart, in random colors.
        for (count = 0; count < 36; count++) {
          setRandomVisibleColour();
          drawSquare(100);
          api.turnRight(10);
        }
        break;
      case 5: // Draw without using for-loop.  (Fall through to next case.)
      case 6:
        // Squares with sides of 50, 60, 70, 80, and 90 pixels.
        for (len = 50; len <= 90; len += 10) {
          drawSquare(len);
        }
        break;
      case 7:
        // Mini-spiral.
        for (len = 25; len <= 60; len += 5) {
          api.moveForward(len);
          api.turnRight(90);
        }
        break;
      case 7.5:
        drawSnowman(250);
        drawSnowman(100);
        break;
      case 8:
        // Same-height snowmen.
        for (var i = 0; i < 3; i++) {
          setRandomVisibleColour();
          drawSnowman(150);
          api.turnRight(90);
          api.jumpForward(100);
          api.turnLeft(90);
        }
        break;
      case 9:
        // Different height snowmen.
        for (var height = 110; height >= 70; height -= 10) {
          setRandomVisibleColour();
          drawSnowman(height);
          api.turnRight(90);
          api.jumpForward(60);
          api.turnLeft(90);
        }
        break;
    }
  } else if (page === 3) {
    switch (level) {
      case 1:
        // Draw a square.
        drawSquare(100);
        break;
      case 2:
        // Draw a triangle.
        drawTriangle(100);
        break;
      case 3:
        drawTriangle(100);
        api.moveForward(100);
        drawSquare(100);
        api.moveForward(100);
        drawTriangle(100);
        break;
      case 4:
        // Draw a house using "draw a square" and "draw a triangle".
        drawHouse(100);
        break;
      case 5:
        // Draw a house using a function.
        drawHouse(100);
        break;
      case 6:
        setRandomVisibleColour();
        drawTriangle(100);
        api.moveForward(100);
        setRandomVisibleColour();
        drawTriangle(200);
        break;
      case 7:
        // Add a parameter to the "draw a house" procedure.
        drawHouse(150);
        break;
      case 8:
        drawHouse(100);
        drawHouse(150);
        drawHouse(100);
        break;
      case 9:
        for (count = 50; count <= 150; count += 50) {
          setRandomVisibleColour();
          drawHouse(count);
        }
        break;
    }
  } else if (page === 4) {
    switch (level) {
      case 1:
        // Draw an equilateral triangle.
        drawTriangle(100);
        break;
      case 2:
        // Draw two equilateral triangles.
        for (count = 0; count < 2; count++) {
          setRandomVisibleColour();
          drawTriangle(100);
          api.turnRight(90);
        }
        break;
      case 3:
        // Draw four equilateral triangles.
        for (count = 0; count < 4; count++) {
          setRandomVisibleColour();
          drawTriangle(100);
          api.turnRight(90);
        }
        break;
      case 4:
        for (count = 0; count < 10; count++) {
          setRandomVisibleColour();
          drawTriangle(100);
          api.turnRight(36);
        }
        break;
      case 5:
        for (count = 0; count < 36; count++) {
          setRandomVisibleColour();
          drawTriangle(100);
          api.turnRight(10);
        }
        break;
      case 6:
        drawSquare(20);
        break;
      case 7:
        for (count = 0; count < 10; count++) {
          setRandomVisibleColour();
          drawSquare(20);
          api.moveForward(20);
        }
        break;
      case 8:
        for (sideIdx = 0; sideIdx < 4; sideIdx++) {
          for (count = 0; count < 10; count++) {
            setRandomVisibleColour();
            drawSquare(20);
            api.moveForward(20);
          }
          api.turnRight(90);
        }
        break;
      case 9:
        for (sideIdx = 0; sideIdx < 4; sideIdx++) {
          for (count = 0; count < 10; count++) {
            setRandomVisibleColour();
            drawSquare(20);
            api.moveForward(20);
          }
          api.turnRight(80);
        }
        break;
      case 10:
        for (sideIdx = 0; sideIdx < 9; sideIdx++) {
          for (count = 0; count < 10; count++) {
            setRandomVisibleColour();
            drawSquare(20);
            api.moveForward(20);
          }
          api.turnRight(80);
        }
        break;
    }
  }
  return api.log;
};

/***/ }),

/***/ 3332:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function anonymous(locals, escape, include, rethrow) {
    rethrow = rethrow || function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n");
        var start = Math.max(lineno - 3, 0);
        var end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    };
    escape = escape || function(markup) {
        return markup == undefined ? "" : String(markup).replace(_MATCH_HTML, encode_char);
    };
    var _ENCODE_HTML_RULES = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&#34;",
        "'": "&#39;"
    }, _MATCH_HTML = /[&<>'"]/g;
    function encode_char(c) {
        return _ENCODE_HTML_RULES[c] || c;
    }
    var __line = 1, __lines = '<%\n\nvar msg = require(\'./locale\');\n// An early hack introduced some levelbuilder levels as page 5, level 7. Long\n// term we can probably do something much cleaner, but for now I\'m calling\n// out that this level is special (on page 5).\nvar LEVELBUILDER_LEVEL = 7;\n\n/*\nTOOLBOX.\n\nPAGE 1\n======\nWithin this page, blocks are only added, never taken away.\n\nLevel 1 [el]: Adds draw_move_by_constant and draw_turn_by_constant.\nLevel 2 [coloured square]: Adds draw_colour with colour_picker.\nlevel 3 [square in three blocks]: Adds controls_repeat.\nlevel 4 [triangle] Adds draw_colour with colour_random.\nLevel 5 [overlapping square and triangle (sideways envelope)]\nLevel 6 [envelope]\nLevel 7 [glasses]\nLevel 8 [spikes]\nLevel 9 [circle]\nLevel 10 [free play]: draw_width_inline\n\nPAGE 2\n======\nCategories are introduced, with contents of:\n- Actions\n  - draw_move with math_number\n  - draw_turn with math_number\n- Color\n  - draw_colour (set colour) with colour_picker\n  - draw_colour (set colour) with colour_random\n- Functions (added at level 2)\n  - [call] draw a square\n  - [call] draw a snowball (added at level 9)\n- Loops\n  - controls_repeat\n  - controls_for (added at level 6)\n- Math\n  - math_number\n- Variables (added at level 6)\n  - get counter (added at level 9)\n  - get height (added at level 7)\n  - get length (levels 6 and 10)\nLevel 1 [square]\nLevel 2 [square by function call]: add "draw a square"\nLevel 3 [3 squares]\nLevel 4 [36 squares]\nLevel 5 [nested squares without controls_for]\nLevel 6 [nested squares with controls_for]\nLevel 7 [mini-spiral]\nLevel 8 [3 snowmen]: add "draw a snowman"\nLevel 9 [snowman family]\nLevel 10 [free play]\n\nPAGE 3\n======\nCategories are used, with contents of:\n- Actions\n  - draw_move with math_number\n  - draw_turn with math_number\n- Color\n  - draw_colour (set colour) with colour_picker\n  - draw_colour (set colour) with colour_random\n- Functions (Replaced with custom category at level 2)\n  - [call] draw a circle\n  - [call] draw a square\n- Loops\n  - controls_for\n  - controls_repeat\n- Math\n  - math_number\n- Variables (added at level 6)\n  - get counter\nVariables and functions are manually added until Levels 7 and 8,\nwhen the custom categories are used\nLevel 1 [call "draw a square"]\nLevel 2 [create and call "draw a triangle"]\nLevel 3 [use "draw a square" and "draw a triangle" to fence animals]\nLevel 4 [draw a house]\nLevel 5 [create and call "draw a house"]\nLevel 6 [add parameter to "draw a triangle"]\nLevel 7 [add parameter to "draw a house"]\nLevel 8 [modify end location of "create a house"]\nLevel 9 [call "draw a house" with for loop]\nLevel 10 [free play]\n\n*/ -%>\n<xml id="toolbox" style="display: none;">\n  <% if (page === 1) { -%>\n    <block type="draw_move_by_constant"></block>\n    <block type="draw_turn_by_constant<% if (level <= 8) { %>_restricted<% } %>">\n      <title name="VALUE">90</title>\n    </block>\n    <% if (level >= 2) { -%>\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_picker"></block>\n        </value>\n      </block>\n    <% } -%>\n    <% if (level >= 4) { /* Out of numeric order to make colour blocks adjacent. */ -%>\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_random"></block>\n        </value>\n      </block>\n    <% } -%>\n    <% if (level >= 3) { -%>\n      <block type="controls_repeat">\n        <title name="TIMES">4</title>\n      </block>\n    <% } -%>\n    <% if (level === 10) { -%>\n      <block id="draw-width" type="draw_width_inline" x="158" y="67">\n        <title name="WIDTH">1</title>\n      </block>\n    <% } -%>\n  <% } else if (page === 2 || page === 3) { -%>\n    <% // Actions: draw_move, draw_turn. -%>\n    <category id="actions" name="<%= msg.catTurtle() %>">\n      <block type="draw_move">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n      </block>\n      <% if (page === 2 && level >= 8) { -%>\n        <block type="jump">\n          <value name="VALUE">\n            <block type="math_number">\n              <title name="NUM">50</title>\n            </block>\n          </value>\n        </block>\n      <% } -%>\n      <block type="draw_turn">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">90</title>\n          </block>\n        </value>\n      </block>\n      <% if (level === 10) { -%>\n        <block id="draw-width" type="draw_width_inline">\n          <title name="WIDTH">1</title>\n        </block>\n      <% } -%>\n    </category>\n    <% // Colour: draw_colour with colour_picker and colour_random. -%>\n    <category name="<%= msg.catColour() %>">\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_picker"></block>\n        </value>\n      </block>\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_random"></block>\n        </value>\n      </block>\n    </category>\n    <% // Functions differ depending on page and locals.level. -%>\n    <% if (page === 2 && level >= 2) { -%>\n      <category name="<%= msg.catProcedures() %>">\n        <block type="draw_a_square" inline="true">\n          <value name="VALUE">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n          </value>\n        </block>\n        <% if (level >= 8) { -%>\n          <block type="draw_a_snowman" inline="true">\n            <value name="VALUE">\n              <block type="math_number">\n                <title name="NUM">100</title>\n              </block>\n            </value>\n          </block>\n        <% } -%>\n      </category>\n    <% } else if (page === 3) { -%>\n      <% if (level === 1) { -%>\n        <% // Don\'t use custom category yet, since it allows function definition. -%>\n        <category name="<%= msg.catProcedures() %>">\n          <block type="procedures_callnoreturn">\n            <mutation name="<%= msg.drawACircle() %>"></mutation>\n          </block>\n          <block type="procedures_callnoreturn">\n            <mutation name="<%= msg.drawASquare() %>"></mutation>\n          </block>\n        </category>\n      <% } else { %>\n        <category name="<%= msg.catProcedures() %>" custom="PROCEDURE"></category>\n      <% } -%>\n    <% } -%>\n    <% // Control: controls_for_counter (from page 2, level 6) and repeat. -%>\n    <category name="<%= msg.catControl() %>">\n      <% if ((page === 2 && level >= 6) || (page === 3 && level >= 9)) { -%>\n        <block type="controls_for_counter">\n          <value name="FROM">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <value name="TO">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n          </value>\n          <value name="BY">\n            <block type="math_number">\n              <title name="NUM">10</title>\n            </block>\n          </value>\n        </block>\n      <% } -%>\n      <block type="controls_repeat">\n        <title name="TIMES">4</title>\n      </block>\n    </category>\n    <% // Math: Just number blocks until final locals.level. -%>\n    <category name="<%= msg.catMath() %>">\n      <block type="math_number"></block>\n      <% if (level === 10) { -%>\n        <block type="math_arithmetic" inline="true"></block>\n        <block type="math_random_int">\n          <value name="FROM">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <value name="TO">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n        </value>\n      </block>\n      <block type="math_random_float"></block>\n    <% } -%>\n    </category>\n    <% // Variables depends on page and level, although we never use the custom category -%>\n    <% // because we want to offer simplified getters and no setters. -%>\n    <% if (page === 2 && level >= 6) { -%>\n      <category name="<%= msg.catVariables() %>">\n        <block type="variables_get_counter"></block>\n      </category>\n    <% } else if (page === 3 && level >= 6 && level < 10) { -%>\n      <category name="<%= msg.catVariables() %>">\n        <% if (level >= 9) { -%>\n          <block type="variables_get_counter"></block>\n        <% } -%>\n        <% if (level >= 6) { -%>\n          <block type="variables_get_length"></block>\n        <% } -%>\n      </category>\n    <% } else if (page === 3 && level === 10) { -%>\n      <category name="<%= msg.catVariables() %>" custom="VARIABLE">\n      </category>\n    <% } -%>\n  <% } else if (page === 4) { -%>\n    <% // Actions: draw_move, draw_turn. -%>\n    <block type="draw_move_by_constant"></block>\n    <block type="draw_turn_by_constant">\n      <title name="VALUE">90</title>\n    </block>\n    <% if (level === 11) { -%>\n    <block id="draw-width" type="draw_width_inline">\n      <title name="WIDTH">1</title>\n    </block>\n    <% } -%>\n    <% // Colour: draw_colour with colour_picker and colour_random. -%>\n    <block id="draw-color" type="draw_colour">\n      <value name="COLOUR">\n        <block type="colour_picker"></block>\n      </value>\n    </block>\n    <block id="draw-color" type="draw_colour">\n      <value name="COLOUR">\n        <block type="colour_random"></block>\n      </value>\n    </block>\n    <block type="controls_repeat">\n      <title name="TIMES">4</title>\n    </block>\n  <% } else if (page === 5) { -%>\n  <% // K1 simplified blocks for editor: keep in sync with Dashboard artist.rb -%>\n    <% if (level === LEVELBUILDER_LEVEL) { -%>\n      <category name="K1 Simplified">\n        <block type="controls_repeat_simplified">\n          <title name="TIMES">5</title>\n        </block>\n        <block type="draw_colour_simple"></block>\n        <block type="simple_move_up"></block>\n        <block type="simple_move_down"></block>\n        <block type="simple_move_left"></block>\n        <block type="simple_move_right"></block>\n        <block type="simple_move_up_length"></block>\n        <block type="simple_move_down_length"></block>\n        <block type="simple_move_left_length"></block>\n        <block type="simple_move_right_length"></block>\n        <block type="simple_jump_up"></block>\n        <block type="simple_jump_down"></block>\n        <block type="simple_jump_left"></block>\n        <block type="simple_jump_right"></block>\n      </category>\n    <% } -%>\n    <% // Actions: draw_move, draw_turn. -%>\n    <category id="actions" name="<%= msg.catTurtle() %>">\n      <block type="draw_move">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n      </block>\n      <block type="jump">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">50</title>\n          </block>\n        </value>\n      </block>\n      <block type="draw_turn">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">90</title>\n          </block>\n        </value>\n      </block>\n      <block type="draw_pen"></block>\n      <block id="draw-width" type="draw_width_inline">\n        <title name="WIDTH">1</title>\n      </block>\n    </category>\n    <% // Colour: draw_colour with colour_picker and colour_random. -%>\n    <category name="<%= msg.catColour() %>">\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_picker"></block>\n        </value>\n      </block>\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_random"></block>\n        </value>\n      </block>\n    </category>\n    <% // Functions -%>\n    <category name="<%= msg.catProcedures() %>" custom="PROCEDURE"></category>\n    <% if (level === LEVELBUILDER_LEVEL) { -%>\n    <category name="Prebuilt">\n      <block type="draw_a_triangle"></block>\n      <block type="draw_a_square_custom"></block>\n      <block type="draw_a_house"></block>\n      <block type="draw_a_flower"></block>\n      <block type="draw_a_snowflake"></block>\n      <block type="draw_a_snowman"></block>\n      <block type="draw_a_hexagon"></block>\n      <block type="draw_a_star"></block>\n      <block type="draw_a_robot"></block>\n      <block type="draw_a_rocket"></block>\n      <block type="draw_a_planet"></block>\n      <block type="draw_a_rhombus"></block>\n      <block type="draw_upper_wave"></block>\n      <block type="draw_lower_wave"></block>\n    </category>\n    <% } -%>\n    <% // Control: controls_for_counter and repeat. -%>\n    <category name="<%= msg.catControl() %>">\n      <block type="controls_for_counter">\n        <value name="FROM">\n          <block type="math_number">\n            <title name="NUM">1</title>\n          </block>\n        </value>\n        <value name="TO">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n        <value name="BY">\n          <block type="math_number">\n            <title name="NUM">10</title>\n          </block>\n        </value>\n      </block>\n      <% if (level < 6) { -%>\n        <block type="controls_repeat">\n          <title name="TIMES">4</title>\n        </block>\n      <% } else { -%>\n        <block type="controls_repeat_ext">\n          <value name="TIMES">\n            <block type="math_number">\n              <title name="NUM">10</title>\n            </block>\n          </value>\n        </block>\n      <% } -%>\n    </category>\n  <% // Logic -%>\n    <category name="<%= msg.catLogic() %>">\n      <block type="controls_if"></block>\n      <block type="logic_compare"></block>\n      <block type="logic_operation"></block>\n      <block type="logic_negate"></block>\n      <block type="logic_boolean"></block>\n      <block type="logic_null"></block>\n      <block type="logic_ternary"></block>\n    </category>\n    <% // Math: Just number blocks until final locals.level. -%>\n    <category name="<%= msg.catMath() %>">\n      <block type="math_number"></block>\n      <block type="math_arithmetic" inline="true"></block>\n      <block type="math_random_int">\n        <value name="FROM">\n          <block type="math_number">\n            <title name="NUM">1</title>\n          </block>\n        </value>\n        <value name="TO">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n      </block>\n      <block type="math_random_float"></block>\n     </category>\n    <% // Variables -%>\n    <category name="<%= msg.catVariables() %>" custom="VARIABLE">\n    </category>\n  <% } -%>\n</xml>\n', __filename = "src/turtle/toolbox.xml.ejs";
    try {
        var __output = [], __append = __output.push.bind(__output);
        with (locals || {}) {
            var msg = __webpack_require__(1744);
            var LEVELBUILDER_LEVEL = 7;
            __line = 91;
            __append('<xml id="toolbox" style="display: none;">\n  ');
            __line = 93;
            if (page === 1) {
                __append('    <block type="draw_move_by_constant"></block>\n    <block type="draw_turn_by_constant');
                __line = 95;
                if (level <= 8) {
                    __append("_restricted");
                }
                __append('">\n      <title name="VALUE">90</title>\n    </block>\n    ');
                __line = 98;
                if (level >= 2) {
                    __append('      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_picker"></block>\n        </value>\n      </block>\n    ');
                    __line = 104;
                }
                __append("    ");
                __line = 105;
                if (level >= 4) {
                    __append('      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_random"></block>\n        </value>\n      </block>\n    ');
                    __line = 111;
                }
                __append("    ");
                __line = 112;
                if (level >= 3) {
                    __append('      <block type="controls_repeat">\n        <title name="TIMES">4</title>\n      </block>\n    ');
                    __line = 116;
                }
                __append("    ");
                __line = 117;
                if (level === 10) {
                    __append('      <block id="draw-width" type="draw_width_inline" x="158" y="67">\n        <title name="WIDTH">1</title>\n      </block>\n    ');
                    __line = 121;
                }
                __append("  ");
                __line = 122;
            } else if (page === 2 || page === 3) {
                __append("    ");
                __line = 123;
                __append('    <category id="actions" name="');
                __line = 124;
                __append(escape(msg.catTurtle()));
                __append('">\n      <block type="draw_move">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n      </block>\n      ');
                __line = 132;
                if (page === 2 && level >= 8) {
                    __append('        <block type="jump">\n          <value name="VALUE">\n            <block type="math_number">\n              <title name="NUM">50</title>\n            </block>\n          </value>\n        </block>\n      ');
                    __line = 140;
                }
                __append('      <block type="draw_turn">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">90</title>\n          </block>\n        </value>\n      </block>\n      ');
                __line = 148;
                if (level === 10) {
                    __append('        <block id="draw-width" type="draw_width_inline">\n          <title name="WIDTH">1</title>\n        </block>\n      ');
                    __line = 152;
                }
                __append("    </category>\n    ");
                __line = 154;
                __append('    <category name="');
                __line = 155;
                __append(escape(msg.catColour()));
                __append('">\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_picker"></block>\n        </value>\n      </block>\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_random"></block>\n        </value>\n      </block>\n    </category>\n    ');
                __line = 167;
                __append("    ");
                __line = 168;
                if (page === 2 && level >= 2) {
                    __append('      <category name="');
                    __line = 169;
                    __append(escape(msg.catProcedures()));
                    __append('">\n        <block type="draw_a_square" inline="true">\n          <value name="VALUE">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n          </value>\n        </block>\n        ');
                    __line = 177;
                    if (level >= 8) {
                        __append('          <block type="draw_a_snowman" inline="true">\n            <value name="VALUE">\n              <block type="math_number">\n                <title name="NUM">100</title>\n              </block>\n            </value>\n          </block>\n        ');
                        __line = 185;
                    }
                    __append("      </category>\n    ");
                    __line = 187;
                } else if (page === 3) {
                    __append("      ");
                    __line = 188;
                    if (level === 1) {
                        __append("        ");
                        __line = 189;
                        __append('        <category name="');
                        __line = 190;
                        __append(escape(msg.catProcedures()));
                        __append('">\n          <block type="procedures_callnoreturn">\n            <mutation name="');
                        __line = 192;
                        __append(escape(msg.drawACircle()));
                        __append('"></mutation>\n          </block>\n          <block type="procedures_callnoreturn">\n            <mutation name="');
                        __line = 195;
                        __append(escape(msg.drawASquare()));
                        __append('"></mutation>\n          </block>\n        </category>\n      ');
                        __line = 198;
                    } else {
                        __append('\n        <category name="');
                        __line = 199;
                        __append(escape(msg.catProcedures()));
                        __append('" custom="PROCEDURE"></category>\n      ');
                        __line = 200;
                    }
                    __append("    ");
                    __line = 201;
                }
                __append("    ");
                __line = 202;
                __append('    <category name="');
                __line = 203;
                __append(escape(msg.catControl()));
                __append('">\n      ');
                __line = 204;
                if (page === 2 && level >= 6 || page === 3 && level >= 9) {
                    __append('        <block type="controls_for_counter">\n          <value name="FROM">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <value name="TO">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n          </value>\n          <value name="BY">\n            <block type="math_number">\n              <title name="NUM">10</title>\n            </block>\n          </value>\n        </block>\n      ');
                    __line = 222;
                }
                __append('      <block type="controls_repeat">\n        <title name="TIMES">4</title>\n      </block>\n    </category>\n    ');
                __line = 227;
                __append('    <category name="');
                __line = 228;
                __append(escape(msg.catMath()));
                __append('">\n      <block type="math_number"></block>\n      ');
                __line = 230;
                if (level === 10) {
                    __append('        <block type="math_arithmetic" inline="true"></block>\n        <block type="math_random_int">\n          <value name="FROM">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <value name="TO">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n        </value>\n      </block>\n      <block type="math_random_float"></block>\n    ');
                    __line = 245;
                }
                __append("    </category>\n    ");
                __line = 247;
                __append("    ");
                __line = 248;
                __append("    ");
                __line = 249;
                if (page === 2 && level >= 6) {
                    __append('      <category name="');
                    __line = 250;
                    __append(escape(msg.catVariables()));
                    __append('">\n        <block type="variables_get_counter"></block>\n      </category>\n    ');
                    __line = 253;
                } else if (page === 3 && level >= 6 && level < 10) {
                    __append('      <category name="');
                    __line = 254;
                    __append(escape(msg.catVariables()));
                    __append('">\n        ');
                    __line = 255;
                    if (level >= 9) {
                        __append('          <block type="variables_get_counter"></block>\n        ');
                        __line = 257;
                    }
                    __append("        ");
                    __line = 258;
                    if (level >= 6) {
                        __append('          <block type="variables_get_length"></block>\n        ');
                        __line = 260;
                    }
                    __append("      </category>\n    ");
                    __line = 262;
                } else if (page === 3 && level === 10) {
                    __append('      <category name="');
                    __line = 263;
                    __append(escape(msg.catVariables()));
                    __append('" custom="VARIABLE">\n      </category>\n    ');
                    __line = 265;
                }
                __append("  ");
                __line = 266;
            } else if (page === 4) {
                __append("    ");
                __line = 267;
                __append('    <block type="draw_move_by_constant"></block>\n    <block type="draw_turn_by_constant">\n      <title name="VALUE">90</title>\n    </block>\n    ');
                __line = 272;
                if (level === 11) {
                    __append('    <block id="draw-width" type="draw_width_inline">\n      <title name="WIDTH">1</title>\n    </block>\n    ');
                    __line = 276;
                }
                __append("    ");
                __line = 277;
                __append('    <block id="draw-color" type="draw_colour">\n      <value name="COLOUR">\n        <block type="colour_picker"></block>\n      </value>\n    </block>\n    <block id="draw-color" type="draw_colour">\n      <value name="COLOUR">\n        <block type="colour_random"></block>\n      </value>\n    </block>\n    <block type="controls_repeat">\n      <title name="TIMES">4</title>\n    </block>\n  ');
                __line = 291;
            } else if (page === 5) {
                __append("  ");
                __line = 292;
                __append("    ");
                __line = 293;
                if (level === LEVELBUILDER_LEVEL) {
                    __append('      <category name="K1 Simplified">\n        <block type="controls_repeat_simplified">\n          <title name="TIMES">5</title>\n        </block>\n        <block type="draw_colour_simple"></block>\n        <block type="simple_move_up"></block>\n        <block type="simple_move_down"></block>\n        <block type="simple_move_left"></block>\n        <block type="simple_move_right"></block>\n        <block type="simple_move_up_length"></block>\n        <block type="simple_move_down_length"></block>\n        <block type="simple_move_left_length"></block>\n        <block type="simple_move_right_length"></block>\n        <block type="simple_jump_up"></block>\n        <block type="simple_jump_down"></block>\n        <block type="simple_jump_left"></block>\n        <block type="simple_jump_right"></block>\n      </category>\n    ');
                    __line = 312;
                }
                __append("    ");
                __line = 313;
                __append('    <category id="actions" name="');
                __line = 314;
                __append(escape(msg.catTurtle()));
                __append('">\n      <block type="draw_move">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n      </block>\n      <block type="jump">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">50</title>\n          </block>\n        </value>\n      </block>\n      <block type="draw_turn">\n        <value name="VALUE">\n          <block type="math_number">\n            <title name="NUM">90</title>\n          </block>\n        </value>\n      </block>\n      <block type="draw_pen"></block>\n      <block id="draw-width" type="draw_width_inline">\n        <title name="WIDTH">1</title>\n      </block>\n    </category>\n    ');
                __line = 341;
                __append('    <category name="');
                __line = 342;
                __append(escape(msg.catColour()));
                __append('">\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_picker"></block>\n        </value>\n      </block>\n      <block id="draw-color" type="draw_colour">\n        <value name="COLOUR">\n          <block type="colour_random"></block>\n        </value>\n      </block>\n    </category>\n    ');
                __line = 354;
                __append('    <category name="');
                __line = 355;
                __append(escape(msg.catProcedures()));
                __append('" custom="PROCEDURE"></category>\n    ');
                __line = 356;
                if (level === LEVELBUILDER_LEVEL) {
                    __append('    <category name="Prebuilt">\n      <block type="draw_a_triangle"></block>\n      <block type="draw_a_square_custom"></block>\n      <block type="draw_a_house"></block>\n      <block type="draw_a_flower"></block>\n      <block type="draw_a_snowflake"></block>\n      <block type="draw_a_snowman"></block>\n      <block type="draw_a_hexagon"></block>\n      <block type="draw_a_star"></block>\n      <block type="draw_a_robot"></block>\n      <block type="draw_a_rocket"></block>\n      <block type="draw_a_planet"></block>\n      <block type="draw_a_rhombus"></block>\n      <block type="draw_upper_wave"></block>\n      <block type="draw_lower_wave"></block>\n    </category>\n    ');
                    __line = 373;
                }
                __append("    ");
                __line = 374;
                __append('    <category name="');
                __line = 375;
                __append(escape(msg.catControl()));
                __append('">\n      <block type="controls_for_counter">\n        <value name="FROM">\n          <block type="math_number">\n            <title name="NUM">1</title>\n          </block>\n        </value>\n        <value name="TO">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n        <value name="BY">\n          <block type="math_number">\n            <title name="NUM">10</title>\n          </block>\n        </value>\n      </block>\n      ');
                __line = 393;
                if (level < 6) {
                    __append('        <block type="controls_repeat">\n          <title name="TIMES">4</title>\n        </block>\n      ');
                    __line = 397;
                } else {
                    __append('        <block type="controls_repeat_ext">\n          <value name="TIMES">\n            <block type="math_number">\n              <title name="NUM">10</title>\n            </block>\n          </value>\n        </block>\n      ');
                    __line = 405;
                }
                __append("    </category>\n  ");
                __line = 407;
                __append('    <category name="');
                __line = 408;
                __append(escape(msg.catLogic()));
                __append('">\n      <block type="controls_if"></block>\n      <block type="logic_compare"></block>\n      <block type="logic_operation"></block>\n      <block type="logic_negate"></block>\n      <block type="logic_boolean"></block>\n      <block type="logic_null"></block>\n      <block type="logic_ternary"></block>\n    </category>\n    ');
                __line = 417;
                __append('    <category name="');
                __line = 418;
                __append(escape(msg.catMath()));
                __append('">\n      <block type="math_number"></block>\n      <block type="math_arithmetic" inline="true"></block>\n      <block type="math_random_int">\n        <value name="FROM">\n          <block type="math_number">\n            <title name="NUM">1</title>\n          </block>\n        </value>\n        <value name="TO">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n      </block>\n      <block type="math_random_float"></block>\n     </category>\n    ');
                __line = 435;
                __append('    <category name="');
                __line = 436;
                __append(escape(msg.catVariables()));
                __append('" custom="VARIABLE">\n    </category>\n  ');
                __line = 438;
            }
            __append("</xml>\n");
            __line = 440;
        }
        return __output.join("");
    } catch (e) {
        rethrow(e, __lines, __filename, __line);
    }
}

/***/ }),

/***/ 3333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function anonymous(locals, escape, include, rethrow) {
    rethrow = rethrow || function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n");
        var start = Math.max(lineno - 3, 0);
        var end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    };
    escape = escape || function(markup) {
        return markup == undefined ? "" : String(markup).replace(_MATCH_HTML, encode_char);
    };
    var _ENCODE_HTML_RULES = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&#34;",
        "'": "&#39;"
    }, _MATCH_HTML = /[&<>'"]/g;
    function encode_char(c) {
        return _ENCODE_HTML_RULES[c] || c;
    }
    var __line = 1, __lines = '<%\n\nvar msg = require(\'./locale\');\n\n/**\n * Common code for creating procedures drawing different regular polygons.\n * options:\n *   title Title of procedure.\n *   modifiers String containing any optional keys and values for the initial\n *             <block> tag, such as \'x="20" y="20" editable="false"\'.\n *   sides Number of sides.\n *   length 0 if a length parameter should be used, a positive number otherwise\n */\nvar polygon = function(options) {\n-%>\n<block type="procedures_defnoreturn" <%- options.modifiers %>>\n    <mutation>\n      <% if (options.length === 0) { -%>\n        <arg name="<%= msg.lengthParameter() %>"></arg>\n      <% } -%>\n    </mutation>\n    <title name="NAME"><%= options.title %></title>\n    <statement name="STACK">\n      <block type="controls_repeat" <%- options.modifiers %>>\n        <title name="TIMES"><%= options.sides %></title>\n        <statement name="DO">\n          <block type="draw_move" <%- options.modifiers %>>\n            <value name="VALUE">\n              <% if (options.length === 0) { -%>\n                <block type="variables_get_length" <%- options.modifiers %>></block>\n              <% } else { -%>\n                <block type="math_number" <%- options.modifiers %>>\n                  <title name="NUM"><%= options.length %></title>\n                </block>\n              <% } -%>\n            </value>\n            <next>\n              <block type="draw_turn" <%- options.modifiers %>>\n                <value name="VALUE">\n                  <block type="math_number" <%- options.modifiers %>>\n                    <title name="NUM"><%= 360 / options.sides %></title>\n                  </block>\n                </value>\n              </block>\n            </next>\n          </block>\n        </statement>\n      </block>\n    </statement>\n  </block>\n<% }; -%>\n\n<%\n/**\n * Spiral needs a named helper template for recursion.\n * @param i Loop control variable.\n */\nvar spiral = function(i) {\n-%>\n  <% if (i <= 60) { -%>\n    <block type="draw_move" <% if (i === 25) { %>x="300" y="100"<% } %> inline="false" editable="false" deletable="false" disabled="true">\n      <title name="DIR">moveForward</title>\n      <value name="VALUE">\n        <block type="math_number" editable="false" deletable="false" disabled="true">\n          <title name="NUM"><%= i %></title>\n        </block>\n      </value>\n      <next>\n        <block type="draw_turn" inline="false" editable="false" deletable="false" disabled="true">\n          <title name="DIR">turnRight</title>\n          <value name="VALUE">\n            <block type="math_number" editable="false" deletable="false" disabled="true">\n              <title name="NUM">90</title>\n            </block>\n          </value>\n          <next>\n            <% spiral(i + 5) -%>\n          </next>\n        </block>\n      </next>\n    </block>\n  <% } %>\n<% }; -%>\n\n<%\n/**\n * Define the starting blocks for each page and locals.level.\n * These are referenced from turtle.js.\n */\n%>\n<% if (page === 1) { -%>\n  <% if (level === 1) { -%>\n    <block type="draw_move_by_constant" x="20" y="20"></block>\n  <% } else if (level === 2) { -%>\n    <block type="draw_colour" inline="true" x="20" y="20">\n      <value name="COLOUR">\n        <block type="colour_picker">\n          <title name="COLOUR">#ff0000</title>\n        </block>\n      </value>\n      <next>\n        <block type="draw_move_by_constant"></block>\n      </next>\n    </block>\n  <% } else if (level === 4) { -%>\n    <block type="controls_repeat" x="20" y="20">\n      <title name="TIMES">3</title>\n      <statement name="DO">\n        <block type="draw_colour" inline="true">\n          <value name="COLOUR">\n            <block type="colour_random"></block>\n          </value>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 3 || level === 5 || level === 6) { -%>\n    <block type="controls_repeat" x="20" y="20">\n      <title name="TIMES"><% if (level === 3) { %>4<% } else { %>3<% } %></title>\n    </block>\n  <% } else if (level === 7) { -%>\n    <block type="draw_turn_by_constant_restricted" x="20" y="20">\n      <title name="DIR">turnRight</title>\n      <title name="VALUE">90</title>\n    </block>\n  <% } else if (level === 8) { -%>\n    <block id="set-color" type="draw_colour" x="20" y="100">\n      <value name="COLOUR">\n        <block type="colour_random"></block>\n      </value>\n      <next>\n        <block type="draw_move_by_constant">\n          <title name="DIR">moveForward</title>\n          <title name="VALUE">100</title>\n          <next>\n            <block type="draw_move_by_constant">\n              <title name="DIR">moveBackward</title>\n              <title name="VALUE">100</title>\n              <next>\n                <block type="draw_turn_by_constant">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">45</title>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n  <% } else if (level === 9) { -%>\n    <block type="controls_repeat" deletable="false"  x="20" y="20">\n      <title name="TIMES">??</title>\n      <statement name="DO">\n        <block type="draw_move" editable="false" deletable="false">\n          <value name="VALUE">\n            <block type="math_number" editable="false" deletable="false">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <next>\n            <block type="draw_turn" editable="false" deletable="false">\n              <value name="VALUE">\n                <block type="math_number" editable="false" deletable="false">\n                  <title name="NUM">1</title>\n                </block>\n              </value>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 10) { -%>\n    <block type="draw_move_by_constant" x="20" y="20">\n      <title name="DIR">moveForward</title>\n      <title name="VALUE">100</title>\n    </block>\n  <% } -%>\n<% } else if (page === 2) { -%>\n  <% // No blocks are provided for levels 1 and 2. -%>\n  <% if (level === 3 || level === 5) { -%>\n    <% // Call "draw a square". -%>\n    <block type="draw_a_square" inline="true" x="20" y="20">\n      <value name="VALUE">\n        <block type="math_number">\n          <title name="NUM"><% if (level === 3) { %>100<% } else { %>50<% } %></title>\n        </block>\n      </value>\n    </block>\n  <% } else if (level === 4) { -%>\n    <% // Three-square code. -%>\n    <block type="controls_repeat" deletable="false"  x="20" y="20">\n      <title name="TIMES">???</title>\n      <statement name="DO">\n        <block id="set-color" type="draw_colour" deletable="false">\n          <value name="COLOUR">\n            <block type="colour_random" deletable="false">\n            </block>\n          </value>\n          <next>\n            <block type="draw_a_square" inline="true" editable="false" deletable="false">\n              <value name="VALUE">\n                <block type="math_number" deletable="false">\n                  <title name="NUM">???</title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" editable="false" deletable="false">\n                  <value name="VALUE">\n                    <block type="math_number" deletable="false">\n                      <title name="NUM">???</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 6) { -%>\n    <block type="controls_for_counter" inline="true" x="20" y="20">\n    <title name="VAR"><%= msg.loopVariable() %></title>\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM"><% if (level === 6) { %>50<% } else { %>10<% } %></title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM"><% if (level === 6) { %>90<% } else { %>100<% } %></title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">10</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="draw_a_square" inline="true">\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 7) { -%>\n    <% spiral(25) -%>\n  <% } else if (level === 7.5) { -%>\n    <block type="draw_a_snowman" x="20" y="20" inline="true">\n      <value name="VALUE">\n        <block type="math_number">\n          <title name="NUM">250</title>\n        </block>\n      </value>\n    </block>\n  <% } else if (level === 8 || level === 9) { -%>\n    <block type="draw_a_snowman" x="20" y="20" inline="true">\n      <value name="VALUE">\n        <block type="math_number">\n          <title name="NUM">150</title>\n        </block>\n      </value>\n    </block>\n  <% } else if (level === 10) { -%>\n    <block id="draw-width" type="draw_width_inline" x="158" y="67">\n      <title name="WIDTH">1</title>\n      <next>\n        <block type="controls_for_counter" inline="true">\n          <value name="FROM">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <value name="TO">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n          </value>\n          <value name="BY">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <statement name="DO">\n            <block type="draw_move" inline="false">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get_counter"></block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="false">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">91</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </next>\n    </block>\n  <% } -%>\n<% } else if (page === 3) { -%>\n  <% // Define "draw a square". -%>\n  <%- polygon({\n    title: msg.drawASquare(),\n    modifiers: (level === 8 ? \'\' : \'x="220" y="40"\') + \' editable="false" deletable="false"\',\n    sides: 4,\n    length: (level >= 6 ? 0 : 100)\n  }) -%>\n  <% if (level === 1) { -%>\n    <% // Define "draw a circle". -%>\n    <%- polygon({\n      title: msg.drawACircle(),\n      modifiers: \'x="220" y="250" editable="false" deletable="false"\',\n      sides: 360,\n      length: 1\n    }) -%>\n  <% } -%>\n  <% if (level === 2) { -%>\n    <block type="procedures_defnoreturn" x="220" y="250">\n      <title name="NAME"><%= msg.drawATriangle() %></title>\n    </block>\n  <% } else if (level >= 3) { -%>\n    <% //  Define "draw a triangle". -%>\n    <%- polygon({\n      title: msg.drawATriangle(),\n      modifiers: (level === 8 ? \'\' : \'x="220" y="250"\') + (level === 6 ? \'\' : \' editable="false" deletable="false"\'),\n      sides: 3,\n      length: (level >= 7 ? 0 : 100)\n    }) -%>\n  <% } -%>\n  <% if (level === 8 ) { -%>\n    <block type="procedures_callnoreturn" inline="false">\n      <mutation name="<%= msg.drawAHouse() %>">\n        <arg name="<%= msg.lengthParameter() %>"></arg>\n      </mutation>\n        <value name="ARG0">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n    </block>\n  <% } -%>\n  <% if (level === 7 || level === 8) { -%>\n    <% //  Define "draw a house". -%>\n    <block type="procedures_defnoreturn" <% if (level === 7) { -%>x="220" y="460"<% } -%>>\n      <mutation>\n        <% if (level === 8) { %><arg name="<%= msg.lengthParameter() %>"></arg><% } -%>\n      </mutation>\n      <title name="NAME"><%= msg.drawAHouse() %></title>\n      <statement name="STACK">\n        <block type="procedures_callnoreturn" inline="false">\n          <mutation name="<%= msg.drawASquare() %>">\n            <arg name="<%= msg.lengthParameter() %>"/>\n          </mutation>\n          <value name="ARG0">\n            <% if (level === 8) { -%>\n              <block type="variables_get">\n                <title name="VAR"><%= msg.lengthParameter() %></title>\n              </block>\n            <% } else { -%>\n              <block type="math_number">\n                <title name="NUM">100</title>\n              </block>\n            <% } -%>\n          </value>\n          <next>\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <% if (level === 8) { -%>\n                  <block type="variables_get">\n                    <title name="VAR"><%= msg.lengthParameter() %></title>\n                  </block>\n                <% } else { -%>\n                  <block type="math_number">\n                    <title name="NUM">100</title>\n                  </block>\n                <% } -%>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">30</title>\n                    </block>\n                  </value>\n                  <next>\n                    <block type="procedures_callnoreturn" inline="false">\n                      <mutation name="<%= msg.drawATriangle() %>">\n                        <arg name="<%= msg.lengthParameter() %>"></arg>\n                      </mutation>\n                      <value name="ARG0">\n                        <% if (level === 8) { -%>\n                          <block type="variables_get">\n                            <title name="VAR"><%= msg.lengthParameter() %></title>\n                          </block>\n                        <% } else { -%>\n                          <block type="math_number">\n                            <title name="NUM">100</title>\n                          </block>\n                        <% } -%>\n                      </value>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } // End of region in which "draw a square" is defined. -%>\n<% } else if (page === 4) { -%>\n  <% if (level === 2) { -%>\n    <block type="draw_colour" inline="true" x="70" y="70" editable="false" deletable="false" movable="true">\n      <value name="COLOUR">\n        <block type="colour_random" editable="false" deletable="false" movable="true"></block>\n      </value>\n      <next>\n        <block type="controls_repeat" editable="false" deletable="false" movable="true">\n          <title name="TIMES">3</title>\n          <statement name="DO">\n            <block type="draw_move_by_constant" editable="false" deletable="false" movable="true">\n              <title name="DIR">moveForward</title>\n              <title name="VALUE">100</title>\n              <next>\n                <block type="draw_turn_by_constant" editable="false" deletable="false" movable="true">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">120</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n          <next>\n            <block type="draw_colour" inline="true" x="70" y="230" editable="false" deletable="false" movable="true">\n              <value name="COLOUR">\n                <block type="colour_random" editable="false" deletable="false" movable="true"></block>\n              </value>\n              <next>\n                <block type="controls_repeat" editable="false" deletable="false" movable="true">\n                  <title name="TIMES">3</title>\n                  <statement name="DO">\n                    <block type="draw_move_by_constant" editable="false" deletable="false" movable="true">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">100</title>\n                      <next>\n                        <block type="draw_turn_by_constant" editable="false" deletable="false" movable="true">\n                          <title name="DIR">turnRight</title>\n                          <title name="VALUE">120</title>\n                        </block>\n                      </next>\n                    </block>\n                  </statement>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n  <% } else if (level === 3) { -%>\n    <block type="draw_colour" inline="true" x="70" y="70" editable="false" deletable="false">\n      <value name="COLOUR">\n        <block type="colour_random" editable="false" deletable="false"></block>\n      </value>\n      <next>\n        <block type="controls_repeat" editable="false" deletable="false">\n          <title name="TIMES">3</title>\n          <statement name="DO">\n            <block type="draw_move_by_constant" editable="false" deletable="false">\n              <title name="DIR">moveForward</title>\n              <title name="VALUE">100</title>\n              <next>\n                <block type="draw_turn_by_constant" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">120</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </next>\n    </block>\n  <% } else if (level === 4) { -%>\n    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">???</title>\n      <statement name="DO">\n        <block type="draw_colour" inline="true" editable="false" deletable="false">\n          <value name="COLOUR">\n            <block type="colour_random" editable="false" deletable="false"></block>\n          </value>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">3</title>\n              <statement name="DO">\n                <block type="draw_move_by_constant" editable="false" deletable="false">\n                  <title name="DIR">moveForward</title>\n                  <title name="VALUE">100</title>\n                  <next>\n                    <block type="draw_turn_by_constant" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <title name="VALUE">120</title>\n                    </block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="draw_turn_by_constant" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">36</title>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 5) { -%>\n    <block type="controls_repeat" x="70" y="70" editable="false" deletable="false">\n      <title name="TIMES">36</title>\n      <statement name="DO">\n        <block type="draw_colour" inline="true" editable="false" deletable="false">\n          <value name="COLOUR">\n            <block type="colour_random" editable="false" deletable="false"></block>\n          </value>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">3</title>\n              <statement name="DO">\n                <block type="draw_move_by_constant" editable="false" deletable="false">\n                  <title name="DIR">moveForward</title>\n                  <title name="VALUE">100</title>\n                  <next>\n                    <block type="draw_turn_by_constant" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <title name="VALUE">120</title>\n                    </block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="draw_turn_by_constant">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">???</title>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 7) { -%>\n    <block type="draw_colour" inline="true" x="70" y="70" editable="false" deletable="false">\n      <value name="COLOUR">\n        <block type="colour_random" editable="false" deletable="false"></block>\n      </value>\n      <next>\n        <block type="controls_repeat" editable="false" deletable="false">\n          <title name="TIMES">4</title>\n          <statement name="DO">\n            <block type="draw_move_by_constant" editable="false" deletable="false">\n              <title name="DIR">moveForward</title>\n              <title name="VALUE">20</title>\n              <next>\n                <block type="draw_turn_by_constant" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">90</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </next>\n    </block>\n  <% } else if (level === 8) { -%>\n    <block type="controls_repeat" x="70" y="70" editable="false" deletable="false">\n      <title name="TIMES">10</title>\n      <statement name="DO">\n        <block type="draw_colour" inline="true" editable="false" deletable="false">\n          <value name="COLOUR">\n            <block type="colour_random" editable="false" deletable="false"></block>\n          </value>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">4</title>\n              <statement name="DO">\n                <block type="draw_move_by_constant" editable="false" deletable="false">\n                  <title name="DIR">moveForward</title>\n                  <title name="VALUE">20</title>\n                  <next>\n                    <block type="draw_turn_by_constant" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <title name="VALUE">90</title>\n                    </block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="draw_move_by_constant" editable="false" deletable="false">\n                  <title name="DIR">moveForward</title>\n                  <title name="VALUE">20</title>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 9) { -%>\n    <block type="controls_repeat" x="70" y="70" editable="false" deletable="false">\n      <title name="TIMES">4</title>\n      <statement name="DO">\n        <block type="controls_repeat" editable="false" deletable="false">\n          <title name="TIMES">10</title>\n          <statement name="DO">\n            <block type="draw_colour" inline="true" editable="false" deletable="false">\n              <value name="COLOUR">\n                <block type="colour_random" editable="false" deletable="false"></block>\n              </value>\n              <next>\n                <block type="controls_repeat" editable="false" deletable="false">\n                  <title name="TIMES">4</title>\n                  <statement name="DO">\n                    <block type="draw_move_by_constant" editable="false" deletable="false">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                      <next>\n                        <block type="draw_turn_by_constant" editable="false" deletable="false">\n                          <title name="DIR">turnRight</title>\n                          <title name="VALUE">90</title>\n                        </block>\n                      </next>\n                    </block>\n                  </statement>\n                  <next>\n                    <block type="draw_move_by_constant" editable="false" deletable="false">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </statement>\n          <next>\n            <block type="draw_turn_by_constant">\n              <title name="DIR">turnRight</title>\n              <title name="VALUE">???</title>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 10) { -%>\n    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">???</title>\n      <statement name="DO">\n        <block type="controls_repeat" editable="false" deletable="false">\n          <title name="TIMES">10</title>\n          <statement name="DO">\n            <block type="draw_colour" inline="true" editable="false" deletable="false">\n              <value name="COLOUR">\n                <block type="colour_random" editable="false" deletable="false"></block>\n              </value>\n              <next>\n                <block type="controls_repeat" editable="false" deletable="false">\n                  <title name="TIMES">4</title>\n                  <statement name="DO">\n                    <block type="draw_move_by_constant" editable="false" deletable="false">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                      <next>\n                        <block type="draw_turn_by_constant" editable="false" deletable="false">\n                          <title name="DIR">turnRight</title>\n                          <title name="VALUE">90</title>\n                        </block>\n                      </next>\n                    </block>\n                  </statement>\n                  <next>\n                    <block type="draw_move_by_constant" editable="false" deletable="false">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </statement>\n          <next>\n            <block type="draw_turn_by_constant" editable="false" deletable="false">\n              <title name="DIR">turnRight</title>\n              <title name="VALUE">80</title>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 11) { -%>\n    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">???</title>\n      <statement name="DO">\n        <block type="controls_repeat">\n          <title name="TIMES">10</title>\n          <statement name="DO">\n            <block type="draw_colour" inline="true">\n              <value name="COLOUR">\n                <block type="colour_random"></block>\n              </value>\n              <next>\n                <block type="controls_repeat">\n                  <title name="TIMES">4</title>\n                  <statement name="DO">\n                    <block type="draw_move_by_constant">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                      <next>\n                        <block type="draw_turn_by_constant">\n                          <title name="DIR">turnRight</title>\n                          <title name="VALUE">90</title>\n                        </block>\n                      </next>\n                    </block>\n                  </statement>\n                  <next>\n                    <block type="draw_move_by_constant">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </statement>\n          <next>\n            <block type="draw_turn_by_constant">\n              <title name="DIR">turnRight</title>\n              <title name="VALUE">???</title>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } -%>\n<% } else if (page === 5) { -%>\n  <% if (level === 1) { -%>\n    <block type="controls_for_counter" inline="true" x="70" y="70">\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">200</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="draw_colour" inline="true">\n          <value name="COLOUR">\n            <block type="colour_random"></block>\n          </value>\n          <next>\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get">\n                  <title name="VAR"><%= msg.loopVariable() %></title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">90</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 2) { -%>\n    <block type="controls_for_counter" inline="true" x="70" y="70">\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">300</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="draw_colour" inline="true">\n          <value name="COLOUR">\n            <block type="colour_random"></block>\n          </value>\n          <next>\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get">\n                  <title name="VAR"><%= msg.loopVariable() %></title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">121</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 3) { -%>\n    <block type="controls_for_counter" inline="true" x="70" y="70">\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">300</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="draw_colour" inline="true">\n          <value name="COLOUR">\n            <block type="colour_random"></block>\n          </value>\n          <next>\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get">\n                  <title name="VAR"><%= msg.loopVariable() %></title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">134</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 4) { -%>\n    <block type="controls_repeat" x="70" y="20">\n      <title name="TIMES">10</title>\n      <statement name="DO">\n        <block type="draw_colour" inline="true">\n          <value name="COLOUR">\n            <block type="colour_random"></block>\n          </value>\n          <next>\n            <block type="procedures_callnoreturn" inline="false">\n              <mutation name="<%= msg.drawACircle() %>">\n                <arg name="<%= msg.step() %>"></arg>\n              </mutation>\n              <value name="ARG0">\n                <block type="math_number">\n                  <title name="NUM">6</title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">36</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n    <block type="procedures_defnoreturn" x="70" y="270">\n      <mutation>\n        <arg name="<%= msg.step() %>"></arg>\n      </mutation>\n      <title name="NAME"><%= msg.drawACircle() %></title>\n      <statement name="STACK">\n        <block type="controls_repeat">\n          <title name="TIMES">60</title>\n          <statement name="DO">\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get">\n                  <title name="VAR"><%= msg.step() %></title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">6</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 5) { -%>\n    <block type="controls_for_counter" inline="true" x="70" y="20">\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">4</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">8</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">4</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="controls_repeat">\n          <title name="TIMES">10</title>\n          <statement name="DO">\n            <block type="draw_colour" inline="true">\n              <value name="COLOUR">\n                <block type="colour_random"></block>\n              </value>\n              <next>\n                <block type="procedures_callnoreturn" inline="false">\n                  <mutation name="<%= msg.drawACircle() %>">\n                    <arg name="<%= msg.step() %>"></arg>\n                  </mutation>\n                  <value name="ARG0">\n                    <block type="variables_get">\n                      <title name="VAR"><%= msg.loopVariable() %></title>\n                    </block>\n                  </value>\n                  <next>\n                    <block type="draw_turn" inline="true">\n                      <title name="DIR">turnRight</title>\n                      <value name="VALUE">\n                        <block type="math_number">\n                          <title name="NUM">36</title>\n                        </block>\n                      </value>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n    <block type="procedures_defnoreturn" x="70" y="320">\n      <mutation>\n        <arg name="<%= msg.step() %>"></arg>\n      </mutation>\n      <title name="NAME"><%= msg.drawACircle() %></title>\n      <statement name="STACK">\n        <block type="controls_repeat">\n          <title name="TIMES">60</title>\n          <statement name="DO">\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get">\n                  <title name="VAR"><%= msg.step() %></title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">6</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 6) { -%>\n    <block type="procedures_callnoreturn" inline="false" x="70" y="20">\n      <mutation name="<%= msg.drawATree() %>">\n        <arg name="<%= msg.depth() %>"></arg>\n        <arg name="<%= msg.branches() %>"></arg>\n      </mutation>\n      <value name="ARG0">\n        <block type="math_number">\n          <title name="NUM">9</title>\n        </block>\n      </value>\n      <value name="ARG1">\n        <block type="math_number">\n          <title name="NUM">2</title>\n        </block>\n      </value>\n    </block>\n    <block type="procedures_defnoreturn" x="70" y="190">\n      <mutation>\n        <arg name="<%= msg.depth() %>"></arg>\n        <arg name="<%= msg.branches() %>"></arg>\n      </mutation>\n      <title name="NAME"><%= msg.drawATree() %></title>\n      <statement name="STACK">\n        <block type="controls_if" inline="false">\n          <value name="IF0">\n            <block type="logic_compare" inline="true">\n              <title name="OP">GT</title>\n              <value name="A">\n                <block type="variables_get">\n                  <title name="VAR"><%= msg.depth() %></title>\n                </block>\n              </value>\n              <value name="B">\n                <block type="math_number">\n                  <title name="NUM">0</title>\n                </block>\n              </value>\n            </block>\n          </value>\n          <statement name="DO0">\n            <block type="draw_colour" inline="true">\n              <value name="COLOUR">\n                <block type="colour_random"></block>\n              </value>\n              <next>\n                <block type="draw_pen">\n                  <title name="PEN">penDown</title>\n                  <next>\n                    <block type="draw_move" inline="true">\n                      <title name="DIR">moveForward</title>\n                      <value name="VALUE">\n                        <block type="math_arithmetic" inline="true">\n                          <title name="OP">MULTIPLY</title>\n                          <value name="A">\n                            <block type="math_number">\n                              <title name="NUM">7</title>\n                            </block>\n                          </value>\n                          <value name="B">\n                            <block type="variables_get">\n                              <title name="VAR"><%= msg.depth() %></title>\n                            </block>\n                          </value>\n                        </block>\n                      </value>\n                      <next>\n                        <block type="draw_turn" inline="true">\n                          <title name="DIR">turnLeft</title>\n                          <value name="VALUE">\n                            <block type="math_number">\n                              <title name="NUM">130</title>\n                            </block>\n                          </value>\n                          <next>\n                            <block type="controls_repeat_ext" inline="true">\n                              <value name="TIMES">\n                                <block type="variables_get">\n                                  <title name="VAR"><%= msg.branches() %></title>\n                                </block>\n                              </value>\n                              <statement name="DO">\n                                <block type="draw_turn" inline="true">\n                                  <title name="DIR">turnRight</title>\n                                  <value name="VALUE">\n                                    <block type="math_arithmetic" inline="true">\n                                      <title name="OP">DIVIDE</title>\n                                      <value name="A">\n                                        <block type="math_number">\n                                          <title name="NUM">180</title>\n                                        </block>\n                                      </value>\n                                      <value name="B">\n                                        <block type="variables_get">\n                                          <title name="VAR"><%= msg.branches() %></title>\n                                        </block>\n                                      </value>\n                                    </block>\n                                  </value>\n                                  <next>\n                                    <block type="procedures_callnoreturn" inline="false">\n                                      <mutation name="<%= msg.drawATree() %>">\n                                        <arg name="<%= msg.depth() %>"></arg>\n                                        <arg name="<%= msg.branches() %>"></arg>\n                                      </mutation>\n                                      <value name="ARG0">\n                                        <block type="math_arithmetic" inline="true">\n                                          <title name="OP">MINUS</title>\n                                          <value name="A">\n                                            <block type="variables_get">\n                                              <title name="VAR"><%= msg.depth() %></title>\n                                            </block>\n                                          </value>\n                                          <value name="B">\n                                            <block type="math_number">\n                                              <title name="NUM">1</title>\n                                            </block>\n                                          </value>\n                                        </block>\n                                      </value>\n                                      <value name="ARG1">\n                                        <block type="variables_get">\n                                          <title name="VAR"><%= msg.branches() %></title>\n                                        </block>\n                                      </value>\n                                    </block>\n                                  </next>\n                                </block>\n                              </statement>\n                              <next>\n                                <block type="draw_turn" inline="true">\n                                  <title name="DIR">turnLeft</title>\n                                  <value name="VALUE">\n                                    <block type="math_number">\n                                      <title name="NUM">50</title>\n                                    </block>\n                                  </value>\n                                  <next>\n                                    <block type="draw_pen">\n                                      <title name="PEN">penUp</title>\n                                      <next>\n                                        <block type="draw_move" inline="true">\n                                          <title name="DIR">moveBackward</title>\n                                          <value name="VALUE">\n                                            <block type="math_arithmetic" inline="true">\n                                              <title name="OP">MULTIPLY</title>\n                                              <value name="A">\n                                                <block type="math_number">\n                                                  <title name="NUM">7</title>\n                                                </block>\n                                              </value>\n                                              <value name="B">\n                                                <block type="variables_get">\n                                                  <title name="VAR"><%= msg.depth() %></title>\n                                                </block>\n                                              </value>\n                                            </block>\n                                          </value>\n                                        </block>\n                                      </next>\n                                    </block>\n                                  </next>\n                                </block>\n                              </next>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  <% } -%>\n<% } -%>\n', __filename = "src/turtle/startBlocks.xml.ejs";
    try {
        var __output = [], __append = __output.push.bind(__output);
        with (locals || {}) {
            var msg = __webpack_require__(1744);
            var polygon = function(options) {
                __line = 15;
                __append('<block type="procedures_defnoreturn" ');
                __line = 16;
                __append(options.modifiers);
                __append(">\n    <mutation>\n      ");
                __line = 18;
                if (options.length === 0) {
                    __append('        <arg name="');
                    __line = 19;
                    __append(escape(msg.lengthParameter()));
                    __append('"></arg>\n      ');
                    __line = 20;
                }
                __append('    </mutation>\n    <title name="NAME">');
                __line = 22;
                __append(escape(options.title));
                __append('</title>\n    <statement name="STACK">\n      <block type="controls_repeat" ');
                __line = 24;
                __append(options.modifiers);
                __append('>\n        <title name="TIMES">');
                __line = 25;
                __append(escape(options.sides));
                __append('</title>\n        <statement name="DO">\n          <block type="draw_move" ');
                __line = 27;
                __append(options.modifiers);
                __append('>\n            <value name="VALUE">\n              ');
                __line = 29;
                if (options.length === 0) {
                    __append('                <block type="variables_get_length" ');
                    __line = 30;
                    __append(options.modifiers);
                    __append("></block>\n              ");
                    __line = 31;
                } else {
                    __append('                <block type="math_number" ');
                    __line = 32;
                    __append(options.modifiers);
                    __append('>\n                  <title name="NUM">');
                    __line = 33;
                    __append(escape(options.length));
                    __append("</title>\n                </block>\n              ");
                    __line = 35;
                }
                __append('            </value>\n            <next>\n              <block type="draw_turn" ');
                __line = 38;
                __append(options.modifiers);
                __append('>\n                <value name="VALUE">\n                  <block type="math_number" ');
                __line = 40;
                __append(options.modifiers);
                __append('>\n                    <title name="NUM">');
                __line = 41;
                __append(escape(360 / options.sides));
                __append("</title>\n                  </block>\n                </value>\n              </block>\n            </next>\n          </block>\n        </statement>\n      </block>\n    </statement>\n  </block>\n");
                __line = 51;
            };
            __append("\n");
            __line = 53;
            var spiral = function(i) {
                __line = 59;
                __append("  ");
                __line = 60;
                if (i <= 60) {
                    __append('    <block type="draw_move" ');
                    __line = 61;
                    if (i === 25) {
                        __append('x="300" y="100"');
                    }
                    __append(' inline="false" editable="false" deletable="false" disabled="true">\n      <title name="DIR">moveForward</title>\n      <value name="VALUE">\n        <block type="math_number" editable="false" deletable="false" disabled="true">\n          <title name="NUM">');
                    __line = 65;
                    __append(escape(i));
                    __append('</title>\n        </block>\n      </value>\n      <next>\n        <block type="draw_turn" inline="false" editable="false" deletable="false" disabled="true">\n          <title name="DIR">turnRight</title>\n          <value name="VALUE">\n            <block type="math_number" editable="false" deletable="false" disabled="true">\n              <title name="NUM">90</title>\n            </block>\n          </value>\n          <next>\n            ');
                    __line = 77;
                    spiral(i + 5);
                    __append("          </next>\n        </block>\n      </next>\n    </block>\n  ");
                    __line = 82;
                }
                __append("\n");
                __line = 83;
            };
            __append("\n");
            __line = 85;
            __line = 90;
            __append("\n");
            __line = 91;
            if (page === 1) {
                __append("  ");
                __line = 92;
                if (level === 1) {
                    __append('    <block type="draw_move_by_constant" x="20" y="20"></block>\n  ');
                    __line = 94;
                } else if (level === 2) {
                    __append('    <block type="draw_colour" inline="true" x="20" y="20">\n      <value name="COLOUR">\n        <block type="colour_picker">\n          <title name="COLOUR">#ff0000</title>\n        </block>\n      </value>\n      <next>\n        <block type="draw_move_by_constant"></block>\n      </next>\n    </block>\n  ');
                    __line = 105;
                } else if (level === 4) {
                    __append('    <block type="controls_repeat" x="20" y="20">\n      <title name="TIMES">3</title>\n      <statement name="DO">\n        <block type="draw_colour" inline="true">\n          <value name="COLOUR">\n            <block type="colour_random"></block>\n          </value>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 116;
                } else if (level === 3 || level === 5 || level === 6) {
                    __append('    <block type="controls_repeat" x="20" y="20">\n      <title name="TIMES">');
                    __line = 118;
                    if (level === 3) {
                        __append("4");
                    } else {
                        __append("3");
                    }
                    __append("</title>\n    </block>\n  ");
                    __line = 120;
                } else if (level === 7) {
                    __append('    <block type="draw_turn_by_constant_restricted" x="20" y="20">\n      <title name="DIR">turnRight</title>\n      <title name="VALUE">90</title>\n    </block>\n  ');
                    __line = 125;
                } else if (level === 8) {
                    __append('    <block id="set-color" type="draw_colour" x="20" y="100">\n      <value name="COLOUR">\n        <block type="colour_random"></block>\n      </value>\n      <next>\n        <block type="draw_move_by_constant">\n          <title name="DIR">moveForward</title>\n          <title name="VALUE">100</title>\n          <next>\n            <block type="draw_move_by_constant">\n              <title name="DIR">moveBackward</title>\n              <title name="VALUE">100</title>\n              <next>\n                <block type="draw_turn_by_constant">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">45</title>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n  ');
                    __line = 149;
                } else if (level === 9) {
                    __append('    <block type="controls_repeat" deletable="false"  x="20" y="20">\n      <title name="TIMES">??</title>\n      <statement name="DO">\n        <block type="draw_move" editable="false" deletable="false">\n          <value name="VALUE">\n            <block type="math_number" editable="false" deletable="false">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <next>\n            <block type="draw_turn" editable="false" deletable="false">\n              <value name="VALUE">\n                <block type="math_number" editable="false" deletable="false">\n                  <title name="NUM">1</title>\n                </block>\n              </value>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 171;
                } else if (level === 10) {
                    __append('    <block type="draw_move_by_constant" x="20" y="20">\n      <title name="DIR">moveForward</title>\n      <title name="VALUE">100</title>\n    </block>\n  ');
                    __line = 176;
                }
                __line = 177;
            } else if (page === 2) {
                __append("  ");
                __line = 178;
                __append("  ");
                __line = 179;
                if (level === 3 || level === 5) {
                    __append("    ");
                    __line = 180;
                    __append('    <block type="draw_a_square" inline="true" x="20" y="20">\n      <value name="VALUE">\n        <block type="math_number">\n          <title name="NUM">');
                    __line = 184;
                    if (level === 3) {
                        __append("100");
                    } else {
                        __append("50");
                    }
                    __append("</title>\n        </block>\n      </value>\n    </block>\n  ");
                    __line = 188;
                } else if (level === 4) {
                    __append("    ");
                    __line = 189;
                    __append('    <block type="controls_repeat" deletable="false"  x="20" y="20">\n      <title name="TIMES">???</title>\n      <statement name="DO">\n        <block id="set-color" type="draw_colour" deletable="false">\n          <value name="COLOUR">\n            <block type="colour_random" deletable="false">\n            </block>\n          </value>\n          <next>\n            <block type="draw_a_square" inline="true" editable="false" deletable="false">\n              <value name="VALUE">\n                <block type="math_number" deletable="false">\n                  <title name="NUM">???</title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" editable="false" deletable="false">\n                  <value name="VALUE">\n                    <block type="math_number" deletable="false">\n                      <title name="NUM">???</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 219;
                } else if (level === 6) {
                    __append('    <block type="controls_for_counter" inline="true" x="20" y="20">\n    <title name="VAR">');
                    __line = 221;
                    __append(escape(msg.loopVariable()));
                    __append('</title>\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">');
                    __line = 224;
                    if (level === 6) {
                        __append("50");
                    } else {
                        __append("10");
                    }
                    __append('</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">');
                    __line = 229;
                    if (level === 6) {
                        __append("90");
                    } else {
                        __append("100");
                    }
                    __append('</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">10</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="draw_a_square" inline="true">\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 242;
                } else if (level === 7) {
                    __append("    ");
                    __line = 243;
                    spiral(25);
                    __append("  ");
                    __line = 244;
                } else if (level === 7.5) {
                    __append('    <block type="draw_a_snowman" x="20" y="20" inline="true">\n      <value name="VALUE">\n        <block type="math_number">\n          <title name="NUM">250</title>\n        </block>\n      </value>\n    </block>\n  ');
                    __line = 252;
                } else if (level === 8 || level === 9) {
                    __append('    <block type="draw_a_snowman" x="20" y="20" inline="true">\n      <value name="VALUE">\n        <block type="math_number">\n          <title name="NUM">150</title>\n        </block>\n      </value>\n    </block>\n  ');
                    __line = 260;
                } else if (level === 10) {
                    __append('    <block id="draw-width" type="draw_width_inline" x="158" y="67">\n      <title name="WIDTH">1</title>\n      <next>\n        <block type="controls_for_counter" inline="true">\n          <value name="FROM">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <value name="TO">\n            <block type="math_number">\n              <title name="NUM">100</title>\n            </block>\n          </value>\n          <value name="BY">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <statement name="DO">\n            <block type="draw_move" inline="false">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get_counter"></block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="false">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">91</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </next>\n    </block>\n  ');
                    __line = 301;
                }
                __line = 302;
            } else if (page === 3) {
                __append("  ");
                __line = 303;
                __append("  ");
                __line = 304;
                __append(polygon({
                    title: msg.drawASquare(),
                    modifiers: (level === 8 ? "" : 'x="220" y="40"') + ' editable="false" deletable="false"',
                    sides: 4,
                    length: level >= 6 ? 0 : 100
                }));
                __line = 309;
                __append("  ");
                __line = 310;
                if (level === 1) {
                    __append("    ");
                    __line = 311;
                    __append("    ");
                    __line = 312;
                    __append(polygon({
                        title: msg.drawACircle(),
                        modifiers: 'x="220" y="250" editable="false" deletable="false"',
                        sides: 360,
                        length: 1
                    }));
                    __line = 317;
                    __append("  ");
                    __line = 318;
                }
                __append("  ");
                __line = 319;
                if (level === 2) {
                    __append('    <block type="procedures_defnoreturn" x="220" y="250">\n      <title name="NAME">');
                    __line = 321;
                    __append(escape(msg.drawATriangle()));
                    __append("</title>\n    </block>\n  ");
                    __line = 323;
                } else if (level >= 3) {
                    __append("    ");
                    __line = 324;
                    __append("    ");
                    __line = 325;
                    __append(polygon({
                        title: msg.drawATriangle(),
                        modifiers: (level === 8 ? "" : 'x="220" y="250"') + (level === 6 ? "" : ' editable="false" deletable="false"'),
                        sides: 3,
                        length: level >= 7 ? 0 : 100
                    }));
                    __line = 330;
                    __append("  ");
                    __line = 331;
                }
                __append("  ");
                __line = 332;
                if (level === 8) {
                    __append('    <block type="procedures_callnoreturn" inline="false">\n      <mutation name="');
                    __line = 334;
                    __append(escape(msg.drawAHouse()));
                    __append('">\n        <arg name="');
                    __line = 335;
                    __append(escape(msg.lengthParameter()));
                    __append('"></arg>\n      </mutation>\n        <value name="ARG0">\n          <block type="math_number">\n            <title name="NUM">100</title>\n          </block>\n        </value>\n    </block>\n  ');
                    __line = 343;
                }
                __append("  ");
                __line = 344;
                if (level === 7 || level === 8) {
                    __append("    ");
                    __line = 345;
                    __append('    <block type="procedures_defnoreturn" ');
                    __line = 346;
                    if (level === 7) {
                        __append('x="220" y="460"');
                    }
                    __append(">\n      <mutation>\n        ");
                    __line = 348;
                    if (level === 8) {
                        __append('<arg name="');
                        __append(escape(msg.lengthParameter()));
                        __append('"></arg>');
                    }
                    __append('      </mutation>\n      <title name="NAME">');
                    __line = 350;
                    __append(escape(msg.drawAHouse()));
                    __append('</title>\n      <statement name="STACK">\n        <block type="procedures_callnoreturn" inline="false">\n          <mutation name="');
                    __line = 353;
                    __append(escape(msg.drawASquare()));
                    __append('">\n            <arg name="');
                    __line = 354;
                    __append(escape(msg.lengthParameter()));
                    __append('"/>\n          </mutation>\n          <value name="ARG0">\n            ');
                    __line = 357;
                    if (level === 8) {
                        __append('              <block type="variables_get">\n                <title name="VAR">');
                        __line = 359;
                        __append(escape(msg.lengthParameter()));
                        __append("</title>\n              </block>\n            ");
                        __line = 361;
                    } else {
                        __append('              <block type="math_number">\n                <title name="NUM">100</title>\n              </block>\n            ');
                        __line = 365;
                    }
                    __append('          </value>\n          <next>\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                ');
                    __line = 371;
                    if (level === 8) {
                        __append('                  <block type="variables_get">\n                    <title name="VAR">');
                        __line = 373;
                        __append(escape(msg.lengthParameter()));
                        __append("</title>\n                  </block>\n                ");
                        __line = 375;
                    } else {
                        __append('                  <block type="math_number">\n                    <title name="NUM">100</title>\n                  </block>\n                ');
                        __line = 379;
                    }
                    __append('              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">30</title>\n                    </block>\n                  </value>\n                  <next>\n                    <block type="procedures_callnoreturn" inline="false">\n                      <mutation name="');
                    __line = 391;
                    __append(escape(msg.drawATriangle()));
                    __append('">\n                        <arg name="');
                    __line = 392;
                    __append(escape(msg.lengthParameter()));
                    __append('"></arg>\n                      </mutation>\n                      <value name="ARG0">\n                        ');
                    __line = 395;
                    if (level === 8) {
                        __append('                          <block type="variables_get">\n                            <title name="VAR">');
                        __line = 397;
                        __append(escape(msg.lengthParameter()));
                        __append("</title>\n                          </block>\n                        ");
                        __line = 399;
                    } else {
                        __append('                          <block type="math_number">\n                            <title name="NUM">100</title>\n                          </block>\n                        ');
                        __line = 403;
                    }
                    __append("                      </value>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ");
                    __line = 414;
                }
                __line = 415;
            } else if (page === 4) {
                __append("  ");
                __line = 416;
                if (level === 2) {
                    __append('    <block type="draw_colour" inline="true" x="70" y="70" editable="false" deletable="false" movable="true">\n      <value name="COLOUR">\n        <block type="colour_random" editable="false" deletable="false" movable="true"></block>\n      </value>\n      <next>\n        <block type="controls_repeat" editable="false" deletable="false" movable="true">\n          <title name="TIMES">3</title>\n          <statement name="DO">\n            <block type="draw_move_by_constant" editable="false" deletable="false" movable="true">\n              <title name="DIR">moveForward</title>\n              <title name="VALUE">100</title>\n              <next>\n                <block type="draw_turn_by_constant" editable="false" deletable="false" movable="true">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">120</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n          <next>\n            <block type="draw_colour" inline="true" x="70" y="230" editable="false" deletable="false" movable="true">\n              <value name="COLOUR">\n                <block type="colour_random" editable="false" deletable="false" movable="true"></block>\n              </value>\n              <next>\n                <block type="controls_repeat" editable="false" deletable="false" movable="true">\n                  <title name="TIMES">3</title>\n                  <statement name="DO">\n                    <block type="draw_move_by_constant" editable="false" deletable="false" movable="true">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">100</title>\n                      <next>\n                        <block type="draw_turn_by_constant" editable="false" deletable="false" movable="true">\n                          <title name="DIR">turnRight</title>\n                          <title name="VALUE">120</title>\n                        </block>\n                      </next>\n                    </block>\n                  </statement>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n  ');
                    __line = 463;
                } else if (level === 3) {
                    __append('    <block type="draw_colour" inline="true" x="70" y="70" editable="false" deletable="false">\n      <value name="COLOUR">\n        <block type="colour_random" editable="false" deletable="false"></block>\n      </value>\n      <next>\n        <block type="controls_repeat" editable="false" deletable="false">\n          <title name="TIMES">3</title>\n          <statement name="DO">\n            <block type="draw_move_by_constant" editable="false" deletable="false">\n              <title name="DIR">moveForward</title>\n              <title name="VALUE">100</title>\n              <next>\n                <block type="draw_turn_by_constant" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">120</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </next>\n    </block>\n  ');
                    __line = 486;
                } else if (level === 4) {
                    __append('    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">???</title>\n      <statement name="DO">\n        <block type="draw_colour" inline="true" editable="false" deletable="false">\n          <value name="COLOUR">\n            <block type="colour_random" editable="false" deletable="false"></block>\n          </value>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">3</title>\n              <statement name="DO">\n                <block type="draw_move_by_constant" editable="false" deletable="false">\n                  <title name="DIR">moveForward</title>\n                  <title name="VALUE">100</title>\n                  <next>\n                    <block type="draw_turn_by_constant" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <title name="VALUE">120</title>\n                    </block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="draw_turn_by_constant" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">36</title>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 520;
                } else if (level === 5) {
                    __append('    <block type="controls_repeat" x="70" y="70" editable="false" deletable="false">\n      <title name="TIMES">36</title>\n      <statement name="DO">\n        <block type="draw_colour" inline="true" editable="false" deletable="false">\n          <value name="COLOUR">\n            <block type="colour_random" editable="false" deletable="false"></block>\n          </value>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">3</title>\n              <statement name="DO">\n                <block type="draw_move_by_constant" editable="false" deletable="false">\n                  <title name="DIR">moveForward</title>\n                  <title name="VALUE">100</title>\n                  <next>\n                    <block type="draw_turn_by_constant" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <title name="VALUE">120</title>\n                    </block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="draw_turn_by_constant">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">???</title>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 554;
                } else if (level === 7) {
                    __append('    <block type="draw_colour" inline="true" x="70" y="70" editable="false" deletable="false">\n      <value name="COLOUR">\n        <block type="colour_random" editable="false" deletable="false"></block>\n      </value>\n      <next>\n        <block type="controls_repeat" editable="false" deletable="false">\n          <title name="TIMES">4</title>\n          <statement name="DO">\n            <block type="draw_move_by_constant" editable="false" deletable="false">\n              <title name="DIR">moveForward</title>\n              <title name="VALUE">20</title>\n              <next>\n                <block type="draw_turn_by_constant" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <title name="VALUE">90</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </next>\n    </block>\n  ');
                    __line = 577;
                } else if (level === 8) {
                    __append('    <block type="controls_repeat" x="70" y="70" editable="false" deletable="false">\n      <title name="TIMES">10</title>\n      <statement name="DO">\n        <block type="draw_colour" inline="true" editable="false" deletable="false">\n          <value name="COLOUR">\n            <block type="colour_random" editable="false" deletable="false"></block>\n          </value>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">4</title>\n              <statement name="DO">\n                <block type="draw_move_by_constant" editable="false" deletable="false">\n                  <title name="DIR">moveForward</title>\n                  <title name="VALUE">20</title>\n                  <next>\n                    <block type="draw_turn_by_constant" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <title name="VALUE">90</title>\n                    </block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="draw_move_by_constant" editable="false" deletable="false">\n                  <title name="DIR">moveForward</title>\n                  <title name="VALUE">20</title>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 611;
                } else if (level === 9) {
                    __append('    <block type="controls_repeat" x="70" y="70" editable="false" deletable="false">\n      <title name="TIMES">4</title>\n      <statement name="DO">\n        <block type="controls_repeat" editable="false" deletable="false">\n          <title name="TIMES">10</title>\n          <statement name="DO">\n            <block type="draw_colour" inline="true" editable="false" deletable="false">\n              <value name="COLOUR">\n                <block type="colour_random" editable="false" deletable="false"></block>\n              </value>\n              <next>\n                <block type="controls_repeat" editable="false" deletable="false">\n                  <title name="TIMES">4</title>\n                  <statement name="DO">\n                    <block type="draw_move_by_constant" editable="false" deletable="false">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                      <next>\n                        <block type="draw_turn_by_constant" editable="false" deletable="false">\n                          <title name="DIR">turnRight</title>\n                          <title name="VALUE">90</title>\n                        </block>\n                      </next>\n                    </block>\n                  </statement>\n                  <next>\n                    <block type="draw_move_by_constant" editable="false" deletable="false">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </statement>\n          <next>\n            <block type="draw_turn_by_constant">\n              <title name="DIR">turnRight</title>\n              <title name="VALUE">???</title>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 656;
                } else if (level === 10) {
                    __append('    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">???</title>\n      <statement name="DO">\n        <block type="controls_repeat" editable="false" deletable="false">\n          <title name="TIMES">10</title>\n          <statement name="DO">\n            <block type="draw_colour" inline="true" editable="false" deletable="false">\n              <value name="COLOUR">\n                <block type="colour_random" editable="false" deletable="false"></block>\n              </value>\n              <next>\n                <block type="controls_repeat" editable="false" deletable="false">\n                  <title name="TIMES">4</title>\n                  <statement name="DO">\n                    <block type="draw_move_by_constant" editable="false" deletable="false">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                      <next>\n                        <block type="draw_turn_by_constant" editable="false" deletable="false">\n                          <title name="DIR">turnRight</title>\n                          <title name="VALUE">90</title>\n                        </block>\n                      </next>\n                    </block>\n                  </statement>\n                  <next>\n                    <block type="draw_move_by_constant" editable="false" deletable="false">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </statement>\n          <next>\n            <block type="draw_turn_by_constant" editable="false" deletable="false">\n              <title name="DIR">turnRight</title>\n              <title name="VALUE">80</title>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 701;
                } else if (level === 11) {
                    __append('    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">???</title>\n      <statement name="DO">\n        <block type="controls_repeat">\n          <title name="TIMES">10</title>\n          <statement name="DO">\n            <block type="draw_colour" inline="true">\n              <value name="COLOUR">\n                <block type="colour_random"></block>\n              </value>\n              <next>\n                <block type="controls_repeat">\n                  <title name="TIMES">4</title>\n                  <statement name="DO">\n                    <block type="draw_move_by_constant">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                      <next>\n                        <block type="draw_turn_by_constant">\n                          <title name="DIR">turnRight</title>\n                          <title name="VALUE">90</title>\n                        </block>\n                      </next>\n                    </block>\n                  </statement>\n                  <next>\n                    <block type="draw_move_by_constant">\n                      <title name="DIR">moveForward</title>\n                      <title name="VALUE">20</title>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </statement>\n          <next>\n            <block type="draw_turn_by_constant">\n              <title name="DIR">turnRight</title>\n              <title name="VALUE">???</title>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 746;
                }
                __line = 747;
            } else if (page === 5) {
                __append("  ");
                __line = 748;
                if (level === 1) {
                    __append('    <block type="controls_for_counter" inline="true" x="70" y="70">\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">200</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="draw_colour" inline="true">\n          <value name="COLOUR">\n            <block type="colour_random"></block>\n          </value>\n          <next>\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get">\n                  <title name="VAR">');
                    __line = 775;
                    __append(escape(msg.loopVariable()));
                    __append('</title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">90</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 793;
                } else if (level === 2) {
                    __append('    <block type="controls_for_counter" inline="true" x="70" y="70">\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">300</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="draw_colour" inline="true">\n          <value name="COLOUR">\n            <block type="colour_random"></block>\n          </value>\n          <next>\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get">\n                  <title name="VAR">');
                    __line = 820;
                    __append(escape(msg.loopVariable()));
                    __append('</title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">121</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 838;
                } else if (level === 3) {
                    __append('    <block type="controls_for_counter" inline="true" x="70" y="70">\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">300</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="draw_colour" inline="true">\n          <value name="COLOUR">\n            <block type="colour_random"></block>\n          </value>\n          <next>\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get">\n                  <title name="VAR">');
                    __line = 865;
                    __append(escape(msg.loopVariable()));
                    __append('</title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">134</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 883;
                } else if (level === 4) {
                    __append('    <block type="controls_repeat" x="70" y="20">\n      <title name="TIMES">10</title>\n      <statement name="DO">\n        <block type="draw_colour" inline="true">\n          <value name="COLOUR">\n            <block type="colour_random"></block>\n          </value>\n          <next>\n            <block type="procedures_callnoreturn" inline="false">\n              <mutation name="');
                    __line = 893;
                    __append(escape(msg.drawACircle()));
                    __append('">\n                <arg name="');
                    __line = 894;
                    __append(escape(msg.step()));
                    __append('"></arg>\n              </mutation>\n              <value name="ARG0">\n                <block type="math_number">\n                  <title name="NUM">6</title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">36</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n    <block type="procedures_defnoreturn" x="70" y="270">\n      <mutation>\n        <arg name="');
                    __line = 918;
                    __append(escape(msg.step()));
                    __append('"></arg>\n      </mutation>\n      <title name="NAME">');
                    __line = 920;
                    __append(escape(msg.drawACircle()));
                    __append('</title>\n      <statement name="STACK">\n        <block type="controls_repeat">\n          <title name="TIMES">60</title>\n          <statement name="DO">\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get">\n                  <title name="VAR">');
                    __line = 929;
                    __append(escape(msg.step()));
                    __append('</title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">6</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 947;
                } else if (level === 5) {
                    __append('    <block type="controls_for_counter" inline="true" x="70" y="20">\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">4</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">8</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">4</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="controls_repeat">\n          <title name="TIMES">10</title>\n          <statement name="DO">\n            <block type="draw_colour" inline="true">\n              <value name="COLOUR">\n                <block type="colour_random"></block>\n              </value>\n              <next>\n                <block type="procedures_callnoreturn" inline="false">\n                  <mutation name="');
                    __line = 974;
                    __append(escape(msg.drawACircle()));
                    __append('">\n                    <arg name="');
                    __line = 975;
                    __append(escape(msg.step()));
                    __append('"></arg>\n                  </mutation>\n                  <value name="ARG0">\n                    <block type="variables_get">\n                      <title name="VAR">');
                    __line = 979;
                    __append(escape(msg.loopVariable()));
                    __append('</title>\n                    </block>\n                  </value>\n                  <next>\n                    <block type="draw_turn" inline="true">\n                      <title name="DIR">turnRight</title>\n                      <value name="VALUE">\n                        <block type="math_number">\n                          <title name="NUM">36</title>\n                        </block>\n                      </value>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n    <block type="procedures_defnoreturn" x="70" y="320">\n      <mutation>\n        <arg name="');
                    __line = 1001;
                    __append(escape(msg.step()));
                    __append('"></arg>\n      </mutation>\n      <title name="NAME">');
                    __line = 1003;
                    __append(escape(msg.drawACircle()));
                    __append('</title>\n      <statement name="STACK">\n        <block type="controls_repeat">\n          <title name="TIMES">60</title>\n          <statement name="DO">\n            <block type="draw_move" inline="true">\n              <title name="DIR">moveForward</title>\n              <value name="VALUE">\n                <block type="variables_get">\n                  <title name="VAR">');
                    __line = 1012;
                    __append(escape(msg.step()));
                    __append('</title>\n                </block>\n              </value>\n              <next>\n                <block type="draw_turn" inline="true">\n                  <title name="DIR">turnRight</title>\n                  <value name="VALUE">\n                    <block type="math_number">\n                      <title name="NUM">6</title>\n                    </block>\n                  </value>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 1030;
                } else if (level === 6) {
                    __append('    <block type="procedures_callnoreturn" inline="false" x="70" y="20">\n      <mutation name="');
                    __line = 1032;
                    __append(escape(msg.drawATree()));
                    __append('">\n        <arg name="');
                    __line = 1033;
                    __append(escape(msg.depth()));
                    __append('"></arg>\n        <arg name="');
                    __line = 1034;
                    __append(escape(msg.branches()));
                    __append('"></arg>\n      </mutation>\n      <value name="ARG0">\n        <block type="math_number">\n          <title name="NUM">9</title>\n        </block>\n      </value>\n      <value name="ARG1">\n        <block type="math_number">\n          <title name="NUM">2</title>\n        </block>\n      </value>\n    </block>\n    <block type="procedures_defnoreturn" x="70" y="190">\n      <mutation>\n        <arg name="');
                    __line = 1049;
                    __append(escape(msg.depth()));
                    __append('"></arg>\n        <arg name="');
                    __line = 1050;
                    __append(escape(msg.branches()));
                    __append('"></arg>\n      </mutation>\n      <title name="NAME">');
                    __line = 1052;
                    __append(escape(msg.drawATree()));
                    __append('</title>\n      <statement name="STACK">\n        <block type="controls_if" inline="false">\n          <value name="IF0">\n            <block type="logic_compare" inline="true">\n              <title name="OP">GT</title>\n              <value name="A">\n                <block type="variables_get">\n                  <title name="VAR">');
                    __line = 1060;
                    __append(escape(msg.depth()));
                    __append('</title>\n                </block>\n              </value>\n              <value name="B">\n                <block type="math_number">\n                  <title name="NUM">0</title>\n                </block>\n              </value>\n            </block>\n          </value>\n          <statement name="DO0">\n            <block type="draw_colour" inline="true">\n              <value name="COLOUR">\n                <block type="colour_random"></block>\n              </value>\n              <next>\n                <block type="draw_pen">\n                  <title name="PEN">penDown</title>\n                  <next>\n                    <block type="draw_move" inline="true">\n                      <title name="DIR">moveForward</title>\n                      <value name="VALUE">\n                        <block type="math_arithmetic" inline="true">\n                          <title name="OP">MULTIPLY</title>\n                          <value name="A">\n                            <block type="math_number">\n                              <title name="NUM">7</title>\n                            </block>\n                          </value>\n                          <value name="B">\n                            <block type="variables_get">\n                              <title name="VAR">');
                    __line = 1091;
                    __append(escape(msg.depth()));
                    __append('</title>\n                            </block>\n                          </value>\n                        </block>\n                      </value>\n                      <next>\n                        <block type="draw_turn" inline="true">\n                          <title name="DIR">turnLeft</title>\n                          <value name="VALUE">\n                            <block type="math_number">\n                              <title name="NUM">130</title>\n                            </block>\n                          </value>\n                          <next>\n                            <block type="controls_repeat_ext" inline="true">\n                              <value name="TIMES">\n                                <block type="variables_get">\n                                  <title name="VAR">');
                    __line = 1108;
                    __append(escape(msg.branches()));
                    __append('</title>\n                                </block>\n                              </value>\n                              <statement name="DO">\n                                <block type="draw_turn" inline="true">\n                                  <title name="DIR">turnRight</title>\n                                  <value name="VALUE">\n                                    <block type="math_arithmetic" inline="true">\n                                      <title name="OP">DIVIDE</title>\n                                      <value name="A">\n                                        <block type="math_number">\n                                          <title name="NUM">180</title>\n                                        </block>\n                                      </value>\n                                      <value name="B">\n                                        <block type="variables_get">\n                                          <title name="VAR">');
                    __line = 1124;
                    __append(escape(msg.branches()));
                    __append('</title>\n                                        </block>\n                                      </value>\n                                    </block>\n                                  </value>\n                                  <next>\n                                    <block type="procedures_callnoreturn" inline="false">\n                                      <mutation name="');
                    __line = 1131;
                    __append(escape(msg.drawATree()));
                    __append('">\n                                        <arg name="');
                    __line = 1132;
                    __append(escape(msg.depth()));
                    __append('"></arg>\n                                        <arg name="');
                    __line = 1133;
                    __append(escape(msg.branches()));
                    __append('"></arg>\n                                      </mutation>\n                                      <value name="ARG0">\n                                        <block type="math_arithmetic" inline="true">\n                                          <title name="OP">MINUS</title>\n                                          <value name="A">\n                                            <block type="variables_get">\n                                              <title name="VAR">');
                    __line = 1140;
                    __append(escape(msg.depth()));
                    __append('</title>\n                                            </block>\n                                          </value>\n                                          <value name="B">\n                                            <block type="math_number">\n                                              <title name="NUM">1</title>\n                                            </block>\n                                          </value>\n                                        </block>\n                                      </value>\n                                      <value name="ARG1">\n                                        <block type="variables_get">\n                                          <title name="VAR">');
                    __line = 1152;
                    __append(escape(msg.branches()));
                    __append('</title>\n                                        </block>\n                                      </value>\n                                    </block>\n                                  </next>\n                                </block>\n                              </statement>\n                              <next>\n                                <block type="draw_turn" inline="true">\n                                  <title name="DIR">turnLeft</title>\n                                  <value name="VALUE">\n                                    <block type="math_number">\n                                      <title name="NUM">50</title>\n                                    </block>\n                                  </value>\n                                  <next>\n                                    <block type="draw_pen">\n                                      <title name="PEN">penUp</title>\n                                      <next>\n                                        <block type="draw_move" inline="true">\n                                          <title name="DIR">moveBackward</title>\n                                          <value name="VALUE">\n                                            <block type="math_arithmetic" inline="true">\n                                              <title name="OP">MULTIPLY</title>\n                                              <value name="A">\n                                                <block type="math_number">\n                                                  <title name="NUM">7</title>\n                                                </block>\n                                              </value>\n                                              <value name="B">\n                                                <block type="variables_get">\n                                                  <title name="VAR">');
                    __line = 1183;
                    __append(escape(msg.depth()));
                    __append("</title>\n                                                </block>\n                                              </value>\n                                            </block>\n                                          </value>\n                                        </block>\n                                      </next>\n                                    </block>\n                                  </next>\n                                </block>\n                              </next>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  ");
                    __line = 1207;
                }
                __line = 1208;
            }
            __line = 1209;
        }
        return __output.join("");
    } catch (e) {
        rethrow(e, __lines, __filename, __line);
    }
}

/***/ }),

/***/ 3334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Sets BlocklyApp constants that depend on the page and level.
 * This encapsulates many functions used for StudioApp.requiredBlocks_.
 * In the future, some of these may be moved to common.js.
 */

var requiredBlockUtils = __webpack_require__(1756);

// This tests for and creates a draw_a_square block on page 2.
function drawASquare(number) {
  return { test: 'draw_a_square',
    type: 'draw_a_square',
    values: { 'VALUE': requiredBlockUtils.makeMathNumber(number) } };
}

// This tests for and creates a draw_a_snowman block on page 2.
function drawASnowman(number) {
  return { test: 'draw_a_snowman',
    type: 'draw_a_snowman',
    values: { 'VALUE': requiredBlockUtils.makeMathNumber(number) } };
}

// This tests for and creates the limited "move forward" block used on the
// earlier levels of the tutorial.
var MOVE_FORWARD_INLINE = { test: 'moveForward', type: 'draw_move_by_constant' };

// allow move forward or backward, but show forward block if they've done neither
var MOVE_FORWARD_OR_BACKWARD_INLINE = {
  test: function test(block) {
    return block.type === 'draw_move_by_constant';
  },
  type: 'draw_move_by_constant'
};

// This tests for and creates the limited "move forward" block used on the
// earlier levels of the tutorial with the given pixel number.
var moveForwardInline = function moveForwardInline(pixels) {
  return { test: 'moveForward',
    type: 'draw_move_by_constant',
    titles: { 'VALUE': pixels } };
};

// This tests for and creates the limited "move forward" block used on the
// earlier levels of the tutorial.
var MOVE_BACKWARD_INLINE = { test: 'moveBackward',
  type: 'draw_move_by_constant',
  titles: { 'DIR': 'moveBackward' } };

// This tests for a [right] draw_turn_by_constant_restricted block
// and creates the block with the specified/recommended number of degrees as
// its input.  The restricted turn is used on the earlier levels of the
// tutorial.
var turnRightRestricted = function turnRightRestricted(degrees) {
  return { test: 'turnRight(',
    type: 'draw_turn_by_constant_restricted',
    titles: { 'VALUE': degrees } };
};

// This tests for a [left] draw_turn_by_constant_restricted block
// and creates the block with the specified/recommended number of degrees as
// its input.  The restricted turn is used on the earlier levels of the
// tutorial.
var turnLeftRestricted = function turnLeftRestricted(degrees) {
  return { test: 'turnLeft(',
    type: 'draw_turn_by_constant_restricted',
    titles: { 'VALUE': degrees } };
};

// This tests for and creates a [right] draw_turn_by_constant block
// with the specified number of degrees as its input.
var turnRightByConstant = function turnRightByConstant(degrees) {
  return {
    test: function test(block) {
      return block.type === 'draw_turn_by_constant' && (degrees === '???' || Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) === degrees);
    },
    type: 'draw_turn_by_constant',
    titles: { 'VALUE': degrees } };
};

// This tests for and creates a [right] draw_turn block with the specified
// number of degrees as its input.  For the earliest levels, the method
// turnRightRestricted should be used instead.
var turnRight = function turnRight(degrees) {
  return {
    test: function test(block) {
      return block.type === 'draw_turn' && block.getTitleValue('DIR') === 'turnRight';
    },
    type: 'draw_turn',
    titles: { 'DIR': 'turnRight' },
    values: { 'VALUE': requiredBlockUtils.makeMathNumber(degrees) }
  };
};

// This tests for and creates a left draw_turn block with the specified
// number of degrees as its input.  This method is not appropriate for the
// earliest levels of the tutorial, which do not provide draw_turn.
var turnLeft = function turnLeft(degrees) {
  return {
    test: function test(block) {
      return block.type === 'draw_turn' && block.getTitleValue('DIR') === 'turnLeft';
    },
    type: 'draw_turn',
    titles: { 'DIR': 'turnLeft' },
    values: { 'VALUE': requiredBlockUtils.makeMathNumber(degrees) }
  };
};

// This tests for any draw_move block and, if not present, creates
// one with the specified distance.
var move = function move(distance) {
  return { test: function test(block) {
      return block.type === 'draw_move';
    },
    type: 'draw_move',
    values: { 'VALUE': requiredBlockUtils.makeMathNumber(distance) } };
};

// This tests for and creates a draw_turn_by_constant_restricted block.
var drawTurnRestricted = function drawTurnRestricted(degrees) {
  return {
    test: function test(block) {
      return block.type === 'draw_turn_by_constant_restricted';
    },
    type: 'draw_turn_by_constant_restricted',
    titles: { 'VALUE': degrees }
  };
};

// This tests for and creates a draw_turn block.
var drawTurn = function drawTurn() {
  return {
    test: function test(block) {
      return block.type === 'draw_turn';
    },
    type: 'draw_turn',
    values: { 'VALUE': requiredBlockUtils.makeMathNumber('???') }
  };
};

// This tests for and creates a "set colour" block with a colour picker
// as its input.
var SET_COLOUR_PICKER = { test: 'penColour(\'#',
  type: 'draw_colour',
  values: { 'COLOUR': '<block type="colour_picker"></block>' } };

// This tests for and creates a "set colour" block with a random colour
// generator as its input.
var SET_COLOUR_RANDOM = { test: 'penColour(colour_random',
  type: 'draw_colour',
  values: { 'COLOUR': '<block type="colour_random"></block>' } };

/**
 * Creates a required block specification for defining a function with an
 * argument.  Unlike the other functions to create required blocks, this
 * is defined outside of Turtle.setBlocklyAppConstants because it is accessed
 * when checking for a procedure on levels 8-9 of Turtle 3.
 * @param {string} func_name The name of the function.
 * @param {string} arg_name The name of the single argument.
 * @return A required block specification that tests for a call of the
 *     specified function with the specified argument name.  If not present,
 *     this contains the information to create such a block for display.
 */
var defineWithArg = function defineWithArg(func_name, arg_name) {
  return {
    test: function test(block) {
      return block.type === 'procedures_defnoreturn' && block.getTitleValue('NAME') === func_name && block.parameterNames_ && block.parameterNames_.length && block.parameterNames_[0] === arg_name;
    },
    type: 'procedures_defnoreturn',
    titles: { 'NAME': func_name },
    extra: '<mutation><arg name="' + arg_name + '"></arg></mutation>'
  };
};

module.exports = {
  makeMathNumber: requiredBlockUtils.makeMathNumber,
  simpleBlock: requiredBlockUtils.simpleBlock,
  repeat: requiredBlockUtils.repeat,
  drawASquare: drawASquare,
  drawASnowman: drawASnowman,
  MOVE_FORWARD_INLINE: MOVE_FORWARD_INLINE,
  MOVE_FORWARD_OR_BACKWARD_INLINE: MOVE_FORWARD_OR_BACKWARD_INLINE,
  moveForwardInline: moveForwardInline,
  MOVE_BACKWARD_INLINE: MOVE_BACKWARD_INLINE,
  turnLeftRestricted: turnLeftRestricted,
  turnRightRestricted: turnRightRestricted,
  turnRightByConstant: turnRightByConstant,
  turnRight: turnRight,
  turnLeft: turnLeft,
  move: move,
  drawTurnRestricted: drawTurnRestricted,
  drawTurn: drawTurn,
  SET_COLOUR_PICKER: SET_COLOUR_PICKER,
  SET_COLOUR_RANDOM: SET_COLOUR_RANDOM,
  defineWithArg: defineWithArg
};

/***/ })

},[3321]);