webpackJsonp([36],{

/***/ 3455:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3456);


/***/ }),

/***/ 3456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _schoolInfoManager = __webpack_require__(3457);

var _schoolInfoManager2 = _interopRequireDefault(_schoolInfoManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.SchoolInfoManager = _schoolInfoManager2.default;

/***/ }),

/***/ 3457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SchoolInfoManager;

var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SchoolInfoManager(existingOptions) {

  var districtListFirstLoad = true;

  var districtElement = (0, _jquery2.default)('#school-district-id');

  function scrollToBottom() {
    if (!existingOptions['suppressScrolling']) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  function setupDistrictDropdown(stateCode) {
    show('#school-district');
    (0, _jquery2.default)('#school-district-other').prop('checked', false).change();
    var selectize = districtElement[0].selectize;
    if (selectize) {
      selectize.clear();
      selectize.destroy();
    }

    selectize = districtElement.selectize({
      maxItems: 1,
      sortField: [{ field: 'text', direction: 'asc' }],
      onChange: function onChange() {
        var districtId = districtElement[0].selectize.getValue();
        if (districtId) {
          setupSchoolDropdown(districtId, (0, _jquery2.default)('#school-type').val());
        }
      },
      onDropdownOpen: scrollToBottom
    });

    districtElement[0].selectize.load(function (callback) {
      // Scroll down to show the loading spinner at just the right time.
      // onInitialize is too early, and onLoad is too late.
      scrollToBottom();
      _jquery2.default.ajax({
        url: "/dashboardapi/v1/school-districts/" + stateCode,
        type: 'GET',
        error: function error() {
          callback();
          districtListFirstLoad = false;
        },
        success: function success(response) {
          var districts = [];
          for (var i = 0; i < response.length; i++) {
            var entry = response[i];
            districts.push({ value: entry.id, text: entry.name });
          }
          callback(districts);

          // Only do this first time we do a load of this dropdown content.
          // The assumption is that if we had a valid school_district_id then
          // we would hit this codepath immediately after page load.
          if (districtListFirstLoad && existingOptions && existingOptions.school_district_id) {
            (0, _jquery2.default)('#school-district-id')[0].selectize.setValue(existingOptions.school_district_id);
          }
          districtListFirstLoad = false;
        }
      });
    });
  }

  function enableDistrictDropdown(enable) {
    var selectize = districtElement[0].selectize;
    if (selectize) {
      if (enable) {
        selectize.enable();
      } else {
        selectize.disable();
        selectize.clear();
      }
    }
  }

  var schoolListFirstLoad = true;

  var schoolElement = (0, _jquery2.default)('#school-id');

  function setupSchoolDropdown(districtCode, schoolType) {
    show('#school');
    // hides school name and zip
    (0, _jquery2.default)('#school-other').prop('checked', false).change();
    var selectize = schoolElement[0].selectize;
    if (selectize) {
      selectize.clear();
      selectize.destroy();
    }

    selectize = schoolElement.selectize({
      maxItems: 1,
      sortField: [{ field: 'text', direction: 'asc' }],
      onDropdownOpen: scrollToBottom
    });

    schoolElement[0].selectize.load(function (callback) {
      // Scroll down to show the loading spinner at just the right time.
      // onInitialize is too early, and onLoad is too late.
      scrollToBottom();
      _jquery2.default.ajax({
        url: "/dashboardapi/v1/schools/" + districtCode + "/" + schoolType,
        type: 'GET',
        error: function error() {
          callback();
          schoolListFirstLoad = false;
        },
        success: function success(response) {
          var schools = [];
          for (var i = 0; i < response.length; i++) {
            var entry = response[i];
            schools.push({ value: entry.id, text: entry.name });
          }
          callback(schools);

          // Only do this first time we do a load of this dropdown content.
          // The assumption is that if we had a valid school_id then
          // we would hit this codepath immediately after page load.
          if (schoolListFirstLoad && existingOptions) {
            if (existingOptions.school_id) {
              (0, _jquery2.default)('#school-id')[0].selectize.setValue(existingOptions.school_id);
            }

            // Try to set these fields again in case they only recently became visible.

            if (existingOptions.school_other) {
              (0, _jquery2.default)('#school-other').prop('checked', true).change();
            }

            if (existingOptions.school_name) {
              (0, _jquery2.default)('#school-name').val(existingOptions.school_name).change();
            }

            if (existingOptions.zip) {
              (0, _jquery2.default)('#school-zipcode').val(existingOptions.zip).change();
            }
          }
          schoolListFirstLoad = false;

          // Some districts have only charter or only public schools in them. Hide the
          // dropdown and show a warning if there are no schools of the selected type.
          if (schools.length === 0) {
            (0, _jquery2.default)('#school-other').prop('checked', true).change();
            closestFormGroupOrItemBlock('#school').hide();
            (0, _jquery2.default)('#no-schools-warning').show();
          }
        }
      });
    });
  }

  function enableSchoolDropdown(enable) {
    var selectize = schoolElement[0].selectize;
    if (selectize) {
      if (enable) {
        selectize.enable();
      } else {
        selectize.disable();
        selectize.clear();
      }
    }
  }

  function clearAndHideDistrict() {
    enableDistrictDropdown(false);
    (0, _jquery2.default)("#school-district-other").prop('checked', false);
    (0, _jquery2.default)("#school-district-name").val("");
    closestFormGroupOrItemBlock('#school-district').hide();
    closestFormGroupOrItemBlock('#school-district-name').hide();
  }

  function clearAndHideSchool() {
    enableSchoolDropdown(false);
    (0, _jquery2.default)("#school-other").prop('checked', false);
    (0, _jquery2.default)("#school-name").val("");
    closestFormGroupOrItemBlock('#school').hide();
    (0, _jquery2.default)('#no-schools-warning').hide();
    closestFormGroupOrItemBlock('#school-name').hide();
  }

  function isPrivateOrOther() {
    return ['private', 'other'].indexOf((0, _jquery2.default)('#school-type').val()) > -1;
  }

  function isPublicOrCharter() {
    return ['public', 'charter'].indexOf((0, _jquery2.default)('#school-type').val()) > -1;
  }

  function isHomeschool() {
    return (0, _jquery2.default)('#school-type').val() === 'homeschool';
  }

  function isAfterSchool() {
    return (0, _jquery2.default)('#school-type').val() === 'afterschool';
  }

  function isOther() {
    return (0, _jquery2.default)('#school-type').val() === 'other';
  }

  function isUs() {
    return (0, _jquery2.default)('#school-country').val() === 'US';
  }

  function closestFormGroupOrItemBlock(selector) {
    var closest = (0, _jquery2.default)(selector).closest('.form-group');
    if (closest.length === 0) {
      closest = (0, _jquery2.default)(selector).closest('.itemblock');
    }
    return closest;
  }

  function show(selector) {
    closestFormGroupOrItemBlock(selector).show();
  }

  function clearAndHide(selector) {
    (0, _jquery2.default)(selector).val('');
    closestFormGroupOrItemBlock(selector).hide();
  }

  (0, _jquery2.default)('#school-country').change(function () {
    (0, _jquery2.default)("input[type=submit]").prop("disabled", false);
    if ((0, _jquery2.default)(this).val() === 'US') {
      clearAndHide('#school-name');
      clearAndHide('#school-address');
    }
    (0, _jquery2.default)('#school-type').change();
  });

  // Show fields corresponding to the current contents of the type dropdown.
  (0, _jquery2.default)('#school-type').change(function () {
    if (isUs() && isPublicOrCharter()) {
      show('#school-state');
      // Trigger the district dropdown if state is already set.
      if ((0, _jquery2.default)('#school-state').val()) {
        (0, _jquery2.default)('#school-state').change();
      }
      clearAndHide('#school-zipcode');
      clearAndHide('#school-name');
      clearAndHide('#school-address');
    } else if (isUs() && isPrivateOrOther()) {
      show('#school-state');
      show('#school-zipcode');
      clearAndHideDistrict();
      clearAndHideSchool();
      show('#school-name');
      clearAndHide('#school-address');
    } else if (isUs() && isHomeschool()) {
      show('#school-zipcode');
      show('#school-state');
      clearAndHideDistrict();
      clearAndHideSchool();
      clearAndHide('#school-name');
      clearAndHide('#school-address');
    } else if (isUs() && isAfterSchool()) {
      show('#school-zipcode');
      show('#school-state');
      clearAndHideDistrict();
      clearAndHideSchool();
      show('#school-name');
      clearAndHide('#school-address');
    } else if (!isUs() && isHomeschool()) {
      clearAndHide('#school-zipcode');
      clearAndHide('#school-state');
      clearAndHideDistrict();
      clearAndHideSchool();
      clearAndHide('#school-name');
      show('#school-address');
    } else if (!isUs() && isAfterSchool()) {
      clearAndHide('#school-zipcode');
      clearAndHide('#school-state');
      clearAndHideDistrict();
      clearAndHideSchool();
      show('#school-name');
      show('#school-address');
    } else {
      // no type or non-US
      clearAndHide('#school-zipcode');
      clearAndHide('#school-state');
      clearAndHideDistrict();
      clearAndHideSchool();
      if (!isUs()) {
        show('#school-name');
        show('#school-address');
      }
    }
    if (isAfterSchool() || isOther()) {
      (0, _jquery2.default)("#school-name-title").hide();
      (0, _jquery2.default)("#school-organization-name-title").show();
      (0, _jquery2.default)("#school-zip-title").hide();
      (0, _jquery2.default)("#school-organization-zip-title").show();
    } else {
      (0, _jquery2.default)("#school-name-title").show();
      (0, _jquery2.default)("#school-organization-name-title").hide();
      (0, _jquery2.default)("#school-zip-title").show();
      (0, _jquery2.default)("#school-organization-zip-title").hide();
    }
  });

  (0, _jquery2.default)('#school-state').change(function () {
    if (isPublicOrCharter()) {
      setupDistrictDropdown((0, _jquery2.default)('#school-state').val());
      clearAndHideSchool();
    }
  });

  (0, _jquery2.default)('#school-district-other').change(function () {
    if ((0, _jquery2.default)(this).prop('checked')) {
      // Disable districts.
      enableDistrictDropdown(false);

      show('#school-district-name');
      clearAndHideSchool();
      show('#school-zipcode');
      show('#school-name');
    } else {
      // Enable districts.
      enableDistrictDropdown(true);
      clearAndHide('#school-district-name');
      clearAndHide('#school-zipcode');
      clearAndHide('#school-name');
    }
  });

  (0, _jquery2.default)('#school-other').change(function () {
    if ((0, _jquery2.default)(this).prop('checked')) {
      enableSchoolDropdown(false);
      show('#school-zipcode');
      show('#school-name');
    } else {
      enableSchoolDropdown(true);
      clearAndHide('#school-zipcode');
      clearAndHide('#school-name');
    }
  });

  // Now that all the handlers are set up, initialize the control with existing
  // values if they were provided.

  if (existingOptions) {
    if (existingOptions.country) {
      (0, _jquery2.default)('#school-country').val(existingOptions.country).change();
    }

    if (existingOptions.school_type) {
      (0, _jquery2.default)('#school-type').val(existingOptions.school_type).change();
    }

    if (existingOptions.state) {
      (0, _jquery2.default)('#school-state').val(existingOptions.state).change();
    }

    if (existingOptions.school_district_other) {
      (0, _jquery2.default)('#school-district-other').prop('checked', true).change();
    }

    if (existingOptions.school_district_name) {
      (0, _jquery2.default)('#school-district-name').val(existingOptions.school_district_name).change();
    }

    if (existingOptions.school_other) {
      (0, _jquery2.default)('#school-other').prop('checked', true).change();
    }

    if (existingOptions.school_name) {
      (0, _jquery2.default)('#school-name').val(existingOptions.school_name).change();
    }

    if (existingOptions.zip) {
      (0, _jquery2.default)('#school-zipcode').val(existingOptions.zip).change();
    }

    if (existingOptions.full_address) {
      (0, _jquery2.default)('#school-address').val(existingOptions.full_address).change();
    }
  }
}
module.exports = exports['default'];

/***/ })

},[3455]);