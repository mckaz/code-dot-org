webpackJsonp([55],{

/***/ 3405:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3406);


/***/ }),

/***/ 3406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Main entry point for scripts used only in levelbuilder on when editing
 *       studio-type levels.
 */
var CodeMirror = __webpack_require__(852);

// On page load, specifically for this editor page.
(0, _jquery2.default)(document).ready(function () {
  var jQuerySuccessConditionBox = (0, _jquery2.default)('#level_success_condition');
  if (jQuerySuccessConditionBox.length) {
    CodeMirror.fromTextArea(jQuerySuccessConditionBox.get(0), {
      mode: 'javascript',
      viewportMargin: Infinity,
      matchBrackets: true
    });
  }

  var jQueryFailureConditionBox = (0, _jquery2.default)('#level_failure_condition');
  if (jQueryFailureConditionBox.length) {
    CodeMirror.fromTextArea(jQueryFailureConditionBox.get(0), {
      mode: 'javascript',
      viewportMargin: Infinity,
      matchBrackets: true
    });
  }
});

/***/ })

},[3405]);