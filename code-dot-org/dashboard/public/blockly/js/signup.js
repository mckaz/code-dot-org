webpackJsonp([41],{

/***/ 3470:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3471);


/***/ }),

/***/ 3471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SchoolAutocompleteDropdownWithLabel = __webpack_require__(1707);

var _SchoolAutocompleteDropdownWithLabel2 = _interopRequireDefault(_SchoolAutocompleteDropdownWithLabel);

var _CountryAutocompleteDropdown = __webpack_require__(2158);

var _CountryAutocompleteDropdown2 = _interopRequireDefault(_CountryAutocompleteDropdown);

var _geographyConstants = __webpack_require__(1749);

var _SchoolNotFound = __webpack_require__(2159);

var _SchoolNotFound2 = _interopRequireDefault(_SchoolNotFound);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _firehose = __webpack_require__(925);

var _firehose2 = _interopRequireDefault(_firehose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SCHOOL_TYPES_HAVING_NCES_SEARCH = ['charter', 'private', 'public'];

var SCHOOL_TYPES_HAVING_NAMES = ['charter', 'private', 'public', 'afterschool', 'organization'];

window.SignupManager = function (options) {
  this.options = options;
  var self = this;

  var optionalTestGroup = Math.random() < 0.5 ? 'control' : 'optional-removed';
  var showOptional = optionalTestGroup === 'control';

  var schoolData = {
    country: options.usIP ? 'United States' : '',
    nces: '',
    schoolName: '',
    schoolCity: '',
    schoolState: '',
    schoolZip: '',
    schoolType: '',
    showErrorMsg: false
  };

  // Check for URL having: /users/sign_up?user%5Buser_type%5D=teacher
  if (self.options.isTeacher === "true") {
    // Select teacher in dropdown.
    (0, _jquery2.default)("#user_user_type").val("teacher");

    showTeacher();
  }

  function getSchoolInfoSplitTestData() {
    return JSON.stringify({
      'country': schoolData.country,
      'nces': schoolData.nces
    });
  }

  function sendSchoolInfoSplitTestEvent(event) {
    _firehose2.default.putRecord({
      study: 'school-info-optional',
      study_group: optionalTestGroup,
      event: event,
      data_json: getSchoolInfoSplitTestData()
    });
  }

  function formSuccess(success) {
    var url;
    if (self.options.returnToUrl !== "") {
      url = self.options.returnToUrl;
    } else if (isTeacherSelected()) {
      url = self.options.teacherDashboardUrl;
    } else {
      url = "/";
    }
    if (isTeacherSelected()) {
      sendSchoolInfoSplitTestEvent('signup-success');
    }
    window.location.href = url;
  }

  function formError(err) {
    // re-enable "Sign up" button upon error
    (0, _jquery2.default)('#signup-button').prop('disabled', false);

    // Define the fields that can have specific errors attached to them.
    var fields = ["user_type", "name", "email", "password", "password_confirmation", "age", "gender", "terms_of_service_version", "school_info.zip"];

    var fieldsWithErrors = 0;
    if (err.responseJSON && err.responseJSON.errors) {
      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (err.responseJSON.errors[field]) {
          var errorField = (0, _jquery2.default)('#' + field + '-block .error_in_field');
          // We have a custom inline message for user_type errors already set in the DOM.
          if (field === "terms_of_service_version") {
            errorField.text(self.options.acceptTermsString);
          } else if (field === "school_info.zip") {
            errorField = (0, _jquery2.default)('#school-zip').find('.error_in_field');
            errorField.text(err.responseJSON.errors[field][0]);
          } else if (field !== "user_type") {
            errorField.text(err.responseJSON.errors[field][0]);
          }
          errorField.fadeTo("normal", 1);
          fieldsWithErrors++;
        }
      }
    }

    // if we did not receive a response that had field-specific error information,
    // show a generic error
    if (fieldsWithErrors === 0) {
      (0, _jquery2.default)('#signup-error').show();
    }

    if (isTeacherSelected()) {
      sendSchoolInfoSplitTestEvent('signup-error');
    }
  }

  (0, _jquery2.default)("#user_user_type").change(function () {
    var value = (0, _jquery2.default)(this).val();
    if (value === "student") {
      showStudent();
    } else if (value === "teacher") {
      showTeacher();
    }
  });

  function setSchoolInfoVisibility(state) {
    if (state) {
      (0, _jquery2.default)("#schooldropdown-block").fadeIn();
    } else {
      (0, _jquery2.default)("#schooldropdown-block").hide();
    }
  }

  function showStudent() {
    // Show correct form elements.
    (0, _jquery2.default)("#age-block").fadeIn();
    (0, _jquery2.default)("#gender-block").fadeIn();
    (0, _jquery2.default)("#name-student").fadeIn();
    (0, _jquery2.default)("#name-teacher").hide();
    setSchoolInfoVisibility(false);

    // Show correct terms below form.
    (0, _jquery2.default)("#student-terms").fadeIn();
    (0, _jquery2.default)("#teacher-terms").hide();

    // Implicitly accept terms of service for students.
    (0, _jquery2.default)("#user_terms_of_service_version").prop('checked', true);
  }

  function onCountryChange(_, event) {
    schoolData.country = event ? event.value : '';
    updateAutocompleteSchoolFields(schoolData);
  }

  function getCountryCodeForCountry(countryName) {
    return _geographyConstants.COUNTRIES.find(function (pair) {
      return pair.value === countryName;
    }).label;
  }

  function onSchoolTypeChange(event) {
    schoolData.schoolType = event ? event.target.value : '';
    updateAutocompleteSchoolFields(schoolData);
  }

  function onSchoolChange(_, event) {
    schoolData.nces = event ? event.value : '';
    updateAutocompleteSchoolFields(schoolData);
  }

  function onSchoolNotFoundChange(field, event) {
    if (event) {
      schoolData = _extends({}, schoolData, _defineProperty({}, field, event.target.value));
    }
    updateAutocompleteSchoolFields(schoolData);
  }

  function updateAutocompleteSchoolFields(data) {
    var isUS = data.country === 'United States';
    _reactDom2.default.render(_react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h5',
        { style: { fontWeight: "bold" } },
        showOptional ? _locale2.default.schoolInformationOptionalHeader() : _locale2.default.schoolInformationHeader()
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(_CountryAutocompleteDropdown2.default, {
        onChange: onCountryChange,
        value: data.country,
        showErrorMsg: false,
        singleLineLayout: true
      }),
      _react2.default.createElement(
        'div',
        { className: 'itemblock', style: { minHeight: 42 } },
        _react2.default.createElement(
          'div',
          { className: 'school-info-labelblock' },
          _locale2.default.signupFormSchoolType()
        ),
        _react2.default.createElement(
          'select',
          {
            className: 'form-control fieldblock',
            id: 'school-type-auto',
            name: 'user[school_info_attributes][school_type]',
            type: 'select',
            defaultValue: '',
            onChange: onSchoolTypeChange
          },
          _react2.default.createElement('option', { disabled: '', value: '' }),
          _react2.default.createElement(
            'option',
            { value: 'charter' },
            'Charter'
          ),
          _react2.default.createElement(
            'option',
            { value: 'private' },
            'Private'
          ),
          _react2.default.createElement(
            'option',
            { value: 'public' },
            'Public'
          ),
          _react2.default.createElement(
            'option',
            { value: 'homeschool' },
            'Homeschool'
          ),
          _react2.default.createElement(
            'option',
            { value: 'afterschool' },
            'After School'
          ),
          _react2.default.createElement(
            'option',
            { value: 'organization' },
            'Organization'
          ),
          _react2.default.createElement(
            'option',
            { value: 'other' },
            'Other'
          )
        )
      ),
      isUS && SCHOOL_TYPES_HAVING_NCES_SEARCH.includes(data.schoolType) && _react2.default.createElement(_SchoolAutocompleteDropdownWithLabel2.default, {
        setField: onSchoolChange,
        value: data.nces,
        showErrorMsg: false,
        singleLineLayout: true,
        showRequiredIndicator: false
      }),
      _react2.default.createElement(SignupSchoolNotFound, {
        isUS: isUS,
        data: data,
        schoolDataErrors: {},
        onSchoolNotFoundChange: onSchoolNotFoundChange
      })
    ), (0, _jquery2.default)("#schooldropdown-block")[0]);
  }

  function showTeacher() {
    // Show correct form elements.
    (0, _jquery2.default)("#age-block").hide();
    (0, _jquery2.default)("#gender-block").hide();
    (0, _jquery2.default)("#name-student").hide();
    (0, _jquery2.default)("#name-teacher").fadeIn();
    setSchoolInfoVisibility(true);

    // Show correct terms below form.
    (0, _jquery2.default)("#student-terms").hide();
    (0, _jquery2.default)("#teacher-terms").fadeIn();

    // Force teachers to explicitly accept terms of service.
    (0, _jquery2.default)("#user_terms_of_service_version").prop('checked', false);

    updateAutocompleteSchoolFields(schoolData);

    sendSchoolInfoSplitTestEvent('signup-loaded');
  }

  function getUserTypeSelected() {
    var formData = (0, _jquery2.default)('#new_user').serializeArray();
    var userType = _jquery2.default.grep(formData, function (e) {
      return e.name === "user[user_type]";
    });
    if (userType.length === 1) {
      return userType[0].value;
    }
    return "no_user_type";
  }

  function isTeacherSelected() {
    return getUserTypeSelected() === "teacher";
  }

  (0, _jquery2.default)(".signupform").submit(function () {
    // Clear the prior hashed email.
    (0, _jquery2.default)('#user_hashed_email').val('');
    // Hide error message if there is one from previous attempt
    (0, _jquery2.default)('#signup-error').hide();
    // Disable "Sign up" button to avoid multiple clicks while submitting
    (0, _jquery2.default)('#signup-button').prop('disabled', true);

    // Hash the email.
    window.dashboard.hashEmail({ email_selector: "#user_email",
      hashed_email_selector: "#user_hashed_email",
      age_selector: "#user_user_age",
      skip_clear_email: true });

    var formData = (0, _jquery2.default)("#new_user").serializeArray();

    // Data transformations for school info
    var signupForm = (0, _jquery2.default)(".signupform").serializeArray();
    var schoolInfoDataMap = [{ from: 'nces_school_s', to: 'school_id' }, { from: 'country_s', to: 'country', transform: getCountryCodeForCountry }, { from: 'school_name_s', to: 'school_name' }, { from: 'school_state_s', to: 'school_state' }, { from: 'school_zip_s', to: 'school_zip' }, { from: 'registration_location', to: 'full_address' }];
    signupForm.forEach(function (el) {
      var match = schoolInfoDataMap.find(function (x) {
        return x.from === el.name;
      });
      if (match) {
        var value = match.transform ? match.transform(el.value) : el.value;
        if (!(match.to === 'school_id' && value === '-1')) {
          // skip passing "not found" school id value
          formData.push({ name: "user[school_info_attributes][" + match.to + "]", value: value });
        }
      }
    });

    if (isTeacherSelected()) {
      // Teachers get age 21 in the form data.
      formData.push({ name: "user[age]", value: "21+" });
    } else {
      // Students have their email cleared from the form data.
      // (But we left it showing in the form UI in case they
      // reattempt.)
      _jquery2.default.grep(formData, function (e) {
        return e.name === "user[email]";
      })[0].value = "";
      _jquery2.default.grep(formData, function (e) {
        return e.name.startsWith("user[school_info_attributes]");
      }).forEach(function (x) {
        return x.value = "";
      });
    }

    // Hide all errors that might be showing from a previous attempt.
    (0, _jquery2.default)(".error_in_field").css("opacity", 0);

    // Hide any other hint messages that might be showing based on input.
    (0, _jquery2.default)("#password_message").text("");
    (0, _jquery2.default)("#password_message_confirmation").text("");

    if (isTeacherSelected()) {
      updateAutocompleteSchoolFields(schoolData);
      sendSchoolInfoSplitTestEvent('signup-submitted');
    }

    _jquery2.default.ajax({
      url: "/users.json",
      type: "post",
      dataType: "json",
      data: formData
    }).done(formSuccess).fail(formError);

    return false;
  });

  (0, _jquery2.default)("#user_password").on('input', function (e) {
    var password = (0, _jquery2.default)(this).val();
    var password_message = (0, _jquery2.default)("#password-block .error_in_field");
    var password_message_confirmation = (0, _jquery2.default)("#password_confirmation-block .error_in_field");
    if (!password || password.length < 6) {
      password_message.text(self.options.invalidPasswordString);
      password_message.fadeTo("normal", 1);
    } else {
      password_message.text("");
    }
    password_message_confirmation.text("");
  });

  (0, _jquery2.default)("#user_password_confirmation").on('input', function (e) {
    var conf_password = (0, _jquery2.default)(this).val();
    var origin_password = (0, _jquery2.default)('#user_password').val();
    var password_message = (0, _jquery2.default)("#password-block .error_in_field");
    var password_message_confirmation = (0, _jquery2.default)("#password_confirmation-block .error_in_field");
    if (conf_password !== origin_password) {
      password_message_confirmation.text(self.options.passwordMismatchString);
      password_message_confirmation.fadeTo("normal", 1);
    } else {
      password_message_confirmation.text("");
    }
    password_message.text("");
  });

  (0, _jquery2.default)("#user_name").placeholder();
  (0, _jquery2.default)("#user_email").placeholder();
  (0, _jquery2.default)("#user_school").placeholder();
};

var SignupSchoolNotFound = function (_React$Component) {
  _inherits(SignupSchoolNotFound, _React$Component);

  function SignupSchoolNotFound() {
    _classCallCheck(this, SignupSchoolNotFound);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SignupSchoolNotFound.prototype.render = function render() {
    var _props = this.props,
        isUS = _props.isUS,
        data = _props.data,
        schoolDataErrors = _props.schoolDataErrors,
        onSchoolNotFoundChange = _props.onSchoolNotFoundChange;


    var outsideUS = !isUS;
    var ncesInfoNotFound = data.nces === '-1';
    var noDropdownForSchoolType = !SCHOOL_TYPES_HAVING_NCES_SEARCH.includes(data.schoolType) && data.schoolType !== '';
    if (outsideUS || ncesInfoNotFound || noDropdownForSchoolType) {
      var askForName = SCHOOL_TYPES_HAVING_NAMES.includes(data.schoolType);
      var schoolNameLabel = ['afterschool', 'organization'].includes(data.schoolType) ? _locale2.default.signupFormSchoolOrOrganization() : _locale2.default.schoolName();
      return _react2.default.createElement(_SchoolNotFound2.default, {
        onChange: onSchoolNotFoundChange,
        schoolName: askForName ? data.schoolName : _SchoolNotFound2.default.OMIT_FIELD,
        schoolType: _SchoolNotFound2.default.OMIT_FIELD,
        schoolCity: data.schoolCity,
        schoolState: isUS ? data.schoolState : _SchoolNotFound2.default.OMIT_FIELD,
        schoolZip: isUS ? data.schoolZip : _SchoolNotFound2.default.OMIT_FIELD,
        showErrorMsg: schoolDataErrors.school,
        singleLineLayout: true,
        showRequiredIndicators: false,
        schoolNameLabel: schoolNameLabel,
        useGoogleLocationSearch: true
      });
    }
    return null;
  };

  return SignupSchoolNotFound;
}(_react2.default.Component);

SignupSchoolNotFound.propTypes = {
  isUS: _react.PropTypes.bool.isRequired,
  data: _react.PropTypes.object.isRequired,
  schoolDataErrors: _react.PropTypes.object.isRequired,
  onSchoolNotFoundChange: _react.PropTypes.func.isRequired
};

/***/ })

},[3470]);