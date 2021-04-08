webpackJsonp([8],{

/***/ 1752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading3 = exports.h3Style = exports.Heading2 = exports.h2Style = exports.Heading1 = exports.h1Style = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @file Reusable heading components for the 2017 dashboard redesign */


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseHeadingStyle = {
  display: 'block',
  fontFamily: '"Gotham 5r", sans-serif',
  fontWeight: 'normal',
  margin: '10px 0',
  color: _color2.default.dark_charcoal
};

var h1Style = exports.h1Style = _extends({}, baseHeadingStyle, {
  fontFamily: '"Gotham 7r", sans-serif',
  fontSize: 32,
  lineHeight: '48px'
});

var Heading1 = exports.Heading1 = function (_Component) {
  _inherits(Heading1, _Component);

  function Heading1() {
    _classCallCheck(this, Heading1);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Heading1.prototype.render = function render() {
    return _react2.default.createElement('h1', _extends({}, this.props, { style: _extends({}, h1Style, this.props.style) }));
  };

  return Heading1;
}(_react.Component);

Heading1.propTypes = {
  style: _react.PropTypes.object
};
var h2Style = exports.h2Style = _extends({}, baseHeadingStyle, {
  fontFamily: '"Gotham 4r", sans-serif',
  fontSize: 24,
  lineHeight: '48px'
});

var Heading2 = exports.Heading2 = function (_Component2) {
  _inherits(Heading2, _Component2);

  function Heading2() {
    _classCallCheck(this, Heading2);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  Heading2.prototype.render = function render() {
    return _react2.default.createElement('h2', _extends({}, this.props, { style: _extends({}, h2Style, this.props.style) }));
  };

  return Heading2;
}(_react.Component);

Heading2.propTypes = {
  style: _react.PropTypes.object
};
var h3Style = exports.h3Style = _extends({}, baseHeadingStyle, {
  fontFamily: '"Gotham 5r", sans-serif',
  fontSize: 16,
  lineHeight: '24px'
});

var Heading3 = exports.Heading3 = function (_Component3) {
  _inherits(Heading3, _Component3);

  function Heading3() {
    _classCallCheck(this, Heading3);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  Heading3.prototype.render = function render() {
    return _react2.default.createElement('h3', _extends({}, this.props, { style: _extends({}, h3Style, this.props.style) }));
  };

  return Heading3;
}(_react.Component);

Heading3.propTypes = {
  style: _react.PropTypes.object
};

/***/ }),

/***/ 2093:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A simple component for centering content within a dialog.
 */
var PadAndCenter = function PadAndCenter(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    {
      style: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
      }
    },
    children
  );
};
PadAndCenter.propTypes = { children: _react.PropTypes.any };
exports.default = PadAndCenter;
module.exports = exports['default'];

/***/ }),

/***/ 2834:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedLoginTypePicker = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _Headings = __webpack_require__(1752);

var _CardContainer = __webpack_require__(2835);

var _CardContainer2 = _interopRequireDefault(_CardContainer);

var _DialogFooter = __webpack_require__(965);

var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

var _LoginTypeCard = __webpack_require__(2836);

var _LoginTypeCard2 = _interopRequireDefault(_LoginTypeCard);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _shapes = __webpack_require__(798);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * View shown to a teacher when beginning to add students to an empty section.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Lets the teacher decide whether to use word/picture logins, have students
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * manage their own accounts via email/oauth, or to sync students with an
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * external service like Microsoft Classroom or Clever.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * UI for selecting the login type of a class section:
 * Word, picture, or email logins, or one of several third-party integrations.
 */
var LoginTypePicker = function (_Component) {
  _inherits(LoginTypePicker, _Component);

  function LoginTypePicker() {
    var _temp, _this, _ret;

    _classCallCheck(this, LoginTypePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.openImportDialog = function () {
      _this.props.handleCancel(); // close this dialog
      _this.props.handleImportOpen(); // open the roster dialog
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LoginTypePicker.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        provider = _props.provider,
        setLoginType = _props.setLoginType,
        handleImportOpen = _props.handleImportOpen,
        handleCancel = _props.handleCancel,
        disabled = _props.disabled;

    var withGoogle = provider === _shapes.OAuthSectionTypes.google_classroom;
    var withMicrosoft = provider === _shapes.OAuthSectionTypes.microsoft_classroom;
    var withClever = provider === _shapes.OAuthSectionTypes.clever;
    var anyImportOptions = (withGoogle || withMicrosoft || withClever) && typeof handleImportOpen === 'function';

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Headings.Heading1,
        null,
        title
      ),
      _react2.default.createElement(
        _Headings.Heading2,
        null,
        _locale2.default.addStudentsToSectionInstructions()
      ),
      anyImportOptions && _react2.default.createElement(
        _Headings.Heading3,
        null,
        _locale2.default.addStudentsManageMyOwn()
      ),
      _react2.default.createElement(
        _CardContainer2.default,
        null,
        _react2.default.createElement(PictureLoginCard, {
          onClick: setLoginType,
          disabled: disabled
        }),
        _react2.default.createElement(WordLoginCard, {
          onClick: setLoginType,
          disabled: disabled
        }),
        _react2.default.createElement(EmailLoginCard, {
          onClick: setLoginType,
          disabled: disabled
        })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'b',
          null,
          _locale2.default.note()
        ),
        " " + _locale2.default.emailAddressPolicy() + " ",
        _react2.default.createElement(
          'a',
          { href: 'http://blog.code.org/post/147756946588/codeorgs-new-login-approach-to-student-privacy' },
          _locale2.default.moreInfo()
        )
      ),
      anyImportOptions && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Headings.Heading3,
          null,
          _locale2.default.addStudentsSyncThirdParty()
        ),
        _react2.default.createElement(
          _CardContainer2.default,
          null,
          withGoogle && _react2.default.createElement(GoogleClassroomCard, {
            onClick: this.openImportDialog,
            disabled: disabled
          }),
          withMicrosoft && _react2.default.createElement(MicrosoftClassroomCard, {
            onClick: this.openImportDialog,
            disabled: disabled
          }),
          withClever && _react2.default.createElement(CleverCard, {
            onClick: this.openImportDialog,
            disabled: disabled
          })
        )
      ),
      _react2.default.createElement(
        _DialogFooter2.default,
        null,
        _react2.default.createElement(_Button2.default, {
          onClick: handleCancel,
          text: _locale2.default.dialogCancel(),
          size: _Button2.default.ButtonSize.large,
          color: _Button2.default.ButtonColor.gray,
          disabled: disabled
        })
      )
    );
  };

  return LoginTypePicker;
}(_react.Component);

LoginTypePicker.propTypes = {
  title: _react.PropTypes.string.isRequired,
  handleImportOpen: _react.PropTypes.func,
  setLoginType: _react.PropTypes.func.isRequired,
  handleCancel: _react.PropTypes.func.isRequired,
  disabled: _react.PropTypes.bool,
  // Provided by Redux
  provider: _react.PropTypes.string
};
var UnconnectedLoginTypePicker = exports.UnconnectedLoginTypePicker = LoginTypePicker;
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    provider: state.teacherSections.provider
  };
})(LoginTypePicker);


var PictureLoginCard = function PictureLoginCard(props) {
  return _react2.default.createElement(_LoginTypeCard2.default, {
    className: 'uitest-pictureLogin',
    title: _locale2.default.loginTypePicture(),
    subtitle: _locale2.default.loginTypePictureAgeGroup(),
    description: _locale2.default.loginTypePictureDescription(),
    buttonText: _locale2.default.loginTypePictureButton(),
    onClick: function onClick() {
      return props.onClick('picture');
    },
    disabled: props.disabled
  });
};
PictureLoginCard.propTypes = {
  onClick: _react.PropTypes.func.isRequired,
  disabled: _react.PropTypes.bool
};

var WordLoginCard = function WordLoginCard(props) {
  return _react2.default.createElement(_LoginTypeCard2.default, {
    className: 'uitest-wordLogin',
    title: _locale2.default.loginTypeWord(),
    subtitle: _locale2.default.loginTypeWordAgeGroup(),
    description: _locale2.default.loginTypeWordDescription(),
    buttonText: _locale2.default.loginTypeWordButton(),
    onClick: function onClick() {
      return props.onClick('word');
    },
    disabled: props.disabled
  });
};
WordLoginCard.propTypes = PictureLoginCard.propTypes;

var EmailLoginCard = function EmailLoginCard(props) {
  return _react2.default.createElement(_LoginTypeCard2.default, {
    className: 'uitest-emailLogin',
    title: _locale2.default.loginTypePersonal(),
    subtitle: _locale2.default.loginTypeEmailAgeGroup(),
    description: _locale2.default.loginTypeEmailDescription(),
    buttonText: _locale2.default.loginTypeEmailButton(),
    onClick: function onClick() {
      return props.onClick('email');
    },
    disabled: props.disabled
  });
};
EmailLoginCard.propTypes = PictureLoginCard.propTypes;

var GoogleClassroomCard = function GoogleClassroomCard(props) {
  return _react2.default.createElement(_LoginTypeCard2.default, {
    title: _locale2.default.loginTypeGoogleClassroom(),
    description: _locale2.default.loginTypeGoogleClassroomDescription(),
    buttonText: _locale2.default.loginTypeGoogleClassroomButton(),
    onClick: function onClick() {
      return props.onClick('google');
    },
    disabled: props.disabled
  });
};
GoogleClassroomCard.propTypes = PictureLoginCard.propTypes;

var MicrosoftClassroomCard = function MicrosoftClassroomCard(props) {
  return _react2.default.createElement(_LoginTypeCard2.default, {
    title: _locale2.default.loginTypeMicrosoftClassroom(),
    description: _locale2.default.loginTypeMicrosoftClassroomDescription(),
    buttonText: _locale2.default.loginTypeMicrosoftClassroomButton(),
    onClick: function onClick() {
      return props.onClick('microsoft');
    },
    disabled: props.disabled
  });
};
MicrosoftClassroomCard.propTypes = PictureLoginCard.propTypes;

var CleverCard = function CleverCard(props) {
  return _react2.default.createElement(_LoginTypeCard2.default, {
    title: _locale2.default.loginTypeClever(),
    description: _locale2.default.loginTypeCleverDescription(),
    buttonText: _locale2.default.loginTypeCleverButton(),
    onClick: function onClick() {
      return props.onClick('clever');
    },
    disabled: props.disabled
  });
};
CleverCard.propTypes = PictureLoginCard.propTypes;

/***/ }),

/***/ 2835:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  width: _styleConstants2.default['content-width'],
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
};

/** Uses flexbox to arrange content cards into nice rows with wrapping. */

var CardContainer = function (_Component) {
  _inherits(CardContainer, _Component);

  function CardContainer() {
    _classCallCheck(this, CardContainer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CardContainer.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { style: style },
      this.props.children
    );
  };

  return CardContainer;
}(_react.Component);

CardContainer.propTypes = {
  children: _react.PropTypes.any
};
exports.default = CardContainer;
module.exports = exports['default'];

/***/ }),

/***/ 2836:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  card: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    // Set width to form a three-column layout on 970px teacher dashboard.
    width: 312,
    // Uniform height, even in different rows
    height: 240,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 15,
    marginBottom: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: _color2.default.border_gray,
    background: _color2.default.white
  },
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 18,
    lineHeight: '18px',
    fontFamily: '"Gotham 4r", sans-serif',
    zIndex: 2,
    color: _color2.default.dark_charcoal,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    lineHeight: '18px',
    fontFamily: '"Gotham 4r", sans-serif',
    zIndex: 2,
    color: _color2.default.dark_charcoal,
    fontWeight: 'bold'
  },
  description: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 14,
    lineHeight: '18px',
    fontFamily: '"Gotham 4r", sans-serif',
    zIndex: 2,
    color: _color2.default.dark_charcoal
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
    zIndex: 2
  }
};

var LoginTypeCard = function (_Component) {
  _inherits(LoginTypeCard, _Component);

  function LoginTypeCard() {
    _classCallCheck(this, LoginTypeCard);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LoginTypeCard.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        subtitle = _props.subtitle,
        description = _props.description,
        buttonText = _props.buttonText,
        onClick = _props.onClick,
        disabled = _props.disabled;


    return _react2.default.createElement(
      'div',
      { style: styles.card, className: this.props.className },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: styles.title },
          title
        ),
        subtitle && _react2.default.createElement(
          'div',
          { style: styles.subtitle },
          subtitle
        ),
        _react2.default.createElement(
          'div',
          { style: styles.description },
          description
        )
      ),
      _react2.default.createElement(_Button2.default, {
        className: 'uitest-button',
        onClick: onClick,
        color: _Button2.default.ButtonColor.gray,
        text: buttonText,
        style: styles.button,
        disabled: disabled
      })
    );
  };

  return LoginTypeCard;
}(_react.Component);

LoginTypeCard.propTypes = {
  title: _react.PropTypes.string.isRequired,
  subtitle: _react.PropTypes.string,
  description: _react.PropTypes.string.isRequired,
  buttonText: _react.PropTypes.string.isRequired,
  onClick: _react.PropTypes.func.isRequired,
  className: _react.PropTypes.string,
  disabled: _react.PropTypes.bool
};
exports.default = LoginTypeCard;
module.exports = exports['default'];

/***/ }),

/***/ 2984:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ContentContainer = __webpack_require__(954);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _CourseCard = __webpack_require__(2985);

var _CourseCard2 = _interopRequireDefault(_CourseCard);

var _SetUpCourses = __webpack_require__(3537);

var _SetUpCourses2 = _interopRequireDefault(_SetUpCourses);

var _SeeMoreCourses = __webpack_require__(3538);

var _SeeMoreCourses2 = _interopRequireDefault(_SeeMoreCourses);

var _TopCourse = __webpack_require__(2976);

var _TopCourse2 = _interopRequireDefault(_TopCourse);

var _Notification = __webpack_require__(815);

var _Notification2 = _interopRequireDefault(_Notification);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _shapes = __webpack_require__(1708);

var _shapes2 = _interopRequireDefault(_shapes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentWidth = _styleConstants2.default['content-width'];

var styles = {
  container: {
    width: contentWidth,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: 'wrap'
  }
};

var RecentCourses = function (_Component) {
  _inherits(RecentCourses, _Component);

  function RecentCourses() {
    _classCallCheck(this, RecentCourses);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  RecentCourses.prototype.render = function render() {
    var _props = this.props,
        courses = _props.courses,
        topCourse = _props.topCourse,
        isTeacher = _props.isTeacher;

    var topFourCourses = courses.slice(0, 4);
    var moreCourses = courses.slice(4);
    var hasCourse = courses.length > 0 || topCourse;

    return _react2.default.createElement(
      'div',
      { id: 'recent-courses' },
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.myCourses()
        },
        topCourse && _react2.default.createElement(_TopCourse2.default, {
          assignableName: topCourse.assignableName,
          lessonName: topCourse.lessonName,
          linkToOverview: topCourse.linkToOverview,
          linkToLesson: topCourse.linkToLesson
        }),
        topFourCourses.length > 0 && _react2.default.createElement(
          'div',
          { style: styles.container },
          topFourCourses.map(function (course, index) {
            return _react2.default.createElement(
              'div',
              { key: index },
              _react2.default.createElement(_CourseCard2.default, {
                title: course.title,
                description: course.description,
                link: course.link
              })
            );
          })
        ),
        moreCourses.length > 0 && _react2.default.createElement(_SeeMoreCourses2.default, {
          courses: moreCourses
        }),
        hasCourse && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Notification2.default, {
            type: _Notification.NotificationType.course,
            notice: _locale2.default.findCourse(),
            details: _locale2.default.findCourseDescription(),
            buttonText: _locale2.default.findCourse(),
            buttonLink: '/courses',
            dismissible: false
          })
        ),
        !hasCourse && _react2.default.createElement(_SetUpCourses2.default, {
          isTeacher: isTeacher
        })
      )
    );
  };

  return RecentCourses;
}(_react.Component);

RecentCourses.propTypes = {
  courses: _shapes2.default.courses,
  topCourse: _shapes2.default.topCourse,
  isTeacher: _react.PropTypes.bool.isRequired
};
exports.default = RecentCourses;
module.exports = exports['default'];

/***/ }),

/***/ 2985:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _FontAwesome = __webpack_require__(156);

var _FontAwesome2 = _interopRequireDefault(_FontAwesome);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  card: {
    overflow: 'hidden',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _color2.default.border_gray,
    position: 'relative',
    height: 245,
    width: 473,
    float: 'left',
    marginBottom: 20
  },
  image: {
    position: 'absolute',
    width: 473,
    height: 130
  },
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    marginTop: 15,
    fontSize: 20,
    fontFamily: '"Gotham 4r", sans-serif',
    color: _color2.default.white,
    zIndex: 2,
    position: 'absolute',
    display: 'inline',
    paddingLeft: 25,
    paddingRight: 10
  },
  titleRtl: {
    paddingTop: 10,
    paddingBottom: 5,
    marginTop: 15,
    fontSize: 20,
    fontFamily: '"Gotham 4r", sans-serif',
    color: _color2.default.white,
    zIndex: 2,
    position: 'absolute',
    display: 'inline',
    paddingRight: 25,
    paddingLeft: 10
  },
  description: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 5,
    marginTop: 115,
    fontSize: 14,
    lineHeight: 1.5,
    fontFamily: '"Gotham 4r", sans-serif',
    color: _color2.default.charcoal,
    background: _color2.default.white,
    height: 130,
    width: "100%",
    boxSizing: "border-box",
    position: 'absolute',
    zIndex: 2
  },
  continueLink: {
    color: _color2.default.teal,
    fontSize: 14,
    fontFamily: '"Gotham 4r", sans-serif',
    fontWeight: 'bold',
    marginTop: -5,
    display: 'inline'
  },
  chevron: {
    display: 'inline',
    color: _color2.default.teal,
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8
  },
  chevronRtl: {
    display: 'inline',
    color: _color2.default.teal,
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 8
  },
  linkBox: {
    display: 'block',
    paddingBottom: 20,
    textDecoration: 'none'
  }
};

/**
 * A card used on the homepage to display information about a particular course
 * or script for a user.
 */

var CourseCard = function (_Component) {
  _inherits(CourseCard, _Component);

  function CourseCard() {
    _classCallCheck(this, CourseCard);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CourseCard.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        description = _props.description,
        link = _props.link,
        isRtl = _props.isRtl;

    var icon = isRtl ? "chevron-left" : "chevron-right";

    return _react2.default.createElement(
      'a',
      { href: link, style: styles.card },
      _react2.default.createElement('img', { src: __webpack_require__(3536), style: styles.image }),
      _react2.default.createElement(
        'div',
        { style: isRtl ? styles.titleRtl : styles.title },
        title
      ),
      _react2.default.createElement(
        'div',
        { style: styles.description },
        description,
        _react2.default.createElement(
          'div',
          { style: styles.linkBox },
          _react2.default.createElement(
            'h3',
            { style: styles.continueLink },
            _locale2.default.viewCourse()
          ),
          _react2.default.createElement(_FontAwesome2.default, {
            icon: icon,
            style: isRtl ? styles.chevronRtl : styles.chevron
          })
        )
      )
    );
  };

  return CourseCard;
}(_react.Component);

CourseCard.propTypes = {
  title: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string.isRequired,
  link: _react.PropTypes.string.isRequired,
  isRtl: _react.PropTypes.bool.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isRtl: state.isRtl
  };
})(CourseCard);
module.exports = exports['default'];

/***/ }),

/***/ 2986:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _radium = __webpack_require__(83);

var _radium2 = _interopRequireDefault(_radium);

var _reactRedux = __webpack_require__(53);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  section: {
    width: _styleConstants2.default['content-width'],
    backgroundColor: _color2.default.white,
    borderStyle: 'dashed',
    borderWidth: 5,
    borderColor: _color2.default.border_gray,
    boxSizing: "border-box"
  },
  wordBox: {
    width: _styleConstants2.default['content-width'] - 275,
    paddingLeft: 25,
    paddingRight: 25
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Gotham 5r',
    fontWeight: 'bold',
    color: _color2.default.teal,
    paddingTop: 25
  },
  description: {
    fontSize: 14,
    color: _color2.default.charcoal,
    width: _styleConstants2.default['content-width'] - 275,
    paddingTop: 5,
    paddingBottom: 25
  },
  button: {
    marginTop: 28,
    marginLeft: 25,
    marginRight: 25
  },
  ltr: {
    float: 'left'
  },
  rtl: {
    float: 'right'
  },
  clear: {
    clear: 'both'
  }
};

var SetUpMessage = function (_Component) {
  _inherits(SetUpMessage, _Component);

  function SetUpMessage() {
    _classCallCheck(this, SetUpMessage);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SetUpMessage.prototype.render = function render() {
    var _props = this.props,
        isRtl = _props.isRtl,
        headingText = _props.headingText,
        descriptionText = _props.descriptionText,
        className = _props.className,
        buttonText = _props.buttonText,
        buttonUrl = _props.buttonUrl,
        buttonClass = _props.buttonClass,
        onClick = _props.onClick;

    var localeStyle = isRtl ? styles.rtl : styles.ltr;
    var buttonLocaleStyle = isRtl ? styles.ltr : styles.rtl;

    return _react2.default.createElement(
      'div',
      { style: styles.section, className: className },
      _react2.default.createElement(
        'div',
        { style: [styles.wordBox, localeStyle] },
        _react2.default.createElement(
          'div',
          { style: [styles.heading, localeStyle] },
          headingText
        ),
        _react2.default.createElement(
          'div',
          { style: [styles.description, localeStyle] },
          descriptionText
        )
      ),
      _react2.default.createElement(_Button2.default, {
        href: buttonUrl,
        onClick: onClick,
        className: buttonClass,
        color: _Button2.default.ButtonColor.gray,
        text: buttonText,
        style: [styles.button, buttonLocaleStyle]
      }),
      _react2.default.createElement('div', { style: styles.clear })
    );
  };

  return SetUpMessage;
}(_react.Component);

SetUpMessage.propTypes = {
  isRtl: _react.PropTypes.bool,
  headingText: _react.PropTypes.string.isRequired,
  descriptionText: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string,
  buttonText: _react.PropTypes.string.isRequired,
  buttonUrl: _react.PropTypes.string,
  buttonClass: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isRtl: state.isRtl
  };
})((0, _radium2.default)(SetUpMessage));
module.exports = exports['default'];

/***/ }),

/***/ 2987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedEditSectionForm = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _Headings = __webpack_require__(1752);

var _styleConstants = __webpack_require__(593);

var styleConstants = _interopRequireWildcard(_styleConstants);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _AssignmentSelector = __webpack_require__(3546);

var _AssignmentSelector2 = _interopRequireDefault(_AssignmentSelector);

var _shapes = __webpack_require__(798);

var _DialogFooter = __webpack_require__(965);

var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _teacherSectionsRedux = __webpack_require__(731);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  root: {
    width: styleConstants['content-width']
  },
  dropdown: {
    padding: '0.3em'
  },
  sectionNameInput: {
    // Full-width, large happy text, lots of space.
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: 'large',
    padding: '0.5em'
  },
  scroll: {
    maxHeight: '58vh',
    overflowX: 'hidden',
    overflowY: 'auto'
  }
};

/**
 * UI for editing section details: Name, grade, assigned course, etc.
 */

var EditSectionForm = function (_Component) {
  _inherits(EditSectionForm, _Component);

  function EditSectionForm() {
    var _temp, _this, _ret;

    _classCallCheck(this, EditSectionForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onSaveClick = function () {
      _this.props.handleSave().catch(function (status) {
        alert(_locale2.default.unexpectedError());
        console.error(status);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  EditSectionForm.prototype.render = function render() {
    var _props = this.props,
        section = _props.section,
        title = _props.title,
        validGrades = _props.validGrades,
        validAssignments = _props.validAssignments,
        primaryAssignmentIds = _props.primaryAssignmentIds,
        isSaveInProgress = _props.isSaveInProgress,
        editSectionProperties = _props.editSectionProperties,
        handleClose = _props.handleClose;

    if (!section) {
      return null;
    }
    return _react2.default.createElement(
      'div',
      { style: style.root },
      _react2.default.createElement(
        _Headings.Heading1,
        null,
        title
      ),
      _react2.default.createElement(
        'div',
        { style: style.scroll },
        _react2.default.createElement(SectionNameField, {
          value: section.name,
          onChange: function onChange(name) {
            return editSectionProperties({ name: name });
          },
          disabled: isSaveInProgress
        }),
        _react2.default.createElement(GradeField, {
          value: section.grade || '',
          onChange: function onChange(grade) {
            return editSectionProperties({ grade: grade });
          },
          validGrades: validGrades,
          disabled: isSaveInProgress
        }),
        _react2.default.createElement(AssignmentField, {
          section: section,
          onChange: function onChange(ids) {
            return editSectionProperties(ids);
          },
          validAssignments: validAssignments,
          primaryAssignmentIds: primaryAssignmentIds,
          disabled: isSaveInProgress
        }),
        _react2.default.createElement(LessonExtrasField, {
          value: section.stageExtras,
          onChange: function onChange(stageExtras) {
            return editSectionProperties({ stageExtras: stageExtras });
          },
          disabled: isSaveInProgress
        }),
        _react2.default.createElement(PairProgrammingField, {
          value: section.pairingAllowed,
          onChange: function onChange(pairingAllowed) {
            return editSectionProperties({ pairingAllowed: pairingAllowed });
          },
          disabled: isSaveInProgress
        })
      ),
      _react2.default.createElement(
        _DialogFooter2.default,
        null,
        _react2.default.createElement(_Button2.default, {
          onClick: handleClose,
          text: _locale2.default.dialogCancel(),
          size: _Button2.default.ButtonSize.large,
          color: _Button2.default.ButtonColor.gray,
          disabled: isSaveInProgress
        }),
        _react2.default.createElement(_Button2.default, {
          className: 'uitest-saveButton',
          onClick: this.onSaveClick,
          text: _locale2.default.save(),
          size: _Button2.default.ButtonSize.large,
          color: _Button2.default.ButtonColor.orange,
          disabled: isSaveInProgress
        })
      )
    );
  };

  return EditSectionForm;
}(_react.Component);

EditSectionForm.propTypes = {
  title: _react.PropTypes.string.isRequired,

  //Comes from redux
  validGrades: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  validAssignments: _react.PropTypes.objectOf(_shapes.assignmentShape).isRequired,
  primaryAssignmentIds: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  sections: _react.PropTypes.objectOf(_shapes.sectionShape).isRequired,
  section: _shapes.sectionShape.isRequired,
  editSectionProperties: _react.PropTypes.func.isRequired,
  handleSave: _react.PropTypes.func.isRequired,
  handleClose: _react.PropTypes.func.isRequired,
  isSaveInProgress: _react.PropTypes.bool.isRequired
};
var UnconnectedEditSectionForm = exports.UnconnectedEditSectionForm = EditSectionForm;

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    validGrades: state.teacherSections.validGrades,
    validAssignments: state.teacherSections.validAssignments,
    primaryAssignmentIds: state.teacherSections.primaryAssignmentIds,
    sections: state.teacherSections.sections,
    section: state.teacherSections.sectionBeingEdited,
    isSaveInProgress: state.teacherSections.saveInProgress
  };
}, {
  editSectionProperties: _teacherSectionsRedux.editSectionProperties,
  handleSave: _teacherSectionsRedux.finishEditingSection,
  handleClose: _teacherSectionsRedux.cancelEditingSection
})(EditSectionForm);


var FieldProps = {
  value: _react.PropTypes.any,
  onChange: _react.PropTypes.func.isRequired,
  disabled: _react.PropTypes.bool
};

var SectionNameField = function SectionNameField(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      FieldName,
      null,
      _locale2.default.sectionName()
    ),
    _react2.default.createElement(
      FieldDescription,
      null,
      _locale2.default.addSectionName()
    ),
    _react2.default.createElement('input', {
      value: value,
      placeholder: _locale2.default.addSectionNameHint(),
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      },
      style: style.sectionNameInput,
      disabled: disabled
    })
  );
};
SectionNameField.propTypes = FieldProps;

var GradeField = function GradeField(_ref2) {
  var value = _ref2.value,
      _onChange2 = _ref2.onChange,
      validGrades = _ref2.validGrades,
      disabled = _ref2.disabled;

  var gradeOptions = [""].concat(validGrades).map(function (grade) {
    return {
      value: grade,
      text: grade === 'Other' ? 'Other/Mixed' : grade
    };
  });
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      FieldName,
      null,
      _locale2.default.grade()
    ),
    _react2.default.createElement(
      Dropdown,
      {
        value: value,
        onChange: function onChange(event) {
          return _onChange2(event.target.value);
        },
        disabled: disabled
      },
      gradeOptions.map(function (grade, index) {
        return _react2.default.createElement(
          'option',
          { key: index, value: grade.value },
          grade.text
        );
      })
    )
  );
};
GradeField.propTypes = _extends({}, FieldProps, {
  validGrades: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired
});

var AssignmentField = function AssignmentField(_ref3) {
  var section = _ref3.section,
      _onChange3 = _ref3.onChange,
      validAssignments = _ref3.validAssignments,
      primaryAssignmentIds = _ref3.primaryAssignmentIds,
      disabled = _ref3.disabled;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      FieldName,
      null,
      _locale2.default.course()
    ),
    _react2.default.createElement(
      FieldDescription,
      null,
      _locale2.default.whichCourse()
    ),
    _react2.default.createElement(_AssignmentSelector2.default, {
      section: section,
      onChange: function onChange(ids) {
        return _onChange3(ids);
      },
      primaryAssignmentIds: primaryAssignmentIds,
      assignments: validAssignments,
      chooseLaterOption: true,
      dropdownStyle: style.dropdown,
      disabled: disabled
    })
  );
};
AssignmentField.propTypes = {
  section: _shapes.sectionShape,
  onChange: _react.PropTypes.func.isRequired,
  validAssignments: _react.PropTypes.objectOf(_shapes.assignmentShape).isRequired,
  primaryAssignmentIds: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  disabled: _react.PropTypes.bool
};

var LessonExtrasField = function LessonExtrasField(_ref4) {
  var value = _ref4.value,
      _onChange4 = _ref4.onChange,
      disabled = _ref4.disabled;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      FieldName,
      null,
      _locale2.default.enableLessonExtras()
    ),
    _react2.default.createElement(
      FieldDescription,
      null,
      _locale2.default.explainLessonExtras(),
      ' ',
      _react2.default.createElement(
        'a',
        {
          href: 'https://support.code.org/hc/en-us/articles/228116568-In-the-teacher-dashboard-what-are-stage-extras-',
          target: '_blank'
        },
        _locale2.default.explainLessonExtrasLearnMore()
      )
    ),
    _react2.default.createElement(YesNoDropdown, {
      value: value,
      onChange: function onChange(stageExtras) {
        return _onChange4(stageExtras);
      },
      disabled: disabled
    })
  );
};
LessonExtrasField.propTypes = FieldProps;

var PairProgrammingField = function PairProgrammingField(_ref5) {
  var value = _ref5.value,
      _onChange5 = _ref5.onChange,
      disabled = _ref5.disabled;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      FieldName,
      null,
      _locale2.default.enablePairProgramming()
    ),
    _react2.default.createElement(
      FieldDescription,
      null,
      _locale2.default.explainPairProgramming(),
      ' ',
      _react2.default.createElement(
        'a',
        {
          href: 'https://support.code.org/hc/en-us/articles/115002122788-How-does-pair-programming-within-Code-Studio-work-',
          target: '_blank'
        },
        _locale2.default.explainPairProgrammingLearnMore()
      )
    ),
    _react2.default.createElement(YesNoDropdown, {
      value: value,
      onChange: function onChange(pairingAllowed) {
        return _onChange5(pairingAllowed);
      },
      disabled: disabled
    })
  );
};
PairProgrammingField.propTypes = FieldProps;

var FieldName = function FieldName(props) {
  return _react2.default.createElement('div', _extends({
    style: _extends({}, _Headings.h3Style, {
      marginTop: 20,
      marginBottom: 0
    })
  }, props));
};

var FieldDescription = function FieldDescription(props) {
  return _react2.default.createElement('div', _extends({
    style: {
      marginBottom: 5
    }
  }, props));
};

var Dropdown = function Dropdown(props) {
  return _react2.default.createElement('select', _extends({ style: style.dropdown }, props));
};

var YesNoDropdown = function YesNoDropdown(_ref6) {
  var value = _ref6.value,
      _onChange6 = _ref6.onChange,
      disabled = _ref6.disabled;
  return _react2.default.createElement(
    Dropdown,
    {
      value: value ? 'yes' : 'no',
      onChange: function onChange(event) {
        return _onChange6('yes' === event.target.value);
      },
      disabled: disabled
    },
    _react2.default.createElement(
      'option',
      { value: 'yes' },
      _locale2.default.yes()
    ),
    _react2.default.createElement(
      'option',
      { value: 'no' },
      _locale2.default.no()
    )
  );
};
YesNoDropdown.propTypes = FieldProps;

/***/ }),

/***/ 2988:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _ContentContainer = __webpack_require__(954);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _JoinSection = __webpack_require__(3549);

var _JoinSection2 = _interopRequireDefault(_JoinSection);

var _JoinSectionNotifications = __webpack_require__(3550);

var _JoinSectionNotifications2 = _interopRequireDefault(_JoinSectionNotifications);

var _SectionsAsStudentTable = __webpack_require__(3551);

var _SectionsAsStudentTable2 = _interopRequireDefault(_SectionsAsStudentTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentSections = function (_Component) {
  _inherits(StudentSections, _Component);

  function StudentSections(props) {
    _classCallCheck(this, StudentSections);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.updateSections = function (sections) {
      return _this.setState({ sections: sections });
    };

    _this.updateSectionsResult = function (action, result, name, id) {
      _this.setState({
        action: action,
        result: result,
        resultName: name,
        resultId: id
      });
    };

    _this.state = {
      sections: props.initialSections,
      action: null,
      result: null,
      resultName: null,
      resultId: null
    };
    return _this;
  }
  // isTeacher will be set false for teachers who are seeing this as a student in another teacher's section.


  StudentSections.prototype.render = function render() {
    var _props = this.props,
        canLeave = _props.canLeave,
        isTeacher = _props.isTeacher;
    var _state = this.state,
        sections = _state.sections,
        action = _state.action,
        result = _state.result,
        resultName = _state.resultName,
        resultId = _state.resultId;

    var enrolledInASection = sections.length > 0;
    var heading = isTeacher ? _locale2.default.sectionsJoined() : _locale2.default.sectionsTitle();
    var description = isTeacher ? "" : _locale2.default.enrollmentDescription();

    return _react2.default.createElement(
      _ContentContainer2.default,
      {
        heading: heading,
        description: description
      },
      _react2.default.createElement(_JoinSectionNotifications2.default, {
        action: action,
        result: result,
        name: resultName,
        id: resultId
      }),
      enrolledInASection && _react2.default.createElement(_SectionsAsStudentTable2.default, {
        sections: sections,
        isTeacher: false,
        canLeave: canLeave,
        updateSections: this.updateSections,
        updateSectionsResult: this.updateSectionsResult
      }),
      _react2.default.createElement(_JoinSection2.default, {
        enrolledInASection: enrolledInASection,
        updateSections: this.updateSections,
        updateSectionsResult: this.updateSectionsResult
      })
    );
  };

  return StudentSections;
}(_react.Component);

StudentSections.propTypes = {
  initialSections: _react.PropTypes.array.isRequired,
  canLeave: _react.PropTypes.bool.isRequired,
  isTeacher: _react.PropTypes.bool
};
exports.default = StudentSections;
module.exports = exports['default'];

/***/ }),

/***/ 3533:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3534);


/***/ }),

/***/ 3534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _queryString = __webpack_require__(727);

var _queryString2 = _interopRequireDefault(_queryString);

var _TeacherHomepage = __webpack_require__(3535);

var _TeacherHomepage2 = _interopRequireDefault(_TeacherHomepage);

var _StudentHomepage = __webpack_require__(3564);

var _StudentHomepage2 = _interopRequireDefault(_StudentHomepage);

var _UiTips = __webpack_require__(2989);

var _UiTips2 = _interopRequireDefault(_UiTips);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _reactRedux = __webpack_require__(53);

var _redux = __webpack_require__(237);

var _teacherSectionsRedux = __webpack_require__(731);

var _utils = __webpack_require__(753);

var _LinkCleverAccountModal = __webpack_require__(3566);

var _LinkCleverAccountModal2 = _interopRequireDefault(_LinkCleverAccountModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(showHomepage);

function showHomepage() {
  var script = document.querySelector('script[data-homepage]');
  var homepageData = JSON.parse(script.dataset.homepage);
  var isTeacher = homepageData.isTeacher;
  var isEnglish = homepageData.isEnglish;
  var announcementOverride = homepageData.announcement;
  var showUiTips = homepageData.showuitips;
  var userId = homepageData.userid;
  var showInitialTips = !homepageData.initialtipsdismissed;
  var query = _queryString2.default.parse(window.location.search);
  var store = (0, _redux.getStore)();
  store.dispatch((0, _teacherSectionsRedux.setValidGrades)(homepageData.valid_grades));
  store.dispatch((0, _teacherSectionsRedux.setOAuthProvider)(homepageData.provider));

  var courseId = void 0;
  var scriptId = void 0;
  if (query.courseId) {
    courseId = parseInt(query.courseId, 10);
    // remove courseId/scriptId params so that if we navigate back we don't get
    // this dialog again
    (0, _utils.updateQueryParam)('courseId', undefined, true);
  }
  if (query.scriptId) {
    scriptId = parseInt(query.scriptId, 10);
    (0, _utils.updateQueryParam)('scriptId', undefined, true);
  }
  if (courseId || scriptId) {
    store.dispatch((0, _teacherSectionsRedux.beginEditingNewSection)(courseId, scriptId));
  }

  // Default teacher announcement.
  var announcementHeading = _locale2.default.announcementHeadingFacilitatorApp();
  var announcementDescription = _locale2.default.announcementDescriptionFacilitatorApp();
  var announcementLink = "https://code.org/facilitator";
  var announcementId = "facilitator_app";
  var announcementType = "";

  // Optional override of teacher announcement.
  if (announcementOverride && announcementOverride.teacher_announce_heading && announcementOverride.teacher_announce_description && announcementOverride.teacher_announce_url && announcementOverride.teacher_announce_id) {

    // Use the override.
    announcementHeading = announcementOverride.teacher_announce_heading;
    announcementDescription = announcementOverride.teacher_announce_description;
    announcementLink = announcementOverride.teacher_announce_url;
    announcementId = announcementOverride.teacher_announce_id;
    announcementType = announcementOverride.teacher_announce_type;
  }

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      'div',
      null,
      isTeacher && showUiTips && _react2.default.createElement(_UiTips2.default, {
        userId: userId,
        tipId: 'homepage_header',
        showInitialTips: showInitialTips,
        beforeDialog: {
          title: _locale2.default.homepageUiTipsBeforeDialogTitle(),
          body: _locale2.default.homepageUiTipsBeforeDialogBody(),
          cancel: _locale2.default.homepageUiTipsBeforeDialogCancel(),
          confirm: _locale2.default.homepageUiTipsBeforeDialogConfirm()
        },
        afterDialog: {
          title: _locale2.default.homepageUiTipsAfterDialogTitle(),
          body: _locale2.default.homepageUiTipsAfterDialogBody(),
          cancel: _locale2.default.homepageUiTipsAfterDialogCancel(),
          confirm: _locale2.default.homepageUiTipsAfterDialogConfirm(),
          onConfirm: { action: "url", url: "http://teacherblog.code.org/post/160703303174/coming-soon-access-your-top-resources-with-the" }
        },
        tips: [{
          type: "initial",
          position: { top: 80, left: 100 },
          text: _locale2.default.homepageUiTipKeyLinks(),
          arrowDirection: "up"
        }, {
          type: "initial",
          position: { top: 80, right: 15 },
          text: _locale2.default.homepageUiTipOtherLinks(),
          arrowDirection: "up_corner"
        }, {
          type: "triggered",
          position: { top: 80, right: 15 },
          text: _locale2.default.homepageUiTipAlreadyHome(),
          triggerId: "logo_home_link",
          arrowDirection: "up_corner" }]
      }),
      !isTeacher && showUiTips && _react2.default.createElement(_UiTips2.default, {
        tips: [{
          type: "triggered",
          position: { top: 80, right: 15 },
          text: _locale2.default.homepageUiTipAlreadyHome(),
          triggerId: "logo_home_link",
          arrowDirection: "up_corner"
        }]
      }),
      isTeacher && _react2.default.createElement(_TeacherHomepage2.default, {
        announcements: [{
          heading: announcementHeading,
          buttonText: _locale2.default.learnMore(),
          description: announcementDescription,
          link: announcementLink,
          image: "",
          type: announcementType,
          id: announcementId
        }],
        courses: homepageData.courses,
        joinedSections: homepageData.joined_sections,
        topCourse: homepageData.topCourse,
        queryStringOpen: query['open'],
        canViewAdvancedTools: homepageData.canViewAdvancedTools,
        isEnglish: isEnglish,
        ncesSchoolId: homepageData.ncesSchoolId,
        censusQuestion: homepageData.censusQuestion,
        showCensusBanner: homepageData.showCensusBanner,
        teacherName: homepageData.teacherName,
        teacherId: homepageData.teacherId,
        teacherEmail: homepageData.teacherEmail,
        schoolYear: homepageData.currentSchoolYear
      }),
      !isTeacher && _react2.default.createElement(_StudentHomepage2.default, {
        courses: homepageData.courses,
        topCourse: homepageData.topCourse,
        sections: homepageData.sections,
        canLeave: homepageData.canLeave,
        canViewAdvancedTools: homepageData.canViewAdvancedTools
      })
    )
  ), document.getElementById('homepage-container'));
}

window.CleverTakeoverManager = function (options) {
  this.options = options;
  var self = this;

  var linkCleverDiv = (0, _jquery2.default)('<div>');
  function showLinkCleverModal(cancel, submit) {
    (0, _jquery2.default)(document.body).append(linkCleverDiv);

    _reactDom2.default.render(_react2.default.createElement(_LinkCleverAccountModal2.default, {
      isOpen: true,
      handleCancel: cancel,
      handleSubmit: submit,
      forceConnect: options.forceConnect === 'true'
    }), linkCleverDiv[0]);
  }

  if (self.options.cleverLinkFlag) {
    showLinkCleverModal(onCancelModal, onConfirmLink);
  }

  function closeLinkCleverModal() {
    _reactDom2.default.unmountComponentAtNode(linkCleverDiv[0]);
  }

  function onCancelModal() {
    (0, _jquery2.default)("#user_user_type").val("student");
    _jquery2.default.get("/users/clever_modal_dismissed");
    closeLinkCleverModal();
  }

  function onConfirmLink() {
    window.location.href = "/users/clever_takeover?mergeID=" + self.options.userIDToMerge + "&token=" + self.options.mergeAuthToken;
  }
};

/***/ }),

/***/ 3535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _HeaderBanner = __webpack_require__(2088);

var _HeaderBanner2 = _interopRequireDefault(_HeaderBanner);

var _TwoColumnActionBlock = __webpack_require__(1709);

var _RecentCourses = __webpack_require__(2984);

var _RecentCourses2 = _interopRequireDefault(_RecentCourses);

var _TeacherSections = __webpack_require__(3539);

var _TeacherSections2 = _interopRequireDefault(_TeacherSections);

var _StudentSections = __webpack_require__(2988);

var _StudentSections2 = _interopRequireDefault(_StudentSections);

var _TeacherResources = __webpack_require__(3552);

var _TeacherResources2 = _interopRequireDefault(_TeacherResources);

var _ProjectWidgetWithData = __webpack_require__(2832);

var _ProjectWidgetWithData2 = _interopRequireDefault(_ProjectWidgetWithData);

var _shapes = __webpack_require__(1708);

var _shapes2 = _interopRequireDefault(_shapes);

var _ProtectedStatefulDiv = __webpack_require__(737);

var _ProtectedStatefulDiv2 = _interopRequireDefault(_ProtectedStatefulDiv);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _CensusTeacherBanner = __webpack_require__(3563);

var _CensusTeacherBanner2 = _interopRequireDefault(_CensusTeacherBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeacherHomepage = function (_Component) {
  _inherits(TeacherHomepage, _Component);

  function TeacherHomepage() {
    var _temp, _this, _ret;

    _classCallCheck(this, TeacherHomepage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      showCensusBanner: _this.props.showCensusBanner
    }, _this.bindCensusBanner = function (banner) {
      _this.censusBanner = banner;
    }, _this.handleCensusSubmitSuccess = function () {
      _this.setState({ censusSubmittedSuccessfully: true });
      _this.dismissCensusBanner(null, _this.logDismissCensusBannerError);
    }, _this.handleCensusSubmitError = function () {
      _this.setState({
        showCensusUnknownError: true
      });
    }, _this.logDismissCensusBannerError = function (xhr) {
      console.error('Failed to dismiss future census banner! ' + xhr.responseText);
    }, _this.hideCensusBanner = function () {
      _this.setState({
        showCensusBanner: false
      });
    }, _this.handleDismissAndHideCensusBannerError = function (xhr) {
      _this.logDismissCensusBannerError(xhr);
      _this.hideCensusBanner();
    }, _this.handlePostponeCensusBannerError = function (xhr) {
      console.error('Failed to postpone census banner! ' + xhr.responseText);
      _this.hideCensusBanner();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TeacherHomepage.prototype.handleCensusBannerTeachesChange = function handleCensusBannerTeachesChange(event) {
    this.setState({ censusBannerTeachesSelection: event.target.id === "teachesYes" });
  };

  TeacherHomepage.prototype.handleCensusBannerInClassChange = function handleCensusBannerInClassChange(event) {
    this.setState({ censusBannerInClassSelection: event.target.id === "inClass" });
  };

  TeacherHomepage.prototype.handleCensusBannerSubmit = function handleCensusBannerSubmit() {
    if (this.censusBanner.isValid()) {
      _jquery2.default.ajax({
        url: "/dashboardapi/v1/census/CensusTeacherBannerV1",
        type: "post",
        dataType: "json",
        data: this.censusBanner.getData()
      }).done(this.handleCensusSubmitSuccess).fail(this.handleCensusSubmitError);
    } else {
      this.setState({ showCensusInvalidError: true });
    }
  };

  TeacherHomepage.prototype.dismissCensusBanner = function dismissCensusBanner(onSuccess, onFailure) {
    _jquery2.default.ajax({
      url: '/api/v1/users/' + this.props.teacherId + '/dismiss_census_banner',
      type: "post"
    }).done(onSuccess).fail(onFailure);
  };

  TeacherHomepage.prototype.dismissAndHideCensusBanner = function dismissAndHideCensusBanner() {
    this.dismissCensusBanner(this.hideCensusBanner, this.handleDismissAndHideCensusBannerError);
  };

  TeacherHomepage.prototype.postponeCensusBanner = function postponeCensusBanner() {
    _jquery2.default.ajax({
      url: '/api/v1/users/' + this.props.teacherId + '/postpone_census_banner',
      type: "post"
    }).done(this.hideCensusBanner).fail(this.handlePostponeCensusBannerError);
  };

  TeacherHomepage.prototype.componentDidMount = function componentDidMount() {
    // The component used here is implemented in legacy HAML/CSS rather than React.
    (0, _jquery2.default)('#terms_reminder').appendTo(_reactDom2.default.findDOMNode(this.refs.termsReminder)).show();
    (0, _jquery2.default)('#flashes').appendTo(_reactDom2.default.findDOMNode(this.refs.flashes)).show();
  };

  TeacherHomepage.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        courses = _props.courses,
        topCourse = _props.topCourse,
        joinedSections = _props.joinedSections;
    var _props2 = this.props,
        ncesSchoolId = _props2.ncesSchoolId,
        censusQuestion = _props2.censusQuestion,
        schoolYear = _props2.schoolYear;
    var _props3 = this.props,
        teacherId = _props3.teacherId,
        teacherName = _props3.teacherName,
        teacherEmail = _props3.teacherEmail;
    var _props4 = this.props,
        canViewAdvancedTools = _props4.canViewAdvancedTools,
        isEnglish = _props4.isEnglish,
        queryStringOpen = _props4.queryStringOpen;


    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_HeaderBanner2.default, {
        headingText: _locale2.default.homepageHeading(),
        short: true
      }),
      _react2.default.createElement(_ProtectedStatefulDiv2.default, {
        ref: 'flashes'
      }),
      _react2.default.createElement(_ProtectedStatefulDiv2.default, {
        ref: 'termsReminder'
      }),
      isEnglish && _react2.default.createElement(_TwoColumnActionBlock.SpecialAnnouncementActionBlock, null),
      this.state.showCensusBanner && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_CensusTeacherBanner2.default, {
          ref: this.bindCensusBanner,
          schoolYear: schoolYear,
          ncesSchoolId: ncesSchoolId,
          question: censusQuestion,
          teaches: this.state.censusBannerTeachesSelection,
          inClass: this.state.censusBannerInClassSelection,
          teacherId: teacherId,
          teacherName: teacherName,
          teacherEmail: teacherEmail,
          showInvalidError: this.state.showCensusInvalidError,
          showUnknownError: this.state.showCensusUnknownError,
          submittedSuccessfully: this.state.censusSubmittedSuccessfully,
          onSubmit: function onSubmit() {
            return _this2.handleCensusBannerSubmit();
          },
          onDismiss: function onDismiss() {
            return _this2.dismissAndHideCensusBanner();
          },
          onPostpone: function onPostpone() {
            return _this2.postponeCensusBanner();
          },
          onTeachesChange: function onTeachesChange(event) {
            return _this2.handleCensusBannerTeachesChange(event);
          },
          onInClassChange: function onInClassChange(event) {
            return _this2.handleCensusBannerInClassChange(event);
          }
        }),
        _react2.default.createElement('br', null)
      ),
      _react2.default.createElement(_TeacherSections2.default, {
        queryStringOpen: queryStringOpen
      }),
      _react2.default.createElement(_RecentCourses2.default, {
        courses: courses,
        topCourse: topCourse,
        showAllCoursesLink: true,
        isTeacher: true
      }),
      _react2.default.createElement(_TeacherResources2.default, null),
      _react2.default.createElement(_ProjectWidgetWithData2.default, {
        canViewFullList: true,
        canViewAdvancedTools: canViewAdvancedTools
      }),
      _react2.default.createElement(_StudentSections2.default, {
        initialSections: joinedSections,
        canLeave: true,
        isTeacher: true
      })
    );
  };

  return TeacherHomepage;
}(_react.Component);

TeacherHomepage.propTypes = {
  joinedSections: _shapes2.default.sections,
  courses: _shapes2.default.courses,
  topCourse: _shapes2.default.topCourse,
  announcements: _react.PropTypes.array.isRequired,
  queryStringOpen: _react.PropTypes.string,
  canViewAdvancedTools: _react.PropTypes.bool,
  isEnglish: _react.PropTypes.bool.isRequired,
  showCensusBanner: _react.PropTypes.bool.isRequired,
  ncesSchoolId: _react.PropTypes.string,
  censusQuestion: _react.PropTypes.oneOf(['how_many_10_hours', 'how_many_20_hours']),
  teacherName: _react.PropTypes.string,
  teacherId: _react.PropTypes.number,
  teacherEmail: _react.PropTypes.string,
  schoolYear: _react.PropTypes.number
};
exports.default = TeacherHomepage;
module.exports = exports['default'];

/***/ }),

/***/ 3536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "small_purple_iconswpbe854106ca4dc1a0d64388b177ad9ffd.png";

/***/ }),

/***/ 3537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _SetUpMessage = __webpack_require__(2986);

var _SetUpMessage2 = _interopRequireDefault(_SetUpMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SetUpCourses = function SetUpCourses(_ref) {
  var isTeacher = _ref.isTeacher;
  return _react2.default.createElement(_SetUpMessage2.default, {
    type: 'courses',
    headingText: _locale2.default.startLearning(),
    descriptionText: isTeacher ? _locale2.default.setupCoursesTeacher() : _locale2.default.setupCoursesStudent(),
    buttonText: _locale2.default.findCourse(),
    buttonUrl: '/courses'
  });
};
SetUpCourses.propTypes = {
  isTeacher: _react.PropTypes.bool.isRequired
};
exports.default = SetUpCourses;
module.exports = exports['default'];

/***/ }),

/***/ 3538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _CourseCard = __webpack_require__(2985);

var _CourseCard2 = _interopRequireDefault(_CourseCard);

var _ContentContainer = __webpack_require__(954);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _shapes = __webpack_require__(1708);

var _shapes2 = _interopRequireDefault(_shapes);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  spacer: {
    width: 20,
    float: 'left',
    color: _color2.default.white
  },
  button: {
    float: 'right',
    marginBottom: 20
  }
};

// This component - used on the teacher and student homepages - shows a button to view more courses if the user has more than a few courses. Students and teachers will see up to 5 courses, with their most recent as a TopCourse, and the button if they have more. Clicking the button will show CoursesCards for all of the users' courses beyond the top 5.

var SeeMoreCourses = function (_Component) {
  _inherits(SeeMoreCourses, _Component);

  function SeeMoreCourses() {
    var _temp, _this, _ret;

    _classCallCheck(this, SeeMoreCourses);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SeeMoreCourses.prototype.showMoreCourses = function showMoreCourses() {
    this.setState({ open: true });
  };

  SeeMoreCourses.prototype.render = function render() {
    var courses = this.props.courses;


    return _react2.default.createElement(
      'div',
      null,
      this.state.open && courses && _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: '',
          linkText: '',
          link: '',
          showLink: false
        },
        courses.map(function (course, index) {
          return _react2.default.createElement(
            'div',
            { key: index },
            _react2.default.createElement(_CourseCard2.default, {
              title: course.title,
              description: course.description,
              link: course.link
            }),
            index % 2 === 0 && _react2.default.createElement(
              'div',
              { style: styles.spacer },
              '.'
            )
          );
        })
      ),
      !this.state.open && _react2.default.createElement(_Button2.default, {
        onClick: this.showMoreCourses.bind(this),
        color: _Button2.default.ButtonColor.gray,
        icon: 'caret-down',
        text: _locale2.default.viewMore(),
        style: styles.button
      })
    );
  };

  return SeeMoreCourses;
}(_react.Component);

SeeMoreCourses.propTypes = {
  courses: _shapes2.default.courses
};
exports.default = SeeMoreCourses;
module.exports = exports['default'];

/***/ }),

/***/ 3539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedTeacherSections = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _ContentContainer = __webpack_require__(954);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _OwnedSections = __webpack_require__(3540);

var _OwnedSections2 = _interopRequireDefault(_OwnedSections);

var _teacherSectionsRedux = __webpack_require__(731);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeacherSections = function (_Component) {
  _inherits(TeacherSections, _Component);

  function TeacherSections() {
    _classCallCheck(this, TeacherSections);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TeacherSections.prototype.componentDidMount = function componentDidMount() {
    this.props.asyncLoadSectionData();
  };

  TeacherSections.prototype.render = function render() {
    var queryStringOpen = this.props.queryStringOpen;

    return _react2.default.createElement(
      'div',
      { id: 'classroom-sections' },
      _react2.default.createElement(
        _ContentContainer2.default,
        {
          heading: _locale2.default.sectionsTitle()
        },
        _react2.default.createElement(_OwnedSections2.default, { queryStringOpen: queryStringOpen })
      )
    );
  };

  return TeacherSections;
}(_react.Component);

TeacherSections.propTypes = {
  queryStringOpen: _react.PropTypes.string,

  //Redux provided
  asyncLoadSectionData: _react.PropTypes.func.isRequired
};
var UnconnectedTeacherSections = exports.UnconnectedTeacherSections = TeacherSections;
exports.default = (0, _reactRedux.connect)(undefined, {
  asyncLoadSectionData: _teacherSectionsRedux.asyncLoadSectionData
})(TeacherSections);

/***/ }),

/***/ 3540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedOwnedSections = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _lodash = __webpack_require__(82);

var _lodash2 = _interopRequireDefault(_lodash);

var _OwnedSectionsTable = __webpack_require__(3541);

var _OwnedSectionsTable2 = _interopRequireDefault(_OwnedSectionsTable);

var _RosterDialog = __webpack_require__(3544);

var _RosterDialog2 = _interopRequireDefault(_RosterDialog);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _teacherSectionsRedux = __webpack_require__(731);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

var _AddSectionDialog = __webpack_require__(3545);

var _AddSectionDialog2 = _interopRequireDefault(_AddSectionDialog);

var _EditSectionDialog = __webpack_require__(3547);

var _EditSectionDialog2 = _interopRequireDefault(_EditSectionDialog);

var _SetUpSections = __webpack_require__(3548);

var _SetUpSections2 = _interopRequireDefault(_SetUpSections);

var _Notification = __webpack_require__(815);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @file Reusable widget to display and manage sections owned by the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *        current user. */


var styles = {
  button: {
    marginBottom: 20,
    float: 'right'
  },
  buttonContainer: {
    width: _styleConstants2.default['content-width'],
    textAlign: 'right',
    paddingTop: 10,
    paddingBottom: 10
  },
  hiddenSectionLabel: {
    fontSize: 14,
    paddingBottom: 5,
    color: _color2.default.charcoal
  }
};

var OwnedSections = function (_React$Component) {
  _inherits(OwnedSections, _React$Component);

  function OwnedSections() {
    var _temp, _this, _ret;

    _classCallCheck(this, OwnedSections);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      viewHidden: false
    }, _this.beginEditingNewSection = function () {
      return _this.props.beginEditingNewSection();
    }, _this.toggleViewHidden = function () {
      _this.setState({
        viewHidden: !_this.state.viewHidden
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  OwnedSections.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        queryStringOpen = _props.queryStringOpen,
        beginImportRosterFlow = _props.beginImportRosterFlow;


    if (queryStringOpen === 'rosterDialog') {
      beginImportRosterFlow();
    }
  };

  // Wrapped to avoid passing event args


  OwnedSections.prototype.render = function render() {
    var _props2 = this.props,
        sectionIds = _props2.sectionIds,
        hiddenSectionIds = _props2.hiddenSectionIds,
        asyncLoadComplete = _props2.asyncLoadComplete,
        beginEditingSection = _props2.beginEditingSection;
    var viewHidden = this.state.viewHidden;


    if (!asyncLoadComplete) {
      return null;
    }

    var hasSections = sectionIds.length > 0;
    var visibleSectionIds = _lodash2.default.without.apply(_lodash2.default, [sectionIds].concat(_toConsumableArray(hiddenSectionIds)));

    return _react2.default.createElement(
      'div',
      { className: 'uitest-owned-sections' },
      !hasSections && _react2.default.createElement(_SetUpSections2.default, null),
      hasSections && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Notification2.default, {
          type: 'course',
          notice: _locale2.default.newSectionAdd(),
          details: _locale2.default.createNewClassroom(),
          dismissible: false,
          buttonText: _locale2.default.newSectionCreate(),
          newWindow: true,
          onButtonClick: this.beginEditingNewSection,
          buttonClassName: 'uitest-newsection'
        }),
        visibleSectionIds.length > 0 && _react2.default.createElement(_OwnedSectionsTable2.default, {
          sectionIds: visibleSectionIds,
          onEdit: beginEditingSection
        }),
        _react2.default.createElement(
          'div',
          { style: styles.buttonContainer },
          hiddenSectionIds.length > 0 && _react2.default.createElement(_Button2.default, {
            className: 'ui-test-show-hide',
            onClick: this.toggleViewHidden,
            icon: viewHidden ? "caret-up" : "caret-down",
            text: viewHidden ? _locale2.default.hideHiddenSections() : _locale2.default.viewHiddenSections(),
            color: _Button2.default.ButtonColor.gray
          })
        ),
        viewHidden && hiddenSectionIds.length > 0 && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { style: styles.hiddenSectionLabel },
            _locale2.default.hiddenSections()
          ),
          _react2.default.createElement(_OwnedSectionsTable2.default, {
            sectionIds: hiddenSectionIds,
            onEdit: beginEditingSection
          })
        )
      ),
      _react2.default.createElement(_RosterDialog2.default, null),
      _react2.default.createElement(_AddSectionDialog2.default, null),
      _react2.default.createElement(_EditSectionDialog2.default, null)
    );
  };

  return OwnedSections;
}(_react2.default.Component);

OwnedSections.propTypes = {
  queryStringOpen: _react.PropTypes.string,

  // redux provided
  sectionIds: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
  hiddenSectionIds: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
  asyncLoadComplete: _react.PropTypes.bool.isRequired,
  beginEditingNewSection: _react.PropTypes.func.isRequired,
  beginEditingSection: _react.PropTypes.func.isRequired,
  beginImportRosterFlow: _react.PropTypes.func.isRequired
};
var UnconnectedOwnedSections = exports.UnconnectedOwnedSections = OwnedSections;

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    sectionIds: state.teacherSections.sectionIds,
    hiddenSectionIds: (0, _teacherSectionsRedux.hiddenSectionIds)(state),
    asyncLoadComplete: state.teacherSections.asyncLoadComplete
  };
}, {
  beginEditingNewSection: _teacherSectionsRedux.beginEditingNewSection,
  beginEditingSection: _teacherSectionsRedux.beginEditingSection,
  beginImportRosterFlow: _teacherSectionsRedux.beginImportRosterFlow
})(OwnedSections);

/***/ }),

/***/ 3541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedOwnedSectionsTable = exports.studentsFormatter = exports.loginInfoFormatter = exports.gradeFormatter = exports.courseLinkFormatter = exports.sectionLinkFormatter = exports.COLUMNS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _reactabular = __webpack_require__(921);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _wrapped_sortable = __webpack_require__(1129);

var _wrapped_sortable2 = _interopRequireDefault(_wrapped_sortable);

var _orderBy = __webpack_require__(1742);

var _orderBy2 = _interopRequireDefault(_orderBy);

var _teacherSectionsRedux = __webpack_require__(731);

var _shapes = __webpack_require__(798);

var _tableConstants = __webpack_require__(2089);

var _urlHelpers = __webpack_require__(784);

var _SectionActionDropdown = __webpack_require__(3542);

var _SectionActionDropdown2 = _interopRequireDefault(_SectionActionDropdown);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @enum {number} */
var COLUMNS = exports.COLUMNS = {
  ID: 0,
  SECTION_NAME: 1,
  GRADE: 2,
  COURSE: 3,
  STUDENTS: 4,
  LOGIN_INFO: 5,
  EDIT_DELETE: 6
};

var styles = {
  currentUnit: {
    marginTop: 10
  },
  //Hides a column so that we can sort by a value not displayed
  hiddenCol: {
    width: 0,
    padding: 0,
    border: 0
  },
  //Assigned to a column with the hidden column to the left
  leftHiddenCol: {
    borderLeft: 0
  },
  unsortableHeader: _tableConstants.tableLayoutStyles.unsortableHeader,
  colButton: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    width: 40
  },
  sectionCol: {
    paddingLeft: 20
  },
  sectionCodeNone: {
    color: _color2.default.light_gray,
    fontSize: 16
  }
};

// Cell formatters for sortable OwnedSectionsTable.
var sectionLinkFormatter = exports.sectionLinkFormatter = function sectionLinkFormatter(name, _ref) {
  var rowData = _ref.rowData;

  var pegasusUrl = (0, _urlHelpers.pegasus)('/teacher-dashboard#/sections/' + rowData.id);
  return _react2.default.createElement(
    'a',
    { style: _tableConstants.tableLayoutStyles.link, href: pegasusUrl },
    rowData.name
  );
};

var courseLinkFormatter = exports.courseLinkFormatter = function courseLinkFormatter(course, _ref2) {
  var rowData = _ref2.rowData;
  var assignmentNames = rowData.assignmentNames,
      assignmentPaths = rowData.assignmentPaths;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'a',
      {
        href: '' + rowData.assignmentPaths[0] + (0, _utils.stringifyQueryParams)({ section_id: rowData.id }),
        style: _tableConstants.tableLayoutStyles.link
      },
      rowData.assignmentNames[0]
    ),
    assignmentPaths.length > 1 && _react2.default.createElement(
      'div',
      { style: styles.currentUnit },
      _react2.default.createElement(
        'div',
        null,
        _locale2.default.currentUnit()
      ),
      _react2.default.createElement(
        'a',
        {
          href: '' + rowData.assignmentPaths[1] + (0, _utils.stringifyQueryParams)({ section_id: rowData.id }),
          style: _tableConstants.tableLayoutStyles.link
        },
        assignmentNames[1]
      )
    ),
    assignmentPaths.length < 1 && _react2.default.createElement(_Button2.default, {
      text: _locale2.default.coursesCardAction(),
      href: '/courses',
      color: _Button2.default.ButtonColor.gray
    })
  );
};

var gradeFormatter = exports.gradeFormatter = function gradeFormatter(grade, _ref3) {
  var rowData = _ref3.rowData;

  return _react2.default.createElement(
    'div',
    null,
    rowData.grade
  );
};

var loginInfoFormatter = exports.loginInfoFormatter = function loginInfoFormatter(loginType, _ref4) {
  var rowData = _ref4.rowData;

  var sectionCode = '';
  var pegasusUrl = (0, _urlHelpers.pegasus)('/teacher-dashboard#/sections/' + rowData.id + '/print_signin_cards');
  // For managed logins, just show the provider name rather than the login code.
  if (rowData.loginType === _shapes.OAuthSectionTypes.clever) {
    sectionCode = _locale2.default.loginTypeClever();
  } else if (rowData.loginType === _shapes.OAuthSectionTypes.google_classroom) {
    sectionCode = _locale2.default.loginTypeGoogleClassroom();
  } else {
    sectionCode = rowData.code;
  }
  return _react2.default.createElement(
    'a',
    { style: _tableConstants.tableLayoutStyles.link, href: pegasusUrl },
    sectionCode
  );
};

var studentsFormatter = exports.studentsFormatter = function studentsFormatter(studentCount, _ref5) {
  var rowData = _ref5.rowData;

  var pegasusUrl = (0, _urlHelpers.pegasus)('/teacher-dashboard#/sections/' + rowData.id + "/manage");
  var studentHtml = rowData.studentCount <= 0 ? _react2.default.createElement(_Button2.default, {
    text: _locale2.default.addStudents(),
    href: pegasusUrl,
    color: _Button2.default.ButtonColor.gray
  }) : _react2.default.createElement(
    'a',
    { style: _tableConstants.tableLayoutStyles.link, href: pegasusUrl },
    rowData.studentCount
  );
  return studentHtml;
};

//Displays nothing for hidden column
var hiddenFormatter = function hiddenFormatter(id) {
  return null;
};

/**
 * This is a component that shows information about the sections that a teacher
 * owns, and allows for editing, deleting and sorting them.
 * It shows some of the same information as the SectionsAsStudentTable used on the teacher
 * homepage. However, for historical reasons it unfortunately has a somewhat
 * different set/shape of input data. This component gets its data from
 * section_api_helpers in pegasus via an AJAX call, whereas that component gets
 * its data from section.summarize on page load.
 * Both ultimately source data from the dashboard db.
 * Long term it would be ideal if section_api_helpers went away and both components
 * used dashboard.
 */

var OwnedSectionsTable = function (_Component) {
  _inherits(OwnedSectionsTable, _Component);

  function OwnedSectionsTable() {
    var _temp, _this, _ret;

    _classCallCheck(this, OwnedSectionsTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      sortingColumns: _defineProperty({}, COLUMNS.ID, {
        direction: 'desc',
        position: 0
      })
    }, _this.actionCellFormatter = function (temp, _ref6) {
      var rowData = _ref6.rowData;

      return _react2.default.createElement(_SectionActionDropdown2.default, { sectionData: rowData, handleEdit: _this.props.onEdit });
    }, _this.onSort = function (selectedColumn) {
      _this.setState({
        sortingColumns: _reactabular.sort.byColumn({
          sortingColumns: _this.state.sortingColumns,
          // Custom sortingOrder removes 'no-sort' from the cycle
          sortingOrder: {
            FIRST: 'asc',
            asc: 'desc',
            desc: 'asc'
          },
          selectedColumn: selectedColumn
        })
      });
    }, _this.getSortingColumns = function () {
      return _this.state.sortingColumns || {};
    }, _this.getColumns = function (sortable) {
      var colStyle = _extends({}, _tableConstants.tableLayoutStyles.cell, styles.sectionCol);
      return [{
        //displays nothing, but used as initial sort
        property: 'id',
        header: {
          props: { style: styles.hiddenCol }
        },
        cell: {
          format: hiddenFormatter,
          props: { style: styles.hiddenCol }
        } }, {
        property: 'name',
        header: {
          label: _locale2.default.section(),
          props: { style: _tableConstants.tableLayoutStyles.headerCell },
          transforms: [sortable]
        },
        cell: {
          format: sectionLinkFormatter,
          props: { style: _extends({}, colStyle, styles.leftHiddenCol) }
        }
      }, {
        property: 'grade',
        header: {
          label: _locale2.default.grade(),
          props: { style: _tableConstants.tableLayoutStyles.headerCell },
          transforms: [sortable]
        },
        cell: {
          format: gradeFormatter,
          props: { style: colStyle }
        }
      }, {
        property: 'course',
        header: {
          label: _locale2.default.course(),
          props: { style: _extends({}, _tableConstants.tableLayoutStyles.headerCell, styles.unsortableHeader) }
        },
        cell: {
          format: courseLinkFormatter,
          props: { style: colStyle }
        }
      }, {
        property: 'studentCount',
        header: {
          label: _locale2.default.students(),
          props: { style: _tableConstants.tableLayoutStyles.headerCell },
          transforms: [sortable]
        },
        cell: {
          format: studentsFormatter,
          props: { style: colStyle }
        }
      }, {
        property: 'loginType',
        header: {
          label: _locale2.default.loginInfo(),
          props: { style: _extends({}, _tableConstants.tableLayoutStyles.headerCell, styles.unsortableHeader) }
        },
        cell: {
          format: loginInfoFormatter,
          props: { style: colStyle }
        }
      }, {
        property: 'actions',
        header: {
          props: { style: _tableConstants.tableLayoutStyles.headerCell }
        },
        cell: {
          format: _this.actionCellFormatter,
          props: { style: _extends({}, _tableConstants.tableLayoutStyles.cell, styles.colButton) }
        }
      }];
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // The user requested a new sorting column. Adjust the state accordingly.


  OwnedSectionsTable.prototype.render = function render() {
    var sortable = (0, _wrapped_sortable2.default)(this.getSortingColumns, this.onSort, _tableConstants.sortableOptions);
    var columns = this.getColumns(sortable);
    var sortingColumns = this.getSortingColumns();

    var sortedRows = _reactabular.sort.sorter({
      columns: columns,
      sortingColumns: sortingColumns,
      sort: _orderBy2.default
    })(this.props.sectionRows);

    return _react2.default.createElement(
      _reactabular.Table.Provider,
      {
        columns: columns,
        style: _tableConstants.tableLayoutStyles.table
      },
      _react2.default.createElement(_reactabular.Table.Header, null),
      _react2.default.createElement(_reactabular.Table.Body, { rows: sortedRows, rowKey: 'id' })
    );
  };

  return OwnedSectionsTable;
}(_react.Component);

OwnedSectionsTable.propTypes = {
  sectionIds: _react.PropTypes.arrayOf(_react.PropTypes.number).isRequired,
  onEdit: _react.PropTypes.func.isRequired,

  //Provided by redux
  sectionRows: _react.PropTypes.arrayOf(_shapes.sortableSectionShape).isRequired
};
var UnconnectedOwnedSectionsTable = exports.UnconnectedOwnedSectionsTable = OwnedSectionsTable;

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
  return {
    sectionRows: (0, _teacherSectionsRedux.getSectionRows)(state, ownProps.sectionIds)
  };
})(OwnedSectionsTable);

/***/ }),

/***/ 3542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedSectionActionDropdown = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _shapes = __webpack_require__(798);

var _PopUpMenu = __webpack_require__(1011);

var _PopUpMenu2 = _interopRequireDefault(_PopUpMenu);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _urlHelpers = __webpack_require__(784);

var _teacherSectionsRedux = __webpack_require__(731);

var _reactRedux = __webpack_require__(53);

var _PrintCertificates = __webpack_require__(3543);

var _PrintCertificates2 = _interopRequireDefault(_PrintCertificates);

var _FontAwesome = __webpack_require__(156);

var _FontAwesome2 = _interopRequireDefault(_FontAwesome);

var _BaseDialog = __webpack_require__(500);

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _DialogFooter = __webpack_require__(965);

var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

var _QuickActionsCell = __webpack_require__(1748);

var _QuickActionsCell2 = _interopRequireDefault(_QuickActionsCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  xIcon: {
    paddingRight: 5
  },
  heading: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderStyle: 'solid',
    borderColor: _color2.default.default_text,
    paddingBottom: 20,
    marginBottom: 30
  }
};

var SectionActionDropdown = function (_Component) {
  _inherits(SectionActionDropdown, _Component);

  function SectionActionDropdown() {
    var _temp, _this, _ret;

    _classCallCheck(this, SectionActionDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      deleting: false
    }, _this.onConfirmDelete = function () {
      var removeSection = _this.props.removeSection;

      var section = _this.props.sectionData;
      $.ajax({
        url: "/v2/sections/" + section.id,
        method: 'DELETE'
      }).done(function () {
        removeSection(section.id);
      }).fail(function (jqXhr, status) {
        // We may want to handle this more cleanly in the future, but for now this
        // matches the experience we got in angular
        alert(_locale2.default.unexpectedError());
        console.error(status);
      });
    }, _this.onClickEdit = function () {
      _this.props.handleEdit(_this.props.sectionData.id);
    }, _this.onClickHideShow = function () {
      _this.props.toggleSectionHidden(_this.props.sectionData.id);
    }, _this.onClickSync = function () {
      // Section code is the course ID, without the G- or C- prefix.
      var courseId = _this.props.sectionCode.replace(/^[GC]-/, '');
      _this.props.updateRoster(courseId, _this.props.sectionName);
    }, _this.onRequestDelete = function () {
      _this.setState({ deleting: true });
    }, _this.onCancelDelete = function () {
      _this.setState({ deleting: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SectionActionDropdown.prototype.render = function render() {
    var sectionData = this.props.sectionData;


    return _react2.default.createElement(
      "span",
      null,
      _react2.default.createElement(
        _QuickActionsCell2.default,
        null,
        _react2.default.createElement(
          _PopUpMenu2.default.Item,
          {
            href: (0, _urlHelpers.pegasus)("/teacher-dashboard#/sections/" + sectionData.id)
          },
          _locale2.default.sectionViewProgress()
        ),
        _react2.default.createElement(
          _PopUpMenu2.default.Item,
          {
            href: (0, _urlHelpers.pegasus)("/teacher-dashboard#/sections/" + sectionData.id + "/manage")
          },
          _locale2.default.manageStudents()
        ),
        sectionData.loginType !== _shapes.OAuthSectionTypes.google_classroom && sectionData.loginType !== _shapes.OAuthSectionTypes.clever && _react2.default.createElement(
          _PopUpMenu2.default.Item,
          {
            href: (0, _urlHelpers.pegasus)("/teacher-dashboard#/sections/" + sectionData.id + "/print_signin_cards")
          },
          _locale2.default.printLoginCards()
        ),
        _react2.default.createElement(_PopUpMenu.MenuBreak, null),
        _react2.default.createElement(
          _PopUpMenu2.default.Item,
          {
            onClick: this.onClickEdit
          },
          _locale2.default.editSectionDetails()
        ),
        _react2.default.createElement(_PrintCertificates2.default, {
          sectionId: sectionData.id,
          assignmentName: sectionData.assignmentNames[0]
        }),
        sectionData.loginType === _shapes.OAuthSectionTypes.clever && _react2.default.createElement(
          _PopUpMenu2.default.Item,
          {
            onClick: this.onClickSync
          },
          _locale2.default.syncClever()
        ),
        sectionData.loginType === _shapes.OAuthSectionTypes.google_classroom && _react2.default.createElement(
          _PopUpMenu2.default.Item,
          {
            onClick: this.onClickSync
          },
          _locale2.default.syncGoogleClassroom()
        ),
        _react2.default.createElement(
          _PopUpMenu2.default.Item,
          {
            onClick: this.onClickHideShow
          },
          this.props.sectionData.hidden ? _locale2.default.showSection() : _locale2.default.hideSection()
        ),
        sectionData.studentCount === 0 && _react2.default.createElement(
          _PopUpMenu2.default.Item,
          {
            onClick: this.onRequestDelete,
            color: _color2.default.red
          },
          _react2.default.createElement(_FontAwesome2.default, { icon: " fa-times-circle", style: styles.xIcon }),
          _locale2.default.deleteSection()
        )
      ),
      _react2.default.createElement(
        _BaseDialog2.default,
        {
          useUpdatedStyles: true,
          uncloseable: true,
          isOpen: this.state.deleting,
          style: { paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }
        },
        _react2.default.createElement(
          "h2",
          { style: styles.heading },
          _locale2.default.deleteSection()
        ),
        _react2.default.createElement(
          "div",
          null,
          _locale2.default.deleteSectionConfirm()
        ),
        _react2.default.createElement("br", null),
        _react2.default.createElement(
          "div",
          null,
          _locale2.default.deleteSectionHideSuggestion()
        ),
        _react2.default.createElement(
          _DialogFooter2.default,
          null,
          _react2.default.createElement(_Button2.default, {
            "class": "ui-test-cancel-delete",
            text: _locale2.default.dialogCancel(),
            onClick: this.onCancelDelete,
            color: "gray"
          }),
          _react2.default.createElement(_Button2.default, {
            "class": "ui-test-confirm-delete",
            text: _locale2.default.delete(),
            onClick: this.onConfirmDelete,
            color: "red"
          })
        )
      )
    );
  };

  return SectionActionDropdown;
}(_react.Component);

SectionActionDropdown.propTypes = {
  handleEdit: _react.PropTypes.func,
  sectionData: _shapes.sortableSectionShape.isRequired,

  //Provided by redux
  removeSection: _react.PropTypes.func.isRequired,
  toggleSectionHidden: _react.PropTypes.func.isRequired,
  sectionCode: _react.PropTypes.string,
  sectionName: _react.PropTypes.string,
  updateRoster: _react.PropTypes.func.isRequired
};
var UnconnectedSectionActionDropdown = exports.UnconnectedSectionActionDropdown = SectionActionDropdown;

exports.default = (0, _reactRedux.connect)(function (state, props) {
  return {
    sectionCode: (0, _teacherSectionsRedux.sectionCode)(state, props.sectionData.id),
    sectionName: (0, _teacherSectionsRedux.sectionName)(state, props.sectionData.id)
  };
}, {
  removeSection: _teacherSectionsRedux.removeSection,
  toggleSectionHidden: _teacherSectionsRedux.toggleSectionHidden,
  updateRoster: _teacherSectionsRedux.importOrUpdateRoster
})(SectionActionDropdown);

/***/ }),

/***/ 3543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _urlHelpers = __webpack_require__(784);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _radium = __webpack_require__(83);

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STANDARD_PADDING = 20;

var styles = {
  main: {
    margin: 0
  },
  outerStyle: {
    paddingLeft: STANDARD_PADDING,
    paddingRight: STANDARD_PADDING,
    paddingTop: STANDARD_PADDING / 4,
    paddingBottom: STANDARD_PADDING / 4,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: _color2.default.lightest_gray
    }
  },
  actionText: {
    fontSize: 13,
    color: _color2.default.dark_charcoal
  }
};

var PrintCertificates = function (_Component) {
  _inherits(PrintCertificates, _Component);

  function PrintCertificates() {
    var _temp, _this, _ret;

    _classCallCheck(this, PrintCertificates);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      names: []
    }, _this.onClickPrintCerts = function () {
      _jquery2.default.ajax('/v2/sections/' + _this.props.sectionId + '/students').done(function (result) {
        var names = result.map(function (student) {
          return student.name;
        });
        _this.setState({ names: names }, _this.submitForm);
      });
    }, _this.submitForm = function () {
      _this.certForm.submit();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PrintCertificates.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'form',
      {
        style: styles.main,
        ref: function ref(element) {
          return _this2.certForm = element;
        },
        action: (0, _urlHelpers.pegasus)('/certificates'),
        method: 'POST'
      },
      _react2.default.createElement('input', { type: 'hidden', name: 'script', defaultValue: this.props.assignmentName }),
      this.state.names.map(function (name, index) {
        return _react2.default.createElement('input', { key: index, type: 'hidden', name: 'names[]', value: name });
      }),
      _react2.default.createElement(
        'div',
        { style: styles.outerStyle },
        _react2.default.createElement(
          'div',
          { style: styles.actionText, onClick: this.onClickPrintCerts },
          _locale2.default.printCertificates()
        )
      )
    );
  };

  return PrintCertificates;
}(_react.Component);

PrintCertificates.propTypes = {
  sectionId: _react.PropTypes.number.isRequired,
  assignmentName: _react.PropTypes.string
};
exports.default = (0, _radium2.default)(PrintCertificates);
module.exports = exports['default'];

/***/ }),

/***/ 3544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedRosterDialog = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _BaseDialog = __webpack_require__(500);

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _shapes = __webpack_require__(798);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _teacherSectionsRedux = __webpack_require__(731);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  title: {
    position: 'absolute',
    left: 20,
    color: _color2.default.dark_charcoal,
    margin: '15px 0'
  },
  content: {
    position: 'absolute',
    left: 20,
    top: 50,
    right: 20,
    bottom: 70,
    overflowY: 'scroll'
  },
  classroomRow: {
    padding: 10,
    cursor: 'pointer'
  },
  highlightRow: {
    backgroundColor: _color2.default.default_blue,
    color: _color2.default.white
  },
  footer: {
    position: 'absolute',
    bottom: 15,
    right: 20,
    left: 20
  },
  buttonPrimary: {
    float: 'right',
    background: _color2.default.orange,
    color: _color2.default.white,
    border: '1px solid #b07202',
    borderRadius: 3,
    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.63)',
    fontSize: 14,
    padding: '8px 20px'
  },
  buttonSecondary: {
    float: 'left',
    background: '#eee',
    color: '#5b6770',
    border: '1px solid #c5c5c5'
  },
  error: {
    fontSize: 10,
    color: _color2.default.light_gray,
    display: 'none'
  }
};

var ClassroomList = function ClassroomList(_ref) {
  var classrooms = _ref.classrooms,
      onSelect = _ref.onSelect,
      selectedId = _ref.selectedId,
      provider = _ref.provider;
  return classrooms.length ? _react2.default.createElement(
    'div',
    null,
    classrooms.map(function (classroom) {
      return _react2.default.createElement(
        'div',
        {
          style: Object.assign({}, styles.classroomRow, selectedId === classroom.id && styles.highlightRow),
          key: classroom.id,
          onClick: onSelect.bind(null, classroom.id)
        },
        classroom.name,
        classroom.section && _react2.default.createElement(
          'span',
          { style: { color: '#aaa' } },
          ' (',
          classroom.section,
          ')'
        ),
        _react2.default.createElement(
          'span',
          { style: { float: 'right' } },
          _locale2.default.code(),
          _react2.default.createElement(
            'span',
            { style: { fontFamily: 'monospace' } },
            ' ',
            classroom.enrollment_code
          )
        )
      );
    })
  ) : _react2.default.createElement(NoClassroomsFound, { provider: provider });
};
ClassroomList.propTypes = {
  classrooms: _react.PropTypes.array.isRequired,
  onSelect: _react.PropTypes.func.isRequired,
  selectedId: _react.PropTypes.string,
  provider: _react.PropTypes.oneOf(Object.keys(_shapes.OAuthSectionTypes))
};

var NoClassroomsFound = function NoClassroomsFound(_ref2) {
  var provider = _ref2.provider;

  switch (provider) {
    case _shapes.OAuthSectionTypes.google_classroom:
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          _locale2.default.noClassroomsFound()
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://classroom.google.com/' },
          _locale2.default.addRemoveGoogleClassrooms()
        )
      );
    case _shapes.OAuthSectionTypes.clever:
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          _locale2.default.noClassroomsFound()
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://classroom.google.com/' },
          _locale2.default.addRemoveCleverClassrooms()
        )
      );
  }
};
NoClassroomsFound.propTypes = {
  provider: _react.PropTypes.oneOf(Object.keys(_shapes.OAuthSectionTypes))
};

var LoadError = function LoadError(_ref3) {
  var error = _ref3.error;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      _locale2.default.authorizeGoogleClassroomsText()
    ),
    _react2.default.createElement(
      'a',
      { href: '/users/auth/google_oauth2?scope=userinfo.email,userinfo.profile,classroom.courses.readonly,classroom.rosters.readonly' },
      _locale2.default.authorizeGoogleClassrooms()
    ),
    _react2.default.createElement(
      'p',
      { style: styles.error },
      error.status,
      ' ',
      error.message
    )
  );
};
LoadError.propTypes = {
  error: _shapes.loadErrorShape
};

var RosterDialog = function (_React$Component) {
  _inherits(RosterDialog, _React$Component);

  function RosterDialog() {
    var _temp, _this, _ret;

    _classCallCheck(this, RosterDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { selectedId: null }, _this.importClassroom = function () {
      var classrooms = _this.props.classrooms;
      var selectedName = classrooms && classrooms.find(function (classroom) {
        return classroom.id === _this.state.selectedId;
      }).name;

      _this.props.handleImport(_this.state.selectedId, selectedName);
      _this.setState({ selectedId: null });
    }, _this.cancel = function () {
      _this.props.handleCancel();
    }, _this.onClassroomSelected = function (id) {
      _this.setState({ selectedId: id });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  RosterDialog.prototype.render = function render() {
    var title = '';
    switch (this.props.provider) {
      case _shapes.OAuthSectionTypes.google_classroom:
        title = _locale2.default.selectGoogleClassroom();
        break;
      case _shapes.OAuthSectionTypes.clever:
        title = _locale2.default.selectCleverSection();
        break;
    }

    return _react2.default.createElement(
      _BaseDialog2.default,
      _extends({
        useUpdatedStyles: true,
        fixedHeight: 480,
        isOpen: this.props.isOpen,
        handleClose: this.cancel
      }, this.props),
      _react2.default.createElement(
        'h2',
        { style: styles.title },
        title
      ),
      _react2.default.createElement(
        'div',
        { style: styles.content },
        this.props.loadError ? _react2.default.createElement(LoadError, { error: this.props.loadError }) : this.props.classrooms ? _react2.default.createElement(ClassroomList, {
          classrooms: this.props.classrooms,
          onSelect: this.onClassroomSelected,
          selectedId: this.state.selectedId,
          provider: this.props.provider
        }) : _locale2.default.loading()
      ),
      _react2.default.createElement(
        'div',
        { style: styles.footer },
        _react2.default.createElement(
          'button',
          {
            onClick: this.cancel,
            style: _extends({}, styles.buttonPrimary, styles.buttonSecondary)
          },
          _locale2.default.dialogCancel()
        ),
        _react2.default.createElement(
          'button',
          {
            onClick: this.importClassroom,
            style: Object.assign({}, styles.buttonPrimary, !this.state.selectedId && { opacity: 0.5 }),
            disabled: !this.state.selectedId
          },
          _locale2.default.chooseSection()
        )
      )
    );
  };

  return RosterDialog;
}(_react2.default.Component);

RosterDialog.propTypes = {
  // Provided by Redux
  handleImport: _react.PropTypes.func,
  handleCancel: _react.PropTypes.func,
  isOpen: _react.PropTypes.bool,
  classrooms: _react.PropTypes.arrayOf(_shapes.classroomShape),
  loadError: _shapes.loadErrorShape,
  provider: _react.PropTypes.oneOf(Object.keys(_shapes.OAuthSectionTypes))
};
var UnconnectedRosterDialog = exports.UnconnectedRosterDialog = RosterDialog;
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isOpen: (0, _teacherSectionsRedux.isRosterDialogOpen)(state),
    classrooms: state.teacherSections.classrooms,
    loadError: state.teacherSections.loadError,
    provider: state.teacherSections.provider
  };
}, {
  handleImport: _teacherSectionsRedux.importOrUpdateRoster,
  handleCancel: _teacherSectionsRedux.cancelImportRosterFlow
})(RosterDialog);

/***/ }),

/***/ 3545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _BaseDialog = __webpack_require__(500);

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _LoginTypePicker = __webpack_require__(2834);

var _LoginTypePicker2 = _interopRequireDefault(_LoginTypePicker);

var _EditSectionForm = __webpack_require__(2987);

var _EditSectionForm2 = _interopRequireDefault(_EditSectionForm);

var _PadAndCenter = __webpack_require__(2093);

var _PadAndCenter2 = _interopRequireDefault(_PadAndCenter);

var _shapes = __webpack_require__(798);

var _teacherSectionsRedux = __webpack_require__(731);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * UI for a teacher to add a new class section.  For editing a section see
 * EditSectionDialog.
 */
var AddSectionDialog = function (_Component) {
  _inherits(AddSectionDialog, _Component);

  function AddSectionDialog() {
    _classCallCheck(this, AddSectionDialog);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AddSectionDialog.prototype.render = function render() {
    var _props = this.props,
        isOpen = _props.isOpen,
        section = _props.section,
        beginImportRosterFlow = _props.beginImportRosterFlow,
        setLoginType = _props.setLoginType,
        handleCancel = _props.handleCancel;

    var _ref = section || {},
        loginType = _ref.loginType;

    var title = _locale2.default.newSection();
    return _react2.default.createElement(
      _BaseDialog2.default,
      {
        useUpdatedStyles: true,
        fixedWidth: 1010,
        isOpen: isOpen,
        uncloseable: true
      },
      _react2.default.createElement(
        _PadAndCenter2.default,
        null,
        !loginType && _react2.default.createElement(_LoginTypePicker2.default, {
          title: title,
          handleImportOpen: beginImportRosterFlow,
          setLoginType: setLoginType,
          handleCancel: handleCancel
        }),
        loginType && _react2.default.createElement(_EditSectionForm2.default, { title: title })
      )
    );
  };

  return AddSectionDialog;
}(_react.Component);

AddSectionDialog.propTypes = {
  // Provided by Redux
  isOpen: _react.PropTypes.bool.isRequired,
  section: _shapes.sectionShape,
  beginImportRosterFlow: _react.PropTypes.func.isRequired,
  setLoginType: _react.PropTypes.func.isRequired,
  handleCancel: _react.PropTypes.func.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isOpen: (0, _teacherSectionsRedux.isAddingSection)(state.teacherSections),
    section: state.teacherSections.sectionBeingEdited
  };
}, function (dispatch) {
  return {
    beginImportRosterFlow: function beginImportRosterFlow() {
      return dispatch((0, _teacherSectionsRedux.beginImportRosterFlow)());
    },
    setLoginType: function setLoginType(loginType) {
      return dispatch((0, _teacherSectionsRedux.editSectionProperties)({ loginType: loginType }));
    },
    handleCancel: function handleCancel() {
      return dispatch((0, _teacherSectionsRedux.cancelEditingSection)());
    }
  };
})(AddSectionDialog);
module.exports = exports['default'];

/***/ }),

/***/ 3546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(82);

var _lodash2 = _interopRequireDefault(_lodash);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _shapes = __webpack_require__(798);

var _teacherSectionsRedux = __webpack_require__(731);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  secondary: {
    marginTop: 10
  }
};

var noAssignment = (0, _teacherSectionsRedux.assignmentId)(null, null);
//Additional valid option in dropdown - no associated course
var decideLater = '__decideLater__';
var isValidAssignment = function isValidAssignment(id) {
  return id !== noAssignment && id !== decideLater;
};

/**
 * Group our assignments into categories for our dropdown
 */
var groupedAssignments = function groupedAssignments(assignments) {
  return (0, _lodash2.default)(assignments).values().orderBy(['category_priority', 'category', 'position', 'name']).groupBy('category').value();
};

/**
 * This component displays a dropdown of courses/scripts, with each of these
 * grouped and ordered appropriately.
 */

var AssignmentSelector = function (_Component) {
  _inherits(AssignmentSelector, _Component);

  function AssignmentSelector(props) {
    _classCallCheck(this, AssignmentSelector);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    var section = props.section;


    var selectedPrimaryId = void 0,
        selectedSecondaryId = void 0;
    if (!section) {
      selectedPrimaryId = noAssignment;
      selectedSecondaryId = noAssignment;
    } else if (section.courseId) {
      selectedPrimaryId = (0, _teacherSectionsRedux.assignmentId)(section.courseId, null);
      selectedSecondaryId = (0, _teacherSectionsRedux.assignmentId)(null, section.scriptId);
    } else {
      selectedPrimaryId = (0, _teacherSectionsRedux.assignmentId)(null, section.scriptId);
      selectedSecondaryId = noAssignment;
    }

    _this.state = {
      selectedPrimaryId: selectedPrimaryId,
      selectedSecondaryId: selectedSecondaryId
    };
    return _this;
  }

  AssignmentSelector.prototype.getSelectedAssignment = function getSelectedAssignment() {
    var _state = this.state,
        selectedPrimaryId = _state.selectedPrimaryId,
        selectedSecondaryId = _state.selectedSecondaryId;

    var primary = this.props.assignments[selectedPrimaryId];

    if (isValidAssignment(selectedSecondaryId)) {
      // If we have a secondary, that implies that (a) our primary is a course
      // and (b) our secondary is a script
      var secondary = this.props.assignments[selectedSecondaryId];
      return {
        courseId: primary.courseId,
        scriptId: secondary.scriptId
      };
    } else {
      // If we don't have a secondary, primary could be course, script, or null
      return {
        courseId: primary ? primary.courseId : null,
        scriptId: primary ? primary.scriptId : null
      };
    }
  };

  AssignmentSelector.prototype.render = function render() {
    var _props = this.props,
        assignments = _props.assignments,
        primaryAssignmentIds = _props.primaryAssignmentIds,
        dropdownStyle = _props.dropdownStyle,
        disabled = _props.disabled;
    var _state2 = this.state,
        selectedPrimaryId = _state2.selectedPrimaryId,
        selectedSecondaryId = _state2.selectedSecondaryId;


    var primaryAssignIds = primaryAssignmentIds;
    if (isValidAssignment(selectedPrimaryId) && !primaryAssignmentIds.includes(selectedPrimaryId)) {
      primaryAssignIds = [selectedPrimaryId].concat(primaryAssignIds);
    }

    var grouped = groupedAssignments(primaryAssignIds.map(function (id) {
      return assignments[id];
    }));
    var secondaryOptions = void 0;
    var primaryAssignment = assignments[selectedPrimaryId];
    if (primaryAssignment) {
      secondaryOptions = primaryAssignment.scriptAssignIds;
    }

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'select',
        {
          id: 'uitest-primary-assignment',
          value: selectedPrimaryId,
          onChange: this.onChangePrimary,
          style: dropdownStyle,
          disabled: disabled
        },
        _react2.default.createElement('option', { key: 'default', value: noAssignment }),
        this.props.chooseLaterOption && _react2.default.createElement(
          'option',
          { key: 'later', value: decideLater },
          _locale2.default.decideLater()
        ),
        Object.keys(grouped).map(function (groupName, index) {
          return _react2.default.createElement(
            'optgroup',
            { key: index, label: groupName },
            grouped[groupName].map(function (assignment) {
              return assignment !== undefined && _react2.default.createElement(
                'option',
                {
                  key: assignment.assignId,
                  value: assignment.assignId
                },
                assignment.name
              );
            })
          );
        })
      ),
      secondaryOptions && _react2.default.createElement(
        'div',
        { style: styles.secondary },
        _react2.default.createElement(
          'div',
          null,
          'Select current unit:'
        ),
        _react2.default.createElement(
          'select',
          {
            id: 'uitest-secondary-assignment',
            value: selectedSecondaryId,
            onChange: this.onChangeSecondary,
            style: dropdownStyle,
            disabled: disabled
          },
          _react2.default.createElement('option', { value: noAssignment }),
          secondaryOptions.map(function (scriptAssignId) {
            return assignments[scriptAssignId] && _react2.default.createElement(
              'option',
              {
                key: scriptAssignId,
                value: scriptAssignId
              },
              assignments[scriptAssignId].name
            );
          })
        )
      )
    );
  };

  return AssignmentSelector;
}(_react.Component);

AssignmentSelector.propTypes = {
  section: _shapes.sectionShape,
  assignments: _react.PropTypes.objectOf(_shapes.assignmentShape).isRequired,
  primaryAssignmentIds: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  chooseLaterOption: _react.PropTypes.bool,
  dropdownStyle: _react.PropTypes.object,
  onChange: _react.PropTypes.func,
  disabled: _react.PropTypes.bool
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onChangePrimary = function (event) {
    var _props2 = _this2.props,
        assignments = _props2.assignments,
        section = _props2.section;

    var currentSecondaryId = void 0;
    if (!section) {
      currentSecondaryId = noAssignment;
    } else {
      currentSecondaryId = (0, _teacherSectionsRedux.assignmentId)(null, section.scriptId);
    }

    var selectedPrimaryId = event.target.value;
    var scriptAssignIds = isValidAssignment(selectedPrimaryId) ? assignments[selectedPrimaryId].scriptAssignIds || [] : [];

    // If our current secondaryId is in this course, default to that
    var selectedSecondaryId = scriptAssignIds.includes(currentSecondaryId) ? currentSecondaryId : noAssignment;

    _this2.setState({
      selectedPrimaryId: selectedPrimaryId,
      selectedSecondaryId: selectedSecondaryId
    }, _this2.reportChange);
  };

  this.onChangeSecondary = function (event) {
    _this2.setState({
      selectedSecondaryId: event.target.value
    }, _this2.reportChange);
  };

  this.reportChange = function () {
    if (typeof _this2.props.onChange === 'function') {
      _this2.props.onChange(_this2.getSelectedAssignment());
    }
  };
};

exports.default = AssignmentSelector;
module.exports = exports['default'];

/***/ }),

/***/ 3547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _BaseDialog = __webpack_require__(500);

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _EditSectionForm = __webpack_require__(2987);

var _EditSectionForm2 = _interopRequireDefault(_EditSectionForm);

var _PadAndCenter = __webpack_require__(2093);

var _PadAndCenter2 = _interopRequireDefault(_PadAndCenter);

var _teacherSectionsRedux = __webpack_require__(731);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * UI for a teacher to edit details of an existing class section.
 * For adding a new section, see AddSectionDialog.
 */
var EditSectionDialog = function (_Component) {
  _inherits(EditSectionDialog, _Component);

  function EditSectionDialog() {
    _classCallCheck(this, EditSectionDialog);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  EditSectionDialog.prototype.render = function render() {
    return _react2.default.createElement(
      _BaseDialog2.default,
      {
        useUpdatedStyles: true,
        fixedWidth: 1010,
        isOpen: this.props.isOpen,
        uncloseable: true
      },
      _react2.default.createElement(
        _PadAndCenter2.default,
        null,
        _react2.default.createElement(_EditSectionForm2.default, { title: _locale2.default.editSectionDetails() })
      )
    );
  };

  return EditSectionDialog;
}(_react.Component);

EditSectionDialog.propTypes = {
  isOpen: _react.PropTypes.bool.isRequired };
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isOpen: (0, _teacherSectionsRedux.isEditingSection)(state.teacherSections)
  };
})(EditSectionDialog);
module.exports = exports['default'];

/***/ }),

/***/ 3548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnconnectedSetUpSections = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _teacherSectionsRedux = __webpack_require__(731);

var _SetUpMessage = __webpack_require__(2986);

var _SetUpMessage2 = _interopRequireDefault(_SetUpMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SetUpSections = function (_Component) {
  _inherits(SetUpSections, _Component);

  function SetUpSections() {
    var _temp, _this, _ret;

    _classCallCheck(this, SetUpSections);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.beginEditingNewSection = function () {
      return _this.props.beginEditingNewSection();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Wrapped to avoid passing event args


  SetUpSections.prototype.render = function render() {
    return _react2.default.createElement(_SetUpMessage2.default, {
      type: 'sections',
      headingText: _locale2.default.setUpClassroom(),
      descriptionText: _locale2.default.createNewClassroom(),
      buttonText: _locale2.default.createSection(),
      className: 'uitest-set-up-sections',
      buttonClass: 'uitest-newsection',
      onClick: this.beginEditingNewSection
    });
  };

  return SetUpSections;
}(_react.Component);

SetUpSections.propTypes = {
  beginEditingNewSection: _react.PropTypes.func.isRequired
};
var UnconnectedSetUpSections = exports.UnconnectedSetUpSections = SetUpSections;
exports.default = (0, _reactRedux.connect)(undefined, {
  beginEditingNewSection: _teacherSectionsRedux.beginEditingNewSection
})(SetUpSections);

/***/ }),

/***/ 3549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  main: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _color2.default.border_gray,
    width: _styleConstants2.default['content-width'],
    backgroundColor: _color2.default.white,
    marginTop: 25
  },
  mainDashed: {
    borderWidth: 5,
    borderStyle: 'dashed',
    borderColor: _color2.default.border_gray,
    boxSizing: "border-box"
  },
  heading: {
    fontFamily: '"Gotham 4r", sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: _color2.default.white,
    color: _color2.default.teal
  },
  details: {
    fontFamily: '"Gotham 4r", sans-serif',
    fontSize: 14,
    marginTop: 5,
    color: _color2.default.charcoal
  },
  wordBox: {
    width: _styleConstants2.default['content-width'] - 475,
    marginLeft: 25,
    marginTop: 25,
    marginBottom: 25,
    float: 'left',
    borderWidth: 1,
    borderColor: 'red'
  },
  actionBox: {
    float: 'right'
  },
  inputBox: {
    float: 'left',
    marginTop: 27,
    borderRadius: 0,
    height: 26,
    paddingLeft: 25,
    width: 200
  },
  button: {
    float: 'right',
    marginTop: 28,
    marginLeft: 20,
    marginRight: 25
  },
  clear: {
    clear: 'both'
  }
};

var INITIAL_STATE = {
  sectionCode: ''
};

var JoinSection = function (_React$Component) {
  _inherits(JoinSection, _React$Component);

  function JoinSection() {
    var _temp, _this, _ret;

    _classCallCheck(this, JoinSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = _extends({}, INITIAL_STATE), _this.handleChange = function (event) {
      return _this.setState({ sectionCode: event.target.value });
    }, _this.handleKeyUp = function (event) {
      if (event.key === 'Enter') {
        _this.joinSection();
      } else if (event.key === 'Escape') {
        _this.setState(INITIAL_STATE);
      }
    }, _this.joinSection = function () {
      var sectionCode = _this.state.sectionCode;

      _this.setState(INITIAL_STATE);

      _jquery2.default.post({
        url: '/api/v1/sections/' + sectionCode + '/join',
        dataType: "json"
      }).done(function (data) {
        var sectionName = data.sections.find(function (s) {
          return s.code === sectionCode.toUpperCase();
        }).name;
        _this.props.updateSections(data.sections);
        _this.props.updateSectionsResult("join", data.result, sectionName, sectionCode);
      }).fail(function (data) {
        var result = data.responseJSON && data.responseJSON.result ? data.responseJSON.result : "fail";
        _this.props.updateSectionsResult("join", result, null, sectionCode.toUpperCase());
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  JoinSection.prototype.render = function render() {
    var enrolledInASection = this.props.enrolledInASection;


    return _react2.default.createElement(
      'div',
      { style: _extends({}, styles.main, enrolledInASection ? styles.main : styles.mainDashed) },
      _react2.default.createElement(
        'div',
        { style: styles.wordBox },
        _react2.default.createElement(
          'div',
          { style: styles.heading },
          _locale2.default.joinASection()
        ),
        _react2.default.createElement(
          'div',
          { style: styles.details },
          _locale2.default.joinSectionDescription()
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.actionBox },
        _react2.default.createElement('input', {
          type: 'text',
          name: 'sectionCode',
          value: this.state.sectionCode,
          onChange: this.handleChange,
          onKeyUp: this.handleKeyUp,
          style: styles.inputBox,
          placeholder: _locale2.default.joinSectionPlaceholder()
        }),
        _react2.default.createElement(_Button2.default, {
          onClick: this.joinSection,
          color: _Button2.default.ButtonColor.gray,
          text: _locale2.default.joinSection(),
          style: styles.button
        })
      ),
      _react2.default.createElement('div', { style: styles.clear })
    );
  };

  return JoinSection;
}(_react2.default.Component);

JoinSection.propTypes = {
  enrolledInASection: _react.PropTypes.bool.isRequired,
  updateSections: _react.PropTypes.func.isRequired,
  updateSectionsResult: _react.PropTypes.func.isRequired
};
exports.default = JoinSection;
module.exports = exports['default'];

/***/ }),

/***/ 3550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JoinSectionNotifications;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Notification = __webpack_require__(815);

var _Notification2 = _interopRequireDefault(_Notification);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function JoinSectionNotifications(_ref) {
  var action = _ref.action,
      result = _ref.result,
      name = _ref.name,
      id = _ref.id;

  if (action === 'join' && result === 'success') {
    return _react2.default.createElement(JoinSectionSuccessNotification, { sectionName: name });
  } else if (action === 'leave' && result === 'success') {
    return _react2.default.createElement(LeaveSectionSuccessNotification, { sectionName: name, sectionId: id });
  } else if (action === 'join' && result === 'section_notfound') {
    return _react2.default.createElement(JoinSectionNotFoundNotification, { sectionId: id });
  } else if (action === 'join' && result === 'fail') {
    return _react2.default.createElement(JoinSectionFailNotification, { sectionId: id });
  } else if (action === 'join' && result === 'exists') {
    return _react2.default.createElement(JoinSectionExistsNotification, { sectionName: name });
  }
  return null;
} /** @file Notifications showing results of the join/leave section operation. */

JoinSectionNotifications.propTypes = {
  action: _react.PropTypes.string,
  result: _react.PropTypes.string,
  name: _react.PropTypes.string,
  id: _react.PropTypes.string
};

var JoinSectionSuccessNotification = function JoinSectionSuccessNotification(_ref2) {
  var sectionName = _ref2.sectionName;
  return _react2.default.createElement(_Notification2.default, {
    type: 'success',
    notice: _locale2.default.sectionsNotificationSuccess(),
    details: _locale2.default.sectionsNotificationJoinSuccess({ sectionName: sectionName }),
    dismissible: true
  });
};
JoinSectionSuccessNotification.propTypes = {
  sectionName: _react.PropTypes.string.isRequired
};

var LeaveSectionSuccessNotification = function LeaveSectionSuccessNotification(_ref3) {
  var sectionName = _ref3.sectionName,
      sectionId = _ref3.sectionId;
  return _react2.default.createElement(_Notification2.default, {
    type: 'success',
    notice: _locale2.default.sectionsNotificationSuccess(),
    details: _locale2.default.sectionsNotificationLeaveSuccess({ sectionName: sectionName, sectionId: sectionId }),
    dismissible: true
  });
};
LeaveSectionSuccessNotification.propTypes = JoinSectionSuccessNotification.propTypes;

var JoinSectionNotFoundNotification = function JoinSectionNotFoundNotification(_ref4) {
  var sectionId = _ref4.sectionId;
  return _react2.default.createElement(_Notification2.default, {
    type: 'failure',
    notice: _locale2.default.sectionsNotificationFailure(),
    details: _locale2.default.sectionsNotificationJoinNotFound({ sectionId: sectionId }),
    dismissible: true
  });
};
JoinSectionNotFoundNotification.propTypes = {
  sectionId: _react.PropTypes.string.isRequired
};

var JoinSectionFailNotification = function JoinSectionFailNotification(_ref5) {
  var sectionId = _ref5.sectionId;
  return _react2.default.createElement(_Notification2.default, {
    type: 'failure',
    notice: _locale2.default.sectionsNotificationFailure(),
    details: _locale2.default.sectionsNotificationJoinFail({ sectionId: sectionId }),
    dismissible: true
  });
};
JoinSectionFailNotification.propTypes = JoinSectionNotFoundNotification.propTypes;

var JoinSectionExistsNotification = function JoinSectionExistsNotification(_ref6) {
  var sectionName = _ref6.sectionName;
  return _react2.default.createElement(_Notification2.default, {
    type: 'success',
    notice: _locale2.default.sectionsNotificationSuccess(),
    details: _locale2.default.sectionsNotificationJoinExists({ sectionName: sectionName }),
    dismissible: true
  });
};
JoinSectionExistsNotification.propTypes = JoinSectionSuccessNotification.propTypes;
module.exports = exports['default'];

/***/ }),

/***/ 3551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _shapes = __webpack_require__(1708);

var _shapes2 = _interopRequireDefault(_shapes);

var _sharedConstants = __webpack_require__(503);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _urlHelpers = __webpack_require__(784);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// When this table gets converted to reacttabular, it should also
// use styles from /tables/tableConstants.js
var styles = {
  table: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _color2.default.border_gray,
    width: _styleConstants2.default['content-width']
  },
  headerRow: {
    backgroundColor: _color2.default.table_header,
    fontWeight: 'bold',
    borderColor: _color2.default.border_light_gray,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 1
  },
  headerRowPadding: {
    paddingTop: 20,
    paddingBottom: 20
  },
  lightRow: {
    backgroundColor: _color2.default.table_light_row
  },
  darkRow: {
    backgroundColor: _color2.default.table_dark_row
  },
  row: {
    borderBottomColor: _color2.default.border_light_gray,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    paddingTop: 20,
    paddingBottom: 20
  },
  col: {
    borderRightWidth: 1,
    borderRightColor: _color2.default.border_light_gray,
    borderRightStyle: 'solid',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    color: _color2.default.charcoal,
    paddingLeft: 20,
    paddingRight: 20
  },
  sectionNameCol: {
    width: 310
  },
  courseCol: {
    width: 310
  },
  teacherCol: {
    lineHeight: '52px',
    width: 160
  },
  studentsCol: {
    width: 110
  },
  sectionCodeCol: {
    lineHeight: '52px',
    whiteSpace: 'nowrap',
    width: 135,
    borderRightWidth: 0
  },
  sectionCodeColRtl: {
    lineHeight: '52px',
    whiteSpace: 'nowrap',
    width: 210
  },
  leaveCol: {
    width: 110,
    borderLeftWidth: 1,
    borderLeftColor: _color2.default.border_light_gray,
    borderLeftStyle: 'solid'
  },
  colText: {
    color: _color2.default.charcoal,
    fontFamily: '"Gotham 5r", sans-serif',
    fontSize: 14,
    lineHeight: '22px'
  },
  link: {
    color: _color2.default.teal,
    fontFamily: '"Gotham 5r", sans-serif',
    fontSize: 14,
    textDecoration: 'none'
  }
};

var SectionsAsStudentTable = function (_React$Component) {
  _inherits(SectionsAsStudentTable, _React$Component);

  function SectionsAsStudentTable() {
    _classCallCheck(this, SectionsAsStudentTable);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SectionsAsStudentTable.prototype.onLeave = function onLeave(sectionCode, sectionName) {
    var _this2 = this;

    $.post({
      url: '/api/v1/sections/' + sectionCode + '/leave',
      dataType: "json"
    }).done(function (data) {
      _this2.props.updateSections(data.sections);
      _this2.props.updateSectionsResult("leave", data.result, sectionName, sectionCode);
    });
  };
  // isTeacher will be set false for teachers who are seeing this table as a student in another teacher's section.


  SectionsAsStudentTable.prototype.sectionHref = function sectionHref(section) {
    if (section.numberOfStudents === 0) {
      return (0, _urlHelpers.pegasus)('/teacher-dashboard#/sections/' + section.id + '/manage');
    }
    return section.linkToProgress;
  };

  SectionsAsStudentTable.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        sections = _props.sections,
        isRtl = _props.isRtl,
        isTeacher = _props.isTeacher,
        canLeave = _props.canLeave;


    return _react2.default.createElement(
      'table',
      { style: styles.table },
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          { style: styles.headerRow },
          _react2.default.createElement(
            'td',
            { style: _extends({}, styles.col, styles.sectionNameCol, styles.headerRowPadding) },
            _react2.default.createElement(
              'div',
              { style: styles.colText },
              _locale2.default.section()
            )
          ),
          _react2.default.createElement(
            'td',
            { style: _extends({}, styles.col, styles.courseCol) },
            _react2.default.createElement(
              'div',
              { style: styles.colText },
              _locale2.default.course()
            )
          ),
          isTeacher && _react2.default.createElement(
            'td',
            { style: _extends({}, styles.col, styles.studentsCol) },
            _react2.default.createElement(
              'div',
              { style: styles.colText },
              _locale2.default.students()
            )
          ),
          !isTeacher && _react2.default.createElement(
            'td',
            { style: _extends({}, styles.col, styles.teacherCol) },
            _react2.default.createElement(
              'div',
              { style: styles.colText },
              _locale2.default.teacher()
            )
          ),
          _react2.default.createElement(
            'td',
            { style: _extends({}, styles.col, isRtl ? styles.sectionCodeColRtl : styles.sectionCodeCol) },
            _react2.default.createElement(
              'div',
              { style: styles.colText },
              _locale2.default.sectionCode()
            )
          ),
          !isTeacher && canLeave && _react2.default.createElement(
            'td',
            { style: _extends({}, styles.col, styles.leaveCol) },
            _react2.default.createElement('div', { style: styles.colText })
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        sections.map(function (section, index) {
          return _react2.default.createElement(
            'tr',
            {
              style: _extends({}, index % 2 === 0 ? styles.lightRow : styles.darkRow, styles.row),
              key: index,
              className: 'test-row'
            },
            _react2.default.createElement(
              'td',
              { style: _extends({}, styles.col, styles.sectionNameCol) },
              isTeacher && _react2.default.createElement(
                'a',
                { href: _this3.sectionHref(section), style: styles.link },
                section.name
              ),
              !isTeacher && _react2.default.createElement(
                'div',
                null,
                section.name
              )
            ),
            _react2.default.createElement(
              'td',
              { style: _extends({}, styles.col, styles.courseCol) },
              _react2.default.createElement(
                'a',
                { href: section.linkToAssigned, style: styles.link },
                section.assignedTitle
              )
            ),
            isTeacher && _react2.default.createElement(
              'td',
              { style: _extends({}, styles.col, styles.col3) },
              _react2.default.createElement(
                'a',
                { href: section.linkToStudents, style: styles.link },
                section.numberOfStudents
              )
            ),
            !isTeacher && _react2.default.createElement(
              'td',
              { style: _extends({}, styles.col, styles.col3Student) },
              section.teacherName
            ),
            _react2.default.createElement(
              'td',
              { style: _extends({}, styles.col, isRtl ? styles.sectionCodeColRtl : styles.sectionCodeCol) },
              section.login_type === _sharedConstants.SectionLoginType.clever ? _locale2.default.loginTypeClever() : section.login_type === _sharedConstants.SectionLoginType.google_classroom ? _locale2.default.loginTypeGoogleClassroom() : section.code
            ),
            !isTeacher && canLeave && _react2.default.createElement(
              'td',
              { style: _extends({}, styles.col, styles.leaveCol) },
              !/^(C|G)-/.test(section.code) && _react2.default.createElement(_Button2.default, {
                style: { marginLeft: 5 },
                text: _locale2.default.leaveSection(),
                onClick: _this3.onLeave.bind(_this3, section.code, section.name),
                color: _Button2.default.ButtonColor.gray
              })
            )
          );
        })
      )
    );
  };

  return SectionsAsStudentTable;
}(_react2.default.Component);

SectionsAsStudentTable.propTypes = {
  sections: _shapes2.default.sections,
  isRtl: _react.PropTypes.bool.isRequired,
  isTeacher: _react.PropTypes.bool.isRequired,
  canLeave: _react.PropTypes.bool.isRequired,
  updateSections: _react.PropTypes.func,
  updateSectionsResult: _react.PropTypes.func
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isRtl: state.isRtl
  };
})(SectionsAsStudentTable);
module.exports = exports['default'];

/***/ }),

/***/ 3552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ImageResourceCard = __webpack_require__(3553);

var _ImageResourceCard2 = _interopRequireDefault(_ImageResourceCard);

var _ContentContainer = __webpack_require__(954);

var _ContentContainer2 = _interopRequireDefault(_ContentContainer);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _urlHelpers = __webpack_require__(784);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentWidth = _styleConstants2.default['content-width'];

var styles = {
  container: {
    width: contentWidth,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: 'wrap'
  }
};

var TeacherResources = function (_Component) {
  _inherits(TeacherResources, _Component);

  function TeacherResources() {
    _classCallCheck(this, TeacherResources);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TeacherResources.prototype.render = function render() {
    var planUrl = (0, _urlHelpers.pegasus)('/teacher-dashboard#/plan');
    var volunteerUrl = (0, _urlHelpers.pegasus)('/volunteer/local');

    return _react2.default.createElement(
      _ContentContainer2.default,
      {
        heading: _locale2.default.resources()
      },
      _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(_ImageResourceCard2.default, {
          title: _locale2.default.teacherCommunity(),
          description: _locale2.default.teacherCommunityDescription(),
          image: 'teacher-community',
          buttonText: _locale2.default.joinCommunity(),
          link: 'https://forum.code.org'
        }),
        _react2.default.createElement(_ImageResourceCard2.default, {
          title: _locale2.default.professionalLearning(),
          description: _locale2.default.professionalLearningDescription(),
          image: 'professional-learning',
          buttonText: _locale2.default.learnMore(),
          link: '/my-professional-learning'
        }),
        _react2.default.createElement(_ImageResourceCard2.default, {
          title: _locale2.default.standardsAndFramework(),
          description: _locale2.default.standardsAndFrameworkDescription(),
          image: 'standards-framework',
          buttonText: _locale2.default.reviewDocuments(),
          link: planUrl
        }),
        _react2.default.createElement(_ImageResourceCard2.default, {
          title: _locale2.default.findGuestSpeaker(),
          description: _locale2.default.findGuestSpeakerDescription(),
          image: 'guest-speaker',
          buttonText: _locale2.default.inspireStudents(),
          link: volunteerUrl
        })
      )
    );
  };

  return TeacherResources;
}(_react.Component);

exports.default = TeacherResources;
module.exports = exports['default'];

/***/ }),

/***/ 3553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  card: {
    overflow: 'hidden',
    position: 'relative',
    height: 200,
    width: 473,
    float: 'left',
    marginBottom: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: _color2.default.border_gray,
    background: _color2.default.teal
  },
  image: {
    position: 'absolute'
  },
  textbox: {
    position: 'absolute',
    width: 275,
    padding: 20
  },
  title: {
    fontSize: 24,
    paddingBottom: 10,
    fontFamily: '"Gotham 7r", sans-serif',
    color: _color2.default.white,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  description: {
    fontSize: 14,
    lineHeight: "21px",
    fontFamily: '"Gotham 4r", sans-serif',
    color: _color2.default.white,
    height: 80
  },
  ltr: {
    float: 'left'
  },
  rtl: {
    float: 'right'
  },
  rtlMargin: {
    marginRight: 160
  },
  ltrMargin: {
    marginRight: 0
  }
};

var ImageResourceCard = function (_Component) {
  _inherits(ImageResourceCard, _Component);

  function ImageResourceCard() {
    _classCallCheck(this, ImageResourceCard);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ImageResourceCard.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        description = _props.description,
        buttonText = _props.buttonText,
        link = _props.link,
        image = _props.image,
        isRtl = _props.isRtl;

    var localeStyle = isRtl ? styles.rtl : styles.ltr;
    var uncoverImage = isRtl ? styles.rtlMargin : styles.ltrMargin;

    var filenameToImgUrl = {
      "teacher-community": __webpack_require__(3554),
      "guest-speaker": __webpack_require__(3555),
      "professional-learning": __webpack_require__(3556),
      "standards-framework": __webpack_require__(3557),
      "elementary": __webpack_require__(3558),
      "middleschool": __webpack_require__(3559),
      "highschool": __webpack_require__(3560),
      "hourofcode": __webpack_require__(3561),
      "hourofcode2": __webpack_require__(3562)
    };
    var imgSrc = filenameToImgUrl[image];

    return _react2.default.createElement(
      'div',
      { style: _extends({}, styles.card, localeStyle) },
      _react2.default.createElement(
        'div',
        { style: styles.image },
        _react2.default.createElement('img', { src: imgSrc })
      ),
      _react2.default.createElement(
        'div',
        { style: _extends({}, styles.textbox, localeStyle, uncoverImage) },
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
        _react2.default.createElement('br', null),
        _react2.default.createElement(_Button2.default, {
          href: link,
          color: _Button2.default.ButtonColor.gray,
          text: buttonText,
          style: styles.button
        })
      )
    );
  };

  return ImageResourceCard;
}(_react.Component);

ImageResourceCard.propTypes = {
  title: _react.PropTypes.string.isRequired,
  description: _react.PropTypes.string.isRequired,
  buttonText: _react.PropTypes.string.isRequired,
  link: _react.PropTypes.string.isRequired,
  image: _react.PropTypes.string.isRequired,
  isRtl: _react.PropTypes.bool.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isRtl: state.isRtl
  };
})(ImageResourceCard);
module.exports = exports['default'];

/***/ }),

/***/ 3554:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "teachercommunitywp37d11625fc6fb083875f152a6016630f.png";

/***/ }),

/***/ 3555:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "findguestspeakerwp287fdc6e6a9700d926cd118ae698af5e.png";

/***/ }),

/***/ 3556:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "professionallearningwp7aea55b0516bcb6f60becdc502c93665.png";

/***/ }),

/***/ 3557:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "standardsandframeworkwp0a8a1c35db1cc5c3285f813fe2e15f23.png";

/***/ }),

/***/ 3558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "elementarywp4317a6014f2aa8d965d83d3f0bc94d21.png";

/***/ }),

/***/ 3559:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "middleschoolwp5ad518ecb95f9a86eb5b5f5a7a165bd3.png";

/***/ }),

/***/ 3560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "highschoolwp991b0c5aebd55b17a68ab3a3ee3bfeab.png";

/***/ }),

/***/ 3561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hourofcodewp784b8b85d9e6fab9bd7de091157ca8cd.png";

/***/ }),

/***/ 3562:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hourofcode2wp6304252f708af29544a57d0e38622f2e.png";

/***/ }),

/***/ 3563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _SchoolInfoInputs = __webpack_require__(2974);

var _SchoolInfoInputs2 = _interopRequireDefault(_SchoolInfoInputs);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _urlHelpers = __webpack_require__(784);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  button: {
    marginLeft: 7,
    marginRight: 7,
    marginTop: 15,
    marginBottom: 15
  },
  buttonDiv: {
    textAlign: 'center'
  },
  clear: {
    clear: 'both'
  },
  error: {
    color: _color2.default.red
  },
  header: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  },
  image: {
    float: 'right',
    margin: 5
  },
  introQuestion: {
    marginTop: 10,
    marginBottom: 5
  },
  main: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: _color2.default.teal,
    minHeight: 72,
    width: _styleConstants2.default['content-width'],
    backgroundColor: _color2.default.white,
    overflowWrap: 'break-word'
  },
  message: {
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  radio: {
    verticalAlign: 'top',
    marginRight: 10
  },
  share: {
    textAlign: 'center'
  },
  shareButton: {
    color: _color2.default.white,
    backgroundColor: '#7E5CA2',
    minWidth: 40
  },
  title: {
    marginBottom: 0
  },
  updateSchool: {
    fontSize: '85%',
    marginTop: 0,
    marginBottom: 0
  },
  updateSchoolLink: {
    cursor: 'pointer'
  }
};

var CensusTeacherBanner = function (_Component) {
  _inherits(CensusTeacherBanner, _Component);

  function CensusTeacherBanner() {
    var _temp, _this, _ret;

    _classCallCheck(this, CensusTeacherBanner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.initialState = {
      showSchoolInfoForm: false,
      country: 'United States',
      schoolType: '',
      ncesSchoolId: null,
      schoolName: '',
      schoolDisplayName: null,
      schoolState: '',
      schoolZip: '',
      schoolLocation: '',
      showSchoolInfoErrors: false,
      showSchoolInfoUnknownError: false
    }, _this.state = _this.initialState, _this.handleCountryChange = function (_, event) {
      var newCountry = event ? event.value : '';
      _this.setState({ country: newCountry });
    }, _this.handleSchoolTypeChange = function (event) {
      var newType = event ? event.target.value : '';
      _this.setState({ schoolType: newType });
    }, _this.handleSchoolChange = function (_, event) {
      var newSchool = event ? event.value : '';
      _this.setState({ ncesSchoolId: newSchool });
      _this.loadSchoolName(newSchool);
    }, _this.handleSchoolNotFoundChange = function (field, event) {
      var newValue = event ? event.target.value : '';
      _this.setState(_defineProperty({}, field, newValue));
    }, _this.showSchoolInfoForm = function () {
      _this.setState({ showSchoolInfoForm: true });
    }, _this.hideSchoolInfoForm = function () {
      _this.setState({
        showSchoolInfoForm: false,
        showSchoolInfoErrors: false
      });
    }, _this.dismissSchoolInfoForm = function () {
      // This is handling the case where the user dismissed the
      // "update your school" view, not the entire banner. In that case, there
      // may have been partial state about the school changed. We do not want
      // to use that partial state in the census submission so we need to reset
      // to the previous values.
      _this.setState(_this.initialState);
      _this.loadSchoolName(_this.props.ncesSchoolId);
    }, _this.handleSchoolInfoSubmit = function () {
      if (_this.schoolInfoInputs.isValid()) {
        var schoolData = void 0;
        if (_this.state.ncesSchoolId === '-1') {
          schoolData = {
            "_method": "patch",
            "user[school_info_attributes][country]": _this.state.country,
            "user[school_info_attributes][school_type]": _this.state.schoolType,
            "user[school_info_attributes][school_name]": _this.state.schoolName,
            "user[school_info_attributes][school_state]": _this.state.schoolState,
            "user[school_info_attributes][school_zip]": _this.state.schoolZip,
            "user[school_info_attributes][full_address]": _this.state.schoolLocation
          };
        } else {
          schoolData = {
            "_method": "patch",
            "user[school_info_attributes][school_id]": _this.state.ncesSchoolId
          };
        }
        $.ajax({
          url: "/users.json",
          type: "post",
          dataType: "json",
          data: schoolData
        }).done(_this.hideSchoolInfoForm).fail(_this.updateSchoolInfoError);
      } else {
        _this.setState({
          showSchoolInfoErrors: true
        });
      }
    }, _this.updateSchoolInfoError = function () {
      // It isn't clear what could cause an error here since none of the fields are required.
      _this.setState({
        showSchoolInfoUnknownError: true
      });
    }, _this.loadSchoolName = function (schoolId) {
      if (schoolId && schoolId !== '-1') {
        $.ajax({
          url: '/api/v1/schools/' + schoolId,
          type: "get"
        }).done(_this.loadSchoolNameSuccess).fail(_this.loadSchoolNameError);
      } else {
        _this.setState({
          schoolDisplayName: ''
        });
      }
    }, _this.loadSchoolNameSuccess = function (response) {
      _this.setState({
        schoolDisplayName: response.name,
        schoolType: response.school_type
      });
    }, _this.loadSchoolNameError = function (error) {
      _this.setState({
        schoolDisplayName: "your school"
      });
    }, _this.bindSchoolInfoInputs = function (inputs) {
      _this.schoolInfoInputs = inputs;
    }, _this.isValid = function () {
      return !_this.props.teaches || _this.props.inClass === true || _this.props.inClass === false;
    }, _this.getData = function () {
      var schoolId = _this.state.ncesSchoolId ? _this.state.ncesSchoolId : _this.props.ncesSchoolId;
      var data = {
        submitter_role: "TEACHER",
        submitter_name: _this.props.teacherName,
        submitter_email_address: _this.props.teacherEmail,
        school_year: _this.props.schoolYear
      };
      var question = _this.props.inClass ? _this.props.question : 'how_many_after_school';
      data[question] = "SOME";

      if (schoolId === '-1') {
        data["country_s"] = _this.state.country;
        data["school_type_s"] = _this.state.schoolType;
        data["school_name_s"] = _this.state.schoolName;
        data["school_state_s"] = _this.state.schoolState;
        data["school_zip_s"] = _this.state.schoolZip;
        data["school_location"] = _this.state.schoolLocation;
      } else {
        data["nces_school_s"] = schoolId;
      }

      return data;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CensusTeacherBanner.prototype.componentDidMount = function componentDidMount() {
    this.loadSchoolName(this.props.ncesSchoolId);
  };

  CensusTeacherBanner.prototype.renderThankYou = function renderThankYou() {
    var yourschoolUrl = encodeURIComponent('https://code.org/yourschool');
    var facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + yourschoolUrl;
    var twitterText = encodeURIComponent('Does your school teach computer science? Expand computer science at your school or district. @codeorg');
    var twitterShareUrl = 'https://twitter.com/intent/tweet?url=' + yourschoolUrl + '&related=codeorg&text=' + twitterText;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: styles.header },
        _react2.default.createElement(
          'h2',
          null,
          'Thanks for adding your school to the map!'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.message },
        _react2.default.createElement(
          'p',
          { style: styles.introQuestion },
          'Help us find out about computer science opportunities at every school in the United States!'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.share },
        _react2.default.createElement(
          'a',
          { href: facebookShareUrl, target: '_blank' },
          _react2.default.createElement(
            'button',
            { style: styles.shareButton },
            _react2.default.createElement('i', { className: 'fa fa-facebook' }),
            ' Share on Facebook'
          )
        ),
        _react2.default.createElement(
          'a',
          { href: twitterShareUrl, target: '_blank' },
          _react2.default.createElement(
            'button',
            { style: styles.shareButton },
            _react2.default.createElement('i', { className: 'fa fa-twitter' }),
            ' Share on Twitter'
          )
        )
      )
    );
  };

  CensusTeacherBanner.prototype.renderSchoolInfoForm = function renderSchoolInfoForm() {
    var schoolId = this.state.ncesSchoolId !== null ? this.state.ncesSchoolId : this.props.ncesSchoolId;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: styles.header },
        _react2.default.createElement(
          'h2',
          null,
          'Update your school information'
        ),
        this.state.showSchoolInfoUnknownError && _react2.default.createElement(
          'p',
          { style: styles.error },
          'We encountered an error with your submission. Please try again.'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.message },
        _react2.default.createElement(_SchoolInfoInputs2.default, {
          ref: this.bindSchoolInfoInputs,
          onCountryChange: this.handleCountryChange,
          onSchoolTypeChange: this.handleSchoolTypeChange,
          onSchoolChange: this.handleSchoolChange,
          onSchoolNotFoundChange: this.handleSchoolNotFoundChange,
          country: this.state.country,
          schoolType: this.state.schoolType,
          ncesSchoolId: schoolId,
          schoolName: this.state.schoolName,
          schoolState: this.state.schoolState,
          schoolZip: this.state.schoolZip,
          schoolLocation: this.state.schoolLocation,
          useGoogleLocationSearch: true,
          showErrors: this.state.showSchoolInfoErrors,
          showRequiredIndicator: true
        })
      ),
      _react2.default.createElement(
        'div',
        { style: styles.buttonDiv },
        _react2.default.createElement(_Button2.default, { onClick: this.dismissSchoolInfoForm, style: styles.button, color: 'gray', size: 'large', text: 'Dismiss' }),
        _react2.default.createElement(_Button2.default, { onClick: this.handleSchoolInfoSubmit, style: styles.button, size: 'large', text: 'Submit' })
      )
    );
  };

  CensusTeacherBanner.prototype.renderCensusForm = function renderCensusForm() {
    var numHours = this.props.question === 'how_many_20_hours' ? '20' : '10';
    var buttons = void 0;
    var footer = void 0;
    if (this.props.teaches === true) {
      footer = _react2.default.createElement('hr', null);
      buttons = _react2.default.createElement(
        'div',
        { style: styles.buttonDiv },
        _react2.default.createElement(_Button2.default, { onClick: this.props.onDismiss, style: styles.button, color: 'gray', size: 'large', text: 'No thanks' }),
        _react2.default.createElement(_Button2.default, { onClick: this.props.onSubmit, style: styles.button, size: 'large', text: 'Add my school to the map!' })
      );
    } else if (this.props.teaches === false) {
      footer = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'p',
          null,
          'We\u2019d love to know more about computer science opportunities at your school. Please take our survey to increase access to Computer Science in the US.'
        )
      );
      var schoolId = this.state.ncesSchoolId ? this.state.ncesSchoolId : this.props.ncesSchoolId;
      var link = encodeURI('/yourschool?schoolId=' + schoolId + '&isTeacher=true&name=' + this.props.teacherName + '&email=' + this.props.teacherEmail + '#form');
      buttons = _react2.default.createElement(
        'div',
        { style: styles.buttonDiv },
        _react2.default.createElement(_Button2.default, {
          onClick: this.props.onPostpone,
          style: styles.button,
          color: 'gray',
          size: 'large',
          text: 'Not now'
        }),
        _react2.default.createElement(_Button2.default, {
          onClick: this.props.onPostpone,
          href: (0, _urlHelpers.pegasus)(link),
          target: '_blank',
          style: styles.button,
          size: 'large',
          text: 'Take the survey'
        })
      );
    }

    var schoolName = void 0;

    if (this.state.schoolDisplayName) {
      schoolName = this.state.schoolDisplayName;
    } else if (this.state.schoolName) {
      schoolName = this.state.schoolName;
    }

    if (schoolName) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: styles.header },
          _react2.default.createElement(
            'h2',
            { style: styles.title },
            'Add ',
            schoolName,
            ' to our map!'
          ),
          _react2.default.createElement(
            'p',
            { style: styles.updateSchool },
            'Not teaching at this school anymore?\u2002',
            _react2.default.createElement(
              'a',
              { style: styles.updateSchoolLink, onClick: this.showSchoolInfoForm },
              'Update here'
            )
          ),
          this.props.showUnknownError && _react2.default.createElement(
            'p',
            { style: styles.error },
            'We encountered an error with your submission. Please try again.'
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.message },
          _react2.default.createElement(
            'p',
            { style: styles.introQuestion },
            'It looks like you teach computer science. Have your students already done ',
            numHours,
            ' hours of programming content this year (not including HTML/CSS)?'
          ),
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement('input', {
              type: 'radio',
              id: 'teachesYes',
              name: this.props.question,
              value: 'SOME',
              style: styles.radio,
              onChange: this.props.onTeachesChange,
              checked: this.props.teaches === true
            }),
            'Yes, we\u2019ve done ',
            numHours,
            ' hours.'
          ),
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement('input', {
              type: 'radio',
              id: 'teachesNo',
              name: this.props.question,
              style: styles.radio,
              onChange: this.props.onTeachesChange,
              value: 'not yet',
              checked: this.props.teaches === false
            }),
            'Not yet.'
          ),
          this.props.teaches && this.props.showInvalidError && _react2.default.createElement(
            'p',
            { style: styles.error },
            'Please select one of the options below.'
          ),
          this.props.teaches && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              { style: styles.introQuestion },
              'Which of the following best describes where you teach programming?'
            ),
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'radio',
                id: 'inClass',
                value: 'inclass',
                style: styles.radio,
                onChange: this.props.onInClassChange,
                checked: this.props.inClass === true
              }),
              'In a classroom'
            ),
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', {
                type: 'radio',
                id: 'afterSchool',
                style: styles.radio,
                onChange: this.props.onInClassChange,
                value: 'afterschool',
                checked: this.props.inClass === false
              }),
              'In an afterschool program or club'
            )
          ),
          footer
        ),
        buttons
      );
    } else {
      // Don't display until school name has been loaded
      return null;
    }
  };

  CensusTeacherBanner.prototype.render = function render() {
    var mainForm = void 0;

    if (this.props.submittedSuccessfully) {
      mainForm = this.renderThankYou();
    } else if (this.state.showSchoolInfoForm) {
      mainForm = this.renderSchoolInfoForm();
    } else {
      mainForm = this.renderCensusForm();
    }

    return _react2.default.createElement(
      'div',
      { style: styles.main },
      _react2.default.createElement(
        'div',
        { style: styles.image },
        _react2.default.createElement('img', {
          src: '/shared/images/misc/census-map-with-flag.png',
          alt: 'Map with flag',
          width: '180',
          height: '180'
        })
      ),
      mainForm,
      _react2.default.createElement('div', { style: styles.clear })
    );
  };

  return CensusTeacherBanner;
}(_react.Component);

CensusTeacherBanner.propTypes = {
  schoolYear: _react.PropTypes.number.isRequired,
  onSubmit: _react.PropTypes.func.isRequired,
  onDismiss: _react.PropTypes.func.isRequired,
  onPostpone: _react.PropTypes.func.isRequired,
  onTeachesChange: _react.PropTypes.func.isRequired,
  onInClassChange: _react.PropTypes.func.isRequired,
  ncesSchoolId: _react.PropTypes.string.isRequired,
  question: _react.PropTypes.oneOf(['how_many_10_hours', 'how_many_20_hours']).isRequired,
  teaches: _react.PropTypes.bool,
  inClass: _react.PropTypes.bool,
  teacherId: _react.PropTypes.number.isRequired,
  teacherName: _react.PropTypes.string.isRequired,
  teacherEmail: _react.PropTypes.string.isRequired,
  showInvalidError: _react.PropTypes.bool,
  showUnknownError: _react.PropTypes.bool,
  submittedSuccessfully: _react.PropTypes.bool
};
exports.default = CensusTeacherBanner;
module.exports = exports['default'];

/***/ }),

/***/ 3564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _HeaderBanner = __webpack_require__(2088);

var _HeaderBanner2 = _interopRequireDefault(_HeaderBanner);

var _RecentCourses = __webpack_require__(2984);

var _RecentCourses2 = _interopRequireDefault(_RecentCourses);

var _StudentSections = __webpack_require__(2988);

var _StudentSections2 = _interopRequireDefault(_StudentSections);

var _ProjectWidgetWithData = __webpack_require__(2832);

var _ProjectWidgetWithData2 = _interopRequireDefault(_ProjectWidgetWithData);

var _shapes = __webpack_require__(1708);

var _shapes2 = _interopRequireDefault(_shapes);

var _ProtectedStatefulDiv = __webpack_require__(737);

var _ProtectedStatefulDiv2 = _interopRequireDefault(_ProtectedStatefulDiv);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentHomepage = function (_Component) {
  _inherits(StudentHomepage, _Component);

  function StudentHomepage() {
    _classCallCheck(this, StudentHomepage);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StudentHomepage.prototype.componentDidMount = function componentDidMount() {
    // The component used here is implemented in legacy HAML/CSS rather than React.
    (0, _jquery2.default)('#flashes').appendTo(_reactDom2.default.findDOMNode(this.refs.flashes)).show();
  };

  StudentHomepage.prototype.render = function render() {
    var _props = this.props,
        courses = _props.courses,
        sections = _props.sections,
        canLeave = _props.canLeave,
        topCourse = _props.topCourse;
    var canViewAdvancedTools = this.props.canViewAdvancedTools;


    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_HeaderBanner2.default, {
        headingText: _locale2.default.homepageHeading(),
        short: true
      }),
      _react2.default.createElement(_ProtectedStatefulDiv2.default, {
        ref: 'flashes'
      }),
      _react2.default.createElement(_RecentCourses2.default, {
        courses: courses,
        topCourse: topCourse,
        isTeacher: false
      }),
      _react2.default.createElement(_ProjectWidgetWithData2.default, {
        canViewFullList: true,
        canViewAdvancedTools: canViewAdvancedTools
      }),
      _react2.default.createElement(_StudentSections2.default, {
        initialSections: sections,
        canLeave: canLeave
      })
    );
  };

  return StudentHomepage;
}(_react.Component);

StudentHomepage.propTypes = {
  courses: _shapes2.default.courses,
  topCourse: _shapes2.default.topCourse,
  sections: _shapes2.default.sections,
  canLeave: _react.PropTypes.bool.isRequired,
  canViewAdvancedTools: _react.PropTypes.bool
};
exports.default = StudentHomepage;
module.exports = exports['default'];

/***/ }),

/***/ 3566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _BaseDialog = __webpack_require__(500);

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  title: {
    position: 'absolute',
    left: 30,
    top: 10,
    color: _color2.default.dark_charcoal,
    margin: '15px 0'
  },
  content: {
    position: 'absolute',
    left: 30,
    top: 50,
    right: 30,
    bottom: 70
  },
  contentText: {
    fontSize: 15,
    lineHeight: '22px'
  },
  highlightRow: {
    backgroundColor: _color2.default.default_blue,
    color: _color2.default.white
  },
  footer: {
    position: 'absolute',
    bottom: 25,
    right: 30,
    left: 30
  },
  buttonPrimary: {
    float: 'right',
    background: _color2.default.orange,
    color: _color2.default.white,
    border: '1px solid #b07202',
    borderRadius: 3,
    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.63)',
    fontSize: 14,
    padding: '8px 20px'
  },
  buttonSecondary: {
    float: 'left',
    background: '#eee',
    color: '#5b6770',
    border: '1px solid #c5c5c5'
  },
  hr: {
    borderColor: _color2.default.light_gray
  },
  email: {
    height: 35,
    paddingLeft: 15
  }
};

/**
 * Pops up a dialog that prompts the user to confirm their email address.
 * This is used when oauth accounts switch from student to teacher, in order
 * to verify that the email address is already known to the user (it will
 * become visible on the accounts page after the transition, which is a
 * potential violation of student privacy).
 */

var LinkCleverAccountModal = function (_React$Component) {
  _inherits(LinkCleverAccountModal, _React$Component);

  function LinkCleverAccountModal(props) {
    _classCallCheck(this, LinkCleverAccountModal);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.cancel = function () {
      _this.props.handleCancel();
    };

    _this.ok = function () {
      _this.props.handleSubmit();
    };

    _this.render = function () {
      var title = _locale2.default.cleverConnectDialogTitle();
      var content = _locale2.default.cleverConnectDialogText();
      var forceConnectTitle = _locale2.default.cleverForceConnectDialogTitle();
      var forceConnectContent = _locale2.default.cleverForceConnectDialogContent();
      return _react2.default.createElement(
        _BaseDialog2.default,
        _extends({
          useUpdatedStyles: true,
          fixedWidth: 600,
          fixedHeight: 310,
          isOpen: _this.props.isOpen,
          uncloseable: true
        }, _this.props),
        _react2.default.createElement(
          'h2',
          { style: styles.title },
          _this.props.forceConnect ? forceConnectTitle : title
        ),
        _react2.default.createElement(
          'div',
          { style: styles.content },
          _react2.default.createElement('hr', { style: styles.hr }),
          _react2.default.createElement(
            'p',
            { style: styles.contentText },
            _this.props.forceConnect ? forceConnectContent : content
          ),
          _react2.default.createElement('hr', { style: styles.hr })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.footer },
          !_this.props.forceConnect && _react2.default.createElement(
            'button',
            {
              onClick: _this.cancel,
              style: _extends({}, styles.buttonPrimary, styles.buttonSecondary)
            },
            _locale2.default.cleverConnectDeny()
          ),
          _react2.default.createElement(
            'button',
            {
              onClick: _this.ok,
              style: Object.assign({}, styles.buttonPrimary)
            },
            _locale2.default.cleverConnectConfirm()
          )
        )
      );
    };

    _this.state = {};
    return _this;
  }

  return LinkCleverAccountModal;
}(_react2.default.Component);

LinkCleverAccountModal.propTypes = {
  handleSubmit: _react.PropTypes.func,
  handleCancel: _react.PropTypes.func,
  isOpen: _react.PropTypes.bool,
  forceConnect: _react.PropTypes.bool
};
exports.default = LinkCleverAccountModal;
module.exports = exports['default'];

/***/ })

},[3533]);