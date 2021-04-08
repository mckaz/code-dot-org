webpackJsonp([13],{

/***/ 1736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants for cardinal directions.  Subsequent code assumes these are
 * in the range 0..3 and that opposites have an absolute difference of 2.
 * @enum {number}
 */
exports.Direction = {
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3
};

exports.PADDLE_BALL_COLLIDE_DISTANCE = 0.7;
exports.FINISH_COLLIDE_DISTANCE = 0.5;
exports.DEFAULT_BALL_SPEED = 0.1;
exports.DEFAULT_BALL_DIRECTION = 1.25 * Math.PI;
exports.DEFAULT_PADDLE_SPEED = 0.1;
exports.DEFAULT_BALL_START_Y = 2;
exports.Y_TOP_BOUNDARY = -0.2;

/**
 * The types of squares in the maze, which is represented
 * as a 2D array of SquareType values.
 * @enum {number}
 */
exports.SquareType = {
  OPEN: 0,
  WALL: 1,
  GOAL: 2,
  BALLSTART: 4,
  PADDLEFINISH: 8,
  PADDLESTART: 16,
  BALLFINISH: 32,
  OBSTACLE: 64
};

/***/ }),

/***/ 2080:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cell = function Cell(tileType, speed, size, direction, emotion, sprite) {

  /**
   * @type {Number}
   */
  this.tileType_ = tileType;

  /**
   * @type {Number}
   */
  this.speed_ = speed;

  /**
   * @type {Number}
   */
  this.size_ = size;

  /**
   * @type {Number}
   */
  this.direction_ = direction;

  /**
   * @type {Number}
   */
  this.emotion_ = emotion;

  /**
   * @type {Number}
   */
  this.sprite_ = sprite;
};

module.exports = Cell;

/**
 * @return {Number}
 */
Cell.prototype.getTileType = function () {
  return this.tileType_;
};

/**
 * Returns a new Cell that's an exact replica of this one
 * @return {Cell}
 */
Cell.prototype.clone = function () {
  var newCell = new Cell(this.tileType_, this.speed_, this.size_, this.direction_, this.emotion_, this.sprite_);
  return newCell;
};

/**
 * Serializes this Cell into JSON
 * @return {Object}
 */
Cell.prototype.serialize = function () {
  return {
    tileType: this.tileType_,
    speed: this.speed_,
    size: this.size_,
    direction: this.direction_,
    emotion: this.emotion_,
    sprite: this.sprite_
  };
};

/**
 * Creates a new Cell from serialized JSON
 * @param {Object}
 * @return {Cell}
 */
Cell.deserialize = function (serialized) {
  return new Cell(serialized.tileType, serialized.speed, serialized.size, serialized.direction, serialized.emotion, serialized.sprite);
};

/***/ }),

/***/ 2081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initResponsive;

var _debounce = __webpack_require__(832);

var _debounce2 = _interopRequireDefault(_debounce);

var _redux = __webpack_require__(787);

var _responsiveRedux = __webpack_require__(959);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Listen for page resize and dispatch events to Redux when if cross a
 * responsive breakpoint width.
 */
function initResponsive() {
  var store = (0, _redux.getStore)();

  window.addEventListener('resize', (0, _debounce2.default)(function () {
    store.dispatch((0, _responsiveRedux.setResponsiveSize)((0, _responsiveRedux.getResponsiveBreakpoint)(window.innerWidth)));
  }, 50));
}
module.exports = exports['default'];

/***/ }),

/***/ 2082:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initHamburger = undefined;

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _trackEvent = __webpack_require__(601);

var _trackEvent2 = _interopRequireDefault(_trackEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initHamburger = exports.initHamburger = function initHamburger() {
  (0, _jquery2.default)(function () {

    (0, _jquery2.default)('#hamburger-icon').click(function (e) {
      (0, _jquery2.default)(this).toggleClass('active');
      (0, _jquery2.default)('#hamburger #hamburger-contents').slideToggle();
      e.preventDefault();
    });

    (0, _jquery2.default)(document).on('click', function (e) {
      var hamburger = (0, _jquery2.default)('#hamburger');

      // If we didn't click the hamburger itself, and also nothing inside it,
      // then hide it.
      if (!hamburger.is(e.target) && hamburger.has(e.target).length === 0) {
        hamburger.children('#hamburger-contents').slideUp();
        (0, _jquery2.default)('#hamburger-icon').removeClass('active');
      }
    });

    (0, _jquery2.default)(".hamburger-expandable-item").each(function () {
      (0, _jquery2.default)(this).click(function (e) {
        (0, _jquery2.default)("#" + (0, _jquery2.default)(this).attr('id') + "-items").slideToggle();
        (0, _jquery2.default)(this).find(".arrow-down").toggle();
        (0, _jquery2.default)(this).find(".arrow-up").toggle();
        e.preventDefault();
      });
    });

    (0, _jquery2.default)("#hamburger #report-bug").click(function () {
      (0, _trackEvent2.default)("help_ui", "report-bug", "hamburger");
    });

    (0, _jquery2.default)("#hamburger #support").click(function () {
      (0, _trackEvent2.default)("help_ui", "support", "hamburger");
    });

    // This item is not in the hamburger, but actually in the studio footer.
    (0, _jquery2.default)(".footer #support").click(function () {
      (0, _trackEvent2.default)("help_ui", "support", "studio_footer");
    });

    // This item is not in the hamburger, but actually in the pegasus footers for
    // desktop and mobile.
    (0, _jquery2.default)("#pagefooter #support").each(function () {
      (0, _jquery2.default)(this).click(function () {
        (0, _trackEvent2.default)("help_ui", "support", "studio_footer");
      });
    });
  });
};

/***/ }),

/***/ 2083:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file Provide no-op fills for missing window.console methods.  Doesn't add
 *       any special functionality, just makes the console safe to use on our
 *       supported browsers.  Based on the fasted implementation I could find.
 *
 * @see http://jsperf.com/console-polyfill
 * @see https://getfirebug.com/wiki/index.php/Console_API
 */

/**
 * Call this method, passing in the window object, to fill missing console
 * methods with no-op functions.
 * @param {!Window} window
 */
module.exports = function (window) {
  // Add console if it doesn't exist
  var console = window.console = window.console || {};

  // Add methods (based on the Firebug Console API) if they don't exist
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
  var method;
  for (var i = 0; i < methods.length; i++) {
    method = methods[i];
    if (!console[method]) {
      console[method] = function () {};
    }
  }
};

/***/ }),

/***/ 2084:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var studentsShape = _react.PropTypes.arrayOf(_react.PropTypes.shape({
  id: _react.PropTypes.number,
  name: _react.PropTypes.string
}));
module.exports.studentsShape = studentsShape;

/***/ }),

/***/ 2802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _redux = __webpack_require__(787);

var _isRtlRedux = __webpack_require__(1156);

var _initSigninState = __webpack_require__(2154);

var _initSigninState2 = _interopRequireDefault(_initSigninState);

var _responsive = __webpack_require__(2081);

var _responsive2 = _interopRequireDefault(_responsive);

var _unsupportedBrowserWarning = __webpack_require__(2804);

var _hamburger = __webpack_require__(2082);

var _codeStudioLevels = __webpack_require__(738);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.getStore)(); /**
                                     * @file Replacement for application.js.erb in dashboard as much as possible.
                                     *       Code added here will be loaded for (almost) every page in dashboard,
                                     *       so use sparingly!
                                     *
                                     * Note: This is included _after_ application.js.erb during our transition period,
                                     * so when moving things preserve the include order as much as possible.
                                     */

store.dispatch((0, _isRtlRedux.setRtlFromDOM)());

// Shim window.console to be safe in IE
__webpack_require__(2083)(window);

var Sounds = __webpack_require__(764);
var activateReferenceAreaOnLoad = __webpack_require__(2805);


window.React = __webpack_require__(1);
window.ReactDOM = __webpack_require__(32);
window.Radium = __webpack_require__(83);

// TODO (bbuchanan): Stop including these components in a global way, just
//                   require them specifically where needed.
__webpack_require__(1001);
__webpack_require__(2806);
__webpack_require__(1634);
__webpack_require__(1649);
__webpack_require__(2807);
__webpack_require__(2816);
__webpack_require__(2155);

// Prevent callstack exceptions when opening multiple dialogs
// http://stackoverflow.com/a/15856139/2506748
if (_jquery2.default.fn.modal) {
  _jquery2.default.fn.modal.Constructor.prototype.enforceFocus = function () {};
}

window.dashboard = window.dashboard || {};
window.dashboard.clientState = __webpack_require__(762);
window.dashboard.createCallouts = __webpack_require__(962).default;
window.dashboard.hashEmail = __webpack_require__(2819);
window.dashboard.levelCompletions = __webpack_require__(2820);
window.dashboard.popupWindow = __webpack_require__(1633);
window.dashboard.reporting = __webpack_require__(1733);
window.dashboard.header = __webpack_require__(1632);
window.dashboard.videos = __webpack_require__(964);
window.dashboard.assets = __webpack_require__(1334);
window.dashboard.pairing = __webpack_require__(2821);
window.dashboard.teacher = __webpack_require__(1639);
window.dashboard.project = __webpack_require__(745);

// only stick the necessary methods onto dashboard.codeStudioLevels

window.dashboard.codeStudioLevels = { registerGetResult: _codeStudioLevels.registerGetResult, registerLevel: _codeStudioLevels.registerLevel, onAnswerChanged: _codeStudioLevels.onAnswerChanged };

// usages: _dialogHelper.js, frequency.js, text-compression.js, levelGroup.js, multi.js
// arguably each of the above files belongs in code-studio
window.Dialog = __webpack_require__(823);

// When we were in browserify world, all modules in a bundle (i.e. code-studio-common)
// would get preloaded. In webpack, they're only loaded as needed. We were
// depending on these two modules being loaded when code-studio-common was
// included, so force that load here.
window.FreeResponse = __webpack_require__(2826);
window.Multi = __webpack_require__(2085);
window.TextMatch = __webpack_require__(2086);

// Wrap existing window onerror caller with a script error check.  If we have a
// script error and a url, throw that so that we have the info in New Relic.
var windowOnError = window.onerror;

window.onerror = function (msg, url, ln) {
  if (/^Script error/.test(msg) && url) {
    arguments[0] = 'Script Error: ' + url;
  }
  if (windowOnError) {
    return windowOnError.apply(this, arguments);
  }
};

// Prevent escape from canceling page loads.
var KEY_ESCAPE = 27;
(0, _jquery2.default)(document).keydown(function (e) {
  if (e.keyCode === KEY_ESCAPE) {
    e.stopPropagation();
    e.preventDefault();
  }
});

setTimeout(function () {
  (0, _jquery2.default)('#codeApp .slow_load').show();
}, 10000);

activateReferenceAreaOnLoad();

// CDOSounds is currently used in a few haml files so we need
// to put it on window :(
window.CDOSounds = Sounds.getSingleton();

(0, _unsupportedBrowserWarning.checkForUnsupportedBrowsersOnLoad)();
(0, _hamburger.initHamburger)();
(0, _initSigninState2.default)();
(0, _responsive2.default)();

/***/ }),

/***/ 2804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkForUnsupportedBrowsersOnLoad = undefined;

var _browserDetector = __webpack_require__(1325);

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global appOptions */
var checkForUnsupportedBrowsersOnLoad = exports.checkForUnsupportedBrowsersOnLoad = function checkForUnsupportedBrowsersOnLoad() {
  (0, _jquery2.default)(document).ready(function () {
    var textDivId = null;
    var dismissable = false;

    if ((0, _browserDetector.isUnsupportedBrowser)()) {
      textDivId = '#unsupported-browser';
    } else if (typeof appOptions !== 'undefined') {
      if ((0, _browserDetector.isMobileDevice)()) {
        if (appOptions.app === 'applab') {
          textDivId = '#applab-unsupported-tablet';
        } else if (appOptions.app === 'gamelab') {
          textDivId = '#gamelab-unsupported-tablet';
        }
        dismissable = true;
      } else if ((0, _browserDetector.isIE11)() && appOptions.app === 'weblab') {
        textDivId = '#weblab-unsupported-browser';
        dismissable = true;
      } else if (appOptions.app === 'weblab' && !(0, _browserDetector.isStorageAvailable)('localStorage')) {
        textDivId = '#weblab-unsupported-local-storage';
        dismissable = true;
      }
    }

    if (textDivId) {
      (0, _jquery2.default)(textDivId).show();
      if (dismissable) {
        (0, _jquery2.default)("#dismiss-icon").show();
      } else {
        (0, _jquery2.default)("#warning-icon").show();
      }
      (0, _jquery2.default)("#warning-banner").show();
    }
  });
};

/***/ }),

/***/ 2805:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showVideoDialog = __webpack_require__(964).showVideoDialog;

// It would be nice if we could share this with the addClickTouchEvent in
// apps/src/dom.js
var addClickTouchEvent = function addClickTouchEvent(element, handler) {
  var wrapper = function wrapper(e) {
    handler(e);
    e.preventDefault();
  };
  element.on({
    'touchstart': wrapper,
    'click': wrapper
  });
};

module.exports = function activateReferenceAreaOnLoad() {
  (0, _jquery2.default)(window).load(function () {
    // Do nothing if we don't  have a reference area
    if ((0, _jquery2.default)("#reference_area").length === 0) {
      return;
    }

    (0, _jquery2.default)('.video_link').each(function () {
      addClickTouchEvent((0, _jquery2.default)(this), _jquery2.default.proxy(function () {
        showVideoDialog({
          src: (0, _jquery2.default)(this).attr('data-src'),
          name: (0, _jquery2.default)(this).attr('data-name'),
          key: (0, _jquery2.default)(this).attr('data-key'),
          download: (0, _jquery2.default)(this).attr('data-download'),
          thumbnail: (0, _jquery2.default)(this).attr('data-thumbnail'),
          enable_fallback: true,
          autoplay: true
        }, true);
      }, this));
    });

    // Allow levels to specify how and where the reference area is rendered.
    // Reparent the reference area under the target if the target exists.
    (0, _jquery2.default)('#reference_area_target').append((0, _jquery2.default)('#reference_area'));
    // Show only text links if "data-minimal" is set.
    if ((0, _jquery2.default)('#reference_area_target').data('minimal')) {
      (0, _jquery2.default)('#reference_area .video_thumbnail').hide();
    }
  });
};

/***/ }),

/***/ 2806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelIdFromUrl = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = __webpack_require__(82);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-danger */


/**
 * A component containing some text/links for projects that have had abuse
 * reported. This is used in our blocking AbuseBox, in the share dialog, and
 * in our smaller alert in apps.
 */

var INPUT_WIDTH = 500;
// dropdown width is wider so that it still lines up with inputs (which have
// padding)
var DROPDOWN_WIDTH = 514;

var alert = window.alert;

/**
 * Extracts a channel id from the given abuse url
 * @returns {string} Channel id, or undefined if we can't get one.
 */
var getChannelIdFromUrl = exports.getChannelIdFromUrl = function getChannelIdFromUrl(abuseUrl) {
  var match = void 0;
  if (abuseUrl.indexOf('codeprojects') >= 0) {
    match = /.*codeprojects.*[^\/]+\/([^\/]+)/.exec(abuseUrl);
  } else {
    match = /.*\/projects\/[^\/]+\/([^\/]+)/.exec(abuseUrl);
  }
  return match && match[1];
};

/**
 * A dropdown with the set of ages we use across our site (4-20, 21+)
 */

var AgeDropdown = function (_React$Component) {
  _inherits(AgeDropdown, _React$Component);

  function AgeDropdown() {
    _classCallCheck(this, AgeDropdown);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  AgeDropdown.prototype.render = function render() {
    var style = _lodash2.default.assign({}, { width: DROPDOWN_WIDTH }, this.props.style);

    var age = this.props.age && this.props.age.toString();
    var ages = ['', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21+'];

    if (this.props.age !== null && ages.indexOf(age) === -1) {
      throw new Error('Invalid age: ' + age);
    }

    return _react2.default.createElement(
      'select',
      { name: 'age', style: style, defaultValue: age },
      ages.map(function (age) {
        return _react2.default.createElement(
          'option',
          { key: age, value: age },
          age
        );
      })
    );
  };

  return AgeDropdown;
}(_react2.default.Component);

AgeDropdown.propTypes = {
  age: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  style: _react.PropTypes.object
};

var ReportAbuseForm = function (_React$Component2) {
  _inherits(ReportAbuseForm, _React$Component2);

  function ReportAbuseForm() {
    var _temp, _this2, _ret;

    _classCallCheck(this, ReportAbuseForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this2), _this2.handleSubmit = function (event) {
      var i18n = _this2.props.i18n;
      if (_this2.refs.email.value === '') {
        alert(i18n.t('project.abuse.report_abuse_form.validation.email'));
        event.preventDefault();
        return;
      }

      if (_reactDom2.default.findDOMNode(_this2.refs.age).value === '') {
        alert(i18n.t('project.abuse.report_abuse_form.validation.age'));
        event.preventDefault();
        return;
      }

      if (_this2.refs.abuse_type.value === '') {
        alert(i18n.t('project.abuse.report_abuse_form.validation.abuse_type'));
        event.preventDefault();
        return;
      }

      if (_this2.refs.abuse_detail.value === '') {
        alert(i18n.t('project.abuse.report_abuse_form.validation.abuse_detail'));
        event.preventDefault();
        return;
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  /**
   * Extracts a channel id from the given abuse url
   * @returns {string} Channel id, or undefined if we can't get one.
   */
  ReportAbuseForm.prototype.getChannelId = function getChannelId() {
    var abuseUrl = this.props.abuseUrl;
    return getChannelIdFromUrl(abuseUrl);
  };

  ReportAbuseForm.prototype.render = function render() {
    var i18n = this.props.i18n;
    return _react2.default.createElement(
      'div',
      { style: { width: DROPDOWN_WIDTH } },
      _react2.default.createElement(
        'h2',
        null,
        i18n.t('footer.report_abuse')
      ),
      _react2.default.createElement(
        'p',
        null,
        i18n.t('project.abuse.report_abuse_form.intro')
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'form',
        { action: '/report_abuse', method: 'post' },
        _react2.default.createElement('input', { type: 'hidden', name: 'authenticity_token', value: this.props.csrfToken }),
        _react2.default.createElement('input', { type: 'hidden', name: 'channel_id', value: this.getChannelId() }),
        _react2.default.createElement('input', { type: 'hidden', name: 'name', value: this.props.name }),
        _react2.default.createElement(
          'div',
          { style: { display: this.props.email ? 'none' : 'block' } },
          _react2.default.createElement(
            'div',
            null,
            i18n.t('activerecord.attributes.user.email')
          ),
          _react2.default.createElement('input', { type: 'text', style: { width: INPUT_WIDTH }, defaultValue: this.props.email, name: 'email', ref: 'email' })
        ),
        _react2.default.createElement(
          'div',
          { style: { display: this.props.age ? 'none' : 'block' } },
          _react2.default.createElement(
            'div',
            null,
            i18n.t('activerecord.attributes.user.age')
          ),
          _react2.default.createElement(AgeDropdown, { age: this.props.age, ref: 'age' })
        ),
        _react2.default.createElement(
          'div',
          null,
          i18n.t('project.abuse.report_abuse_form.abusive_url')
        ),
        _react2.default.createElement('input', { type: 'text', readOnly: !!this.props.abuseUrl, style: { width: INPUT_WIDTH }, defaultValue: this.props.abuseUrl, name: 'abuse_url' }),
        _react2.default.createElement('div', {
          dangerouslySetInnerHTML: {
            __html: i18n.t('project.abuse.report_abuse_form.abuse_type.question', {
              link_start: '<a href="https://code.org/tos" target="_blank">',
              link_end: '</a>'
            })
          }
        }),
        _react2.default.createElement(
          'select',
          { style: { width: DROPDOWN_WIDTH }, name: 'abuse_type', ref: 'abuse_type' },
          _react2.default.createElement('option', { value: '' }),
          _react2.default.createElement(
            'option',
            { value: 'harassment' },
            i18n.t('project.abuse.report_abuse_form.abuse_type.harassment')
          ),
          _react2.default.createElement(
            'option',
            { value: 'offensive' },
            i18n.t('project.abuse.report_abuse_form.abuse_type.offensive')
          ),
          _react2.default.createElement(
            'option',
            { value: 'infringement' },
            i18n.t('project.abuse.report_abuse_form.abuse_type.infringement')
          ),
          _react2.default.createElement(
            'option',
            { value: 'other' },
            i18n.t('project.abuse.report_abuse_form.abuse_type.other')
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          i18n.t('project.abuse.report_abuse_form.detail')
        ),
        _react2.default.createElement('textarea', { style: { width: INPUT_WIDTH, height: 100 }, name: 'abuse_detail', ref: 'abuse_detail' }),
        _react2.default.createElement('div', {
          dangerouslySetInnerHTML: {
            __html: i18n.t('project.abuse.report_abuse_form.acknowledge', {
              link_start_privacy: '<a href="https://code.org/privacy" target="_blank">',
              link_start_tos: '<a href="https://code.org/tos" target="_blank">',
              link_end: '</a>'
            })
          }
        }),
        _react2.default.createElement(
          'button',
          { onClick: this.handleSubmit },
          i18n.t('submit')
        )
      )
    );
  };

  return ReportAbuseForm;
}(_react2.default.Component);

// TODO - just expose renderer on dashboard?


ReportAbuseForm.propTypes = {
  i18n: _react.PropTypes.object.isRequired,
  csrfToken: _react.PropTypes.string.isRequired,
  abuseUrl: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string,
  email: _react.PropTypes.string,
  age: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};
exports.default = ReportAbuseForm;
window.dashboard = window.dashboard || {};
window.dashboard.ReportAbuseForm = ReportAbuseForm;

/***/ }),

/***/ 2807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @overview React component to allow for easy editing of Karel Grids.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Used in LevelBuilder, and relies on some apps code for validation.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Supports both Bee and Farmer skins.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var HarvesterCell = __webpack_require__(1699);
var PlanterCell = __webpack_require__(1700);
var BeeCell = __webpack_require__(1698);
var Cell = __webpack_require__(1018);
var StudioCell = __webpack_require__(2080);
var mazeUtils = __webpack_require__(1299);

var HarvesterCellEditor = __webpack_require__(2808);
var PlanterCellEditor = __webpack_require__(2809);
var BeeCellEditor = __webpack_require__(2810);
var CellEditor = __webpack_require__(883);
var StudioCellEditor = __webpack_require__(2811);
var StarWarsGridCellEditor = __webpack_require__(2812);
var BounceCellEditor = __webpack_require__(2814);
var Grid = __webpack_require__(2815);

var CellJSON = function (_React$Component) {
  _inherits(CellJSON, _React$Component);

  function CellJSON() {
    var _temp, _this, _ret;

    _classCallCheck(this, CellJSON);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleChange = function (event) {
      _this.props.onChange(JSON.parse(event.target.value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CellJSON.prototype.componentDidUpdate = function componentDidUpdate() {
    var node = this.refs.serializedInput;
    node.focus();
    node.select();
  };

  CellJSON.prototype.render = function render() {
    return _react2.default.createElement(
      'label',
      null,
      'Cell JSON (for copy/pasting):',
      _react2.default.createElement('input', { type: 'text', value: JSON.stringify(this.props.serialization), ref: 'serializedInput', onChange: this.handleChange })
    );
  };

  return CellJSON;
}(_react2.default.Component);

CellJSON.propTypes = {
  serialization: _react.PropTypes.object.isRequired,
  onChange: _react.PropTypes.func.isRequired
};

var GridEditor = function (_React$Component2) {
  _inherits(GridEditor, _React$Component2);

  function GridEditor(props) {
    _classCallCheck(this, GridEditor);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _initialiseProps.call(_this2);

    var cells = void 0;
    var cellClass = _this2.getCellClass();

    if (props.serializedMaze) {
      cells = props.serializedMaze.map(function (row) {
        return row.map(cellClass.deserialize);
      });
    } else {
      cells = props.maze.map(function (row, x) {
        return row.map(function (mazeCell, y) {
          var initialDirtCell = props.initialDirt[x][y];
          return cellClass.parseFromOldValues(mazeCell, initialDirtCell);
        });
      });
    }

    _this2.state = {
      cells: cells
    };
    return _this2;
  }

  GridEditor.prototype.getCellClass = function getCellClass() {
    if (this.props.skin === 'playlab' || this.props.skin === 'starwarsgrid') {
      return StudioCell;
    } else if (mazeUtils.isBeeSkin(this.props.skin)) {
      return BeeCell;
    } else if (mazeUtils.isHarvesterSkin(this.props.skin)) {
      return HarvesterCell;
    } else if (mazeUtils.isPlanterSkin(this.props.skin)) {
      return PlanterCell;
    }
    return Cell;
  };

  GridEditor.prototype.getEditorClass = function getEditorClass() {
    if (this.props.skin === 'bounce') {
      return BounceCellEditor;
    } else if (this.props.skin === 'playlab') {
      return StudioCellEditor;
    } else if (this.props.skin === 'starwarsgrid') {
      return StarWarsGridCellEditor;
    } else if (mazeUtils.isBeeSkin(this.props.skin)) {
      return BeeCellEditor;
    } else if (mazeUtils.isHarvesterSkin(this.props.skin)) {
      return HarvesterCellEditor;
    } else if (mazeUtils.isPlanterSkin(this.props.skin)) {
      return PlanterCellEditor;
    }
    return CellEditor;
  };

  /**
   * Helper method used to update chunks of the grid. Accepts a row and
   * column representing the top left corner from which to begin
   * replacing and a two-dimensional array of serialized cells to update
   * into the grid.
   * @param {number} row
   * @param {number} col
   * @param {Object[][]} newCells
   */
  GridEditor.prototype.updateCells = function updateCells(row, col, newCells) {
    var _this3 = this;

    if (newCells === undefined || row === undefined || col === undefined) {
      return;
    }

    // this is technically a violation of React's "thou shalt not modify
    // state" commandment. The problem here is that we're modifying an
    // element of an element of this.state.cells. We do then immediately
    // update with setState, but it's still at the very least unclean.
    //
    // Some other potential approaches would be to clone our entire
    // array before modifying it or to store the cells in some way that
    // allows us to immutably update them. Storing tham as an object
    // whose keys are their x,y coordinates, for example, and then
    // providing some helper method to retrieve individual cells.
    //
    // Both of those seem a bit unnecessary, so for now this hack will
    // remain.
    var cells = this.state.cells;
    newCells.forEach(function (newRow, i) {
      newRow.forEach(function (cell, j) {
        if (cells[row + i] && cells[row + i][col + j]) {
          cells[row + i][col + j] = _this3.getCellClass().deserialize(cell);
        }
      });
    });

    var serializedData = cells.map(function (row) {
      return row.map(function (cell) {
        return cell.serialize();
      });
    });

    this.props.onUpdate(serializedData);
    this.setState({
      cells: cells
    });
  };

  /**
   * When a given cell is modified, update the grid
   */


  /**
   * "Paste" the cells in our "clipboard" into the grid
   */


  /**
   * Store the given cells on our "clipboard"
   */


  GridEditor.prototype.render = function render() {
    var cells = this.state.cells;

    var cellEditor = void 0;
    var selectedCellJson = void 0;
    var pasteButton = void 0;
    var row = this.state.selectedRow;
    var col = this.state.selectedCol;
    if (cells[row] && cells[row][col]) {
      var cell = cells[row][col];
      var EditorClass = this.getEditorClass();
      cellEditor = _react2.default.createElement(EditorClass, { cell: cell, row: row, col: col, onUpdate: this.handleCellChange });
      selectedCellJson = _react2.default.createElement(CellJSON, { serialization: cell.serialize(), onChange: this.handleCellChange });
      if (this.state.copiedCells) {
        pasteButton = _react2.default.createElement(
          'button',
          { type: 'button', onClick: this.pasteCopiedCells },
          "Paste Selected " + this.state.copiedCells.length + "x" + this.state.copiedCells[0].length + " Cells"
        );
      }
    }

    return _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'span5' },
        _react2.default.createElement(Grid, {
          cells: cells,
          selectedRow: this.state.selectedRow,
          selectedCol: this.state.selectedCol,
          skin: this.props.skin,
          setCopiedCells: this.setCopiedCells,
          onSelectionChange: this.changeSelection
        }),
        selectedCellJson,
        pasteButton
      ),
      cellEditor
    );
  };

  return GridEditor;
}(_react2.default.Component);

GridEditor.propTypes = {
  serializedMaze: _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.object)),
  maze: _react.PropTypes.arrayOf(_react.PropTypes.array), // maze items can be integers or strings
  initialDirt: _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.number)),
  skin: _react.PropTypes.string.isRequired,
  onUpdate: _react.PropTypes.func.isRequired
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.changeSelection = function (row, col) {
    _this4.setState({
      selectedRow: row,
      selectedCol: col
    });
  };

  this.handleCellChange = function (newSerializedCellData) {
    var row = _this4.state.selectedRow;
    var col = _this4.state.selectedCol;

    // updateCells expects a two-dimentional array
    _this4.updateCells(row, col, [[newSerializedCellData]]);
  };

  this.pasteCopiedCells = function () {
    var copiedCells = _this4.state.copiedCells;
    var row = _this4.state.selectedRow;
    var col = _this4.state.selectedCol;
    _this4.updateCells(row, col, copiedCells);
  };

  this.setCopiedCells = function (cells) {
    _this4.setState({
      copiedCells: cells
    });
  };
};

exports.default = GridEditor;


window.dashboard = window.dashboard || {};
window.dashboard.GridEditor = GridEditor;
module.exports = exports['default'];

/***/ }),

/***/ 2808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CellEditor2 = __webpack_require__(883);

var _CellEditor3 = _interopRequireDefault(_CellEditor2);

var _harvesterCell = __webpack_require__(1699);

var _harvesterCell2 = _interopRequireDefault(_harvesterCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @overview React component to allow for easy editing and creation of HarvesterCells
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see @cdo/apps/maze/harvesterCell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var PlanterCellEditor = function (_CellEditor) {
  _inherits(PlanterCellEditor, _CellEditor);

  function PlanterCellEditor() {
    _classCallCheck(this, PlanterCellEditor);

    return _possibleConstructorReturn(this, _CellEditor.apply(this, arguments));
  }

  /**
   * @override
   */
  PlanterCellEditor.prototype.renderFields = function renderFields(values) {
    return _react2.default.createElement(
      'div',
      null,
      _CellEditor.prototype.renderFields.call(this, values),
      _react2.default.createElement(
        'label',
        { htmlFor: 'possibleFeatures' },
        'Possible Features:'
      ),
      Object.keys(_harvesterCell2.default.FeatureType).map(function (type) {
        var value = _harvesterCell2.default.FeatureType[type];
        return _react2.default.createElement(
          'label',
          { className: 'checkbox', key: type },
          _react2.default.createElement('input', { type: 'checkbox', name: 'possibleFeatures', value: value, checked: values.possibleFeatures.includes(value), onChange: this.handleChange }),
          type
        );
      }, this),
      _react2.default.createElement(
        'label',
        { htmlFor: 'startsHidden' },
        'Starts Hidden:'
      ),
      _react2.default.createElement('input', { style: { margin: 0 }, type: 'checkbox', name: 'startsHidden', checked: values.startsHidden, value: 1, onChange: this.handleChange })
    );
  };

  return PlanterCellEditor;
}(_CellEditor3.default);

exports.default = PlanterCellEditor;
module.exports = exports['default'];

/***/ }),

/***/ 2809:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CellEditor2 = __webpack_require__(883);

var _CellEditor3 = _interopRequireDefault(_CellEditor2);

var _planterCell = __webpack_require__(1700);

var _planterCell2 = _interopRequireDefault(_planterCell);

var _tiles = __webpack_require__(773);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @overview React component to allow for easy editing and creation of PlanterCells
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see @cdo/apps/maze/harvesterCell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var PlanterCellEditor = function (_CellEditor) {
  _inherits(PlanterCellEditor, _CellEditor);

  function PlanterCellEditor() {
    _classCallCheck(this, PlanterCellEditor);

    return _possibleConstructorReturn(this, _CellEditor.apply(this, arguments));
  }

  /**
   * @override
   */
  PlanterCellEditor.prototype.getSelectFieldNames = function getSelectFieldNames() {
    return ['tileType', 'featureType'];
  };

  /**
   * @override
   */


  PlanterCellEditor.prototype.renderFields = function renderFields(values) {
    return _react2.default.createElement(
      'div',
      null,
      this.renderTileTypes(values),
      _react2.default.createElement(
        'label',
        { htmlFor: 'featureType' },
        'Feature Type:'
      ),
      _react2.default.createElement(
        'select',
        { name: 'featureType', value: values.featureType, disabled: this.props.cell.getTile() !== _tiles.SquareType.OPEN, onChange: this.handleChange },
        Object.keys(_planterCell2.default.FeatureType).map(function (type) {
          return _react2.default.createElement(
            'option',
            { key: type, value: _planterCell2.default.FeatureType[type] },
            type.toLowerCase()
          );
        })
      )
    );
  };

  return PlanterCellEditor;
}(_CellEditor3.default);

exports.default = PlanterCellEditor;
module.exports = exports['default'];

/***/ }),

/***/ 2810:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CellEditor2 = __webpack_require__(883);

var _CellEditor3 = _interopRequireDefault(_CellEditor2);

var _beeCell = __webpack_require__(1698);

var _beeCell2 = _interopRequireDefault(_beeCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @overview React component to allow for easy editing and creation of BeeCells
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see @cdo/apps/maze/beeCell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BeeCellEditor = function (_CellEditor) {
  _inherits(BeeCellEditor, _CellEditor);

  function BeeCellEditor() {
    _classCallCheck(this, BeeCellEditor);

    return _possibleConstructorReturn(this, _CellEditor.apply(this, arguments));
  }

  /**
   * @override
   */
  BeeCellEditor.prototype.getSelectFieldNames = function getSelectFieldNames() {
    return _CellEditor.prototype.getSelectFieldNames.call(this).concat(['featureType', 'cloudType', 'flowerColor']);
  };

  /**
   * @override
   */


  BeeCellEditor.prototype.getSanitizedValues = function getSanitizedValues() {
    var values = _CellEditor.prototype.getSanitizedValues.call(this);

    // If the cell is a variable cloud, its feature MUST be variable
    if (this.props.cell.isVariableCloud()) {
      values.featureType = _beeCell2.default.FeatureType.VARIABLE;
    }

    // If the cell has no features, it should have neither value nor
    // range
    if (values.featureType === 'undefined') {
      values.value = '';
      values.range = '';
    }

    // FlowerColor only makes sense if the cell is a flower
    if (!this.props.cell.isFlower()) {
      values.flowerColor = '';
    }

    return values;
  };

  /**
   * @override
   */


  BeeCellEditor.prototype.renderFields = function renderFields(values) {
    return _react2.default.createElement(
      'div',
      null,
      _CellEditor.prototype.renderFields.call(this, values),
      _react2.default.createElement(
        'label',
        { htmlFor: 'featureType' },
        'Feature Type:'
      ),
      _react2.default.createElement(
        'select',
        { name: 'featureType', value: values.featureType, disabled: this.props.cell.isVariableCloud(), onChange: this.handleChange },
        _react2.default.createElement(
          'option',
          { value: 'undefined' },
          'none'
        ),
        _react2.default.createElement(
          'option',
          { value: _beeCell2.default.FeatureType.HIVE },
          'hive'
        ),
        _react2.default.createElement(
          'option',
          { value: _beeCell2.default.FeatureType.FLOWER },
          'flower'
        ),
        _react2.default.createElement(
          'option',
          { value: _beeCell2.default.FeatureType.VARIABLE },
          'variable'
        )
      ),
      _react2.default.createElement(
        'label',
        { htmlFor: 'cloudType' },
        'Cloud Type:'
      ),
      _react2.default.createElement(
        'select',
        { name: 'cloudType', value: values.cloudType, onChange: this.handleChange },
        _react2.default.createElement(
          'option',
          { value: 'undefined' },
          'none'
        ),
        _react2.default.createElement(
          'option',
          { value: _beeCell2.default.CloudType.STATIC },
          'classic'
        ),
        _react2.default.createElement(
          'option',
          { value: _beeCell2.default.CloudType.HIVE_OR_FLOWER },
          'hive or flower'
        ),
        _react2.default.createElement(
          'option',
          { value: _beeCell2.default.CloudType.FLOWER_OR_NOTHING },
          'flower or nothing'
        ),
        _react2.default.createElement(
          'option',
          { value: _beeCell2.default.CloudType.HIVE_OR_NOTHING },
          'hive or nothing'
        ),
        _react2.default.createElement(
          'option',
          { value: _beeCell2.default.CloudType.ANY },
          'any'
        )
      ),
      _react2.default.createElement(
        'label',
        { htmlFor: 'flowerColor' },
        'Flower Color:'
      ),
      _react2.default.createElement(
        'select',
        { name: 'flowerColor', value: values.flowerColor, disabled: !this.props.cell.isFlower(), onChange: this.handleChange },
        _react2.default.createElement(
          'option',
          { value: 'undefined' },
          'default'
        ),
        _react2.default.createElement(
          'option',
          { value: _beeCell2.default.FlowerColor.RED },
          'red'
        ),
        _react2.default.createElement(
          'option',
          { value: _beeCell2.default.FlowerColor.PURPLE },
          'purple'
        )
      )
    );
  };

  return BeeCellEditor;
}(_CellEditor3.default);

exports.default = BeeCellEditor;
module.exports = exports['default'];

/***/ }),

/***/ 2811:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(789);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CellEditor2 = __webpack_require__(883);

var _CellEditor3 = _interopRequireDefault(_CellEditor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @overview React component to allow for easy editing and creation of Studio Cells
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see @cdo/apps/studio/cell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// TODO elijah this list is pulled from @cdo/apps/studio/skins:loadStudio(),
// where it is hardcoded as the list of avatars for the Code Studio Playlab
// Skin. The list is duplicated in Grid.jsx for the purposes of displaying the
// sprites. Ideally, both of these templates would just be referencing a more
// publically-accessible list in apps code.
//
// Even more ideally, this editor would be expanded to support any of our skins,
// but that will likely require a bit of a refactor in the way we handle skins,
// and is unjustifiable for now, since the Playlab-skinned levels are currently
// the only ones we edit with this interface.
var avatarList = ["dog", "cat", "penguin", "dinosaur", "octopus", "witch", "bat", "bird", "dragon", "squirrel", "wizard", "alien", "ghost", "monster", "robot", "unicorn", "zombie", "knight", "ninja", "pirate", "caveboy", "cavegirl", "princess", "spacebot", "soccergirl", "soccerboy", "tennisgirl", "tennisboy"];

// Use a subset of studio SquareTypes for the tiletypes, since many of them are
// not used or are used only by non-levelbuilder-editable implementations.
// Also override the names because 'goal' is prettier than 'spritefinish'
var usedSquareTypes = {
  OPEN: _constants.SquareType.OPEN,
  GOAL: _constants.SquareType.SPRITEFINISH,
  START: _constants.SquareType.SPRITESTART
};

var StudioCellEditor = function (_CellEditor) {
  _inherits(StudioCellEditor, _CellEditor);

  function StudioCellEditor() {
    _classCallCheck(this, StudioCellEditor);

    return _possibleConstructorReturn(this, _CellEditor.apply(this, arguments));
  }

  /**
   * @override
   */
  StudioCellEditor.prototype.getSelectFieldNames = function getSelectFieldNames() {
    return _CellEditor.prototype.getSelectFieldNames.call(this).concat(['speed', 'size', 'direction', 'emotion', 'sprite']);
  };

  /**
   * @override
   */


  StudioCellEditor.prototype.renderFields = function renderFields(values) {
    return _react2.default.createElement(
      'div',
      null,
      _CellEditor.prototype.renderTileTypes.call(this, values, usedSquareTypes),
      values.tileType === _constants.SquareType.SPRITESTART && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'sprite' },
          'Sprite:'
        ),
        _react2.default.createElement(
          'select',
          { name: 'sprite', value: values.sprite, onChange: this.handleChange },
          _react2.default.createElement(
            'option',
            { value: 'undefined' },
            'default'
          ),
          avatarList.map(function (sprite, i) {
            return _react2.default.createElement(
              'option',
              { key: sprite, value: i },
              sprite
            );
          })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'speed' },
          'Speed: '
        ),
        _react2.default.createElement(
          'select',
          { name: 'speed', value: values.speed, onChange: this.handleChange },
          _react2.default.createElement(
            'option',
            { value: 'undefined' },
            'default'
          ),
          Object.keys(_constants.SpriteSpeed).map(function (type) {
            return _react2.default.createElement(
              'option',
              { key: type, value: _constants.SpriteSpeed[type] },
              type.replace(/_/g, ' ').toLowerCase()
            );
          })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'size' },
          'Size: '
        ),
        _react2.default.createElement(
          'select',
          { name: 'size', value: values.size, onChange: this.handleChange },
          _react2.default.createElement(
            'option',
            { value: 'undefined' },
            'default'
          ),
          Object.keys(_constants.SpriteSize).map(function (type) {
            return _react2.default.createElement(
              'option',
              { key: type, value: _constants.SpriteSize[type] },
              type.replace(/_/g, ' ').toLowerCase()
            );
          })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'direction' },
          'Direction: '
        ),
        _react2.default.createElement(
          'select',
          { name: 'direction', value: values.direction, onChange: this.handleChange },
          _react2.default.createElement(
            'option',
            { value: 'undefined' },
            'default'
          ),
          Object.keys(_constants.Direction).map(function (type) {
            return _react2.default.createElement(
              'option',
              { key: type, value: _constants.Direction[type] },
              type.replace(/_/g, ' ').toLowerCase()
            );
          })
        ),
        _react2.default.createElement(
          'label',
          { htmlFor: 'emotion' },
          'Emotion: '
        ),
        _react2.default.createElement(
          'select',
          { name: 'emotion', value: values.emotion, onChange: this.handleChange },
          _react2.default.createElement(
            'option',
            { value: 'undefined' },
            'default'
          ),
          Object.keys(_constants.Emotions).map(function (type) {
            return _react2.default.createElement(
              'option',
              { key: type, value: _constants.Emotions[type] },
              type.replace(/_/g, ' ').toLowerCase()
            );
          })
        )
      )
    );
  };

  return StudioCellEditor;
}(_CellEditor3.default);

exports.default = StudioCellEditor;
module.exports = exports['default'];

/***/ }),

/***/ 2812:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(789);

var _tileGuide = __webpack_require__(2813);

var _tileGuide2 = _interopRequireDefault(_tileGuide);

var _CellEditor2 = __webpack_require__(883);

var _CellEditor3 = _interopRequireDefault(_CellEditor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = {
  empty: 0x0,
  start: 0x000010,
  goal: 0x000001,
  crate_1: 0x010000,
  crate_2: 0x100000,
  crate_3: 0x020000,
  canister: 0x120000,
  covered_crates_1a: 0x040000,
  covered_crates_1b: 0x140000,
  covered_crates_2a: 0x240000,
  covered_crates_2b: 0x250000,
  covered_crates_3a: 0x340000,
  covered_crates_3b: 0x350000
};

var startDirections = {
  '-': _constants.Direction.NONE,
  East: _constants.Direction.EAST,
  West: _constants.Direction.WEST,
  North: _constants.Direction.NORTH,
  South: _constants.Direction.SOUTH
};

var StarWarsGridCellEditor = function (_CellEditor) {
  _inherits(StarWarsGridCellEditor, _CellEditor);

  function StarWarsGridCellEditor() {
    _classCallCheck(this, StarWarsGridCellEditor);

    return _possibleConstructorReturn(this, _CellEditor.apply(this, arguments));
  }

  /**
   * @override
   */
  StarWarsGridCellEditor.prototype.handleChange = function handleChange() {
    var zoom = this.zoom && this.zoom.checked;
    var direction = this.direction ? +this.direction.value : undefined;

    this.props.onUpdate({
      tileType: zoom << _constants.WallTypeShift | this.type.value,
      direction: direction
    });
  };

  /**
   * @override
   */


  StarWarsGridCellEditor.prototype.render = function render() {
    var _this2 = this;

    var type = ~_constants.WallTypeMask & this.props.cell.tileType_;
    var zoom = _constants.WallTypeMask & this.props.cell.tileType_;

    return _react2.default.createElement(
      'form',
      { className: 'span4 offset1' },
      _react2.default.createElement('img', { src: _tileGuide2.default }),
      _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'strong',
          null,
          'Editing Cell (',
          this.props.row,
          ', ',
          this.props.col,
          ')'
        )
      ),
      _react2.default.createElement(
        'label',
        { htmlFor: 'tileType' },
        'Tile Type (required):'
      ),
      _react2.default.createElement(
        'select',
        {
          ref: function ref(c) {
            _this2.type = c;
          },
          name: 'tileType',
          value: type,
          onChange: this.handleChange
        },
        Object.entries(options).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              value = _ref2[1];

          return _react2.default.createElement(
            'option',
            { value: value, key: value },
            name
          );
        })
      ),
      type > 0xFFFF && _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'zoom' },
          'Double size:'
        ),
        _react2.default.createElement('input', {
          ref: function ref(c) {
            _this2.zoom = c;
          },
          name: 'zoom',
          type: 'checkbox',
          checked: zoom,
          onChange: this.handleChange
        })
      ),
      type === _constants.SquareType.SPRITESTART && _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'direction' },
          'Start direction:'
        ),
        _react2.default.createElement(
          'select',
          {
            ref: function ref(c) {
              _this2.direction = c;
            },
            name: 'direction',
            value: this.props.cell.direction_,
            onChange: this.handleChange
          },
          Object.entries(startDirections).map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                name = _ref4[0],
                value = _ref4[1];

            return _react2.default.createElement(
              'option',
              { value: value, key: value },
              name
            );
          })
        )
      )
    );
  };

  return StarWarsGridCellEditor;
}(_CellEditor3.default);

exports.default = StarWarsGridCellEditor;
module.exports = exports['default'];

/***/ }),

/***/ 2813:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tile-guidewp3ebdf2cbc512efb380c5833cfc56b739.png";

/***/ }),

/***/ 2814:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CellEditor2 = __webpack_require__(883);

var _CellEditor3 = _interopRequireDefault(_CellEditor2);

var _tiles = __webpack_require__(1736);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @overview React component to allow for easy editing and creation of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Bounce maps
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BounceCellEditor = function (_CellEditor) {
  _inherits(BounceCellEditor, _CellEditor);

  function BounceCellEditor() {
    _classCallCheck(this, BounceCellEditor);

    return _possibleConstructorReturn(this, _CellEditor.apply(this, arguments));
  }

  /**
   * @override
   */
  BounceCellEditor.prototype.renderFields = function renderFields(values) {
    return _react2.default.createElement(
      'div',
      null,
      _CellEditor.prototype.renderTileTypes.call(this, values, _tiles.SquareType)
    );
  };

  return BounceCellEditor;
}(_CellEditor3.default);

exports.default = BounceCellEditor;
module.exports = exports['default'];

/***/ }),

/***/ 2815:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _studioTiles;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(789);

var _mazeUtils = __webpack_require__(1299);

var _mazeUtils2 = _interopRequireDefault(_mazeUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CELL_WIDTH = 48;
var CELL_HEIGHT = 38;

var studioTiles = (_studioTiles = {}, _defineProperty(_studioTiles, _constants.SquareType.OPEN, 'none'), _defineProperty(_studioTiles, _constants.SquareType.SPRITEFINISH, 'goal'), _defineProperty(_studioTiles, _constants.SquareType.SPRITESTART, 'sprite'), _studioTiles);

// This list is duplicated in StudioCellEditor. See comment there for
// some explanation of why that's not the greatest design.
var studioAvatarList = ["dog", "cat", "penguin", "dinosaur", "octopus", "witch", "bat", "bird", "dragon", "squirrel", "wizard", "alien", "ghost", "monster", "robot", "unicorn", "zombie", "knight", "ninja", "pirate", "caveboy", "cavegirl", "princess", "spacebot", "soccergirl", "soccerboy", "tennisgirl", "tennisboy"];

var karelTiles = ['border', 'path', 'start', 'end', 'obstacle'];
var beeConditions = ['', 'flower-or-hive', 'flower-or-nothing', 'hive-or-nothing', 'flower-hive-or-nothing'];
var beeFeatures = ['hive', 'flower'];

var Cell = function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Cell.prototype.render = function render() {
    var cell = this.props.cell;


    var classNames = [];
    var tdStyle = {};
    var text = void 0;

    if (this.props.selected) {
      classNames.push('selected');
    }
    if (this.props.highlighted) {
      classNames.push('highlighted');
    }

    // Cell type-specific stuff
    // TODO(elijah) This area contains a bunch of application-specific
    // logic which would ideally live somewhere more flexible.
    if (this.props.skin === 'playlab') {
      classNames.push('playlab', studioTiles[cell.getTileType()]);

      if (cell.getTileType() === _constants.SquareType.SPRITESTART && cell.sprite_ !== undefined) {
        tdStyle.backgroundImage = "url('/blockly/media/skins/studio/" + studioAvatarList[cell.sprite_] + "_spritesheet_200px.png')";
      }
    } else if (this.props.skin === 'starwarsgrid') {
      if (cell.tileType_ === 1) {
        tdStyle.backgroundImage = "url('/blockly/media/skins/hoc2015x/goal.png')";
      } else if (cell.tileType_ === 0x10) {
        tdStyle.backgroundImage = "url('/blockly/media/skins/hoc2015x/instructions_bb8.png')";
        tdStyle.backgroundSize = 'cover';
      } else {
        text = _constants.WallTypeMask & cell.tileType_ ? '2x' : '';
        var x = (_constants.WallCoordColMask & cell.tileType_) >> _constants.WallCoordColShift;
        var y = (_constants.WallCoordRowMask & cell.tileType_) >> _constants.WallCoordRowShift;
        tdStyle.backgroundImage = "url('/blockly/media/skins/hoc2015x/tiles_background1.png')";
        tdStyle.backgroundSize = "800% 800%";
        tdStyle.backgroundPosition = '-' + x * CELL_WIDTH + 'px -' + y * CELL_HEIGHT + 'px';
      }
    } else if (this.props.skin === 'bounce') {
      var images = ['tiles_wall', 'goal', 'ball', 'paddle', 'paddle', 'ball', 'obstacle'];
      if (cell.tileType_) {
        var image = images[Math.log2(cell.tileType_)];
        tdStyle.backgroundImage = 'url(\'/blockly/media/skins/bounce/' + image + '.png\')';
      }
    } else {
      classNames.push(karelTiles[cell.tileType_]);

      if (_mazeUtils2.default.isBeeSkin(this.props.skin)) {
        if (cell.isVariableCloud()) {
          classNames.push('conditional');
          classNames.push(beeConditions[cell.cloudType_]);
        } else if (cell.featureType_ !== undefined) {
          classNames.push(beeFeatures[cell.featureType_]);
        }
      } else {
        // farmer
        if (cell.isDirt()) {
          classNames.push('dirt');
          var dirtValue = cell.getCurrentValue();
          var dirtIndex = 10 + dirtValue + (dirtValue < 0 ? 1 : 0);
          tdStyle.backgroundPosition = -dirtIndex * 50;
        }
      }

      if (cell.originalValue_ !== undefined && cell.originalValue_ !== null) {
        text = cell.originalValue_.toString();
        if (cell.range_ && cell.range_ > cell.originalValue_) {
          text += " - " + cell.range_.toString();
        }
      }
    }

    return _react2.default.createElement(
      'td',
      {
        className: classNames.join(' '),
        onClick: this.props.onClick.bind(null, this.props.row, this.props.col),
        onMouseDown: this.props.onMouseDown.bind(null, this.props.row, this.props.col),
        onMouseOver: this.props.onMouseOver.bind(null, this.props.row, this.props.col),
        onMouseUp: this.props.onMouseUp.bind(null, this.props.row, this.props.col),
        style: tdStyle
      },
      text
    );
  };

  return Cell;
}(_react2.default.Component);

Cell.propTypes = {
  cell: _react.PropTypes.object.isRequired,
  row: _react.PropTypes.number.isRequired,
  col: _react.PropTypes.number.isRequired,
  selected: _react.PropTypes.bool.isRequired,
  onClick: _react.PropTypes.func.isRequired,
  onMouseDown: _react.PropTypes.func.isRequired,
  onMouseOver: _react.PropTypes.func.isRequired,
  onMouseUp: _react.PropTypes.func.isRequired,
  skin: _react.PropTypes.string.isRequired,
  highlighted: _react.PropTypes.bool
};

var Grid = function (_React$Component2) {
  _inherits(Grid, _React$Component2);

  function Grid() {
    var _temp, _this2, _ret;

    _classCallCheck(this, Grid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this2), _this2.state = {}, _this2.beginDrag = function (row, col) {
      _this2.setState({
        dragging: true,
        dragStart: { row: row, col: col }
      });
    }, _this2.moveDrag = function (row, col) {
      if (_this2.state.dragging) {
        _this2.setState({
          dragCurrent: { row: row, col: col }
        });
      }
    }, _this2.endDrag = function (row, col) {
      var dragStart = _this2.state.dragStart;

      _this2.setState({
        dragging: false,
        dragStart: null,
        dragCurrent: null
      });

      if (!dragStart || dragStart.row === row && dragStart.col === col) {
        return;
      }

      var top = Math.min(dragStart.row, row);
      var left = Math.min(dragStart.col, col);
      var bottom = Math.max(dragStart.row, row);
      var right = Math.max(dragStart.col, col);

      var cells = _this2.props.cells.slice(top, bottom + 1).map(function (row) {
        return row.slice(left, right + 1).map(function (cell) {
          return cell.serialize();
        });
      });

      // It's a bit awkward to have these two competing concepts of what
      // "select" means, and to have the knowledge of copying injected
      // into this component when really it's only GridEditor that cares
      // WHY we're tracking "drag selections".
      // TODO(elijah) Unify "drag select" and "original select"
      _this2.props.setCopiedCells(cells);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  /**
   * When drag begins, record that we are now dragging and where we
   * started from.
   */


  /**
   * As the mouse moves over the cells, if we are dragging then record
   * the latest cell we've moved over so we can highlight all selected
   * cells appropriately.
   */


  /**
   * Once the drag ends, create a subarray of all selected cells and
   * save it to our parent.
   */


  /**
   * As we are dragging, we can determine if a given x,y coordinate pair
   * is within the area being selected.
   */
  Grid.prototype.isHighlighting = function isHighlighting(row, col) {
    if (this.state.dragging && this.state.dragCurrent) {
      return row >= Math.min(this.state.dragStart.row, this.state.dragCurrent.row) && row <= Math.max(this.state.dragStart.row, this.state.dragCurrent.row) && col >= Math.min(this.state.dragStart.col, this.state.dragCurrent.col) && col <= Math.max(this.state.dragStart.col, this.state.dragCurrent.col);
    }
    return false;
  };

  Grid.prototype.render = function render() {
    var _this3 = this;

    var tableRows = this.props.cells.map(function (row, x) {
      var tableDatas = row.map(function (cell, y) {
        var selected = _this3.props.selectedRow === x && _this3.props.selectedCol === y;

        return _react2.default.createElement(Cell, {
          key: 'cell-' + x + '-' + y,
          cell: cell,
          row: x,
          col: y,
          selected: selected,
          highlighted: _this3.isHighlighting(x, y),
          onClick: _this3.props.onSelectionChange,
          onMouseDown: _this3.beginDrag,
          onMouseOver: _this3.moveDrag,
          onMouseUp: _this3.endDrag,
          skin: _this3.props.skin
        });
      });

      return _react2.default.createElement(
        'tr',
        { key: 'row-' + x },
        tableDatas
      );
    });

    return _react2.default.createElement(
      'table',
      null,
      _react2.default.createElement(
        'tbody',
        null,
        tableRows
      )
    );
  };

  return Grid;
}(_react2.default.Component);

Grid.propTypes = {
  cells: _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.object)).isRequired,
  selectedRow: _react.PropTypes.number,
  selectedCol: _react.PropTypes.number,
  skin: _react.PropTypes.string.isRequired,
  onSelectionChange: _react.PropTypes.func.isRequired,
  setCopiedCells: _react.PropTypes.func.isRequired
};
exports.default = Grid;
module.exports = exports['default'];

/***/ }),

/***/ 2816:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _clientApi = __webpack_require__(728);

var _assetListStore = __webpack_require__(1289);

var _assetListStore2 = _interopRequireDefault(_assetListStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-is-mounted */
/* global dashboard */

var styles = {
  button: {
    float: 'left',
    marginRight: '5px'
  },
  attachment: {
    background: '#08c',
    color: '#fff',
    borderRadius: '4px',
    padding: '0 5px',
    margin: '4px 4px 4px 0',
    float: 'left',
    fontSize: '0.8em'
  }
};

/**
 * An attachment list component.
 */

var Attachments = function (_React$Component) {
  _inherits(Attachments, _React$Component);

  function Attachments() {
    var _temp, _this, _ret;

    _classCallCheck(this, Attachments);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { loaded: false }, _this.onAssetListReceived = function (result) {
      _assetListStore2.default.reset(result.files);
      if (_this.isMounted_) {
        _this.setState({ loaded: true });
      }
    }, _this.showAssetManager = function () {
      dashboard.assets.showAssetManager(null, 'document', _this.setState.bind(_this, { loaded: true }), {
        showUnderageWarning: _this.props.showUnderageWarning
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Attachments.prototype.componentWillMount = function componentWillMount() {
    _clientApi.assets.getFiles(this.onAssetListReceived);
  };

  Attachments.prototype.componentDidMount = function componentDidMount() {
    this.isMounted_ = true;
  };

  Attachments.prototype.componentWillUnmount = function componentWillUnmount() {
    this.isMounted_ = false;
  };

  Attachments.prototype.render = function render() {
    var attachmentList = _react2.default.createElement(
      'span',
      { style: { fontSize: '0.8em' } },
      'Loading...'
    );
    if (this.state.loaded) {
      attachmentList = _assetListStore2.default.list().map(function (asset) {
        var url = _clientApi.assets.basePath(asset.filename);
        return _react2.default.createElement(
          'a',
          { key: asset.filename, style: styles.attachment, href: url, target: '_blank' },
          asset.filename
        );
      });
    }

    var button = void 0;
    if (!this.props.readonly) {
      button = _react2.default.createElement('input', {
        style: styles.button,
        className: 'btn btn-default',
        type: 'button',
        value: 'Add/Remove Attachments',
        onClick: this.showAssetManager
      });
    }

    return _react2.default.createElement(
      'span',
      null,
      button,
      attachmentList
    );
  };

  return Attachments;
}(_react2.default.Component);

Attachments.propTypes = {
  readonly: _react.PropTypes.bool,
  showUnderageWarning: _react.PropTypes.bool
};
exports.default = Attachments;


window.dashboard = window.dashboard || {};
window.dashboard.Attachments = Attachments;
module.exports = exports['default'];

/***/ }),

/***/ 2819:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _md = __webpack_require__(1265);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

module.exports = function hashEmail(options) {
  // Hash the email, if it is an email.
  var email = (0, _jquery2.default)(options.email_selector).val().toLowerCase().trim();
  if (email !== '' && EMAIL_REGEX.test(email)) {
    var hashed_email = (0, _md2.default)(email);
    (0, _jquery2.default)(options.hashed_email_selector).val(hashed_email);

    // Unless we want to deliberately skip the step of clearing the email.
    if (!options.skip_clear_email) {
      // If age < 13, don't send the plaintext email.
      if (!options.age_selector || (0, _jquery2.default)(options.age_selector).val() < 13) {
        (0, _jquery2.default)(options.email_selector).val('');
      }
    }
  }
};

/***/ }),

/***/ 2820:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Shows the samplingMessage and completionTable DOM elements depending on the
 * parameters.
 *
 * @param {boolean} isSampled - whether Google Analytics sampled.
 * @param {boolean} startDatePresent - whether a start_date parameter was given.
 */
exports.hideAndShowDomElements = function (isSampled, startDatePresent) {
  if (isSampled) {
    (0, _jquery2.default)('#samplingMessage').show();
  }
  if (startDatePresent) {
    (0, _jquery2.default)('#completionTable').show();
  }
};

/**
 * Renders the Avg. Success Rate column, changing the background color depending
 * on the percentage.
 */
/* globals Handsontable */
function successRateRenderer(instance, td, row, col, prop, value, cellProperties) {
  var conditions = [[0.7, '#00FF00'], [0.5, '#b4ff00'], [0.45, '#ccff00'], [0.4, '#ffff00'], [0.3, '#ffdf00'], [0.2, '#ff8100'], [0.15, '#ff9900'], [0.1, '#ff0000'], [0.05, '#a61c00'], [0, '#5b0f00']];
  Handsontable.renderers.NumericRenderer.apply(this, arguments);
  var val = parseFloat(value);
  for (var i = 0; i < conditions.length; i++) {
    if (val >= conditions[i][0]) {
      td.style.background = conditions[i][1];
      return;
    }
  }
}

/**
 * Renders the Avg. Unique Success Rate column, changing the background color
 * depending on the percentage.
 */
function uniqueSuccessRateRenderer(instance, td, row, col, prop, value, cellProperties) {
  var conditions = [[0.98, '#00FF00'], [0.95, '#94ff20'], [0.92, '#b5ff04'], [0.9, '#d7ff00'], [0.85, '#efff00'], [0.82, '#ffdf00'], [0.8, '#ff9900'], [0.75, '#ff6900'], [0.7, '#ff3a00'], [0, '#ff0000']];
  Handsontable.renderers.NumericRenderer.apply(this, arguments);
  var val = parseFloat(value);
  for (var i = 0; i < conditions.length; i++) {
    if (val >= conditions[i][0]) {
      td.style.background = conditions[i][1];
      return;
    }
  }
}

/**
 * Renders the Avg. Time on Page column, changing what percentage of the cell's
 * background is colored gray.
 */
function timeOnSiteRenderer(instance, td, row, col, prop, value, cellProperties) {
  var percent = 0;
  if (value) {
    var val = parseFloat(value);
    var minutes = Math.floor(val / 60);
    var seconds = val - minutes * 60;
    value = ('0' + minutes).substr(-2) + ':' + ('0' + seconds).substr(-2);
    percent = Math.min(1, val / 600);
  }
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.style['font-family'] = 'monospace';
  td.style['background'] = 'linear-gradient(90deg, silver ' + percent * 100 + '%, white 0%)';
}

/**
 * Populates the completionTable DOM element.
 */
exports.populateTable = function (headers, data) {
  (0, _jquery2.default)("#completionTable").handsontable({
    data: data,
    startRows: 10,
    startCols: 9,
    colHeaders: headers,
    colWidths: [200, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    stretchH: 'none',
    columnSorting: true,
    manualColumnResize: true,
    columns: [{
      data: 'Puzzle'
    }, {
      data: "TotalAttempt",
      type: 'numeric'
    }, {
      data: "TotalSuccess",
      type: 'numeric'
    }, {
      data: "Avg Success Rate",
      type: 'numeric',
      format: '0.00%'
    }, {
      data: "Avg attempts per completion",
      type: 'numeric',
      format: '0.00'
    }, {
      data: "UniqueAttempt",
      type: 'numeric'
    }, {
      data: "UniqueSuccess",
      type: 'numeric'
    }, {
      data: "Perceived Dropout",
      type: 'numeric'
    }, {
      data: "Avg Unique Success Rate",
      type: 'numeric',
      format: '0.00%'
    }, {
      data: "timeOnSite"
    }],
    cells: function cells(row, col, prop) {
      if (col === 3) {
        return { renderer: successRateRenderer };
      } else if (col === 8) {
        return { renderer: uniqueSuccessRateRenderer };
      } else if (col === 9) {
        return { renderer: timeOnSiteRenderer };
      }
      return {};
    }
  });
};

/***/ }),

/***/ 2821:
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

var _pairing_dialog = __webpack_require__(2822);

var _pairing_dialog2 = _interopRequireDefault(_pairing_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  init: function init(pairingUrl, hideUserOptions, showPairingDialog) {
    var pairingDialog = void 0;

    function lazyInitDialog() {
      if (!pairingDialog) {
        var container = document.createElement('div');
        container.id = 'pairing';
        document.body.appendChild(container);

        pairingDialog = _reactDom2.default.render(_react2.default.createElement(_pairing_dialog2.default, { source: pairingUrl }), container);
      }
      pairingDialog.open();
    }

    if (showPairingDialog) {
      lazyInitDialog();
    }

    (0, _jquery2.default)('#pairing_link').show().click(function () {
      lazyInitDialog();
      hideUserOptions();
      return false;
    });
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 2822:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pairing = __webpack_require__(2823);

var _pairing2 = _interopRequireDefault(_pairing);

var _BaseDialog = __webpack_require__(500);

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Pair programming dialog.
 */
var PairingDialog = function (_React$Component) {
  _inherits(PairingDialog, _React$Component);

  function PairingDialog() {
    var _temp, _this, _ret;

    _classCallCheck(this, PairingDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { isOpen: false }, _this.close = function () {
      return _this.setState({ isOpen: false });
    }, _this.open = function () {
      return _this.setState({ isOpen: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PairingDialog.prototype.render = function render() {
    return _react2.default.createElement(
      _BaseDialog2.default,
      { isOpen: this.state.isOpen, handleClose: this.close },
      _react2.default.createElement(_pairing2.default, { source: this.props.source, handleClose: this.close })
    );
  };

  return PairingDialog;
}(_react2.default.Component);

PairingDialog.propTypes = {
  source: _react.PropTypes.string
};
exports.default = PairingDialog;
module.exports = exports['default'];

/***/ }),

/***/ 2823:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _section_selector = __webpack_require__(2824);

var _section_selector2 = _interopRequireDefault(_section_selector);

var _student_selector = __webpack_require__(2825);

var _student_selector2 = _interopRequireDefault(_student_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global $ */

/**
 * A component for managing pair programming.
 */
var Pairing = function (_React$Component) {
  _inherits(Pairing, _React$Component);

  function Pairing() {
    var _temp, _this, _ret;

    _classCallCheck(this, Pairing);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      pairings: [],
      sections: []
    }, _this.handleSectionChange = function (event) {
      _this.setState({
        pairings: [],
        sections: _this.state.sections,
        selectedSectionId: +event.target.value
      });
    }, _this.refreshUserMenu = function () {
      _jquery2.default.ajax({
        type: 'GET',
        url: '/dashboardapi/user_menu',
        success: function success(data) {
          return (0, _jquery2.default)('#sign_in_or_user').html(data);
        }
      });
    }, _this.handleAddPartners = function (studentIds) {
      var pairings = _this.selectedSection().students.filter(function (student) {
        return studentIds.indexOf(student.id) !== -1;
      });

      _this.props.handleClose && _this.props.handleClose();

      _jquery2.default.ajax({
        url: _this.props.source,
        data: JSON.stringify({ pairings: pairings }),
        contentType: 'application/json; charset=utf-8',
        method: 'PUT',
        dataType: 'json',
        context: _this
      }).done(_this.refreshUserMenu).fail(function (jqXHR, textStatus, errorThrown) {
        // TODO what to do here?
      });
    }, _this.handleStop = function (event) {
      _this.setState({
        pairings: []
      });

      _jquery2.default.ajax({
        url: _this.props.source,
        data: JSON.stringify({ pairings: [] }),
        contentType: 'application/json; charset=utf-8',
        method: 'PUT',
        dataType: 'json'
      }).done(function () {
        _this.refreshUserMenu();
        _this.props.handleClose(); // close dialog
      }).fail(function (_, textStatus, errorThrown) {
        // TODO what to do here?
      });

      event.preventDefault();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Pairing.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    _jquery2.default.ajax({
      url: this.props.source,
      method: 'GET',
      dataType: 'json'
    }).done(function (result) {
      _this2.setState({
        pairings: result.pairings,
        sections: result.sections
      });
    }).fail(function (result) {
      // TODO what to do here?
    });
  };

  Pairing.prototype.selectedSectionId = function selectedSectionId() {
    if (this.state.sections.length === 1) {
      return +this.state.sections[0].id;
    } else {
      return this.state.selectedSectionId;
    }
  };

  Pairing.prototype.selectedSection = function selectedSection() {
    var selectedId = this.selectedSectionId();
    if (selectedId) {
      return this.state.sections.find(function (s) {
        return s.id === selectedId;
      }) || null;
    }
    return null;
  };

  Pairing.prototype.studentsInSection = function studentsInSection() {
    var section = this.selectedSection();
    return section ? section.students : null;
  };

  Pairing.prototype.renderPairingSelector = function renderPairingSelector() {
    return _react2.default.createElement(
      'div',
      { style: { maxHeight: window.innerHeight * 0.8 - 100, overflowY: 'auto' } },
      _react2.default.createElement(
        'p',
        { className: 'dialog_title' },
        'Pair programming'
      ),
      _react2.default.createElement(
        'h1',
        null,
        'Choose partners:'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(_section_selector2.default, {
          sections: this.state.sections,
          selectedSectionId: this.selectedSectionId(),
          handleChange: this.handleSectionChange
        }),
        _react2.default.createElement('div', { className: 'clear' }),
        _react2.default.createElement(_student_selector2.default, {
          students: this.studentsInSection(),
          handleSubmit: this.handleAddPartners
        })
      )
    );
  };

  Pairing.prototype.renderPairingState = function renderPairingState() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Pair Programming'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'You are Pair Programming with:'
      ),
      this.state.pairings.map(function (student) {
        return _react2.default.createElement(
          'div',
          {
            key: student.id,
            'data-id': student.id,
            className: 'student'
          },
          student.name
        );
      }),
      _react2.default.createElement('div', { className: 'clear' }),
      _react2.default.createElement(
        'button',
        { className: 'stop', onClick: this.handleStop },
        'Stop Pair Programming'
      ),
      _react2.default.createElement(
        'button',
        { className: 'ok', onClick: this.props.handleClose },
        'OK'
      )
    );
  };

  Pairing.prototype.render = function render() {
    if (this.state.pairings.length === 0) {
      return this.renderPairingSelector();
    } else {
      return this.renderPairingState();
    }
  };

  return Pairing;
}(_react2.default.Component);

Pairing.propTypes = {
  source: _react.PropTypes.string,
  handleClose: _react.PropTypes.func
};
exports.default = Pairing;
module.exports = exports['default'];

/***/ }),

/***/ 2824:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _types = __webpack_require__(2084);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Section selector component, for students in multiple sections.
 */
var SectionSelector = function (_React$Component) {
  _inherits(SectionSelector, _React$Component);

  function SectionSelector() {
    _classCallCheck(this, SectionSelector);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SectionSelector.prototype.render = function render() {
    if (this.props.sections.length === 0 || this.props.sections.length === 1) {
      return null;
    }

    return _react2.default.createElement(
      'select',
      {
        name: 'sectionId',
        value: this.props.selectedSectionId,
        onChange: this.props.handleChange
      },
      _react2.default.createElement(
        'option',
        { key: 'blank', value: '' },
        'Choose your section'
      ),
      this.props.sections.map(function (section) {
        return _react2.default.createElement(
          'option',
          { key: section.id, value: section.id },
          section.name
        );
      })
    );
  };

  return SectionSelector;
}(_react2.default.Component);

SectionSelector.propTypes = {
  sections: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.number,
    name: _react.PropTypes.string,
    students: _types.studentsShape
  })),
  selectedSectionId: _react.PropTypes.number,
  handleChange: _react.PropTypes.func.isRequired
};
exports.default = SectionSelector;
module.exports = exports['default'];

/***/ }),

/***/ 2825:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _types = __webpack_require__(2084);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A component for selecting one or more students in a section.
 */
var StudentSelector = function (_React$Component) {
  _inherits(StudentSelector, _React$Component);

  function StudentSelector() {
    var _temp, _this, _ret;

    _classCallCheck(this, StudentSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      selectedStudentIds: []
    }, _this.handleStudentClicked = function (event) {
      var selectedStudentIds = [].concat(_toConsumableArray(_this.state.selectedStudentIds));
      var studentId = +event.target.getAttribute('data-id');
      var index = selectedStudentIds.indexOf(studentId);
      if (index === -1) {
        // not selected, select it
        selectedStudentIds.push(studentId);
      } else {
        // selected, unselect it
        selectedStudentIds.splice(index, 1);
      }
      _this.setState({ selectedStudentIds: selectedStudentIds });
    }, _this.handleSubmit = function (event) {
      _this.props.handleSubmit(_this.state.selectedStudentIds);
      event.preventDefault();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StudentSelector.prototype.render = function render() {
    var _this2 = this;

    if (!this.props.students) {
      return null;
    } else if (this.props.students.length === 0) {
      return _react2.default.createElement(
        'span',
        null,
        'There are no other students in this section.'
      );
    }

    var studentDivs = this.props.students.map(function (student) {
      var className = 'student selectable';
      if (_this2.state.selectedStudentIds.indexOf(student.id) !== -1) {
        className = 'student selectable selected';
      }
      return _react2.default.createElement(
        'div',
        {
          key: student.id,
          'data-id': student.id,
          className: className,
          onClick: _this2.handleStudentClicked
        },
        student.name
      );
    });

    return _react2.default.createElement(
      'div',
      null,
      studentDivs,
      _react2.default.createElement('div', { className: 'clear' }),
      this.state.selectedStudentIds.length !== 0 && _react2.default.createElement(
        'button',
        {
          onClick: this.handleSubmit,
          className: 'addPartners'
        },
        'Add Partners'
      )
    );
  };

  return StudentSelector;
}(_react2.default.Component);

StudentSelector.propTypes = {
  students: _types.studentsShape,
  handleSubmit: _react.PropTypes.func.isRequired
};
exports.default = StudentSelector;
module.exports = exports['default'];

/***/ }),

/***/ 2826:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _constants = __webpack_require__(216);

var _codeStudioLevels = __webpack_require__(738);

var _clientState = __webpack_require__(762);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FreeResponse = function () {
  function FreeResponse(levelId) {
    _classCallCheck(this, FreeResponse);

    this.levelId = levelId;

    (0, _jquery2.default)(document).ready(function () {
      var textarea = (0, _jquery2.default)('textarea#level_' + levelId + '.response');
      if (!textarea.val()) {
        var lastAttempt = (0, _clientState.sourceForLevel)(window.appOptions.scriptName, levelId);
        if (lastAttempt) {
          textarea.val(lastAttempt);
        }
      }
      textarea.blur(function () {
        (0, _codeStudioLevels.onAnswerChanged)(levelId, true);
      });
      textarea.on('input', null, null, function () {
        (0, _codeStudioLevels.onAnswerChanged)(levelId, false);
      });
    });
  }

  FreeResponse.prototype.getResult = function getResult() {
    var response = (0, _jquery2.default)('#level_' + this.levelId).val();
    return {
      response: response,
      valid: response.length > 0,
      result: true,
      testResult: _constants.TestResults.FREE_PLAY
    };
  };

  FreeResponse.prototype.getAppName = function getAppName() {
    return 'free_response';
  };

  FreeResponse.prototype.lockAnswers = function lockAnswers() {
    (0, _jquery2.default)('textarea#level_' + this.levelId + '.response').prop('disabled', true);
  };

  FreeResponse.prototype.getCurrentAnswerFeedback = function getCurrentAnswerFeedback() {
    // Not used by free response
  };

  return FreeResponse;
}();

exports.default = FreeResponse;
module.exports = exports['default'];

/***/ }),

/***/ 3370:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(2802);


/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _tiles = __webpack_require__(773);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @overview React component to allow for easy editing and creation of Cells.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * can be extended to allow for editing of various specialized kinds of cells.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see @cdo/apps/maze/cell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CellEditor = function (_React$Component) {
  _inherits(CellEditor, _React$Component);

  function CellEditor(props) {
    _classCallCheck(this, CellEditor);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  CellEditor.prototype.handleChange = function handleChange() {
    // Serialize the form data to an iterator
    var formData = new FormData(this.form);

    // Convert the iterator to an array and reduce it to an object, combining
    // duplicate names when appropriate (ie for checkboxes)
    var values = Array.from(formData).reduce(function (serialized, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          value = _ref2[1];

      if (value === "undefined") {
        value = undefined;
      } else {
        value = isNaN(value) ? '' : Number(value);
      }

      if (name in serialized) {
        if (Array.isArray(serialized[name])) {
          serialized[name].push(value);
        } else {
          serialized[name] = [serialized[name], value];
        }
      } else {
        serialized[name] = value;
      }

      return serialized;
    }, {});

    this.props.onUpdate(values);
  };

  /**
   * Get an array of the names of the select fields created by the render
   * method; used to sanitize the values that are going to be passed to the
   * renderFields helper method.
   *
   * @return {String[]}
   */


  CellEditor.prototype.getSelectFieldNames = function getSelectFieldNames() {
    return ['tileType'];
  };

  /**
   * Get a sanitized set of name:value pairs for rendering; by default, simply
   * sets undefined values that are intended to go into <select/>s to the string
   * 'undefined' so we aren't trying to switch them from uncontrolled to
   * controlled components at runtime.
   *
   * Can be overridden by inheriting classes to do more complex sanitization.
   * see BeeCellEditor for an example
   *
   * @return {Object}
   */


  CellEditor.prototype.getSanitizedValues = function getSanitizedValues() {
    var values = this.props.cell.serialize();

    // We want undefined values that are going to be in <selects> to
    // actually be the STRING 'undefined' rather than the value.
    this.getSelectFieldNames().forEach(function (value) {
      if (values[value] === undefined) {
        values[value] = 'undefined';
      }
    });

    return values;
  };

  /**
   * Render just the tileTypes selector; this helper method is provided because,
   * unlike value and range, tileTypes are used by all inheriting classes.
   *
   * @param {Object} values - this.getSanitizedValues()
   * @param {Object} squareType - key/value pairs representing the tile types to
   *        render. Defaults to maze.tiles.SquareType
   * @return {Element}
   */


  CellEditor.prototype.renderTileTypes = function renderTileTypes(values) {
    var squareTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _tiles.SquareType;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { htmlFor: 'tileType' },
        'Tile Type (required):'
      ),
      _react2.default.createElement(
        'select',
        { name: 'tileType', value: values.tileType, onChange: this.handleChange },
        Object.keys(squareTypes).map(function (key) {
          return _react2.default.createElement(
            'option',
            { key: key, value: squareTypes[key] },
            key.toLowerCase()
          );
        })
      )
    );
  };

  /**
   * Render all fields for this form. Most children will want to override this
   * method rather than the higher-level render method to automatically get the
   * sanitized values and header display.
   *
   * @param {Object} values - this.getSanitizedValues()
   * @return {Element}
   */


  CellEditor.prototype.renderFields = function renderFields(values) {
    return _react2.default.createElement(
      'div',
      null,
      this.renderTileTypes(values),
      _react2.default.createElement(
        'label',
        { htmlFor: 'value' },
        'Value:'
      ),
      _react2.default.createElement('input', { type: 'number', name: 'value', value: values.value, onChange: this.handleChange }),
      _react2.default.createElement(
        'label',
        { htmlFor: 'range' },
        'Range (defaults to value):'
      ),
      _react2.default.createElement('input', { type: 'number', name: 'range', value: values.range, disabled: values.featureType === 'undefined', onChange: this.handleChange })
    );
  };

  CellEditor.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'form',
      { className: 'span4 offset1', ref: function ref(form) {
          _this2.form = form;
        } },
      _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'strong',
          null,
          'Editing Cell (',
          this.props.row,
          ', ',
          this.props.col,
          ')'
        )
      ),
      this.renderFields(this.getSanitizedValues())
    );
  };

  return CellEditor;
}(_react2.default.Component);

CellEditor.propTypes = {
  cell: _react.PropTypes.object.isRequired,
  row: _react.PropTypes.number.isRequired,
  col: _react.PropTypes.number.isRequired,
  onUpdate: _react.PropTypes.func.isRequired
};
exports.default = CellEditor;
module.exports = exports['default'];

/***/ })

},[3370]);