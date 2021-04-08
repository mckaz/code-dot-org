webpackJsonp([29],{

/***/ 3371:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3372);


/***/ }),

/***/ 3372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lodash = __webpack_require__(82);

var _lodash2 = _interopRequireDefault(_lodash);

var _codemirror = __webpack_require__(852);

var _codemirror2 = _interopRequireDefault(_codemirror);

var _marked = __webpack_require__(732);

var _marked2 = _interopRequireDefault(_marked);

var _StylelessRenderer = __webpack_require__(831);

var _StylelessRenderer2 = _interopRequireDefault(_StylelessRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Main entry point for scripts used on all level editing pages.
 */
window.levelbuilder = window.levelbuilder || {};
_lodash2.default.extend(window.levelbuilder, {
  initializeCodeMirror: __webpack_require__(2087),
  initializeBlockPreview: __webpack_require__(2968),
  jsonEditor: __webpack_require__(3385),
  acapela: __webpack_require__(3386),
  ajaxSubmit: __webpack_require__(3387)
});

window.levelbuilder.installBlocks = function (app, blockly, options) {
  var appBlocks = __webpack_require__(2969)("./" + app + '/blocks');
  var commonBlocks = __webpack_require__(1813);

  commonBlocks.install(blockly, options);
  appBlocks.install(blockly, options);
};

// TODO: Remove when global `CodeMirror` is no longer required.
window.CodeMirror = _codemirror2.default;
// TODO: Remove when global `marked` is no longer required.
window.marked = _marked2.default;
window.renderer = _StylelessRenderer2.default;

/***/ }),

/***/ 3385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeMirror = __webpack_require__(852);

/**
 * "Factory" function to transform a container into an interface for
 * editing lists of JSON values.
 *
 * @param {string} container - jQuery selector for the container
 * @param {Object} options
 * @param {string} options.json_textarea
 * @param {string} options.add_button
 * @param {string} options.remove_button
 * @param {string} options.value_space
 * @param {string} options.template
 * @param {string} options.form_container
 * @param {string} options.wrapper
 * @param {Object} options.model
 */
module.exports = function (container, options) {
  container = (0, _jquery2.default)(container);

  var jsonEditor = CodeMirror.fromTextArea(container.find(options.json_textarea).get(0), {
    mode: 'javascript',
    viewportMargin: Infinity,
    matchBrackets: true
  });

  // Create spaces for each element in the original JSON
  var jsonContent = jsonEditor.getValue();
  if (jsonContent.length > 0) {
    var valuesToUpdate = JSON.parse(jsonEditor.getValue());
    _jquery2.default.each(valuesToUpdate, function (index, value) {
      updateTemplate(value, $createNewSpace());
    });
  }

  /**
    * For each key in the given model, set the <input> with a matching class name to the key's value.
    * @param {model} The model to use when updating the DOM.
    * @param {$template} The jQuery element to search for <input> elements.
    */
  function updateTemplate(model, $template) {
    _jquery2.default.each(model, function (key, value) {
      if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        updateTemplate(value, $template);
      } else {
        var item = $template.find('.' + key);
        if (item.prop('type') === 'checkbox') {
          item.prop('checked', model[key]);
        } else {
          item.val(model[key]);
        }
      }
    });
    if (options.onNewSpace) {
      options.onNewSpace($template);
    }
  }

  /**
    * For each key in the given model, set the key's value to the value of the <input> with a matching class name.
    * @param {model} The model to update from the DOM.
    * @param {$template} The jQuery element to search for <input> elements.
    */
  function updateModel(model, $template) {
    _jquery2.default.each(model, function (key, value) {
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        updateModel(value, $template);
      } else {
        var item = $template.find('.' + key);
        if (item.prop('type') === 'checkbox') {
          value = item.prop('checked');
        } else {
          value = item.val();
        }
        model[key] = typeof model[key] === 'number' ? +value : value;
      }
    });
  }

  function updateJSON() {
    var updatedValues = [];
    container.find(options.form_container).find(options.value_space).each(function () {
      var model = _jquery2.default.extend(true, {}, options.model);
      updateModel(model, (0, _jquery2.default)(this));
      updatedValues.push(model);
    });
    jsonEditor.setValue(JSON.stringify(updatedValues, null, ' '));
  }

  function $createNewSpace() {
    var $newValue = container.find(options.template).children(":first").clone();
    container.find(options.form_container).append($newValue);
    return $newValue;
  }

  if (options.up_button) {
    container.on("click", options.up_button, function () {
      var wrapper = (0, _jquery2.default)(this).closest(options.value_space);
      if (wrapper.prev().length) {
        wrapper.insertBefore(wrapper.prev());
        updateJSON();
      }
    });
  }

  if (options.down_button) {
    container.on("click", options.down_button, function () {
      var wrapper = (0, _jquery2.default)(this).closest(options.value_space);
      if (wrapper.next().length) {
        wrapper.insertAfter(wrapper.next());
        updateJSON();
      }
    });
  }

  container.on("click", options.add_button, function () {
    var model = _jquery2.default.extend(true, {}, options.model);
    updateTemplate(model, $createNewSpace());
    updateJSON();
  });

  container.on("click", options.remove_button, function () {
    (0, _jquery2.default)(this).closest(options.value_space).remove();
    updateJSON();
  });

  container.on("change", options.wrapper, function () {
    updateJSON();
  });
};

/***/ }),

/***/ 3386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  listenForGetAudio: function listenForGetAudio(config) {
    (0, _jquery2.default)('button.tts').click(function () {
      var sourceText;
      switch (this.id) {
        case 'tts-instructions':
          sourceText = (0, _jquery2.default)("#level_tts_instructions_override").val() || (0, _jquery2.default)("#level_instructions").val();
          break;
        case 'tts-markdown-instructions':
          sourceText = (0, _jquery2.default)("#level_tts_markdown_instructions_override").val() || (0, _jquery2.default)('#markdown-instructions-preview').text();
          break;
      }

      _jquery2.default.getJSON("https://vaas.acapela-group.com/Services/UrlMaker?jsoncallback=?", {
        cl_login: config.login,
        cl_app: config.app,
        cl_pwd: config.pwd,
        req_voice: (0, _jquery2.default)("#level_tts_voice").val(),
        req_text: sourceText
      }, function (data) {
        (0, _jquery2.default)('#tts-error').hide();

        if (data.err_msg) {
          (0, _jquery2.default)('#alert-content').text(unescape(data.err_msg));
          (0, _jquery2.default)('#tts-error').show();
        }

        if (data.snd_url) {
          (0, _jquery2.default)("#tts-audio").attr({
            src: data.snd_url,
            controls: 'controls'
          });
        }
      });
    });
  },
  populateVoicesList: function populateVoicesList(config) {
    _jquery2.default.getJSON("https://vaas.acapela-group.com/Services/Voices.json?jsoncallback=?", {
      cl_login: config.login,
      cl_app: config.app,
      fields_selection: "language_desc;speaker",
      frequency: "22050",
      technology: "HQ"
    }, function (data) {
      var voices = Object.keys(data.voices).reduce(function (prev, curr) {
        var voice = {
          speaker: data.voices[curr].speaker,
          id: curr
        };
        if (prev[data.voices[curr].language_desc]) {
          prev[data.voices[curr].language_desc].push(voice);
        } else {
          prev[data.voices[curr].language_desc] = [voice];
        }
        return prev;
      }, {});

      var optgroups = Object.keys(voices).map(function (language) {
        var options = voices[language].map(function (voice) {
          return "<option value='" + voice.id + "'>" + voice.speaker + "</option>";
        });

        return "<optgroup label='" + language + "'>" + options.join('') + "</optgroup>";
      });

      (0, _jquery2.default)('#level_tts_voice').html(optgroups.join(''));
      (0, _jquery2.default)('#level_tts_voice').find('option[value="sharon22k"]').attr("selected", true);
    });
  }
};

/***/ }),

/***/ 3387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function ajaxSubmit(form_selector) {
  (0, _jquery2.default)(document).ready(function () {
    (0, _jquery2.default)(form_selector).on('ajax:beforeSend', function (e, xhr) {
      (0, _jquery2.default)('.validation-error').empty().hide();
      var token = (0, _jquery2.default)('meta[name="csrf-token"]').attr('content');
      xhr.setRequestHeader('X-CSRF-TOKEN', token);
    });
    (0, _jquery2.default)(form_selector).on('ajax:complete', function (e, data) {
      if (parseInt(data.status, 10) === 200) {
        localStorage.removeItem('markdown_' + window.location.pathname.split('/').reverse()[1]);
        window.location.href = JSON.parse(data.responseText).redirect;
      }
    });
    (0, _jquery2.default)(form_selector).on("ajax:error", function (evt, xhr, status, error) {
      var errors;
      try {
        errors = _jquery2.default.parseJSON(xhr.responseText);
      } catch (err) {
        errors = { message: "Error (" + error + "): " + xhr.responseText };
      }
      (0, _jquery2.default)('.validation-error').show().html("<p>Couldn't create level:</p>").append((0, _jquery2.default)("<ul/>").append(Object.keys(errors).map(function (v) {
        return (0, _jquery2.default)("<li/>").text(v + ": " + errors[v]);
      })));
    });
  });
};

/***/ })

},[3371]);