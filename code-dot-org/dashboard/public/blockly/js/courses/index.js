webpackJsonp([22],{

/***/ 2837:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CourseBlocksAll = exports.CourseBlocksHoc = exports.CourseBlocksCsf = undefined;

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ContentContainer = __webpack_require__(954);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _CourseBlocksTools = __webpack_require__(2993);

var _CourseBlocksTools2 = _interopRequireDefault(_CourseBlocksTools);

var _ProtectedStatefulDiv = __webpack_require__(737);

var _ProtectedStatefulDiv2 = _interopRequireDefault(_ProtectedStatefulDiv);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _urlHelpers = __webpack_require__(784);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseBlocksCsf = exports.CourseBlocksCsf = function (_Component) {
  _inherits(CourseBlocksCsf, _Component);

  function CourseBlocksCsf() {
    _classCallCheck(this, CourseBlocksCsf);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CourseBlocksCsf.prototype.render = function render() {
    if (this.props.isEnglish) {
      return _react2.default.createElement(CourseBlocksCsfEnglish, null);
    } else {
      return _react2.default.createElement(CourseBlocksCsfNonEnglish, null);
    }
  };

  return CourseBlocksCsf;
}(_react.Component);

CourseBlocksCsf.propTypes = {
  isEnglish: _react.PropTypes.bool.isRequired
};

var CourseBlocksCsfEnglish = function (_Component2) {
  _inherits(CourseBlocksCsfEnglish, _Component2);

  function CourseBlocksCsfEnglish() {
    _classCallCheck(this, CourseBlocksCsfEnglish);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  CourseBlocksCsfEnglish.prototype.componentDidMount = function componentDidMount() {
    (0, _jquery2.default)('#coursea').appendTo(_reactDom2.default.findDOMNode(this.refs.coursea)).show();
    (0, _jquery2.default)('#courseb').appendTo(_reactDom2.default.findDOMNode(this.refs.courseb)).show();
    (0, _jquery2.default)('#coursec').appendTo(_reactDom2.default.findDOMNode(this.refs.coursec)).show();
    (0, _jquery2.default)('#coursed').appendTo(_reactDom2.default.findDOMNode(this.refs.coursed)).show();
    (0, _jquery2.default)('#coursee').appendTo(_reactDom2.default.findDOMNode(this.refs.coursee)).show();
    (0, _jquery2.default)('#coursef').appendTo(_reactDom2.default.findDOMNode(this.refs.coursef)).show();
    (0, _jquery2.default)('#pre-express').appendTo(_reactDom2.default.findDOMNode(this.refs.pre_express)).show();
    (0, _jquery2.default)('#express').appendTo(_reactDom2.default.findDOMNode(this.refs.express)).show();
  };

  CourseBlocksCsfEnglish.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.courseBlocksCsfExpressHeading(),
          description: _locale2.default.courseBlocksCsfExpressDescription()
        },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'pre_express' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'express' })
        )
      ),
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.courseBlocksCsfYoungHeading(),
          description: _locale2.default.courseBlocksCsfYoungDescription()
        },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'coursea' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'courseb' })
        )
      ),
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.courseBlocksCsfOlderHeading(),
          description: _locale2.default.courseBlocksCsfOlderDescription()
        },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'coursec' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'coursed' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'coursee' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'coursef' })
        )
      )
    );
  };

  return CourseBlocksCsfEnglish;
}(_react.Component);

var CourseBlocksCsfNonEnglish = function (_Component3) {
  _inherits(CourseBlocksCsfNonEnglish, _Component3);

  function CourseBlocksCsfNonEnglish() {
    _classCallCheck(this, CourseBlocksCsfNonEnglish);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  CourseBlocksCsfNonEnglish.prototype.componentDidMount = function componentDidMount() {
    (0, _jquery2.default)('#course1').appendTo(_reactDom2.default.findDOMNode(this.refs.course1)).show();
    (0, _jquery2.default)('#course2').appendTo(_reactDom2.default.findDOMNode(this.refs.course2)).show();
    (0, _jquery2.default)('#course3').appendTo(_reactDom2.default.findDOMNode(this.refs.course3)).show();
    (0, _jquery2.default)('#course4').appendTo(_reactDom2.default.findDOMNode(this.refs.course4)).show();
    (0, _jquery2.default)('#twenty_hour').appendTo(_reactDom2.default.findDOMNode(this.refs.twenty_hour)).show();
    (0, _jquery2.default)('#unplugged').appendTo(_reactDom2.default.findDOMNode(this.refs.unplugged)).show();
  };

  CourseBlocksCsfNonEnglish.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'course1' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'course2' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'course3' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'course4' })
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'twenty_hour' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'unplugged' })
      )
    );
  };

  return CourseBlocksCsfNonEnglish;
}(_react.Component);

var CourseBlocksHoc = exports.CourseBlocksHoc = function (_Component4) {
  _inherits(CourseBlocksHoc, _Component4);

  function CourseBlocksHoc() {
    _classCallCheck(this, CourseBlocksHoc);

    return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
  }

  CourseBlocksHoc.prototype.componentDidMount = function componentDidMount() {
    (0, _jquery2.default)('#hero').appendTo(_reactDom2.default.findDOMNode(this.refs.hero)).show();
    (0, _jquery2.default)('#starwars').appendTo(_reactDom2.default.findDOMNode(this.refs.starwars)).show();
    (0, _jquery2.default)('#frozen').appendTo(_reactDom2.default.findDOMNode(this.refs.frozen)).show();
    (0, _jquery2.default)('#hourofcode').appendTo(_reactDom2.default.findDOMNode(this.refs.hourofcode)).show();
    (0, _jquery2.default)('#flappy').appendTo(_reactDom2.default.findDOMNode(this.refs.flappy)).show();
    (0, _jquery2.default)('#infinity').appendTo(_reactDom2.default.findDOMNode(this.refs.infinity)).show();
    (0, _jquery2.default)('#playlab').appendTo(_reactDom2.default.findDOMNode(this.refs.playlab)).show();
    (0, _jquery2.default)('#artist').appendTo(_reactDom2.default.findDOMNode(this.refs.artist)).show();
  };

  CourseBlocksHoc.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'hero' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'starwars' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'frozen' }),
        _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'hourofcode' })
      ),
      this.props.rowCount > 1 && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'flappy' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'infinity' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'playlab' }),
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'artist' })
        )
      )
    );
  };

  return CourseBlocksHoc;
}(_react.Component);

CourseBlocksHoc.propTypes = {
  rowCount: _react.PropTypes.number.isRequired
};

var CourseBlocksAll = exports.CourseBlocksAll = function (_Component5) {
  _inherits(CourseBlocksAll, _Component5);

  function CourseBlocksAll() {
    _classCallCheck(this, CourseBlocksAll);

    return _possibleConstructorReturn(this, _Component5.apply(this, arguments));
  }

  CourseBlocksAll.prototype.componentDidMount = function componentDidMount() {
    (0, _jquery2.default)('.csf-courses-header').appendTo(_reactDom2.default.findDOMNode(this.refs.csfCoursesHeader)).show();
  };

  CourseBlocksAll.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.csf(),
          description: _locale2.default.csfDescription(),
          link: '/home/#recent-courses',
          linkText: _locale2.default.viewMyRecentCourses()
        },
        _react2.default.createElement(CourseBlocksCsf, { isEnglish: this.props.isEnglish })
      ),
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.teacherCourseHoc(),
          description: _locale2.default.teacherCourseHocDescription(),
          linkText: _locale2.default.teacherCourseHocLinkText(),
          link: (0, _urlHelpers.pegasus)('/hourofcode/overview')
        },
        _react2.default.createElement(CourseBlocksHoc, { rowCount: 1 })
      ),
      _react2.default.createElement(_CourseBlocksTools2.default, {
        isEnglish: this.props.isEnglish
      })
    );
  };

  return CourseBlocksAll;
}(_react.Component);

CourseBlocksAll.propTypes = {
  isEnglish: _react.PropTypes.bool.isRequired
};

/***/ }),

/***/ 2838:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Code for the Course/Tools Explorer.  Include it once on the page and it will
// handle both CourseExplorer and ToolsExplorer on the same page.

var detailRowShowing = -1;
var toolShowingIndex = -1;

var courseShowingIndex = -1;

module.exports.initCourseExplorer = function () {
  $('.tool').click(function () {
    var row = $(this).data('row');
    var index = $(this).data('index');

    if (toolShowingIndex === -1) {
      $('.detailrow-' + row).slideDown();
      $('.toolsextra-' + index).fadeIn();
      detailRowShowing = row;
      toolShowingIndex = index;
    } else if (toolShowingIndex === index) {
      $('.detailrow-' + detailRowShowing).slideUp();
      $('.toolsextra-' + index).fadeOut();
      detailRowShowing = -1;
      toolShowingIndex = -1;
    } else if (detailRowShowing === row) {
      $('.toolsextra-' + toolShowingIndex).fadeOut();
      $('.toolsextra-' + index).fadeIn();
      toolShowingIndex = index;
    } else {
      $('.detailrow-' + detailRowShowing).slideUp();
      $('.toolsextra-' + toolShowingIndex).fadeOut();
      $('.detailrow-' + row).slideDown();
      $('.toolsextra-' + index).fadeIn();
      detailRowShowing = row;
      toolShowingIndex = index;
    }
  });

  $('.tool_arrow_box_close').click(function () {
    $('.detailrow').slideUp();
    toolShowingIndex = -1;
  });

  $('.course.breakable').click(function () {
    var courseIndex = $(this).attr("data-courseindex");

    // Show the arrows as inline-block instead of .show()'s default inline
    // so that we can apply margin to the top.

    if (courseShowingIndex === -1) {
      $('.courseextra-' + courseIndex).slideDown('slow');
      $('.course-' + courseIndex + ' .arrow-down').hide();
      $('.course-' + courseIndex + ' .arrow-up').css('display', 'inline-block');
      courseShowingIndex = courseIndex;
    } else if (courseShowingIndex === courseIndex) {
      $('.courseextra-' + courseIndex).slideUp('slow');
      $('.course-' + courseIndex + ' .arrow-down').css('display', 'inline-block');
      $('.course-' + courseIndex + ' .arrow-up').hide();
      courseShowingIndex = -1;
    } else {
      $('.courseextra-' + courseShowingIndex).slideUp('slow');
      $('.course-' + courseShowingIndex + ' .arrow-down').css('display', 'inline-block');
      $('.course-' + courseShowingIndex + ' .arrow-up').hide();
      $('.courseextra-' + courseIndex).slideDown('slow');
      $('.course-' + courseIndex + ' .arrow-down').hide();
      $('.course-' + courseIndex + ' .arrow-up').css('display', 'inline-block');
      courseShowingIndex = courseIndex;
    }
  });

  $('.arrow_box_close').click(function () {
    var courseIndex = $(this).attr("data-courseindex");
    $('.courseextra-' + courseIndex).slideUp();
    $('.course-' + courseIndex + ' .arrow-down').css('display', 'inline-block');
    $('.course-' + courseIndex + ' .arrow-up').hide();
    courseShowingIndex = -1;
  });
};

/***/ }),

/***/ 2993:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _radium = __webpack_require__(83);

var _radium2 = _interopRequireDefault(_radium);

var _ContentContainer = __webpack_require__(954);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _ResourceCard = __webpack_require__(2162);

var _ResourceCard2 = _interopRequireDefault(_ResourceCard);

var _ResourceCardResponsiveContainer = __webpack_require__(2160);

var _ResourceCardResponsiveContainer2 = _interopRequireDefault(_ResourceCardResponsiveContainer);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _urlHelpers = __webpack_require__(784);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseBlocksTools = function (_Component) {
  _inherits(CourseBlocksTools, _Component);

  function CourseBlocksTools() {
    var _temp, _this, _ret;

    _classCallCheck(this, CourseBlocksTools);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.cards = [{
      heading: _locale2.default.courseBlocksToolsAppLab(),
      description: _locale2.default.courseBlocksToolsAppLabDescription(),
      path: 'applab'
    }, {
      heading: _locale2.default.courseBlocksToolsGameLab(),
      description: _locale2.default.courseBlocksToolsGameLabDescription(),
      path: 'gamelab'
    }, {
      heading: _locale2.default.courseBlocksToolsWebLab(),
      description: _locale2.default.courseBlocksToolsWebLabDescription(),
      path: 'weblab'
    }, {
      heading: _locale2.default.courseBlocksToolsWidgets(),
      description: _locale2.default.courseBlocksToolsWidgetsDescription(),
      path: 'widgets'
    }, {
      heading: _locale2.default.courseBlocksToolsInspire(),
      description: _locale2.default.courseBlocksToolsInspireDescription(),
      path: 'inspire'
    }, {
      heading: _locale2.default.courseBlocksToolsVideo(),
      description: _locale2.default.courseBlocksToolsVideoDescription(),
      path: 'videos'
    }], _temp), _possibleConstructorReturn(_this, _ret);
  }

  CourseBlocksTools.prototype.render = function render() {
    var isEnglish = this.props.isEnglish;


    var headingText = isEnglish ? _locale2.default.courseBlocksToolsTitleTeacher() : _locale2.default.courseBlocksToolsTitleNonEn();

    return _react2.default.createElement(
      _ContentContainer2.default,
      {
        heading: headingText,
        description: _locale2.default.standaloneToolsDescription()
      },
      _react2.default.createElement(
        _ResourceCardResponsiveContainer2.default,
        null,
        this.cards.map(function (card, cardIndex) {
          return _react2.default.createElement(_ResourceCard2.default, {
            key: cardIndex,
            title: card.heading,
            description: card.description,
            buttonText: _locale2.default.learnMore(),
            link: (0, _urlHelpers.pegasus)('/' + card.path)
          });
        })
      )
    );
  };

  return CourseBlocksTools;
}(_react.Component);

CourseBlocksTools.propTypes = {
  isEnglish: _react.PropTypes.bool.isRequired
};
exports.default = (0, _radium2.default)(CourseBlocksTools);
module.exports = exports['default'];

/***/ }),

/***/ 3579:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3580);


/***/ }),

/***/ 3580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(53);

var _Courses = __webpack_require__(3581);

var _Courses2 = _interopRequireDefault(_Courses);

var _courseExplorer = __webpack_require__(2838);

var _redux = __webpack_require__(787);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(showCourses);

function showCourses() {
  // Initialize the non-React Course/Tool Explorer component code.
  (0, _courseExplorer.initCourseExplorer)();

  var script = document.querySelector('script[data-courses]');
  var coursesData = JSON.parse(script.dataset.courses);
  var isEnglish = coursesData.english;
  var isTeacher = coursesData.teacher;
  var linesCount = coursesData.linescount;
  var studentsCount = coursesData.studentscount;
  var codeOrgUrlPrefix = coursesData.codeorgurlprefix;
  var signedOut = coursesData.signedout;
  var showInitialTips = !coursesData.initialtipsdismissed;
  var userId = coursesData.userid;

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: (0, _redux.getStore)() },
    _react2.default.createElement(_Courses2.default, {
      isEnglish: isEnglish,
      isTeacher: isTeacher,
      linesCount: linesCount,
      studentsCount: studentsCount,
      codeOrgUrlPrefix: codeOrgUrlPrefix,
      isSignedOut: signedOut,
      showInitialTips: showInitialTips,
      userId: userId
    })
  ), document.getElementById('courses-container'));
}

/***/ }),

/***/ 3581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _HeaderBanner = __webpack_require__(2088);

var _HeaderBanner2 = _interopRequireDefault(_HeaderBanner);

var _CourseBlocks = __webpack_require__(2837);

var _CoursesTeacherEnglish = __webpack_require__(3582);

var _CoursesTeacherEnglish2 = _interopRequireDefault(_CoursesTeacherEnglish);

var _CoursesStudentEnglish = __webpack_require__(3584);

var _CoursesStudentEnglish2 = _interopRequireDefault(_CoursesStudentEnglish);

var _ProtectedStatefulDiv = __webpack_require__(737);

var _ProtectedStatefulDiv2 = _interopRequireDefault(_ProtectedStatefulDiv);

var _TwoColumnActionBlock = __webpack_require__(1709);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  content: {
    width: '100%',
    maxWidth: _styleConstants2.default['content-width'],
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

var Courses = function (_Component) {
  _inherits(Courses, _Component);

  function Courses() {
    _classCallCheck(this, Courses);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Courses.prototype.componentDidMount = function componentDidMount() {
    // The components used here are implemented in legacy HAML/CSS rather than React.
    (0, _jquery2.default)('#flashes').appendTo(_reactDom2.default.findDOMNode(this.refs.flashes)).show();
  };

  Courses.prototype.render = function render() {
    var _props = this.props,
        isEnglish = _props.isEnglish,
        isTeacher = _props.isTeacher,
        isSignedOut = _props.isSignedOut,
        userId = _props.userId,
        showInitialTips = _props.showInitialTips;

    var headingText = isTeacher ? _locale2.default.coursesHeadingTeacher() : _locale2.default.coursesHeadingStudent();
    var subHeadingText = _locale2.default.coursesHeadingSubText({ linesCount: this.props.linesCount, studentsCount: this.props.studentsCount });
    var headingDescription = isSignedOut ? _locale2.default.coursesHeadingDescription() : null;

    return _react2.default.createElement(
      'div',
      { style: styles.content },
      _react2.default.createElement(
        _HeaderBanner2.default,
        {
          headingText: headingText,
          subHeadingText: subHeadingText,
          description: headingDescription,
          short: !isSignedOut
        },
        isSignedOut && _react2.default.createElement(_Button2.default, {
          href: '/users/sign_up',
          color: _Button2.default.ButtonColor.gray,
          text: _locale2.default.createAccount()
        })
      ),
      _react2.default.createElement(_ProtectedStatefulDiv2.default, {
        ref: 'flashes'
      }),
      isEnglish && isTeacher && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TwoColumnActionBlock.SpecialAnnouncementActionBlock, null),
        _react2.default.createElement(_CoursesTeacherEnglish2.default, {
          isSignedOut: isSignedOut,
          showInitialTips: showInitialTips,
          userId: userId
        })
      ),
      isEnglish && !isTeacher && _react2.default.createElement(_CoursesStudentEnglish2.default, null),
      !isEnglish && _react2.default.createElement(_CourseBlocks.CourseBlocksAll, {
        isEnglish: false
      })
    );
  };

  return Courses;
}(_react.Component);

Courses.propTypes = {
  isEnglish: _react.PropTypes.bool.isRequired,
  isTeacher: _react.PropTypes.bool.isRequired,
  isSignedOut: _react.PropTypes.bool.isRequired,
  linesCount: _react.PropTypes.string.isRequired,
  studentsCount: _react.PropTypes.string.isRequired,
  showInitialTips: _react.PropTypes.bool.isRequired,
  userId: _react.PropTypes.number
};
exports.default = Courses;
module.exports = exports['default'];

/***/ }),

/***/ 3582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ContentContainer = __webpack_require__(954);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _UiTips = __webpack_require__(2989);

var _UiTips2 = _interopRequireDefault(_UiTips);

var _TwoColumnActionBlock = __webpack_require__(1709);

var _CourseBlocks = __webpack_require__(2837);

var _CourseBlocksTools = __webpack_require__(2993);

var _CourseBlocksTools2 = _interopRequireDefault(_CourseBlocksTools);

var _CourseBlocksTeacherGradeBands = __webpack_require__(3583);

var _CourseBlocksTeacherGradeBands2 = _interopRequireDefault(_CourseBlocksTeacherGradeBands);

var _ProtectedStatefulDiv = __webpack_require__(737);

var _ProtectedStatefulDiv2 = _interopRequireDefault(_ProtectedStatefulDiv);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _urlHelpers = __webpack_require__(784);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is the main content for the Courses page for a teacher using English,
 * though it may also be shown for a signed-out user using English.
 */
var CoursesTeacherEnglish = function (_Component) {
  _inherits(CoursesTeacherEnglish, _Component);

  function CoursesTeacherEnglish() {
    _classCallCheck(this, CoursesTeacherEnglish);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CoursesTeacherEnglish.prototype.componentDidMount = function componentDidMount() {
    // The components used here are implemented in legacy HAML/CSS rather than React.
    (0, _jquery2.default)('.courseexplorer').appendTo(_reactDom2.default.findDOMNode(this.refs.courseExplorer)).show();
  };

  CoursesTeacherEnglish.prototype.render = function render() {
    var _props = this.props,
        isSignedOut = _props.isSignedOut,
        showInitialTips = _props.showInitialTips,
        userId = _props.userId;

    return _react2.default.createElement(
      'div',
      null,
      !isSignedOut && _react2.default.createElement(_UiTips2.default, {
        userId: userId,
        tipId: "teacher_courses",
        showInitialTips: showInitialTips,
        tips: [{
          type: "initial",
          position: { top: 0, left: 0, position: "relative" },
          text: _locale2.default.coursesUiTipsTeacherCourses(),
          arrowDirection: "down",
          scrollTo: ".courseexplorer"
        }]
      }),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _ContentContainer2.default,
          {
            heading: _locale2.default.courseExplorerHeading(),
            description: _locale2.default.courseExplorerDescription(),
            link: '/home/#recent-courses',
            linkText: _locale2.default.viewMyRecentCourses()
          },
          _react2.default.createElement(_ProtectedStatefulDiv2.default, { ref: 'courseExplorer' })
        ),
        _react2.default.createElement(_CourseBlocksTeacherGradeBands2.default, null),
        _react2.default.createElement(
          _ContentContainer2.default,
          {
            heading: _locale2.default.teacherCourseHoc(),
            description: _locale2.default.teacherCourseHocDescription(),
            linkText: _locale2.default.teacherCourseHocLinkText(),
            link: (0, _urlHelpers.pegasus)('/hourofcode/overview'),
            showLink: true
          },
          _react2.default.createElement(_CourseBlocks.CourseBlocksHoc, { rowCount: 1 })
        ),
        _react2.default.createElement(_CourseBlocksTools2.default, {
          isEnglish: true
        }),
        _react2.default.createElement(_TwoColumnActionBlock.AdministratorResourcesActionBlock, null)
      )
    );
  };

  return CoursesTeacherEnglish;
}(_react.Component);

CoursesTeacherEnglish.propTypes = {
  isSignedOut: _react.PropTypes.bool.isRequired,
  showInitialTips: _react.PropTypes.bool.isRequired,
  userId: _react.PropTypes.number
};
exports.default = CoursesTeacherEnglish;
module.exports = exports['default'];

/***/ }),

/***/ 3583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ContentContainer = __webpack_require__(954);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _CourseBlocksGradeBands = __webpack_require__(2992);

var _CourseBlocksGradeBands2 = _interopRequireDefault(_CourseBlocksGradeBands);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseBlocksTeacherGradeBands = function (_Component) {
  _inherits(CourseBlocksTeacherGradeBands, _Component);

  function CourseBlocksTeacherGradeBands() {
    var _temp, _this, _ret;

    _classCallCheck(this, CourseBlocksTeacherGradeBands);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.cards = [{
      linkId: 'course-block-grade-band-elementary',
      linkClass: 'linktag',
      heading: _locale2.default.courseBlocksGradeBandsElementary(),
      description: _locale2.default.courseBlocksGradeBandsElementaryDescription(),
      path: '/educate/curriculum/elementary-school'
    }, {
      linkId: 'course-block-grade-band-middle',
      linkClass: 'linktag',
      heading: _locale2.default.courseBlocksGradeBandsMiddle(),
      description: _locale2.default.courseBlocksGradeBandsMiddleDescription(),
      path: '/educate/curriculum/middle-school'
    }, {
      linkId: 'course-block-grade-band-high',
      linkClass: 'linktag',
      heading: _locale2.default.courseBlocksGradeBandsHigh(),
      description: _locale2.default.courseBlocksGradeBandsHighDescription(),
      path: '/educate/curriculum/high-school'
    }], _temp), _possibleConstructorReturn(_this, _ret);
  }

  CourseBlocksTeacherGradeBands.prototype.render = function render() {
    return _react2.default.createElement(
      _ContentContainer2.default,
      {
        heading: _locale2.default.courseBlocksGradeBandsContainerHeading(),
        description: _locale2.default.courseBlocksGradeBandsContainerDescription()
      },
      _react2.default.createElement(_CourseBlocksGradeBands2.default, {
        cards: this.cards
      })
    );
  };

  return CourseBlocksTeacherGradeBands;
}(_react.Component);

exports.default = CourseBlocksTeacherGradeBands;
module.exports = exports['default'];

/***/ }),

/***/ 3584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ContentContainer = __webpack_require__(954);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _TwoColumnActionBlock = __webpack_require__(1709);

var _CourseBlocks = __webpack_require__(2837);

var _CourseBlocksStudentGradeBands = __webpack_require__(2991);

var _CourseBlocksStudentGradeBands2 = _interopRequireDefault(_CourseBlocksStudentGradeBands);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _urlHelpers = __webpack_require__(784);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is the main content for the Courses page for a student using English,
 * as well as the default for a signed-out user using English.
 */
var CoursesStudentEnglish = function (_Component) {
  _inherits(CoursesStudentEnglish, _Component);

  function CoursesStudentEnglish() {
    _classCallCheck(this, CoursesStudentEnglish);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CoursesStudentEnglish.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_CourseBlocksStudentGradeBands2.default, {
        showContainer: true,
        hideBottomMargin: false
      }),
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.teacherCourseHoc(),
          description: _locale2.default.teacherCourseHocDescription(),
          linkText: _locale2.default.teacherCourseHocLinkText(),
          link: (0, _urlHelpers.pegasus)('/hourofcode/overview')
        },
        _react2.default.createElement(_CourseBlocks.CourseBlocksHoc, { rowCount: 1 })
      ),
      _react2.default.createElement(_TwoColumnActionBlock.LocalClassActionBlock, {
        showHeading: true
      })
    );
  };

  return CoursesStudentEnglish;
}(_react.Component);

exports.default = CoursesStudentEnglish;
module.exports = exports['default'];

/***/ })

},[3579]);