webpackJsonp([37],{

/***/ 3458:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3459);


/***/ }),

/***/ 3459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SchoolInfoInterstitial = __webpack_require__(3460);

var _SchoolInfoInterstitial2 = _interopRequireDefault(_SchoolInfoInterstitial);

var _getScriptData = __webpack_require__(596);

var _getScriptData2 = _interopRequireDefault(_getScriptData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Renders the SchoolInfoInterstitial component on page load.
 * This file is responsibile for mounting and unmounting the React component,
 * and providing props passed down from the server to the component.
 * @see _school_info_interstitial.html.haml.
 */
document.addEventListener('DOMContentLoaded', function () {
  var scriptData = (0, _getScriptData2.default)('schoolinfointerstitial');

  var mountPoint = document.createElement('div');
  document.body.appendChild(mountPoint);

  function unmount() {
    _reactDom2.default.unmountComponentAtNode(mountPoint);
    document.body.removeChild(mountPoint);
  }

  _reactDom2.default.render(_react2.default.createElement(_SchoolInfoInterstitial2.default, {
    scriptData: scriptData,
    onClose: unmount
  }), mountPoint);
});

/***/ }),

/***/ 3460:
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

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _BaseDialog = __webpack_require__(500);

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _SchoolInfoInputs = __webpack_require__(2974);

var _SchoolInfoInputs2 = _interopRequireDefault(_SchoolInfoInputs);

var _firehose = __webpack_require__(925);

var _firehose2 = _interopRequireDefault(_firehose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    margin: 20,
    color: _color2.default.charcoal
  },
  heading: {
    fontSize: 16,
    fontFamily: "'Gotham 5r', sans-serif"
  },
  middle: {
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderStyle: 'solid',
    borderColor: _color2.default.lighter_gray
  },
  bottom: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  error: {
    color: _color2.default.red
  }
};

var FIREHOSE_EVENTS = {
  // Interstitial is displayed to the teacher.
  SHOW: 'show',
  // Teacher clicked "Save"
  SUBMIT: 'submit',
  // School information saved successfully
  SAVE_SUCCESS: 'save_success',
  // School information failed to save
  SAVE_FAILURE: 'save_failure'
};

var SchoolInfoInterstitial = function (_React$Component) {
  _inherits(SchoolInfoInterstitial, _React$Component);

  function SchoolInfoInterstitial(props) {
    _classCallCheck(this, SchoolInfoInterstitial);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleSchoolInfoSubmit = function () {
      _this.logEvent(FIREHOSE_EVENTS.SUBMIT, {
        attempt: _this.state.showSchoolInfoUnknownError ? 2 : 1
      });

      var schoolData = _this.buildSchoolData();
      var _this$props$scriptDat = _this.props.scriptData,
          formUrl = _this$props$scriptDat.formUrl,
          authTokenName = _this$props$scriptDat.authTokenName,
          authTokenValue = _this$props$scriptDat.authTokenValue;

      _jquery2.default.post({
        url: formUrl + '.json',
        dataType: "json",
        data: _extends(_defineProperty({
          '_method': 'patch'
        }, authTokenName, authTokenValue), schoolData)
      }).done(function () {
        _this.logEvent(FIREHOSE_EVENTS.SAVE_SUCCESS, {
          attempt: _this.state.showSchoolInfoUnknownError ? 2 : 1
        });

        _this.props.onClose();
      }).fail(function () {
        _this.logEvent(FIREHOSE_EVENTS.SAVE_FAILURE, {
          attempt: _this.state.showSchoolInfoUnknownError ? 2 : 1
        });

        if (!_this.state.showSchoolInfoUnknownError) {
          // First failure, display error message and give the teacher a chance
          // to try again.
          _this.setState({ showSchoolInfoUnknownError: true });
        } else {
          // We already failed once, let's not block the teacher any longer.
          _this.props.onClose();
        }
      });
    };

    _this.onCountryChange = function (_, event) {
      var newCountry = event ? event.value : '';
      _this.setState({ country: newCountry });
    };

    _this.onSchoolTypeChange = function (event) {
      var newType = event ? event.target.value : '';
      _this.setState({ schoolType: newType });
    };

    _this.onSchoolChange = function (_, event) {
      var newSchool = event ? event.value : '';
      _this.setState({ ncesSchoolId: newSchool });
    };

    _this.onSchoolNotFoundChange = function (field, event) {
      var newValue = event ? event.target.value : '';
      _this.setState(_defineProperty({}, field, newValue));
    };

    var existingSchoolInfo = _this.props.scriptData.existingSchoolInfo;


    var initialCountry = existingSchoolInfo.country || '';
    if (initialCountry === 'US') {
      initialCountry = 'United States';
    }

    var initialNcesSchoolId = existingSchoolInfo.school_id ? existingSchoolInfo.school_id : existingSchoolInfo.country === 'United States' && _SchoolInfoInputs.SCHOOL_TYPES_HAVING_NCES_SEARCH.includes(existingSchoolInfo.school_type) && (existingSchoolInfo.school_name || existingSchoolInfo.full_address) ? '-1' : '';

    _this.state = {
      country: initialCountry,
      schoolType: existingSchoolInfo.school_type || '',
      schoolName: existingSchoolInfo.school_name || '',
      schoolLocation: existingSchoolInfo.full_address || '',
      ncesSchoolId: initialNcesSchoolId,
      showSchoolInfoUnknownError: false
    };
    return _this;
  }

  SchoolInfoInterstitial.prototype.logEvent = function logEvent(eventName) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _firehose2.default.putRecord({
      study: 'school_info_interstitial',
      study_group: 'control',
      event: eventName,
      // Send "has NCES id" as data_int
      data_int: this.state.ncesSchoolId && this.state.ncesSchoolId !== '-1' ? 1 : 0,
      data_json: JSON.stringify(_extends({
        isComplete: SchoolInfoInterstitial.isSchoolInfoComplete(this.state)
      }, data))
    });
  };

  SchoolInfoInterstitial.isSchoolInfoComplete = function isSchoolInfoComplete(state) {
    if (!state.country) {
      return false;
    }

    if (state.country !== 'United States') {
      return true;
    }

    if (['homeschool', 'after school', 'organization', 'other'].includes(state.schoolType)) {
      return true;
    }

    if (state.ncesSchoolId && state.ncesSchoolId !== '-1') {
      return true;
    }

    return !!(state.country && state.schoolType && state.schoolName);
  };

  SchoolInfoInterstitial.prototype.componentDidMount = function componentDidMount() {
    this.logEvent(FIREHOSE_EVENTS.SHOW);
  };

  SchoolInfoInterstitial.prototype.buildSchoolData = function buildSchoolData() {
    var _state = this.state,
        country = _state.country,
        schoolType = _state.schoolType,
        ncesSchoolId = _state.ncesSchoolId;
    // If we have an NCES id, _only_ send that - everything else will be
    // backfilled by records on the server.

    if (ncesSchoolId && ncesSchoolId !== '-1') {
      return {
        "user[school_info_attributes][school_id]": ncesSchoolId
      };
    }

    // If we don't know enough to pick other metadata, only send these.
    if (!country || !schoolType) {
      return {
        "user[school_info_attributes][country]": country,
        "user[school_info_attributes][school_type]": schoolType
      };
    }

    // If an NCES type is selected but we don't know anything else, send a
    // blank NCES id to ensure we save the current input state.
    var isUS = country === 'United States';
    var isNcesSchoolType = isUS && _SchoolInfoInputs.SCHOOL_TYPES_HAVING_NCES_SEARCH.includes(schoolType);
    if (isNcesSchoolType && ncesSchoolId === '') {
      return {
        "user[school_info_attributes][country]": country,
        "user[school_info_attributes][school_type]": schoolType,
        "user[school_info_attributes][school_id]": ncesSchoolId
      };
    }

    return {
      "user[school_info_attributes][country]": country,
      "user[school_info_attributes][school_type]": schoolType,
      "user[school_info_attributes][school_name]": this.state.schoolName,
      "user[school_info_attributes][full_address]": this.state.schoolLocation
    };
  };

  SchoolInfoInterstitial.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      _BaseDialog2.default,
      {
        useUpdatedStyles: true,
        isOpen: true,
        handleClose: this.props.onClose,
        uncloseable: true
      },
      _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          { style: styles.heading },
          _locale2.default.schoolInfoInterstitialTitle()
        ),
        this.state.showSchoolInfoUnknownError && _react2.default.createElement(
          'p',
          { style: styles.error },
          _locale2.default.schoolInfoInterstitialUnknownError()
        ),
        _react2.default.createElement(
          'div',
          { style: styles.middle },
          _react2.default.createElement(
            'p',
            null,
            _locale2.default.schoolInfoInterstitialDescription()
          ),
          _react2.default.createElement(_SchoolInfoInputs2.default, {
            ref: function ref(_ref) {
              return _this2.schoolInfoInputs = _ref;
            },
            onCountryChange: this.onCountryChange,
            onSchoolTypeChange: this.onSchoolTypeChange,
            onSchoolChange: this.onSchoolChange,
            onSchoolNotFoundChange: this.onSchoolNotFoundChange,
            country: this.state.country,
            schoolType: this.state.schoolType,
            ncesSchoolId: this.state.ncesSchoolId,
            schoolName: this.state.schoolName,
            schoolLocation: this.state.schoolLocation,
            useGoogleLocationSearch: true,
            showErrors: false,
            showRequiredIndicator: false
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.bottom },
          _react2.default.createElement(_Button2.default, {
            onClick: this.handleSchoolInfoSubmit,
            text: _locale2.default.save(),
            color: _Button2.default.ButtonColor.orange
          })
        )
      )
    );
  };

  return SchoolInfoInterstitial;
}(_react2.default.Component);

SchoolInfoInterstitial.propTypes = {
  // This component is tightly bound to the HAML view that renders it and
  // populates its props, and similarly to the User update API that
  // it uses to save entered school info.
  scriptData: _react.PropTypes.shape({
    formUrl: _react.PropTypes.string.isRequired,
    authTokenName: _react.PropTypes.string.isRequired,
    authTokenValue: _react.PropTypes.string.isRequired,
    existingSchoolInfo: _react.PropTypes.shape({
      // Note, these names intentionally match the fields on the SchoolInfo
      // model, not their JavaScript-friendly equivalents.  The mapping
      // occurs in the constructor, below, and back when we submit.
      school_id: _react.PropTypes.string,
      country: _react.PropTypes.string,
      school_type: _react.PropTypes.string,
      school_name: _react.PropTypes.string,
      full_address: _react.PropTypes.string
    }).isRequired
  }).isRequired,
  onClose: _react.PropTypes.func.isRequired
};
exports.default = SchoolInfoInterstitial;
module.exports = exports['default'];

/***/ })

},[3458]);