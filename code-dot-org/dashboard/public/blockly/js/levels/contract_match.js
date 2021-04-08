webpackJsonp([49],{

/***/ 3409:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3410);


/***/ }),

/***/ 3410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(35);

var _jquery2 = _interopRequireDefault(_jquery);

var _codeStudioLevels = __webpack_require__(738);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _LegacyDialogContents = __webpack_require__(1130);

var _locale = __webpack_require__(40);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _jquery2.default)(window).load(function () {
  var _typesToColors;

  _jquery2.default.widget('custom.coloriconselectmenu', _jquery2.default.ui.selectmenu, {
    /**
     * Override the jQuery selectmenu to add a color square icon driven by the
     * data-color attribute on select elements.
     * @param ul
     * @param item
     * @returns {jQuery}
     * @private
     */
    _renderItem: function _renderItem(ul, item) {
      var li = (0, _jquery2.default)("<li>", { text: item.label });
      var color = item.element.attr("data-color");
      makeColorSquareIcon(color).appendTo(li);
      return li.appendTo(ul);
    },
    styleCurrentValue: function styleCurrentValue() {
      addSquareIconToButton(this.element);
    }
  });

  /**
   * @param {string} color
   * @returns {string}
   */
  function bgColorStyle(color) {
    return 'background-color: ' + color;
  }

  /**
   * Styles a button element to have a color square icon
   * @param {Element} selectElement
   */
  function addSquareIconToButton(selectElement) {
    var $element = (0, _jquery2.default)(selectElement);
    var selectMenuButton = (0, _jquery2.default)('#' + $element.attr('id') + '-button .ui-selectmenu-text');
    var selectedColor = $element.find('option:selected').attr('data-color');
    makeColorSquareIcon(selectedColor).prependTo(selectMenuButton);
  }

  /**
   * @param {string} color
   * @returns {jQuery}
   */
  function makeColorSquareIcon(color) {
    return (0, _jquery2.default)('<div>', { class: 'color-square-icon', style: bgColorStyle(color) });
  }

  /**
   * Enum of block types. Used for block and domain/range coloring
   * @enum {string}
   */
  var blockValueType = {
    NONE: 'None',
    NUMBER: 'Number',
    STRING: 'String',
    IMAGE: 'Image',
    BOOLEAN: 'Boolean'
  };

  var typesToColors = (_typesToColors = {}, _defineProperty(_typesToColors, blockValueType.NUMBER, '#00ccff'), _defineProperty(_typesToColors, blockValueType.STRING, '#009999'), _defineProperty(_typesToColors, blockValueType.IMAGE, '#9900cc'), _defineProperty(_typesToColors, blockValueType.BOOLEAN, '#336600'), _typesToColors);

  /**
   * Component Structure:
   *
   * - ContractForm
   *   - DomainsList
   *     - TypeChooser
   */

  var ContractForm = function (_React$Component) {
    _inherits(ContractForm, _React$Component);

    function ContractForm() {
      var _temp, _this, _ret;

      _classCallCheck(this, ContractForm);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.nextUniqueID_ = 0, _this.state = {
        name: '',
        rangeType: blockValueType.NUMBER,
        domainTypes: []
      }, _this.onNameChangeEvent = function (event) {
        _this.setState({
          name: event.target.value
        });
      }, _this.onRangeChange = function (newType) {
        _this.setState({
          rangeType: newType
        });
      }, _this.onDomainChange = function (domainKey, newType) {
        _this.setState({
          domainTypes: _this.state.domainTypes.map(function (object) {
            if (object.key === domainKey) {
              object.type = newType;
            }
            return object;
          })
        });
      }, _this.onDomainAdd = function () {
        var nextDomainID = _this.grabUniqueID();
        _this.setState({
          domainTypes: _this.state.domainTypes.concat({
            key: 'domain' + nextDomainID,
            type: blockValueType.NUMBER,
            order: nextDomainID
          })
        });
      }, _this.onDomainRemove = function (domainKey) {
        _this.setState({
          domainTypes: _this.state.domainTypes.filter(function (object) {
            return object.key !== domainKey;
          })
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    ContractForm.prototype.getName = function getName() {
      return this.state.name;
    };

    ContractForm.prototype.getRangeType = function getRangeType() {
      return this.state.rangeType;
    };

    ContractForm.prototype.getDomainTypes = function getDomainTypes() {
      return this.state.domainTypes;
    };

    ContractForm.prototype.grabUniqueID = function grabUniqueID() {
      return this.nextUniqueID_++;
    };

    /**
     * @param data {{
     *   name: string,
     *   rangeType: BlockValueType,
     *   domainTypes: {
     *     type: BlockValueType,
     *     key: string
     *   },
     * }}
     */


    ContractForm.prototype.render = function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { id: 'sectionTitle' },
          'Name'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', { id: 'functionNameText', onChange: this.onNameChangeEvent, placeholder: 'Name', type: 'text', value: this.state.name })
        ),
        _react2.default.createElement(
          'div',
          { id: 'sectionTitle' },
          'Domain ',
          _react2.default.createElement(
            'span',
            { className: 'section-type-hint' },
            '(the domain is the type of input)'
          )
        ),
        _react2.default.createElement(DomainsList, {
          domainTypes: this.state.domainTypes,
          onDomainChange: this.onDomainChange,
          onDomainAdd: this.onDomainAdd,
          onDomainRemove: this.onDomainRemove
        }),
        _react2.default.createElement(
          'div',
          { id: 'sectionTitle', className: 'clear' },
          'Range ',
          _react2.default.createElement(
            'span',
            { className: 'section-type-hint' },
            '(the range is the type of output)'
          )
        ),
        _react2.default.createElement(TypeChooser, { type: this.state.rangeType, onTypeChange: this.onRangeChange })
      );
    };

    return ContractForm;
  }(_react2.default.Component);

  var DomainsList = function (_React$Component2) {
    _inherits(DomainsList, _React$Component2);

    function DomainsList() {
      _classCallCheck(this, DomainsList);

      return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
    }

    DomainsList.prototype.render = function render() {
      var _this3 = this;

      var sortedDomains = this.props.domainTypes.sort(function (a, b) {
        return a.order > b.order;
      });
      var typeChoiceNodes = sortedDomains.map(function (object) {
        return _react2.default.createElement(
          'div',
          { className: 'clear', key: object.key },
          _react2.default.createElement(TypeChooser, {
            order: object.order,
            type: object.type,
            key: object.key,
            onTypeChange: function onTypeChange() {
              var _props;

              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              return (_props = _this3.props).onDomainChange.apply(_props, [object.key].concat(args));
            }
          }),
          _react2.default.createElement(
            'button',
            {
              className: 'btn domain-x-button',
              onClick: function onClick() {
                var _props2;

                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = arguments[_key3];
                }

                return (_props2 = _this3.props).onDomainRemove.apply(_props2, [object.key].concat(args));
              }
            },
            'Remove'
          )
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'domainsList' },
        typeChoiceNodes,
        _react2.default.createElement(
          'button',
          { className: 'btn domain-add-button', onClick: this.props.onDomainAdd },
          'Add Domain'
        )
      );
    };

    return DomainsList;
  }(_react2.default.Component);

  DomainsList.propTypes = {
    domainTypes: _react.PropTypes.array.isRequired,
    onDomainAdd: _react.PropTypes.func.isRequired,
    onDomainChange: _react.PropTypes.func.isRequired,
    onDomainRemove: _react.PropTypes.func.isRequired
  };

  var TypeChooser = function (_React$Component3) {
    _inherits(TypeChooser, _React$Component3);

    function TypeChooser() {
      var _temp2, _this4, _ret2;

      _classCallCheck(this, TypeChooser);

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component3.call.apply(_React$Component3, [this].concat(args))), _this4), _this4.selectmenuChange = function (selectChange) {
        _this4.props.onTypeChange(selectChange.target.value);
      }, _temp2), _possibleConstructorReturn(_this4, _ret2);
    }

    TypeChooser.prototype.componentDidMount = function componentDidMount() {
      (0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).coloriconselectmenu({
        select: function select() {
          addSquareIconToButton(this);
        },
        change: this.selectmenuChange
      });
      (0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).coloriconselectmenu('styleCurrentValue');
    };

    TypeChooser.prototype.componentWillUnmount = function componentWillUnmount() {
      (0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).coloriconselectmenu('destroy');
    };

    TypeChooser.prototype.render = function render() {
      var divStyle = {
        backgroundColor: typesToColors[this.props.type]
      };
      return _react2.default.createElement(
        'select',
        { defaultValue: this.props.type, style: divStyle },
        _react2.default.createElement(
          'option',
          { 'data-color': typesToColors[blockValueType.NUMBER], value: blockValueType.NUMBER },
          blockValueType.NUMBER
        ),
        _react2.default.createElement(
          'option',
          { 'data-color': typesToColors[blockValueType.STRING], value: blockValueType.STRING },
          blockValueType.STRING
        ),
        _react2.default.createElement(
          'option',
          { 'data-color': typesToColors[blockValueType.IMAGE], value: blockValueType.IMAGE },
          blockValueType.IMAGE
        ),
        _react2.default.createElement(
          'option',
          { 'data-color': typesToColors[blockValueType.BOOLEAN], value: blockValueType.BOOLEAN },
          blockValueType.BOOLEAN
        )
      );
    };

    return TypeChooser;
  }(_react2.default.Component);

  TypeChooser.propTypes = {
    onTypeChange: _react.PropTypes.func.isRequired,
    type: _react.PropTypes.string
  };


  var contractForm = _reactDom2.default.render(_react2.default.createElement(ContractForm, null), document.getElementById('contractForm'));

  /**
   * Creates a getResult function compatible with _dialog.html.haml's getResult call
   * Generating this rather than passing directly to be explicit about inputs for now
   * @param {ContractForm} contractForm
   * @param {Object} levelData
   * @returns {Function} getResult function
   */
  function generateGetResultFunction(contractForm, levelData) {
    return function () {
      /** @type {ContractForm} */
      var functionName = contractForm.getName().trim();
      var rangeType = contractForm.getRangeType();
      var domains = contractForm.getDomainTypes();

      var answers = levelData.answers;

      var formattedDomains = domains.map(function (domain) {
        return domain.type;
      }).join('|');

      var formattedResponse = functionName + '|' + rangeType + '|' + formattedDomains;

      var checkUserAnswer = checkAnswer.bind(null, functionName, rangeType, formattedDomains);
      var answerErrors = answers.map(checkUserAnswer);

      // If any succeeded, we succeed. Otherwise, grab the first error.
      var result = answerErrors.some(function (answerResult) {
        return answerResult === '';
      });
      var errorDialog = void 0;
      if (!result) {
        errorDialog = _react2.default.createElement(_LegacyDialogContents.ContractMatchErrorDialog, { text: answerErrors[0] });
      }

      return {
        response: formattedResponse,
        result: result,
        errorDialog: errorDialog
      };
    };
  }

  /**
   * Set the getResult used by _dialog.html.haml
   * @return {Object} response, result, error type
   */
  var getResult = generateGetResultFunction(contractForm, window.levelData);
  (0, _codeStudioLevels.registerGetResult)(getResult);

  /**
   * Given the user's submission and a correct answer, returns the error type,
   * or empty string if correct.
   * @param {string} functionName
   * @param {string} rangeInput
   * @param {string} domainInput
   * @param {string} correctAnswer
   * @returns {string} Text to display in error dialog
   */
  function checkAnswer(functionName, rangeInput, domainInput, correctAnswer) {
    var correctAnswerItems = correctAnswer.split('|');
    var correctName = correctAnswerItems[0];
    var correctRange = correctAnswerItems[1];
    var correctDomain = correctAnswerItems.slice(2);
    var domainInputItems = domainInput.split('|');

    if (correctName !== functionName) {
      if (functionName.toLowerCase() === correctName.toLowerCase()) {
        return _locale2.default.contractMatchBadNameCase();
      }
      return _locale2.default.contractMatchBadName();
    }
    if (correctRange !== rangeInput) {
      return _locale2.default.contractMatchBadRange();
    }
    if (correctDomain.length !== domainInputItems.length) {
      return _locale2.default.contractMatchBadDomainSize();
    }
    for (var i = 0; i < correctDomain.length; i++) {
      var correctDomainType = correctDomain[i];
      var domainType = domainInputItems[i];
      if (correctDomainType !== domainType) {
        return _locale2.default.contractMatchBadDomainType();
      }
    }
    return '';
  }
});

/***/ })

},[3409]);