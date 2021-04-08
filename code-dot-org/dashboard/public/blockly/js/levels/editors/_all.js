webpackJsonp([48],{

/***/ 3437:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3438);


/***/ }),

/***/ 3438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(initPage); /* global levelbuilder */


function initPage() {
  var script = document.querySelector('script[data-editorall]');
  var config = JSON.parse(script.dataset.editorall);

  levelbuilder.jsonEditor("#callout_editor", {
    json_textarea: '#level_callout_json',
    add_button: '#add_callout',
    remove_button: ".remove_callout",
    value_space: ".callout_space",
    template: ".json_template",
    form_container: "#all_callouts_editor",
    wrapper: ".json_editor",
    model: {
      localization_key: "",
      callout_text: "",
      element_id: "",
      on: "",
      qtip_config: {
        codeStudio: {
          canReappear: false,
          dropletPaletteCategory: ""
        },
        style: { classes: "" },
        position: {
          my: "",
          at: "",
          adjust: { x: 0, y: 0 }
        }
      }
    }
  });

  function make_selection_handler(flag) {
    return function (e) {
      e.preventDefault();
      (0, _jquery2.default)(this).parent().siblings('select').children('option')[flag ? 'attr' : 'removeAttr']('selected', true);
    };
  }

  (0, _jquery2.default)('.select_all').click(make_selection_handler(true));
  (0, _jquery2.default)('.select_none').click(make_selection_handler(false));

  // This click handler enables adding multiple text inputs for reference links.
  (0, _jquery2.default)("#plusAnswerReference").on("click", function () {
    (0, _jquery2.default)("#plusAnswerReference").prev().clone().insertBefore("#plusAnswerReference");
  });

  var videoInfos = config.video_infos;

  function updateVideoPreview() {
    var selectionValue = (0, _jquery2.default)('.video-dropdown')[0].value;
    if (selectionValue) {
      var videoInfo = videoInfos[selectionValue];
      (0, _jquery2.default)('.video-preview').html(window.dashboard.videos.createVideoWithFallback(null, videoInfo, 400, 400));
      (0, _jquery2.default)('.video-preview').show();
    } else {
      (0, _jquery2.default)('.video-preview').hide();
    }
  }
  (0, _jquery2.default)('.video-dropdown').change(updateVideoPreview);
  updateVideoPreview();
}

/***/ })

},[3437]);