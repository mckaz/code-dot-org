webpackJsonp([39],{

/***/ 3439:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3440);


/***/ }),

/***/ 3440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Main entry point for scripts used only in levelbuilder when editing
 *       DSL-defined levels.
 */
var initializeEmbeddedMarkdownEditor = __webpack_require__(3441);

// Initialize markdown editors on page load
(0, _jquery2.default)(document).ready(function () {
  initializeEmbeddedMarkdownEditor((0, _jquery2.default)('#level_dsl_text'), 'level_markdown_textarea', 'markdown');
  initializeEmbeddedMarkdownEditor((0, _jquery2.default)('#level_dsl_text'), 'level_teacher_markdown_textarea', 'teacher_markdown');
});

/***/ }),

/***/ 3441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file Defines a function for initializing an embedded markdown editor using
 *       CodeMirror and marked.
 */
var marked = __webpack_require__(732);
var initializeCodeMirror = __webpack_require__(2087);

marked.setOptions({
  sanitize: true
});

/**
 * Initializes a live preview markdown editor that spits its contents out into
 * a given text area as embedded markdown of the form:
 *
 *    markdown <<MARKDOWN
 *    My markdown here
 *    MARKDOWN
 *
 *    for a DSL element
 *
 * For a non DSL element, use initializeCodeMirror
 *
 * @param {jQuery} embeddedElement textarea element within which to embed the markdown
 * @param {string} markdownTextArea id (which will be prefixed by "level_")
 *                                  of textarea where editor will live
 * @param {string} name of the property within the textarea
 */
module.exports = function (embeddedElement, markdownTextArea, markdownProperty) {
  var regex = new RegExp("^" + markdownProperty + " <<(\\w*)\\n([\\s\\S]*?)\\n\\1\\s*$", "m");
  var dslElement = embeddedElement;
  var dslText = dslElement.val();

  var mdEditor = initializeCodeMirror(markdownTextArea, 'markdown', function (editor, change) {
    var editorText = editor.getValue();
    var dslText = dslElement.val();
    var replacedText;
    if (regex.exec(dslText)) {
      replacedText = dslText.replace(regex, markdownProperty + ' <<$1\n' + editorText + '\n$1\n');
    } else {
      replacedText = dslText + '\n' + markdownProperty + ' <<MARKDOWN\n' + editorText + '\nMARKDOWN\n';
    }
    dslElement.val(replacedText);
  }, true);

  // Match against markdown heredoc syntax and capture contents in [2].
  var match = regex.exec(dslText);
  if (match && match[2]) {
    var markdownText = match[2];
    mdEditor.setValue(markdownText);
  } else {
    mdEditor.setValue('');
  }
};

/***/ })

},[3439]);