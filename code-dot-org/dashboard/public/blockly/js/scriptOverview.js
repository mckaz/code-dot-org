webpackJsonp([38],{

/***/ 3530:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3531);


/***/ }),

/***/ 3531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _progress = __webpack_require__(1282);

var _verifiedTeacherRedux = __webpack_require__(960);

var _redux = __webpack_require__(787);

var _redux2 = __webpack_require__(237);

var _plcHeaderRedux = __webpack_require__(3532);

var _plcHeaderRedux2 = _interopRequireDefault(_plcHeaderRedux);

var _scriptAnnouncementsRedux = __webpack_require__(1003);

var _scriptAnnouncementsRedux2 = _interopRequireDefault(_scriptAnnouncementsRedux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(initPage);

function initPage() {
  var script = document.querySelector('script[data-scriptoverview]');
  var config = JSON.parse(script.dataset.scriptoverview);

  var scriptData = config.scriptData,
      plcBreadcrumb = config.plcBreadcrumb;

  var store = (0, _redux.getStore)();

  if (plcBreadcrumb) {
    // Dispatch breadcrumb props so that ScriptOverviewHeader can add the breadcrumb
    // as appropriate
    (0, _redux2.registerReducers)({ plcHeader: _plcHeaderRedux2.default });
    store.dispatch((0, _plcHeaderRedux.setPlcHeader)(plcBreadcrumb.unit_name, plcBreadcrumb.course_view_path));
  }

  if (scriptData.has_verified_resources) {
    store.dispatch((0, _verifiedTeacherRedux.setVerifiedResources)(true));
  }

  if (scriptData.script_announcements) {
    (0, _redux2.registerReducers)({ scriptAnnouncements: _scriptAnnouncementsRedux2.default });
    scriptData.script_announcements.forEach(function (announcement) {
      return store.dispatch((0, _scriptAnnouncementsRedux.addAnnouncement)(announcement.notice, announcement.details, announcement.link, announcement.type));
    });
  }

  (0, _progress.renderCourseProgress)(scriptData);
}

/***/ }),

/***/ 3532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = plcHeader;
var SET_PLC_HEADER = 'plcHeader/SET_PLC_HEADER';
var setPlcHeader = exports.setPlcHeader = function setPlcHeader(unitName, courseViewPath) {
  return {
    type: SET_PLC_HEADER,
    unitName: unitName,
    courseViewPath: courseViewPath
  };
};

var initialState = {
  unitName: '',
  courseViewPath: ''
};

function plcHeader() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === SET_PLC_HEADER) {
    return {
      unitName: action.unitName,
      courseViewPath: action.courseViewPath
    };
  }

  return state;
}

/***/ })

},[3530]);