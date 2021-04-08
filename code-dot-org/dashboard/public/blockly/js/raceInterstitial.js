webpackJsonp([42],{

/***/ 3472:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3473);


/***/ }),

/***/ 3473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  var editUser = (0, _jquery2.default)('#edit_user');
  var raceCheckboxes = (0, _jquery2.default)('.race-checkbox');

  editUser.on('change', function () {
    var shouldEnableSubmit = false;
    var optOutSelected = false;
    raceCheckboxes.each(function (i) {
      if (this.checked) {
        shouldEnableSubmit = true;
        if (this.id === 'user_races_opt_out') {
          optOutSelected = true;
        }
      }
    });
    if (optOutSelected) {
      // Disable and clear all non-opt-out checkboxes and gray out labels
      var others = raceCheckboxes.not('#user_races_opt_out');
      others.prop('checked', false);
      others.prop('disabled', true);
      others.parent().addClass('disabled'); // gray out labels
    } else {
      // Re-enable
      raceCheckboxes.prop('disabled', false);
      raceCheckboxes.parent().removeClass('disabled');
    }

    if (shouldEnableSubmit) {
      (0, _jquery2.default)('#race-submit').prop('disabled', false).removeClass('disabled-button');
    } else {
      (0, _jquery2.default)('#race-submit').prop('disabled', true).addClass('disabled-button');
    }
  });

  function submitCheckboxData(form) {
    _jquery2.default.ajax({
      type: 'POST',
      url: form.prop('action'),
      data: form.serialize(),
      dataType: 'json',
      success: function success(data) {
        return (0, _jquery2.default)('#race-modal').modal('hide');
      }
    });
  }

  editUser.submit(function (event) {
    event.preventDefault();
    submitCheckboxData(editUser);
  });

  (0, _jquery2.default)('#later-link').click(function () {
    // Clear out all checkboxes, check 'closed_dialog'
    raceCheckboxes.prop('checked', false);
    (0, _jquery2.default)('#user_races_closed_dialog').prop('checked', true);
    submitCheckboxData(editUser);
    (0, _jquery2.default)('#race-modal').modal('hide');
  });
});

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)('#race-modal').modal('show');
  (0, _jquery2.default)('#closed-dialog-label').hide();
});

/***/ })

},[3472]);