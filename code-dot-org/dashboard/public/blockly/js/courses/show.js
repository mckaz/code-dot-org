webpackJsonp([25],{

/***/ 3585:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3586);


/***/ }),

/***/ 3586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(53);

var _CourseOverview = __webpack_require__(3587);

var _CourseOverview2 = _interopRequireDefault(_CourseOverview);

var _viewAsRedux = __webpack_require__(499);

var _redux = __webpack_require__(787);

var _teacherSectionsRedux = __webpack_require__(731);

var _clientState = __webpack_require__(762);

var _clientState2 = _interopRequireDefault(_clientState);

var _hiddenStageRedux = __webpack_require__(771);

var _progressRedux = __webpack_require__(498);

var _initSigninState = __webpack_require__(2154);

var _verifiedTeacherRedux = __webpack_require__(960);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(showCourseOverview);

function showCourseOverview() {
  var script = document.querySelector('script[data-courses-show]');
  var scriptData = JSON.parse(script.dataset.coursesShow);
  var courseSummary = scriptData.course_summary;
  var isTeacher = scriptData.is_teacher;

  var teacherResources = (courseSummary.teacher_resources || []).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        type = _ref2[0],
        link = _ref2[1];

    return { type: type, link: link };
  });
  var store = (0, _redux.getStore)();

  if (courseSummary.has_verified_resources) {
    store.dispatch((0, _verifiedTeacherRedux.setVerifiedResources)());
  }

  store.dispatch((0, _progressRedux.setUserSignedIn)((0, _initSigninState.getUserSignedInFromCookieAndDom)()));

  if (isTeacher) {
    store.dispatch((0, _viewAsRedux.setViewType)(_viewAsRedux.ViewType.Teacher));
    store.dispatch((0, _teacherSectionsRedux.setSections)(scriptData.sections));

    if (scriptData.is_verified_teacher) {
      store.dispatch((0, _verifiedTeacherRedux.setVerified)());
    }

    var sectionId = _clientState2.default.queryParams('section_id');
    if (sectionId) {
      store.dispatch((0, _teacherSectionsRedux.selectSection)(sectionId));
    }
  }

  if (scriptData.hidden_scripts) {
    store.dispatch((0, _hiddenStageRedux.initializeHiddenScripts)(scriptData.hidden_scripts));
  }

  // Eventually we want to do this all via redux
  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_CourseOverview2.default, {
      title: courseSummary.title,
      id: courseSummary.id,
      descriptionStudent: courseSummary.description_student,
      descriptionTeacher: courseSummary.description_teacher,
      sectionsInfo: scriptData.sections,
      teacherResources: teacherResources,
      isTeacher: isTeacher,
      viewAs: _viewAsRedux.ViewType.Teacher,
      scripts: courseSummary.scripts,
      isVerifiedTeacher: !!scriptData.is_verified_teacher,
      hasVerifiedResources: !!courseSummary.has_verified_resources
    })
  ), document.getElementById('course_overview'));
}

/***/ }),

/***/ 3587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _viewAsRedux = __webpack_require__(499);

var _CourseScript = __webpack_require__(3588);

var _CourseScript2 = _interopRequireDefault(_CourseScript);

var _CourseOverviewTopRow = __webpack_require__(2994);

var _CourseOverviewTopRow2 = _interopRequireDefault(_CourseOverviewTopRow);

var _resourceType = __webpack_require__(927);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

var _VerifiedResourcesNotification = __webpack_require__(3590);

var _VerifiedResourcesNotification2 = _interopRequireDefault(_VerifiedResourcesNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  main: {
    width: _styleConstants2.default['content-width']
  },
  description: {
    marginBottom: 20
  }
};

var CourseOverview = function (_Component) {
  _inherits(CourseOverview, _Component);

  function CourseOverview() {
    _classCallCheck(this, CourseOverview);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CourseOverview.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        id = _props.id,
        descriptionStudent = _props.descriptionStudent,
        descriptionTeacher = _props.descriptionTeacher,
        sectionsInfo = _props.sectionsInfo,
        teacherResources = _props.teacherResources,
        isTeacher = _props.isTeacher,
        viewAs = _props.viewAs,
        scripts = _props.scripts,
        isVerifiedTeacher = _props.isVerifiedTeacher,
        hasVerifiedResources = _props.hasVerifiedResources;

    // We currently set .container.main to have a width of 940 at a pretty high
    // level and are not comfortable moving it to 970 across the board yet. The
    // hack below makes it so that this component will be 970px and centered
    // properly. It can be removed if/when we fix .container.main

    var mainStyle = _extends({}, styles.main, {
      marginLeft: ((0, _jquery2.default)(".container.main").width() - _styleConstants2.default['content-width']) / 2
    });
    var showNotification = viewAs === _viewAsRedux.ViewType.Teacher && isTeacher && !isVerifiedTeacher && hasVerifiedResources;

    return _react2.default.createElement(
      'div',
      { style: mainStyle },
      _react2.default.createElement(
        'h1',
        null,
        title
      ),
      _react2.default.createElement(
        'div',
        { style: styles.description },
        viewAs === _viewAsRedux.ViewType.Student ? descriptionStudent : descriptionTeacher
      ),
      showNotification && _react2.default.createElement(_VerifiedResourcesNotification2.default, null),
      isTeacher && _react2.default.createElement(_CourseOverviewTopRow2.default, {
        sectionsInfo: sectionsInfo,
        id: id,
        title: title,
        resources: teacherResources
      }),
      scripts.map(function (script, index) {
        return _react2.default.createElement(_CourseScript2.default, {
          key: index,
          title: script.title,
          name: script.name,
          id: script.id,
          description: script.description
        });
      })
    );
  };

  return CourseOverview;
}(_react.Component);

CourseOverview.propTypes = {
  title: _react.PropTypes.string.isRequired,
  id: _react.PropTypes.number.isRequired,
  descriptionStudent: _react.PropTypes.string,
  descriptionTeacher: _react.PropTypes.string,
  sectionsInfo: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.number.isRequired,
    name: _react.PropTypes.string.isRequired
  })).isRequired,
  teacherResources: _react.PropTypes.arrayOf(_resourceType.resourceShape).isRequired,
  isTeacher: _react.PropTypes.bool.isRequired,
  viewAs: _react.PropTypes.oneOf(Object.values(_viewAsRedux.ViewType)).isRequired,
  scripts: _react.PropTypes.array.isRequired,
  isVerifiedTeacher: _react.PropTypes.bool.isRequired,
  hasVerifiedResources: _react.PropTypes.bool.isRequired
};
exports.default = CourseOverview;
module.exports = exports['default'];

/***/ }),

/***/ 3588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedCourseScript = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _CourseScriptTeacherInfo = __webpack_require__(3589);

var _CourseScriptTeacherInfo2 = _interopRequireDefault(_CourseScriptTeacherInfo);

var _viewAsRedux = __webpack_require__(499);

var _hiddenStageRedux = __webpack_require__(771);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  main: {
    display: 'table',
    width: '100%',
    height: '100%',
    background: _color2.default.background_gray,
    borderWidth: 1,
    borderColor: _color2.default.border_gray,
    borderStyle: 'solid',
    borderRadius: 2,
    marginBottom: 12
  },
  content: {
    padding: 20
  },
  description: {
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontFamily: '"Gotham 5r", sans-serif'
  },
  // TODO: share better with ProgressLesson
  hidden: {
    borderStyle: 'dashed',
    borderWidth: 4,
    marginTop: 0,
    marginBottom: 12,
    marginLeft: 0,
    marginRight: 0
  }
};

var CourseScript = function (_Component) {
  _inherits(CourseScript, _Component);

  function CourseScript() {
    var _temp, _this, _ret;

    _classCallCheck(this, CourseScript);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onClickHiddenToggle = function (value) {
      var _this$props = _this.props,
          name = _this$props.name,
          selectedSectionId = _this$props.selectedSectionId,
          id = _this$props.id,
          toggleHiddenScript = _this$props.toggleHiddenScript;

      toggleHiddenScript(name, selectedSectionId, id, value === 'hidden');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CourseScript.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        name = _props.name,
        id = _props.id,
        description = _props.description,
        viewAs = _props.viewAs,
        selectedSectionId = _props.selectedSectionId,
        hiddenStageState = _props.hiddenStageState,
        hasNoSections = _props.hasNoSections;


    var isHidden = (0, _hiddenStageRedux.isScriptHiddenForSection)(hiddenStageState, selectedSectionId, id);

    if (isHidden && viewAs === _viewAsRedux.ViewType.Student) {
      return null;
    }

    return _react2.default.createElement(
      'div',
      {
        style: _extends({}, styles.main, isHidden && styles.hidden),
        className: 'uitest-CourseScript'
      },
      _react2.default.createElement(
        'div',
        { style: styles.content },
        _react2.default.createElement(
          'div',
          { style: styles.title },
          title
        ),
        _react2.default.createElement(
          'div',
          { style: styles.description },
          description
        ),
        _react2.default.createElement(_Button2.default, {
          text: _locale2.default.goToUnit(),
          href: '/s/' + name + location.search,
          color: _Button2.default.ButtonColor.gray,
          className: 'uitest-go-to-unit-button'
        })
      ),
      viewAs === _viewAsRedux.ViewType.Teacher && !hasNoSections && _react2.default.createElement(_CourseScriptTeacherInfo2.default, {
        disabled: !selectedSectionId,
        isHidden: isHidden,
        onToggleHiddenScript: this.onClickHiddenToggle
      })
    );
  };

  return CourseScript;
}(_react.Component);

CourseScript.propTypes = {
  title: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string,
  id: _react.PropTypes.number.isRequired,
  description: _react.PropTypes.string,

  // redux provided
  viewAs: _react.PropTypes.oneOf(Object.values(_viewAsRedux.ViewType)).isRequired,
  selectedSectionId: _react.PropTypes.string.isRequired,
  hiddenStageState: _react.PropTypes.object.isRequired,
  hasNoSections: _react.PropTypes.bool.isRequired,
  toggleHiddenScript: _react.PropTypes.func.isRequired
};
var UnconnectedCourseScript = exports.UnconnectedCourseScript = CourseScript;

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    viewAs: state.viewAs,
    selectedSectionId: state.teacherSections.selectedSectionId,
    hiddenStageState: state.hiddenStage,
    hasNoSections: state.teacherSections.sectionsAreLoaded && state.teacherSections.sectionIds.length === 0
  };
}, { toggleHiddenScript: _hiddenStageRedux.toggleHiddenScript })(CourseScript);

/***/ }),

/***/ 3589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactTooltip = __webpack_require__(779);

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _lodash = __webpack_require__(82);

var _lodash2 = _interopRequireDefault(_lodash);

var _TeacherInfoBox = __webpack_require__(1720);

var _TeacherInfoBox2 = _interopRequireDefault(_TeacherInfoBox);

var _HiddenForSectionToggle = __webpack_require__(1719);

var _HiddenForSectionToggle2 = _interopRequireDefault(_HiddenForSectionToggle);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseScriptTeacherInfo = function (_Component) {
  _inherits(CourseScriptTeacherInfo, _Component);

  function CourseScriptTeacherInfo() {
    _classCallCheck(this, CourseScriptTeacherInfo);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CourseScriptTeacherInfo.prototype.render = function render() {
    var _props = this.props,
        disabled = _props.disabled,
        isHidden = _props.isHidden,
        onToggleHiddenScript = _props.onToggleHiddenScript;

    // Note: Students should always have no (owned) sections

    var tooltipId = _lodash2.default.uniqueId();

    return _react2.default.createElement(
      _TeacherInfoBox2.default,
      null,
      _react2.default.createElement(
        'div',
        {
          'data-tip': true,
          'data-for': tooltipId,
          'aria-describedby': tooltipId
        },
        _react2.default.createElement(_HiddenForSectionToggle2.default, {
          hidden: isHidden,
          disabled: disabled,
          onChange: onToggleHiddenScript
        })
      ),
      _react2.default.createElement(
        _reactTooltip2.default,
        {
          id: tooltipId,
          role: 'tooltip',
          wrapper: 'span',
          effect: 'solid',
          disable: !disabled
        },
        _locale2.default.hiddenScriptTooltip()
      )
    );
  };

  return CourseScriptTeacherInfo;
}(_react.Component);

CourseScriptTeacherInfo.propTypes = {
  disabled: _react.PropTypes.bool.isRequired,
  isHidden: _react.PropTypes.bool.isRequired,
  onToggleHiddenScript: _react.PropTypes.func.isRequired
};
exports.default = CourseScriptTeacherInfo;
module.exports = exports['default'];

/***/ }),

/***/ 3590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = VerifiedResourcesNotification;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Notification = __webpack_require__(815);

var _Notification2 = _interopRequireDefault(_Notification);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VerifiedResourcesNotification(_ref) {
  var width = _ref.width;

  return _react2.default.createElement(_Notification2.default, {
    type: _Notification.NotificationType.information,
    notice: _locale2.default.verifiedResourcesNotice(),
    details: _locale2.default.verifiedResourcesDetails(),
    buttonText: _locale2.default.learnMore(),
    buttonLink: 'https://support.code.org/hc/en-us/articles/115001550131',
    dismissible: true,
    width: width
  });
}
VerifiedResourcesNotification.propTypes = {
  width: _react.PropTypes.number
};
module.exports = exports['default'];

/***/ })

},[3585]);