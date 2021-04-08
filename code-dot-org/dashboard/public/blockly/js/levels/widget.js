webpackJsonp([44],{

/***/ 3429:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3430);


/***/ }),

/***/ 3430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showInstructionsDialog = showInstructionsDialog;

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _dialogHelper = __webpack_require__(1747);

var _codeStudioLevels = __webpack_require__(738);

var _loadApp = __webpack_require__(820);

var _LegacyDialogContents = __webpack_require__(1130);

var _marked = __webpack_require__(732);

var _marked2 = _interopRequireDefault(_marked);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file JavaScript loaded in all Widget-type levels.
 */
/* global appOptions */
function showInstructionsDialog() {
  var content = void 0;
  if (appOptions.level.markdownInstructions) {
    content = (0, _marked2.default)(appOptions.level.markdownInstructions);
  }
  (0, _dialogHelper.showDialog)(_react2.default.createElement(_LegacyDialogContents.InstructionsDialog, {
    title: _locale2.default.puzzleTitle({
      stage_total: appOptions.level.stage_total,
      puzzle_number: appOptions.level.puzzle_number
    }),
    markdownContent: content
  }));
  (0, _jquery2.default)('details').details();
}

function setupWidgetLevel() {
  window.script_path = location.pathname;
  (0, _loadApp.setupApp)(appOptions);

  appOptions.showInstructionsWrapper(showInstructionsDialog);
  (0, _codeStudioLevels.registerGetResult)();
  window.options = appOptions.level;
}

// Add globals
window.CodeMirror = __webpack_require__(852);
window.dashboard = window.dashboard || {};
window.dashboard.widget = {
  setupWidgetLevel: setupWidgetLevel,
  // used by pixelation widget
  showStartOverDialog: function showStartOverDialog(callback) {
    return (0, _dialogHelper.showDialog)(_react2.default.createElement(_LegacyDialogContents.StartOverDialog, null), callback);
  },
  // used by frequency, vigenere, and pixelation widgets
  processResults: _dialogHelper.processResults
};

// On load (note - widget-specific setup may happen before this!)
(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)('#bubble').click(showInstructionsDialog);
});

/***/ })

},[3429]);