webpackJsonp([17],{

/***/ 1746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NEW_LEVEL_ID = exports.setStageLockable = exports.removeStage = exports.removeGroup = exports.moveStage = exports.moveGroup = exports.addLevel = exports.reorderLevel = exports.setField = exports.setActiveVariant = exports.addVariant = exports.chooseLevel = exports.chooseLevelType = exports.removeLevel = exports.toggleExpand = exports.addStage = exports.addGroup = exports.init = undefined;

var _lodash = __webpack_require__(82);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INIT = 'scriptEditor/INIT';
var ADD_GROUP = 'scriptEditor/ADD_GROUP';
var ADD_STAGE = 'scriptEditor/ADD_STAGE';
var TOGGLE_EXPAND = 'scriptEditor/TOGGLE_EXPAND';
var REMOVE_LEVEL = 'scriptEditor/REMOVE_LEVEL';
var CHOOSE_LEVEL_TYPE = 'scriptEditor/CHOOSE_LEVEL_TYPE';
var CHOOSE_LEVEL = 'scriptEditor/CHOOSE_LEVEL';
var ADD_VARIANT = 'scriptEditor/ADD_VARIANT';
var SET_ACTIVE_VARIANT = 'scriptEditor/SET_ACTIVE_VARIANT';
var SET_FIELD = 'scriptEditor/SET_FIELD';
var REORDER_LEVEL = 'scriptEditor/REORDER_LEVEL';
var ADD_LEVEL = 'scriptEditor/ADD_LEVEL';
var MOVE_GROUP = 'scriptEditor/MOVE_GROUP';
var MOVE_STAGE = 'scriptEditor/MOVE_STAGE';
var REMOVE_GROUP = 'scriptEditor/REMOVE_GROUP';
var REMOVE_STAGE = 'scriptEditor/REMOVE_STAGE';
var SET_STAGE_LOCKABLE = 'scriptEditor/SET_STAGE_LOCKABLE';

var init = exports.init = function init(stages, levelKeyList) {
  return {
    type: INIT,
    stages: stages,
    levelKeyList: levelKeyList
  };
};

var addGroup = exports.addGroup = function addGroup(stageName, groupName) {
  return {
    type: ADD_GROUP,
    stageName: stageName,
    groupName: groupName
  };
};

var addStage = exports.addStage = function addStage(position, stageName) {
  return {
    type: ADD_STAGE,
    position: position,
    stageName: stageName
  };
};

var toggleExpand = exports.toggleExpand = function toggleExpand(stage, level) {
  return {
    type: TOGGLE_EXPAND,
    stage: stage,
    level: level
  };
};

var removeLevel = exports.removeLevel = function removeLevel(stage, level) {
  return {
    type: REMOVE_LEVEL,
    stage: stage,
    level: level
  };
};

var chooseLevelType = exports.chooseLevelType = function chooseLevelType(stage, level, value) {
  return {
    type: CHOOSE_LEVEL_TYPE,
    stage: stage,
    level: level,
    value: value
  };
};

var chooseLevel = exports.chooseLevel = function chooseLevel(stage, level, variant, value) {
  return {
    type: CHOOSE_LEVEL,
    stage: stage,
    level: level,
    variant: variant,
    value: value
  };
};

var addVariant = exports.addVariant = function addVariant(stage, level) {
  return {
    type: ADD_VARIANT,
    stage: stage,
    level: level
  };
};

var setActiveVariant = exports.setActiveVariant = function setActiveVariant(stage, level, id) {
  return {
    type: SET_ACTIVE_VARIANT,
    stage: stage,
    level: level,
    id: id
  };
};

var setField = exports.setField = function setField(stage, level, modifier) {
  return {
    type: SET_FIELD,
    stage: stage,
    level: level,
    modifier: modifier
  };
};

var reorderLevel = exports.reorderLevel = function reorderLevel(stage, originalPosition, newPosition) {
  return {
    type: REORDER_LEVEL,
    stage: stage,
    originalPosition: originalPosition,
    newPosition: newPosition
  };
};

var addLevel = exports.addLevel = function addLevel(stage) {
  return {
    type: ADD_LEVEL,
    stage: stage
  };
};

var moveGroup = exports.moveGroup = function moveGroup(position, direction) {
  return {
    type: MOVE_GROUP,
    position: position,
    direction: direction
  };
};

var moveStage = exports.moveStage = function moveStage(position, direction) {
  return {
    type: MOVE_STAGE,
    position: position,
    direction: direction
  };
};

var removeGroup = exports.removeGroup = function removeGroup(position) {
  return {
    type: REMOVE_GROUP,
    position: position
  };
};

var removeStage = exports.removeStage = function removeStage(position) {
  return {
    type: REMOVE_STAGE,
    position: position
  };
};

var setStageLockable = exports.setStageLockable = function setStageLockable(stage, lockable) {
  return {
    type: SET_STAGE_LOCKABLE,
    stage: stage,
    lockable: lockable
  };
};

function updatePositions(node) {
  for (var i = 0; i < node.length; i++) {
    node[i].position = i + 1;
  }
}

var NEW_LEVEL_ID = exports.NEW_LEVEL_ID = -1;

function stages() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  var newState = _lodash2.default.cloneDeep(state);

  switch (action.type) {
    case INIT:
      return action.stages;
    case REORDER_LEVEL:
      {
        var levels = newState[action.stage - 1].levels;
        var temp = levels.splice(action.originalPosition - 1, 1);
        levels.splice(action.newPosition - 1, 0, temp[0]);
        updatePositions(levels);
        break;
      }
    case ADD_GROUP:
      {
        newState.push({
          flex_category: action.groupName,
          name: action.stageName,
          levels: []
        });
        updatePositions(newState);
        break;
      }
    case ADD_STAGE:
      {
        var groupName = newState[action.position - 1].flex_category;
        newState.splice(action.position, 0, {
          id: state.newStageId,
          name: action.stageName,
          flex_category: groupName,
          levels: []
        });
        updatePositions(newState);
        break;
      }
    case ADD_LEVEL:
      {
        var _levels = newState[action.stage - 1].levels;
        _levels.push({
          ids: [NEW_LEVEL_ID],
          activeId: NEW_LEVEL_ID,
          expand: true
        });
        updatePositions(_levels);
        break;
      }
    case ADD_VARIANT:
      {
        newState[action.stage - 1].levels[action.level - 1].ids.push(NEW_LEVEL_ID);
        break;
      }
    case SET_ACTIVE_VARIANT:
      {
        newState[action.stage - 1].levels[action.level - 1].activeId = action.id;
        break;
      }
    case SET_FIELD:
      {
        var type = Object.keys(action.modifier)[0];
        newState[action.stage - 1].levels[action.level - 1][type] = action.modifier[type];
        break;
      }
    case REMOVE_GROUP:
      {
        var _ret = function () {
          var groupName = newState[action.position - 1].flex_category;
          newState = newState.filter(function (stage) {
            return stage.flex_category !== groupName;
          });
          updatePositions(newState);
          return 'break';
        }();

        if (_ret === 'break') break;
      }
    case REMOVE_STAGE:
      {
        newState.splice(action.position - 1, 1);
        updatePositions(newState);
        break;
      }
    case REMOVE_LEVEL:
      {
        var _levels2 = newState[action.stage - 1].levels;
        _levels2.splice(action.level - 1, 1);
        updatePositions(_levels2);
        break;
      }
    case CHOOSE_LEVEL:
      {
        var level = newState[action.stage - 1].levels[action.level - 1];
        if (level.ids[action.variant] === level.activeId) {
          level.activeId = action.value;
        }
        level.ids[action.variant] = action.value;
        break;
      }
    case CHOOSE_LEVEL_TYPE:
      {
        newState[action.stage - 1].levels[action.level - 1].kind = action.value;
        break;
      }
    case TOGGLE_EXPAND:
      {
        var _level = newState[action.stage - 1].levels[action.level - 1];
        _level.expand = !_level.expand;
        break;
      }
    case MOVE_GROUP:
      {
        var _ret2 = function () {
          var _newState;

          if (action.direction !== 'up' && action.position === newState.length) {
            return 'break';
          }
          var index = action.position - 1;
          var groupName = newState[index].flex_category;
          var categories = newState.map(function (s) {
            return s.flex_category;
          });
          var start = categories.indexOf(groupName);
          var count = categories.filter(function (c) {
            return c === groupName;
          }).length;
          var swap = newState.splice(start, count);
          categories = newState.map(function (s) {
            return s.flex_category;
          });
          var swappedGroupName = newState[action.direction === 'up' ? index - 1 : index].flex_category;
          start = categories.indexOf(swappedGroupName);
          count = categories.filter(function (c) {
            return c === swappedGroupName;
          }).length;
          (_newState = newState).splice.apply(_newState, [action.direction === 'up' ? start : start + count, 0].concat(_toConsumableArray(swap)));
          updatePositions(newState);
          return 'break';
        }();

        if (_ret2 === 'break') break;
      }
    case MOVE_STAGE:
      {
        var _index = action.position - 1;
        var _swap = action.direction === 'up' ? _index - 1 : _index + 1;
        var _temp = newState[_index];
        newState[_index] = newState[_swap];
        newState[_swap] = _temp;
        updatePositions(newState);
        break;
      }
    case SET_STAGE_LOCKABLE:
      {
        newState[action.stage - 1].lockable = action.lockable;
      }
  }

  return newState;
}

function levelKeyList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case INIT:
      return action.levelKeyList;
  }
  return state;
}

exports.default = {
  stages: stages,
  levelKeyList: levelKeyList
};

/***/ }),

/***/ 2156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlTypes = exports.levelTokenMargin = exports.borderRadius = undefined;

var _utils = __webpack_require__(71);

var borderRadius = exports.borderRadius = 3;
var levelTokenMargin = exports.levelTokenMargin = 7;
var ControlTypes = exports.ControlTypes = (0, _utils.makeEnum)('Group', 'Stage');

/***/ }),

/***/ 2970:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _constants = __webpack_require__(2156);

var _editorRedux = __webpack_require__(1746);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  controls: {
    float: 'right'
  },
  controlIcon: {
    margin: '0 5px',
    cursor: 'pointer'
  }
};

var OrderControls = _react2.default.createClass({
  displayName: 'OrderControls',

  propTypes: {
    move: _react.PropTypes.func.isRequired,
    remove: _react.PropTypes.func.isRequired,
    type: _react.PropTypes.oneOf(Object.keys(_constants.ControlTypes)).isRequired,
    position: _react.PropTypes.number.isRequired,
    total: _react.PropTypes.number.isRequired
  },

  handleMoveUp: function handleMoveUp() {
    if (this.props.position !== 1) {
      this.props.move(this.props.type, this.props.position, 'up');
    }
  },
  handleMoveDown: function handleMoveDown() {
    if (this.props.position !== this.props.total) {
      this.props.move(this.props.type, this.props.position, 'down');
    }
  },
  handleRemove: function handleRemove() {
    this.props.remove(this.props.type, this.props.position);
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { style: styles.controls },
      _react2.default.createElement('i', {
        onMouseDown: this.handleMoveUp,
        style: styles.controlIcon,
        className: 'fa fa-caret-up'
      }),
      _react2.default.createElement('i', {
        onMouseDown: this.handleMoveDown,
        style: styles.controlIcon,
        className: 'fa fa-caret-down'
      }),
      _react2.default.createElement('i', {
        onMouseDown: this.handleRemove,
        style: styles.controlIcon,
        className: 'fa fa-trash'
      })
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (state) {
  return {};
}, function (dispatch) {
  return {
    move: function move(type, position, direction) {
      type === _constants.ControlTypes.Group ? dispatch((0, _editorRedux.moveGroup)(position, direction)) : dispatch((0, _editorRedux.moveStage)(position, direction));
    },
    remove: function remove(type, position) {
      type === _constants.ControlTypes.Group ? dispatch((0, _editorRedux.removeGroup)(position)) : dispatch((0, _editorRedux.removeStage)(position));
    }
  };
})(OrderControls);
module.exports = exports['default'];

/***/ }),

/***/ 3392:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3393);


/***/ }),

/***/ 3393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /** @file JavaScript run only on the /s/:script_name/edit page. */

exports.default = initPage;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(53);

var _redux = __webpack_require__(237);

var _getScriptData = __webpack_require__(596);

var _getScriptData2 = _interopRequireDefault(_getScriptData);

var _editorRedux = __webpack_require__(1746);

var _editorRedux2 = _interopRequireDefault(_editorRedux);

var _ScriptEditor = __webpack_require__(3394);

var _ScriptEditor2 = _interopRequireDefault(_ScriptEditor);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initPage(scriptEditorData) {
  var scriptData = scriptEditorData.script;
  var stageLevelData = scriptEditorData.stageLevelData;
  var stages = (scriptData.stages || []).filter(function (stage) {
    return stage.id;
  }).map(function (stage) {
    return {
      position: stage.position,
      flex_category: stage.flex_category,
      lockable: stage.lockable,
      name: stage.name,
      // Only include the first level of an assessment (uid ending with "_0").
      levels: stage.levels.filter(function (level) {
        return !level.uid || /_0$/.test(level.uid);
      }).map(function (level) {
        return {
          position: level.position,
          activeId: level.activeId,
          ids: level.ids.slice(),
          kind: level.kind,
          skin: level.skin,
          videoKey: level.videoKey,
          concepts: level.concepts,
          conceptDifficulty: level.conceptDifficulty,
          progression: level.progression
        };
      })
    };
  });

  (0, _redux.registerReducers)(_editorRedux2.default);
  var store = (0, _redux.getStore)();
  store.dispatch((0, _editorRedux.init)(stages, scriptEditorData.levelKeyList));

  var teacherResources = (scriptData.teacher_resources || []).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        type = _ref2[0],
        link = _ref2[1];

    return { type: type, link: link };
  });

  var announcements = scriptData.script_announcements || [];

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_ScriptEditor2.default, {
      beta: scriptEditorData.beta,
      name: scriptEditorData.script.name,
      i18nData: scriptEditorData.i18n,
      hidden: (0, _utils.valueOr)(scriptData.hidden, true),
      loginRequired: scriptData.loginRequired,
      hideableStages: scriptData.hideable_stages,
      studentDetailProgressView: scriptData.student_detail_progress_view,
      professionalLearningCourse: scriptData.professionalLearningCourse,
      peerReviewsRequired: scriptData.peerReviewsRequired,
      wrapupVideo: scriptData.wrapupVideo,
      excludeCsfColumnInLegend: scriptData.excludeCsfColumnInLegend,
      projectWidgetVisible: scriptData.project_widget_visible,
      projectWidgetTypes: scriptData.project_widget_types,
      teacherResources: teacherResources,
      stageExtrasAvailable: !!scriptData.stage_extras_available,
      stageLevelData: stageLevelData,
      hasVerifiedResources: scriptData.has_verified_resources,
      hasLessonPlan: scriptData.has_lesson_plan,
      announcements: announcements
    })
  ), document.querySelector('.edit_container'));
}

if (true) {
  initPage((0, _getScriptData2.default)('levelBuilderEditScript'));
}
module.exports = exports['default'];

/***/ }),

/***/ 3394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _FlexGroup = __webpack_require__(3395);

var _FlexGroup2 = _interopRequireDefault(_FlexGroup);

var _StageDescriptions = __webpack_require__(3399);

var _StageDescriptions2 = _interopRequireDefault(_StageDescriptions);

var _ScriptAnnouncementsEditor = __webpack_require__(3400);

var _ScriptAnnouncementsEditor2 = _interopRequireDefault(_ScriptAnnouncementsEditor);

var _LegendSelector = __webpack_require__(3401);

var _LegendSelector2 = _interopRequireDefault(_LegendSelector);

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _ResourcesEditor = __webpack_require__(2971);

var _ResourcesEditor2 = _interopRequireDefault(_ResourcesEditor);

var _DropdownButton = __webpack_require__(1243);

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _Button = __webpack_require__(220);

var _Button2 = _interopRequireDefault(_Button);

var _resourceType = __webpack_require__(927);

var _resourceType2 = _interopRequireDefault(_resourceType);

var _scriptAnnouncementsRedux = __webpack_require__(1003);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  input: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '4px 6px',
    color: '#555',
    border: '1px solid #ccc',
    borderRadius: 4
  },
  checkbox: {
    margin: '0 0 0 7px'
  }
};

var VIDEO_KEY_REGEX = /video_key_for_next_level/g;

/**
 * Component for editing course scripts.
 */
var ScriptEditor = _react2.default.createClass({
  displayName: 'ScriptEditor',

  propTypes: {
    beta: _react.PropTypes.bool,
    name: _react.PropTypes.string.isRequired,
    i18nData: _react.PropTypes.object.isRequired,
    hidden: _react.PropTypes.bool,
    loginRequired: _react.PropTypes.bool,
    hideableStages: _react.PropTypes.bool,
    studentDetailProgressView: _react.PropTypes.bool,
    professionalLearningCourse: _react.PropTypes.bool,
    peerReviewsRequired: _react.PropTypes.number,
    wrapupVideo: _react.PropTypes.string,
    excludeCsfColumnInLegend: _react.PropTypes.bool,
    projectWidgetVisible: _react.PropTypes.bool,
    projectWidgetTypes: _react.PropTypes.arrayOf(_react.PropTypes.string),
    teacherResources: _react.PropTypes.arrayOf(_resourceType.resourceShape).isRequired,
    stageExtrasAvailable: _react.PropTypes.bool,
    stageLevelData: _react.PropTypes.string,
    hasVerifiedResources: _react.PropTypes.bool,
    hasLessonPlan: _react.PropTypes.bool,
    announcements: _react.PropTypes.arrayOf(_scriptAnnouncementsRedux.announcementShape)
  },

  handleClearProjectWidgetSelectClick: function handleClearProjectWidgetSelectClick() {
    (0, _jquery2.default)(this.projectWidgetSelect).children('option')['removeAttr']('selected', true);
  },
  presubmit: function presubmit(e) {
    var videoKeysBefore = (this.props.stageLevelData.match(VIDEO_KEY_REGEX) || []).length;
    var videoKeysAfter = (this.scriptTextArea.value.match(VIDEO_KEY_REGEX) || []).length;
    if (videoKeysBefore !== videoKeysAfter) {
      if (!confirm("WARNING: adding or removing video keys will also affect " + "uses of this level in other scripts. Are you sure you want to " + "continue?")) {
        e.preventDefault();
      }
    }
  },
  render: function render() {
    var _this = this;

    var textAreaRows = this.props.stageLevelData ? this.props.stageLevelData.split('\n').length + 5 : 10;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'I18n Strings'
      ),
      _react2.default.createElement(
        'label',
        null,
        'Title',
        _react2.default.createElement('input', {
          name: 'title',
          defaultValue: this.props.i18nData.title,
          style: styles.input
        })
      ),
      _react2.default.createElement(
        'label',
        null,
        'Audience',
        _react2.default.createElement('input', {
          name: 'description_audience',
          defaultValue: this.props.i18nData.descriptionAudience,
          style: styles.input
        })
      ),
      _react2.default.createElement(
        'label',
        null,
        'Short Description',
        _react2.default.createElement('input', {
          name: 'description_short',
          defaultValue: this.props.i18nData.descriptionShort,
          style: styles.input
        })
      ),
      _react2.default.createElement(
        'label',
        null,
        'Description',
        _react2.default.createElement('textarea', {
          name: 'description',
          defaultValue: this.props.i18nData.description,
          rows: 5,
          style: styles.input
        })
      ),
      _react2.default.createElement(_StageDescriptions2.default, {
        scriptName: this.props.name,
        currentDescriptions: this.props.i18nData.stageDescriptions
      }),
      _react2.default.createElement(_ScriptAnnouncementsEditor2.default, {
        defaultAnnouncements: this.props.announcements,
        inputStyle: styles.input
      }),
      _react2.default.createElement(
        'h2',
        null,
        'Basic Settings'
      ),
      _react2.default.createElement(
        'label',
        null,
        'Visible in Teacher Dashboard',
        _react2.default.createElement('input', {
          name: 'visible_to_teachers',
          type: 'checkbox',
          defaultChecked: !this.props.hidden,
          style: styles.checkbox
        }),
        _react2.default.createElement(
          'p',
          null,
          'If checked this script will show up in the dropdown on the Teacher Dashboard, for teachers to assign to students.'
        )
      ),
      _react2.default.createElement(
        'label',
        null,
        'Login Required',
        _react2.default.createElement('input', {
          name: 'login_required',
          type: 'checkbox',
          defaultChecked: this.props.loginRequired,
          style: styles.checkbox
        }),
        _react2.default.createElement(
          'p',
          null,
          'Require users to log in before viewing this script.'
        )
      ),
      _react2.default.createElement(
        'label',
        null,
        'Hideable Stages',
        _react2.default.createElement('input', {
          name: 'hideable_stages',
          type: 'checkbox',
          defaultChecked: this.props.hideableStages,
          style: styles.checkbox
        }),
        _react2.default.createElement(
          'p',
          null,
          'Allow teachers to toggle whether or not specific stages in this script are visible to students in their section.'
        )
      ),
      _react2.default.createElement(
        'label',
        null,
        'Default Progress to Detail View',
        _react2.default.createElement('input', {
          name: 'student_detail_progress_view',
          type: 'checkbox',
          defaultChecked: this.props.studentDetailProgressView,
          style: styles.checkbox
        }),
        _react2.default.createElement(
          'p',
          null,
          'By default students start in the summary view. When this box is checked, we instead stick everyone into detail view to start for this script.'
        )
      ),
      _react2.default.createElement(
        'label',
        null,
        'Lesson Extras Available',
        _react2.default.createElement('input', {
          name: 'stage_extras_available',
          type: 'checkbox',
          defaultChecked: this.props.stageExtrasAvailable,
          style: styles.checkbox
        }),
        _react2.default.createElement(
          'p',
          null,
          'If also enabled by the teacher, show the lesson extras page at the end of each stage.'
        )
      ),
      _react2.default.createElement(
        'label',
        null,
        'Verified Resources',
        _react2.default.createElement('input', {
          name: 'has_verified_resources',
          type: 'checkbox',
          defaultChecked: this.props.hasVerifiedResources,
          style: styles.checkbox
        }),
        _react2.default.createElement(
          'p',
          null,
          'Check if this course has resources for verified teachers, and we want to notify non-verified teachers that this is the case.'
        )
      ),
      _react2.default.createElement(
        'label',
        null,
        'Lesson Plan',
        _react2.default.createElement('input', {
          name: 'has_lesson_plan',
          type: 'checkbox',
          defaultChecked: this.props.hasLessonPlan,
          style: styles.checkbox
        }),
        _react2.default.createElement(
          'p',
          null,
          'Check if this course has lesson plans (on Curriculum Builder or in PDF form) that we should provide links to.'
        )
      ),
      _react2.default.createElement(
        'label',
        null,
        'Professional Learning Course. When filled out, the course unit associated with this script will be associated with the course named in this box. If the course unit does not exist, and if the course does not exist it will be created.',
        _react2.default.createElement('input', {
          name: 'professional_learning_course',
          defaultValue: this.props.professionalLearningCourse,
          style: styles.input
        })
      ),
      _react2.default.createElement(
        'label',
        null,
        'Peer Reviews to Complete. Currently only supported for professional learning courses',
        _react2.default.createElement('input', {
          name: 'peer_reviews_to_complete',
          defaultValue: this.props.peerReviewsRequired,
          style: styles.input
        })
      ),
      _react2.default.createElement(
        'label',
        null,
        'Wrap-up Video',
        _react2.default.createElement('input', {
          name: 'wrapup_video',
          defaultValue: this.props.wrapupVideo,
          style: styles.input
        })
      ),
      _react2.default.createElement(_LegendSelector2.default, {
        excludeCsf: this.props.excludeCsfColumnInLegend,
        inputStyle: styles.checkbox
      }),
      _react2.default.createElement(
        'h3',
        null,
        'Project widget options'
      ),
      _react2.default.createElement(
        'label',
        null,
        'Project widget visible',
        _react2.default.createElement('input', {
          name: 'project_widget_visible',
          type: 'checkbox',
          defaultChecked: this.props.projectWidgetVisible,
          style: styles.checkbox
        }),
        _react2.default.createElement(
          'p',
          null,
          'If checked this script will have the projects widget (recent projects and new project buttons) visible in stage extras.'
        )
      ),
      _react2.default.createElement(
        'label',
        null,
        'Project widget new project types',
        _react2.default.createElement(
          'p',
          null,
          'Select up to 4 project type options to appear in the \'Start a new project\' section. Select',
          _react2.default.createElement(
            'a',
            { onClick: this.handleClearProjectWidgetSelectClick },
            ' none '
          ),
          'or shift-click or cmd-click to select multiple.'
        ),
        _react2.default.createElement(
          'select',
          {
            name: 'project_widget_types[]',
            multiple: true,
            defaultValue: this.props.projectWidgetTypes,
            ref: function ref(select) {
              return _this.projectWidgetSelect = select;
            }
          },
          _react2.default.createElement(
            'option',
            { value: 'playlab' },
            'Play Lab'
          ),
          _react2.default.createElement(
            'option',
            { value: 'playlab_k1' },
            'Play Lab K1'
          ),
          _react2.default.createElement(
            'option',
            { value: 'artist' },
            'Artist'
          ),
          _react2.default.createElement(
            'option',
            { value: 'artist_k1' },
            'Artist K1'
          ),
          _react2.default.createElement(
            'option',
            { value: 'applab' },
            'App Lab'
          ),
          _react2.default.createElement(
            'option',
            { value: 'gamelab' },
            'Game Lab'
          ),
          _react2.default.createElement(
            'option',
            { value: 'weblab' },
            'Web Lab'
          ),
          _react2.default.createElement(
            'option',
            { value: 'calc' },
            'Calc'
          ),
          _react2.default.createElement(
            'option',
            { value: 'eval' },
            'Eval'
          ),
          _react2.default.createElement(
            'option',
            { value: 'frozen' },
            'Frozen'
          ),
          _react2.default.createElement(
            'option',
            { value: 'minecraft_adventurer' },
            'Minecraft Adventurer'
          ),
          _react2.default.createElement(
            'option',
            { value: 'minecraft_designer' },
            'Minecraft Designer'
          ),
          _react2.default.createElement(
            'option',
            { value: 'minecraft_hero' },
            'Minecraft Hero'
          ),
          _react2.default.createElement(
            'option',
            { value: 'starwars' },
            'Star Wars'
          ),
          _react2.default.createElement(
            'option',
            { value: 'starwarsblocks' },
            'Star Wars Blocks'
          ),
          _react2.default.createElement(
            'option',
            { value: 'flappy' },
            'Flappy'
          ),
          _react2.default.createElement(
            'option',
            { value: 'sports' },
            'Sports'
          ),
          _react2.default.createElement(
            'option',
            { value: 'basketball' },
            'Basketball'
          ),
          _react2.default.createElement(
            'option',
            { value: 'bounce' },
            'Bounce'
          ),
          _react2.default.createElement(
            'option',
            { value: 'infinity' },
            'Infinity'
          ),
          _react2.default.createElement(
            'option',
            { value: 'iceage' },
            'Ice Age'
          ),
          _react2.default.createElement(
            'option',
            { value: 'gumball' },
            'Gumball'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Teacher Resources'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Select the Teacher Resources buttons you\'d like to have show up on the top of the course overview page'
        ),
        _react2.default.createElement(_ResourcesEditor2.default, {
          inputStyle: styles.input,
          resources: this.props.teacherResources,
          maxResources: Object.keys(_resourceType2.default).length,
          renderPreview: function renderPreview(resources) {
            return _react2.default.createElement(
              _DropdownButton2.default,
              {
                text: 'Teacher resources',
                color: _Button2.default.ButtonColor.blue
              },
              resources.map(function (_ref, index) {
                var type = _ref.type,
                    link = _ref.link;
                return _react2.default.createElement(
                  'a',
                  { key: index, href: link },
                  _resourceType.stringForType[type]
                );
              })
            );
          }
        })
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Stages and Levels'
      ),
      this.props.beta ? _react2.default.createElement(_FlexGroup2.default, null) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { href: '?beta=true' },
          'Try the beta Script Editor (will reload the page without saving)'
        ),
        _react2.default.createElement('textarea', {
          id: 'script_text',
          name: 'script_text',
          rows: textAreaRows,
          style: { width: 700 },
          defaultValue: this.props.stageLevelData || "stage 'new stage'\n",
          ref: function ref(textArea) {
            return _this.scriptTextArea = textArea;
          }
        })
      ),
      _react2.default.createElement(
        'button',
        {
          className: 'btn btn-primary',
          type: 'submit',
          style: { margin: 0 },
          onClick: this.presubmit
        },
        'Save Changes'
      )
    );
  }
});

exports.default = ScriptEditor;
module.exports = exports['default'];

/***/ }),

/***/ 3395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _lodash = __webpack_require__(82);

var _lodash2 = _interopRequireDefault(_lodash);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _constants = __webpack_require__(2156);

var _OrderControls = __webpack_require__(2970);

var _OrderControls2 = _interopRequireDefault(_OrderControls);

var _StageCard = __webpack_require__(3396);

var _StageCard2 = _interopRequireDefault(_StageCard);

var _editorRedux = __webpack_require__(1746);

var _sharedConstants = __webpack_require__(503);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  groupHeader: {
    fontSize: 18,
    color: 'white',
    background: _color2.default.cyan,
    borderTopLeftRadius: _constants.borderRadius,
    borderTopRightRadius: _constants.borderRadius,
    padding: 10
  },
  groupBody: {
    background: _color2.default.lightest_cyan,
    borderBottomLeftRadius: _constants.borderRadius,
    borderBottomRightRadius: _constants.borderRadius,
    padding: 10,
    marginBottom: 20
  },
  addGroup: {
    fontSize: 14,
    color: 'white',
    background: _color2.default.cyan,
    border: '1px solid ' + _color2.default.cyan,
    boxShadow: 'none',
    margin: '0 0 30px 0'
  },
  addStage: {
    fontSize: 14,
    color: '#5b6770',
    background: 'white',
    border: '1px solid #ccc',
    boxShadow: 'none',
    margin: '0 10px 10px 10px'
  }
};

var FlexGroup = _react2.default.createClass({
  displayName: 'FlexGroup',

  propTypes: {
    addGroup: _react.PropTypes.func.isRequired,
    addStage: _react.PropTypes.func.isRequired,
    stages: _react.PropTypes.array.isRequired,
    levelKeyList: _react.PropTypes.array.isRequired
  },

  handleAddGroup: function handleAddGroup() {
    this.props.addGroup(prompt('Enter new stage name'), prompt('Enter new group name'));
  },
  handleAddStage: function handleAddStage(position) {
    this.props.addStage(position, prompt('Enter new stage name'));
  },


  /**
   * Generate the ScriptDSL format.
   * @param stages
   * @return {string}
   */
  serializeStages: function serializeStages(stages) {
    var _this = this;

    var s = [];
    stages.forEach(function (stage) {
      var t = 'stage \'' + stage.name + '\'';
      if (stage.lockable) {
        t += ', lockable: true';
      }
      if (stage.flex_category) {
        t += ', flex_category: \'' + stage.flex_category + '\'';
      }
      s.push(t);
      stage.levels.forEach(function (level) {
        if (level.ids.length > 1) {
          s.push('variants');
          level.ids.forEach(function (id) {
            s = s.concat(_this.serializeLevel(id, level, level.activeId === id));
          });
          s.push('endvariants');
        } else {
          s = s.concat(_this.serializeLevel(level.ids[0], level));
        }
      });
      s.push('');
    });
    return s.join('\n');
  },
  serializeLevel: function serializeLevel(id, level, active) {
    if (id === _editorRedux.NEW_LEVEL_ID) {
      return;
    }

    var s = [];
    var key = this.props.levelKeyList[id];
    if (/^blockly:/.test(key)) {
      if (level.skin) {
        s.push('skin \'' + level.skin + '\'');
      }
      if (level.videoKey) {
        s.push('video_key_for_next_level \'' + level.videoKey + '\'');
      }
      if (level.concepts) {
        s.push('concepts ' + level.concepts);
      }
      if (level.conceptDifficulty) {
        s.push('level_concept_difficulty \'' + level.conceptDifficulty + '\'');
      }
    }
    var l = this.normalizeLevelKind(level.kind) + ' \'' + key.replace(/'/, "\\'") + '\'';
    if (active === false) {
      l += ', active: false';
    }
    if (level.progression) {
      l += ', progression: \'' + level.progression + '\'';
    }
    s.push(l);
    return s;
  },


  /**
   * Levels with kind "puzzle" and "unplugged" are special cases of "level", for
   * the purpose of the ScriptDSL.
   * @param kind
   * @return {string}
   */
  normalizeLevelKind: function normalizeLevelKind(kind) {
    return !kind || kind === _sharedConstants.LevelKind.puzzle || kind === _sharedConstants.LevelKind.unplugged ? _sharedConstants.LevelKind.level : kind;
  },
  render: function render() {
    var _this2 = this;

    var groups = _lodash2.default.groupBy(this.props.stages, function (stage) {
      return stage.flex_category || 'Default';
    });
    var count = 0;
    var afterStage = 1;

    return _react2.default.createElement(
      'div',
      null,
      _lodash2.default.map(groups, function (stages, group) {
        return _react2.default.createElement(
          'div',
          { key: group },
          _react2.default.createElement(
            'div',
            { style: styles.groupHeader },
            'Group ',
            ++count,
            ': ',
            group,
            _react2.default.createElement(_OrderControls2.default, {
              type: _constants.ControlTypes.Group,
              position: afterStage,
              total: Object.keys(groups).length
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.groupBody },
            stages.map(function (stage, index) {
              afterStage++;
              return _react2.default.createElement(_StageCard2.default, {
                key: 'stage-' + index,
                stagesCount: _this2.props.stages.length,
                stage: stage
              });
            }),
            _react2.default.createElement(
              'button',
              {
                onMouseDown: _this2.handleAddStage.bind(null, afterStage - 1),
                className: 'btn',
                style: styles.addStage,
                type: 'button'
              },
              _react2.default.createElement('i', { style: { marginRight: 7 }, className: 'fa fa-plus-circle' }),
              'Add Stage'
            )
          )
        );
      }),
      _react2.default.createElement(
        'button',
        {
          onMouseDown: this.handleAddGroup,
          className: 'btn',
          style: styles.addGroup,
          type: 'button'
        },
        _react2.default.createElement('i', { style: { marginRight: 7 }, className: 'fa fa-plus-circle' }),
        'Add Group'
      ),
      _react2.default.createElement('input', {
        type: 'hidden',
        name: 'script_text',
        value: this.serializeStages(this.props.stages)
      })
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    levelKeyList: state.levelKeyList,
    stages: state.stages
  };
}, function (dispatch) {
  return {
    addGroup: function addGroup(stageName, groupName) {
      dispatch((0, _editorRedux.addGroup)(stageName, groupName));
    },
    addStage: function addStage(position, stageName) {
      dispatch((0, _editorRedux.addStage)(position, stageName));
    }
  };
})(FlexGroup);
module.exports = exports['default'];

/***/ }),

/***/ 3396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(53);

var _constants = __webpack_require__(2156);

var _OrderControls = __webpack_require__(2970);

var _OrderControls2 = _interopRequireDefault(_OrderControls);

var _LevelToken = __webpack_require__(3397);

var _LevelToken2 = _interopRequireDefault(_LevelToken);

var _editorRedux = __webpack_require__(1746);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  checkbox: {
    margin: '0 0 0 7px'
  },
  stageCard: {
    fontSize: 18,
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: _constants.borderRadius,
    padding: 20,
    margin: 10
  },
  stageCardHeader: {
    color: '#5b6770',
    marginBottom: 15
  },
  stageLockable: {
    fontSize: 13,
    marginTop: 3
  },
  addLevel: {
    fontSize: 14,
    background: '#eee',
    border: '1px solid #ddd',
    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
    margin: '5px 0'
  }
};

var StageCard = _react2.default.createClass({
  displayName: 'StageCard',

  propTypes: {
    reorderLevel: _react.PropTypes.func.isRequired,
    addLevel: _react.PropTypes.func.isRequired,
    setStageLockable: _react.PropTypes.func.isRequired,
    stagesCount: _react.PropTypes.number.isRequired,
    stage: _react.PropTypes.object.isRequired
  },

  /**
   * To be populated with the bounding client rect of each level token element.
   */
  metrics: {},

  getInitialState: function getInitialState() {
    return {
      currentPositions: [],
      drag: null,
      dragHeight: null,
      initialPageY: null,
      initialScroll: null,
      newPosition: null,
      startingPositions: null
    };
  },
  handleDragStart: function handleDragStart(position, _ref) {
    var _this = this;

    var pageY = _ref.pageY;

    var startingPositions = this.props.stage.levels.map(function (level) {
      var metrics = _this.metrics[level.position];
      return metrics.top + metrics.height / 2;
    });
    this.setState({
      drag: position,
      dragHeight: this.metrics[position].height + _constants.levelTokenMargin,
      initialPageY: pageY,
      initialScroll: document.body.scrollTop,
      newPosition: position,
      startingPositions: startingPositions
    });
    window.addEventListener('selectstart', this.preventSelect);
    window.addEventListener('mousemove', this.handleDrag);
    window.addEventListener('mouseup', this.handleDragStop);
  },
  handleDrag: function handleDrag(_ref2) {
    var _this2 = this;

    var pageY = _ref2.pageY;

    var scrollDelta = document.body.scrollTop - this.state.initialScroll;
    var delta = pageY - this.state.initialPageY;
    var dragPosition = this.metrics[this.state.drag].top + scrollDelta;
    var newPosition = this.state.drag;
    var currentPositions = this.state.startingPositions.map(function (midpoint, index) {
      var position = index + 1;
      if (position === _this2.state.drag) {
        return delta;
      }
      if (position < _this2.state.drag && dragPosition < midpoint) {
        newPosition--;
        return _this2.state.dragHeight;
      }
      if (position > _this2.state.drag && dragPosition + _this2.state.dragHeight > midpoint) {
        newPosition++;
        return -_this2.state.dragHeight;
      }
      return 0;
    });
    this.setState({ currentPositions: currentPositions, newPosition: newPosition });
  },
  handleDragStop: function handleDragStop() {
    if (this.state.drag !== this.state.newPosition) {
      this.props.reorderLevel(this.props.stage.position, this.state.drag, this.state.newPosition);
    }
    this.setState({ drag: null, newPosition: null, currentPositions: [] });
    window.removeEventListener('selectstart', this.preventSelect);
    window.removeEventListener('mousemove', this.handleDrag);
    window.removeEventListener('mouseup', this.handleDragStop);
  },
  handleAddLevel: function handleAddLevel() {
    this.props.addLevel(this.props.stage.position);
  },
  handleLockableChanged: function handleLockableChanged() {
    this.props.setStageLockable(this.props.stage.position, this.refs.lockable.checked);
  },
  preventSelect: function preventSelect(e) {
    e.preventDefault();
  },
  render: function render() {
    var _this3 = this;

    return _react2.default.createElement(
      'div',
      { style: styles.stageCard },
      _react2.default.createElement(
        'div',
        { style: styles.stageCardHeader },
        'Stage ',
        this.props.stage.position,
        ': ',
        this.props.stage.name,
        _react2.default.createElement(_OrderControls2.default, {
          type: _constants.ControlTypes.Stage,
          position: this.props.stage.position,
          total: this.props.stagesCount
        }),
        _react2.default.createElement(
          'div',
          { style: styles.stageLockable },
          'Require teachers to unlock this stage before students in their section can access it',
          _react2.default.createElement('input', {
            ref: 'lockable',
            defaultChecked: this.props.stage.lockable,
            onChange: this.handleLockableChanged,
            type: 'checkbox',
            style: styles.checkbox
          })
        )
      ),
      this.props.stage.levels.map(function (level) {
        return _react2.default.createElement(_LevelToken2.default, {
          ref: function ref(levelToken) {
            if (levelToken) {
              var metrics = _reactDom2.default.findDOMNode(levelToken).getBoundingClientRect();
              _this3.metrics[level.position] = metrics;
            }
          },
          key: level.position + '_' + level.ids[0],
          level: level,
          stagePosition: _this3.props.stage.position,
          dragging: !!_this3.state.drag,
          drag: level.position === _this3.state.drag,
          delta: _this3.state.currentPositions[level.position - 1] || 0,
          handleDragStart: _this3.handleDragStart
        });
      }),
      _react2.default.createElement(
        'button',
        {
          onMouseDown: this.handleAddLevel,
          className: 'btn',
          style: styles.addLevel,
          type: 'button'
        },
        _react2.default.createElement('i', { style: { marginRight: 7 }, className: 'fa fa-plus-circle' }),
        'Add Level'
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (state) {
  return {};
}, function (dispatch) {
  return {
    reorderLevel: function reorderLevel(stage, originalPosition, newPosition) {
      dispatch((0, _editorRedux.reorderLevel)(stage, originalPosition, newPosition));
    },
    addLevel: function addLevel(stage) {
      dispatch((0, _editorRedux.addLevel)(stage));
    },
    setStageLockable: function setStageLockable(stage, lockable) {
      dispatch((0, _editorRedux.setStageLockable)(stage, lockable));
    }
  };
})(StageCard);
module.exports = exports['default'];

/***/ }),

/***/ 3397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _reactMotion = __webpack_require__(1725);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _constants = __webpack_require__(2156);

var _LevelTokenDetails = __webpack_require__(3398);

var _LevelTokenDetails2 = _interopRequireDefault(_LevelTokenDetails);

var _editorRedux = __webpack_require__(1746);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  levelToken: {
    position: 'relative',
    fontSize: 13,
    background: '#eee',
    borderRadius: _constants.borderRadius,
    margin: _constants.levelTokenMargin + 'px 0'
  },
  reorder: {
    fontSize: 16,
    display: 'table-cell',
    background: '#ddd',
    border: '1px solid #bbb',
    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
    padding: '7px 15px',
    borderTopLeftRadius: _constants.borderRadius,
    borderBottomLeftRadius: _constants.borderRadius,
    cursor: 'ns-resize'
  },
  levelTokenName: {
    padding: 7,
    display: 'table-cell',
    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
    width: '100%',
    borderTop: '1px solid #ddd',
    borderBottom: '1px solid #ddd',
    cursor: 'text'
  },
  variants: {
    color: 'white',
    background: _color2.default.purple,
    padding: '3px 5px',
    lineHeight: '12px',
    borderRadius: 5,
    float: 'right'
  },
  remove: {
    fontSize: 14,
    display: 'table-cell',
    color: 'white',
    background: '#c00',
    border: '1px solid #a00',
    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
    padding: '7px 13px',
    borderTopRightRadius: _constants.borderRadius,
    borderBottomRightRadius: _constants.borderRadius,
    cursor: 'pointer'
  }
};

/**
 * Component for editing puzzle dots with one or more level variants.
 */
var LevelToken = _react2.default.createClass({
  displayName: 'LevelToken',

  propTypes: {
    levelKeyList: _react.PropTypes.object.isRequired,
    toggleExpand: _react.PropTypes.func.isRequired,
    removeLevel: _react.PropTypes.func.isRequired,
    level: _react.PropTypes.object.isRequired,
    stagePosition: _react.PropTypes.number.isRequired,
    dragging: _react.PropTypes.bool.isRequired,
    drag: _react.PropTypes.bool.isRequired,
    delta: _react.PropTypes.number,
    handleDragStart: _react.PropTypes.func.isRequired
  },

  handleDragStart: function handleDragStart(e) {
    this.props.handleDragStart(this.props.level.position, e);
  },
  toggleExpand: function toggleExpand() {
    this.props.toggleExpand(this.props.stagePosition, this.props.level.position);
  },
  handleRemove: function handleRemove() {
    this.props.removeLevel(this.props.stagePosition, this.props.level.position);
  },
  render: function render() {
    var _this = this;

    var springConfig = { stiffness: 1000, damping: 80 };
    return _react2.default.createElement(
      _reactMotion.Motion,
      {
        style: this.props.drag ? {
          y: this.props.dragging ? this.props.delta : 0,
          scale: (0, _reactMotion.spring)(1.02, springConfig),
          shadow: (0, _reactMotion.spring)(5, springConfig)
        } : {
          y: this.props.dragging ? (0, _reactMotion.spring)(this.props.delta, springConfig) : 0,
          scale: 1,
          shadow: 0
        }, key: this.props.level.position
      },

      // Use react-motion to interpolate the following values and create
      // smooth transitions.
      function (_ref) {
        var y = _ref.y,
            scale = _ref.scale,
            shadow = _ref.shadow;
        return _react2.default.createElement(
          'div',
          {
            style: Object.assign({}, styles.levelToken, {
              transform: 'translate3d(0, ' + y + 'px, 0) scale(' + scale + ')',
              boxShadow: _color2.default.shadow + ' 0 ' + shadow + 'px ' + shadow * 3 + 'px',
              zIndex: _this.props.drag ? 1000 : 500 - _this.props.level.position
            })
          },
          _react2.default.createElement(
            'div',
            { style: styles.reorder, onMouseDown: _this.handleDragStart },
            _react2.default.createElement('i', { className: 'fa fa-arrows-v' })
          ),
          _react2.default.createElement(
            'span',
            { style: styles.levelTokenName, onMouseDown: _this.toggleExpand },
            _this.props.levelKeyList[_this.props.level.activeId],
            _this.props.level.ids.length > 1 && _react2.default.createElement(
              'span',
              { style: styles.variants },
              _this.props.level.ids.length,
              ' variants'
            )
          ),
          _react2.default.createElement(
            'div',
            { style: styles.remove, onMouseDown: _this.handleRemove },
            _react2.default.createElement('i', { className: 'fa fa-times' })
          ),
          _this.props.level.expand && _react2.default.createElement(_LevelTokenDetails2.default, {
            level: _this.props.level,
            stagePosition: _this.props.stagePosition
          })
        );
      }
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    levelKeyList: state.levelKeyList
  };
}, function (dispatch) {
  return {
    toggleExpand: function toggleExpand(stage, level) {
      dispatch((0, _editorRedux.toggleExpand)(stage, level));
    },
    removeLevel: function removeLevel(stage, level) {
      dispatch((0, _editorRedux.removeLevel)(stage, level));
    }
  };
})(LevelToken);
module.exports = exports['default'];

/***/ }),

/***/ 3398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _reactVirtualizedSelect = __webpack_require__(922);

var _reactVirtualizedSelect2 = _interopRequireDefault(_reactVirtualizedSelect);

__webpack_require__(842);

__webpack_require__(806);

__webpack_require__(843);

var _lodash = __webpack_require__(82);

var _lodash2 = _interopRequireDefault(_lodash);

var _editorRedux = __webpack_require__(1746);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  checkbox: {
    margin: '0 0 0 7px'
  },
  levelTokenActive: {
    padding: 7,
    background: '#f4f4f4',
    border: '1px solid #ddd',
    borderTop: 0
  },
  levelFieldLabel: {
    display: 'inline-block',
    lineHeight: '36px',
    margin: '0 7px 0 5px'
  },
  levelTypeSelect: {
    width: 'calc(100% - 80px)',
    margin: '0 0 5px 80px'
  },
  textInput: {
    height: 34,
    width: 350,
    boxSizing: 'border-box',
    verticalAlign: 'baseline',
    margin: '7px 0 10px 0'
  },
  divider: {
    borderColor: '#ddd',
    margin: '7px 0'
  },
  addVariant: {
    fontSize: 14,
    background: 'white',
    border: '1px solid #ddd',
    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
    margin: '0'
  },
  progression: {
    paddingTop: 5
  }
};

var ArrowRenderer = function ArrowRenderer(_ref) {
  var onMouseDown = _ref.onMouseDown;

  return _react2.default.createElement('i', { className: 'fa fa-chevron-down', onMouseDown: onMouseDown });
};
ArrowRenderer.propTypes = { onMouseDown: _react.PropTypes.func.isRequried };

var LevelTokenDetails = _react2.default.createClass({
  displayName: 'LevelTokenDetails',

  propTypes: {
    levelKeyList: _react.PropTypes.object.isRequired,
    chooseLevelType: _react.PropTypes.func.isRequired,
    chooseLevel: _react.PropTypes.func.isRequired,
    addVariant: _react.PropTypes.func.isRequired,
    setActiveVariant: _react.PropTypes.func.isRequired,
    setField: _react.PropTypes.func.isRequired,
    level: _react.PropTypes.object.isRequired,
    stagePosition: _react.PropTypes.number.isRequired
  },

  levelKindOptions: [{ label: 'Puzzle', value: 'puzzle' }, { label: 'Assessment', value: 'assessment' }, { label: 'Named Level', value: 'named_level' }, { label: 'Unplugged', value: 'unplugged' }],

  componentWillMount: function componentWillMount() {
    this.levelKeyOptions = _lodash2.default.map(this.props.levelKeyList, function (label, value) {
      return {
        label: label,
        value: +value
      };
    });
  },
  containsLegacyLevel: function containsLegacyLevel() {
    var _this = this;

    return this.props.level.ids.some(function (id) {
      return (/^blockly:/.test(_this.props.levelKeyList[id])
      );
    });
  },
  handleLevelTypeSelected: function handleLevelTypeSelected(_ref2) {
    var value = _ref2.value;

    this.props.chooseLevelType(this.props.stagePosition, this.props.level.position, value);
  },
  handleLevelSelected: function handleLevelSelected(index, _ref3) {
    var value = _ref3.value;

    this.props.chooseLevel(this.props.stagePosition, this.props.level.position, index, value);
  },
  handleAddVariant: function handleAddVariant() {
    this.props.addVariant(this.props.stagePosition, this.props.level.position);
  },
  handleActiveVariantChanged: function handleActiveVariantChanged(id) {
    this.props.setActiveVariant(this.props.stagePosition, this.props.level.position, id);
  },
  handleFieldChange: function handleFieldChange(field) {
    var ref = this[field + 'Input'];
    if (ref) {
      this.props.setField(this.props.stagePosition, this.props.level.position, _defineProperty({}, field, ref.value));
    }
  },
  render: function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'div',
      { style: styles.levelTokenActive },
      _react2.default.createElement(
        'span',
        { style: Object.assign({ float: 'left' }, styles.levelFieldLabel) },
        'Level type'
      ),
      _react2.default.createElement(_reactVirtualizedSelect2.default, {
        value: this.props.level.kind,
        options: this.levelKindOptions,
        onChange: this.handleLevelTypeSelected,
        clearable: false,
        arrowRenderer: ArrowRenderer,
        style: styles.levelTypeSelect
      }),
      this.containsLegacyLevel() && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          { style: styles.levelFieldLabel },
          'Skin'
        ),
        _react2.default.createElement('input', {
          defaultValue: this.props.level.skin,
          type: 'text',
          style: styles.textInput,
          ref: function ref(skinInput) {
            return _this2.skinInput = skinInput;
          },
          onChange: this.handleFieldChange.bind(this, 'skin')
        }),
        _react2.default.createElement(
          'div',
          { style: { float: 'right' } },
          _react2.default.createElement(
            'span',
            { style: styles.levelFieldLabel },
            'Video key'
          ),
          _react2.default.createElement('input', {
            defaultValue: this.props.level.videoKey,
            type: 'text',
            style: styles.textInput,
            ref: function ref(videoKeyInput) {
              return _this2.videoKeyInput = videoKeyInput;
            },
            onChange: this.handleFieldChange.bind(this, 'videoKey')
          })
        ),
        _react2.default.createElement('div', { style: { clear: 'both' } }),
        _react2.default.createElement(
          'span',
          { style: styles.levelFieldLabel },
          'Difficulty'
        ),
        _react2.default.createElement('input', {
          defaultValue: this.props.level.conceptDifficulty,
          type: 'text',
          style: styles.textInput,
          ref: function ref(conceptDifficultyInput) {
            return _this2.conceptDifficultyInput = conceptDifficultyInput;
          },
          onChange: this.handleFieldChange.bind(this, 'conceptDifficulty')
        }),
        _react2.default.createElement(
          'div',
          { style: { float: 'right' } },
          _react2.default.createElement(
            'span',
            { style: styles.levelFieldLabel },
            'Concepts'
          ),
          _react2.default.createElement('input', {
            defaultValue: this.props.level.concepts,
            type: 'text',
            style: Object.assign({}, styles.textInput, { width: 320 }),
            ref: function ref(conceptsInput) {
              return _this2.conceptsInput = conceptsInput;
            },
            onChange: this.handleFieldChange.bind(this, 'concepts')
          })
        )
      ),
      this.props.level.ids.map(function (id, index) {
        return _react2.default.createElement(
          'div',
          { key: id },
          _this2.props.level.ids.length > 1 && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('hr', { style: styles.divider }),
            _react2.default.createElement(
              'span',
              { style: styles.levelFieldLabel },
              'Active'
            ),
            _react2.default.createElement('input', {
              type: 'radio',
              onChange: _this2.handleActiveVariantChanged.bind(_this2, id),
              defaultChecked: id === _this2.props.level.activeId,
              style: styles.checkbox,
              name: 'radio-' + _this2.props.stagePosition + '-' + _this2.props.level.position
            })
          ),
          _react2.default.createElement(_reactVirtualizedSelect2.default, {
            options: _this2.levelKeyOptions,
            value: id,
            onChange: _this2.handleLevelSelected.bind(null, index),
            clearable: false,
            arrowRenderer: ArrowRenderer
          })
        );
      }),
      this.props.level.progression && _react2.default.createElement(
        'div',
        { style: styles.progression },
        'Progression Name: ',
        this.props.level.progression
      ),
      _react2.default.createElement('hr', { style: styles.divider }),
      _react2.default.createElement(
        'button',
        {
          onMouseDown: this.handleAddVariant,
          className: 'btn',
          style: styles.addVariant,
          type: 'button'
        },
        _react2.default.createElement('i', { style: { marginRight: 7 }, className: 'fa fa-plus-circle' }),
        'Add Variant'
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    levelKeyList: state.levelKeyList
  };
}, function (dispatch) {
  return {
    chooseLevelType: function chooseLevelType(stage, level, value) {
      dispatch((0, _editorRedux.chooseLevelType)(stage, level, value));
    },
    chooseLevel: function chooseLevel(stage, level, variant, value) {
      dispatch((0, _editorRedux.chooseLevel)(stage, level, variant, value));
    },
    addVariant: function addVariant(stage, level) {
      dispatch((0, _editorRedux.addVariant)(stage, level));
    },
    setActiveVariant: function setActiveVariant(stage, level, id) {
      dispatch((0, _editorRedux.setActiveVariant)(stage, level, id));
    },
    setField: function setField(stage, level, modifier) {
      dispatch((0, _editorRedux.setField)(stage, level, modifier));
    }
  };
})(LevelTokenDetails);
module.exports = exports['default'];

/***/ }),

/***/ 3399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NBSP = '\xA0';

var styles = {
  main: {
    border: '1px solid ' + _color2.default.light_gray,
    padding: 10
  },
  stage: {
    paddingTop: 10,
    paddingBottom: 10
  },
  stageName: {
    fontSize: 16,
    textDecoration: 'underline'
  },
  original: {
    backgroundColor: _color2.default.lightest_gray
  },
  update: {
    backgroundColor: 'lightgreen'
  },
  diff: {
    backgroundColor: _color2.default.realyellow
  },
  expander: {
    paddingLeft: 10
  },
  collapsed: {
    display: 'none'
  },
  mismatch: {
    backgroundColor: _color2.default.realyellow
  }
};

/**
 * Shows a list of stages that have descriptions, along with those descriptions.
 * If you click the import button, it grabs new descriptions from curriculum
 * builder and shows both sets.
 */
var StageDescriptions = _react2.default.createClass({
  displayName: 'StageDescriptions',

  propTypes: {
    scriptName: _react.PropTypes.string.isRequired,
    currentDescriptions: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      name: _react.PropTypes.string.isRequired,
      descriptionStudent: _react.PropTypes.string.isRequired,
      descriptionTeacher: _react.PropTypes.string.isRequired
    })).isRequired
  },

  getInitialState: function getInitialState() {
    return {
      // start collapsed
      collapsed: true,
      buttonText: null,
      importedDescriptions: [],
      mismatchedStages: []
    };
  },
  expand: function expand() {
    this.setState({
      collapsed: false
    });
  },
  processImport: function processImport(result) {
    var importedDescriptions = [];
    var currentDescriptions = this.props.currentDescriptions;


    var mismatchedStages = [];

    result.lessons.forEach(function (lesson, index) {
      if (index >= currentDescriptions.length) {
        // CB gave us more lessons that we have on LB. throw the extras away
        mismatchedStages.push(lesson.title);
        return;
      }

      if (currentDescriptions[index].name !== lesson.title) {
        mismatchedStages.push(lesson.title);
      }

      importedDescriptions.push({
        name: lesson.title,
        descriptionStudent: lesson.student_desc,
        descriptionTeacher: lesson.teacher_desc
      });
    });

    this.setState({
      buttonText: 'Imported',
      importedDescriptions: importedDescriptions,
      mismatchedStages: mismatchedStages
    });
  },
  importDescriptions: function importDescriptions() {
    var _this = this;

    this.setState({
      buttonText: 'Querying server...'
    });

    _jquery2.default.getJSON('https://curriculum.code.org/metadata/' + this.props.scriptName + '.json').done(this.processImport).fail(function (jqXHR) {
      _this.setState({
        buttonText: jqXHR.statusText
      });
    });
  },
  updatedStageDescriptions: function updatedStageDescriptions() {
    var currentDescriptions = this.props.currentDescriptions;
    var importedDescriptions = this.state.importedDescriptions;

    // we want to make sure that we use the existing names, with the imported descriptions

    return currentDescriptions.map(function (item, index) {
      return {
        name: item.name,
        descriptionStudent: importedDescriptions[index].descriptionStudent,
        descriptionTeacher: importedDescriptions[index].descriptionTeacher
      };
    });
  },
  render: function render() {
    var currentDescriptions = this.props.currentDescriptions;
    var importedDescriptions = this.state.importedDescriptions;


    var hasImported = importedDescriptions.length > 0;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Stage Descriptions'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.main },
        this.state.collapsed && _react2.default.createElement(
          'button',
          { className: 'btn', onClick: this.expand },
          'Click to Expand'
        ),
        !this.state.collapsed && _react2.default.createElement(
          'div',
          null,
          currentDescriptions.map(function (stage, index) {
            var currentStudent = stage.descriptionStudent;
            var currentTeacher = stage.descriptionTeacher;

            var importedStage = importedDescriptions[index];
            var updatedStudent = hasImported && importedStage.descriptionStudent;
            var updatedTeacher = hasImported && importedStage.descriptionTeacher;

            return _react2.default.createElement(
              'div',
              { style: styles.stage, key: index },
              _react2.default.createElement(
                'div',
                { style: styles.stageName },
                stage.name
              ),
              hasImported && importedStage.name !== stage.name && _react2.default.createElement(
                'div',
                null,
                'Lesson name on Curriculum Builder:',
                " ",
                _react2.default.createElement(
                  'span',
                  { style: styles.diff },
                  importedStage.name
                )
              ),
              _react2.default.createElement(
                'label',
                null,
                'Student Description',
                _react2.default.createElement(
                  'div',
                  { style: styles.original },
                  currentStudent || NBSP
                ),
                hasImported && updatedStudent !== currentStudent && _react2.default.createElement(
                  'div',
                  { style: styles.update },
                  updatedStudent
                )
              ),
              _react2.default.createElement(
                'label',
                null,
                'Teacher Description',
                _react2.default.createElement(
                  'div',
                  { style: styles.original },
                  currentTeacher || NBSP
                ),
                hasImported && updatedTeacher !== currentTeacher && _react2.default.createElement(
                  'div',
                  { style: styles.update },
                  updatedTeacher
                )
              )
            );
          }),
          this.state.mismatchedStages.length > 0 && _react2.default.createElement(
            'div',
            { style: styles.mismatch },
            _react2.default.createElement(
              'div',
              { style: { fontWeight: 'bold' } },
              'Curriculum Builder stages with different names than their levelbuilder counterparts. If there are a lot of these, it may indicate them being ordered differently in the two environments.'
            ),
            this.state.mismatchedStages.map(function (name, index) {
              return _react2.default.createElement(
                'div',
                { key: index },
                '- ',
                name
              );
            })
          ),
          hasImported && _react2.default.createElement('input', {
            name: 'stage_descriptions',
            type: 'hidden',
            defaultValue: JSON.stringify(this.updatedStageDescriptions())
          }),
          _react2.default.createElement(
            'button',
            {
              className: 'btn',
              disabled: !!this.state.buttonText,
              onClick: this.importDescriptions
            },
            this.state.buttonText || "Import from Curriculum Builder"
          )
        )
      )
    );
  }
});

exports.default = StageDescriptions;
module.exports = exports['default'];

/***/ }),

/***/ 3400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _scriptAnnouncementsRedux = __webpack_require__(1003);

var _ScriptAnnouncements = __webpack_require__(1723);

var _ScriptAnnouncements2 = _interopRequireDefault(_ScriptAnnouncements);

var _Notification = __webpack_require__(815);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  announcement: {
    border: '1px solid #ccc',
    padding: 5,
    marginBottom: 10
  },
  preview: {
    marginTop: 10
  }
};

var Announce = function Announce(_ref) {
  var announcement = _ref.announcement,
      inputStyle = _ref.inputStyle,
      index = _ref.index,
      _onChange = _ref.onChange,
      onRemove = _ref.onRemove;
  return _react2.default.createElement(
    'div',
    { style: styles.announcement },
    _react2.default.createElement(
      'h5',
      null,
      'Announcement #',
      index + 1
    ),
    _react2.default.createElement(
      'label',
      null,
      'Notice',
      _react2.default.createElement('input', {
        value: announcement.notice,
        style: inputStyle,
        onChange: function onChange(event) {
          return _onChange(index, 'notice', event.target.value);
        }
      })
    ),
    _react2.default.createElement(
      'label',
      null,
      'Details',
      _react2.default.createElement('input', {
        value: announcement.details,
        style: inputStyle,
        onChange: function onChange(event) {
          return _onChange(index, 'details', event.target.value);
        }
      })
    ),
    _react2.default.createElement(
      'label',
      null,
      'Link',
      _react2.default.createElement('input', {
        value: announcement.link,
        style: inputStyle,
        onChange: function onChange(event) {
          return _onChange(index, 'link', event.target.value);
        }
      })
    ),
    _react2.default.createElement(
      'label',
      null,
      'Type',
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'select',
          {
            value: announcement.type,
            onChange: function onChange(event) {
              return _onChange(index, 'type', event.target.value);
            }
          },
          Object.values(_Notification.NotificationType).map(function (type) {
            return _react2.default.createElement(
              'option',
              { key: type, value: type },
              type
            );
          })
        )
      )
    ),
    _react2.default.createElement(
      'button',
      {
        className: 'btn',
        onClick: function onClick() {
          return onRemove(index);
        }
      },
      'Remove'
    )
  );
};
Announce.propTypes = {
  announcement: _scriptAnnouncementsRedux.announcementShape,
  inputStyle: _react.PropTypes.object.isRequired,
  index: _react.PropTypes.number.isRequired,
  onRemove: _react.PropTypes.func.isRequired,
  onChange: _react.PropTypes.func.isRequired
};

var ScriptAnnouncementsEditor = function (_Component) {
  _inherits(ScriptAnnouncementsEditor, _Component);

  function ScriptAnnouncementsEditor(props) {
    _classCallCheck(this, ScriptAnnouncementsEditor);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.add = function () {
      _this.setState({
        announcements: _this.state.announcements.concat({
          notice: '',
          details: '',
          link: '',
          type: _Notification.NotificationType.information
        })
      });
    };

    _this.remove = function (index) {
      var newAnnouncements = [].concat(_toConsumableArray(_this.state.announcements));
      newAnnouncements.splice(index, 1);
      _this.setState({
        announcements: newAnnouncements
      });
    };

    _this.change = function (index, field, newValue) {
      var newAnnouncements = [].concat(_toConsumableArray(_this.state.announcements));
      newAnnouncements[index][field] = newValue;
      _this.setState({
        announcements: newAnnouncements
      });
    };

    _this.state = {
      announcements: props.defaultAnnouncements
    };
    return _this;
  }

  ScriptAnnouncementsEditor.prototype.render = function render() {
    var _this2 = this;

    var inputStyle = this.props.inputStyle;
    var announcements = this.state.announcements;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('input', {
        type: 'hidden',
        name: 'script_announcements',
        value: JSON.stringify(announcements)
      }),
      _react2.default.createElement(
        'h4',
        null,
        'Script Announcements'
      ),
      _react2.default.createElement(
        'div',
        null,
        'This can be used to provide one or more announcements that will show up for signed in teachers on the script overview page.'
      ),
      announcements.map(function (announce, index) {
        return _react2.default.createElement(Announce, {
          key: index,
          index: index,
          announcement: announce,
          inputStyle: inputStyle,
          onChange: _this2.change,
          onRemove: _this2.remove
        });
      }),
      _react2.default.createElement(
        'button',
        {
          className: 'btn',
          onClick: this.add
        },
        'Additional Announcement'
      ),
      announcements.length > 0 && _react2.default.createElement(
        'div',
        { style: styles.preview },
        _react2.default.createElement(
          'div',
          null,
          'Preview:'
        ),
        _react2.default.createElement(_ScriptAnnouncements2.default, { announcements: announcements })
      )
    );
  };

  return ScriptAnnouncementsEditor;
}(_react.Component);

ScriptAnnouncementsEditor.propTypes = {
  defaultAnnouncements: _react.PropTypes.arrayOf(_scriptAnnouncementsRedux.announcementShape),
  inputStyle: _react.PropTypes.object.isRequired
};
exports.default = ScriptAnnouncementsEditor;
module.exports = exports['default'];

/***/ }),

/***/ 3401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ProgressLegend = __webpack_require__(1721);

var _ProgressLegend2 = _interopRequireDefault(_ProgressLegend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component used in levelbuilder that provides a checkbox for whether we should
 * use the CSF or CSP version of the legend, and includes a preview of what the
 * legend looks like
 */
var LegendSelector = function (_Component) {
  _inherits(LegendSelector, _Component);

  function LegendSelector(props) {
    _classCallCheck(this, LegendSelector);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleChange = function () {
      _this.setState({ checked: !_this.state.checked });
    };

    _this.state = {
      checked: _this.props.excludeCsf
    };
    return _this;
  }

  LegendSelector.prototype.render = function render() {
    var inputStyle = this.props.inputStyle;

    return _react2.default.createElement(
      'label',
      null,
      'Exclude CSF Progress Bubbles From Legend',
      _react2.default.createElement('input', {
        name: 'exclude_csf_column_in_legend',
        type: 'checkbox',
        checked: this.state.checked,
        onChange: this.handleChange,
        style: inputStyle
      }),
      _react2.default.createElement(_ProgressLegend2.default, { excludeCsfColumn: this.state.checked })
    );
  };

  return LegendSelector;
}(_react.Component);

LegendSelector.propTypes = {
  excludeCsf: _react.PropTypes.bool.isRequired,
  inputStyle: _react.PropTypes.object
};
exports.default = LegendSelector;
module.exports = exports['default'];

/***/ })

},[3392]);