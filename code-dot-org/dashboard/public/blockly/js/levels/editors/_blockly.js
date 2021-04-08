webpackJsonp([7],{

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseCommand = __webpack_require__(793);

module.exports = function (_BaseCommand) {
  _inherits(CallbackCommand, _BaseCommand);

  function CallbackCommand(gameController, highlightCallback, actionCallback, targetEntity) {
    _classCallCheck(this, CallbackCommand);

    var _this = _possibleConstructorReturn(this, _BaseCommand.call(this, gameController, highlightCallback, targetEntity));

    _this.actionCallback = actionCallback;
    return _this;
  }

  CallbackCommand.prototype.tick = function tick() {
    // do stuff
  };

  CallbackCommand.prototype.begin = function begin() {
    _BaseCommand.prototype.begin.call(this);
    this.actionCallback();
  };

  return CallbackCommand;
}(BaseCommand);

/***/ }),

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandState = __webpack_require__(1270);

module.exports = function () {
  function CommandQueue(gameController) {
    _classCallCheck(this, CommandQueue);

    this.gameController = gameController;
    this.game = gameController.game;
    this.reset();
    this.repeatCommands = [];
    this.setUnshiftState = false;
    this.highPriorityCommands = [];
  }

  CommandQueue.prototype.addCommand = function addCommand(command) {
    var repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    command.repeat = repeat;
    // if we're handling a while command, add to the while command's queue instead of this queue
    if (this.whileCommandQueue) {
      this.whileCommandQueue.addCommand(command);
    } else {
      if (this.setUnshiftState) {
        this.highPriorityCommands.push(command);
      } else {
        this.commandList_.push(command);
      }
    }
  };

  CommandQueue.prototype.setWhileCommandInsertState = function setWhileCommandInsertState(queue) {
    this.whileCommandQueue = queue;
  };

  CommandQueue.prototype.begin = function begin() {
    this.state = CommandState.WORKING;
  };

  CommandQueue.prototype.reset = function reset() {
    this.state = CommandState.NOT_STARTED;
    this.currentCommand = null;
    this.commandList_ = [];
    this.highPriorityCommands = [];
    if (this.whileCommandQueue) {
      this.whileCommandQueue.reset();
    }
    this.repeatCommands = [];
    this.whileCommandQueue = null;
  };

  CommandQueue.prototype.startPushHighPriorityCommands = function startPushHighPriorityCommands() {
    this.setUnshiftState = true;
    // clear existing highPriorityCommands
    this.highPriorityCommands = [];
  };

  CommandQueue.prototype.endPushHighPriorityCommands = function endPushHighPriorityCommands() {
    // unshift highPriorityCommands to the command list
    for (var i = this.highPriorityCommands.length - 1; i >= 0; i--) {
      this.commandList_.unshift(this.highPriorityCommands[i]);
    }
    this.setUnshiftState = false;
  };

  CommandQueue.prototype.tick = function tick() {
    if (this.state === CommandState.WORKING) {
      // if there is no command
      if (!this.currentCommand) {
        // if command list is empty
        if (this.commandList_.length === 0) {
          // mark this queue as a success if there is no repeat command
          if (this.repeatCommands.length === 0) {
            this.state = CommandState.SUCCESS;
          }
          // if there are repeat command for this queue, add them
          this.gameController.startPushRepeatCommand();
          for (var i = 0; i < this.repeatCommands.length; i++) {
            if (this.repeatCommands[i][1] > 0) {
              this.repeatCommands[i][0]();
              this.repeatCommands[i][1]--;
            } else if (this.repeatCommands[i][1] === -1) {
              this.repeatCommands[i][0]();
            } else {
              this.repeatCommands.splice(i, 1);
            }
          }
          this.gameController.endPushRepeatCommand();
          return;
        }
        // get new command from the command list
        this.currentCommand = this.commandList_.shift();
      }

      if (!this.currentCommand.isStarted()) {
        this.currentCommand.begin();
      } else {
        this.currentCommand.tick();
      }

      // check if command is done
      if (this.currentCommand.isSucceeded()) {
        this.currentCommand = null;
      } else if (this.currentCommand.isFailed()) {
        this.state = CommandState.FAILURE;
      }
    }
  };

  CommandQueue.prototype.getLength = function getLength() {
    return this.commandList_ ? this.commandList_.length : 0;
  };

  /**
   * Whether the command has started working.
   * @returns {boolean}
   */


  CommandQueue.prototype.isStarted = function isStarted() {
    return this.state !== CommandState.NOT_STARTED;
  };

  /**
   * Whether the command has succeeded or failed, and is
   * finished with its work.
   * @returns {boolean}
   */


  CommandQueue.prototype.isFinished = function isFinished() {
    return this.isSucceeded() || this.isFailed();
  };

  /**
   * Whether the command has finished with its work and reported success.
   * @returns {boolean}
   */


  CommandQueue.prototype.isSucceeded = function isSucceeded() {
    return this.state === CommandState.SUCCESS;
  };

  /**
   * Whether the command has finished with its work and reported failure.
   * @returns {boolean}
   */


  CommandQueue.prototype.isFailed = function isFailed() {
    return this.state === CommandState.FAILURE;
  };

  CommandQueue.prototype.addRepeatCommands = function addRepeatCommands(codeBlock, iteration) {
    // forever loop cancel existing forever loops
    if (iteration === -1) {
      for (var i = 0; i < this.repeatCommands.length; i++) {
        if (this.repeatCommands[i][1] === -1) {
          this.repeatCommands.splice(i, 1);
          break;
        }
      }
    }
    this.repeatCommands.push([codeBlock, iteration]);
    this.begin();
  };

  return CommandQueue;
}();

/***/ }),

/***/ 1270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.freeze({
  NOT_STARTED: 0,
  WORKING: 1,
  SUCCESS: 2,
  FAILURE: 3
});

/***/ }),

/***/ 1271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(799),
    North = _require.North,
    South = _require.South,
    East = _require.East,
    West = _require.West;

module.exports = function () {
  function LevelBlock(blockType) {
    _classCallCheck(this, LevelBlock);

    this.blockType = blockType;

    // Default values apply to simple, action-plane destroyable blocks
    this.isEntity = false;
    this.isWalkable = false;
    this.isPlacable = false; // whether another block can be placed in this block's spot
    this.isDestroyable = true;
    this.isUsable = true;
    this.isEmpty = false;
    this.isEmissive = false;
    this.isTransparent = false;
    this.isRedstone = false;
    this.isPowered = false;
    this.isConnectedToRedstone = false; // can this block connect to nearby redstone wire
    this.isRedstoneBattery = false;
    this.isOpen = false;
    this.isRail = false;
    this.isSolid = true;
    this.isWeaklyPowerable = true;
    this.isStickable = true;

    if (blockType === "") {
      this.isWalkable = true;
      this.isDestroyable = false;
      this.isEmpty = true;
      this.isPlacable = true;
      this.isUsable = false;
      this.isWeaklyPowerable = false;
    }

    if (this.getIsMiniblock()) {
      this.isEntity = true;
      this.isWalkable = true;
      this.isDestroyable = false;
      this.isPlacable = true;
      this.isUsable = false;
      this.isTransparent = true;
    }

    if (blockType.match('torch')) {
      this.isWalkable = true;
      this.isPlacable = true;
      this.isStickable = false;
    }

    if (blockType.substring(0, 5) === "rails") {
      this.isWeaklyPowerable = blockType === 'railsRedstoneTorch' ? true : false;
      this.isStickable = blockType === 'railsRedstoneTorch' ? false : true;
      this.isEntity = true;
      this.isWalkable = true;
      this.isUsable = true;
      this.isDestroyable = true;
      this.isTransparent = true;
      this.isRail = blockType !== "railsRedstoneTorch";
      this.isConnectedToRedstone = /^rails(RedstoneTorch|Unpowered|Powered)/.test(blockType);
      this.isRedstoneBattery = blockType === "railsRedstoneTorch";
      this.connectionA = undefined;
      this.connectionB = undefined;
    }

    if (blockType === "sheep") {
      this.isEntity = true;
      this.isDestroyable = false;
      this.isUsable = true;
    }

    if (blockType === "invisible") {
      this.isDestroyable = false;
      this.isUsable = false;
      this.isWeaklyPowerable = false;
      this.isEmissive = true;
    }

    if (blockType.startsWith("glass")) {
      this.isSolid = false;
    }

    if (blockType.startsWith("ice")) {
      this.isSolid = false;
    }

    if (blockType === "creeper") {
      this.isEntity = true;
    }

    if (blockType === "bedrock") {
      this.isDestroyable = false;
    }

    if (blockType === "lava") {
      this.isEmissive = true;
      this.isWalkable = true;
      this.isPlacable = true;
    }

    if (blockType === "water") {
      this.isPlacable = true;
    }

    if (blockType === "torch") {
      this.isEmissive = true;
      this.isEntity = true;
      this.isWalkable = true;
      this.isUsable = true;
      this.isDestroyable = false;
      this.isTransparent = true;
    }

    if (blockType === "cropWheat") {
      this.isEmissive = false;
      this.isEntity = true;
      this.isWalkable = true;
      this.isUsable = true;
      this.isDestroyable = false;
      this.isTransparent = true;
    }

    if (blockType === "tnt") {
      this.isUsable = true;
      this.isDestroyable = true;
    }

    if (blockType === "door") {
      this.isWeaklyPowerable = false;
      this.isSolid = false;
      this.isEntity = true;
      this.isWalkable = false;
      this.isUsable = true;
      this.isDestroyable = false;
      this.isTransparent = true;
      this.isStickable = false;
    }

    if (blockType === "doorIron") {
      this.isWeaklyPowerable = false;
      this.isSolid = false;
      this.isEntity = true;
      this.isWalkable = false;
      this.isDestroyable = false;
      this.isTransparent = true;
      this.isConnectedToRedstone = true;
      this.isStickable = false;
    }

    if (blockType.startsWith("redstoneWire")) {
      this.isEntity = true;
      this.isWalkable = true;
      this.isUsable = true;
      this.isDestroyable = true;
      this.isTransparent = true;
      this.isRedstone = true;
      this.isStickable = false;
    }

    if (blockType.startsWith("pressurePlate")) {
      this.isWeaklyPowerable = blockType === 'pressurePlateUp' ? false : true;
      this.isEntity = true;
      this.isWalkable = true;
      this.isDestroyable = false;
      this.isTransparent = true;
      this.isConnectedToRedstone = true;
      this.isRedstoneBattery = blockType === 'pressurePlateUp' ? false : true;
      this.isStickable = false;
    }

    if (blockType === "glowstone") {
      this.isEntity = true;
    }

    if (blockType === "bedFoot" || blockType === "bedHead") {
      this.isEntity = true;
    }

    if (blockType.startsWith("piston")) {
      this.isWeaklyPowerable = false;
      this.isSolid = false;
      this.isDestroyable = false;
      this.isConnectedToRedstone = !blockType.startsWith("pistonArm");
      if (blockType.substring(blockType.length - 2, blockType.length) === "On" || blockType.startsWith("pistonArm") || blockType.substring(blockType.length - 8, blockType.length) === "OnSticky") {
        this.isEntity = true;
      }
    }

    if (blockType.startsWith("flower")) {
      this.isWalkable = true;
    }
  }

  /**
   * Does the given block type represent a "flat" block?
   * "flat" blocks are those subset of walkable blocks which are walkable
   * because they are lying right on the ground, as opposed to those blocks like
   * torches which are walkable because they do not occupy very much space.
   *
   * @return {boolean}
   */


  LevelBlock.prototype.isFlat = function isFlat() {
    return this.isRail || this.isRedstone || this.blockType.startsWith("pressurePlate");
  };

  LevelBlock.prototype.notValidOnGroundPlane = function notValidOnGroundPlane() {
    return this.blockType.startsWith("rails") || this.blockType.startsWith("redstone");
  };

  LevelBlock.prototype.skipsDestructionOverlay = function skipsDestructionOverlay() {
    return this.isRedstone || this.blockType === "torch" || this.blockType === "railsRedstoneTorch";
  };

  LevelBlock.prototype.shouldRenderOnGroundPlane = function shouldRenderOnGroundPlane() {
    return this.isFlat();
  };

  LevelBlock.prototype.getIsPowerableRail = function getIsPowerableRail() {
    return this.isRail && this.isConnectedToRedstone;
  };

  /**
   * Helper method specifically for powered rails, which can only be veritical
   * or horizontal.
   *
   * @return {boolean}
   */


  LevelBlock.prototype.getIsHorizontal = function getIsHorizontal() {
    return this.blockType.match('East|West');
  };

  /**
   * Helper method specifically for powered rails, which can only be veritical
   * or horizontal.
   *
   * @return {boolean}
   */


  LevelBlock.prototype.getIsVertical = function getIsVertical() {
    return this.blockType.match('North|South');
  };

  LevelBlock.prototype.getIsStickyPiston = function getIsStickyPiston() {
    return this.blockType.substring(this.blockType.length - 6, this.blockType.length) === "Sticky";
  };

  LevelBlock.prototype.canHoldCharge = function canHoldCharge() {
    return this.isSolid;
  };

  /**
   * @see {LevelBlock.isMiniblock}
   * @return {boolean}
   */


  LevelBlock.prototype.getIsMiniblock = function getIsMiniblock() {
    return LevelBlock.isMiniblock(this.blockType);
  };

  LevelBlock.prototype.getIsTree = function getIsTree() {
    return !!this.blockType.match(/^tree/);
  };

  LevelBlock.prototype.getIsDoor = function getIsDoor() {
    return this.blockType.startsWith("door");
  };

  LevelBlock.prototype.getIsLiquid = function getIsLiquid() {
    return this.blockType === "water" || this.blockType === "lava";
  };

  LevelBlock.prototype.getCanFall = function getCanFall() {
    return this.blockType === "sand" || this.blockType === "gravel";
  };

  /**
   * Can this block be placed in liquid to replace a liquid block? Should
   * generally be true for all "standard" blocks like cobblestone and dirt, and
   * false for all "special" blocks like redstone and torches.
   *
   * @return {boolean}
   */


  LevelBlock.prototype.getIsPlaceableInLiquid = function getIsPlaceableInLiquid() {
    var notPlaceable = this.isRedstone || this.getIsPiston() || this.isRail || this.blockType === 'torch' || this.blockType === 'railsRedstoneTorch' || this.blockType === 'pressurePlateUp';

    return !notPlaceable;
  };

  /**
   * Note that this will be true for blocks representing the unpowered piston,
   * the "base" of the powered piston, AND the extended arm of the powered
   * piston
   *
   * @return {boolean}
   */


  LevelBlock.prototype.getIsPiston = function getIsPiston() {
    return this.blockType.startsWith("piston");
  };

  /**
   * @return {boolean}
   */


  LevelBlock.prototype.getIsPistonArm = function getIsPistonArm() {
    return this.blockType.startsWith("pistonArm");
  };

  LevelBlock.prototype.getIsPushable = function getIsPushable() {
    return this.blockType !== "" && !this.isDestroyableUponPush();
  };

  LevelBlock.prototype.isDestroyableUponPush = function isDestroyableUponPush() {
    return this.blockType.startsWith("redstone") || this.blockType.startsWith("door") || this.blockType.startsWith("railsRedstone") || this.blockType.startsWith("pressure");
  };

  LevelBlock.prototype.needToRefreshRedstone = function needToRefreshRedstone() {
    if (this.isRedstone || this.blockType === '' || this.isConnectedToRedstone && !this.blockType.startsWith("piston")) {
      return true;
    } else {
      return false;
    }
  };

  LevelBlock.prototype.getPistonDirection = function getPistonDirection() {
    if (this.blockType.startsWith("piston")) {
      var direction = this.blockType.substring(6, 7);
      switch (direction) {
        case "D":
          return South;
        case "U":
          return North;
        case "L":
          return West;
        case "R":
          return East;
      }
    }
  };

  LevelBlock.prototype.getIsEmptyOrEntity = function getIsEmptyOrEntity() {
    return this.isEmpty || this.isEntity;
  };

  /**
   * Static to determine if a block would fall from Action Plane into Ground Plane.
   * @param {String} blockType
   * @return {boolean}
   */


  LevelBlock.getCanFall = function getCanFall(blockType) {
    return new LevelBlock(blockType).getCanFall();
  };

  /**
   * Static to determine if a block is placeable over water at all.
   * @param {String} blockType
   * @return {boolean}
   */


  LevelBlock.getIsPlaceableInLiquid = function getIsPlaceableInLiquid(blockType) {
    return new LevelBlock(blockType).getIsPlaceableInLiquid();
  };

  /**
   * Static passthrough to the isWalkable property for the given blockType.
   * TODO @hamms: remove this method once all calling methods have been updated
   *      to operate on actual LevelBlocks rather than blockType strings
   *
   * @param {String} blockType
   * @return {boolean}
   */


  LevelBlock.isWalkable = function isWalkable(blockType) {
    return new LevelBlock(blockType).isWalkable;
  };

  /**
   * Does the given block type represent a miniblock?
   * TODO @hamms: remove this method once all calling methods have been updated
   *      to operate on actual LevelBlocks rather than blockType strings
   *
   * @param {String} blockType
   * @return {boolean}
   */


  LevelBlock.isMiniblock = function isMiniblock(blockType) {
    return blockType.endsWith("Miniblock");
  };

  /**
   * Static passthrough to the isWalkable property for the given blockType.
   * TODO @hamms: remove this method once all calling methods have been updated
   *      to operate on actual LevelBlocks rather than blockType strings
   *
   * @param {String} blockType
   * @return {boolean}
   */


  LevelBlock.isFlat = function isFlat(blockType) {
    return new LevelBlock(blockType).isFlat();
  };

  LevelBlock.skipsDestructionOverlay = function skipsDestructionOverlay(blockType) {
    return new LevelBlock(blockType).skipsDestructionOverlay();
  };

  LevelBlock.notValidOnGroundPlane = function notValidOnGroundPlane(blockType) {
    return new LevelBlock(blockType).notValidOnGroundPlane();
  };

  /**
   * For any given block type, get the appropriate mini block frame (as defined
   * in LevelView.miniblocks) if it exists.
   *
   * For miniblock block types, this should be the miniblock itself, so this
   * means simply removing the "Miniblock" identifier, so a "diamondMiniblock"
   * block will produce a "diamond" frame.
   *
   * For regular block types, this should be the miniblock produced when
   * destroying the block type, so a "oreDiamond" block will produce a "diamond"
   * frame
   *
   * @param {String} blockType
   * @return {String} frame identifier
   */


  LevelBlock.getMiniblockFrame = function getMiniblockFrame(blockType) {
    if (blockType === "railsRedstoneTorch") {
      return "redstoneTorch";
    }

    if (blockType.startsWith("rails")) {
      return "railNormal";
    }

    if (blockType.startsWith("glass") || blockType.startsWith("ice")) {
      return undefined;
    }

    // We use the same miniblock for -all- restoneWire
    if (blockType.substring(0, 12) === "redstoneWire") {
      return "redstoneDust";
    }

    // Miniblock block types are suffixed with the string "Miniblock"
    if (LevelBlock.isMiniblock(blockType)) {
      return blockType.replace("Miniblock", "");
    }

    // For everything else, simply map the block type to the desired miniblock
    var frame = blockType;

    switch (frame) {
      case "treeAcacia":
      case "treeBirch":
      case "treeJungle":
      case "treeOak":
      case "treeSpruce":
      case "treeSpruceSnowy":
        frame = "log" + frame.substring(4);
        break;
      case "stone":
        frame = "cobblestone";
        break;
      case "oreCoal":
        frame = "coal";
        break;
      case "oreDiamond":
        frame = "diamond";
        break;
      case "oreIron":
        frame = "ingotIron";
        break;
      case "oreLapis":
        frame = "lapisLazuli";
        break;
      case "oreGold":
        frame = "ingotGold";
        break;
      case "oreEmerald":
        frame = "emerald";
        break;
      case "oreRedstone":
        frame = "redstoneDust";
        break;
      case "grass":
        frame = "dirt";
        break;
      case "wool_orange":
        frame = "wool";
        break;
      case "tnt":
        frame = "gunPowder";
        break;
    }

    return frame;
  };

  return LevelBlock;
}();

/***/ }),

/***/ 1272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var FacingDirection = __webpack_require__(799);

/**
 * Converts entities found within the levelConfig.actionPlane to a
 * levelConfig.entities suitable for loading by the game initializer.
 *
 * ['sheepRight', 'creeperUp] -> [['sheep', 0, 0, 1], ['creeper', 1, 0, 0]]
 *
 * @param levelConfig
 */
module.exports.convertActionPlaneEntitiesToConfig = function (levelConfig) {
  var _ref = levelConfig.gridWidth && levelConfig.gridHeight ? [levelConfig.gridWidth, levelConfig.gridHeight] : [10, 10],
      _ref2 = _slicedToArray(_ref, 2),
      width = _ref2[0],
      height = _ref2[1];

  var planesToCustomize = [levelConfig.actionPlane];
  planesToCustomize.forEach(function (plane) {
    for (var i = 0; i < plane.length; i++) {
      var item = plane[i];

      if (item.match(/sheep|zombie|ironGolem|creeper|cow|chicken|ghast/)) {
        var suffixToDirection = {
          Up: FacingDirection.North,
          Down: FacingDirection.South,
          Left: FacingDirection.West,
          Right: FacingDirection.East
        };

        levelConfig.entities = levelConfig.entities || [];
        var x = i % width;
        var y = Math.floor(i / height);

        var directionMatch = item.match(/(.*)(Right|Left|Up|Down)/);
        var directionToUse = directionMatch ? suffixToDirection[directionMatch[2]] : FacingDirection.East;
        var entityToUse = directionMatch ? directionMatch[1] : item;
        levelConfig.entities.push([entityToUse, x, y, directionToUse]);
        plane[i] = '';
      }
    }
  });
};

module.exports.randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

/***/ }),

/***/ 1951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = load;

var _skins = __webpack_require__(744);

var _skins2 = _interopRequireDefault(_skins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function load(assetUrl, id) {
  var skin = _skins2.default.load(assetUrl, id);
  return skin;
} /**
   * Load Skin for Applab.
   */

/***/ }),

/***/ 1952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandQueue = __webpack_require__(1269);
var CallbackCommand = __webpack_require__(1016);

var EventType = __webpack_require__(1159);
var FacingDirection = __webpack_require__(799);
var Position = __webpack_require__(838);

var LevelModel = __webpack_require__(2711);
var LevelView = __webpack_require__(2716);
var LevelEntity = __webpack_require__(2718);
var AssetLoader = __webpack_require__(2726);

var CodeOrgAPI = __webpack_require__(2727);

var GAME_WIDTH = 400;
var GAME_HEIGHT = 400;

/**
 * Initializes a new instance of a mini-game visualization
 */

var GameController = function () {
  /**
   * @param {Object} gameControllerConfig
   * @param {String} gameControllerConfig.containerId DOM ID to mount this app
   * @param {Phaser} gameControllerConfig.Phaser Phaser package
   * @constructor
   */
  function GameController(gameControllerConfig) {
    var _this = this;

    _classCallCheck(this, GameController);

    this.DEBUG = gameControllerConfig.debug;

    // Phaser pre-initialization config
    window.PhaserGlobal = {
      disableAudio: true,
      disableWebAudio: true,
      hideBanner: !this.DEBUG
    };

    /**
     * @public {Object} codeOrgAPI - API with externally-callable methods for
     * starting an attempt, issuing commands, etc.
     */
    this.codeOrgAPI = CodeOrgAPI.get(this);

    var Phaser = gameControllerConfig.Phaser;

    /**
     * Main Phaser game instance.
     * @property {Phaser.Game}
     */
    this.game = new Phaser.Game({
      forceSetTimeOut: gameControllerConfig.forceSetTimeOut,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      renderer: Phaser.CANVAS,
      parent: gameControllerConfig.containerId,
      state: 'earlyLoad',
      // TODO(bjordan): remove now that using canvas?
      preserveDrawingBuffer: true // enables saving .png screengrabs
    });

    this.specialLevelType = null;
    this.queue = new CommandQueue(this);
    this.OnCompleteCallback = null;

    this.assetRoot = gameControllerConfig.assetRoot;

    this.audioPlayer = gameControllerConfig.audioPlayer;
    this.afterAssetsLoaded = gameControllerConfig.afterAssetsLoaded;
    this.assetLoader = new AssetLoader(this);
    this.earlyLoadAssetPacks = gameControllerConfig.earlyLoadAssetPacks || [];
    this.earlyLoadNiceToHaveAssetPacks = gameControllerConfig.earlyLoadNiceToHaveAssetPacks || [];

    this.resettableTimers = [];
    this.timeouts = [];
    this.timeout = 0;
    this.initializeCommandRecord();

    this.score = 0;
    this.useScore = false;
    this.scoreText = null;
    this.onScoreUpdate = gameControllerConfig.onScoreUpdate;

    this.events = [];

    // Phaser "slow motion" modifier we originally tuned animations using
    this.assumedSlowMotion = 1.5;
    this.initialSlowMotion = gameControllerConfig.customSlowMotion || this.assumedSlowMotion;
    this.tweenTimeScale = 1.5 / this.initialSlowMotion;

    this.playerDelayFactor = 1.0;
    this.dayNightCycle = false;
    this.player = null;
    this.agent = null;

    this.timerSprite = null;

    this.game.state.add('earlyLoad', {
      preload: function preload() {
        // don't let state change stomp essential asset downloads in progress
        _this.game.load.resetLocked = true;
        _this.assetLoader.loadPacks(_this.earlyLoadAssetPacks);
      },
      create: function create() {
        // optionally load some more assets if we complete early load before level load
        _this.assetLoader.loadPacks(_this.earlyLoadNiceToHaveAssetPacks);
        _this.game.load.start();
      }
    });

    this.game.state.add('levelRunner', {
      preload: this.preload.bind(this),
      create: this.create.bind(this),
      update: this.update.bind(this),
      render: this.render.bind(this)
    });
  }

  /**
   * Is this one of those level types in which the player is controlled by arrow
   * keys rather than by blocks?
   *
   * @return {boolean}
   */


  GameController.prototype.getIsDirectPlayerControl = function getIsDirectPlayerControl() {
    return this.levelData.isEventLevel || this.levelData.isAgentLevel;
  };

  /**
   * @param {Object} levelConfig
   */


  GameController.prototype.loadLevel = function loadLevel(levelConfig) {
    this.levelData = Object.freeze(levelConfig);

    this.levelEntity = new LevelEntity(this);
    this.levelModel = new LevelModel(this.levelData, this);
    this.levelView = new LevelView(this);
    this.specialLevelType = levelConfig.specialLevelType;
    this.timeout = levelConfig.levelVerificationTimeout;
    if (levelConfig.useScore !== undefined) {
      this.useScore = levelConfig.useScore;
    }
    this.timeoutResult = levelConfig.timeoutResult;
    this.onDayCallback = levelConfig.onDayCallback;
    this.onNightCallback = levelConfig.onNightCallback;

    this.game.state.start('levelRunner');
  };

  GameController.prototype.reset = function reset() {
    var _this2 = this;

    this.dayNightCycle = false;
    this.queue.reset();
    this.levelEntity.reset();
    this.levelModel.reset();
    this.levelView.reset(this.levelModel);
    this.levelEntity.loadData(this.levelData);
    this.player = this.levelModel.player;
    this.agent = this.levelModel.agent;
    this.resettableTimers.forEach(function (timer) {
      timer.stop(true);
    });
    this.timeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });
    if (this.timerSprite) {
      this.timerSprite.kill();
    }
    this.timerSprite = null;
    this.timeouts = [];
    this.resettableTimers.length = 0;
    this.events.length = 0;

    this.score = 0;
    if (this.useScore) {
      this.updateScore();
    }

    if (!this.getIsDirectPlayerControl()) {
      this.events.push(function (event) {
        if (event.eventType === EventType.WhenUsed && event.targetType === 'sheep') {
          _this2.codeOrgAPI.drop(null, 'wool', event.targetIdentifier);
        }
        if (event.eventType === EventType.WhenTouched && event.targetType === 'creeper') {
          _this2.codeOrgAPI.flashEntity(null, event.targetIdentifier);
          _this2.codeOrgAPI.explodeEntity(null, event.targetIdentifier);
        }
      });
    }

    this.initializeCommandRecord();
  };

  GameController.prototype.preload = function preload() {
    this.game.load.resetLocked = true;
    this.game.time.advancedTiming = this.DEBUG;
    this.game.stage.disableVisibilityChange = true;
    this.assetLoader.loadPacks(this.levelData.assetPacks.beforeLoad);
  };

  GameController.prototype.create = function create() {
    var _this3 = this;

    this.levelView.create(this.levelModel);
    this.game.time.slowMotion = this.initialSlowMotion;
    this.addCheatKeys();
    this.assetLoader.loadPacks(this.levelData.assetPacks.afterLoad);
    this.game.load.image('timer', this.assetRoot + "images/placeholderTimer.png");
    this.game.load.onLoadComplete.addOnce(function () {
      if (_this3.afterAssetsLoaded) {
        _this3.afterAssetsLoaded();
      }
    });
    this.levelEntity.loadData(this.levelData);
    this.game.load.start();
  };

  GameController.prototype.run = function run() {
    var _this4 = this;

    // dispatch when spawn event at run
    this.events.forEach(function (e) {
      return e({ eventType: EventType.WhenRun, targetIdentifier: undefined });
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.levelEntity.entityMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        var entity = value[1];
        this.events.forEach(function (e) {
          return e({ eventType: EventType.WhenSpawned, targetType: entity.type, targetIdentifier: entity.identifier });
        });
        entity.queue.begin();
      }
      // set timeout for timeout
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

    var isNumber = !isNaN(this.timeout);
    if (isNumber && this.timeout > 0) {
      this.timerSprite = this.game.add.sprite(-50, 390, 'timer');
      var tween = this.levelView.addResettableTween(this.timerSprite).to({
        x: -450, alpha: 0.5
      }, this.timeout, Phaser.Easing.Linear.None);

      tween.onComplete.add(function () {
        _this4.endLevel(_this4.timeoutResult(_this4.levelModel));
      });

      tween.start();
    }
  };

  GameController.prototype.followingPlayer = function followingPlayer() {
    return !!this.levelData.gridDimensions && !this.checkMinecartLevelEndAnimation();
  };

  GameController.prototype.update = function update() {
    this.queue.tick();
    this.levelEntity.tick();
    if (this.levelModel.usePlayer) {
      this.player.updateMovement();
    }
    if (this.levelModel.usingAgent) {
      this.agent.updateMovement();
    }
    this.levelView.update();

    // Check for completion every frame for "event" levels. For procedural
    // levels, only check completion after the player has run all commands.
    if (this.getIsDirectPlayerControl() || this.player.queue.state > 1) {
      this.checkSolution();
    }
  };

  GameController.prototype.addCheatKeys = function addCheatKeys() {
    var _keysToMovementState,
        _this5 = this;

    if (!this.levelModel.usePlayer) {
      return;
    }

    var keysToMovementState = (_keysToMovementState = {}, _defineProperty(_keysToMovementState, Phaser.Keyboard.UP, FacingDirection.North), _defineProperty(_keysToMovementState, Phaser.Keyboard.W, FacingDirection.North), _defineProperty(_keysToMovementState, Phaser.Keyboard.RIGHT, FacingDirection.East), _defineProperty(_keysToMovementState, Phaser.Keyboard.D, FacingDirection.East), _defineProperty(_keysToMovementState, Phaser.Keyboard.DOWN, FacingDirection.South), _defineProperty(_keysToMovementState, Phaser.Keyboard.S, FacingDirection.South), _defineProperty(_keysToMovementState, Phaser.Keyboard.LEFT, FacingDirection.West), _defineProperty(_keysToMovementState, Phaser.Keyboard.A, FacingDirection.West), _defineProperty(_keysToMovementState, Phaser.Keyboard.SPACEBAR, -2), _keysToMovementState);

    Object.keys(keysToMovementState).forEach(function (key) {
      var movementState = keysToMovementState[key];
      _this5.game.input.keyboard.addKey(key).onDown.add(function () {
        _this5.player.movementState = movementState;
        _this5.player.updateMovement();
      });
      _this5.game.input.keyboard.addKey(key).onUp.add(function () {
        if (_this5.player.movementState === movementState) {
          _this5.player.movementState = -1;
        }
        _this5.player.updateMovement();
      });
    });
  };

  GameController.prototype.handleEndState = function handleEndState(result) {
    // report back to the code.org side the pass/fail result
    //     then clear the callback so we dont keep calling it
    if (this.OnCompleteCallback) {
      this.OnCompleteCallback(result, this.levelModel);
      this.OnCompleteCallback = null;
    }
  };

  GameController.prototype.render = function render() {
    if (this.DEBUG) {
      this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00");
    }
    this.levelView.render();
  };

  GameController.prototype.scaleFromOriginal = function scaleFromOriginal() {
    var _ref = this.levelData.gridDimensions || [10, 10],
        _ref2 = _slicedToArray(_ref, 2),
        newWidth = _ref2[0],
        newHeight = _ref2[1];

    var originalWidth = 10,
        originalHeight = 10;

    return [newWidth / originalWidth, newHeight / originalHeight];
  };

  GameController.prototype.getScreenshot = function getScreenshot() {
    return this.game.canvas.toDataURL("image/png");
  };

  // command record

  GameController.prototype.initializeCommandRecord = function initializeCommandRecord() {
    var commandList = ["moveAway", "moveToward", "moveForward", "turn", "turnRandom", "explode", "wait", "flash", "drop", "spawn", "destroy", "playSound", "attack", "addScore"];
    this.commandRecord = new Map();
    this.repeatCommandRecord = new Map();
    this.isRepeat = false;
    for (var i = 0; i < commandList.length; i++) {
      this.commandRecord.set(commandList[i], new Map());
      this.commandRecord.get(commandList[i]).set("count", 0);
      this.repeatCommandRecord.set(commandList[i], new Map());
      this.repeatCommandRecord.get(commandList[i]).set("count", 0);
    }
  };

  GameController.prototype.startPushRepeatCommand = function startPushRepeatCommand() {
    this.isRepeat = true;
  };

  GameController.prototype.endPushRepeatCommand = function endPushRepeatCommand() {
    this.isRepeat = false;
  };

  GameController.prototype.addCommandRecord = function addCommandRecord(commandName, targetType, repeat) {
    var commandRecord = repeat ? this.repeatCommandRecord : this.commandRecord;
    // correct command name
    if (commandRecord.has(commandName)) {
      // update count for command map
      var commandMap = commandRecord.get(commandName);
      commandMap.set("count", commandMap.get("count") + 1);
      // command map has target
      if (commandMap.has(targetType)) {
        // increment count
        commandMap.set(targetType, commandMap.get(targetType) + 1);
      } else {
        commandMap.set(targetType, 1);
      }
      if (this.DEBUG) {
        var msgHeader = repeat ? "Repeat " : "" + "Command :";
        console.log(msgHeader + commandName + " executed in mob type : " + targetType + " updated count : " + commandMap.get(targetType));
      }
    }
  };

  GameController.prototype.getCommandCount = function getCommandCount(commandName, targetType, repeat) {
    var commandRecord = repeat ? this.repeatCommandRecord : this.commandRecord;
    // command record has command name and target
    if (commandRecord.has(commandName)) {
      var commandMap = commandRecord.get(commandName);
      // doesn't have target so returns global count for command
      if (targetType === undefined) {
        return commandMap.get("count");
        // type specific count
      } else if (commandMap.has(targetType)) {
        return commandMap.get(targetType);
        // doesn't have a target
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  // command processors

  GameController.prototype.getEntity = function getEntity(target) {
    if (target === undefined) {
      target = 'Player';
    }
    var entity = this.levelEntity.entityMap.get(target);
    if (entity === undefined) {
      console.log("Debug GetEntity: there is no entity : " + target + "\n");
    }
    return entity;
  };

  GameController.prototype.getEntities = function getEntities(type) {
    return this.levelEntity.getEntitiesOfType(type);
  };

  GameController.prototype.isType = function isType(target) {
    return typeof target === 'string' && target !== 'Player' && target !== "PlayerAgent";
  };

  GameController.prototype.printErrorMsg = function printErrorMsg(msg) {
    if (this.DEBUG) {
      this.game.debug.text(msg);
    }
  };

  /**
   * @param {any} commandQueueItem
   * @param {any} moveAwayFrom (entity identifier)
   *
   * @memberOf GameController
   */


  GameController.prototype.moveAway = function moveAway(commandQueueItem, moveAwayFrom) {
    var _this6 = this;

    var target = commandQueueItem.target;
    // apply to all entities
    if (target === undefined) {
      var entities = this.levelEntity.entityMap;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          value = _step2.value;

          var entity = value[1];
          var callbackCommand = new CallbackCommand(_this6, function () {}, function () {
            _this6.moveAway(callbackCommand, moveAwayFrom);
          }, entity.identifier);
          entity.addCommand(callbackCommand, commandQueueItem.repeat);
        };

        for (var _iterator2 = entities[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var value;

          _loop();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      commandQueueItem.succeeded();
    } else {
      var targetIsType = this.isType(target);
      var moveAwayFromIsType = this.isType(moveAwayFrom);
      if (target === moveAwayFrom) {
        this.printErrorMsg("Debug MoveAway: Can't move away entity from itself\n");
        commandQueueItem.succeeded();
        return;
      }
      // move away entity from entity
      if (!targetIsType && !moveAwayFromIsType) {
        var entity = this.getEntity(target);
        var moveAwayFromEntity = this.getEntity(moveAwayFrom);
        if (entity === moveAwayFromEntity) {
          commandQueueItem.succeeded();
          return;
        }
        entity.moveAway(commandQueueItem, moveAwayFromEntity);
      } else if (targetIsType && !moveAwayFromIsType) {
        // move away type from entity
        var targetEntities = this.getEntities(target);
        var _moveAwayFromEntity = this.getEntity(moveAwayFrom);
        if (_moveAwayFromEntity !== undefined) {
          var _loop2 = function _loop2() {
            // not move if it's same entity
            if (targetEntities[i].identifier === _moveAwayFromEntity.identifier) {
              return "continue";
            }
            var callbackCommand = new CallbackCommand(_this6, function () {}, function () {
              _this6.moveAway(callbackCommand, moveAwayFrom);
            }, targetEntities[i].identifier);
            targetEntities[i].addCommand(callbackCommand, commandQueueItem.repeat);
          };

          for (var i = 0; i < targetEntities.length; i++) {
            var _ret2 = _loop2();

            if (_ret2 === "continue") continue;
          }
        }
        commandQueueItem.succeeded();
      } else if (!targetIsType && moveAwayFromIsType) {
        // move away entity from type
        var _entity = this.getEntity(target);
        var moveAwayFromEntities = this.getEntities(moveAwayFrom);
        if (moveAwayFromEntities.length > 0) {
          var closestTarget = [Number.MAX_VALUE, -1];
          for (var _i = 0; _i < moveAwayFromEntities.length; _i++) {
            if (_entity.identifier === moveAwayFromEntities[_i].identifier) {
              continue;
            }
            var distance = _entity.getDistance(moveAwayFromEntities[_i]);
            if (distance < closestTarget[0]) {
              closestTarget = [distance, _i];
            }
          }
          if (closestTarget[1] !== -1) {
            _entity.moveAway(commandQueueItem, moveAwayFromEntities[closestTarget[1]]);
          }
        } else {
          commandQueueItem.succeeded();
        }
      } else {
        (function () {
          // move away type from type
          var entities = _this6.getEntities(target);
          var moveAwayFromEntities = _this6.getEntities(moveAwayFrom);
          if (moveAwayFromEntities.length > 0 && entities.length > 0) {
            var _loop3 = function _loop3(_i2) {
              var entity = entities[_i2];
              var closestTarget = [Number.MAX_VALUE, -1];
              for (var j = 0; j < moveAwayFromEntities.length; j++) {
                // not move if it's same entity
                if (moveAwayFromEntities[_i2].identifier === entity.identifier) {
                  continue;
                }
                var _distance = entity.getDistance(moveAwayFromEntities[j]);
                if (_distance < closestTarget[0]) {
                  closestTarget = [_distance, j];
                }
              }
              if (closestTarget !== -1) {
                (function () {
                  var callbackCommand = new CallbackCommand(_this6, function () {}, function () {
                    _this6.moveAway(callbackCommand, moveAwayFromEntities[closestTarget[1]].identifier);
                  }, entity.identifier);
                  entity.addCommand(callbackCommand, commandQueueItem.repeat);
                })();
              } else {
                commandQueueItem.succeeded();
              }
            };

            for (var _i2 = 0; _i2 < entities.length; _i2++) {
              _loop3(_i2);
            }
            commandQueueItem.succeeded();
          }
        })();
      }
    }
  };

  /**
   * @param {any} commandQueueItem
   * @param {any} moveTowardTo (entity identifier)
   *
   * @memberOf GameController
   */


  GameController.prototype.moveToward = function moveToward(commandQueueItem, moveTowardTo) {
    var _this7 = this;

    var target = commandQueueItem.target;
    // apply to all entities
    if (target === undefined) {
      var entities = this.levelEntity.entityMap;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop4 = function _loop4() {
          value = _step3.value;

          var entity = value[1];
          var callbackCommand = new CallbackCommand(_this7, function () {}, function () {
            _this7.moveToward(callbackCommand, moveTowardTo);
          }, entity.identifier);
          entity.addCommand(callbackCommand, commandQueueItem.repeat);
        };

        for (var _iterator3 = entities[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var value;

          _loop4();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      commandQueueItem.succeeded();
    } else {
      var targetIsType = this.isType(target);
      var moveTowardToIsType = this.isType(moveTowardTo);
      if (target === moveTowardTo) {
        commandQueueItem.succeeded();
        return;
      }
      // move toward entity to entity
      if (!targetIsType && !moveTowardToIsType) {
        var entity = this.getEntity(target);
        var moveTowardToEntity = this.getEntity(moveTowardTo);
        entity.moveToward(commandQueueItem, moveTowardToEntity);
      } else if (targetIsType && !moveTowardToIsType) {
        // move toward type to entity
        var targetEntities = this.getEntities(target);
        var _moveTowardToEntity = this.getEntity(moveTowardTo);
        if (_moveTowardToEntity !== undefined) {
          var _loop5 = function _loop5(i) {
            // not move if it's same entity
            if (targetEntities[i].identifier === _moveTowardToEntity.identifier) {
              return "continue";
            }
            var callbackCommand = new CallbackCommand(_this7, function () {}, function () {
              _this7.moveToward(callbackCommand, moveTowardTo);
            }, targetEntities[i].identifier);
            targetEntities[i].addCommand(callbackCommand, commandQueueItem.repeat);
          };

          for (var i = 0; i < targetEntities.length; i++) {
            var _ret7 = _loop5(i);

            if (_ret7 === "continue") continue;
          }
          commandQueueItem.succeeded();
        }
      } else if (!targetIsType && moveTowardToIsType) {
        // move toward entity to type
        var _entity2 = this.getEntity(target);
        var moveTowardToEntities = this.getEntities(moveTowardTo);
        if (moveTowardToEntities.length > 0) {
          var closestTarget = [Number.MAX_VALUE, -1];
          for (var _i3 = 0; _i3 < moveTowardToEntities.length; _i3++) {
            // not move if it's same entity
            if (moveTowardToEntities[_i3].identifier === _entity2.identifier) {
              continue;
            }
            var distance = _entity2.getDistance(moveTowardToEntities[_i3]);
            if (distance < closestTarget[0]) {
              closestTarget = [distance, _i3];
            }
          }
          // there is valid target
          if (closestTarget[1] !== -1) {
            _entity2.moveToward(commandQueueItem, moveTowardToEntities[closestTarget[1]]);
          } else {
            commandQueueItem.succeeded();
          }
        } else {
          commandQueueItem.succeeded();
        }
      } else {
        (function () {
          // move toward type to type
          var entities = _this7.getEntities(target);
          var moveTowardToEntities = _this7.getEntities(moveTowardTo);
          if (moveTowardToEntities.length > 0 && entities.length > 0) {
            var _loop6 = function _loop6(_i4) {
              var entity = entities[_i4];
              var closestTarget = [Number.MAX_VALUE, -1];
              for (var j = 0; j < moveTowardToEntities.length; j++) {
                // not move if it's same entity
                if (moveTowardToEntities[_i4].identifier === entity.identifier) {
                  continue;
                }
                var _distance2 = entity.getDistance(moveTowardToEntities[j]);
                if (_distance2 < closestTarget[0]) {
                  closestTarget = [_distance2, j];
                }
              }
              if (closestTarget[1] !== -1) {
                (function () {
                  var callbackCommand = new CallbackCommand(_this7, function () {}, function () {
                    _this7.moveToward(callbackCommand, moveTowardToEntities[closestTarget[1]].identifier);
                  }, entity.identifier);
                  entity.addCommand(callbackCommand, commandQueueItem.repeat);
                })();
              }
            };

            for (var _i4 = 0; _i4 < entities.length; _i4++) {
              _loop6(_i4);
            }
            commandQueueItem.succeeded();
          }
        })();
      }
    }
  };

  GameController.prototype.positionEquivalence = function positionEquivalence(lhs, rhs) {
    return lhs[0] === rhs[0] && lhs[1] === rhs[1];
  };

  /**
   * Run a command. If no `commandQueueItem.target` is provided, the command
   * will be applied to all targets.
   *
   * @param commandQueueItem
   * @param command
   * @param commandArgs
   */


  GameController.prototype.execute = function execute(commandQueueItem, command) {
    for (var _len = arguments.length, commandArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      commandArgs[_key - 2] = arguments[_key];
    }

    var _this8 = this;

    var target = commandQueueItem.target;
    if (!this.isType(target)) {
      if (target === undefined) {
        // Apply to all entities.
        var entities = this.levelEntity.entityMap;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          var _loop7 = function _loop7() {
            var value = _step4.value;

            var entity = value[1];
            var callbackCommand = new CallbackCommand(_this8, function () {}, function () {
              _this8.execute.apply(_this8, [callbackCommand, command].concat(commandArgs));
            }, entity.identifier);
            entity.addCommand(callbackCommand, commandQueueItem.repeat);
          };

          for (var _iterator4 = entities[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            _loop7();
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        commandQueueItem.succeeded();
      } else {
        // Apply to the given target.
        var entity = this.getEntity(target);
        entity[command].apply(entity, [commandQueueItem].concat(commandArgs));
      }
    } else {
      // Apply to all targets of the given type.
      var _entities = this.getEntities(target);

      var _loop8 = function _loop8(i) {
        var callbackCommand = new CallbackCommand(_this8, function () {}, function () {
          _this8.execute.apply(_this8, [callbackCommand, command].concat(commandArgs));
        }, _entities[i].identifier);
        _entities[i].addCommand(callbackCommand, commandQueueItem.repeat);
      };

      for (var i = 0; i < _entities.length; i++) {
        _loop8(i);
      }
      commandQueueItem.succeeded();
    }
  };

  GameController.prototype.moveForward = function moveForward(commandQueueItem) {
    this.execute(commandQueueItem, 'moveForward');
  };

  GameController.prototype.moveBackward = function moveBackward(commandQueueItem) {
    this.execute(commandQueueItem, 'moveBackward');
  };

  GameController.prototype.moveDirection = function moveDirection(commandQueueItem, direction) {
    var player = this.levelModel.player;
    var shouldRide = this.levelModel.shouldRide(direction);
    if (shouldRide) {
      player.handleGetOnRails(direction);
      commandQueueItem.succeeded();
    } else {
      this.execute(commandQueueItem, 'moveDirection', direction);
    }
  };

  GameController.prototype.turn = function turn(commandQueueItem, direction) {
    this.execute(commandQueueItem, 'turn', direction);
  };

  GameController.prototype.turnRandom = function turnRandom(commandQueueItem) {
    this.execute(commandQueueItem, 'turnRandom');
  };

  GameController.prototype.flashEntity = function flashEntity(commandQueueItem) {
    var _this9 = this;

    var target = commandQueueItem.target;
    if (!this.isType(target)) {
      // apply to all entities
      if (target === undefined) {
        var entities = this.levelEntity.entityMap;
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          var _loop9 = function _loop9() {
            var value = _step5.value;

            var entity = value[1];
            var callbackCommand = new CallbackCommand(_this9, function () {}, function () {
              _this9.flashEntity(callbackCommand);
            }, entity.identifier);
            entity.addCommand(callbackCommand, commandQueueItem.repeat);
          };

          for (var _iterator5 = entities[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            _loop9();
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        commandQueueItem.succeeded();
      } else {
        var entity = this.getEntity(target);
        var delay = this.levelView.flashSpriteToWhite(entity.sprite);
        this.addCommandRecord("flash", entity.type, commandQueueItem.repeat);
        this.delayBy(delay, function () {
          commandQueueItem.succeeded();
        });
      }
    } else {
      var _entities2 = this.getEntities(target);

      var _loop10 = function _loop10(i) {
        var callbackCommand = new CallbackCommand(_this9, function () {}, function () {
          _this9.flashEntity(callbackCommand);
        }, _entities2[i].identifier);
        _entities2[i].addCommand(callbackCommand, commandQueueItem.repeat);
      };

      for (var i = 0; i < _entities2.length; i++) {
        _loop10(i);
      }
      commandQueueItem.succeeded();
    }
  };

  GameController.prototype.explodeEntity = function explodeEntity(commandQueueItem) {
    var _this10 = this;

    var target = commandQueueItem.target;
    if (!this.isType(target)) {
      // apply to all entities
      if (target === undefined) {
        var entities = this.levelEntity.entityMap;
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          var _loop11 = function _loop11() {
            var value = _step6.value;

            var entity = value[1];
            var callbackCommand = new CallbackCommand(_this10, function () {}, function () {
              _this10.explodeEntity(callbackCommand);
            }, entity.identifier);
            entity.addCommand(callbackCommand, commandQueueItem.repeat);
          };

          for (var _iterator6 = entities[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            _loop11();
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        commandQueueItem.succeeded();
      } else {
        (function () {
          var targetEntity = _this10.getEntity(target);
          _this10.levelView.playExplosionCloudAnimation(targetEntity.position);
          _this10.addCommandRecord("explode", targetEntity.type, commandQueueItem.repeat);
          _this10.levelView.audioPlayer.play("explode");
          var entities = _this10.levelEntity.entityMap;
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = entities[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var value = _step7.value;

              var entity = value[1];
              for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {
                  if (i === 0 && j === 0) {
                    continue;
                  }
                  var position = [targetEntity.position[0] + i, targetEntity.position[1] + j];
                  _this10.destroyBlockWithoutPlayerInteraction(position);
                  if (entity.position[0] === targetEntity.position[0] + i && entity.position[1] === targetEntity.position[1] + j) {
                    entity.blowUp(commandQueueItem, targetEntity.position);
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          var callbackCommand = new CallbackCommand(_this10, function () {}, function () {
            _this10.destroyEntity(callbackCommand, targetEntity.identifier);
          }, targetEntity.identifier);
          targetEntity.queue.startPushHighPriorityCommands();
          targetEntity.addCommand(callbackCommand, commandQueueItem.repeat);
          targetEntity.queue.endPushHighPriorityCommands();
        })();
      }
      commandQueueItem.succeeded();
      this.updateFowPlane();
      this.updateShadingPlane();
    } else {
      var _entities3 = this.getEntities(target);

      var _loop12 = function _loop12(i) {
        var callbackCommand = new CallbackCommand(_this10, function () {}, function () {
          _this10.explodeEntity(callbackCommand);
        }, _entities3[i].identifier);
        _entities3[i].addCommand(callbackCommand, commandQueueItem.repeat);
      };

      for (var i = 0; i < _entities3.length; i++) {
        _loop12(i);
      }
      commandQueueItem.succeeded();
    }
  };

  GameController.prototype.wait = function wait(commandQueueItem, time) {
    var _this11 = this;

    var target = commandQueueItem.target;
    if (!this.isType(target)) {
      var entity = this.getEntity(target);
      this.addCommandRecord("wait", entity.type, commandQueueItem.repeat);
      setTimeout(function () {
        commandQueueItem.succeeded();
      }, time * 1000 / this.tweenTimeScale);
    } else {
      var entities = this.getEntities(target);

      var _loop13 = function _loop13(i) {
        var callbackCommand = new CallbackCommand(_this11, function () {}, function () {
          _this11.wait(callbackCommand, time);
        }, entities[i].identifier);
        entities[i].addCommand(callbackCommand, commandQueueItem.repeat);
      };

      for (var i = 0; i < entities.length; i++) {
        _loop13(i);
      }
      commandQueueItem.succeeded();
    }
  };

  GameController.prototype.spawnEntity = function spawnEntity(commandQueueItem, type, spawnDirection) {
    this.addCommandRecord("spawn", type, commandQueueItem.repeat);
    var spawnedEntity = this.levelEntity.spawnEntity(type, spawnDirection);
    if (spawnedEntity !== null) {
      this.events.forEach(function (e) {
        return e({ eventType: EventType.WhenSpawned, targetType: type, targetIdentifier: spawnedEntity.identifier });
      });
    }
    commandQueueItem.succeeded();
  };

  GameController.prototype.spawnEntityAt = function spawnEntityAt(commandQueueItem, type, x, y, facing) {
    var spawnedEntity = this.levelEntity.spawnEntityAt(type, x, y, facing);
    if (spawnedEntity !== null) {
      this.events.forEach(function (e) {
        return e({ eventType: EventType.WhenSpawned, targetType: type, targetIdentifier: spawnedEntity.identifier });
      });
    }
    commandQueueItem.succeeded();
  };

  GameController.prototype.destroyEntity = function destroyEntity(commandQueueItem, target) {
    var _this12 = this;

    if (!this.isType(target)) {
      // apply to all entities
      if (target === undefined) {
        var entities = this.levelEntity.entityMap;
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          var _loop14 = function _loop14() {
            var value = _step8.value;

            var entity = value[1];
            var callbackCommand = new CallbackCommand(_this12, function () {}, function () {
              _this12.destroyEntity(callbackCommand, entity.identifier);
            }, entity.identifier);
            entity.addCommand(callbackCommand, commandQueueItem.repeat);
          };

          for (var _iterator8 = entities[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            _loop14();
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        commandQueueItem.succeeded();
      } else {
        this.addCommandRecord("destroy", this.type, commandQueueItem.repeat);
        var _entity3 = this.getEntity(target);
        if (_entity3 !== undefined) {
          _entity3.healthPoint = 1;
          _entity3.takeDamage(commandQueueItem);
        } else {
          commandQueueItem.succeeded();
        }
      }
    } else {
      var _entities4 = this.getEntities(target);

      var _loop15 = function _loop15(i) {
        var entity = _entities4[i];
        var callbackCommand = new CallbackCommand(_this12, function () {}, function () {
          _this12.destroyEntity(callbackCommand, entity.identifier);
        }, entity.identifier);
        entity.addCommand(callbackCommand, commandQueueItem.repeat);
      };

      for (var i = 0; i < _entities4.length; i++) {
        _loop15(i);
      }
      commandQueueItem.succeeded();
    }
  };

  GameController.prototype.drop = function drop(commandQueueItem, itemType) {
    var _this13 = this;

    var target = commandQueueItem.target;
    if (!this.isType(target)) {
      // apply to all entities
      if (target === undefined) {
        var entities = this.levelEntity.entityMap;
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          var _loop16 = function _loop16() {
            var value = _step9.value;

            var entity = value[1];
            var callbackCommand = new CallbackCommand(_this13, function () {}, function () {
              _this13.drop(callbackCommand, itemType);
            }, entity.identifier);
            entity.addCommand(callbackCommand, commandQueueItem.repeat);
          };

          for (var _iterator9 = entities[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            _loop16();
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        commandQueueItem.succeeded();
      } else {
        var _entity4 = this.getEntity(target);
        _entity4.drop(commandQueueItem, itemType);
      }
    } else {
      var _entities5 = this.getEntities(target);

      var _loop17 = function _loop17(i) {
        var callbackCommand = new CallbackCommand(_this13, function () {}, function () {
          _this13.drop(callbackCommand, itemType);
        }, _entities5[i].identifier);
        _entities5[i].addCommand(callbackCommand, commandQueueItem.repeat);
      };

      for (var i = 0; i < _entities5.length; i++) {
        _loop17(i);
      }
      commandQueueItem.succeeded();
    }
  };

  GameController.prototype.attack = function attack(commandQueueItem) {
    var _this14 = this;

    var target = commandQueueItem.target;
    if (!this.isType(target)) {
      // apply to all entities
      if (target === undefined) {
        var entities = this.levelEntity.entityMap;
        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
          var _loop18 = function _loop18() {
            var value = _step10.value;

            var entity = value[1];
            var callbackCommand = new CallbackCommand(_this14, function () {}, function () {
              _this14.attack(callbackCommand);
            }, entity.identifier);
            entity.addCommand(callbackCommand, commandQueueItem.repeat);
          };

          for (var _iterator10 = entities[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
            _loop18();
          }
        } catch (err) {
          _didIteratorError10 = true;
          _iteratorError10 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion10 && _iterator10.return) {
              _iterator10.return();
            }
          } finally {
            if (_didIteratorError10) {
              throw _iteratorError10;
            }
          }
        }

        commandQueueItem.succeeded();
      } else {
        var _entity5 = this.getEntity(target);
        if (_entity5.identifier === 'Player') {
          this.codeOrgAPI.destroyBlock(function () {}, _entity5.identifier);
          commandQueueItem.succeeded();
        } else {
          _entity5.attack(commandQueueItem);
        }
      }
    } else {
      var _entities6 = this.getEntities(target);

      var _loop19 = function _loop19(i) {
        var callbackCommand = new CallbackCommand(_this14, function () {}, function () {
          _this14.attack(callbackCommand);
        }, _entities6[i].identifier);
        _entities6[i].addCommand(callbackCommand, commandQueueItem.repeat);
      };

      for (var i = 0; i < _entities6.length; i++) {
        _loop19(i);
      }
      commandQueueItem.succeeded();
    }
  };

  GameController.prototype.playSound = function playSound(commandQueueItem, sound) {
    this.addCommandRecord("playSound", undefined, commandQueueItem.repeat);
    this.levelView.audioPlayer.play(sound);
    commandQueueItem.succeeded();
  };

  GameController.prototype.use = function use(commandQueueItem) {
    var _this15 = this;

    var player = this.levelModel.player;
    var frontPosition = this.levelModel.getMoveForwardPosition(player);
    var frontEntity = this.levelEntity.getEntityAt(frontPosition);
    var frontBlock = this.levelModel.actionPlane.getBlockAt(frontPosition);

    var isFrontBlockDoor = frontBlock === undefined ? false : frontBlock.blockType === "door";
    if (frontEntity !== null && frontEntity !== this.agent) {
      // push use command to execute general use behavior of the entity before executing the event
      this.levelView.setSelectionIndicatorPosition(frontPosition[0], frontPosition[1]);
      this.levelView.onAnimationEnd(this.levelView.playPlayerAnimation("punch", player.position, player.facing, false), function () {

        frontEntity.queue.startPushHighPriorityCommands();
        var useCommand = new CallbackCommand(_this15, function () {}, function () {
          frontEntity.use(useCommand, player);
        }, frontEntity.identifier);
        var isFriendlyEntity = _this15.levelEntity.isFriendlyEntity(frontEntity.type);
        // push frienly entity 1 block
        if (!isFriendlyEntity) {
          (function () {
            var pushDirection = player.facing;
            var moveAwayCommand = new CallbackCommand(_this15, function () {}, function () {
              frontEntity.pushBack(moveAwayCommand, pushDirection, 150);
            }, frontEntity.identifier);
            frontEntity.addCommand(moveAwayCommand);
          })();
        }
        frontEntity.addCommand(useCommand);
        frontEntity.queue.endPushHighPriorityCommands();
        _this15.levelView.playPlayerAnimation("idle", player.position, player.facing, false);
        if (_this15.getIsDirectPlayerControl()) {
          _this15.delayPlayerMoveBy(0, 0, function () {
            commandQueueItem.succeeded();
          });
        } else {
          commandQueueItem.waitForOtherQueue = true;
        }
        setTimeout(function () {
          _this15.levelView.setSelectionIndicatorPosition(player.position[0], player.position[1]);
        }, 0);
      });
    } else if (isFrontBlockDoor) {
      this.levelView.setSelectionIndicatorPosition(frontPosition[0], frontPosition[1]);
      this.levelView.onAnimationEnd(this.levelView.playPlayerAnimation("punch", player.position, player.facing, false), function () {
        _this15.audioPlayer.play("doorOpen");
        // if it's not walable, then open otherwise, close
        var canOpen = !frontBlock.isWalkable;
        _this15.levelView.playDoorAnimation(frontPosition, canOpen, function () {
          frontBlock.isWalkable = !frontBlock.isWalkable;
          _this15.levelView.playIdleAnimation(player.position, player.facing, player.isOnBlock);
          _this15.levelView.setSelectionIndicatorPosition(player.position[0], player.position[1]);
          commandQueueItem.succeeded();
        });
      });
    } else if (frontBlock && frontBlock.isRail) {
      this.levelView.playTrack(frontPosition, player.facing, true, player, null);
      commandQueueItem.succeeded();
    } else {
      this.levelView.playPunchDestroyAirAnimation(player.position, player.facing, this.levelModel.getMoveForwardPosition(), function () {
        _this15.levelView.setSelectionIndicatorPosition(player.position[0], player.position[1]);
        _this15.levelView.playIdleAnimation(player.position, player.facing, player.isOnBlock);
        _this15.delayPlayerMoveBy(0, 0, function () {
          commandQueueItem.succeeded();
        });
      });
    }
  };

  GameController.prototype.destroyBlock = function destroyBlock(commandQueueItem) {
    var _this16 = this;

    var player = this.getEntity(commandQueueItem.target);
    // if there is a destroyable block in front of the player
    if (this.levelModel.canDestroyBlockForward(player)) {
      var block = this.levelModel.actionPlane.getBlockAt(this.levelModel.getMoveForwardPosition(player));

      if (block !== null) {
        var destroyPosition = this.levelModel.getMoveForwardPosition(player);
        var blockType = block.blockType;

        if (block.isDestroyable) {
          switch (blockType) {
            case "logAcacia":
            case "treeAcacia":
              blockType = "planksAcacia";
              break;
            case "logBirch":
            case "treeBirch":
              blockType = "planksBirch";
              break;
            case "logJungle":
            case "treeJungle":
              blockType = "planksJungle";
              break;
            case "logOak":
            case "treeOak":
              blockType = "planksOak";
              break;
            case "logSpruce":
            case "treeSpruce":
              blockType = "planksSpruce";
              break;
          }
          this.levelView.playDestroyBlockAnimation(player.position, player.facing, destroyPosition, blockType, player, function () {
            commandQueueItem.succeeded();
          });
        } else if (block.isUsable) {
          switch (blockType) {
            case "sheep":
              // TODO: What to do with already sheered sheep?
              this.levelView.playShearSheepAnimation(player.position, player.facing, destroyPosition, blockType, function () {
                commandQueueItem.succeeded();
              });

              break;
            default:
              commandQueueItem.succeeded();
          }
        } else {
          commandQueueItem.succeeded();
        }
      }
      // if there is a entity in front of the player
    } else {
      this.levelView.playPunchDestroyAirAnimation(player.position, player.facing, this.levelModel.getMoveForwardPosition(player), function () {
        _this16.levelView.setSelectionIndicatorPosition(player.position[0], player.position[1]);
        _this16.levelView.playIdleAnimation(player.position, player.facing, player.isOnBlock, player);
        _this16.delayPlayerMoveBy(0, 0, function () {
          commandQueueItem.succeeded();
        });
      }, player);
    }
  };

  GameController.prototype.destroyBlockWithoutPlayerInteraction = function destroyBlockWithoutPlayerInteraction(position) {
    if (!this.levelModel.inBounds(position)) {
      return;
    }
    var block = this.levelModel.actionPlane.getBlockAt(position);

    if (block !== null && block !== undefined) {
      var destroyPosition = position;
      var blockType = block.blockType;

      if (block.isDestroyable) {
        switch (blockType) {
          case "logAcacia":
          case "treeAcacia":
            blockType = "planksAcacia";
            break;
          case "logBirch":
          case "treeBirch":
            blockType = "planksBirch";
            break;
          case "logJungle":
          case "treeJungle":
            blockType = "planksJungle";
            break;
          case "logOak":
          case "treeOak":
            blockType = "planksOak";
            break;
          case "logSpruce":
          case "treeSpruce":
          case "logSpruceSnowy":
          case "treeSpruceSnowy":
            blockType = "planksSpruce";
            break;
        }
        this.levelView.destroyBlockWithoutPlayerInteraction(destroyPosition);
        this.levelView.playExplosionAnimation(this.levelModel.player.position, this.levelModel.player.facing, position, blockType, function () {}, false);
        this.levelView.createMiniBlock(destroyPosition[0], destroyPosition[1], blockType);
        this.updateFowPlane();
        this.updateShadingPlane();
      } else if (block.isUsable) {
        switch (blockType) {
          case "sheep":
            // TODO: What to do with already sheered sheep?
            this.levelView.playShearAnimation(this.levelModel.player.position, this.levelModel.player.facing, position, blockType, function () {});
            break;
        }
      }
    }

    // clear the block in level model (block info in 2d grid)
    this.levelModel.destroyBlock(position);
  };

  GameController.prototype.checkTntAnimation = function checkTntAnimation() {
    return this.specialLevelType === 'freeplay';
  };

  GameController.prototype.checkMinecartLevelEndAnimation = function checkMinecartLevelEndAnimation() {
    return this.specialLevelType === 'minecart';
  };

  GameController.prototype.checkHouseBuiltEndAnimation = function checkHouseBuiltEndAnimation() {
    return this.specialLevelType === 'houseBuild';
  };

  GameController.prototype.checkAgentSpawn = function checkAgentSpawn() {
    return this.specialLevelType === 'agentSpawn';
  };

  GameController.prototype.placeBlock = function placeBlock(commandQueueItem, blockType) {
    var _this17 = this;

    var player = this.getEntity(commandQueueItem.target);
    var position = player.position;
    var blockAtPosition = this.levelModel.actionPlane.getBlockAt(position);
    var blockTypeAtPosition = blockAtPosition.blockType;

    if (this.levelModel.canPlaceBlock(player, blockAtPosition)) {
      if (blockTypeAtPosition !== "") {
        this.levelModel.destroyBlock(position);
      }

      if (blockType !== "cropWheat" || this.levelModel.groundPlane.getBlockAt(player.position).blockType === "farmlandWet") {
        this.levelModel.player.updateHidingBlock(player.position);
        if (this.checkMinecartLevelEndAnimation() && blockType === "rail") {
          // Special 'minecart' level places a mix of regular and powered tracks, depending on location.
          if (player.position[1] < 7) {
            blockType = "railsUnpoweredVertical";
          } else {
            blockType = "rails";
          }
        }
        this.levelView.playPlaceBlockAnimation(player.position, player.facing, blockType, blockTypeAtPosition, player, function () {
          _this17.levelModel.placeBlock(blockType, player);
          _this17.updateFowPlane();
          _this17.updateShadingPlane();
          _this17.delayBy(200, function () {
            _this17.levelView.playIdleAnimation(player.position, player.facing, false, player);
          });
          _this17.delayPlayerMoveBy(200, 400, function () {
            commandQueueItem.succeeded();
          });
        });
      } else {
        (function () {
          var signalBinding = _this17.levelView.playPlayerAnimation("jumpUp", player.position, player.facing, false, player).onLoop.add(function () {
            _this17.levelView.playIdleAnimation(player.position, player.facing, false, player);
            signalBinding.detach();
            _this17.delayBy(800, function () {
              return commandQueueItem.succeeded();
            });
          }, _this17);
        })();
      }
    } else {
      commandQueueItem.succeeded();
    }
  };

  GameController.prototype.setPlayerActionDelayByQueueLength = function setPlayerActionDelayByQueueLength() {
    if (!this.levelModel.usePlayer) {
      return;
    }

    var START_SPEED_UP = 10;
    var END_SPEED_UP = 20;

    var queueLength = this.levelModel.player.queue.getLength();
    var speedUpRangeMax = END_SPEED_UP - START_SPEED_UP;
    var speedUpAmount = Math.min(Math.max(queueLength - START_SPEED_UP, 0), speedUpRangeMax);

    this.playerDelayFactor = 1 - speedUpAmount / speedUpRangeMax;
  };

  GameController.prototype.delayBy = function delayBy(ms, completionHandler) {
    var timer = this.game.time.create(true);
    timer.add(this.originalMsToScaled(ms), completionHandler, this);
    timer.start();
    this.resettableTimers.push(timer);
  };

  GameController.prototype.delayPlayerMoveBy = function delayPlayerMoveBy(minMs, maxMs, completionHandler) {
    this.delayBy(Math.max(minMs, maxMs * this.playerDelayFactor), completionHandler);
  };

  GameController.prototype.originalMsToScaled = function originalMsToScaled(ms) {
    var realMs = ms / this.assumedSlowMotion;
    return realMs * this.game.time.slowMotion;
  };

  GameController.prototype.originalFpsToScaled = function originalFpsToScaled(fps) {
    var realFps = fps * this.assumedSlowMotion;
    return realFps / this.game.time.slowMotion;
  };

  GameController.prototype.placeBlockForward = function placeBlockForward(commandQueueItem, blockType) {
    this.placeBlockDirection(commandQueueItem, blockType, 0);
  };

  GameController.prototype.placeBlockDirection = function placeBlockDirection(commandQueueItem, blockType, direction) {
    var _this18 = this;

    var player = this.getEntity(commandQueueItem.target);
    var position = void 0,
        placementPlane = void 0,
        soundEffect = function soundEffect() {};

    if (!this.levelModel.canPlaceBlockDirection(blockType, player, direction)) {
      this.levelView.playPunchAirAnimation(player.position, player.facing, player.position, function () {
        _this18.levelView.playIdleAnimation(player.position, player.facing, false, player);
        commandQueueItem.succeeded();
      }, player);
      return;
    }

    position = this.levelModel.getMoveDirectionPosition(player, direction);
    placementPlane = this.levelModel.getPlaneToPlaceOn(position, player, blockType);
    if (this.levelModel.isBlockOfTypeOnPlane(position, "lava", placementPlane)) {
      soundEffect = function soundEffect() {
        return _this18.levelView.audioPlayer.play("fizz");
      };
    }

    this.levelView.playPlaceBlockInFrontAnimation(player, player.position, player.facing, position, function () {
      _this18.levelModel.placeBlockDirection(blockType, placementPlane, player, direction);
      _this18.levelView.refreshGroundGroup();

      _this18.updateFowPlane();
      _this18.updateShadingPlane();
      soundEffect();

      _this18.delayBy(200, function () {
        _this18.levelView.playIdleAnimation(player.position, player.facing, false, player);
      });
      _this18.delayPlayerMoveBy(200, 400, function () {
        commandQueueItem.succeeded();
      });
    });
  };

  GameController.prototype.checkSolution = function checkSolution() {
    var _this19 = this;

    if (!this.attemptRunning || this.resultReported) {
      return;
    }
    // check the final state to see if its solved
    if (this.levelModel.isSolved()) {
      var houseBottomRight;
      var inFrontOfDoor;
      var bedPosition;
      var doorPosition;
      var tnt;
      var wasOnBlock;

      (function () {
        var player = _this19.levelModel.player;
        if (_this19.checkHouseBuiltEndAnimation()) {
          _this19.resultReported = true;
          houseBottomRight = _this19.levelModel.getHouseBottomRight();
          inFrontOfDoor = new Position(houseBottomRight.x - 1, houseBottomRight.y + 2);
          bedPosition = new Position(houseBottomRight.x, houseBottomRight.y);
          doorPosition = new Position(houseBottomRight.x - 1, houseBottomRight.y + 1);

          _this19.levelModel.moveTo(inFrontOfDoor);
          _this19.levelView.playSuccessHouseBuiltAnimation(player.position, player.facing, player.isOnBlock, _this19.levelModel.houseGroundToFloorBlocks(houseBottomRight), [bedPosition, doorPosition], function () {
            _this19.endLevel(true);
          }, function () {
            _this19.levelModel.destroyBlock(bedPosition);
            _this19.levelModel.destroyBlock(doorPosition);
            _this19.updateFowPlane();
            _this19.updateShadingPlane();
          });
        } else if (_this19.checkMinecartLevelEndAnimation()) {
          _this19.resultReported = true;
          _this19.levelView.playMinecartAnimation(player.isOnBlock, function () {
            _this19.handleEndState(true);
          });
        } else if (_this19.checkAgentSpawn()) {
          _this19.resultReported = true;

          var levelEndAnimation = _this19.levelView.playLevelEndAnimation(player.position, player.facing, player.isOnBlock);

          levelEndAnimation.onComplete.add(function () {
            _this19.levelModel.spawnAgent(null, new Position(3, 4), 2); // This will spawn the Agent at [3, 4], facing South.
            _this19.levelView.agent = _this19.agent;
            _this19.levelView.resetEntity(_this19.agent);

            _this19.updateFowPlane();
            _this19.updateShadingPlane();
            _this19.delayBy(200, function () {
              _this19.endLevel(true);
            });
          });
        } else if (_this19.checkTntAnimation()) {
          _this19.resultReported = true;
          _this19.levelView.scaleShowWholeWorld(function () {});
          tnt = _this19.levelModel.getTnt();
          wasOnBlock = player.isOnBlock;

          _this19.levelView.playDestroyTntAnimation(player.position, player.facing, player.isOnBlock, _this19.levelModel.getTnt(), _this19.levelModel.shadingPlane, function () {
            for (var i in tnt) {
              if (tnt[i].x === _this19.levelModel.player.position.x && tnt[i].y === _this19.levelModel.player.position.y) {
                _this19.levelModel.player.isOnBlock = false;
              }
              var surroundingBlocks = _this19.levelModel.getAllBorderingPositionNotOfType(tnt[i], "tnt");
              _this19.levelModel.destroyBlock(tnt[i]);
              for (var b = 1; b < surroundingBlocks.length; ++b) {
                if (surroundingBlocks[b][0]) {
                  _this19.destroyBlockWithoutPlayerInteraction(surroundingBlocks[b][1]);
                }
              }
            }
            if (!player.isOnBlock && wasOnBlock) {
              _this19.levelView.playPlayerJumpDownVerticalAnimation(player.facing, player.position);
            }
            _this19.updateFowPlane();
            _this19.updateShadingPlane();
            _this19.delayBy(200, function () {
              _this19.levelView.playSuccessAnimation(player.position, player.facing, player.isOnBlock, function () {
                _this19.endLevel(true);
              });
            });
          });
        } else {
          _this19.endLevel(true);
        }
      })();
    } else if (this.levelModel.isFailed() || !this.getIsDirectPlayerControl()) {
      // For "Events" levels, check the final state to see if it's failed.
      // Procedural levels only call `checkSolution` after all code has run, so
      // fail if we didn't pass the success condition.
      this.endLevel(false);
    }
  };

  GameController.prototype.endLevel = function endLevel(result) {
    var _this20 = this;

    if (!this.levelModel.usePlayer) {
      if (result) {
        this.levelView.audioPlayer.play("success");
      } else {
        this.levelView.audioPlayer.play("failure");
      }
      this.resultReported = true;
      this.handleEndState(result);
      return;
    }
    if (result) {
      (function () {
        var player = _this20.levelModel.player;
        var callbackCommand = new CallbackCommand(_this20, function () {}, function () {
          _this20.levelView.playSuccessAnimation(player.position, player.facing, player.isOnBlock, function () {
            _this20.handleEndState(true);
          });
        }, player.identifier);
        player.queue.startPushHighPriorityCommands();
        player.addCommand(callbackCommand, _this20.isRepeat);
        player.queue.endPushHighPriorityCommands();
      })();
    } else {
      (function () {
        var player = _this20.levelModel.player;
        var callbackCommand = new CallbackCommand(_this20, function () {}, function () {
          _this20.destroyEntity(callbackCommand, player.identifier);
        }, player.identifier);
        player.queue.startPushHighPriorityCommands();
        player.addCommand(callbackCommand, _this20.isRepeat);
        player.queue.endPushHighPriorityCommands();
      })();
    }
  };

  GameController.prototype.addScore = function addScore(commandQueueItem, score) {
    this.addCommandRecord("addScore", undefined, commandQueueItem.repeat);
    if (this.useScore) {
      this.score += score;
      this.updateScore();
    }
    commandQueueItem.succeeded();
  };

  GameController.prototype.updateScore = function updateScore() {
    if (this.onScoreUpdate) {
      this.onScoreUpdate(this.score);
    }
  };

  GameController.prototype.isPathAhead = function isPathAhead(blockType) {
    return this.levelModel.isForwardBlockOfType(blockType);
  };

  GameController.prototype.addCommand = function addCommand(commandQueueItem) {
    // there is a target, push command to the specific target
    if (commandQueueItem.target !== undefined) {
      var target = this.getEntity(commandQueueItem.target);
      target.addCommand(commandQueueItem, this.isRepeat);
    } else {
      this.queue.addCommand(commandQueueItem, this.isRepeat);
      this.queue.begin();
    }
  };

  GameController.prototype.addGlobalCommand = function addGlobalCommand(commandQueueItem) {
    var entity = this.levelEntity.entityMap.get(commandQueueItem.target);
    if (entity !== undefined) {
      entity.addCommand(commandQueueItem, this.isRepeat);
    } else {
      this.queue.addCommand(commandQueueItem, this.isRepeat);
      this.queue.begin();
    }
  };

  GameController.prototype.startDay = function startDay(commandQueueItem) {
    var _this21 = this;

    if (this.levelModel.isDaytime) {
      if (commandQueueItem !== undefined && commandQueueItem !== null) {
        commandQueueItem.succeeded();
      }
      if (this.DEBUG) {
        this.game.debug.text("Impossible to start day since it's already day time\n");
      }
    } else {
      if (this.onDayCallback !== undefined) {
        this.onDayCallback();
      }
      this.levelModel.isDaytime = true;
      this.levelModel.clearFow();
      this.levelView.updateFowGroup(this.levelModel.fowPlane);
      this.events.forEach(function (e) {
        return e({ eventType: EventType.WhenDayGlobal });
      });
      var entities = this.levelEntity.entityMap;
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        var _loop20 = function _loop20() {
          var value = _step11.value;

          var entity = value[1];
          _this21.events.forEach(function (e) {
            return e({ eventType: EventType.WhenDay, targetIdentifier: entity.identifier, targetType: entity.type });
          });
        };

        for (var _iterator11 = entities[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          _loop20();
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11.return) {
            _iterator11.return();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      var zombieList = this.levelEntity.getEntitiesOfType('zombie');
      for (var i = 0; i < zombieList.length; i++) {
        zombieList[i].setBurn(true);
      }
      if (commandQueueItem !== undefined && commandQueueItem !== null) {
        commandQueueItem.succeeded();
      }
    }
  };

  GameController.prototype.startNight = function startNight(commandQueueItem) {
    var _this22 = this;

    if (!this.levelModel.isDaytime) {
      if (commandQueueItem !== undefined && commandQueueItem !== null) {
        commandQueueItem.succeeded();
      }
      if (this.DEBUG) {
        this.game.debug.text("Impossible to start night since it's already night time\n");
      }
    } else {
      if (this.onNightCallback !== undefined) {
        this.onNightCallback();
      }
      this.levelModel.isDaytime = false;
      this.levelModel.computeFowPlane();
      this.levelView.updateFowGroup(this.levelModel.fowPlane);
      this.events.forEach(function (e) {
        return e({ eventType: EventType.WhenNightGlobal });
      });
      var entities = this.levelEntity.entityMap;
      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        var _loop21 = function _loop21() {
          var value = _step12.value;

          var entity = value[1];
          _this22.events.forEach(function (e) {
            return e({ eventType: EventType.WhenNight, targetIdentifier: entity.identifier, targetType: entity.type });
          });
        };

        for (var _iterator12 = entities[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          _loop21();
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12.return) {
            _iterator12.return();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }

      var zombieList = this.levelEntity.getEntitiesOfType('zombie');
      for (var i = 0; i < zombieList.length; i++) {
        zombieList[i].setBurn(false);
      }
      if (commandQueueItem !== undefined && commandQueueItem !== null) {
        commandQueueItem.succeeded();
      }
    }
  };

  GameController.prototype.initiateDayNightCycle = function initiateDayNightCycle(firstDelay, delayInSecond, startTime) {
    var _this23 = this;

    if (startTime === "day" || startTime === "Day") {
      this.timeouts.push(setTimeout(function () {
        _this23.startDay(null);
        _this23.setDayNightCycle(delayInSecond, "night");
      }, firstDelay * 1000));
    } else if (startTime === "night" || startTime === "Night") {
      this.timeouts.push(setTimeout(function () {
        _this23.startNight(null);
        _this23.setDayNightCycle(delayInSecond, "day");
      }, firstDelay * 1000));
    }
  };

  GameController.prototype.setDayNightCycle = function setDayNightCycle(delayInSecond, startTime) {
    var _this24 = this;

    if (!this.dayNightCycle) {
      return;
    }
    if (startTime === "day" || startTime === "Day") {
      this.timeouts.push(setTimeout(function () {
        if (!_this24.dayNightCycle) {
          return;
        }
        _this24.startDay(null);
        _this24.setDayNightCycle(delayInSecond, "night");
      }, delayInSecond * 1000));
    } else if (startTime === "night" || startTime === "Night") {
      this.timeouts.push(setTimeout(function () {
        if (!_this24.dayNightCycle) {
          return;
        }
        _this24.startNight(null);
        _this24.setDayNightCycle(delayInSecond, "day");
      }, delayInSecond * 1000));
    }
  };

  GameController.prototype.arrowDown = function arrowDown(direction) {
    if (!this.levelModel.usePlayer) {
      return;
    }
    this.player.movementState = direction;
    this.player.updateMovement();
  };

  GameController.prototype.arrowUp = function arrowUp(direction) {
    if (!this.levelModel.usePlayer) {
      return;
    }
    if (this.player.movementState === direction) {
      this.player.movementState = -1;
    }
    this.player.updateMovement();
  };

  GameController.prototype.clickDown = function clickDown() {
    if (!this.levelModel.usePlayer) {
      return;
    }
    this.player.movementState = -2;
    this.player.updateMovement();
  };

  GameController.prototype.clickUp = function clickUp() {
    if (!this.levelModel.usePlayer) {
      return;
    }
    if (this.player.movementState === -2) {
      this.player.movementState = -1;
    }
    this.player.updateMovement();
  };

  GameController.prototype.updateFowPlane = function updateFowPlane() {
    this.levelModel.computeFowPlane();
    this.levelView.updateFowGroup(this.levelModel.fowPlane);
  };

  GameController.prototype.updateShadingPlane = function updateShadingPlane() {
    this.levelModel.computeShadingPlane();
    this.levelView.updateShadingGroup(this.levelModel.shadingPlane);
  };

  return GameController;
}();

window.GameController = GameController;

module.exports = GameController;

/***/ }),

/***/ 2129:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),

/***/ 2131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _hammerjs = __webpack_require__(2129);

var _hammerjs2 = _interopRequireDefault(_hammerjs);

var _trackEvent = __webpack_require__(601);

var _trackEvent2 = _interopRequireDefault(_trackEvent);

var _utils = __webpack_require__(71);

var _StudioApp = __webpack_require__(597);

var _locale = __webpack_require__(1955);

var _locale2 = _interopRequireDefault(_locale);

var _CustomMarshalingInterpreter = __webpack_require__(850);

var _CustomMarshalingInterpreter2 = _interopRequireDefault(_CustomMarshalingInterpreter);

var _GameController = __webpack_require__(1952);

var _GameController2 = _interopRequireDefault(_GameController);

var _FacingDirection = __webpack_require__(799);

var _FacingDirection2 = _interopRequireDefault(_FacingDirection);

var _EventType = __webpack_require__(1159);

var _EventType2 = _interopRequireDefault(_EventType);

var _Utils = __webpack_require__(1272);

var _dom = __webpack_require__(594);

var _dom2 = _interopRequireDefault(_dom);

var _MusicController = __webpack_require__(1954);

var _MusicController2 = _interopRequireDefault(_MusicController);

var _reactRedux = __webpack_require__(53);

var _AppView = __webpack_require__(944);

var _AppView2 = _interopRequireDefault(_AppView);

var _CraftVisualizationColumn = __webpack_require__(2740);

var _CraftVisualizationColumn2 = _interopRequireDefault(_CraftVisualizationColumn);

var _redux = __webpack_require__(237);

var _Sounds = __webpack_require__(764);

var _Sounds2 = _interopRequireDefault(_Sounds);

var _constants = __webpack_require__(216);

var _thumbnail = __webpack_require__(1158);

var _progressRedux = __webpack_require__(498);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MEDIA_URL = '/blockly/media/craft/';

var ArrowIds = {
  LEFT: 'leftButton',
  UP: 'upButton',
  RIGHT: 'rightButton',
  DOWN: 'downButton'
};

var interfaceImages = {
  DEFAULT: [MEDIA_URL + 'Sliced_Parts/MC_Loading_Spinner.gif', MEDIA_URL + 'Sliced_Parts/Frame_Large_Plus_Logo.png', MEDIA_URL + 'Sliced_Parts/Pop_Up_Slice.png', MEDIA_URL + 'Sliced_Parts/X_Button.png', MEDIA_URL + 'Sliced_Parts/Button_Grey_Slice.png', MEDIA_URL + 'Sliced_Parts/Run_Button_Up_Slice.png', MEDIA_URL + 'Sliced_Parts/MC_Run_Arrow_Icon_Smaller.png', MEDIA_URL + 'Sliced_Parts/Run_Button_Down_Slice.png', MEDIA_URL + 'Sliced_Parts/Reset_Button_Up_Slice.png', MEDIA_URL + 'Sliced_Parts/MC_Reset_Arrow_Icon.png', MEDIA_URL + 'Sliced_Parts/Reset_Button_Down_Slice.png', MEDIA_URL + 'Sliced_Parts/Callout_Tail.png'],
  1: [MEDIA_URL + 'Sliced_Parts/Steve_Character_Select.png', MEDIA_URL + 'Sliced_Parts/Alex_Character_Select.png', MEDIA_URL + 'Sliced_Parts/Agent_Fail.png', MEDIA_URL + 'Sliced_Parts/Agent_Neutral.png', MEDIA_URL + 'Sliced_Parts/Agent_Success.png']
};

var MUSIC_METADATA = [{ volume: 1, hasOgg: true, name: 'vignette1' }, { volume: 1, hasOgg: true, name: 'vignette2-quiet' }, { volume: 1, hasOgg: true, name: 'vignette3' }, { volume: 1, hasOgg: true, name: 'vignette4-intro' }, { volume: 1, hasOgg: true, name: 'vignette5-shortpiano' }, { volume: 1, hasOgg: true, name: 'vignette7-funky-chirps-short' }, { volume: 1, hasOgg: true, name: 'vignette8-free-play' }, { volume: 1, hasOgg: true, name: 'nether2' }];

var CHARACTER_STEVE = 'Steve';
var CHARACTER_ALEX = 'Alex';
var DEFAULT_CHARACTER = CHARACTER_STEVE;

var directionToFacing = {
  upButton: _FacingDirection2.default.North,
  downButton: _FacingDirection2.default.South,
  leftButton: _FacingDirection2.default.West,
  rightButton: _FacingDirection2.default.East
};

var Craft = function () {
  function Craft() {
    _classCallCheck(this, Craft);
  }

  /**
   * Initialize Blockly and the Craft app. Called on page load.
   */
  Craft.init = function init(config) {
    if (config.level.puzzle_number === 1 && config.level.stage_total === 1) {
      // Not viewing level within a script, bump puzzle # to unused one so
      // asset loading system and levelbuilder overrides don't think this is
      // level 1 or any other special level.
      config.level.puzzle_number = 999;
    }

    if (config.level.isTestLevel) {
      config.level.customSlowMotion = 0.1;
    }

    config.level.disableFinalStageMessage = true;
    config.showInstructionsInTopPane = true;

    // Return the version of Internet Explorer (8+) or undefined if not IE.
    var getIEVersion = function getIEVersion() {
      return document.documentMode;
    };

    var ieVersionNumber = getIEVersion();
    if (ieVersionNumber) {
      (0, _jquery2.default)('body').addClass('ieVersion' + ieVersionNumber);
    }

    if (config.level.isAgentLevel) {
      (0, _jquery2.default)('body').addClass('minecraft-agent');
    }

    var bodyElement = document.body;
    bodyElement.className = bodyElement.className + ' minecraft';

    // Always add a hook for after the video but before the level proper begins.
    // Use this to start music, and sometimes to show an extra dialog.
    config.level.afterVideoBeforeInstructionsFn = function (showInstructions) {
      Craft.beginBackgroundMusic();
      if (config.level.showPopupOnLoad) {
        if (config.level.showPopupOnLoad === 'playerSelection') {
          Craft.showPlayerSelectionPopup(function (selectedPlayer) {
            (0, _trackEvent2.default)('Minecraft', 'ChoseCharacter', selectedPlayer);
            Craft.clearPlayerState();
            (0, _utils.trySetLocalStorage)('craftSelectedPlayer', selectedPlayer);
            Craft.initializeAppLevel(config.level);
            showInstructions();
          });
        }
      } else {
        showInstructions();
      }
    };

    Craft.initialConfig = config;

    // replace studioApp() methods with our own
    (0, _StudioApp.singleton)().reset = Craft.reset.bind(Craft);
    (0, _StudioApp.singleton)().runButtonClick = Craft.runButtonClick.bind(Craft);

    // set initial configurations
    (0, _StudioApp.singleton)().setCheckForEmptyBlocks(true);

    Craft.level = config.level;
    Craft.skin = config.skin;

    var levelTracks = [];
    if (Craft.level.songs && MUSIC_METADATA) {
      levelTracks = MUSIC_METADATA.filter(function (trackMetadata) {
        return Craft.level.songs.indexOf(trackMetadata.name) !== -1;
      });
    }

    Craft.musicController = new _MusicController2.default(_Sounds2.default.getSingleton(), function (filename) {
      return config.skin.assetUrl('music/' + filename);
    }, levelTracks, levelTracks.length > 1 ? 7500 : null);

    config.skin.staticAvatar = MEDIA_URL + 'Sliced_Parts/Agent_Neutral.png';
    config.skin.smallStaticAvatar = MEDIA_URL + 'Sliced_Parts/Agent_Neutral.png';
    config.skin.failureAvatar = MEDIA_URL + 'Sliced_Parts/Agent_Fail.png';
    config.skin.winAvatar = MEDIA_URL + 'Sliced_Parts/Agent_Success.png';

    var onMount = function onMount() {
      (0, _StudioApp.singleton)().init(Object.assign({}, config, {
        forceInsertTopBlock: 'when_run',
        appStrings: {
          generatedCodeDescription: _locale2.default.generatedCodeDescription()
        },
        loadAudio: function loadAudio() {},
        afterInject: function afterInject() {
          var _hammerToButton;

          if (config.level.showMovementBanner) {
            (0, _StudioApp.singleton)().displayWorkspaceAlert('warning', _react2.default.createElement(
              'div',
              null,
              _locale2.default.useArrowKeys()
            ));
          }

          // NaN if not set
          var slowMotionURLParam = parseFloat((location.search.split('customSlowMotion=')[1] || '').split('&')[0]);
          Craft.gameController = new _GameController2.default({
            Phaser: window.Phaser,
            containerId: 'phaser-game',
            assetRoot: Craft.skin.assetUrl(''),
            audioPlayer: {
              register: (0, _StudioApp.singleton)().registerAudio.bind((0, _StudioApp.singleton)()),
              play: (0, _StudioApp.singleton)().playAudio.bind((0, _StudioApp.singleton)())
            },
            debug: false,
            customSlowMotion: config.level.isTestLevel ? 0.5 : slowMotionURLParam,
            /**
            * First asset packs to load while video playing, etc.
            * Won't matter for levels without delayed level initialization
            * (due to e.g. character / house select popups).
            */
            earlyLoadAssetPacks: Craft.earlyLoadAssetsForLevel(config.level.puzzle_number),
            afterAssetsLoaded: function afterAssetsLoaded() {
              // Listen for hint events that draw a path in the game.
              window.addEventListener('displayHintPath', function (e) {
                Craft.gameController.levelView.drawHintPath(e.detail);
              });

              window.addEventListener('craftCollectibleCollected', function (e) {
                if (e.blockType === "diamondMiniblock") {
                  Craft.setSessionDiamondCollected();
                }
              });

              // preload music after essential game asset downloads completely finished
              Craft.musicController.preload();
            },
            earlyLoadNiceToHaveAssetPacks: Craft.niceToHaveAssetsForLevel(config.level.puzzle_number)
          });

          if (!config.level.showPopupOnLoad) {
            Craft.initializeAppLevel(config.level);
          }

          if ((0, _StudioApp.singleton)().hideSource) {
            // Set visualizationColumn width in share mode so it can be centered
            var visualizationColumn = document.getElementById('visualizationColumn');
            visualizationColumn.style.width = this.nativeVizWidth + 'px';
          }

          for (var btn in ArrowIds) {
            _dom2.default.addMouseUpTouchEvent(document.getElementById(ArrowIds[btn]), function (btn) {
              return function () {
                Craft.onArrowButtonUp(ArrowIds[btn]);
              };
            }(btn));
            _dom2.default.addMouseDownTouchEvent(document.getElementById(ArrowIds[btn]), function (btn) {
              return function (e) {
                Craft.onArrowButtonDown(e, ArrowIds[btn]);
              };
            }(btn));
          }

          _dom2.default.addMouseUpTouchEvent(document, Craft.onDocumentMouseUp, false);
          (0, _jquery2.default)('#soft-buttons').removeClass('soft-buttons-none').addClass('soft-buttons-' + 4);
          (0, _jquery2.default)('.arrow').prop("disabled", false);

          var resetButton = document.getElementById('resetButton');
          _dom2.default.addClickTouchEvent(resetButton, Craft.resetButtonClick);

          var phaserGame = document.getElementById('phaser-game');
          var hammerToButton = (_hammerToButton = {}, _defineProperty(_hammerToButton, _hammerjs2.default.DIRECTION_LEFT, 'leftButton'), _defineProperty(_hammerToButton, _hammerjs2.default.DIRECTION_RIGHT, 'rightButton'), _defineProperty(_hammerToButton, _hammerjs2.default.DIRECTION_UP, 'upButton'), _defineProperty(_hammerToButton, _hammerjs2.default.DIRECTION_DOWN, 'downButton'), _hammerToButton);

          var onDrag = function onDrag(e) {
            if (hammerToButton[e.direction]) {
              Craft.gameController.codeOrgAPI.arrowDown(directionToFacing[hammerToButton[e.direction]]);
            }
            e.preventDefault();
          };

          var onDragEnd = function onDragEnd(e) {
            if (hammerToButton[e.direction]) {
              Craft.gameController.codeOrgAPI.arrowUp(directionToFacing[hammerToButton[e.direction]]);
            }
            e.preventDefault();
          };

          var mc = new _hammerjs2.default.Manager(phaserGame);
          mc.add(new _hammerjs2.default.Pan({ direction: _hammerjs2.default.DIRECTION_ALL }));
          mc.add(new _hammerjs2.default.Press({ time: 150 }));
          mc.add(new _hammerjs2.default.Tap());
          mc.on('pan', onDrag);
          mc.on('panend pancancel', onDragEnd);
          mc.on('press', function () {
            return Craft.gameController.codeOrgAPI.clickDown(function () {});
          });
          mc.on('tap', function () {
            Craft.gameController.codeOrgAPI.clickDown(function () {});
            Craft.gameController.codeOrgAPI.clickUp(function () {});
          });
          mc.on('pressup', function () {
            return Craft.gameController.codeOrgAPI.clickUp(function () {});
          });
        },
        twitter: {
          text: 'Share on Twitter',
          hashtag: 'Craft'
        }
      }));

      var interfaceImagesToLoad = [];
      interfaceImagesToLoad = interfaceImagesToLoad.concat(interfaceImages.DEFAULT);

      if (config.level.puzzle_number && interfaceImages[config.level.puzzle_number]) {
        interfaceImagesToLoad = interfaceImagesToLoad.concat(interfaceImages[config.level.puzzle_number]);
      }

      interfaceImagesToLoad.forEach(function (url) {
        var img = new Image();
        img.src = url;
      });

      var shareButton = (0, _jquery2.default)('.mc-share-button');
      if (shareButton.length) {
        _dom2.default.addClickTouchEvent(shareButton[0], function () {
          Craft.reportResult(true);
        });
      }
    };

    // Push initial level properties into the Redux store
    (0, _StudioApp.singleton)().setPageConstants(config, {
      isMinecraft: true,
      hideRunButton: config.level.specialLevelType === 'agentSpawn'
    });

    _reactDom2.default.render(_react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.getStore)() },
      _react2.default.createElement(_AppView2.default, {
        visualizationColumn: _react2.default.createElement(_CraftVisualizationColumn2.default, {
          showFinishButton: !config.level.isProjectLevel
        }),
        onMount: onMount
      })
    ), document.getElementById(config.containerId));
  };

  /**
   * Play music when the instructions are shown
   */


  Craft.beginBackgroundMusic = function beginBackgroundMusic() {
    _Sounds2.default.getSingleton().whenAudioUnlocked(function () {
      var hasSongInLevel = Craft.level.songs && Craft.level.songs.length > 1;
      var songToPlayFirst = hasSongInLevel ? Craft.level.songs[0] : null;
      Craft.musicController.play(songToPlayFirst);
    });
  };

  Craft.onArrowButtonDown = function onArrowButtonDown(e, btn) {
    Craft.gameController.codeOrgAPI.arrowDown(directionToFacing[btn]);
    e.preventDefault(); // Stop normal events so we see mouseup later.
  };

  Craft.onArrowButtonUp = function onArrowButtonUp(btn) {
    Craft.gameController.codeOrgAPI.arrowUp(directionToFacing[btn]);
  };

  Craft.onDocumentMouseUp = function onDocumentMouseUp() {
    if (!Craft.phaserLoaded() || !Craft.levelInitialized()) {
      return;
    }

    for (var direction in directionToFacing) {
      Craft.gameController.codeOrgAPI.arrowUp(directionToFacing[direction]);
    }
  };

  Craft.characterAssetPackName = function characterAssetPackName(playerName) {
    return 'player' + playerName;
  };

  Craft.getCurrentCharacter = function getCurrentCharacter() {
    return window.localStorage.getItem('craftSelectedPlayer') || DEFAULT_CHARACTER;
  };

  /**
   * Get the level IDs for which the player has collected a diamond this
   * session.
   *
   * @return {Number[]} collectedLevels
   */


  Craft.getSessionDiamondCollectedLevels = function getSessionDiamondCollectedLevels() {
    return JSON.parse((0, _utils.tryGetLocalStorage)('craftSessionDiamondCollectedLevels', '[]')) || [];
  };

  /**
   * Mark this level as being one for which the player has collected a diamond
   * this session, if not already marked as such.
   *
   * @return {boolean} whether or not the level was newly marked
   */


  Craft.setSessionDiamondCollected = function setSessionDiamondCollected() {
    var collectedLevels = Craft.getSessionDiamondCollectedLevels();
    if (!collectedLevels.includes(Craft.initialConfig.serverLevelId)) {
      collectedLevels.push(Craft.initialConfig.serverLevelId);
      (0, _utils.trySetLocalStorage)('craftSessionDiamondCollectedLevels', JSON.stringify(collectedLevels));
      return true;
    }

    return false;
  };

  Craft.showPlayerSelectionPopup = function showPlayerSelectionPopup(onSelectedCallback) {
    var selectedPlayer = DEFAULT_CHARACTER;
    var popupDiv = document.createElement('div');
    popupDiv.innerHTML = __webpack_require__(2741)({
      image: (0, _StudioApp.singleton)().assetUrl()
    });
    var popupDialog = (0, _StudioApp.singleton)().createModalDialog({
      contentDiv: popupDiv,
      defaultBtnSelector: '#choose-steve',
      onHidden: function onHidden() {
        onSelectedCallback(selectedPlayer);
      },
      id: 'craft-popup-player-selection'
    });
    _dom2.default.addClickTouchEvent((0, _jquery2.default)('#close-character-select')[0], function () {
      popupDialog.hide();
    });
    _dom2.default.addClickTouchEvent((0, _jquery2.default)('#choose-steve')[0], function () {
      selectedPlayer = CHARACTER_STEVE;
      (0, _trackEvent2.default)('MinecraftAgent', 'ClickedCharacter', selectedPlayer);
      popupDialog.hide();
    });
    _dom2.default.addClickTouchEvent((0, _jquery2.default)('#choose-alex')[0], function () {
      selectedPlayer = CHARACTER_ALEX;
      (0, _trackEvent2.default)('MinecraftAgent', 'ClickedCharacter', selectedPlayer);
      popupDialog.hide();
    });
    popupDialog.show();
  };

  Craft.clearPlayerState = function clearPlayerState() {
    window.localStorage.removeItem('craftSelectedPlayer');
  };

  Craft.initializeAppLevel = function initializeAppLevel(levelConfig) {
    (0, _Utils.convertActionPlaneEntitiesToConfig)(levelConfig);

    var fluffPlane = [];
    // TODO(bjordan): remove configuration requirement in visualization
    for (var i = 0; i < (levelConfig.gridWidth || 10) * (levelConfig.gridHeight || 10); i++) {
      fluffPlane.push('');
    }

    var levelAssetPacks = {
      beforeLoad: Craft.minAssetsForLevelWithCharacter(levelConfig.puzzle_number),
      afterLoad: Craft.afterLoadAssetsForLevel(levelConfig.puzzle_number)
    };

    Craft.gameController.loadLevel({
      isDaytime: levelConfig.isDaytime,
      groundPlane: levelConfig.groundPlane,
      groundDecorationPlane: levelConfig.groundDecorationPlane,
      actionPlane: levelConfig.actionPlane,
      fluffPlane: fluffPlane,
      entities: levelConfig.entities,
      useAgent: !!levelConfig.agentStartPosition,
      usePlayer: !!levelConfig.playerStartPosition,
      playerStartPosition: levelConfig.playerStartPosition,
      playerStartDirection: levelConfig.playerStartDirection,
      agentStartPosition: levelConfig.agentStartPosition,
      agentStartDirection: levelConfig.agentStartDirection,
      playerName: Craft.getCurrentCharacter(),
      assetPacks: levelAssetPacks,
      specialLevelType: levelConfig.specialLevelType,
      isAgentLevel: levelConfig.isAgentLevel,
      gridDimensions: levelConfig.gridWidth && levelConfig.gridHeight ? [levelConfig.gridWidth, levelConfig.gridHeight] : null,
      levelVerificationTimeout: levelConfig.levelVerificationTimeout,
      // eslint-disable-next-line no-eval
      verificationFunction: eval('[' + levelConfig.verificationFunction + ']')[0], // TODO(bjordan): add to utils
      // eslint-disable-next-line no-eval
      failureCheckFunction: eval('[' + levelConfig.failureCheckFunction + ']')[0], // TODO(bjordan): add to utils
      // eslint-disable-next-line no-eval
      timeoutResult: eval('[' + (levelConfig.timeoutVerificationFunction || 'function() { return false; }') + ']')[0]
    });
  };

  Craft.minAssetsForLevelWithCharacter = function minAssetsForLevelWithCharacter(levelNumber) {
    return Craft.minAssetsForLevelNumber(levelNumber).concat([Craft.characterAssetPackName(Craft.getCurrentCharacter())]);
  };

  Craft.minAssetsForLevelNumber = function minAssetsForLevelNumber(levelNumber) {
    switch (levelNumber) {
      default:
        return ['heroAllAssetsMinusPlayer', 'playerAgent'];
    }
  };

  Craft.afterLoadAssetsForLevel = function afterLoadAssetsForLevel(levelNumber) {
    // After level loads & player starts playing, kick off further asset downloads
    switch (levelNumber) {
      default:
        // May want to push this to occur on level with video
        return ['heroAllAssetsMinusPlayer', 'playerAgent'];
    }
  };

  Craft.earlyLoadAssetsForLevel = function earlyLoadAssetsForLevel(levelNumber) {
    switch (levelNumber) {
      default:
        return Craft.minAssetsForLevelWithCharacter(levelNumber);
    }
  };

  Craft.niceToHaveAssetsForLevel = function niceToHaveAssetsForLevel(levelNumber) {
    switch (levelNumber) {
      case 1:
        return ['playerSteve', 'playerAlex'];
      default:
        return ['heroAllAssetsMinusPlayer'];
    }
  };

  /**
   * Reset the app to the start position and kill any pending animation tasks.
   * @param {boolean} first true if first reset
   */


  Craft.reset = function reset(first) {
    if (first) {
      return;
    }
    (0, _thumbnail.captureThumbnailFromCanvas)((0, _jquery2.default)('#minecraft-frame canvas')[0]);
    Craft.gameController.codeOrgAPI.resetAttempt();
  };

  Craft.phaserLoaded = function phaserLoaded() {
    return Craft.gameController && Craft.gameController.game && Craft.gameController.game.load && !Craft.gameController.game.load.isLoading;
  };

  Craft.levelInitialized = function levelInitialized() {
    return Craft.gameController && Craft.gameController.levelModel;
  };

  /**
   * Base's `studioApp().resetButtonClick` will be called first.
   */


  Craft.resetButtonClick = function resetButtonClick() {
    (0, _jquery2.default)('.arrow').prop("disabled", false);
  };

  Craft.isPreAnimationFailure = function isPreAnimationFailure(testResult) {
    switch (testResult) {
      case _constants.TestResults.QUESTION_MARKS_IN_NUMBER_FIELD:
      case _constants.TestResults.EMPTY_FUNCTIONAL_BLOCK:
      case _constants.TestResults.EXTRA_TOP_BLOCKS_FAIL:
      case _constants.TestResults.EXAMPLE_FAILED:
      case _constants.TestResults.EMPTY_BLOCK_FAIL:
      case _constants.TestResults.EMPTY_FUNCTION_NAME:
        return true;
      default:
        return false;
    }
  };

  /**
   * Click the run button.  Start the program.
   */


  Craft.runButtonClick = function runButtonClick() {
    if (!Craft.phaserLoaded()) {
      return;
    }

    (0, _StudioApp.singleton)().toggleRunReset('reset');
    Blockly.mainBlockSpace.traceOn(true);
    (0, _StudioApp.singleton)().attempts++;

    Craft.executeUserCode();

    if (Craft.level.freePlay && !(0, _StudioApp.singleton)().hideSource) {
      var finishBtnContainer = (0, _jquery2.default)('#right-button-cell');

      if (finishBtnContainer.length && !finishBtnContainer.hasClass('right-button-cell-enabled')) {
        finishBtnContainer.addClass('right-button-cell-enabled');
        (0, _StudioApp.singleton)().onResize();

        var event = document.createEvent('Event');
        event.initEvent('finishButtonShown', true, true);
        document.dispatchEvent(event);
      }
    }
  };

  Craft.executeUserCode = function executeUserCode() {
    if (Craft.initialConfig.level.edit_blocks) {
      Craft.reportResult(true);
      return;
    }

    // Fail immediately for empty repeat blocks, etc.
    var initialTestResults = (0, _StudioApp.singleton)().getTestResults(false);
    if (Craft.isPreAnimationFailure(initialTestResults)) {
      Craft.reportResult(false);
      return;
    }

    (0, _StudioApp.singleton)().playAudio('start');

    // Start tracing calls.
    Blockly.mainBlockSpace.traceOn(true);

    var appCodeOrgAPI = Craft.gameController.codeOrgAPI;
    appCodeOrgAPI.startCommandCollection();
    appCodeOrgAPI.registerEventCallback(null, function (event) {
      if (event.eventType === _EventType2.default.WhenUsed && event.targetType === 'sheep') {
        appCodeOrgAPI.drop(null, 'wool', event.targetIdentifier);
      }
      if (event.eventType === _EventType2.default.WhenTouched && event.targetType === 'creeper') {
        appCodeOrgAPI.flashEntity(null, event.targetIdentifier);
        appCodeOrgAPI.explodeEntity(null, event.targetIdentifier);
      }
    });

    // Run user generated code, calling appCodeOrgAPI
    var code = '';
    var codeBlocks = Blockly.mainBlockSpace.getTopBlocks(true);
    if ((0, _StudioApp.singleton)().initializationBlocks) {
      codeBlocks = (0, _StudioApp.singleton)().initializationBlocks.concat(codeBlocks);
    }

    code = Blockly.Generator.blocksToCode('JavaScript', codeBlocks);
    _CustomMarshalingInterpreter2.default.evalWith(code, {
      moveForward: function moveForward(blockID) {
        appCodeOrgAPI.moveForward((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), 'PlayerAgent');
      },
      moveBackward: function moveBackward(blockID) {
        appCodeOrgAPI.moveBackward((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), 'PlayerAgent');
      },
      turnLeft: function turnLeft(blockID) {
        appCodeOrgAPI.turnLeft((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), 'PlayerAgent');
      },
      turnRight: function turnRight(blockID) {
        appCodeOrgAPI.turnRight((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), 'PlayerAgent');
      },
      destroyBlock: function destroyBlock(blockID) {
        appCodeOrgAPI.destroyBlock((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), 'PlayerAgent');
      },
      whilePathAhead: function whilePathAhead(blockID, callback) {
        // if resurrected, move blockID be last parameter to fix "Show Code"
        appCodeOrgAPI.whilePathAhead((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), '', 'PlayerAgent', callback);
      },
      whileBlockAhead: function whileBlockAhead(blockID, blockType, callback) {
        // if resurrected, move blockID be last parameter to fix "Show Code"
        appCodeOrgAPI.whilePathAhead((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), blockType, 'PlayerAgent', callback);
      },
      ifLavaAhead: function ifLavaAhead(callback, blockID) {
        // if resurrected, move blockID be last parameter to fix "Show Code"
        appCodeOrgAPI.ifBlockAhead((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), "lava", 'PlayerAgent', callback);
      },
      ifBlockAhead: function ifBlockAhead(blockType, callback, blockID) {
        appCodeOrgAPI.ifBlockAhead((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), blockType, 'PlayerAgent', callback);
      },
      placeBlock: function placeBlock(blockType, blockID) {
        appCodeOrgAPI.placeBlock((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), blockType, 'PlayerAgent');
      },
      placeDirection: function placeDirection(blockType, direction, blockID) {
        appCodeOrgAPI.placeDirection((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), blockType, 'PlayerAgent', direction);
      },
      moveDirection: function moveDirection(direction, targetEntity, blockID) {
        var dirStringToDirection = {
          up: _FacingDirection2.default.North,
          down: _FacingDirection2.default.South,
          left: _FacingDirection2.default.West,
          right: _FacingDirection2.default.East
        };
        appCodeOrgAPI.moveDirection((0, _StudioApp.singleton)().highlight.bind((0, _StudioApp.singleton)(), blockID), dirStringToDirection[direction], targetEntity);
      }
    });

    Craft.gameController.codeOrgAPI.startAttempt(function (success) {
      if (Craft.level.freePlay) {
        return;
      }
      Craft.reportResult(success);
    });
  };

  Craft.getTestResultFrom = function getTestResultFrom(success, studioTestResults) {
    if (studioTestResults === _constants.TestResults.LEVEL_INCOMPLETE_FAIL) {
      return _constants.TestResults.APP_SPECIFIC_FAIL;
    }

    if (Craft.initialConfig.level.freePlay) {
      return _constants.TestResults.FREE_PLAY;
    }

    return studioTestResults;
  };

  Craft.reportResult = function reportResult(success) {
    var studioTestResults = (0, _StudioApp.singleton)().getTestResults(success);
    var testResultType = Craft.getTestResultFrom(success, studioTestResults);

    var image = Craft.initialConfig.level.freePlay ? Craft.gameController.getScreenshot() : null;
    // Grab the encoded image, stripping out the metadata, e.g. `data:image/png;base64,`
    var encodedImage = image ? encodeURIComponent(image.split(',')[1]) : null;

    var message = void 0;
    if (testResultType === _constants.TestResults.APP_SPECIFIC_FAIL) {
      message = _locale2.default.agentGenericFailureMessage();
    } else if (testResultType === _constants.TestResults.TOO_FEW_BLOCKS_FAIL) {
      message = _locale2.default.agentTooFewBlocksFailureMessage();
    } else if (testResultType === _constants.TestResults.ALL_PASS) {
      var collectedLevels = Craft.getSessionDiamondCollectedLevels();
      if (collectedLevels.includes(Craft.initialConfig.serverLevelId)) {
        message = _locale2.default.agentDiamondPathCongrats({
          count: collectedLevels.length
        });
      }
    }

    (0, _StudioApp.singleton)().report({
      app: 'craft',
      level: Craft.initialConfig.level.id,
      result: Craft.initialConfig.level.freePlay ? true : success,
      testResult: testResultType,
      image: encodedImage,
      program: encodeURIComponent(Blockly.Xml.domToText(Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace))),
      // typically delay feedback until response back
      // for things like e.g. crowdsourced hints & hint blocks
      onComplete: function onComplete(response) {
        var sharing = Craft.initialConfig.level.freePlay;
        if (sharing && response.level_source) {
          (0, _utils.trySetLocalStorage)('craftHeroShareLink', response.level_source);
        }

        var isSignedIn = (0, _redux.getStore)().getState().progress.signInState === _progressRedux.SignInState.SignedIn;
        (0, _StudioApp.singleton)().displayFeedback({
          feedbackType: testResultType,
          response: response,
          level: Craft.initialConfig.level,
          defaultToContinue: Craft.shouldDefaultToContinue(testResultType),
          message: message,
          appStrings: {
            reinfFeedbackMsg: _locale2.default.reinfFeedbackMsg(),
            nextLevelMsg: _locale2.default.nextLevelMsg({
              puzzleNumber: Craft.initialConfig.level.puzzle_number
            }),
            tooManyBlocksFailMsgFunction: _locale2.default.tooManyBlocksFail,
            generatedCodeDescription: _locale2.default.generatedCodeDescription()
          },
          feedbackImage: image,
          showingSharing: sharing,
          saveToProjectGallery: true,
          disableSaveToGallery: !isSignedIn
        });
      }
    });
  };

  /**
   * Whether pressing "x" or pressing the backdrop of the "level completed" dialog
   * should default to auto-advancing to the next level.
   * @param {string} testResultType TestResults type of this level completion
   * @returns {boolean} whether to continue
   */


  Craft.shouldDefaultToContinue = function shouldDefaultToContinue(testResultType) {
    var isFreePlay = testResultType === _constants.TestResults.FREE_PLAY;
    var isSuccess = testResultType > _constants.TestResults.APP_SPECIFIC_ACCEPTABLE_FAIL;
    return isSuccess && !isFreePlay;
  };

  return Craft;
}();

exports.default = Craft;
module.exports = exports['default'];

/***/ }),

/***/ 2151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadStarWarsEvents = loadStarWarsEvents;
exports.loadStarWarsGrid = loadStarWarsGrid;

var _constants = __webpack_require__(789);

var _locale = __webpack_require__(1706);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadStarWarsEvents(skin) {
  skin.preloadAssets = true;
  skin.sortDrawOrder = true;

  skin.hideIconInClearPuzzle = true;

  skin.defaultBackground = 'endor';
  skin.projectileFrames = 10;
  skin.itemFrames = 10;

  skin.instructions2ImageSubstitutions = {
    "pufferpig": skin.assetUrl('instructions_pufferpig.png'),
    "mynock": skin.assetUrl('instructions_mynock.png'),
    "rebelpilot": skin.assetUrl('instructions_rebelpilot.png'),
    "stormtrooper": skin.assetUrl('instructions_stormtrooper.png'),
    "mousedroid": skin.assetUrl('instructions_mousedroid.png'),
    "tauntaun": skin.assetUrl('instructions_tauntaun.png'),
    "probot": skin.assetUrl('instructions_probot.png')
  };

  // NOTE: all class names should be unique.  eventhandler naming won't work
  // if we name a projectile class 'left' for example.
  skin.ProjectileClassNames = [];

  skin.ItemClassNames = ['pufferpig', 'stormtrooper', 'tauntaun', 'mynock', 'probot', 'mousedroid', 'rebelpilot'];

  skin.AutohandlerTouchItems = {
    whenTouchPufferPig: 'pufferpig',
    whenTouchStormtrooper: 'stormtrooper',
    whenTouchTauntaun: 'tauntaun',
    whenTouchMynock: 'mynock',
    whenTouchProbot: 'probot',
    whenTouchMouseDroid: 'mousedroid',
    whenTouchRebelPilot: 'rebelpilot',
    whenGetPufferPig: 'pufferpig',
    whenGetStormtrooper: 'stormtrooper',
    whenGetTauntaun: 'tauntaun',
    whenGetMynock: 'mynock',
    whenGetProbot: 'probot',
    whenGetMouseDroid: 'mousedroid',
    whenGetRebelPilot: 'rebelpilot'
  };

  skin.AutohandlerGetAllItems = {
    whenGetAllPufferPigs: 'pufferpig',
    whenGetAllStormtroopers: 'stormtrooper',
    whenGetAllTauntauns: 'tauntaun',
    whenGetAllMynocks: 'mynock',
    whenGetAllProbots: 'probot',
    whenGetAllMouseDroids: 'mousedroid',
    whenGetAllRebelPilots: 'rebelpilot'
  };

  skin.specialItemProperties = {
    'pufferpig': { frames: 12, width: 100, height: 100, scale: 1, renderOffset: { x: 0, y: -15 }, activity: 'roam', speed: _constants.SpriteSpeed.VERY_SLOW, spritesCounterclockwise: true },
    'stormtrooper': { frames: 12, width: 100, height: 100, scale: 1.1, renderOffset: { x: 0, y: -15 }, activity: 'chase', speed: _constants.SpriteSpeed.VERY_SLOW, spritesCounterclockwise: true },
    'tauntaun': { frames: 15, width: 100, height: 100, scale: 1.6, renderOffset: { x: 0, y: 20 }, activity: 'roam', speed: _constants.SpriteSpeed.SLOW, spritesCounterclockwise: true },
    'mynock': { frames: 8, width: 100, height: 100, scale: 0.9, renderOffset: { x: 0, y: -20 }, activity: 'roam', speed: _constants.SpriteSpeed.SLOW, spritesCounterclockwise: true },
    'probot': { frames: 12, width: 100, height: 100, scale: 1.2, renderOffset: { x: 0, y: -10 }, activity: 'chase', speed: _constants.SpriteSpeed.LITTLE_SLOW, spritesCounterclockwise: true },
    'mousedroid': { frames: 1, width: 100, height: 100, scale: 0.5, renderOffset: { x: 0, y: -20 }, activity: 'flee', speed: _constants.SpriteSpeed.LITTLE_SLOW, spritesCounterclockwise: true },
    'rebelpilot': { frames: 13, width: 100, height: 100, scale: 1, renderOffset: { x: 0, y: -20 }, activity: 'flee', speed: _constants.SpriteSpeed.SLOW, spritesCounterclockwise: true }
  };

  skin.customObstacleZones = { endor: {}, hoth: {}, starship: {} };

  function generateGridObstacleZones() {
    var zones = [];
    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
        var zone = {
          minX: 50 + col * 100 + 5,
          maxX: 50 + col * 100 + 49 - 5,
          minY: 50 + row * 100 + 15,
          maxY: 50 + row * 100 + 49 - 5
        };
        zones.push(zone);
      }
    }
    return zones;
  }

  skin.customObstacleZones.endor.grid = skin.customObstacleZones.hoth.grid = skin.customObstacleZones.starship.grid = generateGridObstacleZones();

  skin.customObstacleZones.endor.blobs = [{ minX: 346, maxX: 413, minY: 261, maxY: 344 }, { minX: 318, maxX: 404, minY: 342, maxY: 397 }, { minX: 308, maxX: 348, minY: 72, maxY: 110 }, { minX: 264, maxX: 348, minY: 112, maxY: 197 }, { minX: 96, maxX: 149, minY: 289, maxY: 349 }, { minX: 96, maxX: 199, minY: 238, maxY: 288 }, { minX: 83, maxX: 125, minY: 125, maxY: 147 }, { minX: 58, maxX: 99, minY: 72, maxY: 91 }, { minX: 57, maxX: 149, minY: 92, maxY: 123 }];

  skin.customObstacleZones.endor.horizontal = [{ minX: 51, maxX: 299, minY: 269, maxY: 293 }, { minX: 150, maxX: 348, minY: 168, maxY: 189 }, { minX: 53, maxX: 97, minY: 159, maxY: 199 }, { minX: 50, maxX: 198, minY: 71, maxY: 94 }, { minX: 255, maxX: 345, minY: 71, maxY: 94 }];

  skin.customObstacleZones.endor.circle = [{ minX: 251, maxX: 317, minY: 332, maxY: 348 }, { minX: 83, maxX: 198, minY: 332, maxY: 348 }, { minX: 250, maxX: 317, minY: 77, maxY: 93 }, { minX: 313, maxX: 337, minY: 77, maxY: 348 }, { minX: 163, maxX: 236, minY: 202, maxY: 244 }, { minX: 83, maxX: 200, minY: 77, maxY: 93 }, { minX: 62, maxX: 85, minY: 77, maxY: 348 }];

  skin.customObstacleZones.hoth.blobs = [{ minX: 100, maxX: 142, minY: 283, maxY: 342 }, { minX: 100, maxX: 187, minY: 226, maxY: 281 }, { minX: 356, maxX: 394, minY: 264, maxY: 311 }, { minX: 311, maxX: 393, minY: 313, maxY: 388 }, { minX: 310, maxX: 344, minY: 61, maxY: 106 }, { minX: 258, maxX: 344, minY: 108, maxY: 192 }, { minX: 117, maxX: 146, minY: 120, maxY: 132 }, { minX: 57, maxX: 117, minY: 70, maxY: 132 }];

  skin.customObstacleZones.hoth.horizontal = [{ minX: 54, maxX: 299, minY: 268, maxY: 294 }, { minX: 150, maxX: 350, minY: 171, maxY: 198 }, { minX: 53, maxX: 99, minY: 171, maxY: 198 }, { minX: 252, maxX: 350, minY: 66, maxY: 92 }, { minX: 54, maxX: 195, minY: 66, maxY: 92 }];

  skin.customObstacleZones.hoth.circle = [{ minX: 250, maxX: 298, minY: 312, maxY: 342 }, { minX: 300, maxX: 346, minY: 65, maxY: 342 }, { minX: 252, maxX: 302, minY: 65, maxY: 100 }, { minX: 99, maxX: 192, minY: 311, maxY: 342 }, { minX: 101, maxX: 196, minY: 65, maxY: 91 }, { minX: 50, maxX: 100, minY: 65, maxY: 342 }, { minX: 163, maxX: 242, minY: 188, maxY: 238 }];

  skin.customObstacleZones.starship.blobs = [{ minX: 301, maxX: 344, minY: 58, maxY: 120 }, { minX: 353, maxX: 405, minY: 260, maxY: 308 }, { minX: 306, maxX: 405, minY: 310, maxY: 393 }, { minX: 101, maxX: 144, minY: 300, maxY: 350 }, { minX: 101, maxX: 197, minY: 208, maxY: 299 }, { minX: 261, maxX: 344, minY: 120, maxY: 192 }, { minX: 55, maxX: 133, minY: 77, maxY: 141 }];

  skin.customObstacleZones.starship.horizontal = [{ minX: 52, maxX: 298, minY: 267, maxY: 300 }, { minX: 151, maxX: 351, minY: 167, maxY: 198 }, { minX: 49, maxX: 99, minY: 165, maxY: 201 }, { minX: 51, maxX: 199, minY: 66, maxY: 102 }, { minX: 251, maxX: 351, minY: 68, maxY: 104 }];

  skin.customObstacleZones.starship.circle = [{ minX: 251, maxX: 316, minY: 315, maxY: 351 }, { minX: 153, maxX: 242, minY: 165, maxY: 251 }, { minX: 252, maxX: 314, minY: 66, maxY: 100 }, { minX: 310, maxX: 339, minY: 66, maxY: 351 }, { minX: 80, maxX: 200, minY: 316, maxY: 351 }, { minX: 82, maxX: 200, minY: 66, maxY: 100 }, { minX: 63, maxX: 86, minY: 66, maxY: 351 }];

  skin.explosion = skin.assetUrl('vanish.png');
  skin.explosionFrames = 17;

  // Spritesheet for animated goal.
  skin.animatedGoal = skin.assetUrl('goal_idle.png');

  // Dimensions of the goal sprite.
  skin.goalSpriteWidth = 100;
  skin.goalSpriteHeight = 100;

  // How many frames in the animated goal spritesheet.
  skin.animatedGoalFrames = 16;

  // How long to show each frame of the optional goal animation.
  skin.timePerGoalAnimationFrame = 100;

  // Override the default scaling of collision rectangles for sprite touching a goal.
  skin.finishCollideDistanceScaling = 0.8;

  // For a smaller collision region on a goal.
  skin.goalCollisionRectWidth = 50;
  skin.goalCollisionRectHeight = 75;

  // Whether that goal should fade out when touched.  If true, then the
  // success image is never shown.
  skin.fadeOutGoal = true;
  skin.goalSuccess = null;

  // Draw a goal an an offset to its usual location, useful for oversize goal
  // images, such as a person standing taller than a single grid square whose
  // feet should still be planted in that grid square.
  skin.goalRenderOffsetX = -25;
  skin.goalRenderOffsetY = -45;

  // Dimensions of a rectangle in collidable center from which projectiles begin.
  skin.projectileSpriteWidth = 70;
  skin.projectileSpriteHeight = 70;

  // Dimensions of a rectangle in collidable center in which item collisions occur.
  skin.itemCollisionRectWidth = 50;
  skin.itemCollisionRectHeight = 50;

  // Dimensions of a rectangle in sprite center in which item collisions occur.
  skin.spriteCollisionRectWidth = 50;
  skin.spriteCollisionRectHeight = 50;

  // Offset & dimensions of a rectangle in collidable in which wall collisions occur.
  // For isometric-style rendering, this would normally be the feet.
  skin.wallCollisionRectOffsetX = 0;
  skin.wallCollisionRectOffsetY = 24;
  skin.wallCollisionRectWidth = 30;
  skin.wallCollisionRectHeight = 20;

  // When movement is grid aligned, sprite coordinates are the top-left corner
  // of the sprite, and match the top-left corner of the grid square in question.
  // When we draw the sprites bigger, this means the sprite's "feet" will usually
  // be too far to the right and below that square.  These offsets are a chance
  // to move the rendering of the sprite up and to the left, when negative, so
  // that the "feet" are planted at the bottom center of the grid square.
  skin.gridSpriteRenderOffsetX = -30;
  skin.gridSpriteRenderOffsetY = -40;

  skin.avatarList = ['r2-d2', 'c-3po'];
  skin.avatarList.forEach(function (name) {
    skin[name] = {
      sprite: skin.assetUrl('avatar_' + name + '.png'),
      walk: skin.assetUrl('walk_' + name + '.png'),
      dropdownThumbnail: skin.assetUrl('avatar_' + name + '_thumb.png'),
      frameCounts: {
        normal: name === 'r2-d2' ? 14 : 16,
        turns: 8,
        emotions: 0,
        walk: name === 'r2-d2' ? 14 : 8
      },
      animations: {
        turns: 8
      },
      animationFrameDuration: 3
    };
  });

  skin['r2-d2'].movementAudio = [{ begin: 'r2-d2_move1_start', loop: 'r2-d2_move1_loop', end: 'r2-d2_move1_end', volume: 2.2 }, { begin: 'r2-d2_move2_start', loop: 'r2-d2_move2_loop', end: 'r2-d2_move2_end', volume: 2.2 }, { begin: 'r2-d2_move3_start', loop: 'r2-d2_move3_loop', end: 'r2-d2_move3_end', volume: 2.2 }];
  skin['c-3po'].movementAudio = [{ loop: 'c-3po_move_loop', end: 'c-3po_move_end', volume: 0.6 }];

  skin.preventProjectileLoop = function (className) {
    return className === '';
  };

  skin.preventItemLoop = function (className) {
    return className === '';
  };

  // No win or failure avatar for this skin.
  skin.winAvatar = null;
  skin.failureAvatar = null;

  skin.pufferpig = skin.assetUrl('walk_pufferpig.png');
  skin.stormtrooper = skin.assetUrl('walk_stormtrooper.png');
  skin.tauntaun = skin.assetUrl('walk_tauntaun.png');
  skin.mynock = skin.assetUrl('walk_mynock.png');
  skin.probot = skin.assetUrl('walk_probot.png');
  skin.mousedroid = skin.assetUrl('walk_mousedroid.png');
  skin.rebelpilot = skin.assetUrl('walk_rebelpilot.png');

  skin.endor = {
    background: skin.assetUrl('background_endor.jpg'),
    tiles: skin.assetUrl('tiles_endor.png'),
    jumboTiles: skin.assetUrl('jumbotiles_endor.png'),
    jumboTilesAddOffset: -5,
    jumboTilesSize: 60,
    jumboTilesRows: 4,
    jumboTilesCols: 4,
    clouds: [skin.assetUrl('cloud_light.png'), skin.assetUrl('cloud_light2.png')]
  };
  skin.hoth = {
    background: skin.assetUrl('background_hoth.jpg'),
    tiles: skin.assetUrl('tiles_hoth.png'),
    jumboTiles: skin.assetUrl('jumbotiles_hoth.png'),
    jumboTilesAddOffset: -5,
    jumboTilesSize: 60,
    jumboTilesRows: 4,
    jumboTilesCols: 4,
    clouds: [skin.assetUrl('cloud_dark.png'), skin.assetUrl('cloud_dark2.png')]
  };
  skin.starship = {
    background: skin.assetUrl('background_starship.jpg'),
    tiles: skin.assetUrl('tiles_starship.png'),
    jumboTiles: skin.assetUrl('jumbotiles_starship.png'),
    jumboTilesAddOffset: -5,
    jumboTilesSize: 60,
    jumboTilesRows: 4,
    jumboTilesCols: 4
  };

  // It's possible to enlarge the rendering of some wall tiles so that they
  // overlap each other a little.  Define a bounding rectangle for the source
  // tiles that get this treatment.

  skin.enlargeWallTiles = { minCol: 0, maxCol: 3, minRow: 3, maxRow: 5 };

  // Since we don't have jumbo tiles for our "Hoth" background, in the case
  // of the two maps that use jumbo pieces ("circle" and "horizontal") we
  // return a special version of the map that just uses regular tile pieces.

  skin.getMap = function (background, map) {
    if (background === "hoth" && (map === "circle" || map === "horizontal")) {
      return map + "_nonjumbo";
    } else {
      return map;
    }
  };

  skin.blank = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];

  skin.circle_nonjumbo = [[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x11, 0x02, 0x03, 0x00, 0x44, 0x45, 0x00], [0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00], [0x00, 0x14, 0x00, 0x121, 0x121, 0x00, 0x05, 0x00], [0x00, 0x02, 0x00, 0x121, 0x121, 0x00, 0x15, 0x00], [0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00], [0x00, 0x24, 0x25, 0x02, 0x00, 0x34, 0x35, 0x00], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]];

  skin.circle = [[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x200, 0x213, 0x213, 0x00, 0x213, 0x201, 0x00], [0x00, 0x212, 0x00, 0x00, 0x00, 0x00, 0x212, 0x00], [0x00, 0x212, 0x00, 0x121, 0x121, 0x00, 0x212, 0x00], [0x00, 0x212, 0x00, 0x121, 0x121, 0x00, 0x212, 0x00], [0x00, 0x212, 0x00, 0x00, 0x00, 0x00, 0x212, 0x00], [0x00, 0x202, 0x213, 0x213, 0x00, 0x213, 0x203, 0x00], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]];

  skin.horizontal_nonjumbo = [[0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0, 0x02, 0x03, 0x20, 0x00, 0x24, 0x25, 0x00], [0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0, 0x10, 0x00, 0x34, 0x35, 0x20, 0x23, 0x00], [0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0, 0x03, 0x02, 0x22, 0x20, 0x21, 0x00, 0x00], [0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]];

  skin.horizontal = [[0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0, 0x213, 0x213, 0x213, 0x00, 0x213, 0x213, 0x00], [0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0, 0x30, 0x00, 0x213, 0x213, 0x213, 0x213, 0x00], [0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0, 0x213, 0x213, 0x213, 0x213, 0x213, 0x00, 0x00], [0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]];

  skin.grid = [[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x21, 0x00, 0x10, 0x00, 0x20, 0x00, 0x03], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x02, 0x00, 0x11, 0x00, 0x21, 0x00, 0x02], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x03, 0x00, 0x20, 0x00, 0x22, 0x00, 0x11], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x10, 0x00, 0x21, 0x00, 0x23, 0x00, 0x10]];

  skin.blobs = [[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x103, 0x103, 0x00, 0x00, 0x00, 0x22, 0x00], [0x00, 0x103, 0x103, 0x00, 0x00, 0x110, 0x110, 0x00], [0x00, 0x00, 0x00, 0x00, 0x00, 0x110, 0x110, 0x00], [0x00, 0x00, 0x132, 0x132, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x132, 0x132, 0x00, 0x00, 0x00, 0x23], [0x00, 0x00, 0x31, 0x00, 0x00, 0x00, 0x121, 0x121], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x121, 0x121]];

  // Sounds.
  skin.sounds = ['R2-D2sound1', 'R2-D2sound2', 'R2-D2sound3', 'R2-D2sound4', 'R2-D2sound5', 'R2-D2sound6', 'R2-D2sound7', 'R2-D2sound8', 'R2-D2sound9', 'C-3POsound1', 'C-3POsound2', 'C-3POsound3', 'C-3POsound4', 'PufferPigSound1', 'PufferPigSound2', 'PufferPigSound3', 'PufferPigSound4', 'TauntaunSound1', 'TauntaunSound2', 'TauntaunSound3', 'TauntaunSound4', 'MynockSound1', 'MynockSound2', 'MynockSound3', 'ProbotSound1', 'ProbotSound2', 'ProbotSound3', 'MouseDroidSound1', 'MouseDroidSound2', 'MouseDroidSound3', 'alert1', 'alert2', 'alert3', 'alert4', 'applause'];

  skin.soundGroups = {
    'R2-D2sound': {
      randomValue: 'R2-D2random',
      minSuffix: 1,
      maxSuffix: 9
    },
    'C-3POsound': {
      randomValue: 'C-3POrandom',
      minSuffix: 1,
      maxSuffix: 4
    },
    'PufferPigSound': {
      randomValue: 'PufferPigRandom',
      minSuffix: 1,
      maxSuffix: 4
    },
    'TauntaunSound': {
      randomValue: 'TauntaunRandom',
      minSuffix: 1,
      maxSuffix: 4
    },
    'MynockSound': {
      randomValue: 'MynockRandom',
      minSuffix: 1,
      maxSuffix: 3
    },
    'ProbotSound': {
      randomValue: 'ProbotSoundRandom',
      minSuffix: 1,
      maxSuffix: 3
    },
    'MouseDroidSound': {
      randomValue: 'MouseDroidSoundRandom',
      minSuffix: 1,
      maxSuffix: 3
    }
  };

  skin.soundChoices = [[_locale2.default.playSoundRandom(), _constants.RANDOM_VALUE], [_locale2.default.playSoundR2D2Random(), 'R2-D2random'], [_locale2.default.playSoundR2D2Sound1(), 'R2-D2sound1'], [_locale2.default.playSoundR2D2Sound2(), 'R2-D2sound2'], [_locale2.default.playSoundR2D2Sound3(), 'R2-D2sound3'], [_locale2.default.playSoundR2D2Sound4(), 'R2-D2sound4'], [_locale2.default.playSoundR2D2Sound5(), 'R2-D2sound5'], [_locale2.default.playSoundR2D2Sound6(), 'R2-D2sound6'], [_locale2.default.playSoundR2D2Sound7(), 'R2-D2sound7'], [_locale2.default.playSoundR2D2Sound8(), 'R2-D2sound8'], [_locale2.default.playSoundR2D2Sound9(), 'R2-D2sound9'], [_locale2.default.playSoundC3PORandom(), 'C-3POrandom'], [_locale2.default.playSoundC3POSound1(), 'C-3POsound1'], [_locale2.default.playSoundC3POSound2(), 'C-3POsound2'], [_locale2.default.playSoundC3POSound3(), 'C-3POsound3'], [_locale2.default.playSoundC3POSound4(), 'C-3POsound4'], [_locale2.default.playSoundPufferPigRandom(), 'PufferPigRandom'], [_locale2.default.playSoundPufferPigSound1(), 'PufferPigSound1'], [_locale2.default.playSoundPufferPigSound2(), 'PufferPigSound2'], [_locale2.default.playSoundPufferPigSound3(), 'PufferPigSound3'], [_locale2.default.playSoundPufferPigSound4(), 'PufferPigSound4'], [_locale2.default.playSoundTauntaunRandom(), 'TauntaunRandom'], [_locale2.default.playSoundTauntaunSound1(), 'TauntaunSound1'], [_locale2.default.playSoundTauntaunSound2(), 'TauntaunSound2'], [_locale2.default.playSoundTauntaunSound3(), 'TauntaunSound3'], [_locale2.default.playSoundTauntaunSound4(), 'TauntaunSound4'], [_locale2.default.playSoundMynockRandom(), 'MynockRandom'], [_locale2.default.playSoundMynockSound1(), 'MynockSound1'], [_locale2.default.playSoundMynockSound2(), 'MynockSound2'], [_locale2.default.playSoundMynockSound3(), 'MynockSound3'], [_locale2.default.playSoundProbotRandom(), 'ProbotRandom'], [_locale2.default.playSoundProbotSound1(), 'ProbotSound1'], [_locale2.default.playSoundProbotSound2(), 'ProbotSound2'], [_locale2.default.playSoundProbotSound3(), 'ProbotSound3'], [_locale2.default.playSoundMouseDroidRandom(), 'MouseDroidRandom'], [_locale2.default.playSoundMouseDroidSound1(), 'MouseDroidSound1'], [_locale2.default.playSoundMouseDroidSound2(), 'MouseDroidSound2'], [_locale2.default.playSoundMouseDroidSound3(), 'MouseDroidSound3'], [_locale2.default.playSoundAlert1(), 'alert1'], [_locale2.default.playSoundAlert2(), 'alert2'], [_locale2.default.playSoundAlert3(), 'alert3'], [_locale2.default.playSoundAlert4(), 'alert4'], [_locale2.default.playSoundApplause(), 'applause']];

  skin.soundChoicesK1 = [];

  skin.soundMetadata = [{ name: 'start', volume: 0.2 }, { name: 'win', volume: 0.2 }, { name: 'failure', volume: 0.2 }, { name: 'flag', volume: 0.2 }, { name: 'R2-D2sound1', volume: 0.2 }, { name: 'R2-D2sound2', volume: 0.2 }, { name: 'R2-D2sound3', volume: 0.2 }, { name: 'R2-D2sound4', volume: 0.2 }, { name: 'R2-D2sound5', volume: 0.2 }, { name: 'R2-D2sound6', volume: 0.2 }, { name: 'R2-D2sound7', volume: 0.2 }, { name: 'R2-D2sound8', volume: 0.2 }, { name: 'R2-D2sound9', volume: 0.2 }, { name: 'C-3POsound1', volume: 0.2 }, { name: 'C-3POsound2', volume: 0.2 }, { name: 'C-3POsound3', volume: 0.2 }, { name: 'C-3POsound4', volume: 0.2 }, { name: 'PufferPigSound1', volume: 0.2 }, { name: 'PufferPigSound2', volume: 0.2 }, { name: 'PufferPigSound3', volume: 0.2 }, { name: 'PufferPigSound4', volume: 0.2 }, { name: 'TauntaunSound1', volume: 0.2 }, { name: 'TauntaunSound2', volume: 0.2 }, { name: 'TauntaunSound3', volume: 0.2 }, { name: 'TauntaunSound4', volume: 0.2 }, { name: 'MynockSound1', volume: 0.2 }, { name: 'MynockSound2', volume: 0.2 }, { name: 'MynockSound3', volume: 0.2 }, { name: 'ProbotSound1', volume: 0.2 }, { name: 'ProbotSound2', volume: 0.2 }, { name: 'ProbotSound3', volume: 0.2 }, { name: 'MouseDroidSound1', volume: 0.2 }, { name: 'MouseDroidSound2', volume: 0.2 }, { name: 'MouseDroidSound3', volume: 0.2 }, { name: 'alert1', volume: 0.2 }, { name: 'alert2', volume: 0.2 }, { name: 'alert3', volume: 0.2 }, { name: 'alert4', volume: 0.2 }, { name: 'applause', volume: 0.2 }];

  skin.musicMetadata = HOC2015_MUSIC_METADATA;

  // Normally the sound isn't played for the final goal, but this forces it
  // to be played.
  skin.playFinalGoalSound = true;

  // These are used by blocks.js to customize our dropdown blocks across skins
  // NOTE: first item must be RANDOM_VALUE
  skin.mapChoices = [[_locale2.default.setMapRandom(), _constants.RANDOM_VALUE], [_locale2.default.setMapBlank(), 'blank'], [_locale2.default.setMapCircle(), 'circle'], [_locale2.default.setMapHorizontal(), 'horizontal'], [_locale2.default.setMapGrid(), 'grid'], [_locale2.default.setMapBlobs(), 'blobs']];

  skin.backgroundChoices = [[_locale2.default.setBackgroundRandom(), _constants.RANDOM_VALUE], [_locale2.default.setBackgroundEndor(), '"endor"'], [_locale2.default.setBackgroundHoth(), '"hoth"'], [_locale2.default.setBackgroundStarship(), '"starship"']];

  // NOTE: background names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.backgroundChoicesK1 = [[skin.endor.background, '"endor"'], [skin.hoth.background, '"hoth"'], [skin.starship.background, '"starship"'], [skin.randomPurpleIcon, _constants.RANDOM_VALUE]];

  skin.spriteChoices = [[_locale2.default.setDroidHidden(), _constants.HIDDEN_VALUE], [_locale2.default.setDroidRandom(), _constants.RANDOM_VALUE], [_locale2.default.setDroidR2D2(), '"r2-d2"'], [_locale2.default.setDroidC3PO(), '"c-3po"']];

  skin.setSpritePrefix = _locale2.default.setDroid();

  skin.projectileChoices = [];

  // NOTE: item names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.itemChoices = [[_locale2.default.itemStormtrooper(), '"stormtrooper"'], [_locale2.default.itemRebelPilot(), '"rebelpilot"'], [_locale2.default.itemPufferPig(), '"pufferpig"'], [_locale2.default.itemMynock(), '"mynock"'], [_locale2.default.itemMouseDroid(), '"mousedroid"'], [_locale2.default.itemTauntaun(), '"tauntaun"'], [_locale2.default.itemProbot(), '"probot"'], [_locale2.default.itemRandom(), _constants.RANDOM_VALUE]];

  skin.msgOverrides = {
    ifSprite: _locale2.default.ifDroid,
    ifSpriteN: _locale2.default.ifDroidN,
    moveSprite: _locale2.default.moveDroid,
    moveSpriteN: _locale2.default.moveDroidN,
    setSpriteN: _locale2.default.setDroidN,
    stopSprite: _locale2.default.stopDroid,
    stopSpriteN: _locale2.default.stopDroidN,
    whenSpriteClicked: _locale2.default.whenDroidClicked,
    whenSpriteClickedN: _locale2.default.whenDroidClickedN
  };
}

function loadStarWarsGrid(skin) {
  skin.preloadAssets = true;
  skin.sortDrawOrder = true;
  skin.gridAlignedMovement = true;
  skin.gridAlignedExtraPauseSteps = 1;
  skin.slowExecutionFactor = 10;

  skin.hideIconInClearPuzzle = true;

  skin.defaultBackground = 'main';
  skin.projectileFrames = 10;
  skin.itemFrames = 10;

  skin.instructions2ImageSubstitutions = {
    "bb8": skin.assetUrl('instructions_bb8.png'),
    "hazard": skin.assetUrl('instructions_hazard.png'),
    "scrapmetal1": skin.assetUrl('goal1.png'),
    "scrapmetal2": skin.assetUrl('goal2.png')
  };

  // An empty transparent PNG, used to override the instructions avatar for
  // scripts in which we don't have permission to show Rey's face
  skin.blankAvatar = skin.assetUrl('blank.png');
  skin.avatarAllowedScripts = ['starwars', 'starwarsblocks'];

  // NOTE: all class names should be unique.  eventhandler naming won't work
  // if we name a projectile class 'left' for example.
  skin.ProjectileClassNames = [];

  skin.ItemClassNames = ['hazard'];

  skin.AutohandlerTouchItems = {};

  skin.AutohandlerGetAllItems = {};

  skin.specialItemProperties = {
    hazard: {
      frames: 13,
      animationFrameDuration: 6,
      width: 100,
      height: 100,
      scale: 1.3,
      renderOffset: { x: 0, y: -25 },
      activity: _constants.BEHAVIOR_WATCH_ACTOR,
      speed: _constants.SpriteSpeed.VERY_SLOW,
      isHazard: true
    }
  };

  // Spritesheet for animated goal.
  skin.goal1 = skin.assetUrl('goal1.png');
  skin.goal2 = skin.assetUrl('goal2.png');

  // Dimensions of the goal sprite.
  skin.goalSpriteWidth = 50;
  skin.goalSpriteHeight = 50;

  // How many frames in the animated goal spritesheet.
  skin.animatedGoalFrames = 1;
  skin.disableClipRectOnGoals = true;

  // Special effect applied to goal sprites
  skin.goalEffect = 'glow';

  // How long to show each frame of the optional goal animation.
  skin.timePerGoalAnimationFrame = 100;

  // For a smaller collision region on a goal.
  skin.goalCollisionRectWidth = 50;
  skin.goalCollisionRectHeight = 50;

  // Whether that goal should fade out when touched.  If true, then the
  // success image is never shown.
  skin.fadeOutGoal = true;
  skin.goalSuccess = null;

  // Draw a goal an an offset to its usual location, useful for oversize goal
  // images, such as a person standing taller than a single grid square whose
  // feet should still be planted in that grid square.
  skin.goalRenderOffsetX = 0;
  skin.goalRenderOffsetY = 0;

  // Dimensions of a rectangle in collidable center from which projectiles begin.
  skin.projectileSpriteWidth = 70;
  skin.projectileSpriteHeight = 70;

  // Dimensions of a rectangle in collidable center in which item collisions occur.
  skin.itemCollisionRectWidth = 50;
  skin.itemCollisionRectHeight = 50;

  // Dimensions of a rectangle in sprite center in which item collisions occur.
  skin.spriteCollisionRectWidth = 50;
  skin.spriteCollisionRectHeight = 50;

  // Offset & dimensions of a rectangle in collidable in which wall collisions occur.
  // For isometric-style rendering, this would normally be the feet.
  skin.wallCollisionRectOffsetX = 0;
  skin.wallCollisionRectOffsetY = 24;
  skin.wallCollisionRectWidth = 30;
  skin.wallCollisionRectHeight = 20;

  // When movement is grid aligned, sprite coordinates are the top-left corner
  // of the sprite, and match the top-left corner of the grid square in question.
  // When we draw the sprites bigger, this means the sprite's "feet" will usually
  // be too far to the right and below that square.  These offsets are a chance
  // to move the rendering of the sprite up and to the left, when negative, so
  // that the "feet" are planted at the bottom center of the grid square.
  skin.gridSpriteRenderOffsetX = -20;
  skin.gridSpriteRenderOffsetY = -40;

  skin.avatarList = ['bb-8'];
  skin.avatarList.forEach(function (name) {
    skin[name] = {
      sprite: skin.assetUrl('avatar_' + name + '.png'),
      walk: skin.assetUrl('walk_' + name + '.png'),
      dropdownThumbnail: skin.assetUrl('avatar_' + name + '_thumb.png'),
      frameCounts: {
        normal: 21,
        turns: 8,
        emotions: 0,
        walk: 19
      },
      drawScale: 2,
      animations: {
        turns: 8
      },
      animationFrameDuration: 3
    };
  });
  skin['bb-8'].movementAudio = [{ begin: 'move1', volume: 0.3 }, { begin: 'move2', volume: 0.3 }, { begin: 'move3', volume: 0.3 }, { begin: 'move4', volume: 0.3 }];

  skin.preventProjectileLoop = function (className) {
    return className === '';
  };

  skin.preventItemLoop = function (className) {
    return className === '';
  };

  // No win avatar for this skin.
  skin.winAvatar = null;

  skin.hazard = skin.assetUrl('hazard_idle.png');

  skin.main = {
    background: skin.assetUrl('background_background1.jpg'),
    tiles: skin.assetUrl('tiles_background1.png'),
    clouds: [skin.assetUrl('cloud_light.png'), skin.assetUrl('cloud_light2.png')]
  };

  // It's possible to enlarge the rendering of some wall tiles so that they
  // overlap each other a little.  Define a bounding rectangle for the source
  // tiles that get this treatment.

  skin.enlargeWallTiles = { minCol: 0, maxCol: 3, minRow: 3, maxRow: 5 };

  // Sounds.
  skin.sounds = ['move1', 'move2', 'move3', 'move4'];

  skin.soundChoices = [];

  skin.soundChoicesK1 = [];

  skin.musicMetadata = HOC2015_MUSIC_METADATA;

  // Normally the sound isn't played for the final goal, but this forces it
  // to be played.
  skin.playFinalGoalSound = true;

  // These are used by blocks.js to customize our dropdown blocks across skins
  // NOTE: map names must have double quotes inside single quotes
  // NOTE: first item must be RANDOM_VALUE
  skin.mapChoices = [];

  skin.backgroundChoices = [];

  // NOTE: background names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.backgroundChoicesK1 = [];

  skin.spriteChoices = [[_locale2.default.setDroidHidden(), _constants.HIDDEN_VALUE], [_locale2.default.setDroidRandom(), _constants.RANDOM_VALUE], [_locale2.default.setDroidBB8(), '"bb-8"']];

  skin.setSpritePrefix = _locale2.default.setDroid();

  skin.projectileChoices = [];

  // NOTE: item names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.itemChoices = [];
}

/**
 * Music tracks and associated metadata for both hoc2015 and hoc2015x tutorials.
 * Individual levels don't load all of these, only the subset they request.
 * @const {MusicTrackDefinition[]}
 */
var HOC2015_MUSIC_METADATA = [{ name: 'song1', volume: 0.5 }, { name: 'song2', volume: 0.5 }, { name: 'song3', volume: 0.5 }, { name: 'song4', volume: 0.4 }, { name: 'song5', volume: 0.4 }, { name: 'song6', volume: 0.5 }, { name: 'song7', volume: 0.4 }, { name: 'song8', volume: 0.4 }, { name: 'song9', volume: 0.4 }, { name: 'song10', volume: 0.5 }, { name: 'song11', volume: 0.45 }, { name: 'song12', volume: 0.4 }, { name: 'song13', volume: 0.4 }, { name: 'song14', volume: 0.5 }, { name: 'song15', volume: 0.55 }];

/***/ }),

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

/***/ 2711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LevelPlane = __webpack_require__(2712);
var LevelBlock = __webpack_require__(1271);
var FacingDirection = __webpack_require__(799);
var Position = __webpack_require__(838);
var Player = __webpack_require__(2714);
var Agent = __webpack_require__(2715);

// for blocks on the action plane, we need an actual "block" object, so we can model

module.exports = function () {
  function LevelModel(levelData, controller) {
    _classCallCheck(this, LevelModel);

    this.planeWidth = levelData.gridDimensions ? levelData.gridDimensions[0] : 10;
    this.planeHeight = levelData.gridDimensions ? levelData.gridDimensions[1] : 10;
    this.controller = controller;
    this.player = {};
    this.agent = {};
    this.usingAgent = false;

    this.initialLevelData = Object.create(levelData);

    this.reset();

    this.initialPlayerState = Object.create(this.player);
    this.initialAgentState = Object.create(this.agent);
  }

  LevelModel.prototype.planeArea = function planeArea() {
    return this.planeWidth * this.planeHeight;
  };

  LevelModel.prototype.inBounds = function inBounds(position) {
    var x = position[0];
    var y = position[1];
    return x >= 0 && x < this.planeWidth && y >= 0 && y < this.planeHeight;
  };

  LevelModel.prototype.reset = function reset() {
    var _this = this;

    this.groundPlane = new LevelPlane(this.initialLevelData.groundPlane, this.planeWidth, this.planeHeight, this, "groundPlane");
    this.groundDecorationPlane = new LevelPlane(this.initialLevelData.groundDecorationPlane, this.planeWidth, this.planeHeight, this, "decorationPlane");
    this.shadingPlane = [];
    this.actionPlane = new LevelPlane(this.initialLevelData.actionPlane, this.planeWidth, this.planeHeight, this, "actionPlane");

    this.actionPlane.powerRedstone();

    this.actionPlane.getAllPositions().forEach(function (position) {
      if (_this.actionPlane.getBlockAt(position).isRedstone) {
        _this.actionPlane.determineRedstoneSprite(position);
      }
      if (_this.actionPlane.getBlockAt(position).isRail) {
        _this.actionPlane.determineRailType(position);
      }
    });

    this.fluffPlane = new LevelPlane(this.initialLevelData.fluffPlane, this.planeWidth, this.planeHeight);
    this.fowPlane = [];
    this.isDaytime = this.initialLevelData.isDaytime === undefined || this.initialLevelData.isDaytime;

    var levelData = Object.create(this.initialLevelData);
    if (this.initialLevelData.usePlayer !== undefined) {
      this.usePlayer = this.initialLevelData.usePlayer;
    } else {
      this.usePlayer = true;
    }
    if (this.usePlayer) {
      var position = Position.fromArray(levelData.playerStartPosition);
      this.player = new Player(this.controller, 'Player', position.x, position.y, this.initialLevelData.playerName || 'Steve', !this.actionPlane.getBlockAt(position).getIsEmptyOrEntity(), levelData.playerStartDirection);
      this.controller.levelEntity.pushEntity(this.player);
      this.controller.player = this.player;

      if (levelData.useAgent) {
        this.spawnAgent(levelData);
      }
    }

    // If we have an agent but the level initialization data doesn't define one,
    // then we must have spawned one during the level run and so want to reset
    // back to not having one
    if (!levelData.useAgent && this.usingAgent) {
      this.destroyAgent();
    }

    this.computeShadingPlane();
    this.computeFowPlane();
  };

  /**
   * Creates the Agent entity
   *
   * @param {Object} levelData the initial level data object, specifying the
   *        Agent's default position and direction
   * @param {[Number, Number]} [positionOverride] optional position override
   * @param {Number} [directionOverride] optional direction override
   */


  LevelModel.prototype.spawnAgent = function spawnAgent(levelData, positionOverride, directionOverride) {
    this.usingAgent = true;

    var position = positionOverride !== undefined ? positionOverride : Position.fromArray(levelData.agentStartPosition);

    var direction = directionOverride !== undefined ? directionOverride : levelData.agentStartDirection;

    var name = "PlayerAgent";
    var key = "Agent";

    var startingBlock = this.actionPlane.getBlockAt(position);
    this.agent = new Agent(this.controller, name, position.x, position.y, key, !startingBlock.getIsEmptyOrEntity(), direction);
    this.controller.levelEntity.pushEntity(this.agent);
    this.controller.agent = this.agent;
  };

  /**
   * Destroys the agent entity; is the inverse of spawnAgent.
   */


  LevelModel.prototype.destroyAgent = function destroyAgent() {
    this.controller.agent = undefined;
    this.controller.levelEntity.destroyEntity(this.agent.identifier);
    this.agent = undefined;
    this.usingAgent = false;
  };

  LevelModel.prototype.yToIndex = function yToIndex(y) {
    return y * this.planeWidth;
  };

  LevelModel.prototype.isSolved = function isSolved() {
    return this.initialLevelData.verificationFunction(this);
  };

  LevelModel.prototype.isFailed = function isFailed() {
    if (this.initialLevelData.failureCheckFunction !== undefined) {
      return this.initialLevelData.failureCheckFunction(this);
    } else {
      return false;
    }
  };

  LevelModel.prototype.getHouseBottomRight = function getHouseBottomRight() {
    return Position.fromArray(this.initialLevelData.houseBottomRight);
  };

  // Verifications


  LevelModel.prototype.isPlayerNextTo = function isPlayerNextTo(blockType) {
    var _this2 = this;

    if (!this.usePlayer) {
      return false;
    }

    return Position.getOrthogonalPositions(this.player.position).some(function (position) {
      return _this2.inBounds(position) && (_this2.isBlockOfType(position, blockType) || _this2.isEntityOfType(position, blockType) || _this2.groundPlane.getBlockAt(position).blockType === blockType);
    });
  };

  LevelModel.prototype.isEntityNextTo = function isEntityNextTo(entityType, blockType) {
    var _this3 = this;

    var entityList = this.controller.levelEntity.getEntitiesOfType(entityType);

    return entityList.some(function (entity) {
      return Position.getOrthogonalPositions(entity.position).some(function (position) {
        return _this3.inBounds(position) && (_this3.isBlockOfType(position, blockType) || _this3.isEntityOfType(position, blockType) || _this3.groundPlane.getBlockAt(position).blockType === blockType);
      });
    });
  };

  LevelModel.prototype.isEntityOnBlocktype = function isEntityOnBlocktype(entityType, blockType) {
    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var entityList = this.controller.levelEntity.getEntitiesOfType(entityType);
    var resultCount = 0;
    for (var i = 0; i < entityList.length; i++) {
      var entity = entityList[i];
      if (this.isBlockOfType(entity.position, blockType) || this.groundPlane.getBlockAt(entity.position).blockType === blockType) {
        resultCount++;
      }
    }
    return resultCount >= count;
  };

  /**
   * @param {string} entityType
   * @param {Position|Number[]} position to check against as either a Position
   *        instance or an array of the form [x, y]. Array-style position is
   *        supported for compability with the verification API
   */


  LevelModel.prototype.isEntityAt = function isEntityAt(entityType, position) {
    if (Array.isArray(position)) {
      position = Position.fromArray(position);
    }

    var entityList = this.controller.levelEntity.getEntitiesOfType(entityType);
    for (var i = 0; i < entityList.length; i++) {
      var entity = entityList[i];
      if (Position.equals(entity.position, position)) {
        return true;
      }
    }
    return false;
  };

  LevelModel.prototype.isEntityTypeRunning = function isEntityTypeRunning(entityType) {
    var entityList = this.controller.levelEntity.getEntitiesOfType(entityType);
    for (var i = 0; i < entityList.length; i++) {
      var entity = entityList[i];
      var notStarted = !entity.queue.isStarted();
      var notFinished = !entity.queue.isFinished();
      if (notStarted && entity.queue.commandList_.length > 0 || notFinished) {
        return true;
      }
    }
    return false;
  };

  LevelModel.prototype.isEntityDied = function isEntityDied(entityType) {
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var deathCount = this.controller.levelEntity.entityDeathCount;
    if (deathCount.has(entityType)) {
      if (deathCount.get(entityType) >= count) {
        return true;
      }
    }
    return false;
  };

  LevelModel.prototype.getScore = function getScore() {
    return this.controller.score;
  };

  LevelModel.prototype.shouldRide = function shouldRide(direction) {
    var player = this.player;
    var frontPosition = this.getNextRailPosition(player, direction);
    var frontBlock = this.actionPlane.getBlockAt(frontPosition);
    return this.isNextRailValid(frontBlock, direction);
  };

  LevelModel.prototype.isNextRailValid = function isNextRailValid(block, direction) {
    if (!block) {
      return;
    }
    return FacingDirection.opposite(block.connectionA) === direction || FacingDirection.opposite(block.connectionB) === direction || block.connectionA === direction || block.connectionB === direction;
  };

  LevelModel.prototype.getNextRailPosition = function getNextRailPosition() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;
    var direction = arguments[1];

    var offset = Position.directionToOffsetPosition(direction) || new Position(0, 0);
    return Position.add(entity.position, offset);
  };

  LevelModel.prototype.getEntityCount = function getEntityCount(entityType) {
    var entityList = this.controller.levelEntity.getEntitiesOfType(entityType);
    return entityList.length;
  };

  LevelModel.prototype.getCommandExecutedCount = function getCommandExecutedCount(commandName, targetType) {
    return this.controller.getCommandCount(commandName, targetType, false);
  };

  LevelModel.prototype.getRepeatCommandExecutedCount = function getRepeatCommandExecutedCount(commandName, targetType) {
    return this.controller.getCommandCount(commandName, targetType, true);
  };

  LevelModel.prototype.getTurnRandomCount = function getTurnRandomCount() {
    return this.controller.turnRandomCount;
  };

  LevelModel.prototype.getInventoryAmount = function getInventoryAmount(inventoryType) {
    if (!this.usePlayer) {
      return 0;
    }
    if (inventoryType === "all" || inventoryType === "All") {
      var inventory = this.player.inventory;
      var count = 0;
      for (var key in inventory) {
        count += inventory[key];
      }
      return count;
    }
    return this.player.inventory[inventoryType];
  };

  LevelModel.prototype.getInventoryTypes = function getInventoryTypes() {
    if (!this.usePlayer) {
      return [];
    }
    return Object.keys(this.player.inventory);
  };

  LevelModel.prototype.countOfTypeOnMap = function countOfTypeOnMap(blockType) {
    var _this4 = this;

    var blocksOfType = this.actionPlane.getAllPositions().filter(function (position) {
      return _this4.actionPlane.getBlockAt(position).blockType === blockType;
    });

    return blocksOfType.length;
  };

  /**
   * @param {Position|Number[]} position to check against as either a Position
   *        instance or an array of the form [x, y]. Array-style position is
   *        supported for compability with the verification API
   */


  LevelModel.prototype.isPlayerAt = function isPlayerAt(position) {
    if (!this.usePlayer) {
      return false;
    }

    if (Array.isArray(position)) {
      position = Position.fromArray(position);
    }
    return Position.equals(this.player.position, position);
  };

  LevelModel.prototype.spritePositionToIndex = function spritePositionToIndex(offset, spritePosition) {
    var position = Position.subtract(spritePosition, offset);
    return new Position(position.x / 40, position.y / 40);
  };

  LevelModel.prototype.solutionMapMatchesResultMap = function solutionMapMatchesResultMap(solutionMap) {
    for (var i = 0; i < this.planeArea(); i++) {
      var solutionItemType = solutionMap[i];
      var position = this.actionPlane.indexToCoordinates(i);

      // "" on the solution map means we dont care what's at that spot
      if (solutionItemType !== "") {
        if (solutionItemType === "empty") {
          if (!this.actionPlane.getBlockAt(position).isEmpty) {
            return false;
          }
        } else if (solutionItemType === "any") {
          if (this.actionPlane.getBlockAt(position).isEmpty) {
            return false;
          }
        } else if (this.actionPlane.getBlockAt(position).blockType !== solutionItemType) {
          return false;
        }
      }
    }
    return true;
  };

  LevelModel.prototype.getTnt = function getTnt() {
    var _this5 = this;

    return this.actionPlane.getAllPositions().filter(function (position) {
      var block = _this5.actionPlane.getBlockAt(position);
      return block && block.blockType === "tnt";
    });
  };

  LevelModel.prototype.getMoveForwardPosition = function getMoveForwardPosition() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;

    return Position.forward(entity.position, entity.facing);
  };

  LevelModel.prototype.getMoveDirectionPosition = function getMoveDirectionPosition(entity, direction) {
    var absoluteDirection = entity.facing;
    for (var i = 0; i < direction; ++i) {
      absoluteDirection = FacingDirection.turn(absoluteDirection, 'right');
    }
    return Position.forward(entity.position, absoluteDirection);
  };

  LevelModel.prototype.isForwardBlockOfType = function isForwardBlockOfType(blockType) {
    var blockForwardPosition = this.getMoveForwardPosition();

    var actionIsEmpty = this.isBlockOfTypeOnPlane(blockForwardPosition, "empty", this.actionPlane);

    if (blockType === '' && actionIsEmpty) {
      return true;
    }

    return actionIsEmpty ? this.isBlockOfTypeOnPlane(blockForwardPosition, blockType, this.groundPlane) : this.isBlockOfTypeOnPlane(blockForwardPosition, blockType, this.actionPlane);
  };

  LevelModel.prototype.getForwardBlockType = function getForwardBlockType() {
    return this.getForwardBlock().blockType;
  };

  LevelModel.prototype.getForwardBlock = function getForwardBlock() {
    var blockForwardPosition = this.getMoveForwardPosition();
    return this.actionPlane.getBlockAt(blockForwardPosition);
  };

  LevelModel.prototype.isBlockOfType = function isBlockOfType(position, blockType) {
    return this.isBlockOfTypeOnPlane(position, blockType, this.actionPlane);
  };

  LevelModel.prototype.isEntityOfType = function isEntityOfType(position, type) {
    var entities = this.controller.levelEntity.getEntitiesOfType(type);
    return entities.some(function (entity) {
      return Position.equals(position, entity.position);
    });
  };

  LevelModel.prototype.isBlockOfTypeOnPlane = function isBlockOfTypeOnPlane(position, blockType, plane) {
    var result = false;

    if (this.inBounds(position)) {

      if (blockType === "empty") {
        result = plane.getBlockAt(position).isEmpty;
      } else if (blockType === "tree") {
        result = plane.getBlockAt(position).getIsTree();
      } else {
        result = blockType === plane.getBlockAt(position).blockType;
      }
    }

    return result;
  };

  LevelModel.prototype.isPlayerStandingInWater = function isPlayerStandingInWater() {
    return this.groundPlane.getBlockAt(this.player.position).blockType === "water";
  };

  LevelModel.prototype.isPlayerStandingInLava = function isPlayerStandingInLava() {
    return this.groundPlane.getBlockAt(this.player.position).blockType === "lava";
  };

  LevelModel.prototype.coordinatesToIndex = function coordinatesToIndex(coordinates) {
    return this.yToIndex(coordinates[1]) + coordinates[0];
  };

  LevelModel.prototype.checkPositionForTypeAndPush = function checkPositionForTypeAndPush(blockType, position, objectArray) {
    if (!blockType && this.actionPlane.getBlockAt(position).blockType !== "" || this.isBlockOfType(position, blockType)) {
      objectArray.push([true, position]);
      return true;
    } else {
      objectArray.push([false, null]);
      return false;
    }
  };

  LevelModel.prototype.houseGroundToFloorHelper = function houseGroundToFloorHelper(position, woolType, arrayCheck) {
    var checkActionBlock,
        posAbove,
        posBelow,
        posRight,
        posLeft,
        checkIndex = 0,
        array = arrayCheck;
    var index = this.yToIndex(position[2]) + position[1];

    if (index === 44) {
      index = 44;
    }

    posAbove = [0, position[1], position[2] + 1];
    posAbove[0] = this.yToIndex(posAbove[2]) + posAbove[1];

    posBelow = [0, position[1], position[2] - 1];
    posBelow[0] = this.yToIndex(posBelow[2]) + posBelow[1];

    posRight = [0, position[1] + 1, position[2]];
    posRight[0] = this.yToIndex(posRight[2]) + posRight[1];

    posLeft = [0, position[1] - 1, position[2]];
    posRight[0] = this.yToIndex(posRight[2]) + posRight[1];

    checkActionBlock = this.actionPlane.getBlockAt(this.actionPlane.indexToCoordinates(index));
    for (var i = 0; i < array.length; ++i) {
      if (array[i][0] === index) {
        checkIndex = -1;
        break;
      }
    }

    if (checkActionBlock.blockType !== "") {
      return {};
    } else if (array.length > 0 && checkIndex === -1) {
      return {};
    }
    array.push(position);
    array.concat(this.houseGroundToFloorHelper(posAbove, woolType, array));
    array.concat(this.houseGroundToFloorHelper(posBelow, woolType, array));
    array.concat(this.houseGroundToFloorHelper(posRight, woolType, array));
    array.concat(this.houseGroundToFloorHelper(posLeft, woolType, array));

    return array;
  };

  LevelModel.prototype.houseGroundToFloorBlocks = function houseGroundToFloorBlocks(startingPosition) {
    //checkCardinalDirections for actionblocks.
    //If no action block and square isn't the type we want.
    //Change it.
    var woolType = "wool_orange";

    //Place this block here
    //this.createBlock(this.groundPlane, startingPosition[0], startingPosition[1], woolType);
    var helperStartData = [0, startingPosition[0], startingPosition[1]];
    return this.houseGroundToFloorHelper(helperStartData, woolType, []);
  };

  LevelModel.prototype.getEntityAt = function getEntityAt(position) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.controller.levelEntity.entityMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var entity = _step.value;

        if (Position.equals(entity[1].position, position)) {
          return entity[1];
        }
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

    return undefined;
  };

  LevelModel.prototype.getAllBorderingPositionNotOfType = function getAllBorderingPositionNotOfType(position, blockType) {
    var surroundingBlocks = this.getAllBorderingPosition(position, null);
    for (var b = 1; b < surroundingBlocks.length; ++b) {
      if (surroundingBlocks[b][0] && this.actionPlane.getBlockAt(surroundingBlocks[b][1]).blockType === blockType) {
        surroundingBlocks[b][0] = false;
      }
    }
    return surroundingBlocks;
  };

  LevelModel.prototype.getAllBorderingPosition = function getAllBorderingPosition(position, blockType) {
    var _this6 = this;

    var allFoundObjects = [false];

    Position.getSurroundingPositions(position).forEach(function (surroundingPosition) {
      if (_this6.checkPositionForTypeAndPush(blockType, surroundingPosition, allFoundObjects)) {
        allFoundObjects[0] = true;
      }
    });

    return allFoundObjects;
  };

  LevelModel.prototype.canMoveForward = function canMoveForward() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;

    var position = this.getMoveForwardPosition(entity);
    if (!this.controller.followingPlayer() && (position.x > 9 || position.y > 9)) {
      return false;
    }
    return this.isPositionEmpty(position, entity);
  };

  LevelModel.prototype.canMoveBackward = function canMoveBackward() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;

    var position = this.getMoveDirectionPosition(entity, 2);
    return this.isPositionEmpty(position, entity);
  };

  LevelModel.prototype.isPositionEmpty = function isPositionEmpty(position) {
    var entity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.player;

    var result = [false];

    if (this.inBounds(position)) {
      if (!this.actionPlane.getBlockAt(position).isWalkable) {
        result.push("notWalkable");
      }
      if (!this.actionPlane.getBlockAt(position).isEmpty) {
        if (this.player.isOnBlock) {
          return [true];
        }
        result.push("notEmpty");
      }
      // Prevent walking into water/lava in levels where the player is
      // controlled by arrow keys. In levels where the player is controlled by
      // blocks, let them drown.
      if (this.groundPlane.getBlockAt(position).blockType === "water") {
        if (this.controller.getIsDirectPlayerControl()) {
          result.push("water");
        } else {
          return [true];
        }
      } else if (this.groundPlane.getBlockAt(position).blockType === "lava") {
        if (this.controller.getIsDirectPlayerControl()) {
          result.push("lava");
        } else {
          return [true];
        }
      }

      var frontEntity = this.getEntityAt(position);
      if (frontEntity !== undefined) {
        result.push("frontEntity");
        result.push(frontEntity);
      }
      var groundBlock = this.groundPlane.getBlockAt(position);
      var actionBlock = this.actionPlane.getBlockAt(position);
      result[0] = entity.hasPermissionToWalk(actionBlock, frontEntity, groundBlock);
    } else {
      result.push("outBound");
    }

    return result;
  };

  LevelModel.prototype.canMoveDirection = function canMoveDirection() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;
    var direction = arguments[1];

    // save current direction of the entity
    var currentDirection = entity.facing;
    this.turnToDirection(entity, direction);
    var result = this.canMoveForward(entity);
    // rerotate the entity to the saved direction
    this.turnToDirection(entity, currentDirection);
    return result;
  };

  LevelModel.prototype.canPlaceBlock = function canPlaceBlock(entity, blockAtPosition) {
    return entity.canPlaceBlock(blockAtPosition);
  };

  LevelModel.prototype.canPlaceBlockDirection = function canPlaceBlockDirection() {
    var blockType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var entity = arguments[1];
    var direction = arguments[2];

    if (entity.isOnBlock) {
      return false;
    }
    var plane = this.getPlaneToPlaceOn(this.getMoveDirectionPosition(entity, direction), entity, blockType);
    if (plane === this.groundPlane) {
      if (LevelBlock.notValidOnGroundPlane(blockType) && this.groundPlane.getBlockAt(this.getMoveDirectionPosition(entity, direction))) {
        return false;
      }
    }

    if (this.checkEntityConflict(this.getMoveDirectionPosition(entity, direction))) {
      return false;
    }
    return this.getPlaneToPlaceOn(this.getMoveDirectionPosition(entity, direction), entity, blockType) !== null;
  };

  LevelModel.prototype.checkEntityConflict = function checkEntityConflict(position) {
    var conflict = false;
    this.controller.levelEntity.entityMap.forEach(function (entity) {
      if (Position.equals(entity.position, position)) {
        conflict = true;
      }
    });
    return conflict;
  };

  LevelModel.prototype.canPlaceBlockForward = function canPlaceBlockForward() {
    var blockType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var entity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.player;

    return this.canPlaceBlockDirection(blockType, entity, 0);
  };

  LevelModel.prototype.getPlaneToPlaceOn = function getPlaneToPlaceOn(position, entity, blockType) {
    if (this.inBounds(position)) {
      var actionBlock = this.actionPlane.getBlockAt(position);
      if (entity === this.agent && actionBlock.isEmpty) {
        var groundBlock = this.groundPlane.getBlockAt(position);
        if (groundBlock.getIsLiquid()) {
          if (LevelBlock.getCanFall(blockType)) {
            return this.groundPlane;
          } else if (!LevelBlock.getIsPlaceableInLiquid(blockType)) {
            return null;
          }
        }
        return this.actionPlane;
      }
      if (actionBlock.isPlacable) {
        var _groundBlock = this.groundPlane.getBlockAt(position);
        if (_groundBlock.isPlacable) {
          return this.groundPlane;
        }
        return this.actionPlane;
      }
    }

    return null;
  };

  LevelModel.prototype.canDestroyBlockForward = function canDestroyBlockForward() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;

    var result = false;

    if (!entity.isOnBlock) {
      var blockForwardPosition = this.getMoveForwardPosition(entity);

      if (this.inBounds(blockForwardPosition)) {
        var block = this.actionPlane.getBlockAt(blockForwardPosition);
        result = !block.isEmpty && (block.isDestroyable || block.isUsable);
      }
    }

    return result;
  };

  LevelModel.prototype.moveForward = function moveForward() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;

    var blockForwardPosition = this.getMoveForwardPosition(entity);
    this.moveTo(blockForwardPosition, entity);
  };

  LevelModel.prototype.moveBackward = function moveBackward() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;

    var blockBackwardPosition = this.getMoveDirectionPosition(entity, 2);
    this.moveTo(blockBackwardPosition, entity);
  };

  LevelModel.prototype.moveTo = function moveTo(position) {
    var entity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.player;

    entity.setMovePosition(position);

    if (this.actionPlane.getBlockAt(position).isEmpty) {
      entity.isOnBlock = false;
    }
  };

  LevelModel.prototype.turnLeft = function turnLeft() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;

    entity.facing = FacingDirection.turn(entity.facing, 'left');
  };

  LevelModel.prototype.turnRight = function turnRight() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;

    entity.facing = FacingDirection.turn(entity.facing, 'right');
  };

  LevelModel.prototype.turnToDirection = function turnToDirection() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;
    var direction = arguments[1];

    entity.facing = direction;
  };

  LevelModel.prototype.moveDirection = function moveDirection() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;
    var direction = arguments[1];

    this.turnToDirection(entity, direction);
    this.moveForward();
  };

  LevelModel.prototype.placeBlock = function placeBlock(blockType) {
    var entity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.player;

    var position = entity.position;
    var placedBlock = null;

    var ground = this.groundPlane.getBlockAt(position);
    var currentBlock = this.actionPlane.getBlockAt(position);
    var block = new LevelBlock(blockType);
    var result = entity.canPlaceBlockOver(block, ground);
    if (result.canPlace && !currentBlock.getIsMiniblock()) {
      switch (result.plane) {
        case "actionPlane":
          placedBlock = this.actionPlane.setBlockAt(position, block);
          entity.walkableCheck(block);
          break;
        case "groundPlane":
          this.groundPlane.setBlockAt(position, block);
          break;
      }
    }

    return placedBlock;
  };

  LevelModel.prototype.placeBlockForward = function placeBlockForward(blockType, targetPlane) {
    var entity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.player;

    return this.placeBlockDirection(blockType, targetPlane, entity, 0);
  };

  LevelModel.prototype.placeBlockDirection = function placeBlockDirection(blockType, targetPlane, entity, direction) {
    var blockPosition = this.getMoveDirectionPosition(entity, direction);

    //for placing wetland for crops in free play
    if (blockType === "watering") {
      blockType = "farmlandWet";
      targetPlane = this.groundPlane;
    }
    return targetPlane.setBlockAt(blockPosition, new LevelBlock(blockType));
  };

  LevelModel.prototype.destroyBlock = function destroyBlock(position) {
    var block = null;

    if (this.inBounds(position)) {
      block = this.actionPlane.getBlockAt(position);
      if (block !== null) {
        block.position = position;

        if (block.isDestroyable) {
          this.actionPlane.setBlockAt(position, new LevelBlock(""));
        }
      }
    }
    return block;
  };

  LevelModel.prototype.destroyBlockForward = function destroyBlockForward(entity) {
    var block = null;

    var blockForwardPosition = this.getMoveForwardPosition(entity);

    if (this.inBounds(blockForwardPosition)) {
      block = this.actionPlane.getBlockAt(blockForwardPosition);
      if (block !== null) {

        if (block.isDestroyable) {
          this.actionPlane.setBlockAt(blockForwardPosition, new LevelBlock(""));
        }
      }
    }
    return block;
  };

  LevelModel.prototype.solveFOWTypeForMap = function solveFOWTypeForMap() {
    var emissives, blocksToSolve;

    emissives = this.getAllEmissives();
    blocksToSolve = this.findBlocksAffectedByEmissives(emissives);

    for (var block in blocksToSolve) {
      if (blocksToSolve.hasOwnProperty(block)) {
        this.solveFOWTypeFor(blocksToSolve[block], emissives);
      }
    }
  };

  LevelModel.prototype.solveFOWTypeFor = function solveFOWTypeFor(position, emissives) {
    var emissivesTouching,
        topLeftQuad = false,
        botLeftQuad = false,
        leftQuad = false,
        topRightQuad = false,
        botRightQuad = false,
        rightQuad = false,
        topQuad = false,
        botQuad = false,
        angle = 0,
        index = this.coordinatesToIndex(position),
        x,
        y;

    emissivesTouching = this.findEmissivesThatTouch(position, emissives);

    for (var torch in emissivesTouching) {
      var currentTorch = emissivesTouching[torch];
      y = position[1];
      x = position[0];

      angle = Math.atan2(currentTorch[1] - position[1], currentTorch[0] - position[0]);
      //invert
      angle = -angle;
      //Normalize to be between 0 and 2*pi
      if (angle < 0) {
        angle += 2 * Math.PI;
      }
      //convert to degrees for simplicity
      angle *= 360 / (2 * Math.PI);

      //top right
      if (!rightQuad && angle > 32.5 && angle <= 57.5) {
        topRightQuad = true;
        this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_InCorner_TopRight", precedence: 0 });
      } //top left
      if (!leftQuad && angle > 122.5 && angle <= 147.5) {
        topLeftQuad = true;
        this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_InCorner_TopLeft", precedence: 0 });
      } //bot left
      if (!leftQuad && angle > 212.5 && angle <= 237.5) {
        botLeftQuad = true;
        this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_InCorner_BottomLeft", precedence: 0 });
      } //botright
      if (!rightQuad && angle > 302.5 && angle <= 317.5) {
        botRightQuad = true;
        this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_InCorner_BottomRight", precedence: 0 });
      }
      //right
      if (angle >= 327.5 || angle <= 32.5) {
        rightQuad = true;
        this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Right", precedence: 1 });
      } //bot
      if (angle > 237.5 && angle <= 302.5) {
        botQuad = true;
        this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Bottom", precedence: 1 });
      }
      //left
      if (angle > 147.5 && angle <= 212.5) {
        leftQuad = true;
        this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Left", precedence: 1 });
      }
      //top
      if (angle > 57.5 && angle <= 122.5) {
        topQuad = true;
        this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Top", precedence: 1 });
      }
    }

    if (topLeftQuad && botLeftQuad) {
      this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Left", precedence: 1 });
    }
    if (topRightQuad && botRightQuad) {
      this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Right", precedence: 1 });
    }
    if (topLeftQuad && topRightQuad) {
      this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Top", precedence: 1 });
    }
    if (botRightQuad && botLeftQuad) {
      this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Bottom", precedence: 1 });
    }

    if (botRightQuad && topLeftQuad || botLeftQuad && topRightQuad || leftQuad && rightQuad || topQuad && botQuad || rightQuad && botQuad && topLeftQuad || botQuad && topRightQuad && topLeftQuad || topQuad && botRightQuad && botLeftQuad || leftQuad && topRightQuad && botRightQuad || leftQuad && botQuad && topRightQuad) {
      //fully lit
      this.fowPlane[index] = "";
    } else if (botQuad && leftQuad || botQuad && topLeftQuad || leftQuad && botRightQuad) {
      // darkend botleft corner
      this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Bottom_Left", precedence: 2 });
    } else if (botQuad && rightQuad || botQuad && topRightQuad || rightQuad && botLeftQuad) {
      // darkend botRight corner
      this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Bottom_Right", precedence: 2 });
    } else if (topQuad && rightQuad || topQuad && botRightQuad || rightQuad && topLeftQuad) {
      // darkend topRight corner
      this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Top_Right", precedence: 2 });
    } else if (topQuad && leftQuad || topQuad && botLeftQuad || leftQuad && topRightQuad) {
      // darkend topLeft corner
      this.pushIfHigherPrecedence(index, { x: x, y: y, type: "FogOfWar_Top_Left", precedence: 2 });
    }
  };

  LevelModel.prototype.pushIfHigherPrecedence = function pushIfHigherPrecedence(index, fowObject) {
    if (fowObject === "") {
      this.fowPlane[index] = "";
      return;
    }
    var existingItem = this.fowPlane[index];
    if (existingItem && existingItem.precedence > fowObject.precedence) {
      return;
    }
    this.fowPlane[index] = fowObject;
  };

  /**
   * @return {Position[]}
   */


  LevelModel.prototype.getAllEmissives = function getAllEmissives() {
    var emissives = [];
    for (var y = 0; y < this.planeHeight; ++y) {
      for (var x = 0; x < this.planeWidth; ++x) {
        var position = new Position(x, y);
        if (!this.actionPlane.getBlockAt(position).isEmpty && this.actionPlane.getBlockAt(position).isEmissive || this.groundPlane.getBlockAt(position).isEmissive && this.actionPlane.getBlockAt(position).isEmpty) {
          emissives.push(position);
        }
      }
    }
    return emissives;
  };

  /**
   * @param {Position[]}
   */


  LevelModel.prototype.findBlocksAffectedByEmissives = function findBlocksAffectedByEmissives(emissives) {
    var blocksTouchedByEmissives = {};
    //find emissives that are close enough to light us.
    for (var torch in emissives) {
      var currentTorch = emissives[torch];
      var x = currentTorch.x;
      var y = currentTorch.y;
      for (var yIndex = currentTorch.y - 2; yIndex <= y + 2; ++yIndex) {
        for (var xIndex = currentTorch.x - 2; xIndex <= x + 2; ++xIndex) {

          var position = new Position(xIndex, yIndex);

          //Ensure we're looking inside the map
          if (!this.inBounds(position)) {
            continue;
          }

          //Ignore the indexes directly around us.
          //Theyre taken care of on the FOW first pass
          if (yIndex >= y - 1 && yIndex <= y + 1 && xIndex >= x - 1 && xIndex <= x + 1) {
            continue;
          }

          //we want unique copies so we use a map.
          blocksTouchedByEmissives[yIndex.toString() + xIndex.toString()] = position;
        }
      }
    }

    return blocksTouchedByEmissives;
  };

  LevelModel.prototype.findEmissivesThatTouch = function findEmissivesThatTouch(position, emissives) {
    var emissivesThatTouch = [];
    var y = position.y;
    var x = position.x;

    //find emissives that are close enough to light us.
    for (var yIndex = y - 2; yIndex <= y + 2; ++yIndex) {
      for (var xIndex = x - 2; xIndex <= x + 2; ++xIndex) {

        var touchingPosition = new Position(xIndex, yIndex);

        //Ensure we're looking inside the map
        if (!this.inBounds(touchingPosition)) {
          continue;
        }

        //Ignore the indexes directly around us.
        if (yIndex >= y - 1 && yIndex <= y + 1 && xIndex >= x - 1 && xIndex <= x + 1) {
          continue;
        }

        for (var torch in emissives) {
          if (Position.equals(emissives[torch], touchingPosition)) {
            emissivesThatTouch.push(emissives[torch]);
          }
        }
      }
    }

    return emissivesThatTouch;
  };

  LevelModel.prototype.computeFowPlane = function computeFowPlane() {
    var x, y;

    this.fowPlane = [];
    if (!this.isDaytime) {
      // compute the fog of war for light emitting blocks
      for (y = 0; y < this.planeHeight; ++y) {
        for (x = 0; x < this.planeWidth; ++x) {
          this.fowPlane.push({ x: x, y: y, type: "FogOfWar_Center" });
        }
      }

      //second pass for partial lit squares
      this.solveFOWTypeForMap();

      for (y = 0; y < this.planeHeight; ++y) {
        for (x = 0; x < this.planeWidth; ++x) {
          var position = new Position(x, y);
          var groundBlock = this.groundPlane.getBlockAt(position);
          var actionBlock = this.actionPlane.getBlockAt(position);

          if (groundBlock.isEmissive && actionBlock.isEmpty || !actionBlock.isEmpty && actionBlock.isEmissive) {
            this.clearFowAround(x, y);
          }
        }
      }
    }
  };

  LevelModel.prototype.clearFowAround = function clearFowAround(x, y) {
    var ox, oy;

    for (oy = -1; oy <= 1; ++oy) {
      for (ox = -1; ox <= 1; ++ox) {
        this.clearFowAt(x + ox, y + oy);
      }
    }
  };

  LevelModel.prototype.clearFowAt = function clearFowAt(x, y) {
    if (x >= 0 && x < this.planeWidth && y >= 0 && y < this.planeHeight) {
      var blockIndex = this.yToIndex(y) + x;
      this.fowPlane[blockIndex] = "";
    }
  };

  LevelModel.prototype.clearFow = function clearFow() {
    for (var x = 0; x < this.planeWidth; x++) {
      for (var y = 0; y < this.planeHeight; y++) {
        var blockIndex = this.yToIndex(y) + x;
        this.fowPlane[blockIndex] = "";
      }
    }
  };

  LevelModel.prototype.computeShadingPlane = function computeShadingPlane() {
    this.shadingPlane = [];
    this.computeShading(this.actionPlane);
    this.computeShading(this.groundPlane);
  };

  LevelModel.prototype.occludedBy = function occludedBy(block) {
    return block && !block.getIsEmptyOrEntity() && !block.getIsLiquid();
  };

  LevelModel.prototype.computeShading = function computeShading(plane) {
    var x, y, index, hasRight;

    for (index = 0; index < this.planeArea(); ++index) {
      x = index % this.planeWidth;
      y = Math.floor(index / this.planeWidth);

      var position = new Position(x, y);

      hasRight = false;

      var block = plane.getBlockAt(position);
      var groundBlock = this.groundPlane.getBlockAt(position);
      if (block.isEmpty || block.isTransparent || block.getIsLiquid()) {
        var atlas = 'AO';
        if (block.blockType === 'lava') {
          atlas = 'LavaGlow';
        } else if (block.blockType === 'water') {
          atlas = 'WaterAO';
        }

        if (block === groundBlock || !groundBlock.getIsLiquid()) {
          // Edge of world AO.
          if (y === 0) {
            this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_Bottom' });
          }

          if (y === this.planeHeight - 1) {
            this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_Top' });
          }

          if (x === 0) {
            this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_Right' });
          }

          if (x === this.planeWidth - 1) {
            this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_Left' });
          }
        }

        // Neighbor AO.
        var surrounding = plane.getSurroundingBlocks(position);
        if (x < this.planeWidth - 1 && this.occludedBy(surrounding.east)) {
          // needs a left side AO shadow
          this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_Left' });
        }

        if (x > 0 && this.occludedBy(surrounding.west)) {
          // needs a right side AO shadow
          this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_Right' });

          // Lighting shadows.
          if (!block.getIsLiquid()) {
            this.shadingPlane.push({
              x: x,
              y: y,
              atlas: 'blockShadows',
              type: 'Shadow_Parts_Fade_base.png'
            });

            if (y > 0 && x > 0 && plane.getBlockAt(Position.north(Position.west(position))).getIsEmptyOrEntity()) {
              this.shadingPlane.push({
                x: x,
                y: y,
                atlas: 'blockShadows',
                type: 'Shadow_Parts_Fade_top.png'
              });
            }
          }

          hasRight = true;
        }

        if (y > 0 && this.occludedBy(surrounding.north)) {
          // needs a bottom side AO shadow
          this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_Bottom' });
        } else if (y > 0) {
          if (x < this.planeWidth - 1 && this.occludedBy(surrounding.northEast) && !this.occludedBy(surrounding.east)) {
            // needs a bottom left side AO shadow
            this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_BottomLeft' });
          }

          if (!hasRight && x > 0 && this.occludedBy(surrounding.northWest)) {
            // needs a bottom right side AO shadow
            this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_BottomRight' });
          }
        }

        if (y < this.planeHeight - 1 && this.occludedBy(surrounding.south)) {
          // needs a top side AO shadow
          this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_Top' });
        } else if (y < this.planeHeight - 1) {
          if (x < this.planeWidth - 1 && this.occludedBy(surrounding.southEast) && !this.occludedBy(surrounding.east)) {
            // needs a bottom left side AO shadow
            this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_TopLeft' });
          }

          if (!hasRight && x > 0 && this.occludedBy(surrounding.southWest)) {
            // needs a bottom right side AO shadow
            this.shadingPlane.push({ x: x, y: y, atlas: atlas, type: 'AOeffect_TopRight' });
          }
        }
      }
    }
  };

  return LevelModel;
}();

/***/ }),

/***/ 2712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LevelBlock = __webpack_require__(1271);

var _require = __webpack_require__(799),
    North = _require.North,
    South = _require.South,
    East = _require.East,
    West = _require.West,
    opposite = _require.opposite,
    turnDirection = _require.turnDirection,
    turn = _require.turn,
    directionToRelative = _require.directionToRelative;

var Position = __webpack_require__(838);
var AdjacencySet = __webpack_require__(2713);

var connectionName = function connectionName(connection) {
  switch (connection) {
    case North:
      return 'North';
    case South:
      return 'South';
    case East:
      return 'East';
    case West:
      return 'West';
    default:
      return '';
  }
};

var RedstoneCircuitConnections = ["", "Vertical", "Vertical", "Vertical", "Horizontal", "UpRight", "DownRight", "TRight", "Horizontal", "UpLeft", "DownLeft", "TLeft", "Horizontal", "TUp", "TDown", "Cross"];

var RailConnectionPriority = [[], [North], [South], [North, South], [East], [North, East], [South, East], [South, East], [West], [North, West], [South, West], [South, West], [East, West], [North, East], [South, East], [North, East]];

var PoweredRailConnectionPriority = [[], [North], [South], [North, South], [East], [East, West], [East, West], [East, West], [West], [East, West], [East, West], [East, West], [East, West], [East, West], [East, West], [East, West]];

module.exports = function () {
  function LevelPlane(planeData, width, height, levelModel, planeType) {
    _classCallCheck(this, LevelPlane);

    this._data = [];
    this.width = width;
    this.height = height;
    this.levelModel = levelModel;
    this.planeType = planeType;
    this.playPistonOn = false;
    this.playPistonOff = false;

    for (var index = 0; index < planeData.length; ++index) {
      var block = new LevelBlock(planeData[index]);
      this._data.push(block);
    }

    if (this.isActionPlane()) {
      this.redstoneAdjacencySet = this.createRedstoneAdjacencySet();
    }
  }

  /**
   * Determines whether the position in question is within the bounds of the plane.
   */


  LevelPlane.prototype.inBounds = function inBounds(position) {
    return position.x >= 0 && position.x < this.width && position.y >= 0 && position.y < this.height;
  };

  /**
   * Converts coordinates to a index
   */


  LevelPlane.prototype.coordinatesToIndex = function coordinatesToIndex(position) {
    return position.y * this.width + position.x;
  };

  /**
  * Determines the positional coordinates given a specific index.
  */


  LevelPlane.prototype.indexToCoordinates = function indexToCoordinates(index) {
    var y = Math.floor(index / this.width);
    var x = index - y * this.width;
    return new Position(x, y);
  };

  /**
   * Retrieve all the [x, y] coordinates within this plane
   *
   * @return {[Number, Number][]}
   */


  LevelPlane.prototype.getAllPositions = function getAllPositions() {
    var _this = this;

    return this._data.map(function (_, i) {
      return _this.indexToCoordinates(i);
    });
  };

  /**
   * Gets the block at the desired position within the plane, optionally with an
   * offset
   *
   * @param {Position} position - [x, y] coordinates of block
   *
   * @return {LevelBlock}
   */


  LevelPlane.prototype.getBlockAt = function getBlockAt(position) {
    position = Position.fromArray(position);
    if (this.inBounds(position)) {
      return this._data[this.coordinatesToIndex(position)];
    }
  };

  LevelPlane.prototype.isActionPlane = function isActionPlane() {
    return this.planeType === "actionPlane";
  };

  LevelPlane.prototype.isDecorationPlane = function isDecorationPlane() {
    return this.planeType === "decorationPlane";
  };

  LevelPlane.prototype.isGroundPlane = function isGroundPlane() {
    return this.planeType === "groundPlane";
  };

  /**
   * Changes the block at a desired position to the desired block.
   * Important note: This is the cornerstone of block placing/destroying.
   */


  LevelPlane.prototype.setBlockAt = function setBlockAt(position, block) {
    var _this2 = this;

    position = Position.fromArray(position);
    if (!this.inBounds(position)) {
      return;
    }
    this._data[this.coordinatesToIndex(position)] = block;

    if (this.isActionPlane()) {

      if (block.isRedstone || block.isRedstoneBattery) {
        this.redstoneAdjacencySet.add(position);
      } else {
        this.redstoneAdjacencySet.remove(position);
      }

      var redstoneToRefresh = [];
      if (block.needToRefreshRedstone()) {
        redstoneToRefresh = this.refreshRedstone();
      }

      this.updateWeakCharge(position, block);

      // if we've just removed a block, clean up any rail connections that were
      // formerly connected to this block
      if (block.isEmpty) {
        [North, South, East, West].forEach(function (direction) {
          // if the block in the given cardinal direction is a rail block with a
          // connection to this one, sever that connection
          var offset = Position.directionToOffsetPosition(direction);
          var adjacentBlock = _this2.getBlockAt(Position.add(position, offset));
          if (adjacentBlock && adjacentBlock.isRail) {
            if (adjacentBlock.connectionA === opposite(direction)) {
              adjacentBlock.connectionA = undefined;
            }
            if (adjacentBlock.connectionB === opposite(direction)) {
              adjacentBlock.connectionB = undefined;
            }
          }
        });
      }
      this.determineRailType(position, true);

      if (this.levelModel && this.levelModel.controller.levelView) {
        var northEast = Position.north(Position.east(position));
        var southWest = Position.south(Position.west(position));
        var positionAndTouching = Position.getOrthogonalPositions(position).concat([position, northEast, southWest]);
        this.levelModel.controller.levelView.refreshActionGroup(positionAndTouching);
        this.levelModel.controller.levelView.refreshActionGroup(redstoneToRefresh);
      }
    } else if (this.isGroundPlane()) {
      this.levelModel.controller.levelView.refreshGroundGroup();
    }

    return block;
  };

  /**
  * Gets the blocks within orthogonal positions around a given position.
  * Important note: This DOES to bounds checking. Will be undefined if OOB.
  */


  LevelPlane.prototype.getOrthogonalBlocks = function getOrthogonalBlocks(position) {
    return {
      north: { block: this.getBlockAt(Position.north(position)), relative: South },
      south: { block: this.getBlockAt(Position.south(position)), relative: North },
      east: { block: this.getBlockAt(Position.east(position)), relative: West },
      west: { block: this.getBlockAt(Position.west(position)), relative: East }
    };
  };

  /**
   * Gets the blocks surrounding a given position.
   * Important note: This DOES to bounds checking. Will be undefined if OOB.
   */


  LevelPlane.prototype.getSurroundingBlocks = function getSurroundingBlocks(position) {
    return {
      north: this.getBlockAt(Position.north(position)),
      northEast: this.getBlockAt(Position.north(Position.east(position))),
      east: this.getBlockAt(Position.east(position)),
      southEast: this.getBlockAt(Position.south(Position.east(position))),
      south: this.getBlockAt(Position.south(position)),
      southWest: this.getBlockAt(Position.south(Position.west(position))),
      west: this.getBlockAt(Position.west(position)),
      northWest: this.getBlockAt(Position.north(Position.west(position)))
    };
  };

  /**
  * Gets the mask of the orthogonal indices around the given position.
  */


  LevelPlane.prototype.getOrthogonalMask = function getOrthogonalMask(position, comparator) {
    var orthogonal = this.getOrthogonalBlocks(position);
    return (comparator(orthogonal.north) << 0) + (comparator(orthogonal.south) << 1) + (comparator(orthogonal.east) << 2) + (comparator(orthogonal.west) << 3);
  };

  LevelPlane.prototype.getMinecartTrack = function getMinecartTrack(position, facing) {
    var block = this.getBlockAt(position);

    if (!block.isRail) {
      return;
    }

    var speed = 300;

    if (block.connectionA === facing || block.connectionB === facing) {
      return ["", Position.forward(position, facing), facing, speed];
    }

    var incomming = opposite(facing);
    if (block.connectionA === incomming && block.connectionB !== undefined) {
      var rotation = turnDirection(facing, block.connectionB);
      var newFacing = turn(facing, rotation);
      return ["turn_" + rotation, position, newFacing, speed];
    }
    if (block.connectionB === incomming && block.connectionA !== undefined) {
      var _rotation = turnDirection(facing, block.connectionA);
      var _newFacing = turn(facing, _rotation);
      return ["turn_" + _rotation, position, _newFacing, speed];
    }
  };

  /**
   * Determine whether or not the blocks at the given positions are powered
   * rails that are connected to each other.
   *
   * @param {Posititon} left
   * @param {Posititon} right
   * @return {boolean}
   */


  LevelPlane.prototype.getPoweredRailsConnected = function getPoweredRailsConnected(left, right) {
    // return early if the positions are not even adjacent
    if (!Position.isAdjacent(left, right)) {
      return false;
    }

    var leftBlock = this.getBlockAt(left);
    var rightBlock = this.getBlockAt(right);

    // to be connected, both blocks must be powerable rails
    if (!(leftBlock.getIsPowerableRail() && rightBlock.getIsPowerableRail())) {
      return false;
    }

    // to be connected, both blocks must be oriented either North/South or
    // East/West
    if (leftBlock.getIsHorizontal() && rightBlock.getIsHorizontal()) {
      return Position.equals(Position.forward(left, East), right) || Position.equals(Position.forward(left, West), right);
    } else if (leftBlock.getIsVertical() && rightBlock.getIsVertical()) {
      return Position.equals(Position.forward(left, North), right) || Position.equals(Position.forward(left, South), right);
    } else {
      return false;
    }
  };

  /**
   * Propagate power to (and orient) all redstone wire in the level
   */


  LevelPlane.prototype.powerRedstone = function powerRedstone() {
    var _this3 = this;

    // redstone charge propagation
    this.redstoneAdjacencySet.sets.forEach(function (set) {
      var somePower = set.some(function (position) {
        return _this3.getBlockAt(position).isRedstoneBattery;
      });

      set.forEach(function (position) {
        _this3.getBlockAt(position).isPowered = somePower;
        _this3.determineRedstoneSprite(position);
      });
    });

    return this.redstoneAdjacencySet.flattenSets();
  };

  LevelPlane.prototype.createRedstoneAdjacencySet = function createRedstoneAdjacencySet() {
    var _this4 = this;

    var redstonePositions = this.getAllPositions().filter(function (position) {
      var block = _this4.getBlockAt(position);
      return block.isRedstone || block.isRedstoneBattery;
    });

    return new AdjacencySet(redstonePositions);
  };

  /**
   * Propagate power to (and orient) all powerable rails in the level.
   */


  LevelPlane.prototype.powerRails = function powerRails() {
    var _this5 = this;

    // find all rails that can be powered
    var powerableRails = this.getAllPositions().filter(function (position) {
      return _this5.getBlockAt(position).getIsPowerableRail();
    });

    // update powerable rails once to set their orientations
    powerableRails.forEach(function (position) {
      _this5.determineRailType(position);
    });

    // propagate power
    new AdjacencySet(powerableRails, this.getPoweredRailsConnected.bind(this)).sets.forEach(function (set) {
      // each set of connected rails should be entirely powered if any of them
      // is powered
      var somePower = set.some(function (position) {
        return _this5.getBlockAt(position).isPowered;
      });

      if (somePower) {
        set.forEach(function (position) {
          _this5.getBlockAt(position).isPowered = true;
        });
      }
    });

    // update all rails again to set their power state
    powerableRails.forEach(function (position) {
      _this5.determineRailType(position);
    });

    return powerableRails;
  };

  /**
   * Determines which rail object should be placed given the context of surrounding
   * indices.
   */


  LevelPlane.prototype.determineRailType = function determineRailType(position) {
    var _this6 = this;

    var updateTouching = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var block = this.getBlockAt(position);

    if (!block || !block.isRail) {
      return;
    }

    var powerState = '';
    var priority = RailConnectionPriority;
    if (block.getIsPowerableRail()) {
      powerState = block.isPowered ? 'Powered' : 'Unpowered';
      priority = PoweredRailConnectionPriority;
    }

    if (block.connectionA === undefined || block.connectionB === undefined) {
      var mask = this.getOrthogonalMask(position, function (_ref) {
        var block = _ref.block,
            relative = _ref.relative;

        if (!block || !block.isRail) {
          return false;
        }
        var a = block.connectionA === undefined || block.connectionA === relative;
        var b = block.connectionB === undefined || block.connectionB === relative;

        return a || b;
      });

      // Look up what type of connection to create, based on the surrounding tracks.

      var _priority$mask = _slicedToArray(priority[mask], 2);

      block.connectionA = _priority$mask[0];
      block.connectionB = _priority$mask[1];
    }

    var variant = connectionName(block.connectionA) + connectionName(block.connectionB);
    block.blockType = "rails" + powerState + variant;

    if (updateTouching) {
      Position.getOrthogonalPositions(position).forEach(function (orthogonalPosition) {
        _this6.determineRailType(orthogonalPosition);
      });
    }
  };

  /**
  * Determines which redstoneWire variant should be placed given the context of
  * surrounding indices and Powered state.
  */


  LevelPlane.prototype.determineRedstoneSprite = function determineRedstoneSprite(position) {
    var block = this.getBlockAt(position);

    if (!block || !block.isRedstone) {
      return;
    }

    var mask = this.getOrthogonalMask(position, function (_ref2) {
      var block = _ref2.block;

      return block && (block.isRedstone || block.isConnectedToRedstone);
    });

    var variant = RedstoneCircuitConnections[mask];
    var powerState = block.isPowered ? 'On' : '';
    block.blockType = "redstoneWire" + variant + powerState;

    return "redstoneWire" + variant;
  };

  /**
   * Updates the state and sprites of all redstoneWire on the plane.
   * Important note: This is what kicks off redstone charge propagation and is called
   * on place/destroy/run/load.... wherever updating charge is important.
   */


  LevelPlane.prototype.refreshRedstone = function refreshRedstone() {
    var _this7 = this;

    // power redstone
    var redstonePositions = this.powerRedstone();

    // power all blocks powered by redstone
    this.powerAllBlocks();

    // power rails powered by redstone
    var powerableRails = this.powerRails();
    var posToRefresh = redstonePositions.concat(powerableRails);

    // Once we're done updating redstoneWire states, check to see if doors and pistons should open/close.
    this.getAllPositions().forEach(function (position) {
      _this7.getIronDoors(position);
      _this7.getPistonState(position);
    });
    this.playPistonSound();
    return posToRefresh;
  };

  LevelPlane.prototype.playPistonSound = function playPistonSound() {
    if (!this.levelModel) {
      return;
    }
    if (this.playPistonOn) {
      this.levelModel.controller.audioPlayer.play("pistonOut");
    } else if (this.playPistonOff) {
      this.levelModel.controller.audioPlayer.play("pistonIn");
    }
    this.playPistonOn = false;
    this.playPistonOff = false;
  };

  LevelPlane.prototype.checkEntityConflict = function checkEntityConflict(position) {
    var _this8 = this;

    if (!this.levelModel) {
      return;
    }
    var captureReturn = false;
    this.levelModel.controller.levelEntity.entityMap.forEach(function (workingEntity) {
      if (_this8.levelModel.controller.positionEquivalence(position, workingEntity.position)) {
        captureReturn = true;
      }
    });
    return captureReturn;
  };

  /**
  * Evaluates what state Iron Doors on the map should be in.
  */


  LevelPlane.prototype.getIronDoors = function getIronDoors(position) {
    position = Position.fromArray(position);
    var block = this.getBlockAt(position);
    var index = this.coordinatesToIndex(position);

    if (block.blockType === "doorIron") {
      block.isPowered = this.powerCheck(position, true);
      if (block.isPowered && !block.isOpen) {
        block.isOpen = true;
        if (this.levelModel) {
          this.levelModel.controller.levelView.animateDoor(index, true);
        }
      } else if (!block.isPowered && block.isOpen) {
        if (this.levelModel) {
          if (!this.checkEntityConflict(position)) {
            block.isOpen = false;
            this.levelModel.controller.levelView.animateDoor(index, false);
          }
        }
      }
    }
  };

  /**
  * Evaluates what state Pistons on the map should be in.
  */


  LevelPlane.prototype.getPistonState = function getPistonState(position) {
    var block = this.getBlockAt(position);

    if (block.getIsPiston() && !block.getIsPistonArm()) {
      block.isPowered = this.powerCheck(position, true);
      if (block.isPowered) {
        this.activatePiston(position);
      } else if (!block.isPowered) {
        this.deactivatePiston(position);
      }
      if (this.levelModel) {
        this.levelModel.controller.updateFowPlane();
        this.levelModel.controller.updateShadingPlane();
      }
    }
  };

  /**
  * Find all iron doors in a level and evaluate if they need to be animated based on state
  */


  LevelPlane.prototype.findDoorToAnimate = function findDoorToAnimate(positionInQuestion) {
    var _this9 = this;

    this.getAllPositions().forEach(function (position) {
      var block = _this9.getBlockAt(position);
      var index = _this9.coordinatesToIndex(position);

      if (block.blockType === "doorIron" && position !== positionInQuestion) {
        block.isPowered = _this9.powerCheck(position, true);
        if (block.isPowered && !block.isOpen) {
          block.isOpen = true;
          if (_this9.levelModel) {
            _this9.levelModel.controller.levelView.animateDoor(index, true);
          }
        } else if (!block.isPowered && block.isOpen && !_this9.checkEntityConflict(position)) {
          block.isOpen = false;
          if (_this9.levelModel) {
            _this9.levelModel.controller.levelView.animateDoor(index, false);
          }
        }
      }
    });
  };

  /**
   * Activates a piston at a given position to push blocks away from it
   * depending on type.
   */


  LevelPlane.prototype.activatePiston = function activatePiston(position) {
    var block = this.getBlockAt(position);

    var pistonType = block.blockType;
    if (block.getIsStickyPiston()) {
      pistonType = pistonType.substring(0, pistonType.length - 6);
    }
    var checkOn = pistonType.substring(pistonType.length - 2, pistonType.length);
    if (checkOn === "On") {
      pistonType = pistonType.substring(0, pistonType.length - 2);
    }

    var direction = block.getPistonDirection();
    var armType = "pistonArm" + directionToRelative(direction);

    var offset = Position.directionToOffsetPosition(direction);
    var pos = Position.forward(position, direction);
    var workingNeighbor = this.getBlockAt(pos);

    if (this.pistonArmBlocked(position, offset)) {
      return;
    }
    // Break an object right in front of the piston.
    if (workingNeighbor.isDestroyableUponPush()) {
      this.setBlockAt(pos, new LevelBlock(""));
      this.playPistonOn = true;
      if (this.levelModel) {
        this.levelModel.controller.levelView.playExplosionAnimation(pos, 2, pos, workingNeighbor.blockType, null, null, this.player);
      }
    } else if (workingNeighbor.blockType !== "" && !workingNeighbor.getIsPistonArm()) {
      // We've actually got something to push.
      var blocksPositions = this.getBlocksToPush(pos, offset);
      var concat = "On";
      if (block.getIsStickyPiston()) {
        concat += "Sticky";
      }
      var onPiston = new LevelBlock(pistonType += concat);
      this.setBlockAt(position, onPiston);
      this.pushBlocks(blocksPositions, offset);
      this.playPistonOn = true;
    } else if (workingNeighbor.blockType === "") {
      // Nothing to push, so just make the arm.
      var _concat = "On";
      if (block.getIsStickyPiston()) {
        _concat += "Sticky";
        armType += "Sticky";
      }
      var armBlock = new LevelBlock(armType);
      var pistonBlock = new LevelBlock(pistonType += _concat);
      this.setBlockAt(pos, armBlock);
      this.setBlockAt(position, pistonBlock);
      this.playPistonOn = true;
    }
  };

  LevelPlane.prototype.pistonArmBlocked = function pistonArmBlocked(position, offset) {
    var workingPosition = Position.add(position, offset);
    return this.checkEntityConflict(workingPosition);
  };

  /**
   * Deactivates a piston at a given position by determining what the arm
   * orientation is.
   */


  LevelPlane.prototype.deactivatePiston = function deactivatePiston(position) {
    var block = this.getBlockAt(position);
    if (!block.getIsPiston() || !block.blockType.match("On")) {
      return;
    }

    var direction = block.getPistonDirection();
    if (direction !== undefined) {
      this.retractArm(Position.forward(position, direction), position);
    }
  };

  /**
  * Does the actual retraction of the arm of a piston.
  */


  LevelPlane.prototype.retractArm = function retractArm(armPosition, pistonPosition) {
    var emptyBlock = new LevelBlock("");
    var pistonType = this.getBlockAt(pistonPosition);
    var concat = "";
    var blockType = "";
    if (this.getBlockAt(pistonPosition).getIsStickyPiston()) {
      concat = "Sticky";
      blockType = pistonType.blockType.substring(0, pistonType.blockType.length - 8);
    } else {
      blockType = pistonType.blockType.substring(0, pistonType.blockType.length - 2);
    }
    var newPistonType = blockType + concat;
    var offPiston = new LevelBlock(newPistonType);
    if (this.getBlockAt(armPosition).getIsPistonArm()) {
      if (this.getBlockAt(pistonPosition).getIsStickyPiston()) {
        var offset = Position.directionToOffsetPosition(pistonType.getPistonDirection());
        var stuckBlockPosition = Position.add(armPosition, offset);
        if (this.inBounds(stuckBlockPosition) && this.getBlockAt(stuckBlockPosition).isStickable) {
          this.setBlockAt(armPosition, this.getBlockAt(stuckBlockPosition));
          this.setBlockAt(stuckBlockPosition, emptyBlock);
        } else {
          this.setBlockAt(armPosition, emptyBlock);
          this.playPistonOff = true;
        }
      } else {
        this.setBlockAt(armPosition, emptyBlock);
        this.playPistonOff = true;
      }
    }
    this.setBlockAt(pistonPosition, offPiston);
  };

  /**
   * Goes through a list of blocks and shuffles them over 1 index in a given direction.
   *
   * @param {Position[]} blocksPositions
   * @param {Position} [offset=[0, 0]]
   */


  LevelPlane.prototype.pushBlocks = function pushBlocks(blocksPositions) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];

    var pistonType = "";
    var redo = false;
    if (offset[0] === 1) {
      pistonType = "pistonArmRight";
    } else if (offset[0] === -1) {
      pistonType = "pistonArmLeft";
    } else {
      if (offset[1] === 1) {
        pistonType = "pistonArmDown";
      } else if (offset[1] === -1) {
        pistonType = "pistonArmUp";
      } else {
        // There is no offset, so we're not putting down anything.
      }
    }
    var armBlock = new LevelBlock(pistonType);
    for (var i = blocksPositions.length - 1; i >= 0; --i) {
      var destination = Position.add(blocksPositions[i], Position.fromArray(offset));
      var block = this.getBlockAt(blocksPositions[i]);
      if (this.inBounds(destination) && this.getBlockAt(destination).isDestroyableUponPush()) {
        if (this.levelModel) {
          this.levelModel.controller.levelView.playExplosionAnimation(destination, 2, destination, block.blockType, null, null, this.player);
        }
        redo = true;
      }
      this.setBlockAt(destination, this.getBlockAt(blocksPositions[i]));
      if (i === 0) {
        this.setBlockAt(blocksPositions[i], armBlock);
      }
    }
    if (redo) {
      this.refreshRedstone();
    }
  };

  /**
   * Returns a list of blocks in a given direction to be shuffled over later.
   * @param {Position} position
   * @param {Position} [offset=[0, 0]]
   */


  LevelPlane.prototype.getBlocksToPush = function getBlocksToPush(position) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];

    var pushingBlocks = [];
    var workingPosition = position;
    while (this.inBounds(workingPosition) && this.getBlockAt(workingPosition).getIsPushable()) {
      pushingBlocks.push(workingPosition);
      workingPosition = Position.add(workingPosition, Position.fromArray(offset));
    }
    return pushingBlocks;
  };

  /**
  * Checking power state for objects that are powered by redstone.
  */


  LevelPlane.prototype.powerCheck = function powerCheck(position) {
    var _this10 = this;

    var canReadCharge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return Position.getOrthogonalPositions(position).some(function (orthogonalPosition) {
      var block = _this10.getBlockAt(orthogonalPosition);
      if (block) {
        if (!block.isWeaklyPowerable) {
          return false;
        }
        if (_this10.getBlockAt(position).getIsPiston()) {
          var piston = _this10.getBlockAt(position);
          var ignoreThisSide = Position.directionToOffsetPosition(piston.getPistonDirection()) || new Position(0, 0);
          var posCheck = Position.add(position, ignoreThisSide);
          if (Position.equals(orthogonalPosition, posCheck)) {
            return false;
          }
        }
        if (canReadCharge) {
          return block.isPowered || block.isRedstoneBattery;
        }
        return block.isRedstone && block.isPowered || block.isRedstoneBattery;
      }
    });
  };

  LevelPlane.prototype.powerAllBlocks = function powerAllBlocks() {
    var _this11 = this;

    this.getAllPositions().forEach(function (position) {
      var block = _this11.getBlockAt(position);
      if (block.blockType !== "" && block.canHoldCharge()) {
        block.isPowered = _this11.powerCheck(position);
      }
    });
  };

  LevelPlane.prototype.updateWeakCharge = function updateWeakCharge(position, block) {
    var _this12 = this;

    if (block.isWeaklyPowerable) {
      block.isPowered = this.powerCheck(position);
    }
    if (block.isPowered) {
      Position.getOrthogonalPositions(position).forEach(function (workingPos) {
        if (_this12.inBounds(workingPos)) {
          _this12.getIronDoors(workingPos);
          _this12.getPistonState(workingPos);
        }
      });
    }
  };

  return LevelPlane;
}();

/***/ }),

/***/ 2713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = __webpack_require__(838);

/**
 * Group an array of positions into sets of connected positions. Default
 * definition of "connected" is "orthogonally adjacent", but that can be
 * overridden.
 */
module.exports = function () {
  /**
   * @param {Position[]} positions
   * @param {Function} [comparisonFunction = Position.isAdjacent]
   */
  function AdjacencySet(positions, comparisonFunction) {
    var _this = this;

    _classCallCheck(this, AdjacencySet);

    this.comparisonFunction = comparisonFunction || Position.isAdjacent;
    this.sets = [];
    if (positions) {
      positions.forEach(function (position) {
        _this.add(position);
      });
    }
  }

  /**
   * Flatten the set of sets down to a single array of Positions
   *
   * @return {Position[]}
   */


  AdjacencySet.prototype.flattenSets = function flattenSets() {
    return this.sets.reduce(function (acc, cur) {
      return acc.concat(cur);
    }, []);
  };

  /**
   * Add a position to our adjacency sets if it doesn't already exist, updating
   * existing sets as necessary
   *
   * NOTE that this operation is O(N), not the O(1) that you would expect from
   * a full disjoint-set implementation.
   *
   * @param {Position} position
   * @return {boolean} whether or not the specified position was newly added
   */


  AdjacencySet.prototype.add = function add(position) {
    var _this2 = this;

    if (this.find(position)) {
      return false;
    }

    var adjacent = this.sets.filter(function (set) {
      return set.some(function (other) {
        return _this2.comparisonFunction(position, other);
      });
    });
    if (adjacent.length === 1) {
      // if this position is adjacent to exactly one set, simply add it to the
      // set
      adjacent[0].push(position);
    } else if (adjacent.length > 1) {
      (function () {
        // if this position unites several new sets into one mutual adjacency,
        // combine them all and add this position to the new set
        var newSet = [];
        adjacent.forEach(function (s) {
          _this2.sets.splice(_this2.sets.indexOf(s), 1);
          newSet.push.apply(newSet, _toConsumableArray(s));
        });
        newSet.push(position);
        _this2.sets.push(newSet);
      })();
    } else {
      // if this position is all by itself, let it be the initial entry in a new
      // set
      this.sets.push([position]);
    }

    return true;
  };

  /**
   * Find the set containing a specified position, if it exists
   *
   * @return {(Postion[]|undefined)}
   */


  AdjacencySet.prototype.find = function find(position) {
    return this.sets.find(function (set) {
      return set.some(function (other) {
        return Position.equals(position, other);
      });
    });
  };

  /**
   * Remove a position from our adjacency sets if it exists, updating existing
   * sets as necessary.
   *
   * NOTE that this operation is O(N), not the O(1) that you would expect from
   * a full disjoint-set implementation.
   *
   * @param {Position} position
   * @return {boolean} whether or not the specified position existed in the sets
   */


  AdjacencySet.prototype.remove = function remove(position) {
    var containingSet = this.find(position);

    if (!containingSet) {
      return false;
    }

    this.sets.splice(this.sets.indexOf(containingSet), 1);
    var newSet = containingSet.filter(function (other) {
      return !Position.equals(position, other);
    });
    if (newSet.length) {
      var _sets;

      var newSets = new AdjacencySet(newSet, this.comparisonFunction).sets;
      (_sets = this.sets).push.apply(_sets, _toConsumableArray(newSets));
    }
    return true;
  };

  return AdjacencySet;
}();

/***/ }),

/***/ 2714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseEntity = __webpack_require__(794);
var CallbackCommand = __webpack_require__(1016);
var Position = __webpack_require__(838);

module.exports = function (_BaseEntity) {
  _inherits(Player, _BaseEntity);

  function Player(controller, type, x, y, name, isOnBlock, facing) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, _BaseEntity.call(this, controller, type, 'Player', x, y, facing));

    _this.offset = [-18, -32];
    _this.name = name;
    _this.isOnBlock = isOnBlock;
    _this.inventory = {};
    _this.movementState = -1;
    _this.onTracks = false;
    _this.getOffTrack = false;

    if (controller.getIsDirectPlayerControl()) {
      _this.moveDelayMin = 0;
      _this.moveDelayMax = 0;
    } else {
      _this.moveDelayMin = 30;
      _this.moveDelayMax = 200;
    }
    return _this;
  }

  /**
   * @override
   */


  Player.prototype.canPlaceBlockOver = function canPlaceBlockOver(toPlaceBlock, onTopOfBlock) {
    var result = { canPlace: false, plane: '' };
    if (onTopOfBlock.getIsLiquid()) {
      result.canPlace = true;
      result.plane = "groundPlane";
    } else {
      result.canPlace = true;
      result.plane = "actionPlane";
    }
    if (toPlaceBlock.blockType === "cropWheat") {
      result.canPlace = onTopOfBlock.blockType === "farmlandWet";
    }
    return result;
  };

  /**
   * @override
   */


  Player.prototype.canPlaceBlock = function canPlaceBlock(block) {
    return block.isEmpty;
  };

  /**
   * @override
   */


  Player.prototype.shouldUpdateSelectionIndicator = function shouldUpdateSelectionIndicator() {
    return true;
  };

  /**
   * @override
   */


  Player.prototype.setMovePosition = function setMovePosition(position) {
    _BaseEntity.prototype.setMovePosition.call(this, position);
    this.collectItems(this.position);
  };

  /**
   * player walkable stuff
   */


  Player.prototype.walkableCheck = function walkableCheck(block) {
    this.isOnBlock = !block.isWalkable;
  };

  // "Events" levels allow the player to move around with the arrow keys, and
  // perform actions with the space bar.


  Player.prototype.updateMovement = function updateMovement() {
    var _this2 = this;

    if (!this.controller.attemptRunning || !this.controller.getIsDirectPlayerControl()) {
      return;
    }

    if (this.onTracks) {
      this.collectItems(this.position);
    }

    if (this.canUpdateMovement()) {
      // Arrow key
      if (this.movementState >= 0) {
        (function () {
          var direction = _this2.movementState;
          var callbackCommand = new CallbackCommand(_this2, function () {}, function () {
            _this2.lastMovement = +new Date();
            _this2.controller.moveDirection(callbackCommand, direction);
          }, _this2.identifier);
          _this2.addCommand(callbackCommand);
          // Spacebar
        })();
      } else {
        (function () {
          var callbackCommand = new CallbackCommand(_this2, function () {}, function () {
            _this2.lastMovement = +new Date();
            _this2.controller.use(callbackCommand);
          }, _this2.identifier);
          _this2.addCommand(callbackCommand);
        })();
      }
    }
  };

  Player.prototype.canUpdateMovement = function canUpdateMovement() {
    var queueIsEmpty = this.queue.isFinished() || !this.queue.isStarted();
    var isMoving = this.movementState !== -1;
    var queueHasOne = this.queue.currentCommand && this.queue.getLength() === 0;
    var timeEllapsed = +new Date() - this.lastMovement;
    var movementAlmostFinished = timeEllapsed > 300;
    if (isMoving && timeEllapsed > 800) {
      // Delay of 800 ms so that the first move onto a rail completes the moveDirection command.
      // Without the delay, the moveDirection conflicts with the onRails check and cancels rail riding as soon as it starts.
      this.getOffTrack = true;
    }
    return !this.onTracks && (queueIsEmpty || queueHasOne && movementAlmostFinished) && isMoving;
  };

  Player.prototype.doMoveForward = function doMoveForward(commandQueueItem) {
    var _this3 = this;

    var player = this,
        groundType,
        jumpOff,
        levelModel = this.controller.levelModel,
        levelView = this.controller.levelView;
    var wasOnBlock = player.isOnBlock;
    var prevPosition = this.position;
    // update position
    levelModel.moveForward();
    // TODO: check for Lava, Creeper, water => play approp animation & call commandQueueItem.failed()

    jumpOff = wasOnBlock && wasOnBlock !== player.isOnBlock;
    if (player.isOnBlock || jumpOff) {
      groundType = levelModel.actionPlane.getBlockAt(player.position).blockType;
    } else {
      groundType = levelModel.groundPlane.getBlockAt(player.position).blockType;
    }

    levelView.playMoveForwardAnimation(player, prevPosition, player.facing, jumpOff, player.isOnBlock, groundType, function () {
      levelView.playIdleAnimation(player.position, player.facing, player.isOnBlock);

      if (levelModel.isPlayerStandingInWater()) {
        levelView.playDrownFailureAnimation(player.position, player.facing, player.isOnBlock, function () {
          _this3.controller.handleEndState(false);
        });
      } else if (levelModel.isPlayerStandingInLava()) {
        levelView.playBurnInLavaAnimation(player.position, player.facing, player.isOnBlock, function () {
          _this3.controller.handleEndState(false);
        });
      } else {
        _this3.controller.delayPlayerMoveBy(_this3.moveDelayMin, _this3.moveDelayMax, function () {
          commandQueueItem.succeeded();
        });
      }
    });

    this.updateHidingTree();
    this.updateHidingBlock(prevPosition);
  };

  Player.prototype.doMoveBackward = function doMoveBackward(commandQueueItem) {
    var _this4 = this;

    var player = this,
        groundType,
        jumpOff,
        levelModel = this.controller.levelModel,
        levelView = this.controller.levelView;
    var wasOnBlock = player.isOnBlock;
    var prevPosition = this.position;
    // update position
    levelModel.moveBackward(this);
    // TODO: check for Lava, Creeper, water => play approp animation & call commandQueueItem.failed()

    jumpOff = wasOnBlock && wasOnBlock !== player.isOnBlock;
    if (player.isOnBlock || jumpOff) {
      groundType = levelModel.actionPlane.getBlockAt(player.position).blockType;
    } else {
      groundType = levelModel.actionPlane.getBlockAt(player.position).blockType;
    }

    levelView.playMoveBackwardAnimation(player, prevPosition, player.facing, jumpOff, player.isOnBlock, groundType, function () {
      levelView.playIdleAnimation(player.position, player.facing, player.isOnBlock, player);

      if (levelModel.isPlayerStandingInWater()) {
        levelView.playDrownFailureAnimation(player.position, player.facing, player.isOnBlock, function () {
          _this4.controller.handleEndState(false);
        });
      } else if (levelModel.isPlayerStandingInLava()) {
        levelView.playBurnInLavaAnimation(player.position, player.facing, player.isOnBlock, function () {
          _this4.controller.handleEndState(false);
        });
      } else {
        _this4.controller.delayPlayerMoveBy(_this4.moveDelayMin, _this4.moveDelayMax, function () {
          commandQueueItem.succeeded();
        });
      }
    });

    this.updateHidingTree();
    this.updateHidingBlock(prevPosition);
  };

  Player.prototype.bump = function bump(commandQueueItem) {
    var _this5 = this;

    var levelView = this.controller.levelView,
        levelModel = this.controller.levelModel;
    levelView.playBumpAnimation(this.position, this.facing, false);
    var frontEntity = this.controller.levelEntity.getEntityAt(levelModel.getMoveForwardPosition(this));
    if (frontEntity !== null) {
      var isFriendlyEntity = this.controller.levelEntity.isFriendlyEntity(frontEntity.type);
      // push frienly entity 1 block
      if (isFriendlyEntity) {
        var moveAwayCommand;

        (function () {
          var pushDirection = _this5.facing;
          moveAwayCommand = new CallbackCommand(_this5, function () {}, function () {
            frontEntity.pushBack(moveAwayCommand, pushDirection, 250);
          }, frontEntity.identifier);

          frontEntity.queue.startPushHighPriorityCommands();
          frontEntity.addCommand(moveAwayCommand);
          frontEntity.queue.endPushHighPriorityCommands();
        })();
      }
    }
    this.controller.delayPlayerMoveBy(200, 400, function () {
      commandQueueItem.succeeded();
    });
  };

  Player.prototype.collectItems = function collectItems() {
    var targetPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.position;

    // collectible check
    var collectibles = this.controller.levelView.collectibleItems;
    for (var i = 0; i < collectibles.length; i++) {
      var _collectibles$i = _slicedToArray(collectibles[i], 4),
          sprite = _collectibles$i[0],
          offset = _collectibles$i[1],
          blockType = _collectibles$i[2],
          collectibleDistance = _collectibles$i[3];
      // already collected item


      if (sprite === null) {
        collectibles.splice(i, 1);
      } else {
        var collectiblePosition = this.controller.levelModel.spritePositionToIndex(offset, new Position(sprite.x, sprite.y));
        if (Position.absoluteDistanceSquare(targetPosition, collectiblePosition) < collectibleDistance) {
          this.controller.levelView.playItemAcquireAnimation(this.position, this.facing, sprite, function () {}, blockType);
          collectibles.splice(i, 1);
        }
      }
    }
  };

  Player.prototype.takeDamage = function takeDamage(callbackCommand) {
    var _this6 = this;

    var facingName = this.controller.levelView.getDirectionName(this.facing);
    this.healthPoint--;
    // still alive
    if (this.healthPoint > 0) {
      this.controller.levelView.playScaledSpeed(this.sprite.animations, "hurt" + facingName);
      callbackCommand.succeeded();
      // report failure since player died
    } else {
      this.sprite.animations.stop(null, true);
      this.controller.levelView.playFailureAnimation(this.position, this.facing, this.isOnBlock, function () {
        callbackCommand.failed();
        _this6.controller.handleEndState(false);
      });
    }
  };

  Player.prototype.canTriggerPressurePlates = function canTriggerPressurePlates() {
    return true;
  };

  return Player;
}(BaseEntity);

/***/ }),

/***/ 2715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseEntity = __webpack_require__(794);
var CallbackCommand = __webpack_require__(1016);

module.exports = function (_BaseEntity) {
  _inherits(Agent, _BaseEntity);

  function Agent(controller, type, x, y, name, isOnBlock, facing) {
    _classCallCheck(this, Agent);

    var _this = _possibleConstructorReturn(this, _BaseEntity.call(this, controller, type, 'PlayerAgent', x, y, facing));

    _this.offset = [-16, -15];
    _this.name = name;
    _this.isOnBlock = isOnBlock;
    _this.inventory = {};
    _this.movementState = -1;

    _this.moveDelayMin = 20;
    _this.moveDelayMax = 150;
    return _this;
  }

  /**
   * @override
   */


  Agent.prototype.canPlaceBlockOver = function canPlaceBlockOver(toPlaceBlock, onTopOfBlock) {
    var result = { canPlace: false, plane: '' };
    if (onTopOfBlock.getIsLiquid()) {
      if (toPlaceBlock.getIsPlaceableInLiquid()) {
        result.canPlace = true;
        result.plane = "groundPlane";
      }
    } else {
      if (toPlaceBlock.isWalkable) {
        result.canPlace = true;
        result.plane = "actionPlane";
      }
    }
    return result;
  };

  /**
   * @override
   */


  Agent.prototype.canPlaceBlock = function canPlaceBlock(block) {
    return block.isEmpty;
  };

  /**
   * @override
   */


  Agent.prototype.canMoveThrough = function canMoveThrough() {
    return true;
  };

  /**
   * Give agent a higher-than-normal offset so that it will always render on top
   * of the player when on the same cell.
   * @override
   */


  Agent.prototype.getSortOrderOffset = function getSortOrderOffset() {
    return _BaseEntity.prototype.getSortOrderOffset.call(this) - 1;
  };

  // "Events" levels allow the player to move around with the arrow keys, and
  // perform actions with the space bar.


  Agent.prototype.updateMovement = function updateMovement() {
    var _this2 = this;

    if (!this.controller.attemptRunning || !this.controller.getIsDirectPlayerControl()) {
      return;
    }
    var queueIsEmpty = this.queue.isFinished() || !this.queue.isStarted();
    var isMoving = this.movementState !== -1;
    var queueHasOne = this.queue.currentCommand && this.queue.getLength() === 0;
    var timeEllapsed = +new Date() - this.lastMovement;
    var movementAlmostFinished = timeEllapsed > 300;

    if ((queueIsEmpty || queueHasOne && movementAlmostFinished) && isMoving) {
      // Arrow key
      if (this.movementState >= 0) {
        (function () {
          var direction = _this2.movementState;
          var callbackCommand = new CallbackCommand(_this2, function () {}, function () {
            _this2.lastMovement = +new Date();
            _this2.controller.moveDirection(callbackCommand, direction);
          }, _this2.identifier);
          _this2.addCommand(callbackCommand);
          // Spacebar
        })();
      } else {
        (function () {
          var callbackCommand = new CallbackCommand(_this2, function () {}, function () {
            _this2.lastMovement = +new Date();
            _this2.controller.use(callbackCommand);
          }, _this2.identifier);
          _this2.addCommand(callbackCommand);
        })();
      }
    }
  };

  Agent.prototype.doMove = function doMove(commandQueueItem, movement) {
    var _this3 = this;

    var groundType = void 0;
    var levelModel = this.controller.levelModel;
    var levelView = this.controller.levelView;
    var wasOnBlock = this.isOnBlock;
    var prevPosition = this.position;

    // Update position.
    levelModel["move" + movement](this);

    var jumpOff = wasOnBlock && wasOnBlock !== this.isOnBlock;
    if (this.isOnBlock || jumpOff) {
      groundType = levelModel.actionPlane.getBlockAt(this.position).blockType;
    } else {
      groundType = levelModel.groundPlane.getBlockAt(this.position).blockType;
    }

    levelView["playMove" + movement + "Animation"](this, prevPosition, this.facing, jumpOff, this.isOnBlock, groundType, function () {
      levelView.playIdleAnimation(_this3.position, _this3.facing, _this3.isOnBlock, _this3);

      _this3.controller.delayPlayerMoveBy(_this3.moveDelayMin, _this3.moveDelayMax, function () {
        commandQueueItem.succeeded();
      });
    });

    this.updateHidingTree();
    this.updateHidingBlock(prevPosition);
  };

  Agent.prototype.doMoveForward = function doMoveForward(commandQueueItem) {
    this.doMove(commandQueueItem, 'Forward');
  };

  Agent.prototype.doMoveBackward = function doMoveBackward(commandQueueItem) {
    this.doMove(commandQueueItem, 'Backward');
  };

  Agent.prototype.bump = function bump(commandQueueItem) {
    var _this4 = this;

    var levelView = this.controller.levelView,
        levelModel = this.controller.levelModel;
    levelView.playBumpAnimation(this.position, this.facing, false, this);
    var frontEntity = this.controller.levelEntity.getEntityAt(levelModel.getMoveForwardPosition(this));
    if (frontEntity !== null) {
      var isFriendlyEntity = this.controller.levelEntity.isFriendlyEntity(frontEntity.type);
      // push frienly entity 1 block
      if (isFriendlyEntity) {
        var moveAwayCommand;

        (function () {
          var pushDirection = _this4.facing;
          moveAwayCommand = new CallbackCommand(_this4, function () {}, function () {
            frontEntity.pushBack(moveAwayCommand, pushDirection, 250);
          }, frontEntity.identifier);

          frontEntity.queue.startPushHighPriorityCommands();
          frontEntity.addCommand(moveAwayCommand);
          frontEntity.queue.endPushHighPriorityCommands();
        })();
      }
    }
    this.controller.delayPlayerMoveBy(200, 400, function () {
      commandQueueItem.succeeded();
    });
  };

  Agent.prototype.takeDamage = function takeDamage(callbackCommand) {
    var _this5 = this;

    var facingName = this.controller.levelView.getDirectionName(this.facing);
    this.healthPoint--;
    // still alive
    if (this.healthPoint > 0) {
      this.controller.levelView.playScaledSpeed(this.sprite.animations, "hurt" + facingName);
      callbackCommand.succeeded();
      // report failure since player died
    } else {
      this.sprite.animations.stop(null, true);
      this.controller.levelView.playFailureAnimation(this.position, this.facing, this.isOnBlock, function () {
        callbackCommand.failed();
        _this5.controller.handleEndState(false);
      });
    }
  };

  Agent.prototype.hasPermissionToWalk = function hasPermissionToWalk(actionBlock) {
    return actionBlock.isWalkable;
  };

  Agent.prototype.canTriggerPressurePlates = function canTriggerPressurePlates() {
    return true;
  };

  return Agent;
}(BaseEntity);

/***/ }),

/***/ 2716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LevelBlock = __webpack_require__(1271);
var FacingDirection = __webpack_require__(799);
var Position = __webpack_require__(838);
var createEvent = __webpack_require__(2717).createEvent;
var randomInt = __webpack_require__(1272).randomInt;

module.exports = function () {
  function LevelView(controller) {
    _classCallCheck(this, LevelView);

    this.controller = controller;
    this.audioPlayer = controller.audioPlayer;
    this.game = controller.game;

    this.baseShading = null;

    this.player = null;
    this.agent = null;
    this.selectionIndicator = null;

    this.groundGroup = null;
    this.shadingGroup = null;
    this.actionGroup = null;
    this.fluffGroup = null;
    this.fowGroup = null;
    this.collectibleItems = [];
    //{sprite : sprite, type : blockType, position : [x,y]}
    this.trees = [];

    this.miniBlocks = {
      "dirt": ["Miniblocks", 0, 5],
      "dirtCoarse": ["Miniblocks", 6, 11],
      "sand": ["Miniblocks", 12, 17],
      "gravel": ["Miniblocks", 18, 23],
      "bricks": ["Miniblocks", 24, 29],
      "logAcacia": ["Miniblocks", 30, 35],
      "logBirch": ["Miniblocks", 36, 41],
      "logJungle": ["Miniblocks", 42, 47],
      "logOak": ["Miniblocks", 48, 53],
      "logSpruce": ["Miniblocks", 54, 59],
      "logSpruceSnowy": ["Miniblocks", 54, 59],
      "planksAcacia": ["Miniblocks", 60, 65],
      "planksBirch": ["Miniblocks", 66, 71],
      "planksJungle": ["Miniblocks", 72, 77],
      "planksOak": ["Miniblocks", 78, 83],
      "planksSpruce": ["Miniblocks", 84, 89],
      "cobblestone": ["Miniblocks", 90, 95],
      "sandstone": ["Miniblocks", 96, 101],
      "wool": ["Miniblocks", 102, 107],
      "redstoneDust": ["Miniblocks", 108, 113],
      "lapisLazuli": ["Miniblocks", 114, 119],
      "ingotIron": ["Miniblocks", 120, 125],
      "ingotGold": ["Miniblocks", 126, 131],
      "emerald": ["Miniblocks", 132, 137],
      "diamond": ["Miniblocks", 138, 143],
      "coal": ["Miniblocks", 144, 149],
      "bucketWater": ["Miniblocks", 150, 155],
      "bucketLava": ["Miniblocks", 156, 161],
      "gunPowder": ["Miniblocks", 162, 167],
      "wheat": ["Miniblocks", 168, 173],
      "potato": ["Miniblocks", 174, 179],
      "carrots": ["Miniblocks", 180, 185],
      "milk": ["Miniblocks", 186, 191],
      "egg": ["Miniblocks", 192, 197],
      "poppy": ["Miniblocks", 198, 203],
      "daisy": ["Miniblocks", 204, 209],
      "dandelion": ["Miniblocks", 210, 215],
      "bed": ["Miniblocks", 216, 221],
      "cactus": ["Miniblocks", 222, 227],
      "clay": ["Miniblocks", 228, 233],
      "deadbush": ["Miniblocks", 234, 239],
      "doorIron": ["Miniblocks", 240, 245],
      "doorOak": ["Miniblocks", 246, 251],
      "glowstoneDust": ["Miniblocks", 252, 257],
      "hardenedClay": ["Miniblocks", 258, 263],
      "hardenedClayBlack": ["Miniblocks", 264, 269],
      "hardenedClayBlue": ["Miniblocks", 270, 275],
      "hardenedClayBrown": ["Miniblocks", 276, 281],
      "hardenedClayCyan": ["Miniblocks", 282, 287],
      "hardenedClayGray": ["Miniblocks", 288, 293],
      "hardenedClayGreen": ["Miniblocks", 294, 299],
      "hardenedClayLightBlue": ["Miniblocks", 300, 305],
      "hardenedClayLime": ["Miniblocks", 306, 311],
      "hardenedClayMagenta": ["Miniblocks", 312, 317],
      "hardenedClayOrange": ["Miniblocks", 318, 323],
      "hardenedClayPink": ["Miniblocks", 324, 329],
      "hardenedClayPurple": ["Miniblocks", 330, 335],
      "hardenedClayRed": ["Miniblocks", 336, 341],
      "hardenedClaySilver": ["Miniblocks", 342, 347],
      "hardenedClayWhite": ["Miniblocks", 348, 353],
      "hardenedClayYellow": ["Miniblocks", 354, 359],
      "netherbrick": ["Miniblocks", 360, 365],
      "netherrack": ["Miniblocks", 366, 371],
      "obsidian": ["Miniblocks", 372, 377],
      "piston": ["Miniblocks", 378, 383],
      "pressurePlateOak": ["Miniblocks", 384, 389],
      "netherQuartz": ["Miniblocks", 390, 395],
      "railGolden": ["Miniblocks", 396, 401],
      "railNormal": ["Miniblocks", 402, 407],
      "redstoneTorch": ["Miniblocks", 408, 413],
      "reeds": ["Miniblocks", 414, 419],
      "seedsWheat": ["Miniblocks", 420, 425],
      "snow": ["Miniblocks", 426, 431],
      "snowBall": ["Miniblocks", 432, 437],
      "woolBlack": ["Miniblocks", 438, 443],
      "woolBlue": ["Miniblocks", 444, 449],
      "woolBrown": ["Miniblocks", 450, 455],
      "woolCyan": ["Miniblocks", 456, 461],
      "woolGray": ["Miniblocks", 462, 467],
      "woolGreen": ["Miniblocks", 468, 473],
      "woolLightBlue": ["Miniblocks", 474, 479],
      "woolLime": ["Miniblocks", 480, 485],
      "woolMagenta": ["Miniblocks", 486, 491],
      "woolOrange": ["Miniblocks", 492, 497],
      "woolPink": ["Miniblocks", 498, 503],
      "woolLPurple": ["Miniblocks", 504, 509],
      "woolRed": ["Miniblocks", 510, 515],
      "woolSilver": ["Miniblocks", 516, 521],
      "woolYellow": ["Miniblocks", 522, 527],
      "bookEnchanted": ["Miniblocks", 528, 533],
      "bucketEmpty": ["Miniblocks", 534, 539],
      "chest": ["Miniblocks", 540, 545],
      "compass": ["Miniblocks", 546, 551],
      "axeDiamond": ["Miniblocks", 552, 557],
      "pickaxeDiamond": ["Miniblocks", 558, 563],
      "shovelDiamond": ["Miniblocks", 564, 569],
      "flintAndSteel": ["Miniblocks", 570, 575],
      "flint": ["Miniblocks", 576, 581],
      "mapEmpty": ["Miniblocks", 582, 587],
      "minecart": ["Miniblocks", 588, 593],
      "potionBottleDrinkable": ["Miniblocks", 594, 599]
    };

    this.blocks = {
      "bedrock": ["blocks", "Bedrock", -13, 0],
      "bricks": ["blocks", "Bricks", -13, 0],
      "oreCoal": ["blocks", "Coal_Ore", -13, 0],
      "dirtCoarse": ["blocks", "Coarse_Dirt", -13, 0],
      "cobblestone": ["blocks", "Cobblestone", -13, 0],
      "oreDiamond": ["blocks", "Diamond_Ore", -13, 0],
      "dirt": ["blocks", "Dirt", -13, 0],
      "oreEmerald": ["blocks", "Emerald_Ore", -13, 0],
      "farmlandWet": ["blocks", "Farmland_Wet", -13, 0],
      "flowerDandelion": ["blocks", "Flower_Dandelion", -13, 0],
      "flowerOxeeye": ["blocks", "Flower_Oxeeye", -13, 0],
      "flowerRose": ["blocks", "Flower_Rose", -13, 0],
      "glass": ["blocks", "Glass", -13, 0],
      "oreGold": ["blocks", "Gold_Ore", -13, 0],
      "grass": ["blocks", "Grass", -13, 0],
      "gravel": ["blocks", "Gravel", -13, 0],
      "oreIron": ["blocks", "Iron_Ore", -13, 0],
      "oreLapis": ["blocks", "Lapis_Ore", -13, 0],
      "lava": ["blocks", "Lava_0", -13, 0],
      "logAcacia": ["blocks", "Log_Acacia", -13, 0],
      "logBirch": ["blocks", "Log_Birch", -13, 0],
      "logJungle": ["blocks", "Log_Jungle", -13, 0],
      "logOak": ["blocks", "Log_Oak", -13, 0],
      "logSpruce": ["blocks", "Log_Spruce", -13, 0],
      "logSpruceSnowy": ["blocks", "Log_Spruce", -13, 0],
      "obsidian": ["blocks", "Obsidian", -13, 0],
      "planksAcacia": ["blocks", "Planks_Acacia", -13, 0],
      "planksBirch": ["blocks", "Planks_Birch", -13, 0],
      "planksJungle": ["blocks", "Planks_Jungle", -13, 0],
      "planksOak": ["blocks", "Planks_Oak", -13, 0],
      "planksSpruce": ["blocks", "Planks_Spruce", -13, 0],
      "oreRedstone": ["blocks", "Redstone_Ore", -13, 0],
      "sand": ["blocks", "Sand", -13, 0],
      "sandstone": ["blocks", "Sandstone", -13, 0],
      "stone": ["blocks", "Stone", -13, 0],
      "tnt": ["tnt", "TNTexplosion0", -80, -58],
      "water": ["blocks", "Water_0", -13, 0],
      "wool": ["blocks", "Wool_White", -13, 0],
      "wool_orange": ["blocks", "Wool_Orange", -13, 0],
      "wool_black": ["blocks", "Wool_Black", -13, 0],
      "wool_blue": ["blocks", "Wool_Blue", -13, 0],
      "wool_brown": ["blocks", "Wool_Brown", -13, 0],
      "wool_cyan": ["blocks", "Wool_Cyan", -13, 0],
      "wool_gray": ["blocks", "Wool_Gray", -13, 0],
      "wool_green": ["blocks", "Wool_Green", -13, 0],
      "wool_light_blue": ["blocks", "Wool_LightBlue", -13, 0],
      "wool_lime": ["blocks", "Wool_Lime", -13, 0],
      "wool_magenta": ["blocks", "Wool_Magenta", -13, 0],
      "wool_pink": ["blocks", "Wool_Pink", -13, 0],
      "wool_purple": ["blocks", "Wool_Purple", -13, 0],
      "wool_red": ["blocks", "Wool_Red", -13, 0],
      "wool_silver": ["blocks", "Wool_Silver", -13, 0],
      "wool_yellow": ["blocks", "Wool_Yellow", -13, 0],

      "leavesAcacia": ["leavesAcacia", "Leaves_Acacia0.png", -100, 0],
      "leavesBirch": ["leavesBirch", "Leaves_Birch0.png", -100, 0],
      "leavesJungle": ["leavesJungle", "Leaves_Jungle0.png", -100, 0],
      "leavesOak": ["leavesOak", "Leaves_Oak0.png", -100, 0],
      "leavesSpruce": ["leavesSpruce", "Leaves_Spruce0.png", -100, 0],
      "leavesSpruceSnowy": ["leavesSpruceSnowy", "Leaves_SpruceSnowy0.png", -100, 36],

      "watering": ["blocks", "Water_0", -13, 0],
      "cropWheat": ["blocks", "Wheat0", -13, 0],
      "torch": ["torch", "Torch0", -13, 0],

      "tallGrass": ["tallGrass", "", -13, 0],

      "lavaPop": ["lavaPop", "LavaPop01", -13, 0],
      "redstoneSparkle": ["redstoneSparkle", "redstone_sparkle1.png", 7, 23],
      "fire": ["fire", "", -11, 135],
      "bubbles": ["bubbles", "", -11, 135],
      "explosion": ["explosion", "", -70, 60],

      "door": ["door", "", -12, -15],
      "doorIron": ["doorIron", "", -12, -15],

      "rails": ["blocks", "Rails_Vertical", -13, -0],
      "railsNorthEast": ["blocks", "Rails_BottomLeft", -13, 0],
      "railsNorthWest": ["blocks", "Rails_BottomRight", -13, 0],
      "railsEast": ["blocks", "Rails_Horizontal", -13, 0],
      "railsWest": ["blocks", "Rails_Horizontal", -13, 0],
      "railsEastWest": ["blocks", "Rails_Horizontal", -13, 0],
      "railsSouthEast": ["blocks", "Rails_TopLeft", -13, 0],
      "railsSouthWest": ["blocks", "Rails_TopRight", -13, 0],
      "railsNorth": ["blocks", "Rails_Vertical", -13, -0],
      "railsSouth": ["blocks", "Rails_Vertical", -13, -0],
      "railsNorthSouth": ["blocks", "Rails_Vertical", -13, -0],

      "railsUnpowered": ["blocks", "Rails_UnpoweredVertical", -13, 0],
      "railsUnpoweredNorth": ["blocks", "Rails_UnpoweredVertical", -13, 0],
      "railsUnpoweredSouth": ["blocks", "Rails_UnpoweredVertical", -13, 0],
      "railsUnpoweredNorthSouth": ["blocks", "Rails_UnpoweredVertical", -13, 0],
      "railsUnpoweredEast": ["blocks", "Rails_UnpoweredHorizontal", -13, 0],
      "railsUnpoweredWest": ["blocks", "Rails_UnpoweredHorizontal", -13, 0],
      "railsUnpoweredEastWest": ["blocks", "Rails_UnpoweredHorizontal", -13, 0],

      "railsPowered": ["blocks", "Rails_PoweredVertical", -13, 0],
      "railsPoweredNorth": ["blocks", "Rails_PoweredVertical", -13, 0],
      "railsPoweredSouth": ["blocks", "Rails_PoweredVertical", -13, 0],
      "railsPoweredNorthSouth": ["blocks", "Rails_PoweredVertical", -13, 0],
      "railsPoweredEast": ["blocks", "Rails_PoweredHorizontal", -13, 0],
      "railsPoweredWest": ["blocks", "Rails_PoweredHorizontal", -13, 0],
      "railsPoweredEastWest": ["blocks", "Rails_PoweredHorizontal", -13, 0],

      "railsRedstoneTorch": ["blocks", "Rails_RedstoneTorch", -12, 9],

      "redstoneWire": ["blocks", "redstone_dust_dot_off", -13, 0],
      "redstoneWireHorizontal": ["blocks", "redstone_dust_line_h_off", -13, 0],
      "redstoneWireVertical": ["blocks", "redstone_dust_line_v_off", -13, 0],
      "redstoneWireUpRight": ["blocks", "redstone_dust_corner_BottomLeft_off", -13, 0],
      "redstoneWireUpLeft": ["blocks", "redstone_dust_corner_BottomRight_off", -13, 0],
      "redstoneWireDownRight": ["blocks", "redstone_dust_corner_TopLeft_off", -13, 0],
      "redstoneWireDownLeft": ["blocks", "redstone_dust_corner_TopRight_off", -13, 0],
      "redstoneWireTUp": ["blocks", "redstone_dust_cross_up_off", -13, 0],
      "redstoneWireTDown": ["blocks", "redstone_dust_cross_down_off", -13, 0],
      "redstoneWireTLeft": ["blocks", "redstone_dust_cross_left_off", -13, 0],
      "redstoneWireTRight": ["blocks", "redstone_dust_cross_right_off", -13, 0],
      "redstoneWireCross": ["blocks", "redstone_dust_cross_off", -13, 0],

      "redstoneWireOn": ["blocks", "redstone_dust_dot", -13, 0],
      "redstoneWireHorizontalOn": ["blocks", "redstone_dust_line_h", -13, 0],
      "redstoneWireVerticalOn": ["blocks", "redstone_dust_line_v", -13, 0],
      "redstoneWireUpRightOn": ["blocks", "redstone_dust_corner_BottomLeft", -13, 0],
      "redstoneWireUpLeftOn": ["blocks", "redstone_dust_corner_BottomRight", -13, 0],
      "redstoneWireDownRightOn": ["blocks", "redstone_dust_corner_TopLeft", -13, 0],
      "redstoneWireDownLeftOn": ["blocks", "redstone_dust_corner_TopRight", -13, 0],
      "redstoneWireTUpOn": ["blocks", "redstone_dust_cross_up", -13, 0],
      "redstoneWireTDownOn": ["blocks", "redstone_dust_cross_down", -13, 0],
      "redstoneWireTLeftOn": ["blocks", "redstone_dust_cross_left", -13, 0],
      "redstoneWireTRightOn": ["blocks", "redstone_dust_cross_right", -13, 0],
      "redstoneWireCrossOn": ["blocks", "redstone_dust_cross", -13, 0],

      "pressurePlateUp": ["blocks", "PressurePlate_Up", -13, 0],
      "pressurePlateDown": ["blocks", "PressurePlate_Down", -13, 0],

      "pistonUp": ["blocks", "piston_up", -13, 0],
      "pistonDown": ["blocks", "piston_down", -13, 0],
      "pistonLeft": ["blocks", "piston_left", -13, 0],
      "pistonRight": ["blocks", "piston_right", -13, 0],
      "pistonUpOn": ["blocks", "piston_base_up", -26, -13],
      "pistonDownOn": ["blocks", "piston_base_down", -26, -13],
      "pistonLeftOn": ["blocks", "piston_base_left", -26, -13],
      "pistonRightOn": ["blocks", "piston_base_right", -26, -13],

      "pistonArmLeft": ["blocks", "piston_arm_left", -26, -13],
      "pistonArmRight": ["blocks", "piston_arm_right", -26, -13],
      "pistonArmUp": ["blocks", "piston_arm_up", -26, -13],
      "pistonArmDown": ["blocks", "piston_arm_down", -26, -13],

      "pistonUpSticky": ["blocks", "piston_up", -13, 0],
      "pistonDownSticky": ["blocks", "piston_down_sticky", -13, 0],
      "pistonLeftSticky": ["blocks", "piston_left", -13, 0],
      "pistonRightSticky": ["blocks", "piston_right", -13, 0],
      "pistonUpOnSticky": ["blocks", "piston_base_up", -26, -13],
      "pistonDownOnSticky": ["blocks", "piston_base_down_sticky", -26, -13],
      "pistonLeftOnSticky": ["blocks", "piston_base_left", -26, -13],
      "pistonRightOnSticky": ["blocks", "piston_base_right", -26, -13],

      "pistonArmLeftSticky": ["blocks", "piston_arm_left", -26, -13],
      "pistonArmRightSticky": ["blocks", "piston_arm_right", -26, -13],
      "pistonArmUpSticky": ["blocks", "piston_arm_up", -26, -13],
      "pistonArmDownSticky": ["blocks", "piston_arm_down_sticky", -26, -13],

      "cactus": ["blocks", "cactus", -13, 0],
      "deadBush": ["blocks", "dead_bush", -13, 0],
      "glowstone": ["blocks", "glowstone", -13, 0],
      "grassPath": ["blocks", "grass_path", -13, 0],
      "ice": ["blocks", "ice", -13, 0],
      "netherrack": ["blocks", "netherrack", -13, 0],
      "netherBrick": ["blocks", "nether_brick", -13, 0],
      "quartzOre": ["blocks", "quartz_ore", -13, 0],
      "snow": ["blocks", "snow", -13, 0],
      "snowyGrass": ["blocks", "snowy_grass", -13, 0],
      "topSnow": ["blocks", "top_snow", -13, 0],

      "Nether_Portal": ["blocks", "Nether_Portal0", 0, -58],

      //hooking up all old blocks that we had assets for but never used in previous years
      "bedFoot": ["blocks", "Bed_Foot", -13, 0],
      "bedHead": ["blocks", "Bed_Head", -13, 10],
      "clay": ["blocks", "Clay", -13, 0],
      "glassBlack": ["blocks", "Glass_Black", -13, 0],
      "glassBlue": ["blocks", "Glass_Blue", -13, 0],
      "glassBrown": ["blocks", "Glass_Brown", -13, 0],
      "glassCyan": ["blocks", "Glass_Cyan", -13, 0],
      "glassGray": ["blocks", "Glass_Gray", -13, 0],
      "glassGreen": ["blocks", "Glass_Green", -13, 0],
      "glassLightBlue": ["blocks", "Glass_LightBlue", -13, 0],
      "glassLime": ["blocks", "Glass_Lime", -13, 0],
      "glassMagenta": ["blocks", "Glass_Magenta", -13, 0],
      "glassOrange": ["blocks", "Glass_Orange", -13, 0],
      "glassPink": ["blocks", "Glass_Pink", -13, 0],
      "glassPurple": ["blocks", "Glass_Purple", -13, 0],
      "glassRed": ["blocks", "Glass_Red", -13, 0],
      "glassSilver": ["blocks", "Glass_Silver", -13, 0],
      "glassWhite": ["blocks", "Glass_White", -13, 0],
      "glassYellow": ["blocks", "Glass_Yellow", -13, 0],
      "terracotta": ["blocks", "Terracotta", -13, 0],
      "terracottaBlack": ["blocks", "Terracotta_Black", -13, 0],
      "terracottaBlue": ["blocks", "Terracotta_Blue", -13, 0],
      "terracottaBrown": ["blocks", "Terracotta_Brown", -13, 0],
      "terracottaCyan": ["blocks", "Terracotta_Cyan", -13, 0],
      "terracottaGray": ["blocks", "Terracotta_Gray", -13, 0],
      "terracottaGreen": ["blocks", "Terracotta_Green", -13, 0],
      "terracottaLightBlue": ["blocks", "Terracotta_LightBlue", -13, 0],
      "terracottaLime": ["blocks", "Terracotta_Lime", -13, 0],
      "terracottaMagenta": ["blocks", "Terracotta_Magenta", -13, 0],
      "terracottaOrange": ["blocks", "Terracotta_Orange", -13, 0],
      "terracottaPink": ["blocks", "Terracotta_Pink", -13, 0],
      "terracottaPurple": ["blocks", "Terracotta_Purple", -13, 0],
      "terracottaRed": ["blocks", "Terracotta_Red", -13, 0],
      "terracottaSilver": ["blocks", "Terracotta_Silver", -13, 0],
      "terracottaWhite": ["blocks", "Terracotta_White", -13, 0],
      "terracottaYellow": ["blocks", "Terracotta_Yellow", -13, 0],

      "invisible": ["blocks", "Invisible", 0, 0]
    };
    this.actionPlaneBlocks = [];
    this.toDestroy = [];
    this.resettableTweens = [];
    this.treeFluffTypes = {

      "treeAcacia": [[0, 0], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1], [-1, -2], [0, -2], [1, -2]],
      "treeBirch": [[0, 0], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1], [-1, -2], [0, -2], [1, -2], [0, -3]],
      "treeJungle": [[0, 0], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1], [-1, -2], [0, -2], [1, -2], [0, -3], [1, -3]],
      "treeOak": [[0, 0], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1], [-1, -2], [0, -2], [0, -3]],
      "treeSpruce": [[0, 0], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1], [-1, -2], [0, -2], [1, -2], [0, -3]],
      "treeSpruceSnowy": [[0, 0], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1], [-1, -2], [0, -2], [1, -2], [0, -3]]
    };
  }

  LevelView.prototype.yToIndex = function yToIndex(y) {
    return this.controller.levelModel.yToIndex(y);
  };

  LevelView.prototype.create = function create(levelModel) {
    this.createGroups();
    this.reset(levelModel);
  };

  LevelView.prototype.resetEntity = function resetEntity(entity) {
    this.preparePlayerSprite(entity.name, entity);
    entity.sprite.animations.stop();
    this.setPlayerPosition(entity.position, entity.isOnBlock, entity);
    if (entity.shouldUpdateSelectionIndicator()) {
      this.setSelectionIndicatorPosition(entity.position[0], entity.position[1]);
      this.selectionIndicator.visible = true;
    }
    this.playIdleAnimation(entity.position, entity.facing, entity.isOnBlock, entity);
  };

  LevelView.prototype.reset = function reset(levelModel) {
    this.player = levelModel.player;
    this.agent = levelModel.agent;

    this.resettableTweens.forEach(function (tween) {
      tween.stop(false);
    });
    this.resettableTweens.length = 0;
    this.collectibleItems = [];
    this.trees = [];

    this.resetGroups(levelModel);

    if (levelModel.usePlayer) {
      this.resetEntity(this.player);

      if (levelModel.usingAgent) {
        this.resetEntity(this.agent);
      }
    }

    this.updateShadingGroup(levelModel.shadingPlane);
    this.updateFowGroup(levelModel.fowPlane);

    if (this.controller.followingPlayer()) {
      this.game.world.setBounds(0, 0, levelModel.planeWidth * 40, levelModel.planeHeight * 40);
      this.game.camera.follow(this.player.sprite);
      this.game.world.scale.x = 1;
      this.game.world.scale.y = 1;
    } else {
      this.game.world.setBounds(0, 0, 400, 400);
    }
  };

  LevelView.prototype.update = function update() {
    var i;

    for (i = 0; i < this.toDestroy.length; ++i) {
      this.toDestroy[i].destroy();
    }
    this.toDestroy = [];
  };

  LevelView.prototype.render = function render() {
    this.actionGroup.sort('sortOrder');
    this.fluffGroup.sort('z');
  };

  LevelView.prototype.scaleShowWholeWorld = function scaleShowWholeWorld(completionHandler) {
    var _controller$scaleFrom = this.controller.scaleFromOriginal(),
        _controller$scaleFrom2 = _slicedToArray(_controller$scaleFrom, 2),
        scaleX = _controller$scaleFrom2[0],
        scaleY = _controller$scaleFrom2[1];

    var scaleTween = this.addResettableTween(this.game.world.scale).to({
      x: 1 / scaleX,
      y: 1 / scaleY
    }, 1000, Phaser.Easing.Exponential.Out);

    this.game.camera.unfollow();

    var positionTween = this.addResettableTween(this.game.camera).to({
      x: 0,
      y: 0
    }, 1000, Phaser.Easing.Exponential.Out);

    scaleTween.onComplete.addOnce(function () {
      completionHandler();
    });

    positionTween.start();
    scaleTween.start();
  };

  LevelView.prototype.getDirectionName = function getDirectionName(facing) {
    return "_" + FacingDirection.directionToRelative(facing).toLowerCase();
  };

  LevelView.prototype.updatePlayerDirection = function updatePlayerDirection(position, facing) {
    var direction = this.getDirectionName(facing);

    this.setSelectionIndicatorPosition(position[0], position[1]);
    this.playScaledSpeed(this.player.sprite.animations, "idle" + direction);
  };
  // animations

  LevelView.prototype.playDoorAnimation = function playDoorAnimation(position, open, completionHandler) {
    var blockIndex = this.yToIndex(position[1]) + position[0];
    var block = this.actionPlaneBlocks[blockIndex];
    var animationName = open ? "open" : "close";
    var animation = this.playScaledSpeed(block.animations, animationName);
    this.onAnimationEnd(animation, function () {
      animation.updateCurrentFrame();
      completionHandler();
    });
  };

  LevelView.prototype.playPlayerAnimation = function playPlayerAnimation(animationName, position, facing) {
    var isOnBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var entity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.player;

    var direction = this.getDirectionName(facing);
    entity.sprite.sortOrder = this.yToIndex(position[1]) + entity.getSortOrderOffset();

    var animName = animationName + direction;
    return this.playScaledSpeed(entity.sprite.animations, animName);
  };

  LevelView.prototype.playIdleAnimation = function playIdleAnimation(position, facing, isOnBlock) {
    var entity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.player;

    this.playPlayerAnimation("idle", position, facing, isOnBlock, entity);
  };

  LevelView.prototype.playSuccessAnimation = function playSuccessAnimation(position, facing, isOnBlock, completionHandler) {
    var _this = this;

    var entity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.player;

    this.controller.delayBy(250, function () {
      _this.audioPlayer.play("success");
      _this.onAnimationEnd(_this.playPlayerAnimation("celebrate", position, facing, isOnBlock, entity), function () {
        completionHandler();
      });
    });
  };

  LevelView.prototype.playFailureAnimation = function playFailureAnimation(position, facing, isOnBlock, completionHandler) {
    var _this2 = this;

    var entity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.player;

    this.controller.delayBy(500, function () {
      _this2.audioPlayer.play("failure");
      _this2.onAnimationEnd(_this2.playPlayerAnimation("fail", position, facing, isOnBlock, entity), function () {
        _this2.controller.delayBy(800, completionHandler);
      });
    });
  };

  LevelView.prototype.playBumpAnimation = function playBumpAnimation(position, facing, isOnBlock) {
    var _this3 = this;

    var entity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.player;

    var animation = this.playPlayerAnimation("bump", position, facing, isOnBlock, entity);
    animation.onComplete.add(function () {
      _this3.playIdleAnimation(position, facing, isOnBlock, entity);
    });
    return animation;
  };

  LevelView.prototype.playDrownFailureAnimation = function playDrownFailureAnimation(position, facing, isOnBlock, completionHandler) {
    var sprite, tween;

    this.playPlayerAnimation("fail", position, facing, isOnBlock);
    this.createBlock(this.fluffGroup, position[0], position[1], "bubbles");

    sprite = this.fluffGroup.create(0, 0, "finishOverlay");

    var _controller$scaleFrom3 = this.controller.scaleFromOriginal(),
        _controller$scaleFrom4 = _slicedToArray(_controller$scaleFrom3, 2),
        scaleX = _controller$scaleFrom4[0],
        scaleY = _controller$scaleFrom4[1];

    sprite.scale.x = scaleX;
    sprite.scale.y = scaleY;
    sprite.alpha = 0;
    sprite.tint = 0x324bff;

    tween = this.addResettableTween(sprite).to({
      alpha: 0.5
    }, 200, Phaser.Easing.Linear.None);

    tween.onComplete.add(function () {
      completionHandler();
    });

    tween.start();
  };

  LevelView.prototype.playBurnInLavaAnimation = function playBurnInLavaAnimation(position, facing, isOnBlock, completionHandler) {
    var sprite, tween;

    this.playPlayerAnimation("jumpUp", position, facing, isOnBlock);
    this.createBlock(this.fluffGroup, position[0], position[1], "fire");

    sprite = this.fluffGroup.create(0, 0, "finishOverlay");

    var _controller$scaleFrom5 = this.controller.scaleFromOriginal(),
        _controller$scaleFrom6 = _slicedToArray(_controller$scaleFrom5, 2),
        scaleX = _controller$scaleFrom6[0],
        scaleY = _controller$scaleFrom6[1];

    sprite.scale.x = scaleX;
    sprite.scale.y = scaleY;
    sprite.alpha = 0;
    sprite.tint = 0xd1580d;

    tween = this.addResettableTween(sprite).to({
      alpha: 0.5
    }, 200, Phaser.Easing.Linear.None);

    tween.onComplete.add(function () {
      completionHandler();
    });

    tween.start();
  };

  LevelView.prototype.playDestroyTntAnimation = function playDestroyTntAnimation(position, facing, isOnBlock, tntArray, newShadingPlaneData, completionHandler) {
    var _this4 = this;

    var block, lastAnimation;
    if (tntArray.length === 0) {
      completionHandler();
      return;
    }

    this.audioPlayer.play("fuse");
    for (var tnt in tntArray) {
      block = this.actionPlaneBlocks[this.coordinatesToIndex(tntArray[tnt])];
      lastAnimation = this.playScaledSpeed(block.animations, "explode");
    }

    this.onAnimationEnd(lastAnimation, function () {
      _this4.audioPlayer.play("explode");
      completionHandler();
    });
  };

  LevelView.prototype.playCreeperExplodeAnimation = function playCreeperExplodeAnimation(position, facing, destroyPosition, isOnBlock, completionHandler) {
    var _this5 = this;

    this.controller.delayBy(180, function () {
      //this.onAnimationLoopOnce(
      _this5.playPlayerAnimation("bump", position, facing, false).onComplete.add(function () {
        //add creeper windup sound
        _this5.audioPlayer.play("fuse");
        _this5.playExplodingCreeperAnimation(position, facing, destroyPosition, isOnBlock, completionHandler, _this5);

        _this5.controller.delayBy(200, function () {
          _this5.onAnimationLoopOnce(_this5.playPlayerAnimation("jumpUp", position, facing, false), function () {
            _this5.playIdleAnimation(position, facing, isOnBlock);
          });
        });
      });
    });
  };
  // flash


  LevelView.prototype.flashEntity = function flashEntity(entity) {
    return this.flashSpriteToWhite(entity.sprite);
  };

  LevelView.prototype.flashBlock = function flashBlock(position) {
    var blockIndex = this.yToIndex(position[1]) + position[0];
    var block = this.actionPlaneBlocks[blockIndex];
    return this.flashSpriteToWhite(block);
  };

  LevelView.prototype.flashSpriteToWhite = function flashSpriteToWhite(sprite) {
    var fillBmd = this.game.add.bitmapData(sprite.width, sprite.height);
    fillBmd.fill(0xFF, 0xFF, 0xFF, 0xFF);
    var maskedBmd = this.game.add.bitmapData(sprite.width, sprite.height);

    var srcRect = { x: 0, y: 0, width: sprite.width, height: sprite.height };
    var dstRect = { x: 0, y: 0, width: sprite.texture.crop.width, height: sprite.texture.crop.height };
    maskedBmd.alphaMask(fillBmd, sprite, srcRect, dstRect);

    var flashSprite = sprite.addChild(this.game.make.sprite(0, 0, maskedBmd.texture));
    flashSprite.alpha = 0;
    var fadeMs = 60;
    var pauseMs = fadeMs * 4;
    var totalIterations = 3;
    var totalDuration = 0;
    var aIn = { alpha: 1.0 };
    var aOut = { alpha: 0.0 };
    var fadeIn = this.game.add.tween(flashSprite).to(aIn, fadeMs, Phaser.Easing.Linear.None);
    var fadeOut = this.game.add.tween(flashSprite).to(aOut, fadeMs, Phaser.Easing.Linear.None);
    totalDuration = fadeMs * 2;
    fadeIn.chain(fadeOut);
    var lastStep = fadeOut;

    for (var i = 0; i < totalIterations - 1; i++) {
      var innerPause = this.game.add.tween(flashSprite).to(aOut, pauseMs, Phaser.Easing.Linear.None);
      var innerFadeIn = this.game.add.tween(flashSprite).to(aIn, fadeMs, Phaser.Easing.Linear.None);
      var innerFadeOut = this.game.add.tween(flashSprite).to(aOut, fadeMs, Phaser.Easing.Linear.None);
      totalDuration += pauseMs + fadeMs * 2;
      lastStep.chain(innerPause);
      innerPause.chain(innerFadeIn);
      innerFadeIn.chain(innerFadeOut);
      lastStep = innerFadeOut;
    }

    lastStep.onComplete.add(function () {
      flashSprite.destroy();
    });

    fadeIn.start();

    return totalDuration * 2;
  };

  LevelView.prototype.playExplodingCreeperAnimation = function playExplodingCreeperAnimation(position, facing, destroyPosition, isOnBlock, completionHandler) {
    var _this6 = this;

    var blockIndex = this.yToIndex(destroyPosition[1]) + destroyPosition[0];
    var blockToExplode = this.actionPlaneBlocks[blockIndex];

    var creeperExplodeAnimation = blockToExplode.animations.getAnimation("explode");
    creeperExplodeAnimation.onComplete.add(function () {
      blockToExplode.kill();
      _this6.playExplosionAnimation(position, facing, destroyPosition, isOnBlock, function () {
        _this6.controller.delayBy(100, function () {
          _this6.playFailureAnimation(position, facing, false, completionHandler);
        });
      }, false);
      _this6.audioPlayer.play("explode");
      _this6.playExplosionCloudAnimation(destroyPosition);
    });

    creeperExplodeAnimation.play();
  };

  LevelView.prototype.playExplosionCloudAnimation = function playExplosionCloudAnimation(position) {
    this.createBlock(this.fluffGroup, position[0], position[1], "explosion");
  };

  LevelView.prototype.coordinatesToIndex = function coordinatesToIndex(coordinates) {
    return this.yToIndex(coordinates[1]) + coordinates[0];
  };

  LevelView.prototype.playMinecartTurnAnimation = function playMinecartTurnAnimation(position, isUp, isOnBlock, completionHandler, turnDirection) {
    var facing = isUp ? FacingDirection.North : FacingDirection.South;
    var animation = this.playPlayerAnimation("mineCart_turn" + turnDirection, position, facing, false);
    return animation;
  };

  LevelView.prototype.playMinecartMoveForwardAnimation = function playMinecartMoveForwardAnimation(position, facing, isOnBlock, completionHandler, nextPosition, speed) {
    var tween;

    //if we loop the sfx that might be better?
    this.audioPlayer.play("minecart");
    this.playPlayerAnimation("mineCart", position, facing, false);
    tween = this.addResettableTween(this.player.sprite).to(this.positionToScreen(nextPosition), speed, Phaser.Easing.Linear.None);
    tween.start();
    this.player.sprite.sortOrder = this.yToIndex(nextPosition[1]) + 10;

    return tween;
  };

  LevelView.prototype.playMinecartAnimation = function playMinecartAnimation(isOnBlock, completionHandler) {
    var _this7 = this;

    //start at 3,2
    var position = new Position(3, 2);
    this.setPlayerPosition(position, isOnBlock);
    this.player.facing = 2;

    var animation = this.playLevelEndAnimation(position, this.player.facing, isOnBlock, completionHandler, false);
    this.game.world.setBounds(0, 0, 440, 400);
    this.game.camera.follow(this.player.sprite);

    animation.onComplete.add(function () {
      _this7.playTrack(position, _this7.player.facing, isOnBlock, _this7.player, completionHandler);
    });
  };

  LevelView.prototype.playTrack = function playTrack(position, facing, isOnBlock) {
    var _this8 = this;

    var entity = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.player;
    var completionHandler = arguments[4];

    entity.onTracks = true;

    // Need to get track on current position to avoid mishandling immediate turns
    var track = this.controller.levelModel.actionPlane.getMinecartTrack(position, facing);

    var nextPos = Position.forward(entity.position, facing);

    if (entity.getOffTrack || !track && !this.isFirstTimeOnRails(position, nextPos)) {
      entity.getOffTrack = false;
      entity.onTracks = false;
      if (completionHandler) {
        completionHandler();
      }
      return;
    }

    // If track is undefined, it means the player was not on a rail
    // but if we reached this, that means we're trying to get on a rail for the first time
    // and we need to grab that track -in front of us-
    if (track === undefined) {
      track = this.controller.levelModel.actionPlane.getMinecartTrack(nextPos, facing);
      // Having a weird bug on publish where rail destruction while riding causes a destructure of
      // non-iterable instance error. If getTrack fails with currPos and nextPos, just call the whole thing off.
      // so that we don't reach the const assignment below.
      if (track === undefined) {
        entity.getOffTrack = false;
        entity.onTracks = false;
        if (completionHandler) {
          completionHandler();
        }
        return;
      }
    }

    var direction = void 0;

    var _track = track,
        _track2 = _slicedToArray(_track, 4),
        arraydirection = _track2[0],
        nextPosition = _track2[1],
        nextFacing = _track2[2],
        speed = _track2[3];

    this.player.position = nextPosition;

    //turn
    if (arraydirection.substring(0, 4) === "turn") {
      direction = arraydirection.substring(5);
      var isUp = facing === FacingDirection.North || nextFacing === FacingDirection.North;
      this.onAnimationEnd(this.playMinecartTurnAnimation(position, isUp, isOnBlock, completionHandler, direction), function () {
        _this8.playTrack(nextPosition, nextFacing, isOnBlock, entity, completionHandler);
      });
    } else {
      this.onAnimationEnd(this.playMinecartMoveForwardAnimation(position, facing, isOnBlock, completionHandler, nextPosition, speed), function () {
        _this8.playTrack(nextPosition, nextFacing, isOnBlock, entity, completionHandler);
      });
    }
  };

  /**
  * Handling the first case of walking onto a track while not currently on one
  */


  LevelView.prototype.isFirstTimeOnRails = function isFirstTimeOnRails(currPos, nextPos) {
    var nextBlock = this.controller.levelModel.actionPlane.getBlockAt(nextPos);
    var currBlock = this.controller.levelModel.actionPlane.getBlockAt(currPos);
    if (nextBlock && currBlock && !currBlock.isRail && nextBlock.isRail) {
      return true;
    }
    return false;
  };

  LevelView.prototype.addHouseBed = function addHouseBed(bottomCoordinates) {
    //Temporary, will be replaced by bed blocks
    var bedTopCoordinate = bottomCoordinates[1] - 1;
    var sprite = this.actionGroup.create(38 * bottomCoordinates[0], 35 * bedTopCoordinate, "bed");
    sprite.sortOrder = this.yToIndex(bottomCoordinates[1]);
  };

  LevelView.prototype.addDoor = function addDoor(coordinates) {
    var sprite;
    var toDestroy = this.actionPlaneBlocks[this.coordinatesToIndex(coordinates)];
    this.createActionPlaneBlock(coordinates, "door");
    //Need to grab the correct blocktype from the action layer
    //And use that type block to create the ground block under the door
    sprite = this.createBlock(this.groundGroup, coordinates[0], coordinates[1], "wool_orange");
    toDestroy.kill();
    sprite.sortOrder = this.yToIndex(6);
  };

  LevelView.prototype.playSuccessHouseBuiltAnimation = function playSuccessHouseBuiltAnimation(position, facing, isOnBlock, createFloor, houseObjectPositions, completionHandler, updateScreen) {
    var _this9 = this;

    //fade screen to white
    //Add house blocks
    //fade out of white
    //Play success animation on player.
    var tweenToW = this.playLevelEndAnimation(position, facing, isOnBlock, function () {
      _this9.controller.delayBy(4000, completionHandler);
    }, true);
    tweenToW.onComplete.add(function () {
      _this9.audioPlayer.play("houseSuccess");
      //Change house ground to floor
      var xCoord;
      var yCoord;
      var sprite;

      for (var i = 0; i < createFloor.length; ++i) {
        xCoord = createFloor[i][1];
        yCoord = createFloor[i][2];
        /*this.groundGroup._data[this.coordinatesToIndex([xCoord,yCoord])].kill();*/
        sprite = _this9.createBlock(_this9.groundGroup, xCoord, yCoord, "wool_orange");
        sprite.sortOrder = _this9.yToIndex(yCoord);
      }

      _this9.addHouseBed(houseObjectPositions[0]);
      _this9.addDoor(houseObjectPositions[1]);
      _this9.groundGroup.sort('sortOrder');
      updateScreen();
    });
  };

  //Tweens in and then out of white. returns the tween to white for adding callbacks


  LevelView.prototype.playLevelEndAnimation = function playLevelEndAnimation(position, facing, isOnBlock, completionHandler, playSuccessAnimation) {
    var _this10 = this;

    var sprite, tweenToW, tweenWToC;

    sprite = this.fluffGroup.create(0, 0, "finishOverlay");

    var _controller$scaleFrom7 = this.controller.scaleFromOriginal(),
        _controller$scaleFrom8 = _slicedToArray(_controller$scaleFrom7, 2),
        scaleX = _controller$scaleFrom8[0],
        scaleY = _controller$scaleFrom8[1];

    sprite.scale.x = scaleX;
    sprite.scale.y = scaleY;
    sprite.alpha = 0;

    tweenToW = this.tweenToWhite(sprite);
    tweenWToC = this.tweenFromWhiteToClear(sprite);

    tweenToW.onComplete.add(function () {
      _this10.selectionIndicator.visible = false;
      _this10.setPlayerPosition(position, isOnBlock);
      tweenWToC.start();
    });
    if (playSuccessAnimation) {
      tweenWToC.onComplete.add(function () {
        _this10.playSuccessAnimation(position, facing, isOnBlock, completionHandler);
      });
    }
    tweenToW.start();

    return tweenToW;
  };

  LevelView.prototype.tweenFromWhiteToClear = function tweenFromWhiteToClear(sprite) {
    var tweenWhiteToClear;

    tweenWhiteToClear = this.addResettableTween(sprite).to({
      alpha: 0.0
    }, 700, Phaser.Easing.Linear.None);
    return tweenWhiteToClear;
  };

  LevelView.prototype.tweenToWhite = function tweenToWhite(sprite) {
    var tweenToWhite;

    tweenToWhite = this.addResettableTween(sprite).to({
      alpha: 1.0
    }, 300, Phaser.Easing.Linear.None);
    return tweenToWhite;
  };

  LevelView.prototype.playBlockSound = function playBlockSound(groundType) {
    var oreString = groundType.substring(0, 3);
    if (groundType === "water" || groundType === "lava") {
      return;
    }
    if (groundType === "stone" || groundType === "cobblestone" || groundType === "bedrock" || oreString === "ore" || groundType === "bricks") {
      this.audioPlayer.play("stepStone");
    } else if (groundType === "grass" || groundType === "dirt" || groundType === "dirtCoarse" || groundType === "wool_orange" || groundType === "wool") {
      this.audioPlayer.play("stepGrass");
    } else if (groundType === "gravel") {
      this.audioPlayer.play("stepGravel");
    } else if (groundType === "farmlandWet") {
      this.audioPlayer.play("stepFarmland");
    } else {
      this.audioPlayer.play("stepWood");
    }
  };

  /**
   * Play the MoveForward animation for the given entity. Note that both
   * MoveForward and MoveBackward are implemented using the same walk
   * animations, and the only difference between the two is the logic they use
   * for moving north after placing a block
   *
   * @see LevelView.playWalkAnimation
   */


  LevelView.prototype.playMoveForwardAnimation = function playMoveForwardAnimation(entity, oldPosition, facing, shouldJumpDown, isOnBlock, groundType, completionHandler) {
    // make sure to render high for when moving north after placing a block
    var targetYIndex = entity.position[1] + (facing === FacingDirection.North ? 1 : 0);
    this.playWalkAnimation(entity, oldPosition, facing, shouldJumpDown, isOnBlock, groundType, targetYIndex, completionHandler);
  };

  /**
   * @see LevelView.playMoveForwardAnimation
   */


  LevelView.prototype.playMoveBackwardAnimation = function playMoveBackwardAnimation(entity, oldPosition, facing, shouldJumpDown, isOnBlock, groundType, completionHandler) {
    // make sure to render high for when moving north after placing a block
    var targetYIndex = entity.position[1] + (facing === FacingDirection.South ? 1 : 0);
    this.playWalkAnimation(entity, oldPosition, facing, shouldJumpDown, isOnBlock, groundType, targetYIndex, completionHandler);
  };

  LevelView.prototype.playWalkAnimation = function playWalkAnimation(entity, oldPosition, facing, shouldJumpDown, isOnBlock, groundType, targetYIndex, completionHandler) {
    var _this11 = this;

    var tween = void 0;
    var position = entity.position;

    //stepping on stone sfx
    this.playBlockSound(groundType);

    if (entity.shouldUpdateSelectionIndicator()) {
      this.setSelectionIndicatorPosition(position[0], position[1]);
    }

    if (!shouldJumpDown) {
      var animName = 'walk' + this.getDirectionName(facing);
      this.playScaledSpeed(entity.sprite.animations, animName);
      tween = this.addResettableTween(entity.sprite).to(this.positionToScreen(position, isOnBlock, entity), 180, Phaser.Easing.Linear.None);
    } else {
      tween = this.playPlayerJumpDownVerticalAnimation(facing, position, oldPosition);
    }

    // Update the sort order 3/4 of the way through the animation
    tween.onUpdateCallback(function (tween, percent) {
      if (percent >= 0.75) {
        entity.sprite.sortOrder = _this11.yToIndex(targetYIndex) + entity.getSortOrderOffset();
        tween.onUpdateCallback(null);
      }
    });

    tween.onComplete.add(function () {
      completionHandler();
    });

    tween.start();
  };

  /**
   * Animate the player jumping down from on top of a block to ground level.
   * @param {FacingDirection} facing
   * @param {Array<int>}position
   * @param {?Array<int>} oldPosition
   * @return {Phaser.Tween}
   */


  LevelView.prototype.playPlayerJumpDownVerticalAnimation = function playPlayerJumpDownVerticalAnimation(facing, position) {
    var _this12 = this;

    var oldPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : position;

    var animName = "jumpDown" + this.getDirectionName(facing);
    this.playScaledSpeed(this.player.sprite.animations, animName);

    var start = this.positionToScreen(oldPosition);
    var end = this.positionToScreen(position);
    var tween = this.addResettableTween(this.player.sprite).to({
      x: [start.x, end.x, end.x],
      y: [start.y, end.y - 50, end.y]
    }, 300, Phaser.Easing.Linear.None).interpolation(function (v, k) {
      return Phaser.Math.bezierInterpolation(v, k);
    });
    tween.onComplete.addOnce(function () {
      _this12.audioPlayer.play("fall");
    });
    tween.start();

    return tween;
  };

  LevelView.prototype.playPlaceBlockAnimation = function playPlaceBlockAnimation(position, facing, blockType, blockTypeAtPosition, entity, completionHandler) {
    var _this13 = this;

    var jumpAnimName;
    var blockIndex = this.yToIndex(position[1]) + position[0];

    if (entity.shouldUpdateSelectionIndicator()) {
      this.setSelectionIndicatorPosition(position[0], position[1]);
    }

    if (entity === this.agent || LevelBlock.isWalkable(blockType)) {
      var signalDetacher = this.playPlayerAnimation("punch", position, facing, false, entity).onComplete.add(function () {
        signalDetacher.detach();
        completionHandler();
      });
    } else {
      this.audioPlayer.play("placeBlock");

      var direction = this.getDirectionName(facing);

      jumpAnimName = "jumpUp" + direction;

      if (blockTypeAtPosition !== "") {
        this.playExplosionAnimation(position, facing, position, blockTypeAtPosition, function () {}, false);
      }

      this.playScaledSpeed(this.player.sprite.animations, jumpAnimName);
      var placementTween = this.addResettableTween(this.player.sprite).to({
        y: -55 + 40 * position[1]
      }, 125, Phaser.Easing.Cubic.EaseOut);

      placementTween.onComplete.addOnce(function () {
        placementTween = null;

        if (blockTypeAtPosition !== "") {
          _this13.actionPlaneBlocks[blockIndex].kill();
        }
        completionHandler();
      });
      placementTween.start();
    }
  };

  LevelView.prototype.playPlaceBlockInFrontAnimation = function playPlaceBlockInFrontAnimation() {
    var entity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player;
    var playerPosition = arguments[1];
    var facing = arguments[2];
    var blockPosition = arguments[3];
    var completionHandler = arguments[4];

    this.setSelectionIndicatorPosition(blockPosition[0], blockPosition[1]);

    this.playPlayerAnimation("punch", playerPosition, facing, false, entity).onComplete.addOnce(function () {
      completionHandler();
    });
  };

  LevelView.prototype.correctForShadowOverlay = function correctForShadowOverlay(blockType, sprite) {
    if (blockType.startsWith("piston")) {
      sprite.sortOrder -= 0.1;
    }
  };

  LevelView.prototype.createActionPlaneBlock = function createActionPlaneBlock(position, blockType) {
    var block = new LevelBlock(blockType);
    var blockIndex = this.yToIndex(position[1]) + position[0];

    // Remove the old sprite at this position, if there is one.
    this.actionGroup.remove(this.actionPlaneBlocks[blockIndex]);
    this.groundGroup.remove(this.actionPlaneBlocks[blockIndex]);

    if (block.isEmpty) {
      this.actionPlaneBlocks[blockIndex] = null;
      return;
    }

    // Create a new sprite.
    var sprite = void 0;
    if (block.getIsMiniblock()) {
      // miniblocks defined on the action plane like this should have a
      // closer collectible range and a narrower drop offset than normal
      sprite = this.createMiniBlock(position[0], position[1], blockType, {
        collectibleDistance: 1,
        xOffsetRange: 10,
        yOffsetRange: 10
      });
    } else {
      var group = block.shouldRenderOnGroundPlane() ? this.groundGroup : this.actionGroup;
      var offset = block.shouldRenderOnGroundPlane() ? -0.5 : 0;
      sprite = this.createBlock(group, position[0], position[1] + offset, blockType);
    }

    if (sprite) {
      sprite.sortOrder = this.yToIndex(position[1]);
      this.correctForShadowOverlay(blockType, sprite);
    }

    this.actionPlaneBlocks[blockIndex] = sprite;
  };

  LevelView.prototype.playShearAnimation = function playShearAnimation(playerPosition, facing, destroyPosition, blockType, completionHandler) {
    var _this14 = this;

    var blockIndex = this.yToIndex(destroyPosition[1]) + destroyPosition[0];
    var blockToShear = this.actionPlaneBlocks[blockIndex];

    blockToShear.animations.stop(null, true);
    this.onAnimationLoopOnce(this.playScaledSpeed(blockToShear.animations, "used"), function () {
      _this14.playScaledSpeed(blockToShear.animations, "face");
    });

    this.playExplosionAnimation(playerPosition, facing, destroyPosition, blockType, completionHandler, true);
  };

  LevelView.prototype.playShearSheepAnimation = function playShearSheepAnimation(playerPosition, facing, destroyPosition, blockType, completionHandler) {
    var _this15 = this;

    this.setSelectionIndicatorPosition(destroyPosition[0], destroyPosition[1]);

    this.onAnimationEnd(this.playPlayerAnimation("punch", playerPosition, facing, false), function () {
      var blockIndex = _this15.yToIndex(destroyPosition[1]) + destroyPosition[0];
      var blockToShear = _this15.actionPlaneBlocks[blockIndex];

      blockToShear.animations.stop(null, true);
      _this15.onAnimationLoopOnce(_this15.playScaledSpeed(blockToShear.animations, "used"), function () {
        _this15.playScaledSpeed(blockToShear.animations, "face");
      });

      _this15.playExplosionAnimation(playerPosition, facing, destroyPosition, blockType, completionHandler, true);
    });
  };

  LevelView.prototype.destroyBlockWithoutPlayerInteraction = function destroyBlockWithoutPlayerInteraction(destroyPosition) {
    var _this16 = this;

    var blockIndex = this.yToIndex(destroyPosition[1]) + destroyPosition[0];
    var blockToDestroy = this.actionPlaneBlocks[blockIndex];

    var destroyOverlay = this.actionGroup.create(-12 + 40 * destroyPosition[0], -22 + 40 * destroyPosition[1], "destroyOverlay", "destroy1");
    destroyOverlay.sortOrder = this.yToIndex(destroyPosition[1]) + 2;
    this.onAnimationEnd(destroyOverlay.animations.add("destroy", Phaser.Animation.generateFrameNames("destroy", 1, 12, "", 0), 30, false), function () {
      _this16.actionPlaneBlocks[blockIndex] = null;

      if (blockToDestroy.hasOwnProperty("onBlockDestroy")) {
        blockToDestroy.onBlockDestroy(blockToDestroy);
      }

      blockToDestroy.kill();
      destroyOverlay.kill();
      _this16.toDestroy.push(blockToDestroy);
      _this16.toDestroy.push(destroyOverlay);
      _this16.audioPlayer.play('dig_wood1');
    });

    this.playScaledSpeed(destroyOverlay.animations, "destroy");
  };

  LevelView.prototype.playDestroyBlockAnimation = function playDestroyBlockAnimation(playerPosition, facing, destroyPosition, blockType, entity, completionHandler) {
    if (entity.shouldUpdateSelectionIndicator()) {
      this.setSelectionIndicatorPosition(destroyPosition[0], destroyPosition[1]);
    }

    var playerAnimation = undefined;
    if (entity === this.agent) {
      playerAnimation = "punchDestroy";
    } else {
      playerAnimation = blockType.match(/(ore|stone|clay|bricks|bedrock)/) ? "mine" : "punchDestroy";
    }
    this.playPlayerAnimation(playerAnimation, playerPosition, facing, false, entity);
    this.playMiningParticlesAnimation(facing, destroyPosition);
    this.playBlockDestroyOverlayAnimation(playerPosition, facing, destroyPosition, blockType, entity, completionHandler);
  };

  LevelView.prototype.playPunchDestroyAirAnimation = function playPunchDestroyAirAnimation(playerPosition, facing, destroyPosition, completionHandler) {
    var entity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.player;

    this.playPunchAnimation(playerPosition, facing, destroyPosition, "punchDestroy", completionHandler, entity);
  };

  LevelView.prototype.playPunchAirAnimation = function playPunchAirAnimation(playerPosition, facing, destroyPosition, completionHandler) {
    var entity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.player;

    this.playPunchAnimation(playerPosition, facing, destroyPosition, "punch", completionHandler, entity);
  };

  LevelView.prototype.playPunchAnimation = function playPunchAnimation(playerPosition, facing, destroyPosition, animationType, completionHandler) {
    var entity = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.player;

    if (entity.shouldUpdateSelectionIndicator()) {
      this.setSelectionIndicatorPosition(destroyPosition[0], destroyPosition[1]);
    }
    this.onAnimationEnd(this.playPlayerAnimation(animationType, playerPosition, facing, false, entity), function () {
      completionHandler();
    });
  };

  /**
   * Play the block Destroy Overlay animation. As a side effect, also actually
   * destroy the block in the level model, update the visualization, and play
   * the block Explision animation.
   *
   * Note that if the block is of a type that does not require an overlay
   * animation, this method (confusingly) simply calls the side effects
   * immediately.
   */


  LevelView.prototype.playBlockDestroyOverlayAnimation = function playBlockDestroyOverlayAnimation(playerPosition, facing, destroyPosition, blockType, entity, completionHandler) {
    var _this17 = this;

    var blockIndex = this.yToIndex(destroyPosition[1]) + destroyPosition[0];
    var blockToDestroy = this.actionPlaneBlocks[blockIndex];

    var afterDestroy = function afterDestroy() {
      if (blockToDestroy.hasOwnProperty("onBlockDestroy")) {
        blockToDestroy.onBlockDestroy(blockToDestroy);
      }

      _this17.controller.levelModel.destroyBlockForward(entity);
      _this17.controller.updateShadingPlane();
      _this17.controller.updateFowPlane();

      if (entity.shouldUpdateSelectionIndicator()) {
        _this17.setSelectionIndicatorPosition(playerPosition[0], playerPosition[1]);
      }

      _this17.audioPlayer.play('dig_wood1');
      _this17.playExplosionAnimation(playerPosition, facing, destroyPosition, blockType, completionHandler, true, entity);
    };

    if (LevelBlock.skipsDestructionOverlay(blockType)) {
      // "flat" blocks are by definition not cube shaped and so shouldn't accept
      // the cube-shaped destroy overlay animation. In this case, destroy the
      // block immediately without waiting for the animation.
      afterDestroy();
    } else {
      (function () {
        var destroyOverlay = _this17.actionGroup.create(-12 + 40 * destroyPosition[0], -22 + 40 * destroyPosition[1], "destroyOverlay", "destroy1");
        if (LevelBlock.isFlat(blockType)) {
          var cropRect = new Phaser.Rectangle(0, 0, 60, 40);
          destroyOverlay.position.y += 20;
          destroyOverlay.crop(cropRect);
        }
        destroyOverlay.sortOrder = _this17.yToIndex(destroyPosition[1]) + 2;
        _this17.onAnimationEnd(destroyOverlay.animations.add("destroy", Phaser.Animation.generateFrameNames("destroy", 1, 12, "", 0), 30, false), function () {
          destroyOverlay.kill();
          _this17.toDestroy.push(destroyOverlay);

          afterDestroy();
        });
        _this17.playScaledSpeed(destroyOverlay.animations, "destroy");
      })();
    }
  };

  LevelView.prototype.playMiningParticlesAnimation = function playMiningParticlesAnimation(facing, destroyPosition) {
    var _this18 = this;

    var miningParticlesData = [[24, -100, -80], // left
    [12, -120, -80], // bottom
    [0, -60, -80], // right
    [36, -80, -60]];

    var direction = this.getDirectionName(facing);
    var miningParticlesIndex = direction === "_left" ? 0 : direction === "_bottom" ? 1 : direction === "_right" ? 2 : 3;
    var miningParticlesFirstFrame = miningParticlesData[miningParticlesIndex][0];
    var miningParticlesOffsetX = miningParticlesData[miningParticlesIndex][1];
    var miningParticlesOffsetY = miningParticlesData[miningParticlesIndex][2];
    var miningParticles = this.actionGroup.create(miningParticlesOffsetX + 40 * destroyPosition[0], miningParticlesOffsetY + 40 * destroyPosition[1], "miningParticles", "MiningParticles" + miningParticlesFirstFrame);
    miningParticles.sortOrder = this.yToIndex(destroyPosition[1]) + 2;
    this.onAnimationEnd(miningParticles.animations.add("miningParticles", Phaser.Animation.generateFrameNames("MiningParticles", miningParticlesFirstFrame, miningParticlesFirstFrame + 11, "", 0), 30, false), function () {
      miningParticles.kill();
      _this18.toDestroy.push(miningParticles);
    });
    this.playScaledSpeed(miningParticles.animations, "miningParticles");
  };

  LevelView.prototype.playExplosionAnimation = function playExplosionAnimation(playerPosition, facing, destroyPosition, blockType, completionHandler, placeBlock) {
    var _this19 = this;

    var entity = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : this.player;

    var explodeAnim = this.actionGroup.create(-36 + 40 * destroyPosition[0], -30 + 40 * destroyPosition[1], "blockExplode", "BlockBreakParticle0");

    switch (blockType) {
      case "treeAcacia":
      case "logAcacia":
        explodeAnim.tint = 0x6c655a;
        break;
      case "treeBirch":
      case "logBirch":
        explodeAnim.tint = 0xdad6cc;
        break;
      case "treeJungle":
      case "logJungle":
        explodeAnim.tint = 0x6a4f31;
        break;
      case "treeOak":
      case "logOak":
        explodeAnim.tint = 0x675231;
        break;
      case "treeSpruce":
      case "logSpruce":
        explodeAnim.tint = 0x4b3923;
        break;
      case "planksAcacia":
        explodeAnim.tint = 0xba6337;
        break;
      case "planksBirch":
        explodeAnim.tint = 0xd7cb8d;
        break;
      case "planksJungle":
        explodeAnim.tint = 0xb88764;
        break;
      case "planksOak":
        explodeAnim.tint = 0xb4905a;
        break;
      case "planksSpruce":
        explodeAnim.tint = 0x805e36;
        break;
      case "stone":
      case "oreCoal":
      case "oreDiamond":
      case "oreIron":
      case "oreGold":
      case "oreEmerald":
      case "oreRedstone":
        explodeAnim.tint = 0xC6C6C6;
        break;
      case "grass":
      case "cropWheat":
        explodeAnim.tint = 0x5d8f23;
        break;
      case "dirt":
        explodeAnim.tint = 0x8a5e33;
        break;

      case "redstoneWireOn":
      case "redstoneWireHorizontalOn":
      case "redstoneWireVerticalOn":
      case "redstoneWireUpRightOn":
      case "redstoneWireUpLeftOn":
      case "redstoneWireDownRightOn":
      case "redstoneWireDownLeftOn":
      case "redstoneWireTUpOn":
      case "redstoneWireTDownOn":
      case "redstoneWireTLeftOn":
      case "redstoneWireTRightOn":
      case "redstoneWireCrossOn":
        explodeAnim.tint = 0x990707;
        break;

      case "redstoneWire":
      case "redstoneWireHorizontal":
      case "redstoneWireVertical":
      case "redstoneWireUpRight":
      case "redstoneWireUpLeft":
      case "redstoneWireDownRight":
      case "redstoneWireDownLeft":
      case "redstoneWireTUp":
      case "redstoneWireTDown":
      case "redstoneWireTLeft":
      case "redstoneWireTRight":
      case "redstoneWireCross":
        explodeAnim.tint = 0x290202;
        break;

      default:
        break;
    }

    explodeAnim.sortOrder = this.yToIndex(destroyPosition[1]) + 2;
    this.onAnimationEnd(explodeAnim.animations.add("explode", Phaser.Animation.generateFrameNames("BlockBreakParticle", 0, 7, "", 0), 30, false), function () {
      explodeAnim.kill();
      _this19.toDestroy.push(explodeAnim);

      if (placeBlock) {
        if (!_this19.controller.getIsDirectPlayerControl()) {
          _this19.playPlayerAnimation("idle", playerPosition, facing, false, entity);
        }
        if (completionHandler !== null) {
          _this19.playItemDropAnimation(destroyPosition, blockType, completionHandler);
        }
      }
    });
    this.playScaledSpeed(explodeAnim.animations, "explode");
    if (this.controller.getIsDirectPlayerControl() ^ !placeBlock) {
      if (completionHandler) {
        completionHandler();
      }
    }
  };

  LevelView.prototype.playItemDropAnimation = function playItemDropAnimation(destroyPosition, blockType, completionHandler) {
    var _this20 = this;

    var sprite = this.createMiniBlock(destroyPosition[0], destroyPosition[1], blockType);

    if (sprite) {
      sprite.sortOrder = this.yToIndex(destroyPosition[1]) + 2;
    }

    if (this.controller.getIsDirectPlayerControl()) {
      if (completionHandler) {
        completionHandler();
      }
    } else {
      this.onAnimationEnd(this.playScaledSpeed(sprite.animations, "animate"), function () {
        var player = _this20.controller.levelModel.player;
        _this20.playItemAcquireAnimation(player.position, player.facing, sprite, completionHandler, blockType);
      });
    }
  };

  LevelView.prototype.playScaledSpeed = function playScaledSpeed(animationManager, name) {
    var animation = animationManager.getAnimation(name);
    if (animation === null) {
      console.log("can't find animation name : " + name);
    } else {
      if (!animation.originalFps) {
        animation.originalFps = 1000 / animation.delay;
      }
      var fps = this.controller.originalFpsToScaled(animation.originalFps);
      return animationManager.play(name, fps);
    }
  };

  LevelView.prototype.playItemAcquireAnimation = function playItemAcquireAnimation(playerPosition, facing, sprite, completionHandler, blockType) {
    var _this21 = this;

    var tween;

    tween = this.addResettableTween(sprite).to(this.positionToScreen(playerPosition), 200, Phaser.Easing.Linear.None);

    tween.onComplete.add(function () {
      var caughtUpToPlayer = Position.equals(_this21.player.position, playerPosition);
      if (sprite.alive && caughtUpToPlayer) {
        _this21.audioPlayer.play("collectedBlock");
        _this21.player.inventory[blockType] = (_this21.player.inventory[blockType] || 0) + 1;
        sprite.kill();
        _this21.toDestroy.push(sprite);
        var event = createEvent('craftCollectibleCollected');
        event.blockType = blockType;
        window.dispatchEvent(event);
        if (completionHandler) {
          completionHandler();
        }
      } else {
        _this21.playItemAcquireAnimation(_this21.player.position, _this21.player.facing, sprite, completionHandler, blockType);
      }
    });

    tween.start();
  };

  /**
   * Convert a grid coordinate position to a screen X/Y location.
   * @param {Array<int>} position
   * @param {?boolean} isOnBlock
   * @return {{x: number, y: number}}
   */


  LevelView.prototype.positionToScreen = function positionToScreen(position) {
    var isOnBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var entity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.player;

    var x = position[0];
    var y = position[1];
    var xOffset = entity.offset[0];
    var yOffset = entity.offset[1];
    return {
      x: xOffset + 40 * x,
      y: yOffset + (isOnBlock ? -23 : 0) + 40 * y
    };
  };

  /**
   * @param {Position} position
   * @param {boolean} isOnBlock
   * @param {Entity} entity
   */


  LevelView.prototype.setPlayerPosition = function setPlayerPosition(position, isOnBlock) {
    var entity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.player;

    var screen = this.positionToScreen(position, isOnBlock, entity);
    entity.sprite.x = screen.x;
    entity.sprite.y = screen.y;
    entity.sprite.sortOrder = this.yToIndex(screen.y) + entity.getSortOrderOffset();
  };

  LevelView.prototype.setSelectionIndicatorPosition = function setSelectionIndicatorPosition(x, y) {
    this.selectionIndicator.x = -35 + 23 + 40 * x;
    this.selectionIndicator.y = -55 + 43 + 40 * y;
  };

  /**
   * @param {Array<Array<int>>} gridSpaces An array of x and y grid coordinates.
   */


  LevelView.prototype.drawHintPath = function drawHintPath(gridSpaces) {
    this.hintGroup.removeAll(true);

    var bounds = this.game.world.bounds;
    var hintPath = this.game.add.bitmapData(bounds.width, bounds.height);

    var context = hintPath.context;
    context.setLineDash([10, 10]);
    context.lineDashOffset = 5;
    context.lineWidth = 2;
    context.strokeStyle = '#fff';
    context.shadowColor = '#000';
    context.shadowOffsetY = 7;
    context.shadowBlur = 4;

    context.beginPath();
    gridSpaces.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      context.lineTo(40 * x + 19, 40 * y + 19);
    });
    context.stroke();

    var sprite = this.hintGroup.create(0, 0, hintPath);
    sprite.alpha = 0;

    this.addResettableTween(sprite).to({ alpha: 1 }, 830, Phaser.Easing.Quadratic.Out).to({ alpha: 0.4 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);
  };

  LevelView.prototype.createGroups = function createGroups() {
    this.groundGroup = this.game.add.group();
    this.groundGroup.yOffset = -2;
    this.shadingGroup = this.game.add.group();
    this.shadingGroup.yOffset = -2;
    this.hintGroup = this.game.add.group();
    this.actionGroup = this.game.add.group();
    this.actionGroup.yOffset = -22;
    this.fluffGroup = this.game.add.group();
    this.fluffGroup.yOffset = -160;
    this.fowGroup = this.game.add.group();
    this.fowGroup.yOffset = 0;
  };

  LevelView.prototype.resetGroups = function resetGroups(levelData) {
    var sprite, x, y;

    this.groundGroup.removeAll(true);
    this.actionGroup.removeAll(true);
    this.hintGroup.removeAll(true);
    this.fluffGroup.removeAll(true);
    this.shadingGroup.removeAll(true);
    this.fowGroup.removeAll(true);

    this.baseShading = this.game.add.group();

    this.actionPlaneBlocks = [];
    this.refreshGroundGroup();

    for (y = 0; y < this.controller.levelModel.planeHeight; ++y) {
      for (x = 0; x < this.controller.levelModel.planeWidth; ++x) {
        var position = new Position(x, y);
        sprite = null;

        var groundBlock = levelData.groundDecorationPlane.getBlockAt(position);
        if (!groundBlock.isEmpty) {
          sprite = this.createBlock(this.actionGroup, x, y, groundBlock.blockType);
          if (sprite) {
            sprite.sortOrder = this.yToIndex(y);
          }
        }

        var actionBlock = levelData.actionPlane.getBlockAt(position);
        if (!actionBlock.shouldRenderOnGroundPlane()) {
          this.createActionPlaneBlock(position, actionBlock.blockType);
        }
      }
    }

    for (y = 0; y < this.controller.levelModel.planeHeight; ++y) {
      for (x = 0; x < this.controller.levelModel.planeWidth; ++x) {
        var _position = new Position(x, y);
        if (!levelData.fluffPlane.getBlockAt(_position).isEmpty) {
          sprite = this.createBlock(this.fluffGroup, x, y, levelData.fluffPlane.getBlockAt(_position).blockType);
        }
      }
    }
  };

  LevelView.prototype.refreshGroundGroup = function refreshGroundGroup() {
    this.groundGroup.removeAll(true);
    for (var y = 0; y < this.controller.levelModel.planeHeight; ++y) {
      for (var x = 0; x < this.controller.levelModel.planeWidth; ++x) {
        var position = new Position(x, y);
        var groundBlock = this.controller.levelModel.groundPlane.getBlockAt(position);
        var sprite = this.createBlock(this.groundGroup, x, y, groundBlock.blockType);

        if (sprite) {
          sprite.sortOrder = this.yToIndex(y);
        }

        var actionBlock = this.controller.levelModel.actionPlane.getBlockAt(position);
        if (actionBlock && actionBlock.shouldRenderOnGroundPlane()) {
          this.createActionPlaneBlock(position, actionBlock.blockType);
        }
      }
    }
  };

  LevelView.prototype.refreshActionGroup = function refreshActionGroup(positions) {
    var _this22 = this;

    // We need to add indices to refresh if there are other blocks in the action plane that might
    // conflict with the drawing of refreshed blocks.
    for (var i = 0; i < positions.length; ++i) {
      var positionBelow = Position.south(positions[i]);
      var indexIsValid = this.controller.levelModel.actionPlane.inBounds(positionBelow);
      if (indexIsValid) {
        var blockToCheck = this.controller.levelModel.actionPlane.getBlockAt(positionBelow);
        var indexIsEmpty = blockToCheck.blockType === "";
        if (!indexIsEmpty) {
          positions.push(positionBelow);
        }
      }
    }

    // Once all blocks that need to be refreshed are accounted for, go in and actually refresh.
    positions.forEach(function (position) {
      if (position) {
        var newBlock = _this22.controller.levelModel.actionPlane.getBlockAt(position);

        // we don't want to refresh doors. They're not destroyable, and
        // refreshing will lead to bad animation states
        if (newBlock && newBlock.getIsDoor()) {
          return;
        }

        if (newBlock && newBlock.getIsMiniblock() || newBlock && newBlock.getIsTree()) {
          return;
        }

        if (newBlock && newBlock.blockType) {
          _this22.createActionPlaneBlock(position, newBlock.blockType);
        } else if (newBlock) {
          // Remove the old sprite at this position, if there is one.
          var index = _this22.coordinatesToIndex(position);
          _this22.actionGroup.remove(_this22.actionPlaneBlocks[index]);
          _this22.groundGroup.remove(_this22.actionPlaneBlocks[index]);
        }
      }
    });
  };

  LevelView.prototype.updateShadingGroup = function updateShadingGroup(shadingData) {
    var index, shadowItem, sx, sy, atlas;

    this.shadingGroup.removeAll();

    this.shadingGroup.add(this.baseShading);
    if (this.selectionIndicator) {
      this.shadingGroup.add(this.selectionIndicator);
    }

    for (index = 0; index < shadingData.length; ++index) {
      shadowItem = shadingData[index];

      atlas = shadowItem.atlas;
      sx = 40 * shadowItem.x;
      sy = 40 * shadowItem.y;

      var sprite = this.shadingGroup.create(sx, sy, atlas, shadowItem.type);
      if (atlas === 'WaterAO') {
        sprite.tint = 0x555555;
      }
    }
  };

  LevelView.prototype.updateFowGroup = function updateFowGroup(fowData) {
    var index, fx, fy, atlas;

    this.fowGroup.removeAll();

    for (index = 0; index < fowData.length; ++index) {
      var fowItem = fowData[index];

      if (fowItem !== "") {
        atlas = "undergroundFow";
        fx = -40 + 40 * fowItem.x;
        fy = -40 + 40 * fowItem.y;

        switch (fowItem.type) {
          case "FogOfWar_Center":
            break;

          default:
            break;
        }

        var sprite = this.fowGroup.create(fx, fy, atlas, fowItem.type);
        sprite.alpha = 0.8;
      }
    }
  };

  LevelView.prototype.playRandomPlayerIdle = function playRandomPlayerIdle(facing) {
    var entity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.player;

    var facingName, rand, animationName;

    facingName = this.getDirectionName(facing);
    rand = Math.trunc(Math.random() * 4) + 1;

    switch (rand) {
      case 1:
        animationName = "idle";
        break;
      case 2:
        animationName = "lookLeft";
        break;
      case 3:
        animationName = "lookRight";
        break;
      case 4:
        animationName = "lookAtCam";
        break;
      default:
    }

    animationName += facingName;
    this.playScaledSpeed(entity.sprite.animations, animationName);
  };

  LevelView.prototype.generatePlayerCelebrateFrames = function generatePlayerCelebrateFrames() {
    var frameList = [];

    //Face Down
    for (var i = 0; i < 6; ++i) {
      frameList.push("Player_001");
    }
    //Crouch Left
    frameList = frameList.concat("Player_259");
    frameList = frameList.concat("Player_260");
    //Jump
    frameList.push("Player_261");
    frameList.push("Player_297");
    frameList.push("Player_298");
    frameList.push("Player_297");
    frameList.push("Player_261");
    //Jump
    frameList.push("Player_261");
    frameList.push("Player_297");
    frameList.push("Player_298");
    frameList.push("Player_297");
    frameList.push("Player_261");
    //Pause
    frameList.push("Player_001");
    frameList.push("Player_001");
    frameList.push("Player_001");
    frameList.push("Player_001");
    frameList.push("Player_001");
    //Jump
    frameList.push("Player_261");
    frameList.push("Player_297");
    frameList.push("Player_298");
    frameList.push("Player_297");
    frameList.push("Player_261");
    //Jump
    frameList.push("Player_261");
    frameList.push("Player_297");
    frameList.push("Player_298");
    frameList.push("Player_297");
    frameList.push("Player_261");

    return frameList;
  };

  LevelView.prototype.generateFramesWithEndDelay = function generateFramesWithEndDelay(frameName, startFrame, endFrame, endFrameFullName, buffer, frameDelay) {
    var frameList = Phaser.Animation.generateFrameNames(frameName, startFrame, endFrame, "", buffer);
    for (var i = 0; i < frameDelay; ++i) {
      frameList.push(endFrameFullName);
    }
    return frameList;
  };

  LevelView.prototype.generateReverseFrames = function generateReverseFrames(frameName, startFrame, endFrame, suffix, buffer) {
    var frameList = Phaser.Animation.generateFrameNames(frameName, startFrame, endFrame, suffix, buffer);
    return frameList.concat(Phaser.Animation.generateFrameNames(frameName, endFrame - 1, startFrame, suffix, buffer));
  };

  LevelView.prototype.preparePlayerSprite = function preparePlayerSprite(playerName) {
    var _this23 = this;

    var entity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.player;


    entity.sprite = this.actionGroup.create(0, 0, "player" + playerName, 'Player_121');
    if (this.controller.followingPlayer() && entity === this.player) {
      this.game.camera.follow(entity.sprite);
    }

    if (entity.shouldUpdateSelectionIndicator()) {
      this.selectionIndicator = this.shadingGroup.create(24, 44, 'selectionIndicator');
    }

    this.generateAnimations(FacingDirection.South, 0, entity);
    this.generateAnimations(FacingDirection.East, 60, entity);
    this.generateAnimations(FacingDirection.North, 120, entity);
    this.generateAnimations(FacingDirection.West, 180, entity);

    var frameRate = 20;
    var idleFrameRate = 10;
    var frameList = void 0;

    frameList = this.generateFramesWithEndDelay("Player_", 263, 262, "Player_262", 3, 5);
    frameList.push("Player_263");
    entity.sprite.animations.add('lookAtCam_down', frameList, idleFrameRate, false).onComplete.add(function () {
      _this23.playScaledSpeed(entity.sprite.animations, "idlePause_down");
    });

    frameList = this.generateFramesWithEndDelay("Player_", 270, 269, "Player_269", 3, 5);
    frameList.push("Player_270");
    entity.sprite.animations.add('lookAtCam_right', frameList, idleFrameRate, false).onComplete.add(function () {
      _this23.playScaledSpeed(entity.sprite.animations, "idlePause_right");
    });

    frameList = this.generateFramesWithEndDelay("Player_", 277, 276, "Player_276", 3, 5);
    frameList.push("Player_277");
    entity.sprite.animations.add('lookAtCam_up', frameList, idleFrameRate, false).onComplete.add(function () {
      _this23.playScaledSpeed(entity.sprite.animations, "idlePause_up");
    });

    frameList = this.generateFramesWithEndDelay("Player_", 284, 283, "Player_283", 3, 5);
    frameList.push("Player_284");
    entity.sprite.animations.add('lookAtCam_left', frameList, idleFrameRate, false).onComplete.add(function () {
      _this23.playScaledSpeed(entity.sprite.animations, "idlePause_left");
    });

    entity.sprite.animations.add('mine_down', Phaser.Animation.generateFrameNames("Player_", 241, 244, "", 3), frameRate, true);
    entity.sprite.animations.add('mine_right', Phaser.Animation.generateFrameNames("Player_", 245, 248, "", 3), frameRate, true);
    entity.sprite.animations.add('mine_up', Phaser.Animation.generateFrameNames("Player_", 249, 252, "", 3), frameRate, true);
    entity.sprite.animations.add('mine_left', Phaser.Animation.generateFrameNames("Player_", 253, 256, "", 3), frameRate, true);

    entity.sprite.animations.add('mineCart_down', Phaser.Animation.generateFrameNames("Minecart_", 5, 5, "", 2), frameRate, false);
    entity.sprite.animations.add('mineCart_turnleft_down', Phaser.Animation.generateFrameNames("Minecart_", 6, 6, "", 2), frameRate, false);
    entity.sprite.animations.add('mineCart_turnright_down', Phaser.Animation.generateFrameNames("Minecart_", 12, 12, "", 2), frameRate, false);

    entity.sprite.animations.add('mineCart_right', Phaser.Animation.generateFrameNames("Minecart_", 7, 7, "", 2), frameRate, false);
    entity.sprite.animations.add('mineCart_left', Phaser.Animation.generateFrameNames("Minecart_", 11, 11, "", 2), frameRate, false);

    entity.sprite.animations.add('mineCart_up', Phaser.Animation.generateFrameNames("Minecart_", 9, 9, "", 2), frameRate, false);
    entity.sprite.animations.add('mineCart_turnleft_up', Phaser.Animation.generateFrameNames("Minecart_", 10, 10, "", 2), frameRate, false);
    entity.sprite.animations.add('mineCart_turnright_up', Phaser.Animation.generateFrameNames("Minecart_", 8, 8, "", 2), frameRate, false);
  };

  LevelView.prototype.playerFrameName = function playerFrameName(n) {
    return Phaser.Animation.generateFrameNames("Player_", n, n, "", 3);
  };

  /**
   * Create action animations for Alex, Steve and the Agent from the sprite
   * sheet and JSON map.
   * @param {FacingDirection} facing
   * @param {int} offset
   */


  LevelView.prototype.generateAnimations = function generateAnimations(facing, offset) {
    var _this24 = this;

    var entity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.player;

    var direction = this.getDirectionName(facing);
    var idleFrameRate = 10;
    var frameRate = 20;

    var frameList = [];

    frameList.push(this.playerFrameName(offset + 1));
    frameList.push(this.playerFrameName(offset + 3));
    frameList.push(this.playerFrameName(offset + 1));
    frameList.push(this.playerFrameName(offset + 7));
    frameList.push(this.playerFrameName(offset + 9));
    frameList.push(this.playerFrameName(offset + 7));
    for (var i = 0; i < 5; ++i) {
      frameList.push(this.playerFrameName(offset + 1));
    }

    entity.sprite.animations.add('idle' + direction, frameList, frameRate / 3, false).onComplete.add(function () {
      _this24.playRandomPlayerIdle(facing, entity);
    });
    frameList = this.generateFramesWithEndDelay("Player_", offset + 6, offset + 5, this.playerFrameName(offset + 5), 3, 5);
    frameList.push(this.playerFrameName(offset + 6));
    entity.sprite.animations.add('lookLeft' + direction, frameList, idleFrameRate, false).onComplete.add(function () {
      _this24.playScaledSpeed(entity.sprite.animations, "idlePause" + direction);
    });
    frameList = this.generateFramesWithEndDelay("Player_", offset + 12, offset + 11, this.playerFrameName(offset + 11), 3, 5);
    frameList.push(this.playerFrameName(offset + 12));
    entity.sprite.animations.add('lookRight' + direction, frameList, idleFrameRate, false).onComplete.add(function () {
      _this24.playScaledSpeed(entity.sprite.animations, "idlePause" + direction);
    });
    frameList = [];
    for (var _i = 0; _i < 13; ++_i) {
      frameList.push(this.playerFrameName(offset + 1));
    }
    entity.sprite.animations.add('idlePause' + direction, frameList, frameRate / 3, false).onComplete.add(function () {
      _this24.playRandomPlayerIdle(facing, entity);
    });

    entity.sprite.animations.add('walk' + direction, Phaser.Animation.generateFrameNames("Player_", offset + 13, offset + 20, "", 3), frameRate, true);
    var singlePunch = Phaser.Animation.generateFrameNames("Player_", offset + 21, offset + 24, "", 3);
    entity.sprite.animations.add('punch' + direction, singlePunch, frameRate, false).onComplete.add(function () {
      _this24.audioPlayer.play("punch");
    });
    entity.sprite.animations.add('punchDestroy' + direction, singlePunch.concat(singlePunch).concat(singlePunch), frameRate, false);
    entity.sprite.animations.add('hurt' + direction, Phaser.Animation.generateFrameNames("Player_", offset + 25, offset + 28, "", 3), frameRate, false).onComplete.add(function () {
      _this24.playScaledSpeed(entity.sprite.animations, "idlePause" + direction);
    });
    entity.sprite.animations.add('crouch' + direction, Phaser.Animation.generateFrameNames("Player_", offset + 29, offset + 32, "", 3), frameRate, true);
    entity.sprite.animations.add('jumpUp' + direction, Phaser.Animation.generateFrameNames("Player_", offset + 33, offset + 36, "", 3), frameRate / 2, true);
    entity.sprite.animations.add('fail' + direction, Phaser.Animation.generateFrameNames("Player_", offset + 45, offset + 48, "", 3), frameRate, false);
    entity.sprite.animations.add('celebrate' + direction, this.generatePlayerCelebrateFrames(), frameRate / 2, false);
    entity.sprite.animations.add('bump' + direction, Phaser.Animation.generateFrameNames("Player_", offset + 49, offset + 54, "", 3), frameRate, false).onStart.add(function () {
      _this24.audioPlayer.play("bump");
    });
    entity.sprite.animations.add('jumpDown' + direction, Phaser.Animation.generateFrameNames("Player_", offset + 55, offset + 60, "", 3), frameRate, true);
  };

  /**
   * Create a "miniblock" asset (representing a floating collectable) based on
   * the given block at the given coordinates
   *
   * @param {Number} x
   * @param {Number} y
   * @param {String} blockType
   * @param {Object} [overrides] optional overrides for various defaults
   * @param {Number} [overrides.collectibleDistance=2] distance at which the
   *        miniblock can be collected
   * @param {Number} [overrides.xOffsetRange=40]
   * @param {Number} [overrides.yOffsetRange=40]
   */


  LevelView.prototype.createMiniBlock = function createMiniBlock(x, y, blockType) {
    var _this25 = this;

    var overrides = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var sprite = null,
        frameList = void 0;

    var collectibleDistance = overrides.collectibleDistance || 2;
    var xOffsetRange = overrides.xOffsetRange || 40;
    var yOffsetRange = overrides.yOffsetRange || 40;

    var frame = LevelBlock.getMiniblockFrame(blockType);
    if (!(frame && this.miniBlocks[frame])) {
      return sprite;
    }

    var atlas = "miniBlocks";
    var framePrefix = this.miniBlocks[frame][0];
    var frameStart = this.miniBlocks[frame][1];
    var frameEnd = this.miniBlocks[frame][2];
    var xOffset = -10 - xOffsetRange / 2 + Math.random() * xOffsetRange;
    var yOffset = 0 - yOffsetRange / 2 + Math.random() * yOffsetRange + this.actionGroup.yOffset;
    var offset = new Position(xOffset, yOffset);

    frameList = Phaser.Animation.generateFrameNames(framePrefix, frameStart, frameEnd, ".png", 3);
    sprite = this.actionGroup.create(xOffset + 40 * x, yOffset + 40 * y, atlas, "");
    var anim = sprite.animations.add("animate", frameList, 10, false);

    // If direct player control, we have stuff to do to manage miniblock pick up
    if (this.controller.getIsDirectPlayerControl()) {
      (function () {
        var distanceBetween = function distanceBetween(position, position2) {
          return Math.sqrt(Math.pow(position.x - position2.x, 2) + Math.pow(position.y - position2.y, 2));
        };

        var collectiblePosition = _this25.controller.levelModel.spritePositionToIndex(offset, new Position(sprite.x, sprite.y));
        _this25.collectibleItems.push([sprite, offset, blockType, collectibleDistance]);
        anim.onComplete.add(function () {
          if (_this25.controller.levelModel.usePlayer) {
            if (distanceBetween(_this25.player.position, collectiblePosition) < collectibleDistance) {
              _this25.player.collectItems(new Position(x, y));
            }
          }
        });
      })();
    }

    this.playScaledSpeed(sprite.animations, "animate");
    return sprite;
  };

  LevelView.prototype.playAnimationWithOffset = function playAnimationWithOffset(sprite, animationName, animationFrameTotal, startFrame) {
    var rand = Math.trunc(Math.random() * animationFrameTotal) + startFrame;
    this.playScaledSpeed(sprite.animations, animationName).setFrame(rand, true);
  };

  LevelView.prototype.psuedoRandomTint = function psuedoRandomTint(group, sprite, x, y) {
    var psuedoRandom = Math.pow(x * 10 + y, 5) % 251;
    var darkness = psuedoRandom / 12;
    if (group === this.groundGroup) {
      darkness += 24;
    } else {
      darkness *= 0.75;
    }
    var brightness = Math.floor(0xff - darkness).toString(16);
    sprite.tint = '0x' + brightness + brightness + brightness;
  };

  LevelView.prototype.createBlock = function createBlock(group, x, y, blockType) {
    var _this26 = this;

    var position = new Position(x, y);

    var i,
        sprite = null,
        frameList,
        atlas,
        frame,
        xOffset,
        yOffset;

    var buildTree = function buildTree(levelView, frame) {
      var type = blockType.substring(4);
      sprite = levelView.createBlock(group, x, y, "log" + type);
      sprite.fluff = levelView.createBlock(levelView.fluffGroup, x, y, "leaves" + type);
      sprite.onBlockDestroy = function (logSprite) {
        logSprite.fluff.animations.add("despawn", Phaser.Animation.generateFrameNames("Leaves_" + type, frame[0], frame[1], ".png", 0), 10, false).onComplete.add(function () {
          levelView.toDestroy.push(logSprite.fluff);
          logSprite.fluff.kill();
        });

        levelView.playScaledSpeed(logSprite.fluff.animations, "despawn");
      };
      levelView.trees.push({ sprite: sprite, type: blockType, position: position });
    };

    var buildDoor = function buildDoor(levelView, type) {
      atlas = _this26.blocks[blockType][0];
      frame = _this26.blocks[blockType][1];
      xOffset = _this26.blocks[blockType][2];
      yOffset = _this26.blocks[blockType][3];
      sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);

      frameList = [];
      var animationFramesIron = Phaser.Animation.generateFrameNames(type, 0, 3, "", 1);
      for (var j = 0; j < 5; ++j) {
        frameList.push(type + "0");
      }
      frameList = frameList.concat(animationFramesIron);

      sprite.animations.add("open", frameList);

      frameList = [];
      animationFramesIron = Phaser.Animation.generateFrameNames(type, 3, 0, "", 1);
      for (var _j = 0; _j < 5; ++_j) {
        frameList.push(type + "3");
      }
      frameList = frameList.concat(animationFramesIron);
      sprite.animations.add("close", frameList);

      return sprite;
    };

    switch (blockType) {
      case "treeAcacia":
        //0,7
        buildTree(this, [0, 7]);
        break;
      case "treeBirch":
        //0,8
        buildTree(this, [0, 8]);
        break;
      case "treeJungle":
        //0,9
        buildTree(this, [0, 9]);
        break;
      case "treeOak":
        buildTree(this, [0, 6]);
        break;
      case "treeSpruce":
        //0,8
        buildTree(this, [0, 8]);
        break;
      case "treeSpruceSnowy":
        //1,9
        buildTree(this, [0, 8]);
        break;
      case "cropWheat":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        frameList = Phaser.Animation.generateFrameNames("Wheat", 0, 2, "", 0);
        sprite.animations.add("idle", frameList, 0.4, false);
        this.playScaledSpeed(sprite.animations, "idle");
        break;

      case "torch":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        frameList = Phaser.Animation.generateFrameNames("Torch", 0, 23, "", 0);
        sprite.animations.add("idle", frameList, 15, true);
        this.playScaledSpeed(sprite.animations, "idle");
        break;

      case "water":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        frameList = Phaser.Animation.generateFrameNames("Water_", 0, 5, "", 0);
        sprite.animations.add("idle", frameList, 5, true);
        this.playScaledSpeed(sprite.animations, "idle");
        break;

      //for placing wetland for crops in free play
      case "watering":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        sprite.kill();
        this.toDestroy.push(sprite);
        this.createBlock(this.groundGroup, x, y, "farmlandWet");
        this.refreshGroundGroup();
        break;

      case "lava":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        frameList = Phaser.Animation.generateFrameNames("Lava_", 0, 5, "", 0);
        sprite.animations.add("idle", frameList, 5, true);
        this.playScaledSpeed(sprite.animations, "idle");
        break;

      case "Nether_Portal":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        frameList = Phaser.Animation.generateFrameNames("Nether_Portal", 0, 5, "", 0);
        sprite.animations.add("idle", frameList, 5, true);
        this.playScaledSpeed(sprite.animations, "idle");
        break;

      case "lavaPop":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        frameList = Phaser.Animation.generateFrameNames("LavaPop", 1, 7, "", 2);
        for (i = 0; i < 4; ++i) {
          frameList.push("LavaPop07");
        }
        frameList = frameList.concat(Phaser.Animation.generateFrameNames("LavaPop", 8, 13, "", 2));
        for (i = 0; i < 3; ++i) {
          frameList.push("LavaPop13");
        }
        frameList = frameList.concat(Phaser.Animation.generateFrameNames("LavaPop", 14, 30, "", 2));
        for (i = 0; i < 8; ++i) {
          frameList.push("LavaPop01");
        }
        sprite.animations.add("idle", frameList, 5, true);
        this.playAnimationWithOffset(sprite, "idle", 29, 1);
        break;

      case "fire":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        frameList = Phaser.Animation.generateFrameNames("Fire", 0, 14, "", 2);
        sprite.animations.add("idle", frameList, 5, true);
        this.playScaledSpeed(sprite.animations, "idle");
        break;

      case "bubbles":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        frameList = Phaser.Animation.generateFrameNames("Bubbles", 0, 14, "", 2);
        sprite.animations.add("idle", frameList, 5, true);
        this.playScaledSpeed(sprite.animations, "idle");
        break;

      case "explosion":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        frameList = Phaser.Animation.generateFrameNames("Explosion", 0, 16, "", 1);
        sprite.animations.add("idle", frameList, 15, false).onComplete.add(function () {
          _this26.toDestroy.push(sprite);
          sprite.kill();
        });
        this.playScaledSpeed(sprite.animations, "idle");
        break;

      case "door":
        sprite = buildDoor(this, "Door");
        break;

      case "doorIron":
        sprite = buildDoor(this, "DoorIron");
        if (this.blockReceivesCornerShadow(x, y)) {
          sprite.addChild(this.game.make.sprite(-40, 55, "blockShadows", "Shadow_Parts_Fade_overlap.png"));
        }
        break;

      case "tnt":
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        frameList = Phaser.Animation.generateFrameNames("TNTexplosion", 0, 8, "", 0);
        sprite.animations.add("explode", frameList, 7, false).onComplete.add(function () {
          _this26.playExplosionCloudAnimation(position);
          sprite.kill();
          _this26.toDestroy.push(sprite);
          _this26.actionPlaneBlocks[_this26.coordinatesToIndex(position)] = null;
        });
        break;

      default:
        atlas = this.blocks[blockType][0];
        frame = this.blocks[blockType][1];
        xOffset = this.blocks[blockType][2];
        yOffset = this.blocks[blockType][3];
        sprite = group.create(xOffset + 40 * x, yOffset + group.yOffset + 40 * y, atlas, frame);
        if (group === this.actionGroup || group === this.groundGroup) {
          if (!LevelBlock.isWalkable(blockType)) {
            this.psuedoRandomTint(group, sprite, x, y);
          }
        }
        if (group === this.actionGroup && !LevelBlock.isWalkable(blockType) && this.blockReceivesCornerShadow(x, y)) {
          var xShadow = -39;
          var yShadow = 40;
          if (blockType.startsWith("pistonArm")) {
            xShadow = -26;
            yShadow = 53;
          }
          sprite.addChild(this.game.make.sprite(xShadow, yShadow, "blockShadows", "Shadow_Parts_Fade_overlap.png"));
        }
        if (blockType.startsWith('redstoneWire') && blockType.endsWith('On')) {
          sprite.addChild(this.addRedstoneSparkle());
        }
        break;
    }

    return sprite;
  };

  LevelView.prototype.addRedstoneSparkle = function addRedstoneSparkle() {
    var _this27 = this;

    var blank = "redstone_sparkle99.png";
    var sprite = this.game.make.sprite(20, 25, "redstoneSparkle", blank);

    // Establish the three different animations.
    for (var i = 0; i < 3; i++) {
      var n = i * 8;
      var frames = [blank].concat(Phaser.Animation.generateFrameNames("redstone_sparkle", n, n + 7, ".png"), blank);
      sprite.animations.add("fizz_" + i, frames, 7);
    }

    var playRandomSparkle = function playRandomSparkle() {
      setTimeout(function () {
        if (!sprite.alive) {
          return;
        }

        // Pick one of the animations to play.
        var whichAnim = Math.floor(Math.random() * 3);
        _this27.onAnimationEnd(_this27.playScaledSpeed(sprite.animations, "fizz_" + whichAnim), playRandomSparkle);

        // Randomize which corner of the index the animation manifests in.
        sprite.position.x = Math.random() > 0.5 ? 20 : 40;
        sprite.position.y = Math.random() > 0.5 ? 25 : 45;
      }, randomInt(500, 7000) / _this27.controller.tweenTimeScale);
    };

    playRandomSparkle();

    return sprite;
  };

  LevelView.prototype.blockReceivesCornerShadow = function blockReceivesCornerShadow(x, y) {
    var southBlock = this.controller.levelModel.actionPlane.getBlockAt([x, y + 1]);
    if (!southBlock || southBlock.blockType && !southBlock.isWalkable) {
      return false;
    }

    var southWestBlock = this.controller.levelModel.actionPlane.getBlockAt([x - 1, y + 1]);
    return southWestBlock && southWestBlock.blockType && !southWestBlock.isWalkable;
  };

  LevelView.prototype.isUnderTree = function isUnderTree(treeIndex, position) {
    // invalid index
    if (treeIndex >= this.trees.length || treeIndex < 0) {
      return false;
    }
    var fluffPositions = this.treeFluffTypes[this.trees[treeIndex].type];
    for (var i = 0; i < fluffPositions.length; i++) {
      if (this.trees[treeIndex].position[0] + fluffPositions[i][0] === position[0] && this.trees[treeIndex].position[1] + fluffPositions[i][1] === position[1]) {
        return true;
      }
    }
    return false;
  };

  LevelView.prototype.changeTreeAlpha = function changeTreeAlpha(treeIndex, alpha) {
    var tween = this.controller.levelView.addResettableTween(this.trees[treeIndex].sprite.fluff).to({
      alpha: alpha
    }, 300, Phaser.Easing.Linear.None);

    tween.start();
  };

  LevelView.prototype.onAnimationEnd = function onAnimationEnd(animation, completionHandler) {
    var signalBinding = animation.onComplete.add(function () {
      signalBinding.detach();
      completionHandler();
    });
  };

  LevelView.prototype.onAnimationStart = function onAnimationStart(animation, completionHandler) {
    var signalBinding = animation.onStart.add(function () {
      signalBinding.detach();
      completionHandler();
    });
  };

  LevelView.prototype.onAnimationLoopOnce = function onAnimationLoopOnce(animation, completionHandler) {
    var signalBinding = animation.onLoop.add(function () {
      signalBinding.detach();
      completionHandler();
    });
  };

  LevelView.prototype.addResettableTween = function addResettableTween(sprite) {
    var tween = this.game.add.tween(sprite);
    tween.timeScale = this.controller.tweenTimeScale;
    this.resettableTweens.push(tween);
    return tween;
  };

  /**
  * Animate Door and set the status
  */


  LevelView.prototype.animateDoor = function animateDoor(index, open) {
    var _this28 = this;

    var player = this.controller.levelModel.player;
    this.setSelectionIndicatorPosition(this.controller.levelModel.actionPlane.indexToCoordinates(index)[0], this.controller.levelModel.actionPlane.indexToCoordinates(index)[1]);
    this.controller.audioPlayer.play("doorOpen");
    // If it's not walable, then open otherwise, close.
    var position = this.controller.levelModel.actionPlane.indexToCoordinates(index);
    this.playDoorAnimation(position, open, function () {
      var block = _this28.controller.levelModel.actionPlane.getBlockAt(position);
      block.isWalkable = block.isOpen;
      if (block.blockType !== "doorIron") {
        // Iron doors don't need to set the player animation to Idle, because they're not opened with 'use'.
        _this28.playIdleAnimation(player.position, player.facing, player.isOnBlock, player);
      }
      _this28.setSelectionIndicatorPosition(player.position[0], player.position[1]);
    });
  };

  return LevelView;
}();

/***/ }),

/***/ 2717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/**
 * Creates a new event in a cross-browswer-compatible way.
 *
 * createEvent functionality is officially deprecated in favor of
 * the Event constructor, but some older browsers do not yet support
 * event constructors. Attempt to use the new functionality, fall
 * back to the old if it fails.
 *
 * @param {String} type
 * @param {boolean} [bubbles=false]
 * @param {boolean} [cancelable=false]
 */
module.exports.createEvent = function createEvent(type) {
  var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var customEvent;
  try {
    customEvent = new Event(type, { bubbles: bubbles, cancelable: cancelable });
  } catch (e) {
    customEvent = document.createEvent('Event');
    customEvent.initEvent(type, bubbles, cancelable);
  }
  return customEvent;
};

module.exports.bisect = function bisect(array, conditional) {
  var positive = array.filter(function (x) {
    return conditional(x);
  });
  var negative = array.filter(function (x) {
    return !conditional(x);
  });
  return [positive, negative];
};

/***/ }),

/***/ 2718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseEntity = __webpack_require__(794);
var Sheep = __webpack_require__(2719);
var Zombie = __webpack_require__(2720);
var IronGolem = __webpack_require__(2721);
var Creeper = __webpack_require__(2722);
var Cow = __webpack_require__(2723);
var Chicken = __webpack_require__(2724);
var Ghast = __webpack_require__(2725);

var Position = __webpack_require__(838);

/**
 * Handling non-player entities inside of the level
 */
module.exports = function () {
  function LevelEntity(controller) {
    _classCallCheck(this, LevelEntity);

    this.controller = controller;
    this.game = controller.game;
    this.entityMap = new Map();
    this.entityDeathCount = new Map();
    this.sprite = null;
    this.id = 0;
  }

  LevelEntity.prototype.loadData = function loadData(levelData) {
    if (levelData.entities !== undefined) {
      for (var i = 0; i < levelData.entities.length; i++) {
        var data = levelData.entities[i];
        var entity = this.createEntity(data[0], this.id++, data[1], data[2], data[3], data[4]);
        entity.updateHidingTree();
        entity.updateHidingBlock();
      }
    }
  };

  LevelEntity.prototype.tick = function tick() {
    var updateEntity = function updateEntity(value) {
      value.tick();
    };
    this.entityMap.forEach(updateEntity);
  };

  LevelEntity.prototype.pushEntity = function pushEntity(entity) {
    if (!this.entityMap.has(entity.identifier)) {
      this.entityMap.set(entity.identifier, entity);
    } else if (this.controller.DEBUG) {
      this.game.debug.text("Duplicate entity name : " + entity.identifier + "\n");
    }
  };

  LevelEntity.prototype.isFriendlyEntity = function isFriendlyEntity(type) {
    var friendlyEntityList = ['sheep', 'ironGolem', 'cow', 'chicken'];
    for (var i = 0; i < friendlyEntityList.length; i++) {
      if (type === friendlyEntityList[i]) {
        return true;
      }
    }
    return false;
  };

  LevelEntity.prototype.createEntity = function createEntity(type, identifier, x, y, facing, pattern) {
    var entity = null;
    if (!this.entityMap.has(identifier)) {
      switch (type) {
        case 'sheep':
          entity = new Sheep(this.controller, type, identifier, x, y, facing);
          break;
        case 'zombie':
          entity = new Zombie(this.controller, type, identifier, x, y, facing);
          break;
        case 'ironGolem':
          entity = new IronGolem(this.controller, type, identifier, x, y, facing);
          break;
        case 'creeper':
          entity = new Creeper(this.controller, type, identifier, x, y, facing);
          break;
        case 'cow':
          entity = new Cow(this.controller, type, identifier, x, y, facing);
          break;
        case 'chicken':
          entity = new Chicken(this.controller, type, identifier, x, y, facing);
          break;
        case 'ghast':
          entity = new Ghast(this.controller, type, identifier, x, y, facing, pattern);
          break;
        default:
          entity = new BaseEntity(this.controller, type, identifier, x, y, facing);

      }
      if (this.controller.DEBUG) {
        console.log('Create Entity type : ' + type + ' ' + x + ',' + y);
      }
      this.entityMap.set(identifier, entity);
    } else if (this.controller.DEBUG) {
      this.game.debug.text("Duplicate entity name : " + identifier + "\n");
    }
    return entity;
  };

  LevelEntity.prototype.isSpawnableInBetween = function isSpawnableInBetween(minX, minY, maxX, maxY) {
    for (var i = minX; i <= maxX; i++) {
      for (var j = minY; j <= maxY; j++) {
        if (this.controller.levelModel.isPositionEmpty(new Position(i, j))[0]) {
          return true;
        }
      }
    }
    return false;
  };

  LevelEntity.prototype.spawnEntity = function spawnEntity(type, spawnDirection) {
    var getRandomInt = function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var levelModel = this.controller.levelModel;
    var width = levelModel.planeWidth;
    var height = levelModel.planeHeight;
    if (spawnDirection === "middle") {
      if (this.isSpawnableInBetween(Math.floor(0.25 * width), Math.floor(0.25 * height), Math.floor(0.75 * width), Math.floor(0.75 * height))) {
        var position = new Position(getRandomInt(Math.floor(0.25 * width), Math.floor(0.75 * width)), getRandomInt(Math.floor(0.25 * height), Math.floor(0.75 * height)));
        while (!levelModel.isPositionEmpty(position)[0]) {
          position = new Position(getRandomInt(Math.floor(0.25 * width), Math.floor(0.75 * width)), getRandomInt(Math.floor(0.25 * height), Math.floor(0.75 * height)));
        }
        return this.createEntity(type, this.id++, position.x, position.y, getRandomInt(0, 3));
      } else {
        if (!this.isSpawnableInBetween(1, 1, width - 2, height - 2)) {
          return null;
        }
        var _position = new Position(getRandomInt(1, width - 2), getRandomInt(1, height - 2));
        while (!levelModel.isPositionEmpty(_position)[0]) {
          _position = new Position(getRandomInt(1, width - 2), getRandomInt(1, height - 2));
        }
        return this.createEntity(type, this.id++, _position.x, _position.y, getRandomInt(0, 3));
      }
    } else if (spawnDirection === "left") {
      var xIndex = 0;
      var columnFull = true;
      while (xIndex < width && columnFull) {
        columnFull = true;
        for (var i = 0; i < height; i++) {
          if (levelModel.isPositionEmpty(new Position(xIndex, i))[0]) {
            columnFull = false;
            break;
          }
        }
        if (columnFull) {
          xIndex++;
        }
      }
      if (xIndex < width) {
        var _position2 = new Position(xIndex, getRandomInt(0, height - 1));
        while (!levelModel.isPositionEmpty(_position2)[0]) {
          _position2 = new Position(xIndex, getRandomInt(0, height - 1));
        }
        return this.createEntity(type, this.id++, _position2.x, _position2.y, getRandomInt(0, 3));
      }
    } else if (spawnDirection === "right") {
      var _xIndex = width - 1;
      var _columnFull = true;
      while (_xIndex > -1 && _columnFull) {
        _columnFull = true;
        for (var _i = 0; _i < height; _i++) {
          if (levelModel.isPositionEmpty(new Position(_xIndex, _i))[0]) {
            _columnFull = false;
            break;
          }
        }
        if (_columnFull) {
          _xIndex--;
        }
      }
      if (_xIndex > -1) {
        var _position3 = new Position(_xIndex, getRandomInt(0, height - 1));
        while (!levelModel.isPositionEmpty(_position3)[0]) {
          _position3 = new Position(_xIndex, getRandomInt(0, height - 1));
        }
        return this.createEntity(type, this.id++, _position3.x, _position3.y, getRandomInt(0, 3));
      }
    } else if (spawnDirection === "up") {
      var yIndex = 0;
      var rowFull = true;
      while (yIndex < height && rowFull) {
        rowFull = true;
        for (var _i2 = 0; _i2 < width; _i2++) {
          if (levelModel.isPositionEmpty(new Position(_i2, yIndex))[0]) {
            rowFull = false;
            break;
          }
        }
        if (rowFull) {
          yIndex++;
        }
      }
      if (yIndex < height) {
        var _position4 = new Position(getRandomInt(0, height - 1), yIndex);
        while (!levelModel.isPositionEmpty(_position4)[0]) {
          _position4 = new Position(getRandomInt(0, height - 1), yIndex);
        }
        return this.createEntity(type, this.id++, _position4.x, _position4.y, getRandomInt(0, 3));
      }
    } else if (spawnDirection === "down") {
      var _yIndex = height - 1;
      var _rowFull = true;
      while (_yIndex > -1 && _rowFull) {
        _rowFull = true;
        for (var _i3 = 0; _i3 < width; _i3++) {
          if (levelModel.isPositionEmpty(new Position(_i3, _yIndex))[0]) {
            _rowFull = false;
            break;
          }
        }
        if (_rowFull) {
          _yIndex--;
        }
      }
      if (_yIndex > -1) {
        var _position5 = new Position(getRandomInt(0, height - 1), _yIndex);
        while (!levelModel.isPositionEmpty(_position5)[0]) {
          _position5 = new Position(getRandomInt(0, height - 1), _yIndex);
        }
        return this.createEntity(type, this.id++, _position5.x, _position5.y, getRandomInt(0, 3));
      }
    }
    return null;
  };

  LevelEntity.prototype.spawnEntityAt = function spawnEntityAt(type, x, y, facing) {
    return this.createEntity(type, this.id++, x, y, facing);
  };

  LevelEntity.prototype.destroyEntity = function destroyEntity(identifier) {
    if (this.entityMap.has(identifier)) {
      var entity = this.entityMap.get(identifier);
      if (this.entityDeathCount.has(entity.type)) {
        this.entityDeathCount.set(entity.type, this.entityDeathCount.get(entity.type) + 1);
      } else {
        this.entityDeathCount.set(entity.type, 1);
      }
      entity.reset();
      entity.sprite.animations.stop(null, true);
      entity.sprite.destroy();
      this.entityMap.delete(identifier);
    } else if (this.controller.DEBUG) {
      this.game.debug.text("It's impossible to delete since entity name : " + identifier + " is not existing\n");
    }
  };

  LevelEntity.prototype.getEntityAt = function getEntityAt(position) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.entityMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        var entity = value[1];
        if (Position.equals(position, entity.position)) {
          return entity;
        }
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

    return null;
  };

  LevelEntity.prototype.getEntitiesOfType = function getEntitiesOfType(type) {
    if (type === "all") {
      var entities = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.entityMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var value = _step2.value;

          var entity = value[1];
          if (entity.type !== 'Player') {
            entities.push(entity);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return entities;
    } else {
      var _entities = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.entityMap[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _value = _step3.value;

          var _entity = _value[1];
          if (_entity.type === type) {
            _entities.push(_entity);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return _entities;
    }
  };

  LevelEntity.prototype.reset = function reset() {
    this.entityMap.clear();
    this.entityDeathCount = new Map();
  };

  return LevelEntity;
}();

/***/ }),

/***/ 2719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseEntity = __webpack_require__(794);
var EventType = __webpack_require__(1159);

module.exports = function (_BaseEntity) {
    _inherits(Sheep, _BaseEntity);

    function Sheep(controller, type, identifier, x, y, facing) {
        _classCallCheck(this, Sheep);

        var _this = _possibleConstructorReturn(this, _BaseEntity.call(this, controller, type, identifier, x, y, facing));

        _this.offset = [-43, -55];
        if (_this.controller.levelView) {
            _this.prepareSprite();
            _this.sprite.sortOrder = _this.controller.levelView.yToIndex(_this.position.y);
        }
        _this.naked = false;
        return _this;
    }

    Sheep.prototype.use = function use(commandQueueItem, userEntity) {
        var _this2 = this;

        var animationName = this.getNakedSuffix() + "lookAtCam" + this.controller.levelView.getDirectionName(this.facing);
        this.controller.levelView.playScaledSpeed(this.sprite.animations, animationName);
        this.queue.startPushHighPriorityCommands();
        this.controller.events.forEach(function (e) {
            return e({ eventType: EventType.WhenUsed, targetType: _this2.type, eventSenderIdentifier: userEntity.identifier, targetIdentifier: _this2.identifier });
        });
        this.queue.endPushHighPriorityCommands();
        commandQueueItem.succeeded();
    };

    Sheep.prototype.getWalkAnimation = function getWalkAnimation() {
        return this.getNakedSuffix() + _BaseEntity.prototype.getWalkAnimation.call(this);
    };

    Sheep.prototype.getIdleAnimation = function getIdleAnimation() {
        return this.getNakedSuffix() + _BaseEntity.prototype.getIdleAnimation.call(this);
    };

    Sheep.prototype.bump = function bump(commandQueueItem) {
        var _this3 = this;

        var animName = this.getNakedSuffix() + "bump";
        var facingName = this.controller.levelView.getDirectionName(this.facing);
        this.controller.levelView.playScaledSpeed(this.sprite.animations, animName + facingName);
        var forwardPosition = this.controller.levelModel.getMoveForwardPosition(this);
        var forwardEntity = this.controller.levelEntity.getEntityAt(forwardPosition);
        if (forwardEntity !== null) {
            this.queue.startPushHighPriorityCommands();
            this.controller.events.forEach(function (e) {
                return e({ eventType: EventType.WhenTouched, targetType: _this3.type, targetIdentifier: _this3.identifier, eventSenderIdentifier: forwardEntity.identifier });
            });
            this.queue.endPushHighPriorityCommands();
        }
        this.controller.delayPlayerMoveBy(400, 800, function () {
            commandQueueItem.succeeded();
        });
    };

    Sheep.prototype.prepareSprite = function prepareSprite() {
        var _this4 = this;

        var getRandomSecondBetween = function getRandomSecondBetween(min, max) {
            return (Math.random() * (max - min) + min) * 1000;
        };
        var frameRate = 10,
            randomPauseMin = 0.2,
            randomPauseMax = 1;
        var actionGroup = this.controller.levelView.actionGroup;
        var frameList = [];
        var frameName = "ShadowSheep_2016";
        this.sprite = actionGroup.create(0, 0, 'sheep', 'ShadowSheep_2016001.png');
        var stillFrameName = ['ShadowSheep_2016217.png', 'ShadowSheep_2016109.png', 'ShadowSheep_2016001.png', 'ShadowSheep_2016325.png'];
        var idleDelayFrame = 8;
        // for normal sheep
        // [direction][[idle],[look left],[look right],[look up],[look down],[walk],[attack],[take dmg],[die],[eat],[bump]]
        var frameListPerDirection = [[[252, 261], [220, 222], [228, 231], [276, 279], [270, 275], [282, 293], [294, 305], [306, 317], [318, 323], [234, 243], [880, 887]], // up
        [[144, 153], [112, 114], [120, 123], [168, 171], [162, 167], [174, 185], [186, 197], [198, 209], [210, 215], [126, 135], [872, 879]], // right
        [[36, 45], [3, 6], [12, 15], [60, 63], [54, 59], [66, 77], [78, 89], [90, 101], [102, 108], [18, 26], [864, 871]], // down
        [[360, 369], [328, 330], [336, 339], [384, 387], [378, 383], [390, 401], [402, 413], [414, 425], [426, 431], [342, 351], [888, 895]]]; // left
        for (var i = 0; i < 4; i++) {
            var facingName = this.controller.levelView.getDirectionName(i);
            // idle sequence
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][0][0], frameListPerDirection[i][0][1], ".png", 3);
            // idle delay
            for (var j = 0; j < idleDelayFrame; j++) {
                frameList.push(stillFrameName[i]);
            }
            this.sprite.animations.add("idle" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.playRandomIdle(_this4.facing);
            });
            // look left sequence ( look left -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][0], frameListPerDirection[i][1][1], ".png", 3);
            this.sprite.animations.add("lookLeft" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.sprite.animations.stop();
                setTimeout(function () {

                    if (_this4.naked) {
                        _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_lookLeft" + _this4.controller.levelView.getDirectionName(_this4.facing) + "_2");
                    } else {
                        _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "lookLeft" + _this4.controller.levelView.getDirectionName(_this4.facing) + "_2");
                    }
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][1], frameListPerDirection[i][1][0], ".png", 3);
            this.sprite.animations.add("lookLeft" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // look right sequence ( look right -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][0], frameListPerDirection[i][2][1], ".png", 3);
            this.sprite.animations.add("lookRight" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.sprite.animations.stop();
                setTimeout(function () {
                    if (_this4.naked) {
                        _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_lookRight" + _this4.controller.levelView.getDirectionName(_this4.facing) + "_2");
                    } else {
                        _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "lookRight" + _this4.controller.levelView.getDirectionName(_this4.facing) + "_2");
                    }
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][1], frameListPerDirection[i][2][0], ".png", 3);
            this.sprite.animations.add("lookRight" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // look up sequence ( look up -> pause for random time -> look front -> play random idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][0], frameListPerDirection[i][3][1], ".png", 3);
            this.sprite.animations.add("lookAtCam" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.sprite.animations.stop();
                setTimeout(function () {
                    if (_this4.naked) {
                        _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_lookAtCam" + _this4.controller.levelView.getDirectionName(_this4.facing) + "_2");
                    } else {
                        _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "lookAtCam" + _this4.controller.levelView.getDirectionName(_this4.facing) + "_2");
                    }
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][1], frameListPerDirection[i][3][0], ".png", 3);
            this.sprite.animations.add("lookAtCam" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // look down
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][4][0], frameListPerDirection[i][4][1], ".png", 3);
            this.sprite.animations.add("lookDown" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // walk
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][5][0], frameListPerDirection[i][5][1], ".png", 3);
            this.sprite.animations.add("walk" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // attack
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][6][0], frameListPerDirection[i][6][1], ".png", 3);
            this.sprite.animations.add("attack" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // take damage
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][7][0], frameListPerDirection[i][7][1], ".png", 3);
            this.sprite.animations.add("hurt" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // die
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][8][0], frameListPerDirection[i][8][1], ".png", 3);
            this.sprite.animations.add("die" + facingName, frameList, frameRate, false);
            // eat
            frameList = this.controller.levelView.generateReverseFrames(frameName, frameListPerDirection[i][9][0], frameListPerDirection[i][9][1], ".png", 3);
            this.sprite.animations.add("eat" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // bump
            frameList = this.controller.levelView.generateReverseFrames(frameName, frameListPerDirection[i][10][0], frameListPerDirection[i][10][1], ".png", 3);
            this.sprite.animations.add("bump" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
        }
        // for naked sheep
        // [direction][[idle],[look left],[look right],[look up],[look down],[walk],[attack],[take dmg],[die],[eat],[bump]]
        frameListPerDirection = [[[684, 693], [652, 654], [660, 663], [708, 711], [702, 707], [714, 725], [726, 737], [738, 749], [750, 755], [666, 675], [912, 919]], // up
        [[576, 585], [544, 546], [552, 555], [600, 603], [594, 599], [606, 617], [618, 629], [630, 641], [642, 647], [558, 567], [904, 911]], // right
        [[468, 477], [436, 438], [444, 447], [492, 495], [486, 491], [498, 509], [510, 521], [522, 533], [534, 539], [450, 459], [896, 903]], // down
        [[792, 801], [760, 762], [768, 771], [816, 819], [810, 815], [822, 833], [834, 845], [846, 857], [858, 863], [774, 783], [920, 927]]]; // left
        stillFrameName = ['ShadowSheep_2016649.png', 'ShadowSheep_2016541.png', 'ShadowSheep_2016433.png', 'ShadowSheep_2016757.png'];
        for (var _i = 0; _i < 4; _i++) {
            var _facingName = this.controller.levelView.getDirectionName(_i);

            // idle sequence
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][0][0], frameListPerDirection[_i][0][1], ".png", 3);
            // idle delay
            for (var _j = 0; _j < idleDelayFrame; _j++) {
                frameList.push(stillFrameName[_i]);
            }
            this.sprite.animations.add("naked_idle" + _facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.playRandomIdle(_this4.facing);
            });
            // look left sequence ( look left -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][1][0], frameListPerDirection[_i][1][1], ".png", 3);
            this.sprite.animations.add("naked_lookLeft" + _facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.sprite.animations.stop();
                setTimeout(function () {
                    _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_lookLeft" + _this4.controller.levelView.getDirectionName(_this4.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][1][1], frameListPerDirection[_i][1][0], ".png", 3);
            this.sprite.animations.add("naked_lookLeft" + _facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // look right sequence ( look right -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][2][0], frameListPerDirection[_i][2][1], ".png", 3);
            this.sprite.animations.add("naked_lookRight" + _facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.sprite.animations.stop();
                setTimeout(function () {
                    _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_lookRight" + _this4.controller.levelView.getDirectionName(_this4.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][2][1], frameListPerDirection[_i][2][0], ".png", 3);
            this.sprite.animations.add("naked_lookRight" + _facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // look up sequence ( look up -> pause for random time -> look front -> play random idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][3][0], frameListPerDirection[_i][3][1], ".png", 3);
            this.sprite.animations.add("naked_lookAtCam" + _facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.sprite.animations.stop();
                setTimeout(function () {
                    _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_lookAtCam" + _this4.controller.levelView.getDirectionName(_this4.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][3][1], frameListPerDirection[_i][3][0], ".png", 3);
            this.sprite.animations.add("naked_lookAtCam" + _facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // look down
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][4][0], frameListPerDirection[_i][4][1], ".png", 3);
            this.sprite.animations.add("naked_lookDown" + _facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // walk
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][5][0], frameListPerDirection[_i][5][1], ".png", 3);
            this.sprite.animations.add("naked_walk" + _facingName, frameList, frameRate, true);
            // attack
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][6][0], frameListPerDirection[_i][6][1], ".png", 3);
            this.sprite.animations.add("naked_attack" + _facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // take damage
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][7][0], frameListPerDirection[_i][7][1], ".png", 3);
            this.sprite.animations.add("naked_hurt_" + _facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // die
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[_i][8][0], frameListPerDirection[_i][8][1], ".png", 3);
            this.sprite.animations.add("naked_die" + _facingName, frameList, frameRate, false);
            // eat
            frameList = this.controller.levelView.generateReverseFrames(frameName, frameListPerDirection[_i][9][0], frameListPerDirection[_i][9][1], ".png", 3);
            this.sprite.animations.add("naked_eat" + _facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.naked = false;
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
            // bump
            frameList = this.controller.levelView.generateReverseFrames(frameName, frameListPerDirection[_i][10][0], frameListPerDirection[_i][10][1], ".png", 3);
            this.sprite.animations.add("naked_bump" + _facingName, frameList, frameRate, false).onComplete.add(function () {
                _this4.controller.levelView.playScaledSpeed(_this4.sprite.animations, "naked_idle" + _this4.controller.levelView.getDirectionName(_this4.facing));
            });
        }

        // initialize
        this.controller.levelView.playScaledSpeed(this.sprite.animations, "idle" + this.controller.levelView.getDirectionName(this.facing));
        this.sprite.x = this.offset[0] + 40 * this.position.x;
        this.sprite.y = this.offset[1] + 40 * this.position.y;
    };

    Sheep.prototype.playRandomIdle = function playRandomIdle(facing) {
        var facingName,
            rand,
            animationName = this.getNakedSuffix();
        facingName = this.controller.levelView.getDirectionName(facing);
        rand = Math.trunc(Math.random() * 6) + 1;
        switch (rand) {
            case 1:
                animationName += "idle";
                break;
            case 2:
                animationName += "lookLeft";
                break;
            case 3:
                animationName += "lookRight";
                break;
            case 4:
                animationName += "lookAtCam";
                break;
            case 5:
                animationName += "lookDown";
                break;
            case 6:
                animationName += "eat";
                break;
            default:
        }

        animationName += facingName;
        this.controller.levelView.playScaledSpeed(this.sprite.animations, animationName);
        this.controller.printErrorMsg(this.type + " calls animation : " + animationName + "\n");
    };

    Sheep.prototype.attack = function attack(commandQueueItem) {
        var _this5 = this;

        var facingName = this.controller.levelView.getDirectionName(this.facing);
        this.controller.levelView.onAnimationEnd(this.controller.levelView.playScaledSpeed(this.sprite.animations, this.getNakedSuffix() + "attack" + facingName), function () {
            var frontEntity = _this5.controller.levelEntity.getEntityAt(_this5.controller.levelModel.getMoveForwardPosition(_this5));
            if (frontEntity !== null) {
                _this5.controller.levelView.onAnimationEnd(_this5.controller.levelView.playScaledSpeed(frontEntity.sprite.animations, _this5.getNakedSuffix() + "hurt" + facingName), function () {
                    _this5.controller.events.forEach(function (e) {
                        return e({ eventType: EventType.WhenAttacked, targetType: _this5.type, eventSenderIdentifier: _this5.identifier, targetIdentifier: frontEntity.identifier });
                    });
                });
            }
            commandQueueItem.succeeded();
        });
    };

    Sheep.prototype.updateAnimationDirection = function updateAnimationDirection() {
        var facingName = this.controller.levelView.getDirectionName(this.facing);
        this.controller.levelView.playScaledSpeed(this.sprite.animations, this.getNakedSuffix() + "idle" + facingName);
    };

    Sheep.prototype.drop = function drop(commandQueueItem, itemType) {
        if (this.naked) {
            return false;
        }

        if (commandQueueItem) {
            _BaseEntity.prototype.drop.call(this, commandQueueItem, itemType);
        }

        if (itemType === 'wool') {
            // default behavior for drop ?
            this.naked = true;
            if (this.controller.levelView) {
                var direction = this.controller.levelView.getDirectionName(this.facing);
                this.controller.levelView.playScaledSpeed(this.sprite.animations, "naked_idle" + direction, function () {});
            }
        }
        return true;
    };

    Sheep.prototype.takeDamage = function takeDamage(callbackCommand) {
        var _this6 = this;

        var levelView = this.controller.levelView;
        var facingName = levelView.getDirectionName(this.facing);
        if (this.healthPoint > 1) {
            levelView.playScaledSpeed(this.sprite.animations, this.getNakedSuffix() + "hurt" + facingName);
            setTimeout(function () {
                _this6.healthPoint--;
                callbackCommand.succeeded();
            }, 1500);
        } else {
            this.healthPoint--;
            this.sprite.animations.stop(null, true);
            this.controller.levelView.playScaledSpeed(this.sprite.animations, this.getNakedSuffix() + "die" + facingName);
            setTimeout(function () {

                var tween = _this6.controller.levelView.addResettableTween(_this6.sprite).to({
                    alpha: 0
                }, 500, Phaser.Easing.Linear.None);

                tween.onComplete.add(function () {

                    _this6.controller.levelEntity.destroyEntity(_this6.identifier);
                });
                tween.start();
            }, 1500);
        }
    };

    Sheep.prototype.getNakedSuffix = function getNakedSuffix() {
        return this.naked ? "naked_" : "";
    };

    return Sheep;
}(BaseEntity);

/***/ }),

/***/ 2720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseEntity = __webpack_require__(794);
module.exports = function (_BaseEntity) {
    _inherits(Zombie, _BaseEntity);

    function Zombie(controller, type, identifier, x, y, facing) {
        _classCallCheck(this, Zombie);

        var _this = _possibleConstructorReturn(this, _BaseEntity.call(this, controller, type, identifier, x, y, facing));

        _this.offset = [-43, -45];
        _this.burningSprite = [null, null];
        _this.burningSpriteGhost = [null, null];
        _this.burningSpriteOffset = [47, 40];
        _this.prepareSprite();
        return _this;
    }

    Zombie.prototype.tick = function tick() {
        _BaseEntity.prototype.tick.call(this);
    };

    Zombie.prototype.reset = function reset() {
        for (var i = 0; i < 2; i++) {
            if (this.burningSprite[i]) {
                this.burningSprite[i].destroy();
            }
        }
    };

    Zombie.prototype.playMoveForwardAnimation = function playMoveForwardAnimation(position, facing, commandQueueItem, groundType) {
        var _this2 = this;

        _BaseEntity.prototype.playMoveForwardAnimation.call(this, position, facing, commandQueueItem, groundType);

        this.burningSprite[0].sortOrder = this.sprite.sortOrder + 1;
        this.burningSprite[1].sortOrder = this.sprite.sortOrder - 1;

        setTimeout(function () {
            // tween for burning animation
            for (var i = 0; i < 2; i++) {
                var tween = _this2.controller.levelView.addResettableTween(_this2.burningSprite[i]).to({
                    x: _this2.offset[0] + _this2.burningSpriteOffset[0] + 40 * position[0], y: _this2.offset[1] + _this2.burningSpriteOffset[1] + 40 * position[1]
                }, 300, Phaser.Easing.Linear.None);
                tween.onComplete.add(function () {});

                tween.start();
            }
        }, 50 / this.controller.tweenTimeScale);
        // smooth movement using tween
    };

    Zombie.prototype.setBurn = function setBurn(burn) {
        if (burn) {
            for (var i = 0; i < 2; i++) {
                this.burningSprite[i].alpha = 1;
            }
        } else {
            for (var _i = 0; _i < 2; _i++) {
                this.burningSprite[_i].alpha = 0;
            }
        }
    };

    Zombie.prototype.prepareSprite = function prepareSprite() {
        var _this3 = this;

        var getRandomSecondBetween = function getRandomSecondBetween(min, max) {
            return (Math.random() * (max - min) + min) * 1000;
        };
        var frameRate = 10,
            randomPauseMin = 0.2,
            randomPauseMax = 1;
        var actionGroup = this.controller.levelView.actionGroup;
        var frameList = [];
        var frameName = "Zombie_";
        this.sprite = actionGroup.create(0, 0, 'zombie', 'Zombie_001.png');
        // update sort order and position
        this.sprite.sortOrder = this.controller.levelView.yToIndex(this.position.y);
        this.sprite.x = this.offset[0] + 40 * this.position.x;
        this.sprite.y = this.offset[1] + 40 * this.position.y;
        // add burning sprite
        this.burningSprite = [actionGroup.create(this.sprite.x + this.burningSpriteOffset[0], this.sprite.y + this.burningSpriteOffset[1], 'burningInSun', "BurningFront_001.png"), actionGroup.create(this.sprite.x + this.burningSpriteOffset[0], this.sprite.y + this.burningSpriteOffset[1], 'burningInSun', "BurningBehind_001.png")];

        frameList = Phaser.Animation.generateFrameNames("BurningFront_", 1, 15, ".png", 3);
        this.burningSprite[0].animations.add("burn", frameList, frameRate, true);
        frameList = Phaser.Animation.generateFrameNames("BurningBehind_", 1, 15, ".png", 3);
        this.burningSprite[1].animations.add("burn", frameList, frameRate, true);
        // start burning animation
        this.controller.levelView.playScaledSpeed(this.burningSprite[0].animations, "burn");
        this.controller.levelView.playScaledSpeed(this.burningSprite[1].animations, "burn");
        // update burning sprite's sort order
        this.burningSprite[0].sortOrder = this.sprite.sortOrder + 1;
        this.burningSprite[1].sortOrder = this.sprite.sortOrder - 1;
        var stillFrameName = ['Zombie_056.png', 'Zombie_166.png', 'Zombie_001.png', 'Zombie_111.png'];
        var idleDelayFrame = 8;
        // [direction][[idle],[look left],[look right],[look up],[look down],[walk],[attack],[take dmg],[die],[bump]]
        var frameListPerDirection = [[[73, 79], [57, 59], [61, 63], [69, 71], [65, 67], [80, 88], [89, 91], [93, 101], [102, 110], [229, 236]], // down
        [[183, 189], [167, 169], [171, 173], [179, 181], [175, 177], [190, 198], [199, 201], [203, 211], [212, 220], [245, 252]], // right
        [[18, 24], [2, 4], [6, 8], [14, 16], [10, 12], [25, 33], [34, 36], [38, 46], [47, 55], [221, 228]], // up
        [[128, 134], [112, 114], [116, 118], [124, 126], [120, 122], [135, 143], [144, 146], [148, 156], [158, 165], [237, 244]]]; // left
        for (var i = 0; i < 4; i++) {
            var facingName = this.controller.levelView.getDirectionName(i);

            // idle sequence
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][0][0], frameListPerDirection[i][0][1], ".png", 3);
            for (var j = 0; j < idleDelayFrame; j++) {
                frameList.push(stillFrameName[i]);
            }
            this.sprite.animations.add("idle" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this3.playRandomIdle(_this3.facing);
            });
            // look left sequence ( look left -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][0], frameListPerDirection[i][1][1], ".png", 3);
            this.sprite.animations.add("lookLeft" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this3.sprite.animations.stop();
                setTimeout(function () {
                    _this3.controller.levelView.playScaledSpeed(_this3.sprite.animations, "lookLeft" + _this3.controller.levelView.getDirectionName(_this3.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][1], frameListPerDirection[i][1][0], ".png", 3);
            this.sprite.animations.add("lookLeft" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this3.controller.levelView.playScaledSpeed(_this3.sprite.animations, "idle" + _this3.controller.levelView.getDirectionName(_this3.facing));
            });
            // look right sequence ( look right -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][0], frameListPerDirection[i][2][1], ".png", 3);
            this.sprite.animations.add("lookRight" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this3.sprite.animations.stop();
                setTimeout(function () {
                    _this3.controller.levelView.playScaledSpeed(_this3.sprite.animations, "lookRight" + _this3.controller.levelView.getDirectionName(_this3.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][1], frameListPerDirection[i][2][0], ".png", 3);
            this.sprite.animations.add("lookRight" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this3.controller.levelView.playScaledSpeed(_this3.sprite.animations, "idle" + _this3.controller.levelView.getDirectionName(_this3.facing));
            });
            // look up sequence ( look up -> pause for random time -> look front -> play random idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][0], frameListPerDirection[i][3][1], ".png", 3);
            this.sprite.animations.add("lookAtCam" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this3.sprite.animations.stop();
                setTimeout(function () {
                    _this3.controller.levelView.playScaledSpeed(_this3.sprite.animations, "lookAtCam" + _this3.controller.levelView.getDirectionName(_this3.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][1], frameListPerDirection[i][3][0], ".png", 3);
            this.sprite.animations.add("lookAtCam" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this3.controller.levelView.playScaledSpeed(_this3.sprite.animations, "idle" + _this3.controller.levelView.getDirectionName(_this3.facing));
            });
            // look down
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][4][0], frameListPerDirection[i][4][1], ".png", 3);
            this.sprite.animations.add("lookDown" + facingName, frameList, frameRate / 3, false).onComplete.add(function () {
                _this3.controller.levelView.playScaledSpeed(_this3.sprite.animations, "idle" + _this3.controller.levelView.getDirectionName(_this3.facing));
            });
            // walk
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][5][0], frameListPerDirection[i][5][1], ".png", 3);
            this.sprite.animations.add("walk" + facingName, frameList, frameRate, true);
            // attack
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][6][0], frameListPerDirection[i][6][1], ".png", 3);
            this.sprite.animations.add("attack" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this3.controller.levelView.playScaledSpeed(_this3.sprite.animations, "idle" + _this3.controller.levelView.getDirectionName(_this3.facing));
            });
            // take damage
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][7][0], frameListPerDirection[i][7][1], ".png", 3);
            this.sprite.animations.add("hurt" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this3.controller.levelView.playScaledSpeed(_this3.sprite.animations, "idle" + _this3.controller.levelView.getDirectionName(_this3.facing));
            });
            // die
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][8][0], frameListPerDirection[i][8][1], ".png", 3);
            this.sprite.animations.add("die" + facingName, frameList, frameRate, false);
            // bump
            frameList = this.controller.levelView.generateReverseFrames(frameName, frameListPerDirection[i][9][0], frameListPerDirection[i][9][1], ".png", 3);
            this.sprite.animations.add("bump" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this3.controller.levelView.playScaledSpeed(_this3.sprite.animations, "idle" + _this3.controller.levelView.getDirectionName(_this3.facing));
            });
        }
        // initialize
        this.controller.levelView.playScaledSpeed(this.sprite.animations, "idle" + this.controller.levelView.getDirectionName(this.facing));
        // set burn
        this.setBurn(this.controller.levelModel.isDaytime);
    };

    Zombie.prototype.takeDamage = function takeDamage(callbackCommand) {
        var _this4 = this;

        var levelView = this.controller.levelView;
        var facingName = levelView.getDirectionName(this.facing);
        if (this.healthPoint > 1) {
            levelView.playScaledSpeed(this.sprite.animations, "hurt" + facingName);
            setTimeout(function () {
                _this4.healthPoint--;
                callbackCommand.succeeded();
            }, 1500 / this.controller.tweenTimeScale);
        } else {
            this.healthPoint--;
            this.controller.levelView.playScaledSpeed(this.sprite.animations, "die" + facingName);
            setTimeout(function () {

                var tween = _this4.controller.levelView.addResettableTween(_this4.sprite).to({
                    alpha: 0
                }, 500, Phaser.Easing.Linear.None);

                tween.onComplete.add(function () {
                    _this4.controller.levelEntity.destroyEntity(_this4.identifier);
                });

                tween.start();
                for (var i = 0; i < 2; i++) {
                    tween = _this4.controller.levelView.addResettableTween(_this4.burningSprite[i]).to({
                        alpha: 0
                    }, 500, Phaser.Easing.Linear.None);
                    tween.start();
                }
            }, 1500 / this.controller.tweenTimeScale);
        }
    };

    return Zombie;
}(BaseEntity);

/***/ }),

/***/ 2721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseEntity = __webpack_require__(794);
module.exports = function (_BaseEntity) {
    _inherits(IronGolem, _BaseEntity);

    function IronGolem(controller, type, identifier, x, y, facing) {
        _classCallCheck(this, IronGolem);

        var _this = _possibleConstructorReturn(this, _BaseEntity.call(this, controller, type, identifier, x, y, facing));

        _this.offset = [-43, -55];
        _this.prepareSprite();
        _this.sprite.sortOrder = _this.controller.levelView.yToIndex(_this.position.y);
        return _this;
    }

    IronGolem.prototype.prepareSprite = function prepareSprite() {
        var _this2 = this;

        var getRandomSecondBetween = function getRandomSecondBetween(min, max) {
            return (Math.random() * (max - min) + min) * 1000;
        };
        var frameRate = 8,
            randomPauseMin = 0.2,
            randomPauseMax = 1;
        var actionGroup = this.controller.levelView.actionGroup;
        var frameList = [];
        var frameName = "Iron_Golem_Anims";
        this.sprite = actionGroup.create(0, 0, 'ironGolem', 'Iron_Golem_Anims001.png');
        // [direction][[idle],[look left],[look right],[look up],[look down],[walk],[attack],[take dmg],[die],[bump]]
        var frameListPerDirection = [[[45, 45], [46, 48], [50, 52], [58, 60], [54, 56], [62, 70], [71, 74], [77, 81], [82, 88], [185, 192]], // down
        [[133, 133], [134, 136], [138, 140], [146, 148], [142, 144], [150, 158], [159, 162], [165, 169], [170, 176], [201, 208]], // right
        [[1, 1], [2, 4], [6, 8], [14, 16], [10, 12], [18, 26], [27, 30], [33, 37], [38, 44], [177, 184]], // up
        [[89, 89], [90, 92], [94, 96], [102, 104], [98, 100], [106, 114], [115, 118], [121, 125], [126, 132], [193, 200]]]; // left
        for (var i = 0; i < 4; i++) {
            var facingName = this.controller.levelView.getDirectionName(i);

            // idle sequence
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][0][0], frameListPerDirection[i][0][1], ".png", 3);
            for (var j = 0; j < 12; j++) {
                frameList.push(frameList[0]);
            }
            this.sprite.animations.add("idle" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.playRandomIdle(_this2.facing);
            });
            // look left sequence ( look left -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][0], frameListPerDirection[i][1][1], ".png", 3);
            this.sprite.animations.add("lookLeft" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookLeft" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][1], frameListPerDirection[i][1][0], ".png", 3);
            this.sprite.animations.add("lookLeft" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look right sequence ( look right -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][0], frameListPerDirection[i][2][1], ".png", 3);
            this.sprite.animations.add("lookRight" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookRight" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][1], frameListPerDirection[i][2][0], ".png", 3);
            this.sprite.animations.add("lookRight" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look up sequence ( look up -> pause for random time -> look front -> play random idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][0], frameListPerDirection[i][3][1], ".png", 3);
            this.sprite.animations.add("lookAtCam" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookAtCam" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][1], frameListPerDirection[i][3][0], ".png", 3);
            this.sprite.animations.add("lookAtCam" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look down
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][4][0], frameListPerDirection[i][4][1], ".png", 3);
            this.sprite.animations.add("lookDown" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookDown_2" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });

            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][4][1], frameListPerDirection[i][4][0], ".png", 3);
            this.sprite.animations.add("lookDown_2" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // walk
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][5][0], frameListPerDirection[i][5][1], ".png", 3);
            this.sprite.animations.add("walk" + facingName, frameList, frameRate, true);
            // attack
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][6][0], frameListPerDirection[i][6][1], ".png", 3);
            this.sprite.animations.add("attack" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // take damage
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][7][0], frameListPerDirection[i][7][1], ".png", 3);
            this.sprite.animations.add("hurt" + facingName, frameList, frameRate * 2 / 3, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // die
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][8][0], frameListPerDirection[i][8][1], ".png", 3);
            this.sprite.animations.add("die" + facingName, frameList, frameRate * 2 / 3, false);
            // bump
            frameList = this.controller.levelView.generateReverseFrames(frameName, frameListPerDirection[i][9][0], frameListPerDirection[i][9][1], ".png", 3);
            this.sprite.animations.add("bump" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
        }
        // initialize
        this.controller.levelView.playScaledSpeed(this.sprite.animations, "idle" + this.controller.levelView.getDirectionName(this.facing));
        this.sprite.x = this.offset[0] + 40 * this.position[0];
        this.sprite.y = this.offset[1] + 40 * this.position[1];
    };

    return IronGolem;
}(BaseEntity);

/***/ }),

/***/ 2722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseEntity = __webpack_require__(794);
module.exports = function (_BaseEntity) {
    _inherits(Creeper, _BaseEntity);

    function Creeper(controller, type, identifier, x, y, facing) {
        _classCallCheck(this, Creeper);

        var _this = _possibleConstructorReturn(this, _BaseEntity.call(this, controller, type, identifier, x, y, facing));

        _this.offset = [-43, -55];
        _this.prepareSprite();
        _this.sprite.sortOrder = _this.controller.levelView.yToIndex(_this.position.y);
        return _this;
    }

    Creeper.prototype.prepareSprite = function prepareSprite() {
        var _this2 = this;

        var getRandomSecondBetween = function getRandomSecondBetween(min, max) {
            return (Math.random() * (max - min) + min) * 1000;
        };
        var frameRate = 10,
            randomPauseMin = 0.2,
            randomPauseMax = 1;
        var actionGroup = this.controller.levelView.actionGroup;
        var frameList = [];
        var frameName = "ShadowCreeper_2016_";
        this.sprite = actionGroup.create(0, 0, 'creeper', 'ShadowCreeper_2016_000.png');
        // for normal sheep
        // [direction][[idle],[look left],[look right],[look up],[look down],[walk],[attack],[explode],[take dmg],[die],[bump]]
        var frameListPerDirection = [[[128, 128], [128, 131], [134, 137], [140, 143], [146, 149], [152, 163], [164, 167], [164, 178], [179, 184], [185, 191], [272, 279]], // down
        [[64, 64], [64, 67], [70, 73], [76, 89], [82, 85], [88, 99], [100, 103], [100, 114], [115, 120], [121, 127], [264, 271]], // right
        [[0, 0], [0, 3], [6, 10], [12, 16], [18, 21], [24, 35], [36, 39], [36, 50], [51, 56], [57, 63], [256, 263]], // up
        [[192, 192], [192, 195], [198, 201], [204, 207], [210, 213], [216, 227], [228, 231], [228, 242], [243, 248], [249, 255], [280, 287]]]; // left
        for (var i = 0; i < 4; i++) {
            var facingName = this.controller.levelView.getDirectionName(i);

            // idle sequence
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][0][0], frameListPerDirection[i][0][1], ".png", 3);
            for (var j = 0; j < 12; j++) {
                frameList.push(frameList[0]);
            }
            this.sprite.animations.add("idle" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.playRandomIdle(_this2.facing);
            });
            // look left sequence ( look left -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][0], frameListPerDirection[i][1][1], ".png", 3);
            this.sprite.animations.add("lookLeft" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookLeft" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][1], frameListPerDirection[i][1][0], ".png", 3);
            this.sprite.animations.add("lookLeft" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look right sequence ( look right -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][0], frameListPerDirection[i][2][1], ".png", 3);
            this.sprite.animations.add("lookRight" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookRight" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][1], frameListPerDirection[i][2][0], ".png", 3);
            this.sprite.animations.add("lookRight" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look up sequence ( look up -> pause for random time -> look front -> play random idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][0], frameListPerDirection[i][3][1], ".png", 3);
            this.sprite.animations.add("lookAtCam" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookAtCam" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][1], frameListPerDirection[i][3][0], ".png", 3);
            this.sprite.animations.add("lookAtCam" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look down
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][4][0], frameListPerDirection[i][4][1], ".png", 3);
            this.sprite.animations.add("lookDown" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookDown_2" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });

            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][4][1], frameListPerDirection[i][4][0], ".png", 3);
            this.sprite.animations.add("lookDown_2" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // walk
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][5][0], frameListPerDirection[i][5][1], ".png", 3);
            this.sprite.animations.add("walk" + facingName, frameList, frameRate, true);
            // attack
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][6][0], frameListPerDirection[i][6][1], ".png", 3);
            this.sprite.animations.add("attack" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // explode
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][7][0], frameListPerDirection[i][7][1], ".png", 3);
            this.sprite.animations.add("explode" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // take damage
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][8][0], frameListPerDirection[i][8][1], ".png", 3);
            this.sprite.animations.add("hurt" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // die
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][9][0], frameListPerDirection[i][9][1], ".png", 3);
            this.sprite.animations.add("die" + facingName, frameList, frameRate, false);
            // bump
            frameList = this.controller.levelView.generateReverseFrames(frameName, frameListPerDirection[i][10][0], frameListPerDirection[i][10][1], ".png", 3);
            this.sprite.animations.add("bump" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
        }
        // initialize
        this.controller.levelView.playScaledSpeed(this.sprite.animations, "idle" + this.controller.levelView.getDirectionName(this.facing));
        this.sprite.x = this.offset[0] + 40 * this.position.x;
        this.sprite.y = this.offset[1] + 40 * this.position.y;
    };

    return Creeper;
}(BaseEntity);

/***/ }),

/***/ 2723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseEntity = __webpack_require__(794);
module.exports = function (_BaseEntity) {
    _inherits(Cow, _BaseEntity);

    function Cow(controller, type, identifier, x, y, facing) {
        _classCallCheck(this, Cow);

        var _this = _possibleConstructorReturn(this, _BaseEntity.call(this, controller, type, identifier, x, y, facing));

        _this.offset = [-43, -55];
        _this.prepareSprite();
        _this.sprite.sortOrder = _this.controller.levelView.yToIndex(_this.position.y);
        return _this;
    }

    Cow.prototype.prepareSprite = function prepareSprite() {
        var _this2 = this;

        var getRandomSecondBetween = function getRandomSecondBetween(min, max) {
            return (Math.random() * (max - min) + min) * 1000;
        };
        var frameRate = 12,
            randomPauseMin = 0.2,
            randomPauseMax = 1;
        var actionGroup = this.controller.levelView.actionGroup;
        var frameList = [];
        var frameName = "Cow";
        this.sprite = actionGroup.create(0, 0, 'cow', 'Cow0001.png');
        var stillFrameName = ['Cow0222.png', 'Cow0111.png', 'Cow0001.png', 'Cow0333.png'];
        var idleDelayFrame = 20;
        // [direction][[idle],[look left],[look right],[look up],[look down],[walk],[attack],[take dmg],[die],[bump],[idle2],[eat]]
        var frameListPerDirection = [[[258, 264], [225, 227], [224, 226], [285, 287], [240, 241], [291, 302], [303, 313], [314, 326], [327, 332], [460, 467], [276, 282], [240, 249]], // down
        [[147, 153], [114, 116], [129, 130], [174, 176], [129, 130], [180, 191], [192, 202], [203, 215], [216, 221], [452, 459], [165, 171], [129, 138]], // right
        [[36, 42], [3, 5], [12, 14], [63, 65], [18, 19], [69, 80], [81, 91], [92, 104], [105, 110], [444, 451], [51, 54], [18, 27]], // up
        [[369, 375], [336, 338], [335, 337], [396, 398], [351, 352], [402, 413], [414, 424], [425, 437], [438, 443], [468, 475], [387, 393], [351, 360]]]; // left
        for (var i = 0; i < 4; i++) {
            var facingName = this.controller.levelView.getDirectionName(i);

            // idle sequence
            frameList = [];
            for (var j = 0; j < idleDelayFrame; j++) {
                frameList.push(stillFrameName[i]);
            }
            this.sprite.animations.add("idle" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle2" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look left sequence ( look left -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][0], frameListPerDirection[i][1][1], ".png", 4);
            this.sprite.animations.add("lookLeft" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookLeft" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][1], frameListPerDirection[i][1][0], ".png", 4);
            this.sprite.animations.add("lookLeft" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look right sequence ( look right -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][0], frameListPerDirection[i][2][1], ".png", 4);
            this.sprite.animations.add("lookRight" + facingName, frameList, frameRate, false).onComplete.add(function () {
                //this.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookRight" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][1], frameListPerDirection[i][2][0], ".png", 4);
            this.sprite.animations.add("lookRight" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look up sequence ( look up -> pause for random time -> look front -> play random idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][0], frameListPerDirection[i][3][1], ".png", 4);
            this.sprite.animations.add("lookAtCam" + facingName, frameList, frameRate, false).onComplete.add(function () {
                //this.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookAtCam" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][1], frameListPerDirection[i][3][0], ".png", 4);
            this.sprite.animations.add("lookAtCam" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look down
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][4][0], frameListPerDirection[i][4][1], ".png", 4);
            this.sprite.animations.add("lookDown" + facingName, frameList, frameRate, false).onComplete.add(function () {
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookDown" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });

            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][4][1], frameListPerDirection[i][4][0], ".png", 4);
            this.sprite.animations.add("lookDown" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // walk
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][5][0], frameListPerDirection[i][5][1], ".png", 4);
            this.sprite.animations.add("walk" + facingName, frameList, frameRate, true);
            // attack
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][6][0], frameListPerDirection[i][6][1], ".png", 4);
            this.sprite.animations.add("attack" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // take damage
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][7][0], frameListPerDirection[i][7][1], ".png", 4);
            this.sprite.animations.add("hurt" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // die
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][8][0], frameListPerDirection[i][8][1], ".png", 4);
            this.sprite.animations.add("die" + facingName, frameList, frameRate, false);
            // bump
            frameList = this.controller.levelView.generateReverseFrames(frameName, frameListPerDirection[i][9][0], frameListPerDirection[i][9][1], ".png", 4);
            this.sprite.animations.add("bump" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // idle2 sequence
            if (i === 2) {
                frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][10][0], frameListPerDirection[i][10][1], ".png", 4);
                this.sprite.animations.add("idle2" + facingName, frameList, frameRate / 2, false).onComplete.add(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle2" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_reverse");
                });

                frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][10][1], frameListPerDirection[i][10][0], ".png", 4);
                this.sprite.animations.add("idle2" + facingName + "_reverse", frameList, frameRate / 2, false).onComplete.add(function () {
                    _this2.playRandomIdle(_this2.facing);
                });
            } else {
                frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][10][1], frameListPerDirection[i][10][0], ".png", 4);
                this.sprite.animations.add("idle2" + facingName, frameList, frameRate, false).onComplete.add(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle2" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_reverse");
                });
                frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][10][0], frameListPerDirection[i][10][1], ".png", 4);
                this.sprite.animations.add("idle2" + facingName + "_reverse", frameList, frameRate, false).onComplete.add(function () {
                    _this2.playRandomIdle(_this2.facing);
                });
            }
            // eat
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][11][0], frameListPerDirection[i][11][1], ".png", 4);
            this.sprite.animations.add("eat" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "eat" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][11][1], frameListPerDirection[i][11][0], ".png", 4);
            this.sprite.animations.add("eat" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
        }
        // initialize
        this.controller.levelView.playScaledSpeed(this.sprite.animations, "idle" + this.controller.levelView.getDirectionName(this.facing));
        this.sprite.x = this.offset[0] + 40 * this.position.x;
        this.sprite.y = this.offset[1] + 40 * this.position.y;
    };

    Cow.prototype.playRandomIdle = function playRandomIdle(facing) {
        var facingName,
            rand,
            animationName = "";
        facingName = this.controller.levelView.getDirectionName(facing);
        rand = Math.trunc(Math.random() * 5) + 1;

        switch (rand) {
            case 1:
                animationName += "idle";
                break;
            case 2:
                animationName += "lookLeft";
                break;
            case 3:
                animationName += "lookRight";
                break;
            case 4:
                animationName += "lookAtCam";
                break;
            case 5:
                animationName += "lookDown";
                break;
            default:
        }

        animationName += facingName;
        this.controller.levelView.playScaledSpeed(this.sprite.animations, animationName);
        this.controller.printErrorMsg(this.type + " calls animation : " + animationName + "\n");
    };

    return Cow;
}(BaseEntity);

/***/ }),

/***/ 2724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseEntity = __webpack_require__(794);
module.exports = function (_BaseEntity) {
    _inherits(Chicken, _BaseEntity);

    function Chicken(controller, type, identifier, x, y, facing) {
        _classCallCheck(this, Chicken);

        var _this = _possibleConstructorReturn(this, _BaseEntity.call(this, controller, type, identifier, x, y, facing));

        _this.offset = [-25, -32];
        _this.prepareSprite();
        _this.sprite.sortOrder = _this.controller.levelView.yToIndex(_this.position.y);
        return _this;
    }

    Chicken.prototype.prepareSprite = function prepareSprite() {
        var _this2 = this;

        var getRandomSecondBetween = function getRandomSecondBetween(min, max) {
            return (Math.random() * (max - min) + min) * 1000;
        };
        var frameRate = 12,
            randomPauseMin = 0.2,
            randomPauseMax = 1;
        var actionGroup = this.controller.levelView.actionGroup;
        var frameList = [];
        var frameName = "chicken";
        this.sprite = actionGroup.create(0, 0, 'chicken', 'chicken0001.png');
        this.sprite.scale.setTo(0.75, 0.75);
        var stillFrameName = ['chicken0222.png', 'chicken0111.png', 'chicken0001.png', 'chicken0333.png'];
        var idleDelayFrame = 8;
        // [direction][[idle],[look left],[look right],[look up],[look down],[walk],[attack],[take dmg],[die],[bump],[eat]]
        var frameListPerDirection = [[[259, 275], [225, 227], [224, 226], [285, 287], [276, 281], [291, 302], [303, 313], [314, 326], [327, 332], [460, 467], [240, 249]], // down
        [[148, 164], [114, 116], [113, 115], [174, 176], [165, 170], [180, 191], [192, 202], [203, 215], [216, 221], [452, 459], [129, 138]], // right
        [[37, 53], [3, 5], [12, 14], [63, 65], [54, 59], [69, 80], [81, 91], [92, 104], [105, 110], [444, 451], [18, 27]], // up
        [[370, 386], [336, 338], [335, 337], [396, 398], [387, 392], [402, 413], [414, 424], [425, 437], [438, 443], [468, 475], [351, 360]]]; // left
        for (var i = 0; i < 4; i++) {
            var facingName = this.controller.levelView.getDirectionName(i);

            // idle sequence
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][0][0], frameListPerDirection[i][0][1], ".png", 4);
            for (var j = 0; j < idleDelayFrame; j++) {
                frameList.push(stillFrameName[i]);
            }
            this.sprite.animations.add("idle" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.playRandomIdle(_this2.facing);
            });
            // look left sequence ( look left -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][0], frameListPerDirection[i][1][1], ".png", 4);
            this.sprite.animations.add("lookLeft" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookLeft" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][1], frameListPerDirection[i][1][0], ".png", 4);
            this.sprite.animations.add("lookLeft" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look right sequence ( look right -> pause for random time -> look front -> idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][0], frameListPerDirection[i][2][1], ".png", 4);
            this.sprite.animations.add("lookRight" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookRight" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][2][1], frameListPerDirection[i][2][0], ".png", 4);
            this.sprite.animations.add("lookRight" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look up sequence ( look up -> pause for random time -> look front -> play random idle)
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][0], frameListPerDirection[i][3][1], ".png", 4);
            this.sprite.animations.add("lookAtCam" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "lookAtCam" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][3][1], frameListPerDirection[i][3][0], ".png", 4);
            this.sprite.animations.add("lookAtCam" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // look down
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][4][0], frameListPerDirection[i][4][1], ".png", 4);
            this.sprite.animations.add("lookDown" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // walk
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][5][0], frameListPerDirection[i][5][1], ".png", 4);
            this.sprite.animations.add("walk" + facingName, frameList, frameRate, true);
            // attack
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][6][0], frameListPerDirection[i][6][1], ".png", 4);
            this.sprite.animations.add("attack" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // take damage
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][7][0], frameListPerDirection[i][7][1], ".png", 4);
            this.sprite.animations.add("hurt" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // die
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][8][0], frameListPerDirection[i][8][1], ".png", 4);
            this.sprite.animations.add("die" + facingName, frameList, frameRate, false);
            // bump
            frameList = this.controller.levelView.generateReverseFrames(frameName, frameListPerDirection[i][9][0], frameListPerDirection[i][9][1], ".png", 4);
            this.sprite.animations.add("bump" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
            // eat
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][10][0], frameListPerDirection[i][10][1], ".png", 4);
            this.sprite.animations.add("eat" + facingName, frameList, frameRate, false).onComplete.add(function () {
                _this2.sprite.animations.stop();
                setTimeout(function () {
                    _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "eat" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
                }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
            });
            frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][10][1], frameListPerDirection[i][10][0], ".png", 4);
            this.sprite.animations.add("eat" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
                _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
            });
        }
        // initialize
        this.controller.levelView.playScaledSpeed(this.sprite.animations, "idle" + this.controller.levelView.getDirectionName(this.facing));
        this.sprite.x = this.offset[0] + 40 * this.position.x;
        this.sprite.y = this.offset[1] + 40 * this.position.y;
    };

    return Chicken;
}(BaseEntity);

/***/ }),

/***/ 2725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseEntity = __webpack_require__(794);
var randomInt = __webpack_require__(1272).randomInt;
module.exports = function (_BaseEntity) {
  _inherits(Ghast, _BaseEntity);

  function Ghast(controller, type, identifier, x, y, facing) {
    _classCallCheck(this, Ghast);

    var _this = _possibleConstructorReturn(this, _BaseEntity.call(this, controller, type, identifier, x, y, facing));

    _this.offset = [-50, -84];
    _this.prepareSprite();
    _this.sprite.sortOrder = _this.controller.levelView.yToIndex(Number.MAX_SAFE_INTEGER);
    _this.audioDelay = 15;
    if (x < 5) {
      _this.patrolA();
    } else {
      _this.patrolB();
    }
    return _this;
  }

  Ghast.prototype.prepareSprite = function prepareSprite() {
    var _this2 = this;

    var getRandomSecondBetween = function getRandomSecondBetween(min, max) {
      return (Math.random() * (max - min) + min) * 1000;
    };
    var frameRate = 12,
        randomPauseMin = 0.2,
        randomPauseMax = 1;
    var actionGroup = this.controller.levelView.actionGroup;
    var frameList = [];
    var frameName = "Ghast";
    this.sprite = actionGroup.create(0, 0, 'ghast', 'Ghast0000.png');
    this.sprite.scale.setTo(1, 1);
    var idleDelayFrame = 0;
    // [direction][[idle],[shoot]]
    var frameListPerDirection = [[[72, 83], [84, 95]], // down
    [[48, 59], [60, 71]], // right
    [[24, 35], [36, 47]], // up
    [[0, 11], [12, 23]]]; // left
    for (var i = 0; i < 4; i++) {
      var facingName = this.controller.levelView.getDirectionName(i);

      // idle sequence
      frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][0][0], frameListPerDirection[i][0][1], ".png", 4);

      var randomOffset = randomInt(2, frameList.length);
      var framesToOffset = [];
      for (var k = 0; k < randomOffset; ++k) {
        framesToOffset.push(frameList[0]);
        frameList.splice(0, 1);
      }
      for (var _k = 0; _k < framesToOffset.length; ++_k) {
        frameList.push(framesToOffset[_k]);
      }

      for (var j = 0; j < idleDelayFrame; j++) {
        frameList.push(frameList[0]);
      }
      this.sprite.animations.add("idle" + facingName, frameList, frameRate, false).onComplete.add(function () {
        _this2.playRandomIdle(_this2.facing);
      });
      // shoot
      frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][0], frameListPerDirection[i][1][1], ".png", 4);
      this.sprite.animations.add("shoot" + facingName, frameList, frameRate, false).onComplete.add(function () {
        _this2.sprite.animations.stop();
        setTimeout(function () {
          _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "shoot" + _this2.controller.levelView.getDirectionName(_this2.facing) + "_2");
        }, getRandomSecondBetween(randomPauseMin, randomPauseMax));
      });
      frameList = Phaser.Animation.generateFrameNames(frameName, frameListPerDirection[i][1][1], frameListPerDirection[i][1][0], ".png", 4);
      this.sprite.animations.add("shoot" + facingName + "_2", frameList, frameRate, false).onComplete.add(function () {
        _this2.controller.levelView.playScaledSpeed(_this2.sprite.animations, "idle" + _this2.controller.levelView.getDirectionName(_this2.facing));
      });
    }
    // initialize
    this.controller.levelView.playScaledSpeed(this.sprite.animations, "idle" + this.controller.levelView.getDirectionName(this.facing));
    this.sprite.x = this.offset[0] + 40 * this.position.x;
    this.sprite.y = this.offset[1] + 40 * this.position.y;
  };

  /**
   * @override
   */


  Ghast.prototype.canMoveThrough = function canMoveThrough() {
    return true;
  };

  Ghast.prototype.playRandomIdle = function playRandomIdle(facing) {
    var facingName,
        animationName = "";
    facingName = this.controller.levelView.getDirectionName(facing);

    animationName += "idle";

    animationName += facingName;
    this.controller.levelView.playScaledSpeed(this.sprite.animations, animationName);

    if (this.audioDelay > 0) {
      --this.audioDelay;
    } else {
      this.audioDelay = 5;
      var chance = Math.floor(Math.random() * 5);
      if (chance === 0) {
        var soundNum = Math.floor(Math.random() * 4);
        this.playMoan(soundNum);
      }
    }
  };

  Ghast.prototype.playMoan = function playMoan(number) {
    switch (number) {
      case 0:
        this.controller.audioPlayer.play("moan2");
        break;
      case 1:
        this.controller.audioPlayer.play("moan3");
        break;
      case 2:
        this.controller.audioPlayer.play("moan6");
        break;
      default:
        this.controller.audioPlayer.play("moan7");
        break;
    }
  };

  Ghast.prototype.patrolA = function patrolA() {
    var _controller$levelView, _controller$levelView2;

    var options = [Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true];

    (_controller$levelView = this.controller.levelView.addResettableTween(this.sprite)).to.apply(_controller$levelView, [{
      y: this.offset[1] + 40 * this.position.y + 80
    }, randomInt(2500, 3500)].concat(options));

    (_controller$levelView2 = this.controller.levelView.addResettableTween(this.sprite)).to.apply(_controller$levelView2, [{
      x: this.offset[0] + 40 * this.position.x + 10
    }, randomInt(1500, 2000)].concat(options));
  };

  Ghast.prototype.patrolB = function patrolB() {
    var _controller$levelView3, _controller$levelView4;

    var options = [Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true];

    (_controller$levelView3 = this.controller.levelView.addResettableTween(this.sprite)).to.apply(_controller$levelView3, [{
      y: this.offset[1] + 40 * this.position.y - 80
    }, randomInt(2500, 3500)].concat(options));

    (_controller$levelView4 = this.controller.levelView.addResettableTween(this.sprite)).to.apply(_controller$levelView4, [{
      x: this.offset[0] + 40 * this.position.x - 10
    }, randomInt(1500, 2000)].concat(options));
  };

  return Ghast;
}(BaseEntity);

/***/ }),

/***/ 2726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function AssetLoader(controller) {
    _classCallCheck(this, AssetLoader);

    this.controller = controller;
    this.audioPlayer = controller.audioPlayer;
    this.game = controller.game;
    this.assetRoot = controller.assetRoot;

    this.assets = {
      entityShadow: {
        type: 'image',
        path: this.assetRoot + 'images/Character_Shadow.png'
      },
      selectionIndicator: {
        type: 'image',
        path: this.assetRoot + 'images/Selection_Indicator.png'
      },
      tallGrass: {
        type: 'image',
        path: this.assetRoot + 'images/TallGrass.png'
      },
      finishOverlay: {
        type: 'image',
        path: this.assetRoot + 'images/WhiteRect.png'
      },
      bed: {
        type: 'image',
        path: this.assetRoot + 'images/Bed.png'
      },
      playerSteve: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Steve1013.png',
        jsonPath: this.assetRoot + 'images/Steve1013.json'
      },
      playerAlex: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Alex1013.png',
        jsonPath: this.assetRoot + 'images/Alex1013.json'
      },
      playerSteveEvents: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Steve_2016.png',
        jsonPath: this.assetRoot + 'images/Steve_2016.json'
      },
      playerAlexEvents: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/DevAlex.png',
        jsonPath: this.assetRoot + 'images/DevAlex.json'
      },
      playerAgent: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Agent.png',
        jsonPath: this.assetRoot + 'images/Agent.json'
      },
      AO: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/AO.png',
        jsonPath: this.assetRoot + 'images/AO.json'
      },
      LavaGlow: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/LavaGlow.png',
        jsonPath: this.assetRoot + 'images/LavaGlow.json'
      },
      WaterAO: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/WaterAO.png',
        jsonPath: this.assetRoot + 'images/WaterAO.json'
      },
      blockShadows: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Block_Shadows.png',
        jsonPath: this.assetRoot + 'images/Block_Shadows.json'
      },
      undergroundFow: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/UndergroundFoW.png',
        jsonPath: this.assetRoot + 'images/UndergroundFoW.json'
      },
      blocks: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Blocks.png',
        jsonPath: this.assetRoot + 'images/Blocks.json'
      },
      leavesAcacia: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Leaves_Acacia_Decay.png',
        jsonPath: this.assetRoot + 'images/Leaves_Acacia_Decay.json'
      },
      leavesBirch: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Leaves_Birch_Decay.png',
        jsonPath: this.assetRoot + 'images/Leaves_Birch_Decay.json'
      },
      leavesJungle: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Leaves_Jungle_Decay.png',
        jsonPath: this.assetRoot + 'images/Leaves_Jungle_Decay.json'
      },
      leavesOak: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Leaves_Oak_Decay.png',
        jsonPath: this.assetRoot + 'images/Leaves_Oak_Decay.json'
      },
      leavesSpruce: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Leaves_Spruce_Decay.png',
        jsonPath: this.assetRoot + 'images/Leaves_Spruce_Decay.json'
      },
      leavesSpruceSnowy: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Leaves_Spruce_Snowy_Decay.png',
        jsonPath: this.assetRoot + 'images/Leaves_Spruce_Snowy_Decay.json'
      },
      sheep: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Sheep_2016.png',
        jsonPath: this.assetRoot + 'images/Sheep_2016.json'
      },
      crops: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Crops.png',
        jsonPath: this.assetRoot + 'images/Crops.json'
      },
      torch: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Torch.png',
        jsonPath: this.assetRoot + 'images/Torch.json'
      },
      destroyOverlay: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Destroy_Overlay.png',
        jsonPath: this.assetRoot + 'images/Destroy_Overlay.json'
      },
      blockExplode: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/BlockExplode.png',
        jsonPath: this.assetRoot + 'images/BlockExplode.json'
      },
      miningParticles: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/MiningParticles.png',
        jsonPath: this.assetRoot + 'images/MiningParticles.json'
      },
      miniBlocks: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Miniblocks.png',
        jsonPath: this.assetRoot + 'images/Miniblocks.json'
      },
      lavaPop: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/LavaPop.png',
        jsonPath: this.assetRoot + 'images/LavaPop.json'
      },
      redstoneSparkle: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Redstone_Sparkle.png',
        jsonPath: this.assetRoot + 'images/Redstone_Sparkle.json'
      },
      fire: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Fire.png',
        jsonPath: this.assetRoot + 'images/Fire.json'
      },
      bubbles: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Bubbles.png',
        jsonPath: this.assetRoot + 'images/Bubbles.json'
      },
      explosion: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Explosion.png',
        jsonPath: this.assetRoot + 'images/Explosion.json'
      },
      door: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Door.png',
        jsonPath: this.assetRoot + 'images/Door.json'
      },
      doorIron: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Door_Iron.png',
        jsonPath: this.assetRoot + 'images/Door_Iron.json'
      },
      rails: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Rails.png',
        jsonPath: this.assetRoot + 'images/Rails.json'
      },
      tnt: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/TNT.png',
        jsonPath: this.assetRoot + 'images/TNT.json'
      },
      burningInSun: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/BurningInSun.png',
        jsonPath: this.assetRoot + 'images/BurningInSun.json'
      },
      zombie: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Zombie.png',
        jsonPath: this.assetRoot + 'images/Zombie.json'
      },
      ironGolem: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Iron_Golem.png',
        jsonPath: this.assetRoot + 'images/Iron_Golem.json'
      },
      creeper: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Creeper_2016.png',
        jsonPath: this.assetRoot + 'images/Creeper_2016.json'
      },
      cow: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Cow.png',
        jsonPath: this.assetRoot + 'images/Cow.json'
      },
      chicken: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Chicken.png',
        jsonPath: this.assetRoot + 'images/Chicken.json'
      },
      ghast: {
        type: 'atlasJSON',
        pngPath: this.assetRoot + 'images/Ghast.png',
        jsonPath: this.assetRoot + 'images/Ghast.json'
      },
      dig_wood1: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/dig_wood1.mp3',
        wav: this.assetRoot + 'audio/dig_wood1.wav',
        ogg: this.assetRoot + 'audio/dig_wood1.ogg'
      },
      stepGrass: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/step_grass1.mp3',
        wav: this.assetRoot + 'audio/step_grass1.wav',
        ogg: this.assetRoot + 'audio/step_grass1.ogg'
      },
      stepWood: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/wood2.mp3',
        ogg: this.assetRoot + 'audio/wood2.ogg'
      },
      stepStone: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/stone2.mp3',
        ogg: this.assetRoot + 'audio/stone2.ogg'
      },
      stepGravel: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/gravel1.mp3',
        ogg: this.assetRoot + 'audio/gravel1.ogg'
      },
      stepFarmland: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/cloth4.mp3',
        ogg: this.assetRoot + 'audio/cloth4.ogg'
      },
      failure: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/break.mp3',
        ogg: this.assetRoot + 'audio/break.ogg'
      },
      success: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/levelup.mp3',
        ogg: this.assetRoot + 'audio/levelup.ogg'
      },
      fall: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/fallsmall.mp3',
        ogg: this.assetRoot + 'audio/fallsmall.ogg'
      },
      fuse: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/fuse.mp3',
        ogg: this.assetRoot + 'audio/fuse.ogg'
      },
      explode: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/explode3.mp3',
        ogg: this.assetRoot + 'audio/explode3.ogg'
      },
      placeBlock: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/cloth1.mp3',
        ogg: this.assetRoot + 'audio/cloth1.ogg'
      },
      collectedBlock: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/pop.mp3',
        ogg: this.assetRoot + 'audio/pop.ogg'
      },
      bump: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/hit3.mp3',
        ogg: this.assetRoot + 'audio/hit3.ogg'
      },
      punch: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/cloth1.mp3',
        ogg: this.assetRoot + 'audio/cloth1.ogg'
      },
      fizz: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/fizz.mp3',
        ogg: this.assetRoot + 'audio/fizz.ogg'
      },
      doorOpen: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/door_open.mp3',
        ogg: this.assetRoot + 'audio/door_open.ogg'
      },
      houseSuccess: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/launch1.mp3',
        ogg: this.assetRoot + 'audio/launch1.ogg'
      },
      minecart: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/minecartBase.mp3',
        ogg: this.assetRoot + 'audio/minecartBase.ogg'
      },
      sheepBaa: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/say3.mp3',
        ogg: this.assetRoot + 'audio/say3.ogg'
      },
      chickenHurt: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/chickenhurt2.mp3',
        ogg: this.assetRoot + 'audio/chickenhurt2.ogg'
      },
      chickenBawk: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/chickensay3.mp3',
        ogg: this.assetRoot + 'audio/chickensay3.ogg'
      },
      cowHuff: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/cowhuff.mp3',
        ogg: this.assetRoot + 'audio/cowhuff.ogg'
      },
      cowHurt: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/cowhurt.mp3',
        ogg: this.assetRoot + 'audio/cowhurt.ogg'
      },
      cowMoo: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/cowmoo1.mp3',
        ogg: this.assetRoot + 'audio/cowmoo1.ogg'
      },
      cowMooLong: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/cowmoolong.mp3',
        ogg: this.assetRoot + 'audio/cowmoolong.ogg'
      },
      creeperHiss: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/creeper.mp3',
        ogg: this.assetRoot + 'audio/creeper.ogg'
      },
      ironGolemHit: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/irongolemhit.mp3',
        ogg: this.assetRoot + 'audio/irongolemhit.ogg'
      },
      metalWhack: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/metalwhack.mp3',
        ogg: this.assetRoot + 'audio/metalwhack.ogg'
      },
      zombieBrains: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/zombiebrains.mp3',
        ogg: this.assetRoot + 'audio/zombiebrains.ogg'
      },
      zombieGroan: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/zombiegroan.mp3',
        ogg: this.assetRoot + 'audio/zombiegroan.ogg'
      },
      zombieHurt: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/zombiehurt1.mp3',
        ogg: this.assetRoot + 'audio/zombiehurt1.ogg'
      },
      pistonIn: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/piston_in.mp3',
        ogg: this.assetRoot + 'audio/piston_in.ogg'
      },
      zombieHurt2: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/zombiehurt2.mp3',
        ogg: this.assetRoot + 'audio/zombiehurt2.ogg'
      },
      pistonOut: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/piston_out.mp3',
        ogg: this.assetRoot + 'audio/piston_out.ogg'
      },
      portalAmbient: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/portal.mp3',
        ogg: this.assetRoot + 'audio/portal.ogg'
      },
      portalTravel: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/travel_portal.mp3',
        ogg: this.assetRoot + 'audio/travel_portal.ogg'
      },
      pressurePlateClick: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/pressurePlateClick.mp3',
        ogg: this.assetRoot + 'audio/pressurePlateClick.ogg'
      },
      moan2: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/moan2.mp3',
        ogg: this.assetRoot + 'audio/moan2.ogg'
      },
      moan3: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/moan3.mp3',
        ogg: this.assetRoot + 'audio/moan3.ogg'
      },
      moan6: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/moan6.mp3',
        ogg: this.assetRoot + 'audio/moan6.ogg'
      },
      moan7: {
        type: 'sound',
        mp3: this.assetRoot + 'audio/moan7.mp3',
        ogg: this.assetRoot + 'audio/moan7.ogg'
      }

    };

    var ALL_SOUND_ASSETS = ['dig_wood1', 'stepGrass', 'stepWood', 'stepStone', 'stepGravel', 'stepFarmland', 'failure', 'success', 'fall', 'fuse', 'explode', 'placeBlock', 'collectedBlock', 'bump', 'punch', 'fizz', 'doorOpen', 'minecart', 'sheepBaa', 'chickenHurt', 'chickenBawk', 'cowHuff', 'cowHurt', 'cowMoo', 'cowMooLong', 'creeperHiss', 'ironGolemHit', 'metalWhack', 'zombieBrains', 'zombieGroan', 'zombieHurt', 'pistonIn', 'pistonOut', 'portalAmbient', 'portalTravel', 'pressurePlateClick', 'moan2', 'moan3', 'moan6', 'moan7'];

    var CHICKEN_LEVEL_ASSETS = ['chicken', 'entityShadow', 'selectionIndicator', 'AO', 'blockShadows', 'tallGrass', 'blocks', 'miniBlocks', 'stepGrass', 'failure', 'success'].concat(ALL_SOUND_ASSETS);

    this.assetPacks = {
      adventurerLevelOneAssets: ['entityShadow', 'selectionIndicator', 'AO', 'blockShadows', 'leavesOak', 'leavesBirch', 'tallGrass', 'blocks', 'sheep', 'bump', 'stepGrass', 'failure', 'success'],
      adventurerLevelTwoAssets: ['entityShadow', 'selectionIndicator', 'AO', 'blockShadows', 'leavesSpruce', 'tallGrass', 'blocks', 'sheep', 'bump', 'stepGrass', 'failure', 'playerSteve', 'success', 'miniBlocks', 'blockExplode', 'miningParticles', 'destroyOverlay', 'dig_wood1', 'collectedBlock', 'punch'],
      adventurerLevelThreeAssets: ['entityShadow', 'selectionIndicator', 'AO', 'blockShadows', 'leavesOak', 'tallGrass', 'blocks', 'sheep', 'bump', 'stepGrass', 'failure', 'playerSteve', 'success', 'miniBlocks', 'blockExplode', 'miningParticles', 'destroyOverlay', 'dig_wood1', 'collectedBlock', 'sheepBaa', 'punch'],
      adventurerAllAssetsMinusPlayer: ['entityShadow', 'selectionIndicator', 'tallGrass', 'finishOverlay', 'bed', 'AO', 'LavaGlow', 'WaterAO', 'blockShadows', 'undergroundFow', 'blocks', 'leavesAcacia', 'leavesBirch', 'leavesOak', 'leavesSpruce', 'sheep', 'creeper', 'crops', 'torch', 'destroyOverlay', 'blockExplode', 'miningParticles', 'miniBlocks', 'lavaPop', 'fire', 'bubbles', 'explosion', 'door', 'rails', 'tnt', 'dig_wood1', 'stepGrass', 'stepWood', 'stepStone', 'stepGravel', 'stepFarmland', 'failure', 'success', 'fall', 'fuse', 'explode', 'placeBlock', 'collectedBlock', 'bump', 'punch', 'fizz', 'doorOpen', 'houseSuccess', 'minecart', 'sheepBaa'],
      levelOneAssets: CHICKEN_LEVEL_ASSETS,
      levelTwoAssets: CHICKEN_LEVEL_ASSETS,
      levelThreeAssets: CHICKEN_LEVEL_ASSETS,
      designerAllAssetsMinusPlayer: ['entityShadow', 'selectionIndicator', 'tallGrass', 'finishOverlay', 'bed', 'AO', 'LavaGlow', 'WaterAO', 'blockShadows', 'undergroundFow', 'blocks', 'leavesAcacia', 'leavesBirch', 'leavesJungle', 'leavesOak', 'leavesSpruce', 'sheep', 'creeper', 'crops', 'torch', 'destroyOverlay', 'blockExplode', 'miningParticles', 'miniBlocks', 'lavaPop', 'fire', 'bubbles', 'explosion', 'door', 'rails', 'tnt', 'dig_wood1', 'stepGrass', 'stepWood', 'stepStone', 'stepGravel', 'stepFarmland', 'failure', 'success', 'fall', 'fuse', 'explode', 'placeBlock', 'collectedBlock', 'bump', 'punch', 'fizz', 'doorOpen', 'houseSuccess', 'minecart', 'sheepBaa', 'zombie', 'cow', 'chicken', 'ironGolem', 'burningInSun', 'chickenHurt', 'chickenBawk', 'cowHuff', 'cowHurt', 'cowMoo', 'cowMooLong', 'creeperHiss', 'ironGolemHit', 'metalWhack', 'zombieBrains', 'zombieGroan', 'zombieHurt', 'zombieHurt2'],
      heroAllAssetsMinusPlayer: ['entityShadow', 'selectionIndicator', 'tallGrass', 'finishOverlay', 'bed', 'AO', 'LavaGlow', 'WaterAO', 'blockShadows', 'undergroundFow', 'blocks', 'leavesAcacia', 'leavesBirch', 'leavesOak', 'leavesSpruce', 'leavesSpruceSnowy', 'sheep', 'creeper', 'crops', 'torch', 'destroyOverlay', 'blockExplode', 'miningParticles', 'miniBlocks', 'lavaPop', 'redstoneSparkle', 'fire', 'bubbles', 'explosion', 'door', 'doorIron', 'rails', 'tnt', 'dig_wood1', 'stepGrass', 'stepWood', 'stepStone', 'stepGravel', 'stepFarmland', 'failure', 'success', 'fall', 'fuse', 'explode', 'placeBlock', 'collectedBlock', 'bump', 'punch', 'fizz', 'doorOpen', 'houseSuccess', 'minecart', 'sheepBaa', 'zombie', 'cow', 'chicken', 'burningInSun', 'ghast', 'chickenHurt', 'chickenBawk', 'cowHuff', 'cowHurt', 'cowMoo', 'cowMooLong', 'creeperHiss', 'metalWhack', 'zombieBrains', 'zombieGroan', 'zombieHurt', 'zombieHurt2', 'pistonIn', 'pistonOut', 'portalAmbient', 'portalTravel', 'pressurePlateClick', 'moan2', 'moan3', 'moan6', 'moan7'],
      allAssetsMinusPlayer: ['entityShadow', 'selectionIndicator', 'tallGrass', 'finishOverlay', 'bed', 'AO', 'LavaGlow', 'WaterAO', 'blockShadows', 'undergroundFow', 'blocks', 'leavesAcacia', 'leavesBirch', 'leavesJungle', 'leavesOak', 'leavesSpruce', 'leavesSpruceSnowy', 'sheep', 'creeper', 'crops', 'torch', 'destroyOverlay', 'blockExplode', 'miningParticles', 'miniBlocks', 'lavaPop', 'redstoneSparkle', 'fire', 'bubbles', 'explosion', 'door', 'doorIron', 'rails', 'tnt', 'dig_wood1', 'stepGrass', 'stepWood', 'stepStone', 'stepGravel', 'stepFarmland', 'failure', 'success', 'fall', 'fuse', 'explode', 'placeBlock', 'collectedBlock', 'bump', 'punch', 'fizz', 'doorOpen', 'houseSuccess', 'minecart', 'sheepBaa', 'zombie', 'cow', 'chicken', 'ghast', 'ironGolem', 'burningInSun', 'chickenHurt', 'chickenBawk', 'cowHuff', 'cowHurt', 'cowMoo', 'cowMooLong', 'creeperHiss', 'ironGolemHit', 'metalWhack', 'zombieBrains', 'zombieGroan', 'zombieHurt', 'zombieHurt2', 'pistonIn', 'pistonOut', 'portalAmbient', 'portalTravel', 'pressurePlateClick', 'moan2', 'moan3', 'moan6', 'moan7'],
      playerSteve: ['playerSteve'],
      playerAlex: ['playerAlex'],
      playerSteveEvents: ['playerSteveEvents'],
      playerAlexEvents: ['playerAlexEvents'],
      playerAgent: ['playerAgent'],
      grass: ['tallGrass']
    };
  }

  AssetLoader.prototype.loadPacks = function loadPacks(packList) {
    var _this = this;

    packList.forEach(function (packName) {
      _this.loadPack(packName);
    });
  };

  AssetLoader.prototype.loadPack = function loadPack(packName) {
    var packAssets = this.assetPacks[packName];
    this.loadAssets(packAssets);
  };

  AssetLoader.prototype.loadAssets = function loadAssets(assetNames) {
    var _this2 = this;

    assetNames.forEach(function (assetKey) {
      var assetConfig = _this2.assets[assetKey];
      _this2.loadAsset(assetKey, assetConfig);
    });
  };

  AssetLoader.prototype.loadAsset = function loadAsset(key, config) {
    switch (config.type) {
      case 'image':
        this.game.load.image(key, config.path);
        break;
      case 'sound':
        this.audioPlayer.register({
          id: key,
          mp3: config.mp3,
          ogg: config.ogg
        });
        break;
      case 'atlasJSON':
        this.game.load.atlasJSONHash(key, config.pngPath, config.jsonPath);
        break;
      default:
        throw 'Asset ' + key + ' needs config.type set in configuration.';
    }
  };

  return AssetLoader;
}();

/***/ }),

/***/ 2727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PlaceBlockCommand = __webpack_require__(2728);
var PlaceInFrontCommand = __webpack_require__(2729);
var PlaceDirectionCommand = __webpack_require__(2730);
var MoveForwardCommand = __webpack_require__(2731);
var MoveBackwardCommand = __webpack_require__(2732);
var MoveDirectionCommand = __webpack_require__(2733);
var WhileCommand = __webpack_require__(2734);
var IfBlockAheadCommand = __webpack_require__(2735);
var CallbackCommand = __webpack_require__(1016);
var RepeatCommand = __webpack_require__(2736);

module.exports.get = function (controller) {
  return {
    /**
     * Called before a list of user commands will be issued.
     */
    startCommandCollection: function startCommandCollection() {
      if (controller.DEBUG) {
        console.log("Collecting commands.");
      }
    },

    /**
     * Called when an attempt should be started, and the entire set of
     * command-queue API calls have been issued.
     *
     * @param {Function} onAttemptComplete - callback with two parameters,
     * "success", i.e., true if attempt was successful (level completed),
     * false if unsuccessful (level not completed), and the current level model.
     */
    startAttempt: function startAttempt(onAttemptComplete) {
      controller.OnCompleteCallback = onAttemptComplete;
      controller.setPlayerActionDelayByQueueLength();
      controller.queue.begin();
      controller.run();
      controller.attemptRunning = true;
      controller.resultReported = false;
    },

    resetAttempt: function resetAttempt() {
      controller.reset();
      controller.queue.reset();
      controller.OnCompleteCallback = null;
      controller.attemptRunning = false;
    },

    /**
     * @param highlightCallback
     * @param codeBlockCallback - for example:
     *  (e) => {
     *    if (e.type !== 'blockDestroyed') {
     *      return;
     *    }
     *
     *    if (e.blockType !== '[dropdown value, e.g. logOak') {
     *      return;
     *    }
     *
     *    evalUserCode(e.block);
     *  }
     */
    registerEventCallback: function registerEventCallback(highlightCallback, codeBlockCallback) {
      // TODO(bjordan): maybe need to also handle top-level event block highlighting
      controller.events.push(codeBlockCallback);

      // in controller:
      // this.events.forEach((e) => e({ type: EventType.BLOCK_DESTROYED, blockType: 'logOak' });
      // (and clear out on reset)
    },


    onEventTriggered: function onEventTriggered(highlightCallback, type, eventType, callback) {
      this.registerEventCallback(highlightCallback, function (event) {
        if (event.eventType === eventType && event.targetType === type) {
          callback(event);
        }
      });
    },

    // helper functions for event
    isEventTriggered: function isEventTriggered(event, eventType) {
      return event.eventType === eventType;
    },

    // command list
    moveDirection: function moveDirection(highlightCallback, targetEntity, direction) {
      controller.addCommand(new MoveDirectionCommand(controller, highlightCallback, targetEntity, direction), targetEntity);
    },

    moveForward: function moveForward(highlightCallback, targetEntity) {
      controller.addCommand(new MoveForwardCommand(controller, highlightCallback, targetEntity), targetEntity);
    },

    moveBackward: function moveBackward(highlightCallback, targetEntity) {
      controller.addCommand(new MoveBackwardCommand(controller, highlightCallback, targetEntity), targetEntity);
    },

    moveAway: function moveAway(highlightCallback, targetEntity, moveAwayFrom) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.moveAway(callbackCommand, moveAwayFrom);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    moveToward: function moveToward(highlightCallback, targetEntity, moveTowardTo) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.moveToward(callbackCommand, moveTowardTo);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    flashEntity: function flashEntity(highlightCallback, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.flashEntity(callbackCommand);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    explodeEntity: function explodeEntity(highlightCallback, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.explodeEntity(callbackCommand);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    use: function use(highlightCallback, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.use(callbackCommand, targetEntity);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    playSound: function playSound(highlightCallback, sound, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.playSound(callbackCommand, sound);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    turn: function turn(highlightCallback, direction, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.turn(callbackCommand, direction === 'right' ? 1 : -1);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    turnRandom: function turnRandom(highlightCallback, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.turnRandom(callbackCommand);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    turnRight: function turnRight(highlightCallback, targetEntity) {
      this.turn(highlightCallback, 'right', targetEntity);
    },

    turnLeft: function turnLeft(highlightCallback, targetEntity) {
      this.turn(highlightCallback, 'left', targetEntity);
    },

    destroyBlock: function destroyBlock(highlightCallback, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.destroyBlock(callbackCommand);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    placeBlock: function placeBlock(highlightCallback, blockType, targetEntity) {
      controller.addCommand(new PlaceBlockCommand(controller, highlightCallback, blockType, targetEntity), targetEntity);
    },

    placeDirection: function placeDirection(highlightCallback, blockType, targetEntity, direction) {
      controller.addCommand(new PlaceDirectionCommand(controller, highlightCallback, blockType, targetEntity, direction), targetEntity, direction);
    },

    placeInFront: function placeInFront(highlightCallback, blockType, targetEntity) {
      controller.addCommand(new PlaceInFrontCommand(controller, highlightCallback, blockType, targetEntity), targetEntity);
    },

    tillSoil: function tillSoil(highlightCallback, targetEntity) {
      controller.addCommand(new PlaceInFrontCommand(controller, highlightCallback, 'watering', targetEntity));
    },

    whilePathAhead: function whilePathAhead(highlightCallback, blockType, targetEntity, codeBlock) {
      controller.addCommand(new WhileCommand(controller, highlightCallback, blockType, targetEntity, codeBlock), targetEntity);
    },

    ifBlockAhead: function ifBlockAhead(highlightCallback, blockType, targetEntity, codeBlock) {
      controller.addCommand(new IfBlockAheadCommand(controller, highlightCallback, blockType, targetEntity, codeBlock), targetEntity);
    },
    // -1 for infinite repeat
    repeat: function repeat(highlightCallback, codeBlock, iteration, targetEntity) {
      controller.addCommand(new RepeatCommand(controller, highlightCallback, codeBlock, iteration, targetEntity));
    },
    // -1 for infinite repeat
    repeatRandom: function repeatRandom(highlightCallback, codeBlock, targetEntity) {
      var maxIteration = 10;
      var randomIteration = Math.floor(Math.random() * maxIteration) + 1;
      controller.addCommand(new RepeatCommand(controller, highlightCallback, codeBlock, randomIteration, targetEntity));
    },

    getScreenshot: function getScreenshot() {
      return controller.getScreenshot();
    },

    spawnEntity: function spawnEntity(highlightCallback, type, spawnDirection) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.spawnEntity(callbackCommand, type, spawnDirection);
      });
      controller.addCommand(callbackCommand);
    },

    destroyEntity: function destroyEntity(highlightCallback, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.destroyEntity(callbackCommand, targetEntity);
      }, targetEntity);
      controller.addGlobalCommand(callbackCommand);
    },

    drop: function drop(highlightCallback, itemType, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.drop(callbackCommand, itemType);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    startDay: function startDay(highlightCallback) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.startDay(callbackCommand);
      });
      controller.addGlobalCommand(callbackCommand);
    },

    startNight: function startNight(highlightCallback) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.startNight(callbackCommand);
      });
      controller.addGlobalCommand(callbackCommand);
    },

    wait: function wait(highlightCallback, time, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.wait(callbackCommand, time);
      }, targetEntity);
      controller.addGlobalCommand(callbackCommand);
    },

    attack: function attack(highlightCallback, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.attack(callbackCommand);
      }, targetEntity);
      controller.addCommand(callbackCommand);
    },

    setDayNightCycle: function setDayNightCycle(firstDelay, delayInSecond, startTime) {
      if (!controller.dayNightCycle) {
        controller.dayNightCycle = true;
        controller.initiateDayNightCycle(firstDelay, delayInSecond, startTime);
      }
    },

    addScore: function addScore(highlightCallback, score, targetEntity) {
      var callbackCommand = new CallbackCommand(controller, highlightCallback, function () {
        controller.addScore(callbackCommand, score);
      }, targetEntity);
      controller.addGlobalCommand(callbackCommand);
    },

    arrowDown: function arrowDown(direction) {
      controller.arrowDown(direction);
    },

    arrowUp: function arrowUp(direction) {
      controller.arrowUp(direction);
    },

    clickDown: function clickDown() {
      controller.clickDown();
    },

    clickUp: function clickUp() {
      controller.clickUp();
    }
  };
};

/***/ }),

/***/ 2728:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseCommand = __webpack_require__(793);

module.exports = function (_BaseCommand) {
  _inherits(PlaceBlockCommand, _BaseCommand);

  function PlaceBlockCommand(gameController, highlightCallback, blockType, targetEntity) {
    _classCallCheck(this, PlaceBlockCommand);

    var _this = _possibleConstructorReturn(this, _BaseCommand.call(this, gameController, highlightCallback, targetEntity));

    _this.BlockType = blockType;
    return _this;
  }

  PlaceBlockCommand.prototype.tick = function tick() {
    // do stuff??
  };

  PlaceBlockCommand.prototype.begin = function begin() {
    _BaseCommand.prototype.begin.call(this);
    this.GameController.placeBlock(this, this.BlockType);
  };

  return PlaceBlockCommand;
}(BaseCommand);

/***/ }),

/***/ 2729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseCommand = __webpack_require__(793);

module.exports = function (_BaseCommand) {
  _inherits(PlaceInFrontCommand, _BaseCommand);

  function PlaceInFrontCommand(gameController, highlightCallback, blockType, targetEntity) {
    _classCallCheck(this, PlaceInFrontCommand);

    var _this = _possibleConstructorReturn(this, _BaseCommand.call(this, gameController, highlightCallback, targetEntity));

    _this.BlockType = blockType;
    return _this;
  }

  PlaceInFrontCommand.prototype.tick = function tick() {
    // do stuff??
  };

  PlaceInFrontCommand.prototype.begin = function begin() {
    _BaseCommand.prototype.begin.call(this);
    this.GameController.placeBlockForward(this, this.BlockType);
  };

  return PlaceInFrontCommand;
}(BaseCommand);

/***/ }),

/***/ 2730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseCommand = __webpack_require__(793);

module.exports = function (_BaseCommand) {
  _inherits(PlaceDirectionCommand, _BaseCommand);

  function PlaceDirectionCommand(gameController, highlightCallback, blockType, targetEntity, direction) {
    _classCallCheck(this, PlaceDirectionCommand);

    var _this = _possibleConstructorReturn(this, _BaseCommand.call(this, gameController, highlightCallback, targetEntity));

    _this.BlockType = blockType;
    _this.Direction = direction;
    return _this;
  }

  PlaceDirectionCommand.prototype.tick = function tick() {
    // do stuff??
  };

  PlaceDirectionCommand.prototype.begin = function begin() {
    _BaseCommand.prototype.begin.call(this);
    this.GameController.placeBlockDirection(this, this.BlockType, this.Direction);
  };

  return PlaceDirectionCommand;
}(BaseCommand);

/***/ }),

/***/ 2731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseCommand = __webpack_require__(793);

module.exports = function (_BaseCommand) {
  _inherits(MoveForwardCommand, _BaseCommand);

  function MoveForwardCommand(gameController, highlightCallback, targetEntity) {
    _classCallCheck(this, MoveForwardCommand);

    return _possibleConstructorReturn(this, _BaseCommand.call(this, gameController, highlightCallback, targetEntity));
  }

  MoveForwardCommand.prototype.tick = function tick() {
    // do stuff
  };

  MoveForwardCommand.prototype.begin = function begin() {
    _BaseCommand.prototype.begin.call(this);
    this.GameController.moveForward(this);
  };

  return MoveForwardCommand;
}(BaseCommand);

/***/ }),

/***/ 2732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseCommand = __webpack_require__(793);

module.exports = function (_BaseCommand) {
  _inherits(MoveBackwardCommand, _BaseCommand);

  function MoveBackwardCommand(gameController, highlightCallback, targetEntity) {
    _classCallCheck(this, MoveBackwardCommand);

    return _possibleConstructorReturn(this, _BaseCommand.call(this, gameController, highlightCallback, targetEntity));
  }

  MoveBackwardCommand.prototype.tick = function tick() {
    // do stuff
  };

  MoveBackwardCommand.prototype.begin = function begin() {
    _BaseCommand.prototype.begin.call(this);
    this.GameController.moveBackward(this);
  };

  return MoveBackwardCommand;
}(BaseCommand);

/***/ }),

/***/ 2733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseCommand = __webpack_require__(793);

module.exports = function (_BaseCommand) {
  _inherits(MoveDirectionCommand, _BaseCommand);

  function MoveDirectionCommand(gameController, highlightCallback, targetEntity, direction) {
    _classCallCheck(this, MoveDirectionCommand);

    var _this = _possibleConstructorReturn(this, _BaseCommand.call(this, gameController, highlightCallback, targetEntity, direction));

    _this.Direciton = direction;
    return _this;
  }

  MoveDirectionCommand.prototype.tick = function tick() {
    // do stuff
  };

  MoveDirectionCommand.prototype.begin = function begin() {
    _BaseCommand.prototype.begin.call(this);
    this.GameController.moveDirection(this, this.Direciton);
  };

  return MoveDirectionCommand;
}(BaseCommand);

/***/ }),

/***/ 2734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommandState = __webpack_require__(1270);
var CommandQueue = __webpack_require__(1269);
var BaseCommand = __webpack_require__(793);

module.exports = function (_BaseCommand) {
  _inherits(WhileCommand, _BaseCommand);

  function WhileCommand(gameController, highlightCallback, blockType, targetEntity, callback) {
    _classCallCheck(this, WhileCommand);

    var _this = _possibleConstructorReturn(this, _BaseCommand.call(this, gameController, highlightCallback, targetEntity));

    _this.iterationsLeft = 15;
    _this.BlockType = blockType;
    _this.WhileCode = callback;
    _this.queue = new CommandQueue(gameController);
    return _this;
  }

  WhileCommand.prototype.tick = function tick() {
    if (this.state === CommandState.WORKING) {
      // tick our command queue
      this.queue.tick();
    }

    if (this.queue.isFailed()) {
      this.state = CommandState.FAILURE;
    }

    if (this.queue.isSucceeded()) {
      this.handleWhileCheck();
    }
  };

  WhileCommand.prototype.begin = function begin() {
    _BaseCommand.prototype.begin.call(this);
    if (this.GameController.DEBUG) {
      console.log("WHILE command: BEGIN");
    }

    // setup the while check the first time
    this.handleWhileCheck();
  };

  WhileCommand.prototype.handleWhileCheck = function handleWhileCheck() {
    if (this.iterationsLeft <= 0) {
      this.state = CommandState.FAILURE;
    }

    if (this.GameController.isPathAhead(this.BlockType)) {
      this.queue.reset();
      this.GameController.queue.setWhileCommandInsertState(this.queue);
      this.WhileCode();
      this.GameController.queue.setWhileCommandInsertState(null);
      this.queue.begin();
    } else {
      this.state = CommandState.SUCCESS;
    }

    this.iterationsLeft--;
    if (this.GameController.DEBUG) {
      console.log("While command: Iterationsleft   " + this.iterationsLeft + " ");
    }
  };

  return WhileCommand;
}(BaseCommand);

/***/ }),

/***/ 2735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommandState = __webpack_require__(1270);
var CommandQueue = __webpack_require__(1269);
var BaseCommand = __webpack_require__(793);

module.exports = function (_BaseCommand) {
  _inherits(IfBlockAheadCommand, _BaseCommand);

  function IfBlockAheadCommand(gameController, highlightCallback, blockType, targetEntity, callback) {
    _classCallCheck(this, IfBlockAheadCommand);

    var _this = _possibleConstructorReturn(this, _BaseCommand.call(this, gameController, highlightCallback, targetEntity));

    _this.blockType = blockType;
    _this.ifCodeCallback = callback;

    _this.queue = new CommandQueue(gameController);
    return _this;
  }

  IfBlockAheadCommand.prototype.tick = function tick() {
    if (this.state === CommandState.WORKING) {
      // tick our command queue
      this.queue.tick();
    }

    if (this.queue.isFailed()) {
      this.state = CommandState.FAILURE;
    }

    if (this.queue.isSucceeded()) {
      this.state = CommandState.SUCCESS;
    }
  };

  IfBlockAheadCommand.prototype.begin = function begin() {
    _BaseCommand.prototype.begin.call(this);
    if (this.GameController.DEBUG) {
      console.log("WHILE command: BEGIN");
    }

    // setup the "if" check
    this.handleIfCheck();
  };

  IfBlockAheadCommand.prototype.handleIfCheck = function handleIfCheck() {
    if (this.GameController.isPathAhead(this.blockType)) {
      var targetQueue = this.GameController.getEntity(this.target).queue;
      this.queue.reset();
      targetQueue.setWhileCommandInsertState(this.queue);
      this.ifCodeCallback(); // inserts commands via CodeOrgAPI
      targetQueue.setWhileCommandInsertState(null);
      this.queue.begin();
    } else {
      this.state = CommandState.SUCCESS;
    }
  };

  return IfBlockAheadCommand;
}(BaseCommand);

/***/ }),

/***/ 2736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseCommand = __webpack_require__(793);

module.exports = function (_BaseCommand) {
  _inherits(RepeatCommand, _BaseCommand);

  function RepeatCommand(gameController, highlightCallback, actionCallback, iteration, targetEntity) {
    _classCallCheck(this, RepeatCommand);

    var _this = _possibleConstructorReturn(this, _BaseCommand.call(this, gameController, highlightCallback, targetEntity));

    _this.actionCallback = actionCallback;
    _this.iteration = iteration;
    return _this;
  }

  RepeatCommand.prototype.tick = function tick() {
    // do stuff
  };

  RepeatCommand.prototype.begin = function begin() {
    _BaseCommand.prototype.begin.call(this);
    this.succeeded();
    this.addRepeatCommand();
  };

  RepeatCommand.prototype.addRepeatCommand = function addRepeatCommand() {
    var entity = this.GameController.levelEntity.entityMap.get(this.target);
    // if target is undefined, push this command to the master queue
    if (entity === undefined) {
      this.GameController.queue.addRepeatCommands(this.actionCallback, this.iteration);
    } else {
      entity.queue.addRepeatCommands(this.actionCallback, this.iteration);
    }
  };

  return RepeatCommand;
}(BaseCommand);

/***/ }),

/***/ 2737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var skinsBase = __webpack_require__(744);

exports.load = function (assetUrl, id) {
  var skin = skinsBase.load(assetUrl, id);
  return skin;
};

/***/ }),

/***/ 2739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var skinsBase = __webpack_require__(744);

exports.load = function (assetUrl, id) {
  var skin = skinsBase.load(assetUrl, id);
  return skin;
};

/***/ }),

/***/ 2740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ArrowButtons = __webpack_require__(1737);

var _ArrowButtons2 = _interopRequireDefault(_ArrowButtons);

var _ProtectedVisualizationDiv = __webpack_require__(788);

var _ProtectedVisualizationDiv2 = _interopRequireDefault(_ProtectedVisualizationDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msg = __webpack_require__(40);

var GameButtons = __webpack_require__(819).default;

var BelowVisualization = __webpack_require__(824);


var CraftVisualizationColumn = function CraftVisualizationColumn(props) {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      _ProtectedVisualizationDiv2.default,
      null,
      _react2.default.createElement(
        'div',
        { id: 'minecraft-frame' },
        _react2.default.createElement('div', { id: 'phaser-game' })
      )
    ),
    _react2.default.createElement(
      GameButtons,
      null,
      _react2.default.createElement(_ArrowButtons2.default, null),
      props.showFinishButton && _react2.default.createElement(
        'div',
        { id: 'right-button-cell' },
        _react2.default.createElement(
          'button',
          { id: 'finishButton', className: 'share mc-share-button' },
          _react2.default.createElement(
            'div',
            null,
            msg.finish()
          )
        )
      )
    ),
    _react2.default.createElement(BelowVisualization, null)
  );
};

CraftVisualizationColumn.propTypes = {
  showFinishButton: _react.PropTypes.bool.isRequired
};

module.exports = CraftVisualizationColumn;

/***/ }),

/***/ 2741:
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
    var __line = 1, __lines = '<% var i18n = require(\'../locale\'); %>\n<h1 class="minecraft-big-yellow-header" id="getting-started-header"><%= i18n.playerSelectLetsGetStarted() %></h1>\n\n<h2 id="select-character-text"><%= i18n.playerSelectChooseCharacter() %></h2>\n\n<div id="choose-character-container">\n  <div class="minecraft-character" id="choose-steve">\n    <h1 class="minecraft-big-yellow-header">Steve</h1>\n    <div class="character-portrait" id="steve-portrait"></div>\n    <div class="choose-character-button" id="choose-steve-select"><%= i18n.selectChooseButton() %></div>\n  </div>\n  <div class="minecraft-character" id="choose-alex">\n    <h1 class="minecraft-big-yellow-header">Alex</h1>\n    <div class="character-portrait" id="alex-portrait"></div>\n    <div class="choose-character-button" id="choose-alex-select"><%= i18n.selectChooseButton() %></div>\n  </div>\n</div>\n\n<div id="close-character-select"></div>\n', __filename = "src/craft/agent/dialogs/playerSelection.html.ejs";
    try {
        var __output = [], __append = __output.push.bind(__output);
        with (locals || {}) {
            var i18n = __webpack_require__(1955);
            __append('\n<h1 class="minecraft-big-yellow-header" id="getting-started-header">');
            __line = 2;
            __append(escape(i18n.playerSelectLetsGetStarted()));
            __append('</h1>\n\n<h2 id="select-character-text">');
            __line = 4;
            __append(escape(i18n.playerSelectChooseCharacter()));
            __append('</h2>\n\n<div id="choose-character-container">\n  <div class="minecraft-character" id="choose-steve">\n    <h1 class="minecraft-big-yellow-header">Steve</h1>\n    <div class="character-portrait" id="steve-portrait"></div>\n    <div class="choose-character-button" id="choose-steve-select">');
            __line = 10;
            __append(escape(i18n.selectChooseButton()));
            __append('</div>\n  </div>\n  <div class="minecraft-character" id="choose-alex">\n    <h1 class="minecraft-big-yellow-header">Alex</h1>\n    <div class="character-portrait" id="alex-portrait"></div>\n    <div class="choose-character-button" id="choose-alex-select">');
            __line = 15;
            __append(escape(i18n.selectChooseButton()));
            __append('</div>\n  </div>\n</div>\n\n<div id="close-character-select"></div>\n');
            __line = 20;
        }
        return __output.join("");
    } catch (e) {
        rethrow(e, __lines, __filename, __line);
    }
}

/***/ }),

/***/ 2742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _skins = __webpack_require__(744);

var _skins2 = _interopRequireDefault(_skins);

var _craft = __webpack_require__(2131);

var _craft2 = _interopRequireDefault(_craft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.load = function (assetUrl, id) {
  var skin = _skins2.default.load(assetUrl, id);

  skin.replaceInstructions = function (instructions) {
    if (instructions) {
      return instructions.replace(/{currentPlayerName}/g, _craft2.default.getCurrentCharacter());
    }

    return instructions;
  };

  skin.instructions2ImageSubstitutions = {
    "agent": '/blockly/media/craft/instructions/agent.png',
    "NetherPortal": '/blockly/media/craft/instructions/NetherPortal.png',

    // blocks
    "PressurePlate_Up": "/blockly/media/craft/instructions/PressurePlate_Up.png",
    "Rails_Vertical": "/blockly/media/craft/instructions/Rails_Vertical.png",
    "cactus": "/blockly/media/craft/instructions/cactus.png",
    "door_iron": "/blockly/media/craft/instructions/door_iron.png",

    // miniblocks
    "book_enchanted": "/blockly/media/craft/instructions/book_enchanted.png",
    "compass": "/blockly/media/craft/instructions/compass.png",
    "diamond_axe": "/blockly/media/craft/instructions/diamond_axe.png",
    "diamond_pickaxe": "/blockly/media/craft/instructions/diamond_pickaxe.png",
    "diamond_shovel": "/blockly/media/craft/instructions/diamond_shovel.png",
    "flint_and_steel": "/blockly/media/craft/instructions/flint_and_steel.png",
    "flint": "/blockly/media/craft/instructions/flint.png",
    "map_empty": "/blockly/media/craft/instructions/map_empty.png",
    "chest": "/blockly/media/craft/instructions/chest.png",
    "bucket_empty": "/blockly/media/craft/instructions/bucket_empty.png",
    "redstone_torch": "/blockly/media/craft/instructions/redstone_torch.png",
    "minecart_normal": "/blockly/media/craft/instructions/minecart_normal.png"
  };

  return skin;
};

/***/ }),

/***/ 2744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var skinsBase = __webpack_require__(744);

exports.load = function (assetUrl, id) {
  var skin = skinsBase.load(assetUrl, id);
  return skin;
};

/***/ }),

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

/***/ 2750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var skinBase = __webpack_require__(744);

exports.load = function (assetUrl, id) {
  var skin = skinBase.load(assetUrl, id);

  return skin;
};

/***/ }),

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

/***/ 2793:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var skinBase = __webpack_require__(744);

exports.load = function (assetUrl, id) {
  var skin = skinBase.load(assetUrl, id);
  return skin;
};

/***/ }),

/***/ 2800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(789);

var _locale = __webpack_require__(1706);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(40);

var _locale4 = _interopRequireDefault(_locale3);

var _skins = __webpack_require__(744);

var _skins2 = _interopRequireDefault(_skins);

var _skins3 = __webpack_require__(2151);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Standard Twitter options matching defaults in FeedbackUtils.createSharingDiv
// Use to avoid "story" reference in share text for a given skin.
var plainTwitterOptions = {
  text: _locale4.default.defaultTwitterText() + " @codeorg",
  hashtag: 'HourOfCode'
}; /**
    * Load Skin for Studio.
    */
// goal: A 20x34 goal image.
// background: Number of 400x400 background images. Randomly select one if
// specified, otherwise, use background.png.

function loadGumball(skin) {
  skin.twitterOptions = plainTwitterOptions;
  skin.defaultBackground = 'dots';
  skin.projectileFrames = 10;
  skin.itemFrames = 10;

  skin.spriteHeight = 110;
  skin.spriteWidth = 110;

  // Dimensions of a rectangle in sprite center in which item collisions occur.
  skin.spriteCollisionRectWidth = 60;
  skin.spriteCollisionRectHeight = 60;

  // NOTE: all class names should be unique.  eventhandler naming won't work
  // if we name a projectile class 'left' for example.
  skin.ProjectileClassNames = ['projectile_banana', 'projectile_dodgeball', 'projectile_donkey', 'projectile_handbag', 'projectile_hotdog', 'projectile_pompom', 'projectile_toaster', 'projectile_waterball'];
  // TODO: proper item class names
  skin.ItemClassNames = ['item_projectile_banana', 'item_projectile_dodgeball', 'item_projectile_donkey', 'item_projectile_handbag', 'item_projectile_hotdog', 'item_projectile_pompom', 'item_projectile_toaster', 'item_projectile_waterball'];

  // Images
  skin.projectile_banana = skin.assetUrl('projectile_banana.png');
  skin.projectile_dodgeball = skin.assetUrl('projectile_dodgeball.png');
  skin.projectile_donkey = skin.assetUrl('projectile_donkey.png');
  skin.projectile_handbag = skin.assetUrl('projectile_handbag.png');
  skin.projectile_hotdog = skin.assetUrl('projectile_hotdog.png');
  skin.projectile_pompom = skin.assetUrl('projectile_pompom.png');
  skin.projectile_toaster = skin.assetUrl('projectile_toaster.png');
  skin.projectile_waterball = skin.assetUrl('projectile_waterball.png');

  // TODO: proper item class names
  skin.item_projectile_banana = skin.assetUrl('projectile_banana.png');
  skin.item_projectile_dodgeball = skin.assetUrl('projectile_dodgeball.png');
  skin.item_projectile_donkey = skin.assetUrl('projectile_donkey.png');
  skin.item_projectile_handbag = skin.assetUrl('projectile_handbag.png');
  skin.item_projectile_hotdog = skin.assetUrl('projectile_hotdog.png');
  skin.item_projectile_pompom = skin.assetUrl('projectile_pompom.png');
  skin.item_projectile_toaster = skin.assetUrl('projectile_toaster.png');
  skin.item_projectile_waterball = skin.assetUrl('projectile_waterball.png');

  skin.explosion = skin.assetUrl('explosion.png');
  skin.explosionThumbnail = skin.assetUrl('explosion_thumb.png');
  skin.explosionFrames = 40;
  skin.fadeExplosion = false;
  skin.timePerExplosionFrame = 20;

  skin.characters = {
    background: skin.assetUrl('background_characters.png')
  };
  skin.checkers = {
    background: skin.assetUrl('background_checkers.png')
  };
  skin.clouds = {
    background: skin.assetUrl('background_clouds.png')
  };
  skin.cornered = {
    background: skin.assetUrl('background_cornered.png')
  };
  skin.dots = {
    background: skin.assetUrl('background_dots.png')
  };
  skin.graffiti = {
    background: skin.assetUrl('background_graffiti.png')
  };
  skin.space = {
    background: skin.assetUrl('background_space.png')
  };
  skin.squares = {
    background: skin.assetUrl('background_squares.png')
  };
  skin.stripes = {
    background: skin.assetUrl('background_stripes.png')
  };
  skin.wood = {
    background: skin.assetUrl('background_wood.png')
  };

  skin.avatarList = ["anais", "anton", "bananajoe", "darwin", "gumball", "nicole", "penny", "richard"];
  skin.walkValues = [8, 8, 8, 12, 12, 8, 10, 12];

  /**
   * Sprite thumbs generated with:
   * `brew install graphicsmagick`
   * `gm convert +adjoin -crop 200x200 -resize 100x100 *spritesheet* output%02d.png`
   */
  skin.avatarList.forEach(function (name, i) {
    skin[name] = {
      sprite: skin.assetUrl('idle_' + name + '.png'),
      walk: skin.assetUrl('walk_' + name + '.png'),
      dropdownThumbnail: skin.assetUrl('avatar_' + name + '_thumb.png'),
      frameCounts: {
        normal: 19,
        turns: 8,
        emotions: 0,
        walk: skin.walkValues[i],
        extraEmotions: 3,
        walkingEmotions: 3
      },
      animations: {
        turns: 8,
        walkingEmotions: 3
      },
      animationFrameDuration: 3
    };
  });

  skin.backgroundChoices = [[_locale2.default.setBackgroundRandom(), _constants.RANDOM_VALUE], [_locale2.default.setBackgroundCharacters(), '"characters"'], [_locale2.default.setBackgroundCheckers(), '"checkers"'], [_locale2.default.setBackgroundClouds(), '"clouds"'], [_locale2.default.setBackgroundCornered(), '"cornered"'], [_locale2.default.setBackgroundDots(), '"dots"'], [_locale2.default.setBackgroundGraffiti(), '"graffiti"'], [_locale2.default.setBackgroundSpace(), '"space"'], [_locale2.default.setBackgroundSquares(), '"squares"'], [_locale2.default.setBackgroundStripes(), '"stripes"'], [_locale2.default.setBackgroundWood(), '"wood"']];

  // NOTE: background names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.backgroundChoicesK1 = [[skin.characters.background, '"characters"'], [skin.checkers.background, '"checkers"'], [skin.clouds.background, '"clouds"'], [skin.cornered.background, '"cornered"'], [skin.dots.background, '"dots"'], [skin.graffiti.background, '"graffiti"'], [skin.space.background, '"space"'], [skin.squares.background, '"squares"'], [skin.stripes.background, '"stripes"'], [skin.wood.background, '"wood"'], [skin.randomPurpleIcon, _constants.RANDOM_VALUE]];

  skin.spriteChoices = [[_locale2.default.setSpriteHidden(), _constants.HIDDEN_VALUE], [_locale2.default.setSpriteRandom(), _constants.RANDOM_VALUE], [_locale2.default.setSpriteAnais(), '"anais"'], [_locale2.default.setSpriteAnton(), '"anton"'], [_locale2.default.setSpriteBananajoe(), '"bananajoe"'], [_locale2.default.setSpriteDarwin(), '"darwin"'], [_locale2.default.setSpriteGumball(), '"gumball"'], [_locale2.default.setSpriteNicole(), '"nicole"'], [_locale2.default.setSpritePenny(), '"penny"'], [_locale2.default.setSpriteRichard(), '"richard"']];

  skin.projectileChoices = [[_locale2.default.projectileBanana(), '"projectile_banana"'], [_locale2.default.projectileDodgeball(), '"projectile_dodgeball"'], [_locale2.default.projectileDonkey(), '"projectile_donkey"'], [_locale2.default.projectileHandbag(), '"projectile_handbag"'], [_locale2.default.projectileHotdog(), '"projectile_hotdog"'], [_locale2.default.projectilePompom(), '"projectile_pompom"'], [_locale2.default.projectileToaster(), '"projectile_toaster"'], [_locale2.default.projectileWaterball(), '"projectile_waterball"'], [_locale2.default.projectileRandom(), _constants.RANDOM_VALUE]];

  skin.makeProjectileChoices = [[_locale2.default.makeProjectileBanana(), '"projectile_banana"'], [_locale2.default.makeProjectileDodgeball(), '"projectile_dodgeball"'], [_locale2.default.makeProjectileDonkey(), '"projectile_donkey"'], [_locale2.default.makeProjectileHandbag(), '"projectile_handbag"'], [_locale2.default.makeProjectileHotdog(), '"projectile_hotdog"'], [_locale2.default.makeProjectilePompom(), '"projectile_pompom"'], [_locale2.default.makeProjectileToaster(), '"projectile_toaster"'], [_locale2.default.makeProjectileWaterball(), '"projectile_waterball"']];

  skin.whenProjectileCollidedChoices = [[_locale2.default.whenSpriteCollidedWithProjectileBanana(), 'projectile_banana'], [_locale2.default.whenSpriteCollidedWithProjectileDodgeball(), 'projectile_dodgeball'], [_locale2.default.whenSpriteCollidedWithProjectileDonkey(), 'projectile_donkey'], [_locale2.default.whenSpriteCollidedWithProjectileHandbag(), 'projectile_handbag'], [_locale2.default.whenSpriteCollidedWithProjectileHotdog(), 'projectile_hotdog'], [_locale2.default.whenSpriteCollidedWithProjectilePompom(), 'projectile_pompom'], [_locale2.default.whenSpriteCollidedWithProjectileToaster(), 'projectile_toaster'], [_locale2.default.whenSpriteCollidedWithProjectileWaterball(), 'projectile_waterball']];

  // TODO: Create actual item choices
  // NOTE: item names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.itemChoices = [[_locale2.default.itemProjectileBanana(), '"item_projectile_banana"'], [_locale2.default.itemProjectileDodgeball(), '"item_projectile_dodgeball"'], [_locale2.default.itemProjectileDonkey(), '"item_projectile_donkey"'], [_locale2.default.itemProjectileHandbag(), '"item_projectile_handbag"'], [_locale2.default.itemProjectileHotdog(), '"item_projectile_hotdog"'], [_locale2.default.itemProjectilePompom(), '"item_projectile_pompom"'], [_locale2.default.itemProjectileToaster(), '"item_projectile_toaster"'], [_locale2.default.itemProjectileWaterball(), '"item_projectile_waterball"'], [_locale2.default.itemRandom(), _constants.RANDOM_VALUE]];
}

function loadIceAge(skin) {
  skin.twitterOptions = plainTwitterOptions;
  skin.defaultBackground = 'icy1';
  skin.projectileFrames = 10;
  skin.itemFrames = 10;

  skin.spriteHeight = 130;
  skin.spriteWidth = 130;

  // Dimensions of a rectangle in sprite center in which item collisions occur.
  skin.spriteCollisionRectWidth = 60;
  skin.spriteCollisionRectHeight = 60;

  // NOTE: all class names should be unique.  eventhandler naming won't work
  // if we name a projectile class 'left' for example.
  skin.ProjectileClassNames = ['ia_projectile_1', 'ia_projectile_2', 'ia_projectile_3', 'ia_projectile_4', 'ia_projectile_5'];
  // TODO: proper item class names
  skin.ItemClassNames = ['item_ia_projectile_1', 'item_ia_projectile_2', 'item_ia_projectile_3', 'item_ia_projectile_4', 'item_ia_projectile_5'];

  // Images
  skin.ia_projectile_1 = skin.assetUrl('ia_projectile_1.png');
  skin.ia_projectile_2 = skin.assetUrl('ia_projectile_2.png');
  skin.ia_projectile_3 = skin.assetUrl('ia_projectile_3.png');
  skin.ia_projectile_4 = skin.assetUrl('ia_projectile_4.png');
  skin.ia_projectile_5 = skin.assetUrl('ia_projectile_5.png');

  // TODO: proper item class names
  skin.item_ia_projectile_1 = skin.assetUrl('ia_projectile_1.png');
  skin.item_ia_projectile_2 = skin.assetUrl('ia_projectile_2.png');
  skin.item_ia_projectile_3 = skin.assetUrl('ia_projectile_3.png');
  skin.item_ia_projectile_4 = skin.assetUrl('ia_projectile_4.png');
  skin.item_ia_projectile_5 = skin.assetUrl('ia_projectile_5.png');

  skin.explosion = skin.assetUrl('explosion.png');
  skin.explosionThumbnail = skin.assetUrl('explosion_thumb.png');
  skin.explosionFrames = 17;
  skin.fadeExplosion = false;
  skin.timePerExplosionFrame = 40;

  skin.icy1 = {
    background: skin.assetUrl('background_icy1.jpg')
  };
  skin.icy2 = {
    background: skin.assetUrl('background_icy2.jpg')
  };
  skin.icy3 = {
    background: skin.assetUrl('background_icy3.jpg')
  };
  skin.icy4 = {
    background: skin.assetUrl('background_icy4.jpg')
  };
  skin.icy5 = {
    background: skin.assetUrl('background_icy5.jpg')
  };
  skin.ground = {
    background: skin.assetUrl('background_ground.jpg')
  };

  skin.avatarList = ["manny", "sid", "scrat", "diego", "granny"];

  /**
   * Sprite thumbs generated with:
   * `brew install graphicsmagick`
   * `gm convert +adjoin -crop 200x200 -resize 100x100 *spritesheet* output%02d.png`
   */
  skin.avatarList.forEach(function (name) {
    skin[name] = {
      sprite: skin.assetUrl('avatar_' + name + '.png'),
      walk: skin.assetUrl('walk_' + name + '.png'),
      dropdownThumbnail: skin.assetUrl('avatar_' + name + '_thumb.png'),
      frameCounts: {
        normal: 19,
        turns: 8,
        emotions: 0,
        walk: 12,
        extraEmotions: 3,
        walkingEmotions: 3
      },
      animations: {
        turns: 8,
        walkingEmotions: 3
      },
      animationFrameDuration: 3
    };
  });

  skin.backgroundChoices = [[_locale2.default.setBackgroundRandom(), _constants.RANDOM_VALUE], [_locale2.default.setBackgroundIcy1(), '"icy1"'], [_locale2.default.setBackgroundIcy2(), '"icy2"'], [_locale2.default.setBackgroundIcy3(), '"icy3"'], [_locale2.default.setBackgroundIcy4(), '"icy4"'], [_locale2.default.setBackgroundIcy5(), '"icy5"'], [_locale2.default.setBackgroundGround(), '"ground"']];

  // NOTE: background names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.backgroundChoicesK1 = [[skin.icy1.background, '"icy1"'], [skin.icy2.background, '"icy2"'], [skin.icy3.background, '"icy3"'], [skin.icy4.background, '"icy4"'], [skin.icy5.background, '"icy5"'], [skin.ground.background, '"ground"'], [skin.randomPurpleIcon, _constants.RANDOM_VALUE]];

  skin.spriteChoices = [[_locale2.default.setSpriteHidden(), _constants.HIDDEN_VALUE], [_locale2.default.setSpriteRandom(), _constants.RANDOM_VALUE], [_locale2.default.setSpriteManny(), '"manny"'], [_locale2.default.setSpriteSid(), '"sid"'], [_locale2.default.setSpriteScrat(), '"scrat"'], [_locale2.default.setSpriteDiego(), '"diego"'], [_locale2.default.setSpriteGranny(), '"granny"']];

  skin.projectileChoices = [[_locale2.default.projectileIAProjectile1(), '"ia_projectile_1"'], [_locale2.default.projectileIAProjectile2(), '"ia_projectile_2"'], [_locale2.default.projectileIAProjectile3(), '"ia_projectile_3"'], [_locale2.default.projectileIAProjectile4(), '"ia_projectile_4"'], [_locale2.default.projectileIAProjectile5(), '"ia_projectile_5"'], [_locale2.default.projectileRandom(), _constants.RANDOM_VALUE]];

  skin.makeProjectileChoices = [[_locale2.default.makeProjectileIAProjectile1(), '"ia_projectile_1"'], [_locale2.default.makeProjectileIAProjectile2(), '"ia_projectile_2"'], [_locale2.default.makeProjectileIAProjectile3(), '"ia_projectile_3"'], [_locale2.default.makeProjectileIAProjectile4(), '"ia_projectile_4"'], [_locale2.default.makeProjectileIAProjectile5(), '"ia_projectile_5"']];

  skin.whenProjectileCollidedChoices = [[_locale2.default.whenSpriteCollidedWithIAProjectile1(), 'ia_projectile_1'], [_locale2.default.whenSpriteCollidedWithIAProjectile2(), 'ia_projectile_2'], [_locale2.default.whenSpriteCollidedWithIAProjectile3(), 'ia_projectile_3'], [_locale2.default.whenSpriteCollidedWithIAProjectile4(), 'ia_projectile_4'], [_locale2.default.whenSpriteCollidedWithIAProjectile5(), 'ia_projectile_5']];

  // TODO: Create actual item choices
  // NOTE: item names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.itemChoices = [[_locale2.default.itemIAProjectile1(), '"item_ia_projectile_1"'], [_locale2.default.itemIAProjectile2(), '"item_ia_projectile_2"'], [_locale2.default.itemIAProjectile3(), '"item_ia_projectile_3"'], [_locale2.default.itemIAProjectile4(), '"item_ia_projectile_4"'], [_locale2.default.itemIAProjectile5(), '"item_ia_projectile_5"'], [_locale2.default.itemRandom(), _constants.RANDOM_VALUE]];
}

function loadInfinity(skin) {
  skin.preloadAssets = true;

  skin.defaultBackground = 'leafy';
  skin.projectileFrames = 10;
  skin.itemFrames = 10;

  // NOTE: all class names should be unique.  eventhandler naming won't work
  // if we name a projectile class 'left' for example.
  skin.ProjectileClassNames = ['projectile_hiro', 'projectile_anna', 'projectile_elsa', 'projectile_baymax', 'projectile_rapunzel', 'projectile_cherry', 'projectile_ice', 'projectile_duck'];

  skin.specialProjectileProperties = {
    'projectile_cherry': { frames: 13 },
    'projectile_ice': { frames: 12 },
    'projectile_duck': { frames: 12 }
  };

  // TODO: proper item class names
  skin.ItemClassNames = ['item_hiro', 'item_anna', 'item_elsa', 'item_baymax', 'item_rapunzel', 'item_cherry', 'item_ice', 'item_duck'];

  skin.specialItemProperties = {
    'item_cherry': { frames: 13 },
    'item_ice': { frames: 12 },
    'item_duck': { frames: 12 }
  };

  skin.explosion = skin.assetUrl('vanish.png');
  skin.explosionFrames = 17;
  skin.fadeExplosion = true;
  skin.timePerExplosionFrame = 100;

  // Dimensions of a rectangle in collidable center from which projectiles begin.
  skin.projectileSpriteWidth = 70;
  skin.projectileSpriteHeight = 70;

  skin.avatarList = ['anna', 'elsa', 'hiro', 'baymax', 'rapunzel'];
  skin.avatarList.forEach(function (name) {
    skin[name] = {
      sprite: skin.assetUrl('avatar_' + name + '.png'),
      walk: skin.assetUrl('walk_' + name + '.png'),
      dropdownThumbnail: skin.assetUrl('avatar_' + name + '_thumb.png'),
      frameCounts: {
        normal: 19,
        turns: 8,
        emotions: 0,
        walk: 12
      },
      animations: {
        turns: 8
      },
      animationFrameDuration: 3
    };
  });

  skin.preventProjectileLoop = function (className) {
    return className === 'projectile_hiro';
  };

  skin.preventItemLoop = function (className) {
    return className === 'item_hiro';
  };

  skin.projectile_hiro = skin.assetUrl('projectile_hiro.png');
  skin.projectile_anna = skin.assetUrl('projectile_anna.png');
  skin.projectile_elsa = skin.assetUrl('projectile_elsa.png');
  skin.projectile_baymax = skin.assetUrl('projectile_baymax.png');
  skin.projectile_rapunzel = skin.assetUrl('projectile_rapunzel.png');
  skin.projectile_cherry = skin.assetUrl('projectile_cherry.png');
  skin.projectile_ice = skin.assetUrl('projectile_ice.png');
  skin.projectile_duck = skin.assetUrl('projectile_duck.png');

  // TODO: Create actual item choices
  skin.item_hiro = skin.assetUrl('projectile_hiro.png');
  skin.item_anna = skin.assetUrl('projectile_anna.png');
  skin.item_elsa = skin.assetUrl('projectile_elsa.png');
  skin.item_baymax = skin.assetUrl('projectile_baymax.png');
  skin.item_rapunzel = skin.assetUrl('projectile_rapunzel.png');
  skin.item_cherry = skin.assetUrl('projectile_cherry.png');
  skin.item_ice = skin.assetUrl('projectile_ice.png');
  skin.item_duck = skin.assetUrl('projectile_duck.png');

  skin.leafy = {
    background: skin.assetUrl('background_leafy.jpg')
  };
  skin.grassy = {
    background: skin.assetUrl('background_grassy.jpg')
  };
  skin.flower = {
    background: skin.assetUrl('background_flower.jpg')
  };
  skin.tile = {
    background: skin.assetUrl('background_tile.jpg')
  };
  skin.icy = {
    background: skin.assetUrl('background_icy.jpg')
  };
  skin.snowy = {
    background: skin.assetUrl('background_snowy.jpg')
  };

  // These are used by blocks.js to customize our dropdown blocks across skins
  skin.backgroundChoices = [[_locale2.default.setBackgroundRandom(), _constants.RANDOM_VALUE], [_locale2.default.setBackgroundLeafy(), '"leafy"'], [_locale2.default.setBackgroundGrassy(), '"grassy"'], [_locale2.default.setBackgroundFlower(), '"flower"'], [_locale2.default.setBackgroundTile(), '"tile"'], [_locale2.default.setBackgroundIcy(), '"icy"'], [_locale2.default.setBackgroundSnowy(), '"snowy"']];

  // NOTE: background names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.backgroundChoicesK1 = [[skin.leafy.background, '"leafy"'], [skin.grassy.background, '"grassy"'], [skin.flower.background, '"flower"'], [skin.tile.background, '"tile"'], [skin.icy.background, '"icy"'], [skin.snowy.background, '"snowy"'], [skin.randomPurpleIcon, _constants.RANDOM_VALUE]];

  skin.spriteChoices = [[_locale2.default.setSpriteHidden(), _constants.HIDDEN_VALUE], [_locale2.default.setSpriteRandom(), _constants.RANDOM_VALUE], [_locale2.default.setSpriteAnna(), '"anna"'], [_locale2.default.setSpriteElsa(), '"elsa"'], [_locale2.default.setSpriteHiro(), '"hiro"'], [_locale2.default.setSpriteBaymax(), '"baymax"'], [_locale2.default.setSpriteRapunzel(), '"rapunzel"']];

  skin.projectileChoices = [[_locale2.default.projectileHiro(), '"projectile_hiro"'], [_locale2.default.projectileAnna(), '"projectile_anna"'], [_locale2.default.projectileElsa(), '"projectile_elsa"'], [_locale2.default.projectileBaymax(), '"projectile_baymax"'], [_locale2.default.projectileRapunzel(), '"projectile_rapunzel"'], [_locale2.default.projectileCherry(), '"projectile_cherry"'], [_locale2.default.projectileIce(), '"projectile_ice"'], [_locale2.default.projectileDuck(), '"projectile_duck"'], [_locale2.default.projectileRandom(), _constants.RANDOM_VALUE]];

  // TODO: Create actual item choices
  // NOTE: item names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.itemChoices = [[_locale2.default.itemHiro(), '"item_hiro"'], [_locale2.default.itemAnna(), '"item_anna"'], [_locale2.default.itemElsa(), '"item_elsa"'], [_locale2.default.itemBaymax(), '"item_baymax"'], [_locale2.default.itemRapunzel(), '"item_rapunzel"'], [_locale2.default.itemCherry(), '"item_cherry"'], [_locale2.default.itemIce(), '"item_ice"'], [_locale2.default.itemDuck(), '"item_duck"'], [_locale2.default.itemRandom(), _constants.RANDOM_VALUE]];
}

function loadStudio(skin) {
  skin.defaultBackground = 'cave';
  skin.projectileFrames = 8;
  skin.itemFrames = 8;

  skin.explosion = skin.assetUrl('explosion.png');
  skin.explosionThumbnail = skin.assetUrl('explosion_thumb.png');
  skin.explosionFrames = 20;
  skin.fadeExplosion = false;
  skin.timePerExplosionFrame = 40;

  skin.hardcourt = {
    background: skin.assetUrl('background.png')
  };
  skin.black = {
    background: skin.assetUrl('retro_background.png')
  };
  skin.cave = {
    background: skin.assetUrl('background_cave.png')
  };
  skin.night = {
    background: skin.assetUrl('background_santa.png')
  };
  skin.cloudy = {
    background: skin.assetUrl('background_scifi.png')
  };
  skin.underwater = {
    background: skin.assetUrl('background_underwater.png')
  };
  skin.city = {
    background: skin.assetUrl('background_city.png')
  };
  skin.desert = {
    background: skin.assetUrl('background_desert.png')
  };
  skin.rainbow = {
    background: skin.assetUrl('background_rainbow.png')
  };
  skin.soccer = {
    background: skin.assetUrl('background_soccer.png')
  };
  skin.space = {
    background: skin.assetUrl('background_space.png')
  };
  skin.tennis = {
    background: skin.assetUrl('background_tennis.png')
  };
  skin.winter = {
    background: skin.assetUrl('background_winter.png')
  };
  skin.grid = {
    background: skin.assetUrl('background_grid.png')
  };

  // NOTE: first item must be RANDOM_VALUE
  skin.mapChoices = [[_locale2.default.setMapRandom(), _constants.RANDOM_VALUE], [_locale2.default.setMapBlank(), 'blank'], [_locale2.default.setMapCircle(), 'circle'], [_locale2.default.setMapHorizontal(), 'horizontal'], [_locale2.default.setMapGrid(), 'grid'], [_locale2.default.setMapBlobs(), 'blobs']];

  skin.wallMaps = {
    blank: {
      srcUrl: skin.assetUrl('obstacle_blank.png')
    },
    circle: {
      srcUrl: skin.assetUrl('obstacle_circle.png')
    },
    horizontal: {
      srcUrl: skin.assetUrl('obstacle_horizontal.png')
    },
    grid: {
      srcUrl: skin.assetUrl('obstacle_grid.png')
    },
    blobs: {
      srcUrl: skin.assetUrl('obstacle_blobs.png')
    }
  };

  skin.avatarList = ["dog", "cat", "penguin", "dinosaur", "octopus", "witch", "bat", "bird", "dragon", "squirrel", "wizard", "alien", "ghost", "monster", "robot", "unicorn", "zombie", "knight", "ninja", "pirate", "caveboy", "cavegirl", "princess", "spacebot", "soccergirl", "soccerboy", "tennisgirl", "tennisboy"];

  /**
   * Sprite thumbs generated with:
   * `brew install graphicsmagick`
   * `gm convert +adjoin -crop 200x200 -resize 100x100 *spritesheet* output%02d.png`
   */
  skin.avatarList.forEach(function (name) {
    skin[name] = {
      sprite: skin.assetUrl(name + '_spritesheet_200px.png'),
      dropdownThumbnail: skin.assetUrl(name + '_thumb.png'),
      frameCounts: {
        normal: 2,
        holdIdleFrame0Count: 8,
        turns: 7,
        emotions: 3
      },
      animationFrameDuration: 6
    };
  });

  skin.backgroundChoices = [[_locale2.default.setBackgroundRandom(), _constants.RANDOM_VALUE], [_locale2.default.setBackgroundCave(), '"cave"'], [_locale2.default.setBackgroundNight(), '"night"'], [_locale2.default.setBackgroundCloudy(), '"cloudy"'], [_locale2.default.setBackgroundUnderwater(), '"underwater"'], [_locale2.default.setBackgroundHardcourt(), '"hardcourt"'], [_locale2.default.setBackgroundBlack(), '"black"'], [_locale2.default.setBackgroundCity(), '"city"'], [_locale2.default.setBackgroundDesert(), '"desert"'], [_locale2.default.setBackgroundRainbow(), '"rainbow"'], [_locale2.default.setBackgroundSoccer(), '"soccer"'], [_locale2.default.setBackgroundSpace(), '"space"'], [_locale2.default.setBackgroundTennis(), '"tennis"'], [_locale2.default.setBackgroundWinter(), '"winter"']];

  // NOTE: background names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.backgroundChoicesK1 = [[skin.cave.background, '"cave"'], [skin.night.background, '"night"'], [skin.cloudy.background, '"cloudy"'], [skin.underwater.background, '"underwater"'], [skin.hardcourt.background, '"hardcourt"'], [skin.black.background, '"black"'], [skin.city.background, '"city"'], [skin.desert.background, '"desert"'], [skin.rainbow.background, '"rainbow"'], [skin.soccer.background, '"soccer"'], [skin.space.background, '"space"'], [skin.tennis.background, '"tennis"'], [skin.winter.background, '"winter"'], [skin.randomPurpleIcon, _constants.RANDOM_VALUE]];

  skin.spriteChoices = [[_locale2.default.setSpriteHidden(), _constants.HIDDEN_VALUE], [_locale2.default.setSpriteRandom(), _constants.RANDOM_VALUE], [_locale2.default.setSpriteWitch(), '"witch"'], [_locale2.default.setSpriteCat(), '"cat"'], [_locale2.default.setSpriteDinosaur(), '"dinosaur"'], [_locale2.default.setSpriteDog(), '"dog"'], [_locale2.default.setSpriteOctopus(), '"octopus"'], [_locale2.default.setSpritePenguin(), '"penguin"'], [_locale2.default.setSpriteBat(), '"bat"'], [_locale2.default.setSpriteBird(), '"bird"'], [_locale2.default.setSpriteDragon(), '"dragon"'], [_locale2.default.setSpriteSquirrel(), '"squirrel"'], [_locale2.default.setSpriteWizard(), '"wizard"'], [_locale2.default.setSpriteAlien(), '"alien"'], [_locale2.default.setSpriteGhost(), '"ghost"'], [_locale2.default.setSpriteMonster(), '"monster"'], [_locale2.default.setSpriteRobot(), '"robot"'], [_locale2.default.setSpriteUnicorn(), '"unicorn"'], [_locale2.default.setSpriteZombie(), '"zombie"'], [_locale2.default.setSpriteKnight(), '"knight"'], [_locale2.default.setSpriteNinja(), '"ninja"'], [_locale2.default.setSpritePirate(), '"pirate"'], [_locale2.default.setSpriteCaveBoy(), '"caveboy"'], [_locale2.default.setSpriteCaveGirl(), '"cavegirl"'], [_locale2.default.setSpritePrincess(), '"princess"'], [_locale2.default.setSpriteSpacebot(), '"spacebot"'], [_locale2.default.setSpriteSoccerGirl(), '"soccergirl"'], [_locale2.default.setSpriteSoccerBoy(), '"soccerboy"'], [_locale2.default.setSpriteTennisGirl(), '"tennisgirl"'], [_locale2.default.setSpriteTennisBoy(), '"tennisboy"']];

  skin.projectileChoices = [[_locale2.default.projectileAirplane(), '"airplane"'], [_locale2.default.projectileBasketball(), '"basketball"'], [_locale2.default.projectileDisc(), '"disc"'], [_locale2.default.projectilePie(), '"pie"'], [_locale2.default.projectilePumpkin(), '"pumpkin"'], [_locale2.default.projectileStar(), '"star"'], [_locale2.default.projectileSandwich(), '"sandwich"'], [_locale2.default.projectileSnowball(), '"snowball"'], [_locale2.default.projectileBlueFireball(), '"blue_fireball"'], [_locale2.default.projectilePurpleFireball(), '"purple_fireball"'], [_locale2.default.projectileRedFireball(), '"red_fireball"'], [_locale2.default.projectileYellowHearts(), '"yellow_hearts"'], [_locale2.default.projectilePurpleHearts(), '"purple_hearts"'], [_locale2.default.projectileRedHearts(), '"red_hearts"'], [_locale2.default.projectileRandom(), _constants.RANDOM_VALUE]];

  skin.makeProjectileChoices = [[_locale2.default.makeProjectileAirplane(), '"airplane"'], [_locale2.default.makeProjectileBasketball(), '"basketball"'], [_locale2.default.makeProjectileDisc(), '"disc"'], [_locale2.default.makeProjectilePie(), '"pie"'], [_locale2.default.makeProjectilePumpkin(), '"pumpkin"'], [_locale2.default.makeProjectileStar(), '"star"'], [_locale2.default.makeProjectileSandwich(), '"sandwich"'], [_locale2.default.makeProjectileSnowball(), '"snowball"'], [_locale2.default.makeProjectileBlueFireball(), '"blue_fireball"'], [_locale2.default.makeProjectilePurpleFireball(), '"purple_fireball"'], [_locale2.default.makeProjectileRedFireball(), '"red_fireball"'], [_locale2.default.makeProjectileYellowHearts(), '"yellow_hearts"'], [_locale2.default.makeProjectilePurpleHearts(), '"purple_hearts"'], [_locale2.default.makeProjectileRedHearts(), '"red_hearts"']];

  skin.whenProjectileCollidedChoices = [[_locale2.default.whenSpriteCollidedWithAirplane(), 'airplane'], [_locale2.default.whenSpriteCollidedWithBasketball(), 'basketball'], [_locale2.default.whenSpriteCollidedWithDisc(), 'disc'], [_locale2.default.whenSpriteCollidedWithPie(), 'pie'], [_locale2.default.whenSpriteCollidedWithPumpkin(), 'pumpkin'], [_locale2.default.whenSpriteCollidedWithStar(), 'star'], [_locale2.default.whenSpriteCollidedWithSandwich(), 'sandwich'], [_locale2.default.whenSpriteCollidedWithSnowball(), 'snowball'], [_locale2.default.whenSpriteCollidedWithBlueFireball(), 'blue_fireball'], [_locale2.default.whenSpriteCollidedWithPurpleFireball(), 'purple_fireball'], [_locale2.default.whenSpriteCollidedWithRedFireball(), 'red_fireball'], [_locale2.default.whenSpriteCollidedWithYellowHearts(), 'yellow_hearts'], [_locale2.default.whenSpriteCollidedWithPurpleHearts(), 'purple_hearts'], [_locale2.default.whenSpriteCollidedWithRedHearts(), 'red_hearts']];

  // TODO: Create actual item choices
  // NOTE: item names must have double quotes inside single quotes
  // NOTE: last item must be RANDOM_VALUE
  skin.itemChoices = [[_locale2.default.itemAirplane(), '"item_airplane"'], [_locale2.default.itemBasketball(), '"item_basketball"'], [_locale2.default.itemDisc(), '"item_disc"'], [_locale2.default.itemPie(), '"item_pie"'], [_locale2.default.itemPumpkin(), '"item_pumpkin"'], [_locale2.default.itemStar(), '"item_star"'], [_locale2.default.itemSandwich(), '"item_sandwich"'], [_locale2.default.itemSnowball(), '"item_snowball"'], [_locale2.default.itemBlueFireball(), '"item_blue_fireball"'], [_locale2.default.itemPurpleFireball(), '"item_purple_fireball"'], [_locale2.default.itemRedFireball(), '"item_red_fireball"'], [_locale2.default.itemYellowHearts(), '"item_yellow_hearts"'], [_locale2.default.itemPurpleHearts(), '"item_purple_hearts"'], [_locale2.default.itemRedHearts(), '"item_red_hearts"'], [_locale2.default.itemRandom(), _constants.RANDOM_VALUE]];
}

exports.load = function (assetUrl, id) {
  var skin = _skins2.default.load(assetUrl, id);

  // NOTE: all class names should be unique.  eventhandler naming won't work
  // if we name a projectile class 'left' for example.
  skin.ProjectileClassNames = ['airplane', 'basketball', 'disc', 'pie', 'pumpkin', 'star', 'sandwich', 'snowball', 'blue_fireball', 'purple_fireball', 'red_fireball', 'purple_hearts', 'red_hearts', 'yellow_hearts'];

  skin.specialProjectileProperties = {
    'airplane': { frames: 10 },
    'basketball': { frames: 10 },
    'disc': { frames: 10 },
    'pie': { frames: 10 },
    'pumpkin': { frames: 10 },
    'star': { frames: 10 },
    'sandwich': { frames: 10 },
    'snowball': { frames: 10 }
  };

  // TODO: proper item class names
  skin.ItemClassNames = ['item_airplane', 'item_basketball', 'item_disc', 'item_pie', 'item_pumpkin', 'item_star', 'item_sandwich', 'item_snowball', 'item_blue_fireball', 'item_purple_fireball', 'item_red_fireball', 'item_purple_hearts', 'item_red_hearts', 'item_yellow_hearts'];

  // Images
  skin.airplane = skin.assetUrl('projectile_airplane.png');
  skin.basketball = skin.assetUrl('projectile_basketball.png');
  skin.disc = skin.assetUrl('projectile_disc.png');
  skin.pie = skin.assetUrl('projectile_pie.png');
  skin.pumpkin = skin.assetUrl('projectile_pumpkin.png');
  skin.star = skin.assetUrl('projectile_star.png');
  skin.sandwich = skin.assetUrl('projectile_sandwich.png');
  skin.snowball = skin.assetUrl('projectile_snowball.png');
  skin.yellow_hearts = skin.assetUrl('yellow_hearts.gif');
  skin.purple_hearts = skin.assetUrl('purple_hearts.gif');
  skin.red_hearts = skin.assetUrl('red_hearts.gif');
  skin.blue_fireball = skin.assetUrl('blue_fireball.png');
  skin.purple_fireball = skin.assetUrl('purple_fireball.png');
  skin.red_fireball = skin.assetUrl('red_fireball.png');

  // TODO: proper item class names
  skin.item_airplane = skin.assetUrl('projectile_airplane.png');
  skin.item_basketball = skin.assetUrl('projectile_basketball.png');
  skin.item_disc = skin.assetUrl('projectile_disc.png');
  skin.item_pie = skin.assetUrl('projectile_pie.png');
  skin.item_pumpkin = skin.assetUrl('projectile_pumpkin.png');
  skin.item_star = skin.assetUrl('projectile_star.png');
  skin.item_sandwich = skin.assetUrl('projectile_sandwich.png');
  skin.item_snowball = skin.assetUrl('projectile_snowball.png');
  skin.item_yellow_hearts = skin.assetUrl('yellow_hearts.gif');
  skin.item_purple_hearts = skin.assetUrl('purple_hearts.gif');
  skin.item_red_hearts = skin.assetUrl('red_hearts.gif');
  skin.item_blue_fireball = skin.assetUrl('blue_fireball.png');
  skin.item_purple_fireball = skin.assetUrl('purple_fireball.png');
  skin.item_red_fireball = skin.assetUrl('red_fireball.png');

  skin.whenUp = skin.assetUrl('when-up.png');
  skin.whenDown = skin.assetUrl('when-down.png');
  skin.whenLeft = skin.assetUrl('when-left.png');
  skin.whenRight = skin.assetUrl('when-right.png');
  skin.collide = skin.assetUrl('when-sprite-collide.png');
  skin.emotionAngry = skin.assetUrl('emotion-angry.png');
  skin.emotionNormal = skin.assetUrl('emotion-nothing.png');
  skin.emotionSad = skin.assetUrl('emotion-sad.png');
  skin.emotionHappy = skin.assetUrl('emotion-happy.png');
  skin.speechBubble = skin.assetUrl('say-sprite.png');
  skin.goal = skin.assetUrl('goal.png');
  skin.goalSuccess = skin.assetUrl('goal_success.png');

  // Sounds
  skin.builtinSounds = ['start', 'win', 'failure', 'flag'];
  skin.sounds = ['rubber', 'crunch', 'goal1', 'goal2', 'wood', 'retro', 'slap', 'hit', 'winpoint', 'winpoint2', 'losepoint', 'losepoint2'];

  skin.soundChoices = [[_locale2.default.playSoundRandom(), _constants.RANDOM_VALUE], [_locale2.default.playSoundHit(), 'hit'], [_locale2.default.playSoundWood(), 'wood'], [_locale2.default.playSoundRetro(), 'retro'], [_locale2.default.playSoundSlap(), 'slap'], [_locale2.default.playSoundRubber(), 'rubber'], [_locale2.default.playSoundCrunch(), 'crunch'], [_locale2.default.playSoundWinPoint(), 'winpoint'], [_locale2.default.playSoundWinPoint2(), 'winpoint2'], [_locale2.default.playSoundLosePoint(), 'losepoint'], [_locale2.default.playSoundLosePoint2(), 'losepoint2'], [_locale2.default.playSoundGoal1(), 'goal1'], [_locale2.default.playSoundGoal2(), 'goal2']];

  skin.soundChoicesK1 = [[_locale2.default.soundRandom(), _constants.RANDOM_VALUE], [_locale2.default.soundHit(), 'hit'], [_locale2.default.soundWood(), 'wood'], [_locale2.default.soundRetro(), 'retro'], [_locale2.default.soundSlap(), 'slap'], [_locale2.default.soundRubber(), 'rubber'], [_locale2.default.soundCrunch(), 'crunch'], [_locale2.default.soundWinPoint(), 'winpoint'], [_locale2.default.soundWinPoint2(), 'winpoint2'], [_locale2.default.soundLosePoint(), 'losepoint'], [_locale2.default.soundLosePoint2(), 'losepoint2'], [_locale2.default.soundGoal1(), 'goal1'], [_locale2.default.soundGoal2(), 'goal2']];

  // Settings
  skin.background = skin.assetUrl('background.png');
  skin.spriteHeight = 100;
  skin.spriteWidth = 100;
  skin.dropdownThumbnailWidth = 50;
  skin.dropdownThumbnailHeight = 50;
  skin.preloadAssets = true;

  // Offset for the rectangle in collidable in which wall collisions occur.
  // Default to no offset here and allow other skins to override.
  skin.wallCollisionRectOffsetX = 0;
  skin.wallCollisionRectOffsetY = 0;

  skin.setSpritePrefix = _locale2.default.setSprite();

  skin.activityChoices = [[_locale2.default.setActivityRandom(), _constants.RANDOM_VALUE], [_locale2.default.setActivityRoam(), '"roam"'], [_locale2.default.setActivityChase(), '"chase"'], [_locale2.default.setActivityFlee(), '"flee"'], [_locale2.default.setActivityNone(), '"none"']];

  // take care of items specific to skins
  switch (skin.id) {
    case 'gumball':
      loadGumball(skin);
      break;
    case 'iceage':
      loadIceAge(skin);
      break;
    case 'infinity':
      loadInfinity(skin);
      break;
    case 'hoc2015':
      (0, _skins3.loadStarWarsEvents)(skin);
      skin.twitterOptions = plainTwitterOptions;
      break;
    case 'hoc2015x':
      (0, _skins3.loadStarWarsGrid)(skin);
      break;
    case 'studio':
      loadStudio(skin);
      break;
  }

  return skin;
};

/***/ }),

/***/ 3433:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3434);


/***/ }),

/***/ 3434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getScriptData = __webpack_require__(596);

var _getScriptData2 = _interopRequireDefault(_getScriptData);

var _initializeCodeMirror = __webpack_require__(2087);

var _initializeCodeMirror2 = _interopRequireDefault(_initializeCodeMirror);

var _initializeBlockPreview = __webpack_require__(2968);

var _initializeBlockPreview2 = _interopRequireDefault(_initializeBlockPreview);

var _blocksCommon = __webpack_require__(1813);

var _blocksCommon2 = _interopRequireDefault(_blocksCommon);

var _DropletPaletteSelector = __webpack_require__(3435);

var _DropletPaletteSelector2 = _interopRequireDefault(_DropletPaletteSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = (0, _getScriptData2.default)('pageOptions');
// TODO: stop pulling Blockly off of the window object.
if (window.Blockly && !data.uses_droplet) {
  window.Blockly.Css.styleSheet_ = window.goog.cssom.addCssText(Blockly.Css.CONTENT.join("\n")).sheet;
  window.Blockly.assetUrl = function (path) {
    return '/assets/' + path;
  };
  var appBlocks = __webpack_require__(2969)("./" + data.app + '/blocks');
  var skinsModule = __webpack_require__(3436)("./" + data.app + '/skins');
  var options = {
    skin: skinsModule.load(function () {}, data.skin_id),
    isK1: data.isK1
  };
  _blocksCommon2.default.install(window.Blockly, options);
  appBlocks.install(window.Blockly, options);
}

var fieldConfig = {
  startEditor: {
    codemirror: 'level_start_blocks',
    blockPreview: 'start-preview'
  },
  requiredEditor: {
    codemirror: 'level_required_blocks',
    blockPreview: 'required-preview'
  },
  recommendedEditor: {
    codemirror: 'level_recommended_blocks',
    blockPreview: 'recommended-preview'
  },
  toolboxEditor: {
    hideWhen: data.uses_droplet,
    codemirror: 'level_toolbox_blocks',
    blockPreview: 'toolbox-preview'
  },
  initializationEditor: {
    hideWhen: data.uses_droplet,
    codemirror: 'level_initialization_blocks',
    blockPreview: 'initialization-preview'
  },
  solutionEditor: {
    hideWhen: !data.solution_blocks,
    codemirror: 'level_solution_blocks',
    blockPreview: 'solution-preview'
  },
  codeFunctions: {
    hideWhen: !data.uses_droplet,
    codemirror: 'level_code_functions',
    codemirrorMode: 'javascript'
  },
  inputOutputTable: {
    hideWhen: !data.input_output_table,
    codemirror: 'level_input_output_table',
    codemirrorMode: 'javascript'
  }
};

Object.keys(fieldConfig).forEach(function (key) {
  var config = fieldConfig[key];
  if (config.hideWhen) {
    return;
  }
  var mode = config.codemirrorMode || (data.uses_droplet ? 'javascript' : 'xml');
  config.editor = (0, _initializeCodeMirror2.default)(config.codemirror, mode);
  if (config.blockPreview && !data.uses_droplet) {
    (0, _initializeBlockPreview2.default)(config.editor, document.getElementById(config.blockPreview));
  }
});

(0, _jquery2.default)("#plusAnswerContainedLevel").on("click", function () {
  (0, _jquery2.default)("#plusAnswerContainedLevel").prev().clone().insertBefore("#plusAnswerContainedLevel");
});

if (data.original_palette && !fieldConfig.codeFunctions.hideWhen) {
  _reactDom2.default.render(_react2.default.createElement(_DropletPaletteSelector2.default, {
    palette: data.original_palette,
    editor: fieldConfig.codeFunctions.editor
  }), (0, _jquery2.default)('<div></div>').insertAfter('label[for="' + fieldConfig.codeFunctions.codemirror + '"]').get(0));
}

/***/ }),

/***/ 3435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _codemirror = __webpack_require__(852);

var _codemirror2 = _interopRequireDefault(_codemirror);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This component works in conjunction with a json codemirror
 * editor instance to render a select dropdown which allows you
 * to choose from a list of blocks which can be added to the editor.
 */
var DropletPaletteSelector = function (_React$Component) {
  _inherits(DropletPaletteSelector, _React$Component);

  function DropletPaletteSelector(props) {
    _classCallCheck(this, DropletPaletteSelector);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.selectBlock = function (event) {
      var blockName = event.target.value;
      if (!blockName) {
        return;
      }
      var currentBlocks = void 0;
      try {
        currentBlocks = _this.getCurrentPaletteBlocks();
      } catch (e) {
        return;
      }
      currentBlocks[blockName] = _this.props.palette[blockName];
      _this.props.editor.setValue(JSON.stringify(currentBlocks, null, 2));
    };

    _this.state = {
      currentPalette: props.editor.getValue()
    };
    return _this;
  }

  DropletPaletteSelector.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.props.editor.on('change', function () {
      _this2.setState({
        currentPalette: _this2.props.editor.getValue()
      });
    });
  };

  DropletPaletteSelector.prototype.getCurrentPaletteBlocks = function getCurrentPaletteBlocks() {
    if (this.state.currentPalette.trim()) {
      return JSON.parse(this.state.currentPalette);
    } else {
      return {};
    }
  };

  DropletPaletteSelector.prototype.render = function render() {
    var _this3 = this;

    var blocks = [];
    var error = null;
    try {
      (function () {
        var currentBlocks = _this3.getCurrentPaletteBlocks();
        blocks = Object.keys(_this3.props.palette).filter(function (b) {
          return currentBlocks[b] === undefined;
        });
      })();
    } catch (e) {
      error = true;
    }
    var label = error ? "Fix JSON syntax to see available blocks" : blocks.length === 0 ? "All blocks have been added" : "Add block";
    return _react2.default.createElement(
      'select',
      { disabled: error || blocks.length === 0, onChange: this.selectBlock },
      _react2.default.createElement(
        'option',
        null,
        label
      ),
      blocks.map(function (blockName) {
        return _react2.default.createElement(
          'option',
          { key: blockName, value: blockName },
          blockName
        );
      })
    );
  };

  return DropletPaletteSelector;
}(_react2.default.Component);

DropletPaletteSelector.propTypes = {
  editor: _react.PropTypes.instanceOf(_codemirror2.default).isRequired,
  palette: _react.PropTypes.object.isRequired
};
exports.default = DropletPaletteSelector;
module.exports = exports['default'];

/***/ }),

/***/ 3436:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./applab/skins": 1951,
	"./bounce/skins": 2709,
	"./craft/agent/skins": 2742,
	"./craft/code-connection/skins": 2744,
	"./craft/designer/skins": 2739,
	"./craft/simple/skins": 2737,
	"./flappy/skins": 2747,
	"./gamelab/skins": 2750,
	"./jigsaw/skins": 2751,
	"./maze/skins": 2760,
	"./netsim/skins": 2793,
	"./studio/skins": 2800,
	"./studio/starwars/skins": 2151,
	"./turtle/skins": 2152
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3436;

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandState = __webpack_require__(1270);

module.exports = function () {
  function BaseCommand(gameController, highlightCallback, targetEntity) {
    _classCallCheck(this, BaseCommand);

    this.GameController = gameController;
    this.Game = gameController.game;
    this.HighlightCallback = highlightCallback;
    this.state = CommandState.NOT_STARTED;
    this.target = targetEntity;
    this.repeat = false;
  }

  BaseCommand.prototype.tick = function tick() {};

  BaseCommand.prototype.begin = function begin() {
    if (this.HighlightCallback) {
      this.HighlightCallback();
    }
    this.state = CommandState.WORKING;
  };

  /**
   * Whether the command has started working.
   * @returns {boolean}
   */


  BaseCommand.prototype.isStarted = function isStarted() {
    return this.state !== CommandState.NOT_STARTED;
  };

  /**
   * Whether the command has succeeded or failed, and is
   * finished with its work.
   * @returns {boolean}
   */


  BaseCommand.prototype.isFinished = function isFinished() {
    return this.isSucceeded() || this.isFailed();
  };

  /**
   * Whether the command has finished with its work and reported success.
   * @returns {boolean}
   */


  BaseCommand.prototype.isSucceeded = function isSucceeded() {
    return this.state === CommandState.SUCCESS;
  };

  /**
   * Whether the command has finished with its work and reported failure.
   * @returns {boolean}
   */


  BaseCommand.prototype.isFailed = function isFailed() {
    return this.state === CommandState.FAILURE;
  };

  BaseCommand.prototype.succeeded = function succeeded() {
    this.state = CommandState.SUCCESS;
  };

  BaseCommand.prototype.failed = function failed() {
    this.state = CommandState.FAILURE;
  };

  return BaseCommand;
}();

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandQueue = __webpack_require__(1269);
var FacingDirection = __webpack_require__(799);
var Position = __webpack_require__(838);
var EventType = __webpack_require__(1159);
var CallbackCommand = __webpack_require__(1016);
var LevelBlock = __webpack_require__(1271);

module.exports = function () {
    function BaseEntity(controller, type, identifier, x, y, facing) {
        _classCallCheck(this, BaseEntity);

        this.queue = new CommandQueue(controller);
        this.controller = controller;
        this.game = controller.game;
        this.position = new Position(x, y);
        this.type = type;
        // temp
        this.facing = facing;
        // offset for sprite position in grid
        this.offset = [-22, -12];
        this.identifier = identifier;
        this.healthPoint = 3;
        this.underTree = { state: false, treeIndex: -1 };
    }

    BaseEntity.prototype.tick = function tick() {
        this.queue.tick();
    };

    BaseEntity.prototype.reset = function reset() {};

    BaseEntity.prototype.canMoveThrough = function canMoveThrough() {
        return false;
    };

    BaseEntity.prototype.canPlaceBlock = function canPlaceBlock() {
        return false;
    };

    BaseEntity.prototype.canTriggerPressurePlates = function canTriggerPressurePlates() {
        return false;
    };

    /**
     * Whether or not the white "selection indicator" highlight square should
     * update to follow this entity around as it moves and interacts with the
     * world
     *
     * @return {boolean}
     */


    BaseEntity.prototype.shouldUpdateSelectionIndicator = function shouldUpdateSelectionIndicator() {
        return false;
    };

    BaseEntity.prototype.setMovePosition = function setMovePosition(position) {
        this.position = position;
    };

    /**
     * For entities which need to be able to accomodate rendering in the same
     * cell as other entities, provide a way to define a rendering offset.
     *
     * @see LevelView.playPlayerAnimation
     * @see LevelView.playMoveForwardAnimation
     * @return Number
     */


    BaseEntity.prototype.getSortOrderOffset = function getSortOrderOffset() {
        return 5;
    };

    BaseEntity.prototype.addCommand = function addCommand(commandQueueItem) {
        var repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        this.queue.addCommand(commandQueueItem, repeat);
        // execute the command
        this.queue.begin();
    };

    BaseEntity.prototype.getWalkAnimation = function getWalkAnimation() {
        return "walk" + this.controller.levelView.getDirectionName(this.facing);
    };

    BaseEntity.prototype.getIdleAnimation = function getIdleAnimation() {
        return "idle" + this.controller.levelView.getDirectionName(this.facing);
    };

    BaseEntity.prototype.playMoveForwardAnimation = function playMoveForwardAnimation(position, facing, commandQueueItem, groundType) {
        var _this = this;

        var levelView = this.controller.levelView;
        var tween;
        // update z order
        var zOrderYIndex = position[1] + (facing === FacingDirection.North ? 1 : 0);
        this.sprite.sortOrder = this.controller.levelView.yToIndex(zOrderYIndex) + 1;
        // stepping sound
        levelView.playBlockSound(groundType);
        // play walk animation
        levelView.playScaledSpeed(this.sprite.animations, this.getWalkAnimation());
        setTimeout(function () {
            tween = _this.controller.levelView.addResettableTween(_this.sprite).to({
                x: _this.offset[0] + 40 * position[0], y: _this.offset[1] + 40 * position[1]
            }, 300, Phaser.Easing.Linear.None);
            tween.onComplete.add(function () {
                levelView.playScaledSpeed(_this.sprite.animations, _this.getIdleAnimation());
                commandQueueItem.succeeded();
            });

            tween.start();
        }, 50 / this.controller.tweenTimeScale);
        // smooth movement using tween
    };

    /**
     * player walkable stuff
     */


    BaseEntity.prototype.walkableCheck = function walkableCheck() {
        //do nothing
    };

    BaseEntity.prototype.updateHidingTree = function updateHidingTree() {
        var levelView = this.controller.levelView;
        // this is not under tree
        if (!this.underTree.state) {
            var treeList = levelView.trees;
            for (var i = 0; i < treeList.length; i++) {
                if (levelView.isUnderTree(i, this.position)) {
                    levelView.changeTreeAlpha(i, 0.8);
                    this.underTree = { state: true, treeIndex: i };
                    break;
                }
            }
            // this is under tree
        } else {
            var currentTreeIndex = this.underTree.treeIndex;
            var entities = this.controller.levelEntity.entityMap;
            var isOtherEntityUnderTree = function isOtherEntityUnderTree(currentEntity, entities, currentTreeIndex) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = entities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var value = _step.value;

                        var entity = value[1];
                        var sameEntity = entity === currentEntity;
                        if (!sameEntity && entity.underTree.treeIndex === currentTreeIndex) {
                            return true;
                        }
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

                return false;
            };
            if (!levelView.isUnderTree(currentTreeIndex, this.position)) {
                if (!isOtherEntityUnderTree(this, entities, currentTreeIndex)) {
                    levelView.changeTreeAlpha(currentTreeIndex, 1);
                }
                this.underTree = { state: false, treeIndex: -1 };
            }
        }
    };

    BaseEntity.prototype.updateHidingBlock = function updateHidingBlock(prevPosition) {
        var levelView = this.controller.levelView;
        var actionPlane = this.controller.levelModel.actionPlane;

        var frontBlockCheck = function frontBlockCheck(entity, position) {
            var frontPosition = Position.south(position);
            var frontBlock = actionPlane.getBlockAt(frontPosition);
            if (frontBlock && !frontBlock.isTransparent) {
                var sprite = levelView.actionPlaneBlocks[levelView.coordinatesToIndex(frontPosition)];
                if (sprite !== null) {
                    var tween = entity.controller.levelView.addResettableTween(sprite).to({
                        alpha: 0.8
                    }, 300, Phaser.Easing.Linear.None);

                    tween.start();
                }
            }
        };

        var prevBlockCheck = function prevBlockCheck(entity, position) {
            var frontPosition = Position.south(position);
            if (frontPosition.y < 10) {
                var sprite = levelView.actionPlaneBlocks[levelView.coordinatesToIndex(frontPosition)];
                if (sprite !== null) {
                    var tween = entity.controller.levelView.addResettableTween(sprite).to({
                        alpha: 1
                    }, 300, Phaser.Easing.Linear.None);

                    tween.start();
                }
            }
        };

        if (!this.isOnBlock) {
            frontBlockCheck(this, this.position);
        }
        if (prevPosition !== undefined) {
            prevBlockCheck(this, prevPosition);
        }
    };

    BaseEntity.prototype.doMoveForward = function doMoveForward(commandQueueItem, forwardPosition) {
        var levelModel = this.controller.levelModel;
        var prevPosition = this.position;
        this.position = forwardPosition;
        // play sound effect
        var groundType = levelModel.groundPlane.getBlockAt(this.position).blockType;
        // play move forward animation and play idle after that
        this.playMoveForwardAnimation(forwardPosition, this.facing, commandQueueItem, groundType, function () {});
        this.updateHidingTree();
        this.updateHidingBlock(prevPosition);
    };

    BaseEntity.prototype.bump = function bump(commandQueueItem) {
        var _this2 = this;

        var animName = "bump";
        var facingName = this.controller.levelView.getDirectionName(this.facing);
        this.controller.levelView.playScaledSpeed(this.sprite.animations, animName + facingName);
        var forwardPosition = this.controller.levelModel.getMoveForwardPosition(this);
        var forwardEntity = this.controller.levelEntity.getEntityAt(forwardPosition);
        if (forwardEntity !== null) {
            this.queue.startPushHighPriorityCommands();
            this.controller.events.forEach(function (e) {
                return e({ eventType: EventType.WhenTouched, targetType: _this2.type, targetIdentifier: _this2.identifier, eventSenderIdentifier: forwardEntity.identifier });
            });
            this.queue.endPushHighPriorityCommands();
        }
        this.controller.delayPlayerMoveBy(400, 800, function () {
            commandQueueItem.succeeded();
        });
    };

    BaseEntity.prototype.callBumpEvents = function callBumpEvents(forwardPositionInformation) {
        var _this3 = this;

        for (var i = 1; i < forwardPositionInformation.length; i++) {
            if (forwardPositionInformation[i] === 'frontEntity') {
                this.controller.events.forEach(function (e) {
                    return e({ eventType: EventType.WhenTouched, targetType: forwardPositionInformation[i + 1].type, eventSenderIdentifier: _this3.identifier, targetIdentifier: forwardPositionInformation[i + 1].identifier });
                });
                i++;
            }
        }
    };

    BaseEntity.prototype.moveDirection = function moveDirection(commandQueueItem, direction) {
        // update entity's direction
        this.controller.levelModel.turnToDirection(this, direction);
        this.moveForward(commandQueueItem, false);
    };

    BaseEntity.prototype.moveForward = function moveForward(commandQueueItem) {
        var record = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (record) {
            this.controller.addCommandRecord("moveForward", this.type, commandQueueItem.repeat);
        }
        var forwardPosition = this.controller.levelModel.getMoveForwardPosition(this);
        var forwardPositionInformation = this.controller.levelModel.canMoveForward(this);
        if (forwardPositionInformation[0]) {
            var offset = Position.directionToOffsetPosition(this.facing);
            var reverseOffset = Position.directionToOffsetPosition(FacingDirection.opposite(this.facing));
            var weMovedOnTo = this.handleMoveOnPressurePlate(offset);
            this.doMoveForward(commandQueueItem, forwardPosition);
            if (!weMovedOnTo) {
                this.handleMoveOffPressurePlate(reverseOffset);
            }
            this.handleMoveOffIronDoor(reverseOffset);
            this.handleMoveAwayFromPiston(reverseOffset);
        } else {
            this.bump(commandQueueItem);
            this.callBumpEvents(forwardPositionInformation);
        }
    };

    BaseEntity.prototype.moveBackward = function moveBackward(commandQueueItem) {
        var record = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (record) {
            this.controller.addCommandRecord("moveBackward", this.type, commandQueueItem.repeat);
        }
        var backwardPosition = this.controller.levelModel.getMoveDirectionPosition(this, 2);
        var backwardPositionInformation = this.controller.levelModel.canMoveBackward(this);
        if (backwardPositionInformation[0]) {
            var offset = Position.directionToOffsetPosition(FacingDirection.opposite(this.facing));
            var reverseOffset = Position.directionToOffsetPosition(this.facing);
            var weMovedOnTo = this.handleMoveOnPressurePlate(offset);
            this.doMoveBackward(commandQueueItem, backwardPosition);
            if (!weMovedOnTo) {
                this.handleMoveOffPressurePlate(reverseOffset);
            }
            this.handleMoveOffIronDoor(reverseOffset);
            this.handleMoveAwayFromPiston(reverseOffset);
        } else {
            this.bump(commandQueueItem);
            this.callBumpEvents(backwardPositionInformation);
        }
    };

    /**
     * @typedef {Object} CanPlace
     * @property {boolean} canPlace - whether or not placement is allowed at all
     * @property {string} plane - which plane the block should be placed on. Can
     *                    be either "groundPlane" or "actionPlane"
     */

    /**
     * check whether or not the entity can place the given block on top of the
     * given block
     *
     * @param {LevelBlock} [toPlaceBlock]
     * @param {LevelBlock} [onTopOfBlock]
     * @return {CanPlace}
     */


    BaseEntity.prototype.canPlaceBlockOver = function canPlaceBlockOver() {
        return { canPlace: false, plane: '' };
    };

    /**
     * check all the movable points and choose the farthest one
     *
     * @param {any} commandQueueItem
     * @param {any} moveAwayFrom (entity)
     *
     * @memberOf BaseEntity
     */


    BaseEntity.prototype.moveAway = function moveAway(commandQueueItem, moveAwayFrom) {
        this.controller.addCommandRecord("moveAway", this.type, commandQueueItem.repeat);
        var moveAwayPosition = moveAwayFrom.position;
        var bestPosition = [];
        var comparePositions = function comparePositions(moveAwayPosition, position1, position2) {
            return Position.absoluteDistanceSquare(position1[1], moveAwayPosition) < Position.absoluteDistanceSquare(position2[1], moveAwayPosition) ? position2 : position1;
        };

        var currentDistance = Position.absoluteDistanceSquare(moveAwayPosition, this.position);
        // this entity is on the right side and can move to right
        if (moveAwayPosition.x <= this.position.x && this.controller.levelModel.canMoveDirection(this, FacingDirection.East)[0]) {
            bestPosition = [FacingDirection.East, Position.east(this.position)];
        }
        // this entity is on the left side and can move to left
        if (moveAwayPosition.x >= this.position.x && this.controller.levelModel.canMoveDirection(this, FacingDirection.West)[0]) {
            if (bestPosition.length > 0) {
                bestPosition = comparePositions(moveAwayPosition, bestPosition, [FacingDirection.West, Position.west(this.position)]);
            } else {
                bestPosition = [FacingDirection.West, Position.west(this.position)];
            }
        }
        // this entity is on the up side and can move to up
        if (moveAwayPosition.y >= this.position.y && this.controller.levelModel.canMoveDirection(this, FacingDirection.North)[0]) {
            if (bestPosition.length > 0) {
                bestPosition = comparePositions(moveAwayPosition, bestPosition, [FacingDirection.North, Position.north(this.position)]);
            } else {
                bestPosition = [FacingDirection.North, Position.north(this.position)];
            }
        }
        // this entity is on the down side and can move to down
        if (moveAwayPosition.y <= this.position.y && this.controller.levelModel.canMoveDirection(this, FacingDirection.South)[0]) {
            if (bestPosition.length > 0) {
                bestPosition = comparePositions(moveAwayPosition, bestPosition, [FacingDirection.South, Position.south(this.position)]);
            } else {
                bestPosition = [FacingDirection.South, Position.south(this.position)];
            }
        }
        // terminate the action since it's impossible to move
        if (bestPosition.length === 0 || currentDistance >= Position.absoluteDistanceSquare(moveAwayPosition, bestPosition[1])) {
            commandQueueItem.succeeded();
        } else {
            // execute the best result
            this.moveDirection(commandQueueItem, bestPosition[0]);
        }
    };

    /**
     * check all the movable points and choose the farthest one
     *
     * @param {any} commandQueueItem
     * @param {any} moveTowardTo (entity)
     *
     * @memberOf BaseEntity
     */


    BaseEntity.prototype.moveToward = function moveToward(commandQueueItem, moveTowardTo) {
        this.controller.addCommandRecord("moveToward", this.type, commandQueueItem.repeat);
        var moveTowardPosition = moveTowardTo.position;
        var bestPosition = [];
        var comparePositions = function comparePositions(moveTowardPosition, position1, position2) {
            return Position.absoluteDistanceSquare(position1[1], moveTowardPosition) > Position.absoluteDistanceSquare(position2[1], moveTowardPosition) ? position2 : position1;
        };

        // this entity is on the right side and can move to right
        if (moveTowardPosition.x >= this.position.x && this.controller.levelModel.canMoveDirection(this, FacingDirection.East)[0]) {
            bestPosition = [FacingDirection.East, Position.east(this.position)];
        }
        // this entity is on the left side and can move to left
        if (moveTowardPosition.x <= this.position.x && this.controller.levelModel.canMoveDirection(this, FacingDirection.West)[0]) {
            if (bestPosition.length > 0) {
                bestPosition = comparePositions(moveTowardPosition, bestPosition, [FacingDirection.West, Position.west(this.position)]);
            } else {
                bestPosition = [FacingDirection.West, Position.west(this.position)];
            }
        }
        // this entity is on the up side and can move to up
        if (moveTowardPosition.y <= this.position.y && this.controller.levelModel.canMoveDirection(this, FacingDirection.North)[0]) {
            if (bestPosition.length > 0) {
                bestPosition = comparePositions(moveTowardPosition, bestPosition, [FacingDirection.North, Position.north(this.position)]);
            } else {
                bestPosition = [FacingDirection.North, Position.north(this.position)];
            }
        }
        // this entity is on the down side and can move to down
        if (moveTowardPosition.y >= this.position.y && this.controller.levelModel.canMoveDirection(this, FacingDirection.South)[0]) {
            if (bestPosition.length > 0) {
                bestPosition = comparePositions(moveTowardPosition, bestPosition, [FacingDirection.South, Position.south(this.position)]);
            } else {
                bestPosition = [FacingDirection.South, Position.south(this.position)];
            }
        }
        // terminate the action since it's impossible to move
        if (Position.absoluteDistanceSquare(this.position, moveTowardPosition) === 1) {
            if (this.position.x < moveTowardPosition.x) {
                this.facing = FacingDirection.East;
            } else if (this.position.x > moveTowardPosition.x) {
                this.facing = FacingDirection.West;
            } else if (this.position.y < moveTowardPosition.y) {
                this.facing = FacingDirection.South;
            } else if (this.position.y > moveTowardPosition.y) {
                this.facing = FacingDirection.North;
            }
            this.updateAnimationDirection();
            this.bump(commandQueueItem);
            return false;
        } else {
            if (bestPosition.length === 0) {
                commandQueueItem.succeeded();
                return false;
                // execute the best result
            } else {
                this.moveDirection(commandQueueItem, bestPosition[0]);
                return true;
            }
        }
    };

    BaseEntity.prototype.moveTo = function moveTo(commandQueueItem, moveTowardTo) {
        var _this4 = this;

        if (Position.absoluteDistanceSquare(moveTowardTo.position, this.position) === 1) {
            /// north
            if (moveTowardTo.position.y - this.position.y === -1) {
                this.moveDirection(commandQueueItem, FacingDirection.North);
            } else if (moveTowardTo.position.y - this.position.y === 1) {
                this.moveDirection(commandQueueItem, FacingDirection.South);
            } else if (moveTowardTo.position.x - this.position.x === 1) {
                this.moveDirection(commandQueueItem, FacingDirection.East);
            } else {
                this.moveDirection(commandQueueItem, FacingDirection.West);
            }
        } else if (this.moveToward(commandQueueItem, moveTowardTo)) {
            var callbackCommand = new CallbackCommand(this.controller, function () {}, function () {
                _this4.moveTo(callbackCommand, moveTowardTo);
            }, this.identifier);
            this.addCommand(callbackCommand);
        } else {
            this.bump(commandQueueItem);
        }
    };

    BaseEntity.prototype.turn = function turn(commandQueueItem, direction) {
        var record = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (record) {
            this.controller.addCommandRecord("turn", this.type, commandQueueItem.repeat);
        }
        // update entity direction
        if (direction === -1) {
            this.controller.levelModel.turnLeft(this);
        }

        if (direction === 1) {
            this.controller.levelModel.turnRight(this);
        }
        // update animation
        this.updateAnimationDirection();
        this.controller.delayPlayerMoveBy(200, 800, function () {
            commandQueueItem.succeeded();
        });
    };

    BaseEntity.prototype.turnRandom = function turnRandom(commandQueueItem) {
        this.controller.addCommandRecord("turnRandom", this.type, commandQueueItem.repeat);
        var getRandomInt = function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        var direction = getRandomInt(0, 1) === 0 ? 1 : -1;
        this.turn(commandQueueItem, direction, false);
    };

    BaseEntity.prototype.use = function use(commandQueueItem, userEntity) {
        var _this5 = this;

        // default behavior for use ?
        var animationName = "lookAtCam" + this.controller.levelView.getDirectionName(this.facing);
        this.controller.levelView.playScaledSpeed(this.sprite.animations, animationName);
        this.queue.startPushHighPriorityCommands();
        this.controller.events.forEach(function (e) {
            return e({ eventType: EventType.WhenUsed, targetType: _this5.type, eventSenderIdentifier: userEntity.identifier, targetIdentifier: _this5.identifier });
        });
        this.queue.endPushHighPriorityCommands();
        commandQueueItem.succeeded();
    };

    BaseEntity.prototype.drop = function drop(commandQueueItem, itemType) {
        var _this6 = this;

        this.controller.addCommandRecord("drop", this.type, commandQueueItem.repeat);
        this.controller.levelView.playItemDropAnimation(this.position, itemType, function () {
            commandQueueItem.succeeded();

            if (_this6.controller.levelModel.usePlayer) {
                var playerCommand = _this6.controller.levelModel.player.queue.currentCommand;
                if (playerCommand && playerCommand.waitForOtherQueue) {
                    playerCommand.succeeded();
                }
            }
        });
    };

    BaseEntity.prototype.attack = function attack(commandQueueItem) {
        var _this7 = this;

        this.controller.addCommandRecord("attack", this.type, commandQueueItem.repeat);
        var facingName = this.controller.levelView.getDirectionName(this.facing);
        this.controller.levelView.playScaledSpeed(this.sprite.animations, "attack" + facingName);
        setTimeout(function (entity) {
            var frontEntity = entity.controller.levelEntity.getEntityAt(entity.controller.levelModel.getMoveForwardPosition(entity));
            if (frontEntity) {
                var callbackCommand = new CallbackCommand(entity.controller, function () {}, function () {
                    frontEntity.takeDamage(callbackCommand);
                }, frontEntity);
                frontEntity.addCommand(callbackCommand);
            }
            setTimeout(function (controller, entity, thisEntity) {
                if (entity !== null) {
                    frontEntity.queue.startPushHighPriorityCommands();
                    controller.events.forEach(function (e) {
                        return e({ eventType: EventType.WhenAttacked, targetType: entity.type, eventSenderIdentifier: thisEntity.identifier, targetIdentifier: entity.identifier });
                    });
                    frontEntity.queue.endPushHighPriorityCommands();
                }
                commandQueueItem.succeeded();
            }, 300 / _this7.controller.tweenTimeScale, entity.controller, frontEntity, entity);
        }, 200 / this.controller.tweenTimeScale, this);
    };

    BaseEntity.prototype.pushBack = function pushBack(commandQueueItem, pushDirection, movementTime, completionHandler) {
        var _this8 = this;

        var levelModel = this.controller.levelModel;
        var pushBackPosition = Position.forward(this.position, pushDirection);
        var canMoveBack = levelModel.isPositionEmpty(pushBackPosition)[0];
        if (canMoveBack) {
            this.updateHidingBlock(this.position);
            this.position = pushBackPosition;
            this.updateHidingTree();
            var tween = this.controller.levelView.addResettableTween(this.sprite).to({
                x: this.offset[0] + 40 * this.position[0], y: this.offset[1] + 40 * this.position[1]
            }, movementTime, Phaser.Easing.Linear.None);
            tween.onComplete.add(function () {
                setTimeout(function () {
                    commandQueueItem.succeeded();
                    if (completionHandler !== undefined) {
                        completionHandler(_this8);
                    }
                }, movementTime / _this8.controller.tweenTimeScale);
            });
            tween.start();
        } else {
            commandQueueItem.succeeded();
            if (completionHandler !== undefined) {
                completionHandler(this);
            }
        }
    };

    BaseEntity.prototype.takeDamage = function takeDamage(callbackCommand) {
        var _this9 = this;

        var levelView = this.controller.levelView;
        var facingName = levelView.getDirectionName(this.facing);
        if (this.healthPoint > 1) {
            levelView.playScaledSpeed(this.sprite.animations, "hurt" + facingName);
            setTimeout(function () {
                _this9.healthPoint--;
                callbackCommand.succeeded();
            }, 1500 / this.controller.tweenTimeScale);
        } else {
            this.healthPoint--;
            this.sprite.animations.stop(null, true);
            this.controller.levelView.playScaledSpeed(this.sprite.animations, "die" + facingName);
            setTimeout(function () {
                var tween = _this9.controller.levelView.addResettableTween(_this9.sprite).to({
                    alpha: 0
                }, 300, Phaser.Easing.Linear.None);
                tween.onComplete.add(function () {
                    _this9.controller.levelEntity.destroyEntity(_this9.identifier);
                });
                tween.start();
            }, 1500 / this.controller.tweenTimeScale);
        }
    };

    BaseEntity.prototype.playRandomIdle = function playRandomIdle(facing) {
        var facingName,
            rand,
            animationName = "";
        facingName = this.controller.levelView.getDirectionName(facing);
        rand = Math.trunc(Math.random() * 5) + 1;

        switch (rand) {
            case 1:
                animationName += "idle";
                break;
            case 2:
                animationName += "lookLeft";
                break;
            case 3:
                animationName += "lookRight";
                break;
            case 4:
                animationName += "lookAtCam";
                break;
            case 5:
                animationName += "lookDown";
                break;
            default:
        }

        animationName += facingName;
        this.controller.levelView.playScaledSpeed(this.sprite.animations, animationName);
    };

    BaseEntity.prototype.updateAnimationDirection = function updateAnimationDirection() {
        var facingName = this.controller.levelView.getDirectionName(this.facing);
        this.controller.levelView.playScaledSpeed(this.sprite.animations, "idle" + facingName);
    };

    BaseEntity.prototype.getDistance = function getDistance(entity) {
        return Position.absoluteDistanceSquare(this.position, entity.position);
    };

    BaseEntity.prototype.blowUp = function blowUp(commandQueueItem, explosionPosition) {
        var pushBackDirection = FacingDirection.South;
        if (explosionPosition[0] > this.position[0]) {
            pushBackDirection = FacingDirection.West;
            this.facing = FacingDirection.East;
            this.updateAnimationDirection();
        } else if (explosionPosition[0] < this.position[0]) {
            pushBackDirection = FacingDirection.East;
            this.facing = FacingDirection.West;
            this.updateAnimationDirection();
        } else if (explosionPosition[1] > this.position[1]) {
            pushBackDirection = FacingDirection.North;
            this.facing = FacingDirection.South;
            this.updateAnimationDirection();
        } else if (explosionPosition[1] < this.position[1]) {
            pushBackDirection = FacingDirection.South;
            this.facing = FacingDirection.North;
            this.updateAnimationDirection();
        }
        this.pushBack(commandQueueItem, pushBackDirection, 150, function (entity) {
            var callbackCommand = new CallbackCommand(entity.controller, function () {}, function () {
                entity.controller.destroyEntity(callbackCommand, entity.identifier);
            }, entity.identifier);
            entity.queue.startPushHighPriorityCommands();
            entity.addCommand(callbackCommand, commandQueueItem.repeat);
            entity.queue.endPushHighPriorityCommands();
        });
    };

    BaseEntity.prototype.hasPermissionToWalk = function hasPermissionToWalk(actionBlock, frontEntity) {
        var groundBlock = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        return (actionBlock.isWalkable || frontEntity !== undefined && frontEntity.isOnBlock &&
        // action plane is empty
        !actionBlock.isEmpty) && (
        // there is no entity
        frontEntity === undefined || frontEntity.canMoveThrough())
        // no lava or water
        && groundBlock.blockType !== "water" && groundBlock.blockType !== "lava";
    };

    BaseEntity.prototype.handleMoveOffPressurePlate = function handleMoveOffPressurePlate(moveOffset) {
        var _this10 = this;

        var previousPosition = Position.add(this.position, moveOffset);
        var isMovingOffOf = this.controller.levelModel.actionPlane.getBlockAt(previousPosition).blockType === "pressurePlateDown";
        var destinationBlock = this.controller.levelModel.actionPlane.getBlockAt(this.position);
        var remainOn = false;
        if (destinationBlock === undefined || !destinationBlock.isWalkable) {
            remainOn = true;
        }
        this.controller.levelEntity.entityMap.forEach(function (workingEntity) {
            if (workingEntity.identifier !== _this10.identifier && workingEntity.canTriggerPressurePlates() && _this10.controller.positionEquivalence(workingEntity.position, previousPosition)) {
                remainOn = true;
            }
        });
        if (isMovingOffOf && !remainOn) {
            this.controller.audioPlayer.play("pressurePlateClick");
            var block = new LevelBlock('pressurePlateUp');
            this.controller.levelModel.actionPlane.setBlockAt(previousPosition, block, moveOffset[0], moveOffset[1]);
        }
    };

    BaseEntity.prototype.handleMoveOnPressurePlate = function handleMoveOnPressurePlate(moveOffset) {
        var targetPosition = Position.add(this.position, moveOffset);
        var isMovingOnToPlate = this.controller.levelModel.actionPlane.getBlockAt(targetPosition).blockType === "pressurePlateUp";
        if (isMovingOnToPlate) {
            this.controller.audioPlayer.play("pressurePlateClick");
            var block = new LevelBlock('pressurePlateDown');
            this.controller.levelModel.actionPlane.setBlockAt(targetPosition, block);
            return true;
        }
        return false;
    };

    BaseEntity.prototype.handleMoveOffIronDoor = function handleMoveOffIronDoor(moveOffset) {
        var formerPosition = Position.add(this.position, moveOffset);
        if (!this.controller.levelModel.inBounds(formerPosition)) {
            return;
        }

        var wasOnDoor = this.controller.levelModel.actionPlane.getBlockAt(formerPosition).blockType === "doorIron";
        var isOnDoor = this.controller.levelModel.actionPlane.getBlockAt(this.position).blockType === "doorIron";
        if (wasOnDoor && !isOnDoor) {
            this.controller.levelModel.actionPlane.findDoorToAnimate(new Position(-1, -1));
        }
    };

    BaseEntity.prototype.handleMoveAwayFromPiston = function handleMoveAwayFromPiston(moveOffset) {
        var _this11 = this;

        var formerPosition = Position.add(this.position, moveOffset);
        Position.getOrthogonalPositions(formerPosition).forEach(function (workingPos) {
            if (_this11.controller.levelModel.actionPlane.inBounds(workingPos)) {
                var block = _this11.controller.levelModel.actionPlane.getBlockAt(workingPos);
                if (block.blockType.startsWith("piston") && block.isPowered) {
                    _this11.controller.levelModel.actionPlane.activatePiston(workingPos);
                }
            }
        });
    };

    BaseEntity.prototype.handleGetOnRails = function handleGetOnRails(direction) {
        this.getOffTrack = false;
        this.handleMoveOffPressurePlate(new Position(0, 0));
        this.controller.levelView.playTrack(this.position, direction, true, this, null);
    };

    return BaseEntity;
}();

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FacingDirection = Object.freeze({
  North: 0,
  East: 1,
  South: 2,
  West: 3,

  opposite: function opposite(facing) {
    switch (facing) {
      case FacingDirection.North:
        return FacingDirection.South;
      case FacingDirection.South:
        return FacingDirection.North;
      case FacingDirection.East:
        return FacingDirection.West;
      case FacingDirection.West:
        return FacingDirection.East;
    }
  },

  left: function left(facing) {
    return this.turn(facing, 'left');
  },

  right: function right(facing) {
    return this.turn(facing, 'right');
  },

  turnDirection: function turnDirection(from, to) {
    switch (from) {
      case FacingDirection.North:
        return to === FacingDirection.East ? 'right' : 'left';
      case FacingDirection.South:
        return to === FacingDirection.West ? 'right' : 'left';
      case FacingDirection.East:
        return to === FacingDirection.South ? 'right' : 'left';
      case FacingDirection.West:
        return to === FacingDirection.North ? 'right' : 'left';
    }
  },

  turn: function turn(facing, rotation) {
    return (facing + 4 + (rotation === 'right' ? 1 : -1)) % 4;
  },

  directionToOffset: function directionToOffset(direction) {
    switch (direction) {
      case FacingDirection.North:
        return [0, -1];
      case FacingDirection.South:
        return [0, 1];
      case FacingDirection.East:
        return [1, 0];
      case FacingDirection.West:
        return [-1, 0];
    }
  },

  directionToRelative: function directionToRelative(direction) {
    switch (direction) {
      case FacingDirection.North:
        return "Up";
      case FacingDirection.South:
        return "Down";
      case FacingDirection.East:
        return "Right";
      case FacingDirection.West:
        return "Left";
    }
  }
});

module.exports = FacingDirection;

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FacingDirection = __webpack_require__(799);

var directions = [FacingDirection.North, FacingDirection.East, FacingDirection.South, FacingDirection.West];

module.exports = function () {
  function Position(x, y) {
    _classCallCheck(this, Position);

    this.x = x;
    this.y = y;

    // Temporarily shadow x and y under array indices, for backwards
    // compatibility with old [x, y] position arrays.
    // TODO elijah: remove this once we are fully converted over to actual
    // Position instances
    this[0] = x;
    this[1] = y;
  }

  Position.add = function add(left, right) {
    return new Position(left[0] + right[0], left[1] + right[1]);
  };

  Position.subtract = function subtract(left, right) {
    return new Position(left[0] - right[0], left[1] - right[1]);
  };

  Position.equals = function equals(left, right) {
    return left[0] === right[0] && left[1] === right[1];
  };

  Position.directionToOffsetPosition = function directionToOffsetPosition(direction) {
    var offset = FacingDirection.directionToOffset(direction);
    if (offset) {
      return Position.fromArray(offset);
    }
  };

  Position.isAdjacent = function isAdjacent(left, right) {
    return directions.map(Position.directionToOffsetPosition).some(function (offset) {
      return Position.equals(Position.add(left, offset), right);
    });
  };

  Position.forward = function forward(position, direction) {
    return Position.add(position, Position.directionToOffsetPosition(direction));
  };

  Position.north = function north(position) {
    return Position.forward(position, FacingDirection.North);
  };

  Position.east = function east(position) {
    return Position.forward(position, FacingDirection.East);
  };

  Position.south = function south(position) {
    return Position.forward(position, FacingDirection.South);
  };

  Position.west = function west(position) {
    return Position.forward(position, FacingDirection.West);
  };

  Position.getOrthogonalPositions = function getOrthogonalPositions(position) {
    return directions.map(function (direction) {
      return Position.forward(position, direction);
    });
  };

  Position.manhattanDistance = function manhattanDistance(left, right) {
    var d1 = Math.abs(right.x - left.x);
    var d2 = Math.abs(right.y - left.y);
    return d1 + d2;
  };

  Position.absoluteDistanceSquare = function absoluteDistanceSquare(left, right) {
    return Math.pow(left[0] - right[0], 2) + Math.pow(left[1] - right[1], 2);
  };

  /**
   * Gets all eight surrounding positions - orthogonal and diagonal
   */


  Position.getSurroundingPositions = function getSurroundingPositions(position) {
    return Position.getOrthogonalPositions(position).concat([Position.north(Position.east(position)), Position.north(Position.west(position)), Position.south(Position.east(position)), Position.south(Position.west(position))]);
  };

  /**
   * A simple factory method to create Position instances from old [x, y]
   * position arrays. While we are transitioning fully to Position instances,
   * this can be used to easily convert from the old form to the new form. Once
   * we have finished transitioning, this should exclusively be used to parse
   * position arrays in initial level data into Position instances, and all code
   * should be using only Position instances.
   */


  Position.fromArray = function fromArray(position) {
    return new Position(position[0], position[1]);
  };

  return Position;
}();

/***/ })

},[3433]);