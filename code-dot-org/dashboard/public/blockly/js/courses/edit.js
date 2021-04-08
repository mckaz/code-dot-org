webpackJsonp([32],{

/***/ 3591:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3592);


/***/ }),

/***/ 3592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _CourseEditor = __webpack_require__(3593);

var _CourseEditor2 = _interopRequireDefault(_CourseEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(showCourseEditor);

function showCourseEditor() {
  var scriptData = document.querySelector('script[data-course-editor]');
  var courseEditorData = JSON.parse(scriptData.dataset.courseEditor);

  var teacherResources = (courseEditorData.course_summary.teacher_resources || []).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        type = _ref2[0],
        link = _ref2[1];

    return { type: type, link: link };
  });

  // Eventually we want to do this all via redux
  _reactDom2.default.render(_react2.default.createElement(_CourseEditor2.default, {
    name: courseEditorData.course_summary.name,
    title: courseEditorData.course_summary.title,
    descriptionShort: courseEditorData.course_summary.description_short,
    descriptionStudent: courseEditorData.course_summary.description_student,
    descriptionTeacher: courseEditorData.course_summary.description_teacher,
    scriptsInCourse: courseEditorData.course_summary.scripts.map(function (script) {
      return script.name;
    }),
    scriptNames: courseEditorData.script_names.sort(),
    teacherResources: teacherResources,
    hasVerifiedResources: courseEditorData.course_summary.has_verified_resources
  }), document.getElementById('course_editor'));
}

/***/ }),

/***/ 3593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _CourseScriptsEditor = __webpack_require__(3594);

var _CourseScriptsEditor2 = _interopRequireDefault(_CourseScriptsEditor);

var _ResourcesEditor = __webpack_require__(2971);

var _ResourcesEditor2 = _interopRequireDefault(_ResourcesEditor);

var _CourseOverviewTopRow = __webpack_require__(2994);

var _CourseOverviewTopRow2 = _interopRequireDefault(_CourseOverviewTopRow);

var _resourceType = __webpack_require__(927);

var _reactRedux = __webpack_require__(53);

var _redux = __webpack_require__(787);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var CourseEditor = function (_Component) {
  _inherits(CourseEditor, _Component);

  function CourseEditor() {
    _classCallCheck(this, CourseEditor);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CourseEditor.prototype.render = function render() {
    var _props = this.props,
        name = _props.name,
        title = _props.title,
        descriptionShort = _props.descriptionShort,
        descriptionStudent = _props.descriptionStudent,
        descriptionTeacher = _props.descriptionTeacher,
        scriptsInCourse = _props.scriptsInCourse,
        scriptNames = _props.scriptNames,
        teacherResources = _props.teacherResources;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        name
      ),
      _react2.default.createElement(
        'label',
        null,
        'Title',
        _react2.default.createElement('input', {
          type: 'text',
          name: 'title',
          defaultValue: title,
          style: styles.input
        })
      ),
      _react2.default.createElement(
        'label',
        null,
        'Short Description (used in course cards on homepage)',
        _react2.default.createElement('textarea', {
          name: 'description_short',
          defaultValue: descriptionShort,
          rows: 5,
          style: styles.input
        })
      ),
      _react2.default.createElement(
        'label',
        null,
        'Student Description',
        _react2.default.createElement('textarea', {
          name: 'description_student',
          defaultValue: descriptionStudent,
          rows: 5,
          style: styles.input
        })
      ),
      _react2.default.createElement(
        'label',
        null,
        'Teacher Description',
        _react2.default.createElement('textarea', {
          name: 'description_teacher',
          defaultValue: descriptionTeacher,
          rows: 5,
          style: styles.input
        })
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
          'Check if this course has resources (such as lockable lessons and answer keys) for verified teachers, and we want to notify non-verified teachers that this is the case.'
        )
      ),
      _react2.default.createElement(
        'label',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Scripts'
        ),
        _react2.default.createElement(
          'div',
          null,
          'The dropdown(s) below represent the orded set of scripts in this course. To remove a script, just set the dropdown to the default (first) value.'
        ),
        _react2.default.createElement(_CourseScriptsEditor2.default, {
          inputStyle: styles.input,
          scriptsInCourse: scriptsInCourse,
          scriptNames: scriptNames
        })
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
          'Select up to three Teacher Resources buttons you\'d like to have show up on the top of the course overview page'
        ),
        _react2.default.createElement(_ResourcesEditor2.default, {
          inputStyle: styles.input,
          resources: teacherResources,
          maxResources: 3,
          renderPreview: function renderPreview(resources) {
            return _react2.default.createElement(
              _reactRedux.Provider,
              { store: (0, _redux.getStore)() },
              _react2.default.createElement(_CourseOverviewTopRow2.default, {
                sectionsInfo: [],
                id: -1,
                title: 'Unused title',
                resources: resources
              })
            );
          }
        })
      )
    );
  };

  return CourseEditor;
}(_react.Component);

CourseEditor.propTypes = {
  name: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  descriptionShort: _react.PropTypes.string,
  descriptionStudent: _react.PropTypes.string,
  descriptionTeacher: _react.PropTypes.string,
  scriptsInCourse: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  scriptNames: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  teacherResources: _react.PropTypes.arrayOf(_resourceType.resourceShape).isRequired,
  hasVerifiedResources: _react.PropTypes.bool.isRequired
};
exports.default = CourseEditor;
module.exports = exports['default'];

/***/ }),

/***/ 3594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scriptsInCourseEditor = function (_Component) {
  _inherits(scriptsInCourseEditor, _Component);

  function scriptsInCourseEditor(props) {
    _classCallCheck(this, scriptsInCourseEditor);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);

    _this.state = {
      // want provided script names, plus one empty one
      scriptsInCourse: props.scriptsInCourse.concat('')
    };
    return _this;
  }

  scriptsInCourseEditor.prototype.handleChange = function handleChange(event) {
    var root = _reactDom2.default.findDOMNode(this);

    var selected = Array.prototype.map.call(root.children, function (child) {
      return child.value;
    });
    // If the last script has a value, add a new script without one
    if (selected[selected.length - 1] !== '') {
      selected.push('');
    }
    this.setState({
      scriptsInCourse: selected
    });
  };

  scriptsInCourseEditor.prototype.render = function render() {
    var _this2 = this;

    var scriptNames = this.props.scriptNames;

    return _react2.default.createElement(
      'div',
      null,
      this.state.scriptsInCourse.map(function (selectedScript, index) {
        return _react2.default.createElement(
          'select',
          {
            name: 'scripts[]',
            style: _extends({}, _this2.props.inputStyle, {
              opacity: selectedScript === "" ? 0.4 : 1
            }),
            key: index,
            value: selectedScript,
            onChange: _this2.handleChange
          },
          _react2.default.createElement(
            'option',
            { key: '-1', value: '' },
            'Select a script to add to course'
          ),
          scriptNames.map(function (name, index) {
            return _react2.default.createElement(
              'option',
              {
                key: index,
                value: name
              },
              name
            );
          })
        );
      })
    );
  };

  return scriptsInCourseEditor;
}(_react.Component);

scriptsInCourseEditor.propTypes = {
  inputStyle: _react.PropTypes.object.isRequired,
  scriptsInCourse: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
  scriptNames: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired
};
exports.default = scriptsInCourseEditor;
module.exports = exports['default'];

/***/ })

},[3591]);