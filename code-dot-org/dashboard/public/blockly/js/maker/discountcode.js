webpackJsonp([19],{

/***/ 2983:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _ValidationStep = __webpack_require__(2092);

var _ValidationStep2 = _interopRequireDefault(_ValidationStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  unit6Form: {
    marginTop: 15
  },
  question: {
    marginBottom: 5,
    // bolder
    fontFamily: '"Gotham 7r", sans-serif'
  },
  radio: {
    margin: '0px 10px'
  },
  submit: {
    marginTop: 5
  },
  errorText: {
    color: 'red'
  }
};

var Unit6ValidationStep = function (_Component) {
  _inherits(Unit6ValidationStep, _Component);

  function Unit6ValidationStep(props) {
    _classCallCheck(this, Unit6ValidationStep);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleChangeIntention = function (event) {
      _this.setState({ choice: event.target.value });
    };

    _this.handleSubmit = function () {
      _this.setState({ submitting: true });
      $.ajax({
        url: "/maker/apply",
        type: "post",
        dataType: "json",
        data: {
          unit_6_intention: _this.state.choice
        }
      }).done(function (data) {
        _this.props.onSubmit(data.eligible);
        _this.setState({
          submitting: false,
          errorText: ''
        });
      }).fail(function (jqXHR, textStatus) {
        console.error(textStatus);
        _this.setState({
          submitting: false,
          errorText: "We're sorry, but something went wrong. Try refreshing the page " + "and submitting again.  If this does not work, please contact support@code.org."
        });
      });
    };

    _this.state = {
      choice: props.initialChoice,
      submitting: false
    };
    return _this;
  }

  Unit6ValidationStep.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        showRadioButtons = _props.showRadioButtons,
        stepStatus = _props.stepStatus;
    var errorText = this.state.errorText;

    return _react2.default.createElement(
      _ValidationStep2.default,
      {
        stepName: _locale2.default.eligibilityReqYear(),
        stepStatus: stepStatus,
        alwaysShowChildren: true
      },
      showRadioButtons && _react2.default.createElement(
        "div",
        null,
        _locale2.default.eligibilityReqYearFail(),
        _react2.default.createElement(
          "form",
          { style: styles.unit6Form },
          _react2.default.createElement(
            "strong",
            { style: styles.question },
            _locale2.default.eligibilityReqYearConfirmInstructions()
          ),
          [['no', _locale2.default.eligibilityYearNo()], ['yes1718', _locale2.default.eligibilityYearYes1718()], ['yes1819', _locale2.default.eligibilityYearYes1819()], ['yesAfter', _locale2.default.eligibilityYearAfter()], ['unsure', _locale2.default.eligibilityYearUnknown()]].map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                value = _ref2[0],
                description = _ref2[1];

            return _react2.default.createElement(
              "label",
              { key: value },
              _react2.default.createElement("input", {
                style: styles.radio,
                type: "radio",
                name: "year",
                value: value,
                checked: _this2.state.choice === value,
                onChange: _this2.handleChangeIntention,
                disabled: stepStatus !== _ValidationStep.Status.UNKNOWN
              }),
              description
            );
          }),
          stepStatus === _ValidationStep.Status.UNKNOWN && _react2.default.createElement(_Button2.default, {
            style: styles.submit,
            color: _Button2.default.ButtonColor.orange,
            text: this.state.submitting ? _locale2.default.submitting() : _locale2.default.submit(),
            onClick: this.handleSubmit,
            disabled: this.state.submitting || this.props.disabled
          }),
          errorText && _react2.default.createElement(
            "div",
            { style: styles.errorText },
            errorText
          )
        )
      ),
      stepStatus === _ValidationStep.Status.FAILED && _react2.default.createElement(
        "div",
        null,
        _locale2.default.eligibilityYearDecline()
      )
    );
  };

  return Unit6ValidationStep;
}(_react.Component);

Unit6ValidationStep.propTypes = {
  showRadioButtons: _react.PropTypes.bool.isRequired,
  stepStatus: _react.PropTypes.oneOf(Object.values(_ValidationStep.Status)).isRequired,
  initialChoice: _react.PropTypes.string,
  onSubmit: _react.PropTypes.func.isRequired,
  disabled: _react.PropTypes.bool
};
exports.default = Unit6ValidationStep;
module.exports = exports["default"];

/***/ }),

/***/ 3520:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3521);


/***/ }),

/***/ 3521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _EligibilityChecklist = __webpack_require__(3522);

var _EligibilityChecklist2 = _interopRequireDefault(_EligibilityChecklist);

var _DiscountAdminOverride = __webpack_require__(3529);

var _DiscountAdminOverride2 = _interopRequireDefault(_DiscountAdminOverride);

var _ValidationStep = __webpack_require__(2092);

var _getScriptData = __webpack_require__(596);

var _getScriptData2 = _interopRequireDefault(_getScriptData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  var scriptData = (0, _getScriptData2.default)('discountcode');
  var application = scriptData.application,
      is_admin = scriptData.is_admin;


  _reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    is_admin && _react2.default.createElement(_DiscountAdminOverride2.default, null),
    !is_admin && _react2.default.createElement(_EligibilityChecklist2.default, {
      statusPD: application.is_pd_eligible ? _ValidationStep.Status.SUCCEEDED : _ValidationStep.Status.FAILED,
      statusStudentCount: application.is_progress_eligible ? _ValidationStep.Status.SUCCEEDED : _ValidationStep.Status.FAILED,
      unit6Intention: application.unit_6_intention,
      schoolId: application.school_id,
      schoolName: application.school_name,
      hasConfirmedSchool: application.has_confirmed_school,
      getsFullDiscount: application.gets_full_discount,
      initialDiscountCode: application.discount_code,
      initialExpiration: application.expiration,
      adminSetStatus: application.admin_set_status
    })
  ), document.getElementById('discountcode'));
});

/***/ }),

/***/ 3522:
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

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _ValidationStep = __webpack_require__(2092);

var _ValidationStep2 = _interopRequireDefault(_ValidationStep);

var _DiscountCodeSchoolChoice = __webpack_require__(3523);

var _DiscountCodeSchoolChoice2 = _interopRequireDefault(_DiscountCodeSchoolChoice);

var _Unit6ValidationStep = __webpack_require__(2983);

var _Unit6ValidationStep2 = _interopRequireDefault(_Unit6ValidationStep);

var _EligibilityConfirmDialog = __webpack_require__(3524);

var _EligibilityConfirmDialog2 = _interopRequireDefault(_EligibilityConfirmDialog);

var _DiscountCodeInstructions = __webpack_require__(3525);

var _DiscountCodeInstructions2 = _interopRequireDefault(_DiscountCodeInstructions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @file Maker Discount Code Eligibility Checklist */


var styles = {
  main: {
    color: _color2.default.charcoal
  },
  discountMessage: {
    marginTop: 10,
    marginBottom: 10
  },
  bold: {
    fontFamily: '"Gotham 7r", sans-serif',
    display: 'inline'
  }
};

var EligibilityChecklist = function (_Component) {
  _inherits(EligibilityChecklist, _Component);

  function EligibilityChecklist(props) {
    _classCallCheck(this, EligibilityChecklist);

    // If we had already submitted our intentions for unit 6, initialize component
    // state with that data
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      statusYear: _ValidationStep.Status.UNKNOWN,
      yearChoice: null, // stores the teaching-year choice until submitted
      submitting: false,
      discountAmount: null,
      confirming: false,
      discountCode: null
    };

    _this.handleSchoolConfirmed = function (fullDiscount) {
      _this.setState({
        discountAmount: fullDiscount ? "$0" : "$97.50"
      });
    };

    _this.handleUnit6Submitted = function (eligible) {
      _this.setState({
        statusYear: eligible ? _ValidationStep.Status.SUCCEEDED : _ValidationStep.Status.FAILED
      });
    };

    _this.confirmEligibility = function () {
      return _this.setState({ confirming: true });
    };

    _this.handleCancelDialog = function () {
      return _this.setState({ confirming: false });
    };

    _this.handleSuccessDialog = function (discountCode, expiration) {
      _this.setState({ discountCode: discountCode, expiration: expiration });
    };

    if (props.unit6Intention) {
      _this.state = _extends({}, _this.state, {
        yearChoice: props.unit6Intention,
        statusYear: props.unit6Intention === 'yes1718' || props.unit6Intention === 'yes1819' ? _ValidationStep.Status.SUCCEEDED : _ValidationStep.Status.FAILED
      });
    }

    if (props.adminSetStatus) {
      _this.state = _extends({}, _this.state, {
        statusYear: _ValidationStep.Status.SUCCEEDED
      });
    }

    if (props.hasConfirmedSchool || props.adminSetStatus) {
      _this.state = _extends({}, _this.state, {
        discountAmount: props.getsFullDiscount ? "$0" : "$97.50"
      });
    }

    _this.state = _extends({}, _this.state, {
      discountCode: props.initialDiscountCode,
      expiration: props.initialExpiration
    });
    return _this;
  }

  EligibilityChecklist.prototype.render = function render() {
    if (this.state.discountCode) {
      return _react2.default.createElement(_DiscountCodeInstructions2.default, {
        discountCode: this.state.discountCode,
        fullDiscount: this.props.getsFullDiscount,
        expiration: this.state.expiration
      });
    }

    return _react2.default.createElement(
      "div",
      { style: styles.main },
      _react2.default.createElement(
        "h2",
        null,
        _locale2.default.eligibilityRequirements()
      ),
      _react2.default.createElement(
        "div",
        null,
        _locale2.default.eligibilityExplanation()
      ),
      _react2.default.createElement(
        _ValidationStep2.default,
        {
          stepName: _locale2.default.eligibilityReqPD(),
          stepStatus: this.props.statusPD
        },
        _locale2.default.eligibilityReqPDFail()
      ),
      _react2.default.createElement(
        _ValidationStep2.default,
        {
          stepName: _locale2.default.eligibilityReqStudentCount(),
          stepStatus: this.props.statusStudentCount
        },
        _locale2.default.eligibilityReqStudentCountFail()
      ),
      _react2.default.createElement(_Unit6ValidationStep2.default, {
        showRadioButtons: this.props.statusStudentCount === _ValidationStep.Status.SUCCEEDED && this.props.statusPD === _ValidationStep.Status.SUCCEEDED && !this.props.adminSetStatus,
        stepStatus: this.state.statusYear,
        initialChoice: this.props.unit6Intention,
        onSubmit: this.handleUnit6Submitted
      }),
      this.state.statusYear === _ValidationStep.Status.SUCCEEDED && !this.props.adminSetStatus && _react2.default.createElement(_DiscountCodeSchoolChoice2.default, {
        initialSchoolId: this.props.schoolId,
        initialSchoolName: this.props.schoolName,
        schoolConfirmed: this.props.hasConfirmedSchool,
        onSchoolConfirmed: this.handleSchoolConfirmed
      }),
      this.state.discountAmount === "$97.50" && !this.props.adminSetStatus && _react2.default.createElement(
        "div",
        { style: styles.discountMessage },
        "According to our data, your school has fewer than 50% of students that are eligible for free/reduced-price lunches. This means that we can bring down the cost of the $325 kit to just $97.50.",
        " ",
        _react2.default.createElement(
          "strong",
          { style: styles.bold },
          "If this data seems inaccurate and you believe there are over 50% of students that are eligible for free/reduced-price lunch at your school, please contact teacher@code.org."
        ),
        " ",
        "Otherwise, click \"Get Code\" below."
      ),
      this.props.adminSetStatus && _react2.default.createElement(
        "div",
        { style: styles.discountMessage },
        _locale2.default.eligibilityReqYearFail()
      ),
      this.state.discountAmount && _react2.default.createElement(_Button2.default, {
        color: _Button2.default.ButtonColor.orange,
        text: _locale2.default.getCodePrice({ price: this.state.discountAmount }),
        onClick: this.confirmEligibility
      }),
      this.state.confirming && _react2.default.createElement(_EligibilityConfirmDialog2.default, {
        onCancel: this.handleCancelDialog,
        onSuccess: this.handleSuccessDialog
      })
    );
  };

  return EligibilityChecklist;
}(_react.Component);

EligibilityChecklist.propTypes = {
  statusPD: _react.PropTypes.oneOf(Object.values(_ValidationStep.Status)).isRequired,
  statusStudentCount: _react.PropTypes.oneOf(Object.values(_ValidationStep.Status)).isRequired,
  unit6Intention: _react.PropTypes.string,
  schoolId: _react.PropTypes.string,
  schoolName: _react.PropTypes.string,
  hasConfirmedSchool: _react.PropTypes.bool,
  getsFullDiscount: _react.PropTypes.bool,
  initialDiscountCode: _react.PropTypes.string,
  initialExpiration: _react.PropTypes.string,
  adminSetStatus: _react.PropTypes.bool.isRequired
};
exports.default = EligibilityChecklist;
module.exports = exports["default"];

/***/ }),

/***/ 3523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _SchoolAutocompleteDropdownWithLabel = __webpack_require__(1707);

var _SchoolAutocompleteDropdownWithLabel2 = _interopRequireDefault(_SchoolAutocompleteDropdownWithLabel);

var _censusFormStyles = __webpack_require__(1149);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  confirmed: {
    marginBottom: 5
  },
  button: {
    marginTop: 10
  },
  errorText: {
    color: 'red'
  }
};

var DiscountCodeSchoolChoice = function (_Component) {
  _inherits(DiscountCodeSchoolChoice, _Component);

  function DiscountCodeSchoolChoice(props) {
    _classCallCheck(this, DiscountCodeSchoolChoice);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleDropdownChange = function (field, event) {
      if (field === 'nces') {
        _this.setState({
          schoolId: event.value,
          schoolName: event.label
        });
      }
    };

    _this.handleClickConfirmSchool = function () {
      _this.setState({
        confirming: true
      });

      $.ajax({
        url: "/maker/schoolchoice",
        type: "post",
        dataType: "json",
        data: {
          nces: _this.state.schoolId
        }
      }).done(function (data) {
        _this.props.onSchoolConfirmed(data.full_discount);
        _this.setState({
          confirming: false,
          confirmed: true,
          errorText: ''
        });
      }).fail(function (jqXHR, textStatus) {
        console.error(textStatus);
        _this.setState({
          confirming: false,
          confirmed: false,
          errorText: "We're sorry, but something went wrong. Try refreshing the page " + "and submitting again.  If this does not work, please contact support@code.org."
        });
      });
    };

    _this.state = {
      confirming: false,
      confirmed: props.schoolConfirmed,
      schoolId: props.initialSchoolId,
      schoolName: props.initialSchoolName,
      errorText: ''
    };
    return _this;
  }

  DiscountCodeSchoolChoice.prototype.render = function render() {
    var _state = this.state,
        schoolId = _state.schoolId,
        schoolName = _state.schoolName,
        confirming = _state.confirming,
        confirmed = _state.confirmed;


    if (confirmed) {
      return _react2.default.createElement(
        "div",
        { style: styles.confirmed },
        _react2.default.createElement(
          "div",
          { style: _censusFormStyles.styles.question },
          _locale2.default.schoolName()
        ),
        schoolName
      );
    }

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_SchoolAutocompleteDropdownWithLabel2.default, {
        setField: this.handleDropdownChange,
        value: schoolId,
        showErrorMsg: false
      }),
      this.state.schoolId !== "-1" && _react2.default.createElement(_Button2.default, {
        color: _Button2.default.ButtonColor.orange,
        text: confirming ? _locale2.default.confirming() : _locale2.default.confirmSchool(),
        onClick: this.handleClickConfirmSchool,
        style: styles.button,
        disabled: confirming || !this.state.schoolId
      }),
      this.state.schoolId === "-1" && _react2.default.createElement(
        "div",
        null,
        _locale2.default.eligibilitySchoolUnknown(),
        _react2.default.createElement(
          "b",
          null,
          " ",
          _locale2.default.contactToContinue()
        )
      ),
      this.state.errorText && _react2.default.createElement(
        "div",
        { style: styles.errorText },
        this.state.errorText
      )
    );
  };

  return DiscountCodeSchoolChoice;
}(_react.Component);

DiscountCodeSchoolChoice.propTypes = {
  initialSchoolId: _react.PropTypes.string,
  initialSchoolName: _react.PropTypes.string,
  schoolConfirmed: _react.PropTypes.bool.isRequired,
  onSchoolConfirmed: _react.PropTypes.func.isRequired
};
exports.default = DiscountCodeSchoolChoice;
module.exports = exports["default"];

/***/ }),

/***/ 3524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _BaseDialog = __webpack_require__(500);

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _DialogFooter = __webpack_require__(965);

var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @file Confirm Dialog for Maker Discount Codes */


var styles = {
  subtitle: {
    fontSize: 16
  },
  form: {
    margin: '10px 0'
  },
  signature: {
    margin: '5px 0'
  },
  signatureBox: {
    height: 40,
    width: '100%',
    boxSizing: 'border-box',
    padding: 10
  },
  checkboxes: {
    paddingLeft: 5,
    marginBottom: 20
  },
  checkboxLabel: {
    marginLeft: 25
  },
  checkbox: {
    marginLeft: -25,
    width: 25
  },
  error: {
    color: 'red',
    marginTop: 20
  },
  bold: {
    fontFamily: '"Gotham 7r", sans-serif',
    display: 'inline'
  }
};

var EligibilityConfirmDialog = function (_Component) {
  _inherits(EligibilityConfirmDialog, _Component);

  function EligibilityConfirmDialog() {
    var _temp, _this, _ret;

    _classCallCheck(this, EligibilityConfirmDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      signature: "",
      validInput: false,
      submitting: false,
      error: ''
    }, _this.verifyResponse = function () {
      _this.setState({
        validInput: _this.check1.checked && _this.check2.checked && _this.check3.checked && /\S/.test(_this.state.signature)
      });
    }, _this.handleSubmit = function () {
      _this.setState({ submitting: true });
      $.ajax({
        url: "/maker/complete",
        type: "post",
        dataType: "json",
        data: {
          signature: _this.state.signature
        }
      }).done(function (data) {
        _this.props.onSuccess(data.code, data.expiration);
      }).fail(function (jqXHR, textStatus) {
        _this.setState({
          error: "We're sorry, but something went wrong. Try refreshing the page " + "and submitting again.  If this does not work, please contact support@code.org."
        });
      });
    }, _this.setSignature = function (event) {
      _this.setState({ signature: event.target.value }, _this.verifyResponse);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  EligibilityConfirmDialog.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      _BaseDialog2.default,
      {
        useUpdatedStyles: true,
        uncloseable: true,
        isOpen: true,
        style: { padding: 20 }
      },
      _react2.default.createElement(
        "h2",
        null,
        _locale2.default.getCode()
      ),
      _react2.default.createElement(
        "div",
        { style: styles.subtitle },
        _locale2.default.verifyStatementsforCode()
      ),
      _react2.default.createElement(
        "form",
        { style: styles.form },
        _react2.default.createElement(
          "div",
          { style: styles.checkboxes },
          _react2.default.createElement(
            "label",
            { style: styles.checkboxLabel },
            _react2.default.createElement("input", {
              style: styles.checkbox,
              type: "checkbox",
              ref: function ref(input) {
                return _this2.check1 = input;
              },
              disabled: this.state.submitting,
              onChange: this.verifyResponse
            }),
            _locale2.default.verifyStudentCount()
          ),
          _react2.default.createElement(
            "label",
            { style: styles.checkboxLabel },
            _react2.default.createElement("input", {
              style: styles.checkbox,
              type: "checkbox",
              ref: function ref(input) {
                return _this2.check2 = input;
              },
              disabled: this.state.submitting,
              onChange: this.verifyResponse
            }),
            _locale2.default.verifyYear()
          ),
          _react2.default.createElement(
            "label",
            { style: styles.checkboxLabel },
            _react2.default.createElement("input", {
              style: styles.checkbox,
              type: "checkbox",
              ref: function ref(input) {
                return _this2.check3 = input;
              },
              disabled: this.state.submitting,
              onChange: this.verifyResponse
            }),
            _locale2.default.verifySingleCode()
          )
        ),
        _react2.default.createElement(
          "label",
          null,
          _react2.default.createElement(
            "div",
            null,
            _locale2.default.verifySignature()
          ),
          _react2.default.createElement(
            "div",
            { style: styles.signature },
            _react2.default.createElement(
              "strong",
              { style: styles.bold },
              "Electronic Signature"
            ),
            " ",
            _locale2.default.typeName()
          ),
          _react2.default.createElement("input", {
            value: this.state.signature,
            disabled: this.state.submitting,
            style: styles.signatureBox,
            onChange: this.setSignature
          })
        )
      ),
      _react2.default.createElement(
        "div",
        null,
        _locale2.default.contactSupport()
      ),
      this.state.error && _react2.default.createElement(
        "div",
        { style: styles.error },
        this.state.error
      ),
      _react2.default.createElement(
        _DialogFooter2.default,
        null,
        _react2.default.createElement(_Button2.default, {
          text: _locale2.default.dialogCancel(),
          onClick: this.props.onCancel,
          color: _Button2.default.ButtonColor.gray
        }),
        _react2.default.createElement(_Button2.default, {
          text: _locale2.default.getCode(),
          onClick: this.handleSubmit,
          disabled: !this.state.validInput || this.state.submitting
        })
      )
    );
  };

  return EligibilityConfirmDialog;
}(_react.Component);

EligibilityConfirmDialog.propTypes = {
  onCancel: _react.PropTypes.func.isRequired,
  onSuccess: _react.PropTypes.func.isRequired
};
exports.default = EligibilityConfirmDialog;
module.exports = exports["default"];

/***/ }),

/***/ 3525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _viewCart = __webpack_require__(3526);

var _viewCart2 = _interopRequireDefault(_viewCart);

var _addToCart = __webpack_require__(3527);

var _addToCart2 = _interopRequireDefault(_addToCart);

var _enterDiscountCode = __webpack_require__(3528);

var _enterDiscountCode2 = _interopRequireDefault(_enterDiscountCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  title: {
    fontSize: 32
  },
  image: {
    width: 300,
    marginTop: 10,
    marginLeft: 50
  },
  step: {
    marginTop: 25,
    fontSize: 16
  },
  bold: {
    fontFamily: '"Gotham 7r", sans-serif',
    display: 'inline'
  }
};

var DiscountCodeInstructions = function (_Component) {
  _inherits(DiscountCodeInstructions, _Component);

  function DiscountCodeInstructions() {
    _classCallCheck(this, DiscountCodeInstructions);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  DiscountCodeInstructions.prototype.render = function render() {
    // Date formated to be in form "December 31, 2018"
    var expiration = new Date(this.props.expiration).toLocaleString('en-us', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' });

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h1",
        { style: styles.title },
        "Subsidized Circuit Playground Kits"
      ),
      _react2.default.createElement(
        "h2",
        null,
        _react2.default.createElement(
          "div",
          null,
          "Discount code for subsidized kit: ",
          this.props.discountCode
        ),
        _react2.default.createElement(
          "div",
          null,
          "(Expires ",
          expiration,
          ")"
        )
      ),
      _react2.default.createElement(
        "div",
        null,
        "We're happy to share with you this discount code that will bring down the cost of a $325 Circuit Playground kit to",
        " ",
        this.props.fullDiscount ? "$0" : "only $97.50",
        " including standard ground shipping. We're excited that you will be bringing this opportunity to your students!"
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "div",
        null,
        "To order your kit with the discount code, follow the steps below.",
        " ",
        _react2.default.createElement(
          "div",
          { style: styles.bold },
          "You must use your discount code by December 31, 2018."
        )
      ),
      _react2.default.createElement(
        "div",
        { style: styles.step },
        _react2.default.createElement(
          "div",
          null,
          "1) Go to ",
          _react2.default.createElement(
            "a",
            { href: "https://www.adafruit.com/product/3399" },
            "https://www.adafruit.com/product/3399"
          ),
          " ",
          "and add the kit to your cart."
        ),
        _react2.default.createElement(
          "a",
          { href: _addToCart2.default },
          _react2.default.createElement("img", { style: styles.image, src: _addToCart2.default })
        )
      ),
      _react2.default.createElement(
        "div",
        { style: styles.step },
        _react2.default.createElement(
          "div",
          null,
          "2) Go to your cart."
        ),
        _react2.default.createElement(
          "a",
          { href: _viewCart2.default },
          _react2.default.createElement("img", { style: styles.image, src: _viewCart2.default })
        )
      ),
      _react2.default.createElement(
        "div",
        { style: styles.step },
        _react2.default.createElement(
          "div",
          null,
          "3) Put in your discount code (",
          this.props.discountCode,
          ") and hit \"Apply\"."
        ),
        _react2.default.createElement(
          "a",
          { href: _enterDiscountCode2.default },
          _react2.default.createElement("img", { style: styles.image, src: _enterDiscountCode2.default })
        )
      ),
      _react2.default.createElement(
        "div",
        { style: styles.step },
        "4) Proceed to checkout. Your total cost should be ",
        this.props.fullDiscount ? "$0" : "$97.50",
        "."
      ),
      _react2.default.createElement(
        "div",
        { style: { marginTop: 20 } },
        "If you run into any issues with ordering on the Adafruit website, please check out",
        " ",
        _react2.default.createElement(
          "a",
          { href: "https://www.adafruit.com/support" },
          "https://www.adafruit.com/support"
        ),
        ". For any other questions, please contact ",
        _react2.default.createElement(
          "a",
          { href: "mailto:teacher@code.org" },
          "teacher@code.org."
        )
      )
    );
  };

  return DiscountCodeInstructions;
}(_react.Component);

DiscountCodeInstructions.propTypes = {
  discountCode: _react.PropTypes.string.isRequired,
  fullDiscount: _react.PropTypes.bool.isRequired,
  expiration: _react.PropTypes.string.isRequired
};
exports.default = DiscountCodeInstructions;
module.exports = exports["default"];

/***/ }),

/***/ 3526:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "viewCartwpaac00d1ebbc297f4081e3c370fd8992b.png";

/***/ }),

/***/ 3527:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "addToCartwp051471e567d87b36e0af8f088833e894.png";

/***/ }),

/***/ 3528:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "enterDiscountCodewp47ccfc39fe4ad4668b4887912e8e8556.png";

/***/ }),

/***/ 3529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _ValidationStep = __webpack_require__(2092);

var _ValidationStep2 = _interopRequireDefault(_ValidationStep);

var _Unit6ValidationStep = __webpack_require__(2983);

var _Unit6ValidationStep2 = _interopRequireDefault(_Unit6ValidationStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @file Admin Override for Maker Discount Code Eligibility*/


var styles = {
  title: {
    fontSize: 32
  },
  teacherContainer: {
    display: 'flex',
    marginTop: 5
  },
  teacherInput: {
    marginRight: 10,
    padding: '0 10px'
  },
  radioContainer: {
    margin: '5px 0'
  },
  radio: {
    marginRight: 5
  }
};

var DiscountAdminOverride = function (_Component) {
  _inherits(DiscountAdminOverride, _Component);

  function DiscountAdminOverride() {
    var _temp, _this, _ret;

    _classCallCheck(this, DiscountAdminOverride);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      submitting: false,
      teacherID: '',
      statusPD: _ValidationStep.Status.UNKNOWN,
      statusStudentCount: _ValidationStep.Status.UNKNOWN,
      statusYear: _ValidationStep.Status.UNKNOWN,
      unit6Intention: '',
      userSchool: {},
      applicationSchool: {},
      adminOverride: 'None',
      fullDiscount: false,
      discountCode: '',
      overrideValue: null
    }, _this.handleSubmitId = function () {
      var teacherID = _this.teacherID.value;
      _this.setState({
        submitting: true
      });
      $.ajax({
        url: "/maker/application_status",
        type: "get",
        dataType: "json",
        data: {
          user: teacherID
        }
      }).done(function (data) {
        _this.updateApplicationStatus(data, teacherID);
      }).fail(function (jqXHR, textStatus) {
        console.log('failure');
        _this.setState({
          submitting: false
        });
      });
    }, _this.handleDiscountCodeOverride = function () {
      var teacherID = _this.state.teacherID;
      _this.setState({ submitting: true });
      $.ajax({
        url: "/maker/override",
        type: "post",
        dataType: "json",
        data: {
          user: teacherID,
          full_discount: _this.state.overrideValue === 'full'
        }
      }).done(function (data) {
        _this.updateApplicationStatus(data, teacherID);
      }).fail(function (jqXHR, textStatus) {
        console.log('failure');
        _this.setState({
          submitting: false
        });
      });
    }, _this.handleOverrideChange = function (event) {
      _this.setState({
        overrideValue: event.target.value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Updates our local state based on data received from the server, either from
   * calling GET /maker/application_status, or having added an override by doing
   * a POST to /maker/override
   */
  DiscountAdminOverride.prototype.updateApplicationStatus = function updateApplicationStatus(data, teacherID) {
    var application = data.application;

    this.setState({
      teacherID: teacherID,
      submitting: false,
      statusPD: application.is_pd_eligible ? _ValidationStep.Status.SUCCEEDED : _ValidationStep.Status.FAILED,
      statusStudentCount: application.is_progress_eligible ? _ValidationStep.Status.SUCCEEDED : _ValidationStep.Status.FAILED,
      statusYear: application.unit_6_intention === 'yes1718' || application.unit_6_intention === 'yes1819' ? _ValidationStep.Status.SUCCEEDED : _ValidationStep.Status.FAILED,
      unit6Intention: application.unit_6_intention,
      userSchool: application.user_school,
      applicationSchool: application.application_school,
      adminOverride: application.admin_set_status ? application.full_discount ? 'Full Discount' : 'Partial Discount' : 'None',
      fullDiscount: application.full_discount,
      discountCode: application.discount_code,
      overrideValue: null
    });
  };

  DiscountAdminOverride.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h1",
        { style: styles.title },
        "Circuit Playground Kits Admin Override"
      ),
      _react2.default.createElement(
        "label",
        null,
        _react2.default.createElement(
          "div",
          null,
          "Teacher email address, username, or user_id (for the account they are using in the classroom):"
        ),
        _react2.default.createElement(
          "div",
          { style: styles.teacherContainer },
          _react2.default.createElement("input", {
            ref: function ref(input) {
              return _this2.teacherID = input;
            },
            style: styles.teacherInput
          }),
          _react2.default.createElement(_Button2.default, {
            color: _Button2.default.ButtonColor.orange,
            text: this.state.submitting ? _locale2.default.submitting() : _locale2.default.submit(),
            onClick: this.handleSubmitId,
            disabled: this.state.submitting
          })
        )
      ),
      this.state.teacherID && _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h2",
          null,
          "Eligibility requirements for ",
          this.state.teacherID
        ),
        _react2.default.createElement(_ValidationStep2.default, {
          stepName: _locale2.default.eligibilityReqPD(),
          stepStatus: this.state.statusPD
        }),
        _react2.default.createElement(_ValidationStep2.default, {
          stepName: _locale2.default.eligibilityReqStudentCount(),
          stepStatus: this.state.statusStudentCount
        }),
        _react2.default.createElement(_Unit6ValidationStep2.default, {
          key: this.state.teacherID,
          showRadioButtons: false,
          previousStepsSucceeded: true,
          stepStatus: this.state.statusYear,
          initialChoice: this.state.unit6Intention,
          disabled: true,
          onSubmit: function onSubmit() {}
        }),
        _react2.default.createElement(
          "h2",
          null,
          "School Data"
        ),
        _react2.default.createElement(
          "div",
          null,
          "We track both the user's current school, and also the school that they confirmed in the application (if they made it that far into the process). These will be different if (a) the user hasn't confirmed a school in the application or (b) the user changed their school after confirming in the application."
        ),
        _react2.default.createElement(
          "table",
          null,
          _react2.default.createElement(
            "thead",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement("td", null),
              _react2.default.createElement(
                "td",
                null,
                "Current school"
              ),
              _react2.default.createElement(
                "td",
                null,
                "Application school"
              )
            )
          ),
          _react2.default.createElement(
            "tbody",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                "Id:"
              ),
              _react2.default.createElement(
                "td",
                null,
                this.state.userSchool.id
              ),
              _react2.default.createElement(
                "td",
                null,
                this.state.applicationSchool.id
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                "Name:"
              ),
              _react2.default.createElement(
                "td",
                null,
                this.state.userSchool.name
              ),
              _react2.default.createElement(
                "td",
                null,
                this.state.applicationSchool.name
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                null,
                "High Needs?:"
              ),
              _react2.default.createElement(
                "td",
                null,
                this.state.userSchool.high_needs !== null && this.state.userSchool.high_needs.toString()
              ),
              _react2.default.createElement(
                "td",
                null,
                this.state.applicationSchool.high_needs !== null && this.state.applicationSchool.high_needs.toString()
              )
            )
          )
        ),
        _react2.default.createElement(
          "h2",
          null,
          "Admin Options"
        ),
        _react2.default.createElement(
          "div",
          null,
          "Current code:",
          ' ',
          this.state.discountCode && this.state.discountCode + " (" + (this.state.fullDiscount ? 'FULL' : 'PARTIAL') + ")"
        ),
        _react2.default.createElement(
          "div",
          null,
          "Current override: ",
          this.state.adminOverride
        ),
        _react2.default.createElement(
          "h4",
          null,
          "Option 1: Link teacher account with other accounts"
        ),
        _react2.default.createElement(
          "div",
          null,
          "If teacher meets the eligibity requirements but is simply using a different email address for their account than what we have on file, please go to the ",
          _react2.default.createElement(
            "a",
            { href: "https://studio.code.org/admin/studio_person" },
            "Studio Person ID admin page "
          ),
          " to link this acccount to the account associated with the email address we have on file."
        ),
        _react2.default.createElement(
          "h4",
          null,
          "Option 2: Give teacher a discount code"
        ),
        _react2.default.createElement(
          "div",
          null,
          "If the teacher has already received their code and it was for the incorrect amount, email ",
          _react2.default.createElement(
            "a",
            { href: "mailto:adaaccounts@adafruit.com" },
            " adaaccounts@adafruit.com "
          ),
          "so they can disable that code first. We should not be doing this override if the teacher has already used the incorrect code to purchase a kit."
        ),
        _react2.default.createElement(
          "div",
          { style: styles.radioContainer },
          _react2.default.createElement(
            "label",
            null,
            _react2.default.createElement("input", {
              style: styles.radio,
              type: "radio",
              name: "discountAmount",
              value: "full",
              checked: this.state.overrideValue === "full",
              onChange: this.handleOverrideChange
            }),
            "Teacher should receive 100% discount code (kit price would become $0)"
          ),
          _react2.default.createElement(
            "label",
            null,
            _react2.default.createElement("input", {
              style: styles.radio,
              type: "radio",
              name: "discountAmount",
              value: "partial",
              checked: this.state.overrideValue === "partial",
              onChange: this.handleOverrideChange
            }),
            "Teacher should receive partial discount code (kit price would become $97.50)"
          )
        ),
        _react2.default.createElement(_Button2.default, {
          color: _Button2.default.ButtonColor.orange,
          text: this.state.submitting ? _locale2.default.submitting() : _locale2.default.submit(),
          onClick: this.handleDiscountCodeOverride,
          disabled: this.state.submitting || !this.state.overrideValue
        })
      )
    );
  };

  return DiscountAdminOverride;
}(_react.Component);

exports.default = DiscountAdminOverride;
module.exports = exports["default"];

/***/ })

},[3520]);