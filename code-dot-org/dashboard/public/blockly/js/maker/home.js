webpackJsonp([35],{

/***/ 3476:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3477);


/***/ }),

/***/ 3477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(53);

var _redux = __webpack_require__(237);

var _getScriptData = __webpack_require__(596);

var _getScriptData2 = _interopRequireDefault(_getScriptData);

var _MakerLanding = __webpack_require__(3478);

var _MakerLanding2 = _interopRequireDefault(_MakerLanding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(function () {
  var store = (0, _redux.getStore)();
  var course = (0, _getScriptData2.default)('makerHome').course;

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_MakerLanding2.default, {
      topCourse: course
    })
  ), document.getElementById('maker-home'));
});

/***/ }),

/***/ 3478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _TopCourse = __webpack_require__(2976);

var _TopCourse2 = _interopRequireDefault(_TopCourse);

var _VerticalImageResourceCardRow = __webpack_require__(2977);

var _VerticalImageResourceCardRow2 = _interopRequireDefault(_VerticalImageResourceCardRow);

var _shapes = __webpack_require__(1708);

var _shapes2 = _interopRequireDefault(_shapes);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  title: {
    fontSize: 30
  },
  container: {
    marginBottom: 20
  }
};

var MakerLanding = function (_Component) {
  _inherits(MakerLanding, _Component);

  function MakerLanding() {
    _classCallCheck(this, MakerLanding);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MakerLanding.prototype.render = function render() {
    var topCourse = this.props.topCourse;


    var cards = [{
      title: _locale2.default.makerNewProjectTitle(),
      description: _locale2.default.makerNewProjectDesc(),
      link: '/projects/applab/new?enableMaker=true',
      image: "applab-project",
      buttonText: _locale2.default.makerNewProjectButton()
    }, {
      title: _locale2.default.makerViewProjectsTitle(),
      description: _locale2.default.makerViewProjectsDesc(),
      link: "/projects",
      image: "applab-marketing",
      buttonText: _locale2.default.makerViewProjectsButton()
    }, {
      title: _locale2.default.makerSetupTitle(),
      description: _locale2.default.makerSetupDesc(),
      link: "/maker/setup",
      image: "maker",
      buttonText: _locale2.default.makerSetupButton()
    }];

    return _react2.default.createElement(
      'div',
      { style: styles.container },
      _react2.default.createElement(
        'h1',
        { style: styles.title },
        _locale2.default.makerPageTitle()
      ),
      _react2.default.createElement(_TopCourse2.default, {
        assignableName: topCourse.assignableName,
        lessonName: topCourse.lessonName,
        linkToOverview: topCourse.linkToOverview,
        linkToLesson: topCourse.linkToLesson
      }),
      _react2.default.createElement(_VerticalImageResourceCardRow2.default, {
        cards: cards
      })
    );
  };

  return MakerLanding;
}(_react.Component);

MakerLanding.propTypes = {
  topCourse: _shapes2.default.topCourse
};
exports.default = MakerLanding;
module.exports = exports['default'];

/***/ })

},[3476]);