webpackJsonp([50],{

/***/ 3415:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3416);


/***/ }),

/***/ 3416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _codeStudioLevels = __webpack_require__(738);

var _postOnLoad = __webpack_require__(2828);

var _videos = __webpack_require__(964);

var _getScriptData = __webpack_require__(596);

var _getScriptData2 = _interopRequireDefault(_getScriptData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _codeStudioLevels.registerGetResult)();

  // make milestone post
  (0, _postOnLoad.postMilestoneForPageLoad)();

  // handle click on continue (results in navigating to next puzzle)
  (0, _jquery2.default)(".submitButton").click(_postOnLoad.onContinue);

  // Support toggling between notes and video.
  var showNotes = (0, _jquery2.default)(".show-notes");
  var showVideo = (0, _jquery2.default)(".show-video");
  var notes = (0, _jquery2.default)(".notes-content");
  var video = (0, _jquery2.default)(".video-content");

  showNotes.click(function () {
    showNotes.hide();
    showVideo.show();

    notes.show();
    video.hide();

    return false;
  });

  showVideo.click(function () {
    showNotes.show();
    showVideo.hide();

    notes.hide();
    video.show();

    return false;
  });

  var videoOptions = (0, _getScriptData2.default)('videoOptions');
  var videoWidth = (0, _getScriptData2.default)('videoWidth');
  var videoHeight = (0, _getScriptData2.default)('videoHeight');
  (0, _videos.createVideoWithFallback)((0, _jquery2.default)('.video-content'), videoOptions, videoWidth, videoHeight);
});

/***/ })

},[3415]);