webpackJsonp([26],{

/***/ 2751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Load Skin for Jigsaw.
 */

var skinsBase = __webpack_require__(744);

exports.load = function (assetUrl, id) {
  var skin = skinsBase.load(assetUrl, id);

  skin.artist = skin.assetUrl('artist.png');
  skin.blocks = skin.assetUrl('blocks.png');

  skin.apple = skin.assetUrl('apple.png');
  skin.smiley = skin.assetUrl('smiley.png');
  skin.snail = skin.assetUrl('snail.png');
  skin.elephant = skin.assetUrl('elephant.png');
  skin.fish = skin.assetUrl('fish.png');
  skin.doggie = skin.assetUrl('doggie.png');
  skin.tree = skin.assetUrl('tree.png');
  skin.flower = skin.assetUrl('flower.png');
  skin.house = skin.assetUrl('house.png');
  skin.computer = skin.assetUrl('computer.png');

  skin.blank = skin.assetUrl('blank.png');
  skin.smallStaticAvatar = skin.blank;

  // Settings
  skin.background = skin.assetUrl('background.png');

  return skin;
};

/***/ }),

/***/ 3111:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3112);


/***/ }),

/***/ 3112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadJigsaw = __webpack_require__(3113);

var _loadJigsaw2 = _interopRequireDefault(_loadJigsaw);

var _loadApp = __webpack_require__(820);

var _loadApp2 = _interopRequireDefault(_loadApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _loadApp2.default)().then(_loadJigsaw2.default);

/***/ }),

/***/ 3113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadJigsaw;

var _appMain = __webpack_require__(853);

var _appMain2 = _interopRequireDefault(_appMain);

var _jigsaw = __webpack_require__(3114);

var _jigsaw2 = _interopRequireDefault(_jigsaw);

var _blocks = __webpack_require__(2903);

var _blocks2 = _interopRequireDefault(_blocks);

var _levels = __webpack_require__(2904);

var _levels2 = _interopRequireDefault(_levels);

var _skins = __webpack_require__(2751);

var _skins2 = _interopRequireDefault(_skins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Jigsaw = _jigsaw2.default;
if (typeof global !== 'undefined') {
  global.Jigsaw = window.Jigsaw;
}
function loadJigsaw(options) {
  options.skinsModule = _skins2.default;
  options.blocksModule = _blocks2.default;
  (0, _appMain2.default)(_jigsaw2.default, _levels2.default, options);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),

/***/ 3114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _redux = __webpack_require__(237);

var _constants = __webpack_require__(216);

/**
 * Blockly App: Jigsaw
 *
 * Copyright 2013 Code.org
 *
 */

var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(32);
var studioApp = __webpack_require__(597).singleton;
var Provider = __webpack_require__(53).Provider;
var AppView = __webpack_require__(944);
var JigsawVisualizationColumn = __webpack_require__(3115);
var dom = __webpack_require__(594);


/**
 * Create a namespace for the application.
 */
var Jigsaw = module.exports;

var level;
var skin;

studioApp().setCheckForEmptyBlocks(true);

// Never bump neighbors for Jigsaw
Blockly.BUMP_UNCONNECTED = false;

function useLargeNotches() {
  var notchHeight = 8;
  var notchWidthA = 6;
  var notchWidthB = 10;

  Blockly.BlockSvg.NOTCH_PATH_WIDTH = notchWidthA * 2 + notchWidthB;
  Blockly.BlockSvg.NOTCH_WIDTH = 50;

  var notchPathLeft = 'l ' + notchWidthA + ',' + notchHeight + ' ' + notchWidthB + ',0 ' + notchWidthA + ',-' + notchHeight;
  var notchPathRight = 'l ' + '-' + notchWidthA + ',' + notchHeight + ' ' + '-' + notchWidthB + ',0 ' + '-' + notchWidthA + ',-' + notchHeight;
  // Blockly.BlockSvg.NOTCH_PATH_LEFT = 'l 6,4 3,0 6,-4';
  // Blockly.BlockSvg.NOTCH_PATH_RIGHT = 'l -6,4 -3,0 -6,-4';

  var notchHighlightHeight = notchHeight; //4;
  var notchHighlightWidthA = notchWidthA + 0.5; //6.5;
  var notchHighlightWidthB = notchWidthB - 1; //2;

  var notchPathLeftHighlight = 'l ' + notchHighlightWidthA + ',' + notchHighlightHeight + ' ' + notchHighlightWidthB + ',0 ' + notchHighlightWidthA + ',-' + notchHighlightHeight;
  // Blockly.BlockSvg.NOTCH_PATH_LEFT_HIGHLIGHT = 'l 6.5,4 2,0 6.5,-4';

  Blockly.Connection.NOTCH_PATHS_OVERRIDE = {
    left: notchPathLeft,
    leftHighlight: notchPathLeftHighlight,
    right: notchPathRight
  };
}

// Default Scalings
Jigsaw.scale = {
  'snapRadius': 1,
  'stepSpeed': 33
};

var loadLevel = function loadLevel() {
  // Load maps.
  // Override scalars.
  for (var key in level.scale) {
    Jigsaw.scale[key] = level.scale[key];
  }

  Jigsaw.MAZE_WIDTH = 0;
  Jigsaw.MAZE_HEIGHT = 0;

  Jigsaw.block1Clicked = false;
};

var drawMap = function drawMap() {
  // Hide the left column and the resize bar.
  var visualizationColumn = document.getElementById('visualizationColumn');
  visualizationColumn.style.display = 'none';

  if (level.ghost) {
    var blockCanvas = Blockly.mainBlockSpace.getCanvas();
    Blockly.createSvgElement('rect', {
      fill: "url(#pat_" + level.id + "A)",
      "fill-opacity": "0.2",
      width: level.image.width,
      height: level.image.height,
      transform: "translate(" + level.ghost.x + ", " + level.ghost.y + ")"
    }, blockCanvas, {
      beforeExisting: true
    });
  }
};

/**
 * Initialize Blockly and the Jigsaw app.  Called on page load.
 */
Jigsaw.init = function (config) {
  // Jigsaw.clearEventHandlersKillTickLoop();
  skin = config.skin;
  level = config.level;
  loadLevel();

  if (level.largeNotches) {
    useLargeNotches();
  }
  Blockly.SNAP_RADIUS = level.snapRadius || 90;

  config.loadAudio = function () {
    studioApp().loadAudio(skin.winSound, 'win');
    studioApp().loadAudio(skin.startSound, 'start');
    studioApp().loadAudio(skin.failureSound, 'failure');
  };

  config.afterInject = function () {
    /**
     * The richness of block colours, regardless of the hue.
     * MOOC blocks should be brighter (target audience is younger).
     * Must be in the range of 0 (inclusive) to 1 (exclusive).
     * Blockly's default is 0.45.
     */
    Blockly.HSV_SATURATION = 0.6;

    drawMap();
  };

  // only have trashcan for levels with toolbox
  config.trashcan = !!level.toolbox;
  config.scrollbars = false;

  config.enableShowCode = false;
  config.enableShowBlockCount = false;

  var onMount = function onMount() {
    studioApp().init(config);

    document.getElementById('runButton').style.display = 'none';
    Jigsaw.successListener = Blockly.mainBlockSpaceEditor.addChangeListener(function (evt) {
      checkForSuccess();
    });

    // Only used by level1, in which the success criteria is clicking on the block
    var block1 = document.querySelectorAll("[block-id='1']")[0];
    if (block1) {
      dom.addMouseDownTouchEvent(block1, function () {
        Jigsaw.block1Clicked = true;
      });
    }
  };

  studioApp().setPageConstants(config, {
    noVisualization: true
  });

  ReactDOM.render(React.createElement(
    Provider,
    { store: (0, _redux.getStore)() },
    React.createElement(AppView, {
      visualizationColumn: React.createElement(JigsawVisualizationColumn, null),
      onMount: onMount
    })
  ), document.getElementById(config.containerId));
};

function checkForSuccess() {
  var success = level.goal.successCondition();
  if (success) {
    Blockly.removeChangeListener(Jigsaw.successListener);

    Jigsaw.result = _constants.ResultType.SUCCESS;
    Jigsaw.onPuzzleComplete();
  }
}

/**
 * App specific displayFeedback function that calls into
 * studioApp().displayFeedback when appropriate
 */
var displayFeedback = function displayFeedback() {
  if (!Jigsaw.waitingForReport) {
    studioApp().displayFeedback({
      feedbackType: Jigsaw.testResults,
      response: Jigsaw.response,
      level: level,
      hideTryAgain: true
    });
  }
};

/**
 * Function to be called when the service report call is complete
 * @param {MilestoneResponse} response - JSON response (if available)
 */
Jigsaw.onReportComplete = function (response) {
  Jigsaw.response = response;
  Jigsaw.waitingForReport = false;
  studioApp().onReportComplete(response);
  displayFeedback();
};

/**
 * Execute the user's code.  Heaven help us...
 */
Jigsaw.execute = function () {
  // execute is a no-op for jigsaw
};

Jigsaw.onPuzzleComplete = function () {

  // If we know they succeeded, mark levelComplete true
  // Note that we have not yet animated the succesful run
  var levelComplete = Jigsaw.result === _constants.ResultType.SUCCESS;

  Jigsaw.testResults = studioApp().getTestResults(levelComplete, {
    allowTopBlocks: true
  });

  if (Jigsaw.testResults >= _constants.TestResults.FREE_PLAY) {
    studioApp().playAudio('win');
  } else {
    studioApp().playAudio('failure');
  }

  var xml = Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace);
  var textBlocks = Blockly.Xml.domToText(xml);

  Jigsaw.waitingForReport = true;

  // Report result to server.
  studioApp().report({
    app: 'Jigsaw',
    level: level.id,
    result: Jigsaw.result === _constants.ResultType.SUCCESS,
    testResult: Jigsaw.testResults,
    program: encodeURIComponent(textBlocks),
    onComplete: Jigsaw.onReportComplete
  });
};

/***/ }),

/***/ 3115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ProtectedVisualizationDiv = __webpack_require__(788);

var _ProtectedVisualizationDiv2 = _interopRequireDefault(_ProtectedVisualizationDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameButtons = __webpack_require__(819).default;
var BelowVisualization = __webpack_require__(824);


/**
 * For jigsaw, this all ends up being hidden, but StudioApp still has expectation
 * about certain elements existing
 */
var JigsawVisualizationColumn = function JigsawVisualizationColumn() {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_ProtectedVisualizationDiv2.default, null),
    _react2.default.createElement(GameButtons, null),
    _react2.default.createElement(BelowVisualization, null)
  );
};

module.exports = JigsawVisualizationColumn;

/***/ })

},[3111]);