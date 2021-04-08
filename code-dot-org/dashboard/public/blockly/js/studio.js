webpackJsonp([12],{

/***/ 2080:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cell = function Cell(tileType, speed, size, direction, emotion, sprite) {

  /**
   * @type {Number}
   */
  this.tileType_ = tileType;

  /**
   * @type {Number}
   */
  this.speed_ = speed;

  /**
   * @type {Number}
   */
  this.size_ = size;

  /**
   * @type {Number}
   */
  this.direction_ = direction;

  /**
   * @type {Number}
   */
  this.emotion_ = emotion;

  /**
   * @type {Number}
   */
  this.sprite_ = sprite;
};

module.exports = Cell;

/**
 * @return {Number}
 */
Cell.prototype.getTileType = function () {
  return this.tileType_;
};

/**
 * Returns a new Cell that's an exact replica of this one
 * @return {Cell}
 */
Cell.prototype.clone = function () {
  var newCell = new Cell(this.tileType_, this.speed_, this.size_, this.direction_, this.emotion_, this.sprite_);
  return newCell;
};

/**
 * Serializes this Cell into JSON
 * @return {Object}
 */
Cell.prototype.serialize = function () {
  return {
    tileType: this.tileType_,
    speed: this.speed_,
    size: this.size_,
    direction: this.direction_,
    emotion: this.emotion_,
    sprite: this.sprite_
  };
};

/**
 * Creates a new Cell from serialized JSON
 * @param {Object}
 * @return {Cell}
 */
Cell.deserialize = function (serialized) {
  return new Cell(serialized.tileType, serialized.speed, serialized.size, serialized.direction, serialized.emotion, serialized.sprite);
};

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

/***/ 2794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _api = __webpack_require__(2946);

var _api2 = _interopRequireDefault(_api);

var _CustomMarshalingInterpreter = __webpack_require__(850);

var _CustomMarshalingInterpreter2 = _interopRequireDefault(_CustomMarshalingInterpreter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Interface for a set of custom game logic for playlab
 * @param {Studio} studio Reference to global studio object
 * @interface CustomGameLogic
 */
var CustomGameLogic = function CustomGameLogic(studio) {
  this.studio_ = studio;
  this.cached_ = {};
};

/**
 * Logic to be run once per playlab tick
 *
 * @function
 * @name CustomGameLogic#onTick
 */

CustomGameLogic.prototype.onTick = function () {
  throw new Error('should be overridden by child');
};

/**
 * Logic to be run when game is reset
 */
CustomGameLogic.prototype.reset = function () {};

/**
 * Store a block in our cache, so that it can be called elsewhere
 */
CustomGameLogic.prototype.cacheBlock = function (key, block) {
  this.cached_[key] = block;
};

/**
 * Takes a cached block for a function of variable, and calculates the value
 * @returns The result of calling the code for the cached block. If the cached
 *   block was a function_pass, this means we get back a function that can
 *   now be called.
 */
CustomGameLogic.prototype.resolveCachedBlock_ = function (key) {
  var result = '';
  var block = this.cached_[key];
  if (!block) {
    return result;
  }

  var code = 'return ' + Blockly.JavaScript.blockToCode(block);
  result = _CustomMarshalingInterpreter2.default.evalWith(code, {
    Studio: _api2.default,
    Globals: Studio.Globals
  }, { legacy: true });
  return result;
};

/**
 * getVar/getFunc just call resolveCachedBlock_, but are provided for clarity
 */
CustomGameLogic.prototype.getVar_ = function (key) {
  return this.resolveCachedBlock_(key);
};

CustomGameLogic.prototype.getFunc_ = function (key) {
  return this.resolveCachedBlock_(key) || function () {};
};

module.exports = CustomGameLogic;

/***/ }),

/***/ 2795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Walls = function () {
  function Walls(level, skin, drawDebugRect) {
    _classCallCheck(this, Walls);

    this.gridAlignedMovement = skin.gridAlignedMovement;
    this.wallCollisionRectOffsetX = skin.wallCollisionRectOffsetX;
    this.wallCollisionRectOffsetY = skin.wallCollisionRectOffsetY;
    this.wallCollisionRectWidth = skin.wallCollisionRectWidth;
    this.wallCollisionRectHeight = skin.wallCollisionRectHeight;
    this.drawDebugRect = drawDebugRect;
  }

  Walls.prototype.setBackground = function setBackground(background) {
    this.background = background;
  };

  Walls.prototype.setWallMapRequested = function setWallMapRequested(wallMapRequested) {
    this.wallMapRequested = wallMapRequested;
  };

  /**
   * Test to see if a collidable will be touching a wall given particular X/Y
   * position coordinates (center)
   */


  Walls.prototype.willCollidableTouchWall = function willCollidableTouchWall(collidable, xCenter, yCenter) {
    var width = collidable.width;
    var height = collidable.height;

    if (!this.gridAlignedMovement) {
      xCenter += this.wallCollisionRectOffsetX;
      yCenter += this.wallCollisionRectOffsetY;
      width = this.wallCollisionRectWidth || width;
      height = this.wallCollisionRectHeight || height;
    }

    this.drawDebugRect("avatarCollision", xCenter, yCenter, width, height);
    return this.willRectTouchWall(xCenter, yCenter, width, height);
  };

  /**
   * Overriden in subclasses
   */


  Walls.prototype.willRectTouchWall = function willRectTouchWall(xCenter, yCenter, width, height) {
    return false;
  };

  Walls.prototype.overlappingTest = function overlappingTest(x1, x2, xVariance, y1, y2, yVariance) {
    return Math.abs(x1 - x2) < xVariance && Math.abs(y1 - y2) < yVariance;
  };

  /**
   * Overriden in subclasses, for drawing walls
   */


  Walls.prototype.getWallOverlayURI = function getWallOverlayURI() {
    return null;
  };

  /**
   * Overriden in subclasses
   * @param {string} color new wall color as a hex triplet
   */


  Walls.prototype.setColor = function setColor(color) {};

  return Walls;
}();

exports.default = Walls;
module.exports = exports["default"];

/***/ }),

/***/ 2796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(71);

var _constants = __webpack_require__(216);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** @file An animated image, which handles frame counts, rates and offsets
                                                                                                                                                           * internally and exposes simple methods for rendering at the desired position. */

// Unique element ID that increments by 1 each time an element is created
var uniqueId = 0;

/**
 * A StudioAnimation represents an animation asset that can be created,
 * positioned and rendered by other code.  It tries to hide away all the
 * details of actually rendering the correct frame at the correct offset
 * and advancing frames at the correct rate.
 * @constructor
 * @param {!Object} options
 * @param {!StudioSpriteSheet} spriteSheet - The source asset for this animation,
 *        wrapped in necessary metadata.
 * @param {number} [options.renderScale] - Default 1.
 * @param {number} [options.opacity] - Opacity on a 0-1 scale.  Default 1.
 * @param {number} [options.animationFrameDuration] - How fast the animation
 *        should be played, in 30 fps ticks per frame.  Default 1 (30 fps).
 * @param {boolean} [options.loop] - Whether the animation should loop
 *        automatically.  Default false.
 */

var StudioAnimation = function () {
  function StudioAnimation(options) {
    _classCallCheck(this, StudioAnimation);

    /** @private {StudioSpriteSheet} */
    this.spriteSheet_ = options.spriteSheet;

    /** @private {number} render scale */
    this.renderScale_ = (0, _utils.valueOr)(options.renderScale, 1);

    /** @private {number} opacity on a scale of 0 (transparent) to 1 (opaque) */
    this.opacity_ = (0, _utils.valueOr)(options.opacity, 1);

    /**
     * Which animation type (a group of columns in the sprite sheet) is currently
     * playing.
     * @private {number}
     */
    this.currentAnimationType_ = 0;

    /**
     * An object of special animations.
     * @private {object}
     */
    this.specialAnimations_ = {};

    /**
     * Which animation (which column in the sprite sheet for a given type) is
     * currently playing.
     * @private {number}
     */
    this.currentAnimationIndex_ = 0;

    /** @private {boolean} whether the animation should loop automatically. */
    this.loop_ = (0, _utils.valueOr)(options.loop, false);

    /** @private {boolean} whether each animation should be uniquely skewed */
    this.skewAnimations_ = (0, _utils.valueOr)(options.skewAnimations, false);

    /** @private {SVGImageElement} */
    this.element_ = null;

    /** @private {SVGElement} */
    this.clipPath_ = null;

    /** @private {number} frame duration of current animation (1/30 sec ticks). */
    this.animationFrameDuration_ = options.animationFrameDuration || 1;
  }

  /**
   * Test only function so that we can start our id count over.
   */


  StudioAnimation.__resetIds = function __resetIds() {
    uniqueId = 0;
  };

  /** @returns {SVGImageElement} */


  StudioAnimation.prototype.getElement = function getElement() {
    return this.element_;
  };

  /**
   * Create an image element with a clip path
   */


  StudioAnimation.prototype.createElement = function createElement(parentElement) {

    this.animId = uniqueId++;

    // create our clipping path/rect
    this.clipPath_ = document.createElementNS(_constants.SVG_NS, 'clipPath');
    var clipId = 'studioanimation_clippath_' + this.animId;
    this.clipPath_.setAttribute('id', clipId);
    var rect = document.createElementNS(_constants.SVG_NS, 'rect');
    rect.setAttribute('width', this.spriteSheet_.frameWidth * this.renderScale_);
    rect.setAttribute('height', this.spriteSheet_.frameHeight * this.renderScale_);
    this.clipPath_.appendChild(rect);
    parentElement.appendChild(this.clipPath_);

    var itemId = 'studioanimation_' + this.animId;
    this.element_ = document.createElementNS(_constants.SVG_NS, 'image');
    this.element_.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.spriteSheet_.assetPath);
    this.element_.setAttribute('id', itemId);
    this.element_.setAttribute('height', this.spriteSheet_.assetHeight() * this.renderScale_);
    this.element_.setAttribute('width', this.spriteSheet_.assetWidth() * this.renderScale_);
    parentElement.appendChild(this.element_);

    this.element_.setAttribute('clip-path', 'url(#' + clipId + ')');
  };

  /**
   * Remove our element/clipPath/animator
   */


  StudioAnimation.prototype.removeElement = function removeElement() {

    if (this.element_) {
      this.element_.parentNode.removeChild(this.element_);
      this.element_ = null;
    }

    // remove clip path element
    if (this.clipPath_) {
      this.clipPath_.parentNode.removeChild(this.clipPath_);
      this.clipPath_ = null;
    }
  };

  /** @returns {boolean} whether the type of animation has been created */


  StudioAnimation.prototype.hasType = function hasType(type) {
    return !!this.specialAnimations_[type] || !!this.spriteSheet_.animationFrameCounts[type];
  };

  /** @returns {number} the count of frames for the current animation */


  StudioAnimation.prototype.getAnimationFrameCount = function getAnimationFrameCount() {
    var specialFrames = this.specialAnimations_[this.currentAnimationType_];
    if (specialFrames) {
      return specialFrames[this.currentAnimationIndex_].length;
    } else {
      return this.spriteSheet_.getAnimationFrameCount(this.currentAnimationType_);
    }
  };

  /** @returns {object} the frame rectangle from the sprite sheet for a frame */


  StudioAnimation.prototype.getFrame = function getFrame(frameIndex) {
    var specialFrames = this.specialAnimations_[this.currentAnimationType_];
    if (specialFrames) {
      return specialFrames[this.currentAnimationIndex_][frameIndex];
    } else {
      return this.spriteSheet_.getFrame(this.currentAnimationType_, this.currentAnimationIndex_, frameIndex);
    }
  };

  /**
   * Display the current frame at the given location
   */


  StudioAnimation.prototype.redrawCenteredAt = function redrawCenteredAt(center, tickCount) {
    var animTick = tickCount;

    // Each animation will start at a different frame when this is enabled:
    if (this.skewAnimations_) {
      // NOTE: not intended to be used with non-looping animations
      animTick = tickCount + this.animId * (this.animationFrameDuration_ + 1);
    }

    var currentFrame = Math.floor(animTick / this.animationFrameDuration_);
    var framesInThisAnimation = this.getAnimationFrameCount();

    if (this.loop_) {
      currentFrame = currentFrame % framesInThisAnimation;
    } else {
      currentFrame = Math.min(currentFrame, framesInThisAnimation - 1);
    }

    var frame = this.getFrame(currentFrame);

    var scale = this.renderScale_;

    // Preserved behavior: When scaling a sprite up, we actually scale around the
    //       bottom-center of the sprite (so feet stay planted in the same place)
    //       rather than actually around its center.
    //       That's what the (2 * scale - 1) bit is about; just change that to
    //       (scale) if you want to scale about the sprite center again.
    // TODO: Improve this by scaling around an explicitly encoded 'sprite center'
    var topLeft = {
      x: center.x - frame.width / 2 * scale,
      y: center.y - frame.height / 2 * (2 * scale - 1)
    };

    // Offset the spritesheet DOM element by the inverse of the offset of the
    // frame we want to display.
    this.element_.setAttribute('x', topLeft.x - frame.left * scale);
    this.element_.setAttribute('y', topLeft.y - frame.top * scale);
    this.element_.setAttribute('opacity', this.opacity_);

    // Then set the clip rect to the position where we want to display it, so
    // only the frame that's now positioned correctly is shown.
    var clipRect = this.clipPath_.childNodes[0];
    clipRect.setAttribute('x', topLeft.x);
    clipRect.setAttribute('y', topLeft.y);
  };

  /**
   * Sets which animation to play out of the sprite sheet.
   * Animations are indexed by their position in the sprite sheet, where each
   * animation is its own column and animation zero is the far-left column.
   * @param {!string} animationType
   * @param {!number} animationIndex
   */


  StudioAnimation.prototype.setCurrentAnimation = function setCurrentAnimation(animationType, animationIndex) {
    this.currentAnimationType_ = animationType;
    this.currentAnimationIndex_ = animationIndex;
  };

  /**
   * Creates a new special animation types based on specific frames to play from
   * the sprite sheet.
   *
   * A special animation is an animation created in code (or from metadata)
   * without regard to where the frames exist within the spritesheet. Each frame
   * from the new animation is specified according to how it was encoded by the
   * original AnimationDescription object when the StudioSpriteSheet object was
   * created.
   *
   * @param {!string} type - the name of the new animation type
   * @param {!number} index - the index of the new animation
   * @param {!array} animationList - an array with frame information
   * @param {string} [animationList[].type] - animation type for a specific frame.
   * @param {number} [animationList[].index] - animation index for a specific frame.
   * @param {number} [animationList[].frame] - animation frame for a specific frame.
   */


  StudioAnimation.prototype.createSpecialAnimation = function createSpecialAnimation(type, index, animationList) {
    if (!this.specialAnimations_[type]) {
      this.specialAnimations_[type] = [];
    }
    var frames = [];
    for (var i = 0; i < animationList.length; i++) {
      frames.push(this.spriteSheet_.getFrame(animationList[i].type, animationList[i].index, animationList[i].frame));
    }
    this.specialAnimations_[type][index] = frames;
  };

  /**
   * Set the animation speed for this item's sprite.
   * @param {number} ticksPerFrame
   */


  StudioAnimation.prototype.setAnimationFrameDuration = function setAnimationFrameDuration(ticksPerFrame) {
    this.animationFrameDuration_ = ticksPerFrame;
  };

  /**
   * Change visible opacity of this animation.
   * @param {number} newOpacity (between 0 and 1)
   */


  StudioAnimation.prototype.setOpacity = function setOpacity(newOpacity) {
    this.opacity_ = newOpacity;
  };

  /**
   * Make this animation hidden.
   */


  StudioAnimation.prototype.hide = function hide() {
    this.element_.setAttribute('visibility', 'hidden');
  };

  /**
   * Make this animation visible.
   */


  StudioAnimation.prototype.show = function show() {
    this.element_.setAttribute('visibility', 'visible');
  };

  return StudioAnimation;
}();

exports.default = StudioAnimation;
module.exports = exports['default'];

/***/ }),

/***/ 2797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(71);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** @file A utility that can help find particular frames within a spritesheet,
                                                                                                                                                           * given certain metadata about that spritesheet */

/**
 * @typedef AnimationDescription
 * @property {string} type Descriptive unique name for this animation type
 * @property {number} count Number of animations of this type
 * @property {number} frames Number of frames in each animation of this type
 */

/**
 * Provider of metadata about a particular sprite sheet, to help find frames
 * within it.
 *
 * Assumptions:
 * All frames are the same size, and are arranged in a grid.
 * All animations are the same number of frames.
 * Each animation is a single column or a single row
 *
 * @constructor
 * @param {!Object} options
 * @param {!string} options.assetPath - URL of the sprite sheet asset.
 * @param {AnimationDescription[]} [options.animations] - Animation descriptions
 * @param {number} [options.totalAnimations] - How many animations (columns)
 *        there are in the sprite sheet. Don't use with options.animations
 * @param {number} [options.defaultFramesPerAnimation] - How many frames there
 *        are per animation. Default 1.
 * @param {number} [options.packedSheetFrameCount] - How many frames before
 *        wrapping if animation frames are packed. Defaults to non-packed.
 * @param {boolean} [options.horizontalAnimation] - If animation frames run in
 *        rows instead of columns.
 */

var StudioSpriteSheet = function () {
  function StudioSpriteSheet(options) {
    _classCallCheck(this, StudioSpriteSheet);

    /** @type {Array} */
    this.animations = options.animations || [];

    /** @type {number} */
    this.frameWidth = options.frameWidth;

    /** @type {number} */
    this.frameHeight = options.frameHeight;

    /** @type {string} */
    this.assetPath = options.assetPath;

    /** @type {number} frames per animation / height in frames of sprite sheet */
    this.defaultFramesPerAnimation = options.defaultFramesPerAnimation || 1;

    /** @type {number} If non-zero, the animations are packed in one long strip
     * that wraps around to the next row/column every n frames. The row/column
     * no longer implies the beginning or end of an animation.
     * (which means this mode requires that options.animations be supplied)
     * animationOffsets are stored as an 0-based frame index in this mode.
     */
    this.packedSheetFrameCount = options.packedSheetFrameCount;

    /** @type {number} animations in sheet / width in frames of sprite sheet */
    this.animationOffsets = {};
    this.animationFrameCounts = {};
    var totalFrames = 0;
    var totalAnimations = 0;
    for (var i = 0; i < this.animations.length; i++) {
      this.animationOffsets[this.animations[i].type] = this.packedSheetFrameCount ? totalFrames : totalAnimations;
      totalAnimations += this.animations[i].count;
      var framesPerThisAnimationType = (0, _utils.valueOr)(this.animations[i].frames, this.defaultFramesPerAnimation);
      this.animationFrameCounts[this.animations[i].type] = framesPerThisAnimationType;
      totalFrames += framesPerThisAnimationType * this.animations[i].count;
    }
    this.totalAnimations = (0, _utils.valueOr)(options.totalAnimations, totalAnimations);
    this.totalFrames = totalFrames || this.totalAnimations * this.defaultFramesPerAnimation;

    /** @type {boolean} Whether animation frames run in rows, not columns */
    this.horizontalAnimation = (0, _utils.valueOr)(options.horizontalAnimation, false);

    if (this.packedSheetFrameCount) {
      var framesOneSide = Math.ceil(this.totalFrames / this.packedSheetFrameCount);
      var framesOtherSide = Math.ceil(this.totalFrames / framesOneSide);
      this.columnCount = this.horizontalAnimation ? framesOtherSide : framesOneSide;
      this.rowCount = this.horizontalAnimation ? framesOneSide : framesOtherSide;
    } else {
      this.rowCount = this.horizontalAnimation ? this.totalAnimations : this.defaultFramesPerAnimation;
      this.columnCount = this.horizontalAnimation ? this.defaultFramesPerAnimation : this.totalAnimations;
    }
  }

  /** @return {number} original height of the whole sprite sheet. */


  StudioSpriteSheet.prototype.assetWidth = function assetWidth() {
    return this.frameWidth * this.columnCount;
  };

  /** @return {number} original width of the whole sprite sheet. */


  StudioSpriteSheet.prototype.assetHeight = function assetHeight() {
    return this.frameHeight * this.rowCount;
  };

  /** @return {number} number of animation frames for a given type. */


  StudioSpriteSheet.prototype.getAnimationFrameCount = function getAnimationFrameCount(animationType) {
    return (0, _utils.valueOr)(this.animationFrameCounts[animationType], this.defaultFramesPerAnimation);
  };

  /**
   * Get the framing rect for a particular animation and frame within the
   * sprite sheet.
   * @param {string} animationType - Which type of animation to look up (optional).
   * @param {number} animationIndex - Which animation to look up.
   * @param {number} frameIndex - Which frame in the animation to look up.
   * @returns {Object} a frame rect at spritesheet scale relative to the sheet's
   *          top-left corner.
   */


  StudioSpriteSheet.prototype.getFrame = function getFrame(animationType, animationIndex, frameIndex) {
    var x, y;
    if (this.packedSheetFrameCount) {
      var absoluteFrameIndex = this.animationOffsets[animationType] + this.animationFrameCounts[animationType] * animationIndex;
      absoluteFrameIndex += frameIndex;

      if (this.horizontalAnimation) {
        x = this.frameWidth * (absoluteFrameIndex % this.columnCount);
        y = this.frameHeight * Math.floor(absoluteFrameIndex / this.columnCount);
      } else {
        x = this.frameWidth * Math.floor(absoluteFrameIndex / this.rowCount);
        y = this.frameHeight * (absoluteFrameIndex % this.rowCount);
      }
    } else {
      if (animationType) {
        animationIndex += this.animationOffsets[animationType];
      }
      x = this.frameWidth * (this.horizontalAnimation ? frameIndex : animationIndex);
      y = this.frameHeight * (this.horizontalAnimation ? animationIndex : frameIndex);
    }
    return {
      x: x,
      y: y,
      width: this.frameWidth,
      height: this.frameHeight,
      top: y,
      left: x,
      right: x + this.frameWidth,
      bottom: y + this.frameHeight
    };
  };

  return StudioSpriteSheet;
}();

exports.default = StudioSpriteSheet;
module.exports = exports['default'];

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

/***/ 2945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _constants = __webpack_require__(789);

var constants = _interopRequireWildcard(_constants);

var _utils = __webpack_require__(71);

var utils = _interopRequireWildcard(_utils);

var _lodash = __webpack_require__(82);

var _lodash2 = _interopRequireDefault(_lodash);

var _AppView = __webpack_require__(944);

var _AppView2 = _interopRequireDefault(_AppView);

var _bigGameLogic = __webpack_require__(3305);

var _bigGameLogic2 = _interopRequireDefault(_bigGameLogic);

var _collisionMaskWalls = __webpack_require__(3306);

var _collisionMaskWalls2 = _interopRequireDefault(_collisionMaskWalls);

var _hammer = __webpack_require__(2879);

var _hammer2 = _interopRequireDefault(_hammer);

var _GlowFilter = __webpack_require__(3307);

var _GlowFilter2 = _interopRequireDefault(_GlowFilter);

var _InputPrompt = __webpack_require__(3309);

var _InputPrompt2 = _interopRequireDefault(_InputPrompt);

var _Item = __webpack_require__(2947);

var _Item2 = _interopRequireDefault(_Item);

var _JSInterpreter = __webpack_require__(1291);

var _JSInterpreter2 = _interopRequireDefault(_JSInterpreter);

var _JsInterpreterLogger = __webpack_require__(1731);

var _JsInterpreterLogger2 = _interopRequireDefault(_JsInterpreterLogger);

var _MusicController = __webpack_require__(1954);

var _MusicController2 = _interopRequireDefault(_MusicController);

var _obstacleZoneWalls = __webpack_require__(3310);

var _obstacleZoneWalls2 = _interopRequireDefault(_obstacleZoneWalls);

var _projectile = __webpack_require__(3311);

var _projectile2 = _interopRequireDefault(_projectile);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rocketHeightLogic = __webpack_require__(3312);

var _rocketHeightLogic2 = _interopRequireDefault(_rocketHeightLogic);

var _samBatLogic = __webpack_require__(3313);

var _samBatLogic2 = _interopRequireDefault(_samBatLogic);

var _Sprite = __webpack_require__(3314);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _StudioVisualizationColumn = __webpack_require__(3315);

var _StudioVisualizationColumn2 = _interopRequireDefault(_StudioVisualizationColumn);

var _ThreeSliceAudio = __webpack_require__(3316);

var _ThreeSliceAudio2 = _interopRequireDefault(_ThreeSliceAudio);

var _tileWalls = __webpack_require__(3317);

var _tileWalls2 = _interopRequireDefault(_tileWalls);

var _api = __webpack_require__(2946);

var _api2 = _interopRequireDefault(_api);

var _blocks = __webpack_require__(2798);

var _blocks2 = _interopRequireDefault(_blocks);

var _CustomMarshalingInterpreter = __webpack_require__(850);

var _CustomMarshalingInterpreter2 = _interopRequireDefault(_CustomMarshalingInterpreter);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _dom = __webpack_require__(594);

var _dom2 = _interopRequireDefault(_dom);

var _dropletConfig = __webpack_require__(3318);

var _dropletConfig2 = _interopRequireDefault(_dropletConfig);

var _paramLists = __webpack_require__(2799);

var _paramLists2 = _interopRequireDefault(_paramLists);

var _cell = __webpack_require__(2080);

var _cell2 = _interopRequireDefault(_cell);

var _locale3 = __webpack_require__(1706);

var _locale4 = _interopRequireDefault(_locale3);

var _spriteActions = __webpack_require__(2949);

var _reactRedux = __webpack_require__(53);

var _StudioApp = __webpack_require__(597);

var _javascriptMode = __webpack_require__(849);

var _JavaScriptModeErrorHandler = __webpack_require__(1734);

var _JavaScriptModeErrorHandler2 = _interopRequireDefault(_JavaScriptModeErrorHandler);

var _containedLevels = __webpack_require__(1005);

var _redux = __webpack_require__(237);

var _Sounds = __webpack_require__(764);

var _Sounds2 = _interopRequireDefault(_Sounds);

var _thumbnail = __webpack_require__(1158);

var _project = __webpack_require__(745);

var _project2 = _interopRequireDefault(_project);

var _block_utils = __webpack_require__(743);

var _xml = __webpack_require__(845);

var _twitterHelper = __webpack_require__(1735);

__webpack_require__(1724);

var _constants2 = __webpack_require__(216);

var _progressRedux = __webpack_require__(498);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Blockly App: Studio
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * Copyright 2014 Code.org
                                                                                                                                                                                                     *
                                                                                                                                                                                                     */

// tests don't have svgelement


var Direction = constants.Direction;
var CardinalDirections = constants.CardinalDirections;
var NextTurn = constants.NextTurn;
var SquareType = constants.SquareType;
var Emotions = constants.Emotions;
var turnRight90 = constants.turnRight90;
var turnLeft90 = constants.turnLeft90;

// Whether we are showing debug information
var showDebugInfo = false;

/**
 * Create a namespace for the application.
 */
var Studio = module.exports;

Studio.keyState = {};
Studio.gesturesObserved = {};
Studio.btnState = {};

var ButtonState = {
  UP: 0,
  DOWN: 1
};

var ArrowIds = {
  LEFT: 'leftButton',
  UP: 'upButton',
  RIGHT: 'rightButton',
  DOWN: 'downButton'
};

Studio.GameStates = {
  WAITING: 0,
  ACTIVE: 1,
  OVER: 2
};

var DRAG_DISTANCE_TO_MOVE_RATIO = 25;

// NOTE: all class names should be unique. eventhandler naming won't work
// if we name a projectile class 'left' for example.

var EdgeClassNames = ['top', 'left', 'bottom', 'right'];

var level = void 0;
var skin = void 0;

// These skins can be published as projects.
var PUBLISHABLE_SKINS = ['gumball', 'studio', 'iceage', 'infinity', 'hoc2015'];

//TODO: Make configurable.
(0, _StudioApp.singleton)().setCheckForEmptyBlocks(true);

var AUTO_HANDLER_MAP = {
  whenRun: 'whenGameStarts',
  whenDown: 'when-down',
  whenUp: 'when-up',
  whenLeft: 'when-left',
  whenRight: 'when-right',
  whenGetCharacter: 'whenSpriteCollided-' + (Studio.protagonistSpriteIndex || 0) + '-any_item',
  whenTouchCharacter: 'whenSpriteCollided-' + (Studio.protagonistSpriteIndex || 0) + '-any_item',
  whenTouchObstacle: 'whenSpriteCollided-' + (Studio.protagonistSpriteIndex || 0) + '-wall',
  whenGetAllCharacters: 'whenGetAllItems',
  whenTouchGoal: 'whenTouchGoal',
  whenTouchAllGoals: 'whenTouchAllGoals',
  whenScore1000: 'whenScore1000'
};

// Default Scalings
Studio.scale = {
  'snapRadius': 1,
  'stepSpeed': 33
};

var TITLE_SCREEN_TIMEOUT = 5000;
var TITLE_SCREEN_TITLE_Y_POSITION = 60; // bottom of title text
var TITLE_SCREEN_TEXT_Y_POSITION = 100; // top of text group
var TITLE_SCREEN_TEXT_SIDE_MARGIN = 20;
var TITLE_SCREEN_TEXT_LINE_HEIGHT = 24;
var TITLE_SCREEN_TEXT_MAX_LINES = 7;
var TITLE_SCREEN_TEXT_TOP_MARGIN = 5;
var TITLE_SCREEN_TEXT_V_PADDING = 15;
var TITLE_SCREEN_TEXT_WIDTH = 360;
var TITLE_SCREEN_TEXT_HEIGHT = TITLE_SCREEN_TEXT_TOP_MARGIN + TITLE_SCREEN_TEXT_V_PADDING + TITLE_SCREEN_TEXT_MAX_LINES * TITLE_SCREEN_TEXT_LINE_HEIGHT;

var SPEECH_BUBBLE_RADIUS = 20;
var SPEECH_BUBBLE_H_OFFSET = 50;
var SPEECH_BUBBLE_PADDING = 5;
var SPEECH_BUBBLE_SIDE_MARGIN = 10;
var SPEECH_BUBBLE_LINE_HEIGHT = 20;
var SPEECH_BUBBLE_TOP_MARGIN = 5;
var SPEECH_BUBBLE_MIN_WIDTH = 180;
var SPEECH_BUBBLE_MAX_WIDTH = 380;

var SCORE_TEXT_Y_POSITION = 30; // bottom of text
var VICTORY_TEXT_Y_POSITION = 130;
var RESET_TEXT_Y_POSITION = 380;

var MIN_TIME_BETWEEN_PROJECTILES = 500; // time in ms

var twitterOptions = {
  text: _locale4.default.shareStudioTwitterDonor({ donor: (0, _twitterHelper.getRandomDonorTwitter)() }),
  hashtag: "StudioCode"
};

/** @type {JsInterpreterLogger} */
var consoleLogger = null;

// Not actually the "default" map, just the map that's used in the "New Playlab
// Project" level.
var DEFAULT_MAP = [[16, 0, 0, 16, 0, 0, 16, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 16, 0, 0, 16, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 16, 0, 0, 16, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 16, 0, 0, 16, 0], [0, 0, 0, 0, 0, 0, 0, 0]];

var REMIX_PROPS = [{
  defaultValues: {
    map: DEFAULT_MAP,
    firstSpriteIndex: 1,
    spritesHiddenToStart: true
  },
  generateBlocks: function generateBlocks(args) {
    var blocks = [];
    var spriteIndex = 1;
    var getDefaultSpriteLocation = function getDefaultSpriteLocation() {
      return {
        x: (spriteIndex - 1) % 3 * 3,
        y: parseInt((spriteIndex - 1) / 3) * 2
      };
    };
    for (var y = 0; y < Studio.ROWS; y++) {
      for (var x = 0; x < Studio.COLS; x++) {
        var cell = Studio.map[y][x].serialize();
        if (cell.tileType & constants.SquareType.SPRITESTART) {
          var defaultSpriteLocation = getDefaultSpriteLocation();
          if ((level.firstSpriteIndex !== 1 || cell.sprite) && !level.spritesHiddenToStart) {
            blocks.push((0, _block_utils.blockAsXmlNode)('studio_setSpriteParams', {
              titles: {
                'VALUE': '"' + Studio.startAvatars[cell.sprite ? cell.sprite : spriteIndex + (level.firstSpriteIndex || 0)] + '"'
              },
              values: {
                'SPRITE': {
                  type: 'math_number',
                  titleName: 'NUM',
                  titleValue: spriteIndex
                }
              }
            }));
          }
          if (x !== defaultSpriteLocation.x || y !== defaultSpriteLocation.y) {
            blocks.push((0, _block_utils.blockAsXmlNode)('studio_setSpriteXY', {
              values: {
                'SPRITE': {
                  type: 'math_number',
                  titleName: 'NUM',
                  titleValue: spriteIndex
                },
                'XPOS': {
                  type: 'math_number',
                  titleName: 'NUM',
                  titleValue: x * Studio.SQUARE_SIZE + Studio.sprite[spriteIndex - 1].width / 2
                },
                'YPOS': {
                  type: 'math_number',
                  titleName: 'NUM',
                  titleValue: y * Studio.SQUARE_SIZE + Studio.sprite[spriteIndex - 1].height / 2
                }
              }
            }));
          }
          if (cell.speed !== undefined && cell.speed !== constants.DEFAULT_SPRITE_SPEED) {
            blocks.push((0, _block_utils.blockAsXmlNode)('studio_setSpriteSpeedParams', {
              values: {
                'SPRITE': {
                  type: 'math_number',
                  titleName: 'NUM',
                  titleValue: spriteIndex
                },
                'VALUE': {
                  type: 'math_number',
                  titleName: 'NUM',
                  titleValue: cell.speed
                }
              }
            }));
          }
          if (cell.size !== undefined && cell.size !== constants.DEFAULT_SPRITE_SIZE) {
            blocks.push((0, _block_utils.blockAsXmlNode)('studio_setSpriteSizeParams', {
              values: {
                'SPRITE': {
                  type: 'math_number',
                  titleName: 'NUM',
                  titleValue: spriteIndex
                },
                'VALUE': {
                  type: 'math_number',
                  titleName: 'NUM',
                  titleValue: cell.size
                }
              }
            }));
          }
          if (cell.emotion && cell.emotion !== Emotions.NORMAL) {
            blocks.push((0, _block_utils.blockAsXmlNode)('studio_setSpriteEmotion', {
              titles: {
                'SPRITE': spriteIndex,
                'VALUE': cell.emotion
              }
            }));
          }

          spriteIndex++;
        }
        if (cell.tileType & constants.SquareType.SPRITEFINISH) {
          blocks.push((0, _block_utils.blockAsXmlNode)('sudio_addGoalXY', {
            values: {
              'XPOS': {
                type: 'math_number',
                titleName: 'NUM',
                titleValue: x * Studio.SQUARE_SIZE
              },
              'YPOS': {
                type: 'math_number',
                titleName: 'NUM',
                titleValue: y * Studio.SQUARE_SIZE
              }
            }
          }));
        }
      }
    }

    return blocks;
  }
}, {
  defaultValues: {
    allowSpritesOutsidePlayspace: false
  },
  generateBlocks: function generateBlocks(args) {
    return [(0, _block_utils.blockAsXmlNode)('studio_allowSpritesOutsidePlayspace', {
      titles: {
        'VALUE': 'true'
      }
    })];
  }
}];

Studio.loadLevel = function () {
  // Load maps.
  Studio.map = level.map.map(function (row) {
    return row.map(function (cell) {
      // Each cell should be either an integer (in which case we are
      // dealing with the legacy format and should treat that value as
      // the tileType for the cell) or an object (in which case we are
      // dealing with the new format and should treat that value as a
      // serialization of the cell).
      var value = isNaN(parseInt(cell)) ? _cell2.default.deserialize(cell) : new _cell2.default(cell);
      if (value.tileType_ & constants.WallCoordsMask) {
        Studio.wallMapCollisions = true;
      }
      return value;
    });
  });
  Studio.wallMap = null; // The map name actually being used.
  Studio.wallMapRequested = null; // The map name requested by the caller.
  Studio.allowSpritesOutsidePlayspace = level.allowSpritesOutsidePlayspace;
  Studio.timeoutFailureTick = level.timeoutFailureTick || Infinity;
  Studio.slowExecutionFactor = skin.slowExecutionFactor || 1;
  Studio.gridAlignedExtraPauseSteps = skin.gridAlignedExtraPauseSteps || 0;
  Studio.ticksBeforeFaceSouth = Studio.slowExecutionFactor + utils.valueOr(level.ticksBeforeFaceSouth, constants.IDLE_TICKS_BEFORE_FACE_SOUTH);
  Studio.minWorkspaceHeight = level.minWorkspaceHeight;
  Studio.softButtons_ = level.softButtons || {};
  // protagonistSpriteIndex was originally mispelled. accept either spelling.
  Studio.protagonistSpriteIndex = utils.valueOr(level.protagonistSpriteIndex, level.protaganistSpriteIndex);

  switch (level.customGameType) {
    case 'Big Game':
      Studio.customLogic = new _bigGameLogic2.default(Studio);
      break;
    case 'Rocket Height':
      Studio.customLogic = new _rocketHeightLogic2.default(Studio);
      break;
    case 'Sam the Bat':
      Studio.customLogic = new _samBatLogic2.default(Studio);
      break;
    case 'Ninja Cat':
      Studio.customLogic = new _bigGameLogic2.default(Studio, {
        staticPlayer: true
      });

  }
  _blocks2.default.registerCustomGameLogic(Studio.customLogic);

  // Custom game logic doesn't work yet in the interpreter.
  Studio.legacyRuntime = !!Studio.customLogic;

  if (level.avatarList) {
    Studio.startAvatars = level.avatarList.slice();
  } else {
    Studio.startAvatars = reorderedStartAvatars(skin.avatarList, level.firstSpriteIndex);
  }

  // Override scalars.
  for (var key in level.scale) {
    Studio.scale[key] = level.scale[key];
  }

  // Measure maze dimensions and set sizes.
  // ROWS: Number of tiles down.
  Studio.ROWS = Studio.map.length;
  // COLS: Number of tiles across.
  Studio.COLS = Studio.map[0].length;
  // Pixel height and width of each maze square (i.e. tile).
  Studio.SQUARE_SIZE = 50;
  Studio.HALF_SQUARE = Studio.SQUARE_SIZE / 2;

  // Height and width of the goal and obstacles.
  Studio.MARKER_HEIGHT = level.markerHeight || 100;
  Studio.MARKER_WIDTH = level.markerWidth || 100;

  Studio.MAZE_WIDTH = Studio.SQUARE_SIZE * Studio.COLS;
  Studio.MAZE_HEIGHT = Studio.SQUARE_SIZE * Studio.ROWS;
  (0, _StudioApp.singleton)().MAZE_WIDTH = Studio.MAZE_WIDTH;
  (0, _StudioApp.singleton)().MAZE_HEIGHT = Studio.MAZE_HEIGHT;

  Studio.walls = loadWalls();
};

function loadWalls() {
  if (skin.customObstacleZones) {
    return new _obstacleZoneWalls2.default(level, skin, Studio.drawDebugRect);
  } else if (skin.wallMaps) {
    return new _collisionMaskWalls2.default(level, skin, Studio.drawDebugRect, Studio.drawDebugOverlay, Studio.MAZE_WIDTH, Studio.MAZE_HEIGHT);
  } else {
    return new _tileWalls2.default(level, skin, Studio.drawDebugRect, Studio.SQUARE_SIZE, Studio.ROWS, Studio.COLS, Studio.getWallValue);
  }
}

/**
 * Returns a list of avatars, reordered such that firstSpriteIndex comes first
 * (and is now at index 0).
 */
function reorderedStartAvatars(avatarList, firstSpriteIndex) {
  firstSpriteIndex = firstSpriteIndex || 0;
  return _lodash2.default.flattenDeep([avatarList.slice(firstSpriteIndex), avatarList.slice(0, firstSpriteIndex)]);
}

var drawMap = function drawMap() {
  var svg = document.getElementById('svgStudio');
  var i;

  // Adjust outer element size.
  svg.setAttribute('width', Studio.MAZE_WIDTH);
  svg.setAttribute('height', Studio.MAZE_HEIGHT);

  // Attach click handler.
  var hammerSvg = new _hammer2.default(svg);
  hammerSvg.on("tap", Studio.onSvgClicked);
  hammerSvg.on("drag", Studio.onSvgDrag);

  // Adjust visualizationColumn width.
  var visualizationColumn = document.getElementById('visualizationColumn');
  visualizationColumn.style.width = Studio.MAZE_WIDTH + 'px';

  var backgroundLayer = document.createElementNS(_constants2.SVG_NS, 'g');
  backgroundLayer.setAttribute('id', 'backgroundLayer');
  svg.appendChild(backgroundLayer);

  if (Studio.background && skin[Studio.background].background) {
    var tile = document.createElementNS(_constants2.SVG_NS, 'image');
    tile.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin[Studio.background].background);
    tile.setAttribute('id', 'background');
    tile.setAttribute('height', Studio.MAZE_HEIGHT);
    tile.setAttribute('width', Studio.MAZE_WIDTH);
    tile.setAttribute('x', 0);
    tile.setAttribute('y', 0);
    backgroundLayer.appendChild(tile);
  }

  if (level.coordinateGridBackground) {
    (0, _StudioApp.singleton)().createCoordinateGridBackground({
      svg: 'backgroundLayer',
      origin: 0,
      firstLabel: 100,
      lastLabel: 300,
      increment: 100
    });
  }

  var spriteLayer = document.createElementNS(_constants2.SVG_NS, 'g');
  spriteLayer.setAttribute('id', 'spriteLayer');
  svg.appendChild(spriteLayer);

  if (Studio.wallMapCollisions) {
    Studio.drawMapTiles();
  }

  if (Studio.spriteStart_) {
    for (i = 0; i < Studio.spriteCount; i++) {
      var spriteSpeechBubble = document.createElementNS(_constants2.SVG_NS, 'g');
      spriteSpeechBubble.setAttribute('id', 'speechBubble' + i);
      spriteSpeechBubble.setAttribute('visibility', 'hidden');

      var speechRect = document.createElementNS(_constants2.SVG_NS, 'path');
      speechRect.setAttribute('id', 'speechBubblePath' + i);
      speechRect.setAttribute('class', 'studio-speech-bubble-path');

      var speechText = document.createElementNS(_constants2.SVG_NS, 'text');
      speechText.setAttribute('id', 'speechBubbleText' + i);
      speechText.setAttribute('class', 'studio-speech-bubble');

      spriteSpeechBubble.appendChild(speechRect);
      spriteSpeechBubble.appendChild(speechText);
      svg.appendChild(spriteSpeechBubble);
    }
  }

  if (Studio.spriteGoals_) {
    for (i = 0; i < Studio.spriteGoals_.length; i++) {
      Studio.createGoalElements(i, Studio.spriteGoals_[i]);
    }
  }
  Studio.applyGoalEffect();

  // Create cloud elements.
  var cloudGroup = document.createElementNS(_constants2.SVG_NS, 'g');
  cloudGroup.setAttribute('id', 'cloudLayer');
  for (i = 0; i < constants.MAX_NUM_CLOUDS; i++) {
    var cloud = document.createElementNS(_constants2.SVG_NS, 'image');
    cloud.setAttribute('id', 'cloud' + i);
    cloudGroup.appendChild(cloud);
  }
  svg.appendChild(cloudGroup);

  var gameTextGroup = document.createElementNS(_constants2.SVG_NS, 'g');
  gameTextGroup.setAttribute('id', 'gameTextGroup');
  svg.appendChild(gameTextGroup);

  var overlayGroup = document.createElementNS(_constants2.SVG_NS, 'g');
  overlayGroup.setAttribute('id', 'overlayGroup');
  svg.appendChild(overlayGroup);

  var score = document.createElementNS(_constants2.SVG_NS, 'text');
  score.setAttribute('id', 'score');
  score.setAttribute('class', 'studio-score');
  score.setAttribute('x', Studio.MAZE_WIDTH / 2);
  score.setAttribute('y', SCORE_TEXT_Y_POSITION);
  score.appendChild(document.createTextNode(''));
  score.setAttribute('visibility', 'hidden');
  gameTextGroup.appendChild(score);

  var victoryText = document.createElementNS(_constants2.SVG_NS, 'text');
  victoryText.setAttribute('id', 'victoryText');
  victoryText.setAttribute('class', 'studio-victory-text');
  victoryText.setAttribute('x', Studio.MAZE_WIDTH / 2);
  victoryText.setAttribute('y', VICTORY_TEXT_Y_POSITION);
  victoryText.appendChild(document.createTextNode(''));
  victoryText.setAttribute('visibility', 'hidden');
  gameTextGroup.appendChild(victoryText);

  if (_dom2.default.isMobile() || _dom2.default.isWindowsTouch()) {
    var resetOverlayRect = document.createElementNS(_constants2.SVG_NS, 'rect');
    resetOverlayRect.setAttribute('width', Studio.MAZE_WIDTH);
    resetOverlayRect.setAttribute('height', Studio.MAZE_HEIGHT);
    resetOverlayRect.setAttribute('fill', 'black');
    resetOverlayRect.setAttribute('opacity', 0.3);
    overlayGroup.appendChild(resetOverlayRect);
    var resetTextA = document.createElementNS(_constants2.SVG_NS, 'text');
    resetTextA.setAttribute('id', 'resetTextA');
    resetTextA.setAttribute('class', 'studio-reset-text');
    resetTextA.setAttribute('x', Studio.MAZE_WIDTH / 2);
    resetTextA.setAttribute('y', RESET_TEXT_Y_POSITION - 30);
    resetTextA.appendChild(document.createTextNode(_locale4.default.tapToPlay()));
    resetTextA.setAttribute('visibility', 'visible');
    overlayGroup.appendChild(resetTextA);
    var resetTextB = document.createElementNS(_constants2.SVG_NS, 'text');
    resetTextB.setAttribute('id', 'resetTextB');
    resetTextB.setAttribute('class', 'studio-reset-text');
    resetTextB.setAttribute('x', Studio.MAZE_WIDTH / 2);
    resetTextB.setAttribute('y', RESET_TEXT_Y_POSITION);
    resetTextB.appendChild(document.createTextNode(_locale4.default.swipeToMove()));
    resetTextB.setAttribute('visibility', 'visible');
    overlayGroup.appendChild(resetTextB);
    var touchDragIcon = document.createElementNS(_constants2.SVG_NS, 'image');
    touchDragIcon.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', (0, _StudioApp.singleton)().assetUrl('media/common_images/touch-drag.png'));
    var touchIconSize = 300;
    touchDragIcon.setAttribute('width', touchIconSize);
    touchDragIcon.setAttribute('height', touchIconSize);
    touchDragIcon.setAttribute('x', (Studio.MAZE_WIDTH - touchIconSize) / 2);
    touchDragIcon.setAttribute('y', (Studio.MAZE_HEIGHT - touchIconSize) / 2 - 25);
    overlayGroup.appendChild(touchDragIcon);
  } else {
    var resetText = document.createElementNS(_constants2.SVG_NS, 'text');
    resetText.setAttribute('id', 'resetText');
    resetText.setAttribute('class', 'studio-reset-text');
    resetText.setAttribute('x', Studio.MAZE_WIDTH / 2);
    resetText.setAttribute('y', RESET_TEXT_Y_POSITION);
    resetText.appendChild(document.createTextNode(_locale4.default.tapOrClickToReset()));
    resetText.setAttribute('visibility', 'visible');
    overlayGroup.appendChild(resetText);
  }

  if (level.floatingScore) {
    var floatingScore = document.createElementNS(_constants2.SVG_NS, 'text');
    floatingScore.setAttribute('id', 'floatingScore');
    floatingScore.setAttribute('class', 'studio-floating-score');
    floatingScore.setAttribute('x', Studio.MAZE_WIDTH / 2);
    floatingScore.setAttribute('y', SCORE_TEXT_Y_POSITION);
    floatingScore.appendChild(document.createTextNode(''));
    floatingScore.setAttribute('visibility', 'hidden');
    svg.appendChild(floatingScore);
  }

  var titleScreenTitle = document.createElementNS(_constants2.SVG_NS, 'text');
  titleScreenTitle.setAttribute('id', 'titleScreenTitle');
  titleScreenTitle.setAttribute('class', 'studio-ts-title');
  titleScreenTitle.setAttribute('x', Studio.MAZE_WIDTH / 2);
  titleScreenTitle.setAttribute('y', TITLE_SCREEN_TITLE_Y_POSITION);
  titleScreenTitle.appendChild(document.createTextNode(''));
  titleScreenTitle.setAttribute('visibility', 'hidden');
  svg.appendChild(titleScreenTitle);

  var titleScreenTextGroup = document.createElementNS(_constants2.SVG_NS, 'g');
  var xPosTextGroup = (Studio.MAZE_WIDTH - TITLE_SCREEN_TEXT_WIDTH) / 2;
  titleScreenTextGroup.setAttribute('id', 'titleScreenTextGroup');
  titleScreenTextGroup.setAttribute('x', xPosTextGroup);
  titleScreenTextGroup.setAttribute('y', TITLE_SCREEN_TEXT_Y_POSITION);
  titleScreenTextGroup.setAttribute('transform', 'translate(' + xPosTextGroup + ',' + TITLE_SCREEN_TEXT_Y_POSITION + ')');
  titleScreenTextGroup.setAttribute('visibility', 'hidden');

  var titleScreenTextRect = document.createElementNS(_constants2.SVG_NS, 'rect');
  titleScreenTextRect.setAttribute('id', 'titleScreenTextRect');
  titleScreenTextRect.setAttribute('x', 0);
  titleScreenTextRect.setAttribute('y', 0);
  titleScreenTextRect.setAttribute('width', TITLE_SCREEN_TEXT_WIDTH);
  titleScreenTextRect.setAttribute('class', 'studio-ts-text-rect');

  var titleScreenText = document.createElementNS(_constants2.SVG_NS, 'text');
  titleScreenText.setAttribute('id', 'titleScreenText');
  titleScreenText.setAttribute('class', 'studio-ts-text');
  titleScreenText.setAttribute('x', TITLE_SCREEN_TEXT_WIDTH / 2);
  titleScreenText.setAttribute('y', 0);
  titleScreenText.appendChild(document.createTextNode(''));

  titleScreenTextGroup.appendChild(titleScreenTextRect);
  titleScreenTextGroup.appendChild(titleScreenText);
  svg.appendChild(titleScreenTextGroup);
};

function collisionTest(x1, x2, xVariance, y1, y2, yVariance) {
  return Math.abs(x1 - x2) <= xVariance && Math.abs(y1 - y2) <= yVariance;
}

Studio.allGoals_ = function () {
  return Studio.spriteGoals_.concat(Studio.dynamicSpriteGoals_);
};

/**
 * Creates DOM elements for the given goal, and augments the goal object
 * with pointers to those elements.
 * Note that if this method is called after the initialization step, it
 * will likely need to be followed with a call to sortDrawOrder.
 *
 * @param {number} i - a unique identifier, used to create ids for
 *        created elements
 * @param {object} goal
 */
Studio.createGoalElements = function (i, goal) {
  var svg = document.getElementById('svgStudio');
  var spriteLayer = document.getElementById('backgroundLayer');

  var goalOverride = utils.valueOr(level.goalOverride, {});
  var numFrames = 1;
  if (goalOverride.goalAnimation && skin.animatedGoalFrames) {
    numFrames = skin.animatedGoalFrames;
  }

  // Calculate the dimensions of the spritesheet & the sprite itself that's rendered
  // out of it.  Precedence order is skin.goalSpriteWidth/Height, goalOverride.imageWidth/Height,
  // and then Studio.MARKER_WIDTH/HEIGHT.
  //
  // Legacy levels might specify goalOverride.imageWidth/Height which are dimensions
  // of the entire spritesheet, and rely upon studio's default MARKER_WIDTH/HEIGHT which
  // are dimensions of the sprite itself.
  // Newer levels might specify skin.goalSpriteWith/Height which are the dimensions of the
  // sprite itself.  The dimensions of the spritesheet are calculated using skin.animatedGoalFrames.
  // The fallback dimensions of both spritesheet and sprite are studio's default
  // MARKER_WIDTH/HEIGHT.

  var spritesheetWidth = skin.goalSpriteWidth ? skin.goalSpriteWidth * numFrames : utils.valueOr(goalOverride.imageWidth, Studio.MARKER_WIDTH);
  var spritesheetHeight = skin.goalSpriteHeight ? skin.goalSpriteHeight : utils.valueOr(goalOverride.imageHeight, Studio.MARKER_HEIGHT);

  var spriteWidth = utils.valueOr(skin.goalSpriteWidth, Studio.MARKER_WIDTH);
  var spriteHeight = utils.valueOr(skin.goalSpriteHeight, Studio.MARKER_HEIGHT);

  var offsetX = utils.valueOr(goalOverride.goalRenderOffsetX, utils.valueOr(skin.goalRenderOffsetX, 0));
  var offsetY = utils.valueOr(goalOverride.goalRenderOffsetY, utils.valueOr(skin.goalRenderOffsetY, 0));

  // Add finish markers.
  goal.clipPath = document.createElementNS(_constants2.SVG_NS, 'clipPath');
  goal.clipPath.setAttribute('id', 'finishClipPath' + i);
  goal.clipRect = document.createElementNS(_constants2.SVG_NS, 'rect');
  goal.clipRect.setAttribute('id', 'finishClipRect' + i);
  goal.clipRect.setAttribute('width', spriteWidth);
  goal.clipRect.setAttribute('height', spriteHeight);
  goal.clipPath.appendChild(goal.clipRect);
  // Safari workaround: Clip paths work better when descendant of an SVGGElement.
  spriteLayer.appendChild(goal.clipPath);

  goal.marker = document.createElementNS(_constants2.SVG_NS, 'image');
  goal.marker.setAttribute('id', 'spriteFinish' + i);
  goal.marker.setAttribute('width', spritesheetWidth);
  goal.marker.setAttribute('height', spritesheetHeight);
  if (!skin.disableClipRectOnGoals) {
    goal.marker.setAttribute('clip-path', 'url(#' + goal.clipPath.id + ')');
  }
  goal.marker.setAttribute('x', goal.x + offsetX);
  goal.marker.setAttribute('y', goal.y + offsetY);
  goal.marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Studio.getGoalAssetFromSkin());
  goal.marker.setAttribute('opacity', 1);
  goal.clipRect.setAttribute('x', goal.x + offsetX);
  goal.clipRect.setAttribute('y', goal.y + offsetY);
  svg.appendChild(goal.marker);
};

/** @type {ImageFilter} */
var goalFilterEffect = null;

/**
 * Apply the effect specified in skin.goalEffect to all of the goal objects
 * in the level.
 */
Studio.applyGoalEffect = function () {
  if (!goalFilterEffect) {
    var svg = document.getElementById('svgStudio');
    goalFilterEffect = new _GlowFilter2.default(svg);
  }

  if (goalFilterEffect) {
    Studio.allGoals_().forEach(function (goal) {
      goalFilterEffect.applyTo(goal.marker);
    });
  }
};

/**
 * Remove the effect specified in skin.goalEffect from all of the goal objects
 * in the level.
 */
Studio.removeGoalEffect = function () {
  if (!goalFilterEffect) {
    return;
  }

  Studio.allGoals_().forEach(function (goal) {
    goalFilterEffect.removeFrom(goal.marker);
  });
};

/**
 * @param scope Object :  The scope in which to execute the delegated function.
 * @param func Function : The function to execute
 * @param data Object or Array : The data to pass to the function. If the
 *   function is also passed arguments, the data is appended to the arguments
 *   list. If the data is an Array, each item is appended as a new argument.
 */
var delegate = function delegate(scope, func, data) {
  return function () {
    var args = Array.prototype.slice.apply(arguments).concat(data);
    func.apply(scope, args);
  };
};

var calcMoveDistanceFromQueues = function calcMoveDistanceFromQueues(index, modifyQueues) {
  var totalDelta = { x: 0, y: 0 };

  Studio.eventHandlers.forEach(function (handler) {
    var cmd = handler.cmdQueue[0];
    if (cmd && cmd.name === 'moveDistance' && cmd.opts.spriteIndex === index) {
      var distThisMove = Math.min(cmd.opts.queuedDistance || Infinity, Studio.sprite[cmd.opts.spriteIndex].speed);
      var moveDirection = utils.normalize(Direction.getUnitVector(cmd.opts.dir));
      totalDelta.x += distThisMove * moveDirection.x;
      totalDelta.y += distThisMove * moveDirection.y;

      if (modifyQueues && (moveDirection.x !== 0 || moveDirection.y !== 0)) {
        cmd.opts.queuedDistance -= distThisMove;
        if ("0.00" === Math.abs(cmd.opts.queuedDistance).toFixed(2)) {
          handler.cmdQueue.shift();
        }
      }
    }
  });

  return totalDelta;
};

var cancelQueuedMovements = function cancelQueuedMovements(index, yAxis) {
  Studio.eventHandlers.forEach(function (handler) {
    var cmd = handler.cmdQueue[0];
    if (cmd && cmd.name === 'moveDistance' && cmd.opts.spriteIndex === index) {
      var dir = cmd.opts.dir;
      if (yAxis && (dir === Direction.NORTH || dir === Direction.SOUTH)) {
        cmd.opts.queuedDistance = 0;
      } else if (!yAxis && (dir === Direction.EAST || dir === Direction.WEST)) {
        cmd.opts.queuedDistance = 0;
      } else if (!CardinalDirections.includes(dir)) {
        cmd.opts.queuedDistance = 0;
      }
    }
  });
};

//
// Return the next position for this sprite on a given coordinate axis
// given the queued moves (yAxis === false means xAxis)
// NOTE: position values returned are not clamped to playspace boundaries
//

var getNextPosition = function getNextPosition(i, modifyQueues) {
  var delta = calcMoveDistanceFromQueues(i, modifyQueues);
  if (delta.x === 0 && delta.y === 0) {
    return Studio.sprite[i].getNextPosition();
  }
  return {
    x: Studio.sprite[i].x + delta.x,
    y: Studio.sprite[i].y + delta.y
  };
};

//
// Perform Queued Moves in the X and Y axes (called from inside onTick)
//
var performQueuedMoves = function performQueuedMoves(i) {
  var sprite = Studio.sprite[i];

  var origX = sprite.x;
  var origY = sprite.y;

  var nextPosition = getNextPosition(i, true);
  var newX, newY;

  if (Studio.allowSpritesOutsidePlayspace) {
    newX = nextPosition.x;
    newY = nextPosition.y;
  } else {
    var playspaceBoundaries = Studio.getPlayspaceBoundaries(sprite);

    // Clamp nextPosition.x to boundaries as newX:
    newX = Math.min(playspaceBoundaries.right, Math.max(playspaceBoundaries.left, nextPosition.x));
    if (nextPosition.x !== newX) {
      cancelQueuedMovements(i, false);
    }

    // Clamp nextPosition.y to boundaries as newY:
    newY = Math.min(playspaceBoundaries.bottom, Math.max(playspaceBoundaries.top, nextPosition.y));
    if (nextPosition.y !== newY) {
      cancelQueuedMovements(i, true);
    }
  }

  if (Studio.wallMapCollisions && (newX !== origX || newY !== origY)) {
    if (Studio.willSpriteTouchWall(sprite, newX, newY)) {
      if (!Studio.willSpriteTouchWall(sprite, newX, origY)) {
        newY = origY;
        cancelQueuedMovements(i, true);
      } else if (!Studio.willSpriteTouchWall(sprite, origX, newY)) {
        newX = origX;
        cancelQueuedMovements(i, false);
      } else {
        newX = origX;
        newY = origY;
        cancelQueuedMovements(i, false);
        cancelQueuedMovements(i, true);
      }
    }
  }

  sprite.x = newX;
  sprite.y = newY;

  // if sprite position changed, note it
  if (origX !== sprite.x || origY !== sprite.y) {
    sprite.lastMove = Studio.tickCount;
  }
};

//
// Set text into SVG text tspan elements (manual word wrapping)
// Thanks http://stackoverflow.com/questions/
//        7046986/svg-using-getcomputedtextlength-to-wrap-text
//
// opts.svgText: existing svg 'text' element
// opts.text: full-length text string
// opts.width: total width
// opts.maxWidth: max width to try, if the text doesn't fit in width
// opts.fullHeight: total height (fits maxLines of text)
// opts.maxLines: max number of text lines
// opts.lineHeight: height per line of text
// opts.topMargin: top margin
// opts.sideMargin: left & right margin (deducted from total width)
//

var setSvgText = Studio.setSvgText = function (opts) {
  var width = opts.width;
  var words = opts.text.toString().split(' ');
  var longWord = false;

  while (width <= opts.maxWidth) {
    // Remove any children from the svgText node:
    while (opts.svgText.firstChild) {
      opts.svgText.removeChild(opts.svgText.firstChild);
    }

    var wordIndex = 0;
    for (var line = 1; line <= opts.maxLines; line++) {
      // Create new tspan element
      var tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      tspan.setAttribute("x", width / 2);
      tspan.setAttribute("dy", opts.lineHeight + (line === 1 ? opts.topMargin : 0));
      // Create text in tspan element
      var text_node = document.createTextNode(words[wordIndex]);
      wordIndex++;

      // Add text to tspan element
      tspan.appendChild(text_node);
      // Add tspan element to DOM
      opts.svgText.appendChild(tspan);

      if (tspan.getComputedTextLength && tspan.getComputedTextLength() > width - 2 * opts.sideMargin && width < opts.maxWidth) {
        // We have a really long word, try to expand to fit it.
        width = Math.min(tspan.getComputedTextLength() + 2 * opts.sideMargin, opts.maxWidth);
        longWord = true;
        break;
      }

      var previousLength;
      do {
        if (wordIndex === words.length) {
          return {
            height: opts.fullHeight - (opts.maxLines - line) * opts.lineHeight,
            width: width
          };
        }

        // Find number of letters in string
        previousLength = tspan.firstChild.data.length;
        // Add next word
        tspan.firstChild.data += " " + words[wordIndex];
        wordIndex++;
      } while (tspan.getComputedTextLength && tspan.getComputedTextLength() <= width - 2 * opts.sideMargin);

      // The last added word made the line too long, remove it
      tspan.firstChild.data = tspan.firstChild.data.slice(0, previousLength);
      wordIndex--;
    }

    if (longWord) {
      longWord = false;
    } else if (width < opts.maxWidth) {
      // Try again with a wider speech bubble
      width = Math.min(width * words.length / wordIndex, opts.maxWidth);
    } else {
      return {
        height: opts.fullHeight,
        width: width
      };
    }
  }
};

/**
 * Execute the code for all of the event handlers that match an event name
 * @param {string} name Name of the handler we want to call
 * @param {boolean} allowQueueExension When true, we allow additional cmds to
 *  be appended to the queue
 * @param {Array} extraArgs Additional arguments passed into the virtual JS
 *  machine for consumption by the student's event-handling code.
 */
function callHandler(name, allowQueueExtension) {
  var extraArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (level.autoArrowSteer) {
    var moveDir;
    switch (name) {
      case 'when-up':
        moveDir = Direction.NORTH;
        break;
      case 'when-down':
        moveDir = Direction.SOUTH;
        break;
      case 'when-left':
        moveDir = Direction.WEST;
        break;
      case 'when-right':
        moveDir = Direction.EAST;
        break;
    }
    if (moveDir) {
      Studio.queueCmd(null, 'move', {
        'spriteIndex': Studio.protagonistSpriteIndex || 0,
        'dir': moveDir
      });
    }
  }

  Studio.eventHandlers.forEach(function (handler) {
    if ((0, _StudioApp.singleton)().isUsingBlockly()) {
      // Note: we skip executing the code if we have not completed executing
      // the cmdQueue on this handler (checking for non-zero length)
      if (handler.name === name && (allowQueueExtension || 0 === handler.cmdQueue.length)) {
        Studio.currentCmdQueue = handler.cmdQueue;
        try {
          if (Studio.legacyRuntime) {
            handler.func.apply(handler, [_api2.default, Studio.Globals].concat(_toConsumableArray(extraArgs)));
          } else {
            handler.func.apply(handler, _toConsumableArray(extraArgs));
          }
        } catch (e) {
          // Do nothing
          console.error(e);
        }
        Studio.currentCmdQueue = null;
      }
    } else {
      // TODO (cpirich): support events with parameters
      if (handler.name === name) {
        handler.func.apply(null, extraArgs);
      }
    }
  });
}

Studio.initAutoHandlers = function (map) {
  for (var funcName in map) {
    var func = Studio.JSInterpreter.findGlobalFunction(funcName);
    var nativeFunc = _CustomMarshalingInterpreter2.default.createNativeFunctionFromInterpreterFunction(func);
    if (func) {
      registerEventHandler(Studio.eventHandlers, map[funcName], nativeFunc);
    }
  }
};

/**
 * Performs movement on a list of Projectiles or Items. Removes items from the
 * list automatically when they move out of bounds
 * @param {Item[]|Projectile[]} list
 */
function performItemOrProjectileMoves(list) {
  for (var i = list.length - 1; i >= 0; i--) {
    list[i].moveToNextPosition();
    if (list[i].outOfBounds()) {
      list[i].removeElement();
      list.splice(i, 1);
    }
  }
}

/**
 * Triggers display update on a list of Sprites, Projectiles, or Items - for
 * updating position and/or animation frames.
 * @param {Collidable[]} list
 */
function displayCollidables(list) {
  for (var i = list.length - 1; i >= 0; i--) {
    list[i].display();
  }
}

/**
 * Sort the draw order of sprites, explosions, items, and tiles so that items
 * higher on the screen are drawn before the ones in front, for a simple form of
 * z-sorting.
 */
function sortDrawOrder() {
  if (!skin.sortDrawOrder) {
    return;
  }

  var spriteLayer = document.getElementById('spriteLayer');

  var drawArray = [];
  var drawItem;

  // Add items.
  for (var i = 0; i < Studio.items.length; i++) {
    drawItem = {
      element: Studio.items[i].getElement(),
      y: Studio.items[i].y + Studio.items[i].height / 2 + Studio.items[i].renderOffset.y
    };
    drawArray.push(drawItem);

    Studio.drawDebugRect("itemLocation", Studio.items[i].x, Studio.items[i].y, 4, 4);
    Studio.drawDebugRect("itemBottom", Studio.items[i].x, drawItem.y, 4, 4);
  }

  // Add sprite elements (both legacy and normal) and explosions.
  for (i = 0; i < Studio.sprite.length; i++) {
    var sprite = Studio.sprite[i];
    var y = sprite.displayY + sprite.height;

    drawItem = {
      element: document.getElementById('explosion' + i),
      y: y
    };
    if (drawItem.element) {
      drawArray.push(drawItem);
    }

    drawItem = {
      element: sprite.getElement(),
      y: y
    };
    if (drawItem.element) {
      drawArray.push(drawItem);
    }

    drawItem = {
      element: sprite.getLegacyElement(),
      y: y
    };
    if (drawItem.element) {
      drawArray.push(drawItem);
    }

    Studio.drawDebugRect("spriteBottom", Studio.sprite[i].x, sprite.y, 4, 4);
  }

  // Add wall tiles.
  for (i = 0; i < Studio.tiles.length; i++) {
    drawArray.push({
      element: document.getElementById('tile_' + i),
      y: Studio.tiles[i].bottomY
    });
  }

  // Add goals.
  var goalHeight = skin.goalCollisionRectHeight || Studio.MARKER_HEIGHT;
  Studio.allGoals_().forEach(function (goal) {
    drawArray.push({
      element: goal.marker,
      y: goal.y + goalHeight
    });
  });

  // Now sort everything by y.
  drawArray = _lodash2.default.sortBy(drawArray, 'y');

  // Carefully place the elements back in the DOM starting at the end of the
  // spriteLayer and, one by one, insert them before the previous one
  // (this prevents flashing in Safari vs. an in-order appendChild() loop)
  var prevNode;
  for (i = drawArray.length - 1; i >= 0; i--) {
    if (prevNode) {
      spriteLayer.insertBefore(drawArray[i].element, prevNode);
    } else {
      spriteLayer.appendChild(drawArray[i].element);
    }
    prevNode = drawArray[i].element;
  }
}

/**
 * This is a little weird, but is effectively a way for us to call api code
 * (i.e. the methods in studio/api.js) so that we can essentially simulate
 * generated code. It does this by creating an event handler for the given name,
 * calling the handler - which results in func being executed to generate a
 * command queue - and then executing the command queue.
 */
Studio.callApiCode = function (name, func) {
  registerEventHandler(Studio.eventHandlers, name, func);
  // generate the cmdQueue
  callHandler(name);
  Studio.executeQueue(name);
};

Studio.onTick = function () {
  Studio.tickCount++;
  var i;

  Studio.clearDebugElements();

  if (Studio.tickCount === constants.CAPTURE_TICK_COUNT) {
    (0, _thumbnail.captureThumbnailFromSvg)(document.getElementById('svgStudio'));
  }

  var animationOnlyFrame = Studio.pauseInterpreter || 0 !== (Studio.tickCount - 1) % Studio.slowExecutionFactor;

  if (!animationOnlyFrame && Studio.yieldExecutionTicks > 0) {
    Studio.yieldExecutionTicks--;
  }

  if (Studio.customLogic) {
    Studio.customLogic.onTick();
  }

  if (Studio.tickCount === 1) {
    callHandler('whenGameStarts');
  }

  if (!animationOnlyFrame) {
    Studio.executeQueue('whenGameStarts');

    callHandler('repeatForever');
    Studio.executeQueue('repeatForever');

    for (i = 0; i < Studio.spriteCount; i++) {
      Studio.executeQueue('whenSpriteClicked-' + i);
    }

    // Run key event handlers for any keys that are down:
    for (var key in _constants2.KeyCodes) {
      if (Studio.keyState[_constants2.KeyCodes[key]] && Studio.keyState[_constants2.KeyCodes[key]] === "keydown") {
        switch (_constants2.KeyCodes[key]) {
          case _constants2.KeyCodes.LEFT:
            callHandler('when-left');
            break;
          case _constants2.KeyCodes.UP:
            callHandler('when-up');
            break;
          case _constants2.KeyCodes.RIGHT:
            callHandler('when-right');
            break;
          case _constants2.KeyCodes.DOWN:
            callHandler('when-down');
            break;
        }
      }
    }

    for (var btn in ArrowIds) {
      if (Studio.btnState[ArrowIds[btn]] && Studio.btnState[ArrowIds[btn]] === ButtonState.DOWN) {
        switch (ArrowIds[btn]) {
          case ArrowIds.LEFT:
            callHandler('when-left');
            break;
          case ArrowIds.UP:
            callHandler('when-up');
            break;
          case ArrowIds.RIGHT:
            callHandler('when-right');
            break;
          case ArrowIds.DOWN:
            callHandler('when-down');
            break;
        }
      }
    }

    for (var gesture in Studio.gesturesObserved) {
      switch (gesture) {
        case 'left':
          callHandler('when-left');
          break;
        case 'up':
          callHandler('when-up');
          break;
        case 'right':
          callHandler('when-right');
          break;
        case 'down':
          callHandler('when-down');
          break;
      }
      if (0 === Studio.gesturesObserved[gesture]--) {
        delete Studio.gesturesObserved[gesture];
      }
    }

    Studio.executeQueue('when-left');
    Studio.executeQueue('when-up');
    Studio.executeQueue('when-right');
    Studio.executeQueue('when-down');

    // Run any callbacks from blocks, including "ask" blocks and "if"
    // blocks
    for (var _i = 0; _i < Studio.callbackQueueIndex; _i++) {
      Studio.executeQueue('callbackQueue' + _i);
    }

    updateItems();

    checkForCollisions();
  }

  if (Studio.JSInterpreter && !animationOnlyFrame && Studio.yieldExecutionTicks === 0) {
    Studio.JSInterpreter.executeInterpreter(Studio.tickCount === 1);
  }

  var spritesNeedMoreAnimationFrames = false;

  for (i = 0; i < Studio.spriteCount; i++) {
    if (!animationOnlyFrame) {
      performQueuedMoves(i);
    }

    var sprite = Studio.sprite[i];

    // After 5 ticks of no movement, turn sprite forward.
    if (sprite.shouldFaceSouthOnIdle() && Studio.tickCount - sprite.lastMove > Studio.ticksBeforeFaceSouth) {
      sprite.setDirection(Direction.NONE);
      Studio.movementAudioOff();
    }

    // Display sprite:
    Studio.displaySprite(i);

    if (sprite.hasActions()) {
      spritesNeedMoreAnimationFrames = true;
    }

    Studio.drawDebugRect("spriteCenter", Studio.sprite[i].x, Studio.sprite[i].y, 5, 5);
  }

  // Animate goals
  Studio.animateGoals();

  // Animate clouds
  Studio.animateClouds();

  if (!animationOnlyFrame) {
    performItemOrProjectileMoves(Studio.projectiles);
    performItemOrProjectileMoves(Studio.items);
  }
  displayCollidables(Studio.sprite);
  displayCollidables(Studio.projectiles);
  displayCollidables(Studio.items);

  Studio.updateFloatingScore();

  Studio.drawTimeoutRect();

  sortDrawOrder();

  var currentTime = new Date().getTime();

  if (!Studio.succeededTime && checkFinished()) {
    Studio.succeededTime = currentTime;
  }

  if (!animationOnlyFrame) {
    Studio.executeQueue('whenTouchGoal');
  }

  if (Studio.succeededTime && !spritesNeedMoreAnimationFrames && (!level.delayCompletion || currentTime > Studio.succeededTime + level.delayCompletion)) {
    Studio.onPuzzleComplete();
  }

  // We want to make sure any queued event code related to all goals being visited is executed
  // before we evaluate conditions related to this event.  For example, if score is incremented
  // as a result of all goals being visited, recording allGoalsVisited here allows the score
  // to be incremented before we check for a completion condition that looks for both all
  // goals visited, and the incremented score, on the next tick.
  if (Studio.allGoalsVisited()) {
    Studio.trackedBehavior.allGoalsVisited = true;
  }

  // And we don't want a timeout to be used in evaluating conditions before the all goals visited
  // events are processed (as described above), so also record that here.  This is particularly
  // relevant to levels which "time out" immediately when all when_run code is complete.
  if (Studio.timedOut()) {
    Studio.trackedBehavior.timedOut = true;
  }
};

/**
 * Returns the distance between two sprites on the specified axis.
 * @param {number} i1 The index of the first sprite.
 * @param {number} i2 The index of the second sprite.
 * @param {boolean} Whether this is for the Y axis.  If false, then X axis.
 */
function spriteCollisionDistance(i1, i2, yAxis) {
  var sprite1Width = skin.spriteCollisionRectWidth || Studio.sprite[i1].width;
  var sprite1Height = skin.spriteCollisionRectHeight || Studio.sprite[i1].height;
  var sprite2Width = skin.spriteCollisionRectWidth || Studio.sprite[i2].width;
  var sprite2Height = skin.spriteCollisionRectHeight || Studio.sprite[i2].height;

  var dim1 = yAxis ? sprite1Height : sprite1Width;
  var dim2 = yAxis ? sprite2Height : sprite2Width;
  return constants.SPRITE_COLLIDE_DISTANCE_SCALING * (dim1 + dim2) / 2;
}

/**
 * Returns the distance between a sprite and a collidable on the specified axis.
 * @param {number} i1 The index of the sprite.
 * @param {number} i2 The index of the collidable.
 * @param {boolean} Whether this is for the Y axis.  If false, then X axis.
 */
function spriteCollidableCollisionDistance(iS, collidable, yAxis) {
  var spriteWidth = skin.spriteCollisionRectWidth || Studio.sprite[iS].width;
  var spriteHeight = skin.spriteCollisionRectHeight || Studio.sprite[iS].height;
  var collidableWidth = skin.itemCollisionRectWidth || collidable.width;
  var collidableHeight = skin.itemCollisionRectHeight || collidable.height;
  var dim1 = yAxis ? spriteHeight : spriteWidth;
  var dim2 = yAxis ? collidableHeight : collidableWidth;
  return constants.SPRITE_COLLIDE_DISTANCE_SCALING * (dim1 + dim2) / 2;
}

/**
 * Returns the distance between a collidable and an edge on the specified axis.
 * @param {number} i1 The index of the collidable.
 * @param {string} i2 The name of the edge.
 * @param {boolean} Whether this is for the Y axis.  If false, then X axis.
 */
function edgeCollidableCollisionDistance(collidable, edgeName, yAxis) {
  var dim1 = yAxis ? collidable.height : collidable.width;
  var dim2;
  if (edgeName === 'left' || edgeName === 'right') {
    dim2 = yAxis ? Studio.MAZE_HEIGHT : 0;
  } else {
    dim2 = yAxis ? 0 : Studio.MAZE_WIDTH;
  }
  return (dim1 + dim2) / 2;
}

/* Checks for collisions between an actor and a list of projectiles or items.
 * Calls startCollision/endCollision and handleCollision for className, but not
 * executeCollision, which is expected to be called afterwards by the caller.
 */
function handleActorCollisionsWithCollidableList(spriteIndex, xCenter, yCenter, list, autoDisappear) {
  var collidable, next, className, numItemsOfClass;
  var distanceScaling = constants.SPRITE_COLLIDE_DISTANCE_SCALING;

  // For collisions, only consider sprites/items that are not already fading out.
  var activeCollidables = list.filter(function (collidable) {
    return !(collidable.isFading && collidable.isFading());
  });

  // Traverse the list in reverse order because we may remove elements from the
  // list while inside the loop:
  for (var i = activeCollidables.length - 1; i >= 0; i--) {
    collidable = activeCollidables[i];
    next = collidable.getNextPosition();

    Studio.drawDebugRect("itemCollision", next.x, next.y, distanceScaling * (skin.itemCollisionRectWidth || collidable.width), distanceScaling * (skin.itemCollisionRectHeight || collidable.height));
    Studio.drawDebugRect("spriteCollision", xCenter, yCenter, distanceScaling * (skin.spriteCollisionRectWidth || Studio.sprite[spriteIndex].width), distanceScaling * (skin.spriteCollisionRectHeight || Studio.sprite[spriteIndex].height));

    if (collisionTest(xCenter, next.x, spriteCollidableCollisionDistance(spriteIndex, collidable, false), yCenter, next.y, spriteCollidableCollisionDistance(spriteIndex, collidable, true))) {
      if (collidable.startCollision(spriteIndex)) {
        Studio.currentEventParams = { eventObject: collidable };
        // Allow cmdQueue extension (pass true) since this handler
        // may be called for multiple collidables before executing the queue
        // below

        // NOTE: not using collideSpriteWith() because collision state is
        // tracked on the collidable in this case
        handleCollision(spriteIndex, collidable.className, true);
        Studio.currentEventParams = null;

        // Make the projectile/item disappear automatically if this parameter
        // is set:
        if (autoDisappear) {
          if (list === Studio.items) {
            // NOTE: we do this only for the Item list (not projectiles)

            // NOTE: if items are allowed to move outOfBounds(), this may never
            // be called because the last item may not be removed here.

            if (activeCollidables.length === 1) {
              callHandler('whenGetAllItems');
              Studio.trackedBehavior.gotAllItems = true;
            }

            className = collidable.className;
            numItemsOfClass = activeCollidables.reduce(function (sum, nextItem) {
              return sum + (className === nextItem.className ? 1 : 0);
            }, 0);

            if (numItemsOfClass === 1) {
              callHandler('whenGetAll-' + className);
            }
          }

          if (collidable.beginRemoveElement) {
            collidable.beginRemoveElement();
          } else {
            collidable.removeElement();
            list.splice(list.indexOf(collidable), 1);
          }
          activeCollidables.splice(i, 1);
        }
      }
    } else {
      collidable.endCollision(spriteIndex);
    }
  }
}

/* Checks for collisions between a collidable and all of the edges.
 * Calls startCollision and endCollision on the projectile. The caller
 * should pass in a function to handle the case when a new collision is
 * detected. executeCollision() is expected to be called later by the caller.
 */
function handleEdgeCollisions(collidable, xPos, yPos, onCollided) {
  for (var i = 0; i < EdgeClassNames.length && !Studio.allowSpritesOutsidePlayspace; i++) {
    var edgeXCenter, edgeYCenter;
    var edgeClass = EdgeClassNames[i];
    switch (edgeClass) {
      case 'top':
        edgeXCenter = Studio.MAZE_WIDTH / 2;
        edgeYCenter = 0;
        break;
      case 'left':
        edgeXCenter = 0;
        edgeYCenter = Studio.MAZE_HEIGHT / 2;
        break;
      case 'bottom':
        edgeXCenter = Studio.MAZE_WIDTH / 2;
        edgeYCenter = Studio.MAZE_HEIGHT;
        break;
      case 'right':
        edgeXCenter = Studio.MAZE_WIDTH;
        edgeYCenter = Studio.MAZE_HEIGHT / 2;
        break;
    }
    if (collisionTest(xPos, edgeXCenter, edgeCollidableCollisionDistance(collidable, edgeClass, false), yPos, edgeYCenter, edgeCollidableCollisionDistance(collidable, edgeClass, true))) {
      if (collidable.startCollision(edgeClass)) {
        onCollided(edgeClass);
      }
    } else {
      collidable.endCollision(edgeClass);
    }
  }
}

/* Create an edge collision handler callback for a specific spriteIndex
 */
function createActorEdgeCollisionHandler(spriteIndex) {
  return function (edgeClass) {
    handleCollision(spriteIndex, edgeClass);
  };
}

/* Check for collisions (note that we use the positions they are about
 * to attain with queued moves - this allows the moves to be canceled before
 * the actual movements take place)
 */
function checkForCollisions() {

  checkForItemCollisions();

  for (var i = 0; i < Studio.spriteCount; i++) {
    var sprite = Studio.sprite[i];
    var iHalfWidth = sprite.width / 2;
    var iHalfHeight = sprite.height / 2;
    var iPos = getNextPosition(i, false);
    var iXCenter = iPos.x + iHalfWidth;
    var iYCenter = iPos.y + iHalfHeight;
    for (var j = 0; j < Studio.spriteCount; j++) {
      if (i === j || !sprite.visible || !Studio.sprite[j].visible) {
        // If either sprite isn't visible, only finish queues that have already
        // started.
        executeCollision(i, j);
        continue;
      }
      var jPos = getNextPosition(j, false);
      var jXCenter = jPos.x + Studio.sprite[j].width / 2;
      var jYCenter = jPos.y + Studio.sprite[j].height / 2;
      if (collisionTest(iXCenter, jXCenter, spriteCollisionDistance(i, j, false), iYCenter, jYCenter, spriteCollisionDistance(i, j, true))) {
        Studio.collideSpriteWith(i, j);
      } else {
        sprite.endCollision(j);
      }
      executeCollision(i, j);
    }
    if (sprite.visible) {
      handleActorCollisionsWithCollidableList(i, iXCenter, iYCenter, Studio.projectiles);
      handleActorCollisionsWithCollidableList(i, iXCenter, iYCenter, Studio.items, level.removeItemsWhenActorCollides);

      handleEdgeCollisions(sprite, iXCenter, iYCenter, createActorEdgeCollisionHandler(i));

      if (Studio.wallMapCollisions) {
        if (Studio.willSpriteTouchWall(sprite, iPos.x, iPos.y)) {
          cancelQueuedMovements(i, false);
          cancelQueuedMovements(i, true);

          // Since we never overlap the wall/obstacle when blockMovingIntoWalls
          // is set, throttle the event so it doesn't fire every frame while
          // attempting to move into a wall:

          Studio.throttledCollideSpriteWithWallFunctions[i]();
        } else {
          sprite.endCollision('wall');
        }
      }
    }

    // Don't execute actor collision queue(s) until we've handled all
    // wall, projectile, item, and edge collisions. Not sure this is strictly
    // necessary, but it preserves behavior that student code may depend upon.
    executeCollision(i, 'wall');
    for (j = 0; j < EdgeClassNames.length; j++) {
      executeCollision(i, EdgeClassNames[j]);
    }
    for (j = 0; j < skin.ProjectileClassNames.length; j++) {
      executeCollision(i, skin.ProjectileClassNames[j]);
    }
    for (j = 0; j < skin.ItemClassNames.length; j++) {
      executeCollision(i, skin.ItemClassNames[j]);
      if (level.removeItemsWhenActorCollides) {
        Studio.executeQueue('whenGetAll-' + skin.ItemClassNames[j]);
      }
    }
    if (level.removeItemsWhenActorCollides) {
      Studio.executeQueue('whenGetAllItems');
    }
  }
}

/* Create an edge collision handler callback for a specific item
 */
function createItemEdgeCollisionHandler(item) {
  return function (edgeClass) {
    Studio.currentEventParams = { eventObject: item };
    // Allow cmdQueue extension (pass true) since this handler
    // may be called for multiple items before executing the queue
    // below
    handleItemCollision(item.className, edgeClass, true);
    Studio.currentEventParams = null;
  };
}

/* Calls each item's update function
 */
function updateItems() {
  // Traverse the list in reverse order because we may remove elements from the
  // list while inside the loop:
  for (var i = Studio.items.length - 1; i >= 0; i--) {
    var item = Studio.items[i];

    item.update();

    if (item.hasCompletedFade()) {
      item.removeElement();
      Studio.items.splice(i, 1);
    }
  }
  Studio.sprite.forEach(function (sprite) {
    sprite.update();
  });
}

function checkForItemCollisions() {
  for (var i = 0; i < Studio.items.length; i++) {
    var item = Studio.items[i];
    var next = item.getNextPosition();

    if (item.isFading && item.isFading()) {
      continue;
    }

    if (Studio.wallMapCollisions) {
      if (Studio.walls.willCollidableTouchWall(item, next.x, next.y)) {
        Studio.currentEventParams = { eventObject: item };
        // Allow cmdQueue extension (pass true) since this handler
        // may be called for multiple items before executing the queue
        // below
        Studio.collideItemWith(item, 'wall', true);
        Studio.currentEventParams = null;
      } else {
        item.endCollision('wall');
      }
    }

    if (!Studio.allowSpritesOutsidePlayspace) {
      handleEdgeCollisions(item, next.x, next.y, createItemEdgeCollisionHandler(item));
    }

    // After collisions have been handled for these items, now execute the
    // command queues for this item:
    executeItemCollision(item.className, 'wall');
    for (var j = 0; j < EdgeClassNames.length; j++) {
      executeItemCollision(item.className, EdgeClassNames[j]);
    }
  }
}

/**
 * Test to see if an actor sprite will be touching a wall given particular X/Y
 * position coordinates (top-left)
 */
Studio.willSpriteTouchWall = function (sprite, xPos, yPos) {
  var xCenter = xPos + sprite.width / 2;
  var yCenter = yPos + sprite.height / 2;
  return Studio.walls.willCollidableTouchWall(sprite, xCenter, yCenter);
};

/**
 * Test to see if an actor sprite will be beyond its given playspace boundaries
 * if it is moved to a given X/Y position.
 * @param {Sprite} sprite
 * @param {number} xPos
 * @param {number} yPos
 */
Studio.willSpriteLeavePlayspace = function (sprite, xPos, yPos) {
  var boundary = Studio.getPlayspaceBoundaries(sprite);
  return xPos < boundary.left || xPos > boundary.right || yPos < boundary.top || yPos > boundary.bottom;
};

/**
 * Get a wall value (either a SquareType.WALL value or a specific row/col tile
 * from a 16x16 grid shifted into bits 16-23).
 */

Studio.getWallValue = function (row, col) {
  if (row < 0 || row >= Studio.ROWS || col < 0 || col >= Studio.COLS) {
    return 0;
  }

  if (Studio.wallMap) {
    return skin[Studio.wallMap] ? skin[Studio.wallMap][row][col] << constants.WallCoordsShift : 0;
  } else {
    return Studio.map[row][col].getTileType() & constants.WallAnyMask;
  }
};

Studio.onSvgDrag = function (e) {
  if (Studio.tickCount > 0) {
    Studio.gesturesObserved[e.gesture.direction] = Math.round(e.gesture.distance / DRAG_DISTANCE_TO_MOVE_RATIO);
    e.gesture.preventDefault();
  }
};

Studio.onKey = function (e) {
  // Store the most recent event type per-key
  Studio.keyState[e.keyCode] = e.type;

  // If we are actively running our tick loop, suppress default event handling
  if (Studio.tickCount > 0 && e.keyCode >= _constants2.KeyCodes.LEFT && e.keyCode <= _constants2.KeyCodes.DOWN) {
    e.preventDefault();
  }
};

Studio.onArrowButtonDown = function (e, idBtn) {
  // Store the most recent event type per-button
  Studio.btnState[idBtn] = ButtonState.DOWN;
  e.preventDefault(); // Stop normal events so we see mouseup later.
};

Studio.onSpriteClicked = function (e, spriteIndex) {
  // If we are "running", call the event handler if registered.
  if (Studio.tickCount > 0) {
    callHandler('whenSpriteClicked-' + spriteIndex);
  }
  e.preventDefault(); // Stop normal events.
};

Studio.onSvgClicked = function (e) {
  if (level.tapSvgToRunAndReset && Studio.gameState === Studio.GameStates.WAITING) {
    Studio.runButtonClick();
  } else if (level.tapSvgToRunAndReset && Studio.gameState === Studio.GameStates.OVER) {
    (0, _StudioApp.singleton)().resetButtonClick();
  } else if (Studio.tickCount > 0) {
    // If we are "running", check the cmdQueues.
    // Check the first command in all of the cmdQueues to see if there is a
    // pending "wait for click" command
    Studio.eventHandlers.forEach(function (handler) {
      var cmd = handler.cmdQueue[0];

      if (cmd && cmd.opts.waitForClick && !cmd.opts.complete) {
        if (cmd.opts.waitCallback) {
          cmd.opts.waitCallback();
        }
        cmd.opts.complete = true;
      }
    });
  }
  e.preventDefault(); // Stop normal events.
};

Studio.onArrowButtonUp = function (e, idBtn) {
  // Store the most recent event type per-button
  Studio.btnState[idBtn] = ButtonState.UP;
};

Studio.onMouseUp = function (e) {
  // Reset btnState on mouse up
  Studio.btnState = {};
};

Studio.initSprites = function () {
  Studio.spriteCount = 0;
  Studio.sprite = [];
  Studio.startTime = null;

  Studio.spriteGoals_ = [];

  var spriteOverrides = {};

  // Locate the start and finish positions.
  for (var row = 0; row < Studio.ROWS; row++) {
    for (var col = 0; col < Studio.COLS; col++) {
      if (Studio.map[row][col].getTileType() & SquareType.SPRITEFINISH) {
        Studio.spriteGoals_.push({ x: col * Studio.SQUARE_SIZE,
          y: row * Studio.SQUARE_SIZE,
          finished: false });
      } else if (Studio.map[row][col].getTileType() & SquareType.SPRITESTART) {
        var cell = Studio.map[row][col].serialize();
        if (0 === Studio.spriteCount) {
          Studio.spriteStart_ = [];
        }
        if (cell.sprite !== undefined) {
          var adjustedSprite = cell.sprite - (level.firstSpriteIndex || 0);
          if (adjustedSprite < 0) {
            adjustedSprite += Studio.startAvatars.length;
          }
          spriteOverrides[Studio.spriteCount] = Studio.startAvatars[adjustedSprite];
        }
        Studio.spriteStart_[Studio.spriteCount] = Object.assign({}, cell, {
          x: col * Studio.SQUARE_SIZE,
          y: row * Studio.SQUARE_SIZE
        });
        Studio.spriteCount++;
      }
    }
  }

  Object.assign(Studio.startAvatars, spriteOverrides);

  if ((0, _StudioApp.singleton)().isUsingBlockly()) {
    // Update the sprite count in the blocks:
    _blocks2.default.setSpriteCount(Blockly, Studio.spriteCount);
    _blocks2.default.setStartAvatars(Studio.startAvatars);

    if (level.projectileCollisions) {
      _blocks2.default.enableProjectileCollisions(Blockly);
    }
  }
};

/**
 * Initialize Blockly and Studio for read-only (blocks feedback).
 * Called on iframe load for read-only.
 */
Studio.initReadonly = function (config) {
  // Do some minimal level loading and sprite initialization so that
  // we can ensure that the blocks are appropriately modified for this level
  skin = config.skin;
  level = config.level;

  // Initialize paramLists with skin and level data:
  _paramLists2.default.initWithSkinAndLevel(skin, level);

  Studio.loadLevel();

  config.appMsg = _locale4.default;

  Studio.initSprites();

  (0, _StudioApp.singleton)().initReadonly(config);
};

/**
 * Initialize Blockly and the Studio app.  Called on page load.
 */
Studio.init = function (config) {
  // replace studioApp() methods with our own
  (0, _StudioApp.singleton)().reset = this.reset.bind(this);
  (0, _StudioApp.singleton)().runButtonClick = this.runButtonClick.bind(this);

  // Set focus on the run button so key events can be handled
  // right from the start without requiring the user to adjust focus.
  // (Required for IE11 at least, and takes focus away from text mode editor
  // in droplet.)
  (0, _jquery2.default)(window).on('run_button_pressed', function () {
    document.getElementById('runButton').focus();
  });

  Studio.projectiles = [];
  Studio.items = [];
  Studio.itemSpeed = {};
  Studio.itemActivity = {};
  Studio.eventHandlers = [];
  Studio.perExecutionTimeouts = [];
  Studio.tickIntervalId = null;
  Studio.tiles = [];
  Studio.tilesDrawn = false;

  Studio.spriteGoals_ = [];
  Studio.dynamicSpriteGoals_ = [];

  Studio.cloudStep = 0;

  Studio.clearEventHandlersKillTickLoop();
  skin = config.skin;
  level = config.level;

  consoleLogger = new _JsInterpreterLogger2.default(window.console);
  // Set up an error handler for student errors and warnings
  // in JavaScript/Droplet mode.
  (0, _javascriptMode.injectErrorHandler)(new _JavaScriptModeErrorHandler2.default(function () {
    return Studio.JSInterpreter;
  }, consoleLogger));

  // Allow any studioMsg string to be re-mapped on a per-level basis:
  for (var prop in level.msgStringOverrides) {
    _locale4.default[prop] = _locale4.default[level.msgStringOverrides[prop]];
  }

  // Initialize paramLists with skin and level data:
  _paramLists2.default.initWithSkinAndLevel(skin, level);

  // In our Algebra course, we want to gray out undeletable blocks. I'm not sure
  // whether or not that's desired in our other courses.
  var isAlgebraLevel = !!level.useContractEditor;
  config.grayOutUndeletableBlocks = isAlgebraLevel;

  Studio.loadLevel();

  Studio.background = getDefaultBackgroundName();

  if (Studio.customLogic) {
    // We don't want icons in instructions for our custom logic base games
    skin.staticAvatar = null;
    skin.smallStaticAvatar = null;
    skin.failureAvatar = null;
    skin.winAvatar = null;
  }

  window.addEventListener("keydown", Studio.onKey, false);
  window.addEventListener("keyup", Studio.onKey, false);

  var levelTracks = [];
  if (level.music && skin.musicMetadata) {
    levelTracks = skin.musicMetadata.filter(function (trackMetadata) {
      return level.music.indexOf(trackMetadata.name) !== -1;
    });
  }

  Studio.makeThrottledPlaySound();

  /**
   * Helper that handles music loading/playing/crossfading for the level.
   * @type {MusicController}
   */
  Studio.musicController = new _MusicController2.default(_Sounds2.default.getSingleton(), skin.assetUrl, levelTracks);

  /**
   * Defines the set of possible movement sound effects for each playlab actor.
   * Populated just-in-time by setSprite to avoid preparing audio for actors
   * we never use.
   * @type {Object}
   */
  Studio.movementAudioEffects = {};

  config.loadAudio = function () {
    var soundFileNames = [];
    // We want to load the built-in sounds in the skin
    soundFileNames.push.apply(soundFileNames, skin.builtinSounds);
    // We also want to load the student accessible list of effects available in the skin
    soundFileNames.push.apply(soundFileNames, skin.sounds);
    // We also want to load the movement sounds used in hoc2015
    soundFileNames.push.apply(soundFileNames, Studio.getMovementSoundFileNames(skin));
    // No need to load anything twice, so de-dupe our list.
    soundFileNames = _lodash2.default.uniq(soundFileNames);

    skin.soundFiles = {};
    soundFileNames.forEach(function (sound) {
      sound = sound.toLowerCase();
      skin.soundFiles[sound] = [skin.assetUrl(sound + '.mp3'), skin.assetUrl(sound + '.ogg')];
      (0, _StudioApp.singleton)().loadAudio(skin.soundFiles[sound], sound);
    });

    // Handle music separately - the music controller does its own preloading.
    Studio.musicController.preload();
  };

  // Add a post-video hook to start the background music, if available.
  config.level.afterVideoBeforeInstructionsFn = function (showInstructions) {
    _Sounds2.default.getSingleton().whenAudioUnlocked(function () {
      return Studio.musicController.play();
    });
    showInstructions();
  };

  config.afterInject = function () {
    // Connect up arrow button event handlers
    for (var btn in ArrowIds) {
      _dom2.default.addMouseUpTouchEvent(document.getElementById(ArrowIds[btn]), delegate(this, Studio.onArrowButtonUp, ArrowIds[btn]));
      _dom2.default.addMouseDownTouchEvent(document.getElementById(ArrowIds[btn]), delegate(this, Studio.onArrowButtonDown, ArrowIds[btn]));
    }
    document.addEventListener('mouseup', Studio.onMouseUp, false);

    if ((0, _StudioApp.singleton)().isUsingBlockly()) {
      /**
       * The richness of block colours, regardless of the hue.
       * MOOC blocks should be brighter (target audience is younger).
       * Must be in the range of 0 (inclusive) to 1 (exclusive).
       * Blockly's default is 0.45.
       */
      Blockly.HSV_SATURATION = 0.6;

      Blockly.SNAP_RADIUS *= Studio.scale.snapRadius;

      if (Blockly.contractEditor) {
        Blockly.contractEditor.registerTestHandler(Studio.getStudioExampleFailure);
      }
    }

    drawMap();
  };

  config.afterClearPuzzle = function () {
    (0, _StudioApp.singleton)().resetButtonClick();
  };

  // Since we allow "show code" for some blockly levels with move blocks,
  // we supply a polishCodeHook function here to make the generated code look
  // more readable:
  config.polishCodeHook = function (code) {
    if ((0, _StudioApp.singleton)().isUsingBlockly()) {
      var regexpMoveUpBlock = /Studio.move\('\S*', 0, 1\);/g;
      code = code.replace(regexpMoveUpBlock, "moveUp();");
      var regexpMoveRightBlock = /Studio.move\('\S*', 0, 2\);/g;
      code = code.replace(regexpMoveRightBlock, "moveRight();");
      var regexpMoveDownBlock = /Studio.move\('\S*', 0, 4\);/g;
      code = code.replace(regexpMoveDownBlock, "moveDown();");
      var regexpMoveLeftBlock = /Studio.move\('\S*', 0, 8\);/g;
      code = code.replace(regexpMoveLeftBlock, "moveLeft();");
    }
    return code;
  };

  if (_project2.default.getStandaloneApp() === 'playlab') {
    // Only apply special remixing to vanilla playlab
    config.prepareForRemix = Studio.prepareForRemix;
  }

  config.twitter = skin.twitterOptions || twitterOptions;

  // for this app, show make your own button if on share page
  config.makeYourOwn = config.share;

  config.makeString = _locale4.default.makeYourOwn();
  config.makeUrl = "http://code.org/studio";
  config.makeImage = (0, _StudioApp.singleton)().assetUrl('media/promo.png');

  // Disable "show code" button in feedback dialog and workspace if blockly,
  // unless the level specifically requests it
  config.enableShowCode = (0, _StudioApp.singleton)().editCode ? true : utils.valueOr(level.enableShowCode, false);
  config.varsInGlobals = true;
  config.dropletConfig = _dropletConfig2.default;
  config.dropIntoAceAtLineStart = true;
  config.showDropdownInPalette = true;
  config.unusedConfig = [];
  for (prop in skin.AutohandlerTouchItems) {
    AUTO_HANDLER_MAP[prop] = 'whenSpriteCollided-' + (Studio.protagonistSpriteIndex || 0) + '-' + skin.AutohandlerTouchItems[prop];
  }
  for (prop in skin.AutohandlerGetAllItems) {
    AUTO_HANDLER_MAP[prop] = 'whenGetAll-' + skin.AutohandlerGetAllItems[prop];
  }
  for (prop in level.autohandlerOverrides) {
    AUTO_HANDLER_MAP[prop] = level.autohandlerOverrides[prop];
  }
  for (var handlerName in AUTO_HANDLER_MAP) {
    config.unusedConfig.push(handlerName);
  }

  config.appMsg = _locale4.default;

  Studio.initSprites();

  Studio.makeThrottledSpriteWallCollisionHelpers();

  var onMount = function onMount() {
    (0, _StudioApp.singleton)().init(config);

    var finishButton = document.getElementById('finishButton');
    if (finishButton) {
      _dom2.default.addClickTouchEvent(finishButton, Studio.onPuzzleComplete);
    }

    // pre-load images asynchronously
    // (to reduce the likelihood that there is a delay when images
    //  are changed at runtime)
    if (config.skin.preloadAssets) {
      preloadActorImages();
      preloadProjectileAndItemImages();
      preloadBackgroundImages();
    }
  };

  // Override Page constants
  var appSpecificConstants = {
    hideCoordinateOverlay: !level.toolbox || !level.toolbox.match(/studio_setSpriteXY/)
  };

  if (config.embed && config.level.markdownInstructions && !config.level.instructions) {
    // if we are an embedded level with markdown instructions but no regular
    // instructions, we want to display CSP-style instructions and not be
    // centered
    config.noInstructionsWhenCollapsed = true;
    config.centerEmbedded = false;
  }

  // for hoc2015x, we only have permission to show the Rey avatar for approved
  // scripts. For all others, we override the avatars with an empty image
  if (config.skin.avatarAllowedScripts && !config.skin.avatarAllowedScripts.includes(config.scriptName)) {
    appSpecificConstants.smallStaticAvatar = config.skin.blankAvatar;
    appSpecificConstants.failureAvatar = config.skin.blankAvatar;
  }
  (0, _StudioApp.singleton)().setPageConstants(config, appSpecificConstants);

  var visualizationColumn = _react2.default.createElement(_StudioVisualizationColumn2.default, {
    finishButton: !level.isProjectLevel
  });

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: (0, _redux.getStore)() },
    _react2.default.createElement(_AppView2.default, {
      visualizationColumn: visualizationColumn,
      onMount: onMount
    })
  ), document.getElementById(config.containerId));
};

Studio.prepareForRemix = function () {
  if (!level.initializationBlocks && REMIX_PROPS.every(function (group) {
    return Object.keys(group.defaultValues).every(function (prop) {
      return level[prop] === undefined || level[prop] === group.defaultValues[prop];
    });
  })) {
    // Do nothing if all the props match the defaults
    return Promise.resolve();
  }

  var blocksDom = Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace);
  var blocksDocument = blocksDom.ownerDocument;

  var whenRun = blocksDom.querySelector('block[type="when_run"]');
  if (!whenRun) {
    whenRun = blocksDocument.createElement('block');
    whenRun.setAttribute('type', 'when_run');
    blocksDom.appendChild(whenRun);
  }
  var next = whenRun.querySelector('next');
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
    for (var _iterator = REMIX_PROPS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var group = _step.value;

      var customized = false;
      var blockArgs = {};
      for (var prop in group.defaultValues) {
        var value = level[prop];
        if (value !== undefined && value !== group.defaultValues[prop]) {
          customized = true;
          blockArgs[prop] = value;
        } else {
          blockArgs[prop] = group.defaultValues[prop];
        }
      }
      if (!customized) {
        continue;
      }
      var newBlocks = group.generateBlocks(blockArgs);
      // insertBeforeNext adds blocks to the top, just below when_run. Insert the
      // blocks in reverse order so that they stay in the same order as newBlocks
      for (var _i2 = newBlocks.length - 1; _i2 >= 0; _i2--) {
        insertBeforeNext(newBlocks[_i2]);
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

  if (level.initializationBlocks) {
    var root = (0, _xml.parseElement)(level.initializationBlocks);
    var topNodes = root.childNodes;
    for (var i = topNodes.length - 1; i >= 0; i--) {
      var topBlock = topNodes[i];
      if (topBlock.getAttribute && topBlock.getAttribute('type') === 'when_run') {
        var lastBlock = topBlock;
        var firstBlock = null;
        var foundNextBlock = true;
        while (foundNextBlock) {
          foundNextBlock = false;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = lastBlock.childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var block = _step2.value;

              if (block.tagName && block.tagName.toLowerCase() === 'next') {
                for (var j = 0; j < block.childNodes.length; j++) {
                  var childBlock = block.childNodes[j];
                  if (childBlock.tagName && childBlock.tagName.toLowerCase() === 'block') {
                    lastBlock = childBlock;
                    break;
                  }
                }
                foundNextBlock = true;
                if (firstBlock === null) {
                  firstBlock = lastBlock;
                }
                break;
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
        }
        if (lastBlock === topBlock) {
          continue;
        }
        lastBlock.appendChild(next);
        var newNext = blocksDocument.createElement('next');
        newNext.appendChild(firstBlock);
        next = newNext;
      } else {
        root.removeChild(topBlock);
        blocksDom.appendChild(topBlock);
      }
    }
  }

  whenRun.appendChild(next);
  (0, _block_utils.cleanBlocks)(blocksDom);

  Blockly.mainBlockSpace.clear();
  Blockly.Xml.domToBlockSpace(Blockly.mainBlockSpace, blocksDom);
  return Promise.resolve();
};

/**
 * Get a flattened list of all the sound file names (sans extensions)
 * specified in the skin for avatar movement (these may be omitted from the
 * skin.sounds list because we don't want them accessible to the player).
 * @param {Object} level skin from which to extract sound effect names.
 * @returns {string[]} which may contain duplicates but will not have any
 *          undefined entries.
 */
Studio.getMovementSoundFileNames = function (fromSkin) {
  var avatarList = fromSkin.avatarList || [];
  return avatarList.map(function (avatarName) {
    var movementAudio = fromSkin[avatarName].movementAudio || [];
    return movementAudio.reduce(function (memo, nextOption) {
      return memo.concat([nextOption.begin, nextOption.loop, nextOption.end]);
    }, []);
  }).reduce(function (memo, next) {
    return memo.concat(next);
  }, []).filter(function (fileName) {
    return fileName !== undefined;
  });
};

var preloadImage = function preloadImage(url) {
  if (url) {
    var img = new Image();
    img.src = url;
  }
};

var preloadBackgroundImages = function preloadBackgroundImages() {
  var imageChoices = skin.backgroundChoicesK1;
  for (var i = 0; i < imageChoices.length; i++) {
    preloadImage(imageChoices[i][0]);
  }
};

var preloadProjectileAndItemImages = function preloadProjectileAndItemImages() {
  for (var i = 0; i < skin.ProjectileClassNames.length; i++) {
    preloadImage(skin[skin.ProjectileClassNames[i]]);
  }
  for (i = 0; i < skin.ItemClassNames.length; i++) {
    preloadImage(skin[skin.ItemClassNames[i]]);
  }
};

var preloadActorImages = function preloadActorImages() {
  for (var i = 0; i < skin.avatarList.length; i++) {
    preloadImage(skin[skin.avatarList[i]].sprite);
    preloadImage(skin[skin.avatarList[i]].walk);
  }
};

/**
 * Clean up a list of Items or Projectiles.
 */
function resetItemOrProjectileList(list) {
  for (var i = 0; i < list.length; i++) {
    list[i].removeElement();
  }
  // Set length because list = [] will not modify array passed in by reference
  list.length = 0;
}

/**
 * Clear the event handlers and stop the onTick timer.
 */
Studio.clearEventHandlersKillTickLoop = function () {
  // Check the first command in all of the cmdQueues and clear the timeout
  // if there is a pending wait command
  Studio.eventHandlers.forEach(function (handler) {
    var cmd = handler.cmdQueue[0];

    if (cmd && cmd.opts && cmd.opts.waitTimeout && !cmd.opts.complete) {
      // Note: not calling waitCallback() or setting complete = true
      window.clearTimeout(cmd.opts.waitTimeout);
    }
  });
  Studio.eventHandlers = [];
  Studio.perExecutionTimeouts.forEach(function (timeout) {
    clearTimeout(timeout);
  });
  Studio.pauseExecution();
  Studio.perExecutionTimeouts = [];
  Studio.tickCount = 0;
  Studio.callbackQueueIndex = 0;
  for (var i = 0; i < Studio.spriteCount; i++) {
    if (Studio.sprite[i] && Studio.sprite[i].bubbleTimeout) {
      window.clearTimeout(Studio.sprite[i].bubbleTimeout);
    }
  }
};

/**
 * Return the name (can be dereferenced as skin[name]) of the default background
 * (1st priority is to force to grid if specified by the level, the 2nd priority
 * is to honor the level-specific background value, the 3rd priority is to
 * fall back to the skin's value, which is also used for the blockly block).
 */
function getDefaultBackgroundName() {
  return level.coordinateGridBackground ? 'grid' : level.background || skin.defaultBackground;
}

function getDefaultMapName() {
  return Studio.wallMapCollisions ? level.wallMap : undefined;
}

/**
 * Reset the app to the start position and kill any pending animation tasks.
 * @param {boolean} first True if an opening animation is to be played.
 */
Studio.reset = function (first) {
  var i;
  Studio.clearEventHandlersKillTickLoop();
  Studio.hideInputPrompt();
  Studio.gameState = Studio.GameStates.WAITING;

  resetItemOrProjectileList(Studio.projectiles);
  resetItemOrProjectileList(Studio.items);

  var svg = document.getElementById('svgStudio');

  if (Studio.customLogic) {
    Studio.customLogic.reset();
  }

  // Soft buttons
  var softButtonCount = 0;
  for (i = 0; i < Studio.softButtons_.length; i++) {
    document.getElementById(Studio.softButtons_[i]).style.display = 'inline';
    softButtonCount++;
  }
  if (softButtonCount) {
    (0, _jquery2.default)('#soft-buttons').removeClass('soft-buttons-none').addClass('soft-buttons-' + softButtonCount);
  }

  // True if we should fail before execution, even if freeplay
  Studio.preExecutionFailure = false;
  Studio.message = null;
  Studio.pauseInterpreter = false;

  // True if we have set testResults using level progressConditions
  Studio.progressConditionTestResult = false;

  // Reset the score and title screen.
  Studio.playerScore = 0;
  Studio.scoreText = null;
  Studio.victoryText = '';
  document.getElementById('score').setAttribute('visibility', 'hidden');
  document.getElementById('victoryText').setAttribute('visibility', 'hidden');
  if (_dom2.default.isMobile() || _dom2.default.isWindowsTouch()) {
    var resetTextA = document.getElementById('resetTextA');
    var resetTextB = document.getElementById('resetTextB');
    if (level.tapSvgToRunAndReset) {
      resetTextA.textContent = _locale4.default.tapToPlay();
      resetTextB.textContent = _locale4.default.swipeToMove();
      resetTextA.setAttribute('visibility', 'visible');
      resetTextB.setAttribute('visibility', 'visible');
      (0, _jquery2.default)('#overlayGroup *').attr('visibility', 'visible');
    } else {
      resetTextA.setAttribute('visibility', 'hidden');
      resetTextB.setAttribute('visibility', 'hidden');
      (0, _jquery2.default)('#overlayGroup *').attr('visibility', 'hidden');
    }
  } else {
    var resetText = document.getElementById('resetText');
    if (level.tapSvgToRunAndReset) {
      resetText.textContent = _locale4.default.tapOrClickToPlay();
      resetText.setAttribute('visibility', 'visible');
    } else {
      resetText.setAttribute('visibility', 'hidden');
    }
  }
  if (level.floatingScore) {
    document.getElementById('floatingScore').setAttribute('visibility', 'hidden');
  }
  document.getElementById('titleScreenTitle').setAttribute('visibility', 'hidden');
  document.getElementById('titleScreenTextGroup').setAttribute('visibility', 'hidden');

  // Reset configurable variables
  Studio.background = null;
  Studio.wallMap = null;
  Studio.wallMapRequested = null;
  Studio.walls.setWallMapRequested(null);
  Studio.setBackground({ value: getDefaultBackgroundName() });
  var wallOverlay = document.getElementById('wallOverlay');
  if (wallOverlay) {
    wallOverlay.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '');
  }

  // Reset currentCmdQueue and various counts:
  Studio.gesturesObserved = {};
  Studio.currentCmdQueue = null;
  // Number of things that have been said.  Used to validate level completion.
  Studio.sayComplete = 0;
  Studio.playSoundCount = 0;

  // More things used to validate level completion.
  Studio.trackedBehavior = {
    removedItemCount: 0,
    touchedHazardCount: 0,
    setActivityRecord: null,
    hasSetSprite: false,
    hasSetDroidSpeed: false,
    hasSetBackground: false,
    hasSetMap: false,
    hasAddedItem: false,
    hasWonGame: false,
    hasLostGame: false,
    allGoalsVisited: false,
    timedOut: false,
    gotAllItems: false,
    removedItems: {},
    createdItems: {},
    hasSetEmotion: false,
    hasThrownProjectile: false
  };

  // Reset goal successState:
  if (level.goal) {
    level.goal.successState = {};
  }

  // Reset the Globals object used to contain program variables:
  Studio.Globals = {};

  if (consoleLogger) {
    consoleLogger.detach();
  }

  // Reset execution state:
  Studio.yieldExecutionTicks = 0;
  if ((0, _StudioApp.singleton)().editCode) {
    Studio.executionError = null;
    if (Studio.JSInterpreter) {
      Studio.JSInterpreter.deinitialize();
      Studio.JSInterpreter = null;
    }
  }

  var renderOffset = {
    x: 0,
    y: 0
  };
  if (skin.gridAlignedMovement) {
    renderOffset.x = skin.gridSpriteRenderOffsetX || 0;
    renderOffset.y = skin.gridSpriteRenderOffsetY || 0;
  }
  // Move sprites into position.
  for (i = 0; i < Studio.spriteCount; i++) {
    if (Studio.sprite[i]) {
      Studio.sprite[i].removeElement();
    }
    var spriteStart = Studio.spriteStart_[i];
    Studio.sprite[i] = new _Sprite2.default({
      x: spriteStart.x,
      y: spriteStart.y,
      displayX: spriteStart.x,
      displayY: spriteStart.y,
      loop: true,
      speed: spriteStart.speed || constants.DEFAULT_SPRITE_SPEED,
      size: spriteStart.size || constants.DEFAULT_SPRITE_SIZE,
      dir: spriteStart.direction || Direction.NONE,
      displayDir: spriteStart.direction || Direction.NONE,
      emotion: spriteStart.emotion || level.defaultEmotion || Emotions.NORMAL,
      renderOffset: renderOffset,
      // tickCount of last time sprite moved,
      lastMove: Infinity,
      // overridden as soon as we call setSprite
      visible: !level.spritesHiddenToStart
    });
    Studio.lastMoveSingleDir = spriteStart.direction;

    var sprite = i % Studio.startAvatars.length;

    var opts = {
      spriteIndex: i,
      value: Studio.startAvatars[sprite],
      forceHidden: level.spritesHiddenToStart
    };
    Studio.setSprite(opts);
    Studio.displaySprite(i);
    document.getElementById('speechBubble' + i).setAttribute('visibility', 'hidden');

    Studio.sprite[i].setOpacity(1);

    var explosion = document.getElementById('explosion' + i);
    if (explosion) {
      explosion.setAttribute('visibility', 'hidden');
    }
  }

  Studio.itemSpeed = {};
  for (var className in skin.specialItemProperties) {
    Studio.itemSpeed[className] = skin.specialItemProperties[className].speed;
  }
  Studio.itemActivity = {};
  for (className in skin.specialItemProperties) {
    Studio.itemActivity[className] = skin.specialItemProperties[className].activity;
  }
  // Create Items that are specified on the map:
  Studio.createLevelItems(svg);

  // Now that sprites are in place, we can set up a map, which might move
  // sprites around.
  var defaultMap = getDefaultMapName();
  if (defaultMap) {
    Studio.setMap({ value: getDefaultMapName() });
  }

  // Setting up walls might have moved the sprites, so draw them once more.
  for (i = 0; i < Studio.spriteCount; i++) {
    Studio.displaySprite(i);
  }
  this.resetGoalSprites();
  sortDrawOrder();

  // A little flag for script-based code to consume.
  Studio.levelRestarted = true;

  // Reset whether level has succeeded.
  Studio.succeededTime = null;

  // Stop any current movement sounds
  Studio.movementAudioOff();
};

/**
 * Move all goal sprites to their original positions, and reset their completion
 * state, both visual and logical.
 */
Studio.resetGoalSprites = function () {
  Studio.touchAllGoalsEventFired = false;

  var goalOverride = utils.valueOr(level.goalOverride, {});
  var offsetX = utils.valueOr(goalOverride.goalRenderOffsetX, utils.valueOr(skin.goalRenderOffsetX, 0));
  var offsetY = utils.valueOr(goalOverride.goalRenderOffsetY, utils.valueOr(skin.goalRenderOffsetY, 0));

  var goal, i;

  for (i = 0; i < Studio.spriteGoals_.length; i++) {
    goal = Studio.spriteGoals_[i];

    // Mark each finish as incomplete.
    goal.finished = false;
    goal.startFadeTime = null;

    // Move the finish icons into position.
    goal.marker.setAttribute('x', goal.x + offsetX);
    goal.marker.setAttribute('y', goal.y + offsetY);
    goal.marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', Studio.getGoalAssetFromSkin());
    goal.marker.setAttribute('opacity', 1);
    goal.clipRect.setAttribute('x', goal.x + offsetX);
    goal.clipRect.setAttribute('y', goal.y + offsetY);
  }

  for (i = 0; i < Studio.dynamicSpriteGoals_.length; i++) {
    goal = Studio.dynamicSpriteGoals_[i];
    goal.marker.parentNode.removeChild(goal.marker);
    goal.clipPath.parentNode.removeChild(goal.clipPath);
  }
  Studio.dynamicSpriteGoals_ = [];
};

/** @returns {string} URL of the asset to use for goal objects */
Studio.getGoalAssetFromSkin = function () {
  var goalAsset = skin.goal;
  if (level.goalOverride) {
    if (level.goalOverride.goalAnimation) {
      goalAsset = skin[level.goalOverride.goalAnimation];
    } else if (level.goalOverride.goalImage) {
      goalAsset = skin[level.goalOverride.goalImage];
    }
  }
  return goalAsset;
};

/**
 * Runs test of a given example
 * @param exampleBlock
 * @returns {string} string to display after example execution
 */
Studio.getStudioExampleFailure = function (exampleBlock) {
  try {
    var actualBlock = exampleBlock.getInputTargetBlock("ACTUAL");
    var expectedBlock = exampleBlock.getInputTargetBlock("EXPECTED");

    (0, _StudioApp.singleton)().feedback_.throwOnInvalidExampleBlocks(actualBlock, expectedBlock);

    var defCode = Blockly.Generator.blockSpaceToCode('JavaScript', ['functional_definition']);
    var exampleCode = Blockly.Generator.blocksToCode('JavaScript', [exampleBlock]);
    if (exampleCode) {
      var resultBoolean = _CustomMarshalingInterpreter2.default.evalWith(defCode + '; return' + exampleCode, {
        Studio: _api2.default,
        Globals: Studio.Globals
      }, { legacy: true });
      return resultBoolean ? null : "Does not match definition.";
    } else {
      return "No example code.";
    }
  } catch (error) {
    return "Execution error: " + error.message;
  }
};

/**
 * Click the run button.  Start the program.
 */
// XXX This is the only method used by the templates!
Studio.runButtonClick = function () {
  if (level.edit_blocks) {
    Studio.onPuzzleComplete();
  }
  var runButton = document.getElementById('runButton');
  var resetButton = document.getElementById('resetButton');
  // Ensure that Reset button is at least as wide as Run button.
  if (!resetButton.style.minWidth) {
    resetButton.style.minWidth = runButton.offsetWidth + 'px';
  }
  (0, _StudioApp.singleton)().toggleRunReset('reset');
  if ((0, _StudioApp.singleton)().isUsingBlockly()) {
    Blockly.mainBlockSpace.traceOn(true);
  }

  // Stop the music the first time the run button is pressed (hoc2015)
  Studio.musicController.fadeOut();
  // Remove goal filter effects the first time the run button is pressed
  Studio.removeGoalEffect();

  (0, _StudioApp.singleton)().reset(false);
  (0, _StudioApp.singleton)().attempts++;
  Studio.startTime = new Date();
  Studio.execute();
  Studio.gameState = Studio.GameStates.ACTIVE;

  if (level.freePlay && !level.isProjectLevel && (!(0, _StudioApp.singleton)().hideSource || level.showFinish)) {
    var shareCell = document.getElementById('share-cell');
    if (shareCell.className !== 'share-cell-enabled') {
      shareCell.className = 'share-cell-enabled';
      (0, _StudioApp.singleton)().onResize();

      // Fire a custom event on the document so that other code can respond
      // to the finish button being shown.
      var event = document.createEvent('Event');
      event.initEvent('finishButtonShown', true, true);
      document.dispatchEvent(event);
    }
  }

  if (level.showZeroScore) {
    Studio.displayScore();
  }
};

/**
 * App specific displayFeedback function that calls into
 * studioApp().displayFeedback when appropriate
 */
Studio.displayFeedback = function () {
  var tryAgainText;
  // For free play, show keep playing, unless it's a big game level
  if ((level.freePlay || Studio.testResults >= _constants2.TestResults.MINIMUM_OPTIMAL_RESULT) && !(Studio.customLogic instanceof _bigGameLogic2.default)) {
    tryAgainText = _locale2.default.keepPlaying();
  } else {
    tryAgainText = _locale2.default.tryAgain();
  }

  // Let the level override feedback dialog strings.
  var stringFunctions = Object.assign({
    continueText: level.freePlay ? _locale2.default.nextPuzzle : function () {},
    reinfFeedbackMsg: _locale4.default.reinfFeedbackMsg,
    sharingText: _locale4.default.shareGame
  }, level.appStringsFunctions);
  var appStrings = {
    continueText: stringFunctions.continueText(),
    reinfFeedbackMsg: stringFunctions.reinfFeedbackMsg({ backButton: tryAgainText }),
    sharingText: stringFunctions.sharingText()
  };

  if (!Studio.waitingForReport) {
    var saveToProjectGallery = PUBLISHABLE_SKINS.includes(skin.id);
    var isSignedIn = (0, _redux.getStore)().getState().progress.signInState === _progressRedux.SignInState.SignedIn;

    (0, _StudioApp.singleton)().displayFeedback({
      feedbackType: Studio.testResults,
      executionError: Studio.executionError,
      tryAgainText: tryAgainText,
      continueText: appStrings.continueText,
      response: Studio.response,
      level: level,
      showingSharing: !level.disableSharing && level.freePlay && !Studio.preExecutionFailure && !level.projectTemplateLevelName,
      feedbackImage: Studio.feedbackImage,
      twitter: skin.twitterOptions || twitterOptions,
      // allow users to save freeplay levels to their gallery (impressive non-freeplay levels are autosaved)
      saveToLegacyGalleryUrl: level.freePlay && Studio.response && Studio.response.save_to_gallery_url,
      // save to the project gallery instead of the legacy gallery
      saveToProjectGallery: saveToProjectGallery,
      disableSaveToGallery: !isSignedIn,
      message: Studio.message,
      appStrings: appStrings,
      disablePrinting: level.disablePrinting
    });
  }
};

/**
 * Function to be called when the service report call is complete
 * @param {MilestoneResponse} response - JSON response (if available)
 */
Studio.onReportComplete = function (response) {
  Studio.response = response;
  Studio.waitingForReport = false;
  (0, _StudioApp.singleton)().onReportComplete(response);
  Studio.displayFeedback();
};

var registerEventHandler = function registerEventHandler(handlers, name, func) {
  handlers.push({
    name: name,
    func: func,
    cmdQueue: [] });
};

var registerHandlersForCode = function registerHandlersForCode(handlers, blockName, code) {
  var args = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (Studio.legacyRuntime) {
    registerEventHandler(handlers, blockName, new (Function.prototype.bind.apply(Function, [null].concat(['Studio', 'Globals'], _toConsumableArray(args), [code])))());
  } else {
    var event = Studio.interpretedHandlers[blockName];
    if (event) {
      if (!_lodash2.default.isEqual(event.args, args)) {
        throw "Can't register two event handlers that take different arguments.";
      }
      // Combine code with the existing event.
      Studio.interpretedHandlers[blockName].code.push(code);
    } else {
      Studio.interpretedHandlers[blockName] = { code: [code], args: args };
    }
  }
};

var registerHandlers = function registerHandlers(handlers, blockName, eventNameBase, nameParam1, matchParam1Val, nameParam2, matchParam2Val, argNames) {
  var blocks = Blockly.mainBlockSpace.getTopBlocks();
  for (var x = 0; blocks[x]; x++) {
    var block = blocks[x];
    // default title values to '0' for case when there is only one sprite
    // and no title value is set through a dropdown
    var titleVal1 = block.getTitleValue(nameParam1) || '0';
    var titleVal2 = block.getTitleValue(nameParam2) || '0';
    if (block.type === blockName && (!nameParam1 || matchParam1Val === titleVal1) && (!nameParam2 || matchParam2Val === titleVal2)) {
      var code = Blockly.Generator.blocksToCode('JavaScript', [block]);
      if (code) {
        var eventName = eventNameBase;
        if (nameParam1) {
          eventName += '-' + utils.stripQuotes(matchParam1Val);
        }
        if (nameParam2) {
          eventName += '-' + utils.stripQuotes(matchParam2Val);
        }
        registerHandlersForCode(handlers, eventName, code, argNames);
      }
    }
  }
};

var registerHandlersWithSingleSpriteParam = function registerHandlersWithSingleSpriteParam(handlers, blockName, eventNameBase, blockParam) {
  for (var i = 0; i < Studio.spriteCount; i++) {
    registerHandlers(handlers, blockName, eventNameBase, blockParam, String(i));
  }
};

var registerHandlersWithTitleParam = function registerHandlersWithTitleParam(handlers, blockName, eventNameBase, titleParam, values) {
  for (var i = 0; i < values.length; i++) {
    registerHandlers(handlers, blockName, eventNameBase, titleParam, values[i]);
  }
};

var registerHandlersWithMultipleSpriteParams = function registerHandlersWithMultipleSpriteParams(handlers, blockName, eventNameBase, blockParam1, blockParam2) {
  var i;
  var registerHandlersForClassName = function registerHandlersForClassName(className) {
    registerHandlers(handlers, blockName, eventNameBase, blockParam1, String(i), blockParam2, className);
  };
  for (i = 0; i < Studio.spriteCount; i++) {
    for (var j = 0; j < Studio.spriteCount; j++) {
      if (i === j) {
        continue;
      }
      registerHandlers(handlers, blockName, eventNameBase, blockParam1, String(i), blockParam2, String(j));
    }
    skin.ProjectileClassNames.forEach(registerHandlersForClassName);
    skin.ItemClassNames.forEach(registerHandlersForClassName);
    EdgeClassNames.forEach(registerHandlersForClassName);
    registerHandlers(handlers, blockName, eventNameBase, blockParam1, String(i), blockParam2, 'any_actor');
    registerHandlers(handlers, blockName, eventNameBase, blockParam1, String(i), blockParam2, 'any_edge');
    registerHandlers(handlers, blockName, eventNameBase, blockParam1, String(i), blockParam2, 'any_projectile');
    registerHandlers(handlers, blockName, eventNameBase, blockParam1, String(i), blockParam2, 'anything');
    registerHandlers(handlers, blockName, eventNameBase, blockParam1, String(i), blockParam2, 'goal');
    registerHandlers(handlers, blockName, eventNameBase, blockParam1, String(i), blockParam2, 'wall');
  }
};

var registerHandlersWithSpriteAndGroupParams = function registerHandlersWithSpriteAndGroupParams(handlers, blockName, eventNameBase, blockParam1, blockParam2, argNames) {
  var spriteNames = skin.spriteChoices.filter(function (opt) {
    return opt[1] !== constants.HIDDEN_VALUE && opt[1] !== constants.RANDOM_VALUE;
  }).map(function (opt) {
    return opt[1];
  });
  for (var i = 0; i < Studio.spriteCount; i++) {
    for (var j = 0; j < spriteNames.length; j++) {
      registerHandlers(handlers, blockName, eventNameBase, blockParam1, String(i), blockParam2, spriteNames[j], argNames);
    }
  }
};

//
// Generates code with user-generated function definitions and evals that code
// so these can be called from event handlers. This should be called for each
// block type that defines functions.
//

var defineProcedures = function defineProcedures(blockType) {
  var code = Blockly.Generator.blockSpaceToCode('JavaScript', blockType);
  try {
    _CustomMarshalingInterpreter2.default.evalWith(code, {
      Studio: _api2.default,
      Globals: Studio.Globals
    }, { legacy: true });
  } catch (e) {}
};

/**
 * Looks for failures that should prevent execution in blockly mode.
 * @returns {boolean} True if we have a pre-execution failure
 */
Studio.checkForBlocklyPreExecutionFailure = function () {
  if ((0, _StudioApp.singleton)().hasUnfilledFunctionalBlock()) {
    Studio.result = false;
    Studio.testResults = _constants2.TestResults.EMPTY_FUNCTIONAL_BLOCK;
    // Some of our levels (i.e. big game) have a different top level block, but
    // those should be undeletable/unmovable and not hit this. If they do,
    // they'll still get the generic unfilled block message
    Studio.message = (0, _StudioApp.singleton)().getUnfilledFunctionalBlockError('functional_start_setValue');
    Studio.preExecutionFailure = true;
    return true;
  }

  if ((0, _StudioApp.singleton)().hasUnwantedExtraTopBlocks()) {
    Studio.result = false;
    Studio.testResults = _constants2.TestResults.EXTRA_TOP_BLOCKS_FAIL;
    Studio.preExecutionFailure = true;
    return true;
  }

  if ((0, _StudioApp.singleton)().hasEmptyFunctionOrVariableName()) {
    Studio.result = false;
    Studio.testResults = _constants2.TestResults.EMPTY_FUNCTION_NAME;
    Studio.message = _locale2.default.unnamedFunction();
    Studio.preExecutionFailure = true;
    return true;
  }

  var outcome = Studio.checkExamples_();
  if (outcome.result !== undefined) {
    Object.assign(Studio, outcome);
    Studio.preExecutionFailure = true;
    return true;
  }

  return false;
};

/**
 * @returns {Object} outcome
 * @returns {boolean} outcome.result
 * @returns {number} outcome.testResults
 * @returns {string} outcome.message
 */
Studio.checkExamples_ = function () {
  var outcome = {};
  if (!level.examplesRequired) {
    return outcome;
  }

  var exampleless = (0, _StudioApp.singleton)().getFunctionWithoutTwoExamples();
  if (exampleless) {
    outcome.result = _constants2.ResultType.FAILURE;
    outcome.testResults = _constants2.TestResults.EXAMPLE_FAILED;
    outcome.message = _locale2.default.emptyExampleBlockErrorMsg({ functionName: exampleless });
    return outcome;
  }

  var unfilled = (0, _StudioApp.singleton)().getUnfilledFunctionalExample();
  if (unfilled) {
    outcome.result = _constants2.ResultType.FAILURE;
    outcome.testResults = _constants2.TestResults.EXAMPLE_FAILED;

    var name = unfilled.getRootBlock().getInputTargetBlock('ACTUAL').getTitleValue('NAME');
    outcome.message = _locale2.default.emptyExampleBlockErrorMsg({ functionName: name });
    return outcome;
  }

  var failingBlockName = (0, _StudioApp.singleton)().checkForFailingExamples(Studio.getStudioExampleFailure);
  if (failingBlockName) {
    outcome.result = false;
    outcome.testResults = _constants2.TestResults.EXAMPLE_FAILED;
    outcome.message = _locale2.default.exampleErrorMessage({ functionName: failingBlockName });
  }

  return outcome;
};

/**
 * Looks for failures that should prevent execution in editCode mode.
 * @returns {boolean} True if we have a pre-execution failure
 */
Studio.checkForEditCodePreExecutionFailure = function () {
  var funcName = Studio.hasUnexpectedFunction_();
  if (funcName) {
    Studio.result = false;
    Studio.testResults = _constants2.TestResults.EXTRA_FUNCTION_FAIL;
    Studio.message = _locale4.default.extraFunction({
      funcName: funcName + '()'
    });
    Studio.preExecutionFailure = true;
    return true;
  }

  funcName = Studio.hasUnexpectedLocalFunction_();
  if (funcName) {
    Studio.result = false;
    Studio.testResults = _constants2.TestResults.LOCAL_FUNCTION_FAIL;
    Studio.message = _locale4.default.localFunction({
      funcName: funcName + '()'
    });
    Studio.preExecutionFailure = true;
    return true;
  }

  return false;
};

/**
 * @returns {string} the name of the first unexpected function found
 */
Studio.hasUnexpectedFunction_ = function () {
  if ((0, _StudioApp.singleton)().editCode && level.preventUserDefinedFunctions && Studio.JSInterpreter) {
    var funcNames = Studio.JSInterpreter.getGlobalFunctionNames();
    for (var name in AUTO_HANDLER_MAP) {
      var index = funcNames.indexOf(name);
      if (index !== -1) {
        funcNames.splice(index, 1);
      }
    }
    if (funcNames.length > 0) {
      return funcNames[0];
    }
  }
};

/**
 * @returns {string} the name of the first unexpected local function found
 */
Studio.hasUnexpectedLocalFunction_ = function () {
  if ((0, _StudioApp.singleton)().editCode && Studio.JSInterpreter) {
    var funcNames = Studio.JSInterpreter.getLocalFunctionNames();
    for (var name in AUTO_HANDLER_MAP) {
      var index = funcNames.indexOf(name);
      if (index !== -1) {
        return name;
      }
    }
  }
};

function handleExecutionError(err, lineNumber, outputString) {
  (0, _javascriptMode.outputError)(outputString, lineNumber);
  Studio.executionError = { err: err, lineNumber: lineNumber };

  // Call onPuzzleComplete() if syntax error or any time we're not on a freeplay level:
  if (err instanceof SyntaxError) {
    // Mark preExecutionFailure and testResults immediately so that an error
    // message always appears, even on freeplay:
    Studio.preExecutionFailure = true;
    Studio.testResults = _constants2.TestResults.SYNTAX_ERROR_FAIL;
    Studio.onPuzzleComplete();
  } else if (!level.freePlay) {
    Studio.onPuzzleComplete();
  }
}

/**
 * Execute the story
 */
Studio.execute = function () {
  Studio.result = (0, _StudioApp.singleton)().UNSET;
  Studio.testResults = _constants2.TestResults.NO_TESTS_RUN;
  Studio.waitingForReport = false;
  Studio.response = null;

  var handlers = [];
  if ((0, _StudioApp.singleton)().isUsingBlockly()) {
    if (Studio.checkForBlocklyPreExecutionFailure()) {
      return Studio.onPuzzleComplete();
    }

    Studio.interpretedHandlers = {};

    if ((0, _StudioApp.singleton)().initializationBlocks) {
      (0, _StudioApp.singleton)().initializationBlocks.forEach(function (topBlock) {
        // by default, blocks are queued to run once at game start.
        // Repeat forever blocks, however, need their own handler.
        var handlerType = topBlock.type === 'studio_repeatForever' ? 'repeatForever' : 'whenGameStarts';
        var code = Blockly.Generator.blocksToCode('JavaScript', [topBlock]);
        registerHandlersForCode(handlers, handlerType, code);
      });
    }

    registerHandlers(handlers, 'when_run', 'whenGameStarts');
    registerHandlers(handlers, 'functional_start_setSpeeds', 'whenGameStarts');
    registerHandlers(handlers, 'functional_start_setBackgroundAndSpeeds', 'whenGameStarts');
    registerHandlers(handlers, 'functional_start_setFuncs', 'whenGameStarts');
    registerHandlers(handlers, 'functional_start_setValue', 'whenGameStarts');
    registerHandlers(handlers, 'studio_whenLeft', 'when-left');
    registerHandlers(handlers, 'studio_whenRight', 'when-right');
    registerHandlers(handlers, 'studio_whenUp', 'when-up');
    registerHandlers(handlers, 'studio_whenDown', 'when-down');
    registerHandlersWithTitleParam(handlers, 'studio_whenArrow', 'when', 'VALUE', ['left', 'right', 'up', 'down']);
    registerHandlers(handlers, 'studio_repeatForever', 'repeatForever');
    registerHandlers(handlers, 'studio_whenTouchCharacter', 'whenSpriteCollided-' + (Studio.protagonistSpriteIndex || 0) + '-any_item');
    registerHandlers(handlers, 'studio_whenGetAllCharacters', 'whenGetAllItems');
    registerHandlersWithTitleParam(handlers, 'studio_whenGetAllCharacterClass', 'whenGetAll', 'VALUE', skin.ItemClassNames);
    registerHandlersWithTitleParam(handlers, 'studio_whenGetCharacter', 'whenSpriteCollided-' + (Studio.protagonistSpriteIndex || 0), 'VALUE', ['any_item'].concat(skin.ItemClassNames));
    registerHandlers(handlers, 'studio_whenTouchGoal', 'whenTouchGoal');
    if (Studio.wallMapCollisions) {
      registerHandlers(handlers, 'studio_whenTouchObstacle', 'whenSpriteCollided-' + (Studio.protagonistSpriteIndex || 0) + '-wall');
    }
    registerHandlersWithSingleSpriteParam(handlers, 'studio_whenSpriteClicked', 'whenSpriteClicked', 'SPRITE');
    registerHandlersWithMultipleSpriteParams(handlers, 'studio_whenSpriteCollided', 'whenSpriteCollided', 'SPRITE1', 'SPRITE2');
    registerHandlersWithSpriteAndGroupParams(handlers, 'studio_whenSpriteAndGroupCollideSimple', 'whenSpriteCollided', 'SPRITE', 'SPRITENAME');
    registerHandlersWithSpriteAndGroupParams(handlers, 'studio_whenSpriteAndGroupCollide', 'whenSpriteCollided', 'SPRITE', 'SPRITENAME', ['touchedSpriteIndex']);
  }

  if (utils.valueOr(level.playStartSound, true)) {
    Studio.playSound({ soundName: 'start' });
  }

  (0, _StudioApp.singleton)().reset(false);
  (0, _StudioApp.singleton)().clearAndAttachRuntimeAnnotations();

  if (level.editCode) {
    var codeWhenRun = (0, _StudioApp.singleton)().getCode();
    Studio.JSInterpreter = new _JSInterpreter2.default({
      studioApp: (0, _StudioApp.singleton)()
    });
    Studio.JSInterpreter.onExecutionError.register(handleExecutionError);
    if (consoleLogger) {
      consoleLogger.attachTo(Studio.JSInterpreter);
    }
    Studio.JSInterpreter.parse({
      code: codeWhenRun,
      blocks: _dropletConfig2.default.blocks,
      blockFilter: level.executePaletteApisOnly && level.codeFunctions,
      enableEvents: true
    });
    if (!Studio.JSInterpreter.initialized()) {
      return;
    }
    if (Studio.checkForEditCodePreExecutionFailure()) {
      return Studio.onPuzzleComplete();
    }
    Studio.initAutoHandlers(AUTO_HANDLER_MAP);
  } else {
    // Define any top-level procedures the user may have created
    // (must be after reset(), which resets the Studio.Globals namespace)
    if (Studio.legacyRuntime) {
      defineProcedures('procedures_defreturn');
      defineProcedures('procedures_defnoreturn');
      defineProcedures('functional_definition');
    } else {
      var generator = Blockly.Generator.blockSpaceToCode.bind(Blockly.Generator, 'JavaScript');
      var code = ['procedures_defreturn', 'procedures_defnoreturn', 'functional_definition'].map(generator).join(';');

      Studio.interpretedHandlers.getGlobals = { code: 'return Globals;' };

      var _CustomMarshalingInte = _CustomMarshalingInterpreter2.default.evalWithEvents({ Studio: _api2.default, Globals: Studio.Globals }, Studio.interpretedHandlers, code),
          hooks = _CustomMarshalingInte.hooks,
          interpreter = _CustomMarshalingInte.interpreter;

      Studio.interpreter = interpreter;
      hooks.forEach(function (hook) {
        if (hook.name === 'getGlobals') {
          // Expose `Studio.Globals` to success/failure functions. Setter is a no-op.
          Object.defineProperty(Studio, 'Globals', {
            get: function get() {
              return hook.func() || {};
            },
            set: function set() {},
            configurable: true
          });
        } else {
          registerEventHandler(handlers, hook.name, hook.func);
        }
      });
    }

    // Set event handlers and start the onTick timer
    Studio.eventHandlers = handlers;
  }

  (0, _jquery2.default)('#resetText, #resetTextA, #resetTextB, #overlayGroup *').attr('visibility', 'hidden');

  Studio.perExecutionTimeouts = [];
  Studio.resumeExecution();
};

/**
 * Pause calling `Studio.onTick`.
 */
Studio.pauseExecution = function () {
  Studio.paused = true;
  window.clearInterval(Studio.tickIntervalId);
};

/**
 * Resume calling `Studio.onTick`.
 */
Studio.resumeExecution = function () {
  Studio.paused = false;
  Studio.tickIntervalId = window.setInterval(Studio.onTick, Studio.scale.stepSpeed);
};

Studio.feedbackImage = '';
Studio.encodedFeedbackImage = '';

Studio.onPuzzleComplete = function () {
  if (Studio.executionError) {
    Studio.result = _constants2.ResultType.ERROR;
  } else if ((0, _StudioApp.singleton)().hasContainedLevels || level.freePlay && !Studio.preExecutionFailure) {
    Studio.result = _constants2.ResultType.SUCCESS;
  }

  // Stop everything on screen
  Studio.clearEventHandlersKillTickLoop();
  Studio.movementAudioOff();

  if (skin.gridAlignedMovement && Studio.JSInterpreter) {
    // If we've been selecting code as we run, we need to call selectCurrentCode()
    // one last time to remove the highlight on the last line of code:
    Studio.JSInterpreter.selectCurrentCode();
  }

  // If we know they succeeded, mark levelComplete true
  var levelComplete = Studio.result === _constants2.ResultType.SUCCESS;

  // If preExecutionFailure or progressConditionTestResult, then testResults
  // should already be set
  if (!Studio.preExecutionFailure && !Studio.progressConditionTestResult) {
    // If the current level is a free play, always return the free play
    // result type
    Studio.testResults = level.freePlay ? _constants2.TestResults.FREE_PLAY : (0, _StudioApp.singleton)().getTestResults(levelComplete, { executionError: Studio.executionError });
  }

  if (Studio.testResults >= _constants2.TestResults.TOO_MANY_BLOCKS_FAIL) {
    (0, _StudioApp.singleton)().playAudioOnWin();
  } else {
    (0, _StudioApp.singleton)().playAudioOnFailure();
  }

  if ((0, _StudioApp.singleton)().hasContainedLevels && !level.edit_blocks) {
    (0, _containedLevels.postContainedLevelAttempt)((0, _StudioApp.singleton)());
    (0, _containedLevels.runAfterPostContainedLevel)(function () {
      Studio.message = (0, _containedLevels.getContainedLevelResultInfo)().feedback;
      Studio.onReportComplete();
    });
    return;
  }

  var program;
  if (level.editCode) {
    // If we want to "normalize" the JavaScript to avoid proliferation of nearly
    // identical versions of the code on the service, we could do either of these:

    // do an acorn.parse and then use escodegen to generate back a "clean" version
    // or minify (uglifyjs) and that or js-beautify to restore a "clean" version

    program = (0, _StudioApp.singleton)().getCode();
  } else {
    var xml = Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace);
    program = Blockly.Xml.domToText(xml);
  }

  Studio.waitingForReport = true;

  var sendReport = function sendReport() {
    (0, _StudioApp.singleton)().report({
      app: 'studio',
      level: level.id,
      result: Studio.result === _constants2.ResultType.SUCCESS,
      testResult: Studio.testResults,
      program: encodeURIComponent(program),
      image: Studio.encodedFeedbackImage,
      onComplete: Studio.onReportComplete
    });
  };

  // don't try it if function is not defined, which should probably only be
  // true in our test environment
  if (typeof document.getElementById('svgStudio').toDataURL === 'undefined') {
    sendReport();
  } else {
    document.getElementById('svgStudio').toDataURL("image/jpeg", {
      callback: function callback(imageDataUrl) {
        Studio.feedbackImage = imageDataUrl;
        Studio.encodedFeedbackImage = encodeURIComponent(Studio.feedbackImage.split(',')[1]);

        sendReport();
      }
    });
  }
};

/* Return the frame count for items or projectiles
*/
function getFrameCount(className, exceptionList, defaultCount) {
  if (/.gif$/.test(skin[className])) {
    return 1;
  } else if (exceptionList && exceptionList[className] && exceptionList[className].frames) {
    return exceptionList[className].frames;
  }
  return defaultCount;
}

/**
 * Draw a debug rectangle centered on the given location, using the given
 * CSS class name.
 */

Studio.drawDebugRect = function (className, x, y, width, height) {
  if (!showDebugInfo) {
    return;
  }

  var svg = document.getElementById('svgStudio');
  var group = document.createElementNS(_constants2.SVG_NS, 'g');
  group.setAttribute('class', className + " debugRect");
  var background = document.createElementNS(_constants2.SVG_NS, 'rect');
  background.setAttribute('width', width);
  background.setAttribute('height', height);
  background.setAttribute('x', x - width / 2);
  background.setAttribute('y', y - height / 2);
  background.setAttribute('fill', 'rgba(255, 255, 255, 0.5)');
  background.setAttribute('stroke', '#000000');
  background.setAttribute('stroke-width', 1);
  group.appendChild(background);
  svg.appendChild(group);
};

/**
 * Draw a debug line from point to point using the given CSS class name.
 * @param {string} className
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {string} [color] - defaults to black
 */
Studio.drawDebugLine = function (className, x1, y1, x2, y2, color) {
  if (!showDebugInfo) {
    return;
  }

  color = utils.valueOr(color, '#000000');

  var svg = document.getElementById('svgStudio');
  var group = document.createElementNS(_constants2.SVG_NS, 'g');
  group.setAttribute('class', className + " debugLine");
  var line = document.createElementNS(_constants2.SVG_NS, 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', color);
  line.setAttribute('stroke-width', 2);
  group.appendChild(line);
  svg.appendChild(group);
};

/**
 * Draw a timeout rectangle across the bottom of the play area.
 * It doesn't appear until halfway through the level, and briefly fades in
 * when first appearing.
 * level.showTimeoutRect should be a valid color that can be passed to an SVG
 * 'fill'.
 */
Studio.drawTimeoutRect = function () {
  if (!level.showTimeoutRect || Studio.timeoutFailureTick === Infinity) {
    return;
  }

  (0, _jquery2.default)(".timeoutRect").remove();

  // The fraction of the entire level duration that we start and end the
  // fade-in.
  var startFadeInAt = 0.5;
  var endFadeInAt = 0.4;

  var timeRemaining = Studio.timeoutFailureTick - Studio.tickCount;
  var currentFraction = timeRemaining / Studio.timeoutFailureTick;

  if (currentFraction <= startFadeInAt) {
    var opacity = currentFraction < endFadeInAt ? 1 : 1 - (currentFraction - endFadeInAt) / (startFadeInAt - endFadeInAt);

    var width = timeRemaining * Studio.MAZE_WIDTH / (Studio.timeoutFailureTick * startFadeInAt);
    var height = 6;

    if (width > 0) {
      var svg = document.getElementById('svgStudio');
      var group = document.createElementNS(_constants2.SVG_NS, 'g');
      group.setAttribute('class', "timeoutRect");
      var background = document.createElementNS(_constants2.SVG_NS, 'rect');
      background.setAttribute('opacity', opacity);
      background.setAttribute('width', width);
      background.setAttribute('height', height);
      background.setAttribute('x', 0);
      background.setAttribute('y', Studio.MAZE_HEIGHT - height);
      background.setAttribute('fill', level.showTimeoutRect);
      group.appendChild(background);
      svg.appendChild(group);
    }
  }
};

/**
 * Draw an image with 0.5 opacity over the entire play area. Only allow one
 * at a time.
 */
Studio.drawDebugOverlay = function (src) {
  if (showDebugInfo && (0, _jquery2.default)('.debugImage').length === 0) {
    var svg = document.getElementById('svgStudio');
    var group = document.createElementNS(_constants2.SVG_NS, 'g');
    group.setAttribute('class', 'walls debugImage');
    var mapImage = document.createElementNS(_constants2.SVG_NS, 'image');
    mapImage.setAttribute('width', Studio.MAZE_WIDTH);
    mapImage.setAttribute('height', Studio.MAZE_HEIGHT);
    mapImage.setAttribute('x', 0);
    mapImage.setAttribute('y', 0);
    mapImage.setAttribute('opacity', '0.5');
    mapImage.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', src);
    group.appendChild(mapImage);
    svg.appendChild(group);
  }
};

/**
 * Clear the debug rectangles.
 */

Studio.clearDebugElements = function () {
  (0, _jquery2.default)('.debugRect').remove();
  (0, _jquery2.default)('.debugLine').remove();
  (0, _jquery2.default)('.debugImage').remove();
};

Studio.drawWallTile = function (svg, wallVal, row, col) {
  var srcRow, srcCol;

  // Defaults for regular tiles:
  var tiles = skin.tiles;
  var srcWallType = 0;
  var tileSize = Studio.SQUARE_SIZE;
  var addOffset = 0; // Added to X & Y to offset drawn tile.
  var numSrcRows = 8;
  var numSrcCols = 8;

  // We usually won't try jumbo size.
  var jumboSize = false;

  if (wallVal === SquareType.WALL) {
    // use a random coordinate
    // TODO (cpirich): these should probably be chosen once at level load time
    // and we should allow the level/skin to set specific row/col max values
    // to ensure that reasonable tiles are chosen at random
    srcRow = Math.floor(Math.random() * constants.WallRandomCoordMax);
    // Since [0,0] is not a valid wall tile, ensure that we avoid column zero
    // when row zero was chosen at random
    srcCol = srcRow ? Math.floor(Math.random() * constants.WallRandomCoordMax) : 1 + Math.floor(Math.random() * (constants.WallRandomCoordMax - 1));
  } else {
    // This wall value has been explicitly set.  It encodes the row & col from
    // the spritesheet of wall tile images.
    srcRow = (wallVal & constants.WallCoordRowMask) >> constants.WallCoordRowShift;
    srcCol = (wallVal & constants.WallCoordColMask) >> constants.WallCoordColShift;
    srcWallType = (wallVal & constants.WallTypeMask) >> constants.WallTypeShift;

    if (srcWallType === constants.WallType.JUMBO_SIZE) {
      // Jumbo tiles come from a separate sprite sheet which has oversize tiles
      // which are drawn in an overlapping fashion, though centered on the
      // regular tiles' centers.
      jumboSize = true;
      tileSize = skin[Studio.background].jumboTilesSize;
      numSrcRows = skin[Studio.background].jumboTilesRows;
      numSrcCols = skin[Studio.background].jumboTilesCols;
    } else if (srcWallType === constants.WallType.DOUBLE_SIZE) {
      // Double-size tiles are just a regular tile expanded to cover 2x2 tiles.
      tileSize = 2 * Studio.SQUARE_SIZE;
    }
  }

  // Attempt to load tiles that match the current background, if specified.
  if (Studio.background && !jumboSize && skin[Studio.background].tiles) {
    tiles = skin[Studio.background].tiles;
  } else if (Studio.background && jumboSize && skin[Studio.background].jumboTiles) {
    tiles = skin[Studio.background].jumboTiles;
    addOffset = skin[Studio.background].jumboTilesAddOffset;
  }

  var clipPath = document.createElementNS(_constants2.SVG_NS, 'clipPath');
  var clipId = 'tile_clippath_' + Studio.tiles.length;
  clipPath.setAttribute('id', clipId);
  clipPath.setAttribute('class', "tile");
  var rect = document.createElementNS(_constants2.SVG_NS, 'rect');
  rect.setAttribute('width', tileSize);
  rect.setAttribute('height', tileSize);
  rect.setAttribute('x', col * Studio.SQUARE_SIZE + addOffset);
  rect.setAttribute('y', row * Studio.SQUARE_SIZE + addOffset);
  clipPath.appendChild(rect);
  svg.appendChild(clipPath);

  var tile = document.createElementNS(_constants2.SVG_NS, 'image');
  var tileId = 'tile_' + Studio.tiles.length;
  tile.setAttribute('id', tileId);
  tile.setAttribute('class', "tileClip");
  tile.setAttribute('width', numSrcCols * tileSize);
  tile.setAttribute('height', numSrcRows * tileSize);
  tile.setAttribute('x', col * Studio.SQUARE_SIZE - srcCol * tileSize + addOffset);
  tile.setAttribute('y', row * Studio.SQUARE_SIZE - srcRow * tileSize + addOffset);
  tile.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', tiles);
  svg.appendChild(tile);

  tile.setAttribute('clip-path', 'url(#' + clipId + ')');

  var tileEntry = {};
  tileEntry.bottomY = row * Studio.SQUARE_SIZE + addOffset + tileSize;
  Studio.tiles.push(tileEntry);
};

Studio.createLevelItems = function (svg) {
  for (var row = 0; row < Studio.ROWS; row++) {
    for (var col = 0; col < Studio.COLS; col++) {
      var mapVal = Studio.map[row][col].getTileType();
      for (var index = 0; index < skin.ItemClassNames.length; index++) {
        if (constants.squareHasItemClass(index, mapVal)) {
          // Create item:
          var classOptions = Studio.getItemOptionsForItemClass(skin.ItemClassNames[index]);
          var itemOptions = Object.assign({}, classOptions, {
            x: Studio.HALF_SQUARE + Studio.SQUARE_SIZE * col,
            y: Studio.HALF_SQUARE + Studio.SQUARE_SIZE * row
          });
          var item = new _Item2.default(itemOptions);

          item.createElement(svg);
          // Display immediately (we can't assume it will be updated in onTick
          // right away since this is called after 'Reset' as well as 'Run'
          item.display();
          Studio.items.push(item);
        }
      }
    }
  }
};

Studio.drawMapTiles = function (svg) {

  // If we're just using the level's own map, then draw it only once.
  if (!Studio.wallMap && Studio.tilesDrawn) {
    return;
  }

  Studio.tilesDrawn = true;

  var row, col;

  var tilesDrawn = [];
  for (row = 0; row < Studio.ROWS; row++) {
    tilesDrawn[row] = [];
    for (col = 0; col < Studio.COLS; col++) {
      tilesDrawn[row][col] = false;
    }
  }

  var backgroundLayer = document.getElementById('backgroundLayer');

  var overlayURI = Studio.walls.getWallOverlayURI();
  if (overlayURI) {
    var wallOverlay = document.getElementById('wallOverlay');
    if (!wallOverlay) {
      wallOverlay = document.createElementNS(_constants2.SVG_NS, 'image');
      wallOverlay.setAttribute('id', 'wallOverlay');
      wallOverlay.setAttribute('height', Studio.MAZE_HEIGHT);
      wallOverlay.setAttribute('width', Studio.MAZE_WIDTH);
      wallOverlay.setAttribute('x', 0);
      wallOverlay.setAttribute('y', 0);
      backgroundLayer.appendChild(wallOverlay);
    }
    wallOverlay.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', overlayURI);
  }

  for (row = 0; row < Studio.ROWS; row++) {
    for (col = 0; col < Studio.COLS; col++) {
      var wallVal = Studio.getWallValue(row, col);
      if (wallVal) {
        // Skip if we've already drawn a large tile that covers this square.
        if (tilesDrawn[row][col]) {
          continue;
        }

        var srcWallType = (wallVal & constants.WallTypeMask) >> constants.WallTypeShift;

        if (srcWallType === constants.WallType.DOUBLE_SIZE) {
          tilesDrawn[row][col] = true;
          tilesDrawn[row][col + 1] = true;
          tilesDrawn[row + 1][col] = true;
          tilesDrawn[row + 1][col + 1] = true;
        }

        Studio.drawWallTile(backgroundLayer, wallVal, row, col);
      }
    }
  }
};

var updateSpeechBubblePath = function updateSpeechBubblePath(element) {
  var height = +element.getAttribute('height');
  var width = +element.getAttribute('width');
  var onTop = 'true' === element.getAttribute('onTop');
  var onRight = 'true' === element.getAttribute('onRight');
  var tipOffset = +element.getAttribute('tipOffset');
  element.setAttribute('d', createSpeechBubblePath(0, 0, width, height, SPEECH_BUBBLE_RADIUS, onTop, onRight, tipOffset));
};

Studio.displaySprite = function (i) {
  var sprite = Studio.sprite[i];

  // avoid lots of unnecessary changes to hidden sprites
  if (sprite.value === 'hidden') {
    return;
  }

  if (sprite.hasActions()) {
    sprite.updateActions();
  } else {
    // TODO (cpirich): move this into Sprite object

    var newDir = Direction.NONE;
    var lastDrawPos = sprite.lastDrawPosition;

    sprite.displayX = sprite.x;
    sprite.displayY = sprite.y;

    var curDrawPos = sprite.getCurrentDrawPosition();

    if (curDrawPos.x !== lastDrawPos.x || curDrawPos.y !== lastDrawPos.y) {
      if (curDrawPos.x < lastDrawPos.x) {
        newDir |= Direction.WEST;
      } else if (curDrawPos.x > lastDrawPos.x) {
        newDir |= Direction.EAST;
      }
      if (curDrawPos.y < lastDrawPos.y) {
        newDir |= Direction.NORTH;
      } else if (curDrawPos.y > lastDrawPos.y) {
        newDir |= Direction.SOUTH;
      }
    }

    if (newDir !== Direction.NONE || sprite.lastMove === Infinity) {
      // Don't change to Direction.NONE here once we've captured a lastMove
      // value, allow the ticksBeforeFaceSouth code to handle that later...
      sprite.setDirection(newDir);
    }
  }

  // Turn sprite toward target direction after evaluating actions.
  if (sprite.dir !== sprite.displayDir) {
    // Every other frame, assign a new displayDir from state table
    // (only one turn at a time):
    if (Studio.tickCount && 0 === Studio.tickCount % 2) {
      sprite.displayDir = NextTurn[sprite.displayDir][sprite.dir];
    }
  }

  // TODO (cpirich): (may be redundant with displayCollidables(Studio.sprite)
  // in onTick loop)
  sprite.display();

  if (sprite.bubbleVisible) {
    Studio.renderSpeechBubble(i);
  }
};

Studio.renderSpeechBubble = function (i) {
  var sprite = Studio.sprite[i];

  var speechBubble = document.getElementById('speechBubble' + i);
  var speechBubblePath = document.getElementById('speechBubblePath' + i);
  var oldTipOffset = +speechBubblePath.getAttribute('tipOffset');
  var wasOnTop = 'true' === speechBubblePath.getAttribute('onTop');
  var wasOnRight = 'true' === speechBubblePath.getAttribute('onRight');
  var bubbleHeight = +speechBubblePath.getAttribute('height');
  var bubbleWidth = +speechBubblePath.getAttribute('width');

  var newBubblePosition = Studio.calculateBubblePosition(sprite, bubbleHeight, bubbleWidth, Studio.MAZE_WIDTH);

  speechBubblePath.setAttribute('onTop', newBubblePosition.onTop);
  speechBubblePath.setAttribute('onRight', newBubblePosition.onRight);
  speechBubblePath.setAttribute('tipOffset', newBubblePosition.tipOffset);

  if (wasOnTop !== newBubblePosition.onTop || wasOnRight !== newBubblePosition.onRight || oldTipOffset !== newBubblePosition.tipOffset) {
    updateSpeechBubblePath(speechBubblePath);
  }

  speechBubble.setAttribute('transform', 'translate(' + newBubblePosition.xSpeech + ', ' + newBubblePosition.ySpeech + ')');
};

Studio.calculateBubblePosition = function (sprite, bubbleHeight, bubbleWidth, studioWidth) {
  var onTop = true;
  var ySpeech = sprite.y - (bubbleHeight + SPEECH_BUBBLE_PADDING);
  if (ySpeech < SPEECH_BUBBLE_TOP_MARGIN) {
    ySpeech = sprite.y + sprite.height + SPEECH_BUBBLE_PADDING;
    onTop = false;
  }

  var onRight = void 0;
  var xSpeech = void 0;
  var tipOffset = 0;
  if (sprite.x > (studioWidth - sprite.width) / 2) {
    onRight = false;
    xSpeech = sprite.x + sprite.width - (bubbleWidth + SPEECH_BUBBLE_H_OFFSET);
    if (xSpeech < SPEECH_BUBBLE_SIDE_MARGIN) {
      tipOffset = SPEECH_BUBBLE_SIDE_MARGIN - xSpeech;
      xSpeech = SPEECH_BUBBLE_SIDE_MARGIN;
    }
  } else {
    onRight = true;
    xSpeech = sprite.x + SPEECH_BUBBLE_H_OFFSET;
    var maxXSpeech = studioWidth - bubbleWidth - SPEECH_BUBBLE_SIDE_MARGIN;
    if (xSpeech > maxXSpeech) {
      tipOffset = xSpeech - maxXSpeech;
      xSpeech = maxXSpeech;
    }
  }

  return {
    onTop: onTop,
    onRight: onRight,
    tipOffset: tipOffset,
    xSpeech: xSpeech,
    ySpeech: ySpeech
  };
};

Studio.displayScore = function () {
  var score = document.getElementById('score');
  if (Studio.scoreText) {
    score.textContent = Studio.scoreText;
  } else {
    score.textContent = _locale4.default.scoreText({
      playerScore: Studio.playerScore
    });
  }
  score.setAttribute('visibility', 'visible');
};

Studio.displayVictoryText = function () {
  var victoryText = document.getElementById('victoryText');
  victoryText.textContent = Studio.victoryText;
  victoryText.setAttribute('visibility', 'visible');
  if (level.tapSvgToRunAndReset) {
    if (_dom2.default.isMobile() || _dom2.default.isWindowsTouch()) {
      var resetTextA = document.getElementById('resetTextA');
      var resetTextB = document.getElementById('resetTextB');
      resetTextB.textContent = _locale4.default.tapToReset();
      resetTextA.setAttribute('visibility', 'hidden');
      resetTextB.setAttribute('visibility', 'visible');
      (0, _jquery2.default)('#overlayGroup image, #overlayGroup rect').attr('visibility', 'hidden');
    } else {
      var resetText = document.getElementById('resetText');
      resetText.textContent = _locale4.default.tapOrClickToReset();
      resetText.setAttribute('visibility', 'visible');
    }
  }
};

Studio.animateGoals = function () {
  var currentTime = new Date();

  var animate = level.goalOverride && level.goalOverride.goalAnimation;
  var fade = skin.fadeOutGoal;

  var elapsed, numFrames, frameDuration, frameWidth;

  if (animate) {
    elapsed = currentTime - Studio.startTime;
    numFrames = skin.animatedGoalFrames;
    frameDuration = skin.timePerGoalAnimationFrame;
    frameWidth = skin.goalSpriteWidth;
  }

  // We want each goal animation to play at an offset so they're not all in
  // sync.  By offsetting the frame by (goal index * 7) we ensure that each goal's
  // animation is significantly out of sync.
  var animationOffset = 7;

  Studio.allGoals_().forEach(function (goal, i) {
    // Keep animating the goal unless it's finished and we're not fading out.
    if (!goal.finished || goal.startFadeTime) {
      if (animate) {
        var baseX = parseInt(goal.clipRect.getAttribute('x'), 10);
        var frame = (i * animationOffset + Math.floor(elapsed / frameDuration)) % numFrames;

        goal.marker.setAttribute('x', baseX - frame * frameWidth);
      }

      if (fade) {
        var fadeTime = constants.GOAL_FADE_TIME;

        if (goal.startFadeTime) {
          var opacity = 1 - (currentTime - goal.startFadeTime) / fadeTime;

          if (opacity < 0) {
            opacity = 0;
            goal.startFadeTime = null;
          }

          goal.marker.setAttribute('opacity', opacity);
        }
      }
    }
  });
};

/**
 * Load clouds for the current background if it features them, or hide
 * them if they shouldn't currently be shown.
 */
Studio.loadClouds = function () {
  var cloud, i;
  var showClouds = Studio.background && skin[Studio.background].clouds;

  if (!showClouds) {
    // Hide the clouds offscreen.
    for (i = 0; i < constants.MAX_NUM_CLOUDS; i++) {
      cloud = document.getElementById('cloud' + i);
      cloud.setAttribute('x', -constants.CLOUD_SIZE);
      cloud.setAttribute('y', -constants.CLOUD_SIZE);
    }
  } else {
    // Set up the right clouds.
    for (i = 0; i < skin[Studio.background].clouds.length; i++) {
      cloud = document.getElementById('cloud' + i);
      cloud.setAttribute('width', constants.CLOUD_SIZE);
      cloud.setAttribute('height', constants.CLOUD_SIZE);
      cloud.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin[Studio.background].clouds[i]);
      cloud.setAttribute('opacity', constants.CLOUD_OPACITY);

      var location = Studio.getCloudLocation(i);
      cloud.setAttribute('x', location.x);
      cloud.setAttribute('y', location.y);
    }
  }
};

/**
 * Animate clouds if the current background features them.
 */
Studio.animateClouds = function () {
  var showClouds = Studio.background && skin[Studio.background].clouds;
  if (!showClouds) {
    return;
  }

  Studio.cloudStep++;

  for (var i = 0; i < skin[Studio.background].clouds.length; i++) {
    var location = Studio.getCloudLocation(i);
    var cloud = document.getElementById('cloud' + i);
    cloud.setAttribute('x', Math.round(location.x));
    cloud.setAttribute('y', Math.round(location.y));
  }
};

/** Gets the current location of a specified cloud.
 * @param {number} cloudIndex
 * @returns {Object} location
 * @returns {number} location.x
 * @returns {number} location.y
 */
Studio.getCloudLocation = function (cloudIndex) {
  // How many milliseconds to move one pixel.  Higher values mean slower clouds,
  // and making them different causes the clouds to animate out of sync.
  var intervals = [50, 60];

  // How many pixels a cloud moves before it loops.  This value is big enough to
  // make a cloud move entirely aross the game area, looping when completely
  // out of view.
  var distance = Studio.MAZE_WIDTH + constants.CLOUD_SIZE;

  var totalTime = Studio.cloudStep * 30;
  var xOffset = totalTime / intervals[cloudIndex] % distance;

  var x, y;

  if (cloudIndex === 0) {
    // The first cloud animates from top-left to bottom-right, in the upper-right
    // half of the screen.
    x = xOffset - Studio.MAZE_WIDTH / 4;
    y = x - Studio.MAZE_HEIGHT / 2;
  } else {
    // The second cloud animates from bottom-right to top-left, in the lower-left
    // half of the screen.
    x = Studio.MAZE_WIDTH - xOffset;
    y = x + Studio.MAZE_HEIGHT / 2;
  }

  return { x: x, y: y };
};

/**
 * Start showing an upwards-floating score at the location of sprite 0.
 * The floatingScore level property should only be set to true if this
 * is desired.
 @param {number} changeValue The value that is displayed.
 */

Studio.displayFloatingScore = function (changeValue) {
  if (!level.floatingScore) {
    return;
  }

  var sprite = Studio.sprite[0];
  var floatingScore = document.getElementById('floatingScore');
  floatingScore.textContent = changeValue > 0 ? "+" + changeValue : changeValue;
  floatingScore.setAttribute('x', sprite.x + sprite.width / 2);
  floatingScore.setAttribute('y', sprite.y + sprite.height / 2);
  floatingScore.setAttribute('opacity', 1);
  floatingScore.setAttribute('visibility', 'visible');
};

Studio.updateFloatingScore = function () {
  if (!level.floatingScore) {
    return;
  }

  var floatingScore = document.getElementById('floatingScore');
  var y = parseInt(floatingScore.getAttribute('y'));
  var opacity = parseFloat(floatingScore.getAttribute('opacity'));
  if (opacity > 0) {
    opacity += constants.floatingScoreChangeOpacity;
    floatingScore.setAttribute('opacity', opacity);
    y += constants.floatingScoreChangeY;
    floatingScore.setAttribute('y', y);
  }
};

Studio.showCoordinates = function () {
  var sprite = Studio.sprite[Studio.protagonistSpriteIndex || 0];
  if (!sprite) {
    return;
  }
  // convert to math coordinates, with the origin at the bottom left
  // corner of the grid, and distances measured from the center of the
  // sprite.
  var x = sprite.x + 50;
  var y = 350 - sprite.y;
  Studio.setScoreText({ text: 'x: ' + x + ' y: ' + y });
};

Studio.queueCmd = function (id, name, opts) {
  var cmd = {
    'id': id,
    'name': name,
    'opts': opts
  };
  if ((0, _StudioApp.singleton)().isUsingBlockly() && Studio.currentCmdQueue) {
    if (Studio.currentEventParams) {
      for (var prop in Studio.currentEventParams) {
        cmd.opts[prop] = Studio.currentEventParams[prop];
      }
    }
    Studio.currentCmdQueue.push(cmd);
  } else {
    // in editCode/interpreter mode or if we don't have a current cmdQueue
    // (e.g. move from autoArrowSteer), commands are executed immediately:
    Studio.callCmd(cmd);
  }
};

//
// Execute an entire command queue (specified with the name parameter)
//
// If Studio.yieldExecutionTicks is positive, execution of commands will stop
//

Studio.executeQueue = function (name, oneOnly) {
  Studio.eventHandlers.forEach(function (handler) {
    if (Studio.paused || Studio.yieldExecutionTicks > 0) {
      return;
    }
    if (handler.name === name && handler.cmdQueue.length) {
      for (var cmd = handler.cmdQueue[0]; cmd; cmd = handler.cmdQueue[0]) {
        if (Studio.callCmd(cmd)) {
          // Command executed immediately, remove from queue and continue
          handler.cmdQueue.shift();
        } else {
          break;
        }
        if (Studio.paused || Studio.yieldExecutionTicks > 0) {
          break;
        }
      }
    }
  });
};

//
// Execute a command from a command queue
//
// Return false if the command is not complete (it will remain in the queue)
// and this function will be called again with the same command later
//
// Return true if the command is complete
//

Studio.callCmd = function (cmd) {
  switch (cmd.name) {
    case 'endGame':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.endGame(cmd.opts);
      break;
    case 'setBackground':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setBackground(cmd.opts);
      Studio.trackedBehavior.hasSetBackground = true;
      break;
    case 'setMap':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setMap(cmd.opts);
      Studio.trackedBehavior.hasSetMap = true;
      break;
    case 'setMapAndColor':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setMap(cmd.opts);
      Studio.trackedBehavior.hasSetMap = true;
      break;
    case 'setAllowSpritesOutsidePlayspace':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.allowSpritesOutsidePlayspace = cmd.opts.value;
      break;
    case 'setSprite':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSprite(cmd.opts);
      Studio.trackedBehavior.hasSetSprite = true;
      break;
    case 'getSpriteValue':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.getSpriteValue(cmd.opts);
      break;
    case 'getSpriteVisibility':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.getSpriteVisibility(cmd.opts);
      break;
    case 'saySprite':
      if (!cmd.opts.started) {
        (0, _StudioApp.singleton)().highlight(cmd.id);
      }
      return Studio.saySprite(cmd.opts);
    case 'setSpriteEmotion':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpriteEmotion(cmd.opts);
      Studio.trackedBehavior.hasSetEmotion = true;
      break;
    case 'getSpriteEmotion':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.getSpriteEmotion(cmd.opts);
      break;
    case 'setSpriteSpeed':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpriteSpeed(cmd.opts);
      break;
    case 'setDroidSpeed':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setDroidSpeed(cmd.opts);
      Studio.trackedBehavior.hasSetDroidSpeed = true;
      break;
    case 'setSpriteSize':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpriteSize(cmd.opts);
      break;
    case 'setSpritePosition':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpritePosition(cmd.opts);
      break;
    case 'setSpriteXY':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpriteXY(cmd.opts);
      break;
    case 'getSpriteXY':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.getSpriteXY(cmd.opts);
      break;
    case 'setSpriteBehavior':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpriteBehavior(cmd.opts);
      break;
    case 'setSpritesWander':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpritesWander(cmd.opts);
      break;
    case 'setSpritesStop':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpritesStop(cmd.opts);
      break;
    case 'setSpritesChase':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpritesChase(cmd.opts);
      break;
    case 'setSpritesFlee':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpritesFlee(cmd.opts);
      break;
    case 'setSpritesSpeed':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setSpritesSpeed(cmd.opts);
      break;
    case 'addGoal':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.addGoal(cmd.opts);
      break;
    case 'playSound':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.playSound(cmd.opts);
      break;
    case 'showTitleScreen':
      if (!cmd.opts.started) {
        (0, _StudioApp.singleton)().highlight(cmd.id);
      }
      return Studio.showTitleScreen(cmd.opts);
    case 'move':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.moveSingle(cmd.opts);
      break;
    case 'moveRight':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.moveSingle({
        spriteIndex: Studio.protagonistSpriteIndex || 0,
        dir: Direction.EAST
      });
      break;
    case 'moveLeft':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.moveSingle({
        spriteIndex: Studio.protagonistSpriteIndex || 0,
        dir: Direction.WEST
      });
      break;
    case 'moveUp':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.moveSingle({
        spriteIndex: Studio.protagonistSpriteIndex || 0,
        dir: Direction.NORTH
      });
      break;
    case 'moveDown':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.moveSingle({
        spriteIndex: Studio.protagonistSpriteIndex || 0,
        dir: Direction.SOUTH
      });
      break;
    case 'moveForward':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.moveSingle({
        spriteIndex: Studio.protagonistSpriteIndex || 0,
        dir: Studio.lastMoveSingleDir
      });
      break;
    case 'moveBackward':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.moveSingle({
        spriteIndex: Studio.protagonistSpriteIndex || 0,
        dir: Studio.lastMoveSingleDir,
        backward: true
      });
      break;
    case 'turnRight':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.turnSingle({
        spriteIndex: Studio.protagonistSpriteIndex || 0,
        dir: turnRight90(Studio.lastMoveSingleDir)
      });
      break;
    case 'turnLeft':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.turnSingle({
        spriteIndex: Studio.protagonistSpriteIndex || 0,
        dir: turnLeft90(Studio.lastMoveSingleDir)
      });
      break;
    case 'moveDistance':
      if (!cmd.opts.started) {
        (0, _StudioApp.singleton)().highlight(cmd.id);
      }
      return Studio.moveDistance(cmd.opts);
    case 'stop':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.stop(cmd.opts);
      break;
    case 'throwProjectile':
      if (!cmd.opts.started) {
        (0, _StudioApp.singleton)().highlight(cmd.id);
      }
      Studio.trackedBehavior.hasThrownProjectile = true;
      return Studio.throwProjectile(cmd.opts);
    case 'makeProjectile':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.makeProjectile(cmd.opts);
      break;
    case 'changeScore':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.changeScore(cmd.opts);
      break;
    case 'reduceScore':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.reduceScore(cmd.opts);
      break;
    case 'displayScore':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.displayScore(cmd.opts);
      break;
    case 'setScoreText':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setScoreText(cmd.opts);
      break;
    case 'showCoordinates':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.showCoordinates();
      break;
    case 'wait':
      if (!cmd.opts.started) {
        (0, _StudioApp.singleton)().highlight(cmd.id);
      }
      return Studio.wait(cmd.opts);
    case 'vanish':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.vanishActor(cmd.opts);
      break;
    case 'addItem':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.addItem(cmd.opts);
      Studio.trackedBehavior.hasAddedItem = true;
      break;
    case 'setItemActivity':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setItemActivity(cmd.opts);
      break;
    case 'setItemSpeed':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.setItemSpeed(cmd.opts);
      break;
    case 'showDebugInfo':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.showDebugInfo(cmd.opts);
      break;
    case 'onEvent':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      Studio.onEvent(cmd.opts);
      break;
    case 'askForInput':
      (0, _StudioApp.singleton)().highlight(cmd.id);
      if (Studio.paused) {
        return false;
      }
      Studio.askForInput(cmd.opts.question, cmd.opts.callback);
      break;
  }
  return true;
};

Studio.makeThrottledPlaySound = function () {
  Studio.throttledPlaySound = _lodash2.default.throttle((0, _StudioApp.singleton)().playAudio.bind((0, _StudioApp.singleton)()), constants.SOUND_THROTTLE_TIME);
};

Studio.makeThrottledSpriteWallCollisionHelpers = function () {
  Studio.throttledCollideSpriteWithWallFunctions = [];

  var makeCollideHelper = function makeCollideHelper(spriteIndex) {
    return function () {
      // For the case where this is used (blockMovingIntoWalls), we prevented
      // the wall collision, so we need to queue a wall collision event and
      // immediately reset the collision state since we didn't actually overlap:
      Studio.collideSpriteWith(spriteIndex, 'wall');
      Studio.sprite[spriteIndex].endCollision('wall');
    };
  };

  for (var i = 0; i < Studio.spriteCount; i++) {
    Studio.throttledCollideSpriteWithWallFunctions[i] = _lodash2.default.throttle(makeCollideHelper(i), constants.TOUCH_OBSTACLE_THROTTLE_TIME);
  }
};

Studio.playSound = function (opts) {

  if (typeof opts.soundName !== 'string') {
    throw new TypeError("Incorrect parameter: " + opts.soundName);
  }

  var soundVal = opts.soundName.toLowerCase().trim();
  // Get all non-random values
  var allValues = _paramLists2.default.getPlaySoundValues(false);

  if (soundVal === constants.RANDOM_VALUE) {
    // Choose a sound at random:
    soundVal = allValues[Math.floor(Math.random() * allValues.length)].toLowerCase();
  } else {
    var isInAllValues = function isInAllValues(value) {
      return allValues.indexOf(value) !== -1;
    };
    for (var group in skin.soundGroups) {
      var groupData = skin.soundGroups[group];
      if (soundVal === groupData.randomValue.toLowerCase()) {
        // Choose a sound at random from this group (intersect sounds in this group
        // based on the suffix range with the allValues array)
        var groupValues = [];
        for (var suffix = groupData.minSuffix; suffix <= groupData.maxSuffix; suffix++) {
          groupValues.push(group + suffix);
        }
        groupValues.filter(isInAllValues);
        soundVal = groupValues[Math.floor(Math.random() * groupValues.length)].toLowerCase();
        break;
      }
    }
  }

  if (!skin.soundFiles[soundVal]) {
    throw new RangeError("Incorrect parameter: " + opts.soundName);
  }

  var skinSoundMetadata = utils.valueOr(skin.soundMetadata, []);
  var playbackOptions = Object.assign({
    volume: 1.0
  }, _lodash2.default.find(skinSoundMetadata, function (metadata) {
    return metadata.name.toLowerCase().trim() === soundVal;
  }));

  Studio.throttledPlaySound(soundVal, playbackOptions);
  Studio.playSoundCount++;
};

/**
 * De-duplicated legwork of finding appropriate options for the given item
 * class.  Does not set things like position and direction - those should
 * be applied on top of the returned options object.
 * @param {string} itemClass
 * @returns {Object} options object that can be passed to item constructor.
 */
Studio.getItemOptionsForItemClass = function (itemClass) {
  var classProperties = utils.valueOr(skin.specialItemProperties[itemClass], {});
  return {
    className: itemClass,
    image: skin[itemClass],
    frames: getFrameCount(itemClass, skin.specialItemProperties, skin.itemFrames),
    loop: true,
    width: classProperties.width,
    height: classProperties.height,
    dir: Direction.NONE,
    speed: Studio.itemSpeed[itemClass],
    normalSpeed: classProperties.speed,
    activity: utils.valueOr(Studio.itemActivity[itemClass], constants.BEHAVIOR_WANDER),
    isHazard: classProperties.isHazard,
    spritesCounterclockwise: classProperties.spritesCounterclockwise,
    renderOffset: utils.valueOr(classProperties.renderOffset, { x: 0, y: 0 }),
    renderScale: utils.valueOr(classProperties.scale, 1),
    animationFrameDuration: classProperties.animationFrameDuration
  };
};

Studio.addItem = function (opts) {

  if (typeof opts.className !== 'string') {
    throw new TypeError("Incorrect parameter: " + opts.className);
  }

  var itemClass = opts.className.toLowerCase().trim();

  if (itemClass === constants.RANDOM_VALUE) {
    itemClass = skin.ItemClassNames[Math.floor(Math.random() * skin.ItemClassNames.length)];
  }

  var skinItem = skin[itemClass];
  if (!skinItem) {
    throw new RangeError("Incorrect parameter: " + opts.className);
  }

  var directions = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST, Direction.NORTHEAST, Direction.SOUTHEAST, Direction.SOUTHWEST, Direction.NORTHWEST];

  // Create stationary, grid-aligned items when skin.gridAlignedMovement,
  // otherwise, create randomly placed items travelling in a random direction.
  // Assumes that sprite[0] is in use, and avoids placing the item too close
  // to that sprite.

  var generateRandomItemPosition = function generateRandomItemPosition() {
    // TODO (cpirich): check for edge collisions? (currently avoided by placing
    // the items within the coordinate space (x/y min of Studio.HALF_SQUARE,
    // max of max - Studio.HALF_SQUARE)

    var pos = {};
    if (level.itemGridAlignedMovement) {
      pos.x = Studio.HALF_SQUARE + Studio.SQUARE_SIZE * Math.floor(Math.random() * Studio.COLS);
      pos.y = Studio.HALF_SQUARE + Studio.SQUARE_SIZE * Math.floor(Math.random() * Studio.ROWS);
    } else {
      pos.x = Studio.HALF_SQUARE + Math.floor(Math.random() * (Studio.MAZE_WIDTH - Studio.SQUARE_SIZE));
      pos.y = Studio.HALF_SQUARE + Math.floor(Math.random() * (Studio.MAZE_HEIGHT - Studio.SQUARE_SIZE));
    }
    return pos;
  };

  var pos = generateRandomItemPosition();
  var dir = level.itemGridAlignedMovement ? Direction.NONE : directions[Math.floor(Math.random() * directions.length)];
  var itemOptions = Object.assign({}, Studio.getItemOptionsForItemClass(itemClass), {
    x: pos.x,
    y: pos.y,
    dir: dir
  });
  var item = new _Item2.default(itemOptions);

  if (Studio.wallMapCollisions) {
    // TODO (cpirich): just move within the map looking for open spaces instead
    // of randomly retrying random numbers

    var numTries = 0;
    var minDistanceFromSprite = 100;
    while (Studio.walls.willCollidableTouchWall(item, item.x, item.y) || Studio.getDistance(Studio.sprite[0].x + Studio.sprite[0].width / 2, Studio.sprite[0].y + Studio.sprite[0].height / 2, item.x, item.y) < minDistanceFromSprite) {
      var newPos = generateRandomItemPosition();
      item.x = newPos.x;
      item.y = newPos.y;
      numTries++;
      if (numTries > 100) {
        break;
      }
    }
  }

  item.createElement(document.getElementById('spriteLayer'));
  Studio.items.push(item);
};

Studio.getDistance = function (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

Studio.setItemActivity = function (opts) {

  if (typeof opts.className !== 'string') {
    throw new TypeError("Incorrect parameter: " + opts.className);
  }

  var itemClass = opts.className.toLowerCase().trim();

  if (itemClass === constants.RANDOM_VALUE) {
    itemClass = skin.ItemClassNames[Math.floor(Math.random() * skin.ItemClassNames.length)];
  }

  var skinItem = skin[itemClass];
  if (!skinItem) {
    throw new RangeError("Incorrect parameter: " + opts.className);
  }

  if (opts.type === constants.BEHAVIOR_WANDER || opts.type === constants.BEHAVIOR_CHASE || opts.type === constants.BEHAVIOR_FLEE || opts.type === constants.BEHAVIOR_STOP) {
    // retain this activity type for items of this class created in the future:
    Studio.itemActivity[itemClass] = opts.type;
    Studio.items.forEach(function (item) {
      if (item.className === itemClass) {
        item.setActivity(opts.type, 0);

        // For verifying success, record this combination of activity type and
        // item type.

        if (!Studio.trackedBehavior.setActivityRecord) {
          Studio.trackedBehavior.setActivityRecord = [];
        }

        if (!Studio.trackedBehavior.setActivityRecord[itemClass]) {
          Studio.trackedBehavior.setActivityRecord[itemClass] = [];
        }

        Studio.trackedBehavior.setActivityRecord[itemClass][opts.type] = true;
      }
    });
  }
};

Studio.setItemSpeed = function (opts) {

  if (typeof opts.className !== 'string') {
    throw new TypeError("Incorrect parameter: " + opts.className);
  }

  var itemClass = opts.className.toLowerCase().trim();

  if (itemClass === constants.RANDOM_VALUE) {
    itemClass = skin.ItemClassNames[Math.floor(Math.random() * skin.ItemClassNames.length)];
  }

  var skinItem = skin[itemClass];
  if (!skinItem) {
    throw new RangeError("Incorrect parameter: " + opts.className);
  }

  // convert speed string parameter to appropriate numerical speed for this class:
  var newSpeed = utils.valueOr(skin.specialItemProperties[itemClass].speed, constants.DEFAULT_ITEM_SPEED);

  if (opts.speed.toLowerCase() === 'fast') {
    newSpeed = Math.floor(newSpeed * 2);
  } else if (opts.speed.toLowerCase() === 'slow') {
    newSpeed = Math.floor(newSpeed / 2);
  }

  // retain this speed value for items of this class created in the future:
  Studio.itemSpeed[itemClass] = newSpeed;
  Studio.items.forEach(function (item) {
    if (item.className === itemClass) {
      item.setSpeed(newSpeed);
    }
  });
};

Studio.showDebugInfo = function (opts) {
  showDebugInfo = opts.value;
};

Studio.vanishActor = function (opts) {
  var spriteLayer = document.getElementById('spriteLayer');

  var spriteIndex = opts.spriteIndex;
  if (spriteIndex < 0 || spriteIndex >= Studio.spriteCount) {
    throw new RangeError("Incorrect parameter: " + spriteIndex);
  }
  var sprite = Studio.sprite[spriteIndex];
  var spriteShowing = sprite.visible || sprite.isFading();

  if (!spriteShowing) {
    return;
  }

  var explosion = document.getElementById('explosion' + spriteIndex);
  var explosionClipRect;
  if (!explosion) {
    var explosionClipPath = document.createElementNS(_constants2.SVG_NS, 'clipPath');
    explosionClipPath.setAttribute('id', 'explosionClipPath' + spriteIndex);
    explosionClipRect = document.createElementNS(_constants2.SVG_NS, 'rect');
    explosionClipRect.setAttribute('id', 'explosionClipRect' + spriteIndex);
    // TODO (cpirich): sprite size may change later, so this needs to be fixed
    explosionClipRect.setAttribute('width', sprite.height);
    explosionClipRect.setAttribute('height', sprite.width);
    explosionClipPath.appendChild(explosionClipRect);
    spriteLayer.appendChild(explosionClipPath);

    explosion = document.createElementNS(_constants2.SVG_NS, 'image');
    explosion.setAttribute('id', 'explosion' + spriteIndex);
    explosion.setAttribute('visibility', 'hidden');
    explosion.setAttribute('clip-path', 'url(#explosionClipPath' + spriteIndex + ')');
    spriteLayer.insertBefore(explosion, sprite.getElement() || sprite.getLegacyElement());
  }

  // TODO (cpirich): use displayWidth / displayHeight to make vanish explosions
  // compatible with sprites that are scaled
  var frameWidth = sprite.width;
  var numFrames = skin.explosionFrames;

  var centerPos = sprite.getCurrentDrawPosition();
  var topLeftPos = {
    x: centerPos.x - sprite.width / 2,
    y: centerPos.y - sprite.height / 2
  };

  explosion.setAttribute('height', sprite.height);
  explosion.setAttribute('width', numFrames * frameWidth);
  explosion.setAttribute('x', topLeftPos.x);
  explosion.setAttribute('y', topLeftPos.y);

  explosion.setAttribute('visibility', 'visible');

  explosionClipRect = document.getElementById('explosionClipRect' + spriteIndex);
  explosionClipRect.setAttribute('x', topLeftPos.x);
  explosionClipRect.setAttribute('y', topLeftPos.y);

  if (skin.fadeExplosion) {
    sprite.startFade(skin.explosionFrames * skin.timePerExplosionFrame);
  } else {
    Studio.setSprite({
      spriteIndex: spriteIndex,
      value: 'hidden'
    });
  }

  _lodash2.default.range(0, numFrames).forEach(function (i) {
    Studio.perExecutionTimeouts.push(setTimeout(function () {
      explosion.setAttribute('x', topLeftPos.x - i * frameWidth);
    }, i * skin.timePerExplosionFrame));
  });
  Studio.perExecutionTimeouts.push(setTimeout(function () {
    explosion.setAttribute('visibility', 'hidden');
    if (skin.fadeExplosion) {
      // hide the sprite
      Studio.setSprite({
        spriteIndex: spriteIndex,
        value: 'hidden'
      });
      // restore the normal opacity
      sprite.setOpacity(1);
    }
  }, skin.timePerExplosionFrame * (numFrames + 1)));

  // we append the url with the spriteIndex so that each sprites explosion gets
  // treated as being different, otherwise chrome will animate all existing
  // explosions anytime we try to animate one of them
  explosion.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.explosion + "?spriteIndex=" + spriteIndex);
};

Studio.setSpriteEmotion = function (opts) {
  Studio.sprite[opts.spriteIndex].emotion = opts.value;
};

Studio.getSpriteEmotion = function (opts) {
  var emotion = Studio.sprite[opts.spriteIndex].emotion;
  Studio.queueCallback(opts.callback, [emotion]);
};

Studio.setSpriteSpeed = function (opts) {
  var speed = Math.min(Math.max(opts.value, constants.SpriteSpeed.SLOW), constants.SpriteSpeed.VERY_FAST);
  Studio.sprite[opts.spriteIndex].setSpeed(speed);
};

var DROID_SPEEDS = {
  slow: constants.SpriteSpeed.SLOW,
  normal: constants.SpriteSpeed.NORMAL,
  fast: constants.SpriteSpeed.VERY_FAST
};

Studio.setDroidSpeed = function (opts) {

  if (typeof opts.value !== 'string') {
    throw new TypeError("Incorrect parameter: " + opts.value);
  }

  var speedValue = opts.value.toLowerCase().trim();

  if (speedValue === constants.RANDOM_VALUE) {
    speedValue = utils.randomKey(DROID_SPEEDS);
  }

  var speedNumericVal = DROID_SPEEDS[speedValue];
  if (typeof speedNumericVal === 'undefined') {
    throw new RangeError("Incorrect parameter: " + opts.value);
  }

  opts.value = speedNumericVal;
  opts.spriteIndex = Studio.protaganistSpriteIndex || 0;
  Studio.setSpriteSpeed(opts);
};

Studio.setSpriteSize = function (opts) {
  var sprite = Studio.sprite[opts.spriteIndex];
  if (sprite.size === opts.value) {
    return;
  }

  sprite.size = opts.value;
  var curSpriteValue = sprite.value;

  if (curSpriteValue !== 'hidden') {
    // Unset .image and .legacyImage so that setSprite's calls to
    // setImage and setLegacyImage will complete.
    // In the future, an implementation that allows for setSpriteSize to
    // update the display more precisely would be valuable.
    // TODO because we skip this step when the sprite is hidden, the
    // following case will not work:
    //    setSprite 'witch'
    //    setSprite 'hidden'
    //    setSpriteSize 0.5
    //    setSprite 'visible'
    // Since setSpriteSize and 'visible' are currently never in the same
    // level, this is not a problem right now, but it would be good to
    // eventually address.
    sprite.image = undefined;
    sprite.legacyImage = undefined;
    // call setSprite with existing index/value now that we changed the size
    Studio.setSprite({
      spriteIndex: opts.spriteIndex,
      value: curSpriteValue
    });

    if (sprite.bubbleVisible) {
      createSpeechBubble(opts.spriteIndex, sprite.bubbleText);
    }
  }
};

Studio.changeScore = function (opts) {
  Studio.adjustScore(Studio.paramAsNumber(opts.value));
};

Studio.reduceScore = function (opts) {
  Studio.adjustScore(-1 * Studio.paramAsNumber(opts.value));
};

Studio.setScore = function (value) {
  Studio.adjustScore(Studio.paramAsNumber(value) - Studio.playerScore);
};

Studio.paramAsNumber = function (value) {
  if (typeof value !== 'number' && (typeof value !== 'string' || isNaN(value))) {
    throw new TypeError("Incorrect parameter: " + value);
  }
  return Number(value);
};

Studio.adjustScore = function (value) {

  Studio.playerScore += value;

  Studio.displayFloatingScore(value);

  if (Studio.playerScore - value < 1000 && Studio.playerScore >= 1000) {
    callHandler('whenScore1000');
  }
};

Studio.setScoreText = function (opts) {
  Studio.scoreText = opts.text;
  Studio.displayScore();
};

Studio.setVictoryText = function (opts) {
  Studio.victoryText = opts.text;
  Studio.displayVictoryText();
};

Studio.endGame = function (opts) {
  if (typeof opts.value !== 'string') {
    throw new TypeError("Incorrect parameter: " + opts.value);
  }

  var winValue = opts.value.toLowerCase().trim();

  if (winValue === "win") {
    Studio.trackedBehavior.hasWonGame = true;
    Studio.setVictoryText({ text: _locale4.default.winMessage() });
  } else if (winValue === "lose") {
    Studio.trackedBehavior.hasLostGame = true;
    Studio.setVictoryText({ text: _locale4.default.loseMessage() });
  } else {
    throw new RangeError("Incorrect parameter: " + opts.value);
  }

  Studio.gameState = Studio.GameStates.OVER;
};

Studio.setBackground = function (opts) {

  if (typeof opts.value !== 'string') {
    throw new TypeError("Incorrect parameter: " + opts.value);
  }

  var backgroundValue = opts.value.toLowerCase().trim();

  if (backgroundValue === constants.RANDOM_VALUE) {
    // NOTE: never select the last item from backgroundChoicesK1, since it is
    // presumed to be the "random" item for blockly
    // NOTE: the [1] index in the array contains the name parameter with an
    // additional set of quotes
    var quotedBackground = skin.backgroundChoicesK1[Math.floor(Math.random() * (skin.backgroundChoicesK1.length - 1))][1];
    // Remove the outer quotes:
    backgroundValue = quotedBackground.replace(/^"(.*)"$/, '$1');
  }

  var skinBackground = skin[backgroundValue];
  if (!skinBackground) {
    throw new RangeError("Incorrect parameter: " + opts.value);
  }

  if (backgroundValue !== Studio.background) {
    Studio.background = backgroundValue;
    Studio.walls.setBackground(backgroundValue);

    var element = document.getElementById('background');
    element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skinBackground.background);

    // Draw the tiles (again) now that we know which background we're using.
    if (Studio.wallMapCollisions) {
      // Changing background can cause a change in the map used internally,
      // since we might use a different map to suit this background, so set
      // the map again.
      if (Studio.wallMapRequested) {
        Studio.setMap({ value: Studio.wallMapRequested, forceRedraw: true });
      }
    }

    Studio.loadClouds();
  }
};

/**
 * Set the wall map.
 * @param {string} opts.value - The name of the wall map.
 * @param {boolean} opts.forceRedraw - Force drawing map, even if it's already set.
 * @param {string} opts.color - The color to draw the wall, for collisionMaskWalls
 */
Studio.setMap = function (opts) {

  if (typeof opts.value !== 'string') {
    throw new TypeError("Incorrect parameter: " + opts.value);
  }

  var mapValue = opts.value.toLowerCase().trim();

  if (mapValue === constants.RANDOM_VALUE) {
    // NOTE: never select the first item from mapChoices, since it is
    // presumed to be the "random" item for blockly
    // NOTE: the [1] index in the array contains the name parameter with an
    // additional set of quotes
    var quotedMap = skin.mapChoices[Math.floor(1 + Math.random() * (skin.mapChoices.length - 1))][1];
    // Remove the outer quotes:
    mapValue = quotedMap.replace(/^"(.*)"$/, '$1');
  }

  var useMap;

  if (mapValue === 'default') {
    // Treat 'default' as resetting to the level's map (Studio.wallMap = null)
    useMap = null;
  } else if (skin.getMap) {
    // Give the skin a chance to adjust the map name depending upon the
    // background name.
    useMap = skin.getMap(Studio.background, mapValue);
  } else {
    useMap = mapValue;
  }

  if (useMap !== null && !skin[useMap] && !(skin.wallMaps && skin.wallMaps[useMap])) {
    throw new RangeError("Incorrect parameter: " + opts.value);
  }

  if (!opts.forceRedraw && useMap === Studio.wallMap && (!opts.color || opts.color === Studio.wallColor)) {
    return;
  }

  // Use the actual map for collisions, rendering, etc.
  Studio.wallMap = useMap;
  Studio.wallMapCollisions = true;
  Studio.walls.setWallMapRequested(useMap);

  // Remember the requested name so that we can reuse it next time the
  // background is changed.
  Studio.wallMapRequested = opts.value;

  if (opts.color && Studio.wallColor !== opts.color) {
    Studio.wallColor = opts.color;
    Studio.walls.setColor(opts.color);
  }

  // Draw the tiles (again) now that we know which background we're using.
  (0, _jquery2.default)(".tileClip").remove();
  (0, _jquery2.default)(".tile").remove();
  Studio.tiles = [];
  Studio.drawMapTiles();

  Studio.fixSpriteLocation();

  sortDrawOrder();
};

/**
 * A call to setMap might place a wall on top of the sprite.  In that case,
 * find a new nearby location for the sprite that doesn't have a wall.
 * Currently a work in progress with known issues.
 */
Studio.fixSpriteLocation = function () {
  if (Studio.wallMapCollisions) {

    for (var spriteIndex = 0; spriteIndex < Studio.sprite.length; spriteIndex++) {
      var sprite = Studio.sprite[spriteIndex];
      var position = getNextPosition(spriteIndex, false);

      if (Studio.willSpriteTouchWall(sprite, position.x, position.y)) {

        // Let's assume that one of the surrounding 8 squares is available.
        // (Note: this is a major assumption predicated on level design.)

        var xCenter = position.x + sprite.width / 2;
        var yCenter = position.y + sprite.height / 2;

        xCenter += skin.wallCollisionRectOffsetX + skin.wallCollisionRectWidth / 2;
        yCenter += skin.wallCollisionRectOffsetY + skin.wallCollisionRectHeight / 2;

        var xGrid = Math.floor(xCenter / Studio.SQUARE_SIZE);
        var yGrid = Math.floor(yCenter / Studio.SQUARE_SIZE);

        var minRow = Math.max(yGrid - 1, 0);
        var maxRow = Math.min(yGrid + 1, Studio.ROWS - 1);
        var minCol = Math.max(xGrid - 1, 0);
        var maxCol = Math.min(xGrid + 1, Studio.COLS - 1);

        for (var row = minRow; row <= maxRow; row++) {
          for (var col = minCol; col <= maxCol; col++) {
            var tryX = Studio.HALF_SQUARE + Studio.SQUARE_SIZE * col - sprite.width / 2 - skin.wallCollisionRectOffsetX;
            var tryY = Studio.HALF_SQUARE + Studio.SQUARE_SIZE * row - sprite.height / 2 - skin.wallCollisionRectOffsetY;
            if (!Studio.willSpriteTouchWall(sprite, tryX, tryY)) {
              sprite.x = tryX;
              sprite.y = tryY;
              sprite.setDirection(Direction.NONE);
              return;
            }
          }
        }
      }
    }
  }
};

/**
 * Sets an actor to be a specific sprite, or alternatively to be hidden.
 * @param opts.value {string} Name of sprite, or 'hidden'
 * @param opts.spriteIndex {number} Index of the sprite
 */
Studio.setSprite = function (opts) {

  if (typeof opts.value !== 'string') {
    throw new TypeError("Incorrect parameter: " + opts.value);
  }

  var spriteValue = opts.value.toLowerCase().trim();

  if (spriteValue === constants.RANDOM_VALUE) {
    spriteValue = skin.avatarList[Math.floor(Math.random() * skin.avatarList.length)];
  }

  var skinSprite = skin[spriteValue];
  if (!skinSprite && spriteValue !== 'hidden' && spriteValue !== 'visible') {
    throw new RangeError("Incorrect parameter: " + opts.value);
  }

  var spriteIndex = opts.spriteIndex;
  if (spriteIndex < 0 || spriteIndex >= Studio.spriteCount) {
    throw new RangeError("Incorrect parameter: " + spriteIndex);
  }
  var sprite = Studio.sprite[spriteIndex];

  sprite.visible = spriteValue !== 'hidden' && !opts.forceHidden;

  sprite.value = opts.forceHidden ? 'hidden' : spriteValue;
  if (spriteValue === 'hidden' || spriteValue === 'visible') {
    return;
  }

  sprite.imageName = spriteValue;
  sprite.frameCounts = skinSprite.frameCounts;
  sprite.setNormalFrameDuration(skinSprite.animationFrameDuration);
  sprite.drawScale = utils.valueOr(skinSprite.drawScale, 1);
  // Reset height and width:
  if (skin.gridAlignedMovement) {
    // This mode only works properly with square sprites
    sprite.height = sprite.width = Studio.SQUARE_SIZE;
    sprite.size = sprite.width / skin.spriteWidth;

    sprite.drawHeight = sprite.drawScale * sprite.size * skin.spriteHeight;
    sprite.drawWidth = sprite.drawScale * sprite.size * skin.spriteWidth;
  } else {
    sprite.drawHeight = sprite.height = sprite.drawScale * sprite.size * skin.spriteHeight;
    sprite.drawWidth = sprite.width = sprite.drawScale * sprite.size * skin.spriteWidth;
  }
  if (skin.projectileSpriteHeight) {
    sprite.projectileSpriteHeight = sprite.size * skin.projectileSpriteHeight;
  }
  if (skin.projectileSpriteWidth) {
    sprite.projectileSpriteWidth = sprite.size * skin.projectileSpriteWidth;
  }

  sprite.setImage(skinSprite.walk, sprite.frameCounts);
  sprite.setLegacyImage(skinSprite.sprite, sprite.frameCounts);

  sprite.createElement(document.getElementById('spriteLayer'));

  var element = sprite.getLegacyElement();
  if (element) {
    _dom2.default.addMouseDownTouchEvent(sprite.getLegacyElement(), delegate(this, Studio.onSpriteClicked, spriteIndex));
  }
  element = sprite.getElement();
  if (element) {
    _dom2.default.addMouseDownTouchEvent(sprite.getElement(), delegate(this, Studio.onSpriteClicked, spriteIndex));
  }

  // Set up movement audio for the selected sprite (clips should be preloaded)
  // First, stop any movement audio for the current character.
  Studio.movementAudioOff();
  if (!Studio.movementAudioEffects[spriteValue] && skin.avatarList) {
    var spriteSkin = skin[spriteValue] || {};
    var audioConfig = spriteSkin.movementAudio || [];
    Studio.movementAudioEffects[spriteValue] = [];
    Studio.movementAudioEffects[spriteValue] = audioConfig.map(function (audioOption) {
      return new _ThreeSliceAudio2.default(_Sounds2.default.getSingleton(), audioOption);
    });
  }
  Studio.currentSpriteMovementAudioEffects = Studio.movementAudioEffects[spriteValue];

  // call display right away since the frame number may have changed:
  Studio.displaySprite(spriteIndex);
};

Studio.getSpriteVisibility = function (opts) {
  var visibility = Studio.sprite[opts.spriteIndex].visible;
  Studio.queueCallback(opts.callback, [visibility]);
};

Studio.getSpriteValue = function (opts) {
  var value = Studio.sprite[opts.spriteIndex].value;
  Studio.queueCallback(opts.callback, [value]);
};

var moveAudioState = false;
Studio.isMovementAudioOn = function () {
  return moveAudioState;
};

Studio.movementAudioOn = function () {
  Studio.movementAudioOff();
  Studio.currentMovementAudio = Studio.currentSpriteMovementAudioEffects[Math.floor(Math.random() * Studio.currentSpriteMovementAudioEffects.length)];
  if (Studio.currentMovementAudio) {
    Studio.currentMovementAudio.on();
  }
  moveAudioState = true;
};

Studio.movementAudioOff = function () {
  if (Studio.currentMovementAudio) {
    Studio.currentMovementAudio.off();
  }
  moveAudioState = false;
};

var p = function p(x, y) {
  return x + " " + y + " ";
};

var TIP_HEIGHT = 15;
var TIP_WIDTH = 25;
var TIP_X_SHIFT = 10;

//
// createSpeechBubblePath creates a SVG path that looks like a rounded rect
// plus a 'tip' that points back to the sprite.
//
// x, y is the top left position. w, h, r are width/height/radius (for corners)
// onTop, onRight are booleans that are used to tell this function if the
// bubble is appearing on top and on the right of the sprite, tipOffset is how
// far in from the corner to draw the tip.
//
// Thanks to Remy for the original rounded rect path function
/*
http://www.remy-mellet.com/blog/179-draw-rectangle-with-123-or-4-rounded-corner/
*/

var createSpeechBubblePath = function createSpeechBubblePath(x, y, w, h, r, onTop, onRight, tipOffset) {
  var strPath = "M" + p(x + r, y); //A
  if (!onTop) {
    if (onRight) {
      strPath += "L" + p(x + r + tipOffset, y);
      strPath += "L" + p(x + r - TIP_X_SHIFT + tipOffset, y - TIP_HEIGHT) + "L" + p(x + r + TIP_WIDTH + tipOffset, y);
    } else {
      strPath += "L" + p(x + w - r - TIP_WIDTH - tipOffset, y) + "L" + p(x + w - TIP_X_SHIFT - tipOffset, y - TIP_HEIGHT);
      strPath += "L" + p(x + w - r - tipOffset, y);
    }
  }
  strPath += "L" + p(x + w - r, y);
  strPath += "Q" + p(x + w, y) + p(x + w, y + r); //B
  strPath += "L" + p(x + w, y + h - r) + "Q" + p(x + w, y + h) + p(x + w - r, y + h); //C
  if (onTop) {
    if (onRight) {
      strPath += "L" + p(x + r + TIP_WIDTH + tipOffset, y + h) + "L" + p(x + r - TIP_X_SHIFT + tipOffset, y + h + TIP_HEIGHT);
      strPath += "L" + p(x + r + tipOffset, y + h);
    } else {
      strPath += "L" + p(x + w - r - tipOffset, y + h);
      strPath += "L" + p(x + w - TIP_X_SHIFT - tipOffset, y + h + TIP_HEIGHT) + "L" + p(x + w - r - TIP_WIDTH - tipOffset, y + h);
    }
  }
  strPath += "L" + p(x + r, y + h);
  strPath += "Q" + p(x, y + h) + p(x, y + h - r); //D
  strPath += "L" + p(x, y + r) + "Q" + p(x, y) + p(x + r, y); //A
  strPath += "Z";
  return strPath;
};

var onWaitComplete = function onWaitComplete(opts) {
  if (!opts.complete) {
    if (opts.waitCallback) {
      opts.waitCallback();
    }
    opts.complete = true;
  }
};

Studio.wait = function (opts) {
  if (!opts.started) {
    opts.started = true;

    // opts.value is the number of milliseconds to wait - or 'click' which means
    // "wait for click"
    if ('click' === opts.value) {
      opts.waitForClick = true;
    } else {
      opts.waitTimeout = window.setTimeout(delegate(this, onWaitComplete, opts), opts.value);
    }
  }

  return opts.complete;
};

Studio.hideTitleScreen = function (opts) {
  var tsTitle = document.getElementById('titleScreenTitle');
  var tsTextGroup = document.getElementById('titleScreenTextGroup');
  tsTitle.setAttribute('visibility', 'hidden');
  tsTextGroup.setAttribute('visibility', 'hidden');

  opts.complete = true;
};

Studio.showTitleScreen = function (opts) {
  if (!opts.started) {
    opts.started = true;
    var tsTitle = document.getElementById('titleScreenTitle');
    var tsTextGroup = document.getElementById('titleScreenTextGroup');
    var tsText = document.getElementById('titleScreenText');
    var tsTextRect = document.getElementById('titleScreenTextRect');
    tsTitle.textContent = opts.title;
    var svgTextOpts = {
      'svgText': tsText,
      'text': opts.text,
      'width': TITLE_SCREEN_TEXT_WIDTH,
      'maxWidth': TITLE_SCREEN_TEXT_WIDTH,
      'lineHeight': TITLE_SCREEN_TEXT_LINE_HEIGHT,
      'topMargin': TITLE_SCREEN_TEXT_TOP_MARGIN,
      'sideMargin': TITLE_SCREEN_TEXT_SIDE_MARGIN,
      'maxLines': TITLE_SCREEN_TEXT_MAX_LINES,
      'fullHeight': TITLE_SCREEN_TEXT_HEIGHT
    };
    var tsTextHeight = setSvgText(svgTextOpts).height;
    tsTextRect.setAttribute('height', tsTextHeight);

    tsTitle.setAttribute('visibility', 'visible');
    tsTextGroup.setAttribute('visibility', 'visible');

    // Wait for a click or a timeout
    opts.waitForClick = true;
    opts.waitCallback = delegate(this, Studio.hideTitleScreen, opts);
    opts.waitTimeout = window.setTimeout(delegate(this, onWaitComplete, opts), TITLE_SCREEN_TIMEOUT);
  }

  return opts.complete;
};

Studio.isCmdCurrentInQueue = function (cmdName, queueName) {
  var foundCmd = false;
  Studio.eventHandlers.forEach(function (handler) {
    if (handler.name === queueName) {
      var cmd = handler.cmdQueue[0];

      if (cmd && cmd.name === cmdName) {
        foundCmd = true;
        // would like to break, but can't do that in forEach
      }
    }
  });
  return foundCmd;
};

/**
 * Helper for Studio methods which read state. Because they must
 * implement callbacks to correctly read and handle that state in the
 * user's program, they need to be able to schedule the execution of
 * those callbacks at the appropriate time.
 *
 * @param {function} the method to be queued
 * @param {Array} the arguments to be passed to that method
 */
Studio.queueCallback = function (callback, args) {
  var handlerName = 'callbackQueue' + Studio.callbackQueueIndex;
  Studio.callbackQueueIndex++;

  // Shift a CallExpression node on the stack that already has its func_,
  // arguments, and other state populated:
  args = args || [''];
  var intArgs = args.map(function (arg) {
    return Studio.interpreter.createPrimitive(arg);
  });
  var state = {
    node: {
      type: 'CallExpression',
      arguments: intArgs, /* this just needs to be an array of the same size */
      // give this node an end so that the interpreter doesn't treat it
      // like polyfill code and do weird weird scray terrible things.
      end: 1
    },
    doneCallee_: true,
    func_: callback,
    arguments_: intArgs,
    n_: intArgs.length
  };

  registerEventHandler(Studio.eventHandlers, handlerName, function () {
    // remove the last argument because stepCallExpression always wants to push it back on.
    if (state.arguments_.length > 0) {
      state.value = state.arguments_.pop();
    }

    var depth = Studio.interpreter.pushStackFrame(state);
    Studio.interpreter.paused_ = false;
    while (Studio.interpreter.getStackDepth() >= depth) {
      Studio.interpreter.step();
    }
    Studio.interpreter.paused_ = true;
  });
  callHandler(handlerName);
};

/**
 * Pause execution and display a prompt for user input. When the user presses
 * enter or clicks "Submit", resume execution.
 * @param question
 * @param callback
 */
Studio.askForInput = function (question, callback) {
  Studio.pauseExecution();

  var viz = document.getElementById('visualization');
  var target = document.createElement('div');
  Object.assign(target.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '400px',
    height: '400px'
  });
  viz.appendChild(target);
  (0, _StudioApp.singleton)().resizeVisualization();

  Studio.inputPromptElement = target;

  function onInputReceived(value) {
    Studio.resumeExecution();
    Studio.hideInputPrompt();
    Studio.queueCallback(callback, [value]);
  }

  _reactDom2.default.render(_react2.default.createElement(_InputPrompt2.default, { question: question, onInputReceived: onInputReceived }), target);
};

Studio.hideInputPrompt = function () {
  var target = Studio.inputPromptElement;

  if (target) {
    _reactDom2.default.unmountComponentAtNode(target);
    target.parentNode.removeChild(target);
    Studio.inputPromptElement = null;
  }
};

Studio.hideSpeechBubble = function (opts) {
  var speechBubble = document.getElementById('speechBubble' + opts.spriteIndex);
  speechBubble.setAttribute('visibility', 'hidden');
  speechBubble.removeAttribute('onTop');
  speechBubble.removeAttribute('onRight');
  speechBubble.removeAttribute('height');
  opts.complete = true;
  Studio.sprite[opts.spriteIndex].bubbleVisible = false;
  delete Studio.sprite[opts.spriteIndex].bubbleTimeoutFunc;
  Studio.sayComplete++;
};

Studio.saySprite = function (opts) {
  if (opts.started) {
    return opts.complete;
  }

  var spriteIndex = opts.spriteIndex;
  var sprite = Studio.sprite[spriteIndex];
  if (!sprite) {
    return;
  }

  opts.started = true;

  // Remove any existing speech bubble on this sprite:
  if (sprite.bubbleTimeoutFunc) {
    sprite.bubbleTimeoutFunc();
  }
  window.clearTimeout(sprite.bubbleTimeout);

  if (!sprite.visible) {
    opts.complete = true;
    return opts.complete;
  }

  createSpeechBubble(spriteIndex, opts.text);

  // displaySprite will reposition the bubble
  Studio.displaySprite(opts.spriteIndex);
  var speechBubble = document.getElementById('speechBubble' + spriteIndex);
  speechBubble.setAttribute('visibility', 'visible');

  sprite.bubbleVisible = true;
  sprite.bubbleText = opts.text;
  sprite.bubbleTimeoutFunc = delegate(this, Studio.hideSpeechBubble, opts);
  sprite.bubbleTimeout = window.setTimeout(sprite.bubbleTimeoutFunc, opts.seconds * 1000);

  return opts.complete;
};

var createSpeechBubble = function createSpeechBubble(spriteIndex, text) {
  // Start creating the new speech bubble:
  var bblText = document.getElementById('speechBubbleText' + spriteIndex);
  var sprite = Studio.sprite[spriteIndex];

  var availableHeight = (Studio.MAZE_HEIGHT - sprite.height) / 2;
  var maxLines = Math.floor((availableHeight - 2 * SPEECH_BUBBLE_PADDING - 2 * SPEECH_BUBBLE_TOP_MARGIN) / SPEECH_BUBBLE_LINE_HEIGHT);
  var svgTextOpts = {
    'svgText': bblText,
    'text': text,
    'width': SPEECH_BUBBLE_MIN_WIDTH,
    'maxWidth': SPEECH_BUBBLE_MAX_WIDTH,
    'lineHeight': SPEECH_BUBBLE_LINE_HEIGHT,
    'topMargin': SPEECH_BUBBLE_TOP_MARGIN,
    'sideMargin': SPEECH_BUBBLE_SIDE_MARGIN,
    'maxLines': maxLines,
    'fullHeight': maxLines * SPEECH_BUBBLE_LINE_HEIGHT + 2 * SPEECH_BUBBLE_PADDING + 2 * SPEECH_BUBBLE_TOP_MARGIN
  };
  var bblSize = setSvgText(svgTextOpts);
  var speechBubblePath = document.getElementById('speechBubblePath' + spriteIndex);

  speechBubblePath.setAttribute('height', bblSize.height);
  speechBubblePath.setAttribute('width', bblSize.width);
  updateSpeechBubblePath(speechBubblePath);
};

Studio.stop = function (opts) {
  cancelQueuedMovements(opts.spriteIndex, true);
  cancelQueuedMovements(opts.spriteIndex, false);
  Studio.sprite[opts.spriteIndex].setActivity(constants.BEHAVIOR_STOP);

  if (!opts.dontResetCollisions) {
    // Reset collisionMasks so the next movement will fire another collision
    // event against the same sprite if needed. This makes it easier to write code
    // that says "when sprite X touches Y" => "stop sprite X", and have it do what
    // you expect it to do...
    var sprite = Studio.sprite[opts.spriteIndex];
    if (!sprite) {
      return;
    }
    sprite.clearCollisions();
    for (var i = 0; i < Studio.spriteCount; i++) {
      if (i === opts.spriteIndex) {
        continue;
      }
      Studio.sprite[i].endCollision(opts.spriteIndex);
    }
  }
};

/**
 * Launch a projectile from the sprite at options.spriteIndex. If the source
 * sprite isn't visible, do nothing.
 */
Studio.throwProjectile = function (options) {
  if (options.started) {
    return options.complete;
  }
  options.started = true;
  options.complete = false;
  window.setTimeout(function () {
    options.complete = true;
  }, MIN_TIME_BETWEEN_PROJECTILES);

  var sourceSprite = Studio.sprite[options.spriteIndex];
  if (!sourceSprite.visible) {
    return;
  }

  var preventLoop = skin.preventProjectileLoop && skin.preventProjectileLoop(options.className);

  var projectileOptions = {
    frames: getFrameCount(options.className, skin.specialProjectileProperties, skin.projectileFrames),
    className: options.className,
    dir: options.dir,
    image: skin[options.className],
    loop: !preventLoop,
    spriteX: sourceSprite.x,
    spriteY: sourceSprite.y,
    spriteHeight: sourceSprite.projectileSpriteHeight || sourceSprite.height,
    spriteWidth: sourceSprite.projectileSpriteWidth || sourceSprite.width
  };

  var projectile = new _projectile2.default(projectileOptions);
  projectile.createElement(document.getElementById('svgStudio'));
  Studio.projectiles.push(projectile);
};

//
// Internal helper to handle makeProjectile calls on a single projectile
//
// Return value: true if projectile was removed from the projectiles array
//

var doMakeProjectile = function doMakeProjectile(projectile, action) {
  if (action === 'bounce') {
    projectile.bounce();
  } else if (action === 'disappear') {
    projectile.removeElement();
    var pos = Studio.projectiles.indexOf(projectile);
    if (-1 !== pos) {
      Studio.projectiles.splice(pos, 1);
      return true;
    }
  } else {
    throw "unknown action in doMakeProjectile";
  }
  return false;
};

Studio.makeProjectile = function (opts) {
  // opts.eventObject will be set when we've had a collision with a particular
  // projectile, otherwise we operate all all of that class
  if (opts.eventObject) {
    doMakeProjectile(opts.eventObject, opts.action);
  } else {
    // No "current" projectile, so apply action to all of them of this class
    for (var i = 0; i < Studio.projectiles.length; i++) {
      if (Studio.projectiles[i].className === opts.className && doMakeProjectile(Studio.projectiles[i], opts.action)) {
        // if this returned true, the projectile was deleted

        // decrement i because we just removed an item from the array. We want
        // to keep i as the same value for the next iteration through this loop
        i--;
      }
    }
  }
};

/**
 * Actors have a class name in the form "0". Returns true if this class is
 * an actor
 */
function isActorClass(className) {
  return (/^\d*$/.test(className)
  );
}

function isEdgeClass(className) {
  return EdgeClassNames.indexOf(className) !== -1;
}

function isProjectileClass(className) {
  return skin.ProjectileClassNames.indexOf(className) !== -1;
}

function isItemClass(className) {
  return skin.ItemClassNames.indexOf(className) !== -1;
}

/**
 * Call the handler for an actor (src) colliding with target
 */
function handleCollision(src, target, allowQueueExtension) {
  var prefix = 'whenSpriteCollided-' + src + '-';

  callHandler(prefix + target, allowQueueExtension);
  callHandler(prefix + 'anything', allowQueueExtension);
  // If dest is just a number, we're colliding with another actor
  if (isActorClass(target)) {
    callHandler(prefix + 'any_actor', allowQueueExtension);
    callHandler(prefix + Studio.sprite[target].imageName, false, [target]);
  } else if (isEdgeClass(target)) {
    callHandler(prefix + 'any_edge', allowQueueExtension);
  } else if (isProjectileClass(target)) {
    callHandler(prefix + 'any_projectile', allowQueueExtension);
  } else if (isItemClass(target)) {
    callHandler(prefix + 'any_item', allowQueueExtension);
  }
}

/**
 * Call the handler for an item colliding with target
 */
function handleItemCollision(src, target, allowQueueExtension) {
  var prefix = 'whenItemCollided-' + src + '-';

  callHandler(prefix + target, allowQueueExtension);

  if (isEdgeClass(target)) {
    callHandler(prefix + 'any_edge', allowQueueExtension);
  }
}

/**
 * Execute the code for an item colliding with target
 */
function executeItemCollision(src, target) {
  var prefix = 'whenItemCollided-' + src + '-';

  Studio.executeQueue(prefix + target);

  if (isEdgeClass(target)) {
    Studio.executeQueue(prefix + 'any_edge');
  }
}

/**
 * Execute the code for an actor (src) colliding with target
 */
function executeCollision(src, target) {
  var srcPrefix = 'whenSpriteCollided-' + src + '-';

  Studio.executeQueue(srcPrefix + target);
  if (isActorClass(target)) {
    Studio.executeQueue(srcPrefix + Studio.sprite[target].imageName);
  }

  // src is always an actor
  Studio.executeQueue(srcPrefix + 'any_actor');
  Studio.executeQueue(srcPrefix + 'anything');
  Studio.executeQueue(srcPrefix + 'goal');

  if (isEdgeClass(target)) {
    Studio.executeQueue(srcPrefix + 'any_edge');
  } else if (isProjectileClass(target)) {
    Studio.executeQueue(srcPrefix + 'any_projectile');
  } else if (isItemClass(target)) {
    Studio.executeQueue(srcPrefix + 'any_item');
  }
}

/**
 * Looks to see if the item is already colliding with target.  If it
 * isn't, it starts the collision and calls the relevant code.
 * @param {Collidable} item colliding
 * @param {string/number} target Class name of the target. String for classes,
 *   index if colliding with another sprite.
 * @param {boolean} allowQueueExtension Passed on to callHandler
 */
Studio.collideItemWith = function (item, target, allowQueueExtension) {
  if (item.startCollision(target)) {
    handleItemCollision(item.className, target, allowQueueExtension);
  }
};

/**
 * Looks to see if the sprite is already colliding with target.  If it isn't, it
 * starts the collision and calls the relevant code.
 * @param {Collidable} spriteIndex colliding
 * @param {string/number} target Class name of the target. String for classes,
 *   index if colliding with another sprite.
 * @param {boolean} allowQueueExtension Passed on to callHandler
 */
Studio.collideSpriteWith = function (spriteIndex, target, allowQueueExtension) {
  var sprite = Studio.sprite[spriteIndex];
  if (sprite.startCollision(target)) {
    handleCollision(spriteIndex, target, allowQueueExtension);
  }
};

Studio.setSpritePosition = function (opts) {
  var sprite = Studio.sprite[opts.spriteIndex];
  if (opts.value) {
    // fill in .x and .y from the constants.Position value in opts.value
    opts.x = utils.xFromPosition(opts.value, Studio.MAZE_WIDTH, sprite.width);
    opts.y = utils.yFromPosition(opts.value, Studio.MAZE_HEIGHT, sprite.height);
  }
  var samePosition = sprite.x === opts.x && sprite.y === opts.y;

  // Don't reset collisions inside stop() if we're in the same position
  Studio.stop({ 'spriteIndex': opts.spriteIndex,
    'dontResetCollisions': samePosition });
  sprite.displayX = sprite.x = opts.x;
  sprite.displayY = sprite.y = opts.y;
  // Reset to "no direction" so no turn animation will take place
  sprite.setDirection(Direction.NONE);
};

Studio.setSpriteXY = function (opts) {
  var sprite = Studio.sprite[opts.spriteIndex];
  var x = opts.x - sprite.width / 2;
  var y = opts.y - sprite.height / 2;
  var samePosition = sprite.x === x && sprite.y === y;

  // Don't reset collisions inside stop() if we're in the same position
  Studio.stop({
    'spriteIndex': opts.spriteIndex,
    'dontResetCollisions': samePosition
  });
  sprite.displayX = sprite.x = x;
  sprite.displayY = sprite.y = y;
  // Reset to "no direction" so no turn animation will take place
  sprite.setDirection(Direction.NONE);
};

Studio.getSpriteXY = function (opts) {
  var sprite = Studio.sprite[opts.spriteIndex];
  Studio.queueCallback(opts.callback, [sprite.x, sprite.y]);
};

function getSpritesByName(name) {
  return Studio.sprite.filter(function (sprite) {
    return sprite.imageName === name && sprite.visible;
  });
}

Studio.setSpriteBehavior = function (opts) {
  Studio.sprite[opts.spriteIndex].setActivity(opts.behavior, opts.targetSpriteIndex);
};

Studio.setSpritesWander = function (opts) {
  getSpritesByName(opts.spriteName).forEach(function (sprite) {
    return sprite.setActivity(constants.BEHAVIOR_WANDER);
  });
};

Studio.setSpritesStop = function (opts) {
  getSpritesByName(opts.spriteName).forEach(function (sprite) {
    return sprite.setActivity(constants.BEHAVIOR_STOP);
  });
};

Studio.setSpritesChase = function (opts) {
  getSpritesByName(opts.spriteName).forEach(function (sprite) {
    return sprite.setActivity(constants.BEHAVIOR_CHASE, opts.targetSpriteIndex);
  });
};

Studio.setSpritesFlee = function (opts) {
  getSpritesByName(opts.spriteName).forEach(function (sprite) {
    return sprite.setActivity(constants.BEHAVIOR_FLEE, opts.targetSpriteIndex);
  });
};

Studio.setSpritesSpeed = function (opts) {
  getSpritesByName(opts.spriteName).forEach(function (sprite) {
    return sprite.speed = opts.speed;
  });
};

Studio.addGoal = function (opts) {
  if (opts.value) {
    var sprite = {
      width: utils.valueOr(skin.goalSpriteWidth, Studio.MARKER_WIDTH),
      height: utils.valueOr(skin.goalSpriteHeight, Studio.MARKER_HEIGHT)
    };
    // fill in .x and .y from the constants.Position value in opts.value
    opts.x = utils.xFromPosition(opts.value, Studio.MAZE_WIDTH, sprite.width);
    opts.y = utils.yFromPosition(opts.value, Studio.MAZE_HEIGHT, sprite.height);
  }

  var goal = {
    finished: false,
    x: opts.x,
    y: opts.y
  };

  Studio.createGoalElements(Studio.allGoals_().length, goal);
  Studio.dynamicSpriteGoals_.push(goal);
  sortDrawOrder();
};

Studio.getPlayspaceBoundaries = function (sprite) {
  var boundaries;

  if (skin.wallCollisionRectWidth && skin.wallCollisionRectHeight && !skin.gridAlignedMovement) {
    boundaries = {
      top: 0 - (sprite.height - skin.wallCollisionRectHeight) / 2 - skin.wallCollisionRectOffsetY,
      right: Studio.MAZE_WIDTH - skin.wallCollisionRectWidth - (sprite.width - skin.wallCollisionRectWidth) / 2 - skin.wallCollisionRectOffsetX,
      bottom: Studio.MAZE_HEIGHT - skin.wallCollisionRectHeight - (sprite.height - skin.wallCollisionRectHeight) / 2 - skin.wallCollisionRectOffsetY,
      left: 0 - (sprite.width - skin.wallCollisionRectWidth) / 2 - skin.wallCollisionRectOffsetX
    };
  } else {
    boundaries = {
      top: 0,
      right: Studio.MAZE_WIDTH - sprite.width,
      bottom: Studio.MAZE_HEIGHT - sprite.height,
      left: 0
    };
  }

  return boundaries;
};

Studio.getSkin = function () {
  return skin;
};

/**
 * For grid-aligned movement, we want a single movement action to take place
 * over several ticks (as opposed to normal movement, which takes place on a
 * per-tick basis). We therefore yield control for the movement duration.
 *
 * @see Studio.turnSingle
 * @see Studio.moveSingle
 */
Studio.yieldGridAlignedTicks = function () {
  Studio.yieldExecutionTicks += 1 + Studio.gridAlignedExtraPauseSteps;
  if (Studio.JSInterpreter) {
    // Stop executing the interpreter in a tight loop and yield the current
    // execution tick:
    Studio.JSInterpreter.yield();
    // Highlight the code in the editor so the student can see the progress
    // of their program:
    Studio.JSInterpreter.selectCurrentCode();
  }

  Studio.movementAudioOn();
};

/**
 * For executing a single "goLeft" or "goNorth" sort of command in student code.
 * Moves the avatar by a different amount.
 * Has slightly different behaviors depending on whether the level is configured
 * for discrete, grid-based movement or free movement.
 * @param {Object} opts
 * @param {Direction} opts.dir - The direction in which the sprite should move.
 * @param {number} opts.spriteIndex
 * @param {boolean} opts.backward - whether the sprite should move toward
 *        (default) or away from the given direction
 */
Studio.turnSingle = function (opts) {
  if (!skin.gridAlignedMovement) {
    throw new TypeError("Studio.turnSingle is only valid in grid-aligned mode");
  }

  var sprite = Studio.sprite[opts.spriteIndex];
  sprite.lastMove = Studio.tickCount;
  sprite.setActivity(constants.BEHAVIOR_GRID_ALIGNED);
  sprite.addAction(new _spriteActions.GridTurn(opts.dir, skin.slowExecutionFactor));

  Studio.yieldGridAlignedTicks();
  Studio.lastMoveSingleDir = opts.dir;
};

/**
 * For executing a single "goLeft" or "goNorth" sort of command in student code.
 * Moves the avatar by a different amount.
 * Has slightly different behaviors depending on whether the level is configured
 * for discrete, grid-based movement or free movement.
 * @param {Object} opts
 * @param {Direction} opts.dir - The direction in which the sprite should move.
 * @param {number} opts.spriteIndex
 * @param {boolean} opts.backward - whether the sprite should move toward
 *        (default) or away from the given direction
 */
Studio.moveSingle = function (opts) {
  var sprite = Studio.sprite[opts.spriteIndex];
  sprite.lastMove = Studio.tickCount;
  var distance = skin.gridAlignedMovement ? Studio.SQUARE_SIZE : sprite.speed;
  var wallCollision = false;
  var playspaceEdgeCollision = false;
  var deltaX = 0,
      deltaY = 0;

  switch (opts.dir) {
    case Direction.NORTH:
      deltaY = -distance;
      break;
    case Direction.EAST:
      deltaX = distance;
      break;
    case Direction.SOUTH:
      deltaY = distance;
      break;
    case Direction.WEST:
      deltaX = -distance;
      break;
  }

  if (opts.backward) {
    deltaX *= -1;
    deltaY *= -1;
  }

  var projectedX = sprite.x + deltaX;
  var projectedY = sprite.y + deltaY;

  if (Studio.wallMapCollisions && Studio.willSpriteTouchWall(sprite, projectedX, projectedY)) {
    wallCollision = true;

    // Since we never overlap the wall/obstacle when blockMovingIntoWalls
    // is set, throttle the event so it doesn't fire every frame while
    // attempting to move into a wall:

    Studio.throttledCollideSpriteWithWallFunctions[opts.spriteIndex]();
  }

  if (!Studio.allowSpritesOutsidePlayspace && Studio.willSpriteLeavePlayspace(sprite, projectedX, projectedY)) {
    playspaceEdgeCollision = true;
  }

  if (skin.gridAlignedMovement) {
    sprite.setActivity(constants.BEHAVIOR_GRID_ALIGNED);
    if (wallCollision || playspaceEdgeCollision) {
      sprite.addAction(new _spriteActions.GridMoveAndCancel(deltaX, deltaY, skin.slowExecutionFactor, opts.backward));
    } else {
      sprite.addAction(new _spriteActions.GridMove(deltaX, deltaY, skin.slowExecutionFactor, opts.backward));
    }

    Studio.yieldGridAlignedTicks();
  } else {
    if (!wallCollision) {
      if (playspaceEdgeCollision) {
        var boundary = Studio.getPlayspaceBoundaries(sprite);
        projectedX = Math.max(boundary.left, Math.min(boundary.right, projectedX));
        projectedY = Math.max(boundary.top, Math.min(boundary.bottom, projectedY));
      }
      sprite.x = projectedX;
      sprite.y = projectedY;
    }

    if (!Studio.isMovementAudioOn()) {
      Studio.movementAudioOn();
    }
  }

  Studio.lastMoveSingleDir = opts.dir;
};

Studio.moveDistance = function (opts) {
  if (!opts.started) {
    opts.started = true;
    if (skin.gridAlignedMovement) {
      opts.distance = Math.ceil(opts.distance / Studio.SQUARE_SIZE) * Studio.SQUARE_SIZE;
    }
    opts.queuedDistance = opts.distance;
  }

  return 0 === opts.queuedDistance;
};

Studio.onEvent = function (opts) {
  registerEventHandler(Studio.eventHandlers, opts.eventName, opts.func);
};

/**
 * Return true if all of the blocks underneath when_run blocks have had their
 * commands executed
 */
Studio.allWhenRunBlocksComplete = function () {
  for (var i = 0; i < Studio.eventHandlers.length; i++) {
    if (Studio.eventHandlers[i].name === 'whenGameStarts' && Studio.eventHandlers[i].cmdQueue.length !== 0) {
      return false;
    }
  }
  return true;
};

Studio.timedOut = function () {
  if (level.timeoutAfterWhenRun) {
    if (level.editCode) {
      // If the interpreter has started handling events, the main body of the
      // program is complete:
      return Studio.JSInterpreter && Studio.JSInterpreter.startedHandlingEvents;
    } else if (Studio.eventHandlers.length === 0 || Studio.eventHandlers.length === 1 && Studio.eventHandlers[0].name === 'whenGameStarts' && Studio.allWhenRunBlocksComplete()) {
      // If the only event block that had children is when_run, and those commands
      // are finished executing, don't wait for the timeout.
      // If we have additional event blocks that DO have children, we don't timeout
      // until timeoutFailureTick
      return true;
    }
  }

  return Studio.tickCount > Studio.timeoutFailureTick;
};

/**
 * Tests whether the sprite is currently at the goal sprite.
 */
function spriteAtGoal(sprite, goal) {
  var goalWidth = utils.valueOr(skin.goalSpriteWidth, Studio.MARKER_WIDTH);
  var goalHeight = utils.valueOr(skin.goalSpriteHeight, Studio.MARKER_HEIGHT);

  var goalCollisionWidth = skin.goalCollisionRectWidth || Studio.MARKER_WIDTH;
  var goalCollisionHeight = skin.goalCollisionRectHeight || Studio.MARKER_HEIGHT;

  var spriteCollisionWidth = skin.itemCollisionRectWidth || sprite.width;
  var spriteCollisionHeight = skin.itemCollisionRectHeight || sprite.height;

  var xSpriteCenter = sprite.x + sprite.width / 2;
  var ySpriteCenter = sprite.y + sprite.height / 2;

  var xFinCenter = goal.x + goalWidth / 2 + utils.valueOr(skin.goalRenderOffsetX, 0);
  var yFinCenter = goal.y + goalHeight / 2 + utils.valueOr(skin.goalRenderOffsetY, 0);

  var distanceScaling = utils.valueOr(skin.finishCollideDistanceScaling, constants.FINISH_COLLIDE_DISTANCE_SCALING);

  Studio.drawDebugRect("goalCollisionSprite", xSpriteCenter, ySpriteCenter, distanceScaling * spriteCollisionWidth, distanceScaling * spriteCollisionHeight);

  Studio.drawDebugRect("goalCollisionGoal", xFinCenter, yFinCenter, distanceScaling * goalCollisionWidth, distanceScaling * goalCollisionHeight);

  var finishCollisionDistance = function finishCollisionDistance(yAxis) {
    var dim1 = yAxis ? spriteCollisionHeight : spriteCollisionWidth;
    var dim2 = yAxis ? goalCollisionHeight : goalCollisionWidth;

    return distanceScaling * (dim1 + dim2) / 2;
  };

  return collisionTest(xSpriteCenter, xFinCenter, finishCollisionDistance(false), ySpriteCenter, yFinCenter, finishCollisionDistance(true));
}

Studio.allGoalsVisited = function () {
  var playSound;
  // If protagonistSpriteIndex is set, the sprite with this index must navigate
  // to the goals.  Otherwise any sprite can navigate to each goal.
  var protagonistSprite = Studio.sprite[Studio.protagonistSpriteIndex];
  var finishedGoals = 0;

  // Can't visit all goals if we don't have any
  if (Studio.allGoals_().length === 0) {
    return false;
  }

  // Can't visit all the goals if the specified sprite doesn't exist
  if (Studio.protagonistSpriteIndex && !protagonistSprite) {
    return false;
  }

  Studio.allGoals_().forEach(function (goal) {
    if (!goal.finished) {
      if (protagonistSprite) {
        var wasGoalFinished = goal.finished;

        goal.finished = spriteAtGoal(protagonistSprite, goal);

        // If goal was just finished, then call the "when actor touches anything handler"
        if (!wasGoalFinished && goal.finished) {
          var allowQueueExtension = false;
          var prefix = 'whenSpriteCollided-' + Studio.protagonistSpriteIndex + '-';
          callHandler(prefix + 'anything', allowQueueExtension);
          callHandler(prefix + 'goal', allowQueueExtension);
        }
      } else {
        goal.finished = false;
        for (var j = 0; j < Studio.sprite.length; j++) {
          if (Studio.sprite[j].visible && spriteAtGoal(Studio.sprite[j], goal)) {
            goal.finished = true;
            if (skin.fadeOutGoal) {
              goal.startFadeTime = new Date().getTime();
            }

            callHandler('whenTouchGoal');
            callHandler('whenSpriteCollided-' + j + '-goal');

            break;
          }
        }
      }
      playSound = goal.finished;
    }

    if (goal.finished) {
      finishedGoals++;

      // Play a sound unless we've hit the last flag (though that can be
      // overridden by the skin)
      if (playSound && (finishedGoals !== Studio.spriteGoals_.length || skin.playFinalGoalSound)) {
        Studio.playSound({ soundName: 'flag' });
      }

      if (skin.goalSuccess) {
        // Change the finish icon to goalSuccess.
        var successAsset = skin.goalSuccess;
        if (level.goalOverride && level.goalOverride.successImage) {
          successAsset = skin[level.goalOverride.successImage];
        }
        goal.marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', successAsset);
      }
    }
  });

  var retVal = finishedGoals === Studio.allGoals_().length;

  if (retVal && !Studio.touchAllGoalsEventFired) {
    Studio.touchAllGoalsEventFired = true;
    callHandler('whenTouchAllGoals');
  }

  return retVal;
};

/**
 * Returns true if the specified criteria, provided as an Object, is satisfied.
 */
Studio.conditionSatisfied = function (required) {
  var tracked = Studio.trackedBehavior;
  var valueNames = Object.keys(required);

  for (var k = 0; k < valueNames.length; k++) {
    var valueName = valueNames[k];
    var value = required[valueName];

    if (valueName === 'timedOut' && tracked.timedOut !== value) {
      return false;
    }

    if (valueName === 'collectedItemsAtOrAbove' && tracked.removedItemCount < value) {
      return false;
    }

    if (valueName === 'collectedItemsBelow' && tracked.removedItemCount >= value) {
      return false;
    }

    if (valueName === 'collectedSpecificItemsAtOrAbove' && (tracked.removedItems[value.className] === undefined || tracked.removedItems[value.className] < value.count)) {
      return false;
    }

    if (valueName === 'collectedSpecificItemsBelow' && tracked.removedItems[value.className] !== undefined && tracked.removedItems[value.className] >= value.count) {
      return false;
    }

    if (valueName === 'createdSpecificItemsAtOrAbove' && (tracked.createdItems[value.className] === undefined || tracked.createdItems[value.className] < value.count)) {
      return false;
    }

    if (valueName === 'createdSpecificItemsBelow' && tracked.createdItems[value.className] !== undefined && tracked.createdItems[value.className] >= value.count) {
      return false;
    }

    if (valueName === 'gotAllItems' && tracked.gotAllItems !== value) {
      return false;
    }

    if (valueName === 'touchedHazardsAtOrAbove' && tracked.touchedHazardCount < value) {
      return false;
    }

    if (valueName === 'currentPointsAtOrAbove' && Studio.playerScore < value) {
      return false;
    }

    if (valueName === 'currentPointsBelow' && Studio.playerScore >= value) {
      return false;
    }

    if (valueName === 'allGoalsVisited' && tracked.allGoalsVisited !== value) {
      return false;
    }

    if (valueName === 'setMap' && tracked.hasSetMap !== value) {
      return false;
    }

    if (valueName === 'setSprite' && tracked.hasSetSprite !== value) {
      return false;
    }

    if (valueName === 'setDroidSpeed' && tracked.hasSetDroidSpeed !== value) {
      return false;
    }

    if (valueName === 'throwProjectile' && tracked.hasThrownProjectile !== value) {
      return false;
    }

    if (valueName === 'setEmotion' && tracked.hasSetEmotion !== value) {
      return false;
    }
  }

  return true;
};

/**
 * @typedef {Object} ProgressConditionOutcome
 * @property {boolean} success
 * @property {string} message
 */

/**
 * A level can provide zero or more progress conditions which are special cases
 * that we test to see if the level has succeeded or failed.  This function
 * evaluates the state of these criteria.  It returns false if none of the
 * criteria affects progress, otherwise an object that contains information
 * about the specific succeeding or failing criteria.
 *
 * @param {Array} conditions.
 * @returns {ProgressConditionOutcome|null}
 */
Studio.checkProgressConditions = function () {
  if (!level.progressConditions) {
    return null;
  }

  for (var i = 0; i < level.progressConditions.length; i++) {
    var condition = level.progressConditions[i];

    if (Studio.conditionSatisfied(condition.required)) {
      return condition.result;
    }
  }

  return null;
};

var checkFinished = function checkFinished() {

  var hasGoals = Studio.allGoals_().length !== 0;
  var achievedGoals = Studio.allGoalsVisited();
  var progressConditionResult = Studio.checkProgressConditions();
  var hasSuccessCondition = level.goal && level.goal.successCondition ? true : false;
  var achievedOptionalSuccessCondition = !hasSuccessCondition || utils.valueOr(level.goal.successCondition(), true);
  var achievedRequiredSuccessCondition = hasSuccessCondition && utils.valueOr(level.goal.successCondition(), false);

  if (progressConditionResult) {
    Studio.result = progressConditionResult.success ? _constants2.ResultType.SUCCESS : _constants2.ResultType.FAILURE;
    if (!progressConditionResult.success && progressConditionResult.canPass) {
      Studio.testResults = _constants2.TestResults.APP_SPECIFIC_ACCEPTABLE_FAIL;
      Studio.progressConditionTestResult = true;
    }
    var progressMessage = progressConditionResult.message;
    if ((0, _StudioApp.singleton)().isUsingBlockly()) {
      progressMessage = progressConditionResult.blocklyMessage || progressMessage;
    }
    Studio.message = utils.valueOr(progressMessage, null);
    Studio.pauseInterpreter = utils.valueOr(progressConditionResult.pauseInterpreter, false);
    return true;
  }

  // Levels with goals (usually images that need to be touched) can have an optional success
  // condition that can explicitly return false to prevent the level from completing.
  // In very rare cases, a level might have goals but not care whether they're touched or not
  // to succeed, relying instead solely on the success function.  In such a case, the level should
  // have completeOnSuccessConditionNotGoals set to true.
  // In the remainder of levels which do not have goals, they simply require a success condition
  // that returns true.

  if (hasGoals && achievedGoals && achievedOptionalSuccessCondition || hasGoals && level.completeOnSuccessConditionNotGoals && achievedRequiredSuccessCondition || !hasGoals && achievedRequiredSuccessCondition) {
    Studio.result = _constants2.ResultType.SUCCESS;
    return true;
  }

  if (level.goal && level.goal.failureCondition && level.goal.failureCondition()) {
    Studio.result = _constants2.ResultType.FAILURE;
    return true;
  }

  // Don't process timedOut condition here if we have progressConditions to take care of
  // things, which can include a timedOut.  This avoids having this condition kick in earlier
  // than level.progressConditions can take care of a timedOut.
  if (!level.progressConditions) {
    if (Studio.timedOut()) {
      Studio.result = _constants2.ResultType.FAILURE;
      return true;
    }
  }

  return false;
};

if (false) {
  module.exports.setLevel = function (newLevel) {
    level = newLevel;
  };
}

/***/ }),

/***/ 2946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(789);

var _utils = __webpack_require__(71);

exports.SpriteSpeed = _constants.SpriteSpeed;
exports.SpriteSize = _constants.SpriteSize;

var SPEECH_BUBBLE_TIME = 3;

exports.random = function (values) {
  return (0, _utils.randomValue)(values);
};

exports.endGame = function (id, value) {
  Studio.queueCmd(id, 'endGame', { 'value': value });
};

exports.setBackground = function (id, value) {
  Studio.queueCmd(id, 'setBackground', { 'value': value });
};

exports.setMap = function (id, value) {
  Studio.queueCmd(id, 'setMap', { 'value': value });
};

exports.setMapAndColor = function (id, color, value) {
  Studio.queueCmd(id, 'setMapAndColor', {
    'value': value,
    'color': color
  });
};

exports.setAllowSpritesOutsidePlayspace = function (id, value) {
  Studio.queueCmd(id, 'setAllowSpritesOutsidePlayspace', {
    'value': value
  });
};

exports.setSprite = function (id, spriteIndex, value) {
  Studio.queueCmd(id, 'setSprite', {
    'spriteIndex': spriteIndex,
    'value': value
  });
};

exports.getSpriteVisibility = function (id, spriteIndex, callback) {
  Studio.queueCmd(id, 'getSpriteVisibility', {
    'spriteIndex': spriteIndex,
    'callback': callback
  });
};

exports.getSpriteValue = function (id, spriteIndex, callback) {
  Studio.queueCmd(id, 'getSpriteValue', {
    'spriteIndex': spriteIndex,
    'callback': callback
  });
};

exports.saySprite = function (id, spriteIndex, text, seconds) {
  if (seconds === undefined) {
    seconds = SPEECH_BUBBLE_TIME;
  }
  Studio.queueCmd(id, 'saySprite', {
    'spriteIndex': spriteIndex,
    'text': text,
    'seconds': seconds
  });
};

exports.showTitleScreen = function (id, title, text) {
  Studio.queueCmd(id, 'showTitleScreen', {
    'title': title,
    'text': text
  });
};

exports.setSpriteEmotion = function (id, spriteIndex, value) {
  Studio.queueCmd(id, 'setSpriteEmotion', {
    'spriteIndex': spriteIndex,
    'value': value
  });
};

exports.getSpriteEmotion = function (id, spriteIndex, callback) {
  Studio.queueCmd(id, 'getSpriteEmotion', {
    'spriteIndex': spriteIndex,
    'callback': callback
  });
};

exports.setSpriteSpeed = function (id, spriteIndex, value) {
  Studio.queueCmd(id, 'setSpriteSpeed', {
    'spriteIndex': spriteIndex,
    'value': value
  });
};

// setDroid is a wrapper to setSprite that always passes 0 for the spriteIndex
// (used by hoc2015)

exports.setDroid = function (id, value) {
  Studio.queueCmd(id, 'setSprite', {
    'spriteIndex': 0,
    'value': value
  });
};

exports.setDroidSpeed = function (id, value) {
  Studio.queueCmd(id, 'setDroidSpeed', {
    'value': value
  });
};

exports.setSpriteSize = function (id, spriteIndex, value) {
  Studio.queueCmd(id, 'setSpriteSize', {
    'spriteIndex': spriteIndex,
    'value': value
  });
};

exports.setSpritePosition = function (id, spriteIndex, value) {
  Studio.queueCmd(id, 'setSpritePosition', {
    'spriteIndex': spriteIndex,
    'value': Number(value)
  });
};

exports.setSpriteXY = function (id, spriteIndex, xpos, ypos) {
  Studio.queueCmd(id, 'setSpriteXY', {
    'spriteIndex': spriteIndex,
    'x': Number(xpos),
    'y': Number(ypos)
  });
};

exports.getSpriteXY = function (id, spriteIndex, callback) {
  Studio.queueCmd(id, 'getSpriteXY', {
    'spriteIndex': spriteIndex,
    'callback': callback
  });
};

exports.setSpriteBehavior = function (id, spriteIndex, targetSpriteIndex, behavior) {
  Studio.queueCmd(id, 'setSpriteBehavior', {
    spriteIndex: spriteIndex,
    targetSpriteIndex: targetSpriteIndex,
    behavior: behavior
  });
};

exports.setSpritesWander = function (id, spriteName) {
  Studio.queueCmd(id, 'setSpritesWander', {
    'spriteName': spriteName
  });
};

exports.setSpritesStop = function (id, spriteName) {
  Studio.queueCmd(id, 'setSpritesStop', {
    'spriteName': spriteName
  });
};

exports.setSpritesChase = function (id, targetSpriteIndex, spriteName) {
  Studio.queueCmd(id, 'setSpritesChase', {
    'spriteName': spriteName,
    'targetSpriteIndex': targetSpriteIndex
  });
};

exports.setSpritesFlee = function (id, targetSpriteIndex, spriteName) {
  Studio.queueCmd(id, 'setSpritesFlee', {
    'spriteName': spriteName,
    'targetSpriteIndex': targetSpriteIndex
  });
};

exports.setSpritesSpeed = function (id, speed, spriteName) {
  Studio.queueCmd(id, 'setSpritesSpeed', {
    'spriteName': spriteName,
    'speed': speed
  });
};

exports.addGoal = function (id, value) {
  Studio.queueCmd(id, 'addGoal', {
    'value': Number(value)
  });
};

exports.addGoalXY = function (id, x, y) {
  Studio.queueCmd(id, 'addGoal', {
    'x': Number(x),
    'y': Number(y)
  });
};

exports.playSound = function (id, soundName) {
  Studio.queueCmd(id, 'playSound', { 'soundName': soundName });
};

exports.stop = function (id, spriteIndex) {
  Studio.queueCmd(id, 'stop', { 'spriteIndex': spriteIndex });
};

exports.throwProjectile = function (id, spriteIndex, dir, className) {
  Studio.queueCmd(id, 'throwProjectile', {
    'spriteIndex': spriteIndex,
    'dir': Number(dir),
    'className': String(className)
  });
};

exports.makeProjectile = function (id, className, action) {
  Studio.queueCmd(id, 'makeProjectile', {
    'className': className,
    'action': action
  });
};

exports.move = function (id, spriteIndex, dir) {
  Studio.queueCmd(id, 'move', {
    'spriteIndex': spriteIndex,
    'dir': Number(dir)
  });
};

exports.moveDistance = function (id, spriteIndex, dir, distance) {
  Studio.queueCmd(id, 'moveDistance', {
    'spriteIndex': spriteIndex,
    'dir': dir,
    'distance': distance
  });
};

exports.moveForward = function (id) {
  Studio.queueCmd(id, 'moveForward');
};

exports.moveBackward = function (id) {
  Studio.queueCmd(id, 'moveBackward');
};

exports.turnRight = function (id) {
  Studio.queueCmd(id, 'turnRight');
};

exports.turnLeft = function (id) {
  Studio.queueCmd(id, 'turnLeft');
};

// addPoints is a wrapper for changeScore (used by hoc2015)

exports.addPoints = function (id, value) {
  Studio.changeScore({ 'value': value });
  Studio.queueCmd(id, 'displayScore', {});
};

// removePoints is a wrapper for reduceScore (used by hoc2015)

exports.removePoints = function (id, value) {
  Studio.reduceScore({ 'value': value });
  Studio.queueCmd(id, 'displayScore', {});
};

exports.changeScore = function (id, value) {
  Studio.changeScore({ 'value': value });
  Studio.queueCmd(id, 'displayScore', {});
};

exports.getScore = function () {
  return Studio.playerScore;
};

exports.setScore = function (value) {
  Studio.setScore(value);
};

exports.addCharacter = function (id, className) {
  Studio.queueCmd(id, 'addItem', {
    'className': className
  });
};

exports.setItemActivity = function (id, className, type) {
  Studio.queueCmd(id, 'setItemActivity', {
    'className': className,
    'type': type
  });
};

exports.setItemSpeed = function (id, className, speed) {
  Studio.queueCmd(id, 'setItemSpeed', {
    'className': className,
    'speed': speed
  });
};

exports.moveFast = function (id, className) {
  Studio.queueCmd(id, 'setItemSpeed', {
    'className': className,
    'speed': _constants.SpriteSpeed.FAST
  });
};

exports.moveNormal = function (id, className) {
  Studio.queueCmd(id, 'setItemSpeed', {
    'className': className,
    'speed': _constants.SpriteSpeed.SLOW
  });
};

exports.moveSlow = function (id, className) {
  Studio.queueCmd(id, 'setItemSpeed', {
    'className': className,
    'speed': _constants.SpriteSpeed.VERY_SLOW
  });
};

exports.showDebugInfo = function (value) {
  Studio.queueCmd(null, 'showDebugInfo', {
    'value': value
  });
};

exports.setScoreText = function (id, text) {
  Studio.queueCmd(id, 'setScoreText', { 'text': text });
};

exports.showCoordinates = function (id) {
  Studio.queueCmd(id, 'showCoordinates', {});
};

exports.wait = function (id, value) {
  Studio.queueCmd(id, 'wait', { 'value': value });
};

exports.vanish = function (id, spriteIndex) {
  Studio.queueCmd(id, 'vanish', { spriteIndex: spriteIndex });
};

exports.onEvent = function (id, eventName, func) {
  Studio.queueCmd(id, 'onEvent', {
    'eventName': String(eventName),
    'func': func
  });
};

exports.askForInput = function (id, question, callback) {
  Studio.queueCmd(id, 'askForInput', { question: question, callback: callback });
};

/**
 * @param {number} keyCode
 * @returns {boolean} True if key is currently down
 */
exports.isKeyDown = function (keyCode) {
  return Studio.keyState[keyCode] === 'keydown';
};

/***/ }),

/***/ 2947:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collidable = __webpack_require__(2948);

var _collidable2 = _interopRequireDefault(_collidable);

var _constants = __webpack_require__(789);

var constants = _interopRequireWildcard(_constants);

var _lodash = __webpack_require__(82);

var _lodash2 = _interopRequireDefault(_lodash);

var _spriteActions = __webpack_require__(2949);

var _studio = __webpack_require__(2945);

var _studio2 = _interopRequireDefault(_studio);

var _StudioAnimation = __webpack_require__(2796);

var _StudioAnimation2 = _interopRequireDefault(_StudioAnimation);

var _StudioSpriteSheet = __webpack_require__(2797);

var _StudioSpriteSheet2 = _interopRequireDefault(_StudioSpriteSheet);

var _utils = __webpack_require__(71);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Direction = constants.Direction;
var NextTurn = constants.NextTurn;

/**
 * An Item is a type of Collidable.
 * Note: x/y represent x/y of center in gridspace
 * @extends {Collidable}
 */

var Item = function (_Collidable) {
  _inherits(Item, _Collidable);

  function Item(options) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, _Collidable.call(this, options));
    // call collidable constructor


    _this.height = options.height || 50;
    _this.width = options.width || 50;

    _this.className = options.className;

    if (_studio2.default.trackedBehavior.createdItems[_this.className] === undefined) {
      _studio2.default.trackedBehavior.createdItems[_this.className] = 0;
    }
    _studio2.default.trackedBehavior.createdItems[_this.className]++;

    /**
     * Rendering offset for item animation vs display position - applied as
     * late as possible.
     * @type {{x: number, y: number}}
     */
    _this.renderOffset = options.renderOffset || { x: 0, y: 0 };

    _this.speed = options.speed || constants.DEFAULT_ITEM_SPEED;
    _this.normalSpeed = options.normalSpeed || constants.DEFAULT_ITEM_SPEED;
    _this.normalFrameDuration = options.animationFrameDuration || constants.DEFAULT_ITEM_ANIMATION_FRAME_DURATION;
    _this.displayDir = Direction.SOUTH;
    _this.startFadeTime = null;
    _this.fadeTime = constants.ITEM_FADE_TIME;
    _this.targetSpriteIndex = 0;

    /** @private {StudioAnimation} */
    _this.animation_ = new _StudioAnimation2.default(Object.assign({}, options, {
      spriteSheet: new _StudioSpriteSheet2.default({
        assetPath: options.image,
        defaultFramesPerAnimation: options.frames,
        frameWidth: _this.width,
        frameHeight: _this.height,
        animations: [{
          type: 'direction',
          count: 8
        }, {
          type: 'idle',
          count: 1
        }]
      }),
      animationFrameDuration: _this.getAnimationFrameDuration()
    }));
    return _this;
  }

  /** @returns {SVGImageElement} */


  Item.prototype.getElement = function getElement() {
    return this.animation_.getElement();
  };

  /**
   * Returns the frame of the spritesheet for the current walking direction.
   */


  Item.prototype.getDirectionFrame = function getDirectionFrame() {
    // Every other frame, if we aren't yet rendering in the correct direction,
    // assign a new displayDir from state table; only one turn at a time.

    if (this.dir !== this.displayDir && this.displayDir !== undefined) {
      if (_studio2.default.tickCount && 0 === _studio2.default.tickCount % 2) {
        this.displayDir = NextTurn[this.displayDir][this.dir];
      }
    }

    var frameDirTable = this.spritesCounterclockwise ? constants.frameDirTableWalkingWithIdleCounterclockwise : constants.frameDirTableWalkingWithIdleClockwise;

    return frameDirTable[this.displayDir];
  };

  /**
   * Create an image element with a clip path
   */


  Item.prototype.createElement = function createElement(parentElement) {
    this.animation_.createElement(parentElement);
  };

  /**
   * This function should be called every frame, and moves the item around.
   * It moves the item smoothly, but between fixed points on the grid.
   * Each time the item reaches its destination fixed point, it reevaluates
   * its next destination location based on the type of movement specified.
   * It generally evalutes all possible destination locations, prioritizes
   * the best possible moves, and chooses randomly between evenly-scored
   * options.
   */


  Item.prototype.update = function update() {

    // Do we have an active location in grid coords?  If not, determine it.
    if (this.gridX === undefined) {
      this.gridX = Math.floor(this.x / _studio2.default.SQUARE_SIZE);
      this.gridY = Math.floor(this.y / _studio2.default.SQUARE_SIZE);
    }

    // Have we reached the destination grid position?
    // If not, we're still sliding towards it.
    var reachedDestinationGridPosition = false;

    // Draw the item's current location.
    _studio2.default.drawDebugRect("itemCenter", this.x, this.y, 3, 3);

    if (this.activity === constants.BEHAVIOR_WATCH_ACTOR || this.activity === constants.BEHAVIOR_GRID_ALIGNED) {
      // In this stationary activity case, we don't need to do any of this
      // update logic (facing the actor is handled every frame in display())
      return;
    } else if (this.activity === constants.BEHAVIOR_STOP) {
      // In this stationary activity case, we override the actor's facing and
      // movement to force a "stop"
      this.setDirection(Direction.NONE);

      this.destGridX = undefined;
      this.destGridY = undefined;
      return;
    }

    if (!this.visible) {
      return;
    }

    if (this.destGridX !== undefined) {
      // Draw the item's destination grid square.
      _studio2.default.drawDebugRect("roamGridDest", this.destGridX * _studio2.default.SQUARE_SIZE + _studio2.default.HALF_SQUARE, this.destGridY * _studio2.default.SQUARE_SIZE + _studio2.default.HALF_SQUARE, _studio2.default.SQUARE_SIZE, _studio2.default.SQUARE_SIZE);
    }
    var center = this.getCenterPos();

    // Has the item reached its destination grid position?
    // (There is a small margin of error to allow for per-update movements greater
    // than a single pixel.)
    if (this.destGridX !== undefined) {
      var speed = (0, _utils.valueOr)(this.speed, 0);
      var dirUnit = Direction.getUnitVector(this.dir);
      var destVector = {
        x: this.destGridX * _studio2.default.SQUARE_SIZE + _studio2.default.HALF_SQUARE - center.x,
        y: this.destGridY * _studio2.default.SQUARE_SIZE + _studio2.default.HALF_SQUARE - center.y
      };
      // Take the dot product of dirUnit and destVector to see if continuing to
      // move in that direction will bring the item any closer to its
      // destination.
      if (dirUnit.x * destVector.x + dirUnit.y * destVector.y <= speed) {
        this.gridX = this.destGridX;
        this.gridY = this.destGridY;
        reachedDestinationGridPosition = true;
      }
    }

    // Are we missing a destination location in grid coords?
    // Or have we already reached our prior destination location in grid coords?
    // If not, determine it.
    if (this.destGridX === undefined || reachedDestinationGridPosition) {

      var sprite = _studio2.default.sprite[this.targetSpriteIndex];

      var spriteX = sprite.x + sprite.width / 2;
      var spriteY = sprite.y + sprite.height / 2;

      // let's try scoring each square
      var candidates = [];

      var bufferDistance = 60;

      // The item can just go up/down/left/right.. no diagonals.
      var candidateGridLocations = [{ row: -1, col: 0 }, { row: +1, col: 0 }, { row: 0, col: -1 }, { row: 0, col: +1 }];

      for (var candidateIndex = 0; candidateIndex < candidateGridLocations.length; candidateIndex++) {
        var candidateX = this.gridX + candidateGridLocations[candidateIndex].col;
        var candidateY = this.gridY + candidateGridLocations[candidateIndex].row;

        candidate = { gridX: candidateX, gridY: candidateY };
        candidate.score = 0;

        if (this.activity === constants.BEHAVIOR_WANDER) {
          candidate.score++;
        } else if (this.activity === constants.BEHAVIOR_CHASE) {
          if (candidateY === this.gridY - 1 && spriteY < center.y - bufferDistance) {
            candidate.score += 2;
          } else if (candidateY === this.gridY + 1 && spriteY > center.y + bufferDistance) {
            candidate.score += 2;
          } else {
            candidate.score += 1;
          }

          if (candidateX === this.gridX - 1 && spriteX < center.x - bufferDistance) {
            candidate.score++;
          } else if (candidateX === this.gridX + 1 && spriteX > center.x + bufferDistance) {
            candidate.score++;
          }
        } else if (this.activity === constants.BEHAVIOR_FLEE) {
          candidate.score = 1;
          if (candidateY === this.gridY - 1 && spriteY > center.y - bufferDistance) {
            candidate.score++;
          } else if (candidateY === this.gridY + 1 && spriteY < center.y + bufferDistance) {
            candidate.score++;
          }

          if (candidateX === this.gridX - 1 && spriteX > center.x - bufferDistance) {
            candidate.score++;
          } else if (candidateX === this.gridX + 1 && spriteX < center.x + bufferDistance) {
            candidate.score++;
          }
        }

        if (candidate.score > 0) {
          _studio2.default.drawDebugRect("roamGridPossibleDest", candidateX * _studio2.default.SQUARE_SIZE + _studio2.default.HALF_SQUARE, candidateY * _studio2.default.SQUARE_SIZE + _studio2.default.HALF_SQUARE, _studio2.default.SQUARE_SIZE, _studio2.default.SQUARE_SIZE);
        }
        candidates.push(candidate);
      }

      // cull candidates that won't be possible
      for (var i = candidates.length - 1; i >= 0; i--) {
        var candidate = candidates[i];
        if (candidate.score === 0 || this.atEdge(candidate) || this.hasWall(candidate)) {
          candidates.splice(i, 1);
        }
      }

      var newDirection = Direction.NONE;
      if (candidates.length > 0) {
        // shuffle everything (so that even scored items are shuffled, even after the sort)
        candidates = _lodash2.default.shuffle(candidates);

        // then sort everything based on score.
        candidates.sort(function (a, b) {
          return b.score - a.score;
        });

        this.destGridX = candidates[0].gridX;
        this.destGridY = candidates[0].gridY;

        // update towards the next location
        if (this.destGridX > this.gridX && this.destGridY > this.gridY) {
          newDirection = Direction.SOUTHEAST;
        } else if (this.destGridX > this.gridX && this.destGridY < this.gridY) {
          newDirection = Direction.NORTHEAST;
        } else if (this.destGridX < this.gridX && this.destGridY > this.gridY) {
          newDirection = Direction.SOUTHWEST;
        } else if (this.destGridX < this.gridX && this.destGridY < this.gridY) {
          newDirection = Direction.NORTHWEST;
        } else if (this.destGridX > this.gridX) {
          newDirection = Direction.EAST;
        } else if (this.destGridX < this.gridX) {
          newDirection = Direction.WEST;
        } else if (this.destGridY > this.gridY) {
          newDirection = Direction.SOUTH;
        } else if (this.destGridY < this.gridY) {
          newDirection = Direction.NORTH;
        }
      }
      this.setDirection(newDirection);
    }
  };

  Item.prototype.atEdge = function atEdge(candidate) {
    return candidate.gridX < 0 || candidate.gridX >= _studio2.default.COLS || candidate.gridY < 0 || candidate.gridY >= _studio2.default.ROWS;
  };

  Item.prototype.hasWall = function hasWall(candidate) {
    return _studio2.default.getWallValue(candidate.gridY, candidate.gridX);
  };

  /**
   * Isolated update logic for "watchActor" activity where the "item" keeps
   * turning to look at the actor with the given sprite index.
   * @param {number} targetSpriteIndex
   */


  Item.prototype.turnToFaceActor = function turnToFaceActor(targetSpriteIndex) {
    // Pick a target direction closest to the relative direction toward the target.
    var target = _studio2.default.sprite[targetSpriteIndex];
    if (!target) {
      return;
    }

    // Actor positions are the top-left of their square (or their "feet" square
    // in the 'isometric' case) - we should look at the middle of their square
    var actorGroundCenterX = target.displayX + _studio2.default.HALF_SQUARE;
    var actorGroundCenterY = target.displayY + _studio2.default.HALF_SQUARE;
    var deltaX = actorGroundCenterX - this.x;
    var deltaY = actorGroundCenterY - this.y;

    // We shouldn't adjust our direction if the actor is sufficiently close that
    // relative direction doesn't make much sense
    // Basically, avoid thrashing when moving into their space.
    var SQUARED_MINIMUM_DISTANCE = 25;
    if (deltaX * deltaX + deltaY * deltaY > SQUARED_MINIMUM_DISTANCE) {
      _studio2.default.drawDebugLine("watchActor", this.x, this.y, actorGroundCenterX, actorGroundCenterY, '#ffff00');
      this.setDirection(constants.getClosestDirection(deltaX, deltaY));
    }
  };

  /**
   * Sets the activity property for this item.
   * @param {string} type Valid options are: none, watchActor, roam, chase,
   *        flee, or grid
   * @param {number} targetSpriteIndex optional target sprite used with chase and flee
   */


  Item.prototype.setActivity = function setActivity(type, targetSpriteIndex) {
    this.activity = type;
    if (targetSpriteIndex !== undefined) {
      this.targetSpriteIndex = targetSpriteIndex;
    }
  };

  /**
   * Begin a fade out.
   */


  Item.prototype.beginRemoveElement = function beginRemoveElement() {
    this.startFadeTime = new Date().getTime();
  };

  /**
   * Remove our element/clipPath/animator
   */


  Item.prototype.removeElement = function removeElement() {
    this.animation_.removeElement();

    _studio2.default.trackedBehavior.removedItemCount++;

    if (_studio2.default.trackedBehavior.removedItems[this.className] === undefined) {
      _studio2.default.trackedBehavior.removedItems[this.className] = 0;
    }
    _studio2.default.trackedBehavior.removedItems[this.className]++;
  };

  /**
   * Retrieve animation frame duration (frames per tick)
   */


  Item.prototype.getAnimationFrameDuration = function getAnimationFrameDuration() {
    if (this.dir === Direction.NONE) {
      return this.normalFrameDuration;
    } else {
      return this.normalFrameDuration * this.normalSpeed / this.speed;
    }
  };

  /**
   * Returns true if the item is currently fading away.
   */


  Item.prototype.isFading = function isFading() {
    return !!this.startFadeTime;
  };

  /**
   * Returns true if the item has finished fading away.  The caller will usually
   * then call removeElement to destroy this item's assets.
   */


  Item.prototype.hasCompletedFade = function hasCompletedFade() {
    var currentTime = new Date().getTime();

    return this.startFadeTime && currentTime > this.startFadeTime + this.fadeTime;
  };

  /**
   * Whether or not this sprite will turn to face south after
   * Studio.ticksBeforeFaceSouth ticks of no movement
   *
   * @returns {boolean}
   * @see Studio.onTick
   */


  Item.prototype.shouldFaceSouthOnIdle = function shouldFaceSouthOnIdle() {
    return this.activity !== constants.BEHAVIOR_GRID_ALIGNED;
  };

  /**
   * Display our item at its current location
   */


  Item.prototype.display = function display() {
    var currentTime = new Date().getTime();
    var opacity = 1;
    if (this.startFadeTime) {
      opacity = 1 - (currentTime - this.startFadeTime) / this.fadeTime;
      opacity = Math.max(opacity, 0);
      this.animation_.setOpacity(opacity);
    }

    // Watch behavior does not change logical position, should update every frame
    if (this.activity === constants.BEHAVIOR_WATCH_ACTOR) {
      this.turnToFaceActor(_studio2.default.protagonistSpriteIndex || 0);
    }

    this.animation_.setCurrentAnimation('direction', this.getDirectionFrame());
    this.animation_.redrawCenteredAt({
      x: this.x + this.renderOffset.x,
      y: this.y + this.renderOffset.y
    }, _studio2.default.tickCount);
  };

  Item.prototype.getCenterPos = function getCenterPos() {
    return {
      x: this.x,
      y: this.y
    };
  };

  /**
   * Whether or not this sprite should automatically move on each tick.
   *
   * @returns {boolean}
   * @see Studio.onTick
   */


  Item.prototype.shouldMove = function shouldMove() {
    var standstillBehaviors = [constants.BEHAVIOR_STOP, constants.BEHAVIOR_WATCH_ACTOR, constants.BEHAVIOR_GRID_ALIGNED];
    return !standstillBehaviors.includes(this.activity);
  };

  Item.prototype.getNextPosition = function getNextPosition() {
    var unit = Direction.getUnitVector(this.dir);
    var speed = this.shouldMove() ? this.speed : 0;

    return {
      x: this.x + speed * unit.x,
      y: this.y + speed * unit.y
    };
  };

  Item.prototype.moveToNextPosition = function moveToNextPosition() {
    var next = this.getNextPosition();
    this.x = next.x;
    this.y = next.y;
  };

  Item.prototype.updateAnimationFrameDuration_ = function updateAnimationFrameDuration_() {
    this.animation_.setAnimationFrameDuration(this.getAnimationFrameDuration());
  };

  /**
   * Sets the speed and changes the animation frame duration to match.
   * @param {number} speed Number of pixels to move per tick
   */


  Item.prototype.setSpeed = function setSpeed(speed) {
    this.speed = speed;
    this.updateAnimationFrameDuration_();
  };

  /**
   * Sets the direction and changes the animation frame duration to match.
   * @param {number} direction
   */


  Item.prototype.setDirection = function setDirection(direction) {
    this.dir = direction;
    // Update this because animation speed may change as we alter direction:
    this.updateAnimationFrameDuration_();
  };

  /**
   * Mark that we're colliding with object represented by key.
   * Here, override base implemention to special on-collision logic for certain
   * item classes.
   * @param key A unique key representing the object we're colliding with
   * @returns {boolean} True if collision is started, false if we're already colliding
   * @override
   */


  Item.prototype.startCollision = function startCollision(key) {
    var newCollisionStarted = _Collidable.prototype.startCollision.call(this, key);
    if (newCollisionStarted) {
      if (this.isHazard && key === (_studio2.default.protagonistSpriteIndex || 0)) {
        _studio2.default.trackedBehavior.touchedHazardCount++;
        var actor = _studio2.default.sprite[key];
        if (actor) {
          actor.addAction(new _spriteActions.ShakeActor(constants.TOUCH_HAZARD_EFFECT_TIME));
        }
      }
    }
    return newCollisionStarted;
  };

  /**
   * Change visible opacity of this item.
   * @param {number} newOpacity (between 0 and 1)
   * @override
   */


  Item.prototype.setOpacity = function setOpacity(newOpacity) {
    this.animation_.setOpacity(newOpacity);
  };

  return Item;
}(_collidable2.default);

exports.default = Item;
module.exports = exports['default'];

/***/ }),

/***/ 2948:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StudioApp = __webpack_require__(597);

var _constants = __webpack_require__(216);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Blockly App: Studio
                                                                                                                                                           *
                                                                                                                                                           * Copyright 2014 Code.org
                                                                                                                                                           *
                                                                                                                                                           */


var Collidable = function () {
  /**
   * Collidable constructor opts
   *
   * @param {Object} opts
   * @param {String} opts.image - image url
   * @param {Number} opts.width - width in pixels
   * @param {Number} opts.height - height in pixels
   * @param {Number} opts.x
   * @param {Number} opts.y
   * @param {Number} opts.dir
   * @param {Number} opts.speed
   * @param {Number} opts.frames
   */
  function Collidable(opts) {
    _classCallCheck(this, Collidable);

    this.gridX = undefined;
    this.gridY = undefined;

    this.activity = _constants.BEHAVIOR_STOP;

    for (var prop in opts) {
      this[prop] = opts[prop];
    }
    this.visible = this.visible || true;
    this.flags = 0;
    // hash table of other sprites we're currently colliding with
    this.collidingWith_ = {};

    // default num frames is 1
    this.frames = this.frames || 1;

    /** @private {SpriteAction[]} */
    this.actions_ = [];
  }

  /**
   * Clear all current collisions
   */


  Collidable.prototype.clearCollisions = function clearCollisions() {
    this.collidingWith_ = {};
  };

  /**
   * Mark that we're colliding with object represented by key
   * @param key A unique key representing the object we're colliding with
   * @returns {boolean} True if collision is started, false if we're already colliding
   */


  Collidable.prototype.startCollision = function startCollision(key) {
    if (this.isCollidingWith(key)) {
      return false;
    }

    this.collidingWith_[key] = true;
    return true;
  };

  /**
   * Mark that we're no longer colliding with object represented by key
   * @param key A unique key representing the object we're querying
   */


  Collidable.prototype.endCollision = function endCollision(key) {
    this.collidingWith_[key] = false;
  };

  /**
   * Are we colliding with the object represented by key?
   * @param key A unique key representing the object we're querying
   */


  Collidable.prototype.isCollidingWith = function isCollidingWith(key) {
    return this.collidingWith_[key] === true;
  };

  /**
   * Assumes x/y are center coords (true for projectiles and items)
   * outOfBounds() returns true if the object is entirely "off screen"
   */


  Collidable.prototype.outOfBounds = function outOfBounds() {
    return this.x < -(this.width / 2) || this.x > (0, _StudioApp.singleton)().MAZE_WIDTH + this.width / 2 || this.y < -(this.height / 2) || this.y > (0, _StudioApp.singleton)().MAZE_HEIGHT + this.height / 2;
  };

  /**
   * Add an action (probably an animation) for this sprite to run.
   * Note: This is a 'sprouted' new system for updating sprites, separate from
   *       how older playlab stuff works.  For now it's driving the discrete
   *       movement hoc2015 levels.
   * @param {SpriteAction} action
   */


  Collidable.prototype.addAction = function addAction(action) {
    this.actions_.push(action);
  };

  /**
   * @returns {boolean} whether this sprite is currently running any actions.
   */


  Collidable.prototype.hasActions = function hasActions() {
    return this.actions_.length > 0;
  };

  /**
   * Causes this sprite to update all actions it's currently running, and then
   * remove any that are complete.
   */


  Collidable.prototype.updateActions = function updateActions() {
    this.actions_.forEach(function (action) {
      action.update(this);
    }, this);

    // Splice completed actions out of the current action list, iterating
    // backwards so we don't skip anything.
    for (var i = this.actions_.length - 1; i >= 0; i--) {
      if (this.actions_[i].isDone()) {
        this.actions_.splice(i, 1);
      }
    }
  };

  return Collidable;
}();

exports.default = Collidable;
module.exports = exports['default'];

/***/ }),

/***/ 2949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShakeActor = exports.FadeActor = exports.GridMoveAndCancel = exports.GridMove = exports.GridTurn = undefined;

var _constants = __webpack_require__(789);

var _utils = __webpack_require__(71);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** @file Actions that can be given to a playlab sprite to execute over a set time. */

/**
 * Work/animation for a sprite to do that will require more than one tick/frame.
 *
 * See Collidable#queueAction and Collidable#updateActions for usage.
 *
 * Note: All sprite actions must, for now, be able to complete in a provided
 * number of steps/frames, instead of blocking until they complete.  The latter
 * is a larger change that we'll save until later.
 *
 * @interface SpriteAction
 */

/**
 * Perform one tick/frame step of the action on the given sprite.
 *
 * @function
 * @name SpriteAction#update
 * @param {Collidable} sprite - the sprite the action is being performed on
 */

/**
 * Perform one tick/frame step of the action on the given sprite.
 *
 * @function
 * @name SpriteAction#isDone
 * @returns {boolean} whether the action is finished running.
 */

/**
 * Turn sprite toward a desired direction. Note that although this action can
 * take place over the course of several steps/ticks, we only set the direction
 * on the first tick; the sprite's own animation logic will take care of the
 * rest.
 * @constructor
 * @implements {SpriteAction}
 * @param {number} towardDir
 * @param {number} totalSteps
 */
var GridTurn = exports.GridTurn = function () {
  function GridTurn(towardDir, totalSteps) {
    _classCallCheck(this, GridTurn);

    this.towardDir_ = towardDir;
    this.totalSteps_ = totalSteps;
    this.elapsedSteps_ = 0;
  }

  GridTurn.prototype.update = function update(sprite) {
    if (this.elapsedSteps_ === 0) {
      sprite.setDirection(this.towardDir_);
    }
    this.elapsedSteps_++;
  };

  GridTurn.prototype.isDone = function isDone() {
    return this.elapsedSteps_ >= this.totalSteps_;
  };

  return GridTurn;
}();

/**
 * Move sprite by a desired delta over a certain number of steps/ticks.
 * Used to provide discrete grid movement in playlab's continuous interpreted
 * environment.
 * @constructor
 * @implements {SpriteAction}
 * @param {number} towardDeltaX
 * @param {number} towardDeltaY
 * @param {number} totalSteps
 * @param {boolean} backward
 */


var GridMove = exports.GridMove = function () {
  function GridMove(towardDeltaX, towardDeltaY, totalSteps, backward) {
    _classCallCheck(this, GridMove);

    this.towardDeltaX_ = towardDeltaX;
    this.towardDeltaY_ = towardDeltaY;
    this.totalSteps_ = totalSteps;
    this.elapsedSteps_ = 0;

    this.direction_ = getDirection(towardDeltaX, towardDeltaY, backward);

    /** @private {number} How much of the full distance to travel. */
    this.percentBeforeReverse_ = 0.3;
  }

  /**
   * Apply a single frame of change to the given sprite.
   * @param {Collidable} sprite
   */


  GridMove.prototype.update = function update(sprite) {
    // Logically snap the sprite to its final position on the first frame,
    // the interpolation is for display only.
    if (this.elapsedSteps_ === 0) {
      this.startX_ = sprite.x;
      this.startY_ = sprite.y;
      sprite.x += this.towardDeltaX_;
      sprite.y += this.towardDeltaY_;
      sprite.setDirection(this.direction_);
    }
    var normalizedProgress = (this.elapsedSteps_ + 1) / this.totalSteps_;
    sprite.displayX = this.startX_ + this.towardDeltaX_ * normalizedProgress;
    sprite.displayY = this.startY_ + this.towardDeltaY_ * normalizedProgress;
    this.elapsedSteps_++;
  };

  /**
   * @returns {boolean} whether the action is done; in this case, whether the
   *          animation is complete, based on the number of steps that have
   *          elapsed.
   */


  GridMove.prototype.isDone = function isDone() {
    return this.elapsedSteps_ >= this.totalSteps_;
  };

  return GridMove;
}();

/**
 * Move sprite partway toward a desired destination position, but have it
 * stop and reverse to its original position after a moment, as if it was
 * bouncing off a wall.
 * @constructor
 * @implements {SpriteAction}
 * @param {number} towardDeltaX - the relative target X position, if the motion
 *        was completed instead of cancelled (e.g. one grid-space away).
 * @param {number} towardDeltaY - as above.
 * @param {number} totalSteps - the number of steps (or frames) to take for the
 *        animation.
 * @param {boolean} backward
 */


var GridMoveAndCancel = exports.GridMoveAndCancel = function () {
  function GridMoveAndCancel(towardDeltaX, towardDeltaY, totalSteps, backward) {
    _classCallCheck(this, GridMoveAndCancel);

    this.towardDeltaX_ = towardDeltaX;
    this.towardDeltaY_ = towardDeltaY;
    this.totalSteps_ = totalSteps;
    this.elapsedSteps_ = 0;

    this.direction_ = getDirection(towardDeltaX, towardDeltaY, backward);

    /** @private {number} How much of the full distance to travel. */
    this.percentBeforeReverse_ = 0.3;
  }

  /**
   * Apply a single frame of change to the given sprite.
   * @param {Collidable} sprite
   */


  GridMoveAndCancel.prototype.update = function update(sprite) {
    // Note: The sprite's logical position (sprite.x, sprite.y) never changes
    //       for this action.
    if (this.elapsedSteps_ === 0) {
      sprite.setDirection(this.direction_);
    }
    var normalizedProgress = (this.elapsedSteps_ + 1) / this.totalSteps_;
    var percentOffset = 2 * this.percentBeforeReverse_ * (normalizedProgress < 0.5 ? normalizedProgress : 1 - normalizedProgress);
    sprite.displayX = sprite.x + this.towardDeltaX_ * percentOffset;
    sprite.displayY = sprite.y + this.towardDeltaY_ * percentOffset;
    // Could do a forced reversal of animation here, depends on how it looks
    // with the real assets.
    this.elapsedSteps_++;
  };

  /**
   * @returns {boolean} whether the action is done; in this case, whether the
   *          animation is complete, based on the number of steps that have
   *          elapsed.
   */


  GridMoveAndCancel.prototype.isDone = function isDone() {
    return this.elapsedSteps_ >= this.totalSteps_;
  };

  return GridMoveAndCancel;
}();

/**
 * Given a 2D vector (x and y) provides the approximate animation direction
 * given in our Direction enum.  Does not calculate 'closest' direction or
 * anything like that - you'll always get a diagonal if both x and y are nonzero.
 * @param {number} x
 * @param {number} y
 * @param {boolean} backward - if true, instead returns the direction away from
 *        the vector
 * @returns {Direction}
 */


function getDirection(x, y, backward) {
  if (backward) {
    x *= -1;
    y *= -1;
  }
  var dir = _constants.Direction.NONE;
  if (x < 0) {
    dir |= _constants.Direction.WEST;
  } else if (x > 0) {
    dir |= _constants.Direction.EAST;
  }
  if (y < 0) {
    dir |= _constants.Direction.NORTH;
  } else if (y > 0) {
    dir |= _constants.Direction.SOUTH;
  }
  return dir;
}

/**
 * Fade an actor out to nothing.
 * @param {number} [fadeDuration] how long it should take to fade out, in
 *        milliseconds.  Default to 1 second.
 * @constructor
 * @implements {SpriteAction}
 */

var FadeActor = exports.FadeActor = function () {
  function FadeActor(fadeDuration) {
    _classCallCheck(this, FadeActor);

    /** @private {number} */
    this.startFadeTime_ = null;

    /** @private {number} */
    this.fadeDurationMs_ = (0, _utils.valueOr)(fadeDuration, _constants.DEFAULT_ACTOR_FADE_TIME);
  }

  /**
   * Apply a single frame of change to the given sprite.
   * @param {Collidable} sprite
   */


  FadeActor.prototype.update = function update(sprite) {
    if (!this.startFadeTime_) {
      // First frame of fade
      this.startFadeTime_ = new Date().getTime();
    }

    var currentTime = new Date().getTime();
    var opacity = 1 - (currentTime - this.startFadeTime_) / this.fadeDurationMs_;
    opacity = Math.max(opacity, 0);
    sprite.setOpacity(opacity);
  };

  /**
   * @returns {boolean} whether the action is done; in this case, whether the
   *          fade is complete, based on the elapsed time.
   */


  FadeActor.prototype.isDone = function isDone() {
    var currentTime = new Date().getTime();
    return this.startFadeTime_ && currentTime > this.startFadeTime_ + this.fadeDurationMs_;
  };

  return FadeActor;
}();

/**
 * Shake an actor left and right for a moment.
 * @param {number} [shakeDuration] how long it should take to fade out, in
 *        milliseconds.  Default to 1 second.
 * @constructor
 * @implements {SpriteAction}
 */


var ShakeActor = exports.ShakeActor = function () {
  function ShakeActor(shakeDuration) {
    _classCallCheck(this, ShakeActor);

    /** @private {number} */
    this.startShakeTime_ = null;

    /** @private {number} How long to shake, in milliseconds */
    this.shakeDurationMs_ = (0, _utils.valueOr)(shakeDuration, _constants.SHAKE_DEFAULT_DURATION);

    /** @private {number} How many complete back-and-forth shakes occur */
    this.cycleCount_ = _constants.SHAKE_DEFAULT_CYCLES;

    /** @private {number} max shake distance from real position */
    this.amplitude_ = _constants.SHAKE_DEFAULT_DISTANCE;

    /** @private {number} precalculated angular frequency of sine wave equation. */
    this.angularFrequency_ = 2 * Math.PI * (this.cycleCount_ / this.shakeDurationMs_);
  }

  /**
   * Apply a single frame of change to the given sprite.
   * @param {Collidable} sprite
   */


  ShakeActor.prototype.update = function update(sprite) {
    if (!this.startShakeTime_) {
      // First frame of fade
      this.startShakeTime_ = new Date().getTime();
    }

    var elapsedTime = new Date().getTime() - this.startShakeTime_;
    var offset = this.amplitude_ * Math.sin(this.angularFrequency_ * elapsedTime);

    sprite.displayX = sprite.x + offset;
  };

  /**
   * @returns {boolean} whether the action is done; in this case, whether the
   *          fade is complete, based on the elapsed time.
   */


  ShakeActor.prototype.isDone = function isDone() {
    var currentTime = new Date().getTime();
    return this.startShakeTime_ && currentTime > this.startShakeTime_ + this.shakeDurationMs_;
  };

  return ShakeActor;
}();

/***/ }),

/***/ 3302:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3303);


/***/ }),

/***/ 3303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadStudio = __webpack_require__(3304);

var _loadStudio2 = _interopRequireDefault(_loadStudio);

var _loadApp = __webpack_require__(820);

var _loadApp2 = _interopRequireDefault(_loadApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _loadApp2.default)().then(_loadStudio2.default);

/***/ }),

/***/ 3304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadStudio;

var _appMain = __webpack_require__(853);

var _appMain2 = _interopRequireDefault(_appMain);

var _studio = __webpack_require__(2945);

var _studio2 = _interopRequireDefault(_studio);

var _blocks = __webpack_require__(2798);

var _blocks2 = _interopRequireDefault(_blocks);

var _levels = __webpack_require__(3320);

var _levels2 = _interopRequireDefault(_levels);

var _skins = __webpack_require__(2800);

var _skins2 = _interopRequireDefault(_skins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Studio = _studio2.default;
if (typeof global !== 'undefined') {
  global.Studio = window.Studio;
}
function loadStudio(options) {
  options.skinsModule = _skins2.default;
  options.blocksModule = _blocks2.default;
  (0, _appMain2.default)(_studio2.default, _levels2.default, options);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)))

/***/ }),

/***/ 3305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _customGameLogic = __webpack_require__(2794);

var _customGameLogic2 = _interopRequireDefault(_customGameLogic);

var _utils = __webpack_require__(71);

var _constants = __webpack_require__(789);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Custom logic for the MSM BigGame
 * @constructor
 * @implements CustomGameLogic
 */
var BigGameLogic = function BigGameLogic(studio, options) {
  options = options || {};

  _customGameLogic2.default.apply(this, arguments);

  this.playerSpriteIndex = 0;
  this.targetSpriteIndex = 1;
  this.dangerSpriteIndex = 2;

  this.finished = false;
  // If set to true, player always faces forward
  this.staticPlayer = (0, _utils.valueOr)(options.staticPlayer, false);
};
BigGameLogic.inherits(_customGameLogic2.default);

BigGameLogic.prototype.onTick = function () {
  if (this.studio_.tickCount === 1) {
    this.onFirstTick_();
    this.studio_.playerScore = 100;
    return;
  }

  if (this.finished) {
    return;
  }

  // Don't start until the title is over
  var titleScreenTitle = document.getElementById('titleScreenTitle');
  if (titleScreenTitle.getAttribute('visibility') === "visible") {
    return;
  }

  var playerSprite = this.studio_.sprite[this.playerSpriteIndex];
  var targetSprite = this.studio_.sprite[this.targetSpriteIndex];
  var dangerSprite = this.studio_.sprite[this.dangerSpriteIndex];

  // Update target, using onscreen and update_target
  this.updateSpriteX_(this.targetSpriteIndex, this.update_target.bind(this));
  // Update danger, using onscreen and update_danger
  this.updateSpriteX_(this.dangerSpriteIndex, this.update_danger.bind(this));

  // For every key and button down, call update_player
  for (var key in this.studio_.keyState) {
    if (this.studio_.keyState[key] === 'keydown') {
      this.handleUpdatePlayer_(key);
    }
  }

  for (var btn in this.studio_.btnState) {
    if (this.studio_.btnState[btn]) {
      if (btn === 'leftButton') {
        this.handleUpdatePlayer_(37);
      } else if (btn === 'upButton') {
        this.handleUpdatePlayer_(38);
      } else if (btn === 'rightButton') {
        this.handleUpdatePlayer_(39);
      } else if (btn === 'downButton') {
        this.handleUpdatePlayer_(40);
      }
    }
  }

  if (playerSprite.visible && dangerSprite.visible && this.collide(playerSprite.x, playerSprite.y, dangerSprite.x, dangerSprite.y)) {
    this.studio_.vanishActor({ spriteIndex: this.playerSpriteIndex });
    setTimeout(function () {
      this.studio_.setSprite({
        spriteIndex: this.playerSpriteIndex,
        value: "visible"
      });
    }.bind(this), 20 * 40 + 50); // 40ms for each of 20 frames, plus some buffer
    this.studio_.playerScore -= 20;

    // send sprite back offscreen
    this.resetSprite_(dangerSprite);
  }

  if (playerSprite.visible && targetSprite.visible && this.collide(playerSprite.x, playerSprite.y, targetSprite.x, targetSprite.y)) {
    this.studio_.playerScore += 10;

    // send sprite back offscreen
    this.resetSprite_(targetSprite);
  }

  if (this.studio_.playerScore <= 0) {
    var score = document.getElementById('score');
    score.setAttribute('visibility', 'hidden');
    this.studio_.showTitleScreen({ title: 'Game Over', text: 'Click Reset to Play Again' });
    for (var i = 0; i < this.studio_.spriteCount; i++) {
      this.studio_.setSprite({
        spriteIndex: i,
        value: "hidden"
      });
    }
    this.finished = true;
  } else {
    this.studio_.displayScore();
  }
};

BigGameLogic.prototype.reset = function () {
  this.finished = false;
};

/**
 * When game starts logic
 */
BigGameLogic.prototype.onFirstTick_ = function () {
  var func = function (Studio, Globals) {
    Studio.setBackground(null, this.getVar_('background'));
    Studio.setSpritePosition(null, this.playerSpriteIndex, _constants.Position.MIDDLECENTER);
    Studio.setSprite(null, this.playerSpriteIndex, this.getVar_('player'));
    Studio.setSpritePosition(null, this.targetSpriteIndex, _constants.Position.TOPLEFT);
    Studio.setSprite(null, this.targetSpriteIndex, this.getVar_('target'));
    Studio.setSpritePosition(null, this.dangerSpriteIndex, _constants.Position.BOTTOMRIGHT);
    Studio.setSprite(null, this.dangerSpriteIndex, this.getVar_('danger'));
    Studio.showTitleScreen(null, this.getVar_('title'), this.getVar_('subtitle'));
  }.bind(this);
  this.studio_.callApiCode('BigGame.onFirstTick', func);
};

/**
 * Update a sprite's x coordinates using the user updateFunction. If
 * sprite goes of screen, we reset to the other side of the screen.
 */
BigGameLogic.prototype.updateSpriteX_ = function (spriteIndex, updateFunction) {
  var sprite = this.studio_.sprite[spriteIndex];
  // sprite.x is the left. get the center
  var centerX = sprite.x + sprite.width / 2;

  var newCenterX = updateFunction(centerX);
  sprite.x = newCenterX - sprite.width / 2;

  // Current behavior is that as soon as we go offscreen, we reset to the other
  // side. We could add a delay if we want.
  if (!this.onscreen(newCenterX)) {
    // reset to other side if it is visible
    if (sprite.visible) {
      this.resetSprite_(sprite);
    }
  } else if (!sprite.visible) {
    // sprite has returned to screen, make it visible again
    this.studio_.setSprite({
      spriteIndex: this.studio_.sprite.indexOf(sprite),
      value: "visible"
    });
  }
};

/**
 * Update the player sprite, using the user provided function.
 */
BigGameLogic.prototype.handleUpdatePlayer_ = function (key) {
  var playerSprite = this.studio_.sprite[this.playerSpriteIndex];
  if (!playerSprite.visible) {
    return;
  }

  // sprite.y is the top. get the center
  var centerY = playerSprite.y + playerSprite.height / 2;

  // invert Y
  var userSpaceY = this.studio_.MAZE_HEIGHT - centerY;

  var newUserSpaceY = this.update_player(key, userSpaceY);

  // reinvertY
  playerSprite.y = this.studio_.MAZE_HEIGHT - newUserSpaceY - playerSprite.height / 2;
  if (this.staticPlayer) {
    playerSprite.dir = _constants.Direction.NONE;
  }
};

/**
 * Reset sprite to the opposite side of the screen
 */
BigGameLogic.prototype.resetSprite_ = function (sprite) {
  if (sprite.dir === _constants.Direction.EAST) {
    sprite.x = 0 - sprite.width;
  } else {
    sprite.x = this.studio_.MAZE_WIDTH;
  }

  sprite.y = Math.floor(Math.random() * (this.studio_.MAZE_HEIGHT - sprite.height));
  this.studio_.setSprite({
    spriteIndex: this.studio_.sprite.indexOf(sprite),
    value: "hidden"
  });
};

/**
 * Calls the user provided update_target function, or no-op if none was provided.
 * @param {number} x Current x location of target
 * @returns {number} New x location of target
 */
BigGameLogic.prototype.update_target = function (x) {
  return this.getFunc_('update-target')(x);
};

/**
 * Calls the user provided update_danger function, or no-op if none was provided.
 * @param {number} x Current x location of the danger sprite
 * @returns {number} New x location of the danger target
 */
BigGameLogic.prototype.update_danger = function (x) {
  return this.getFunc_('update-danger')(x);
};

/**
 * Calls the user provided update_player function, or no-op if none was provided.
 * @param {number|string} key KeyCode of key that is down
 * @param {number} y Current y location of player. (is this in an inverted coordinate space?)
 * @returns {number} New y location of the player
 */
BigGameLogic.prototype.update_player = function (key, y) {
  key = parseInt(key, 10);
  return this.getFunc_('update-player')(key, y);
};

/**
 * Calls the user provided onscreen? function, or no-op if none was provided.
 * @param {number} x An x location
 * @returns {boolean} True if x location is onscreen?
 */
BigGameLogic.prototype.onscreen = function (x) {
  return this.getFunc_('on-screen?')(x);
};

/**
 * Calls the user provided collide? function, or no-op if none was provided.
 * @param {number} px Player's x location
 * @param {number} py Player's y location
 * @param {number} cx Collider's x location
 * @param {number} cy Collider's y location
 * @returns {boolean} True if objects collide
 */
BigGameLogic.prototype.collide = function (px, py, cx, cy) {
  return this.getFunc_('collide?')(px, py, cx, cy);
};

module.exports = BigGameLogic;

/***/ }),

/***/ 3306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _walls = __webpack_require__(2795);

var _walls2 = _interopRequireDefault(_walls);

var _imageUtils = __webpack_require__(1157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BYTES_PER_PIXEL = 4;
var BITS_PER_BYTE = 8;
var WALL_COLOR = '#7F7F7F';

var CollisionMaskWalls = function (_Walls) {
  _inherits(CollisionMaskWalls, _Walls);

  function CollisionMaskWalls(level, skin, drawDebugRect, drawDebugOverlay, width, height, onload) {
    _classCallCheck(this, CollisionMaskWalls);

    var _this = _possibleConstructorReturn(this, _Walls.call(this, level, skin, drawDebugRect));

    _this.width = width;
    _this.height = height;
    _this.drawDebugOverlay = drawDebugOverlay;
    _this.bytesPerRow = Math.ceil(width / BITS_PER_BYTE);
    _this.wallMaps = {};
    Promise.all(Object.keys(skin.wallMaps).map(function (mapName) {
      return (0, _imageUtils.imageDataFromURI)(skin.wallMaps[mapName].srcUrl).then(function (imageData) {
        var wallMap = _this.wallMapFromImageData(imageData.data);
        _this.wallMaps[mapName] = {
          srcData: imageData,
          wallColor: WALL_COLOR,
          wallMap: wallMap,
          overlayURI: _this.wallOverlayURI(imageData, wallMap),
          srcUrl: skin.wallMaps[mapName].srcUrl
        };
      });
    })).then(function () {
      if (onload) {
        onload();
      }
    }).catch(function (err) {
      console.error(err);
    });
    return _this;
  }

  /**
   * @override
   */


  CollisionMaskWalls.prototype.willRectTouchWall = function willRectTouchWall(xCenter, yCenter, collidableWidth, collidableHeight) {
    if (this.wallMaps[this.wallMapRequested]) {
      var wallMap = this.wallMaps[this.wallMapRequested].wallMap;
      this.drawDebugOverlay(this.wallMaps[this.wallMapRequested].srcUrl);

      var yTop = Math.max(0, yCenter - collidableHeight / 2);
      var yBottom = Math.min(this.height, yTop + collidableHeight);
      var xLeft = Math.max(0, xCenter - collidableWidth / 2);
      var xRight = Math.min(this.width, xLeft + collidableWidth);

      // The wallMap has one bit per pixel, stored as long array of bytes that's
      // (height * width / 8) bytes long. Every (width / 8) bytes in the array
      // correspond to a row of pixels in the map.
      // Since the collision box we're checking is a rectangle, we can look at
      // the same few bytes in each row, from the one containg bit xLeft to the
      // one containing bit xRight - 1.
      var firstByteToCheck = Math.floor(xLeft / BITS_PER_BYTE);
      var lastByteToCheck = Math.floor((xRight - 1) / BITS_PER_BYTE);

      for (var y = yTop; y < yBottom; y++) {
        var firstByteInRow = this.bytesPerRow * y;
        for (var x = firstByteToCheck; x <= lastByteToCheck; x++) {
          // First check that there's at least one wall bit in this byte before
          // creating the mask and doing the precise check.
          if (wallMap[firstByteInRow + x]) {
            // Check individual bits, starting from either the first bit in the
            // byte, or the far left of the sprite's collision rect. End with
            // the last bit or the far right of the collision rect.
            var start = Math.max(xLeft, x * BITS_PER_BYTE);
            var end = Math.min(xRight, (x + 1) * BITS_PER_BYTE);

            // Build a series of (end - start) 1's and shift them over by
            // start's offset within the byte.
            var mask = (1 << end - start) - 1 << start % BITS_PER_BYTE;
            if (wallMap[firstByteInRow + x] & mask) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };

  /**
   * Converts a black and white image representing walls (black) and open space
   * (white) into a byte array with 1 bit per pixel, representing walls (1) or
   * open space (0). There are Math.ceil(width / 8) bytes per row of pixels, so
   * each row starts on a new byte. The least significant bit corresponds to the
   * leftmost of the 8 pixels stored in a byte.
   */


  CollisionMaskWalls.prototype.wallMapFromImageData = function wallMapFromImageData(data) {
    var arr = new Uint8Array(this.height * this.bytesPerRow);
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x += BITS_PER_BYTE) {
        var bits = 0;
        for (var k = 0; k < BITS_PER_BYTE; k++) {
          if (x + k < this.width && data[BYTES_PER_PIXEL * (y * this.width + x + k)] === 0) {
            bits = bits | 1 << k;
          }
        }
        arr[y * this.bytesPerRow + x / BITS_PER_BYTE] = bits;
      }
    }
    return arr;
  };

  /**
   * Construct an image data URI from the wallData that shows the walls in a
   * solid color.
   */


  CollisionMaskWalls.prototype.wallOverlayURI = function wallOverlayURI(imageData, wallMap) {
    var hexColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WALL_COLOR;

    var data = imageData.data;
    var color = CollisionMaskWalls.hexToRgb(hexColor);
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x += BITS_PER_BYTE) {
        var currentByte = wallMap[y * this.bytesPerRow + x / BITS_PER_BYTE];
        for (var k = 0; k < BITS_PER_BYTE; k++) {
          var map = 1 << k;
          var imageDataIndex = (y * this.width + x + k) * BYTES_PER_PIXEL;
          if (currentByte & map) {
            // Wall pixel, set color
            data[imageDataIndex + 0] = color.R;
            data[imageDataIndex + 1] = color.G;
            data[imageDataIndex + 2] = color.B;
            data[imageDataIndex + 3] = 255;
          } else {
            // Background pixel, set transparent
            data[imageDataIndex + 3] = 0;
          }
        }
      }
    }
    return (0, _imageUtils.URIFromImageData)(imageData);
  };

  CollisionMaskWalls.prototype.getWallOverlayURI = function getWallOverlayURI() {
    var wallData = this.wallMaps[this.wallMapRequested];
    return wallData ? wallData.overlayURI : null;
  };

  CollisionMaskWalls.prototype.setColor = function setColor(color) {
    var _this2 = this;

    Object.keys(this.wallMaps).map(function (mapName) {
      var wallMapData = _this2.wallMaps[mapName];
      if (wallMapData.wallColor === color) {
        return;
      }
      wallMapData.overlayURI = _this2.wallOverlayURI(wallMapData.srcData, wallMapData.wallMap, color);
      wallMapData.wallColor = color;
    });
  };

  CollisionMaskWalls.hexToRgb = function hexToRgb(hexColor) {
    if (hexColor.length === 4) {
      // short form
      var _R = parseInt(hexColor.substr(1, 1), 16) * 0x11;
      var _G = parseInt(hexColor.substr(2, 1), 16) * 0x11;
      var _B = parseInt(hexColor.substr(3, 1), 16) * 0x11;
      return { R: _R, G: _G, B: _B };
    }

    var R = parseInt(hexColor.substr(1, 2), 16);
    var G = parseInt(hexColor.substr(3, 2), 16);
    var B = parseInt(hexColor.substr(5, 2), 16);
    return { R: R, G: G, B: B };
  };

  return CollisionMaskWalls;
}(_walls2.default);

exports.default = CollisionMaskWalls;
module.exports = exports['default'];

/***/ }),

/***/ 3307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(71);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _constants = __webpack_require__(216);

var _ImageFilter = __webpack_require__(3308);

var _ImageFilter2 = _interopRequireDefault(_ImageFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adds a white glowing outline to the image.
 * @param {SVGSVGElement} svg
 * @constructor
 * @extends {ImageFilter}
 */
/** @file Filter that adds a white glowing outline to an image. */

var GlowFilter = function GlowFilter(svg) {
  _ImageFilter2.default.call(this, svg);

  /** @private {SVGElement} */
  this.feCompositeLayers_ = null;

  /** @private {function} */
  this.curve_ = _ImageFilter2.default.makeBellCurveOscillation(3000, 3, 0.1, 1.0);
}; // Provides Function.prototype.inherits

GlowFilter.inherits(_ImageFilter2.default);
module.exports = GlowFilter;

/**
 * Build an ordered set of filter operations that define the behavior of this
 * filter type.
 * @returns {SVGElement[]}
 * @private
 * @override
 */
GlowFilter.prototype.createFilterSteps_ = function () {
  // 1. Flood-fill the glow color (white)
  // 2. Dilate (grow) the source alpha mask
  // 3. Combine to get a silhouette in the correct color
  // 4. Blur the silhouette for a soft glow
  // 5. Mask out the object's original alpha channel
  // 6. Composite the glow and original image, with varying glow alpha

  var feFloodWhite = document.createElementNS(_constants.SVG_NS, 'feFlood');
  var feFloodWhiteResult = this.id_ + '-flood-white';
  feFloodWhite.setAttribute('flood-color', _color2.default.white);
  feFloodWhite.setAttribute('result', feFloodWhiteResult);

  var feMorphology = document.createElementNS(_constants.SVG_NS, 'feMorphology');
  var feMorphologyResult = this.id_ + '-morphology';
  feMorphology.setAttribute('in', 'SourceAlpha');
  feMorphology.setAttribute('operator', 'dilate');
  feMorphology.setAttribute('radius', 2);
  feMorphology.setAttribute('result', feMorphologyResult);

  var feCompositeSilhouette = document.createElementNS(_constants.SVG_NS, 'feComposite');
  var feCompositeSilhouetteResult = this.id_ + '-silhouette';
  feCompositeSilhouette.setAttribute('in', feFloodWhiteResult);
  feCompositeSilhouette.setAttribute('operator', 'in');
  feCompositeSilhouette.setAttribute('in2', feMorphologyResult);
  feCompositeSilhouette.setAttribute('result', feCompositeSilhouetteResult);

  var feGaussianBlur = document.createElementNS(_constants.SVG_NS, 'feGaussianBlur');
  var feGaussianBlurResult = this.id_ + '-blur';
  feGaussianBlur.setAttribute('in', feCompositeSilhouetteResult);
  feGaussianBlur.setAttribute('stdDeviation', 1);
  feGaussianBlur.setAttribute('result', feGaussianBlurResult);

  var feCompositeMaskedGlow = document.createElementNS(_constants.SVG_NS, 'feComposite');
  var feCompositeMaskedGlowResult = this.id_ + '-masked-glow';
  feCompositeMaskedGlow.setAttribute('in', feGaussianBlurResult);
  feCompositeMaskedGlow.setAttribute('operator', 'out');
  feCompositeMaskedGlow.setAttribute('in2', 'SourceAlpha');
  feCompositeMaskedGlow.setAttribute('result', feCompositeMaskedGlowResult);

  var feCompositeLayers = document.createElementNS(_constants.SVG_NS, 'feComposite');
  feCompositeLayers.setAttribute('in', 'SourceGraphic');
  feCompositeLayers.setAttribute('operator', 'arithmetic');
  feCompositeLayers.setAttribute('in2', feCompositeMaskedGlowResult);
  feCompositeLayers.setAttribute('k1', 0);
  feCompositeLayers.setAttribute('k2', 1); // Always show 100% of original image
  feCompositeLayers.setAttribute('k3', 0);
  feCompositeLayers.setAttribute('k4', 0);
  this.feCompositeLayers_ = feCompositeLayers;

  return [feFloodWhite, feMorphology, feCompositeSilhouette, feGaussianBlur, feCompositeMaskedGlow, feCompositeLayers];
};

/**
 * Update this effect's animation for the current time.
 * @param {number} timeMs
 * @override
 */
GlowFilter.prototype.update = function (timeMs) {
  if (this.feCompositeLayers_) {
    this.feCompositeLayers_.setAttribute('k3', this.curve_(timeMs));
  }
};

/***/ }),

/***/ 3308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(71);

var utils = _interopRequireWildcard(_utils);

var _constants = __webpack_require__(216);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Unique element ID that increments by 1 each time an element is created
/** @file Wrapper for an SVG filter definition with animation capabilities */

var uniqueId = 0;

/**
 * Base class for defining complex SVG <filter>s that can be applied to
 * any number of elements in playlab, but are primarily designed for use with
 * image/sprite elements.
 *
 * The filter behaviors are defined here in code, but are added dynamically to
 * the DOM as late as possible to avoid adding them when they are not needed.
 *
 * Wrapping the filters this way also provides an easy place to dynamically
 * manipulate their properties, generating filter animation.
 *
 * @constructor
 * @param {!SVGSVGElement} svg - Every filter must belong to a single SVG
 *        root element, because it gets defined inside that SVG's defs tag.
 *        Note: The filter is not created right away, but we hold the SVG
 *        reference so we can late-create the filter when it's needed.
 */
var ImageFilter = function ImageFilter(svg) {
  /** @private {SVGSVGElement} */
  this.svg_ = svg;

  /** @private {string} */
  this.id_ = 'image-filter-' + uniqueId++;

  /** @private {number} how many elements are currently using this filter. */
  this.applyCount_ = 0;

  /** @private {?} setInterval key */
  this.intervalId_ = null;
};
module.exports = ImageFilter;

/**
 * Set the passed element to use this filter (replaces other filters it may
 * be using.)
 * @param {SVGElement} svgElement
 */
ImageFilter.prototype.applyTo = function (svgElement) {
  if (!this.checkBrowserSupport_()) {
    return;
  }

  if (this.applyCount_ === 0) {
    this.createInDom_();
  }
  svgElement.setAttribute('filter', 'url("#' + this.id_ + '")');
  this.applyCount_++;
};

/**
 * If the passed element is using this filter, removes the filter.
 * @param {SVGElement} svgElement
 */
ImageFilter.prototype.removeFrom = function (svgElement) {
  // Different browsers clean the filter attribute differently
  // This matches
  //   url(#filter-id)
  //   url("#filter-id")
  var regex = new RegExp("url\\([\"']?#" + this.id_ + "[\"']?\\)", 'i');
  if (regex.test(svgElement.getAttribute('filter'))) {
    svgElement.removeAttribute('filter');
    this.applyCount_--;
  }
  if (this.applyCount_ === 0) {
    this.removeFromDom_();
  }
};

/**
 * Update this effect's animation for the current time.
 * Called by effect's own interval (not Studio.onTick) so that we can run
 * effects even when the studio simulation is not running.
 * @param {number} timeMs
 */
ImageFilter.prototype.update = function (timeMs) {
  // No default operation here.  Subclasses may override this to implement
  // animation.
};

/**
 * Generates the necessary elements and adds this filter to the parent SVG
 * under the <defs> tag.
 * @private
 */
ImageFilter.prototype.createInDom_ = function () {
  var filter = document.getElementById(this.id_);
  if (filter) {
    return;
  }

  // Make a new filter element
  filter = document.createElementNS(_constants.SVG_NS, 'filter');
  filter.setAttribute('id', this.id_);

  // Add the filter steps (expected to be different for each filter type)
  var steps = this.createFilterSteps_();
  steps.forEach(function (step) {
    filter.appendChild(step);
  });

  // Put the filter in the SVG Defs node.
  var defs = this.getDefsNode_();
  defs.appendChild(filter);

  // Establish 30FPS update interval
  if (!this.intervalId_) {
    this.intervalId_ = window.setInterval(function () {
      this.update(new Date().getTime());
    }.bind(this), 1000 / 30);
  }
};

/**
 * Removes this SVG filter from the <defs> tag.
 * @private
 */
ImageFilter.prototype.removeFromDom_ = function () {
  if (this.intervalId_) {
    window.clearInterval(this.intervalId_);
    this.intervalId_ = null;
  }

  var filter = document.getElementById(this.id_);
  if (filter) {
    filter.parentNode.removeChild(filter);
  }
};

/**
 * Build an ordered set of filter operations that define the behavior of this
 * filter type.
 * @returns {SVGElement[]}
 * @private
 */
ImageFilter.prototype.createFilterSteps_ = function () {
  return [];
};

/**
 * Get the Defs tag for our SVG, creating it if it doesn't exist.
 * @returns {SVGDefsElement}
 * @private
 */
ImageFilter.prototype.getDefsNode_ = function () {
  var defs = this.svg_.querySelector('defs');
  if (!defs) {
    defs = document.createElementNS(_constants.SVG_NS, 'defs');
    this.svg_.appendChild(defs);
  }
  return defs;
};

/**
 * Check whether the current browser is likely to support SVG filter effects.
 * Can be overridden by subclasses needing specific support.
 * @returns {boolean}
 * @private
 */
ImageFilter.prototype.checkBrowserSupport_ = function () {
  // Disable filter effects in Safari right now, since they seem to take a
  // long time to render and often cause issues.
  // Chrome also contains 'Safari' in its user agent string, so check for
  // 'Safari' but not 'Chrome'
  // See http://stackoverflow.com/a/7768006/5000129
  if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
    return false;
  }

  // Check suggested by http://stackoverflow.com/a/9771153/5000129
  return typeof window.SVGFEColorMatrixElement !== 'undefined' && SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE === 2;
};

/**
 * Generates a function that given a time value "t" will produce a number
 * between zero and one (inclusive) following a given curve between them.
 *
 * @param {number} period - the t-value for one complete cycle, from max to
 *        min and back to max.  Must be nonzero.
 * @param {number} [exponent] - Determines the sharpness of the curve in the
 *        oscillation.
 *        2 (default) gives a traditional bell curve.
 *        1 gives a triangle wave (no curve, just linear interpolation).
 *        0-1 gives a curve that spends more time above halfway than below it.
 *        1+ gives a curve that spends more time below halfway than above it
 *             (like a repeated y=x*x curve).
 *        May not work well for certain values of curve - make sure to test!
 * @param {number} [min] - Smallest value of oscillation, default 0
 * @param {number} [max] - Largest value of oscillation, default 1
 */
ImageFilter.makeBellCurveOscillation = function (period, exponent, min, max) {
  exponent = utils.valueOr(exponent, 2);
  min = utils.valueOr(min, 0);
  max = utils.valueOr(max, 1);
  var delta = max - min;
  var coefficient = delta * Math.pow(2 / period, exponent);
  var halfPeriod = period / 2;
  return function (t) {
    return min + coefficient * Math.abs(Math.pow(t % period - halfPeriod, exponent));
  };
};

/***/ }),

/***/ 3309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fontSize = 18;
var styles = {
  form: {
    margin: 10,
    background: '#fff',
    border: '3px solid #000',
    borderRadius: 5
  },
  wrapper: {
    margin: 20
  },
  question: {
    fontSize: fontSize
  },
  input: {
    fontSize: fontSize,
    width: '100%',
    height: '2em',
    boxSizing: 'border-box'
  },
  submit: {
    fontSize: fontSize
  }
};

/**
 * Simple input dialog to prompt for user input.
 */
var InputPrompt = _react2.default.createClass({
  displayName: 'InputPrompt',

  propTypes: {
    question: _react.PropTypes.string.isRequired,
    onInputReceived: _react.PropTypes.func.isRequired
  },

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.props.onInputReceived(this.refs.answer.value);
  },
  componentDidMount: function componentDidMount() {
    this.refs.answer.focus();
  },
  render: function render() {
    return _react2.default.createElement(
      'form',
      { style: styles.form, onSubmit: this.handleSubmit },
      _react2.default.createElement(
        'div',
        { style: styles.wrapper },
        _react2.default.createElement(
          'p',
          { style: styles.question },
          this.props.question
        ),
        _react2.default.createElement('input', { ref: 'answer', type: 'text', style: styles.input }),
        _react2.default.createElement('input', { type: 'submit', className: 'btn', style: styles.submit })
      )
    );
  }
});
exports.default = InputPrompt;
module.exports = exports['default'];

/***/ }),

/***/ 3310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _walls = __webpack_require__(2795);

var _walls2 = _interopRequireDefault(_walls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObstacleZoneWalls = function (_Walls) {
  _inherits(ObstacleZoneWalls, _Walls);

  function ObstacleZoneWalls(level, skin, drawDebugRect) {
    _classCallCheck(this, ObstacleZoneWalls);

    var _this = _possibleConstructorReturn(this, _Walls.call(this, level, skin, drawDebugRect));

    _this.obstacleZones = skin.customObstacleZones;
    return _this;
  }

  /**
   * @override
   */


  ObstacleZoneWalls.prototype.willRectTouchWall = function willRectTouchWall(xCenter, yCenter, collidableWidth, collidableHeight) {
    if (this.obstacleZones[this.background] && this.obstacleZones[this.background][this.wallMapRequested]) {
      var collisionRects = this.obstacleZones[this.background][this.wallMapRequested];

      // Compare against a set of specific rectangles.
      for (var i = 0; i < collisionRects.length; i++) {
        var rect = collisionRects[i];
        var rectWidth = rect.maxX - rect.minX + 1;
        var rectHeight = rect.maxY - rect.minY + 1;
        var rectCenterX = rect.minX + rectWidth / 2;
        var rectCenterY = rect.minY + rectHeight / 2;
        this.drawDebugRect("avatarCollision", rectCenterX, rectCenterY, rectWidth, rectHeight);

        if (this.overlappingTest(xCenter, rectCenterX, rectWidth / 2 + collidableWidth / 2, yCenter, rectCenterY, rectHeight / 2 + collidableHeight / 2)) {
          return true;
        }
      }
    }
    return false;
  };

  return ObstacleZoneWalls;
}(_walls2.default);

exports.default = ObstacleZoneWalls;
module.exports = exports["default"];

/***/ }),

/***/ 3311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collidable = __webpack_require__(2948);

var _collidable2 = _interopRequireDefault(_collidable);

var _StudioAnimation = __webpack_require__(2796);

var _StudioAnimation2 = _interopRequireDefault(_StudioAnimation);

var _StudioSpriteSheet = __webpack_require__(2797);

var _StudioSpriteSheet2 = _interopRequireDefault(_StudioSpriteSheet);

var _constants = __webpack_require__(789);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// mapping of how much we should rotate based on direction
var DIR_TO_ROTATION = {};
DIR_TO_ROTATION[_constants.Direction.EAST] = 0;
DIR_TO_ROTATION[_constants.Direction.SOUTH] = 90;
DIR_TO_ROTATION[_constants.Direction.WEST] = 180;
DIR_TO_ROTATION[_constants.Direction.NORTH] = 270;
DIR_TO_ROTATION[_constants.Direction.NORTHEAST] = 45;
DIR_TO_ROTATION[_constants.Direction.SOUTHEAST] = 135;
DIR_TO_ROTATION[_constants.Direction.SOUTHWEST] = 225;
DIR_TO_ROTATION[_constants.Direction.NORTHWEST] = 315;

// Origin of projectile relative to sprite, based on direction
// (a scale factor to be multiplied by sprite width and height)
// fromSprite coords are left, top
var OFFSET_FROM_SPRITE = {};
OFFSET_FROM_SPRITE[_constants.Direction.NORTH] = {
  x: 0.5,
  y: 0
};
OFFSET_FROM_SPRITE[_constants.Direction.EAST] = {
  x: 1,
  y: 0.5
};
OFFSET_FROM_SPRITE[_constants.Direction.SOUTH] = {
  x: 0.5,
  y: 1
};
OFFSET_FROM_SPRITE[_constants.Direction.WEST] = {
  x: 0,
  y: 0.5
};
OFFSET_FROM_SPRITE[_constants.Direction.NORTHEAST] = {
  x: 1,
  y: 0
};
OFFSET_FROM_SPRITE[_constants.Direction.SOUTHEAST] = {
  x: 1,
  y: 1
};
OFFSET_FROM_SPRITE[_constants.Direction.SOUTHWEST] = {
  x: 0,
  y: 1
};
OFFSET_FROM_SPRITE[_constants.Direction.NORTHWEST] = {
  x: 0,
  y: 0
};

// Origin of projectile, based on direction
// assumes projectile is always 50x50 in size
// projectile coords are center, center
var OFFSET_CENTER = {};
OFFSET_CENTER[_constants.Direction.NORTH] = {
  x: 0,
  y: -25
};
OFFSET_CENTER[_constants.Direction.EAST] = {
  x: 25,
  y: 0
};
OFFSET_CENTER[_constants.Direction.SOUTH] = {
  x: 0,
  y: 25
};
OFFSET_CENTER[_constants.Direction.WEST] = {
  x: -25,
  y: 0
};
OFFSET_CENTER[_constants.Direction.NORTHEAST] = {
  x: 25,
  y: -25
};
OFFSET_CENTER[_constants.Direction.SOUTHEAST] = {
  x: 25,
  y: 25
};
OFFSET_CENTER[_constants.Direction.SOUTHWEST] = {
  x: -25,
  y: 25
};
OFFSET_CENTER[_constants.Direction.NORTHWEST] = {
  x: -25,
  y: -25
};

/**
 * A Projectile is a type of Collidable.
 * Note: x/y represent x/y of center in gridspace
 * @extends {Collidable}
 */

var Projectile = function (_Collidable) {
  _inherits(Projectile, _Collidable);

  function Projectile(options) {
    _classCallCheck(this, Projectile);

    var _this = _possibleConstructorReturn(this, _Collidable.call(this, options));
    // call collidable constructor


    _this.height = options.height || 50;
    _this.width = options.width || 50;
    _this.speed = options.speed || _constants.DEFAULT_PROJECTILE_SPEED;

    // origin is at an offset from sprite location
    _this.x = options.spriteX + OFFSET_CENTER[options.dir].x + options.spriteWidth * OFFSET_FROM_SPRITE[options.dir].x;
    _this.y = options.spriteY + OFFSET_CENTER[options.dir].y + options.spriteHeight * OFFSET_FROM_SPRITE[options.dir].y;

    /** @private {StudioSpriteSheet} */
    _this.spriteSheet_ = new _StudioSpriteSheet2.default({
      frameWidth: options.spriteWidth,
      frameHeight: options.spriteHeight,
      defaultFramesPerAnimation: options.frames,
      assetPath: options.image,
      horizontalAnimation: true,
      totalAnimations: 1
    });

    /** @private {StudioAnimation} */
    _this.animation_ = new _StudioAnimation2.default(Object.assign({}, options, {
      spriteSheet: _this.spriteSheet_,
      animationFrameDuration: _this.getAnimationFrameDuration()
    }));
    return _this;
  }

  /** @returns {SVGImageElement} */


  Projectile.prototype.getElement = function getElement() {
    return this.animation_.getElement();
  };

  /**
   * Create an image element with a clip path
   */


  Projectile.prototype.createElement = function createElement(parentElement) {
    this.animation_.createElement(parentElement);
  };

  /**
   * Retrieve animation speed (frames per tick)
   */


  Projectile.prototype.getAnimationFrameDuration = function getAnimationFrameDuration() {
    return _constants.DEFAULT_PROJECTILE_ANIMATION_FRAME_DURATION * _constants.DEFAULT_PROJECTILE_SPEED / this.speed;
  };

  /**
   * Remove our element/clipPath/animator
   */


  Projectile.prototype.removeElement = function removeElement() {
    this.animation_.removeElement();
  };

  /**
   * Flip the direction of the projectile
   */


  Projectile.prototype.bounce = function bounce() {
    switch (this.dir) {
      case _constants.Direction.NORTH:
        this.dir = _constants.Direction.SOUTH;
        break;
      case _constants.Direction.WEST:
        this.dir = _constants.Direction.EAST;
        break;
      case _constants.Direction.SOUTH:
        this.dir = _constants.Direction.NORTH;
        break;
      case _constants.Direction.EAST:
        this.dir = _constants.Direction.WEST;
        break;
      case _constants.Direction.NORTHEAST:
        this.dir = _constants.Direction.SOUTHWEST;
        break;
      case _constants.Direction.SOUTHEAST:
        this.dir = _constants.Direction.NORTHWEST;
        break;
      case _constants.Direction.SOUTHWEST:
        this.dir = _constants.Direction.NORTHEAST;
        break;
      case _constants.Direction.NORTHWEST:
        this.dir = _constants.Direction.SOUTHEAST;
        break;
    }
  };

  /**
   * Display our projectile at it's current location, rotating as necessary
   */


  Projectile.prototype.display = function display() {
    this.animation_.redrawCenteredAt({
      x: this.x,
      y: this.y
    }, Studio.tickCount);

    if (this.spriteSheet_.defaultFramesPerAnimation > 1) {
      this.getElement().setAttribute('transform', 'rotate(' + DIR_TO_ROTATION[this.dir] + ', ' + this.x + ', ' + this.y + ')');
    }
  };

  Projectile.prototype.getNextPosition = function getNextPosition() {
    var unit = _constants.Direction.getUnitVector(this.dir);
    return {
      x: this.x + this.speed * unit.x,
      y: this.y + this.speed * unit.y
    };
  };

  Projectile.prototype.moveToNextPosition = function moveToNextPosition() {
    var next = this.getNextPosition();
    this.x = next.x;
    this.y = next.y;
  };

  /**
   * Change visible opacity of this projectile.
   * @param {number} newOpacity (between 0 and 1)
   * @override
   */


  Projectile.prototype.setOpacity = function setOpacity(newOpacity) {
    this.animation_.setOpacity(newOpacity);
  };

  return Projectile;
}(_collidable2.default);

exports.default = Projectile;
module.exports = exports['default'];

/***/ }),

/***/ 3312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(789);

var _customGameLogic = __webpack_require__(2794);

var _customGameLogic2 = _interopRequireDefault(_customGameLogic);

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Provides Function.prototype.inherits

/**
 * Custom logic for the Rocket Height levels
 * @constructor
 * @implements CustomGameLogic
 */
var RocketHeightLogic = function RocketHeightLogic(studio) {
  _customGameLogic2.default.apply(this, arguments);
  this.rocketIndex = 0;
  this.last = Date.now();
  this.seconds = 0;
  // rocket and height for use in success/failure checking
  this.rocket = null;
  this.height = 0;

  // Use by successCondition/failureCondition
  this.SECONDS_TO_RUN = 8;
};
RocketHeightLogic.inherits(_customGameLogic2.default);

RocketHeightLogic.prototype.onTick = function () {
  if (this.studio_.tickCount === 1) {
    // Make sure fields are properly initialized, for example if we've run
    // and then reset.
    this.last = Date.now();
    this.seconds = 0;
    this.rocket = this.studio_.sprite[this.rocketIndex];
    this.height = 0;
    this.studio_.setBackground({ value: 'space' });
  }

  // Update the rocket once a second
  if (Date.now() - this.last < 1000) {
    return;
  }
  this.last = Date.now();
  this.seconds++;

  // Display the rocket height and time elapsed
  this.height = this.rocket_height(this.seconds) || 0;
  this.rocket.y = this.studio_.MAZE_HEIGHT - (this.height + this.rocket.height);
  this.rocket.dir = _constants.Direction.NONE;
  this.studio_.scoreText = 'Time: ' + this.seconds + ' | Height: ' + this.height;
  this.studio_.displayScore();
};

/**
 * Calls the user provided rocket-height function, or no-op if none was provided.
 * @param {number} seconds Time elapsed since rocket launch
 * @returns {number} Height of rocket after seconds
 */
RocketHeightLogic.prototype.rocket_height = function (seconds) {
  var rocketHeight = this.resolveCachedBlock_('VALUE');
  if (rocketHeight) {
    return rocketHeight(seconds);
  }
};

module.exports = RocketHeightLogic;

/***/ }),

/***/ 3313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(789);

var _customGameLogic = __webpack_require__(2794);

var _customGameLogic2 = _interopRequireDefault(_customGameLogic);

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Provides Function.prototype.inherits

/**
 * Custom logic for the Sam the Bat levels
 * @constructor
 * @implements CustomGameLogic
 */
var SamBatLogic = function SamBatLogic(studio) {
  _customGameLogic2.default.apply(this, arguments);
  this.samIndex = 0;
  this.sam = null;
  // Has the onscreen? stopped Sam on a given side?
  this.stopped = { left: false, up: false, right: false, down: false };
};
SamBatLogic.inherits(_customGameLogic2.default);

SamBatLogic.prototype.onTick = function () {
  this.sam = this.studio_.sprite[this.samIndex];

  // Move Sam with arrow keys
  for (var key in _constants.KeyCodes) {
    if (this.studio_.keyState[_constants.KeyCodes[key]] && this.studio_.keyState[_constants.KeyCodes[key]] === "keydown") {
      switch (_constants.KeyCodes[key]) {
        case _constants.KeyCodes.LEFT:
          this.updateSam_(_constants.Direction.WEST);
          break;
        case _constants.KeyCodes.UP:
          this.updateSam_(_constants.Direction.NORTH);
          break;
        case _constants.KeyCodes.RIGHT:
          this.updateSam_(_constants.Direction.EAST);
          break;
        case _constants.KeyCodes.DOWN:
          this.updateSam_(_constants.Direction.SOUTH);
          break;
      }
    }
  }

  // Move Sam with arrow buttons
  for (var btn in this.studio_.btnState) {
    if (this.studio_.btnState[btn]) {
      switch (btn) {
        case 'leftButton':
          this.updateSam_(_constants.Direction.WEST);
          break;
        case 'upButton':
          this.updateSam_(_constants.Direction.NORTH);
          break;
        case 'rightButton':
          this.updateSam_(_constants.Direction.EAST);
          break;
        case 'downButton':
          this.updateSam_(_constants.Direction.SOUTH);
          break;
      }
    }
  }

  // Display Sam's coordinates, with y inverted
  var centerX = this.sam.x + this.sam.width / 2;
  var centerY = this.studio_.MAZE_HEIGHT - (this.sam.y + this.sam.height / 2);
  this.studio_.scoreText = '(' + centerX + ', ' + centerY + ')';
  this.studio_.displayScore();
};

/**
 * Before moving, check if Sam would still be onscreen?
 * If move would take Sam offscreen, set dir to None
 */
SamBatLogic.prototype.updateSam_ = function (dir) {
  var centerX = this.sam.x + this.sam.width / 2;
  //invert Y
  var centerY = this.studio_.MAZE_HEIGHT - (this.sam.y + this.sam.height / 2);

  switch (dir) {
    case _constants.Direction.WEST:
      if (!this.onscreen(centerX - this.sam.speed, centerY)) {
        dir = _constants.Direction.NONE;
        this.stopped.left = true;
      }
      break;
    case _constants.Direction.NORTH:
      if (!this.onscreen(centerX, centerY + this.sam.speed)) {
        dir = _constants.Direction.NONE;
        this.stopped.up = true;
      }
      break;
    case _constants.Direction.EAST:
      if (!this.onscreen(centerX + this.sam.speed, centerY)) {
        dir = _constants.Direction.NONE;
        this.stopped.right = true;
      }
      break;
    case _constants.Direction.SOUTH:
      if (!this.onscreen(centerX, centerY - this.sam.speed)) {
        dir = _constants.Direction.NONE;
        this.stopped.down = true;
      }
      break;
  }
  this.studio_.moveSingle({ spriteIndex: this.samIndex, dir: dir });
};

/**
 * Calls the user provided onscreen? function, or no-op if none was provided.
 * @param {number} x Current x location of Sam
 * @param {number} y Current y location of Sam (optional)
 * @returns {boolean} True if coordinate is onscreen?
 */
SamBatLogic.prototype.onscreen = function (x, y) {
  return this.resolveCachedBlock_('VALUE')(x, y);
};

module.exports = SamBatLogic;

/***/ }),

/***/ 3314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(789);

var constants = _interopRequireWildcard(_constants);

var _Item2 = __webpack_require__(2947);

var _Item3 = _interopRequireDefault(_Item2);

var _StudioAnimation = __webpack_require__(2796);

var _StudioAnimation2 = _interopRequireDefault(_StudioAnimation);

var _StudioSpriteSheet = __webpack_require__(2797);

var _StudioSpriteSheet2 = _interopRequireDefault(_StudioSpriteSheet);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Direction = constants.Direction;
var Emotions = constants.Emotions;

/**
 * A Sprite is a type of Item.
 * Note: x/y represent x/y of center in gridspace
 * @extends {Item}
 */

var Sprite = function (_Item) {
  _inherits(Sprite, _Item);

  function Sprite(options) {
    _classCallCheck(this, Sprite);

    /**
     * Rendering offset for item animation vs display position - applied as
     * late as possible.
     * @type {{x: number, y: number}}
     */
    var _this = _possibleConstructorReturn(this, _Item.call(this, options));
    // call collidable constructor


    _this.renderOffset = options.renderOffset || { x: 0, y: 0 };

    _this.speed = options.speed || constants.DEFAULT_SPRITE_SPEED;
    _this.setNormalFrameDuration(options.animationFrameDuration);
    _this.displayDir = options.displayDir || Direction.NONE;
    _this.startFadeTime = null;
    _this.fadeTime = 0;

    _this.image = null;
    _this.legacyImage = null;

    _this.animation_ = null;
    _this.legacyAnimation_ = null;

    _this.useLegacyIdleEmotionAnimations = false;

    _this.lastDrawPosition = { x: 0, y: 0 };
    return _this;
  }

  /**
   * FrameCounts objects are used in setImage and setLegacyImage:
   * @typedef {Object} FrameCounts
   * @property {number} walkFrames - frames in walk animations (spriteSheet)
   * @property {number} idleFrames - frames in idle animations (spriteSheet)
   * @property {number} walk - default frames in all types of animations (spriteSheet)
   * @property {number} idleNormal - number of idle animations (spriteSheet)
   * @property {number} idleEmotions - number of idle animations for each emotion (spriteSheet)
   * @property {number} walkingEmotions - number of south walking animations for each emotion (spriteSheet)
   * @property {number} turns - how many turn animations (applies to spriteSheet && legacySpriteSheet)
   * @property {boolean} counterClockwise - turn animations are in counter
   *    clockwise order (spriteSheet)
   * @property {number} packedSheetFrameCount - count of frames before wrapping
   *    for a packed sheet (applies to spriteSheet)
   * @property {number} normal - number of frames in idle animation (legacySpriteSheet)
   * @property {number} holdIdleFrame0Count - number of times to repeat frame 0 of idle animation (legacySpriteSheet)
   * @property {number} emotions - number of emotions included, 1 frame each (legacySpriteSheet)
   * @property {number} extraEmotions - number of emotions included, all frames cloned (legacySpriteSheet)
   */

  /**
   * Sets (or modifies) the image for the preferred spritesheet format - we will
   * generate a StudioSpriteSheet and StudioAnimation in response..
   *
   * @param {string} image URL for spritesheet image
   * @param {FrameCounts} frameCounts metadata describing spritesheet
   */


  Sprite.prototype.setImage = function setImage(image, frameCounts) {
    if (image === this.image) {
      return;
    }

    this.image = image;

    var options = {
      renderScale: this.renderScale,
      opacity: this.opacity,
      loop: this.loop,
      animationFrameDuration: this.animationFrameDuration,
      frameWidth: this.drawWidth,
      frameHeight: this.drawHeight,
      assetPath: this.image,
      animations: [{
        type: 'direction',
        count: frameCounts.turns || 0,
        frames: frameCounts.walkFrames || frameCounts.walk
      }, {
        type: 'idle',
        count: (frameCounts.idleNormal || 0) + (frameCounts.idleEmotions || 0),
        frames: frameCounts.idleFrames || frameCounts.walk
      }, {
        type: 'walkingEmotions',
        count: frameCounts.walkingEmotions || 0,
        frames: frameCounts.walkFrames || frameCounts.walk
      }],
      packedSheetFrameCount: frameCounts.packedSheetFrameCount,
      defaultFramesPerAnimation: frameCounts.walk,
      skewAnimations: true
    };

    if (this.animation_) {
      this.animation_.removeElement();
    }

    if (!this.image) {
      this.animation_ = null;
      return;
    }

    this.animation_ = new _StudioAnimation2.default(Object.assign({}, options, {
      spriteSheet: new _StudioSpriteSheet2.default(options),
      animationFrameDuration: this.getAnimationFrameDuration()
    }));
  };

  /**
   * Sets (or modifies) the image for the legacy spritesheet format - we will
   * generate a StudioSpriteSheet and StudioAnimation in response..
   *
   * The "legacy" spritesheet format was used by all of the original playlab
   * skins. Typically a single horizontal strip of images.
   *
   * Originally, it contained a normal frame and an optional blink frame
   * (later extended into an idle animation), a single frame for each direction
   * (called turns), and a single frame for each emotion.
   *
   * In late 2014, walking animations were added in a separate spritesheet. The
   * app switches between showing the walking spritesheet and the original
   * spritesheet when walking starts and stops.
   *
   * In late 2015, the original spritesheet format was extended to replicate all
   * of the non-walking frames in the original format for each emotion, such that
   * it contained multiple rows of images (extraEmotions)
   *
   * @param {string} image URL for spritesheet image
   * @param {FrameCounts} frameCounts metadata describing spritesheet
   */


  Sprite.prototype.setLegacyImage = function setLegacyImage(image, frameCounts) {
    if (image === this.legacyImage) {
      return;
    }

    this.legacyImage = image;

    var rowCount = 1 + (0, _utils.valueOr)(frameCounts.extraEmotions, 0);
    var frameCount = frameCounts.normal + frameCounts.turns + frameCounts.emotions;

    var options = {
      renderScale: this.renderScale,
      opacity: this.opacity,
      loop: this.loop,
      animationFrameDuration: this.animationFrameDuration,
      frameWidth: this.drawWidth,
      frameHeight: this.drawHeight,
      assetPath: this.legacyImage,
      animations: [{
        type: 'legacyEmotionRow',
        count: rowCount,
        frames: frameCount
      }],
      defaultFramesPerAnimation: frameCount,
      horizontalAnimation: true,
      skewAnimations: true
    };

    if (this.legacyAnimation_) {
      this.legacyAnimation_.removeElement();
    }

    if (!this.legacyImage) {
      this.legacyAnimation_ = null;
      return;
    }

    this.legacyAnimation_ = new _StudioAnimation2.default(Object.assign({}, options, {
      spriteSheet: new _StudioSpriteSheet2.default(options),
      animationFrameDuration: this.getAnimationFrameDuration()
    }));

    var turnCount = (0, _utils.valueOr)(frameCounts.turns, 0);
    var frame0Count = (0, _utils.valueOr)(frameCounts.holdIdleFrame0Count, 1);
    var i, animationList;

    for (var row = 0; row < rowCount; row++) {
      // Create a new special animation called "idle":
      animationList = [];

      for (i = 0; i < frame0Count; i++) {
        animationList.push({
          type: 'legacyEmotionRow',
          index: row,
          frame: 0
        });
      }
      for (i = 1; i < frameCounts.normal; i++) {
        animationList.push({
          type: 'legacyEmotionRow',
          index: row,
          frame: i
        });
      }
      this.legacyAnimation_.createSpecialAnimation('idle', row, animationList);

      // Create single-frame 'direction' animations from each 'turn' frame:
      if (turnCount >= 7) {
        var turnIndex = 0;
        var frameIndex = 0;
        if (turnCount === 7) {
          // If turnCount is only 7, create the first animation from 'normal'
          // frame 0.
          this.legacyAnimation_.createSpecialAnimation('direction', turnIndex, [{ type: 'legacyEmotionRow', index: row, frame: 0 }]);
          turnIndex++;
        }
        for (; turnIndex < 8; turnIndex++, frameIndex++) {
          this.legacyAnimation_.createSpecialAnimation('direction', turnIndex, [{ type: 'legacyEmotionRow',
            index: row,
            frame: this.frameCounts.normal + frameIndex
          }]);
        }
      }
    }

    if (rowCount === 1) {
      // If no extra emotions were supplied as complete rows, we can create
      // special idle animations for each emotion from single emotion frames:

      for (i = 0; i < frameCounts.emotions; i++) {
        // Create a new special animation called "idle" with emotion as index:
        animationList = [];
        for (var j = 0; j < frame0Count; j++) {
          animationList.push({
            type: 'legacyEmotionRow',
            index: 0,
            frame: frameCounts.normal + frameCounts.turns + i
          });
        }
        for (var k = 1; k < frameCounts.normal; k++) {
          animationList.push({
            type: 'legacyEmotionRow',
            index: 0,
            frame: k
          });
        }
        this.legacyAnimation_.createSpecialAnimation('idle', i + 1, animationList);
        this.useLegacyIdleEmotionAnimations = true;
      }
    }
  };

  /**
   * @returns {SVGImageElement}
   * @override
   */


  Sprite.prototype.getElement = function getElement() {
    return this.animation_ ? this.animation_.getElement() : null;
  };

  /**
   * @returns {SVGImageElement}
   */


  Sprite.prototype.getLegacyElement = function getLegacyElement() {
    return this.legacyAnimation_ ? this.legacyAnimation_.getElement() : null;
  };

  /**
   * Returns the frame of the spritesheet for the current walking direction.
   * @override
   */


  Sprite.prototype.getDirectionFrame = function getDirectionFrame() {
    var frameDirTable = this.frameCounts.counterClockwise ? constants.frameDirTableWalkingWithIdleCounterclockwise : constants.frameDirTableWalkingWithIdleClockwise;

    return frameDirTable[this.displayDir];
  };

  /**
   * Create an image element with a clip path
   * @override
   */


  Sprite.prototype.createElement = function createElement(parentElement) {
    if (this.animation_) {
      if (!this.animation_.getElement()) {
        this.animation_.createElement(parentElement);
      }
      if (!this.visible) {
        this.animation_.hide();
      }
    }
    if (this.legacyAnimation_) {
      if (!this.legacyAnimation_.getElement()) {
        this.legacyAnimation_.createElement(parentElement);
      }
      if (!this.visible) {
        this.legacyAnimation_.hide();
      }
    }
  };

  /**
   * This function should be called every frame, and moves the sprite around.
   */


  Sprite.prototype.update = function update() {
    _Item.prototype.update.call(this);

    // Draw the sprite's current location.
    Studio.drawDebugRect("spriteCenter", this.x, this.y, 3, 3);
  };

  /**
   * Begin a fade out.
   * @param {!number} fadeTime - the duration of the fade (in milliseconds)
   */


  Sprite.prototype.startFade = function startFade(fadeTime) {
    this.startFadeTime = new Date().getTime();
    this.fadeTime = (0, _utils.valueOr)(fadeTime, constants.DEFAULT_ACTOR_FADE_TIME);
  };

  /**
   * Remove our element/clipPath/animator
   * @override
   */


  Sprite.prototype.removeElement = function removeElement() {
    if (this.animation_) {
      this.animation_.removeElement();
    }
    if (this.legacyAnimation_) {
      this.legacyAnimation_.removeElement();
    }
  };

  /**
   * Retrieve animation frame duration (frames per tick)
   * @override
   */


  Sprite.prototype.getAnimationFrameDuration = function getAnimationFrameDuration() {
    if (this.dir === Direction.NONE) {
      return this.normalFrameDuration;
    } else {
      return this.normalFrameDuration * constants.DEFAULT_SPRITE_SPEED / this.speed;
    }
  };

  /**
   * Display our item at its current location
   * @override
   */


  Sprite.prototype.display = function display() {
    var currentTime = new Date().getTime();
    var opacity = 1;
    if (this.startFadeTime) {
      opacity = 1 - (currentTime - this.startFadeTime) / this.fadeTime;
      opacity = Math.max(opacity, 0);
      this.setOpacity(opacity);
      if (this.hasCompletedFade()) {
        // NOTE: we don't automatically change the state to hidden or set visible
        // to false here.
        this.startFadeTime = null;
      }
    }

    var useLegacyAnimation = false;
    var animationType;
    var animationIndex;
    var standingStill = this.displayDir === Direction.NONE;
    var facingSouthWithEmotion = this.displayDir === Direction.SOUTH && this.emotion !== Emotions.NORMAL;

    if (standingStill || !this.animation_ && facingSouthWithEmotion) {
      // Show idle animation while standing still
      // if we only have a legacy animation, also show while moving south
      animationIndex = this.emotion;
      animationType = 'idle';

      if (standingStill && this.frameCounts.normal) {
        // If we see legacy normal frames (which are "idle" animations), use them:
        useLegacyAnimation = true;
      } else if (this.animation_ && !this.frameCounts.idleNormal) {
        // If we are playing an "idle" animation from the primary spritesheet and
        // there were no "normal" idle animations in the sheet, index based on
        // (emotion - 1) instead of (emotion)
        animationIndex -= 1;
      }
    } else if (facingSouthWithEmotion && this.animation_ && this.animation_.hasType('walkingEmotions')) {
      animationIndex = this.emotion - 1;
      animationType = 'walkingEmotions';
    } else {
      animationIndex = this.getDirectionFrame();
      animationType = 'direction';
    }
    if (!this.animation_) {
      useLegacyAnimation = true;
    }

    var drawPosition = this.getCurrentDrawPosition();

    if (useLegacyAnimation) {
      // Legacy render path:
      if (this.animation_) {
        this.animation_.hide();
      }
      if (this.legacyAnimation_) {
        this.legacyAnimation_.setCurrentAnimation(animationType, animationIndex);
        this.legacyAnimation_.redrawCenteredAt(drawPosition, Studio.tickCount);
        if (this.visible) {
          this.legacyAnimation_.show();
        } else {
          this.legacyAnimation_.hide();
        }
      }
    } else {
      this.animation_.setCurrentAnimation(animationType, animationIndex);
      this.animation_.redrawCenteredAt(drawPosition, Studio.tickCount);
      if (this.visible) {
        this.animation_.show();
      } else {
        this.animation_.hide();
      }
      if (this.legacyAnimation_) {
        this.legacyAnimation_.hide();
      }
    }

    this.lastDrawPosition = drawPosition;
  };

  // TODO(ram): make x and y props consistent with Item. In sprites they
  // represent the top left corner, in items they're the center.
  /**
   * @override
   */


  Sprite.prototype.getCenterPos = function getCenterPos() {
    return {
      x: this.x + this.width / 2,
      y: this.y + this.height / 2
    };
  };

  /** @returns {object} the center x, y coordinates for the next draw */


  Sprite.prototype.getCurrentDrawPosition = function getCurrentDrawPosition() {
    return {
      x: this.displayX + this.drawWidth / 2 + this.renderOffset.x,
      y: this.displayY + this.drawHeight / 2 + this.renderOffset.y
    };
  };

  /**
   * @override
   */


  Sprite.prototype.updateAnimationFrameDuration_ = function updateAnimationFrameDuration_() {
    if (this.animation_) {
      this.animation_.setAnimationFrameDuration(this.getAnimationFrameDuration());
    }
    if (this.legacyAnimation_) {
      this.legacyAnimation_.setAnimationFrameDuration(this.getAnimationFrameDuration());
    }
  };

  /**
   * Sets the normal animation frame duration and changes the current animation
   * frame duration to match.
   * @param {number} duration Number of ticks per frame
   */


  Sprite.prototype.setNormalFrameDuration = function setNormalFrameDuration(duration) {
    this.normalFrameDuration = duration || constants.DEFAULT_SPRITE_ANIMATION_FRAME_DURATION;
    this.updateAnimationFrameDuration_();
  };

  /**
   * Change visible opacity of this collidable sprite.
   * @param {number} newOpacity (between 0 and 1)
   * @override
   */


  Sprite.prototype.setOpacity = function setOpacity(newOpacity) {
    if (this.animation_) {
      this.animation_.setOpacity(newOpacity);
    }
    if (this.legacyAnimation_) {
      this.legacyAnimation_.setOpacity(newOpacity);
    }
  };

  /**
   * @override
   */


  Sprite.prototype.atEdge = function atEdge(candidate) {
    return candidate.gridX < 0 || candidate.gridX * Studio.SQUARE_SIZE + this.width > Studio.MAZE_WIDTH || candidate.gridY < 0 || candidate.gridY * Studio.SQUARE_SIZE + this.height > Studio.MAZE_HEIGHT;
  };

  /**
   * @override
   */


  Sprite.prototype.hasWall = function hasWall(candidate) {
    return Studio.willSpriteTouchWall(this, candidate.gridX * Studio.SQUARE_SIZE, candidate.gridY * Studio.SQUARE_SIZE);
  };

  return Sprite;
}(_Item3.default);

exports.default = Sprite;
module.exports = exports['default'];

/***/ }),

/***/ 3315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ProtectedVisualizationDiv = __webpack_require__(788);

var _ProtectedVisualizationDiv2 = _interopRequireDefault(_ProtectedVisualizationDiv);

var _VisualizationOverlay = __webpack_require__(1293);

var _VisualizationOverlay2 = _interopRequireDefault(_VisualizationOverlay);

var _CrosshairOverlay = __webpack_require__(1912);

var _CrosshairOverlay2 = _interopRequireDefault(_CrosshairOverlay);

var _TooltipOverlay = __webpack_require__(1913);

var _TooltipOverlay2 = _interopRequireDefault(_TooltipOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msg = __webpack_require__(40);

var GameButtons = __webpack_require__(819).default;
var ArrowButtons = __webpack_require__(1737);
var BelowVisualization = __webpack_require__(824);


var StudioVisualizationColumn = function StudioVisualizationColumn(props) {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      _ProtectedVisualizationDiv2.default,
      null,
      _react2.default.createElement('svg', { version: '1.1', id: 'svgStudio' }),
      _react2.default.createElement(
        _VisualizationOverlay2.default,
        {
          width: 400,
          height: 400
        },
        _react2.default.createElement(_CrosshairOverlay2.default, null),
        _react2.default.createElement(_TooltipOverlay2.default, { providers: [(0, _TooltipOverlay.coordinatesProvider)()] })
      )
    ),
    _react2.default.createElement(
      GameButtons,
      null,
      _react2.default.createElement(ArrowButtons, null),
      props.finishButton && _react2.default.createElement(
        'div',
        { id: 'share-cell', className: 'share-cell-none' },
        _react2.default.createElement(
          'button',
          { id: 'finishButton', className: 'share' },
          _react2.default.createElement('img', { src: '/blockly/media/1x1.gif' }),
          msg.finish()
        )
      )
    ),
    _react2.default.createElement(BelowVisualization, null)
  );
};

StudioVisualizationColumn.propTypes = {
  finishButton: _react.PropTypes.bool.isRequired
};

module.exports = StudioVisualizationColumn;

/***/ }),

/***/ 3316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** @file A three-part loopable audio effect (start-loop-end). */

var utils = __webpack_require__(71);

var debugLogging = false;
function debug(msg) {
  if (debugLogging && console && console.info) {
    console.info('Audio: ' + msg);
  }
}

/** @enum {number} */
var PlaybackState = {
  NONE: 'none',
  BEGIN: 'begin',
  LOOP: 'loop',
  END: 'end'
};

/**
 * A loopable audio effect defined with three parts (start, middle, end) so that
 * you can get a smooth start/finish effect.
 *
 * Assumes the audio clips in question have already been preloaded by another
 * system.
 *
 * @param {AudioPlayer} audioPlayer
 * @param {Object} options
 * @param {string} [options.begin] - Audio clip name for start of sound.
 * @param {string} [options.loop] - Audio clip name for loopable part of sound.
 * @param {string} [options.end] - Audio clip name for end of sound.
 * @param {number} [options.volume] - Playback volume for the whole effect
 *        (applied to each individual clip), default to 1 which is normal gain.
 * @constructor
 */
var ThreeSliceAudio = function ThreeSliceAudio(audioPlayer, options) {
  options = utils.valueOr(options, {});
  /** @private {PlaybackState} */
  this.state_ = PlaybackState.NONE;

  /** @private {AudioPlayer} */
  this.audioPlayer_ = audioPlayer;

  /** @private {string} */
  this.beginClipName_ = options.begin;

  /** @private {string} */
  this.loopClipName_ = options.loop;

  /** @private {string} */
  this.endClipName_ = options.end;

  /** @private {number} */
  this.volume_ = utils.valueOr(options.volume, 1);
};
module.exports = ThreeSliceAudio;

/**
 * Turn on the audio effect, causing it to begin and then transition to the loop.
 * Will do nothing if the effect is already playing, so safe to call often (on
 * a key-repeat, for example).
 */
ThreeSliceAudio.prototype.on = function () {
  if (this.state_ === PlaybackState.NONE || this.state_ === PlaybackState.END) {
    debug('on');
    this.enterState_(PlaybackState.BEGIN);
  }
};

/**
 * Turn off the audio effect.  If the loop has not started yet (the sound is
 * still starting up) then it will just stop immediately.  If the loop has
 * started, the end effect will be played and then the audio will stop.
 */
ThreeSliceAudio.prototype.off = function () {
  debug('off');
  if (this.state_ === PlaybackState.BEGIN || this.state_ === PlaybackState.LOOP) {
    this.enterState_(PlaybackState.END);
  }
};

ThreeSliceAudio.prototype.enterState_ = function (state) {
  this.exitState_(this.state_);
  debug(this.state_ + ' -> ' + state);
  this.state_ = state;
  var callback = this.whenSoundStopped_.bind(this, state);
  if (state === PlaybackState.BEGIN) {
    if (this.beginClipName_) {
      this.audioPlayer_.play(this.beginClipName_, {
        volume: this.volume_,
        onEnded: callback
      });
    } else {
      this.enterState_(PlaybackState.LOOP);
    }
  } else if (state === PlaybackState.LOOP) {
    if (this.loopClipName_) {
      this.audioPlayer_.play(this.loopClipName_, {
        volume: this.volume_,
        loop: true,
        onEnded: callback
      });
    } else {
      this.enterState_(PlaybackState.END);
    }
  } else if (state === PlaybackState.END) {
    if (this.endClipName_) {
      this.audioPlayer_.play(this.endClipName_, {
        volume: this.volume_,
        onEnded: callback
      });
    } else {
      this.enterState_(PlaybackState.NONE);
    }
  }
};

ThreeSliceAudio.prototype.exitState_ = function (state) {
  if (state === PlaybackState.BEGIN && this.beginClipName_) {
    this.audioPlayer_.stopLoopingAudio(this.beginClipName_);
  } else if (state === PlaybackState.LOOP && this.loopClipName_) {
    this.audioPlayer_.stopLoopingAudio(this.loopClipName_);
  } else if (state === PlaybackState.END && this.endClipName_) {
    this.audioPlayer_.stopLoopingAudio(this.endClipName_);
  }
};

ThreeSliceAudio.prototype.whenSoundStopped_ = function (stoppedState) {
  debug('soundStopped (' + stoppedState + ')');
  if (stoppedState === PlaybackState.BEGIN && this.state_ === PlaybackState.BEGIN) {
    this.enterState_(PlaybackState.LOOP);
  } else if (stoppedState === PlaybackState.END && this.state_ === PlaybackState.END) {
    this.enterState_(PlaybackState.NONE);
  }
};

/***/ }),

/***/ 3317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _walls = __webpack_require__(2795);

var _walls2 = _interopRequireDefault(_walls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TileWalls = function (_Walls) {
  _inherits(TileWalls, _Walls);

  function TileWalls(level, skin, drawDebugRect, squareSize, rows, columns, getWallValue) {
    _classCallCheck(this, TileWalls);

    var _this = _possibleConstructorReturn(this, _Walls.call(this, level, skin, drawDebugRect));

    _this.squareSize = squareSize;
    _this.rows = rows;
    _this.columns = columns;
    _this.getWallValue = getWallValue;
    return _this;
  }

  /**
   * @override
   */


  TileWalls.prototype.willRectTouchWall = function willRectTouchWall(xCenter, yCenter, collidableWidth, collidableHeight) {
    var colsOffset = Math.floor(xCenter) + 1;
    var rowsOffset = Math.floor(yCenter) + 1;
    var xGrid = Math.floor(xCenter / this.squareSize);
    var iYGrid = Math.floor(yCenter / this.squareSize);

    // Compare against regular wall tiles.
    for (var col = Math.max(0, xGrid - colsOffset); col < Math.min(this.columns, xGrid + colsOffset); col++) {
      for (var row = Math.max(0, iYGrid - rowsOffset); row < Math.min(this.rows, iYGrid + rowsOffset); row++) {
        if (this.getWallValue(row, col)) {
          this.drawDebugRect("avatarCollision", (col + 0.5) * this.squareSize, (row + 0.5) * this.squareSize, this.squareSize, this.squareSize);

          if (this.overlappingTest(xCenter, (col + 0.5) * this.squareSize, this.squareSize / 2 + collidableWidth / 2, yCenter, (row + 0.5) * this.squareSize, this.squareSize / 2 + collidableHeight / 2)) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return TileWalls;
}(_walls2.default);

exports.default = TileWalls;
module.exports = exports["default"];

/***/ }),

/***/ 3318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var api = __webpack_require__(3319);
var paramLists = __webpack_require__(2799);

module.exports.blocks = [{ func: 'setDroid', parent: api, category: '', params: ['"R2-D2"'], dropdown: { 0: ['"random"', '"R2-D2"', '"C-3PO"'] } }, { func: 'setDroidSpeed', parent: api, category: '', params: ['"fast"'], dropdown: { 0: ['"random"', '"slow"', '"normal"', '"fast"'] } }, { func: 'setBackground', parent: api, category: '', params: ['"Hoth"'], dropdown: { 0: ['"random"', '"Endor"', '"Hoth"', '"Starship"'] } }, { func: 'setMap', parent: api, category: '', params: ['"blank"'], dropdown: { 0: ['"random"', '"blank"', '"circle"', '"horizontal"', '"grid"', '"blobs"'] } }, { func: 'moveRight', parent: api, category: '' }, { func: 'moveLeft', parent: api, category: '' }, { func: 'moveUp', parent: api, category: '' }, { func: 'moveDown', parent: api, category: '' }, { func: 'goRight', parent: api, category: '' }, { func: 'goLeft', parent: api, category: '' }, { func: 'goUp', parent: api, category: '' }, { func: 'goDown', parent: api, category: '' }, { func: 'playSound', parent: api, category: '', params: ['"R2-D2sound1"'], dropdown: { 0: paramLists.playSoundDropdown } }, { func: 'endGame', parent: api, category: '', params: ['"win"'], dropdown: { 0: ['"win"', '"lose"'] } }, { func: 'addPoints', parent: api, category: '', params: ["100"] }, { func: 'removePoints', parent: api, category: '', params: ["100"] }, { func: 'addCharacter', parent: api, category: '', params: ['"PufferPig"'], dropdown: { 0: ['"random"', '"Stormtrooper"', '"RebelPilot"', '"PufferPig"', '"Mynock"', '"MouseDroid"', '"Tauntaun"', '"Probot"'] } }, { func: 'moveFast', parent: api, category: '', params: ['"PufferPig"'], dropdown: { 0: ['"random"', '"Stormtrooper"', '"RebelPilot"', '"PufferPig"', '"Mynock"', '"MouseDroid"', '"Tauntaun"', '"Probot"'] } }, { func: 'moveNormal', parent: api, category: '', params: ['"PufferPig"'], dropdown: { 0: ['"random"', '"Stormtrooper"', '"RebelPilot"', '"PufferPig"', '"Mynock"', '"MouseDroid"', '"Tauntaun"', '"Probot"'] } }, { func: 'moveSlow', parent: api, category: '', params: ['"PufferPig"'], dropdown: { 0: ['"random"', '"Stormtrooper"', '"RebelPilot"', '"PufferPig"', '"Mynock"', '"MouseDroid"', '"Tauntaun"', '"Probot"'] } }, { func: 'whenLeft', block: 'function whenLeft() {}', expansion: 'function whenLeft() {\n  __;\n}', category: '' }, { func: 'whenRight', block: 'function whenRight() {}', expansion: 'function whenRight() {\n  __;\n}', category: '' }, { func: 'whenUp', block: 'function whenUp() {}', expansion: 'function whenUp() {\n  __;\n}', category: '' }, { func: 'whenDown', block: 'function whenDown() {}', expansion: 'function whenDown() {\n  __;\n}', category: '' }, { func: 'whenTouchObstacle', block: 'function whenTouchObstacle() {}', expansion: 'function whenTouchObstacle() {\n  __;\n}', category: '' }, { func: 'whenGetCharacter', block: 'function whenGetCharacter() {}', expansion: 'function whenGetCharacter() {\n  __;\n}', category: '' }, { func: 'whenGetStormtrooper', block: 'function whenGetStormtrooper() {}', expansion: 'function whenGetStormtrooper() {\n  __;\n}', category: '' }, { func: 'whenGetRebelPilot', block: 'function whenGetRebelPilot() {}', expansion: 'function whenGetRebelPilot() {\n  __;\n}', category: '' }, { func: 'whenGetPufferPig', block: 'function whenGetPufferPig() {}', expansion: 'function whenGetPufferPig() {\n  __;\n}', category: '' }, { func: 'whenGetMynock', block: 'function whenGetMynock() {}', expansion: 'function whenGetMynock() {\n  __;\n}', category: '' }, { func: 'whenGetMouseDroid', block: 'function whenGetMouseDroid() {}', expansion: 'function whenGetMouseDroid() {\n  __;\n}', category: '' }, { func: 'whenGetTauntaun', block: 'function whenGetTauntaun() {}', expansion: 'function whenGetTauntaun() {\n  __;\n}', category: '' }, { func: 'whenGetProbot', block: 'function whenGetProbot() {}', expansion: 'function whenGetProbot() {\n  __;\n}', category: '' }, { func: 'whenGetAllCharacters', block: 'function whenGetAllCharacters() {}', expansion: 'function whenGetAllCharacters() {\n  __;\n}', category: '' }, { func: 'whenGetAllStormtroopers', block: 'function whenGetAllStormtroopers() {}', expansion: 'function whenGetAllStormtroopers() {\n  __;\n}', category: '' }, { func: 'whenGetAllRebelPilots', block: 'function whenGetAllRebelPilots() {}', expansion: 'function whenGetAllRebelPilots() {\n  __;\n}', category: '' }, { func: 'whenGetAllPufferPigs', block: 'function whenGetAllPufferPigs() {}', expansion: 'function whenGetAllPufferPigs() {\n  __;\n}', category: '' }, { func: 'whenGetAllMynocks', block: 'function whenGetAllMynocks() {}', expansion: 'function whenGetAllMynocks() {\n  __;\n}', category: '' }, { func: 'whenGetAllMouseDroids', block: 'function whenGetAllMouseDroids() {}', expansion: 'function whenGetAllMouseDroids() {\n  __;\n}', category: '' }, { func: 'whenGetAllTauntauns', block: 'function whenGetAllTauntauns() {}', expansion: 'function whenGetAllTauntauns() {\n  __;\n}', category: '' }, { func: 'whenGetAllProbots', block: 'function whenGetAllProbots() {}', expansion: 'function whenGetAllProbots() {\n  __;\n}', category: '' },

// Functions hidden from autocomplete - not used in hoc2015:
{ func: 'whenTouchStormtrooper', block: 'function whenTouchStormtrooper() {}', expansion: 'function whenTouchStormtrooper() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'whenTouchRebelPilot', block: 'function whenTouchRebelPilot() {}', expansion: 'function whenTouchRebelPilot() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'whenTouchPufferPig', block: 'function whenTouchPufferPig() {}', expansion: 'function whenTouchPufferPig() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'whenTouchMynock', block: 'function whenTouchMynock() {}', expansion: 'function whenTouchMynock() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'whenTouchMouseDroid', block: 'function whenTouchMouseDroid() {}', expansion: 'function whenTouchMouseDroid() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'whenTouchTauntaun', block: 'function whenTouchTauntaun() {}', expansion: 'function whenTouchTauntaun() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'whenTouchProbot', block: 'function whenTouchProbot() {}', expansion: 'function whenTouchProbot() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'whenTouchCharacter', block: 'function whenTouchCharacter() {}', expansion: 'function whenTouchCharacter() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'changeScore', parent: api, category: '', params: ["1"], noAutocomplete: true }, { func: 'whenTouchGoal', block: 'function whenTouchGoal() {}', expansion: 'function whenTouchGoal() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'whenTouchAllGoals', block: 'function whenTouchAllGoals() {}', expansion: 'function whenTouchAllGoals() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'whenScore1000', block: 'function whenScore1000() {}', expansion: 'function whenScore1000() {\n  __;\n}', category: '', noAutocomplete: true }, { func: 'setToChase', parent: api, category: '', params: ['"PufferPig"'], dropdown: { 0: ['"random"', '"Stormtrooper"', '"RebelPilot"', '"PufferPig"', '"Mynock"', '"MouseDroid"', '"Tauntaun"', '"Probot"'] }, noAutocomplete: true }, { func: 'setToFlee', parent: api, category: '', params: ['"PufferPig"'], dropdown: { 0: ['"random"', '"Stormtrooper"', '"RebelPilot"', '"PufferPig"', '"Mynock"', '"MouseDroid"', '"Tauntaun"', '"Probot"'] }, noAutocomplete: true }, { func: 'setToRoam', parent: api, category: '', params: ['"PufferPig"'], dropdown: { 0: ['"random"', '"Stormtrooper"', '"RebelPilot"', '"PufferPig"', '"Mynock"', '"MouseDroid"', '"Tauntaun"', '"Probot"'] }, noAutocomplete: true }, { func: 'setToStop', parent: api, category: '', params: ['"PufferPig"'], dropdown: { 0: ['"random"', '"Stormtrooper"', '"RebelPilot"', '"PufferPig"', '"Mynock"', '"MouseDroid"', '"Tauntaun"', '"Probot"'] }, noAutocomplete: true }, { func: 'setSprite', parent: api, category: '', params: ['0', '"R2-D2"'], dropdown: { 1: ['"random"', '"R2-D2"', '"C-3PO"'] }, noAutocomplete: true }, { func: 'setSpritePosition', parent: api, category: '', params: ["0", "7"], noAutocomplete: true }, { func: 'setSpriteSpeed', parent: api, category: '', params: ["0", "8"], noAutocomplete: true }, { func: 'setSpriteEmotion', parent: api, category: '', params: ["0", "1"], noAutocomplete: true }, { func: 'setSpriteSize', parent: api, category: '', params: ["0", "1.0"], noAutocomplete: true }, { func: 'throwProjectile', parent: api, category: '', params: ["0", "1", '"blue_fireball"'], noAutocomplete: true }, { func: 'vanish', parent: api, category: '', params: ["0"], noAutocomplete: true }, { func: 'move', parent: api, category: '', params: ["0", "1"], noAutocomplete: true }, { func: 'showDebugInfo', parent: api, category: '', params: ["false"], noAutocomplete: true }, { func: 'onEvent', parent: api, category: '', params: ["'when-left'", "function() {\n  \n}"], noAutocomplete: true }];

module.exports.categories = {
  '': {
    color: 'red',
    blocks: []
  },
  'Play Lab': {
    color: 'red',
    blocks: []
  },
  Commands: {
    color: 'red',
    blocks: []
  },
  Events: {
    color: 'green',
    blocks: []
  }
};

module.exports.autocompleteFunctionsWithSemicolon = true;
module.exports.showParamDropdowns = true;

/***/ }),

/***/ 3319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// API definitions for functions exposed for JavaScript (droplet/ace) levels:

exports.endGame = function (value) {
  Studio.queueCmd(null, 'endGame', { 'value': value });
};

exports.setBackground = function (value) {
  Studio.queueCmd(null, 'setBackground', { 'value': value });
};

exports.setMap = function (value) {
  Studio.queueCmd(null, 'setMap', { 'value': value });
};

exports.setMapAndColor = function (color, value) {
  Studio.queueCmd(null, 'setMapAndColor', {
    'value': value,
    'color': color
  });
};

exports.setAllowSpritesOutsidePlayspace = function (value) {
  Studio.queueCmd(null, 'setAllowSpritesOutsidePlayspace', {
    'value': value
  });
};

exports.setSprite = function (spriteIndex, value) {
  Studio.queueCmd(null, 'setSprite', {
    'spriteIndex': spriteIndex,
    'value': value
  });
};

exports.setSpriteEmotion = function (spriteIndex, value) {
  Studio.queueCmd(null, 'setSpriteEmotion', {
    'spriteIndex': spriteIndex,
    'value': value
  });
};

exports.setSpriteSpeed = function (spriteIndex, value) {
  Studio.queueCmd(null, 'setSpriteSpeed', {
    'spriteIndex': spriteIndex,
    'value': value
  });
};

// setDroid is a wrapper to setSprite that always passes 0 for the spriteIndex
// (used by hoc2015)

exports.setDroid = function (value) {
  Studio.queueCmd(null, 'setSprite', {
    'spriteIndex': 0,
    'value': value
  });
};

exports.setDroidSpeed = function (value) {
  Studio.queueCmd(null, 'setDroidSpeed', {
    'value': value
  });
};

exports.setSpriteSize = function (spriteIndex, value) {
  Studio.queueCmd(null, 'setSpriteSize', {
    'spriteIndex': spriteIndex,
    'value': value
  });
};

exports.setSpritePosition = function (spriteIndex, value) {
  Studio.queueCmd(null, 'setSpritePosition', {
    'spriteIndex': spriteIndex,
    'value': value
  });
};

/*
exports.setSpriteXY = function (spriteIndex, xpos, ypos) {
  Studio.queueCmd(null, 'setSpriteXY', {
    'spriteIndex': spriteIndex,
    'x': xpos,
    'y': ypos
  });
};
*/

exports.setSpriteBehavior = function (id, spriteIndex, targetSpriteIndex, behavior) {
  Studio.queueCmd(id, 'setSpriteBehavior', {
    spriteIndex: spriteIndex,
    targetSpriteIndex: targetSpriteIndex,
    behavior: behavior
  });
};

exports.setSpritesWander = function (id, spriteName) {
  Studio.queueCmd(id, 'setSpritesWander', {
    'spriteName': spriteName
  });
};

exports.setSpritesStop = function (id, spriteName) {
  Studio.queueCmd(id, 'setSpritesStop', {
    'spriteName': spriteName
  });
};

exports.setSpritesChase = function (id, targetSpriteIndex, spriteName) {
  Studio.queueCmd(id, 'setSpritesChase', {
    'spriteName': spriteName,
    'targetSpriteIndex': targetSpriteIndex
  });
};

exports.setSpritesFlee = function (id, targetSpriteIndex, spriteName) {
  Studio.queueCmd(id, 'setSpritesFlee', {
    'spriteName': spriteName,
    'targetSpriteIndex': targetSpriteIndex
  });
};

exports.setSpritesSpeed = function (id, speed, spriteName) {
  Studio.queueCmd(id, 'setSpritesSpeed', {
    'spriteName': spriteName,
    'speed': speed
  });
};

exports.playSound = function (soundName) {
  Studio.queueCmd(null, 'playSound', { 'soundName': soundName });
};

exports.throwProjectile = function (spriteIndex, dir, className) {
  Studio.queueCmd(null, 'throwProjectile', {
    'spriteIndex': spriteIndex,
    'dir': dir,
    'className': className
  });
};

/*
exports.makeProjectile = function(className, action) {
  Studio.queueCmd(null, 'makeProjectile', {
    'className': className,
    'action': action
  });
};
*/

exports.move = function (spriteIndex, dir) {
  Studio.queueCmd(null, 'move', {
    'spriteIndex': spriteIndex,
    'dir': dir
  });
};

exports.moveRight = function () {
  Studio.queueCmd(null, 'moveRight');
};

exports.moveLeft = function () {
  Studio.queueCmd(null, 'moveLeft');
};

exports.moveUp = function () {
  Studio.queueCmd(null, 'moveUp');
};

exports.moveDown = function () {
  Studio.queueCmd(null, 'moveDown');
};

// goUp/Down/LeftRight are wrappers for moveUp/Down/Left/Right (used by hoc2015)
exports.goRight = function () {
  Studio.queueCmd(null, 'moveRight');
};

exports.goLeft = function () {
  Studio.queueCmd(null, 'moveLeft');
};

exports.goUp = function () {
  Studio.queueCmd(null, 'moveUp');
};

exports.goDown = function () {
  Studio.queueCmd(null, 'moveDown');
};

// addPoints is a wrapper for changeScore (used by hoc2015)

exports.addPoints = function (value) {
  Studio.changeScore({ 'value': value });
  Studio.queueCmd(null, 'displayScore', {});
};

// removePoints is a wrapper for reduceScore (used by hoc2015)

exports.removePoints = function (value) {
  Studio.reduceScore({ 'value': value });
  Studio.queueCmd(null, 'displayScore', {});
};

exports.changeScore = function (value) {
  Studio.changeScore({ 'value': value });
  Studio.queueCmd(null, 'displayScore', {});
};

exports.getScore = function () {
  return Studio.playerScore;
};

exports.setScore = function (value) {
  Studio.setScore(value);
};

exports.addCharacter = function (className) {
  Studio.queueCmd(null, 'addItem', {
    'className': className
  });
};

exports.setToChase = function (className) {
  Studio.queueCmd(null, 'setItemActivity', {
    'className': className,
    'type': 'chase'
  });
};

exports.setToFlee = function (className) {
  Studio.queueCmd(null, 'setItemActivity', {
    'className': className,
    'type': 'flee'
  });
};

exports.setToRoam = function (className) {
  Studio.queueCmd(null, 'setItemActivity', {
    'className': className,
    'type': 'roam'
  });
};

exports.setToStop = function (className) {
  Studio.queueCmd(null, 'setItemActivity', {
    'className': className,
    'type': 'none'
  });
};

exports.moveFast = function (className, speed) {
  Studio.queueCmd(null, 'setItemSpeed', {
    'className': className,
    'speed': 'fast'
  });
};

exports.moveNormal = function (className, speed) {
  Studio.queueCmd(null, 'setItemSpeed', {
    'className': className,
    'speed': 'normal'
  });
};

exports.moveSlow = function (className, speed) {
  Studio.queueCmd(null, 'setItemSpeed', {
    'className': className,
    'speed': 'slow'
  });
};

exports.showDebugInfo = function (value) {
  Studio.queueCmd(null, 'showDebugInfo', {
    'value': value
  });
};

/*
exports.setScoreText = function(text) {
  Studio.queueCmd(null, 'setScoreText', {'text': text});
};

exports.showCoordinates = function() {
  Studio.queueCmd(null, 'showCoordinates', {});
};
*/

exports.vanish = function (spriteIndex) {
  Studio.queueCmd(null, 'vanish', { spriteIndex: spriteIndex });
};

exports.onEvent = function (eventName, func) {
  Studio.queueCmd(null, 'onEvent', {
    'eventName': eventName,
    'func': func
  });
};

/***/ }),

/***/ 3320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(789);

var _locale = __webpack_require__(1706);

var _locale2 = _interopRequireDefault(_locale);

var _utils = __webpack_require__(71);

var _block_utils = __webpack_require__(743);

var _block_utils2 = _interopRequireDefault(_block_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tb = _block_utils2.default.createToolbox;
var blockOfType = _block_utils2.default.blockOfType;
var createCategory = _block_utils2.default.createCategory;

/**
 * Constructs a required block definition to match "Say [sprite] [text]" blocks
 * @param options (all optional):
 *          sprite (string): zero-indexed string ID of sprite, e.g., "1"
 *          notDefaultText (boolean): require changing the text from the default
 *          requiredText (string): text must change from default. we show
 *            requiredText in feedback blocks
 * @returns test definition suitable for feedback.js::getMissingBlocks
 *          required block processing
 */
function saySpriteRequiredBlock(options) {
  var titles = {};
  if (options.sprite) {
    titles.SPRITE = options.sprite;
  }
  if (options.requiredText) {
    titles.TEXT = options.requiredText;
  }
  if (options.notDefaultText) {
    titles.TEXT = _locale2.default.helloWorld();
  }

  return [{
    test: function test(block) {
      if (block.type !== 'studio_saySprite') {
        return false;
      }
      if (options.sprite && block.getTitleValue("SPRITE") !== options.sprite) {
        return false;
      }
      if ((options.notDefaultText || options.requiredText) && block.getTitleValue("TEXT") === _locale2.default.defaultSayText()) {
        return false;
      }

      return true;
    },
    type: 'studio_saySprite',
    titles: titles
  }];
}

/**
 * Constructs a required block definition to match "move [sprite] [dir]" blocks
 * @param {string} [options.sprite] zero-indexed string ID of sprite, e.g., "1"
 * @param {string} [options.dir] string of Direction constant. We show
 *        the direction in feedback blocks
 * @returns {Array} test definition suitable for getMissingRequiredBlocks
 *          required block processing
 * @see FeedbackUtils#getMissingRequiredBlocks
 */
function moveRequiredBlock(options) {
  var titles = {};
  if (options.sprite) {
    titles.SPRITE = options.sprite;
  }
  if (options.dir) {
    titles.DIR = options.dir;
  }

  return [{
    test: function test(block) {
      if (block.type !== 'studio_move') {
        return false;
      }
      if (options.sprite && block.getTitleValue("SPRITE") !== options.sprite) {
        return false;
      }
      if (options.dir && block.getTitleValue("DIR") !== options.dir) {
        return false;
      }

      return true;
    },
    type: 'studio_move',
    titles: titles
  }];
}

function moveNorthRequiredBlock() {
  return moveRequiredBlock({ dir: '1' });
}

function moveSouthRequiredBlock() {
  return moveRequiredBlock({ dir: '4' });
}

function moveEastRequiredBlock() {
  return moveRequiredBlock({ dir: '2' });
}

function moveWestRequiredBlock() {
  return moveRequiredBlock({ dir: '8' });
}

/**
 * Hoc2015 blockly helpers. We base hoc2015 blockly levels off of hoc2015 droplet
 * levels, marking them as editCode=false and overriding the startBlocks,
 * requiredBlocks and toolboxes as appropriate for the blockly progression
 */

var hocMoveNSEW = '<block type="studio_move"><title name="DIR">1</title></block> \
  <block type="studio_move"><title name="DIR">4</title></block> \
  <block type="studio_move"><title name="DIR">8</title></block> \
  <block type="studio_move"><title name="DIR">2</title></block>';

var hocMoveNS = '<block type="studio_move"><title name="DIR">1</title></block> \
  <block type="studio_move"><title name="DIR">4</title></block>';

var whenRunMoveEast = '<block type="when_run"><next> \
  <block type="studio_move"><title name="DIR">2</title></block></next> \
  </block>';

var whenRunMoveSouth = '<block type="when_run"><next> \
  <block type="studio_move"><title name="DIR">4</title></block></next> \
  </block>';

var whenUpDown = '<block type="studio_whenUp" deletable="false" x="20" y="20"></block> \
  <block type="studio_whenDown" deletable="false" x="20" y="150"></block>';

var whenUpDownLeftRight = '<block type="studio_whenUp" deletable="false" x="20" y="20"></block> \
  <block type="studio_whenDown" deletable="false" x="20" y="150"></block> \
  <block type="studio_whenLeft" deletable="false" x="20" y="280"></block> \
  <block type="studio_whenRight" deletable="false" x="20" y="410"></block>';

/**
 * K1 helpers. We base k1 levels off of existing non-k1 levels, marking them as isK1 and
 * overriding the requiredBlocks and toolboxes as appropriate for the k1 progression
 */

var moveDistanceNSEW = blockOfType('studio_moveNorthDistance') + blockOfType('studio_moveEastDistance') + blockOfType('studio_moveSouthDistance') + blockOfType('studio_moveWestDistance');

function whenArrowBlocks(yOffset, yDelta) {
  return '<block type="studio_whenUp" deletable="false" x="20" y="' + yOffset.toString() + '"></block> \
    <block type="studio_whenDown" deletable="false" x="20" y="' + (yDelta + yOffset).toString() + '"></block> \
    <block type="studio_whenLeft" deletable="false" x="20" y="' + (2 * yDelta + yOffset).toString() + '"></block> \
    <block type="studio_whenRight" deletable="false" x="20" y="' + (3 * yDelta + yOffset).toString() + '"></block>';
}

/*
 * Configuration for all levels.
 */
var levels = module.exports = {};

// Base config for levels created via levelbuilder
levels.custom = {
  'ideal': Infinity,
  'requiredBlocks': [],
  'scale': {
    'snapRadius': 2
  },
  'startBlocks': ''
};

// Can you make this dog say "hello world"
levels.dog_hello = {
  'ideal': 2,
  'instructionsImportant': true,
  'requiredBlocks': [saySpriteRequiredBlock({
    notDefaultText: true
  })],
  'scale': {
    'snapRadius': 2
  },
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'goal': {
    successCondition: function successCondition() {
      return Studio.sayComplete > 0;
    }
  },
  'timeoutFailureTick': 100,
  'toolbox': tb(blockOfType('studio_saySprite')),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block>'
};
levels.k1_1 = (0, _utils.extend)(levels.dog_hello, {
  'isK1': true,
  'toolbox': tb(blockOfType('studio_saySprite'))
});
levels.c2_1 = (0, _utils.extend)(levels.dog_hello);
levels.c3_story_1 = (0, _utils.extend)(levels.dog_hello);
levels.playlab_1 = (0, _utils.extend)(levels.dog_hello, {
  background: 'winter',
  timeoutFailureTick: null,
  timeoutAfterWhenRun: true,
  firstSpriteIndex: 2, // penguin
  goal: {
    successCondition: function successCondition() {
      return Studio.allWhenRunBlocksComplete() && Studio.sayComplete > 0;
    }
  },
  // difference is we say hello instead of hello world
  requiredBlocks: [saySpriteRequiredBlock({
    requiredText: _locale2.default.hello()
  })]
});

levels.iceage_hello1 = (0, _utils.extend)(levels.playlab_1, {
  background: 'icy5',
  firstSpriteIndex: 1
});
levels.gumball_hello1 = (0, _utils.extend)(levels.playlab_1, {
  background: 'dots',
  firstSpriteIndex: 0
});

// Can you make the dog say something and then have the cat say something afterwards?
levels.dog_and_cat_hello = {
  'ideal': 3,
  'requiredBlocks': [
  // make sure each sprite says something
  saySpriteRequiredBlock({
    sprite: "0",
    notDefaultText: true
  }), saySpriteRequiredBlock({
    sprite: "1",
    notDefaultText: true
  })],
  'scale': {
    'snapRadius': 2
  },
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 16, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'goal': {
    successCondition: function successCondition() {
      return Studio.sayComplete > 1;
    }
  },
  'timeoutFailureTick': 200,
  'toolbox': tb(blockOfType('studio_saySprite')),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block>'
};
levels.k1_2 = (0, _utils.extend)(levels.dog_and_cat_hello, {
  'isK1': true,
  'toolbox': tb(blockOfType('studio_saySprite'))
});
levels.c2_2 = (0, _utils.extend)(levels.dog_and_cat_hello, {});
levels.c3_story_2 = (0, _utils.extend)(levels.dog_and_cat_hello, {});
levels.playlab_2 = (0, _utils.extend)(levels.dog_and_cat_hello, {
  background: 'desert',
  firstSpriteIndex: 20, // cave boy
  timeoutFailureTick: null,
  timeoutAfterWhenRun: true,
  defaultEmotion: _constants.Emotions.HAPPY,
  goal: {
    successCondition: function successCondition() {
      return Studio.allWhenRunBlocksComplete() && Studio.sayComplete > 1;
    }
  },
  requiredBlocks: [
  // make sure each sprite says something
  saySpriteRequiredBlock({
    sprite: "0",
    requiredText: _locale2.default.hello()
  }), saySpriteRequiredBlock({
    sprite: "1",
    requiredText: _locale2.default.hello()
  })],
  map: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
});
levels.iceage_hello2 = (0, _utils.extend)(levels.playlab_2, {
  background: 'icy1',
  firstSpriteIndex: 0
});
levels.gumball_hello2 = (0, _utils.extend)(levels.playlab_2, {
  background: 'dots',
  firstSpriteIndex: 3,
  defaultEmotion: _constants.Emotions.NORMAL
});

// extended by: k1_3
// Can you write a program to make this dog move to the cat?
levels.dog_move_cat = {
  'ideal': 2,
  'requiredBlocks': [[{ 'test': 'moveDistance', 'type': 'studio_moveDistance', 'titles': { 'DIR': '2' } }]],
  'scale': {
    'snapRadius': 2
  },
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 16, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  goal: {
    successCondition: function successCondition() {
      return Studio.sprite[0].isCollidingWith(1);
    }
  },
  'timeoutFailureTick': 100,
  'toolbox': tb('<block type="studio_moveDistance"><title name="DIR">2</title></block>' + blockOfType('studio_saySprite')),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block>'
};
levels.k1_3 = (0, _utils.extend)(levels.dog_move_cat, {
  'isK1': true,
  'requiredBlocks': [[{
    test: function test(block) {
      return block.type === 'studio_moveEastDistance';
    },
    type: 'studio_moveEastDistance' }]],
  'toolbox': tb(moveDistanceNSEW + blockOfType('studio_saySprite'))
});
levels.c2_3 = (0, _utils.extend)(levels.dog_move_cat, {});
levels.c3_story_3 = (0, _utils.extend)(levels.dog_move_cat, {});

levels.playlab_3 = {
  ideal: 2,
  requiredBlocks: [[{
    test: 'moveDistance',
    type: 'studio_moveDistance',
    titles: { DIR: '2', DISTANCE: '200' }
  }]],
  timeoutFailureTick: null,
  timeoutAfterWhenRun: true,
  scale: {
    snapRadius: 2
  },
  background: 'tennis',
  firstSpriteIndex: 26, // tennis girl
  toolbox: tb('<block type="studio_moveDistance"><title name="DIR">1</title><title name="DISTANCE">200</title></block>' + '<block type="studio_moveDistance"><title name="DIR">2</title><title name="DISTANCE">200</title></block>' + '<block type="studio_moveDistance"><title name="DIR">4</title><title name="DISTANCE">200</title></block>' + '<block type="studio_moveDistance"><title name="DIR">8</title><title name="DISTANCE">200</title></block>'),
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"></block>',
  map: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
};
levels.iceage_move_to_flag = (0, _utils.extend)(levels.playlab_3, {
  background: 'icy3',
  firstSpriteIndex: 2
});
levels.gumball_move_to_flag = (0, _utils.extend)(levels.playlab_3, {
  background: 'clouds',
  firstSpriteIndex: 2
});

// Can you write a program that makes the dog move to the cat, and have the cat
// say "hello" when the dog reaches him?
levels.dog_move_cat_hello = {
  'ideal': 4,
  'requiredBlocks': [[{ 'test': 'moveDistance', 'type': 'studio_moveDistance', 'titles': { 'DIR': '2', 'DISTANCE': '100' } }], saySpriteRequiredBlock({
    sprite: "1",
    requiredText: _locale2.default.hello()
  })],
  'scale': {
    'snapRadius': 2
  },
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 16, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'goal': {
    successCondition: function successCondition() {
      return Studio.sayComplete > 0 && Studio.sprite[0].isCollidingWith(1);
    }
  },
  'timeoutFailureTick': 200,
  'toolbox': tb('<block type="studio_moveDistance"><title name="DIR">2</title></block>' + blockOfType('studio_saySprite')),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block> \
    <block type="studio_whenSpriteCollided" deletable="false" x="20" y="120"></block>'
};
levels.k1_4 = (0, _utils.extend)(levels.dog_move_cat_hello, {
  'isK1': true,
  'requiredBlocks': [[{
    test: function test(block) {
      return block.type === 'studio_moveEastDistance';
    },
    type: 'studio_moveEastDistance'
  }], [{
    test: function test(block) {
      // Make sure they have the right block, and have changed the default
      // text
      return block.type === 'studio_saySprite' && block.getTitleValue("SPRITE") === '1' && block.getTitleValue("TEXT") !== _locale2.default.defaultSayText();
    },
    type: 'studio_saySprite',
    titles: { 'TEXT': _locale2.default.hello(), 'SPRITE': '1' }
  }]],
  'toolbox': tb(moveDistanceNSEW + blockOfType('studio_saySprite')),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block> \
     <block type="studio_whenSpriteCollided" deletable="false" x="20" y="140"></block>'
});
levels.c2_4 = (0, _utils.extend)(levels.dog_move_cat_hello, {});
levels.c3_story_4 = (0, _utils.extend)(levels.dog_move_cat_hello, {});

levels.playlab_4 = {
  ideal: 4,
  scale: {
    snapRadius: 2
  },
  background: 'tennis',
  avatarList: ['tennisboy', 'tennisgirl'],
  defaultEmotion: _constants.Emotions.SAD,
  requiredBlocks: [[{
    test: 'moveDistance',
    type: 'studio_moveDistance',
    titles: { DIR: '4', DISTANCE: '200' }
  }], [{
    test: 'playSound',
    type: 'studio_playSound',
    titles: { SOUND: 'goal1' }
  }]],
  // timeout when we've hit 100 OR we had only when run commands and finished them
  timeoutFailureTick: 100,
  timeoutAfterWhenRun: true,
  goal: {
    successCondition: function successCondition() {
      return Studio.playSoundCount > 0 && Studio.sprite[0].isCollidingWith(1);
    }
  },
  toolbox: tb('<block type="studio_moveDistance"><title name="DIR">1</title><title name="DISTANCE">200</title></block>' + '<block type="studio_moveDistance"><title name="DIR">2</title><title name="DISTANCE">200</title></block>' + '<block type="studio_moveDistance"><title name="DIR">4</title><title name="DISTANCE">200</title></block>' + '<block type="studio_moveDistance"><title name="DIR">8</title><title name="DISTANCE">200</title></block>' + '<block type="studio_playSound"><title name="SOUND">goal1</title></block>'),
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"></block>' + '<block type="studio_whenSpriteCollided" deletable="false" x="20" y="120"></block>',
  map: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
};
levels.iceage_move_to_actor = (0, _utils.extend)(levels.playlab_4, {
  background: 'icy3',
  avatarList: ['diego', 'manny']
});
levels.gumball_move_to_actor = (0, _utils.extend)(levels.playlab_4, {
  background: 'space',
  avatarList: ['gumball', 'darwin'],
  defaultEmotion: _constants.Emotions.NORMAL
});

// Can you write a program to make the octopus say "hello" when it is clicked?
levels.click_hello = {
  'instructionsImportant': true,
  'ideal': 3,
  'requiredBlocks': [saySpriteRequiredBlock({
    requiredText: _locale2.default.hello()
  })],
  'scale': {
    'snapRadius': 2
  },
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'firstSpriteIndex': 4,
  'goal': {
    successCondition: function successCondition() {
      if (!this.successState.seenCmd) {
        this.successState.seenCmd = Studio.isCmdCurrentInQueue('saySprite', 'whenSpriteClicked-0');
      }
      return Studio.sayComplete > 0 && this.successState.seenCmd;
    }
  },
  'callouts': [{
    'id': 'playlab:click_hello:instructions',
    'element_id': '#prompt-table',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutInstructions()
      },
      'position': {
        'my': 'bottom left',
        'at': 'top right',
        'adjust': {
          'x': -40,
          'y': 0
        }
      }
    }
  }],
  'timeoutFailureTick': 300,
  'toolbox': tb('<block type="studio_moveDistance"><title name="DIR">2</title></block>' + blockOfType('studio_saySprite')),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block> \
    <block type="studio_whenSpriteClicked" deletable="false" x="20" y="120"></block>'
};
levels.c2_5 = (0, _utils.extend)(levels.click_hello, {});
levels.c3_game_1 = (0, _utils.extend)(levels.click_hello, {});
levels.playlab_5 = (0, _utils.extend)(levels.click_hello, {
  background: 'space',
  firstSpriteIndex: 23, // spacebot
  timeoutAfterWhenRun: true,
  defaultEmotion: _constants.Emotions.HAPPY,
  toolbox: tb(blockOfType('studio_saySprite')),
  startBlocks: '<block type="studio_whenSpriteClicked" deletable="false" x="20" y="20"></block>'
});
levels.iceage_click_hello = (0, _utils.extend)(levels.playlab_5, {
  background: 'icy4',
  firstSpriteIndex: 1
});

levels.octopus_happy = {
  'ideal': 2,
  'requiredBlocks': [[{ 'test': 'setSpriteEmotion', 'type': 'studio_setSpriteEmotion' }]],
  'scale': {
    'snapRadius': 2
  },
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'firstSpriteIndex': 4,
  'goal': {
    successCondition: function successCondition() {
      return Studio.sprite[0].emotion === _constants.Emotions.HAPPY && Studio.tickCount >= 50;
    }
  },
  'timeoutFailureTick': 100,
  'toolbox': tb('<block type="studio_moveDistance"><title name="DIR">2</title></block>' + blockOfType('studio_setSpriteEmotion')),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block>'
};
levels.k1_5 = (0, _utils.extend)(levels.octopus_happy, {
  'isK1': true,
  'toolbox': tb(moveDistanceNSEW + blockOfType('studio_setSpriteEmotion'))
});
levels.c3_story_5 = (0, _utils.extend)(levels.octopus_happy, {});

// Create your own story. When you're done, click Finish to let friends try your
// story on their phones.
levels.c3_story_6 = {
  'ideal': Infinity,
  'requiredBlocks': [],
  'scale': {
    'snapRadius': 2
  },
  'minWorkspaceHeight': 1400,
  'edgeCollisions': true,
  'projectileCollisions': true,
  'allowSpritesOutsidePlayspace': false,
  'spritesHiddenToStart': true,
  'freePlay': true,
  'map': [[0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'toolbox': tb(blockOfType('studio_setSprite') + blockOfType('studio_setBackground') + blockOfType('studio_whenSpriteClicked') + blockOfType('studio_whenSpriteCollided') + blockOfType('studio_repeatForever') + blockOfType('studio_showTitleScreen') + blockOfType('studio_move') + blockOfType('studio_moveDistance') + blockOfType('studio_stop') + blockOfType('studio_wait') + blockOfType('studio_playSound') + blockOfType('studio_saySprite') + blockOfType('studio_throw') + blockOfType('studio_setSpritePosition') + blockOfType('studio_setSpriteSpeed') + blockOfType('studio_setSpriteEmotion')),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block>'
};

// Can you write a program to make this penguin move around using the up / down /
// left /right keys to hit all of the targets?
levels.move_penguin = {
  'ideal': 8,
  'requiredBlocks': [[{ 'test': 'move', 'type': 'studio_move' }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 16, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'firstSpriteIndex': 2,
  'toolbox': tb(blockOfType('studio_move') + blockOfType('studio_saySprite')),
  'startBlocks': '<block type="studio_whenLeft" deletable="false" x="20" y="20"></block> \
    <block type="studio_whenRight" deletable="false" x="180" y="20"></block> \
    <block type="studio_whenUp" deletable="false" x="20" y="120"></block> \
    <block type="studio_whenDown" deletable="false" x="180" y="120"></block>'
};
levels.c2_6 = (0, _utils.extend)(levels.move_penguin, {});
levels.c3_game_2 = (0, _utils.extend)(levels.move_penguin, {});
levels.playlab_6 = (0, _utils.extend)(levels.move_penguin, {
  background: 'cave',
  firstSpriteIndex: 5, // witch
  goalOverride: {
    goalImage: 'red_fireball',
    successImage: 'blue_fireball',
    imageWidth: 800
  },
  defaultEmotion: _constants.Emotions.ANGRY,
  toolbox: tb(blockOfType('studio_move', { DIR: 8 }) + blockOfType('studio_move', { DIR: 2 }) + blockOfType('studio_move', { DIR: 1 }) + blockOfType('studio_move', { DIR: 4 })),
  map: [[1, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
});
levels.iceage_move_events = (0, _utils.extend)(levels.playlab_6, {
  background: 'icy5',
  firstSpriteIndex: 2,
  goalOverride: {} // This prevents the override from original playlab from being used
});

levels.gumball_click_hello = (0, _utils.extend)(levels.playlab_5, {
  background: 'characters',
  firstSpriteIndex: 1 });

levels.gumball_move_events = (0, _utils.extend)(levels.playlab_6, {
  background: 'cornered',
  firstSpriteIndex: 3, // diego
  goalOverride: {}, // This prevents the override from original playlab from being used
  defaultEmotion: _constants.Emotions.NORMAL
});

// The "repeat forever" block allows you to run code continuously. Can you
// attach blocks to move this dinosaur up and down repeatedly?
levels.dino_up_and_down = {
  'ideal': 11,
  'requiredBlocks': [[{ 'test': 'moveDistance',
    'type': 'studio_moveDistance',
    'titles': { 'SPRITE': '1', 'DISTANCE': '400' } }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'map': [[0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 0, 16, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'firstSpriteIndex': 2,
  'protagonistSpriteIndex': 1,
  'timeoutFailureTick': 150,
  'minWorkspaceHeight': 800,
  'toolbox': tb('<block type="studio_moveDistance"> \
         <title name="DISTANCE">400</title> \
         <title name="SPRITE">1</title></block>' + '<block type="studio_saySprite"> \
         <title name="SPRITE">1</title></block>'),
  'startBlocks': '<block type="studio_whenLeft" deletable="false" x="20" y="20"> \
      <next><block type="studio_move"> \
              <title name="DIR">8</title></block> \
      </next></block> \
    <block type="studio_whenRight" deletable="false" x="20" y="150"> \
      <next><block type="studio_move"> \
              <title name="DIR">2</title></block> \
      </next></block> \
    <block type="studio_whenUp" deletable="false" x="20" y="280"> \
      <next><block type="studio_move"> \
              <title name="DIR">1</title></block> \
      </next></block> \
    <block type="studio_whenDown" deletable="false" x="20" y="410"> \
      <next><block type="studio_move"> \
              <title name="DIR">4</title></block> \
      </next></block> \
    <block type="studio_repeatForever" deletable="false" x="20" y="540"></block>'
};
levels.c2_7 = (0, _utils.extend)(levels.dino_up_and_down, {});
levels.c3_game_3 = (0, _utils.extend)(levels.dino_up_and_down, {});

levels.playlab_7 = {
  ideal: 3,
  background: 'rainbow',
  firstSpriteIndex: 10, // wizard
  scale: {
    snapRadius: 2
  },
  softButtons: ['leftButton', 'rightButton', 'downButton', 'upButton'],
  defaultEmotion: _constants.Emotions.HAPPY,
  map: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  goal: {
    successCondition: function successCondition() {
      // successful after a given period of time as long as we've used all
      // required blocks. this number has us go back and forth twice, and end
      // facing forward
      return Studio.tickCount === 252;
    }
  },
  timeoutFailureTick: 253,
  minWorkspaceHeight: 800,
  toolbox: tb('<block type="studio_moveDistance"><title name="DIR">1</title><title name="DISTANCE">400</title></block>' + '<block type="studio_moveDistance"><title name="DIR">2</title><title name="DISTANCE">400</title></block>' + '<block type="studio_moveDistance"><title name="DIR">4</title><title name="DISTANCE">400</title></block>' + '<block type="studio_moveDistance"><title name="DIR">8</title><title name="DISTANCE">400</title></block>'),
  startBlocks: '<block type="studio_repeatForever" deletable="false" x="20" y="20"></block>',
  requiredBlocks: [[{
    test: function test(b) {
      return b.type === 'studio_moveDistance' && b.getTitleValue('DIR') === '2';
    },
    type: 'studio_moveDistance',
    titles: { DIR: 2, DISTANCE: '400' }
  }], [{
    test: function test(b) {
      return b.type === 'studio_moveDistance' && b.getTitleValue('DIR') === '8';
    },
    type: 'studio_moveDistance',
    titles: { DIR: 8, DISTANCE: '400' }
  }]]
};
levels.iceage_repeat = (0, _utils.extend)(levels.playlab_7, {
  background: 'icy1',
  firstSpriteIndex: 4,
  map: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
});
levels.gumball_repeat = (0, _utils.extend)(levels.playlab_7, {
  background: 'dots',
  firstSpriteIndex: 4,
  defaultEmotion: _constants.Emotions.NORMAL,
  map: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
});

// Can you have the penguin say "Ouch!" and play a "hit" sound if he runs into
// the dinosaur, and then move him with the arrows to make that happen?
levels.penguin_ouch = {
  'ideal': 14,
  'requiredBlocks': [saySpriteRequiredBlock({
    sprite: "0",
    requiredText: _locale2.default.ouchExclamation()
  }), [{ 'test': 'playSound', 'type': 'studio_playSound' }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 0, 16, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'firstSpriteIndex': 2,
  'minWorkspaceHeight': 900,
  'goal': {
    successCondition: function successCondition() {
      return Studio.sprite[0].isCollidingWith(1);
    }
  },
  'timeoutFailureTick': 300,
  'toolbox': tb('<block type="studio_moveDistance"> \
         <title name="DISTANCE">400</title> \
         <title name="SPRITE">1</title></block>' + blockOfType('studio_saySprite') + blockOfType('studio_playSound')),
  'startBlocks': '<block type="studio_whenLeft" deletable="false" x="20" y="20"> \
      <next><block type="studio_move"> \
              <title name="DIR">8</title></block> \
      </next></block> \
    <block type="studio_whenRight" deletable="false" x="20" y="150"> \
      <next><block type="studio_move"> \
              <title name="DIR">2</title></block> \
      </next></block> \
    <block type="studio_whenUp" deletable="false" x="20" y="280"> \
      <next><block type="studio_move"> \
              <title name="DIR">1</title></block> \
      </next></block> \
    <block type="studio_whenDown" deletable="false" x="20" y="410"> \
      <next><block type="studio_move"> \
              <title name="DIR">4</title></block> \
      </next></block> \
    <block type="studio_repeatForever" deletable="false" x="20" y="540"> \
      <statement name="DO"><block type="studio_moveDistance"> \
              <title name="SPRITE">1</title> \
              <title name="DISTANCE">400</title> \
        <next><block type="studio_moveDistance"> \
                <title name="SPRITE">1</title> \
                <title name="DISTANCE">400</title> \
                <title name="DIR">4</title></block> \
        </next></block> \
    </statement></block> \
    <block type="studio_whenSpriteCollided" deletable="false" x="20" y="730"></block>'
};
levels.c2_8 = (0, _utils.extend)(levels.penguin_ouch, {});
levels.c3_game_4 = (0, _utils.extend)(levels.penguin_ouch, {});

// Can you add a block to score a point when the penguin runs into the octopus,
// and then move him with the arrows until you score?
levels.penguin_touch_octopus = {
  'ideal': 16,
  'requiredBlocks': [[{ 'test': 'changeScore', 'type': 'studio_changeScore' }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 0, 16, 0, 16, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'firstSpriteIndex': 2,
  'minWorkspaceHeight': 1050,
  'goal': {
    successCondition: function successCondition() {
      return Studio.sprite[0].isCollidingWith(2);
    }
  },
  'timeoutFailureTick': 600,
  'toolbox': tb('<block type="studio_moveDistance"> \
         <title name="DISTANCE">400</title> \
         <title name="SPRITE">1</title></block>' + blockOfType('studio_saySprite') + blockOfType('studio_playSound') + blockOfType('studio_changeScore')),
  'startBlocks': '<block type="studio_whenLeft" deletable="false" x="20" y="20"> \
      <next><block type="studio_move"> \
              <title name="DIR">8</title></block> \
      </next></block> \
    <block type="studio_whenRight" deletable="false" x="20" y="150"> \
      <next><block type="studio_move"> \
              <title name="DIR">2</title></block> \
      </next></block> \
    <block type="studio_whenUp" deletable="false" x="20" y="280"> \
      <next><block type="studio_move"> \
              <title name="DIR">1</title></block> \
      </next></block> \
    <block type="studio_whenDown" deletable="false" x="20" y="410"> \
      <next><block type="studio_move"> \
              <title name="DIR">4</title></block> \
      </next></block> \
    <block type="studio_repeatForever" deletable="false" x="20" y="540"> \
      <statement name="DO"><block type="studio_moveDistance"> \
              <title name="SPRITE">1</title> \
              <title name="DISTANCE">400</title> \
        <next><block type="studio_moveDistance"> \
                <title name="SPRITE">1</title> \
                <title name="DISTANCE">400</title> \
                <title name="DIR">4</title></block> \
        </next></block> \
    </statement></block> \
    <block type="studio_whenSpriteCollided" deletable="false" x="20" y="730"> \
      <next><block type="studio_playSound"> \
      <next><block type="studio_saySprite"> \
              <title name="TEXT">Ouch!</title></block> \
      </next></block> \
      </next></block> \
    <block type="studio_whenSpriteCollided" deletable="false" x="20" y="860"> \
     <title name="SPRITE2">2</title></block>'
};
levels.c2_9 = (0, _utils.extend)(levels.penguin_touch_octopus, {});
levels.c3_game_5 = (0, _utils.extend)(levels.penguin_touch_octopus, {});

levels.playlab_8 = {
  background: 'rainbow',
  ideal: 16,
  requiredBlocks: [[{ test: 'changeScore', type: 'studio_changeScore' }], [{ test: 'playSound', type: 'studio_playSound', titles: { SOUND: 'winpoint' } }]],
  scale: {
    snapRadius: 2
  },
  softButtons: ['leftButton', 'rightButton', 'downButton', 'upButton'],
  map: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  avatarList: ['unicorn', 'wizard'],
  defaultEmotion: _constants.Emotions.HAPPY,
  goal: {
    successCondition: function successCondition() {
      return Studio.sprite[0].isCollidingWith(1) && Studio.playerScore === 1;
    },
    failureCondition: function failureCondition() {
      return Studio.sprite[0].isCollidingWith(1) && Studio.playerScore !== 1;
    }
  },
  timeoutFailureTick: 600,
  toolbox: tb(blockOfType('studio_changeScore') + '<block type="studio_playSound"><title name="SOUND">winpoint</title></block>'),
  startBlocks: '<block type="studio_whenSpriteCollided" deletable="false" x="20" y="20"></block>' + '<block type="studio_repeatForever" deletable="false" x="20" y="150">' + '<statement name="DO">' + _block_utils2.default.blockWithNext('studio_moveDistance', { SPRITE: 1, DIR: 2, DISTANCE: 400 }, blockOfType('studio_moveDistance', { SPRITE: 1, DIR: 8, DISTANCE: 400 })) + '</statement>' + '</block>' + '<block type="studio_whenLeft" deletable="false" x="20" y="300"><next>' + blockOfType('studio_move', { SPRITE: 0, DIR: 8 }) + '</next></block>' + '<block type="studio_whenRight" deletable="false" x="20" y="400"><next>' + blockOfType('studio_move', { SPRITE: 0, DIR: 2 }) + '</next></block>' + '<block type="studio_whenUp" deletable="false" x="20" y="500"><next>' + blockOfType('studio_move', { SPRITE: 0, DIR: 1 }) + '</next></block>' + '<block type="studio_whenDown" deletable="false" x="20" y="600"><next>' + blockOfType('studio_move', { SPRITE: 0, DIR: 4 }) + '</next></block>'

};
levels.iceage_sound_and_points = (0, _utils.extend)(levels.playlab_8, {
  background: 'icy2',
  avatarList: ['sid', 'granny']
});
levels.gumball_sound_and_points = (0, _utils.extend)(levels.playlab_8, {
  background: 'wood',
  avatarList: ['bananajoe', 'anton'],
  'delayCompletion': 500,
  defaultEmotion: _constants.Emotions.NORMAL
});

// Can you add blocks to change the background and the speed of the penguin, and
// then move him with the arrows until you score?
levels.change_background_and_speed = {
  'ideal': 19,
  'requiredBlocks': [[{ 'test': 'setBackground',
    'type': 'studio_setBackground',
    'titles': { 'VALUE': '"night"' } }], [{ 'test': 'setSpriteSpeed',
    'type': 'studio_setSpriteSpeed',
    'titles': { 'VALUE': 'Studio.SpriteSpeed.FAST' } }]],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 0, 16, 0, 16, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'firstSpriteIndex': 2,
  'minWorkspaceHeight': 1250,
  'goal': {
    successCondition: function successCondition() {
      return Studio.sprite[0].isCollidingWith(2);
    }
  },
  'timeoutFailureTick': 600,
  'toolbox': tb(blockOfType('studio_setBackground', { VALUE: '"night"' }) + blockOfType('studio_moveDistance', { DISTANCE: 400, SPRITE: 1 }) + blockOfType('studio_saySprite') + blockOfType('studio_playSound') + blockOfType('studio_changeScore') + blockOfType('studio_setSpriteSpeed', { VALUE: 'Studio.SpriteSpeed.FAST' })),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block>' + '<block type="studio_whenLeft" deletable="false" x="20" y="200">' + '<next>' + blockOfType('studio_move', { DIR: 8 }) + '</next>' + '</block>' + '<block type="studio_whenRight" deletable="false" x="20" y="330">' + '<next>' + blockOfType('studio_move', { DIR: 2 }) + '</next>' + '</block>' + '<block type="studio_whenUp" deletable="false" x="20" y="460">' + '<next>' + blockOfType('studio_move', { DIR: 1 }) + '</next>' + '</block>' + '<block type="studio_whenDown" deletable="false" x="20" y="590">' + '<next>' + blockOfType('studio_move', { DIR: 4 }) + '</next>' + '</block>' + '<block type="studio_repeatForever" deletable="false" x="20" y="720">' + '<statement name="DO">' + _block_utils2.default.blockWithNext('studio_moveDistance', { SPRITE: 1, DIR: 1, DISTANCE: 400 }, blockOfType('studio_moveDistance', { SPRITE: 1, DIR: 4, DISTANCE: 400 })) + '</statement>' + '</block>' + '<block type="studio_whenSpriteCollided" deletable="false" x="20" y="880">' + '<title name="SPRITE2">1</title>' + '<next>' + _block_utils2.default.blockWithNext('studio_playSound', {}, blockOfType('studio_saySprite', { TEXT: _locale2.default.ouchExclamation() })) + '</next>' + '</block>' + '<block type="studio_whenSpriteCollided" deletable="false" x="20" y="1040">' + '<title name="SPRITE2">2</title>' + '<next>' + blockOfType('studio_changeScore') + '</next>' + '</block>'
};
levels.c2_10 = (0, _utils.extend)(levels.change_background_and_speed, {});
levels.c3_game_6 = (0, _utils.extend)(levels.change_background_and_speed, {});

levels.playlab_9 = {
  background: 'black',
  requiredBlocks: [[{ test: 'setBackground',
    type: 'studio_setBackground',
    titles: { VALUE: '"space"' } }], [{ test: 'setSpriteSpeed',
    type: 'studio_setSpriteSpeed',
    titles: { VALUE: 'Studio.SpriteSpeed.FAST' } }]],
  timeoutFailureTick: 400,
  scale: {
    snapRadius: 2
  },
  defaultEmotion: _constants.Emotions.ANGRY,
  softButtons: ['leftButton', 'rightButton', 'downButton', 'upButton'],
  avatarList: ['spacebot', 'alien'],
  goal: {
    successCondition: function successCondition() {
      return Studio.sprite[0].isCollidingWith(1);
    }
  },
  map: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 0, 0, 0, 16, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  toolbox: tb(blockOfType('studio_setSpriteSpeed', { VALUE: 'Studio.SpriteSpeed.FAST' }) + blockOfType('studio_setBackground', { VALUE: '"space"' }) + blockOfType('studio_moveDistance', { DISTANCE: 400, SPRITE: 1 }) + blockOfType('studio_saySprite') + blockOfType('studio_playSound', { SOUND: 'winpoint2' }) + blockOfType('studio_changeScore')),
  minWorkspaceHeight: 1250,
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"></block>' + '<block type="studio_repeatForever" deletable="false" x="20" y="150">' + '<statement name="DO">' + _block_utils2.default.blockWithNext('studio_moveDistance', { SPRITE: 1, DIR: 1, DISTANCE: 400 }, blockOfType('studio_moveDistance', { SPRITE: 1, DIR: 4, DISTANCE: 400 })) + '</statement>' + '</block>' + '<block type="studio_whenSpriteCollided" deletable="false" x="20" y="290">' + '<title name="SPRITE2">0</title>' + '<title name="SPRITE2">1</title>' + '<next>' + _block_utils2.default.blockWithNext('studio_playSound', { SOUND: 'winpoint2' }, blockOfType('studio_saySprite', { TEXT: _locale2.default.alienInvasion() })) + '</next>' + '</block>' + '<block type="studio_whenLeft" deletable="false" x="20" y="410">' + '<next>' + blockOfType('studio_move', { DIR: 8 }) + '</next>' + '</block>' + '<block type="studio_whenRight" deletable="false" x="20" y="510">' + '<next>' + blockOfType('studio_move', { DIR: 2 }) + '</next>' + '</block>' + '<block type="studio_whenUp" deletable="false" x="20" y="610">' + '<next>' + blockOfType('studio_move', { DIR: 1 }) + '</next>' + '</block>' + '<block type="studio_whenDown" deletable="false" x="20" y="710">' + '<next>' + blockOfType('studio_move', { DIR: 4 }) + '</next>' + '</block>'
};

levels.iceage_warn_ice_age = (0, _utils.extend)(levels.playlab_9, {
  background: 'ground',
  toolbox: tb(blockOfType('studio_setSpriteSpeed', { VALUE: 'Studio.SpriteSpeed.FAST' }) + blockOfType('studio_setBackground', { VALUE: '"icy5"' }) + blockOfType('studio_moveDistance', { DISTANCE: 400, SPRITE: 1 }) + blockOfType('studio_saySprite') + blockOfType('studio_playSound', { SOUND: 'winpoint2' }) + blockOfType('studio_changeScore')),
  requiredBlocks: [[{ test: 'setBackground',
    type: 'studio_setBackground',
    titles: { VALUE: '"grassy"' } }], [{ test: 'setSpriteSpeed',
    type: 'studio_setSpriteSpeed',
    titles: { VALUE: 'Studio.SpriteSpeed.FAST' } }]],
  avatarList: ['sid', 'diego'],
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"></block>' + '<block type="studio_repeatForever" deletable="false" x="20" y="150">' + '<statement name="DO">' + _block_utils2.default.blockWithNext('studio_moveDistance', { SPRITE: 1, DIR: 1, DISTANCE: 400 }, blockOfType('studio_moveDistance', { SPRITE: 1, DIR: 4, DISTANCE: 400 })) + '</statement>' + '</block>' + '<block type="studio_whenSpriteCollided" deletable="false" x="20" y="290">' + '<title name="SPRITE2">0</title>' + '<title name="SPRITE2">1</title>' + '<next>' + _block_utils2.default.blockWithNext('studio_playSound', { SOUND: 'winpoint2' }, blockOfType('studio_saySprite', { TEXT: _locale2.default.iceAge() })) + '</next>' + '</block>' + '<block type="studio_whenLeft" deletable="false" x="20" y="410">' + '<next>' + blockOfType('studio_move', { DIR: 8 }) + '</next>' + '</block>' + '<block type="studio_whenRight" deletable="false" x="20" y="510">' + '<next>' + blockOfType('studio_move', { DIR: 2 }) + '</next>' + '</block>' + '<block type="studio_whenUp" deletable="false" x="20" y="610">' + '<next>' + blockOfType('studio_move', { DIR: 1 }) + '</next>' + '</block>' + '<block type="studio_whenDown" deletable="false" x="20" y="710">' + '<next>' + blockOfType('studio_move', { DIR: 4 }) + '</next>' + '</block>'
});

levels.gumball_warn_food_fight = (0, _utils.extend)(levels.playlab_9, {
  background: 'dots',
  'delayCompletion': 500,
  defaultEmotion: _constants.Emotions.NORMAL,
  toolbox: tb(blockOfType('studio_setSpriteSpeed', { VALUE: 'Studio.SpriteSpeed.FAST' }) + blockOfType('studio_setBackground', { VALUE: '"characters"' }) + blockOfType('studio_moveDistance', { DISTANCE: 400, SPRITE: 1 }) + blockOfType('studio_saySprite') + blockOfType('studio_playSound', { SOUND: 'winpoint2' }) + blockOfType('studio_changeScore')),
  requiredBlocks: [[{ test: 'setBackground',
    type: 'studio_setBackground',
    titles: { VALUE: '"characters"' } }], [{ test: 'setSpriteSpeed',
    type: 'studio_setSpriteSpeed',
    titles: { VALUE: 'Studio.SpriteSpeed.FAST' } }]],
  avatarList: ['darwin', 'penny'],
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"></block>' + '<block type="studio_repeatForever" deletable="false" x="20" y="150">' + '<statement name="DO">' + _block_utils2.default.blockWithNext('studio_moveDistance', { SPRITE: 1, DIR: 1, DISTANCE: 400 }, blockOfType('studio_moveDistance', { SPRITE: 1, DIR: 4, DISTANCE: 400 })) + '</statement>' + '</block>' + '<block type="studio_whenSpriteCollided" deletable="false" x="20" y="290">' + '<title name="SPRITE2">0</title>' + '<title name="SPRITE2">1</title>' + '<next>' + _block_utils2.default.blockWithNext('studio_playSound', { SOUND: 'winpoint2' }, blockOfType('studio_saySprite', { TEXT: _locale2.default.foodFight() })) + '</next>' + '</block>' + '<block type="studio_whenLeft" deletable="false" x="20" y="410">' + '<next>' + blockOfType('studio_move', { DIR: 8 }) + '</next>' + '</block>' + '<block type="studio_whenRight" deletable="false" x="20" y="510">' + '<next>' + blockOfType('studio_move', { DIR: 2 }) + '</next>' + '</block>' + '<block type="studio_whenUp" deletable="false" x="20" y="610">' + '<next>' + blockOfType('studio_move', { DIR: 1 }) + '</next>' + '</block>' + '<block type="studio_whenDown" deletable="false" x="20" y="710">' + '<next>' + blockOfType('studio_move', { DIR: 4 }) + '</next>' + '</block>'
});

levels.gumball_join_food_fight = {
  background: 'wood',
  'delayCompletion': 2000,
  requiredBlocks: [[{ test: 'setSpriteEmotion',
    type: 'studio_setSpriteEmotion' }], [{ test: 'throw',
    type: 'studio_throw' }]],
  timeoutFailureTick: 300,
  scale: {
    snapRadius: 2
  },
  defaultEmotion: _constants.Emotions.NORMAL,
  avatarList: ['bananajoe', 'anton'],
  map: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [16, 0, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  toolbox: tb(blockOfType('studio_whenSpriteCollided', { SPRITE1: 1, SPRITE2: 'anything' }) + blockOfType('studio_setSpriteEmotion', { SPRITE: 1 }) + blockOfType('studio_throw', { SPRITE: 0, DIR: 2 }) + blockOfType('studio_playSound') + blockOfType('studio_saySprite')),
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"></block>',
  'progressConditions': [{ required: { 'setEmotion': true, 'throwProjectile': true },
    result: { success: true } }, { required: { 'timedOut': true }, result: { success: false } }]
};

levels.iceage_throw_hearts = (0, _utils.extend)(levels.gumball_join_food_fight, {
  background: 'icy3',
  avatarList: ['sid', 'granny']
});

// Create your own game. When you're done, click Finish to let friends try your story on their phones.
levels.sandbox = {
  'ideal': Infinity,
  'requiredBlocks': [],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'minWorkspaceHeight': 1400,
  'edgeCollisions': true,
  'projectileCollisions': true,
  'allowSpritesOutsidePlayspace': false,
  'spritesHiddenToStart': true,
  'freePlay': true,
  'map': [[0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'toolbox': tb(blockOfType('studio_setSprite') + blockOfType('studio_setBackground') + blockOfType('studio_whenArrow') + blockOfType('studio_whenSpriteClicked') + blockOfType('studio_whenSpriteCollided') + blockOfType('studio_repeatForever') + blockOfType('studio_showTitleScreen') + blockOfType('studio_move') + blockOfType('studio_moveDistance') + blockOfType('studio_stop') + blockOfType('studio_wait') + blockOfType('studio_playSound') + blockOfType('studio_changeScore') + blockOfType('studio_saySprite') + blockOfType('studio_setSpritePosition') + blockOfType('studio_throw') + blockOfType('studio_makeProjectile') + blockOfType('studio_setSpriteSpeed') + blockOfType('studio_setSpriteEmotion') + blockOfType('studio_vanish')),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block>'
};
levels.c2_11 = (0, _utils.extend)(levels.sandbox, {});
levels.c3_game_7 = (0, _utils.extend)(levels.sandbox, {});
levels.playlab_10 = (0, _utils.extend)(levels.sandbox, {
  appStringsFunctions: {
    continueText: _locale2.default.playlab_lastLevel_continueText
  }
});
levels.iceage_free_play = (0, _utils.extend)(levels.playlab_10, {
  appStringsFunctions: {
    continueText: _locale2.default.playlab_lastLevel_continueText
  }
});
levels.gumball_free_play = (0, _utils.extend)(levels.playlab_10, {
  appStringsFunctions: {
    continueText: _locale2.default.playlab_lastLevel_continueText
  }
});

// Create your own story! Move around the cat and dog, and make them say things.
levels.k1_6 = {
  'ideal': Infinity,
  'requiredBlocks': [],
  'scale': {
    'snapRadius': 2
  },
  'minWorkspaceHeight': 1500,
  'spritesHiddenToStart': true,
  'freePlay': true,
  'map': [[16, 0, 16, 0, 16, 0, 16, 0], [0, 16, 0, 16, 0, 16, 0, 0], [16, 0, 16, 0, 16, 0, 16, 0], [0, 16, 0, 16, 0, 16, 0, 0], [16, 0, 16, 0, 16, 0, 16, 0], [0, 16, 0, 16, 0, 16, 0, 0], [16, 16, 16, 16, 16, 16, 16, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'isK1': true,
  softButtons: [],
  'toolbox': tb(blockOfType('studio_setSprite') + blockOfType('studio_saySprite') + moveDistanceNSEW + blockOfType('studio_whenSpriteCollided') + blockOfType('studio_setBackground') + blockOfType('studio_setSpriteSpeed') + blockOfType('studio_setSpriteEmotion') + blockOfType('studio_playSound') + blockOfType('studio_vanish')),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20">\
      <next><block type="studio_setSprite"> \
        <title name="SPRITE">0</title></block> \
      </next></block>'
};

levels.k1_block_test = (0, _utils.extend)(levels['99'], {
  'toolbox': tb(blockOfType('studio_setSprite') + blockOfType('studio_moveNorth') + blockOfType('studio_moveSouth') + blockOfType('studio_moveEast') + blockOfType('studio_moveWest') + blockOfType('studio_moveNorth_length') + blockOfType('studio_moveSouth_length') + blockOfType('studio_moveEast_length') + blockOfType('studio_moveWest_length')),
  'isK1': true
});

// you can get here via http://learn.code.org/2014/11, which is semi-hidden
levels.full_sandbox = {
  'scrollbars': true,
  'requiredBlocks': [],
  'scale': {
    'snapRadius': 2
  },
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'minWorkspaceHeight': 1400,
  'edgeCollisions': true,
  'projectileCollisions': true,
  'allowSpritesOutsidePlayspace': true,
  'spritesHiddenToStart': true,
  'freePlay': true,
  'map': [[0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'toolbox': tb(createCategory(_locale2.default.catActions(), blockOfType('studio_setSprite') + blockOfType('studio_setBackground') + '<block type="studio_showTitleScreenParams"> \
                        <value name="TITLE"><block type="text"></block> \
                        </value> \
                        <value name="TEXT"><block type="text"></block> \
                        </value></block>' + blockOfType('studio_move') + '<block type="studio_moveDistanceParams" inline="true"> \
                      <value name="DISTANCE"><block type="math_number"> \
                              <title name="NUM">25</title></block> \
                      </value></block>' + blockOfType('studio_stop') + '<block type="studio_waitParams" inline="true"> \
                        <value name="VALUE"><block type="math_number"> \
                                <title name="NUM">1</title></block> \
                        </value></block>' + blockOfType('studio_playSound') + '<block type="studio_setScoreText" inline="true"> \
                        <value name="TEXT"><block type="text"></block> \
                        </value></block>' + '<block type="studio_saySpriteParams" inline="true"> \
                        <value name="TEXT"><block type="text"></block> \
                        </value></block>' + blockOfType('studio_setSpritePosition') + blockOfType('studio_addCharacter') + blockOfType('studio_throw') + blockOfType('studio_makeProjectile') + blockOfType('studio_setSpriteSpeed') + blockOfType('studio_setSpriteEmotion') + blockOfType('studio_vanish') + blockOfType('studio_setSpriteSize') + blockOfType('studio_showCoordinates')) + createCategory(_locale2.default.catEvents(), blockOfType('studio_whenArrow') + blockOfType('studio_whenSpriteClicked') + blockOfType('studio_whenSpriteCollided')) + createCategory(_locale2.default.catControl(), blockOfType('studio_repeatForever') + '<block type="controls_repeat_ext"> \
                          <value name="TIMES"> \
                            <block type="math_number"> \
                              <title name="NUM">10</title> \
                            </block> \
                          </value> \
                        </block>' + blockOfType('controls_whileUntil') + '<block type="controls_for"> \
                          <value name="FROM"> \
                            <block type="math_number"> \
                              <title name="NUM">1</title> \
                            </block> \
                          </value> \
                          <value name="TO"> \
                            <block type="math_number"> \
                              <title name="NUM">10</title> \
                            </block> \
                          </value> \
                          <value name="BY"> \
                            <block type="math_number"> \
                              <title name="NUM">1</title> \
                            </block> \
                          </value> \
                        </block>' + blockOfType('controls_flow_statements')) + createCategory(_locale2.default.catLogic(), blockOfType('controls_if') + blockOfType('logic_compare') + blockOfType('logic_operation') + blockOfType('logic_negate') + blockOfType('logic_boolean')) + createCategory(_locale2.default.catMath(), blockOfType('math_number') + '<block type="math_change"> \
                          <value name="DELTA"> \
                            <block type="math_number"> \
                              <title name="NUM">1</title> \
                            </block> \
                          </value> \
                        </block>' + '<block type="math_random_int"> \
                          <value name="FROM"> \
                            <block type="math_number"> \
                              <title name="NUM">1</title> \
                            </block> \
                          </value> \
                          <value name="TO"> \
                            <block type="math_number"> \
                              <title name="NUM">100</title> \
                            </block> \
                          </value> \
                        </block>' + blockOfType('math_arithmetic')) + createCategory(_locale2.default.catText(), blockOfType('text') + blockOfType('text_join') + '<block type="text_append"> \
                          <value name="TEXT"> \
                            <block type="text"></block> \
                          </value> \
                        </block>') + createCategory(_locale2.default.catVariables(), '', 'VARIABLE') + createCategory(_locale2.default.catProcedures(), '', 'PROCEDURE') + createCategory('Functional', blockOfType('functional_string') + blockOfType('functional_background_string_picker') + blockOfType('functional_math_number') + '<block type="functional_math_number_dropdown">' + '<title name="NUM" config="2,3,4,5,6,7,8,9,10,11,12">???</title>' + '</block>') + createCategory('Functional Start', blockOfType('functional_start_setSpeeds') + blockOfType('functional_start_setBackgroundAndSpeeds')) + createCategory('Functional Logic', blockOfType('functional_greater_than') + blockOfType('functional_less_than') + blockOfType('functional_number_equals') + blockOfType('functional_string_equals') + blockOfType('functional_logical_and') + blockOfType('functional_logical_or') + blockOfType('functional_logical_not') + blockOfType('functional_boolean'))),
  'startBlocks': '<block type="when_run" deletable="false" x="20" y="20"></block>'
};

levels.full_sandbox_infinity = (0, _utils.extend)(levels.full_sandbox, {});

levels.ec_sandbox = (0, _utils.extend)(levels.sandbox, {
  'editCode': true,
  'map': [[0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 16, 0, 0, 0, 16, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'codeFunctions': {
    // Play Lab
    "setSprite": { 'category': 'Play Lab', noAutocomplete: false },
    "setBackground": { 'category': 'Play Lab' },
    "move": { 'category': 'Play Lab', noAutocomplete: false },
    "playSound": { 'category': 'Play Lab' },
    "changeScore": { 'category': 'Play Lab', noAutocomplete: false },
    "setSpritePosition": { 'category': 'Play Lab', noAutocomplete: false },
    "setSpriteSpeed": { 'category': 'Play Lab', noAutocomplete: false },
    "setSpriteEmotion": { 'category': 'Play Lab', noAutocomplete: false },
    "setSpriteSize": { 'category': 'Play Lab', noAutocomplete: false },
    "throwProjectile": { 'category': 'Play Lab', noAutocomplete: false },
    "vanish": { 'category': 'Play Lab', noAutocomplete: false },
    "onEvent": { 'category': 'Play Lab', noAutocomplete: false },

    // Control
    "forLoop_i_0_4": null,
    "ifBlock": null,
    "ifElseBlock": null,
    "whileBlock": null,

    // Math
    "addOperator": null,
    "subtractOperator": null,
    "multiplyOperator": null,
    "divideOperator": null,
    "equalityOperator": null,
    "inequalityOperator": null,
    "greaterThanOperator": null,
    "lessThanOperator": null,
    "andOperator": null,
    "orOperator": null,
    "notOperator": null,
    "randomNumber_max": null,
    "randomNumber_min_max": null,
    "mathRound": null,
    "mathAbs": null,
    "mathMax": null,
    "mathMin": null,

    // Variables
    "declareAssign_x": null,
    "assign_x": null,
    "declareAssign_x_array_1_4": null,
    "declareAssign_x_prompt": null,

    // Functions
    "functionParams_none": null,
    "functionParams_n": null,
    "callMyFunction": null,
    "callMyFunction_n": null
  },
  'startBlocks': ""
});

/* ******* Hour of Code 2015 ********/

levels.js_hoc2015_move_right = {
  'instructionsImportant': true,
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  'background': 'main',
  'music': ['song1'],
  'codeFunctions': {
    'moveRight': null,
    'moveLeft': null,
    'moveUp': null,
    'moveDown': null
  },
  'startBlocks': ['moveRight();', ''].join('\n'),
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': false,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0x1020000, 0x1020000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x0000000], [0x1020000, 0x1020000, 0x0000000, 0x0010000, 0x0020000, 0x0100000, 0x00, 0x0000000], [0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x0000000], [0x0000000, 0x0000000, 0x0000000, 0x0000010, 0x0000000, 0x0000001, 0x00, 0x0000000], [0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x0000000], [0x0000000, 0x0000000, 0x0000000, 0x0100000, 0x0010000, 0x0120000, 0x00, 0x0000000], [0x0000000, 0x1120000, 0x1120000, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x0100000], [0x0000000, 0x1120000, 0x1120000, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x0000000]],

  instructions: _locale2.default.hoc2015_move_right_instructions(),
  'ticksBeforeFaceSouth': 9,
  'timeoutFailureTick': 100,
  'timeoutAfterWhenRun': true,
  'goalOverride': {
    'goalImage': 'goal1'
  },
  "callouts": [{
    "id": "playlab:js_hoc2015_move_right:runButton",
    "element_id": "#runButton",
    "qtip_config": {
      "content": {
        "text": _locale2.default.calloutMoveRightRunButton()
      },
      'position': {
        'my': 'bottom left',
        'at': 'top center',
        'adjust': {
          'x': 0,
          'y': 0
        }
      }
    }
  }],
  'progressConditions': [{ required: { 'allGoalsVisited': true },
    result: { success: true, message: _locale2.default.successHasAllGoals() } }, { required: { 'timedOut': true, 'allGoalsVisited': false },
    result: { success: false, message: _locale2.default.failedHasAllGoals() } }]
};

levels.js_hoc2015_move_right_down = {
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  'background': 'main',
  'music': ['song2'],
  'codeFunctions': {
    'moveRight': null,
    'moveLeft': null,
    'moveUp': null,
    'moveDown': null
  },
  'startBlocks': ['moveRight();', ''].join('\n'),
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': false,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0x0000000, 0x0000000, 0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00], [0x0000000, 0x0000000, 0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00], [0x1100000, 0x1100000, 0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00], [0x1100000, 0x1100000, 0x00, 0x0000010, 0x0000000, 0x0000001, 0x0000000, 0x00], [0x0000000, 0x0000000, 0x00, 0x1010000, 0x1010000, 0x0000000, 0x0000000, 0x00], [0x0000000, 0x0000000, 0x00, 0x1010000, 0x1010000, 0x0000001, 0x0000000, 0x00], [0x0000000, 0x0000000, 0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00], [0x0000000, 0x0000000, 0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00]],
  instructions: _locale2.default.hoc2015_move_right_down_instructions(),
  'ticksBeforeFaceSouth': 9,
  'timeoutAfterWhenRun': true,
  'goalOverride': {
    'goalImage': 'goal2'
  },
  'progressConditions': [{ required: { 'allGoalsVisited': true },
    result: { success: true, message: _locale2.default.successHasAllGoals() } }, { required: { 'timedOut': true, 'allGoalsVisited': false },
    result: { success: false, message: _locale2.default.failedHasAllGoals() } }]
};

levels.js_hoc2015_move_backtrack = {
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  'background': 'main',
  'music': ['song3'],
  'codeFunctions': {
    'moveRight': null,
    'moveLeft': null,
    'moveUp': null,
    'moveDown': null
  },
  'startBlocks': ['moveRight();', ''].join('\n'),
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': false,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x00], [0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x00], [0x00, 0x0000000, 0x0000000, 0x0010000, 0x0000001, 0x0020000, 0x00, 0x00], [0x00, 0x0000000, 0x0000000, 0x0000010, 0x0000000, 0x0000001, 0x00, 0x00], [0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x00], [0x00, 0x1100000, 0x1100000, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x00], [0x00, 0x1100000, 0x1100000, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x00], [0x00, 0x0000000, 0x0000020, 0x0000000, 0x0000000, 0x0000000, 0x00, 0x00]],
  instructions: _locale2.default.hoc2015_move_backtrack_instructions(),
  'ticksBeforeFaceSouth': 9,
  'timeoutAfterWhenRun': true,
  'goalOverride': {
    'goalImage': 'goal1'
  },
  'progressConditions': [{ required: { 'touchedHazardsAtOrAbove': 1 },
    result: { success: false, message: _locale2.default.failedAvoidHazard(), pauseInterpreter: true } }, { required: { 'allGoalsVisited': true },
    result: { success: true, message: _locale2.default.successHasAllGoals() } }, { required: { 'timedOut': true, 'allGoalsVisited': false },
    result: { success: false, message: _locale2.default.failedHasAllGoals() } }]
};

levels.js_hoc2015_move_diagonal = {
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  'textModeAtStart': true,
  'background': 'main',
  'music': ['song4'],
  'codeFunctions': {
    'moveRight': null,
    'moveLeft': null,
    'moveUp': null,
    'moveDown': null
  },
  'startBlocks': ['moveDown();', ''].join('\n'),
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': false,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00], [0x00, 0x0000000, 0x0000000, 0x0000000, 0x0010000, 0x0000010, 0x0000000, 0x00], [0x00, 0x1100000, 0x1100000, 0x0000000, 0x0000001, 0x0000000, 0x0000000, 0x00], [0x00, 0x1100000, 0x1100000, 0x0000001, 0x0240000, 0x0250000, 0x0000000, 0x00], [0x00, 0x0000020, 0x0000001, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00], [0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00], [0x00, 0x0000000, 0x0000000, 0x1340000, 0x1340000, 0x1350000, 0x1350000, 0x00], [0x00, 0x0000000, 0x0000000, 0x1340000, 0x1340000, 0x1350000, 0x1350000, 0x00]],
  'embed': 'false',
  instructions: _locale2.default.hoc2015_move_diagonal_instructions(),
  'ticksBeforeFaceSouth': 9,
  'timeoutAfterWhenRun': true,
  'goalOverride': {
    'goalImage': 'goal1'
  },
  'progressConditions': [{ required: { 'touchedHazardsAtOrAbove': 1 },
    result: { success: false, message: _locale2.default.failedAvoidHazard(), pauseInterpreter: true } }, { required: { 'allGoalsVisited': true },
    result: { success: true, message: _locale2.default.successHasAllGoals() } }, { required: { 'timedOut': true, 'allGoalsVisited': false },
    result: { success: false, message: _locale2.default.failedHasAllGoals() } }],
  "callouts": [{
    'id': 'playlab:js_hoc2015_move_diagonal:showCodeToggle',
    'element_id': '#show-code-header',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutShowCodeToggle()
      },
      'position': {
        'my': 'top right',
        'at': 'bottom left',
        'adjust': {
          'x': 0,
          'y': 0
        }
      }
    }
  }]
};

levels.js_hoc2015_move_around = {
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  'textModeAtStart': true,
  'background': 'main',
  'music': ['song9'],
  'codeFunctions': {
    'moveRight': null,
    'moveLeft': null,
    'moveUp': null,
    'moveDown': null
  },
  'startBlocks': ['moveRight();', ''].join('\n'),
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': false,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0x0000000, 0x0000000, 0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00], [0x0000000, 0x0000000, 0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00], [0x0000000, 0x0000000, 0x00, 0x0000010, 0x0000000, 0x0000001, 0x0010000, 0x00], [0x0000000, 0x0000000, 0x00, 0x0040000, 0x0020000, 0x0000000, 0x0000000, 0x00], [0x0000000, 0x0000000, 0x20, 0x0140000, 0x0000000, 0x0000001, 0x0000000, 0x20], [0x1120000, 0x1120000, 0x00, 0x0000000, 0x0000001, 0x0000000, 0x0000000, 0x00], [0x1120000, 0x1120000, 0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00], [0x0000000, 0x0000020, 0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x00]],
  'embed': 'false',
  instructions: _locale2.default.hoc2015_move_around_instructions(),
  'ticksBeforeFaceSouth': 9,
  'timeoutAfterWhenRun': true,
  'goalOverride': {
    'goalImage': 'goal2'
  },
  'progressConditions': [{ required: { 'touchedHazardsAtOrAbove': 1 },
    result: { success: false, message: _locale2.default.failedAvoidHazard(), pauseInterpreter: true } }, { required: { 'allGoalsVisited': true },
    result: { success: true, message: _locale2.default.successHasAllGoals() } }, { required: { 'timedOut': true, 'allGoalsVisited': false },
    result: { success: false, message: _locale2.default.failedHasAllGoals() } }]
};

levels.js_hoc2015_move_finale = {
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  'background': 'main',
  'music': ['song8'],
  'codeFunctions': {
    'moveRight': null,
    'moveLeft': null,
    'moveUp': null,
    'moveDown': null
  },
  'startBlocks': ['moveDown();', ''].join('\n'),
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': false,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000], [0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000], [0x00, 0x0000020, 0x0000010, 0x0020000, 0x0000001, 0x0100000, 0x0000000, 0x0000000], [0x00, 0x0000000, 0x0000000, 0x0000001, 0x0000000, 0x0000001, 0x0000020, 0x0000000], [0x00, 0x0000000, 0x0000001, 0x0120000, 0x0000000, 0x0000000, 0x0000000, 0x0000000], [0x00, 0x0000000, 0x0000000, 0x0000000, 0x0000020, 0x0000000, 0x1020000, 0x1020000], [0x00, 0x1010000, 0x1010000, 0x0000000, 0x0000000, 0x0000000, 0x1020000, 0x1020000], [0x00, 0x1010000, 0x1010000, 0x0000000, 0x0000000, 0x0000000, 0x0000000, 0x0000000]],
  'embed': 'false',
  instructions: _locale2.default.hoc2015_move_finale_instructions(),
  'ticksBeforeFaceSouth': 9,
  'timeoutAfterWhenRun': true,
  'goalOverride': {
    'goalImage': 'goal2'
  },
  'progressConditions': [{ required: { 'touchedHazardsAtOrAbove': 1 },
    result: { success: false, message: _locale2.default.failedAvoidHazard(), pauseInterpreter: true } }, { required: { 'allGoalsVisited': true },
    result: { success: true, message: _locale2.default.successHasAllGoals() } }, { required: { 'timedOut': true, 'allGoalsVisited': false },
    result: { success: false, message: _locale2.default.failedHasAllGoals() } }],
  "callouts": [{
    'id': 'playlab:js_hoc2015_move_finale:showCodeToggle',
    'element_id': '#show-code-header',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutShowCodeCanToggle()
      },
      'position': {
        'my': 'top right',
        'at': 'bottom left',
        'adjust': {
          'x': 15,
          'y': 0
        }
      }
    }
  }]
};

/* ** level 7 ** */

levels.js_hoc2015_event_two_items = {
  lockZeroParamFunctions: true,
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  preventUserDefinedFunctions: true,
  'background': 'hoth',
  'music': ['song7'],
  'wallMap': 'blank',
  'softButtons': ['downButton', 'upButton'],
  'codeFunctions': {
    'goUp': null,
    'goDown': null,

    'whenUp': null,
    'whenDown': null
  },
  'startBlocks': ['function whenUp() {', '  ', '}', 'function whenDown() {', '  ', '}'].join('\n'),
  'removeItemsWhenActorCollides': true,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00]],
  'pinWorkspaceToBottom': 'true',
  'embed': 'false',
  instructions: _locale2.default.hoc2015_event_two_items_instructions(),
  instructions2: _locale2.default.hoc2015_event_two_items_instructions2(),
  'timeoutFailureTick': 600, // 20 seconds
  'showTimeoutRect': 'rgba(0, 0, 0, 0.5)',
  'goalOverride': {
    'goalAnimation': 'animatedGoal',
    'goalRenderOffsetX': 0
  },
  'progressConditions': [{ required: { 'allGoalsVisited': true },
    result: { success: true, message: _locale2.default.successCharacter1() } }, { required: { 'timedOut': true },
    result: {
      success: false,
      message: _locale2.default.failedTwoItemsTimeout(),
      blocklyMessage: _locale2.default.failedTwoItemsTimeoutBlockly()
    }
  }],
  'callouts': [{
    'id': 'playlab:js_hoc2015_event_two_items:placeCommandsHere',
    'element_id': '.droplet-gutter-line:nth-of-type(2)',
    'hide_target_selector': '.droplet-drag-cover',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutShowPlaceGoUpHere()
      },
      'hide': {
        'event': 'mouseup touchend'
      },
      'position': {
        'my': 'top left',
        'at': 'bottom right',
        'adjust': {
          'x': 30,
          'y': -10
        }
      }
    }
  }, {
    'id': 'playlab:js_hoc2015_event_two_items:arrowsCallout',
    'element_id': '#upButton',
    'hide_target_selector': '#soft-buttons',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutUseArrowButtons()
      },
      'position': {
        'my': 'bottom left',
        'at': 'top center'
      }
    }
  }]
};

levels.js_hoc2015_event_four_items = {
  lockZeroParamFunctions: true,
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  preventUserDefinedFunctions: true,
  'background': 'hoth',
  'music': ['song5'],
  'wallMap': 'blobs',
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'codeFunctions': {
    'goRight': null,
    'goLeft': null,
    'goUp': null,
    'goDown': null,

    'whenLeft': null,
    'whenRight': null,
    'whenUp': null,
    'whenDown': null
  },
  'startBlocks': ['function whenUp() {', '  ', '}', 'function whenDown() {', '  ', '}'].join('\n'),
  'removeItemsWhenActorCollides': true,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x01], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], [0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00]],
  'embed': 'false',
  instructions: _locale2.default.hoc2015_event_four_items_instructions(),
  instructions2: _locale2.default.hoc2015_event_four_items_instructions2(),
  'timeoutFailureTick': 1350, // 45 seconds
  'showTimeoutRect': 'rgba(0, 0, 0, 0.5)',
  'goalOverride': {
    'goalAnimation': 'animatedGoal'
  },

  'progressConditions': [{ required: { 'allGoalsVisited': true },
    result: { success: true, message: _locale2.default.successCharacter1() } }, { required: { 'timedOut': true },
    result: {
      success: false,
      message: _locale2.default.failedFourItemsTimeout(),
      blocklyMessage: _locale2.default.failedFourItemsTimeoutBlockly()
    }
  }]
};

levels.js_hoc2015_score = {
  lockZeroParamFunctions: true,
  'avatarList': ['R2-D2'],
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  preventUserDefinedFunctions: true,
  'editCode': true,
  'background': 'hoth',
  'music': ['song6'],
  'wallMap': 'circle',
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'autohandlerOverrides': {
    'whenGetRebelPilot': 'whenTouchGoal'
  },
  'codeFunctions': {
    'playSound': null,
    'addPoints': { params: ["100"] },

    'whenGetRebelPilot': null
  },
  'startBlocks': ['function whenGetRebelPilot() {', '  playSound("R2-D2random");', '}'].join('\n'),
  paramRestrictions: {
    playSound: {
      'random': true,
      'R2-D2random': true,
      'R2-D2sound1': true,
      'R2-D2sound2': true,
      'R2-D2sound3': true,
      'R2-D2sound4': true
    }
  },
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': true,
  'delayCompletion': 2000,
  'floatingScore': true,
  'edgeCollisions': 'true',
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 16, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0]],
  instructions: _locale2.default.hoc2015_score_instructions(),
  instructions2: _locale2.default.hoc2015_score_instructions2(),
  'autoArrowSteer': true,
  'timeoutFailureTick': 1350, // 45 seconds
  'showTimeoutRect': 'rgba(0, 0, 0, 0.5)',
  'goalOverride': {
    'goalAnimation': 'animatedGoal'
  },
  'goal': {
    // The level uses completeOnSuccessConditionNotGoals, so make sure this
    // returns null  The progressConditions will take care of completion.
    successCondition: function successCondition() {
      return false;
    }
  },
  'progressConditions': [
  // complete success
  { required: { 'allGoalsVisited': true, 'currentPointsAtOrAbove': 900 },
    result: { success: true, message: _locale2.default.successCharacter1() } },

  // timed out: not enough goals
  { required: { 'timedOut': true, 'allGoalsVisited': false },
    result: { success: false, message: _locale2.default.failedScoreTimeout() } },

  // got all the goals, but not enough points
  { required: { 'allGoalsVisited': true },
    result: {
      success: false,
      message: _locale2.default.failedScoreScore(),
      blocklyMessage: _locale2.default.failedScoreScoreBlockly()
    }
  }],
  'completeOnSuccessConditionNotGoals': true,
  'callouts': [{
    'id': 'playlab:js_hoc2015_score:arrowsAutoSteerCallout',
    'element_id': '#upButton',
    'hide_target_selector': '#soft-buttons',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutUseArrowButtonsAutoSteer()
      },
      'position': {
        'my': 'bottom left',
        'at': 'top center'
      }
    }
  }, {
    'id': 'playlab:js_hoc2015_score:placeCommandsAtTop',
    'element_id': '.droplet-gutter-line:nth-of-type(2)',
    'hide_target_selector': '.droplet-drag-cover',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutShowPlaySound()
      },
      'hide': {
        'event': 'mouseup touchend'
      },
      'position': {
        'my': 'top center',
        'at': 'bottom center',
        'adjust': {
          'x': 170,
          'y': 0
        }
      }
    }
  }]
};

levels.js_hoc2015_win_lose = {
  lockZeroParamFunctions: true,
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  preventUserDefinedFunctions: true,
  'background': 'endor',
  'music': ['song9'],
  'wallMap': 'blobs',
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'codeFunctions': {
    'playSound': null,
    'addPoints': { params: ["100"] },
    'removePoints': { params: ["100"] },
    'whenGetRebelPilot': null,
    'whenGetStormtrooper': null,
    'whenGetMynock': null
  },
  'startBlocks': [].join('\n'),
  paramRestrictions: {
    playSound: {
      'random': true,
      'R2-D2random': true,
      'R2-D2sound1': true,
      'R2-D2sound2': true,
      'R2-D2sound3': true,
      'R2-D2sound4': true
    }
  },
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': true,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000], [0x000, 0x000, 0x000, 0x040, 0x040, 0x000, 0x000, 0x000], [0x800, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x800], [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000], [0x000, 0x000, 0x000, 0x010, 0x000, 0x000, 0x000, 0x000], [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000], [0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000], [0x000, 0x100, 0x000, 0x000, 0x000, 0x000, 0x000, 0x000]],
  'embed': 'false',
  instructions: _locale2.default.hoc2015_win_lose_instructions(),
  instructions2: _locale2.default.hoc2015_win_lose_instructions2(),
  'autoArrowSteer': true,
  'timeoutFailureTick': 1350, // 45 seconds
  'showTimeoutRect': 'rgba(255, 255, 255, 0.5)',
  'callouts': [{
    'id': 'playlab:js_hoc2015_win_lose:instructions',
    'element_id': '#prompt-table',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutInstructions()
      },
      'position': {
        'my': 'bottom left',
        'at': 'top right',
        'adjust': {
          'x': -40,
          'y': 0
        }
      }
    }
  }],

  'progressConditions': [
  // Got all items, not enough points
  { required: { 'gotAllItems': true, 'currentPointsBelow': 200 },
    result: { message: _locale2.default.failedWinLoseScore(), blocklyMessage: _locale2.default.failedWinLoseScoreBlockly() } },

  // Timed out: not enough items, not enough points
  { required: { 'timedOut': true, 'collectedItemsBelow': 2, 'currentPointsBelow': 200 },
    result: { success: false, message: _locale2.default.failedWinLoseTimeout() } },

  // Timed out: enough items, not enough points
  { required: { 'timedOut': true, 'collectedItemsAtOrAbove': 2, 'currentPointsBelow': 200 },
    result: {
      success: false,
      message: _locale2.default.failedWinLoseScore(),
      blocklyMessage: _locale2.default.failedWinLoseScoreBlockly()
    }
  },

  // Timed out: not enough items, enough points
  { required: { 'timedOut': true, 'collectedItemsBelow': 2, 'currentPointsAtOrAbove': 200 },
    result: {
      success: false,
      message: _locale2.default.failedWinLoseGoals(),
      blocklyMessage: _locale2.default.failedWinLoseGoalsBlockly()
    }
  },

  // Success: enough items, enough points
  { required: { 'collectedItemsAtOrAbove': 2, 'currentPointsAtOrAbove': 200 },
    result: { success: true, message: _locale2.default.successCharacter1() } }]
};

levels.js_hoc2015_add_characters = {
  lockZeroParamFunctions: true,
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  preventUserDefinedFunctions: true,
  'background': 'endor',
  'music': ['song11'],
  'wallMap': 'circle',
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'codeFunctions': {
    'addCharacter': { params: ['"PufferPig"'] },
    'addPoints': { params: ["1000"] },
    'removePoints': { params: ["1000"] },
    'playSound': null,

    'whenGetPufferPig': null
  },
  'startBlocks': ['playSound("R2-D2sound1");', 'addCharacter("PufferPig");', '', 'function whenGetPufferPig() {', '  playSound("PufferPigRandom");', '  addPoints(1000);', '}'].join('\n'),
  paramRestrictions: {
    playSound: {
      'random': true,
      'R2-D2random': true,
      'R2-D2sound1': true,
      'R2-D2sound2': true,
      'R2-D2sound3': true,
      'R2-D2sound4': true,
      'PufferPigRandom': true,
      'PufferPigSound1': true,
      'PufferPigSound2': true,
      'PufferPigSound3': true
    }
  },
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': true,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'embed': 'false',
  instructions: _locale2.default.hoc2015_add_characters_instructions(),
  instructions2: _locale2.default.hoc2015_add_characters_instructions2(),
  'autoArrowSteer': true,
  'timeoutFailureTick': 1350, // 45 seconds
  'showTimeoutRect': 'rgba(255, 255, 255, 0.5)',
  'callouts': [{
    'id': 'playlab:js_hoc2015_add_characters:calloutPutCommandsHereRunStart',
    'element_id': '.droplet-gutter-line:nth-of-type(3)',
    'hide_target_selector': '.droplet-drag-cover',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutPutCommandsHereRunStart()
      },
      'hide': {
        'event': 'mouseup touchend'
      },
      'position': {
        'my': 'top left',
        'at': 'center right'
      }
    }
  }],
  'progressConditions': [{ required: { 'createdSpecificItemsBelow': { className: "pufferpig", count: 3 } },
    result: {
      success: false,
      message: _locale2.default.failedAddCharactersTimeout(),
      blocklyMessage: _locale2.default.failedAddCharactersTimeoutBlockly()
    }
  }, { required: { 'collectedSpecificItemsAtOrAbove': { className: "pufferpig", count: 3 } },
    result: { success: true, message: _locale2.default.successCharacter1() } }, { required: { 'timedOut': true },
    result: {
      success: false,
      message: _locale2.default.failedAddCharactersTimeout(),
      blocklyMessage: _locale2.default.failedAddCharactersTimeoutBlockly()
    }
  }]
};

levels.js_hoc2015_chain_characters = {
  lockZeroParamFunctions: true,
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  preventUserDefinedFunctions: true,
  'background': 'starship',
  'music': ['song13'],
  'wallMap': 'horizontal',
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'codeFunctions': {
    'addCharacter': { params: ['"Mynock"'] },
    'addPoints': null,
    'removePoints': null,
    'playSound': null,

    'whenGetTauntaun': null,
    'whenGetMynock': null
  },
  'startBlocks': ['addCharacter("Tauntaun");', 'addCharacter("Tauntaun");', 'addCharacter("Tauntaun");', 'addCharacter("Tauntaun");', '', 'function whenGetTauntaun() {', '  playSound("TauntaunRandom");', '  addPoints(50);', '', '}'].join('\n'),
  paramRestrictions: {
    playSound: {
      'random': true,
      'R2-D2random': true,
      'R2-D2sound1': true,
      'R2-D2sound2': true,
      'R2-D2sound3': true,
      'R2-D2sound4': true,
      'TauntaunRandom': true,
      'TauntaunSound1': true,
      'TauntaunSound2': true,
      'TauntaunSound3': true,
      'TauntaunSound4': true,
      'MynockRandom': true,
      'MynockSound1': true,
      'MynockSound2': true,
      'MynockSound3': true
    }
  },
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': true,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'embed': 'false',
  instructions: _locale2.default.hoc2015_chain_characters_instructions(),
  instructions2: _locale2.default.hoc2015_chain_characters_instructions2(),
  'autoArrowSteer': true,
  'timeoutFailureTick': 1800, // 60 seconds
  'showTimeoutRect': 'rgba(255, 255, 255, 0.5)',
  'progressConditions': [{ required: { 'collectedSpecificItemsAtOrAbove': { className: "mynock", count: 8 } },
    result: { success: true, message: _locale2.default.successCharacter1() } }, { required: { 'timedOut': true, collectedSpecificItemsAtOrAbove: { className: "mynock", count: 5 } },
    result: { success: false, canPass: true, message: _locale2.default.failedChainCharactersTimeoutGotSome() } }, { required: {
      'collectedSpecificItemsAtOrAbove': { className: "tauntaun", count: 4 },
      'createdSpecificItemsBelow': { className: "mynock", count: 5 }
    },
    result: { success: false, message: _locale2.default.failedChainCharactersTimeout() } }, { required: { 'timedOut': true },
    result: { success: false, message: _locale2.default.failedChainCharactersTimeout() } }],
  'callouts': [{
    'id': 'playlab:js_hoc2015_chain_characters:calloutPlaceTwoWhenTauntaun',
    'element_id': '.droplet-gutter-line:nth-of-type(9)',
    'hide_target_selector': '.droplet-drag-cover',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutPlaceTwoWhenTauntaun()
      },
      'hide': {
        'event': 'mouseup touchend'
      },
      'position': {
        'my': 'top left',
        'at': 'bottom center',
        'adjust': {
          'x': 65,
          'y': 0
        }
      }
    }
  }]
};

levels.js_hoc2015_multiply_characters = {
  lockZeroParamFunctions: true,
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  preventUserDefinedFunctions: true,
  'background': 'starship',
  'music': ['song12'],
  'wallMap': 'grid',
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'codeFunctions': {
    'addCharacter': { params: ['"MouseDroid"'] },
    'playSound': null,
    'addPoints': null,
    'removePoints': null,

    'whenGetMouseDroid': null
  },
  'startBlocks': ['addCharacter("MouseDroid");', 'playSound("R2-D2sound3");'].join('\n'),
  paramRestrictions: {
    playSound: {
      'random': true,
      'R2-D2random': true,
      'R2-D2sound1': true,
      'R2-D2sound2': true,
      'R2-D2sound3': true,
      'R2-D2sound4': true,
      'MouseDroidRandom': true,
      'MouseDroidSound1': true,
      'MouseDroidSound2': true,
      'MouseDroidSound3': true
    }
  },
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': true,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'embed': 'false',
  instructions: _locale2.default.hoc2015_multiply_characters_instructions(),
  instructions2: _locale2.default.hoc2015_multiply_characters_instructions2(),
  'autoArrowSteer': true,
  'timeoutFailureTick': 2250, // 75 seconds
  'showTimeoutRect': 'rgba(255, 255, 255, 0.5)',
  'progressConditions': [{ required: { 'collectedItemsAtOrAbove': 20 },
    result: { success: true, message: _locale2.default.successCharacter1() } }, { required: {
      'collectedSpecificItemsAtOrAbove': { className: "mousedroid", count: 1 },
      'createdSpecificItemsBelow': { className: "mousedroid", count: 2 }
    },
    result: { success: false, message: _locale2.default.failedMultiplyCharactersTimeout() } }, { required: { 'timedOut': true, 'collectedItemsAtOrAbove': 2 },
    result: { success: false, canPass: true, message: _locale2.default.failedMultiplyCharactersTimeoutGotSome() } }, { required: { 'timedOut': true },
    result: {
      success: false,
      message: _locale2.default.failedMultiplyCharactersTimeout(),
      blocklyMessage: _locale2.default.failedMultiplyCharactersTimeoutBlockly()
    }
  }],
  'callouts': [{
    'id': 'playlab:js_hoc2015_multiply_characters:calloutPlaceTwo',
    'element_id': '#droplet_palette_block_whenGetMouseDroid',
    'hide_target_selector': '.droplet-drag-cover',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutPlaceTwo()
      },
      'hide': {
        'event': 'mouseup touchend'
      },
      'position': {
        'my': 'top left',
        'at': 'bottom center'
      }
    }
  }]
};

levels.js_hoc2015_change_setting = {
  lockZeroParamFunctions: true,
  'editCode': true,
  autocompletePaletteApisOnly: true,
  executePaletteApisOnly: true,
  preventUserDefinedFunctions: true,
  'background': 'starship',
  'music': ['song14'],
  'wallMap': 'blobs',
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'codeFunctions': {
    'setDroid': { params: ['"C-3PO"'] },
    'setBackground': null,
    'setDroidSpeed': null,
    'setMap': null,
    'playSound': null,
    'addCharacter': null,
    'addPoints': null,
    'removePoints': null,

    'whenGetRebelPilot': null
  },
  'startBlocks': ['addCharacter("RebelPilot");', 'addCharacter("RebelPilot");', 'addCharacter("RebelPilot");', '', 'setBackground("random");', 'setMap("random");', ''].join('\n'),
  paramRestrictions: {
    playSound: {
      'random': true,
      'C-3POrandom': true,
      'C-3POsound1': true,
      'C-3POsound2': true,
      'C-3POsound3': true,
      'C-3POsound4': true,
      'R2-D2random': true,
      'R2-D2sound1': true,
      'R2-D2sound2': true,
      'R2-D2sound3': true,
      'R2-D2sound4': true,
      'PufferPigRandom': true,
      'PufferPigSound1': true,
      'PufferPigSound2': true,
      'PufferPigSound3': true,
      'TauntaunRandom': true,
      'TauntaunSound1': true,
      'TauntaunSound2': true,
      'TauntaunSound3': true,
      'MouseDroidRandom': true,
      'MouseDroidSound1': true,
      'MouseDroidSound2': true,
      'MouseDroidSound3': true,
      'MynockRandom': true,
      'MynockSound1': true,
      'MynockSound2': true,
      'MynockSound3': true,
      'ProbotRandom': true,
      'ProbotSound1': true,
      'ProbotSound2': true,
      'ProbotSound3': true
    }
  },
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': true,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 16, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'embed': 'false',
  instructions: _locale2.default.hoc2015_change_setting_instructions(),
  instructions2: _locale2.default.hoc2015_change_setting_instructions2(),
  'autoArrowSteer': true,
  'timeoutFailureTick': 1350, // 45 seconds
  'showTimeoutRect': 'rgba(255, 255, 255, 0.5)',
  'callouts': [{
    'id': 'playlab:js_hoc2015_change_setting:setMap',
    'element_id': '#droplet_palette_block_setDroid',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutSetDroidAndSpeed()
      },
      'position': {
        'my': 'center left',
        'at': 'center right'
      }
    }
  }],
  'progressConditions': [
  // Collected all the items and set the right properties?  Success.
  { required: { 'setSprite': true, 'setDroidSpeed': true, 'collectedItemsAtOrAbove': 3 },
    result: { success: true, message: _locale2.default.successGenericCharacter() } },
  // If all items are collected, but either property not set?  Immediate failure.
  { required: { 'collectedItemsAtOrAbove': 3 },
    result: { success: false, message: _locale2.default.failedChangeSettingSettings() } },
  // Timed out and obviously collected not enough items.
  { required: { 'timedOut': true },
    result: { success: false, message: _locale2.default.failedChangeSettingTimeout() } }]
};

var js_hoc2015_event_free_markdown = ['<div class="js_hoc2015_event_free_markdown">', '<p><span class="character-text">' + _locale2.default.hoc2015_event_free_instructions() + '</span></p>', '', '<p><span class="instructions2">' + _locale2.default.hoc2015_event_free_instructions2() + '</span></p>', '', '<details class="hoc2015">', '<summary>Example project ideas</summary>', '<p>**Example 1**', '<br />Add five random characters in the scene, and play a different sound each time R2-D2 collides with one of them.</p>', '', '<p>**Example 2**', '<br />Add ten Stormtroopers to chase C-3PO. See if you can outrun them by running at high speed.</p>', '', '<p>**Example 3**', '<br />Make your droid move faster when he touches a Mouse Droid and slower when he touches a Stormtrooper.</p>', '', '</details>', '<details class="hoc2015">', '<summary>Extra credit project ideas</summary>', '', '<p>**Example 1**', '<br />Add a Mouse Droid and a Stormtrooper. Every time R2-D2 catches a Mouse Droid, score some ' + 'points and then add another Mouse Droid and another Stormtrooper.  End the game if a ' + 'Stormtrooper catches R2-D2.</p>', '', '</details>', '<details class="hoc2015">', '<summary>For JavaScript programmers</summary>', '<p>You can create more complex JavaScript programs if you program in “text” mode. ' + 'Feel free to use `for` loops, `if` statements, variables, or other JavaScript ' + 'commands to make much more complex games. And _please_: document and share ' + 'the code you wrote for others to learn too!</p>', '', '</details>', '<details class="hoc2015">', '<summary>More about the characters</summary>', '<p>Each character has a unique behavior:', '<br/><br/>', '[pufferpig] <b>Puffer Pigs</b> roam around slowly<br/>', '[tauntaun] <b>Tauntauns</b> roam around at a normal speed<br/>', '[mynock] <b>Mynocks</b> fly around at a normal speed<br/>', '[stormtrooper] <b>Stormtroopers</b> chase your droid slowly<br/>', '[probot] <b>Probots</b> chase your droid quickly<br/>', '[rebelpilot] <b>Rebel Pilots</b> flee at a normal speed<br/>', '[mousedroid] <b>Mouse Droids</b> flee quickly<br/>', '<br/>', 'You can change the speed of any character with the moveFast, moveNormal, and moveSlow commands.', '</p>', '', '</details>', '</div>'].join('\r\n');

levels.js_hoc2015_event_free = {
  lockZeroParamFunctions: true,
  'editCode': true,
  'freePlay': true,
  'background': 'endor',
  'music': ['song15'],
  'wallMap': 'blank',
  'softButtons': ['leftButton', 'rightButton', 'downButton', 'upButton'],
  'codeFunctions': {
    'setDroid': { 'category': 'Commands' },
    'setBackground': { 'category': 'Commands' },
    'setDroidSpeed': { 'category': 'Commands' },
    'setMap': { 'category': 'Commands' },
    'playSound': { 'category': 'Commands' },
    'addCharacter': { 'category': 'Commands' },
    'moveSlow': { 'category': 'Commands' },
    'moveNormal': { 'category': 'Commands' },
    'moveFast': { 'category': 'Commands' },
    'addPoints': { 'category': 'Commands' },
    'removePoints': { 'category': 'Commands' },
    'endGame': { 'category': 'Commands' },

    'goRight': { 'category': 'Commands' },
    'goLeft': { 'category': 'Commands' },
    'goUp': { 'category': 'Commands' },
    'goDown': { 'category': 'Commands' },

    'whenLeft': { 'category': 'Events' },
    'whenRight': { 'category': 'Events' },
    'whenUp': { 'category': 'Events' },
    'whenDown': { 'category': 'Events' },

    'whenTouchObstacle': { 'category': 'Events' },
    'whenGetStormtrooper': { 'category': 'Events' },
    'whenGetRebelPilot': { 'category': 'Events' },
    'whenGetPufferPig': { 'category': 'Events' },
    'whenGetMynock': { 'category': 'Events' },
    'whenGetMouseDroid': { 'category': 'Events' },
    'whenGetTauntaun': { 'category': 'Events' },
    'whenGetProbot': { 'category': 'Events' },
    'whenGetCharacter': { 'category': 'Events' },

    'whenGetAllStormtroopers': { 'category': 'Events' },
    'whenGetAllRebelPilots': { 'category': 'Events' },
    'whenGetAllPufferPigs': { 'category': 'Events' },
    'whenGetAllMynocks': { 'category': 'Events' },
    'whenGetAllMouseDroids': { 'category': 'Events' },
    'whenGetAllTauntauns': { 'category': 'Events' },
    'whenGetAllProbots': { 'category': 'Events' },
    'whenGetAllCharacters': { 'category': 'Events' }
  },
  'startBlocks': ['setBackground("Endor");', 'setMap("circle");', 'setDroid("R2-D2");', 'setDroidSpeed("normal");', 'playSound("R2-D2random");', 'function whenUp() {', '  goUp();', '}', 'function whenDown() {', '  goDown();', '}', 'function whenLeft() {', '  goLeft();', '}', 'function whenRight() {', '  goRight();', '}', ''].join('\n'),
  'itemGridAlignedMovement': true,
  'removeItemsWhenActorCollides': true,
  'tapSvgToRunAndReset': true,
  'delayCompletion': 2000,
  'floatingScore': true,
  'map': [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 16, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]],
  'embed': 'false',
  'instructions': _locale2.default.hoc2015_event_free_instructions(),
  'instructions2': _locale2.default.hoc2015_event_free_instructions2(),
  'markdownInstructions': js_hoc2015_event_free_markdown,
  'markdownInstructionsWithClassicMargins': true,
  'callouts': [{
    'id': 'playlab:js_hoc2015_event_free:clickCategory',
    'element_id': '.droplet-palette-group-header.green',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutClickEvents()
      },
      'position': {
        'my': 'top center',
        'at': 'bottom center'
      }
    }
  }, {
    'id': 'playlab:js_hoc2015_event_free:finishButton',
    'element_id': '#finishButton',
    'on': 'finishButtonShown',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutFinishButton()
      },
      'position': {
        'my': 'center left',
        'at': 'center right'
      }
    }
  }],
  appStringsFunctions: {
    continueText: _locale2.default.hoc2015_lastLevel_continueText,
    reinfFeedbackMsg: _locale2.default.hoc2015_reinfFeedbackMsg,
    sharingText: _locale2.default.hoc2015_shareGame
  },
  disablePrinting: true,
  playStartSound: false
};

levels.hoc2015_blockly_1 = (0, _utils.extend)(levels.js_hoc2015_move_right, {
  instructionsImportant: true,
  editCode: false,
  enableShowCode: true,
  startBlocks: whenRunMoveEast,
  toolbox: tb(hocMoveNSEW),
  requiredBlocks: [moveEastRequiredBlock()],
  'callouts': [{
    'id': 'playlab:blockly_hoc2015_move_right:runButton',
    "element_id": "#runButton",
    "qtip_config": {
      "content": {
        "text": _locale2.default.calloutBlocklyMoveRightRunButton()
      },
      'position': {
        'my': 'bottom left',
        'at': 'top center',
        'adjust': {
          'x': 0,
          'y': 0
        }
      }
    }
  }]
});

levels.hoc2015_blockly_2 = (0, _utils.extend)(levels.js_hoc2015_move_right_down, {
  editCode: false,
  enableShowCode: true,
  startBlocks: whenRunMoveEast,
  toolbox: tb(hocMoveNSEW),
  requiredBlocks: [moveEastRequiredBlock(), moveSouthRequiredBlock()]
});

levels.hoc2015_blockly_3 = (0, _utils.extend)(levels.js_hoc2015_move_backtrack, {
  editCode: false,
  enableShowCode: true,
  startBlocks: whenRunMoveEast,
  toolbox: tb(hocMoveNSEW),
  requiredBlocks: [moveEastRequiredBlock(), moveNorthRequiredBlock()]
});

levels.hoc2015_blockly_4 = (0, _utils.extend)(levels.js_hoc2015_move_diagonal, {
  editCode: false,
  enableShowCode: true,
  callouts: null,
  startBlocks: whenRunMoveSouth,
  toolbox: tb(hocMoveNSEW),
  requiredBlocks: [moveSouthRequiredBlock(), moveWestRequiredBlock()]
});

levels.hoc2015_blockly_5 = (0, _utils.extend)(levels.js_hoc2015_move_around, {
  editCode: false,
  enableShowCode: true,
  startBlocks: whenRunMoveEast,
  toolbox: tb(hocMoveNSEW),
  requiredBlocks: [moveEastRequiredBlock(), moveSouthRequiredBlock(), moveWestRequiredBlock()],
  callouts: []
});

levels.hoc2015_blockly_6 = (0, _utils.extend)(levels.js_hoc2015_move_finale, {
  editCode: false,
  enableShowCode: true,
  startBlocks: whenRunMoveSouth,
  toolbox: tb(hocMoveNSEW),
  callouts: null,
  requiredBlocks: [moveNorthRequiredBlock(), moveSouthRequiredBlock(), moveEastRequiredBlock()]
});

levels.hoc2015_blockly_7 = (0, _utils.extend)(levels.js_hoc2015_event_two_items, {
  editCode: false,
  msgStringOverrides: {
    moveSprite: 'goSprite'
  },
  startBlocks: whenUpDown,
  toolbox: tb(hocMoveNS),
  requiredBlocks: [
    // Note: not listing move blocks since the error messages are already
    // sufficient and we've renamed these blocks to goUp/goDown
  ],
  'callouts': [{
    id: 'playlab:hoc2015_blockly_7:placeCommandsHere',
    element_id: '[block-id="3"]',
    hide_target_selector: '.blocklyDraggable',
    qtip_config: {
      content: {
        text: _locale2.default.calloutBlocklyPlaceGoUpHere()
      },
      position: {
        my: 'top left',
        at: 'bottom left',
        adjust: {
          x: 22,
          y: 0
        }
      }
    }
  }, {
    'id': 'playlab:hoc2015_blockly_7:arrowsCallout',
    'element_id': '#upButton',
    'hide_target_selector': '#soft-buttons',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutUseArrowButtons()
      },
      'position': {
        'my': 'bottom left',
        'at': 'top center'
      }
    }
  }]
});

// exactly clone this level so we can insert it into scripts without a
// preceding video.
levels.hoc2015_blockly_7_no_video = (0, _utils.extend)(levels.hoc2015_blockly_7);

levels.hoc2015_blockly_8 = (0, _utils.extend)(levels.js_hoc2015_event_four_items, {
  editCode: false,
  msgStringOverrides: {
    moveSprite: 'goSprite'
  },
  startBlocks: whenUpDownLeftRight,
  toolbox: tb(hocMoveNSEW),
  requiredBlocks: [
    // Note: not listing move blocks since the error messages are already
    // sufficient and we've renamed these blocks to goUp/goDown/goLeft/goRight
  ]
});

levels.hoc2015_blockly_9 = (0, _utils.extend)(levels.js_hoc2015_score, {
  editCode: false,
  msgStringOverrides: {
    whenTouchGoal: 'whenGetCharacterRebelPilot'
  },
  startBlocks: '<block type="studio_whenTouchGoal" deletable="false"> \
      <next><block type="studio_playSound"><title name="SOUND">R2-D2random</title></block> \
      </next></block>',
  toolbox: tb('<block type="studio_playSound"></block> \
        <block type="studio_addPoints"><title name="VALUE">100</title></block>'),
  requiredBlocks: [
    // TODO: addPoints
  ],
  callouts: [{
    'id': 'playlab:hoc2015_blockly_9:arrowsAutoSteerCallout',
    'element_id': '#upButton',
    'hide_target_selector': '#soft-buttons',
    'qtip_config': {
      'content': {
        'text': _locale2.default.calloutUseArrowButtonsAutoSteer()
      },
      'position': {
        'my': 'bottom left',
        'at': 'top center'
      }
    }
  }, {
    id: 'playlab:hoc2015_blockly_9:placeCommandsAtTop',
    element_id: '[block-id="4"]',
    hide_target_selector: '.blocklyDraggable',
    qtip_config: {
      content: {
        text: _locale2.default.calloutShowPlaySound()
      },
      position: {
        my: 'top left',
        at: 'bottom center'
      }
    }
  }]
});

levels.hoc2015_blockly_10 = (0, _utils.extend)(levels.js_hoc2015_win_lose, {
  editCode: false,
  startBlocks: '',
  toolbox: tb('<block type="studio_playSound"></block> \
        <block type="studio_addPoints"><title name="VALUE">100</title></block> \
        <block type="studio_removePoints"><title name="VALUE">100</title></block> \
        <block type="studio_whenGetCharacter"><title name="VALUE">rebelpilot</title></block> \
        <block type="studio_whenGetCharacter"><title name="VALUE">stormtrooper</title></block> \
        <block type="studio_whenGetCharacter"><title name="VALUE">mynock</title></block>'),
  requiredBlocks: [
    // TODO: addPoints, removePoints, whenGetPilot, whenGetMan
  ]
});

levels.hoc2015_blockly_11 = (0, _utils.extend)(levels.js_hoc2015_add_characters, {
  editCode: false,
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"> \
      <next> \
       <block type="studio_playSound"><title name="SOUND">R2-D2sound1</title> \
        <next> \
         <block type="studio_addCharacter"><title name="VALUE">"pufferpig"</title></block> \
        </next> \
       </block> \
      </next> \
     </block> \
     <block type="studio_whenGetCharacter" deletable="false" x="20" y="200"> \
      <title name="VALUE">pufferpig</title> \
      <next> \
       <block type="studio_playSound"><title name="SOUND">PufferPigRandom</title> \
        <next> \
         <block type="studio_addPoints"><title name="VALUE">1000</title></block> \
        </next> \
       </block> \
      </next> \
     </block>',
  toolbox: tb('<block type="studio_addCharacter"><title name="VALUE">"pufferpig"</title></block> \
        <block type="studio_addPoints"><title name="VALUE">100</title></block> \
        <block type="studio_removePoints"><title name="VALUE">100</title></block> \
        <block type="studio_playSound"></block> \
        <block type="studio_whenGetCharacter"><title name="VALUE">pufferpig</title></block>'),
  callouts: [{
    id: 'playlab:hoc2015_blockly_11:calloutPutCommandsHereRunStart',
    element_id: '[block-id="8"]',
    hide_target_selector: '.blocklyDraggable',
    qtip_config: {
      content: {
        text: _locale2.default.calloutPutCommandsHereRunStart()
      },
      position: {
        my: 'top left',
        at: 'bottom left',
        adjust: {
          x: 22,
          y: 0
        }
      }
    }
  }],
  requiredBlocks: [
    // TODO: addCharacter
  ]
});

levels.hoc2015_blockly_12 = (0, _utils.extend)(levels.js_hoc2015_chain_characters, {
  editCode: false,
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"> \
      <next> \
       <block type="studio_addCharacter"><title name="VALUE">"tauntaun"</title> \
        <next> \
         <block type="studio_addCharacter"><title name="VALUE">"tauntaun"</title> \
          <next> \
           <block type="studio_addCharacter"><title name="VALUE">"tauntaun"</title> \
            <next> \
             <block type="studio_addCharacter"><title name="VALUE">"tauntaun"</title></block> \
            </next> \
           </block> \
          </next> \
         </block> \
        </next> \
       </block> \
      </next> \
     </block> \
     <block type="studio_whenGetCharacter" deletable="false" x="20" y="180"> \
      <title name="VALUE">tauntaun</title> \
      <next> \
       <block type="studio_playSound"><title name="SOUND">TauntaunRandom</title> \
        <next> \
         <block type="studio_addPoints"><title name="VALUE">50</title></block> \
        </next> \
       </block> \
      </next> \
     </block>',
  toolbox: tb('<block type="studio_addCharacter"><title name="VALUE">"mynock"</title></block> \
        <block type="studio_addPoints"><title name="VALUE">100</title></block> \
        <block type="studio_removePoints"><title name="VALUE">100</title></block> \
        <block type="studio_playSound"></block> \
        <block type="studio_whenGetCharacter"><title name="VALUE">tauntaun</title></block> \
        <block type="studio_whenGetCharacter"><title name="VALUE">mynock</title></block>'),
  requiredBlocks: [
    // TODO: addCharacter (check for mouse param?), addPoints
  ],
  callouts: [{
    id: 'playlab:hoc2015_blockly_12:calloutPlaceTwoWhenTauntaun',
    element_id: '[block-id="12"]',
    hide_target_selector: '.blocklyDraggable',
    qtip_config: {
      content: {
        text: _locale2.default.calloutPlaceTwoWhenTauntaun()
      },
      position: {
        my: 'top left',
        at: 'bottom center',
        'adjust': {
          'x': 0,
          'y': 0
        }
      }
    }
  }]
});

levels.hoc2015_blockly_13 = (0, _utils.extend)(levels.js_hoc2015_multiply_characters, {
  editCode: false,
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"> \
      <next> \
       <block type="studio_addCharacter"><title name="VALUE">"mousedroid"</title> \
        <next> \
         <block type="studio_playSound"><title name="SOUND">R2-D2sound3</title></block> \
        </next> \
       </block> \
      </next> \
     </block>',
  toolbox: tb('<block type="studio_addCharacter"><title name="VALUE">"mousedroid"</title></block> \
        <block type="studio_addPoints"><title name="VALUE">100</title></block> \
        <block type="studio_removePoints"><title name="VALUE">100</title></block> \
        <block type="studio_playSound"></block> \
        <block type="studio_whenGetCharacter"><title name="VALUE">mousedroid</title></block>'),
  requiredBlocks: [
    // TODO: addCharacter, addPoints
  ],
  callouts: [{
    id: 'playlab:hoc2015_blockly_13:calloutPlaceTwo',
    element_id: '[block-id="5"]',
    hide_target_selector: '.blocklyDraggable',
    qtip_config: {
      content: {
        text: _locale2.default.calloutPlaceTwo()
      },
      position: {
        my: 'top left',
        at: 'bottom center'
      }
    }
  }]
});

levels.hoc2015_blockly_14 = (0, _utils.extend)(levels.js_hoc2015_change_setting, {
  editCode: false,
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"> \
      <next> \
       <block type="studio_addCharacter"><title name="VALUE">"rebelpilot"</title> \
        <next> \
         <block type="studio_addCharacter"><title name="VALUE">"rebelpilot"</title> \
          <next> \
           <block type="studio_addCharacter"><title name="VALUE">"rebelpilot"</title> \
            <next> \
             <block type="studio_setBackground"><title name="VALUE">random</title> \
              <next> \
               <block type="studio_setMap"><title name="VALUE">random</title></block> \
              </next> \
             </block> \
            </next> \
           </block> \
          </next> \
         </block> \
        </next> \
       </block> \
      </next> \
     </block>',
  toolbox: tb('<block type="studio_setSprite"><title name="VALUE">"c-3po"</title></block> \
        <block type="studio_setDroidSpeed"><title name="VALUE">fast</title></block> \
        <block type="studio_setBackground"></block> \
        <block type="studio_setMap"></block> \
        <block type="studio_addCharacter"><title name="VALUE">"mousedroid"</title></block> \
        <block type="studio_addPoints"><title name="VALUE">100</title></block> \
        <block type="studio_removePoints"><title name="VALUE">100</title></block> \
        <block type="studio_playSound"></block> \
        <block type="studio_whenGetCharacter"><title name="VALUE">rebelpilot</title></block>'),
  requiredBlocks: [
    // TODO: setMap, setDroidSpeed
  ],
  callouts: [{
    id: 'playlab:hoc2015_blockly_14:setMap',
    element_id: '[block-id="1"]',
    qtip_config: {
      content: {
        text: _locale2.default.calloutSetDroidAndSpeed()
      },
      position: {
        my: 'center left',
        at: 'center right'
      }
    }
  }]
});

levels.hoc2015_blockly_15 = (0, _utils.extend)(levels.js_hoc2015_event_free, {
  editCode: false,
  msgStringOverrides: {
    moveSprite: 'goSprite'
  },
  markdownInstructions: null,
  markdownInstructionsWithClassicMargins: false,
  startBlocks: '<block type="when_run" deletable="false" x="20" y="20"> \
      <next> \
       <block type="studio_setBackground"><title name="VALUE">"endor"</title> \
        <next> \
         <block type="studio_setMap"><title name="VALUE">"circle"</title> \
          <next> \
           <block type="studio_setSprite"><title name="VALUE">"r2-d2"</title> \
            <next> \
             <block type="studio_setDroidSpeed"><title name="VALUE">normal</title> \
              <next> \
               <block type="studio_playSound"><title name="SOUND">R2-D2random</title></block> \
              </next> \
             </block> \
            </next> \
           </block> \
          </next> \
         </block> \
        </next> \
       </block> \
      </next> \
     </block>' + whenArrowBlocks(200, 80),
  toolbox: tb(createCategory(_locale2.default.catCommands(), hocMoveNSEW + blockOfType('studio_setSprite') + blockOfType('studio_setBackground') + blockOfType('studio_setDroidSpeed') + blockOfType('studio_setMap') + blockOfType('studio_playSound') + blockOfType('studio_addCharacter') + blockOfType('studio_setItemSpeed') + blockOfType('studio_addPoints') + blockOfType('studio_removePoints') + blockOfType('studio_endGame')) + createCategory(_locale2.default.catEvents(), blockOfType('when_run') + blockOfType('studio_whenUp') + blockOfType('studio_whenDown') + blockOfType('studio_whenLeft') + blockOfType('studio_whenRight') + blockOfType('studio_whenGetCharacter') + blockOfType('studio_whenGetAllCharacters') + blockOfType('studio_whenGetAllCharacterClass') + blockOfType('studio_whenTouchObstacle'))),
  callouts: [{
    id: 'playlab:hoc2015_blockly_15:finishButton',
    element_id: '#finishButton',
    on: 'finishButtonShown',
    qtip_config: {
      content: {
        text: _locale2.default.calloutFinishButton()
      },
      position: {
        my: 'center left',
        at: 'center right'
      }
    }
  }, {
    id: 'playlab:hoc2015_blockly_15:categories',
    element_id: '.blocklyTreeRoot:visible',
    qtip_config: {
      content: {
        text: _locale2.default.calloutBlocklyCategories()
      },
      position: {
        my: 'top left',
        at: 'bottom right',
        'adjust': {
          'x': -10,
          'y': 0
        }
      }
    }
  }]
});

/***/ })

},[3302]);