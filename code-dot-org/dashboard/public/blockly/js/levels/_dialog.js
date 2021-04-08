webpackJsonp([53],{

/***/ 3413:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3414);


/***/ }),

/***/ 3414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dialogHelper = __webpack_require__(1747);

var _codeStudioLevels = __webpack_require__(738);

var _LegacyDialogContents = __webpack_require__(1130);

/**
 * This file does some handling of submit button interactions.
 */

// It's worth noting that in levelgroups containing external type levels, this
// JS can get loaded more than once. It's important that this code runs after
// the DOM is done loading, otherwise we might not actually have all of our
// buttons yet
$(document).ready(function () {
  // Are we read-only?  This can be because we're a teacher OR because an answer
  // has been previously submitted.
  if (appOptions.readonlyWorkspace) {
    // hide the Submit button.
    $('.submitButton').hide();

    // Are we a student viewing their own previously-submitted work?
    if (appOptions.submitted) {
      // show the Unsubmit button.
      $('.unsubmitButton').show();
    }

    // Set the entire page background to be light grey.
    $('.full_container').addClass('submitted_readonly');
  }

  // Unsubmit button should only be available when this is a standalone level.
  $('.unsubmitButton').click(function () {
    (0, _dialogHelper.showDialog)(_LegacyDialogContents.UnsubmitDialog, function () {
      $.post(window.appOptions.unsubmitUrl, { "_method": 'PUT', user_level: { submitted: false } }, function () {
        // Just reload so that the progress in the header is shown correctly.
        location.reload();
      });
    });
  });

  // TODO(dave): Dashboard shouldn't be reaching into the internal implementation of
  // individual levels. Instead levels should call appOptions.onAttempt.
  $(document).on('click', '.submitButton', function () {
    var submitButton = $('.submitButton');
    if (submitButton.attr('disabled')) {
      return;
    }

    var result = (0, _codeStudioLevels.getResult)();
    if (result.confirmationDialog) {
      // This is only used by level_group.js, and only uses the React approach to
      // showDialog
      if (typeof result.confirmationDialog === 'string') {
        throw new Error('result.confirmationDialog only supports React approach to showDialog');
      }
      (0, _dialogHelper.showDialog)(result.confirmationDialog, function () {
        (0, _dialogHelper.processResults)(undefined, result.beforeProcessResultsHook);
      });
    } else {
      // Avoid multiple simultaneous submissions.
      submitButton.attr('disabled', true);

      var onComplete = function onComplete(willRedirect) {
        if (!willRedirect) {
          $('.submitButton').attr('disabled', false);
        }
      };

      (0, _dialogHelper.processResults)(onComplete, result.beforeProcessResultsHook);
    }
  });
}); /* globals appOptions */

/***/ })

},[3413]);