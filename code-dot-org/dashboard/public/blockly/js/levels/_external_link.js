webpackJsonp([52],{

/***/ 3431:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3432);


/***/ }),

/***/ 3432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dialogHelper = __webpack_require__(1747);

var _codeStudioLevels = __webpack_require__(738);

(0, _codeStudioLevels.registerGetResult)();

$(document).on('click', '.submitButton', function () {
  var submitButton = $('.submitButton');
  if (submitButton.attr('disabled')) {
    return;
  }
  // Avoid multiple simultaneous submissions.
  submitButton.attr('disabled', true);
  (0, _dialogHelper.processResults)();
});

/***/ })

},[3431]);