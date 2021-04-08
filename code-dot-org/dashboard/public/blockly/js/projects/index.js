webpackJsonp([30],{

/***/ 3442:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3443);


/***/ }),

/***/ 3443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(53);

var _redux = __webpack_require__(237);

var _PublishDialog = __webpack_require__(1281);

var _PublishDialog2 = _interopRequireDefault(_PublishDialog);

var _PublicGallery = __webpack_require__(2972);

var _PublicGallery2 = _interopRequireDefault(_PublicGallery);

var _ProjectHeader = __webpack_require__(3446);

var _ProjectHeader2 = _interopRequireDefault(_ProjectHeader);

var _projectConstants = __webpack_require__(1148);

var _projectsRedux = __webpack_require__(2157);

var _projectsRedux2 = _interopRequireDefault(_projectsRedux);

var _publishDialogRedux = __webpack_require__(911);

var _publishDialogRedux2 = _interopRequireDefault(_publishDialogRedux);

var _sharedConstants = __webpack_require__(503);

var _StartNewProject = __webpack_require__(2829);

var _StartNewProject2 = _interopRequireDefault(_StartNewProject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  var script = document.querySelector('script[data-projects]');
  var projectsData = JSON.parse(script.dataset.projects);

  (0, _redux.registerReducers)({ projects: _projectsRedux2.default, publishDialog: _publishDialogRedux2.default });
  var store = (0, _redux.getStore)();
  setupReduxSubscribers(store);
  var projectsHeader = document.getElementById('projects-header');
  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_ProjectHeader2.default, null)
  ), projectsHeader);

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_StartNewProject2.default, {
      canViewFullList: true,
      canViewAdvancedTools: projectsData.canViewAdvancedTools
    })
  ), document.getElementById('new-project-buttons'));

  var isPublic = window.location.pathname.startsWith('/projects/public');
  var initialState = isPublic ? _projectConstants.Galleries.PUBLIC : _projectConstants.Galleries.PRIVATE;
  store.dispatch((0, _projectsRedux.selectGallery)(initialState));
  var url = '/api/v1/projects/gallery/public/all/' + _projectConstants.MAX_PROJECTS_PER_CATEGORY;

  _jquery2.default.ajax({
    method: 'GET',
    url: url,
    dataType: 'json'
  }).done(function (projectLists) {
    store.dispatch((0, _projectsRedux.setProjectLists)(projectLists));
    var publicGallery = document.getElementById('public-gallery');
    _reactDom2.default.render(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_PublicGallery2.default, {
        projectValidator: projectsData.projectValidator
      })
    ), publicGallery);
  });

  var publishConfirm = document.getElementById('publish-confirm');

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_PublishDialog2.default, null)
  ), publishConfirm);
});

function showGallery(gallery) {
  (0, _jquery2.default)('#angular-my-projects-wrapper').toggle(gallery === _projectConstants.Galleries.PRIVATE);
  (0, _jquery2.default)('#public-gallery-wrapper').toggle(gallery === _projectConstants.Galleries.PUBLIC);
}

// Make these available to angularProjects.js. These can go away
// once My Projects is moved to React.

window.onShowConfirmPublishDialog = function (projectId, projectType) {
  (0, _redux.getStore)().dispatch((0, _publishDialogRedux.showPublishDialog)(projectId, projectType));
};

window.PublishableProjectTypesUnder13 = _sharedConstants.PublishableProjectTypesUnder13;

window.PublishableProjectTypesOver13 = _sharedConstants.PublishableProjectTypesOver13;

function setupReduxSubscribers(store) {
  var state = {};
  store.subscribe(function () {
    var lastState = state;
    state = store.getState();

    // Update the project state and immediately add it to the public gallery
    // when a PublishDialog state transition indicates that a project has just
    // been published.
    if (lastState.publishDialog && lastState.publishDialog.lastPublishedAt !== state.publishDialog.lastPublishedAt) {
      window.setProjectPublishedAt(state.publishDialog.projectId, state.publishDialog.lastPublishedAt);
      var projectData = state.publishDialog.lastPublishedProjectData;
      var projectType = state.publishDialog.projectType;
      store.dispatch((0, _projectsRedux.prependProjects)([projectData], projectType));
    }

    if ((lastState.projects && lastState.projects.selectedGallery) !== (state.projects && state.projects.selectedGallery)) {
      showGallery(state.projects.selectedGallery);
    }
  });
}

/***/ }),

/***/ 3446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _GallerySwitcher = __webpack_require__(3447);

var _GallerySwitcher2 = _interopRequireDefault(_GallerySwitcher);

var _HeaderBanner = __webpack_require__(2088);

var _HeaderBanner2 = _interopRequireDefault(_HeaderBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @file Header banner and gallery naviation for the project gallery */


var ProjectHeader = function (_React$Component) {
  _inherits(ProjectHeader, _React$Component);

  function ProjectHeader() {
    _classCallCheck(this, ProjectHeader);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ProjectHeader.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_HeaderBanner2.default, {
        short: true,
        headingText: _locale2.default.projects(),
        subHeadingText: _locale2.default.projectsSubHeading()
      }),
      _react2.default.createElement(_GallerySwitcher2.default, null)
    );
  };

  return ProjectHeader;
}(_react2.default.Component);

exports.default = ProjectHeader;
module.exports = exports['default'];

/***/ }),

/***/ 3447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _radium = __webpack_require__(83);

var _radium2 = _interopRequireDefault(_radium);

var _projectsRedux = __webpack_require__(2157);

var _reactRedux = __webpack_require__(53);

var _projectConstants = __webpack_require__(1148);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    marginBottom: 20,
    backgroundColor: _color2.default.lightest_gray,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: _color2.default.lighter_gray,
    padding: 10,
    height: 36
  },
  pill: {
    ':hover': {
      color: _color2.default.teal
    },
    border: 'none',
    borderRadius: 50,
    fontFamily: '"Gotham 5r", sans-serif',
    fontSize: 20,
    backgroundColor: _color2.default.lightest_gray,
    color: _color2.default.charcoal,
    margin: '0 0 0 20px',
    boxShadow: 'none',
    outline: 'none',
    padding: '8px 18px',
    float: 'left',
    cursor: 'pointer'
  },
  selectedPill: {
    ':hover': {
      color: _color2.default.white
    },
    backgroundColor: _color2.default.teal,
    color: _color2.default.white,
    border: 'none'
  }
};

var GallerySwitcher = function (_Component) {
  _inherits(GallerySwitcher, _Component);

  function GallerySwitcher(props) {
    _classCallCheck(this, GallerySwitcher);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.toggleToGallery = _this.toggleToGallery.bind(_this);
    _this.toggleToMyProjects = _this.toggleToMyProjects.bind(_this);
    return _this;
  }

  GallerySwitcher.prototype.toggleToGallery = function toggleToGallery() {
    this.props.selectGallery(_projectConstants.Galleries.PUBLIC);
  };

  GallerySwitcher.prototype.toggleToMyProjects = function toggleToMyProjects() {
    this.props.selectGallery(_projectConstants.Galleries.PRIVATE);
  };

  GallerySwitcher.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { style: styles.container, id: 'uitest-gallery-switcher' },
      _react2.default.createElement(
        'div',
        {
          key: 'private',
          style: [styles.pill, this.props.selectedGallery === _projectConstants.Galleries.PRIVATE && styles.selectedPill],
          onClick: this.toggleToMyProjects
        },
        _locale2.default.myProjects()
      ),
      _react2.default.createElement(
        'div',
        {
          key: 'public',
          style: [styles.pill, this.props.selectedGallery === _projectConstants.Galleries.PUBLIC && styles.selectedPill],
          onClick: this.toggleToGallery
        },
        _locale2.default.publicProjects()
      )
    );
  };

  return GallerySwitcher;
}(_react.Component);

GallerySwitcher.propTypes = {
  selectedGallery: _react.PropTypes.string.isRequired,
  selectGallery: _react.PropTypes.func.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    selectedGallery: state.projects.selectedGallery
  };
}, function (dispatch) {
  return {
    selectGallery: function selectGallery(gallery) {
      dispatch((0, _projectsRedux.selectGallery)(gallery));
    }
  };
})((0, _radium2.default)(GallerySwitcher));
module.exports = exports['default'];

/***/ })

},[3442]);