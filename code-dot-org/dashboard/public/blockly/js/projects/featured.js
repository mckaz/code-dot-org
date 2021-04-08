webpackJsonp([27],{

/***/ 2830:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageWithStatus = exports.STATUS = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileoverview Wraps an <img> with a <div> that indicates the status of the
 * image being loaded. The purpose of this is to be able to wait until images
 * have finished loading within tests.
 */

/** @enum {string} */
var STATUS = exports.STATUS = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
};

var ImageWithStatus = exports.ImageWithStatus = function (_Component) {
  _inherits(ImageWithStatus, _Component);

  function ImageWithStatus(props) {
    _classCallCheck(this, ImageWithStatus);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleImageLoad = _this.handleImageLoad.bind(_this);
    _this.handleImageError = _this.handleImageError.bind(_this);

    _this.state = {
      imageStatus: STATUS.LOADING
    };
    return _this;
  }

  ImageWithStatus.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.setState({ imageStatus: STATUS.LOADING });
    }
  };

  ImageWithStatus.prototype.handleImageLoad = function handleImageLoad() {
    this.setState({ imageStatus: STATUS.LOADED });
  };

  ImageWithStatus.prototype.handleImageError = function handleImageError() {
    this.setState({ imageStatus: STATUS.ERROR });
  };

  ImageWithStatus.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { style: this.props.wrapperStyle },
      _react2.default.createElement('img', {
        src: this.props.src,
        width: this.props.width,
        height: this.props.height,
        onLoad: this.handleImageLoad,
        onError: this.handleImageError
      }),
      _react2.default.createElement('div', { 'data-image-status': this.state.imageStatus })
    );
  };

  return ImageWithStatus;
}(_react.Component);

ImageWithStatus.propTypes = {
  src: _react.PropTypes.string.isRequired,
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number,
  wrapperStyle: _react.PropTypes.object
};

/***/ }),

/***/ 3451:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3452);


/***/ }),

/***/ 3452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FeaturedProjects = __webpack_require__(3453);

var _FeaturedProjects2 = _interopRequireDefault(_FeaturedProjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  var script = document.querySelector('script[data-featuredprojects]');
  var featuredProjectsData = JSON.parse(script.dataset.featuredprojects);
  var currentFeaturedProjects = featuredProjectsData.currently_featured_projects;
  var archivedUnfeaturedProjects = featuredProjectsData.archived_unfeatured_projects;

  _reactDom2.default.render(_react2.default.createElement(_FeaturedProjects2.default, {
    currentFeaturedProjects: currentFeaturedProjects,
    archivedUnfeaturedProjects: archivedUnfeaturedProjects
  }), document.getElementById('featured-projects-container'));
});

/***/ }),

/***/ 3453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _FeaturedProjectsTable = __webpack_require__(3454);

var _FeaturedProjectsTable2 = _interopRequireDefault(_FeaturedProjectsTable);

var _projectConstants = __webpack_require__(1148);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeaturedProjects = function (_React$Component) {
  _inherits(FeaturedProjects, _React$Component);

  function FeaturedProjects() {
    _classCallCheck(this, FeaturedProjects);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  FeaturedProjects.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        null,
        'Currently Featured Projects'
      ),
      _react2.default.createElement(_FeaturedProjectsTable2.default, {
        projectList: this.props.currentFeaturedProjects,
        tableVersion: _projectConstants.featuredProjectTableTypes.current
      }),
      _react2.default.createElement(
        'h3',
        null,
        'Archive of Previously Featured Projects'
      ),
      _react2.default.createElement(_FeaturedProjectsTable2.default, {
        projectList: this.props.archivedUnfeaturedProjects,
        tableVersion: _projectConstants.featuredProjectTableTypes.archived
      })
    );
  };

  return FeaturedProjects;
}(_react2.default.Component);

FeaturedProjects.propTypes = {
  currentFeaturedProjects: _react.PropTypes.arrayOf(_projectConstants.featuredProjectDataPropType).isRequired,
  archivedUnfeaturedProjects: _react.PropTypes.arrayOf(_projectConstants.featuredProjectDataPropType).isRequired
};
exports.default = FeaturedProjects;
module.exports = exports['default'];

/***/ }),

/***/ 3454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.COLUMNS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

var _color = __webpack_require__(44);

var _color2 = _interopRequireDefault(_color);

var _ImageWithStatus = __webpack_require__(2830);

var _reactabular = __webpack_require__(921);

var _wrapped_sortable = __webpack_require__(1129);

var _wrapped_sortable2 = _interopRequireDefault(_wrapped_sortable);

var _orderBy = __webpack_require__(1742);

var _orderBy2 = _interopRequireDefault(_orderBy);

var _projectConstants = __webpack_require__(1148);

var _QuickActionsCell = __webpack_require__(1748);

var _QuickActionsCell2 = _interopRequireDefault(_QuickActionsCell);

var _tableConstants = __webpack_require__(2089);

var _PopUpMenu = __webpack_require__(1011);

var _PopUpMenu2 = _interopRequireDefault(_PopUpMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROJECT_DEFAULT_IMAGE = '/blockly/media/projects/project_default.png';

var THUMBNAIL_SIZE = 65;

/** @enum {number} */
var COLUMNS = exports.COLUMNS = {
  THUMBNAIL: 0,
  PROJECT_NAME: 1,
  APP_TYPE: 2,
  LAST_PUBLISHED: 3,
  LAST_FEATURED: 4,
  ACTIONS: 5
};

var styles = exports.styles = {
  cellFirst: {
    borderWidth: '1px 0px 1px 1px',
    borderColor: _color2.default.border_light_gray
  },
  headerCellFirst: {
    borderWidth: '0px 0px 1px 0px',
    borderColor: _color2.default.border_light_gray
  },
  cellThumbnail: {
    width: THUMBNAIL_SIZE,
    minWidth: THUMBNAIL_SIZE,
    padding: 2
  },
  headerCellThumbnail: {
    padding: 0
  },
  cellName: {
    borderWidth: '1px 1px 1px 0px',
    borderColor: _color2.default.border_light_gray,
    padding: 15,
    width: 250
  },
  headerCellName: {
    borderWidth: '0px 1px 1px 0px',
    borderColor: _color2.default.border_light_gray,
    padding: 15
  },
  cellType: {
    width: 120
  },
  thumbnailWrapper: {
    height: THUMBNAIL_SIZE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

// Cell formatters.
var thumbnailFormatter = function thumbnailFormatter(thumbnailUrl, _ref) {
  var rowData = _ref.rowData;

  var projectUrl = "/projects/" + rowData.type + "/" + rowData.channel + "/";
  thumbnailUrl = thumbnailUrl || PROJECT_DEFAULT_IMAGE;
  return _react2.default.createElement(
    "a",
    { style: _tableConstants.tableLayoutStyles.link, href: projectUrl, target: "_blank" },
    _react2.default.createElement(_ImageWithStatus.ImageWithStatus, {
      src: thumbnailUrl,
      width: THUMBNAIL_SIZE,
      wrapperStyle: styles.thumbnailWrapper
    })
  );
};

var nameFormatter = function nameFormatter(projectName, _ref2) {
  var rowData = _ref2.rowData;

  var url = "/projects/" + rowData.type + "/" + rowData.channel + "/";
  return _react2.default.createElement(
    "a",
    { style: _tableConstants.tableLayoutStyles.link, href: url, target: "_blank" },
    projectName
  );
};

var unfeature = function unfeature(channel) {
  var url = "/featured_projects/" + channel + "/unfeature";
  $.ajax({
    url: url,
    type: 'PUT',
    dataType: 'json'
  }).done(handleSuccess).fail(handleUnfeatureFailure);
};

var handleSuccess = function handleSuccess() {
  window.location.reload(true);
};

var handleUnfeatureFailure = function handleUnfeatureFailure() {
  alert("Shucks. Something went wrong - this project is still featured.");
};

var handleFeatureFailure = function handleFeatureFailure() {
  alert("Shucks. Something went wrong - this project wasn't featured.");
};

var actionsFormatterFeatured = function actionsFormatterFeatured(actions, _ref3) {
  var rowData = _ref3.rowData;

  return _react2.default.createElement(
    _QuickActionsCell2.default,
    null,
    _react2.default.createElement(
      _PopUpMenu2.default.Item,
      {
        onClick: function onClick() {
          return unfeature(rowData.channel);
        }
      },
      _locale2.default.stopFeaturing()
    )
  );
};

var feature = function feature(channel, publishedAt) {
  var url = "/featured_projects/" + channel + "/feature";
  if (!publishedAt) {
    alert(_locale2.default.featureUnpublishedWarning());
  }
  $.ajax({
    url: url,
    type: 'PUT',
    dataType: 'json'
  }).done(handleSuccess).fail(handleFeatureFailure);
};

var actionsFormatterUnfeatured = function actionsFormatterUnfeatured(actions, _ref4) {
  var rowData = _ref4.rowData;

  return _react2.default.createElement(
    _QuickActionsCell2.default,
    null,
    _react2.default.createElement(
      _PopUpMenu2.default.Item,
      {
        onClick: function onClick() {
          return feature(rowData.channel, rowData.publishedAt);
        }
      },
      _locale2.default.featureAgain()
    )
  );
};

var dateFormatter = function dateFormatter(time) {
  if (time) {
    var date = new Date(time);
    return date.toLocaleDateString();
  } else {
    return _locale2.default.no();
  }
};

var typeFormatter = function typeFormatter(type) {
  return _projectConstants.FEATURED_PROJECT_TYPE_MAP[type];
};

var FeaturedProjectsTable = function (_React$Component) {
  _inherits(FeaturedProjectsTable, _React$Component);

  function FeaturedProjectsTable() {
    var _temp, _this, _ret;

    _classCallCheck(this, FeaturedProjectsTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = _defineProperty({}, COLUMNS.PROJECT_NAME, {
      direction: 'desc',
      position: 0
    }), _this.getSortingColumns = function () {
      return _this.state.sortingColumns || {};
    }, _this.onSort = function (selectedColumn) {
      _this.setState({
        sortingColumns: _reactabular.sort.byColumn({
          sortingColumns: _this.state.sortingColumns,
          // Custom sortingOrder removes 'no-sort' from the cycle
          sortingOrder: {
            FIRST: 'asc',
            asc: 'desc',
            desc: 'asc'
          },
          selectedColumn: selectedColumn
        })
      });
    }, _this.getColumns = function (sortable) {
      var tableVersion = _this.props.tableVersion;
      var dataColumns = [{
        property: 'thumbnailUrl',
        header: {
          props: { style: _extends({}, _tableConstants.tableLayoutStyles.headerCell, styles.headerCellFirst, styles.headerCellThumbnail, _tableConstants.tableLayoutStyles.unsortableHeader) }
        },
        cell: {
          format: thumbnailFormatter,
          props: { style: _extends({}, _tableConstants.tableLayoutStyles.cell, styles.cellFirst, styles.cellThumbnail) }
        }
      }, {
        property: 'projectName',
        header: {
          label: _locale2.default.projectName(),
          props: { style: _extends({}, _tableConstants.tableLayoutStyles.headerCell, styles.headerCellName) }
        },
        cell: {
          format: nameFormatter,
          props: { style: _extends({}, _tableConstants.tableLayoutStyles.cell, styles.cellName) }
        }
      }, {
        property: 'type',
        header: {
          label: _locale2.default.projectType(),
          props: { style: _tableConstants.tableLayoutStyles.headerCell },
          transforms: [sortable]
        },
        cell: {
          format: typeFormatter,
          props: { style: _extends({}, styles.cellType, _tableConstants.tableLayoutStyles.cell) }
        }
      }, {
        property: 'publishedAt',
        header: {
          label: _locale2.default.published(),
          props: { style: _tableConstants.tableLayoutStyles.headerCell },
          transforms: [sortable]
        },
        cell: {
          format: dateFormatter,
          props: { style: _tableConstants.tableLayoutStyles.cell }
        }
      }, {
        property: 'featuredAt',
        header: {
          label: _locale2.default.featured(),
          props: { style: _tableConstants.tableLayoutStyles.headerCell },
          transforms: [sortable]
        },
        cell: {
          format: dateFormatter,
          props: { style: _tableConstants.tableLayoutStyles.cell }
        }
      }];
      var archiveColumns = [{
        property: 'unfeaturedAt',
        header: {
          label: _locale2.default.unfeatured(),
          props: { style: _tableConstants.tableLayoutStyles.headerCell },
          transforms: [sortable]
        },
        cell: {
          format: dateFormatter,
          props: { style: _tableConstants.tableLayoutStyles.cell }
        }
      }, {
        property: 'actions',
        header: {
          label: _locale2.default.quickActions(),
          props: {
            style: _extends({}, _tableConstants.tableLayoutStyles.headerCell, _tableConstants.tableLayoutStyles.unsortableHeader)
          }
        },
        cell: {
          format: actionsFormatterUnfeatured,
          props: { style: _tableConstants.tableLayoutStyles.cell }
        }
      }];
      var currentColumns = [{
        property: 'actions',
        header: {
          label: _locale2.default.quickActions(),
          props: {
            style: _extends({}, _tableConstants.tableLayoutStyles.headerCell, _tableConstants.tableLayoutStyles.unsortableHeader)
          }
        },
        cell: {
          format: actionsFormatterFeatured,
          props: { style: _tableConstants.tableLayoutStyles.cell }
        }
      }];

      if (tableVersion === "currentFeatured") {
        return dataColumns.concat(currentColumns);
      } else {
        return dataColumns.concat(archiveColumns);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // The user requested a new sorting column. Adjust the state accordingly.


  FeaturedProjectsTable.prototype.render = function render() {
    // Define a sorting transform that can be applied to each column
    var sortable = (0, _wrapped_sortable2.default)(this.getSortingColumns, this.onSort, _tableConstants.sortableOptions);
    var columns = this.getColumns(sortable);
    var sortingColumns = this.getSortingColumns();

    var sortedRows = _reactabular.sort.sorter({
      columns: columns,
      sortingColumns: sortingColumns,
      sort: _orderBy2.default
    })(this.props.projectList);

    return _react2.default.createElement(
      _reactabular.Table.Provider,
      {
        columns: columns,
        style: _tableConstants.tableLayoutStyles.table
      },
      _react2.default.createElement(_reactabular.Table.Header, null),
      _react2.default.createElement(_reactabular.Table.Body, { rows: sortedRows, rowKey: "channel" })
    );
  };

  return FeaturedProjectsTable;
}(_react2.default.Component);

FeaturedProjectsTable.propTypes = {
  projectList: _react.PropTypes.arrayOf(_projectConstants.featuredProjectDataPropType).isRequired,
  tableVersion: _react.PropTypes.oneOf(Object.values(_projectConstants.featuredProjectTableTypes)).isRequired
};
exports.default = FeaturedProjectsTable;

/***/ })

},[3451]);