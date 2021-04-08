webpackJsonp([14],{

/***/ 1160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var CustomEvalError = __webpack_require__(2890);
var _ = __webpack_require__(82);

/**
 * Throws an exception if val is not of the expected type. Type is either a
 * string (like "number" or "string") or an object (Like EvalImage).
 */
module.exports.ensureString = function (val) {
  return module.exports.ensureType(val, "string");
};

module.exports.ensureNumber = function (val) {
  return module.exports.ensureType(val, "number");
};

/**
 * Style is either "solid", "outline", or a percentage i.e. "70%"
 */
module.exports.ensureStyle = function (val) {
  if (val.slice(-1) === '%') {
    var opacity = module.exports.getOpacity(val);
    if (opacity >= 0 && opacity <= 1.0) {
      return;
    }
  }if (_.includes(['outline', 'solid'], val)) {
    return;
  }
  throw new CustomEvalError(CustomEvalError.Type.BadStyle, val);
};

/**
 * Checks to see if this is a valid color, throwing if it isnt. Color validity
 * is determined by setting the value on an html element and seeing if it takes.
 */
module.exports.ensureColor = function (val) {
  var e = document.createElement('div');
  e.style.color = val;
  // We can't check that e.style.color === val, since some vals will be
  // transformed (i.e. #fff -> rgb(255, 255, 255)
  if (!e.style.color) {
    throw new CustomEvalError(CustomEvalError.Type.BadColor, val);
  }
};

/**
 * @param val
 * @param {string|Class} type
 */
module.exports.ensureType = function (val, type) {
  if (typeof type === "string") {
    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== type) {
      throw new Error("expected type: " + type + "\ngot type: " + (typeof val === 'undefined' ? 'undefined' : _typeof(val)));
    }
  } else if (!(val instanceof type)) {
    throw new Error("unexpected object");
  }
};

module.exports.getFill = function (style, color) {
  if (style === 'outline') {
    return "none";
  }
  // for now, we treat anything we don't recognize as solid.
  return color;
};

module.exports.getStroke = function (style, color) {
  if (style === "outline") {
    return color;
  }
  return "none";
};

/**
 * Get the opacity from the style. Style is a string that is either a word or
 * percentage (i.e. 25%).
 */
module.exports.getOpacity = function (style) {
  var alpha = 1.0;
  if (style.slice(-1) === "%") {
    alpha = parseInt(style.slice(0, -1), 10) / 100;
  }
  return alpha;
};

/**
 * Users specify pixels in a coordinate system where the origin is at the bottom
 * left, and x and y increase as you move right/up. I'm referring to this as
 * the cartesian coordinate system.
 * The pixel coordinate system instead has origin at the top left, and x and y
 * increase as you move right/down.
 */
module.exports.cartesianToPixel = function (cartesianY) {
  return 400 - cartesianY;
};

/***/ }),

/***/ 1273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var evalUtils = __webpack_require__(1160);

var EvalImage = function EvalImage(style, color) {
  // x/y location in pixel space of object's center
  this.x_ = 200;
  this.y_ = 200;

  this.rotation_ = 0;
  this.scaleX_ = 1.0;
  this.scaleY = 1.0;

  this.style_ = style;
  this.color_ = color;
};
module.exports = EvalImage;

EvalImage.prototype.updatePosition = function (x, y) {
  this.x_ = x;
  this.y_ = y;
};

EvalImage.prototype.draw = function (parentElement) {
  if (this.style_ && this.color_) {
    this.element_.setAttribute('fill', evalUtils.getFill(this.style_, this.color_));
    this.element_.setAttribute('stroke', evalUtils.getStroke(this.style_, this.color_));
    this.element_.setAttribute('opacity', evalUtils.getOpacity(this.style_, this.color_));
  }

  var transform = "";
  transform += " translate(" + this.x_ + " " + this.y_ + ")";

  if (this.scaleX_ !== 1.0 || this.scaleY !== 1.0) {
    transform += " scale(" + this.scaleX_ + " " + this.scaleY_ + ")";
  }

  if (this.rotation_ !== 0) {
    transform += " rotate(" + this.rotation_ + ")";
  }

  if (transform === "") {
    this.element_.removeAttribute("transform");
  } else {
    this.element_.setAttribute("transform", transform);
  }
};

EvalImage.prototype.place = function (x, y) {
  this.x_ = x;
  this.y_ = y;
};

EvalImage.prototype.rotate = function (degrees) {
  this.rotation_ += degrees;
};

EvalImage.prototype.scale = function (scaleX, scaleY) {
  this.scaleX_ = scaleX;
  this.scaleY_ = scaleY;
};

/**
 * Get child EvalObjects. overridden by children
 */
EvalImage.prototype.getChildren = function () {
  return [];
};

/***/ }),

/***/ 2890:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var evalMsg = __webpack_require__(2745);

/**
 * An Eval error indicating that something bad happened, but we understand
 * the bad and want our app to handle it (i.e. user used an invalid style
 * string and we want to display an error message).
 */
var CustomEvalError = function CustomEvalError(type, val) {
  this.type = type;

  switch (type) {
    case CustomEvalError.Type.BadStyle:
      this.feedbackMessage = evalMsg.badStyleStringError({ val: val });
      break;
    case CustomEvalError.Type.BadColor:
      this.feedbackMessage = evalMsg.badColorStringError({ val: val });
      break;
    case CustomEvalError.Type.InfiniteRecursion:
      this.feedbackMessage = evalMsg.infiniteRecursionError();
      break;
    case CustomEvalError.Type.UserCodeException:
      this.feedbackMessage = evalMsg.userCodeException();
      break;
    default:
      this.feedbackMessag = '';
      break;
  }
};
module.exports = CustomEvalError;

CustomEvalError.Type = {
  BadStyle: 0,
  BadColor: 1,
  InfiniteRecursion: 2,
  UserCodeException: 3
};

/***/ }),

/***/ 2891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EvalImage = __webpack_require__(1273);
var evalUtils = __webpack_require__(1160);
__webpack_require__(71); // Provides Function.prototype.inherits

var EvalText = function EvalText(text, fontSize, color) {
  evalUtils.ensureString(text);
  evalUtils.ensureNumber(fontSize);
  evalUtils.ensureColor(color);

  EvalImage.apply(this, ['solid', color]);

  this.text_ = text;
  this.fontSize_ = fontSize;

  this.element_ = null;
};
EvalText.inherits(EvalImage);
module.exports = EvalText;

EvalText.prototype.draw = function (parent) {
  if (!this.element_) {
    this.element_ = document.createElementNS(Blockly.SVG_NS, 'text');
    parent.appendChild(this.element_);
  }
  this.element_.textContent = this.text_;
  this.element_.setAttribute('style', 'font-size: ' + this.fontSize_ + 'pt');

  var bbox = this.element_.getBBox();
  // center at origin
  this.element_.setAttribute('x', -bbox.width / 2);
  this.element_.setAttribute('y', -bbox.height / 2);

  EvalImage.prototype.draw.apply(this, arguments);
};

EvalText.prototype.getText = function () {
  return this.text_;
};

/***/ }),

/***/ 3055:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3056);


/***/ }),

/***/ 3056:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadEval = __webpack_require__(3057);

var _loadEval2 = _interopRequireDefault(_loadEval);

var _loadApp = __webpack_require__(820);

var _loadApp2 = _interopRequireDefault(_loadApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _loadApp2.default)().then(_loadEval2.default);

/***/ }),

/***/ 3057:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadEval;

var _appMain = __webpack_require__(853);

var _appMain2 = _interopRequireDefault(_appMain);

var _eval = __webpack_require__(3058);

var _eval2 = _interopRequireDefault(_eval);

var _blocks = __webpack_require__(2892);

var _blocks2 = _interopRequireDefault(_blocks);

var _skins = __webpack_require__(744);

var _skins2 = _interopRequireDefault(_skins);

var _levels = __webpack_require__(3068);

var _levels2 = _interopRequireDefault(_levels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Eval = _eval2.default;
function loadEval(options) {
  options.skinsModule = _skins2.default;
  options.blocksModule = _blocks2.default;
  (0, _appMain2.default)(_eval2.default, _levels2.default, options);
}
module.exports = exports["default"];

/***/ }),

/***/ 3058:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CustomMarshalingInterpreter = __webpack_require__(850);

var _CustomMarshalingInterpreter2 = _interopRequireDefault(_CustomMarshalingInterpreter);

var _redux = __webpack_require__(237);

var _constants = __webpack_require__(216);

var _canvg = __webpack_require__(2116);

var _canvg2 = _interopRequireDefault(_canvg);

__webpack_require__(1724);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Blockly Demo: Eval Graphics
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Eval = module.exports;

/**
 * Create a namespace for the application.
 */
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(32);
var studioApp = __webpack_require__(597).singleton;
var commonMsg = __webpack_require__(40);
var evalMsg = __webpack_require__(2745);

var api = __webpack_require__(3059);
var Provider = __webpack_require__(53).Provider;
var AppView = __webpack_require__(944);
var EvalVisualizationColumn = __webpack_require__(3067);
var dom = __webpack_require__(594);
var blockUtils = __webpack_require__(743);
var CustomEvalError = __webpack_require__(2890);
var EvalText = __webpack_require__(2891);
var utils = __webpack_require__(71);
// tests don't have svgelement


var level;
var skin;

studioApp().setCheckForEmptyBlocks(false);

Eval.CANVAS_HEIGHT = 400;
Eval.CANVAS_WIDTH = 400;

// This property is set in the api call to draw, and extracted in evalCode
Eval.displayedObject = null;

Eval.answerObject = null;

Eval.feedbackImage = null;
Eval.encodedFeedbackImage = null;

/**
 * Initialize Blockly and the Eval.  Called on page load.
 */
Eval.init = function (config) {
  studioApp().runButtonClick = this.runButtonClick.bind(this);

  skin = config.skin;
  level = config.level;

  config.grayOutUndeletableBlocks = true;
  config.forceInsertTopBlock = 'functional_display';
  config.enableShowCode = false;

  // We don't want icons in instructions
  config.skin.staticAvatar = null;
  config.skin.smallStaticAvatar = null;
  config.skin.failureAvatar = null;
  config.skin.winAvatar = null;

  config.loadAudio = function () {
    studioApp().loadAudio(skin.winSound, 'win');
    studioApp().loadAudio(skin.startSound, 'start');
    studioApp().loadAudio(skin.failureSound, 'failure');
  };

  config.afterInject = function () {
    var svg = document.getElementById('svgEval');
    if (!svg) {
      throw "something bad happened";
    }
    svg.setAttribute('width', Eval.CANVAS_WIDTH);
    svg.setAttribute('height', Eval.CANVAS_HEIGHT);

    // This is hack that I haven't been able to fully understand. Furthermore,
    // it seems to break the functional blocks in some browsers. As such, I'm
    // just going to disable the hack for this app.
    Blockly.BROKEN_CONTROL_POINTS = false;

    // Add to reserved word list: API, local variables in execution environment
    // (execute) and the infinite loop detection function.
    Blockly.JavaScript.addReservedWords('Eval,code');

    if (level.coordinateGridBackground) {
      var background = document.getElementById('background');
      background.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', skin.assetUrl('background_grid.png'));
      studioApp().createCoordinateGridBackground({
        svg: 'svgEval',
        origin: -200,
        firstLabel: -100,
        lastLabel: 100,
        increment: 100
      });
      background.setAttribute('visibility', 'visible');
    }

    if (level.solutionBlocks) {
      var solutionBlocks = blockUtils.forceInsertTopBlock(level.solutionBlocks, config.forceInsertTopBlock);

      var answerObject = getDrawableFromBlockXml(solutionBlocks);
      if (answerObject && answerObject.draw) {
        // store object for later analysis
        Eval.answerObject = answerObject;
        answerObject.draw(document.getElementById('answer'));
      }
    }

    // Adjust visualizationColumn width.
    var visualizationColumn = document.getElementById('visualizationColumn');
    visualizationColumn.style.width = '400px';

    // base's studioApp().resetButtonClick will be called first
    var resetButton = document.getElementById('resetButton');
    dom.addClickTouchEvent(resetButton, Eval.resetButtonClick);

    if (Blockly.contractEditor) {
      Blockly.contractEditor.registerTestHandler(getEvalExampleFailure);
      Blockly.contractEditor.registerTestResetHandler(resetExampleDisplay);
    }
  };

  studioApp().setPageConstants(config);

  ReactDOM.render(React.createElement(
    Provider,
    { store: (0, _redux.getStore)() },
    React.createElement(AppView, {
      visualizationColumn: React.createElement(EvalVisualizationColumn, null),
      onMount: studioApp().init.bind(studioApp(), config)
    })
  ), document.getElementById(config.containerId));
};

/**
 * @param {Blockly.Block}
 * @param {boolean} [evaluateInPlayspace] True if this test should also show
 *   evaluation in the play space
 * @returns {string} Error string, or null if success
 */
function getEvalExampleFailure(exampleBlock, evaluateInPlayspace) {
  if (evaluateInPlayspace) {
    studioApp().resetButtonClick();
    Eval.resetButtonClick();
    Eval.clearCanvasWithID('user');
  }

  clearTestCanvases();
  displayCallAndExample();

  var failure;
  try {
    var actualBlock = exampleBlock.getInputTargetBlock("ACTUAL");
    var expectedBlock = exampleBlock.getInputTargetBlock("EXPECTED");
    var actualDrawer = getDrawableFromBlock(actualBlock);
    var expectedDrawer = getDrawableFromBlock(expectedBlock);

    studioApp().feedback_.throwOnInvalidExampleBlocks(actualBlock, expectedBlock);

    if (!actualDrawer || actualDrawer instanceof CustomEvalError) {
      throw new Error('Invalid Call Block');
    }

    if (!expectedDrawer || expectedDrawer instanceof CustomEvalError) {
      throw new Error('Invalid Result Block');
    }

    actualDrawer.draw(document.getElementById("test-call"));
    expectedDrawer.draw(document.getElementById("test-result"));

    failure = canvasesMatch('test-call', 'test-result') ? null : "Does not match definition";
  } catch (error) {
    failure = "Execution error: " + error.message;
  }

  if (evaluateInPlayspace) {
    showOnlyExample();
  } else {
    resetExampleDisplay();
  }
  return failure;
}

function clearTestCanvases() {
  Eval.clearCanvasWithID("test-call");
  Eval.clearCanvasWithID("test-result");
}

function resetExampleDisplay() {
  document.getElementById('answer').style.display = 'block';
  document.getElementById('test-call').style.display = 'none';
  document.getElementById('test-result').style.display = 'none';
}

function showOnlyExample() {
  document.getElementById('answer').style.display = 'none';
  document.getElementById('test-call').style.display = 'none';
  document.getElementById('test-result').style.display = 'block';
}

function displayCallAndExample() {
  document.getElementById('answer').style.display = 'none';
  document.getElementById('test-call').style.display = 'block';
  document.getElementById('test-result').style.display = 'block';
}

/**
 * Click the run button.  Start the program.
 */
Eval.runButtonClick = function () {
  studioApp().toggleRunReset('reset');
  Blockly.mainBlockSpace.traceOn(true);
  studioApp().attempts++;
  Eval.execute();
};

Eval.clearCanvasWithID = function (canvasID) {
  var element = document.getElementById(canvasID);
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
/**
 * App specific reset button click logic.  studioApp().resetButtonClick will be
 * called first.
 */
Eval.resetButtonClick = function () {
  resetExampleDisplay();
  Eval.clearCanvasWithID('user');
  Eval.feedbackImage = null;
  Eval.encodedFeedbackImage = null;
  Eval.result = _constants.ResultType.UNSET;
  Eval.testResults = _constants.TestResults.NO_TESTS_RUN;
  Eval.message = undefined;
};

/**
 * Evaluates user code, catching any exceptions.
 * @return {EvalImage|CustomEvalError} EvalImage on success, CustomEvalError on
 *  handleable failure, null on unexpected failure.
 */
function evalCode(code) {
  try {
    _CustomMarshalingInterpreter2.default.evalWith(code, {
      Eval: api
    }, { legacy: true });

    var object = Eval.displayedObject;
    Eval.displayedObject = null;
    return object;
  } catch (e) {
    if (e instanceof CustomEvalError) {
      return e;
    }
    if (utils.isInfiniteRecursionError(e)) {
      return new CustomEvalError(CustomEvalError.Type.InfiniteRecursion, null);
    }

    // call window.onerror so that we get new relic collection.  prepend with
    // UserCode so that it's clear this is in eval'ed code.
    if (window.onerror) {
      window.onerror("UserCode:" + e.message, document.URL, 0);
    }
    if (console && console.log) {
      console.log(e);
    }

    return new CustomEvalError(CustomEvalError.Type.UserCodeException, null);
  }
}

/**
 * Get a drawable EvalImage from the blocks currently in the workspace
 * @return {EvalImage|CustomEvalError}
 */
function getDrawableFromBlockspace() {
  var code = Blockly.Generator.blockSpaceToCode('JavaScript', ['functional_display', 'functional_definition']);
  var result = evalCode(code);
  return result;
}

function getDrawableFromBlock(block) {
  var definitionCode = Blockly.Generator.blockSpaceToCode('JavaScript', ['functional_definition']);
  var blockCode = Blockly.Generator.blocksToCode('JavaScript', [block]);
  var lines = blockCode.split('\n');
  var lastLine = lines.slice(-1)[0];
  var lastLineWithDisplay = "Eval.display(" + lastLine + ");";
  var blockCodeDisplayed = lines.slice(0, -1).join('\n') + lastLineWithDisplay;
  var result = evalCode(definitionCode + '; ' + blockCodeDisplayed);
  return result;
}

/**
 * Generates a drawable EvalImage from the blocks in the workspace. If blockXml
 * is provided, temporarily sticks those blocks into the workspace to generate
 * the evalImage, then deletes blocks.
 * @return {EvalImage|CustomEvalError}
 */
function getDrawableFromBlockXml(blockXml) {
  if (Blockly.mainBlockSpace.getTopBlocks().length !== 0) {
    throw new Error("getDrawableFromBlocks shouldn't be called with blocks if " + "we already have blocks in the workspace");
  }
  // Temporarily put the blocks into the workspace so that we can generate code
  studioApp().loadBlocks(blockXml);

  var result = getDrawableFromBlockspace();

  // Remove the blocks
  Blockly.mainBlockSpace.getTopBlocks().forEach(function (b) {
    b.dispose();
  });

  return result;
}

/**
 * Recursively parse an EvalObject looking for EvalText objects. For each one,
 * extract the text content.
 */
Eval.getTextStringsFromObject_ = function (evalObject) {
  if (!evalObject) {
    return [];
  }

  var strs = [];
  if (evalObject instanceof EvalText) {
    strs.push(evalObject.getText());
  }

  evalObject.getChildren().forEach(function (child) {
    strs = strs.concat(Eval.getTextStringsFromObject_(child));
  });
  return strs;
};

/**
 * @returns True if two eval objects have sets of text strings that differ
 *   only in case
 */
Eval.haveCaseMismatch_ = function (object1, object2) {
  var strs1 = Eval.getTextStringsFromObject_(object1);
  var strs2 = Eval.getTextStringsFromObject_(object2);

  if (strs1.length !== strs2.length) {
    return false;
  }

  strs1.sort();
  strs2.sort();

  var caseMismatch = false;

  for (var i = 0; i < strs1.length; i++) {
    var str1 = strs1[i];
    var str2 = strs2[i];
    if (str1 !== str2) {
      if (str1.toLowerCase() === str2.toLowerCase()) {
        caseMismatch = true;
      } else {
        return false; // strings differ by more than case
      }
    }
  }
  return caseMismatch;
};

/**
 * Note: is unable to distinguish from true/false generated from string blocks
 *   vs. from boolean blocks
 * @returns {boolean} True if two eval objects are both booleans, but have different values.
 */
Eval.haveBooleanMismatch_ = function (object1, object2) {
  var strs1 = Eval.getTextStringsFromObject_(object1);
  var strs2 = Eval.getTextStringsFromObject_(object2);

  if (strs1.length !== 1 || strs2.length !== 1) {
    return false;
  }

  var text1 = strs1[0];
  var text2 = strs2[0];

  if (text1 === "true" && text2 === "false" || text1 === "false" && text2 === "true") {
    return true;
  }

  return false;
};

/**
 * Execute the user's code.  Heaven help us...
 */
Eval.execute = function () {
  Eval.result = _constants.ResultType.UNSET;
  Eval.testResults = _constants.TestResults.NO_TESTS_RUN;
  Eval.message = undefined;

  if (studioApp().hasUnfilledFunctionalBlock()) {
    Eval.result = false;
    Eval.testResults = _constants.TestResults.EMPTY_FUNCTIONAL_BLOCK;
    Eval.message = studioApp().getUnfilledFunctionalBlockError('functional_display');
  } else if (studioApp().hasQuestionMarksInNumberField()) {
    Eval.result = false;
    Eval.testResults = _constants.TestResults.QUESTION_MARKS_IN_NUMBER_FIELD;
  } else if (studioApp().hasEmptyFunctionOrVariableName()) {
    Eval.result = false;
    Eval.testResults = _constants.TestResults.EMPTY_FUNCTION_NAME;
    Eval.message = commonMsg.unnamedFunction();
  } else {
    clearTestCanvases();
    resetExampleDisplay();
    var userObject = getDrawableFromBlockspace();
    if (userObject && userObject.draw) {
      userObject.draw(document.getElementById("user"));
    }

    // If we got a CustomEvalError, set error message appropriately.
    if (userObject instanceof CustomEvalError) {
      Eval.result = false;
      Eval.testResults = _constants.TestResults.APP_SPECIFIC_FAIL;
      Eval.message = userObject.feedbackMessage;
    } else if (Eval.haveCaseMismatch_(userObject, Eval.answerObject)) {
      Eval.result = false;
      Eval.testResults = _constants.TestResults.APP_SPECIFIC_FAIL;
      Eval.message = evalMsg.stringMismatchError();
    } else if (Eval.haveBooleanMismatch_(userObject, Eval.answerObject)) {
      Eval.result = false;
      Eval.testResults = _constants.TestResults.APP_SPECIFIC_FAIL;
      Eval.message = evalMsg.wrongBooleanError();
    } else {
      Eval.checkExamples_();

      // Haven't run into any errors. Do our actual comparison
      if (Eval.result === _constants.ResultType.UNSET) {
        Eval.result = canvasesMatch('user', 'answer');
        Eval.testResults = studioApp().getTestResults(Eval.result);
      }

      if (level.freePlay) {
        Eval.result = true;
        Eval.testResults = _constants.TestResults.FREE_PLAY;
      }
    }
  }

  var xml = Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace);
  var textBlocks = Blockly.Xml.domToText(xml);

  var reportData = {
    app: 'eval',
    level: level.id,
    result: Eval.result,
    testResult: Eval.testResults,
    program: encodeURIComponent(textBlocks),
    onComplete: onReportComplete,
    image: Eval.encodedFeedbackImage
  };

  // don't try it if function is not defined, which should probably only be
  // true in our test environment
  if (typeof document.getElementById('svgEval').toDataURL === 'undefined') {
    studioApp().report(reportData);
  } else {
    document.getElementById('svgEval').toDataURL("image/png", {
      callback: function callback(pngDataUrl) {
        Eval.feedbackImage = pngDataUrl;
        Eval.encodedFeedbackImage = encodeURIComponent(Eval.feedbackImage.split(',')[1]);

        studioApp().report(reportData);
      }
    });
  }

  studioApp().playAudio(Eval.result ? 'win' : 'failure');

  if (!Eval.result && level.isProjectLevel) {
    // In projects mode, report callback is never called. In the case of a
    // failure, immediately display any feedback.
    displayFeedback();
  }
};

Eval.checkExamples_ = function (resetPlayspace) {
  if (!level.examplesRequired) {
    return;
  }

  var exampleless = studioApp().getFunctionWithoutTwoExamples();
  if (exampleless) {
    Eval.result = false;
    Eval.testResults = _constants.TestResults.EXAMPLE_FAILED;
    Eval.message = commonMsg.emptyExampleBlockErrorMsg({ functionName: exampleless });
    return;
  }

  var unfilled = studioApp().getUnfilledFunctionalExample();
  if (unfilled) {
    Eval.result = false;
    Eval.testResults = _constants.TestResults.EXAMPLE_FAILED;

    var name = unfilled.getRootBlock().getInputTargetBlock('ACTUAL').getTitleValue('NAME');
    Eval.message = commonMsg.emptyExampleBlockErrorMsg({ functionName: name });
    return;
  }

  var failingBlockName = studioApp().checkForFailingExamples(getEvalExampleFailure);
  if (failingBlockName) {
    // Clear user canvas, as this is meant to be a pre-execution failure
    Eval.clearCanvasWithID('user');
    Eval.result = false;
    Eval.testResults = _constants.TestResults.EXAMPLE_FAILED;
    Eval.message = commonMsg.exampleErrorMessage({ functionName: failingBlockName });
    return;
  }
};

/**
 * Calling outerHTML on svg elements in safari does not work. Instead we stick
 * it inside a div and get that div's inner html.
 */
function outerHTML(element) {
  var div = document.createElement('div');
  div.appendChild(element.cloneNode(true));
  return div.innerHTML;
}

function imageDataForSvg(elementId) {
  var canvas = document.createElement('canvas');
  canvas.width = Eval.CANVAS_WIDTH;
  canvas.height = Eval.CANVAS_HEIGHT;
  (0, _canvg2.default)(canvas, outerHTML(document.getElementById(elementId)));

  // canvg attaches an svg object to the canvas, and attaches a setInterval.
  // We don't need this, and that blocks our node process from exitting in
  // tests, so stop it.
  canvas.svg.stop();

  var ctx = canvas.getContext('2d');
  return ctx.getImageData(0, 0, Eval.CANVAS_WIDTH, Eval.CANVAS_HEIGHT);
}

/**
 * Compares the contents of two SVG elements by id
 * @param {string} canvasA ID of canvas
 * @param {string} canvasB ID of canvas
 * @returns {boolean}
 */
function canvasesMatch(canvasA, canvasB) {
  // Compare the solution and user canvas
  var imageDataA = imageDataForSvg(canvasA);
  var imageDataB = imageDataForSvg(canvasB);

  for (var i = 0; i < imageDataA.data.length; i++) {
    if (0 !== Math.abs(imageDataA.data[i] - imageDataB.data[i])) {
      return false;
    }
  }
  return true;
}

/**
 * App specific displayFeedback function that calls into
 * studioApp().displayFeedback when appropriate
 */
var displayFeedback = function displayFeedback(response) {
  if (Eval.result === _constants.ResultType.UNSET) {
    // This can happen if we hit reset before our dialog popped up.
    return;
  }

  // override extra top blocks message
  level.extraTopBlocks = evalMsg.extraTopBlocks();

  var tryAgainText;
  if (level.freePlay) {
    tryAgainText = commonMsg.keepPlaying();
  }

  var options = {
    app: 'eval',
    skin: skin.id,
    feedbackType: Eval.testResults,
    response: response,
    level: level,
    tryAgainText: tryAgainText,
    continueText: level.freePlay ? commonMsg.nextPuzzle() : undefined,
    showingSharing: !level.disableSharing && level.freePlay,
    // allow users to save freeplay levels to their gallery
    saveToLegacyGalleryUrl: level.freePlay && Eval.response && Eval.response.save_to_gallery_url,
    feedbackImage: Eval.feedbackImage,
    appStrings: {
      reinfFeedbackMsg: evalMsg.reinfFeedbackMsg({ backButton: tryAgainText })
    }
  };
  if (Eval.message && !level.edit_blocks) {
    options.message = Eval.message;
  }
  studioApp().displayFeedback(options);
};

/**
 * Function to be called when the service report call is complete
 * @param {object} JSON response (if available)
 */
function onReportComplete(response) {
  // Disable the run button until onReportComplete is called.
  var runButton = document.getElementById('runButton');
  runButton.disabled = false;

  // Add a short delay so that user gets to see their finished drawing.
  setTimeout(function () {
    displayFeedback(response);
  }, 2000);
}

/***/ }),

/***/ 3059:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var color = __webpack_require__(44);
var evalUtils = __webpack_require__(1160);
var EvalImage = __webpack_require__(1273);
var EvalCircle = __webpack_require__(3060);
var EvalTriangle = __webpack_require__(3061);
var EvalMulti = __webpack_require__(3062);
var EvalRect = __webpack_require__(3063);
var EvalEllipse = __webpack_require__(3064);
var EvalText = __webpack_require__(2891);
var EvalStar = __webpack_require__(3065);
var EvalPolygon = __webpack_require__(3066);

// We don't use blockId at all in Eval since everything is evaluated at once.

exports.display = function (object) {
  if (object === undefined) {
    object = "";
  }

  // call tolocaleString on numbers so that we get commas for large numbers
  if (typeof object === 'number' && object.toLocaleString) {
    object = object.toLocaleString();
  }

  if (!object.draw) {
    object = new EvalText(object.toString(), 12, color.black);
  }
  Eval.displayedObject = object;
};

exports.circle = function (size, style, color) {
  return new EvalCircle(size, style, color);
};

exports.triangle = function (size, style, color) {
  return new EvalTriangle(size, style, color);
};

exports.overlay = function (top, bottom) {
  return new EvalMulti(top, bottom);
};

exports.underlay = function (bottom, top) {
  return new EvalMulti(top, bottom);
};

exports.square = function (size, style, color) {
  return new EvalRect(size, size, style, color);
};

exports.rectangle = function (width, height, style, color) {
  return new EvalRect(width, height, style, color);
};

exports.ellipse = function (width, height, style, color) {
  return new EvalEllipse(width, height, style, color);
};

exports.text = function (text, fontSize, color) {
  return new EvalText(text, fontSize, color);
};

exports.star = function (radius, style, color) {
  var innerRadius = (3 - Math.sqrt(5)) / 2 * radius;
  return new EvalStar(5, innerRadius, radius, style, color);
};

exports.radialStar = function (points, inner, outer, style, color) {
  return new EvalStar(points, inner, outer, style, color);
};

exports.polygon = function (points, length, style, color) {
  return new EvalPolygon(points, length, style, color);
};

exports.placeImage = function (x, y, image) {
  evalUtils.ensureNumber(x);
  evalUtils.ensureNumber(y);
  evalUtils.ensureType(image, EvalImage);

  // origin at center
  x = x + Eval.CANVAS_WIDTH / 2;
  y = y + Eval.CANVAS_HEIGHT / 2;

  // User inputs y in cartesian space. Convert to pixel space before sending
  // to our EvalImage.
  y = evalUtils.cartesianToPixel(y);

  // relative to center of workspace
  image.place(x, y);
  return image;
};

exports.offset = function (x, y, image) {
  evalUtils.ensureNumber(x);
  evalUtils.ensureNumber(y);
  evalUtils.ensureType(image, EvalImage);

  x = image.x_ + x;
  y = image.y_ - y;

  image.place(x, y);
  return image;
};

exports.rotateImage = function (degrees, image) {
  evalUtils.ensureNumber(degrees);

  image.rotate(degrees);
  return image;
};

exports.scaleImage = function (factor, image) {
  image.scale(factor, factor);
  return image;
};

exports.stringAppend = function (first, second) {
  evalUtils.ensureString(first);
  evalUtils.ensureString(second);

  return first + second;
};

// polling for values
exports.stringLength = function (str) {
  evalUtils.ensureString(str);

  return str.length;
};

/***/ }),

/***/ 3060:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EvalImage = __webpack_require__(1273);
var evalUtils = __webpack_require__(1160);
__webpack_require__(71); // Provides Function.prototype.inherits

var EvalCircle = function EvalCircle(radius, style, color) {
  evalUtils.ensureNumber(radius);
  evalUtils.ensureStyle(style);
  evalUtils.ensureColor(color);

  EvalImage.apply(this, [style, color]);

  this.radius_ = radius;

  this.element_ = null;
};
EvalCircle.inherits(EvalImage);
module.exports = EvalCircle;

EvalCircle.prototype.draw = function (parent) {
  if (!this.element_) {
    this.element_ = document.createElementNS(Blockly.SVG_NS, 'circle');
    parent.appendChild(this.element_);
  }
  this.element_.setAttribute('cx', 0);
  this.element_.setAttribute('cy', 0);
  this.element_.setAttribute('r', this.radius_);

  EvalImage.prototype.draw.apply(this, arguments);
};

EvalCircle.prototype.rotate = function () {
  // No-op. Rotating the circle svg gives us some problems when we convert to
  // a bitmap.
};

/***/ }),

/***/ 3061:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EvalImage = __webpack_require__(1273);
var evalUtils = __webpack_require__(1160);
__webpack_require__(71); // Provides Function.prototype.inherits

var EvalTriangle = function EvalTriangle(edge, style, color) {
  evalUtils.ensureNumber(edge);
  evalUtils.ensureStyle(style);
  evalUtils.ensureColor(color);

  EvalImage.apply(this, [style, color]);

  this.edge_ = edge;

  this.element_ = null;
};
EvalTriangle.inherits(EvalImage);
module.exports = EvalTriangle;

EvalTriangle.prototype.draw = function (parent) {
  if (!this.element_) {
    this.element_ = document.createElementNS(Blockly.SVG_NS, 'polygon');
    parent.appendChild(this.element_);
  }

  // center at 0, 0 (allowing transforms to move it around)
  // the center is halfway between width, and a third of the way up the height
  var height = Math.sqrt(3) / 2 * this.edge_;

  var bottomLeft = {
    x: -this.edge_ / 2,
    y: height / 3
  };

  var bottomRight = {
    x: this.edge_ / 2,
    y: height / 3
  };

  var top = {
    x: 0,
    y: -height * 2 / 3
  };

  this.element_.setAttribute('points', bottomLeft.x + ',' + bottomLeft.y + ' ' + bottomRight.x + ',' + bottomRight.y + ' ' + top.x + ',' + top.y);

  EvalImage.prototype.draw.apply(this, arguments);
};

/***/ }),

/***/ 3062:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EvalImage = __webpack_require__(1273);
var evalUtils = __webpack_require__(1160);
__webpack_require__(71); // Provides Function.prototype.inherits

var EvalMulti = function EvalMulti(image1, image2) {
  evalUtils.ensureType(image1, EvalImage);
  evalUtils.ensureType(image2, EvalImage);

  EvalImage.apply(this);

  this.image1_ = image1;
  this.image2_ = image2;

  // we want an object centered at 0, 0 that we can then apply transforms to.
  // to accomplish this, we need to adjust the children's x/y's to be relative
  // to us
  var deltaX, deltaY;
  deltaX = this.image1_.x_ - this.x_;
  deltaY = this.image1_.y_ - this.y_;
  this.image1_.updatePosition(deltaX, deltaY);
  deltaX = this.image2_.x_ - this.x_;
  deltaY = this.image2_.y_ - this.y_;
  this.image2_.updatePosition(deltaX, deltaY);

  this.element_ = null;
};
EvalMulti.inherits(EvalImage);
module.exports = EvalMulti;

EvalMulti.prototype.draw = function (parent) {
  if (!this.element_) {
    this.element_ = document.createElementNS(Blockly.SVG_NS, 'g');
    parent.appendChild(this.element_);
  }

  this.image2_.draw(this.element_);
  this.image1_.draw(this.element_);

  EvalImage.prototype.draw.apply(this, arguments);
};

EvalImage.prototype.getChildren = function () {
  return [this.image1_, this.image2_];
};

/***/ }),

/***/ 3063:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EvalImage = __webpack_require__(1273);
var evalUtils = __webpack_require__(1160);
__webpack_require__(71); // Provides Function.prototype.inherits

var EvalRect = function EvalRect(width, height, style, color) {
  evalUtils.ensureNumber(width);
  evalUtils.ensureNumber(height);
  evalUtils.ensureStyle(style);
  evalUtils.ensureColor(color);

  EvalImage.apply(this, [style, color]);

  this.width_ = width;
  this.height_ = height;

  this.element_ = null;
};
EvalRect.inherits(EvalImage);
module.exports = EvalRect;

EvalRect.prototype.draw = function (parent) {
  if (!this.element_) {
    this.element_ = document.createElementNS(Blockly.SVG_NS, 'rect');
    parent.appendChild(this.element_);
  }

  // center rect at 0, 0. we'll use transforms to move it.
  this.element_.setAttribute('x', -this.width_ / 2);
  this.element_.setAttribute('y', -this.height_ / 2);
  this.element_.setAttribute('width', this.width_);
  this.element_.setAttribute('height', this.height_);

  EvalImage.prototype.draw.apply(this, arguments);
};

/***/ }),

/***/ 3064:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EvalImage = __webpack_require__(1273);
var evalUtils = __webpack_require__(1160);
__webpack_require__(71); // Provides Function.prototype.inherits

var EvalCircle = function EvalCircle(width, height, style, color) {
  evalUtils.ensureNumber(width);
  evalUtils.ensureNumber(height);
  evalUtils.ensureStyle(style);
  evalUtils.ensureColor(color);

  EvalImage.apply(this, [style, color]);

  this.width_ = width;
  this.height_ = height;

  this.element_ = null;
};
EvalCircle.inherits(EvalImage);
module.exports = EvalCircle;

EvalCircle.prototype.draw = function (parent) {
  if (!this.element_) {
    this.element_ = document.createElementNS(Blockly.SVG_NS, 'ellipse');
    parent.appendChild(this.element_);
  }
  this.element_.setAttribute('cx', 0);
  this.element_.setAttribute('cy', 0);
  this.element_.setAttribute('rx', this.width_ / 2);
  this.element_.setAttribute('ry', this.height_ / 2);

  EvalImage.prototype.draw.apply(this, arguments);
};

/***/ }),

/***/ 3065:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EvalImage = __webpack_require__(1273);
var evalUtils = __webpack_require__(1160);
__webpack_require__(71); // Provides Function.prototype.inherits

var EvalStar = function EvalStar(pointCount, inner, outer, style, color) {
  evalUtils.ensureNumber(pointCount);
  evalUtils.ensureNumber(inner);
  evalUtils.ensureNumber(outer);
  evalUtils.ensureStyle(style);
  evalUtils.ensureColor(color);

  EvalImage.apply(this, [style, color]);

  this.outer_ = outer;
  this.inner_ = inner;
  this.pointCount_ = pointCount;

  this.element_ = null;
};
EvalStar.inherits(EvalImage);
module.exports = EvalStar;

EvalStar.prototype.draw = function (parent) {
  if (!this.element_) {
    this.element_ = document.createElementNS(Blockly.SVG_NS, 'polygon');
    parent.appendChild(this.element_);
  }

  var points = [];
  var outerRadius = this.outer_;
  var innerRadius = this.inner_;

  var angleDelta = 2 * Math.PI / this.pointCount_;
  for (var angle = 0; angle < 2 * Math.PI; angle += angleDelta) {
    points.push(outerRadius * Math.cos(angle) + "," + outerRadius * Math.sin(angle));
    points.push(innerRadius * Math.cos(angle + angleDelta / 2) + "," + innerRadius * Math.sin(angle + angleDelta / 2));
  }

  this.element_.setAttribute('points', points.join(' '));
  if (this.pointCount_ % 2 === 1) {
    this.rotate(-90 / this.pointCount_);
  }

  EvalImage.prototype.draw.apply(this, arguments);
};

/***/ }),

/***/ 3066:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EvalImage = __webpack_require__(1273);
var evalUtils = __webpack_require__(1160);
__webpack_require__(71); // Provides Function.prototype.inherits

var EvalPolygon = function EvalPolygon(sideCount, length, style, color) {
  evalUtils.ensureNumber(sideCount);
  evalUtils.ensureNumber(length);
  evalUtils.ensureStyle(style);
  evalUtils.ensureColor(color);

  EvalImage.apply(this, [style, color]);

  this.radius_ = length / (2 * Math.sin(Math.PI / sideCount));
  this.pointCount_ = sideCount;

  this.element_ = null;
};
EvalPolygon.inherits(EvalImage);
module.exports = EvalPolygon;

EvalPolygon.prototype.draw = function (parent) {
  if (!this.element_) {
    this.element_ = document.createElementNS(Blockly.SVG_NS, 'polygon');
    parent.appendChild(this.element_);
  }

  var points = [];
  var radius = this.radius_;

  var angle = 2 * Math.PI / this.pointCount_;
  for (var i = 1; i <= this.pointCount_; i++) {
    points.push(radius * Math.cos(i * angle) + "," + radius * Math.sin(i * angle));
  }

  this.element_.setAttribute('points', points.join(' '));

  EvalImage.prototype.draw.apply(this, arguments);
};

/***/ }),

/***/ 3067:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ProtectedVisualizationDiv = __webpack_require__(788);

var _ProtectedVisualizationDiv2 = _interopRequireDefault(_ProtectedVisualizationDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msg = __webpack_require__(40);

var GameButtons = __webpack_require__(819).default;
var BelowVisualization = __webpack_require__(824);


var EvalVisualizationColumn = function EvalVisualizationColumn() {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      _ProtectedVisualizationDiv2.default,
      null,
      _react2.default.createElement(
        'svg',
        { version: '1.1', id: 'svgEval' },
        _react2.default.createElement('image', { id: 'background', height: '400', width: '400', x: '0', y: '0' }),
        _react2.default.createElement('g', { id: 'answer' }),
        _react2.default.createElement('g', { id: 'user' }),
        _react2.default.createElement('g', { id: 'test-call' }),
        _react2.default.createElement('g', { id: 'test-result' })
      )
    ),
    _react2.default.createElement(
      GameButtons,
      null,
      _react2.default.createElement(
        'button',
        { id: 'continueButton', className: 'launch hide float-right' },
        _react2.default.createElement('img', { src: '/blockly/media/1x1.gif' }),
        msg.continue()
      )
    ),
    _react2.default.createElement(BelowVisualization, null)
  );
};

module.exports = EvalVisualizationColumn;

/***/ }),

/***/ 3068:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var blockUtils = __webpack_require__(743);

/**
 * Information about level-specific requirements.
 */
module.exports = {
  'eval1': {
    solutionBlocks: blockUtils.mathBlockXml('functional_star', {
      'COLOR': blockUtils.mathBlockXml('functional_string', null, { VAL: 'green' }),
      'STYLE': blockUtils.mathBlockXml('functional_string', null, { VAL: 'solid' }),
      'SIZE': blockUtils.mathBlockXml('functional_math_number', null, { NUM: 200 })
    }),
    ideal: Infinity,
    toolbox: blockUtils.createToolbox(blockUtils.blockOfType('functional_plus') + blockUtils.blockOfType('functional_minus') + blockUtils.blockOfType('functional_times') + blockUtils.blockOfType('functional_dividedby') + blockUtils.blockOfType('functional_math_number') + blockUtils.blockOfType('functional_string') + blockUtils.blockOfType('functional_style') + blockUtils.blockOfType('functional_circle') + blockUtils.blockOfType('functional_triangle') + blockUtils.blockOfType('functional_square') + blockUtils.blockOfType('functional_rectangle') + blockUtils.blockOfType('functional_ellipse') + blockUtils.blockOfType('functional_star') + blockUtils.blockOfType('functional_radial_star') + blockUtils.blockOfType('functional_polygon') + blockUtils.blockOfType('place_image') + blockUtils.blockOfType('offset') + blockUtils.blockOfType('overlay') + blockUtils.blockOfType('underlay') + blockUtils.blockOfType('rotate') + blockUtils.blockOfType('scale') + blockUtils.blockOfType('functional_text') + blockUtils.blockOfType('string_append') + blockUtils.blockOfType('string_length') + blockUtils.blockOfType('functional_greater_than') + blockUtils.blockOfType('functional_less_than') + blockUtils.blockOfType('functional_number_equals') + blockUtils.blockOfType('functional_string_equals') + blockUtils.blockOfType('functional_logical_and') + blockUtils.blockOfType('functional_logical_or') + blockUtils.blockOfType('functional_logical_not') + blockUtils.blockOfType('functional_boolean')),
    startBlocks: blockUtils.mathBlockXml('functional_star', {
      'COLOR': blockUtils.mathBlockXml('functional_string', null, { VAL: 'black' }),
      'STYLE': blockUtils.mathBlockXml('functional_string', null, { VAL: 'solid' }),
      'SIZE': blockUtils.mathBlockXml('functional_math_number', null, { NUM: 200 })
    }),
    requiredBlocks: '',
    freePlay: false
  },

  'custom': {
    answer: '',
    ideal: Infinity,
    toolbox: '',
    startBlocks: '',
    requiredBlocks: '',
    freePlay: false
  }
};

/***/ })

},[3055]);