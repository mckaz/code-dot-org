webpackJsonp([54],{

/***/ 3411:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3412);


/***/ }),

/***/ 3412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _codeStudioLevels = __webpack_require__(738);

var _postOnLoad = __webpack_require__(2828);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _codeStudioLevels.registerGetResult)();

  // make milestone post
  (0, _postOnLoad.postMilestoneForPageLoad)();

  // handle click on continue (results in navigating to next puzzle)
  (0, _jquery2.default)(".submitButton").click(_postOnLoad.onContinue);
});

/**
 * Called on load of our iframe. This hides the spinner, shows the iframe, and
 * sets up a method to keep our iframe correctly sized.
 */
function onload() {
  var iframe = document.getElementById('curriculum-reference');
  // For some reaosn onload is called multiple times in Chrome. We only want to
  // start our interval once.
  if (iframe.style.display !== 'none') {
    return;
  }

  // Make iframe visible, hide spinner
  iframe.style.display = '';
  document.getElementById('iframe-loading').style.display = 'none';

  // Our iframe can resize for various reasons (initial load, images loaded on
  // iframe page, window resized). We want to keep the size of the iframe in
  // sync with the contents of the firame.
  setInterval(function () {
    resizeIFrame(iframe);
  }, 200);
}

function resizeIFrame(iframe) {
  var doc = iframe.contentWindow.document;
  var height = doc.body.scrollHeight;
  iframe.height = height;
}

window.curriculumReference = { onload: onload };

/***/ })

},[3411]);