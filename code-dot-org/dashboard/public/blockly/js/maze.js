webpackJsonp([11],{

/***/ 1738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResultsHandler = function () {
  function ResultsHandler(maze, config) {
    _classCallCheck(this, ResultsHandler);

    this.maze_ = maze;
    this.skin_ = config.skin;
    this.level_ = config.level;

    /**
     * ExecutionInfo instance, assigned at runtime
     * @see Maze.prepareForExecution_
     */
    this.executionInfo = undefined;
  }

  /**
   * Did the user successfully complete this level?
   * @returns {Boolean} success
   */


  ResultsHandler.prototype.succeeded = function succeeded() {
    if (this.maze_.subtype.finish) {
      return this.maze_.pegmanX === this.maze_.subtype.finish.x && this.maze_.pegmanY === this.maze_.subtype.finish.y;
    }
  };

  ResultsHandler.prototype.shouldCheckSuccessOnMove = function shouldCheckSuccessOnMove() {
    return true;
  };

  ResultsHandler.prototype.hasMessage = function hasMessage(testResults) {
    return false;
  };

  /**
   * Get any app-specific message, based on the termination value, or return
   * null if none applies.
   * @param {Number} terminationValue - from Maze.executionInfo
   * @returns {(String|null)} message
   */


  ResultsHandler.prototype.getMessage = function getMessage(terminationValue) {
    return null;
  };

  /**
   * Get the test results based on the termination value.  If there is no
   * app-specific failure, this returns StudioApp.getTestResults().
   * @param {Number} terminationValue - from Maze.executionInfo
   * @returns {Number} testResult
   */


  ResultsHandler.prototype.getTestResults = function getTestResults(terminationValue) {
    return this.maze_.getTestResults(false);
  };

  /**
   * Set the termination results to something app-specific, so that getMessage
   * and getTestResults can return custom values based on the specifc way in
   * which we terminated
   * @modifies Maze.executionInfo.terminationValue
   */


  ResultsHandler.prototype.terminateWithAppSpecificValue = function terminateWithAppSpecificValue() {}
  // noop; overridable


  /**
   * Called after user's code has finished executing. Gives us a chance to
   * terminate with app-specific values, such as unchecked cloud/purple flowers.
   * @see terminateWithAppSpecificValue
   */
  ;

  ResultsHandler.prototype.onExecutionFinish = function onExecutionFinish() {
    var executionInfo = this.executionInfo;
    if (executionInfo.isTerminated()) {
      return;
    }
    if (this.succeeded()) {
      return;
    }

    this.terminateWithAppSpecificValue();
  };

  /**
   * Used by StudioApp.displayFeedback to allow subtypes to conditionally
   * prevent the feedback dialog from showing up and the page from automatically
   * advancing to the next level.
   *
   * @param {Number} feedbackType
   * @return {boolean}
   */


  ResultsHandler.prototype.shouldPreventFeedbackDialog = function shouldPreventFeedbackDialog(feedbackType) {
    return false;
  };

  return ResultsHandler;
}();

exports.default = ResultsHandler;
module.exports = exports["default"];

/***/ }),

/***/ 2134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPegmanYForRow = getPegmanYForRow;
exports.displayPegman = displayPegman;
exports.default = drawMap;

var _constants = __webpack_require__(216);

var _tiles = __webpack_require__(773);

var _tiles2 = _interopRequireDefault(_tiles);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SquareType = _tiles2.default.SquareType;

// Height and width of the goal and obstacles.
var MARKER_HEIGHT = 43;
var MARKER_WIDTH = 50;

/**
 * Calculate the y coordinates for pegman sprite.
 */
function getPegmanYForRow(skin, mazeRow) {
  var squareSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;

  return Math.floor(squareSize * (mazeRow + 0.5) - skin.pegmanHeight / 2 + skin.pegmanYOffset);
}

function displayPegman(skin, pegmanIcon, clipRect, x, y, frame) {
  var squareSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 50;

  var xOffset = skin.pegmanXOffset || 0;
  pegmanIcon.setAttribute('x', x * squareSize - frame * skin.pegmanWidth + 1 + xOffset);
  pegmanIcon.setAttribute('y', getPegmanYForRow(skin, y));

  clipRect.setAttribute('x', x * squareSize + 1 + xOffset);
  clipRect.setAttribute('y', pegmanIcon.getAttribute('y'));
}

function drawMap(svg, skin, subtype, map) {
  var squareSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 50;

  var MAZE_WIDTH = map.COLS * squareSize;
  var MAZE_HEIGHT = map.ROWS * squareSize;

  var x, y, tile;

  // Draw the outer square.
  var square = document.createElementNS(_constants.SVG_NS, 'rect');
  square.setAttribute('width', MAZE_WIDTH);
  square.setAttribute('height', MAZE_HEIGHT);
  square.setAttribute('fill', '#F1EEE7');
  square.setAttribute('stroke-width', 1);
  square.setAttribute('stroke', '#CCB');
  svg.appendChild(square);

  if (skin.background) {
    tile = document.createElementNS(_constants.SVG_NS, 'image');
    tile.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.background);
    tile.setAttribute('height', MAZE_HEIGHT);
    tile.setAttribute('width', MAZE_WIDTH);
    tile.setAttribute('x', 0);
    tile.setAttribute('y', 0);
    svg.appendChild(tile);
  }

  subtype.drawMapTiles(svg);

  // Add hint path.
  var hintPath = document.createElementNS(_constants.SVG_NS, 'path');
  hintPath.setAttribute('id', 'hintPath');
  hintPath.setAttribute('stroke', '#c00');
  hintPath.setAttribute('stroke-width', '5');
  hintPath.setAttribute('fill', 'none');
  hintPath.setAttribute('stroke-linecap', 'round');
  hintPath.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(hintPath);

  if (subtype.start) {
    // Pegman's clipPath element, whose (x, y) is reset by Maze.displayPegman
    var pegmanClip = document.createElementNS(_constants.SVG_NS, 'clipPath');
    var pegmanClipId = 'pegmanClipPath-' + (0, _utils.createUuid)();
    pegmanClip.setAttribute('id', pegmanClipId);
    var clipRect = document.createElementNS(_constants.SVG_NS, 'rect');
    clipRect.setAttribute('id', 'clipRect');
    clipRect.setAttribute('width', skin.pegmanWidth);
    clipRect.setAttribute('height', skin.pegmanHeight);
    pegmanClip.appendChild(clipRect);
    svg.appendChild(pegmanClip);

    // Add pegman.
    var pegmanIcon = document.createElementNS(_constants.SVG_NS, 'image');
    pegmanIcon.setAttribute('id', 'pegman');
    pegmanIcon.setAttribute('class', 'pegman-location');
    pegmanIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.avatar);
    pegmanIcon.setAttribute('height', skin.pegmanHeight);
    pegmanIcon.setAttribute('width', skin.pegmanWidth * 21); // 49 * 21 = 1029
    pegmanIcon.setAttribute('clip-path', 'url(#' + pegmanClipId + ')');
    svg.appendChild(pegmanIcon);

    displayPegman(skin, pegmanIcon, clipRect, subtype.start.x, subtype.start.y, _tiles2.default.directionToFrame(subtype.startDirection));

    var pegmanFadeoutAnimation = document.createElementNS(_constants.SVG_NS, 'animate');
    pegmanFadeoutAnimation.setAttribute('id', 'pegmanFadeoutAnimation');
    pegmanFadeoutAnimation.setAttribute('attributeType', 'CSS');
    pegmanFadeoutAnimation.setAttribute('attributeName', 'opacity');
    pegmanFadeoutAnimation.setAttribute('from', 1);
    pegmanFadeoutAnimation.setAttribute('to', 0);
    pegmanFadeoutAnimation.setAttribute('dur', '1s');
    pegmanFadeoutAnimation.setAttribute('begin', 'indefinite');
    pegmanIcon.appendChild(pegmanFadeoutAnimation);
  }

  if (subtype.finish && skin.goalIdle) {
    // Add finish marker.
    var finishMarker = document.createElementNS(_constants.SVG_NS, 'image');
    finishMarker.setAttribute('id', 'finish');
    finishMarker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.goalIdle);
    finishMarker.setAttribute('height', MARKER_HEIGHT);
    finishMarker.setAttribute('width', MARKER_WIDTH);
    svg.appendChild(finishMarker);

    // Move the finish icon into position.
    finishMarker.setAttribute('x', squareSize * (subtype.finish.x + 0.5) - finishMarker.getAttribute('width') / 2);
    finishMarker.setAttribute('y', squareSize * (subtype.finish.y + 0.9) - finishMarker.getAttribute('height'));
    finishMarker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.goalIdle);
    finishMarker.setAttribute('visibility', 'visible');
  }

  // Add obstacles.
  if (skin.obstacleIdle) {
    var obsId = 0;
    for (y = 0; y < map.ROWS; y++) {
      for (x = 0; x < map.COLS; x++) {
        if (map.getTile(y, x) === SquareType.OBSTACLE) {
          var obsIcon = document.createElementNS(_constants.SVG_NS, 'image');
          obsIcon.setAttribute('id', 'obstacle' + obsId);
          obsIcon.setAttribute('height', MARKER_HEIGHT * skin.obstacleScale);
          obsIcon.setAttribute('width', MARKER_WIDTH * skin.obstacleScale);
          obsIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.obstacleIdle);
          obsIcon.setAttribute('x', squareSize * (x + 0.5) - obsIcon.getAttribute('width') / 2);
          obsIcon.setAttribute('y', squareSize * (y + 0.9) - obsIcon.getAttribute('height'));
          svg.appendChild(obsIcon);
        }
        ++obsId;
      }
    }
  }
}

/***/ }),

/***/ 2752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function MazeMap(grid) {
    _classCallCheck(this, MazeMap);

    this.grid_ = grid;

    this.ROWS = this.grid_.length;
    this.COLS = this.grid_[0].length;

    this.staticGrids = this.constructor.getAllStaticGrids(this.grid_);

    this.currentStaticGrid = this.staticGrids[0];
  }

  /**
   * Clones the given grid of Cells by calling Cell.clone
   * @param {Cell[][]} grid
   * @return {Cell[][]} grid
   */


  MazeMap.cloneGrid = function cloneGrid(grid) {
    return grid.map(function (row) {
      return row.map(function (cell) {
        return cell.clone();
      });
    });
  };

  /**
   * Given a single grid of Cells, some of which may be "variable"
   * cells, return a list of grids of non-variable Cells representing
   * all possible variable combinations.
   * @param {Cell[][]} variableGrid
   * @return {Cell[][][]} grids
   */


  MazeMap.getAllStaticGrids = function getAllStaticGrids(variableGrid) {
    var _this = this;

    var grids = [variableGrid];
    variableGrid.forEach(function (row, x) {
      row.forEach(function (cell, y) {
        if (cell.isVariable()) {
          (function () {
            var possibleAssets = cell.getPossibleGridAssets();
            var newGrids = [];
            possibleAssets.forEach(function (asset) {
              grids.forEach(function (grid) {
                var newMap = _this.cloneGrid(grid);
                newMap[x][y] = asset;
                newGrids.push(newMap);
              });
            });
            grids = newGrids;
          })();
        }
      });
    });
    return grids;
  };

  MazeMap.deserialize = function deserialize(serializedValues, cellClass) {
    return new MazeMap(serializedValues.map(function (row) {
      return row.map(cellClass.deserialize);
    }));
  };

  MazeMap.parseFromOldValues = function parseFromOldValues(map, initialDirt, cellClass) {
    return new MazeMap(map.map(function (row, x) {
      return row.map(function (mapCell, y) {
        var initialDirtCell = initialDirt && initialDirt[x][y];
        return cellClass.parseFromOldValues(mapCell, initialDirtCell);
      });
    }));
  };

  MazeMap.prototype.resetDirt = function resetDirt() {
    this.forEachCell(function (cell) {
      cell.resetCurrentValue();
    });
  };

  MazeMap.prototype.forEachCell = function forEachCell(cb) {
    this.currentStaticGrid.forEach(function (row, x) {
      row.forEach(function (cell, y) {
        cb(cell, x, y);
      });
    });
  };

  /**
   * Returns a flattened list of all cells in this map. Good for
   * situations where we want to map or reduce the cells without caring
   * about their position
   * @return {Cell[]}
   */


  MazeMap.prototype.getAllCells = function getAllCells() {
    return this.currentStaticGrid.reduce(function (prev, curr) {
      return prev.concat(curr);
    }, []);
  };

  MazeMap.prototype.getCell = function getCell(x, y) {
    return this.currentStaticGrid[x] && this.currentStaticGrid[x][y];
  };

  MazeMap.prototype.isDirt = function isDirt(x, y) {
    var cell = this.getCell(x, y);
    return cell && cell.isDirt();
  };

  MazeMap.prototype.getTile = function getTile(x, y) {
    var cell = this.getCell(x, y);
    return cell && cell.getTile();
  };

  MazeMap.prototype.getValue = function getValue(x, y) {
    var cell = this.getCell(x, y);
    return cell && cell.getCurrentValue();
  };

  MazeMap.prototype.setValue = function setValue(x, y, val) {
    if (this.currentStaticGrid[x] && this.currentStaticGrid[x][y]) {
      this.currentStaticGrid[x][y].setCurrentValue(val);
    }
  };

  /**
   * Some functionality - most notably Bee's shouldCheckCloud and
   * shouldCheckPurple logic - need to be able to make decisions based on
   * details about the original (variable) cell at a coordinate.
   * @returns {Cell}
   */


  MazeMap.prototype.getVariableCell = function getVariableCell(x, y) {
    if (this.grid_[x] && this.grid_[x][y]) {
      return this.grid_[x][y];
    }
  };

  /**
   * Assigns this.currentStaticGrid to the appropriate grid and resets all
   * current values
   * @param {Number} id
   */


  MazeMap.prototype.useGridWithId = function useGridWithId(id) {
    this.currentStaticGrid = this.staticGrids[id];
    this.resetDirt();
  };

  MazeMap.prototype.clone = function clone() {
    this.constructor.cloneGrid(this.grid_);
  };

  /**
   * @return {boolean}
   */


  MazeMap.prototype.hasMultiplePossibleGrids = function hasMultiplePossibleGrids() {
    return this.staticGrids.length > 1;
  };

  return MazeMap;
}();

/***/ }),

/***/ 2905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var COLLECTOR_RESET_CURRENT_COLLECTED = 'maze/COLLECTOR_RESET_CURRENT_COLLECTED';
var COLLECTOR_SET_CURRENT_COLLECTED = 'maze/COLLECTOR_SET_CURRENT_COLLECTED';
var COLLECTOR_SET_MIN_REQUIRED = 'maze/COLLECTOR_SET_MIN_REQUIRED';

var mazeInitialState = {
  collectorCurrentCollected: 0,
  collectorBestCollected: 0,
  collectorMinRequired: 1
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mazeInitialState;
  var action = arguments[1];

  if (action.type === COLLECTOR_RESET_CURRENT_COLLECTED) {
    return _extends({}, state, { collectorCurrentCollected: 0 });
  }

  if (action.type === COLLECTOR_SET_CURRENT_COLLECTED) {
    return _extends({}, state, {
      collectorCurrentCollected: action.currentCollected,
      collectorLastCollected: action.currentCollected
    });
  }

  if (action.type === COLLECTOR_SET_MIN_REQUIRED) {
    return _extends({}, state, { collectorMinRequired: action.minRequired });
  }

  return state;
}

var resetCollectorCurrentCollected = exports.resetCollectorCurrentCollected = function resetCollectorCurrentCollected() {
  return {
    type: COLLECTOR_RESET_CURRENT_COLLECTED
  };
};

var setCollectorCurrentCollected = exports.setCollectorCurrentCollected = function setCollectorCurrentCollected(currentCollected) {
  return {
    type: COLLECTOR_SET_CURRENT_COLLECTED,
    currentCollected: currentCollected
  };
};

var setCollectorMinRequired = exports.setCollectorMinRequired = function setCollectorMinRequired(minRequired) {
  return {
    type: COLLECTOR_SET_MIN_REQUIRED,
    minRequired: minRequired
  };
};

/***/ }),

/***/ 2906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resultsHandler = __webpack_require__(1738);

var _resultsHandler2 = _interopRequireDefault(_resultsHandler);

var _constants = __webpack_require__(216);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GathererHandler = function (_ResultsHandler) {
  _inherits(GathererHandler, _ResultsHandler);

  function GathererHandler() {
    _classCallCheck(this, GathererHandler);

    return _possibleConstructorReturn(this, _ResultsHandler.apply(this, arguments));
  }

  /**
   * @return {boolean}
   */
  GathererHandler.prototype.collectedEverything = function collectedEverything() {
    var missedSomething = this.maze_.map.currentStaticGrid.some(function (row) {
      return row.some(function (cell) {
        return cell.isDirt() && cell.getCurrentValue() > 0;
      });
    });

    return !missedSomething;
  };

  /**
   * Did we reach our total nectar/honey goals?
   * @return {boolean}
   * @override
   */


  GathererHandler.prototype.succeeded = function succeeded() {
    return this.collectedEverything();
  };

  /**
   * @override
   */


  GathererHandler.prototype.hasMessage = function hasMessage(testResults) {
    return testResults === _constants.TestResults.APP_SPECIFIC_FAIL;
  };

  return GathererHandler;
}(_resultsHandler2.default);

exports.default = GathererHandler;
module.exports = exports['default'];

/***/ }),

/***/ 2909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requiredBlockUtils = __webpack_require__(1756);

var MOVE_FORWARD = { 'test': 'moveForward', 'type': 'maze_moveForward' };
var TURN_LEFT = { 'test': 'turnLeft', 'type': 'maze_turn', 'titles': { 'DIR': 'turnLeft' } };
var TURN_RIGHT = { 'test': 'turnRight', 'type': 'maze_turn', 'titles': { 'DIR': 'turnRight' } };
var WHILE_LOOP = { 'test': 'while', 'type': 'maze_forever' };
var IS_PATH_LEFT = { 'test': 'isPathLeft', 'type': 'maze_if', 'titles': { 'DIR': 'isPathLeft' } };
var IS_PATH_RIGHT = { 'test': 'isPathRight', 'type': 'maze_if', 'titles': { 'DIR': 'isPathRight' } };
var IS_PATH_FORWARD = { 'test': 'isPathForward', 'type': 'maze_ifElse', 'titles': { 'DIR': 'isPathForward' } };
var FOR_LOOP = { 'test': 'for', 'type': 'controls_repeat', titles: { TIMES: '???' } };

module.exports = {
  moveNorth: requiredBlockUtils.simpleBlock('maze_moveNorth'),
  moveSouth: requiredBlockUtils.simpleBlock('maze_moveSouth'),
  moveEast: requiredBlockUtils.simpleBlock('maze_moveEast'),
  moveWest: requiredBlockUtils.simpleBlock('maze_moveWest'),
  controls_repeat_simplified: requiredBlockUtils.repeatSimpleBlock('???'),
  MOVE_FORWARD: MOVE_FORWARD,
  TURN_LEFT: TURN_LEFT,
  TURN_RIGHT: TURN_RIGHT,
  WHILE_LOOP: WHILE_LOOP,
  IS_PATH_LEFT: IS_PATH_LEFT,
  IS_PATH_RIGHT: IS_PATH_RIGHT,
  IS_PATH_FORWARD: IS_PATH_FORWARD,
  FOR_LOOP: FOR_LOOP
};

/***/ }),

/***/ 3116:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3117);


/***/ }),

/***/ 3117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadMaze = __webpack_require__(3118);

var _loadMaze2 = _interopRequireDefault(_loadMaze);

var _loadApp = __webpack_require__(820);

var _loadApp2 = _interopRequireDefault(_loadApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _loadApp2.default)().then(_loadMaze2.default);

/***/ }),

/***/ 3118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadMaze;

var _appMain = __webpack_require__(853);

var _appMain2 = _interopRequireDefault(_appMain);

var _maze = __webpack_require__(3119);

var _maze2 = _interopRequireDefault(_maze);

var _blocks = __webpack_require__(2907);

var _blocks2 = _interopRequireDefault(_blocks);

var _levels = __webpack_require__(3141);

var _levels2 = _interopRequireDefault(_levels);

var _skins = __webpack_require__(2760);

var _skins2 = _interopRequireDefault(_skins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var maze = new _maze2.default();

window.Maze = maze;
if (typeof global !== 'undefined') {
  global.Maze = window.Maze;
}

function loadMaze(options) {
  options.skinsModule = _skins2.default;
  options.blocksModule = _blocks2.default;

  (0, _appMain2.default)(maze, _levels2.default, options);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),

/***/ 3119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(32);
var Provider = __webpack_require__(53).Provider;

var timeoutList = __webpack_require__(1014);
var AppView = __webpack_require__(944);
var CustomMarshalingInterpreter = __webpack_require__(850);
var codegen = __webpack_require__(1004);
var dom = __webpack_require__(594);
var utils = __webpack_require__(71);
var constants = __webpack_require__(216);
var TestResults = constants.TestResults;
var ResultType = constants.ResultType;
var generateCodeAliases = __webpack_require__(808).generateCodeAliases;
var getStore = __webpack_require__(237).getStore;
var studioApp = __webpack_require__(597).singleton;
var containedLevels = __webpack_require__(1005);
var getContainedLevelResultInfo = containedLevels.getContainedLevelResultInfo;
var postContainedLevelAttempt = containedLevels.postContainedLevelAttempt;
var runAfterPostContainedLevel = containedLevels.runAfterPostContainedLevel;

var ExecutionInfo = __webpack_require__(3120);
var MazeVisualizationColumn = __webpack_require__(3121);
var api = __webpack_require__(3126);
var dropletConfig = __webpack_require__(3127);
var mazeReducer = __webpack_require__(2905);
var tiles = __webpack_require__(773);

var MazeController = __webpack_require__(3128);

var createResultsHandlerForSubtype = __webpack_require__(3130).createResultsHandlerForSubtype;

module.exports = function () {
  function Maze() {
    var _this = this;

    _classCallCheck(this, Maze);

    this.runButtonClick_ = function () {
      var stepButton = document.getElementById('stepButton');
      if (stepButton) {
        stepButton.setAttribute('disabled', '');
      }
      _this.execute_(false);
    };

    this.stepButtonClick_ = function () {
      var stepButton = document.getElementById('stepButton');
      stepButton.setAttribute('disabled', '');

      if (_this.animating_) {
        _this.scheduleAnimations_(true);
      } else {
        _this.execute_(true);
      }
    };

    this.resetButtonClick_ = function () {
      var stepButton = document.getElementById('stepButton');
      stepButton.removeAttribute('disabled');

      _this.reenableCachedBlockStates_();
    };

    this.finishButtonClick_ = function () {
      timeoutList.clearTimeouts();
      _this.animating_ = false;
      _this.displayFeedback_(true);
    };

    this.reset_ = function () {
      _this.animating_ = false;
      _this.controller.reset();
    };

    this.onReportComplete_ = function (response) {
      _this.response = response;
      _this.waitingForReport = false;
      studioApp().onReportComplete(response);
      _this.displayFeedback_();
    };

    this.scale = {
      snapRadius: 1,
      stepSpeed: 5
    };

    this.stepSpeed = 100;
    this.animating_ = false;

    this.cachedBlockStates = [];

    this.resultsHandler = undefined;
    this.response = undefined;
    this.result = undefined;
    this.testResults = undefined;
    this.waitingForReport = undefined;

    //TODO: Make configurable.
    studioApp().setCheckForEmptyBlocks(true);
  }

  /**
   * Used by appMain to register reducers
   * TODO elijah should this be a static method?
   */


  Maze.prototype.getAppReducers = function getAppReducers() {
    return {
      maze: mazeReducer.default
    };
  };

  Maze.prototype.init = function init(config) {
    var _this2 = this;

    // replace studioApp() methods with our own
    studioApp().runButtonClick = this.runButtonClick_;
    studioApp().reset = this.reset_;

    var skin = config.skin;
    var level = config.level;

    // Override scalars.
    for (var key in level.scale) {
      this.scale[key] = level.scale[key];
    }

    if (level.map && level.shapeShift) {
      for (var i = 1, max = Math.random() * 4; i < max; i++) {
        level.map = utils.rotate(level.map);
        level.startDirection = (level.startDirection + 3) % 4;
      }
    }

    config.grayOutUndeletableBlocks = true;
    config.forceInsertTopBlock = 'when_run';
    config.dropletConfig = dropletConfig;

    this.controller = new MazeController(level, skin, config, {
      methods: {
        playAudio: studioApp().playAudio.bind(studioApp()),
        playAudioOnFailure: studioApp().playAudioOnFailure.bind(studioApp()),
        loadAudio: studioApp().loadAudio.bind(studioApp()),
        getTestResults: studioApp().getTestResults.bind(studioApp())
      }
    });

    this.resultsHandler = createResultsHandlerForSubtype(this.controller, config);

    if (this.controller.subtype.overrideStepSpeed) {
      this.scale.stepSpeed = this.controller.subtype.overrideStepSpeed;
    }

    config.loadAudio = function () {
      studioApp().loadAudio(_this2.controller.skin.winSound, 'win');
      studioApp().loadAudio(_this2.controller.skin.startSound, 'start');
      studioApp().loadAudio(_this2.controller.skin.failureSound, 'failure');
      studioApp().loadAudio(_this2.controller.skin.obstacleSound, 'obstacle');
      // Load wall sounds.
      studioApp().loadAudio(_this2.controller.skin.wallSound, 'wall');

      if (_this2.controller.skin.walkSound) {
        studioApp().loadAudio(_this2.controller.skin.walkSound, 'walk');
      }

      // todo - longterm, instead of having sound related flags we should just
      // have the skin tell us the set of sounds it needs
      if (_this2.controller.skin.additionalSound) {
        studioApp().loadAudio(_this2.controller.skin.wall0Sound, 'wall0');
        studioApp().loadAudio(_this2.controller.skin.wall1Sound, 'wall1');
        studioApp().loadAudio(_this2.controller.skin.wall2Sound, 'wall2');
        studioApp().loadAudio(_this2.controller.skin.wall3Sound, 'wall3');
        studioApp().loadAudio(_this2.controller.skin.wall4Sound, 'wall4');
        studioApp().loadAudio(_this2.controller.skin.winGoalSound, 'winGoal');
      }
      if (_this2.controller.skin.dirtSound) {
        studioApp().loadAudio(_this2.controller.skin.fillSound, 'fill');
        studioApp().loadAudio(_this2.controller.skin.digSound, 'dig');
      }
      _this2.controller.subtype.loadAudio(_this2.controller.skin);
    };

    config.afterInject = function () {
      if (studioApp().isUsingBlockly()) {
        /**
         * The richness of block colours, regardless of the hue.
         * MOOC blocks should be brighter (target audience is younger).
         * Must be in the range of 0 (inclusive) to 1 (exclusive).
         * Blockly's default is 0.45.
         */
        Blockly.HSV_SATURATION = 0.6;

        Blockly.SNAP_RADIUS *= _this2.scale.snapRadius;
        Blockly.JavaScript.INFINITE_LOOP_TRAP = codegen.loopHighlight("Maze");
      }

      var svg = document.getElementById('svgMaze');
      _this2.controller.map.resetDirt();

      _this2.controller.subtype.initStartFinish();
      _this2.controller.subtype.createDrawer(svg);
      _this2.controller.subtype.initWallMap();

      // Adjust visualizationColumn width.
      var visualizationColumn = document.getElementById('visualizationColumn');
      visualizationColumn.style.width = _this2.controller.MAZE_WIDTH + 'px';

      _this2.controller.initWithSvg(svg);

      var stepButton = document.getElementById('stepButton');
      dom.addClickTouchEvent(stepButton, _this2.stepButtonClick_);

      // base's studioApp().resetButtonClick will be called first
      var resetButton = document.getElementById('resetButton');
      dom.addClickTouchEvent(resetButton, _this2.resetButtonClick_);

      var finishButton = document.getElementById('finishButton');
      if (finishButton) {
        finishButton.setAttribute('disabled', 'disabled');
        dom.addClickTouchEvent(finishButton, _this2.finishButtonClick_);
      }

      // Listen for hint events that draw a path in the game.
      window.addEventListener('displayHintPath', function (e) {
        _this2.controller.drawHintPath(svg, e.detail);
      });
    };

    if (config.embed && config.level.markdownInstructions && !config.level.instructions) {
      // if we are an embedded level with markdown instructions but no regular
      // instructions, we want to display CSP-style instructions and not be
      // centered
      config.noInstructionsWhenCollapsed = true;
      config.centerEmbedded = false;
    }

    // Push initial level properties into the Redux store
    studioApp().setPageConstants(config, {
      hideRunButton: !!(this.controller.level.stepOnly && !this.controller.level.edit_blocks)
    });

    var visualizationColumn = React.createElement(MazeVisualizationColumn, {
      searchWord: this.controller.level.searchWord,
      showCollectorGemCounter: this.controller.subtype.isCollector(),
      showFinishButton: this.controller.subtype.isCollector() && !studioApp().hasContainedLevels,
      showStepButton: !!(this.controller.level.step && !this.controller.level.edit_blocks)
    });

    ReactDOM.render(React.createElement(
      Provider,
      { store: getStore() },
      React.createElement(AppView, {
        visualizationColumn: visualizationColumn,
        onMount: studioApp().init.bind(studioApp(), config)
      })
    ), document.getElementById(config.containerId));
  };

  /**
   * Click the run button.  Start the program.
   */
  // XXX This is the only method used by the templates!
  // TODO confirm that the above XXX comment is accurate


  /**
   * Handle a click on the step button.  If we're already animating, we should
   * perform a single step.  Otherwise, we call beginAttempt which will do
   * some initial setup, and then perform the first step.
   */


  /**
   * App specific reset button click logic.  studioApp().resetButtonClick will be
   * called first.
   */


  /**
   * Handle a click on the finish button; stop animating if we are, and display
   * whatever feedback we currently have.
   *
   * Currently only used by Collector levels to allow users to continue iterating
   * on a pass-but-not-perfect solution, but still finish whenever they want.
   */


  Maze.prototype.beginAttempt = function beginAttempt() {
    var runButton = document.getElementById('runButton');
    var resetButton = document.getElementById('resetButton');
    // Ensure that Reset button is at least as wide as Run button.
    if (!resetButton.style.minWidth) {
      resetButton.style.minWidth = runButton.offsetWidth + 'px';
    }
    studioApp().toggleRunReset('reset');
    if (studioApp().isUsingBlockly()) {
      Blockly.mainBlockSpace.traceOn(true);
    }
    studioApp().reset(false);
    studioApp().attempts++;
  };

  Maze.prototype.isPreAnimationFailure = function isPreAnimationFailure(testResult) {
    return testResult === TestResults.QUESTION_MARKS_IN_NUMBER_FIELD || testResult === TestResults.EMPTY_FUNCTIONAL_BLOCK || testResult === TestResults.EXTRA_TOP_BLOCKS_FAIL || testResult === TestResults.EXAMPLE_FAILED || testResult === TestResults.EMPTY_BLOCK_FAIL || testResult === TestResults.EMPTY_FUNCTION_NAME;
  };

  /**
   * Execute the user's code.  Heaven help us...
   */


  Maze.prototype.execute_ = function execute_(stepMode) {
    var _this3 = this;

    this.beginAttempt();
    this.prepareForExecution_();

    var code = '';
    if (studioApp().isUsingBlockly()) {
      var codeBlocks = Blockly.mainBlockSpace.getTopBlocks(true);
      if (studioApp().initializationBlocks) {
        codeBlocks = studioApp().initializationBlocks.concat(codeBlocks);
      }

      code = Blockly.Generator.blocksToCode('JavaScript', codeBlocks);
    } else {
      code = generateCodeAliases(dropletConfig, 'Maze');
      code += studioApp().editor.getValue();
    }

    // Try running the user's code.  There are a few possible outcomes:
    // 1. If pegman reaches the finish [SUCCESS], executionInfo's termination
    //    value is set to true.
    // 2. If the program is terminated due to running too long [TIMEOUT],
    //    the termination value is set to Infinity
    // 3. If the program terminated because of hitting a wall/obstacle, the
    //    termination value is set to false and the ResultType is ERROR
    // 4. If the program finishes without meeting success condition, we have no
    //    termination value and set ResultType to FAILURE
    // 5. The only other time we should fail should be if an exception is thrown
    //    during execution, in which case we set ResultType to ERROR.
    // The animation should be fast if execution was successful, slow otherwise
    // to help the user see the mistake.
    studioApp().playAudio('start');
    try {
      // don't bother running code if we're just editting required blocks. all
      // we care about is the contents of report.
      var initialTestResults = studioApp().getTestResults(false);
      var runCode = !this.isPreAnimationFailure(initialTestResults) && !this.controller.level.edit_blocks;

      if (runCode) {
        if (this.controller.map.hasMultiplePossibleGrids()) {
          // If this.controller.level is a level with multiple possible grids, we
          // need to run against all grids and sort them into successes
          // and failures
          var successes = [];
          var failures = [];

          this.controller.map.staticGrids.forEach(function (grid, i) {
            _this3.controller.map.useGridWithId(i);
            _this3.controller.subtype.reset();

            // Run trial
            CustomMarshalingInterpreter.evalWith(code, {
              Maze: api,
              executionInfo: _this3.executionInfo
            });

            // Sort static grids based on trial result
            _this3.onExecutionFinish_();
            if (_this3.executionInfo.terminationValue() === true) {
              successes.push(i);
            } else {
              failures.push(i);
            }

            // Reset for next trial
            _this3.controller.subtype.drawer.reset();
            _this3.prepareForExecution_();
            studioApp().reset(false);
          });

          // The user's code needs to succeed against all possible grids
          // to be considered actually successful; if there are any
          // failures, randomly select one of the failing grids to be the
          // "real" state of the map. If all grids are successful,
          // randomly select any one of them.
          var i = failures.length > 0 ? utils.randomValue(failures) : utils.randomValue(successes);

          this.controller.map.useGridWithId(i);
          this.controller.subtype.reset();
        }

        CustomMarshalingInterpreter.evalWith(code, {
          Maze: api,
          executionInfo: this.executionInfo
        });
      }

      this.onExecutionFinish_();

      switch (this.executionInfo.terminationValue()) {
        case null:
          // didn't terminate
          this.executionInfo.queueAction('finish', null);
          this.result = ResultType.FAILURE;
          this.stepSpeed = 150;
          break;
        case Infinity:
          // Detected an infinite loop.  Animate what we have as quickly as
          // possible
          this.result = ResultType.TIMEOUT;
          this.executionInfo.queueAction('finish', null);
          this.stepSpeed = 0;
          break;
        case true:
          this.result = ResultType.SUCCESS;
          this.stepSpeed = 100;
          break;
        case false:
          this.result = ResultType.ERROR;
          this.stepSpeed = 150;
          break;
        default:
          // App-specific failure.
          this.testResults = this.resultsHandler.getTestResults(this.executionInfo.terminationValue());
          this.result = this.testResults >= TestResults.MINIMUM_PASS_RESULT ? ResultType.SUCCESS : ResultType.ERROR;
          this.executionInfo.queueAction('finish', null);
          break;
      }
    } catch (e) {
      // Syntax error, can't happen.
      this.result = ResultType.ERROR;
      console.error("Unexpected exception: " + e + "\n" + e.stack);
      // call window.onerror so that we get new relic collection.  prepend with
      // UserCode so that it's clear this is in eval'ed code.
      if (window.onerror) {
        window.onerror("UserCode:" + e.message, document.URL, 0);
      }
      return;
    }

    // If we know they succeeded, mark levelComplete true
    // Note that we have not yet animated the successful run
    var levelComplete = this.result === ResultType.SUCCESS;

    // Set testResults unless app-specific results were set in the default
    // branch of the above switch statement.
    if (this.testResults === TestResults.NO_TESTS_RUN) {
      this.testResults = studioApp().getTestResults(levelComplete);
    }

    var program;
    if (this.controller.level.editCode) {
      // If we want to "normalize" the JavaScript to avoid proliferation of nearly
      // identical versions of the code on the service, we could do either of these:

      // do an acorn.parse and then use escodegen to generate back a "clean" version
      // or minify (uglifyjs) and that or js-beautify to restore a "clean" version

      program = studioApp().editor.getValue();
    } else {
      var xml = Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace);
      program = Blockly.Xml.domToText(xml);
    }

    this.waitingForReport = true;

    if (studioApp().hasContainedLevels && !this.controller.level.edit_blocks) {
      // Contained levels post progress in a special way, and always pass
      postContainedLevelAttempt(studioApp());
      this.testResults = TestResults.ALL_PASS;
      runAfterPostContainedLevel(this.onReportComplete_);
    } else {
      // Report result to server.
      studioApp().report({
        app: 'maze',
        level: this.controller.level.id,
        result: this.result === ResultType.SUCCESS,
        testResult: this.testResults,
        program: encodeURIComponent(program),
        onComplete: this.onReportComplete_
      });
    }

    // Maze. now contains a transcript of all the user's actions.
    // Reset the maze and animate the transcript.
    studioApp().reset(false);
    this.controller.resetDirtImages(true);

    // if we have extra top blocks, don't even bother animating
    if (this.testResults === TestResults.EXTRA_TOP_BLOCKS_FAIL) {
      this.result = ResultType.ERROR;
      this.displayFeedback_();
      return;
    }

    this.animating_ = true;

    if (studioApp().isUsingBlockly()) {
      // Disable toolbox while running
      Blockly.mainBlockSpaceEditor.setEnableToolbox(false);

      if (stepMode) {
        if (this.cachedBlockStates.length !== 0) {
          throw new Error('Unexpected cachedBlockStates');
        }
        // Disable all blocks, caching their state first
        Blockly.mainBlockSpace.getAllBlocks().forEach(function (block) {
          _this3.cachedBlockStates.push({
            block: block,
            movable: block.isMovable(),
            deletable: block.isDeletable(),
            editable: block.isEditable()
          });
          block.setMovable(false);
          block.setDeletable(false);
          block.setEditable(false);
        });
      }
    }

    this.controller.animationsController.stopIdling();

    // Speeding up specific levels
    var scaledStepSpeed = this.stepSpeed * this.scale.stepSpeed * this.controller.skin.movePegmanAnimationSpeedScale;
    timeoutList.setTimeout(function () {
      _this3.scheduleAnimations_(stepMode);
    }, scaledStepSpeed);
  };

  Maze.prototype.scheduleAnimations_ = function scheduleAnimations_(singleStep) {
    timeoutList.clearTimeouts();

    var timePerAction = this.stepSpeed * this.scale.stepSpeed * this.controller.skin.movePegmanAnimationSpeedScale;
    // get a flat list of actions we want to schedule
    var actions = this.executionInfo.getActions(singleStep);

    this.scheduleSingleAnimation_(0, actions, singleStep, timePerAction);
  };

  Maze.prototype.reenableCachedBlockStates_ = function reenableCachedBlockStates_() {
    if (this.cachedBlockStates) {
      // restore moveable/deletable/editable state from before we started stepping
      this.cachedBlockStates.forEach(function (cached) {
        cached.block.setMovable(cached.movable);
        cached.block.setDeletable(cached.deletable);
        cached.block.setEditable(cached.editable);
      });
      this.cachedBlockStates = [];
    }
  };

  /**
   * Called after user's code has finished being executed, giving us one more
   * chance to check if we've accomplished our goals. This is required in part
   * because elsewhere we only check for success after movement.
   */


  Maze.prototype.onExecutionFinish_ = function onExecutionFinish_() {
    // If we haven't terminated, make one last check for success
    if (!this.executionInfo.isTerminated()) {
      this.checkSuccess();
    }

    this.resultsHandler.onExecutionFinish();
  };

  /**
   * App specific displayFeedback function that calls into
   * studioApp().displayFeedback when appropriate
   */


  Maze.prototype.displayFeedback_ = function displayFeedback_() {
    var finalFeedback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (this.waitingForReport || this.animating_) {
      return;
    }
    var options = {
      feedbackType: this.testResults,
      response: this.response,
      level: this.controller.level
    };

    var message = void 0;
    if (studioApp().hasContainedLevels) {
      message = getContainedLevelResultInfo().feedback;
    } else if (this.resultsHandler.hasMessage(this.testResults)) {
      // If there was an app-specific error
      // add it to the options passed to studioApp().displayFeedback().
      message = this.resultsHandler.getMessage(this.executionInfo.terminationValue());
    }

    if (message) {
      options.message = message;
    }

    // We will usually want to allow subtypes to situationally prevent a dialog
    // from being shown if they want to allow the user to pass but keep them on
    // the page for iteration; we only refrain from doing so if we know this is
    // the "final" feedback display triggered by the Finish Button
    if (!finalFeedback) {
      options.preventDialog = this.resultsHandler.shouldPreventFeedbackDialog(options.feedbackType);
    }

    studioApp().displayFeedback(options);
  };

  /**
   * Function to be called when the service report call is complete
   * @param {MilestoneResponse} response - JSON response (if available)
   */


  /**
   * Perform some basic initialization/resetting operations before
   * execution. This function should be idempotent, as it can be called
   * during execution when running multiple trials.
   */
  Maze.prototype.prepareForExecution_ = function prepareForExecution_() {
    this.executionInfo = new ExecutionInfo({
      ticks: 100
    });
    this.resultsHandler.executionInfo = this.executionInfo;
    this.result = ResultType.UNSET;
    this.testResults = TestResults.NO_TESTS_RUN;
    this.waitingForReport = false;
    this.animating_ = false;
    this.response = null;
  };

  /**
   * Animates a single action
   * @param {string} action The action to animate
   * @param {boolean} spotlightBlocks Whether or not we should highlight entire blocks
   * @param {integer} timePerStep How much time we have allocated before the next step
   */


  Maze.prototype.animateAction_ = function animateAction_(action, spotlightBlocks, timePerStep) {
    if (action.blockId) {
      studioApp().highlight(String(action.blockId), spotlightBlocks);
    }

    switch (action.command) {
      case 'north':
        this.controller.animatedMove(tiles.Direction.NORTH, timePerStep);
        break;
      case 'east':
        this.controller.animatedMove(tiles.Direction.EAST, timePerStep);
        break;
      case 'south':
        this.controller.animatedMove(tiles.Direction.SOUTH, timePerStep);
        break;
      case 'west':
        this.controller.animatedMove(tiles.Direction.WEST, timePerStep);
        break;
      case 'look_north':
        this.controller.animatedLook(tiles.Direction.NORTH);
        break;
      case 'look_east':
        this.controller.animatedLook(tiles.Direction.EAST);
        break;
      case 'look_south':
        this.controller.animatedLook(tiles.Direction.SOUTH);
        break;
      case 'look_west':
        this.controller.animatedLook(tiles.Direction.WEST);
        break;
      case 'fail_forward':
        this.controller.animatedFail(true);
        break;
      case 'fail_backward':
        this.controller.animatedFail(false);
        break;
      case 'left':
        this.controller.animatedTurn(tiles.TurnDirection.LEFT);
        break;
      case 'right':
        this.controller.animatedTurn(tiles.TurnDirection.RIGHT);
        break;
      case 'finish':
        this.finish_(timePerStep);
        break;
      case 'putdown':
        this.controller.scheduleFill();
        break;
      case 'pickup':
        this.controller.scheduleDig();
        break;
      case 'nectar':
        this.controller.subtype.animateGetNectar();
        break;
      case 'honey':
        this.controller.subtype.animateMakeHoney();
        break;
      case 'get_corn':
        this.controller.subtype.animateGetCorn();
        break;
      case 'get_pumpkin':
        this.controller.subtype.animateGetPumpkin();
        break;
      case 'get_lettuce':
        this.controller.subtype.animateGetLettuce();
        break;
      case 'plant':
        this.controller.subtype.animatePlant();
        break;
      default:
        // action[0] is null if generated by studioApp().checkTimeout().
        break;
    }
  };

  Maze.prototype.finish_ = function finish_(timePerStep) {
    // Only schedule victory animation for certain conditions:
    if (this.testResults >= TestResults.MINIMUM_PASS_RESULT) {

      var finishButton = document.getElementById('finishButton');
      if (finishButton) {
        finishButton.removeAttribute('disabled');
      }
      var finishIcon = document.getElementById('finish');
      if (finishIcon) {
        studioApp().playAudio('winGoal');
      }
      studioApp().playAudioOnWin();
      this.controller.animatedFinish(timePerStep);
    } else {
      timeoutList.setTimeout(function () {
        studioApp().playAudioOnFailure();
      }, this.stepSpeed);
    }
  };

  /**
   * schedule animations in sequence
   * The reason we do this recursively instead of iteratively is that we want to
   * ensure that we finish scheduling action1 before starting to schedule
   * action2. Otherwise we get into trouble when stepSpeed is 0.
   */


  Maze.prototype.scheduleSingleAnimation_ = function scheduleSingleAnimation_(index, actions, singleStep, timePerAction) {
    var _this4 = this;

    if (index >= actions.length) {
      this.finishAnimations_(singleStep);
      return;
    }

    this.animateAction_(actions[index], singleStep, timePerAction);

    var command = actions[index] && actions[index].command;
    var timeModifier = this.controller.skin.actionSpeedScale && this.controller.skin.actionSpeedScale[command] || 1;
    var timeForThisAction = Math.round(timePerAction * timeModifier);

    timeoutList.setTimeout(function () {
      _this4.scheduleSingleAnimation_(index + 1, actions, singleStep, timePerAction);
    }, timeForThisAction);
  };

  /**
   * Once animations are complete, we want to reenable the step button if we
   * have steps left, otherwise we're done with this execution.
   */


  Maze.prototype.finishAnimations_ = function finishAnimations_(singleStep) {
    var _this5 = this;

    var stepsRemaining = this.executionInfo.stepsRemaining();
    var stepButton = document.getElementById('stepButton');

    // allow time for  additional pause if we're completely done
    var waitTime = stepsRemaining ? 0 : 1000;

    // run after all animations
    timeoutList.setTimeout(function () {
      if (stepsRemaining) {
        stepButton.removeAttribute('disabled');
      } else {
        _this5.animating_ = false;
        if (studioApp().isUsingBlockly()) {
          // reenable toolbox
          Blockly.mainBlockSpaceEditor.setEnableToolbox(true);
        }
        // If stepping and we failed, we want to retain highlighting until
        // clicking reset.  Otherwise we can clear highlighting/disabled
        // blocks now
        if (!singleStep || _this5.result === ResultType.SUCCESS) {
          _this5.reenableCachedBlockStates_();
          studioApp().clearHighlighting();
        }
        _this5.displayFeedback_();
      }
    }, waitTime);
  };

  /**
   * Certain Maze types - namely, WordSearch, Collector, and any Maze with
   * Quantum maps, don't want to check for success until the user's code
   * has finished running completely.
   */


  Maze.prototype.shouldCheckSuccessOnMove = function shouldCheckSuccessOnMove() {
    if (this.controller.map.hasMultiplePossibleGrids()) {
      return false;
    }
    return this.resultsHandler.shouldCheckSuccessOnMove();
  };

  /**
   * Check whether all goals have been accomplished
   */


  Maze.prototype.checkSuccess = function checkSuccess() {
    var succeeded = this.resultsHandler.succeeded();

    if (succeeded) {
      // Finished.  Terminate the user's program.
      this.executionInfo.queueAction('finish', null);
      this.executionInfo.terminateWithValue(true);
    }

    return succeeded;
  };

  return Maze;
}();

/***/ }),

/***/ 3120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var flatten = __webpack_require__(71).flatten;

/**
 * Stores information about a current Maze execution.  Execution consists of a
 * series of steps, where each step may contain one or more actions.
 */
var ExecutionInfo = function ExecutionInfo(options) {
  options = options || {};
  this.terminated_ = false;
  this.terminationValue_ = null; // See terminateWithValue method.
  this.steps_ = [];
  this.ticks = options.ticks || Infinity;
  this.collection_ = null;
};

module.exports = ExecutionInfo;

/**
 * Sets termination value to one of the following:
 * - Infinity: Program timed out.
 * - True: Program succeeded (goal was reached).
 * - False: Program failed for unspecified reason.
 * - Any other value: app-specific failure.
 * @param {object} value the termination value
 */
ExecutionInfo.prototype.terminateWithValue = function (value) {
  if (!this.terminated_) {
    this.terminationValue_ = value;
  }
  this.terminated_ = true;
};

ExecutionInfo.prototype.isTerminated = function () {
  return this.terminated_;
};

ExecutionInfo.prototype.terminationValue = function () {
  return this.terminationValue_;
};

ExecutionInfo.prototype.queueAction = function (command, blockId) {
  var action = { command: command, blockId: blockId };
  if (this.collection_) {
    this.collection_.push(action);
  } else {
    // single action step (most common case)
    this.steps_.push([action]);
  }
};

/**
 * Creates a flat list of actions, which get removed from our queue.  If single
 * step is true, the list will contain the actions for one step, otherwise it
 * will be the entire queue.
 */
ExecutionInfo.prototype.getActions = function (singleStep) {
  var actions = [];
  if (singleStep && this.stepsRemaining()) {
    actions.push(this.steps_.shift());
    // dont leave queue with just a finish in it
    if (onLastStep(this.steps_)) {
      actions.push(this.steps_.splice(0));
    }
  } else {
    actions.push(this.steps_.splice(0));
  }
  // Some steps will contain multiple actions.  For example a K1 North block can
  // consist of a turn and a move. We instead want to return a flat list of
  // all actions, regardless of which step they were in.
  return flatten(actions);
};

ExecutionInfo.prototype.stepsRemaining = function () {
  return this.steps_.length > 0;
};

/**
 * If we have no steps left, or our only remaining step is a single finish action
 * we're done executing, and if we're in step mode won't want to wait around
 * for another step press.
 */
function onLastStep(steps) {
  if (steps.length === 0) {
    return true;
  }

  if (steps.length === 1) {
    var step = steps[0];
    if (step.length === 1 && step[0].command === 'finish') {
      return true;
    }
  }
  return false;
}

/**
 * Collect all actions queued up between now and the call to stopCollecting,
 * and put them in a single step
 */
ExecutionInfo.prototype.collectActions = function () {
  if (this.collection_) {
    throw new Error("Already collecting");
  }
  this.collection_ = [];
};

ExecutionInfo.prototype.stopCollecting = function () {
  if (!this.collection_) {
    throw new Error("Not currently collecting");
  }
  this.steps_.push(this.collection_);
  this.collection_ = null;
};

/**
 * If the user has executed too many actions, we're probably in an infinite
 * loop.  Set termination value to Infinity
 */
ExecutionInfo.prototype.checkTimeout = function () {
  if (this.ticks-- < 0) {
    this.terminateWithValue(Infinity);
  }
};

/***/ }),

/***/ 3121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Visualization = __webpack_require__(3122);

var _Visualization2 = _interopRequireDefault(_Visualization);

var _StepButton = __webpack_require__(3123);

var _StepButton2 = _interopRequireDefault(_StepButton);

var _SpellingControls = __webpack_require__(3124);

var _SpellingControls2 = _interopRequireDefault(_SpellingControls);

var _CollectorGemCounter = __webpack_require__(3125);

var _CollectorGemCounter2 = _interopRequireDefault(_CollectorGemCounter);

var _GameButtons = __webpack_require__(819);

var _GameButtons2 = _interopRequireDefault(_GameButtons);

var _BelowVisualization = __webpack_require__(824);

var _BelowVisualization2 = _interopRequireDefault(_BelowVisualization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MazeVisualizationColumn = function MazeVisualizationColumn(props) {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_Visualization2.default, null),
    _react2.default.createElement(
      _GameButtons2.default,
      { showFinishButton: props.showFinishButton },
      _react2.default.createElement(_StepButton2.default, { showStepButton: props.showStepButton }),
      props.showCollectorGemCounter && _react2.default.createElement(_CollectorGemCounter2.default, null)
    ),
    props.searchWord && _react2.default.createElement(_SpellingControls2.default, { searchWord: props.searchWord }),
    _react2.default.createElement(_BelowVisualization2.default, null)
  );
};

MazeVisualizationColumn.propTypes = {
  searchWord: _react.PropTypes.string,
  showCollectorGemCounter: _react.PropTypes.bool,
  showFinishButton: _react.PropTypes.bool,
  showStepButton: _react.PropTypes.bool.isRequired
};

exports.default = MazeVisualizationColumn;
module.exports = exports['default'];

/***/ }),

/***/ 3122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ProtectedVisualizationDiv = __webpack_require__(788);

var _ProtectedVisualizationDiv2 = _interopRequireDefault(_ProtectedVisualizationDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Visualization = function Visualization() {
  return _react2.default.createElement(
    _ProtectedVisualizationDiv2.default,
    null,
    _react2.default.createElement(
      'svg',
      { version: '1.1', id: 'svgMaze' },
      _react2.default.createElement(
        'g',
        { id: 'look' },
        _react2.default.createElement('path', { d: 'M 0,-15 a 15 15 0 0 1 15 15' }),
        _react2.default.createElement('path', { d: 'M 0,-35 a 35 35 0 0 1 35 35' }),
        _react2.default.createElement('path', { d: 'M 0,-55 a 55 55 0 0 1 55 55' })
      )
    )
  );
};
module.exports = Visualization;

/***/ }),

/***/ 3123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msg = __webpack_require__(851);

var StepButton = function StepButton(props) {
  var classes = 'launch float-right';
  if (!props.showStepButton) {
    classes += ' hide';
  }
  return _react2.default.createElement(
    'button',
    { id: 'stepButton', className: classes },
    _react2.default.createElement('img', { src: '/blockly/media/1x1.gif' }),
    msg.step()
  );
};

StepButton.propTypes = {
  showStepButton: _react.PropTypes.bool.isRequired
};

module.exports = StepButton;

/***/ }),

/***/ 3124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msg = __webpack_require__(851);
var ProtectedStatefulDiv = __webpack_require__(737);

var SpellingControls = function SpellingControls(props) {
  return _react2.default.createElement(
    ProtectedStatefulDiv,
    { id: 'spelling-table-wrapper' },
    _react2.default.createElement(
      'table',
      { id: 'spelling-table', className: 'float-right' },
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            { className: 'spellingTextCell' },
            msg.word(),
            ':'
          ),
          _react2.default.createElement(
            'td',
            { className: 'spellingButtonCell' },
            _react2.default.createElement(
              'button',
              { id: 'searchWord', className: 'spellingButton', disabled: true },
              _react2.default.createElement('img', { src: '/blockly/media/1x1.gif' }),
              props.searchWord
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            { className: 'spellingTextCell' },
            msg.youSpelled(),
            ':'
          ),
          _react2.default.createElement(
            'td',
            { className: 'spellingButtonCell' },
            _react2.default.createElement(
              'button',
              { id: 'currentWord', className: 'spellingButton', disabled: true },
              _react2.default.createElement('img', { src: '/blockly/media/1x1.gif' }),
              _react2.default.createElement('span', { id: 'currentWordContents' })
            )
          )
        )
      )
    )
  );
};

SpellingControls.propTypes = {
  searchWord: _react.PropTypes.string.isRequired
};

module.exports = SpellingControls;

/***/ }),

/***/ 3125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectorGemCounter = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _locale = __webpack_require__(851);

var _locale2 = _interopRequireDefault(_locale);

var _assetUrl = __webpack_require__(1153);

var _assetUrl2 = _interopRequireDefault(_assetUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    display: 'inline-block',
    fontFamily: '"Gotham 5r"',
    paddingRight: 10,
    pointerEvents: 'none',
    textAlign: 'right',
    verticalAlign: 'top',
    marginTop: 5
  },
  label: {
    color: _color2.default.white,
    textTransform: 'capitalize',
    backgroundColor: _color2.default.charcoal,
    textAlign: 'center',
    fontSize: 14,
    borderRadius: 2,
    width: '100%'
  },
  hr: {
    borderColor: _color2.default.lighter_gray,
    borderWidth: 2,
    margin: '0 auto'
  },
  gemImage: {
    backgroundImage: 'url("' + (0, _assetUrl2.default)('media/skins/collector/gem.png') + '")',
    backgroundSize: '120%',
    backgroundPosition: 'center',
    display: 'inline',
    padding: 5
  },
  checkmark: {
    color: 'lightgreen',
    fontSize: 18,
    left: 5,
    lineHeight: '25px',
    position: 'relative',
    top: 7
  },
  gemCount: {
    paddingRight: 5,
    fontSize: 17,
    color: _color2.default.charcoal
  }
};

var CollectorGemCounter = exports.CollectorGemCounter = function (_React$Component) {
  _inherits(CollectorGemCounter, _React$Component);

  function CollectorGemCounter() {
    _classCallCheck(this, CollectorGemCounter);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  CollectorGemCounter.prototype.render = function render() {
    var showCheckmark = this.props.currentCollected >= this.props.minRequired;

    return _react2.default.createElement(
      'div',
      { style: styles.container },
      _react2.default.createElement(
        'div',
        { style: styles.label },
        _locale2.default.goal()
      ),
      _react2.default.createElement(
        'div',
        { style: styles.gemImage },
        _react2.default.createElement('i', {
          style: _extends({}, styles.checkmark, {
            visibility: showCheckmark ? 'visible' : 'hidden'
          }),
          className: 'fa fa-check',
          'aria-hidden': 'true'
        })
      ),
      _react2.default.createElement(
        'span',
        { style: styles.gemCount },
        this.props.currentCollected,
        '/',
        this.props.minRequired
      )
    );
  };

  return CollectorGemCounter;
}(_react2.default.Component);

CollectorGemCounter.propTypes = {
  currentCollected: _react.PropTypes.number.isRequired,
  minRequired: _react.PropTypes.number
};
CollectorGemCounter.defaultProps = {
  minRequired: 1
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    currentCollected: state.maze.collectorCurrentCollected,
    minRequired: state.maze.collectorMinRequired
  };
})(CollectorGemCounter);

/***/ }),

/***/ 3126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tiles = __webpack_require__(773);
var Direction = tiles.Direction;
var MoveDirection = tiles.MoveDirection;
var TurnDirection = tiles.TurnDirection;
var SquareType = tiles.SquareType;
var utils = __webpack_require__(71);

/**
 * Only call API functions if we haven't yet terminated execution
 */
var API_FUNCTION = function API_FUNCTION(fn) {
  return utils.executeIfConditional(function () {
    return !Maze.executionInfo.isTerminated();
  }, fn);
};

/**
 * Is there a path next to pegman?
 * @param {number} direction Direction to look
 *     (0 = forward, 1 = right, 2 = backward, 3 = left).
 * @param {?string} id ID of block that triggered this action.
 *     Null if called as a helper function in Maze.move().
 * @return {boolean} True if there is a path.
 */
var isPath = function isPath(direction, id) {
  var effectiveDirection = Maze.controller.pegmanD + direction;
  var square;
  var command;
  switch (tiles.constrainDirection4(effectiveDirection)) {
    case Direction.NORTH:
      square = Maze.controller.map.getTile(Maze.controller.pegmanY - 1, Maze.controller.pegmanX);
      command = 'look_north';
      break;
    case Direction.EAST:
      square = Maze.controller.map.getTile(Maze.controller.pegmanY, Maze.controller.pegmanX + 1);
      command = 'look_east';
      break;
    case Direction.SOUTH:
      square = Maze.controller.map.getTile(Maze.controller.pegmanY + 1, Maze.controller.pegmanX);
      command = 'look_south';
      break;
    case Direction.WEST:
      square = Maze.controller.map.getTile(Maze.controller.pegmanY, Maze.controller.pegmanX - 1);
      command = 'look_west';
      break;
  }
  if (id) {
    Maze.executionInfo.queueAction(command, id);
  }
  return square !== SquareType.WALL && square !== SquareType.OBSTACLE && square !== undefined;
};

/**
 * Attempt to move pegman forward or backward.
 * @param {number} direction Direction to move (0 = forward, 2 = backward).
 * @param {string} id ID of block that triggered this action.
 * @throws {true} If the end of the maze is reached.
 * @throws {false} If Pegman collides with a wall.
 */
var move = function move(direction, id) {
  if (!isPath(direction, null)) {
    Maze.executionInfo.queueAction('fail_' + (direction ? 'backward' : 'forward'), id);
    Maze.executionInfo.terminateWithValue(false);
    return;
  }
  // If moving backward, flip the effective direction.
  var effectiveDirection = Maze.controller.pegmanD + direction;
  var command;
  switch (tiles.constrainDirection4(effectiveDirection)) {
    case Direction.NORTH:
      Maze.controller.pegmanY--;
      command = 'north';
      break;
    case Direction.EAST:
      Maze.controller.pegmanX++;
      command = 'east';
      break;
    case Direction.SOUTH:
      Maze.controller.pegmanY++;
      command = 'south';
      break;
    case Direction.WEST:
      Maze.controller.pegmanX--;
      command = 'west';
      break;
  }
  Maze.executionInfo.queueAction(command, id);
  if (Maze.controller.subtype.isWordSearch()) {
    Maze.controller.subtype.markTileVisited(Maze.controller.pegmanY, Maze.controller.pegmanX, false);
  }
  if (Maze.shouldCheckSuccessOnMove()) {
    Maze.checkSuccess();
  }
};

/**
 * Turn pegman left or right.
 * @param {number} direction Direction to turn (0 = left, 1 = right).
 * @param {string} id ID of block that triggered this action.
 */
var turn = function turn(direction, id) {
  if (direction === TurnDirection.RIGHT) {
    // Right turn (clockwise).
    Maze.controller.pegmanD += TurnDirection.RIGHT;
    Maze.executionInfo.queueAction('right', id);
  } else {
    // Left turn (counterclockwise).
    Maze.controller.pegmanD += TurnDirection.LEFT;
    Maze.executionInfo.queueAction('left', id);
  }
  Maze.controller.pegmanD = tiles.constrainDirection4(Maze.controller.pegmanD);
};

/**
 * Turn pegman towards a given direction, turning through stage front (south)
 * when possible.
 * @param {number} newDirection Direction to turn to (e.g., Direction.NORTH)
 * @param {string} id ID of block that triggered this action.
 */
var turnTo = function turnTo(newDirection, id) {
  var currentDirection = Maze.controller.pegmanD;
  if (isTurnAround(currentDirection, newDirection)) {
    var shouldTurnCWToPreferStageFront = currentDirection - newDirection < 0;
    var relativeTurnDirection = shouldTurnCWToPreferStageFront ? TurnDirection.RIGHT : TurnDirection.LEFT;
    turn(relativeTurnDirection, id);
    turn(relativeTurnDirection, id);
  } else if (isRightTurn(currentDirection, newDirection)) {
    turn(TurnDirection.RIGHT, id);
  } else if (isLeftTurn(currentDirection, newDirection)) {
    turn(TurnDirection.LEFT, id);
  }
};

function isLeftTurn(direction, newDirection) {
  return newDirection === tiles.constrainDirection4(direction + TurnDirection.LEFT);
}

function isRightTurn(direction, newDirection) {
  return newDirection === tiles.constrainDirection4(direction + TurnDirection.RIGHT);
}

/**
 * Returns whether turning from direction to newDirection would be a 180° turn
 * @param {number} direction
 * @param {number} newDirection
 * @returns {boolean}
 */
function isTurnAround(direction, newDirection) {
  return Math.abs(direction - newDirection) === MoveDirection.BACKWARD;
}

function moveAbsoluteDirection(direction, id) {
  Maze.executionInfo.collectActions();
  turnTo(direction, id);
  move(MoveDirection.FORWARD, id);
  Maze.executionInfo.stopCollecting();
}

exports.moveForward = API_FUNCTION(function (id) {
  move(MoveDirection.FORWARD, id);
});

exports.moveBackward = API_FUNCTION(function (id) {
  move(MoveDirection.BACKWARD, id);
});

exports.moveNorth = API_FUNCTION(function (id) {
  moveAbsoluteDirection(Direction.NORTH, id);
});

exports.moveSouth = API_FUNCTION(function (id) {
  moveAbsoluteDirection(Direction.SOUTH, id);
});

exports.moveEast = API_FUNCTION(function (id) {
  moveAbsoluteDirection(Direction.EAST, id);
});

exports.moveWest = API_FUNCTION(function (id) {
  moveAbsoluteDirection(Direction.WEST, id);
});

exports.turnLeft = API_FUNCTION(function (id) {
  turn(TurnDirection.LEFT, id);
});

exports.turnRight = API_FUNCTION(function (id) {
  turn(TurnDirection.RIGHT, id);
});

exports.isPathForward = API_FUNCTION(function (id) {
  return isPath(MoveDirection.FORWARD, id);
});
exports.noPathForward = API_FUNCTION(function (id) {
  return !isPath(MoveDirection.FORWARD, id);
});

exports.isPathRight = API_FUNCTION(function (id) {
  return isPath(MoveDirection.RIGHT, id);
});

exports.isPathBackward = API_FUNCTION(function (id) {
  return isPath(MoveDirection.BACKWARD, id);
});

exports.isPathLeft = API_FUNCTION(function (id) {
  return isPath(MoveDirection.LEFT, id);
});

exports.pilePresent = API_FUNCTION(function (id) {
  var x = Maze.controller.pegmanX;
  var y = Maze.controller.pegmanY;
  return Maze.controller.map.isDirt(y, x) && Maze.controller.map.getValue(y, x) > 0;
});

exports.holePresent = API_FUNCTION(function (id) {
  var x = Maze.controller.pegmanX;
  var y = Maze.controller.pegmanY;
  return Maze.controller.map.isDirt(y, x) && Maze.controller.map.getValue(y, x) < 0;
});

exports.currentPositionNotClear = API_FUNCTION(function (id) {
  var x = Maze.controller.pegmanX;
  var y = Maze.controller.pegmanY;
  return Maze.controller.map.isDirt(y, x) && Maze.controller.map.getValue(y, x) !== 0;
});

exports.fill = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('putdown', id);
  var x = Maze.controller.pegmanX;
  var y = Maze.controller.pegmanY;
  Maze.controller.map.setValue(y, x, Maze.controller.map.getValue(y, x) + 1);
});

exports.dig = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('pickup', id);
  var x = Maze.controller.pegmanX;
  var y = Maze.controller.pegmanY;
  Maze.controller.map.setValue(y, x, Maze.controller.map.getValue(y, x) - 1);
});

exports.notFinished = API_FUNCTION(function () {
  return !Maze.checkSuccess();
});

// The code for this API should get stripped when showing code
exports.loopHighlight = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('null', id);
});

/**
 * Bee related API functions. If better modularized, we could potentially
 * separate these out, but as things stand right now they will be loaded
 * whether or not we're a Bee level
 */
exports.getNectar = API_FUNCTION(function (id) {
  if (Maze.controller.subtype.tryGetNectar()) {
    Maze.executionInfo.queueAction("nectar", id);
  }
});

exports.makeHoney = API_FUNCTION(function (id) {
  if (Maze.controller.subtype.tryMakeHoney()) {
    Maze.executionInfo.queueAction("honey", id);
  }
});

exports.atFlower = API_FUNCTION(function (id) {
  var col = Maze.controller.pegmanX;
  var row = Maze.controller.pegmanY;
  Maze.executionInfo.queueAction("at_flower", id);
  return Maze.controller.subtype.isFlower(row, col, true);
});

exports.atHoneycomb = API_FUNCTION(function (id) {
  var col = Maze.controller.pegmanX;
  var row = Maze.controller.pegmanY;
  Maze.executionInfo.queueAction("at_honeycomb", id);
  return Maze.controller.subtype.isHive(row, col, true);
});

exports.nectarRemaining = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction("nectar_remaining", id);
  return Maze.controller.subtype.nectarRemaining(true);
});

exports.honeyAvailable = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction("honey_available", id);
  return Maze.controller.subtype.honeyAvailable();
});

exports.nectarCollected = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction("nectar_collected", id);
  return Maze.controller.subtype.nectars_.length;
});

exports.honeyCreated = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction("honey_created", id);
  return Maze.controller.subtype.honey_;
});

/**
 * Harvester
 */

exports.getCorn = API_FUNCTION(function (id) {
  if (Maze.controller.subtype.tryGetCorn()) {
    Maze.executionInfo.queueAction("get_corn", id);
  }
});

exports.getPumpkin = API_FUNCTION(function (id) {
  if (Maze.controller.subtype.tryGetPumpkin()) {
    Maze.executionInfo.queueAction("get_pumpkin", id);
  }
});

exports.getLettuce = API_FUNCTION(function (id) {
  if (Maze.controller.subtype.tryGetLettuce()) {
    Maze.executionInfo.queueAction("get_lettuce", id);
  }
});

exports.atCorn = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('at_corn', id);
  return Maze.controller.subtype.atCorn(id);
});

exports.atPumpkin = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('at_pumpkin', id);
  return Maze.controller.subtype.atPumpkin(id);
});

exports.atLettuce = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('at_lettuce', id);
  return Maze.controller.subtype.atLettuce(id);
});

exports.hasCorn = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('has_corn', id);
  return Maze.controller.subtype.hasCorn(id);
});

exports.hasPumpkin = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('has_pumpkin', id);
  return Maze.controller.subtype.hasPumpkin(id);
});

exports.hasLettuce = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('has_lettuce', id);
  return Maze.controller.subtype.hasLettuce(id);
});

/**
 * Planter
 */

exports.plant = API_FUNCTION(function (id) {
  if (Maze.controller.subtype.tryPlant()) {
    Maze.executionInfo.queueAction('plant', id);
  }
});

exports.atSoil = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('at_soil', id);
  return Maze.controller.subtype.atSoil(id);
});

exports.atSprout = API_FUNCTION(function (id) {
  Maze.executionInfo.queueAction('at_sprout', id);
  return Maze.controller.subtype.atSprout(id);
});

/**
 * Collector
 */

exports.collect = API_FUNCTION(function (id) {
  var col = Maze.controller.pegmanX;
  var row = Maze.controller.pegmanY;
  if (Maze.controller.subtype.tryCollect(row, col)) {
    Maze.executionInfo.queueAction('pickup', id);
  }
});

/***/ }),

/***/ 3127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.blocks = [{ 'func': 'moveForward', 'category': 'Movement' }, { 'func': 'turnLeft', 'category': 'Movement' }, { 'func': 'turnRight', 'category': 'Movement' }];

module.exports.categories = {
  'Movement': {
    'color': 'red',
    'blocks': []
  }
};

/***/ }),

/***/ 3128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Blockly Apps: Maze
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
 * @fileoverview JavaScript for Blockly's Maze application.
 * @author fraser@google.com (Neil Fraser)
 */

var timeoutList = __webpack_require__(1014);

var AnimationsController = __webpack_require__(3129);
var MazeMap = __webpack_require__(2752);
var drawMap = __webpack_require__(2134);
var getSubtypeForSkin = __webpack_require__(1299).getSubtypeForSkin;
var tiles = __webpack_require__(773);

module.exports = function () {
  function MazeController(level, skin, config) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, MazeController);

    this.stepSpeed = 100;

    this.level = level;
    this.skin = skin;
    this.startDirection = null;

    this.subtype = null;
    this.map = null;
    this.animationsController = null;
    this.store = null;

    this.pegmanD = null;
    this.pegmanX = null;
    this.pegmanY = null;

    this.MAZE_HEIGHT = null;
    this.MAZE_WIDTH = null;
    this.PATH_WIDTH = null;
    this.PEGMAN_HEIGHT = null;
    this.PEGMAN_WIDTH = null;
    this.PEGMAN_X_OFFSET = null;
    this.PEGMAN_Y_OFFSET = null;
    this.SQUARE_SIZE = null;

    if (options.reduxStore) {
      this.addReduxStore(options.reduxStore);
    }

    if (options.methods) {
      this.rebindMethods(options.methods);
    }

    var Type = getSubtypeForSkin(config.skinId);
    this.subtype = new Type(this, config);
    this.loadLevel_();
  }

  /**
   * A few placeholder methods intended to be rebound
   */


  MazeController.prototype.playAudio = function playAudio() {};

  MazeController.prototype.playAudioOnFailure = function playAudioOnFailure() {};

  MazeController.prototype.loadAudio = function loadAudio() {};

  MazeController.prototype.getTestResults = function getTestResults() {};

  MazeController.prototype.rebindMethods = function rebindMethods(methods) {
    this.playAudio = methods.playAudio || this.playAudio;
    this.playAudioOnFailure = methods.playAudioOnFailure || this.playAudioOnFailure;
    this.loadAudio = methods.loadAudio || this.loadAudio;
    this.getTestResults = methods.getTestResults || this.getTestResults;
  };

  MazeController.prototype.addReduxStore = function addReduxStore(store) {
    this.store = store;
  };

  MazeController.prototype.initWithSvg = function initWithSvg(svg) {
    // Adjust outer element size.
    svg.setAttribute('width', this.MAZE_WIDTH);
    svg.setAttribute('height', this.MAZE_HEIGHT);

    drawMap.default(svg, this.skin, this.subtype, this.map, this.SQUARE_SIZE);
    this.animationsController = new AnimationsController(this, svg);
  };

  MazeController.prototype.loadLevel_ = function loadLevel_() {
    // Load maps.
    //
    // "serializedMaze" is the new way of storing maps; it's a JSON array
    // containing complex map data.
    //
    // "map" plus optionally "levelDirt" is the old way of storing maps;
    // they are each arrays of a combination of strings and ints with
    // their own complex syntax. This way is deprecated for new levels,
    // and only exists for backwards compatibility for not-yet-updated
    // levels.
    if (this.level.serializedMaze) {
      this.map = MazeMap.deserialize(this.level.serializedMaze, this.subtype.getCellClass());
    } else {
      this.map = MazeMap.parseFromOldValues(this.level.map, this.level.initialDirt, this.subtype.getCellClass());
    }

    // this could possibly be eliminated in favor of just always referencing
    // this.level.startDirection
    this.startDirection = this.level.startDirection;

    // this could probably be moved to the constructor

    if (this.level.fastGetNectarAnimation) {
      this.skin.actionSpeedScale.nectar = 0.5;
    }

    // Pixel height and width of each maze square (i.e. tile).
    this.SQUARE_SIZE = 50;
    this.PEGMAN_HEIGHT = this.skin.pegmanHeight;
    this.PEGMAN_WIDTH = this.skin.pegmanWidth;
    this.PEGMAN_X_OFFSET = this.skin.pegmanXOffset || 0;
    this.PEGMAN_Y_OFFSET = this.skin.pegmanYOffset;

    this.MAZE_WIDTH = this.SQUARE_SIZE * this.map.COLS;
    this.MAZE_HEIGHT = this.SQUARE_SIZE * this.map.ROWS;
    this.PATH_WIDTH = this.SQUARE_SIZE / 3;
  };

  /**
   * Redraw all dirt images
   * @param {boolean} running Whether or not user program is currently running
   */


  MazeController.prototype.resetDirtImages = function resetDirtImages(running) {
    var _this = this;

    this.map.forEachCell(function (cell, row, col) {
      _this.subtype.drawer.updateItemImage(row, col, running);
    });
  };

  /**
   * Initialize Blockly and the maze.  Called on page load.
   */


  MazeController.prototype.gridNumberToPosition_ = function gridNumberToPosition_(n) {
    return (n + 0.5) * this.SQUARE_SIZE;
  };

  /**
   * @param svg
   * @param {Array<Array>} coordinates An array of x and y grid coordinates.
   */


  MazeController.prototype.drawHintPath = function drawHintPath(svg, coordinates) {
    var _this2 = this;

    var path = svg.getElementById('hintPath');
    path.setAttribute('d', 'M' + coordinates.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      return _this2.gridNumberToPosition_(x) + ',' + _this2.gridNumberToPosition_(y);
    }).join(' '));
  };

  /**
   * Reset the maze to the start position and kill any pending animation tasks.
   * @param {boolean} first True if an opening animation is to be played.
   */


  MazeController.prototype.reset = function reset(first) {
    this.subtype.reset();

    // Kill all tasks.
    timeoutList.clearTimeouts();

    // Move Pegman into position.
    this.pegmanX = this.subtype.start.x;
    this.pegmanY = this.subtype.start.y;

    this.pegmanD = this.startDirection;
    this.animationsController.reset(first);

    // Move the init dirt marker icons into position.
    this.map.resetDirt();
    this.resetDirtImages(false);

    // Reset the obstacle image.
    var obsId = 0;
    var x, y;
    for (y = 0; y < this.map.ROWS; y++) {
      for (x = 0; x < this.map.COLS; x++) {
        var obsIcon = document.getElementById('obstacle' + obsId);
        if (obsIcon) {
          obsIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.skin.obstacleIdle);
        }
        ++obsId;
      }
    }

    if (this.subtype.resetTiles) {
      this.subtype.resetTiles();
    } else {
      this.resetTiles_();
    }
  };

  MazeController.prototype.resetTiles_ = function resetTiles_() {
    // Reset the tiles
    var tileId = 0;
    for (var y = 0; y < this.map.ROWS; y++) {
      for (var x = 0; x < this.map.COLS; x++) {
        // Tile's clipPath element.
        var tileClip = document.getElementById('tileClipPath' + tileId);
        tileClip.setAttribute('visibility', 'visible');
        // Tile sprite.
        var tileElement = document.getElementById('tileElement' + tileId);
        tileElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.skin.tiles);
        tileElement.setAttribute('opacity', 1);
        tileId++;
      }
    }
  };

  MazeController.prototype.animatedFinish = function animatedFinish(timePerStep) {
    this.animationsController.scheduleDance(true, timePerStep);
  };

  MazeController.prototype.animatedMove = function animatedMove(direction, timeForMove) {
    var positionChange = tiles.directionToDxDy(direction);
    var newX = this.pegmanX + positionChange.dx;
    var newY = this.pegmanY + positionChange.dy;
    this.animationsController.scheduleMove(newX, newY, timeForMove);
    this.playAudio('walk');
    this.pegmanX = newX;
    this.pegmanY = newY;
  };

  MazeController.prototype.animatedTurn = function animatedTurn(direction) {
    var newDirection = this.pegmanD + direction;
    this.animationsController.scheduleTurn(newDirection);
    this.pegmanD = tiles.constrainDirection4(newDirection);
  };

  MazeController.prototype.animatedFail = function animatedFail(forward) {
    var _this3 = this;

    var dxDy = tiles.directionToDxDy(this.pegmanD);
    var deltaX = dxDy.dx;
    var deltaY = dxDy.dy;

    if (!forward) {
      deltaX = -deltaX;
      deltaY = -deltaY;
    }

    var targetX = this.pegmanX + deltaX;
    var targetY = this.pegmanY + deltaY;
    var frame = tiles.directionToFrame(this.pegmanD);
    this.animationsController.displayPegman(this.pegmanX + deltaX / 4, this.pegmanY + deltaY / 4, frame);
    // Play sound and animation for hitting wall or obstacle
    var squareType = this.map.getTile(targetY, targetX);
    if (squareType === tiles.SquareType.WALL || squareType === undefined || this.subtype.isScrat() && squareType === tiles.SquareType.OBSTACLE) {
      // Play the sound
      this.playAudio('wall');
      if (squareType !== undefined) {
        // Check which type of wall pegman is hitting
        this.playAudio('wall' + this.subtype.wallMap[targetY][targetX]);
      }

      if (this.subtype.isScrat() && squareType === tiles.SquareType.OBSTACLE) {
        this.animationsController.crackSurroundingIce(targetX, targetY);
      }

      this.animationsController.scheduleWallHit(targetX, targetY, deltaX, deltaY, frame);
      timeoutList.setTimeout(function () {
        _this3.playAudioOnFailure();
      }, this.stepSpeed * 2);
    } else if (squareType === tiles.SquareType.OBSTACLE) {
      // Play the sound
      this.playAudio('obstacle');
      this.animationsController.scheduleObstacleHit(targetX, targetY, deltaX, deltaY, frame);
      timeoutList.setTimeout(function () {
        _this3.playAudioOnFailure();
      }, this.stepSpeed);
    }
  };

  /**
   * Display the look icon at Pegman's current location,
   * in the specified direction.
   * @param {!Direction} direction Direction (0 - 3).
   */


  MazeController.prototype.animatedLook = function animatedLook(direction) {
    var x = this.pegmanX;
    var y = this.pegmanY;
    switch (direction) {
      case tiles.Direction.NORTH:
        x += 0.5;
        break;
      case tiles.Direction.EAST:
        x += 1;
        y += 0.5;
        break;
      case tiles.Direction.SOUTH:
        x += 0.5;
        y += 1;
        break;
      case tiles.Direction.WEST:
        y += 0.5;
        break;
    }
    x *= this.SQUARE_SIZE;
    y *= this.SQUARE_SIZE;
    var d = direction * 90 - 45;

    this.animationsController.scheduleLook(x, y, d);
  };

  MazeController.prototype.scheduleDirtChange_ = function scheduleDirtChange_(options) {
    var col = this.pegmanX;
    var row = this.pegmanY;

    // cells that started as "flat" will be undefined
    var previousValue = this.map.getValue(row, col) || 0;

    this.map.setValue(row, col, previousValue + options.amount);
    this.subtype.scheduleDirtChange(row, col);
    this.playAudio(options.sound);
  };

  /**
   * Schedule to add dirt at pegman's current position.
   */


  MazeController.prototype.scheduleFill = function scheduleFill() {
    this.scheduleDirtChange_({
      amount: 1,
      sound: 'fill'
    });
  };

  /**
   * Schedule to remove dirt at pegman's current location.
   */


  MazeController.prototype.scheduleDig = function scheduleDig() {
    this.scheduleDirtChange_({
      amount: -1,
      sound: 'dig'
    });
  };

  return MazeController;
}();

/***/ }),

/***/ 3129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SVG_NS = __webpack_require__(216).SVG_NS;
var drawMap = __webpack_require__(2134);
var _displayPegman = drawMap.displayPegman;
var getPegmanYForRow = drawMap.getPegmanYForRow;
var timeoutList = __webpack_require__(1014);
var utils = __webpack_require__(71);
var tiles = __webpack_require__(773);

module.exports = function () {
  function AnimationsController(maze, svg) {
    _classCallCheck(this, AnimationsController);

    this.maze = maze;
    this.svg = svg;

    this.createAnimations_();
  }

  AnimationsController.prototype.createAnimations_ = function createAnimations_() {
    var _this = this;

    // Add idle pegman.
    if (this.maze.skin.idlePegmanAnimation) {
      this.createPegmanAnimation_({
        idStr: 'idle',
        pegmanImage: this.maze.skin.idlePegmanAnimation,
        row: this.maze.subtype.start.y,
        col: this.maze.subtype.start.x,
        direction: this.maze.startDirection,
        numColPegman: this.maze.skin.idlePegmanCol,
        numRowPegman: this.maze.skin.idlePegmanRow
      });

      if (this.maze.skin.idlePegmanCol > 1 || this.maze.skin.idlePegmanRow > 1) {
        // our idle is a sprite sheet instead of a gif. schedule cycling through
        // the frames
        var numFrames = this.maze.skin.idlePegmanRow;
        var idlePegmanIcon = document.getElementById('idlePegman');
        var timePerFrame = 600; // timeForAnimation / numFrames;
        var idleAnimationFrame = 0;

        setInterval(function () {
          if (idlePegmanIcon.getAttribute('visibility') === 'visible') {
            _this.updatePegmanAnimation_({
              idStr: 'idle',
              row: _this.maze.subtype.start.y,
              col: _this.maze.subtype.start.x,
              direction: _this.maze.startDirection,
              animationRow: idleAnimationFrame
            });
            idleAnimationFrame = (idleAnimationFrame + 1) % numFrames;
          }
        }, timePerFrame);
      }
    }

    if (this.maze.skin.celebrateAnimation) {
      this.createPegmanAnimation_({
        idStr: 'celebrate',
        pegmanImage: this.maze.skin.celebrateAnimation,
        row: this.maze.subtype.start.y,
        col: this.maze.subtype.start.x,
        direction: tiles.Direction.NORTH,
        numColPegman: this.maze.skin.celebratePegmanCol,
        numRowPegman: this.maze.skin.celebratePegmanRow
      });
    }

    // Add the hidden dazed pegman when hitting the wall.
    if (this.maze.skin.wallPegmanAnimation) {
      this.createPegmanAnimation_({
        idStr: 'wall',
        pegmanImage: this.maze.skin.wallPegmanAnimation
      });
    }

    // create element for our hitting wall spritesheet
    if (this.maze.skin.hittingWallAnimation && this.maze.skin.hittingWallAnimationFrameNumber) {
      this.createPegmanAnimation_({
        idStr: 'wall',
        pegmanImage: this.maze.skin.hittingWallAnimation,
        numColPegman: this.maze.skin.hittingWallPegmanCol,
        numRowPegman: this.maze.skin.hittingWallPegmanRow
      });
      document.getElementById('wallPegman').setAttribute('visibility', 'hidden');
    }

    // Add the hidden moving pegman animation.
    if (this.maze.skin.movePegmanAnimation) {
      this.createPegmanAnimation_({
        idStr: 'move',
        pegmanImage: this.maze.skin.movePegmanAnimation,
        numColPegman: 4,
        numRowPegman: this.maze.skin.movePegmanAnimationFrameNumber || 9
      });
    }

    // Add wall hitting animation
    if (this.maze.skin.hittingWallAnimation) {
      var wallAnimationIcon = document.createElementNS(SVG_NS, 'image');
      wallAnimationIcon.setAttribute('id', 'wallAnimation');
      wallAnimationIcon.setAttribute('height', this.maze.SQUARE_SIZE);
      wallAnimationIcon.setAttribute('width', this.maze.SQUARE_SIZE);
      wallAnimationIcon.setAttribute('visibility', 'hidden');
      this.svg.appendChild(wallAnimationIcon);
    }
  };

  AnimationsController.prototype.reset = function reset(first) {
    var _this2 = this;

    if (first) {
      // Dance consists of 5 animations, each of which get 150ms
      var danceTime = 150 * 5;
      if (this.maze.skin.danceOnLoad) {
        this.scheduleDance(false, danceTime);
      }
      timeoutList.setTimeout(function () {
        _this2.maze.stepSpeed = 100;
        _this2.scheduleTurn(_this2.maze.startDirection);
      }, danceTime + 150);
    } else {
      this.displayPegman(this.maze.pegmanX, this.maze.pegmanY, tiles.directionToFrame(this.maze.pegmanD));

      var finishIcon = document.getElementById('finish');
      if (finishIcon) {
        finishIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.maze.skin.goalIdle);
      }
    }

    // Make 'look' icon invisible and promote to top.
    var lookIcon = document.getElementById('look');
    lookIcon.style.display = 'none';
    lookIcon.parentNode.appendChild(lookIcon);
    var paths = lookIcon.getElementsByTagName('path');
    for (var i = 0; i < paths.length; i++) {
      var path = paths[i];
      path.setAttribute('stroke', this.maze.skin.look);
    }

    // Reset pegman's visibility.
    var pegmanIcon = document.getElementById('pegman');
    pegmanIcon.setAttribute('opacity', 1);

    if (this.maze.skin.idlePegmanAnimation) {
      pegmanIcon.setAttribute('visibility', 'hidden');
      var idlePegmanIcon = document.getElementById('idlePegman');
      idlePegmanIcon.setAttribute('visibility', 'visible');
    } else {
      pegmanIcon.setAttribute('visibility', 'visible');
    }

    if (this.maze.skin.wallPegmanAnimation) {
      var wallPegmanIcon = document.getElementById('wallPegman');
      wallPegmanIcon.setAttribute('visibility', 'hidden');
    }

    if (this.maze.skin.movePegmanAnimation) {
      var movePegmanIcon = document.getElementById('movePegman');
      movePegmanIcon.setAttribute('visibility', 'hidden');
    }

    if (this.maze.skin.celebrateAnimation) {
      var celebrateAnimation = document.getElementById('celebratePegman');
      celebrateAnimation.setAttribute('visibility', 'hidden');
    }
  };

  /**
   * Create sprite assets for pegman.
   * @param options Specify different features of the pegman animation.
   * idStr required identifier for the pegman.
   * pegmanImage required which image to use for the animation.
   * col which column the pegman is at.
   * row which row the pegman is at.
   * direction which direction the pegman is facing at.
   * numColPegman number of the pegman in each row, default is 4.
   * numRowPegman number of the pegman in each column, default is 1.
   */


  AnimationsController.prototype.createPegmanAnimation_ = function createPegmanAnimation_(options) {
    // Create clip path.
    var clip = document.createElementNS(SVG_NS, 'clipPath');
    clip.setAttribute('id', options.idStr + 'PegmanClip');
    var rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttribute('id', options.idStr + 'PegmanClipRect');
    if (options.col !== undefined) {
      rect.setAttribute('x', options.col * this.maze.SQUARE_SIZE + 1 + this.maze.PEGMAN_X_OFFSET);
    }
    if (options.row !== undefined) {
      rect.setAttribute('y', getPegmanYForRow(this.maze.skin, options.row));
    }
    rect.setAttribute('width', this.maze.PEGMAN_WIDTH);
    rect.setAttribute('height', this.maze.PEGMAN_HEIGHT);
    clip.appendChild(rect);
    this.svg.appendChild(clip);
    // Create image.
    var imgSrc = options.pegmanImage;
    var img = document.createElementNS(SVG_NS, 'image');
    img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', imgSrc);
    img.setAttribute('height', this.maze.PEGMAN_HEIGHT * (options.numRowPegman || 1));
    img.setAttribute('width', this.maze.PEGMAN_WIDTH * (options.numColPegman || 4));
    img.setAttribute('clip-path', 'url(#' + options.idStr + 'PegmanClip)');
    img.setAttribute('id', options.idStr + 'Pegman');
    this.svg.appendChild(img);
    // Update pegman icon & clip path.
    if (options.col !== undefined && options.direction !== undefined) {
      var x = this.maze.SQUARE_SIZE * options.col - options.direction * this.maze.PEGMAN_WIDTH + 1 + this.maze.PEGMAN_X_OFFSET;
      img.setAttribute('x', x);
    }
    if (options.row !== undefined) {
      img.setAttribute('y', getPegmanYForRow(this.maze.skin, options.row));
    }
  };

  /**
   * Calculate the Y offset within the sheet
   */


  AnimationsController.prototype.getPegmanFrameOffsetY_ = function getPegmanFrameOffsetY_(animationRow) {
    animationRow = animationRow || 0;
    return animationRow * this.maze.PEGMAN_HEIGHT;
  };

  /**
    * Update sprite assets for pegman.
    * @param options Specify different features of the pegman animation.
    * idStr required identifier for the pegman.
    * col required which column the pegman is at.
    * row required which row the pegman is at.
    * direction required which direction the pegman is facing at.
    * animationRow which row of the sprite sheet the pegman animation needs
    */


  AnimationsController.prototype.updatePegmanAnimation_ = function updatePegmanAnimation_(options) {
    var rect = document.getElementById(options.idStr + 'PegmanClipRect');
    rect.setAttribute('x', options.col * this.maze.SQUARE_SIZE + 1 + this.maze.PEGMAN_X_OFFSET);
    rect.setAttribute('y', getPegmanYForRow(this.maze.skin, options.row));
    var img = document.getElementById(options.idStr + 'Pegman');
    var x = this.maze.SQUARE_SIZE * options.col - options.direction * this.maze.PEGMAN_WIDTH + 1 + this.maze.PEGMAN_X_OFFSET;
    img.setAttribute('x', x);
    var y = getPegmanYForRow(this.maze.skin, options.row) - this.getPegmanFrameOffsetY_(options.animationRow);
    img.setAttribute('y', y);
    img.setAttribute('visibility', 'visible');
  };

  /**
   * Schedule a movement animating using a spritesheet.
   */


  AnimationsController.prototype.scheduleSheetedMovement_ = function scheduleSheetedMovement_(start, delta, numFrames, timePerFrame, idStr, direction, hidePegman) {
    var _this3 = this;

    var pegmanIcon = document.getElementById('pegman');
    utils.range(0, numFrames - 1).forEach(function (frame) {
      timeoutList.setTimeout(function () {
        if (hidePegman) {
          pegmanIcon.setAttribute('visibility', 'hidden');
        }
        _this3.updatePegmanAnimation_({
          idStr: idStr,
          col: start.x + delta.x * frame / numFrames,
          row: start.y + delta.y * frame / numFrames,
          direction: direction,
          animationRow: frame
        });
      }, timePerFrame * frame);
    });
  };

  /**
   * Schedule the animations for a move from the current position
   * @param {number} endX X coordinate of the target position
   * @param {number} endY Y coordinate of the target position
   */


  AnimationsController.prototype.scheduleMove = function scheduleMove(endX, endY, timeForAnimation) {
    var _this4 = this;

    var startX = this.maze.pegmanX;
    var startY = this.maze.pegmanY;
    var direction = this.maze.pegmanD;

    var deltaX = endX - startX;
    var deltaY = endY - startY;
    var numFrames;
    var timePerFrame;

    if (this.maze.skin.movePegmanAnimation) {
      numFrames = this.maze.skin.movePegmanAnimationFrameNumber;
      // If move animation of pegman is set, and this is not a turn.
      // Show the animation.
      var pegmanIcon = document.getElementById('pegman');
      var movePegmanIcon = document.getElementById('movePegman');
      timePerFrame = timeForAnimation / numFrames;

      this.scheduleSheetedMovement_({
        x: startX,
        y: startY
      }, {
        x: deltaX,
        y: deltaY
      }, numFrames, timePerFrame, 'move', direction, true);

      // Hide movePegman and set pegman to the end position.
      timeoutList.setTimeout(function () {
        movePegmanIcon.setAttribute('visibility', 'hidden');
        pegmanIcon.setAttribute('visibility', 'visible');
        _this4.displayPegman(endX, endY, tiles.directionToFrame(direction));
        if (_this4.maze.subtype.isWordSearch()) {
          _this4.maze.subtype.markTileVisited(endY, endX, true);
        }
      }, timePerFrame * numFrames);
    } else {
      // we don't have an animation, so just move the x/y pos
      numFrames = 4;
      timePerFrame = timeForAnimation / numFrames;
      utils.range(1, numFrames).forEach(function (frame) {
        timeoutList.setTimeout(function () {
          _this4.displayPegman(startX + deltaX * frame / numFrames, startY + deltaY * frame / numFrames, tiles.directionToFrame(direction));
        }, timePerFrame * frame);
      });
    }

    if (this.maze.skin.approachingGoalAnimation) {
      var finishIcon = document.getElementById('finish');
      // If pegman is close to the goal
      // Replace the goal file with approachingGoalAnimation
      if (this.maze.subtype.finish && Math.abs(endX - this.maze.subtype.finish.x) <= 1 && Math.abs(endY - this.maze.subtype.finish.y) <= 1) {
        finishIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.maze.skin.approachingGoalAnimation);
      } else {
        finishIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.maze.skin.goalIdle);
      }
    }
  };

  /**
   * Schedule the animations for a turn from the current direction
   * @param {number} endDirection The direction we're turning to
   */


  AnimationsController.prototype.scheduleTurn = function scheduleTurn(endDirection) {
    var _this5 = this;

    var numFrames = 4;
    var startDirection = this.maze.pegmanD;
    var deltaDirection = endDirection - startDirection;
    utils.range(1, numFrames).forEach(function (frame) {
      timeoutList.setTimeout(function () {
        _this5.displayPegman(_this5.maze.pegmanX, _this5.maze.pegmanY, tiles.directionToFrame(startDirection + deltaDirection * frame / numFrames));
      }, _this5.maze.stepSpeed * (frame - 1));
    });
  };

  AnimationsController.prototype.crackSurroundingIce = function crackSurroundingIce(targetX, targetY) {
    var _this6 = this;

    // Remove cracked ice, replace surrounding ice with cracked ice.
    this.updateSurroundingTiles_(targetY, targetX, function (tileElement, cell) {
      if (cell.getTile() === tiles.SquareType.OPEN) {
        tileElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', _this6.maze.skin.largerObstacleAnimationTiles);
      } else if (cell.getTile() === tiles.SquareType.OBSTACLE) {
        tileElement.setAttribute('opacity', 0);
      }
    });
  };

  /**
   * Replace the tiles surrounding the obstacle with broken tiles.
   */


  AnimationsController.prototype.updateSurroundingTiles_ = function updateSurroundingTiles_(obstacleY, obstacleX, callback) {
    var tileCoords = [[obstacleY - 1, obstacleX - 1], [obstacleY - 1, obstacleX], [obstacleY - 1, obstacleX + 1], [obstacleY, obstacleX - 1], [obstacleY, obstacleX], [obstacleY, obstacleX + 1], [obstacleY + 1, obstacleX - 1], [obstacleY + 1, obstacleX], [obstacleY + 1, obstacleX + 1]];
    for (var idx = 0; idx < tileCoords.length; ++idx) {
      var row = tileCoords[idx][1];
      var col = tileCoords[idx][0];
      var tileIdx = row + this.maze.map.COLS * col;
      var tileElement = document.getElementById('tileElement' + tileIdx);
      if (tileElement) {
        callback(tileElement, this.maze.map.getCell(col, row));
      }
    }
  };

  AnimationsController.prototype.scheduleWallHit = function scheduleWallHit(targetX, targetY, deltaX, deltaY, frame) {
    var _this7 = this;

    // Play the animation of hitting the wall
    if (this.maze.skin.hittingWallAnimation) {
      var wallAnimationIcon = document.getElementById('wallAnimation');
      var numFrames = this.maze.skin.hittingWallAnimationFrameNumber || 0;

      if (numFrames > 1) {

        // The Scrat "wall" animation has him falling backwards into the water.
        // This looks great when he falls into the water above him, but looks a
        // little off when falling to the side/forward. Tune that by bumping the
        // deltaY by one. Hacky, but looks much better
        if (deltaY >= 0) {
          deltaY += 1;
        }
        // animate our sprite sheet
        var timePerFrame = 100;
        this.scheduleSheetedMovement_({
          x: this.maze.pegmanX,
          y: this.maze.pegmanY
        }, {
          x: deltaX,
          y: deltaY
        }, numFrames, timePerFrame, 'wall', tiles.Direction.NORTH, true);
        setTimeout(function () {
          document.getElementById('wallPegman').setAttribute('visibility', 'hidden');
        }, numFrames * timePerFrame);
      } else {
        // active our gif
        timeoutList.setTimeout(function () {
          wallAnimationIcon.setAttribute('x', _this7.maze.SQUARE_SIZE * (_this7.maze.pegmanX + 0.5 + deltaX * 0.5) - wallAnimationIcon.getAttribute('width') / 2);
          wallAnimationIcon.setAttribute('y', _this7.maze.SQUARE_SIZE * (_this7.maze.pegmanY + 1 + deltaY * 0.5) - wallAnimationIcon.getAttribute('height'));
          wallAnimationIcon.setAttribute('visibility', 'visible');
          wallAnimationIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', _this7.maze.skin.hittingWallAnimation);
        }, this.maze.stepSpeed / 2);
      }
    }
    timeoutList.setTimeout(function () {
      _this7.displayPegman(_this7.maze.pegmanX, _this7.maze.pegmanY, frame);
    }, this.maze.stepSpeed);
    timeoutList.setTimeout(function () {
      _this7.displayPegman(_this7.maze.pegmanX + deltaX / 4, _this7.maze.pegmanY + deltaY / 4, frame);
    }, this.maze.stepSpeed * 2);
    timeoutList.setTimeout(function () {
      _this7.displayPegman(_this7.maze.pegmanX, _this7.maze.pegmanY, frame);
    }, this.maze.stepSpeed * 3);

    if (this.maze.skin.wallPegmanAnimation) {
      timeoutList.setTimeout(function () {
        var pegmanIcon = document.getElementById('pegman');
        pegmanIcon.setAttribute('visibility', 'hidden');
        _this7.updatePegmanAnimation_({
          idStr: 'wall',
          row: _this7.maze.pegmanY,
          col: _this7.maze.pegmanX,
          direction: _this7.maze.pegmanD
        });
      }, this.maze.stepSpeed * 4);
    }
  };

  AnimationsController.prototype.scheduleObstacleHit = function scheduleObstacleHit(targetX, targetY, deltaX, deltaY, frame) {
    var _this8 = this;

    // Play the animation
    var obsId = targetX + this.maze.map.COLS * targetY;
    var obsIcon = document.getElementById('obstacle' + obsId);
    obsIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.maze.skin.obstacleAnimation);
    timeoutList.setTimeout(function () {
      _this8.displayPegman(_this8.maze.pegmanX + deltaX / 2, _this8.maze.pegmanY + deltaY / 2, frame);
    }, this.maze.stepSpeed);

    // Replace the objects around obstacles with broken objects
    if (this.maze.skin.largerObstacleAnimationTiles) {
      timeoutList.setTimeout(function () {
        _this8.updateSurroundingTiles_(targetY, targetX, function (tileElement) {
          return tileElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', _this8.maze.skin.largerObstacleAnimationTiles);
        });
      }, this.maze.stepSpeed);
    }

    // Remove pegman
    if (!this.maze.skin.nonDisappearingPegmanHittingObstacle) {
      var pegmanIcon = document.getElementById('pegman');

      timeoutList.setTimeout(function () {
        pegmanIcon.setAttribute('visibility', 'hidden');
      }, this.maze.stepSpeed * 2);
    }
  };

  AnimationsController.prototype.scheduleLook = function scheduleLook(x, y, d) {
    var lookIcon = document.getElementById('look');
    lookIcon.setAttribute('transform', 'translate(' + x + ', ' + y + ') ' + 'rotate(' + d + ' 0 0) scale(.4)');
    var paths = lookIcon.getElementsByTagName('path');
    lookIcon.style.display = 'inline';
    for (var i = 0; i < paths.length; i++) {
      var path = paths[i];
      this.scheduleLookStep_(path, this.maze.stepSpeed * i);
    }
  };

  /**
   * Schedule one of the 'look' icon's waves to appear, then disappear.
   * @param {!Element} path Element to make appear.
   * @param {number} delay Milliseconds to wait before making wave appear.
   */


  AnimationsController.prototype.scheduleLookStep_ = function scheduleLookStep_(path, delay) {
    var _this9 = this;

    timeoutList.setTimeout(function () {
      path.style.display = 'inline';
      window.setTimeout(function () {
        path.style.display = 'none';
      }, _this9.maze.stepSpeed * 2);
    }, delay);
  };

  AnimationsController.prototype.stopIdling = function stopIdling() {
    // Removing the idle animation and replace with pegman sprite
    if (this.maze.skin.idlePegmanAnimation) {
      var pegmanIcon = document.getElementById('pegman');
      var idlePegmanIcon = document.getElementById('idlePegman');
      idlePegmanIcon.setAttribute('visibility', 'hidden');
      pegmanIcon.setAttribute('visibility', 'visible');
    }
  };

  /**
   * Schedule the animations and sound for a dance.
   * @param {boolean} victoryDance This is a victory dance after completing the
   *   puzzle (vs. dancing on load).
   * @param {integer} timeAlloted How much time we have for our animations
   */


  AnimationsController.prototype.scheduleDance = function scheduleDance(victoryDance, timeAlloted) {
    var _this10 = this;

    var finishIcon = document.getElementById('finish');

    // Some skins (like scrat) have custom celebration animations we want to
    // suport
    if (victoryDance && this.maze.skin.celebrateAnimation) {
      if (finishIcon) {
        finishIcon.setAttribute('visibility', 'hidden');
      }
      var numFrames = this.maze.skin.celebratePegmanRow;
      var timePerFrame = timeAlloted / numFrames;
      var start = { x: this.maze.pegmanX, y: this.maze.pegmanY };

      this.scheduleSheetedMovement_({ x: start.x, y: start.y }, { x: 0, y: 0 }, numFrames, timePerFrame, 'celebrate', tiles.Direction.NORTH, true);
      return;
    }

    var originalFrame = tiles.directionToFrame(this.maze.pegmanD);
    this.displayPegman(this.maze.pegmanX, this.maze.pegmanY, 16);

    // If victoryDance === true, play the goal animation, else reset it
    if (victoryDance && finishIcon) {
      finishIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.maze.skin.goalAnimation);
    }

    var danceSpeed = timeAlloted / 5;
    timeoutList.setTimeout(function () {
      _this10.displayPegman(_this10.maze.pegmanX, _this10.maze.pegmanY, 18);
    }, danceSpeed);
    timeoutList.setTimeout(function () {
      _this10.displayPegman(_this10.maze.pegmanX, _this10.maze.pegmanY, 20);
    }, danceSpeed * 2);
    timeoutList.setTimeout(function () {
      _this10.displayPegman(_this10.maze.pegmanX, _this10.maze.pegmanY, 18);
    }, danceSpeed * 3);
    timeoutList.setTimeout(function () {
      _this10.displayPegman(_this10.maze.pegmanX, _this10.maze.pegmanY, 20);
    }, danceSpeed * 4);

    timeoutList.setTimeout(function () {
      if (!victoryDance || _this10.maze.skin.turnAfterVictory) {
        _this10.displayPegman(_this10.maze.pegmanX, _this10.maze.pegmanY, originalFrame);
      }

      if (victoryDance && _this10.maze.skin.transparentTileEnding) {
        _this10.setTileTransparent_();
      }

      if (_this10.maze.subtype.isWordSearch()) {
        _this10.setPegmanTransparent_();
      }
    }, danceSpeed * 5);
  };

  /**
   * Set the tiles to be transparent gradually.
   */


  AnimationsController.prototype.setTileTransparent_ = function setTileTransparent_() {
    var tileId = 0;
    for (var y = 0; y < this.maze.map.ROWS; y++) {
      for (var x = 0; x < this.maze.map.COLS; x++) {
        // Tile sprite.
        var tileElement = document.getElementById('tileElement' + tileId);
        var tileAnimation = document.getElementById('tileAnimation' + tileId);
        if (tileElement) {
          tileElement.setAttribute('opacity', 0);
        }
        if (tileAnimation && tileAnimation.beginElement) {
          // IE doesn't support beginElement, so check for it.
          tileAnimation.beginElement();
        }
        tileId++;
      }
    }
  };

  AnimationsController.prototype.setPegmanTransparent_ = function setPegmanTransparent_() {
    var pegmanFadeoutAnimation = document.getElementById('pegmanFadeoutAnimation');
    var pegmanIcon = document.getElementById('pegman');
    if (pegmanIcon) {
      pegmanIcon.setAttribute('opacity', 0);
    }
    if (pegmanFadeoutAnimation && pegmanFadeoutAnimation.beginElement) {
      // IE doesn't support beginElement, so check for it.
      pegmanFadeoutAnimation.beginElement();
    }
  };

  /**
   * Display Pegman at the specified location, facing the specified direction.
   * @param {number} x Horizontal grid (or fraction thereof).
   * @param {number} y Vertical grid (or fraction thereof).
   * @param {number} frame Direction (0 - 15) or dance (16 - 17).
   */


  AnimationsController.prototype.displayPegman = function displayPegman(x, y, frame) {
    var pegmanIcon = document.getElementById('pegman');
    var clipRect = document.getElementById('clipRect');
    _displayPegman(this.maze.skin, pegmanIcon, clipRect, x, y, frame);
  };

  return AnimationsController;
}();

/***/ }),

/***/ 3130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResultsHandlerForSubtype = createResultsHandlerForSubtype;
var Farmer = __webpack_require__(2135);
var Bee = __webpack_require__(2136);
var Collector = __webpack_require__(2137);
var Wordsearch = __webpack_require__(2138);
var Harvester = __webpack_require__(2139);
var Planter = __webpack_require__(2140);

var FarmerHandler = __webpack_require__(3131);
var BeeHandler = __webpack_require__(3132);
var CollectorHandler = __webpack_require__(3133);
var WordsearchHandler = __webpack_require__(3134);
var HarvesterHandler = __webpack_require__(3135);
var PlanterHandler = __webpack_require__(3136);
var ResultsHandler = __webpack_require__(1738);

function createResultsHandlerForSubtype(controller, config) {
  var handler = ResultsHandler;

  if (controller.subtype instanceof Farmer) {
    handler = FarmerHandler;
  } else if (controller.subtype instanceof Bee) {
    handler = BeeHandler;
  } else if (controller.subtype instanceof Collector) {
    handler = CollectorHandler;
  } else if (controller.subtype instanceof Wordsearch) {
    handler = WordsearchHandler;
  } else if (controller.subtype instanceof Harvester) {
    handler = HarvesterHandler;
  } else if (controller.subtype instanceof Planter) {
    handler = PlanterHandler;
  }

  return new handler(controller, config);
}

/***/ }),

/***/ 3131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resultsHandler = __webpack_require__(1738);

var _resultsHandler2 = _interopRequireDefault(_resultsHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FarmerHandler = function (_ResultsHandler) {
  _inherits(FarmerHandler, _ResultsHandler);

  function FarmerHandler() {
    _classCallCheck(this, FarmerHandler);

    return _possibleConstructorReturn(this, _ResultsHandler.apply(this, arguments));
  }

  /**
   * @override
   */
  FarmerHandler.prototype.succeeded = function succeeded() {
    if (this.maze_.subtype.finish) {
      return _ResultsHandler.prototype.succeeded.call(this);
    }

    return this.isDirtCorrect_();
  };

  /**
   * Returns true iff there are no piles or holes anywhere on the map
   * @returns boolean
   */


  FarmerHandler.prototype.isDirtCorrect_ = function isDirtCorrect_() {
    for (var row = 0; row < this.maze_.map.ROWS; row++) {
      for (var col = 0; col < this.maze_.map.COLS; col++) {
        if (this.maze_.map.isDirt(row, col) && this.maze_.map.getValue(row, col) !== 0) {
          return false;
        }
      }
    }
    return true;
  };

  return FarmerHandler;
}(_resultsHandler2.default);

exports.default = FarmerHandler;
module.exports = exports['default'];

/***/ }),

/***/ 3132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gatherer = __webpack_require__(2906);

var _gatherer2 = _interopRequireDefault(_gatherer);

var _locale = __webpack_require__(851);

var _locale2 = _interopRequireDefault(_locale);

var _constants = __webpack_require__(216);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeeHandler = function (_GathererHandler) {
  _inherits(BeeHandler, _GathererHandler);

  function BeeHandler(maze, config) {
    _classCallCheck(this, BeeHandler);

    var _this = _possibleConstructorReturn(this, _GathererHandler.call(this, maze, config));

    _this.nectarGoal_ = config.level.nectarGoal || 0;
    _this.honeyGoal_ = config.level.honeyGoal || 0;

    // Initialize subtype-specific event listeners

    _this.maze_.subtype.on('notAtFlower', function () {
      _this.executionInfo.terminateWithValue(_constants.BeeTerminationValue.NOT_AT_FLOWER);
    });

    _this.maze_.subtype.on('flowerEmpty', function () {
      _this.executionInfo.terminateWithValue(_constants.BeeTerminationValue.FLOWER_EMPTY);
    });

    _this.maze_.subtype.on('notAtHive', function () {
      _this.executionInfo.terminateWithValue(_constants.BeeTerminationValue.NOT_AT_HONEYCOMB);
    });

    _this.maze_.subtype.on('hiveFull', function () {
      _this.executionInfo.terminateWithValue(_constants.BeeTerminationValue.HONEYCOMB_FULL);
    });
    return _this;
  }

  /**
   * Did we reach our total nectar/honey goals?
   * @return {boolean}
   * @override
   */


  BeeHandler.prototype.succeeded = function succeeded() {
    // nectar/honey goals
    if (this.maze_.subtype.getHoneyCount() < this.honeyGoal_ || this.maze_.subtype.getNectarCount() < this.nectarGoal_) {
      return false;
    }

    if (!this.maze_.subtype.checkedAllClouded() || !this.maze_.subtype.checkedAllPurple()) {
      return false;
    }

    return _GathererHandler.prototype.succeeded.call(this);
  };

  /**
   * @override
   */


  BeeHandler.prototype.collectedEverything = function collectedEverything() {
    // quantum maps implicity require "collect everything", non-quantum
    // maps don't really care
    if (!this.maze_.map.hasMultiplePossibleGrids()) {
      return true;
    }

    return _GathererHandler.prototype.collectedEverything.call(this);
  };

  /**
   * @override
   */


  BeeHandler.prototype.terminateWithAppSpecificValue = function terminateWithAppSpecificValue() {
    var executionInfo = this.executionInfo;

    if (this.maze_.subtype.getNectarCount() < this.nectarGoal_) {
      executionInfo.terminateWithValue(_constants.BeeTerminationValue.INSUFFICIENT_NECTAR);
    } else if (this.maze_.subtype.getHoneyCount() < this.honeyGoal_) {
      executionInfo.terminateWithValue(_constants.BeeTerminationValue.INSUFFICIENT_HONEY);
    } else if (!this.maze_.subtype.checkedAllClouded()) {
      executionInfo.terminateWithValue(_constants.BeeTerminationValue.UNCHECKED_CLOUD);
    } else if (!this.maze_.subtype.checkedAllPurple()) {
      executionInfo.terminateWithValue(_constants.BeeTerminationValue.UNCHECKED_PURPLE);
    } else if (!this.collectedEverything()) {
      executionInfo.terminateWithValue(_constants.BeeTerminationValue.DID_NOT_COLLECT_EVERYTHING);
    }
  };

  /**
   * @override
   */


  BeeHandler.prototype.getTestResults = function getTestResults(terminationValue) {
    switch (terminationValue) {
      case _constants.BeeTerminationValue.NOT_AT_FLOWER:
      case _constants.BeeTerminationValue.FLOWER_EMPTY:
      case _constants.BeeTerminationValue.NOT_AT_HONEYCOMB:
      case _constants.BeeTerminationValue.HONEYCOMB_FULL:
        return _constants.TestResults.APP_SPECIFIC_FAIL;

      case _constants.BeeTerminationValue.UNCHECKED_CLOUD:
      case _constants.BeeTerminationValue.UNCHECKED_PURPLE:
      case _constants.BeeTerminationValue.INSUFFICIENT_NECTAR:
      case _constants.BeeTerminationValue.INSUFFICIENT_HONEY:
      case _constants.BeeTerminationValue.DID_NOT_COLLECT_EVERYTHING:
        var testResults = this.maze_.getTestResults(true);
        // If we have a non-app specific failure, we want that to take precedence.
        // Values over TOO_MANY_BLOCKS_FAIL are not true failures, but indicate
        // a suboptimal solution, so in those cases we want to return our
        // app specific fail. Same goes for BLOCK_LIMIT_FAIL.
        if (testResults >= _constants.TestResults.TOO_MANY_BLOCKS_FAIL || testResults === _constants.TestResults.BLOCK_LIMIT_FAIL) {
          testResults = _constants.TestResults.APP_SPECIFIC_FAIL;
        }
        return testResults;
    }

    return _GathererHandler.prototype.getTestResults.call(this, terminationValue);
  };

  /**
   * @override
   */


  BeeHandler.prototype.getMessage = function getMessage(terminationValue) {
    switch (terminationValue) {
      case _constants.BeeTerminationValue.NOT_AT_FLOWER:
        return _locale2.default.notAtFlowerError();
      case _constants.BeeTerminationValue.FLOWER_EMPTY:
        return _locale2.default.flowerEmptyError();
      case _constants.BeeTerminationValue.NOT_AT_HONEYCOMB:
        return _locale2.default.notAtHoneycombError();
      case _constants.BeeTerminationValue.HONEYCOMB_FULL:
        return _locale2.default.honeycombFullError();
      case _constants.BeeTerminationValue.UNCHECKED_CLOUD:
        return _locale2.default.uncheckedCloudError();
      case _constants.BeeTerminationValue.UNCHECKED_PURPLE:
        return _locale2.default.uncheckedPurpleError();
      case _constants.BeeTerminationValue.INSUFFICIENT_NECTAR:
        return _locale2.default.insufficientNectar();
      case _constants.BeeTerminationValue.INSUFFICIENT_HONEY:
        return _locale2.default.insufficientHoney();
      case _constants.BeeTerminationValue.DID_NOT_COLLECT_EVERYTHING:
        return _locale2.default.didNotCollectEverything();
      default:
        return _GathererHandler.prototype.getMessage.call(this, terminationValue);
    }
  };

  return BeeHandler;
}(_gatherer2.default);

exports.default = BeeHandler;
module.exports = exports['default'];

/***/ }),

/***/ 3133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resultsHandler = __webpack_require__(1738);

var _resultsHandler2 = _interopRequireDefault(_resultsHandler);

var _constants = __webpack_require__(216);

var _experiments = __webpack_require__(748);

var _experiments2 = _interopRequireDefault(_experiments);

var _locale = __webpack_require__(851);

var _locale2 = _interopRequireDefault(_locale);

var _redux = __webpack_require__(2905);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var studioApp = __webpack_require__(597).singleton;

var getStore = __webpack_require__(237).getStore;

var TOO_MANY_BLOCKS = 0;
var COLLECTED_NOTHING = 1;
var COLLECTED_TOO_MANY = 4;
var COLLECTED_NOT_ENOUGH = 5;
var COLLECTED_ENOUGH_BUT_NOT_ALL = 6;

var CollectorHandler = function (_ResultsHandler) {
  _inherits(CollectorHandler, _ResultsHandler);

  function CollectorHandler(maze, config) {
    _classCallCheck(this, CollectorHandler);

    // Collector level types treat the "ideal" block count as a hard
    // requirement
    var _this = _possibleConstructorReturn(this, _ResultsHandler.call(this, maze, config));

    _this.maxBlocks_ = config.level.ideal;

    _this.minCollected_ = config.level.minCollected;

    _this.store_ = getStore();

    _this.store_.dispatch((0, _redux.setCollectorMinRequired)(_this.minCollected_));

    // Initialize subtype-specific event listeners

    _this.maze_.subtype.on('reset', function () {
      _this.store_.dispatch((0, _redux.resetCollectorCurrentCollected)());
    });

    _this.maze_.subtype.on('collected', function (totalCollected) {
      _this.store_.dispatch((0, _redux.setCollectorCurrentCollected)(totalCollected));
    });

    _this.maze_.subtype.on('collectedTooMany', function () {
      _this.executionInfo.terminateWithValue(COLLECTED_TOO_MANY);
    });
    return _this;
  }

  /**
   * @return {boolean} Did the user try to collect too many things from
   * a space?
   */


  CollectorHandler.prototype.collectedTooMany = function collectedTooMany() {
    var tooMany = false;
    this.maze_.map.forEachCell(function (cell, x, y) {
      if (cell.isDirt() && (cell.getCurrentValue() < 0 || isNaN(cell.getCurrentValue()))) {
        tooMany = true;
      }
    });
    return tooMany;
  };

  /**
   * @return {boolean} Has the user collected all available collectibles?
   */


  CollectorHandler.prototype.collectedAll = function collectedAll() {
    return this.maze_.subtype.getTotalCollected() === this.getPotentialMaxCollected();
  };

  /**
   * @return {number} The total number of available collectibles
   */


  CollectorHandler.prototype.getPotentialMaxCollected = function getPotentialMaxCollected() {
    var count = 0;
    this.maze_.map.forEachCell(function (cell, x, y) {
      if (cell.isDirt()) {
        count += cell.getOriginalValue();
      }
    });
    return count;
  };

  /**
   * @return {number} The number of collectibles collected, either currently or
   *         on the previous run (persists through resets)
   */


  CollectorHandler.prototype.getLastTotalCollected = function getLastTotalCollected() {
    return this.store_.getState().maze.collectorLastCollected;
  };

  /**
   * @override
   */


  CollectorHandler.prototype.succeeded = function succeeded() {
    var usedFewEnoughBlocks = studioApp().feedback_.getNumCountableBlocks() <= this.maxBlocks_;

    return this.collectedAll() && usedFewEnoughBlocks;
  };

  /**
   * @override
   */


  CollectorHandler.prototype.shouldCheckSuccessOnMove = function shouldCheckSuccessOnMove() {
    return false;
  };

  /**
   * @override
   */


  CollectorHandler.prototype.terminateWithAppSpecificValue = function terminateWithAppSpecificValue() {
    var executionInfo = this.executionInfo;

    if (this.maze_.subtype.getTotalCollected() === 0) {
      executionInfo.terminateWithValue(COLLECTED_NOTHING);
    } else if (this.collectedTooMany()) {
      executionInfo.terminateWithValue(COLLECTED_TOO_MANY);
    } else if (studioApp().feedback_.getNumCountableBlocks() > this.maxBlocks_) {
      executionInfo.terminateWithValue(TOO_MANY_BLOCKS);
    } else if (this.minCollected_ && this.maze_.subtype.getTotalCollected() < this.minCollected_) {
      executionInfo.terminateWithValue(COLLECTED_NOT_ENOUGH);
    } else if (!this.collectedAll()) {
      executionInfo.terminateWithValue(COLLECTED_ENOUGH_BUT_NOT_ALL);
    } else {
      executionInfo.terminateWithValue(true);
    }
  };

  /**
   * @override
   */


  CollectorHandler.prototype.hasMessage = function hasMessage(testResults) {
    return true;
  };

  /**
   * @override
   */


  CollectorHandler.prototype.getMessage = function getMessage(terminationValue) {
    switch (terminationValue) {
      case TOO_MANY_BLOCKS:
        return _locale2.default.collectorTooManyBlocks({ blockLimit: this.maxBlocks_ });
      case COLLECTED_NOTHING:
        return _locale2.default.collectorCollectedNothing();
      case COLLECTED_TOO_MANY:
        return _locale2.default.collectorCollectedTooMany();
      case COLLECTED_NOT_ENOUGH:
        return _locale2.default.collectorCollectedNotEnough({ goal: this.minCollected_ });
      case COLLECTED_ENOUGH_BUT_NOT_ALL:
        return _locale2.default.collectorCollectedSome({
          count: this.getLastTotalCollected()
        });
      case true:
        // Remove this case when we turn the bubble dialog on for everyone
        if (!_experiments2.default.isEnabled('bubbleDialog')) {
          return _locale2.default.collectorCollectedEverything({
            count: this.getPotentialMaxCollected()
          });
        } else {
          return _ResultsHandler.prototype.getMessage.call(this, terminationValue);
        }
      default:
        return _ResultsHandler.prototype.getMessage.call(this, terminationValue);
    }
  };

  /**
   * @override
   */


  CollectorHandler.prototype.getTestResults = function getTestResults(terminationValue) {
    switch (terminationValue) {
      case TOO_MANY_BLOCKS:
      case COLLECTED_NOTHING:
      case COLLECTED_TOO_MANY:
      case COLLECTED_NOT_ENOUGH:
        return _constants.TestResults.APP_SPECIFIC_FAIL;
      case COLLECTED_ENOUGH_BUT_NOT_ALL:
        return _constants.TestResults.APP_SPECIFIC_ACCEPTABLE_FAIL;
      case true:
        return _constants.TestResults.ALL_PASS;
    }

    return _ResultsHandler.prototype.getTestResults.call(this, terminationValue);
  };

  /**
   * Only show the feedback dialog for a perfect pass; otherwise, we keep the
   * user on the page and let them iterate.
   *
   * @override
   */


  CollectorHandler.prototype.shouldPreventFeedbackDialog = function shouldPreventFeedbackDialog(feedbackType) {
    if (feedbackType === _constants.TestResults.ALL_PASS) {
      return false;
    }

    return true;
  };

  return CollectorHandler;
}(_resultsHandler2.default);

exports.default = CollectorHandler;
module.exports = exports['default'];

/***/ }),

/***/ 3134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resultsHandler = __webpack_require__(1738);

var _resultsHandler2 = _interopRequireDefault(_resultsHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WordSearchHandler = function (_ResultsHandler) {
  _inherits(WordSearchHandler, _ResultsHandler);

  function WordSearchHandler(maze, config) {
    _classCallCheck(this, WordSearchHandler);

    var _this = _possibleConstructorReturn(this, _ResultsHandler.call(this, maze, config));

    _this.goal_ = config.level.searchWord;
    return _this;
  }

  /**
   * Returns true if we've spelled the right word.
   * @override
   */


  WordSearchHandler.prototype.succeeded = function succeeded() {
    return this.maze_.subtype.getVisited() === this.goal_;
  };

  /**
   * @override
   */


  WordSearchHandler.prototype.shouldCheckSuccessOnMove = function shouldCheckSuccessOnMove() {
    return false;
  };

  return WordSearchHandler;
}(_resultsHandler2.default);

exports.default = WordSearchHandler;
module.exports = exports['default'];

/***/ }),

/***/ 3135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gatherer = __webpack_require__(2906);

var _gatherer2 = _interopRequireDefault(_gatherer);

var _locale = __webpack_require__(851);

var _locale2 = _interopRequireDefault(_locale);

var _constants = __webpack_require__(216);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HarvesterHandler = function (_GathererHandler) {
  _inherits(HarvesterHandler, _GathererHandler);

  function HarvesterHandler(maze, config) {
    _classCallCheck(this, HarvesterHandler);

    // Initialize subtype-specific event listeners

    var _this = _possibleConstructorReturn(this, _GathererHandler.call(this, maze, config));

    _this.maze_.subtype.on('wrongCrop', function () {
      _this.executionInfo.terminateWithValue(_constants.HarvesterTerminationValue.WRONG_CROP);
    });

    _this.maze_.subtype.on('emptyCrop', function () {
      _this.executionInfo.terminateWithValue(_constants.HarvesterTerminationValue.EMPTY_CROP);
    });
    return _this;
  }

  /**
   * @override
   */


  HarvesterHandler.prototype.succeeeded = function succeeeded() {
    return this.collectedEverything();
  };

  /**
   * @override
   */


  HarvesterHandler.prototype.terminateWithAppSpecificValue = function terminateWithAppSpecificValue() {
    var executionInfo = this.executionInfo;

    if (!this.collectedEverything()) {
      executionInfo.terminateWithValue(_constants.HarvesterTerminationValue.DID_NOT_COLLECT_EVERYTHING);
    }
  };

  /**
   * @override
   */


  HarvesterHandler.prototype.getTestResults = function getTestResults(terminationValue) {
    switch (terminationValue) {
      case _constants.HarvesterTerminationValue.WRONG_CROP:
      case _constants.HarvesterTerminationValue.EMPTY_CROP:
        return _constants.TestResults.APP_SPECIFIC_FAIL;

      case _constants.HarvesterTerminationValue.DID_NOT_COLLECT_EVERYTHING:
        var testResults = this.maze_.getTestResults(true);
        // If we have a non-app specific failure, we want that to take precedence.
        // Values over TOO_MANY_BLOCKS_FAIL are not true failures, but indicate
        // a suboptimal solution, so in those cases we want to return our
        // app specific fail. Same goes for BLOCK_LIMIT_FAIL.
        if (testResults >= _constants.TestResults.TOO_MANY_BLOCKS_FAIL || testResults === _constants.TestResults.BLOCK_LIMIT_FAIL) {
          testResults = _constants.TestResults.APP_SPECIFIC_FAIL;
        }
        return testResults;
    }

    return _GathererHandler.prototype.getTestResults.call(this, terminationValue);
  };

  /**
   * @override
   */


  HarvesterHandler.prototype.getMessage = function getMessage(terminationValue) {
    switch (terminationValue) {
      case _constants.HarvesterTerminationValue.WRONG_CROP:
        return _locale2.default.wrongCropError();
      case _constants.HarvesterTerminationValue.EMPTY_CROP:
        return _locale2.default.emptyCropError();
      case _constants.HarvesterTerminationValue.DID_NOT_COLLECT_EVERYTHING:
        return _locale2.default.didNotCollectAllCrops();
      default:
        return _GathererHandler.prototype.getMessage.call(this, terminationValue);
    }
  };

  return HarvesterHandler;
}(_gatherer2.default);

exports.default = HarvesterHandler;
module.exports = exports['default'];

/***/ }),

/***/ 3136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resultsHandler = __webpack_require__(1738);

var _resultsHandler2 = _interopRequireDefault(_resultsHandler);

var _locale = __webpack_require__(851);

var _locale2 = _interopRequireDefault(_locale);

var _constants = __webpack_require__(216);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlanterHandler = function (_ResultsHandler) {
  _inherits(PlanterHandler, _ResultsHandler);

  function PlanterHandler(maze, config) {
    _classCallCheck(this, PlanterHandler);

    // Initialize subtype-specific event listeners

    var _this = _possibleConstructorReturn(this, _ResultsHandler.call(this, maze, config));

    _this.maze_.subtype.on('plantInNonSoil', function () {
      _this.executionInfo.terminateWithValue(PlanterHandler.TerminationValue.PLANT_IN_NON_SOIL);
    });
    return _this;
  }

  /**
   * @override
   */


  PlanterHandler.prototype.succeeded = function succeeded() {
    return this.plantedEverything();
  };

  /**
   * Has the user planted everywhere they can plant? Alternatively, are
   * there zero Soil cells?
   */


  PlanterHandler.prototype.plantedEverything = function plantedEverything() {
    var anySoilCells = this.maze_.map.getAllCells().some(function (cell) {
      return cell.isSoil();
    });
    return !anySoilCells;
  };

  /**
   * @override
   */


  PlanterHandler.prototype.shouldCheckSuccessOnMove = function shouldCheckSuccessOnMove() {
    return false;
  };

  /**
   * @override
   */


  PlanterHandler.prototype.terminateWithAppSpecificValue = function terminateWithAppSpecificValue() {
    var executionInfo = this.executionInfo;

    if (!this.plantedEverything()) {
      executionInfo.terminateWithValue(PlanterHandler.TerminationValue.DID_NOT_PLANT_EVERYWHERE);
    }
  };

  /**
   * @override
   */


  PlanterHandler.prototype.getTestResults = function getTestResults(terminationValue) {
    switch (terminationValue) {
      case PlanterHandler.TerminationValue.PLANT_IN_NON_SOIL:
        return _constants.TestResults.APP_SPECIFIC_FAIL;
      case PlanterHandler.TerminationValue.DID_NOT_PLANT_EVERYWHERE:
        var testResults = this.maze_.getTestResults(true);
        // If we have a non-app specific failure, we want that to take precedence.
        // Values over TOO_MANY_BLOCKS_FAIL are not true failures, but indicate
        // a suboptimal solution, so in those cases we want to return our
        // app specific fail. Same goes for BLOCK_LIMIT_FAIL.
        if (testResults >= _constants.TestResults.TOO_MANY_BLOCKS_FAIL || testResults === _constants.TestResults.BLOCK_LIMIT_FAIL) {
          testResults = _constants.TestResults.APP_SPECIFIC_FAIL;
        }
        return testResults;
      default:
        return _ResultsHandler.prototype.getTestResults.call(this, terminationValue);
    }
  };

  /**
   * @override
   */


  PlanterHandler.prototype.hasMessage = function hasMessage(testResults) {
    return testResults === _constants.TestResults.APP_SPECIFIC_FAIL;
  };

  /**
   * @override
   */


  PlanterHandler.prototype.getMessage = function getMessage(terminationValue) {
    switch (terminationValue) {
      case PlanterHandler.TerminationValue.PLANT_IN_NON_SOIL:
        return _locale2.default.plantInNonSoilError();
      case PlanterHandler.TerminationValue.DID_NOT_PLANT_EVERYWHERE:
        return _locale2.default.didNotPlantEverywhere();
      default:
        return _ResultsHandler.prototype.getMessage.call(this, terminationValue);
    }
  };

  return PlanterHandler;
}(_resultsHandler2.default);

PlanterHandler.TerminationValue = {
  PLANT_IN_NON_SOIL: 0,
  DID_NOT_PLANT_EVERYWHERE: 1
};
exports.default = PlanterHandler;
module.exports = exports['default'];

/***/ }),

/***/ 3141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Direction = __webpack_require__(773).Direction;
var karelLevels = __webpack_require__(3142);
var wordsearchLevels = __webpack_require__(3147);
var reqBlocks = __webpack_require__(2909);
var blockUtils = __webpack_require__(743);
var utils = __webpack_require__(71);
var mazeMsg = __webpack_require__(851);

//TODO: Fix hacky level-number-dependent toolbox.
var toolbox = function toolbox(page, level) {
  return __webpack_require__(3148)({
    page: page,
    level: level
  });
};

//TODO: Fix hacky level-number-dependent startBlocks.
var startBlocks = function startBlocks(page, level) {
  return __webpack_require__(3149)({
    page: page,
    level: level
  });
};

/*
 * Configuration for all levels.
 */
module.exports = {

  // Formerly Page 2

  '2_1': {
    'toolbox': toolbox(2, 1),
    'ideal': 4,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 3, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'startBlocks': startBlocks(2, 1)
  },
  'k1_demo': {
    'toolbox': blockUtils.createToolbox(blockUtils.blockOfType('maze_moveNorth') + blockUtils.blockOfType('maze_moveSouth') + blockUtils.blockOfType('maze_moveEast') + blockUtils.blockOfType('maze_moveWest') + blockUtils.blockOfType('controls_repeat_simplified')),
    'ideal': 4,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 3, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'startBlocks': startBlocks(2, 1)
  },
  '2_2': {
    'instructionsImportant': true,
    'toolbox': toolbox(2, 2),
    'ideal': 3,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD]],
    'startDirection': Direction.SOUTH,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 3, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'startBlocks': startBlocks(2, 2)
  },
  '2_2_5': {
    'toolbox': toolbox(2, 3),
    'ideal': 5,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.TURN_RIGHT]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 4, 0, 0, 0], [0, 0, 2, 1, 1, 0, 0, 0], [0, 0, 4, 0, 3, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'startBlocks': startBlocks(2, 3)
  },
  '2_3': {
    'toolbox': toolbox(2, 3),
    'ideal': 6,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.TURN_LEFT], [reqBlocks.TURN_RIGHT]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 4, 1, 3, 0, 0, 0], [0, 0, 2, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'startBlocks': startBlocks(2, 3)
  },
  '2_4': {
    'toolbox': toolbox(2, 4),
    'ideal': 9,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.TURN_LEFT], [reqBlocks.TURN_RIGHT]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 4, 0, 3, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '2_5': {
    'toolbox': toolbox(2, 5),
    'ideal': 3,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.FOR_LOOP]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 3, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '2_6': {
    'toolbox': toolbox(2, 6),
    'ideal': 4,
    'requiredBlocks': [[reqBlocks.TURN_RIGHT], [reqBlocks.MOVE_FORWARD], [reqBlocks.FOR_LOOP]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 3, 0, 0, 0]]
  },
  '2_7': {
    'toolbox': toolbox(2, 7),
    'ideal': 6,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.FOR_LOOP], [reqBlocks.TURN_LEFT]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 3, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 2, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '2_8': {
    'toolbox': toolbox(2, 8),
    'ideal': 5,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.FOR_LOOP], [reqBlocks.TURN_RIGHT]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 3, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'startBlocks': startBlocks(2, 8),
    'levelIncompleteError': mazeMsg.repeatCarefullyError(),
    'tooFewBlocksMsg': mazeMsg.repeatCarefullyError()
  },
  '2_9': {
    'toolbox': toolbox(2, 9),
    'ideal': 3,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.WHILE_LOOP]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 3, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '2_10': {
    'toolbox': toolbox(2, 10),
    'ideal': 5,
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.TURN_LEFT], [reqBlocks.WHILE_LOOP]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 2, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '2_11': {
    'toolbox': toolbox(2, 11),
    'ideal': 6,
    'scale': {
      'stepSpeed': 3
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.WHILE_LOOP], [reqBlocks.TURN_LEFT], [reqBlocks.TURN_RIGHT]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 3, 1], [0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [2, 1, 0, 0, 0, 0, 0, 0]]
  },
  '2_12': {
    'toolbox': toolbox(2, 12),
    'ideal': 6,
    'scale': {
      'stepSpeed': 3
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.WHILE_LOOP], [reqBlocks.TURN_LEFT], [reqBlocks.TURN_RIGHT]],
    'startDirection': Direction.EAST,
    'map': [[1, 0, 0, 0, 0, 0, 0, 0], [1, 2, 4, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 3, 0], [0, 0, 0, 0, 0, 0, 1, 1]]
  },
  '2_13': {
    'toolbox': toolbox(2, 13),
    'ideal': 5,
    'requiredBlocks': [[reqBlocks.TURN_LEFT]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 2, 1, 1, 0, 0], [0, 0, 0, 0, 0, 4, 0, 0]],
    'startBlocks': startBlocks(2, 13)
  },
  '2_14': {
    'toolbox': toolbox(2, 14),
    'ideal': 5,
    'scale': {
      'stepSpeed': 2
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.TURN_RIGHT], [reqBlocks.IS_PATH_RIGHT], [reqBlocks.WHILE_LOOP]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 4, 0, 0, 0, 0], [0, 0, 0, 1, 0, 1, 0, 0], [0, 0, 2, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 1, 4], [0, 0, 0, 0, 0, 1, 0, 0], [0, 3, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'levelIncompleteError': mazeMsg.ifInRepeatError()
  },
  '2_15': {
    'toolbox': toolbox(2, 15),
    'ideal': 5,
    'scale': {
      'stepSpeed': 2
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.TURN_LEFT], [reqBlocks.IS_PATH_LEFT], [reqBlocks.WHILE_LOOP]],
    'startDirection': Direction.NORTH,
    'map': [[0, 0, 0, 4, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 1, 0, 3, 0, 1, 0, 0], [0, 1, 0, 1, 0, 1, 1, 4], [0, 1, 1, 1, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '2_16': {
    'toolbox': toolbox(2, 16),
    'ideal': 5,
    'scale': {
      'stepSpeed': 2
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.TURN_RIGHT], [reqBlocks.IS_PATH_RIGHT], [reqBlocks.WHILE_LOOP]],
    'startDirection': Direction.SOUTH,
    'map': [[0, 0, 0, 4, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 2, 0, 0], [0, 0, 0, 0, 0, 1, 1, 4], [0, 1, 1, 3, 0, 1, 0, 4], [0, 1, 0, 0, 0, 1, 0, 1], [0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '2_17': {
    'toolbox': toolbox(2, 17),
    'ideal': 5,
    'scale': {
      'stepSpeed': 2
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.IS_PATH_FORWARD], [reqBlocks.TURN_LEFT], [reqBlocks.WHILE_LOOP]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 4, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [3, 1, 1, 1, 1, 1, 1, 0], [0, 1, 0, 1, 0, 0, 1, 0], [1, 1, 1, 4, 1, 0, 1, 0], [0, 1, 0, 1, 0, 2, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '2_18': {
    'toolbox': toolbox(2, 18),
    'ideal': 5,
    'scale': {
      'stepSpeed': 2
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.IS_PATH_FORWARD], [reqBlocks.TURN_RIGHT], [reqBlocks.WHILE_LOOP]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 4, 0, 4, 0, 4, 0], [0, 0, 1, 0, 1, 0, 1, 0], [0, 2, 1, 1, 1, 1, 1, 0], [0, 0, 1, 1, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 1, 1, 0, 1, 1, 0], [0, 1, 3, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '2_19': {
    'toolbox': toolbox(2, 19),
    'ideal': 7,
    'scale': {
      'stepSpeed': 2
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.TURN_LEFT], [reqBlocks.TURN_RIGHT]],
    'startDirection': Direction.NORTH,
    'map': [[1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 0, 0, 0, 0], [1, 0, 1, 0, 1, 1, 1, 1], [1, 0, 1, 0, 3, 0, 0, 1], [1, 0, 1, 0, 0, 0, 0, 1], [2, 0, 1, 1, 1, 1, 1, 1]],
    'startBlocks': startBlocks(2, 19)
  },

  // Copied levels with editCode enabled
  '3_1': {
    'toolbox': toolbox(3, 1),
    'ideal': 3,
    'editCode': true,
    'codeFunctions': {
      'moveForward': null,
      'turnLeft': null,
      'turnRight': null
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 3, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '3_2': {
    'toolbox': toolbox(3, 2),
    'ideal': 4,
    'editCode': true,
    'codeFunctions': {
      'moveForward': null,
      'turnLeft': null,
      'turnRight': null
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD]],
    'startDirection': Direction.SOUTH,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 3, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '3_3': {
    'toolbox': toolbox(3, 3),
    'ideal': 6,
    'editCode': true,
    'codeFunctions': {
      'moveForward': null,
      'turnLeft': null,
      'turnRight': null
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.TURN_LEFT], [reqBlocks.TURN_RIGHT]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 4, 1, 3, 0, 0, 0], [0, 0, 2, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  '3_4': {
    'toolbox': toolbox(3, 4),
    'ideal': 8,
    'editCode': true,
    'codeFunctions': {
      'moveForward': null,
      'turnLeft': null,
      'turnRight': null
    },
    'requiredBlocks': [[reqBlocks.MOVE_FORWARD], [reqBlocks.TURN_LEFT]],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 4, 3, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },
  'custom': {
    'toolbox': toolbox(3, 4),
    'requiredBlocks': [],
    'startDirection': Direction.EAST,
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 4, 3, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  }
};

// Merge in Karel levels.
for (var levelId in karelLevels) {
  module.exports['karel_' + levelId] = karelLevels[levelId];
}

// Merge in Wordsearch levels.
for (levelId in wordsearchLevels) {
  module.exports['wordsearch_' + levelId] = wordsearchLevels[levelId];
}

// Add some step levels
function cloneWithStep(level, step, stepOnly) {
  var obj = utils.extend({}, module.exports[level]);

  obj.step = step;
  obj.stepOnly = stepOnly;
  module.exports[level + '_step'] = obj;
}

cloneWithStep('2_1', true, true);
cloneWithStep('2_2', true, false);
cloneWithStep('2_17', true, false);
cloneWithStep('karel_1_9', true, false);
cloneWithStep('karel_2_9', true, false);

/***/ }),

/***/ 3142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var levelBase = __webpack_require__(2908);
var Direction = __webpack_require__(773).Direction;
var msg = __webpack_require__(851);
var blockUtils = __webpack_require__(743);

//TODO: Fix hacky level-number-dependent toolbox.
var toolbox = function toolbox(page, level) {
  var template;
  // Must use switch, since browserify only works on requires with literals.
  switch (page) {
    case 1:
      template = __webpack_require__(3143);
      break;
    case 2:
      template = __webpack_require__(3144);
      break;
    case 3:
      template = __webpack_require__(3145);
      break;
  }
  return template({ level: level });
};

//TODO: Fix hacky level-number-dependent startBlocks.
var startBlocks = function startBlocks(page, level) {
  return __webpack_require__(3146)({
    page: page,
    level: level
  });
};

// This tests for and creates the "move_forward" block.
var MOVE_FORWARD = {
  'test': function test(block) {
    return block.type === 'maze_moveForward';
  },
  'type': 'maze_moveForward'
};

// This tests for and creates the "dig" block.
var DIG = { 'test': 'dig', 'type': 'maze_dig' };

// This tests for and creates the "fill" block.
var FILL = { 'test': 'fill', 'type': 'maze_fill' };

// This tests for and creates the "controls_repeat" block.
var REPEAT = {
  'test': function test(block) {
    return block.type === 'controls_repeat';
  },
  'type': 'controls_repeat',
  'titles': { 'TIMES': '???' }
};

// This tests for and creates the "controls_repeat_ext" block.
var REPEAT_EXT = {
  'test': function test(block) {
    return block.type === 'controls_repeat_ext';
  },
  'type': 'controls_repeat_ext'
};

// This tests for and creates the "controls_for" block.
var CONTROLS_FOR = {
  'test': function test(block) {
    return block.type === 'controls_for';
  },
  'type': 'controls_for'
};

// This tests for and creates the "variables_get" block.
var VARIABLES_GET = {
  'test': function test(block) {
    return block.type === 'variables_get';
  },
  'type': 'variables_get',
  'titles': { 'VAR': 'i' }
};

// This tests for and creates the "maze_turn" block turning left.
var TURN_LEFT = {
  'test': 'turnLeft',
  'type': 'maze_turn',
  'titles': { 'DIR': 'turnLeft' }
};

// This tests for and creates the "maze_turn" block turning right.
var TURN_RIGHT = {
  'test': 'turnRight',
  'type': 'maze_turn',
  'titles': { 'DIR': 'turnRight' }
};

// This tests for and creates the "maze_untilBlocked" block.
var UNTIL_BLOCKED = {
  'test': 'while (Maze.isPathForward',
  'type': 'maze_untilBlocked'
};

// This tests for and creates the "maze_untilBlockedOrNotClear" block with the option "pilePresent" selected.
var WHILE_OPT_PILE_PRESENT = {
  'test': 'while (Maze.pilePresent',
  'type': 'maze_untilBlockedOrNotClear',
  'titles': { 'DIR': 'pilePresent' }
};

// This tests for and creates the "maze_untilBlockedOrNotClear" block with the option "holePresent" selected.
var WHILE_OPT_HOLE_PRESENT = {
  'test': 'while (Maze.holePresent',
  'type': 'maze_untilBlockedOrNotClear',
  'titles': { 'DIR': 'holePresent' }
};

// This tests for and creates the "maze_untilBlockedOrNotClear" block with the option "isPathForward" selected.
var WHILE_OPT_PATH_AHEAD = {
  'test': 'while (Maze.isPathForward',
  'type': 'maze_untilBlockedOrNotClear',
  'titles': { 'DIR': 'isPathForward' }
};

// This tests for and creates the "karel_if" block with the option "pilePresent" selected.
var IF_OPT_PILE_PRESENT = {
  'test': 'if (Maze.pilePresent',
  'type': 'karel_if',
  'titles': { 'DIR': 'pilePresent' }
};

// This tests for and creates the "karel_if" block with the option "holePresent" selected.
var IF_OPT_HOLE_PRESENT = {
  'test': 'if (Maze.holePresent',
  'type': 'karel_if',
  'titles': { 'DIR': 'holePresent' }
};

// This tests for and creates the "karel_ifElse" block.
var IF_ELSE = { 'test': '} else {', 'type': 'karel_ifElse' };

// This tests for and creates the "fill num" block.
var fill = function fill(num) {
  return { 'test': function test(block) {
      return block.getTitleValue('NAME') === msg.fillN({ shovelfuls: num });
    },
    'type': 'procedures_callnoreturn',
    'titles': { 'NAME': msg.fillN({ shovelfuls: num }) } };
};

// This tests for and creates the "remove num" blcok.
var remove = function remove(num) {
  return { 'test': function test(block) {
      return block.getTitleValue('NAME') === msg.removeN({ shovelfuls: num });
    },
    'type': 'procedures_callnoreturn',
    'titles': { 'NAME': msg.removeN({ shovelfuls: num }) } };
};

// This tests for and creates the "avoid the cow and remove 1" block.
var AVOID_OBSTACLE_AND_REMOVE = {
  'test': function test(block) {
    return block.getTitleValue('NAME') === msg.avoidCowAndRemove();
  },
  'type': 'procedures_callnoreturn',
  'titles': { 'NAME': msg.avoidCowAndRemove() }
};

// This tests for and creates the "remove piles" block.
var REMOVE_PILES = {
  'test': function test(block) {
    return block.getTitleValue('NAME') === msg.removeStack({ shovelfuls: 4 });
  },
  'type': 'procedures_callnoreturn',
  'titles': { 'NAME': msg.removeStack({ shovelfuls: 4 }) }
};

// This tests for and creates the "fill holes" block.
var FILL_HOLES = {
  'test': function test(block) {
    return block.getTitleValue('NAME') === msg.fillStack({ shovelfuls: 2 });
  },
  'type': 'procedures_callnoreturn',
  'titles': { 'NAME': msg.fillStack({ shovelfuls: 2 }) }
};

module.exports = {

  // Formerly page 1
  '1_1': {
    'instructionsImportant': true,
    'toolbox': toolbox(1, 1),
    'startBlocks': startBlocks(1, 1),
    'ideal': 6,
    'requiredBlocks': [[MOVE_FORWARD], [DIG]],
    'scale': {
      'snapRadius': 2.0
    },
    'map': [[0, 0, 0, 0, 0, 1, 1, 1], [0, 1, 1, 0, 0, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '1_2': {
    'toolbox': toolbox(1, 2),
    'startBlocks': startBlocks(1, 2),
    'ideal': 4,
    'requiredBlocks': [[MOVE_FORWARD], [FILL]],
    'map': [[0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0, 0, 0], [0, 1, 1, 1, 0, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, -2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '1_3': {
    'toolbox': toolbox(1, 3),
    'startBlocks': startBlocks(1, 3),
    'ideal': 4,
    'requiredBlocks': [[MOVE_FORWARD], [DIG], [REPEAT]],
    'map': [[1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 1, 1, 1, 0], [0, 0, 0, 0, 1, 2, 1, 0], [0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0]],
    'startDirection': Direction.SOUTH,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 10, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '1_4': {
    'toolbox': toolbox(1, 4),
    'ideal': 5,
    'requiredBlocks': [[MOVE_FORWARD], [DIG], [TURN_LEFT], [REPEAT]],
    'map': [[0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 2, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '1_5': {
    'toolbox': toolbox(1, 5),
    'startBlocks': startBlocks(1, 5),
    'ideal': 5,
    'requiredBlocks': [[MOVE_FORWARD], [FILL], [REPEAT], [UNTIL_BLOCKED]],
    'scale': {
      'stepSpeed': 2
    },
    'map': [[1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 1, 1, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, -5, -5, -5, -5, -5, 0, 0]]
  },

  '1_6': {
    'toolbox': toolbox(1, 6),
    'ideal': 4,
    'requiredBlocks': [[MOVE_FORWARD], [DIG], [WHILE_OPT_PILE_PRESENT, REPEAT, WHILE_OPT_PATH_AHEAD]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[1, 1, 0, 1, 1, 0, 1, 1], [1, 1, 0, 2, 1, 0, 1, 1], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [1, 1, 0, 1, 1, 0, 1, 1], [1, 1, 0, 1, 1, 0, 1, 1]],
    'startDirection': Direction.SOUTH,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '1_7': {
    'toolbox': toolbox(1, 7),
    'startBlocks': startBlocks(1, 7),
    'ideal': 5,
    'requiredBlocks': [[TURN_RIGHT], [MOVE_FORWARD], [FILL], [WHILE_OPT_HOLE_PRESENT]],
    'scale': {
      'stepSpeed': 2
    },
    'map': [[1, 1, 0, 0, 0, 0, 1, 1], [1, 1, 1, 0, 0, 0, 0, 1], [0, 1, 1, 2, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 1], [1, 1, 0, 0, 0, 0, 1, 1]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, -18, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '1_8': {
    'toolbox': toolbox(1, 8),
    'ideal': 4,
    'requiredBlocks': [[MOVE_FORWARD], [FILL], [WHILE_OPT_PATH_AHEAD, REPEAT]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [2, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, -1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '1_9': {
    'toolbox': toolbox(1, 9),
    'ideal': 8,
    'requiredBlocks': [[MOVE_FORWARD], [DIG], [WHILE_OPT_PATH_AHEAD, REPEAT], [TURN_LEFT]],
    'scale': {
      'stepSpeed': 2.5
    },
    'map': [[0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [2, 1, 1, 1, 1, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0]]
  },

  '1_10': {
    'toolbox': toolbox(1, 10),
    'startBlocks': startBlocks(1, 10),
    'ideal': 5,
    'requiredBlocks': [[MOVE_FORWARD], [DIG], [IF_OPT_PILE_PRESENT], [UNTIL_BLOCKED, REPEAT]],
    'scale': {
      'stepSpeed': 2.5
    },
    'map': [[1, 1, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 1, 1]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '1_11': {
    'toolbox': toolbox(1, 11),
    'startBlocks': startBlocks(1, 11),
    'ideal': 7,
    'requiredBlocks': [[MOVE_FORWARD], [DIG], [FILL], [IF_OPT_PILE_PRESENT], [IF_OPT_HOLE_PRESENT], [UNTIL_BLOCKED, REPEAT]],
    'scale': {
      'stepSpeed': 2.5
    },
    'map': [[1, 1, 0, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 1, 1], [1, 1, 1, 0, 0, 1, 1, 1]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, -1, 0, 0, -1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  // Formerly page 2

  '2_1': {
    'instructionsImportant': true,
    'toolbox': toolbox(2, 1),
    'startBlocks': startBlocks(2, 1),
    'ideal': null,
    'requiredBlocks': [],
    'recommendedBlocks': [[MOVE_FORWARD], [DIG], [FILL], [TURN_LEFT, TURN_RIGHT]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0], [2, 1, 1, 0, 0, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0], [1, -1, 1, 0, 0, 0, 0, 0], [1, -1, 1, 0, 0, 0, 0, 0]]
  },

  '2_2': {
    'toolbox': toolbox(2, 2),
    'startBlocks': startBlocks(2, 2),
    'ideal': 6,
    'requiredBlocks': [],
    'recommendedBlocks': [[MOVE_FORWARD], [fill(5)]],
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 0, 2, 1, 0, 1, 0], [0, 1, 0, 1, 1, 0, 1, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, -5, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '2_3': {
    'toolbox': toolbox(2, 3),
    'startBlocks': startBlocks(2, 3),
    'ideal': 8,
    'requiredBlocks': [],
    'recommendedBlocks': [[MOVE_FORWARD], [fill(5)], [UNTIL_BLOCKED, REPEAT]],
    'scale': {
      'stepSpeed': 2
    },
    'map': [[0, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [0, 2, 1, 1, 1, 1, 1, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, -5, -5, -5, -5, -5, 0]]
  },

  '2_4': {
    'toolbox': toolbox(2, 4),
    'startBlocks': startBlocks(2, 4),
    'ideal': 13,
    'requiredBlocks': [],
    'recommendedBlocks': [[DIG], [REPEAT], [remove(7)], [MOVE_FORWARD], [TURN_LEFT], [TURN_RIGHT]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[1, 1, 1, 1, 0, 0, 1, 1], [1, 1, 1, 0, 0, 1, 1, 1], [1, 1, 0, 0, 1, 1, 1, 0], [1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0, 1], [0, 1, 2, 1, 0, 0, 1, 1], [1, 1, 1, 0, 0, 1, 1, 1], [1, 1, 0, 0, 1, 1, 1, 1]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 7, 0, 0], [0, 0, 0, 0, 7, 0, 0, 0], [0, 0, 0, 7, 0, 0, 0, 0], [0, 0, 7, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '2_5': {
    'toolbox': toolbox(2, 5),
    'startBlocks': startBlocks(2, 5),
    'ideal': 8,
    'requiredBlocks': [],
    'recommendedBlocks': [[DIG], [REPEAT], [remove(6)], [MOVE_FORWARD]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [1, 2, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 6, 0, 6, 0, 6, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '2_6': {
    'toolbox': toolbox(2, 6),
    'startBlocks': startBlocks(2, 6),
    'ideal': 11,
    'requiredBlocks': [],
    'recommendedBlocks': [[remove(8)], [fill(8)], [MOVE_FORWARD], [UNTIL_BLOCKED, REPEAT]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 1, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [8, 0, 0, 0, 0, 0, 0, -8], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '2_7': {
    'toolbox': toolbox(2, 7),
    'startBlocks': startBlocks(2, 7),
    'ideal': 11,
    'requiredBlocks': [],
    'recommendedBlocks': [[TURN_LEFT], [MOVE_FORWARD], [TURN_RIGHT], [DIG]],
    'map': [[1, 1, 0, 0, 0, 1, 1, 1], [1, 1, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '2_8': {
    'toolbox': toolbox(2, 8),
    'startBlocks': startBlocks(2, 8),
    'ideal': 13,
    'requiredBlocks': [],
    'recommendedBlocks': [[REPEAT], [AVOID_OBSTACLE_AND_REMOVE]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [2, 4, 1, 4, 1, 4, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  '2_9': {
    'toolbox': toolbox(2, 9),
    'startBlocks': startBlocks(2, 9),
    'ideal': 14,
    'requiredBlocks': [],
    'recommendedBlocks': [[REMOVE_PILES], [MOVE_FORWARD], [UNTIL_BLOCKED, REPEAT]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [2, 1, 1, 1, 1, 1, 1, 1]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0]]
  },

  '2_10': {
    'toolbox': toolbox(2, 10),
    'startBlocks': startBlocks(2, 10),
    'ideal': 27,
    'requiredBlocks': [],
    'recommendedBlocks': [[REMOVE_PILES], [MOVE_FORWARD], [FILL_HOLES], [IF_OPT_PILE_PRESENT, IF_ELSE], [UNTIL_BLOCKED, REPEAT]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [2, 1, 1, 1, 1, 1, 1, 1]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 1, 0, 0], [1, 0, 1, 0, 0, 1, 0, 0], [1, -1, 1, -1, -1, 1, -1, 0], [1, -1, 1, -1, -1, 1, -1, 0]]
  },

  // Page 3 to Debug

  'debug_seq_1': {
    'instructionsImportant': true,
    'toolbox': toolbox(3, 1),
    'startBlocks': startBlocks(3, 1),
    'ideal': 8,
    'requiredBlocks': [[MOVE_FORWARD], [DIG], [FILL], [TURN_LEFT], [TURN_RIGHT]],
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 4, 1, 1, 0, 0, 0], [0, 0, 2, 1, 4, 0, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, -1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  'debug_seq_2': {
    'toolbox': toolbox(3, 2),
    'startBlocks': startBlocks(3, 2),
    'ideal': 7,
    'requiredBlocks': [[MOVE_FORWARD], [DIG], [TURN_LEFT]],
    'map': [[1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 2, 1, 1, 0, 1, 0], [0, 0, 1, 1, 1, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 0, 0, 0, 1]],
    'startDirection': Direction.SOUTH,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  'debug_repeat': {
    'toolbox': toolbox(3, 3),
    'startBlocks': startBlocks(3, 3),
    'ideal': 12,
    'requiredBlocks': [[MOVE_FORWARD], [DIG], [TURN_LEFT], [TURN_RIGHT], [REPEAT]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 1, 2, 1, 1, 0, 1], [1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 1, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1]],
    'startDirection': Direction.SOUTH,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 5, 0, 0, 0], [0, 0, 0, 0, 0, 7, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  'debug_while': {
    'toolbox': toolbox(3, 4),
    'startBlocks': startBlocks(3, 4),
    'ideal': 5,
    'requiredBlocks': [[MOVE_FORWARD], [REPEAT], [FILL], [WHILE_OPT_HOLE_PRESENT]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 1, 1, 0], [0, 0, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, -15, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  'debug_if': {
    'toolbox': toolbox(3, 5),
    'startBlocks': startBlocks(3, 5),
    'ideal': 8,
    'requiredBlocks': [[MOVE_FORWARD], [TURN_LEFT], [TURN_RIGHT], [REPEAT], [DIG], [IF_OPT_PILE_PRESENT, WHILE_OPT_PILE_PRESENT]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0, 1], [0, 0, 0, 1, 1, 0, 1, 1], [0, 0, 1, 1, 0, 1, 1, 0], [0, 1, 1, 0, 1, 1, 0, 1], [2, 1, 0, 1, 1, 0, 1, 1]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  'debug_if_else': {
    'toolbox': toolbox(3, 6),
    'startBlocks': startBlocks(3, 6),
    'ideal': 10,
    'requiredBlocks': [[MOVE_FORWARD], [TURN_LEFT], [TURN_RIGHT], [REPEAT], [DIG], [FILL], [IF_ELSE, IF_OPT_HOLE_PRESENT]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 0, 1, 1, 0, 1], [0, 0, 0, 1, 1, 0, 1, 1], [0, 0, 1, 1, 0, 1, 1, 0], [0, 1, 1, 0, 1, 1, 0, 1], [1, 1, 0, 1, 1, 0, 1, 1], [1, 0, 1, 1, 0, 1, 1, 0], [0, 1, 1, 0, 1, 1, 0, 0], [2, 1, 0, 1, 1, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, -1], [0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, -1, 0, 0, 0], [0, 0, 0, -1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, -1, 0, 0, 0, 0, 0, 0]]
  },

  'debug_function_1': {
    'toolbox': toolbox(3, 7),
    'startBlocks': startBlocks(3, 7),
    'ideal': 8,
    'requiredBlocks': [[MOVE_FORWARD], [TURN_LEFT], [REPEAT], [DIG]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 2, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  'debug_function_2': {
    'toolbox': toolbox(3, 8),
    'startBlocks': startBlocks(3, 8),
    'ideal': 17,
    'requiredBlocks': [[MOVE_FORWARD], [TURN_LEFT], [REPEAT], [DIG], [FILL], [levelBase.call(msg.fillSquare())], [levelBase.call(msg.removeSquare())]],
    'scale': {
      'stepSpeed': 3
    },
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 1, 0, 0, 1, 0, 1], [2, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, -1, -1, -1], [1, 0, 1, 0, 0, -1, 0, -1], [1, 1, 1, 0, 0, -1, -1, -1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  'debug_function_3': {
    'toolbox': toolbox(3, 9),
    'startBlocks': startBlocks(3, 9),
    'ideal': 12,
    'requiredBlocks': [[MOVE_FORWARD], [REPEAT_EXT], [DIG], [CONTROLS_FOR], [levelBase.callWithArg(msg.removePile(), msg.heightParameter())], [VARIABLES_GET]],
    'scale': {
      'stepSpeed': 2
    },
    'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5, 6, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  },

  'bee_1': {
    'toolbox': blockUtils.createToolbox('\
      <block type="maze_moveForward"></block>\
      <block type="maze_turn"><title name="DIR">turnLeft</title></block>\
      <block type="maze_turn"><title name="DIR">turnRight</title></block>\
      <block type="maze_nectar"></block>\
      <block type="maze_honey"></block>\
      <block type="math_number"><title name="NUM">0</title></block>\
      <block type="bee_ifNectarAmount"></block>\
      <block type="bee_ifTotalNectar"></block>\
      <block type="bee_ifFlower"></block>\
      <block type="bee_ifOnlyFlower"></block>\
      <block type="bee_whileNectarAmount"></block>'),
    'startBlocks': startBlocks(1, 1),
    'requiredBlocks': [],
    'scale': {
      'snapRadius': 2.0
    },
    honeyGoal: 1,
    // nectarGoal: 2,
    step: true,
    'map': [[0, 0, 0, 0, 0, 1, 1, 1], [0, 1, 1, 0, 0, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [2, 'P', 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0]],
    'startDirection': Direction.EAST,
    'initialDirt': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 3, -1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  }
};

/***/ }),

/***/ 3143:
/***/ (function(module, exports) {

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
    var __line = 1, __lines = '<xml id="toolbox" style="display: none;">\n  <block type="maze_moveForward"></block>\n  <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n  <block type="maze_turn"><title name="DIR">turnRight</title></block>\n  <block type="maze_dig"></block>\n  <% if (level > 1) { -%>\n    <block type="maze_fill"></block>\n    <% if (level > 2) { -%>\n      <block type="controls_repeat">\n        <title name="TIMES">5</title>\n      </block>\n      <% if (level > 9) { -%>\n        <block type="karel_if"></block>\n      <% } -%>\n    <% } -%>\n    <% if (level === 5 || level === 10 || level === 11) { -%>\n      <block type="maze_untilBlocked"></block>\n    <% } -%>\n    <% if (level > 5 && level < 8) { -%>\n      <block type="maze_untilBlockedOrNotClear"></block>\n    <% } -%>\n    <% if (level === 8 || level === 9) { -%>\n      <block type="maze_untilBlockedOrNotClear">\n        <title name="DIR">isPathForward</title>\n      </block>\n    <% } -%>\n  <% } -%>\n</xml>\n', __filename = "src/maze/toolboxes/karel1.xml.ejs";
    try {
        var __output = [], __append = __output.push.bind(__output);
        with (locals || {}) {
            __append('<xml id="toolbox" style="display: none;">\n  <block type="maze_moveForward"></block>\n  <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n  <block type="maze_turn"><title name="DIR">turnRight</title></block>\n  <block type="maze_dig"></block>\n  ');
            __line = 6;
            if (level > 1) {
                __append('    <block type="maze_fill"></block>\n    ');
                __line = 8;
                if (level > 2) {
                    __append('      <block type="controls_repeat">\n        <title name="TIMES">5</title>\n      </block>\n      ');
                    __line = 12;
                    if (level > 9) {
                        __append('        <block type="karel_if"></block>\n      ');
                        __line = 14;
                    }
                    __append("    ");
                    __line = 15;
                }
                __append("    ");
                __line = 16;
                if (level === 5 || level === 10 || level === 11) {
                    __append('      <block type="maze_untilBlocked"></block>\n    ');
                    __line = 18;
                }
                __append("    ");
                __line = 19;
                if (level > 5 && level < 8) {
                    __append('      <block type="maze_untilBlockedOrNotClear"></block>\n    ');
                    __line = 21;
                }
                __append("    ");
                __line = 22;
                if (level === 8 || level === 9) {
                    __append('      <block type="maze_untilBlockedOrNotClear">\n        <title name="DIR">isPathForward</title>\n      </block>\n    ');
                    __line = 26;
                }
                __append("  ");
                __line = 27;
            }
            __append("</xml>\n");
            __line = 29;
        }
        return __output.join("");
    } catch (e) {
        rethrow(e, __lines, __filename, __line);
    }
}

/***/ }),

/***/ 3144:
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
    var __line = 1, __lines = '<%\n\nvar commonMsg = require(\'@cdo/locale\');\nvar mazeMsg = require(\'.././locale\');\n\nvar addProcedures = function() { -%>\n  <% if (level > 3) { -%>\n    <category name="<%= commonMsg.catProcedures() %>" custom="PROCEDURE"></category>\n  <% } else if (level === 2 || level === 3) { -%>\n    <category name="<%= commonMsg.catProcedures() %>">\n      <block type="procedures_callnoreturn">\n        <mutation name="<%= mazeMsg.fillN({shovelfuls: 5}) %>"></mutation>\n      </block>\n    </category>\n  <% } -%>\n  <% if (level < 9) { -%>\n    <category name="<%= commonMsg.catLogic() %>">\n      <block type="karel_if"></block>\n    </category>\n  <% } else if (level > 8) { -%>\n    <category name="<%= commonMsg.catLogic() %>">\n      <block type="karel_if"></block>\n      <block type="karel_ifElse"></block>\n    </category>\n  <% } -%>\n<% }; -%>\n\n<xml id="toolbox" style="display: none;">\n  <category name="<%= commonMsg.catActions() %>">\n    <block type="maze_moveForward"></block>\n    <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n    <block type="maze_turn"><title name="DIR">turnRight</title></block>\n    <block type="maze_dig"></block>\n    <block type="maze_fill"></block>\n  </category>\n  <% addProcedures() -%>\n  <category name="<%= commonMsg.catLoops() %>">\n    <block type="maze_untilBlocked"></block>\n    <block type="controls_repeat"></block>\n  </category>\n</xml>\n', __filename = "src/maze/toolboxes/karel2.xml.ejs";
    try {
        var __output = [], __append = __output.push.bind(__output);
        with (locals || {}) {
            var commonMsg = __webpack_require__(40);
            var mazeMsg = __webpack_require__(851);
            var addProcedures = function() {
                __line = 6;
                __append("  ");
                __line = 7;
                if (level > 3) {
                    __append('    <category name="');
                    __line = 8;
                    __append(escape(commonMsg.catProcedures()));
                    __append('" custom="PROCEDURE"></category>\n  ');
                    __line = 9;
                } else if (level === 2 || level === 3) {
                    __append('    <category name="');
                    __line = 10;
                    __append(escape(commonMsg.catProcedures()));
                    __append('">\n      <block type="procedures_callnoreturn">\n        <mutation name="');
                    __line = 12;
                    __append(escape(mazeMsg.fillN({
                        shovelfuls: 5
                    })));
                    __append('"></mutation>\n      </block>\n    </category>\n  ');
                    __line = 15;
                }
                __append("  ");
                __line = 16;
                if (level < 9) {
                    __append('    <category name="');
                    __line = 17;
                    __append(escape(commonMsg.catLogic()));
                    __append('">\n      <block type="karel_if"></block>\n    </category>\n  ');
                    __line = 20;
                } else if (level > 8) {
                    __append('    <category name="');
                    __line = 21;
                    __append(escape(commonMsg.catLogic()));
                    __append('">\n      <block type="karel_if"></block>\n      <block type="karel_ifElse"></block>\n    </category>\n  ');
                    __line = 25;
                }
                __line = 26;
            };
            __append('\n<xml id="toolbox" style="display: none;">\n  <category name="');
            __line = 29;
            __append(escape(commonMsg.catActions()));
            __append('">\n    <block type="maze_moveForward"></block>\n    <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n    <block type="maze_turn"><title name="DIR">turnRight</title></block>\n    <block type="maze_dig"></block>\n    <block type="maze_fill"></block>\n  </category>\n  ');
            __line = 36;
            addProcedures();
            __append('  <category name="');
            __line = 37;
            __append(escape(commonMsg.catLoops()));
            __append('">\n    <block type="maze_untilBlocked"></block>\n    <block type="controls_repeat"></block>\n  </category>\n</xml>\n');
            __line = 42;
        }
        return __output.join("");
    } catch (e) {
        rethrow(e, __lines, __filename, __line);
    }
}

/***/ }),

/***/ 3145:
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
    var __line = 1, __lines = '<%\n\nvar msg = require(\'@cdo/locale\');\n\n/**\n * Add the procedures category to the toolbox.\n */\nvar addProcedures = function() { -%>\n  <category name="<%= msg.catProcedures() %>" custom="PROCEDURE"></category>\n  <category name="<%= msg.catLogic() %>">\n    <block type="karel_if"></block>\n    <block type="karel_ifElse"></block>\n  </category>\n<% }; -%>\n\n<%\n/**\n * Options:\n * @param doStatement An optional statement for the do statement in the loop.\n * @param upperLimit The upper limit of the for loop.\n */\nvar controlsFor = function(doStatement, upperLimit) { -%>\n  <block type="controls_for">\n    <value name="FROM">\n      <block type="math_number">\n        <title name="NUM">1</title>\n      </block>\n    </value>\n    <value name="TO">\n      <block type="math_number">\n        <title name="NUM">\n          <%= upperLimit || 10 -%>\n        </title>\n      </block>\n    </value>\n    <value name="BY">\n      <block type="math_number">\n        <title name="NUM">1</title>\n      </block>\n    </value>\n    <% if (doStatement) { -%>\n      <statement name="DO">\n        <% doStatement() %>\n      </statement>\n    <% } -%>\n  </block>\n<% }; -%>\n\n<xml id="toolbox" style="display: none;">\n  <category name="<%= msg.catActions() %>">\n    <block type="maze_moveForward"></block>\n    <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n    <block type="maze_turn"><title name="DIR">turnRight</title></block>\n    <block type="maze_dig"></block>\n    <block type="maze_fill"></block>\n  </category>\n  <% addProcedures() -%>\n  <category name="<%= msg.catLoops() %>">\n    <block type="maze_untilBlockedOrNotClear"></block>\n    <% if (level < 9) { -%>\n      <block type="controls_repeat"></block>\n    <% } else { -%>\n      <block type="controls_repeat_ext">\n        <value name="TIMES">\n          <block type="math_number">\n            <title name="NUM">10</title>\n          </block>\n        </value>\n      </block>\n    <% } -%>\n    <% controlsFor() -%>\n  </category>\n  <category name="<%= msg.catMath() %>">\n    <block type="math_number"></block>\n  </category>\n  <category name="<%= msg.catVariables() %>" custom="VARIABLE">\n  </category>\n</xml>\n', __filename = "src/maze/toolboxes/karel3.xml.ejs";
    try {
        var __output = [], __append = __output.push.bind(__output);
        with (locals || {}) {
            var msg = __webpack_require__(40);
            var addProcedures = function() {
                __line = 8;
                __append('  <category name="');
                __line = 9;
                __append(escape(msg.catProcedures()));
                __append('" custom="PROCEDURE"></category>\n  <category name="');
                __line = 10;
                __append(escape(msg.catLogic()));
                __append('">\n    <block type="karel_if"></block>\n    <block type="karel_ifElse"></block>\n  </category>\n');
                __line = 14;
            };
            __append("\n");
            __line = 16;
            var controlsFor = function(doStatement, upperLimit) {
                __line = 22;
                __append('  <block type="controls_for">\n    <value name="FROM">\n      <block type="math_number">\n        <title name="NUM">1</title>\n      </block>\n    </value>\n    <value name="TO">\n      <block type="math_number">\n        <title name="NUM">\n          ');
                __line = 32;
                __append(escape(upperLimit || 10));
                __append('        </title>\n      </block>\n    </value>\n    <value name="BY">\n      <block type="math_number">\n        <title name="NUM">1</title>\n      </block>\n    </value>\n    ');
                __line = 41;
                if (doStatement) {
                    __append('      <statement name="DO">\n        ');
                    __line = 43;
                    doStatement();
                    __append("\n      </statement>\n    ");
                    __line = 45;
                }
                __append("  </block>\n");
                __line = 47;
            };
            __append('\n<xml id="toolbox" style="display: none;">\n  <category name="');
            __line = 50;
            __append(escape(msg.catActions()));
            __append('">\n    <block type="maze_moveForward"></block>\n    <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n    <block type="maze_turn"><title name="DIR">turnRight</title></block>\n    <block type="maze_dig"></block>\n    <block type="maze_fill"></block>\n  </category>\n  ');
            __line = 57;
            addProcedures();
            __append('  <category name="');
            __line = 58;
            __append(escape(msg.catLoops()));
            __append('">\n    <block type="maze_untilBlockedOrNotClear"></block>\n    ');
            __line = 60;
            if (level < 9) {
                __append('      <block type="controls_repeat"></block>\n    ');
                __line = 62;
            } else {
                __append('      <block type="controls_repeat_ext">\n        <value name="TIMES">\n          <block type="math_number">\n            <title name="NUM">10</title>\n          </block>\n        </value>\n      </block>\n    ');
                __line = 70;
            }
            __append("    ");
            __line = 71;
            controlsFor();
            __append('  </category>\n  <category name="');
            __line = 73;
            __append(escape(msg.catMath()));
            __append('">\n    <block type="math_number"></block>\n  </category>\n  <category name="');
            __line = 76;
            __append(escape(msg.catVariables()));
            __append('" custom="VARIABLE">\n  </category>\n</xml>\n');
            __line = 79;
        }
        return __output.join("");
    } catch (e) {
        rethrow(e, __lines, __filename, __line);
    }
}

/***/ }),

/***/ 3146:
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
    var __line = 1, __lines = '<%\n\nvar msg = require(\'./locale\');\n\n/**\n * Template to create function for filling in shovels.\n */\nvar fillShovelfuls = function(n) { -%>\n  <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n    deletable="false">\n    <mutation></mutation>\n    <title name="NAME"><%= msg.fillN({shovelfuls: n}) %></title>\n    <statement name="STACK">\n      <block type="controls_repeat" editable="false" deletable="false">\n        <title name="TIMES"><%= n %></title>\n        <statement name="DO">\n          <block type="maze_fill" editable="false" deletable="false">\n          </block>\n        </statement>\n       </block>\n    </statement>\n  </block>\n<% }; -%>\n\n<%\n/**\n * Template to create function for removing in shovels.\n */\nvar removeShovelfuls = function(n) { -%>\n  <block type="procedures_defnoreturn" x="300" y="200" editable="false"\n    deletable="false">\n    <mutation></mutation>\n    <title name="NAME"><%= msg.removeN({shovelfuls: n}) %></title>\n    <statement name="STACK">\n      <block type="controls_repeat" editable="false" deletable="false">\n        <title name="TIMES"><%= n %></title>\n        <statement name="DO">\n          <block type="maze_dig" editable="false" deletable="false">\n          </block>\n        </statement>\n       </block>\n    </statement>\n  </block>\n<% }; %>\n\n<% if (page === 1) { -%>\n  <% if (level === 1) { -%>\n    <block type="maze_moveForward" x="70" y="70"></block>\n  <% } else if (level === 2) { -%>\n    <block type="maze_moveForward" x="70" y="70"></block>\n  <% } else if (level === 3) { -%>\n    <block type="maze_moveForward" x="70" y="70"></block>\n  <% } else if (level === 4) { -%>\n    <block type="maze_moveForward" x="70" y="70"></block>\n  <% } else if (level === 5) { -%>\n    <block type="maze_untilBlocked" x="70" y="70"></block>\n  <% } else if (level === 6) { -%>\n    <block type="maze_dig" x="70" y="70"></block>\n  <% } else if (level === 7) { -%>\n    <block type="maze_turn" x="70" y="70">\n          <title name="DIR">turnRight</title>\n    </block>\n  <% } else if (level === 8) { -%>\n    <block type="maze_moveForward" x="70" y="70"></block>\n  <% } else if (level === 9) { -%>\n    <block type="maze_moveForward" x="70" y="70"></block>\n  <% } else if (level === 10) { -%>\n    <block type="maze_untilBlocked" x="70" y="70"></block>\n  <% } else if (level === 11) { -%>\n    <block type="maze_untilBlocked" x="70" y="70"></block>\n  <% } -%>\n<% } else if (page === 2) { -%>\n  <% if (level === 2) { -%>\n    <block type="maze_moveForward" x="20" y="70"></block>\n    <% fillShovelfuls(5) -%>\n  <% } else if (level === 3) { -%>\n    <% fillShovelfuls(5) -%>\n  <% } else if (level === 4) { -%>\n    <% fillShovelfuls(5) -%>\n    <block type="procedures_defnoreturn" x="300" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.removeN({shovelfuls: 7}) %></title>\n    </block>\n  <% } else if (level === 5) { -%>\n    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.removeN({shovelfuls: 6}) %></title>\n    </block>\n  <% } else if (level === 6) { -%>\n    <% fillShovelfuls(8) -%>\n    <% removeShovelfuls(8) -%>\n  <% } else if (level === 7) { -%>\n    <block type="procedures_callnoreturn" x="20" y="70" editable="false"\n      deletable="false">\n      <mutation name="<%= msg.avoidCowAndRemove() %>"></mutation>\n    </block>\n    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.avoidCowAndRemove() %></title>\n    </block>\n  <% } else if (level === 8) { -%>\n    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.avoidCowAndRemove() %></title>\n      <statement name="STACK">\n        <block type="maze_turn" editable="false" deletable="false">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="maze_moveForward" editable="false" deletable="false">\n              <next>\n                <block type="maze_turn" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <next>\n                    <block type="maze_moveForward" editable="false"\n                      deletable="false">\n                      <next>\n                        <block type="maze_moveForward" editable="false"\n                          deletable="false">\n                          <next>\n                            <block type="maze_turn" editable="false"\n                              deletable="false">\n                              <title name="DIR">turnRight</title>\n                              <next>\n                                <block type="maze_moveForward"\n                                  editable="false" deletable="false">\n                                  <next>\n                                    <block type="maze_dig"\n                                      editable="false" deletable="false">\n                                      <next>\n                                        <block type="maze_turn"\n                                          editable="false" deletable="false">\n                                          <title name="DIR">turnLeft</title>\n                                        </block>\n                                      </next>\n                                    </block>\n                                  </next>\n                                </block>\n                              </next>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 9) { -%>\n    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.removeStack({shovelfuls: 4}) %></title>\n      <statement name="STACK">\n        <block type="maze_turn" editable="false" deletable="false">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">4</title>\n              <statement name="DO">\n                <block type="maze_dig" editable="false"\n                  deletable="false">\n                  <next>\n                    <block type="maze_moveForward" editable="false"\n                      deletable="false"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <next>\n                    <block type="maze_turn" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="controls_repeat" editable="false"\n                          deletable="false">\n                          <title name="TIMES">4</title>\n                          <statement name="DO">\n                            <block type="maze_moveForward" editable="false"\n                              deletable="false"></block>\n                          </statement>\n                          <next>\n                            <block type="maze_turn" editable="false"\n                              deletable="false">\n                              <title name="DIR">turnLeft</title>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 10) { -%>\n    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.removeStack({shovelfuls: 4}) %></title>\n      <statement name="STACK">\n        <block type="maze_turn" editable="false" deletable="false">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">4</title>\n              <statement name="DO">\n                <block type="maze_dig" editable="false"\n                  deletable="false">\n                  <next>\n                    <block type="maze_moveForward" editable="false"\n                      deletable="false"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <next>\n                    <block type="maze_turn" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="controls_repeat" editable="false"\n                          deletable="false">\n                          <title name="TIMES">4</title>\n                          <statement name="DO">\n                            <block type="maze_moveForward" editable="false"\n                              deletable="false"></block>\n                          </statement>\n                          <next>\n                            <block type="maze_turn" editable="false"\n                              deletable="false">\n                              <title name="DIR">turnLeft</title>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n    <block type="procedures_defnoreturn" x="300" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.fillStack({shovelfuls: 2}) %></title>\n      <statement name="STACK">\n        <block type="maze_turn" editable="false" deletable="false">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">2</title>\n              <statement name="DO">\n                <block type="maze_fill" editable="false"\n                  deletable="false">\n                  <next>\n                    <block type="maze_moveForward" editable="false"\n                      deletable="false"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <next>\n                    <block type="maze_turn" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="controls_repeat" editable="false"\n                          deletable="false">\n                          <title name="TIMES">2</title>\n                          <statement name="DO">\n                            <block type="maze_moveForward" editable="false"\n                              deletable="false"></block>\n                          </statement>\n                          <next>\n                            <block type="maze_turn" editable="false"\n                              deletable="false">\n                              <title name="DIR">turnLeft</title>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 11) { -%>\n    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.removeAndAvoidTheCow() %></title>\n      <statement name="STACK">\n        <block type="maze_dig" editable="false" deletable="false">\n          <next>\n            <block type="maze_turn" editable="false" deletable="false">\n              <title name="DIR">turnLeft</title>\n              <next>\n                <block type="maze_moveForward" editable="false"\n                  deletable="false">\n                  <next>\n                    <block type="maze_turn" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="maze_moveForward" editable="false"\n                          deletable="false">\n                          <next>\n                            <block type="maze_moveForward" editable="false"\n                              deletable="false">\n                              <next>\n                                <block type="maze_turn" editable="false"\n                                  deletable="false">\n                                  <title name="DIR">turnRight</title>\n                                  <next>\n                                    <block type="maze_moveForward"\n                                      editable="false" deletable="false">\n                                      <next>\n                                        <block type="maze_turn"\n                                          editable="false" deletable="false">\n                                          <title name="DIR">turnLeft\n                                          </title>\n                                        </block>\n                                      </next>\n                                    </block>\n                                  </next>\n                                </block>\n                              </next>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } -%>\n<% } else if (page === 3) { -%>\n  <% if (level === 1) { -%>\n    <block type="maze_moveForward" x="70" y="70">\n      <next>\n        <block type="maze_turn">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="maze_moveForward">\n              <next>\n                <block type="maze_dig">\n                  <next>\n                    <block type="maze_turn">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="maze_moveForward">\n                          <next>\n                            <block type="maze_fill"></block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n  <% } else if (level === 2) { -%>\n    <block type="maze_moveForward" x="70" y="70">\n      <next>\n        <block type="maze_moveForward">\n          <next>\n            <block type="maze_moveForward">\n              <next>\n                <block type="maze_moveForward">\n                  <next>\n                    <block type="maze_dig"></block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n  <% } else if (level === 3) { -%>\n    <block type="maze_moveForward" x="70" y="70">\n      <next>\n        <block type="maze_turn">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="maze_moveForward">\n              <next>\n                <block type="controls_repeat">\n                  <title name="TIMES">10</title>\n                  <statement name="DO">\n                    <block type="maze_dig"></block>\n                  </statement>\n                  <next>\n                    <block type="maze_turn">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="maze_moveForward">\n                          <next>\n                            <block type="maze_turn">\n                              <title name="DIR">turnLeft</title>\n                              <next>\n                                <block type="maze_moveForward">\n                                  <next>\n                                    <block type="controls_repeat">\n                                      <title name="TIMES">10</title>\n                                      <statement name="DO">\n                                        <block type="maze_dig"></block>\n                                      </statement>\n                                    </block>\n                                  </next>\n                                </block>\n                              </next>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n  <% } else if (level === 4) { -%>\n    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">5</title>\n      <statement name="DO">\n        <block type="maze_moveForward"></block>\n      </statement>\n      <next>\n        <block type="maze_untilBlockedOrNotClear">\n          <title name="DIR">pilePresent</title>\n          <statement name="DO">\n            <block type="maze_fill"></block>\n          </statement>\n        </block>\n      </next>\n    </block>\n  <% } else if (level === 5) { -%>\n    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">7</title>\n      <statement name="DO">\n        <block type="maze_moveForward">\n          <next>\n            <block type="maze_dig">\n              <next>\n                <block type="maze_turn">\n                  <title name="DIR">turnLeft</title>\n                  <next>\n                    <block type="maze_moveForward">\n                      <next>\n                        <block type="maze_turn">\n                          <title name="DIR">turnRight</title>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 6) { -%>\n    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">7</title>\n      <statement name="DO">\n        <block type="maze_moveForward">\n          <next>\n            <block type="karel_if">\n              <title name="DIR">pilePresent</title>\n              <statement name="DO">\n                <block type="maze_dig"></block>\n              </statement>\n              <next>\n                <block type="maze_turn">\n                  <title name="DIR">turnLeft</title>\n                  <next>\n                    <block type="maze_moveForward">\n                      <next>\n                        <block type="maze_turn">\n                          <title name="DIR">turnRight</title>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 7) { -%>\n    <block type="procedures_callnoreturn" x="20" y="70"\n      editable="false" deletable="false">\n      <mutation name="<%= msg.removeSquare() %>"></mutation>\n    </block>\n    <block type="procedures_defnoreturn" x="20" y="200" editable="false" deletable="false">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.removeSquare() %></title>\n      <statement name="STACK">\n        <block type="controls_repeat">\n          <title name="TIMES">4</title>\n          <statement name="DO">\n            <block type="controls_repeat">\n              <title name="TIMES">2</title>\n              <statement name="DO">\n                <block type="maze_moveForward">\n                  <next>\n                    <block type="maze_dig"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn">\n                  <title name="DIR">turnLeft</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 8) { -%>\n    <block type="procedures_callnoreturn" x="20" y="70">\n      <mutation name="<%= msg.fillSquare() %>"></mutation>\n      <next>\n        <block type="controls_repeat">\n          <title name="TIMES">5</title>\n          <statement name="DO">\n            <block type="maze_moveForward"></block>\n          </statement>\n          <next>\n            <block type="procedures_callnoreturn">\n              <mutation name="<%= msg.removeSquare() %>"></mutation>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n    <block type="procedures_defnoreturn" deletable="false"\n      editable="false" x="20" y="250">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.removeSquare() %></title>\n      <statement name="STACK">\n        <block type="controls_repeat">\n          <title name="TIMES">4</title>\n          <statement name="DO">\n            <block type="controls_repeat">\n              <title name="TIMES">2</title>\n              <statement name="DO">\n                <block type="maze_moveForward">\n                  <next>\n                    <block type="maze_dig"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn">\n                  <title name="DIR">turnLeft</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n    <block type="procedures_defnoreturn" deletable="false"\n      editable="false" x="350" y="250">\n      <mutation></mutation>\n      <title name="NAME"><%= msg.fillSquare() %></title>\n      <statement name="STACK">\n        <block type="controls_repeat">\n          <title name="TIMES">4</title>\n          <statement name="DO">\n            <block type="controls_repeat">\n              <title name="TIMES">2</title>\n              <statement name="DO">\n                <block type="maze_moveForward">\n                  <next>\n                    <block type="maze_fill"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn">\n                  <title name="DIR">turnLeft</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 9) { -%>\n    <block type="controls_for" inline="true" x="20" y="70">\n      <title name="VAR">counter</title>\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">6</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="procedures_callnoreturn" inline="false">\n          <mutation name="<%= msg.removePile() %>">\n            <arg name="<%= msg.heightParameter() %>"></arg>\n          </mutation>\n          <value name="ARG0">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <next>\n            <block type="maze_moveForward"></block>\n          </next>\n        </block>\n      </statement>\n    </block>\n    <block type="procedures_defnoreturn" x="20" y="250" editable="false" deletable="false">\n      <mutation>\n        <arg name="<%= msg.heightParameter() %>"></arg>\n      </mutation>\n      <title name="NAME"><%= msg.removePile() %></title>\n      <statement name="STACK">\n        <block type="controls_repeat_ext" inline="true">\n          <value name="TIMES">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <statement name="DO">\n            <block type="maze_dig"></block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  <% } -%>\n<% } -%>\n', __filename = "src/maze/karelStartBlocks.xml.ejs";
    try {
        var __output = [], __append = __output.push.bind(__output);
        with (locals || {}) {
            var msg = __webpack_require__(851);
            var fillShovelfuls = function(n) {
                __line = 8;
                __append('  <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n    deletable="false">\n    <mutation></mutation>\n    <title name="NAME">');
                __line = 12;
                __append(escape(msg.fillN({
                    shovelfuls: n
                })));
                __append('</title>\n    <statement name="STACK">\n      <block type="controls_repeat" editable="false" deletable="false">\n        <title name="TIMES">');
                __line = 15;
                __append(escape(n));
                __append('</title>\n        <statement name="DO">\n          <block type="maze_fill" editable="false" deletable="false">\n          </block>\n        </statement>\n       </block>\n    </statement>\n  </block>\n');
                __line = 23;
            };
            __append("\n");
            __line = 25;
            var removeShovelfuls = function(n) {
                __line = 29;
                __append('  <block type="procedures_defnoreturn" x="300" y="200" editable="false"\n    deletable="false">\n    <mutation></mutation>\n    <title name="NAME">');
                __line = 33;
                __append(escape(msg.removeN({
                    shovelfuls: n
                })));
                __append('</title>\n    <statement name="STACK">\n      <block type="controls_repeat" editable="false" deletable="false">\n        <title name="TIMES">');
                __line = 36;
                __append(escape(n));
                __append('</title>\n        <statement name="DO">\n          <block type="maze_dig" editable="false" deletable="false">\n          </block>\n        </statement>\n       </block>\n    </statement>\n  </block>\n');
                __line = 44;
            };
            __append("\n\n");
            __line = 46;
            if (page === 1) {
                __append("  ");
                __line = 47;
                if (level === 1) {
                    __append('    <block type="maze_moveForward" x="70" y="70"></block>\n  ');
                    __line = 49;
                } else if (level === 2) {
                    __append('    <block type="maze_moveForward" x="70" y="70"></block>\n  ');
                    __line = 51;
                } else if (level === 3) {
                    __append('    <block type="maze_moveForward" x="70" y="70"></block>\n  ');
                    __line = 53;
                } else if (level === 4) {
                    __append('    <block type="maze_moveForward" x="70" y="70"></block>\n  ');
                    __line = 55;
                } else if (level === 5) {
                    __append('    <block type="maze_untilBlocked" x="70" y="70"></block>\n  ');
                    __line = 57;
                } else if (level === 6) {
                    __append('    <block type="maze_dig" x="70" y="70"></block>\n  ');
                    __line = 59;
                } else if (level === 7) {
                    __append('    <block type="maze_turn" x="70" y="70">\n          <title name="DIR">turnRight</title>\n    </block>\n  ');
                    __line = 63;
                } else if (level === 8) {
                    __append('    <block type="maze_moveForward" x="70" y="70"></block>\n  ');
                    __line = 65;
                } else if (level === 9) {
                    __append('    <block type="maze_moveForward" x="70" y="70"></block>\n  ');
                    __line = 67;
                } else if (level === 10) {
                    __append('    <block type="maze_untilBlocked" x="70" y="70"></block>\n  ');
                    __line = 69;
                } else if (level === 11) {
                    __append('    <block type="maze_untilBlocked" x="70" y="70"></block>\n  ');
                    __line = 71;
                }
                __line = 72;
            } else if (page === 2) {
                __append("  ");
                __line = 73;
                if (level === 2) {
                    __append('    <block type="maze_moveForward" x="20" y="70"></block>\n    ');
                    __line = 75;
                    fillShovelfuls(5);
                    __append("  ");
                    __line = 76;
                } else if (level === 3) {
                    __append("    ");
                    __line = 77;
                    fillShovelfuls(5);
                    __append("  ");
                    __line = 78;
                } else if (level === 4) {
                    __append("    ");
                    __line = 79;
                    fillShovelfuls(5);
                    __append('    <block type="procedures_defnoreturn" x="300" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 83;
                    __append(escape(msg.removeN({
                        shovelfuls: 7
                    })));
                    __append("</title>\n    </block>\n  ");
                    __line = 85;
                } else if (level === 5) {
                    __append('    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 89;
                    __append(escape(msg.removeN({
                        shovelfuls: 6
                    })));
                    __append("</title>\n    </block>\n  ");
                    __line = 91;
                } else if (level === 6) {
                    __append("    ");
                    __line = 92;
                    fillShovelfuls(8);
                    __append("    ");
                    __line = 93;
                    removeShovelfuls(8);
                    __append("  ");
                    __line = 94;
                } else if (level === 7) {
                    __append('    <block type="procedures_callnoreturn" x="20" y="70" editable="false"\n      deletable="false">\n      <mutation name="');
                    __line = 97;
                    __append(escape(msg.avoidCowAndRemove()));
                    __append('"></mutation>\n    </block>\n    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 102;
                    __append(escape(msg.avoidCowAndRemove()));
                    __append("</title>\n    </block>\n  ");
                    __line = 104;
                } else if (level === 8) {
                    __append('    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 108;
                    __append(escape(msg.avoidCowAndRemove()));
                    __append('</title>\n      <statement name="STACK">\n        <block type="maze_turn" editable="false" deletable="false">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="maze_moveForward" editable="false" deletable="false">\n              <next>\n                <block type="maze_turn" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <next>\n                    <block type="maze_moveForward" editable="false"\n                      deletable="false">\n                      <next>\n                        <block type="maze_moveForward" editable="false"\n                          deletable="false">\n                          <next>\n                            <block type="maze_turn" editable="false"\n                              deletable="false">\n                              <title name="DIR">turnRight</title>\n                              <next>\n                                <block type="maze_moveForward"\n                                  editable="false" deletable="false">\n                                  <next>\n                                    <block type="maze_dig"\n                                      editable="false" deletable="false">\n                                      <next>\n                                        <block type="maze_turn"\n                                          editable="false" deletable="false">\n                                          <title name="DIR">turnLeft</title>\n                                        </block>\n                                      </next>\n                                    </block>\n                                  </next>\n                                </block>\n                              </next>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 156;
                } else if (level === 9) {
                    __append('    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 160;
                    __append(escape(msg.removeStack({
                        shovelfuls: 4
                    })));
                    __append('</title>\n      <statement name="STACK">\n        <block type="maze_turn" editable="false" deletable="false">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">4</title>\n              <statement name="DO">\n                <block type="maze_dig" editable="false"\n                  deletable="false">\n                  <next>\n                    <block type="maze_moveForward" editable="false"\n                      deletable="false"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <next>\n                    <block type="maze_turn" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="controls_repeat" editable="false"\n                          deletable="false">\n                          <title name="TIMES">4</title>\n                          <statement name="DO">\n                            <block type="maze_moveForward" editable="false"\n                              deletable="false"></block>\n                          </statement>\n                          <next>\n                            <block type="maze_turn" editable="false"\n                              deletable="false">\n                              <title name="DIR">turnLeft</title>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 207;
                } else if (level === 10) {
                    __append('    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 211;
                    __append(escape(msg.removeStack({
                        shovelfuls: 4
                    })));
                    __append('</title>\n      <statement name="STACK">\n        <block type="maze_turn" editable="false" deletable="false">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">4</title>\n              <statement name="DO">\n                <block type="maze_dig" editable="false"\n                  deletable="false">\n                  <next>\n                    <block type="maze_moveForward" editable="false"\n                      deletable="false"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <next>\n                    <block type="maze_turn" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="controls_repeat" editable="false"\n                          deletable="false">\n                          <title name="TIMES">4</title>\n                          <statement name="DO">\n                            <block type="maze_moveForward" editable="false"\n                              deletable="false"></block>\n                          </statement>\n                          <next>\n                            <block type="maze_turn" editable="false"\n                              deletable="false">\n                              <title name="DIR">turnLeft</title>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n    <block type="procedures_defnoreturn" x="300" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 261;
                    __append(escape(msg.fillStack({
                        shovelfuls: 2
                    })));
                    __append('</title>\n      <statement name="STACK">\n        <block type="maze_turn" editable="false" deletable="false">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="controls_repeat" editable="false" deletable="false">\n              <title name="TIMES">2</title>\n              <statement name="DO">\n                <block type="maze_fill" editable="false"\n                  deletable="false">\n                  <next>\n                    <block type="maze_moveForward" editable="false"\n                      deletable="false"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn" editable="false" deletable="false">\n                  <title name="DIR">turnRight</title>\n                  <next>\n                    <block type="maze_turn" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="controls_repeat" editable="false"\n                          deletable="false">\n                          <title name="TIMES">2</title>\n                          <statement name="DO">\n                            <block type="maze_moveForward" editable="false"\n                              deletable="false"></block>\n                          </statement>\n                          <next>\n                            <block type="maze_turn" editable="false"\n                              deletable="false">\n                              <title name="DIR">turnLeft</title>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 308;
                } else if (level === 11) {
                    __append('    <block type="procedures_defnoreturn" x="20" y="200" editable="false"\n      deletable="false">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 312;
                    __append(escape(msg.removeAndAvoidTheCow()));
                    __append('</title>\n      <statement name="STACK">\n        <block type="maze_dig" editable="false" deletable="false">\n          <next>\n            <block type="maze_turn" editable="false" deletable="false">\n              <title name="DIR">turnLeft</title>\n              <next>\n                <block type="maze_moveForward" editable="false"\n                  deletable="false">\n                  <next>\n                    <block type="maze_turn" editable="false" deletable="false">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="maze_moveForward" editable="false"\n                          deletable="false">\n                          <next>\n                            <block type="maze_moveForward" editable="false"\n                              deletable="false">\n                              <next>\n                                <block type="maze_turn" editable="false"\n                                  deletable="false">\n                                  <title name="DIR">turnRight</title>\n                                  <next>\n                                    <block type="maze_moveForward"\n                                      editable="false" deletable="false">\n                                      <next>\n                                        <block type="maze_turn"\n                                          editable="false" deletable="false">\n                                          <title name="DIR">turnLeft\n                                          </title>\n                                        </block>\n                                      </next>\n                                    </block>\n                                  </next>\n                                </block>\n                              </next>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 361;
                }
                __line = 362;
            } else if (page === 3) {
                __append("  ");
                __line = 363;
                if (level === 1) {
                    __append('    <block type="maze_moveForward" x="70" y="70">\n      <next>\n        <block type="maze_turn">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="maze_moveForward">\n              <next>\n                <block type="maze_dig">\n                  <next>\n                    <block type="maze_turn">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="maze_moveForward">\n                          <next>\n                            <block type="maze_fill"></block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n  ');
                    __line = 391;
                } else if (level === 2) {
                    __append('    <block type="maze_moveForward" x="70" y="70">\n      <next>\n        <block type="maze_moveForward">\n          <next>\n            <block type="maze_moveForward">\n              <next>\n                <block type="maze_moveForward">\n                  <next>\n                    <block type="maze_dig"></block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n  ');
                    __line = 409;
                } else if (level === 3) {
                    __append('    <block type="maze_moveForward" x="70" y="70">\n      <next>\n        <block type="maze_turn">\n          <title name="DIR">turnLeft</title>\n          <next>\n            <block type="maze_moveForward">\n              <next>\n                <block type="controls_repeat">\n                  <title name="TIMES">10</title>\n                  <statement name="DO">\n                    <block type="maze_dig"></block>\n                  </statement>\n                  <next>\n                    <block type="maze_turn">\n                      <title name="DIR">turnRight</title>\n                      <next>\n                        <block type="maze_moveForward">\n                          <next>\n                            <block type="maze_turn">\n                              <title name="DIR">turnLeft</title>\n                              <next>\n                                <block type="maze_moveForward">\n                                  <next>\n                                    <block type="controls_repeat">\n                                      <title name="TIMES">10</title>\n                                      <statement name="DO">\n                                        <block type="maze_dig"></block>\n                                      </statement>\n                                    </block>\n                                  </next>\n                                </block>\n                              </next>\n                            </block>\n                          </next>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n  ');
                    __line = 455;
                } else if (level === 4) {
                    __append('    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">5</title>\n      <statement name="DO">\n        <block type="maze_moveForward"></block>\n      </statement>\n      <next>\n        <block type="maze_untilBlockedOrNotClear">\n          <title name="DIR">pilePresent</title>\n          <statement name="DO">\n            <block type="maze_fill"></block>\n          </statement>\n        </block>\n      </next>\n    </block>\n  ');
                    __line = 470;
                } else if (level === 5) {
                    __append('    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">7</title>\n      <statement name="DO">\n        <block type="maze_moveForward">\n          <next>\n            <block type="maze_dig">\n              <next>\n                <block type="maze_turn">\n                  <title name="DIR">turnLeft</title>\n                  <next>\n                    <block type="maze_moveForward">\n                      <next>\n                        <block type="maze_turn">\n                          <title name="DIR">turnRight</title>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 496;
                } else if (level === 6) {
                    __append('    <block type="controls_repeat" x="70" y="70">\n      <title name="TIMES">7</title>\n      <statement name="DO">\n        <block type="maze_moveForward">\n          <next>\n            <block type="karel_if">\n              <title name="DIR">pilePresent</title>\n              <statement name="DO">\n                <block type="maze_dig"></block>\n              </statement>\n              <next>\n                <block type="maze_turn">\n                  <title name="DIR">turnLeft</title>\n                  <next>\n                    <block type="maze_moveForward">\n                      <next>\n                        <block type="maze_turn">\n                          <title name="DIR">turnRight</title>\n                        </block>\n                      </next>\n                    </block>\n                  </next>\n                </block>\n              </next>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 526;
                } else if (level === 7) {
                    __append('    <block type="procedures_callnoreturn" x="20" y="70"\n      editable="false" deletable="false">\n      <mutation name="');
                    __line = 529;
                    __append(escape(msg.removeSquare()));
                    __append('"></mutation>\n    </block>\n    <block type="procedures_defnoreturn" x="20" y="200" editable="false" deletable="false">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 533;
                    __append(escape(msg.removeSquare()));
                    __append('</title>\n      <statement name="STACK">\n        <block type="controls_repeat">\n          <title name="TIMES">4</title>\n          <statement name="DO">\n            <block type="controls_repeat">\n              <title name="TIMES">2</title>\n              <statement name="DO">\n                <block type="maze_moveForward">\n                  <next>\n                    <block type="maze_dig"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn">\n                  <title name="DIR">turnLeft</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 557;
                } else if (level === 8) {
                    __append('    <block type="procedures_callnoreturn" x="20" y="70">\n      <mutation name="');
                    __line = 559;
                    __append(escape(msg.fillSquare()));
                    __append('"></mutation>\n      <next>\n        <block type="controls_repeat">\n          <title name="TIMES">5</title>\n          <statement name="DO">\n            <block type="maze_moveForward"></block>\n          </statement>\n          <next>\n            <block type="procedures_callnoreturn">\n              <mutation name="');
                    __line = 568;
                    __append(escape(msg.removeSquare()));
                    __append('"></mutation>\n            </block>\n          </next>\n        </block>\n      </next>\n    </block>\n    <block type="procedures_defnoreturn" deletable="false"\n      editable="false" x="20" y="250">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 577;
                    __append(escape(msg.removeSquare()));
                    __append('</title>\n      <statement name="STACK">\n        <block type="controls_repeat">\n          <title name="TIMES">4</title>\n          <statement name="DO">\n            <block type="controls_repeat">\n              <title name="TIMES">2</title>\n              <statement name="DO">\n                <block type="maze_moveForward">\n                  <next>\n                    <block type="maze_dig"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn">\n                  <title name="DIR">turnLeft</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n    <block type="procedures_defnoreturn" deletable="false"\n      editable="false" x="350" y="250">\n      <mutation></mutation>\n      <title name="NAME">');
                    __line = 604;
                    __append(escape(msg.fillSquare()));
                    __append('</title>\n      <statement name="STACK">\n        <block type="controls_repeat">\n          <title name="TIMES">4</title>\n          <statement name="DO">\n            <block type="controls_repeat">\n              <title name="TIMES">2</title>\n              <statement name="DO">\n                <block type="maze_moveForward">\n                  <next>\n                    <block type="maze_fill"></block>\n                  </next>\n                </block>\n              </statement>\n              <next>\n                <block type="maze_turn">\n                  <title name="DIR">turnLeft</title>\n                </block>\n              </next>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 628;
                } else if (level === 9) {
                    __append('    <block type="controls_for" inline="true" x="20" y="70">\n      <title name="VAR">counter</title>\n      <value name="FROM">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <value name="TO">\n        <block type="math_number">\n          <title name="NUM">6</title>\n        </block>\n      </value>\n      <value name="BY">\n        <block type="math_number">\n          <title name="NUM">1</title>\n        </block>\n      </value>\n      <statement name="DO">\n        <block type="procedures_callnoreturn" inline="false">\n          <mutation name="');
                    __line = 648;
                    __append(escape(msg.removePile()));
                    __append('">\n            <arg name="');
                    __line = 649;
                    __append(escape(msg.heightParameter()));
                    __append('"></arg>\n          </mutation>\n          <value name="ARG0">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <next>\n            <block type="maze_moveForward"></block>\n          </next>\n        </block>\n      </statement>\n    </block>\n    <block type="procedures_defnoreturn" x="20" y="250" editable="false" deletable="false">\n      <mutation>\n        <arg name="');
                    __line = 664;
                    __append(escape(msg.heightParameter()));
                    __append('"></arg>\n      </mutation>\n      <title name="NAME">');
                    __line = 666;
                    __append(escape(msg.removePile()));
                    __append('</title>\n      <statement name="STACK">\n        <block type="controls_repeat_ext" inline="true">\n          <value name="TIMES">\n            <block type="math_number">\n              <title name="NUM">1</title>\n            </block>\n          </value>\n          <statement name="DO">\n            <block type="maze_dig"></block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 680;
                }
                __line = 681;
            }
            __line = 682;
        }
        return __output.join("");
    } catch (e) {
        rethrow(e, __lines, __filename, __line);
    }
}

/***/ }),

/***/ 3147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Direction = __webpack_require__(773).Direction;
var reqBlocks = __webpack_require__(2909);
var blockUtils = __webpack_require__(743);

var wordSearchToolbox = function wordSearchToolbox() {
  return blockUtils.createToolbox(blockUtils.blockOfType('maze_moveNorth') + blockUtils.blockOfType('maze_moveSouth') + blockUtils.blockOfType('maze_moveEast') + blockUtils.blockOfType('maze_moveWest'));
};

/*
 * Configuration for all levels.
 */
module.exports = {
  'k_1': {
    'isK1': true,
    'instructionsImportant': true,
    'toolbox': wordSearchToolbox(),
    'ideal': 5,
    'requiredBlocks': [[reqBlocks.moveEast]],
    'startDirection': Direction.EAST,
    'searchWord': 'EAST',
    step: true,
    map: [['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', 2, 'E', 'A', 'S', 'T', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', 'K', 'E', 'L', 'L', 'Y', 'B', '_'], ['_', '_', '_', '_', '_', '_', '_', '_']],
    'startBlocks': blockUtils.blockOfType('maze_moveEast')
  },
  'k_2': {
    'isK1': true,
    'toolbox': wordSearchToolbox(),
    'ideal': 6,
    'requiredBlocks': [[reqBlocks.moveSouth]],
    'searchWord': 'SOUTH',
    'startDirection': Direction.SOUTH,
    step: true,
    map: [['_', '_', '_', '_', '_', '_', '_', '_'], ['A', 'N', 'G', 'I', 'E', 'D', 'O', 'G'], ['_', '_', '_', 2, '_', '_', '_', '_'], ['_', '_', '_', 'S', '_', '_', '_', '_'], ['_', '_', '_', 'O', '_', '_', '_', '_'], ['_', '_', '_', 'U', '_', '_', '_', '_'], ['_', '_', '_', 'T', '_', '_', '_', '_'], ['_', '_', '_', 'H', '_', '_', '_', '_']],
    'startBlocks': blockUtils.blockOfType('maze_moveSouth')
  },
  'k_3': {
    'isK1': true,
    'toolbox': wordSearchToolbox(),
    'ideal': 5,
    'requiredBlocks': [[reqBlocks.moveWest]],
    'searchWord': 'WEST',
    'startDirection': Direction.WEST,
    step: true,
    map: [['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['L', 'E', 'V', 'E', 'N', 'S', 'O', 'N'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', 'T', 'S', 'E', 'W', 2, '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_']],
    'startBlocks': blockUtils.blockOfType('maze_moveWest')
  },
  'k_4': {
    'isK1': true,
    'toolbox': wordSearchToolbox(),
    'ideal': 6,
    'requiredBlocks': [[reqBlocks.moveNorth]],
    'searchWord': 'NORTH',
    'startDirection': Direction.NORTH,
    step: true,
    // When this gets removed, also remove the hack from letterValue
    map: [['_', '_', '_', '_', 'G', '_', '_', '_'], ['_', '_', 'H', '_', 'O', '_', '_', '_'], ['_', '_', 'T', '_', '_4', '_', '_', '_'], ['_', '_', 'R', '_', 'I', '_', '_', '_'], ['_', '_', 'O', '_', 'T', '_', '_', '_'], ['_', '_', 'N', '_', 'J', '_', '_', '_'], ['_', '_', 2, '_', 'R', '_', '_', '_'], ['_', '_', '_', '_', 'F', '_', '_', '_']]
  },
  'k_6': {
    'isK1': true,
    'toolbox': wordSearchToolbox(),
    'ideal': 5,
    'requiredBlocks': [[reqBlocks.moveEast], [reqBlocks.moveSouth]],
    'searchWord': 'JUMP',
    'startDirection': Direction.EAST,
    step: true,
    map: [['_', '_', '_', '_', '_', '_', '_', '_'], ['S', '_', '_', '_', '_', '_', '_', '_'], ['A', '_', '_', '_', '_', '_', '_', '_'], ['Y', '_', 2, 'J', 'U', 'M', '_', '_'], ['E', '_', '_', '_', '_', 'P', '_', '_'], ['E', '_', '_', '_', '_', '_', '_', '_'], ['D', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_']]
  },
  'k_9': {
    'toolbox': wordSearchToolbox(),
    'ideal': 5,
    'requiredBlocks': [[reqBlocks.moveEast], [reqBlocks.moveNorth]],
    'searchWord': 'CODE',
    'startDirection': Direction.EAST,
    step: true,
    map: [['_', '_', '_', '_', '_', '_', 'M', '_'], ['_', '_', '_', '_', '_', '_', 'A', '_'], ['_', '_', '_', '_', '_', '_', 'R', '_'], ['_', '_', '_', 'D', 'E', '_', 'K', '_'], ['_', 2, 'C', 'O', '_', '_', 'N', '_'], ['_', '_', '_', '_', '_', '_', 'P', '_'], ['_', '_', '_', '_', '_', '_', 'A', '_'], ['_', '_', '_', '_', '_', '_', 'M', '_']]
  },
  'k_13': {
    'isK1': true,
    'toolbox': wordSearchToolbox(),
    'ideal': 6,
    'requiredBlocks': [[reqBlocks.moveEast], [reqBlocks.moveSouth]],
    'searchWord': 'DEBUG',
    'startDirection': Direction.EAST,
    step: true,
    map: [['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', 2, 'D', 'E', '_', '_', '_', '_'], ['_', '_', '_', 'B', '_', '_', '_', '_'], ['_', '_', '_', 'U', 'G', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', 'H', 'E', 'N', 'R', 'Y'], ['_', '_', '_', '_', '_', '_', '_', '_']]
  },
  'k_15': {
    'isK1': true,
    'toolbox': wordSearchToolbox(),
    'ideal': 6,
    'requiredBlocks': [[reqBlocks.moveSouth], [reqBlocks.moveEast]],
    'searchWord': 'ABOVE',
    'startDirection': Direction.SOUTH,
    step: true,
    map: [['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', 2, '_', '_', '_', '_', '_'], ['_', '_', 'A', '_', '_', '_', '_', '_'], ['_', '_', 'B', 'O', '_', '_', '_', '_'], ['_', '_', '_', 'V', 'E', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_']]
  },
  'k_16': {
    'isK1': true,
    'toolbox': wordSearchToolbox(),
    'ideal': 6,
    'requiredBlocks': [[reqBlocks.moveEast], [reqBlocks.moveNorth]],
    'searchWord': 'BELOW',
    'startDirection': Direction.EAST,
    step: true,
    map: [['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', 'W', '_', '_', '_'], ['_', '_', '_', '_', 'O', '_', '_', '_'], ['_', '_', '_', 'E', 'L', '_', '_', '_'], ['_', '_', 2, 'B', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_']]
  },
  'k_20': {
    'isK1': true,
    'toolbox': wordSearchToolbox(),
    'ideal': 6,
    'requiredBlocks': [[reqBlocks.moveEast], [reqBlocks.moveSouth]],
    'searchWord': 'STORY',
    'startDirection': Direction.EAST,
    step: true,
    map: [['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', 2, 'S', 'T', '_', '_', '_'], ['_', '_', '_', '_', 'O', '_', '_', '_'], ['_', '_', '_', '_', 'R', '_', '_', '_'], ['_', '_', '_', '_', 'Y', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_'], ['_', '_', '_', '_', '_', '_', '_', '_']]
  }

};

/***/ }),

/***/ 3148:
/***/ (function(module, exports) {

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
    var __line = 1, __lines = '<xml id="toolbox" style="display: none;">\n  <block type="maze_moveForward"></block>\n  <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n  <block type="maze_turn"><title name="DIR">turnRight</title></block>\n  <% if (page === 1) { -%>\n    <% if (level > 2) { -%>\n      <block type="maze_forever"></block>\n      <% if (level === 5) { -%>\n        <block type="maze_if"><title name="DIR">isPathLeft</title></block>\n      <% } else if (level > 5 && level < 9) { -%>\n        <block type="maze_if"></block>\n      <% } -%>\n      <% if (level > 8) { -%>\n       <block type="maze_ifElse"></block>\n      <% } -%>\n    <% } -%>\n  <% } else if (page === 2) { -%>\n    <% if (level > 4 && level < 9) { -%>\n      <block type="controls_repeat">\n        <title name="TIMES">5</title>\n      </block>\n    <% } -%>\n    <% if (level > 8) { -%>\n      <block type="maze_forever"></block>\n      <% if (level === 13 || level === 15) { -%>\n        <block type="maze_if"><title name="DIR">isPathLeft</title></block>\n      <% } else if (level === 14 || level === 16) { -%>\n        <block type="maze_if"><title name="DIR">isPathRight</title></block>\n      <% } -%>\n      <% if (level > 16) { -%>\n       <block type="maze_ifElse"></block>\n      <% } -%>\n    <% } -%>\n  <% } -%>\n</xml>\n', __filename = "src/maze/toolboxes/maze.xml.ejs";
    try {
        var __output = [], __append = __output.push.bind(__output);
        with (locals || {}) {
            __append('<xml id="toolbox" style="display: none;">\n  <block type="maze_moveForward"></block>\n  <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n  <block type="maze_turn"><title name="DIR">turnRight</title></block>\n  ');
            __line = 5;
            if (page === 1) {
                __append("    ");
                __line = 6;
                if (level > 2) {
                    __append('      <block type="maze_forever"></block>\n      ');
                    __line = 8;
                    if (level === 5) {
                        __append('        <block type="maze_if"><title name="DIR">isPathLeft</title></block>\n      ');
                        __line = 10;
                    } else if (level > 5 && level < 9) {
                        __append('        <block type="maze_if"></block>\n      ');
                        __line = 12;
                    }
                    __append("      ");
                    __line = 13;
                    if (level > 8) {
                        __append('       <block type="maze_ifElse"></block>\n      ');
                        __line = 15;
                    }
                    __append("    ");
                    __line = 16;
                }
                __append("  ");
                __line = 17;
            } else if (page === 2) {
                __append("    ");
                __line = 18;
                if (level > 4 && level < 9) {
                    __append('      <block type="controls_repeat">\n        <title name="TIMES">5</title>\n      </block>\n    ');
                    __line = 22;
                }
                __append("    ");
                __line = 23;
                if (level > 8) {
                    __append('      <block type="maze_forever"></block>\n      ');
                    __line = 25;
                    if (level === 13 || level === 15) {
                        __append('        <block type="maze_if"><title name="DIR">isPathLeft</title></block>\n      ');
                        __line = 27;
                    } else if (level === 14 || level === 16) {
                        __append('        <block type="maze_if"><title name="DIR">isPathRight</title></block>\n      ');
                        __line = 29;
                    }
                    __append("      ");
                    __line = 30;
                    if (level > 16) {
                        __append('       <block type="maze_ifElse"></block>\n      ');
                        __line = 32;
                    }
                    __append("    ");
                    __line = 33;
                }
                __append("  ");
                __line = 34;
            }
            __append("</xml>\n");
            __line = 36;
        }
        return __output.join("");
    } catch (e) {
        rethrow(e, __lines, __filename, __line);
    }
}

/***/ }),

/***/ 3149:
/***/ (function(module, exports) {

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
    var __line = 1, __lines = '<% if (page === 2) { -%>\n  <% if (level < 4) { -%>\n    <block type="maze_moveForward" x="70" y="70"></block>\n  <% } else if (level === 8) { -%>\n    <block type="controls_repeat" x="70" y="70" editable="false"\n      deletable="false">\n      <title name="TIMES">3</title>\n    </block>\n  <% } else if (level === 13) { -%>\n    <block type="maze_forever" x="20" y="70" editable="false" deletable="false">\n      <statement name="DO">\n        <block type="maze_moveForward" editable="false" deletable="false">\n          <next>\n            <block type="maze_if" editable="false" deletable="false">\n              <title name="DIR">isPathLeft</title>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  <% } else if (level === 19) { -%>\n    <block type="maze_forever" x="20" y="70" editable="false" deletable="false">\n      <statement name="DO">\n        <block type="maze_ifElse" editable="false" deletable="false">\n          <title name="DIR">isPathForward</title>\n          <statement name="ELSE">\n            <block type="maze_ifElse" editable="false" deletable="false">\n              <title name="DIR">isPathRight</title>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  <% } -%>\n<% } -%>\n', __filename = "src/maze/startBlocks.xml.ejs";
    try {
        var __output = [], __append = __output.push.bind(__output);
        with (locals || {}) {
            if (page === 2) {
                __append("  ");
                __line = 2;
                if (level < 4) {
                    __append('    <block type="maze_moveForward" x="70" y="70"></block>\n  ');
                    __line = 4;
                } else if (level === 8) {
                    __append('    <block type="controls_repeat" x="70" y="70" editable="false"\n      deletable="false">\n      <title name="TIMES">3</title>\n    </block>\n  ');
                    __line = 9;
                } else if (level === 13) {
                    __append('    <block type="maze_forever" x="20" y="70" editable="false" deletable="false">\n      <statement name="DO">\n        <block type="maze_moveForward" editable="false" deletable="false">\n          <next>\n            <block type="maze_if" editable="false" deletable="false">\n              <title name="DIR">isPathLeft</title>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 21;
                } else if (level === 19) {
                    __append('    <block type="maze_forever" x="20" y="70" editable="false" deletable="false">\n      <statement name="DO">\n        <block type="maze_ifElse" editable="false" deletable="false">\n          <title name="DIR">isPathForward</title>\n          <statement name="ELSE">\n            <block type="maze_ifElse" editable="false" deletable="false">\n              <title name="DIR">isPathRight</title>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  ');
                    __line = 34;
                }
                __line = 35;
            }
            __line = 36;
        }
        return __output.join("");
    } catch (e) {
        rethrow(e, __lines, __filename, __line);
    }
}

/***/ })

},[3116]);