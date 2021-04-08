webpackJsonp([21],{

/***/ 2965:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * DO NOT IMPORT THIS DIRECTLY. Instead do:
 *   ```
 *   import msg from '@cdo/weblab/locale'.
 *   ```
 * This allows the webpack config to determine how locales should be loaded,
 * which is important for making locale setup work seamlessly in tests.
 */
// locale for weblab

exports.default = window.blockly.weblab_locale;
module.exports = exports["default"];

/***/ }),

/***/ 2966:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionType = undefined;
exports.changeFullScreenPreviewOn = changeFullScreenPreviewOn;
exports.changeInspectorOn = changeInspectorOn;

var _utils = __webpack_require__(71);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** @enum {string} */
var ActionType = exports.ActionType = utils.makeEnum('CHANGE_FULL_SCREEN_PREVIEW_ON', 'CHANGE_INSPECTOR_ON');

/**
 * Change the fullScreenPreviewOn state between true or false
 * @param {!Boolean} fullScreenPreviewOn
 * @returns {{type: ActionType, fullScreenPreviewOn: Boolean}}
 */
/** @file Redux action-creators for WebLab.
 *  @see http://redux.js.org/docs/basics/Actions.html */
function changeFullScreenPreviewOn(fullScreenPreviewOn) {
  return {
    type: ActionType.CHANGE_FULL_SCREEN_PREVIEW_ON,
    fullScreenPreviewOn: fullScreenPreviewOn
  };
}

/**
 * Change the inspectorOn state between true or false
 * @param {!Boolean} inspectorOn
 * @returns {{type: ActionType, inspectorOn: Boolean}}
 */
function changeInspectorOn(inspectorOn) {
  return {
    type: ActionType.CHANGE_INSPECTOR_ON,
    inspectorOn: inspectorOn
  };
}

/***/ }),

/***/ 3363:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3364);


/***/ }),

/***/ 3364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _loadWeblab = __webpack_require__(3365);

var _loadWeblab2 = _interopRequireDefault(_loadWeblab);

var _loadApp = __webpack_require__(820);

var _loadApp2 = _interopRequireDefault(_loadApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _loadApp2.default)().then(_loadWeblab2.default);

/***/ }),

/***/ 3365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadweblab;

var _appMain = __webpack_require__(853);

var _appMain2 = _interopRequireDefault(_appMain);

var _StudioApp = __webpack_require__(597);

var _WebLab = __webpack_require__(3366);

var _WebLab2 = _interopRequireDefault(_WebLab);

var _skins = __webpack_require__(744);

var _skins2 = _interopRequireDefault(_skins);

var _levels = __webpack_require__(3369);

var _levels2 = _interopRequireDefault(_levels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadweblab(options) {
  options.skinsModule = _skins2.default;
  options.isEditorless = true;
  options.skinId = 'weblab';
  var weblab = new _WebLab2.default();

  // Bind helper that provides project metadata for gamelab autosave
  // options.getAnimationMetadata = gamelab.getAnimationMetadata.bind(gamelab);

  weblab.injectStudioApp((0, _StudioApp.singleton)());
  (0, _appMain2.default)(weblab, _levels2.default, options);
}
module.exports = exports["default"];

/***/ }),

/***/ 3366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEBLAB_FOOTER_HEIGHT = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _consoleApi = __webpack_require__(1295);

var _consoleApi2 = _interopRequireDefault(_consoleApi);

var _WebLabView = __webpack_require__(3367);

var _WebLabView2 = _interopRequireDefault(_WebLabView);

var _reactRedux = __webpack_require__(53);

var _locale = __webpack_require__(2965);

var _locale2 = _interopRequireDefault(_locale);

var _submitHelper = __webpack_require__(1923);

var _dom = __webpack_require__(594);

var _dom2 = _interopRequireDefault(_dom);

var _reducers = __webpack_require__(3368);

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = __webpack_require__(2966);

var actions = _interopRequireWildcard(_actions);

var _project = __webpack_require__(745);

var _project2 = _interopRequireDefault(_project);

var _redux = __webpack_require__(237);

var _constants = __webpack_require__(216);

var _utils = __webpack_require__(753);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global dashboard */

var filesApi = __webpack_require__(728).files;
var assetListStore = __webpack_require__(1289);
var WEBLAB_FOOTER_HEIGHT = exports.WEBLAB_FOOTER_HEIGHT = 30;

/**
 * An instantiable WebLab class
 */

// Global singleton
var webLab_ = null;

var WebLab = function WebLab() {
  this.skin = null;
  this.level = null;

  /** @type {StudioApp} */
  this.studioApp_ = null;

  _consoleApi2.default.setLogMethod(this.log.bind(this));

  // store reference to singleton
  webLab_ = this;
};

/**
 * Forward a log message to both logger objects.
 * @param {?} object
 */
WebLab.prototype.log = function (object) {
  this.consoleLogger_.log(object);
};

/**
 * Inject the studioApp singleton.
 */
WebLab.prototype.injectStudioApp = function (studioApp) {
  this.studioApp_ = studioApp;
  this.studioApp_.reset = this.reset.bind(this);
};

/**
 * Returns the global singleton. For use by Bramble host to get the Web Lab interface.
 * Set on the window object so that Bramble host can get to it from inside its iframe.
 */
window.getWebLab = function () {
  return webLab_;
};

/**
 * Initialize this WebLab instance.  Called on page load.
 */
WebLab.prototype.init = function (config) {
  var _this = this;

  if (!this.studioApp_) {
    throw new Error("WebLab requires a StudioApp");
  }

  this.skin = config.skin;
  this.level = config.level;
  this.suppliedFilesVersionId = (0, _utils.queryParams)('version');
  this.initialFilesVersionId = this.suppliedFilesVersionId;

  this.brambleHost = null;

  if (this.level.startSources && this.level.startSources.length > 0) {
    try {
      this.startSources = JSON.parse(this.level.startSources);
    } catch (err) {
      console.error("Unable to parse startSources list", err);
    }
  }

  config.usesAssets = true;

  config.makeYourOwn = false;
  config.centerEmbedded = false;
  config.wireframeShare = true;
  config.noHowItWorks = true;

  config.afterClearPuzzle = function (config) {
    return new Promise(function (resolve, reject) {
      // Delete everything from the service and restart the initial sync
      filesApi.deleteAll(function (xhr, filesVersionId) {
        _this.fileEntries = null;
        // Force brambleHost to reload based on startSources
        _this.brambleHost.startInitialFileSync(function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }, true);
      }, function (xhr) {
        console.warn('WebLab: error deleteAll failed: ' + xhr.status);
        reject(new Error(xhr.status));
      });
    });
  };

  config.getCodeAsync = this.getCodeAsync.bind(this);

  config.prepareForRemix = this.prepareForRemix.bind(this);

  // Provide a way for us to have top pane instructions disabled by default, but
  // able to turn them on.
  config.noInstructionsWhenCollapsed = true;

  config.pinWorkspaceToBottom = true;

  config.useFilesApi = true;

  this.loadFileEntries();

  var onMount = function onMount() {
    _this.setupReduxSubscribers((0, _redux.getStore)());

    // TODO: understand if we need to call studioApp
    // Other apps call studioApp.init(). That sets up UI that is not present Web Lab (run, show code, etc) and blows up
    // if we call it. It's not clear there's anything in there we need, although we may discover there is and need to refactor it
    // this.studioApp_.init(config);

    _this.studioApp_.setConfigValues_(config);

    // NOTE: if we called studioApp_.init(), the code here would be executed
    // automatically since pinWorkspaceToBottom is true...
    var container = document.getElementById(config.containerId);
    var bodyElement = document.body;
    bodyElement.style.overflow = "hidden";
    bodyElement.className = bodyElement.className + " pin_bottom";
    container.className = container.className + " pin_bottom";

    // NOTE: if we called studioApp_.init(), these calls would not be needed...
    _this.studioApp_.initProjectTemplateWorkspaceIconCallout();
    _this.studioApp_.alertIfCompletedWhilePairing(config);
    _this.studioApp_.initVersionHistoryUI(config);

    var finishButton = document.getElementById('finishButton');
    if (finishButton) {
      _dom2.default.addClickTouchEvent(finishButton, _this.onFinish.bind(_this, false));
    }

    (0, _submitHelper.initializeSubmitHelper)({
      studioApp: _this.studioApp_,
      onPuzzleComplete: _this.onFinish.bind(_this),
      unsubmitUrl: _this.level.unsubmitUrl
    });
  };

  // Push initial level properties into the Redux store
  this.studioApp_.setPageConstants(config, {
    channelId: config.channel,
    noVisualization: true,
    visualizationInWorkspace: true,
    documentationUrl: 'https://docs.code.org/weblab/',
    isProjectLevel: !!config.level.isProjectLevel,
    isSubmittable: !!config.level.submittable,
    isSubmitted: !!config.level.submitted
  });

  this.readOnly = config.readonlyWorkspace;

  function onAddFileHTML() {
    this.brambleHost.addFileHTML();
  }

  function onAddFileCSS() {
    this.brambleHost.addFileCSS();
  }

  function onAddFileImage() {
    var _this2 = this;

    _project2.default.autosave(function () {
      dashboard.assets.showAssetManager(null, 'image', _this2.loadFileEntries.bind(_this2), {
        showUnderageWarning: !(0, _redux.getStore)().getState().pageConstants.is13Plus,
        useFilesApi: config.useFilesApi
      });
    });
  }

  function onUndo() {
    this.brambleHost.undo();
  }

  function onRedo() {
    this.brambleHost.redo();
  }

  function onRefreshPreview() {
    var _this3 = this;

    _project2.default.autosave(function () {
      _this3.brambleHost.refreshPreview();
    });
  }

  function onStartFullScreenPreview() {
    var _this4 = this;

    this.brambleHost.enableFullscreenPreview(function () {
      // We always want to disable the inspector as we enter fullscreen preview,
      // as it interferes with the preview display...
      if ((0, _redux.getStore)().getState().inspectorOn) {
        _this4.brambleHost.disableInspector();
      }
      (0, _redux.getStore)().dispatch(actions.changeFullScreenPreviewOn(true));
    });
  }

  function onEndFullScreenPreview() {
    this.brambleHost.disableFullscreenPreview(function () {
      (0, _redux.getStore)().dispatch(actions.changeFullScreenPreviewOn(false));
    });
  }

  function onToggleInspector() {
    if ((0, _redux.getStore)().getState().inspectorOn) {
      this.brambleHost.disableInspector();
    } else {
      this.brambleHost.enableInspector();
    }
  }

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: (0, _redux.getStore)() },
    _react2.default.createElement(_WebLabView2.default, {
      onAddFileHTML: onAddFileHTML.bind(this),
      onAddFileCSS: onAddFileCSS.bind(this),
      onAddFileImage: onAddFileImage.bind(this),
      onUndo: onUndo.bind(this),
      onRedo: onRedo.bind(this),
      onRefreshPreview: onRefreshPreview.bind(this),
      onStartFullScreenPreview: onStartFullScreenPreview.bind(this),
      onEndFullScreenPreview: onEndFullScreenPreview.bind(this),
      onToggleInspector: onToggleInspector.bind(this),
      onMount: onMount
    })
  ), document.getElementById(config.containerId));

  window.onbeforeunload = function (evt) {
    if (_project2.default.hasOwnerChangedProject()) {
      return _locale2.default.confirmExitWithUnsavedChanges();
    }
  };
};

WebLab.prototype.onFinish = function (submit) {
  var _this5 = this;

  var onComplete = submit ? _submitHelper.onSubmitComplete : this.studioApp_.onContinue.bind(this.studioApp_);

  _project2.default.autosave(function () {
    _this5.studioApp_.report({
      app: 'weblab',
      level: _this5.level.id,
      result: true,
      testResult: _constants.TestResults.FREE_PLAY,
      program: _this5.getCurrentFilesVersionId() || '',
      submitted: submit,
      onComplete: onComplete
    });
  });
};

WebLab.prototype.getCodeAsync = function () {
  var _this6 = this;

  return new Promise(function (resolve, reject) {
    if (_this6.brambleHost !== null) {
      _this6.brambleHost.syncFiles(function (err) {
        // store our filesVersionId as the "sources"
        resolve(_this6.getCurrentFilesVersionId() || '');
      });
    } else {
      // Bramble not installed yet - we have no code to return
      resolve("");
    }
  });
};

WebLab.prototype.prepareForRemix = function () {
  return new Promise(function (resolve, reject) {
    filesApi.prepareForRemix(resolve);
  });
};

// Called by Bramble to get source files to initialize with
WebLab.prototype.getStartSources = function () {
  return this.startSources;
};

// Called by Bramble to get the current fileEntries
WebLab.prototype.getCurrentFileEntries = function () {
  return this.fileEntries;
};

WebLab.prototype.getCurrentFilesVersionId = function () {
  return _project2.default.filesVersionId || this.initialFilesVersionId;
};

// Called by Bramble when a file has been deleted
WebLab.prototype.deleteProjectFile = function (filename, callback) {
  filesApi.deleteFile(filename, function (xhr) {
    callback(null, _project2.default.filesVersionId);
  }, function (xhr) {
    console.warn('WebLab: error file ' + filename + ' not deleted');
    callback(new Error(xhr.status));
  });
};

// Called by Bramble when a file has been renamed
WebLab.prototype.renameProjectFile = function (filename, newFilename, callback) {
  filesApi.renameFile(filename, newFilename, function (xhr) {
    callback(null, _project2.default.filesVersionId);
  }, function (xhr) {
    console.warn('WebLab: error file ' + filename + ' not renamed');
    callback(new Error(xhr.status));
  });
};

// Called by Bramble when a file has been changed or created
WebLab.prototype.changeProjectFile = function (filename, fileData, callback) {
  filesApi.putFile(filename, fileData, function (xhr) {
    callback(null, _project2.default.filesVersionId);
  }, function (xhr) {
    console.warn('WebLab: error file ' + filename + ' not renamed');
    callback(new Error(xhr.status));
  });
};

/*
 * Called by Bramble when a file has been changed or created
 * @param {Function} hook to be called once before a filesApi write.
 *   hook should be hook(callback) and callback is callback(err)
 */
WebLab.prototype.registerBeforeFirstWriteHook = function (hook) {
  filesApi.registerBeforeFirstWriteHook(hook);
};

// Called by Bramble when project has changed
WebLab.prototype.onProjectChanged = function () {
  if (!this.readOnly) {
    // let dashboard project object know project has changed, which will trigger autosave
    _project2.default.projectChanged();
  }
};

// Called by Bramble when the inspector mode has changed
WebLab.prototype.onInspectorChanged = function (inspectorOn) {
  (0, _redux.getStore)().dispatch(actions.changeInspectorOn(inspectorOn));
};

/*
 * Called by Bramble host to set our reference to its interfaces
 * @param {!Object} bramble host interfaces
 * @return {String} current project path (project id plus initial version)
 */
WebLab.prototype.setBrambleHost = function (obj) {
  this.brambleHost = obj;
  this.brambleHost.onBrambleReady(function () {
    // Enable the Finish/Submit/Unsubmit button if it is present:
    var shareCell = document.getElementById('share-cell');
    if (shareCell) {
      shareCell.className = 'share-cell-enabled';
    }
  });
  this.brambleHost.onProjectChanged(this.onProjectChanged.bind(this));
  this.brambleHost.onInspectorChanged(this.onInspectorChanged.bind(this));
  if (this.suppliedFilesVersionId) {
    return _project2.default.getCurrentId() + '-' + this.suppliedFilesVersionId;
  } else {
    return _project2.default.getCurrentId();
  }
};

// Called by Bramble host to get page constants
WebLab.prototype.getPageConstants = function () {
  return (0, _redux.getStore)().getState().pageConstants;
};

/**
 * Subscribe to state changes on the store.
 * @param {!Store} store
 */
WebLab.prototype.setupReduxSubscribers = function (store) {
  var _this7 = this;

  var state = {};
  store.subscribe(function () {
    var lastState = state;
    state = store.getState();

    if (!lastState.runState || state.runState.isRunning !== lastState.runState.isRunning) {
      _this7.onIsRunningChange(state.runState.isRunning);
    }
  });
};

WebLab.prototype.onIsRunningChange = function () {};

/**
 * Load the file entry list and store it as this.fileEntries
 */
WebLab.prototype.loadFileEntries = function () {
  var _this8 = this;

  filesApi.getFiles(function (result) {
    assetListStore.reset(result.files);
    _this8.fileEntries = assetListStore.list().map(function (fileEntry) {
      return {
        name: fileEntry.filename,
        url: filesApi.basePath(fileEntry.filename),
        versionId: fileEntry.versionId
      };
    });
    var latestFilesVersionId = result.filesVersionId;
    _this8.initialFilesVersionId = _this8.initialFilesVersionId || latestFilesVersionId;

    if (latestFilesVersionId !== _this8.initialFilesVersionId) {
      // After we've detected the first change to the version, we store this
      // version id so that subsequent writes will continue to replace the
      // current version (until the browser page reloads)
      _project2.default.filesVersionId = result.filesVersionId;
    }
    if (_this8.brambleHost) {
      _this8.brambleHost.syncFiles(function () {});
    }
  }, function (xhr) {
    console.error('files API failed, status: ' + xhr.status);
    _this8.fileEntries = null;
  }, this.getCurrentFilesVersionId());
};

/**
 * Reset WebLab to its initial state.
 * @param {boolean} ignore Required by the API but ignored by this
 *     implementation.
 */
WebLab.prototype.reset = function (ignore) {
  // TODO - implement
};

WebLab.prototype.getAppReducers = function () {
  return _reducers2.default;
};

exports.default = WebLab;

/***/ }),

/***/ 3367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _StudioAppWrapper = __webpack_require__(1294);

var _StudioAppWrapper2 = _interopRequireDefault(_StudioAppWrapper);

var _InstructionsWithWorkspace = __webpack_require__(1689);

var _InstructionsWithWorkspace2 = _interopRequireDefault(_InstructionsWithWorkspace);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(2965);

var _locale4 = _interopRequireDefault(_locale3);

var _PaneHeader = __webpack_require__(915);

var _PaneHeader2 = _interopRequireDefault(_PaneHeader);

var _CompletionButton = __webpack_require__(1688);

var _CompletionButton2 = _interopRequireDefault(_CompletionButton);

var _ProjectTemplateWorkspaceIcon = __webpack_require__(1728);

var _ProjectTemplateWorkspaceIcon2 = _interopRequireDefault(_ProjectTemplateWorkspaceIcon);

var _styleConstants = __webpack_require__(593);

var _styleConstants2 = _interopRequireDefault(_styleConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @file Top-level view for WebLab */


/**
 * Top-level React wrapper for WebLab
 */
var WebLabView = function (_React$Component) {
  _inherits(WebLabView, _React$Component);

  function WebLabView() {
    _classCallCheck(this, WebLabView);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  WebLabView.prototype.componentDidMount = function componentDidMount() {
    this.props.onMount();
  };

  WebLabView.prototype.render = function render() {
    var headersHeight = _styleConstants2.default["workspace-headers-height"];
    var iframeHeightOffset = headersHeight + (this.props.isProjectLevel ? 0 : 70);
    var iframeStyles = {
      position: 'absolute',
      width: '100%',
      height: 'calc(100% - ' + iframeHeightOffset + 'px)'
    };

    return _react2.default.createElement(
      _StudioAppWrapper2.default,
      null,
      _react2.default.createElement(
        _InstructionsWithWorkspace2.default,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _PaneHeader2.default,
            { hasFocus: true, id: 'headers' },
            !this.props.isFullScreenPreviewOn && !this.props.isReadOnlyWorkspace && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_PaneHeader.PaneButton, {
                iconClass: 'fa fa-plus-circle',
                leftJustified: true,
                headerHasFocus: true,
                isRtl: false,
                onClick: this.props.onAddFileHTML,
                label: _locale4.default.addHTMLButton()
              }),
              _react2.default.createElement(_PaneHeader.PaneButton, {
                iconClass: 'fa fa-plus-circle',
                leftJustified: true,
                headerHasFocus: true,
                isRtl: false,
                onClick: this.props.onAddFileCSS,
                label: _locale4.default.addCSSButton()
              }),
              _react2.default.createElement(_PaneHeader.PaneButton, {
                iconClass: 'fa fa-plus-circle',
                leftJustified: true,
                headerHasFocus: true,
                isRtl: false,
                onClick: this.props.onAddFileImage,
                label: _locale4.default.addImageButton()
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_PaneHeader.PaneButton, {
                iconClass: this.props.isFullScreenPreviewOn ? "fa fa-compress" : "fa fa-arrows-alt",
                leftJustified: false,
                headerHasFocus: true,
                isRtl: false,
                onClick: this.props.isFullScreenPreviewOn ? this.props.onEndFullScreenPreview : this.props.onStartFullScreenPreview,
                label: ''
              }),
              !this.props.isFullScreenPreviewOn && !this.props.isReadOnlyWorkspace && _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PaneHeader.PaneButton, {
                  id: 'versions-header',
                  iconClass: 'fa fa-clock-o',
                  leftJustified: true,
                  headerHasFocus: true,
                  isRtl: false,
                  label: _locale2.default.showVersionsHeader()
                }),
                _react2.default.createElement(_PaneHeader.PaneButton, {
                  iconClass: 'fa fa-repeat',
                  leftJustified: false,
                  headerHasFocus: true,
                  isRtl: false,
                  onClick: this.props.onRefreshPreview,
                  label: _locale4.default.refreshPreview()
                })
              ),
              !this.props.isFullScreenPreviewOn && _react2.default.createElement(_PaneHeader.PaneButton, {
                iconClass: 'fa fa-mouse-pointer',
                leftJustified: false,
                headerHasFocus: true,
                isPressed: this.props.isInspectorOn,
                pressedLabel: _locale4.default.toggleInspectorOff(),
                isRtl: false,
                onClick: this.props.onToggleInspector,
                label: _locale4.default.toggleInspectorOn()
              }),
              _react2.default.createElement(
                _PaneHeader.PaneSection,
                { id: 'workspace-header' },
                this.props.showProjectTemplateWorkspaceIcon && _react2.default.createElement(_ProjectTemplateWorkspaceIcon2.default, null),
                this.props.isReadOnlyWorkspace && _react2.default.createElement(
                  'span',
                  { id: 'workspace-header-span' },
                  _locale2.default.readonlyWorkspaceHeader()
                )
              )
            )
          ),
          _react2.default.createElement('iframe', {
            className: 'weblab-host',
            src: '/weblab/host',
            frameBorder: '0',
            scrolling: 'no',
            style: iframeStyles
          }),
          !this.props.isProjectLevel && _react2.default.createElement(_CompletionButton2.default, null)
        )
      )
    );
  };

  return WebLabView;
}(_react2.default.Component);

WebLabView.propTypes = {
  isProjectLevel: _react.PropTypes.bool.isRequired,
  isReadOnlyWorkspace: _react.PropTypes.bool.isRequired,
  isInspectorOn: _react.PropTypes.bool.isRequired,
  isFullScreenPreviewOn: _react.PropTypes.bool.isRequired,
  onUndo: _react.PropTypes.func.isRequired,
  onRedo: _react.PropTypes.func.isRequired,
  onRefreshPreview: _react.PropTypes.func.isRequired,
  onStartFullScreenPreview: _react.PropTypes.func.isRequired,
  onEndFullScreenPreview: _react.PropTypes.func.isRequired,
  onToggleInspector: _react.PropTypes.func.isRequired,
  onAddFileHTML: _react.PropTypes.func.isRequired,
  onAddFileCSS: _react.PropTypes.func.isRequired,
  onAddFileImage: _react.PropTypes.func.isRequired,
  onMount: _react.PropTypes.func.isRequired,
  showProjectTemplateWorkspaceIcon: _react.PropTypes.bool.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isProjectLevel: state.pageConstants.isProjectLevel,
    isReadOnlyWorkspace: state.pageConstants.isReadOnlyWorkspace,
    isInspectorOn: state.inspectorOn,
    isFullScreenPreviewOn: state.fullScreenPreviewOn,
    showProjectTemplateWorkspaceIcon: !!state.pageConstants.showProjectTemplateWorkspaceIcon
  };
})(WebLabView);
module.exports = exports['default'];

/***/ }),

/***/ 3368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2966);

function fullScreenPreviewOn(state, action) {
  state = state || false;

  switch (action.type) {
    case _actions.ActionType.CHANGE_FULL_SCREEN_PREVIEW_ON:
      return action.fullScreenPreviewOn;
    default:
      return state;
  }
} /** @file Redux reducer functions for WebLab.
   *  @see http://redux.js.org/docs/basics/Reducers.html */


function inspectorOn(state, action) {
  state = state || false;

  switch (action.type) {
    case _actions.ActionType.CHANGE_INSPECTOR_ON:
      return action.inspectorOn;
    default:
      return state;
  }
}

exports.default = {
  fullScreenPreviewOn: fullScreenPreviewOn,
  inspectorOn: inspectorOn
};
module.exports = exports['default'];

/***/ }),

/***/ 3369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Configuration for all levels.
 */
var levels = module.exports = {};

levels.custom = {};

/***/ })

},[3363]);