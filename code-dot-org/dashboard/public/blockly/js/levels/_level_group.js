webpackJsonp([34],{

/***/ 3419:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3420);


/***/ }),

/***/ 3420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _throttle = __webpack_require__(3421);

var _throttle2 = _interopRequireDefault(_throttle);

var _getScriptData = __webpack_require__(596);

var _getScriptData2 = _interopRequireDefault(_getScriptData);

var _codeStudioLevels = __webpack_require__(738);

var codeStudioLevels = _interopRequireWildcard(_codeStudioLevels);

var _LegacyDialogContents = __webpack_require__(1130);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Multi = __webpack_require__(2085); /* global appOptions */

window.TextMatch = __webpack_require__(2086);
var saveAnswers = __webpack_require__(3422).saveAnswers;

(0, _jquery2.default)(document).ready(function () {
  var levelData = (0, _getScriptData2.default)('levelData');
  var initData = (0, _getScriptData2.default)('initData');
  window.levelData = levelData;

  if (initData) {
    initLevelGroup(initData.total_level_count, initData.page, initData.last_attempt);
  }
});

function initLevelGroup(levelCount, currentPage, lastAttempt) {

  // Whenever an embedded level notifies us that the user has made a change,
  // check for any changes in the response set, and if so, attempt to save
  // these answers.  Saving is throttled to not occur more than once every 20
  // seconds, and is done as soon as possible ("leading edge"), as well as at
  // the end of a 20 second period if a change was made before then ("trailing
  // edge").  Any pending throttled calls are cancelled when we go to a new page
  // and save for that reason.

  codeStudioLevels.registerGetResult(getAggregatedResults);

  function submitSublevelResults(completion, subLevelIdChanged) {
    var levelIds = codeStudioLevels.getLevelIds();
    var sendReportCompleteCount = 0;
    var subLevelCount = levelIds.length;
    if (subLevelCount === 0) {
      return completion();
    }
    function handleSublevelComplete() {
      sendReportCompleteCount++;
      if (sendReportCompleteCount === subLevelCount) {
        completion();
      }
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = levelIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var subLevelId = _step.value;

        if (typeof subLevelIdChanged !== 'undefined' && subLevelIdChanged !== parseInt(subLevelId)) {
          // Only one sublevel changed and this is not the one, so skip the post and
          // call the completion function immediately
          handleSublevelComplete();
          continue;
        }
        var subLevel = codeStudioLevels.getLevel(subLevelId);
        var subLevelResult = subLevel.getResult(true);
        var response = encodeURIComponent(replaceEmoji(subLevelResult.response.toString()));
        var result = subLevelResult.result;
        var testResult = subLevelResult.testResult ? subLevelResult.testResult : result ? 100 : 0;
        var submitted = subLevelResult.submitted || false;

        window.dashboard.reporting.sendReport({
          program: response,
          fallbackResponse: appOptions.dialog.fallbackResponse,
          callback: appOptions.dialog.sublevelCallback + subLevelId,
          app: subLevel.getAppName(),
          allowMultipleSends: true,
          level: subLevelId,
          result: subLevelResult,
          pass: subLevelResult,
          testResult: testResult,
          submitted: submitted,
          onComplete: handleSublevelComplete
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  var throttledSaveAnswers = (0, _throttle2.default)(function (subLevelId) {
    submitSublevelResults(saveAnswers, subLevelId);
  }, 20 * 1000);

  var lastResponse = getAggregatedResults().response;

  codeStudioLevels.registerAnswerChangedFn(function (levelId, saveThisAnswer) {
    // LevelGroup is only interested in changes that should result in a save
    if (!saveThisAnswer) {
      return;
    }
    var currentResponse = getAggregatedResults().response;
    if (lastResponse !== currentResponse) {
      throttledSaveAnswers(levelId);
    }
    lastResponse = currentResponse;
  });

  /**
   * Construct an array of all the level results. When submitted it's something
   * like this:
   *
   * {"1977": {"result": "0", "valid": true},
   *  "2007": {"result": "-1", "valid": false},
   *  "1939": {"result": "2,1", "valid": true}}
   */
  function getAggregatedResults() {
    // Add any new results to the existing lastAttempt results.
    var levelIds = codeStudioLevels.getLevelIds();
    levelIds.forEach(function (levelId) {
      var subLevel = codeStudioLevels.getLevel(levelId);
      var currentAnswer = subLevel.getResult(true);
      var levelResult = replaceEmoji(currentAnswer.response.toString());
      var valid = currentAnswer.valid;
      lastAttempt[levelId] = {
        result: levelResult,
        valid: valid
      };
    });

    var validCount = 0;
    for (var level in lastAttempt) {
      if (lastAttempt[level].valid) {
        validCount++;
      }
    }

    var id = void 0,
        title = void 0,
        body = void 0;
    var isSurvey = appOptions.level.anonymous === true || appOptions.level.anonymous === 'true';
    title = isSurvey ? _locale2.default.submitSurvey() : _locale2.default.submitAssessment();
    if (validCount === levelCount) {
      id = "levelgroup-submit-complete-dialogcontent";
      body = isSurvey ? _locale2.default.submittableSurveyComplete() : _locale2.default.submittableComplete();
    } else {
      id = "levelgroup-submit-incomplete-dialogcontent";
      body = isSurvey ? _locale2.default.submittableSurveyIncomplete() : _locale2.default.submittableIncomplete();
    }
    var confirmationDialog = _react2.default.createElement(_LegacyDialogContents.SingleLevelGroupDialog, {
      id: id,
      title: title,
      body: body
    });

    return {
      response: encodeURIComponent(JSON.stringify(lastAttempt)),
      result: true,
      submitted: window.appOptions.level.submittable,
      confirmationDialog: confirmationDialog,
      beforeProcessResultsHook: submitSublevelResults
    };
  }

  // Called by gotoPage when it's ready to actually change the page.
  function changePage(targetPage) {
    var newLocation = window.location.href.replace("/page/" + currentPage, "/page/" + targetPage);
    window.location.href = newLocation;
  }

  // Called by previous/next button handlers.
  // Goes to a new page, first saving current answers if necessary.
  function gotoPage(targetPage) {
    // Are we read-only?  This can be because we're a teacher OR because an answer
    // has been previously submitted.
    if (window.appOptions.readonlyWorkspace) {
      changePage(targetPage);
    } else {
      (function () {
        // Submit what we have, and when that's done, go to the next page of the
        // long assessment.  Cancel any pending throttled attempts at saving state.
        throttledSaveAnswers.cancel();
        var afterSave = function afterSave() {
          return changePage(targetPage);
        };
        submitSublevelResults(function () {
          return saveAnswers(afterSave);
        });
      })();
    }
  }

  // Replaces emoji in a string with a blank character.
  // (In fact, it's replacing all supplementary, i.e. non-BMP, characters.)
  // Returns the updated string.
  //
  // More information:
  //   http://dev.mysql.com/doc/refman/5.7/en/charset-unicode-utf8mb4.html
  //     describes the database's inability to store supplementary characters, which
  //     are those outside of the BMP (Basic Multilingual Plane).
  //   https://mathiasbynens.be/notes/javascript-encoding
  //     describes how characters outside the BMP can only be encoded in UTF-16
  //     using a surrogate pair, which is what we use to detect such characters.
  //
  function replaceEmoji(source) {
    var blankCharacter = '\u25A1';

    // Build the range for the supplementary pair in a way that works with Babel
    // (which currently handles \u encoding in a string incorrectly).
    var range = '[' + String.fromCharCode(0xD800) + '-' + String.fromCharCode(0xDBFF) + '][' + String.fromCharCode(0xDC00) + '-' + String.fromCharCode(0xDFFF) + ']';

    return source.replace(new RegExp(range, 'g'), blankCharacter);
  }

  (0, _jquery2.default)(".nextPageButton").click(function (event) {
    gotoPage(currentPage + 1);
  });

  (0, _jquery2.default)(".previousPageButton").click(function (event) {
    gotoPage(currentPage - 1);
  });
}

/***/ }),

/***/ 3421:
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(832),
    isObject = __webpack_require__(734);

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 3422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _codeStudioLevels = __webpack_require__(738);

// The external web page might tell us to save our progress and then navigate
// to a new URL when that's done.  This is done when the level dots are
// pressed.
function saveAnswersAndNavigate(url) {
  if (window.appOptions.readonlyWorkspace) {
    window.location.href = url;
  } else {
    saveAnswers(function () {
      window.location.href = url;
    });
  }
} /* global appOptions */


var UNSUBMITTED_ATTEMPT = -50;

// Calls the completeFn function when transmission is complete.

/**
 * @param {function} completeFn - Function to call after sending report to
 *   save answers.
 */
function saveAnswers(completeFn) {
  var results = (0, _codeStudioLevels.getResult)();
  var response = results.response;
  var result = results.result;
  var submitted = appOptions.submitted || false;

  window.dashboard.reporting.sendReport({
    program: response,
    fallbackResponse: appOptions.dialog.fallbackResponse,
    callback: appOptions.dialog.callback,
    app: appOptions.dialog.app,
    level: appOptions.levelPosition,
    result: result,
    pass: result,
    testResult: result ? UNSUBMITTED_ATTEMPT : 0,
    submitted: submitted,
    onComplete: completeFn
  });
}

module.exports = {
  saveAnswersAndNavigate: saveAnswersAndNavigate,
  saveAnswers: saveAnswers
};

/***/ })

},[3419]);