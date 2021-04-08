webpackJsonp([28],{

/***/ 3600:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3601);


/***/ }),

/***/ 3601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3602);

var _header = __webpack_require__(1722);

var _header2 = _interopRequireDefault(_header);

__webpack_require__(3603);

__webpack_require__(3604);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Entry point for plc.js bundle
 */
window.dashboard.plcHeader = _header2.default;

/***/ }),

/***/ 3602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(window).load(function () {
  (0, _jquery2.default)('#evaluationTable .new_question').click(function (event) {
    var bottomRow = event.target.parentElement.parentElement;
    var clonedRow = (0, _jquery2.default)('#evaluationTable .cloneableQuestionRow').clone(true);
    clonedRow.removeClass('cloneableQuestionRow');
    clonedRow.addClass('new_question_row');
    var newQuestionInput = clonedRow.find('input');
    newQuestionInput.addClass('new_question_name');
    newQuestionInput.keyup(handleNewQuestionName);
    clonedRow.insertBefore(bottomRow);
  });

  (0, _jquery2.default)('#evaluationTable .new_answer').click(function (event) {
    var clonedRow = (0, _jquery2.default)(event.target.parentElement.parentElement.parentElement).find('.cloneableAnswerRow').clone(true);
    clonedRow.removeClass('cloneableAnswerRow');
    clonedRow.addClass('new_answer_row');
    clonedRow.attr('question_id', event.target.getAttribute('question_id'));
    clonedRow.find('input').keyup(handleNewAnswer);
    clonedRow.find('select').change(handleNewAnswer);
    clonedRow.insertBefore(event.target.parentElement.parentElement);
  });

  function handleNewQuestionName() {
    (0, _jquery2.default)('#newQuestionsList').val(JSON.stringify((0, _jquery2.default)('.new_question_row .new_question_name').map(function () {
      return (0, _jquery2.default)(this).val();
    }).get()));

    //Future work item is to do better validation on submitted questions. Will come along with deletion
    (0, _jquery2.default)('#submitNewQuestions').prop("disabled", false);
  }

  function handleNewAnswer() {
    var newAnswerData = {};

    (0, _jquery2.default)('.question_section .new_answer_row').each(function (index, element) {
      var questionId = element.getAttribute('question_id');
      var answerText = (0, _jquery2.default)(element).find('input:first').val();
      var weight = (0, _jquery2.default)(element).find('input:last').val();
      var associatedModule = (0, _jquery2.default)(element).find('select').val();

      newAnswerData[questionId] = newAnswerData[questionId] || [];

      newAnswerData[questionId].push({
        answer: answerText,
        learningModuleId: associatedModule,
        weight: weight
      });
    });

    (0, _jquery2.default)('#newAnswersList').val(JSON.stringify(newAnswerData));
    (0, _jquery2.default)('#submitNewQuestions').prop('disabled', false);
  }
});

/***/ }),

/***/ 3603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(window).load(function () {
  (0, _jquery2.default)('#submit_evaluation').click(function () {
    var evaluationResponses = {};

    (0, _jquery2.default)('input:checked').each(function () {
      if (this.hasAttribute('value')) {
        if (evaluationResponses[this.value]) {
          evaluationResponses[this.value] += this.getAttribute('weight');
        } else {
          evaluationResponses[this.value] = this.getAttribute('weight');
        }
      }
    });

    (0, _jquery2.default)('#answer_module_list').val(JSON.stringify(evaluationResponses));
  });
});

/***/ }),

/***/ 3604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(32);
var IconLibrary = __webpack_require__(2114);
var initializeCodeMirror = __webpack_require__(2087);
var marked = __webpack_require__(732);

(0, _jquery2.default)(window).load(function () {
  (0, _jquery2.default)('#toggleIconLibrary').click(function () {
    (0, _jquery2.default)('#iconDiv').toggle();
  });

  (0, _jquery2.default)('#unsetIcon').click(function () {
    (0, _jquery2.default)('#plc_learning_resource_task_icon').val('');
    (0, _jquery2.default)('#previewIcon').removeClass();
    (0, _jquery2.default)('#iconDiv').toggle();
  });

  if ((0, _jquery2.default)('#plc_written_assignment_task_assignment_description').length) {
    var markdownEditor = initializeCodeMirror('plc_written_assignment_task_assignment_description', 'markdown', function (editor, change) {
      (0, _jquery2.default)('#assignment_description_preview').html(marked(editor.getValue())).children('details').details();
    }, true);

    (0, _jquery2.default)('#assignment_description_preview').html(marked(markdownEditor.getValue())).children('details').details();
  }
});

// TODO: Don't use one monolithic js file
if ((0, _jquery2.default)('#iconLibraryContainerDiv').length) {
  ReactDOM.render(React.createElement(IconLibrary, {
    alignment: 'left',
    assetChosen: function assetChosen(name) {
      var iconClass = name;
      (0, _jquery2.default)('#plc_learning_resource_task_icon').val(iconClass);
      (0, _jquery2.default)('#iconDiv').toggle();
      (0, _jquery2.default)('#previewIcon').removeClass().addClass('fa ' + iconClass);
    }

  }), document.querySelector('#iconLibraryContainerDiv'));
}

/***/ })

},[3600]);