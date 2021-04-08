webpackJsonp([43],{

/***/ 3449:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3450);


/***/ }),

/***/ 3450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PublicGallery = __webpack_require__(2972);

var _PublicGallery2 = _interopRequireDefault(_PublicGallery);

var _HeaderBanner = __webpack_require__(2088);

var _HeaderBanner2 = _interopRequireDefault(_HeaderBanner);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _reactRedux = __webpack_require__(53);

var _redux = __webpack_require__(237);

var _projectsRedux = __webpack_require__(2157);

var _projectsRedux2 = _interopRequireDefault(_projectsRedux);

var _projectConstants = __webpack_require__(1148);

var _StartNewProject = __webpack_require__(2829);

var _StartNewProject2 = _interopRequireDefault(_StartNewProject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  var url = '/api/v1/projects/gallery/public/all/' + _projectConstants.MAX_PROJECTS_PER_CATEGORY;

  (0, _redux.registerReducers)({ projects: _projectsRedux2.default });
  _jquery2.default.ajax({
    method: 'GET',
    url: url,
    dataType: 'json'
  }).done(function (projectLists) {
    (0, _redux.getStore)().dispatch((0, _projectsRedux.setProjectLists)(projectLists));
    var publicGallery = document.getElementById('public-gallery');
    _reactDom2.default.render(_react2.default.createElement(
      _reactRedux.Provider,
      { store: (0, _redux.getStore)() },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeaderBanner2.default, {
          headingText: _locale2.default.projects(),
          subHeadingText: _locale2.default.projectsSubHeading(),
          short: true
        }),
        _react2.default.createElement(_StartNewProject2.default, {
          canViewFullList: true,
          canViewAdvancedTools: true
        }),
        _react2.default.createElement(_PublicGallery2.default, null)
      )
    ), publicGallery);
  });
});

/***/ })

},[3449]);