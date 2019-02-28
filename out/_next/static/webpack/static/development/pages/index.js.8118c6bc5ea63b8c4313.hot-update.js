webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AnimatedItem.js":
/*!************************************!*\
  !*** ./components/AnimatedItem.js ***!
  \************************************/
/*! exports provided: AnimatedItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedItem", function() { return AnimatedItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_flip_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flip-toolkit */ "./node_modules/react-flip-toolkit/es/index.js");
var _jsxFileName = "/Users/Liam/Desktop/pye-luis-next-ssr/components/AnimatedItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var AnimatedItem =
/*#__PURE__*/
function (_Component) {
  _inherits(AnimatedItem, _Component);

  function AnimatedItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AnimatedItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AnimatedItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      fullScreen: false,
      playVideo: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleFullScreen", function () {
      var item = _this.props.item;

      if (item.isVideo) {
        _this.setState(function (prevState) {
          return {
            playVideo: !_this.state.playVideo
          };
        });
      }

      _this.setState(function (prevState) {
        return {
          fullScreen: !prevState.fullScreen
        };
      });
    });

    return _this;
  }

  _createClass(AnimatedItem, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return item.isVideo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_1___default.a, {
        url: item.fields.file.url,
        playing: this.state.playVideo,
        controls: this.state.playVideo,
        className: "thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flip_toolkit__WEBPACK_IMPORTED_MODULE_2__["Flipper"], {
        flipKey: this.state.fullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flip_toolkit__WEBPACK_IMPORTED_MODULE_2__["Flipped"], {
        flipId: "square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundImage: this.state.fullScreen ? "url(".concat(item.fields.file.url, ")") : 'none'
        },
        className: this.state.fullScreen ? 'full-screen-item item' : 'item',
        onClick: this.toggleFullScreen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        "data-href": item.fields.file.url + '?w=2000&h=2000&fm=jpg&fl=progressive',
        src: item.fields.file.url + '?w=300&h=300&fm=jpg&fl=progressive',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })))));
    }
  }]);

  return AnimatedItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ })

})
//# sourceMappingURL=index.js.8118c6bc5ea63b8c4313.hot-update.js.map