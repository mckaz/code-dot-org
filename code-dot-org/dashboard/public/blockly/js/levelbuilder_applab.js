webpackJsonp([57],{

/***/ 3388:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3389);


/***/ }),

/***/ 3389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  var makerBlocks = {
    "pinMode": null,
    "digitalWrite": null,
    "digitalRead": null,
    "analogWrite": null,
    "analogRead": null,
    "on": null,
    "off": null,
    "toggle": null,
    "blink": null,
    "pulse": null,
    "stop": null,
    "color": null,
    "intensity": null,
    "led.on": null,
    "led.off": null,
    "led.blink": null,
    "led.toggle": null,
    "led.pulse": null,
    "buzzer.frequency": null,
    "buzzer.note": null,
    "buzzer.off": null,
    "buzzer.stop": null,
    "buzzer.playNotes": null,
    "buzzer.playSong": null,
    "accelerometer.getOrientation": null,
    "accelerometer.getAcceleration": null,
    "isPressed": null,
    "holdtime": null,
    "soundSensor.value": null,
    "soundSensor.getAveragedValue": null,
    "soundSensor.setScale": null,
    "soundSensor.threshold": null,
    "lightSensor.value": null,
    "lightSensor.getAveragedValue": null,
    "lightSensor.setScale": null,
    "lightSensor.threshold": null,
    "tempSensor.F": null,
    "tempSensor.C": null,
    "toggleSwitch.isOpen": null,
    "onBoardEvent": null
  };
  (0, _jquery2.default)('#level_makerlab_enabled').change(function () {
    if ((0, _jquery2.default)(this).is(':checked')) {
      var editor = (0, _jquery2.default)('#level_code_functions').siblings().filter('.CodeMirror')[0].CodeMirror;
      var currentFunctions = JSON.parse(editor.getValue());
      var functionsWithMaker = Object.assign({}, currentFunctions, makerBlocks);
      editor.getDoc().setValue(JSON.stringify(functionsWithMaker, null, ' '));
    }
  });
}); /** @file JavaScript run only on the applab level edit page. */

/***/ })

},[3388]);