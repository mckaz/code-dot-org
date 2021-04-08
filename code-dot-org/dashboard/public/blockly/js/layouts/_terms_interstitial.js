webpackJsonp([58],{

/***/ 3474:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3475);


/***/ }),

/***/ 3475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)("#user_terms_of_service_version").on('change', function (event) {
    if ((0, _jquery2.default)(this).is(':checked')) {
      (0, _jquery2.default)("#accept-terms-submit").prop('disabled', false).removeClass("disabled-button");
    } else {
      (0, _jquery2.default)("#accept-terms-submit").prop('disabled', true).addClass("disabled-button");
    }
  });

  (0, _jquery2.default)("#edit_user").submit(function (event) {
    event.preventDefault();
    _jquery2.default.ajax({
      type: 'POST',
      url: (0, _jquery2.default)(this).attr('action'),
      data: (0, _jquery2.default)(this).serialize(),
      dataType: 'json',
      complete: function complete(data) {
        (0, _jquery2.default)("#terms-modal").modal('hide');location.reload();
      }
    });
  });

  (0, _jquery2.default)('#later-link').click(function () {
    (0, _jquery2.default)("#terms-modal").modal('hide');
  });
});

(0, _jquery2.default)(document).ready(function () {
  var printLink = (0, _jquery2.default)('#print-terms');
  if (printLink) {
    printLink.click(function () {
      var item = (0, _jquery2.default)("#print-frame")[0];
      item.contentWindow.print();
    });
  }
});

function setCookie(key, value) {
  var expires = new Date();
  // Kill hide_tos cookie at midnight every night
  // so the terms interstitial pops up once a day.
  expires.setHours(23, 59, 59, 0);
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

(0, _jquery2.default)(document).ready(function () {
  var already_shown = !!getCookie('hide_tos');
  if (!already_shown) {
    (0, _jquery2.default)("#terms-modal").modal('show');
    setCookie('hide_tos', '1');
  }
});

/***/ })

},[3474]);