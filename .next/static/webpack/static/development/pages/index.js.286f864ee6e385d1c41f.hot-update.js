webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _components_SideBarNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SideBarNav */ "./components/SideBarNav.js");
/* harmony import */ var _components_MiniPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MiniPlayer */ "./components/MiniPlayer.js");
/* harmony import */ var _components_Curation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Curation */ "./components/Curation.js");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_FullPlayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FullPlayer */ "./components/FullPlayer.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");

var _jsxFileName = "/Users/Liam/Desktop/pye-luis-next-ssr/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import { getCmsContent } from '../lib/api'


var CONTENTFUL_SPACE_ID = 'aft70ikgwtvx';
var CONTENTFUL_ACCESS_TOKEN = '4e75a8b58a058563c5644162137d97c12e26b371e81afdd28388f6018aa69bc4';

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      menuOpen: false,
      fullPlayerOpen: false,
      curationOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openMenu", function (e) {
      console.log(e);
      var menuOpen = _this.state.menuOpen;

      if (!menuOpen) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('.dim', 0.5, {
          opacity: 1,
          display: 'block',
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].fromTo('.nav', 0.5, {
          xPercent: -100
        }, {
          xPercent: 0,
          display: 'block',
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].staggerFrom('.nav li', 0.5, {
          opacity: 0,
          y: 20,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        }, 0.1);

        _this.setState({
          menuOpen: true
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('.dim', 0.5, {
          opacity: 0,
          display: 'none',
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('.nav', 0.5, {
          xPercent: -100,
          display: 'none',
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
        });

        _this.setState({
          menuOpen: false
        });
      } // // ===== If Nav is open	and in Curation page
      // else if($('.nav').css("display") == "block" && $('#curator').css("display") == "block"){
      // 	TweenMax.to(".dim", 0.5, {opacity: 0, display: 'none', ease: Power2.easeInOut});
      // 	TweenMax.to(".nav", 0.5, {xPercent: -100, display:'none', ease: Expo.easeOut});
      // 	// $('.logo-text').css({'opacity': '1', 'display': 'block'});

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleFullPlayer", function () {
      var fullPlayerOpen = _this.state.fullPlayerOpen;

      if (!fullPlayerOpen) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('.dim', 0.5, {
          opacity: 1,
          display: 'block',
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].fromTo('#player', 0.5, {
          xPercent: 100
        }, {
          xPercent: 0,
          display: 'block',
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('.mini-player', 0.5, {
          x: 50,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDim", function () {
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('.dim', 0.5, {
        opacity: 0,
        display: 'none',
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('#player', 0.5, {
        xPercent: 100,
        display: 'none',
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('.nav', 0.5, {
        xPercent: -100,
        display: 'none',
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('.mini-player', 0.5, {
        x: 0,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleCuration", function () {
      var curationOpen = _this.state.curationOpen;
      var curationAnim = new TimelineMax({});
      var curator = document.getElementById('curator');
      var backButton = document.querySelector('.back_btn');
      var curatorWrapper = document.querySelector('#curator .curator_title_wrapper');
      var curatorList = document.querySelector('.curator_list');
      var logo = document.querySelector('.logo-text');
      var textWrap = document.querySelectorAll('.line, .text'); // const textLogo = document.querySelector('.text-wrap .text')

      var waves = document.querySelector('.wave-container');

      if (!curationOpen) {
        // Hide
        logo.style.display = 'none';
        curationAnim.to(textWrap, 0.5, {
          display: 'none',
          opacity: 0,
          y: -20,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        }, 0), // Background down
        curationAnim.to(waves, 1, {
          yPercent: 30,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        }, 0), // Show
        curator.style.display = 'block', curationAnim.fromTo(backButton, 0.8, {
          x: 15
        }, {
          display: 'flex',
          opacity: 1,
          x: 0,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        }, 1), curationAnim.fromTo(curatorWrapper, 0.8, {
          opacity: 0,
          x: 30
        }, {
          opacity: 1,
          x: 0,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        }, 1), curationAnim.fromTo(curatorList, 0.8, {
          opacity: 0,
          display: 'none',
          x: 30
        }, {
          opacity: 1,
          x: 0,
          display: 'block',
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        }, 1.2);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "revealPlayButton", function () {
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('.main-btn_wrapper', 0.5, {
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        scale: 1,
        ease: Elastic.easeOut.config(1, 0.75)
      }), gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to('.line', 0.5, {
        css: {
          scaleY: 0.6,
          transformOrigin: 'center center'
        },
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Expo"].easeOut
      }); // TweenMax.to('.main-btn_wrapper', 0.5, {opacity: 0, display: 'none', scale: 0, ease: Elastic.easeOut.config(1, 0.75)}),
      // TweenMax.to('.line', 0.5, {css: { scaleY: 1, transformOrigin: "center center" }, ease: Expo.easeOut})
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props); // this.getData()
    }
  }, {
    key: "render",
    value: function render() {
      var songs = this.props.data.songs;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Pye Luis"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        key: "viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "wave-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "wave -one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "wave -two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "wave -three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "text-wrap",
        onClick: this.toggleCuration,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "text",
        onMouseEnter: this.revealPlayButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "P"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "y"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "easeInOut"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "L"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "u"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "i"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "s"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "main-btn_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/icons/play.svg",
        alt: "",
        className: "main-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "burger-wrapper",
        onClick: this.openMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "burger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "logo-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "PL's Playlist"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "back_btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Back"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SideBarNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MiniPlayer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        toggleFullPlayer: this.toggleFullPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "dim",
        onClick: this.handleDim,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FullPlayer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        songs: songs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Curation__WEBPACK_IMPORTED_MODULE_5__["default"], {
        songs: songs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, CMS, _ref2, items, songs;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                CMS = contentful__WEBPACK_IMPORTED_MODULE_9__["createClient"]({
                  space: CONTENTFUL_SPACE_ID,
                  accessToken: CONTENTFUL_ACCESS_TOKEN
                });
                _context.next = 4;
                return CMS.getEntries();

              case 4:
                _ref2 = _context.sent;
                items = _ref2.items;
                songs = items.filter(function (item) {
                  return item.sys.contentType.sys.id === 'song';
                });
                return _context.abrupt("return", {
                  data: {
                    songs: songs
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.286f864ee6e385d1c41f.hot-update.js.map