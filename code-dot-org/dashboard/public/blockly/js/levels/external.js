webpackJsonp([47],{

/***/ 3417:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3418);


/***/ }),

/***/ 3418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _codeStudioLevels = __webpack_require__(738);

var _postOnLoad = __webpack_require__(2828);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  embedDiscourseForum();

  var script = document.querySelector('script[data-external]');
  var data = JSON.parse(script.dataset.external);

  // If this is in a level group, we dont need to do anything special for
  // milestone requests
  if (data.in_level_group) {
    return;
  }

  (0, _codeStudioLevels.registerGetResult)();

  // make milestone post
  (0, _postOnLoad.postMilestoneForPageLoad)();

  // handle click on continue (results in navigating to next puzzle)
  (0, _jquery2.default)(".submitButton").click(_postOnLoad.onContinue);
});

// Embed a forum thread in an External level by adding <div id='discourse-comments' /> anywhere in the page html
function embedDiscourseForum() {
  if ((0, _jquery2.default)('#discourse-comments')[0]) {
    window.discourseUrl = location.hostname === 'studio.code.org' ? '//forum.code.org/' : '//discourse.code.org/';
    window.discourseEmbedUrl = [location.protocol, '//', location.host, location.pathname].join('');
    (function () {
      var d = document.createElement('script');d.type = 'text/javascript';d.async = true;
      d.src = window.discourseUrl + 'javascripts/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
    })();
  }
}

/***/ })

},[3417]);