webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Liam/Desktop/pye-luis-next-ssr/components/Gallery.js";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var Gallery = function Gallery(_ref) {
  var photoGallery = _ref.photoGallery,
      videos = _ref.videos,
      toggleCuration = _ref.toggleCuration;

  var _videos = videos.map(function (video) {
    video.fields.file.isVideo = true;
    return video.fields.file;
  });

  var items = [].concat(_toConsumableArray(_videos), _toConsumableArray(photoGallery.fields.photos));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page",
    id: "curator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "curator_title_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "PL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "curator_line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "curator_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Gallery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "curator_line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Count em")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "curator_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "curator_list_content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "connect_btn_wrapper item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "connect_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "connect_btn_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "View On ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), "Youtube"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "curator_list_content_desc",
    onClick: toggleCuration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Hide Gallery"), items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, item.isVideo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_1___default.a, {
      url: item.fields.file.url,
      className: "thumb",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "thumb",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.fields.file.url + '?w=400&h=400',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, item.fields.title)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ })

})
//# sourceMappingURL=index.js.552c72dc8f166daea1b5.hot-update.js.map