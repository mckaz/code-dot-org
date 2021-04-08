webpackJsonp([16],{

/***/ 2990:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "MC_Hour_Of_Code_Certificatewp17d1c29851f0f0bb2b6b21022fc22d22.png";

/***/ }),

/***/ 3567:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3568);


/***/ }),

/***/ 3568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Congrats = __webpack_require__(3569);

var _Congrats2 = _interopRequireDefault(_Congrats);

var _reactRedux = __webpack_require__(53);

var _redux = __webpack_require__(237);

var _queryString = __webpack_require__(727);

var _queryString2 = _interopRequireDefault(_queryString);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  var store = (0, _redux.getStore)();
  var script = document.querySelector('script[data-congrats]');
  var congratsData = JSON.parse(script.dataset.congrats);
  var userType = congratsData.current_user ? congratsData.current_user.user_type : "signedOut";
  var isEnglish = congratsData.english;
  var userAge = congratsData.user_age;
  var randomDonorTwitter = congratsData.random_donor_twitter;

  var certificateId = '';
  var tutorial = '';
  try {
    var params = _queryString2.default.parse(window.location.search);
    certificateId = params['i'].replace(/[^a-z0-9_]/g, '');
    tutorial = atob(params['s']).replace(/[^A-Za-z0-9_\- ]/g, '');
  } catch (e) {}

  var mcShareLink = (0, _utils.tryGetLocalStorage)('craftHeroShareLink', '');

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_Congrats2.default, {
      certificateId: certificateId,
      tutorial: tutorial,
      userType: userType,
      userAge: userAge,
      isEnglish: isEnglish,
      MCShareLink: mcShareLink,
      randomDonorTwitter: randomDonorTwitter
    })
  ), document.getElementById('congrats-container'));
});

/***/ }),

/***/ 3569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Certificate = __webpack_require__(3570);

var _Certificate2 = _interopRequireDefault(_Certificate);

var _StudentsBeyondHoc = __webpack_require__(3575);

var _StudentsBeyondHoc2 = _interopRequireDefault(_StudentsBeyondHoc);

var _TeachersBeyondHoc = __webpack_require__(3578);

var _TeachersBeyondHoc2 = _interopRequireDefault(_TeachersBeyondHoc);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    width: '100%',
    maxWidth: _styleConstants2.default['content-width'],
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

var Congrats = function (_Component) {
  _inherits(Congrats, _Component);

  function Congrats() {
    _classCallCheck(this, Congrats);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Congrats.prototype.render = function render() {
    var _props = this.props,
        tutorial = _props.tutorial,
        certificateId = _props.certificateId,
        MCShareLink = _props.MCShareLink,
        userType = _props.userType,
        userAge = _props.userAge,
        isEnglish = _props.isEnglish,
        randomDonorTwitter = _props.randomDonorTwitter;


    var tutorialType = {
      'applab-intro': 'applab',
      hero: '2017Minecraft',
      minecraft: 'pre2017Minecraft',
      mc: 'pre2017Minecraft'
    }[tutorial] || 'other';

    return _react2.default.createElement(
      'div',
      { style: styles.container },
      _react2.default.createElement(_Certificate2.default, {
        tutorial: tutorial,
        certificateId: certificateId,
        randomDonorTwitter: randomDonorTwitter
      }),
      userType === "teacher" && isEnglish && _react2.default.createElement(_TeachersBeyondHoc2.default, null),
      _react2.default.createElement(_StudentsBeyondHoc2.default, {
        completedTutorialType: tutorialType,
        MCShareLink: MCShareLink,
        userType: userType,
        userAge: userAge,
        isEnglish: isEnglish
      }),
      userType === "signedOut" && isEnglish && _react2.default.createElement(_TeachersBeyondHoc2.default, null)
    );
  };

  return Congrats;
}(_react.Component);

Congrats.propTypes = {
  certificateId: _react.PropTypes.string,
  tutorial: _react.PropTypes.string,
  MCShareLink: _react.PropTypes.string,
  userType: _react.PropTypes.oneOf(["signedOut", "teacher", "student"]).isRequired,
  userAge: _react.PropTypes.number,
  isEnglish: _react.PropTypes.bool.isRequired,
  randomDonorTwitter: _react.PropTypes.string
};
exports.default = Congrats;
module.exports = exports['default'];

/***/ }),

/***/ 3570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _queryString = __webpack_require__(727);

var _queryString2 = _interopRequireDefault(_queryString);

var _SocialShare = __webpack_require__(3571);

var _SocialShare2 = _interopRequireDefault(_SocialShare);

var _LargeChevronLink = __webpack_require__(3572);

var _LargeChevronLink2 = _interopRequireDefault(_LargeChevronLink);

var _responsiveRedux = __webpack_require__(959);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global dashboard */

var styles = {
  heading: {
    width: '100%'
  },
  container: {
    marginBottom: 50,
    float: 'left'
  },
  mobileHeading: {
    fontSize: 24,
    lineHeight: 1.5
  },
  desktopHalf: {
    width: '50%',
    float: 'left'
  },
  mobileFull: {
    width: '100%',
    float: 'left'
  },
  nameInput: {
    height: 32,
    margin: 0
  },
  submit: {
    background: _color2.default.orange,
    color: _color2.default.white
  }
};

var blankCertificates = {
  hourOfCode: __webpack_require__(3573),
  mc: __webpack_require__(2990),
  minecraft: __webpack_require__(2990),
  hero: __webpack_require__(3574)
};

var Certificate = function (_Component) {
  _inherits(Certificate, _Component);

  function Certificate() {
    _classCallCheck(this, Certificate);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      personalized: false
    };
    return _this;
  }

  Certificate.prototype.personalizeCertificate = function personalizeCertificate(session) {
    var _this2 = this;

    _jquery2.default.ajax({
      url: '/v2/certificate',
      type: "post",
      dataType: "json",
      data: {
        session_s: session,
        name_s: this.nameInput.value
      }
    }).done(function (response) {
      if (response.certificate_sent) {
        _this2.setState({ personalized: true });
      }
    });
  };

  Certificate.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        responsiveSize = _props.responsiveSize,
        tutorial = _props.tutorial,
        certificateId = _props.certificateId,
        randomDonorTwitter = _props.randomDonorTwitter;

    var certificate = certificateId || 'blank';
    var personalizedCertificate = dashboard.CODE_ORG_URL + '/api/hour/certificate/' + certificate + '.jpg';
    var blankCertificate = blankCertificates[tutorial] || blankCertificates.hourOfCode;
    var imgSrc = this.state.personalized ? personalizedCertificate : blankCertificate;
    var certificateLink = 'https:' + dashboard.CODE_ORG_URL + '/certificates/' + certificate;
    var desktop = responsiveSize === _responsiveRedux.ResponsiveSize.lg || responsiveSize === _responsiveRedux.ResponsiveSize.md;
    var headingStyle = desktop ? styles.heading : styles.mobileHeading;
    var certificateStyle = desktop ? styles.desktopHalf : styles.mobileFull;

    var facebook = _queryString2.default.stringify({
      u: certificateLink
    });

    var twitter = _queryString2.default.stringify({
      url: certificateLink,
      related: 'codeorg',
      text: randomDonorTwitter ? _locale2.default.justDidHourOfCodeDonor({ donor_twitter: randomDonorTwitter }) : _locale2.default.justDidHourOfCode()
    });

    var isMinecraft = /mc|minecraft|hero/.test(tutorial);

    var print = dashboard.CODE_ORG_URL + '/printcertificate/' + certificate;
    if (isMinecraft && !this.state.personalized) {
      // Correct the minecraft print url for non-personalized certificates.
      print = dashboard.CODE_ORG_URL + '/printcertificate?s=' + tutorial;
    }

    return _react2.default.createElement(
      'div',
      { style: styles.container },
      _react2.default.createElement(
        'h1',
        { style: headingStyle },
        _locale2.default.congratsCertificateHeading()
      ),
      tutorial && _react2.default.createElement(_LargeChevronLink2.default, {
        link: '/s/' + tutorial,
        linkText: _locale2.default.backToActivity()
      }),
      _react2.default.createElement(
        'div',
        { id: 'uitest-certificate', style: certificateStyle },
        _react2.default.createElement(
          'a',
          { href: certificateLink },
          _react2.default.createElement('img', { src: imgSrc })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: certificateStyle },
        tutorial && !this.state.personalized && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            _locale2.default.congratsCertificatePersonalize()
          ),
          _react2.default.createElement('input', {
            id: 'name',
            type: 'text',
            style: styles.nameInput,
            placeholder: _locale2.default.yourName(),
            ref: function ref(input) {
              return _this3.nameInput = input;
            }
          }),
          _react2.default.createElement(
            'button',
            {
              style: styles.submit,
              onClick: this.personalizeCertificate.bind(this, certificate)
            },
            _locale2.default.submit()
          )
        ),
        tutorial && this.state.personalized && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            { id: 'uitest-thanks' },
            _locale2.default.congratsCertificateThanks()
          ),
          _react2.default.createElement(
            'p',
            null,
            _locale2.default.congratsCertificateContinue()
          )
        ),
        _react2.default.createElement(
          'h2',
          null,
          _locale2.default.congratsCertificateShare()
        ),
        _react2.default.createElement(_SocialShare2.default, {
          facebook: facebook,
          twitter: twitter,
          print: print
        })
      )
    );
  };

  return Certificate;
}(_react.Component);

Certificate.propTypes = {
  tutorial: _react.PropTypes.string,
  certificateId: _react.PropTypes.string,
  randomDonorTwitter: _react.PropTypes.string,
  responsiveSize: _react.PropTypes.oneOf(['lg', 'md', 'sm', 'xs']).isRequired
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    responsiveSize: state.responsive.responsiveSize
  };
})(Certificate);
module.exports = exports['default'];

/***/ }),

/***/ 3571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global dashboard */

var styles = {
  shareButton: {
    color: _color2.default.white,
    minWidth: 40
  }
};

var SocialShare = function (_Component) {
  _inherits(SocialShare, _Component);

  function SocialShare() {
    _classCallCheck(this, SocialShare);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SocialShare.prototype.render = function render() {
    var facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?' + this.props.facebook;
    var twitterShareUrl = 'https://twitter.com/share?' + this.props.twitter;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'a',
        { href: facebookShareUrl, target: '_blank', onClick: dashboard.popupWindow },
        _react2.default.createElement(
          'button',
          { style: _extends({ background: _color2.default.facebook_blue }, styles.shareButton) },
          _react2.default.createElement('i', { className: 'fa fa-facebook' })
        )
      ),
      _react2.default.createElement(
        'a',
        { href: twitterShareUrl, target: '_blank', onClick: dashboard.popupWindow },
        _react2.default.createElement(
          'button',
          { style: _extends({ background: _color2.default.twitter_blue }, styles.shareButton) },
          _react2.default.createElement('i', { className: 'fa fa-twitter' })
        )
      ),
      _react2.default.createElement(
        'a',
        { href: this.props.print },
        _react2.default.createElement(
          'button',
          { style: _extends({ background: _color2.default.charcoal }, styles.shareButton) },
          _react2.default.createElement('i', { className: 'fa fa-print' }),
          ' ' + _locale2.default.print()
        )
      )
    );
  };

  return SocialShare;
}(_react.Component);

SocialShare.propTypes = {
  facebook: _react.PropTypes.string.isRequired,
  twitter: _react.PropTypes.string.isRequired,
  print: _react.PropTypes.string.isRequired
};
exports.default = SocialShare;
module.exports = exports['default'];

/***/ }),

/***/ 3572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _FontAwesome = __webpack_require__(156);

var _FontAwesome2 = _interopRequireDefault(_FontAwesome);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  link: {
    textDecoration: 'none'
  },
  linkBox: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%'
  },
  linkText: {
    fontSize: 20,
    lineHeight: '22px',
    fontFamily: 'Gotham 5r',
    color: _color2.default.teal,
    clear: 'both',
    display: 'inline',
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 15
  },
  chevron: {
    display: 'inline',
    color: _color2.default.teal,
    fontSize: 20,
    fontWeight: 'bold'
  },
  left: {
    float: 'left'
  },
  right: {
    float: 'right'
  }
};

var LargeChevronLink = function (_Component) {
  _inherits(LargeChevronLink, _Component);

  function LargeChevronLink() {
    _classCallCheck(this, LargeChevronLink);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LargeChevronLink.prototype.render = function render() {
    var _props = this.props,
        link = _props.link,
        linkText = _props.linkText,
        isRtl = _props.isRtl;

    var localeStyle = isRtl ? styles.right : styles.left;
    var icon = isRtl ? "chevron-right" : "chevron-left";

    return _react2.default.createElement(
      'div',
      { style: _extends({}, styles.linkBox, localeStyle) },
      _react2.default.createElement(
        'a',
        { href: link, style: styles.link },
        !isRtl && _react2.default.createElement(_FontAwesome2.default, { icon: icon, style: styles.chevron }),
        _react2.default.createElement(
          'div',
          { style: styles.linkText },
          linkText
        )
      ),
      _react2.default.createElement(
        'a',
        { href: link, style: styles.link },
        isRtl && _react2.default.createElement(_FontAwesome2.default, { icon: icon, style: styles.chevron })
      )
    );
  };

  return LargeChevronLink;
}(_react.Component);

LargeChevronLink.propTypes = {
  linkText: _react.PropTypes.string.isRequired,
  link: _react.PropTypes.string.isRequired,
  isRtl: _react.PropTypes.bool.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isRtl: state.isRtl
  };
})(LargeChevronLink);
module.exports = exports['default'];

/***/ }),

/***/ 3573:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hour_of_code_certificatewpd18603ade1c13030c1d396191e962920.jpg";

/***/ }),

/***/ 3574:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "MC_Hour_Of_Code_Certificate_Herowp7e822b714b2cd3e608976f2b73c1cc2c.png";

/***/ }),

/***/ 3575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _reactRedux = __webpack_require__(53);

var _CourseBlocksStudentGradeBands = __webpack_require__(2991);

var _CourseBlocksStudentGradeBands2 = _interopRequireDefault(_CourseBlocksStudentGradeBands);

var _VerticalImageResourceCardRow = __webpack_require__(2977);

var _VerticalImageResourceCardRow2 = _interopRequireDefault(_VerticalImageResourceCardRow);

var _TwoColumnActionBlock = __webpack_require__(1709);

var _tutorialTypes = __webpack_require__(3576);

var _congratsBeyondHocActivityCards = __webpack_require__(3577);

var _responsiveRedux = __webpack_require__(959);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  heading: {
    width: '100%'
  },
  mobileHeading: {
    fontSize: 24,
    lineHeight: 1.5
  },
  spacer: {
    height: 20
  }
};

var StudentsBeyondHoc = function (_Component) {
  _inherits(StudentsBeyondHoc, _Component);

  function StudentsBeyondHoc() {
    _classCallCheck(this, StudentsBeyondHoc);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  StudentsBeyondHoc.prototype.render = function render() {
    var _props = this.props,
        responsiveSize = _props.responsiveSize,
        completedTutorialType = _props.completedTutorialType,
        userType = _props.userType,
        isEnglish = _props.isEnglish,
        MCShareLink = _props.MCShareLink,
        userAge = _props.userAge;


    var signedIn = userType === "teacher" || userType === "student";

    var under13 = userAge < 13;

    var desktop = responsiveSize !== _responsiveRedux.ResponsiveSize.xs;

    var headingStyle = desktop ? styles.heading : styles.mobileHeading;

    var specificCardSet;
    switch (true) {
      case completedTutorialType === 'pre2017Minecraft' && isEnglish && under13:
        specificCardSet = 'youngerThan13pre2017MinecraftCards';
        break;
      case completedTutorialType === 'pre2017Minecraft' && isEnglish:
        specificCardSet = 'pre2017MinecraftCards';
        break;
      case completedTutorialType === 'pre2017Minecraft' && !isEnglish:
        specificCardSet = 'nonEnglishPre2017MinecraftCards';
        break;
      case completedTutorialType === '2017Minecraft' && isEnglish:
        specificCardSet = 'newMinecraftCards';
        break;
      case completedTutorialType === '2017Minecraft' && isEnglish && under13:
        specificCardSet = 'youngerThan13NewMinecraftCards';
        break;
      case completedTutorialType === '2017Minecraft' && !isEnglish:
        specificCardSet = 'nonEnglishNewMinecraftCards';
        break;
      case completedTutorialType === 'applab' && signedIn:
        specificCardSet = 'signedInApplabCards';
        break;
      case completedTutorialType === 'applab' && !signedIn:
        specificCardSet = 'signedOutApplabCards';
        break;
      case completedTutorialType === 'other' && isEnglish && under13:
        specificCardSet = 'youngerThan13DefaultCards';
        break;
      case completedTutorialType === 'other' && signedIn && isEnglish:
        specificCardSet = 'signedInDefaultCards';
        break;
      case completedTutorialType === 'other' && signedIn && !isEnglish:
        specificCardSet = 'signedInNonEnglishDefaultCards';
        break;
      case completedTutorialType === 'other' && !signedIn && isEnglish:
        specificCardSet = 'signedOutDefaultCards';
        break;
      case completedTutorialType === 'other' && !signedIn && !isEnglish:
        specificCardSet = 'signedOutNonEnglishDefaultCards';
        break;
      default:
        specificCardSet = 'signedOutDefaultCards';
    }
    var cards = _congratsBeyondHocActivityCards.cardSets[specificCardSet];

    // 2017 Minecraft Tutorial has a share link that can be used on Minecraft // Education to import code. Check if the 2017 Minecraft tutorial was
    // completed; if it was, update the Minecraft share link for the card that // goes to Minecraft Education.
    function findMinecraftCard(card) {
      return card.MCShareLink === "";
    }

    if ((specificCardSet === "newMinecraftCards" || specificCardSet === "nonEnglishNewMinecraftCards") && MCShareLink) {
      var MinecraftCard = cards.find(findMinecraftCard);
      MinecraftCard.MCShareLink = MCShareLink;
    }

    var heading = isEnglish ? _locale2.default.congratsStudentHeading() : _locale2.default.congratsStudentHeadingNonEng();

    return _react2.default.createElement(
      'div',
      { style: styles.container },
      _react2.default.createElement(
        'h1',
        { style: headingStyle },
        heading
      ),
      _react2.default.createElement(_VerticalImageResourceCardRow2.default, {
        cards: cards
      }),
      isEnglish && _react2.default.createElement(_CourseBlocksStudentGradeBands2.default, {
        showContainer: false,
        hideBottomMargin: true
      }),
      _react2.default.createElement('div', { style: styles.spacer }),
      _react2.default.createElement(_TwoColumnActionBlock.LocalClassActionBlock, {
        showHeading: false
      })
    );
  };

  return StudentsBeyondHoc;
}(_react.Component);

StudentsBeyondHoc.propTypes = {
  completedTutorialType: _react.PropTypes.oneOf(_tutorialTypes.tutorialTypes).isRequired,
  MCShareLink: _react.PropTypes.string,
  responsiveSize: _react.PropTypes.oneOf(['lg', 'md', 'sm', 'xs']).isRequired,
  userType: _react.PropTypes.oneOf(["signedOut", "teacher", "student"]).isRequired,
  userAge: _react.PropTypes.number,
  isEnglish: _react.PropTypes.bool.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    responsiveSize: state.responsive.responsiveSize
  };
})(StudentsBeyondHoc);
module.exports = exports['default'];

/***/ }),

/***/ 3576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var tutorialTypes = exports.tutorialTypes = ['applab', '2017Minecraft', 'pre2017Minecraft', 'other'];

/***/ }),

/***/ 3577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardSets = undefined;

var _urlHelpers = __webpack_require__(784);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSFExpress = {
  title: _locale2.default.csfExpressTitle(),
  description: _locale2.default.csfExpressDesc(),
  link: "/s/express",
  image: "csf-express",
  buttonText: _locale2.default.csfButton()
};

var CSFAccelerated = {
  title: _locale2.default.csfAcceleratedTitle(),
  description: _locale2.default.csfAcceleratedDesc(),
  link: "/s/20-hour",
  image: "csf-express",
  buttonText: _locale2.default.csfButton()
};

var CourseCatalog = {
  title: _locale2.default.courseCatalogTitle(),
  description: _locale2.default.courseCatalogDescription(),
  link: "/courses",
  image: "course-catalog",
  buttonText: _locale2.default.courseCatalogButton()
};

var CreateAccount = {
  title: _locale2.default.createAccount(),
  description: _locale2.default.createAccountDesc(),
  link: "/users/sign_up",
  image: "create-account",
  buttonText: _locale2.default.createAccount()
};

var CreateAccountApplab = {
  title: _locale2.default.createAccount(),
  description: _locale2.default.createAccountApplabDesc(),
  link: "/users/sign_up",
  image: "create-account",
  buttonText: _locale2.default.createAccount()
};

var AnotherHoC = {
  title: _locale2.default.anotherHoCTitle(),
  description: _locale2.default.anotherHoCDesc(),
  link: (0, _urlHelpers.pegasus)('/hourofcode/overview'),
  image: "another-hoc",
  buttonText: _locale2.default.anotherHoCButton()
};

var ApplabTutorial = {
  title: _locale2.default.applabTutorialTitle(),
  description: _locale2.default.applabTutorialDesc(),
  link: "/s/applab-intro/reset",
  image: "applab-tutorial",
  buttonText: _locale2.default.applabTutorialButton()
};

var ApplabMarketing = {
  title: _locale2.default.applabMarketingTitle(),
  description: _locale2.default.applabMarketingDesc(),
  link: (0, _urlHelpers.pegasus)('/applab'),
  image: "applab-marketing",
  buttonText: _locale2.default.applabMarketingButton()
};

var ApplabProject = {
  title: _locale2.default.applabProjectTitle(),
  description: _locale2.default.applabProjectDesc(),
  link: "/projects/applab/new",
  image: "applab-project",
  buttonText: _locale2.default.applabProjectButton()
};

var OldMinecraft = {
  title: _locale2.default.pre2017MinecraftTitle(),
  description: _locale2.default.pre2017MinecraftDesc(),
  link: "https://education.minecraft.net/hour-of-code",
  image: "old-minecraft",
  buttonText: _locale2.default.pre2017MinecraftButton()
};

var NewMinecraft = {
  title: _locale2.default.minecraft2017Title(),
  description: _locale2.default.minecraft2017Desc(),
  link: "https://education.minecraft.net/hour-of-code",
  image: "new-minecraft",
  buttonText: _locale2.default.minecraft2017Button(),
  MCShareLink: ""
};

var MinecraftMarketing = {
  title: _locale2.default.minecraftMarketingTitle(),
  description: _locale2.default.minecraftMarketingDesc(),
  link: (0, _urlHelpers.pegasus)('/minecraft'),
  image: "minecraft-marketing",
  buttonText: _locale2.default.minecraftMarketingButton()
};

var cardSets = exports.cardSets = {
  'pre2017MinecraftCards': [CSFExpress, ApplabTutorial, OldMinecraft],
  'youngerThan13pre2017MinecraftCards': [CSFExpress, AnotherHoC, OldMinecraft],
  'nonEnglishPre2017MinecraftCards': [CSFAccelerated, CourseCatalog, OldMinecraft],
  'newMinecraftCards': [CSFExpress, ApplabTutorial, NewMinecraft],
  'youngerThan13NewMinecraftCards': [CSFExpress, AnotherHoC, NewMinecraft],
  'nonEnglishNewMinecraftCards': [CSFAccelerated, CourseCatalog, NewMinecraft],
  'signedInApplabCards': [ApplabProject, ApplabMarketing, AnotherHoC],
  'signedOutApplabCards': [ApplabMarketing, CreateAccountApplab, ApplabProject],
  'signedInDefaultCards': [CSFExpress, ApplabTutorial, AnotherHoC],
  'youngerThan13DefaultCards': [CSFExpress, MinecraftMarketing, AnotherHoC],
  'signedInNonEnglishDefaultCards': [CSFAccelerated, CourseCatalog, AnotherHoC],
  'signedOutDefaultCards': [CSFExpress, ApplabTutorial, CreateAccount],
  'signedOutNonEnglishDefaultCards': [CSFAccelerated, CourseCatalog, CreateAccount]
};

/***/ }),

/***/ 3578:
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

var _urlHelpers = __webpack_require__(784);

var _VerticalImageResourceCard = __webpack_require__(2978);

var _VerticalImageResourceCard2 = _interopRequireDefault(_VerticalImageResourceCard);

var _ResourceCardResponsiveContainer = __webpack_require__(2160);

var _ResourceCardResponsiveContainer2 = _interopRequireDefault(_ResourceCardResponsiveContainer);

var _responsiveRedux = __webpack_require__(959);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  heading: {
    width: '100%'
  },
  mobileHeading: {
    fontSize: 24,
    lineHeight: 1.5
  },
  clear: {
    clear: 'both'
  },
  spacer: {
    height: 50
  }
};

var TeachersBeyondHoc = function (_Component) {
  _inherits(TeachersBeyondHoc, _Component);

  function TeachersBeyondHoc() {
    _classCallCheck(this, TeachersBeyondHoc);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TeachersBeyondHoc.prototype.render = function render() {
    var responsiveSize = this.props.responsiveSize;

    var desktop = responsiveSize === _responsiveRedux.ResponsiveSize.lg || responsiveSize === _responsiveRedux.ResponsiveSize.md;

    var codeorgTeacherImage = desktop ? "codeorg-teacher" : "course-catalog";

    var thirdPartyTeacherImage = desktop ? "third-party-teacher" : "third-party-teacher-small";

    var thirdPartyTeacherTitle = desktop ? _locale2.default.congratsTeacherExternalTitle() : _locale2.default.congratsTeacherExternalTitleShort();

    var headingStyle = desktop ? styles.heading : styles.mobileHeading;

    var cards = [{
      title: _locale2.default.congratsTeacherCodeOrgTitle(),
      description: _locale2.default.congratsTeacherCodeOrgDesc(),
      buttonText: _locale2.default.congratsTeacherCodeOrgButton(),
      link: '/courses?view=teacher',
      image: codeorgTeacherImage
    }, {
      title: thirdPartyTeacherTitle,
      description: _locale2.default.congratsTeacherExternalDesc(),
      buttonText: _locale2.default.congratsTeacherExternalButton(),
      link: (0, _urlHelpers.pegasus)('/educate/curriculum/3rd-party'),
      image: thirdPartyTeacherImage
    }];

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        { style: headingStyle },
        _locale2.default.congratsTeacherHeading()
      ),
      _react2.default.createElement(
        _ResourceCardResponsiveContainer2.default,
        null,
        cards.map(function (card, cardIndex) {
          return _react2.default.createElement(_VerticalImageResourceCard2.default, {
            key: cardIndex,
            title: card.title,
            description: card.description,
            buttonText: card.buttonText,
            link: card.link,
            jumbo: desktop,
            image: card.image
          });
        })
      ),
      _react2.default.createElement('div', { style: styles.clear }),
      !desktop && _react2.default.createElement('div', { style: styles.spacer })
    );
  };

  return TeachersBeyondHoc;
}(_react.Component);

TeachersBeyondHoc.propTypes = {
  responsiveSize: _react.PropTypes.oneOf(['lg', 'md', 'sm', 'xs']).isRequired
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    responsiveSize: state.responsive.responsiveSize
  };
})(TeachersBeyondHoc);
module.exports = exports['default'];

/***/ })

},[3567]);