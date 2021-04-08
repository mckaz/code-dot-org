webpackJsonp([40],{

/***/ 3595:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3596);


/***/ }),

/***/ 3596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ConfirmEmailModal = __webpack_require__(3597);

var _ConfirmEmailModal2 = _interopRequireDefault(_ConfirmEmailModal);

var _getScriptData = __webpack_require__(596);

var _getScriptData2 = _interopRequireDefault(_getScriptData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scriptData = (0, _getScriptData2.default)('edit');
var initialUserType = scriptData.userType;
var isOauth = scriptData.isOauth;
var emailModalConfirmed = false;

var confirmEmailDiv = (0, _jquery2.default)('<div>');
function showConfirmEmailModal(cancel, submit) {
  (0, _jquery2.default)(document.body).append(confirmEmailDiv);

  _reactDom2.default.render(_react2.default.createElement(_ConfirmEmailModal2.default, {
    isOpen: true,
    handleCancel: cancel,
    handleSubmit: submit
  }), confirmEmailDiv[0]);
}

function closeConfirmEmailModal() {
  _reactDom2.default.unmountComponentAtNode(confirmEmailDiv[0]);
}

function prepareEmailData() {
  window.dashboard.hashEmail({
    email_selector: '#user_email',
    hashed_email_selector: '#user_hashed_email',
    age_selector: '#user_age'
  });
}

function onCancelModal() {
  (0, _jquery2.default)("#user_user_type").val("student");
  closeConfirmEmailModal();
}

function onSubmitModal(e) {
  return function (email) {
    (0, _jquery2.default)("#user_email").val(email);
    // Retrigger the submit with a flag marking the modal as completed
    emailModalConfirmed = true;
    (0, _jquery2.default)(e.currentTarget).trigger('click');
    closeConfirmEmailModal();
  };
}

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)("#submit-update").find("input").on("click", function (e) {
    var userType = (0, _jquery2.default)('#user_user_type')[0].value;
    var needToConfirmEmail = !emailModalConfirmed && isOauth && userType !== initialUserType && userType === "teacher";
    if (needToConfirmEmail) {
      e.preventDefault();
      showConfirmEmailModal(onCancelModal, onSubmitModal(e));
    } else if ((0, _jquery2.default)('#user_email').length) {
      prepareEmailData();
    }
  });
  (0, _jquery2.default)("#edit_user_create_personal_account").on("submit", function (e) {
    if ((0, _jquery2.default)('#create_personal_user_email').length) {
      window.dashboard.hashEmail({
        email_selector: '#create_personal_user_email',
        hashed_email_selector: '#create_personal_user_hashed_email',
        age_selector: '#user_age'
      });
    }
  });
});

/***/ }),

/***/ 3597:
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

var ConfirmEmailModal = function (_React$Component) {
  _inherits(ConfirmEmailModal, _React$Component);

  function ConfirmEmailModal(props) {
    _classCallCheck(this, ConfirmEmailModal);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.cancel = function () {
      _this.props.handleCancel();
    };

    _this.ok = function () {
      _this.props.handleSubmit(_this.state.email);
    };

    _this.onEmailChanged = function (e) {
      var email = e.target.value;
      _this.setState({
        emailEntered: email !== "",
        email: email
      });
    };

    _this.render = function () {
      var title = _locale2.default.emailConfirmationTitle();
      var content = _locale2.default.emailConfirmationText();
      return _react2.default.createElement(
        _BaseDialog2.default,
        _extends({
          useUpdatedStyles: true,
          fixedWidth: 600,
          fixedHeight: 310,
          isOpen: _this.props.isOpen,
          handleClose: _this.cancel
        }, _this.props),
        _react2.default.createElement(
          'h2',
          { style: styles.title },
          title
        ),
        _react2.default.createElement(
          'div',
          { style: styles.content },
          _react2.default.createElement('hr', { style: styles.hr }),
          _react2.default.createElement(
            'p',
            { style: styles.contentText },
            content
          ),
          _react2.default.createElement('input', {
            type: 'email',
            placeholder: 'email address',
            style: styles.email,
            onInput: _this.onEmailChanged
          }),
          _react2.default.createElement('hr', { style: styles.hr })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.footer },
          _react2.default.createElement(
            'button',
            {
              onClick: _this.cancel,
              style: _extends({}, styles.buttonPrimary, styles.buttonSecondary)
            },
            _locale2.default.dialogCancel()
          ),
          _react2.default.createElement(
            'button',
            {
              onClick: _this.ok,
              style: Object.assign({}, styles.buttonPrimary, !_this.state.emailEntered && { opacity: 0.5 }),
              disabled: !_this.state.emailEntered
            },
            _locale2.default.dialogConfirmEmail()
          )
        )
      );
    };

    _this.state = {};
    return _this;
  }

  return ConfirmEmailModal;
}(_react2.default.Component);

ConfirmEmailModal.propTypes = {
  handleSubmit: _react.PropTypes.func,
  handleCancel: _react.PropTypes.func,
  isOpen: _react.PropTypes.bool
};
exports.default = ConfirmEmailModal;
module.exports = exports['default'];

/***/ })

},[3595]);