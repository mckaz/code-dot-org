webpackJsonp([23],{

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

/***/ 2975:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stageOfBonusLevels = exports.bonusLevel = undefined;

var _react = __webpack_require__(1);

var bonusLevel = exports.bonusLevel = {
  id: _react.PropTypes.number.isRequired,
  levelId: _react.PropTypes.number.isRequired,
  map: _react.PropTypes.array,
  name: _react.PropTypes.string.isRequired,
  skin: _react.PropTypes.string,
  solutionImageUrl: _react.PropTypes.string,
  startDirection: _react.PropTypes.number,
  type: _react.PropTypes.string.isRequired
};

var stageOfBonusLevels = exports.stageOfBonusLevels = {
  stageNumber: _react.PropTypes.number.isRequired,
  levels: _react.PropTypes.arrayOf(_react.PropTypes.shape(bonusLevel))
};

/***/ }),

/***/ 3462:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3463);


/***/ }),

/***/ 3463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _StageExtras = __webpack_require__(3464);

var _StageExtras2 = _interopRequireDefault(_StageExtras);

var _reactRedux = __webpack_require__(53);

var _redux = __webpack_require__(787);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var script = document.querySelector('script[data-extras]');
var config = JSON.parse(script.dataset.extras);
var showProjectWidget = JSON.parse(script.dataset.widgetVisible);
var projectTypes = JSON.parse(script.dataset.widgetTypes);
var store = (0, _redux.getStore)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_StageExtras2.default, {
    stageNumber: config.stageNumber,
    nextLevelPath: config.nextLevelPath,
    bonusLevels: config.bonusLevels,
    showProjectWidget: showProjectWidget,
    projectTypes: projectTypes
  })
), document.querySelector('#stage-extras'));

/***/ }),

/***/ 3464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _BonusLevels = __webpack_require__(3465);

var _BonusLevels2 = _interopRequireDefault(_BonusLevels);

var _ProjectWidgetWithData = __webpack_require__(2832);

var _ProjectWidgetWithData2 = _interopRequireDefault(_ProjectWidgetWithData);

var _shapes = __webpack_require__(2975);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  h2: {
    fontSize: 24,
    fontFamily: '"Gotham 4r"',
    color: _color2.default.charcoal
  }
};

var StageExtras = function (_React$Component) {
  _inherits(StageExtras, _React$Component);

  function StageExtras() {
    _classCallCheck(this, StageExtras);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  StageExtras.prototype.render = function render() {
    var nextMessage = /stage/.test(this.props.nextLevelPath) ? _locale2.default.extrasNextLesson({ number: this.props.stageNumber + 1 }) : _locale2.default.extrasNextFinish();

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        _locale2.default.extrasStageNumberCompleted({ number: this.props.stageNumber })
      ),
      _react2.default.createElement(
        'h2',
        { style: styles.h2 },
        _locale2.default.continue()
      ),
      _react2.default.createElement(
        'a',
        { href: this.props.nextLevelPath },
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-large btn-primary',
            style: { marginBottom: 20 }
          },
          nextMessage
        )
      ),
      this.props.bonusLevels && Object.keys(this.props.bonusLevels).length > 0 ? _react2.default.createElement(_BonusLevels2.default, { bonusLevels: this.props.bonusLevels }) : _react2.default.createElement(
        'p',
        null,
        _locale2.default.extrasNoBonusLevels()
      ),
      this.props.showProjectWidget && _react2.default.createElement(_ProjectWidgetWithData2.default, {
        projectTypes: this.props.projectTypes
      }),
      _react2.default.createElement('div', { className: 'clear' })
    );
  };

  return StageExtras;
}(_react2.default.Component);

StageExtras.propTypes = {
  stageNumber: _react.PropTypes.number.isRequired,
  nextLevelPath: _react.PropTypes.string.isRequired,
  showProjectWidget: _react.PropTypes.bool,
  projectTypes: _react.PropTypes.arrayOf(_react.PropTypes.string),
  bonusLevels: _react.PropTypes.arrayOf(_react.PropTypes.shape(_shapes.stageOfBonusLevels))
};
exports.default = StageExtras;
module.exports = exports['default'];

/***/ }),

/***/ 3465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _FontAwesome = __webpack_require__(156);

var _FontAwesome2 = _interopRequireDefault(_FontAwesome);

var _radium = __webpack_require__(83);

var _radium2 = _interopRequireDefault(_radium);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _MazeThumbnail = __webpack_require__(3466);

var _MazeThumbnail2 = _interopRequireDefault(_MazeThumbnail);

var _CompletableLevelThumbnail = __webpack_require__(3467);

var _CompletableLevelThumbnail2 = _interopRequireDefault(_CompletableLevelThumbnail);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _shapes = __webpack_require__(2975);

var _reactRedux = __webpack_require__(53);

var _progressRedux = __webpack_require__(498);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var THUMBNAIL_IMAGE_SIZE = 200;
var THUMBNAIL_IMAGE_MARGIN = 10;
var RadiumFontAwesome = (0, _radium2.default)(_FontAwesome2.default);

var styles = {
  bonusLevel: {
    width: THUMBNAIL_IMAGE_SIZE,
    textAlign: 'center',
    marginRight: THUMBNAIL_IMAGE_MARGIN,
    float: 'left'
  },
  bonusLevelsTitle: {
    fontSize: 24,
    fontFamily: '"Gotham 4r"',
    color: _color2.default.charcoal
  },
  challengeRow: {
    clear: 'both',
    overflow: 'hidden',
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'normal',
    transition: 'left 0.25s ease-out',
    paddingBottom: 10
  },
  challenges: {
    display: 'inline-block',
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    transition: 'width 0.1s ease-out',
    verticalAlign: 'top'
  },
  solutionImage: {
    border: '1px solid ' + _color2.default.lighter_gray,
    marginBottom: 5,
    width: 400,
    height: 400,
    maxWidth: 'initial'
  },
  stageNumberHeading: {
    textAlign: 'center'
  },
  arrow: {
    fontSize: 40,
    cursor: 'pointer',
    verticalAlign: -30
  },
  arrowDisabled: {
    color: _color2.default.lighter_gray,
    cursor: 'default'
  }
};

var BonusLevelButton = function (_React$Component) {
  _inherits(BonusLevelButton, _React$Component);

  function BonusLevelButton() {
    _classCallCheck(this, BonusLevelButton);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  BonusLevelButton.prototype.render = function render() {
    return this.props.perfected ? _react2.default.createElement(
      'button',
      { className: 'btn btn-large' },
      _locale2.default.review()
    ) : _react2.default.createElement(
      'button',
      { className: 'btn btn-large btn-primary' },
      _locale2.default.tryIt()
    );
  };

  return BonusLevelButton;
}(_react2.default.Component);

BonusLevelButton.propTypes = {
  perfected: _react.PropTypes.bool.isRequired
};

var BonusLevel = function (_React$Component2) {
  _inherits(BonusLevel, _React$Component2);

  function BonusLevel() {
    _classCallCheck(this, BonusLevel);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  BonusLevel.prototype.renderWithMazeThumbnail = function renderWithMazeThumbnail() {
    return _react2.default.createElement(
      'div',
      { style: styles.bonusLevel },
      _react2.default.createElement(
        'a',
        { href: '?id=' + this.props.id },
        _react2.default.createElement(
          _CompletableLevelThumbnail2.default,
          {
            size: THUMBNAIL_IMAGE_SIZE,
            completed: this.props.perfected
          },
          _react2.default.createElement(_MazeThumbnail2.default, this.props)
        ),
        _react2.default.createElement(BonusLevelButton, { perfected: this.props.perfected })
      )
    );
  };

  BonusLevel.prototype.renderSolutionImageThumbnail = function renderSolutionImageThumbnail() {
    return _react2.default.createElement(
      'div',
      { style: styles.bonusLevel },
      _react2.default.createElement(
        'a',
        { href: '?id=' + this.props.id },
        _react2.default.createElement(
          _CompletableLevelThumbnail2.default,
          {
            size: THUMBNAIL_IMAGE_SIZE,
            completed: this.props.perfected
          },
          _react2.default.createElement('img', {
            src: this.props.solutionImageUrl,
            style: styles.solutionImage
          })
        ),
        _react2.default.createElement(BonusLevelButton, { perfected: this.props.perfected })
      )
    );
  };

  BonusLevel.prototype.render = function render() {
    if (["Maze", "Karel"].includes(this.props.type)) {
      return this.renderWithMazeThumbnail();
    } else if (this.props.solutionImageUrl) {
      return this.renderSolutionImageThumbnail();
    } else {
      return _react2.default.createElement(
        'a',
        { href: '?id=' + this.props.id },
        this.props.name
      );
    }
  };

  return BonusLevel;
}(_react2.default.Component);

BonusLevel.propTypes = _extends({}, _shapes.bonusLevel, {
  perfected: _react.PropTypes.bool.isRequired
});


var ConnectedBonusLevel = (0, _reactRedux.connect)(function (state, ownProps) {
  return {
    perfected: (0, _progressRedux.isPerfect)(state.progress, ownProps.levelId)
  };
})(BonusLevel);

exports.default = (0, _radium2.default)((_temp = _class = function (_React$Component3) {
  _inherits(BonusLevels, _React$Component3);

  function BonusLevels(props) {
    _classCallCheck(this, BonusLevels);

    var _this3 = _possibleConstructorReturn(this, _React$Component3.call(this, props));

    _this3.nextStage = function () {
      if (_this3.state.stageIndex < _this3.props.bonusLevels.length - 1) {
        _this3.setState({ stageIndex: _this3.state.stageIndex + 1 });
      }
    };

    _this3.previousStage = function () {
      if (_this3.state.stageIndex > 0) {
        _this3.setState({ stageIndex: _this3.state.stageIndex - 1 });
      }
    };

    _this3.state = {
      stageIndex: props.bonusLevels.length - 1
    };
    return _this3;
  }

  BonusLevels.prototype.render = function render() {
    var _this4 = this;

    var totalThumbnailWidth = THUMBNAIL_IMAGE_SIZE + THUMBNAIL_IMAGE_MARGIN;
    var totalWidth = this.props.bonusLevels[this.state.stageIndex].levels.length * totalThumbnailWidth - THUMBNAIL_IMAGE_MARGIN;

    var levels = this.props.bonusLevels.filter(function (stage) {
      return stage.stageNumber < _this4.props.bonusLevels[_this4.state.stageIndex].stageNumber;
    }).reduce(function (numLevels, stage) {
      return numLevels + stage.levels.length;
    }, 0);
    var scrollAmount = -1 * levels * totalThumbnailWidth;

    var leftDisabled = this.state.stageIndex === 0;
    var rightDisabled = this.state.stageIndex === this.props.bonusLevels.length - 1;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        { style: styles.bonusLevelsTitle },
        _locale2.default.extrasTryAChallenge()
      ),
      _react2.default.createElement(RadiumFontAwesome, {
        icon: 'caret-left',
        onClick: this.previousStage,
        style: [styles.arrow, leftDisabled && styles.arrowDisabled]
      }),
      _react2.default.createElement(
        'div',
        {
          style: _extends({}, styles.challenges, {
            width: totalWidth
          })
        },
        this.props.bonusLevels.map(function (stage) {
          return _react2.default.createElement(
            'div',
            {
              key: stage.stageNumber,
              style: _extends({}, styles.challengeRow, {
                left: scrollAmount,
                width: stage.levels.length * totalThumbnailWidth
              })
            },
            _react2.default.createElement(
              'h3',
              { style: styles.stageNumberHeading },
              _locale2.default.extrasStageNChallenges({
                stageNumber: _this4.props.bonusLevels[_this4.state.stageIndex].stageNumber
              })
            ),
            stage.levels.map(function (level) {
              return _react2.default.createElement(ConnectedBonusLevel, _extends({ key: level.id }, level));
            })
          );
        })
      ),
      _react2.default.createElement(RadiumFontAwesome, {
        icon: 'caret-right',
        onClick: this.nextStage,
        style: [styles.arrow, rightDisabled && styles.arrowDisabled]
      })
    );
  };

  return BonusLevels;
}(_react2.default.Component), _class.propTypes = {
  bonusLevels: _react.PropTypes.arrayOf(_react.PropTypes.shape(_shapes.stageOfBonusLevels))
}, _temp));
module.exports = exports['default'];

/***/ }),

/***/ 3466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ProtectedStatefulDiv = __webpack_require__(737);

var _ProtectedStatefulDiv2 = _interopRequireDefault(_ProtectedStatefulDiv);

var _skins = __webpack_require__(2760);

var _skins2 = _interopRequireDefault(_skins);

var _mazeUtils = __webpack_require__(1299);

var _mazeMap = __webpack_require__(2752);

var _mazeMap2 = _interopRequireDefault(_mazeMap);

var _drawMap = __webpack_require__(2134);

var _drawMap2 = _interopRequireDefault(_drawMap);

var _assetUrl = __webpack_require__(1153);

var _assetUrl2 = _interopRequireDefault(_assetUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MazeThumbnail = function (_React$Component) {
  _inherits(MazeThumbnail, _React$Component);

  function MazeThumbnail() {
    _classCallCheck(this, MazeThumbnail);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  MazeThumbnail.prototype.componentDidMount = function componentDidMount() {
    var skin = _skins2.default.load(_assetUrl2.default, this.props.skin);
    var Maze = {};
    var Type = (0, _mazeUtils.getSubtypeForSkin)(this.props.skin);
    var subtype = new Type(Maze, {
      skin: skin,
      level: this.props.level
    });

    Maze.map = this.props.serializedMaze ? _mazeMap2.default.deserialize(this.props.serializedMaze, subtype.getCellClass()) : _mazeMap2.default.parseFromOldValues(this.props.map, null, subtype.getCellClass());
    subtype.initStartFinish();
    subtype.createDrawer(this.svg);
    subtype.initWallMap();

    (0, _drawMap2.default)(this.svg, skin, subtype, Maze.map);
  };

  MazeThumbnail.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      _ProtectedStatefulDiv2.default,
      null,
      _react2.default.createElement('svg', {
        width: '400',
        height: '400',
        ref: function ref(c) {
          _this2.svg = c;
        }
      })
    );
  };

  return MazeThumbnail;
}(_react2.default.Component);

MazeThumbnail.propTypes = {
  level: _react.PropTypes.shape({
    startDirection: _react.PropTypes.number.isRequired,
    flowerType: _react.PropTypes.string
  }).isRequired,
  map: _react.PropTypes.array,
  serializedMaze: _react.PropTypes.array,
  skin: _react.PropTypes.string.isRequired
};
MazeThumbnail.defaultProps = {
  scale: 1
};
exports.default = MazeThumbnail;
module.exports = exports['default'];

/***/ }),

/***/ 3467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  wrapper: {
    display: 'inline-block',
    position: 'relative',
    transformOrigin: '0 0'
  },
  overlay: {
    width: 400,
    height: 400,
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    textAlign: 'center'
  },
  check: {
    fontSize: 350,
    lineHeight: '400px',
    color: '#fff',
    opacity: 0.8
  }
};

var CompletableLevelThumbnail = function (_React$Component) {
  _inherits(CompletableLevelThumbnail, _React$Component);

  function CompletableLevelThumbnail() {
    _classCallCheck(this, CompletableLevelThumbnail);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  CompletableLevelThumbnail.prototype.render = function render() {
    var scale = (this.props.size || 400) / 400;
    return _react2.default.createElement(
      'div',
      {
        style: {
          width: this.props.size,
          height: this.props.size,
          display: 'inline-block',
          overflow: 'hidden',
          border: '1px solid ' + _color2.default.lighter_gray
        }
      },
      _react2.default.createElement(
        'div',
        {
          style: _extends({
            transform: 'scale(' + scale + ')'
          }, styles.wrapper)
        },
        this.props.children,
        this.props.completed && _react2.default.createElement(
          'div',
          { style: styles.overlay },
          _react2.default.createElement('i', {
            className: 'fa fa-check',
            style: styles.check
          })
        )
      )
    );
  };

  return CompletableLevelThumbnail;
}(_react2.default.Component);

CompletableLevelThumbnail.propTypes = {
  children: _react.PropTypes.element.isRequired,
  size: _react.PropTypes.number,
  completed: _react.PropTypes.bool
};
exports.default = CompletableLevelThumbnail;
module.exports = exports['default'];

/***/ })

},[3462]);