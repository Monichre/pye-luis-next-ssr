module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Header = function Header(_ref) {
  var openMenu = _ref.openMenu;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "burger-wrapper",
    onClick: openMenu
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "burger"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo-text"
  }, "PL's Playlist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "back_btn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, "Back")));
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var SideBarNav = function SideBarNav() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav_main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav_link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav_link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/gallery"
  }, "Gallery")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav_link",
    target: "_blank",
    rel: "noopener",
    href: "https://www.facebook.com/pyeluisofficial/"
  }, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav_link",
    target: "_blank",
    rel: "noopener",
    href: "https://www.instagram.com/pyeluisofficial/"
  }, "Instagram"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav_divider"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav_sub"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav_link",
    target: "_blank",
    rel: "noopener",
    href: "https://devatadaun.bandcamp.com/"
  }, "Pytch Records")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav_link",
    target: "_blank",
    rel: "noopener",
    href: "https://pytchrecords.bandcamp.com/album/pye-luis"
  }, "Pye Luis Bandcamp"))));
};

/* harmony default export */ __webpack_exports__["a"] = (SideBarNav);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSiteContent; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var CONTENTFUL_SPACE_ID = 'aft70ikgwtvx';
var CONTENTFUL_ACCESS_TOKEN = '4e75a8b58a058563c5644162137d97c12e26b371e81afdd28388f6018aa69bc4';
var getSiteContent =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var CMS, _ref2, items, songs, photoGallery, videos;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            CMS = contentful__WEBPACK_IMPORTED_MODULE_1__["createClient"]({
              space: CONTENTFUL_SPACE_ID,
              accessToken: CONTENTFUL_ACCESS_TOKEN
            });
            _context.next = 3;
            return CMS.getEntries();

          case 3:
            _ref2 = _context.sent;
            items = _ref2.items;
            songs = items.filter(function (item) {
              return item.sys.contentType.sys.id === 'song';
            });
            photoGallery = items.filter(function (item) {
              return item.sys.contentType.sys.id === 'photo';
            })[0];
            videos = items.filter(function (item) {
              return item.sys.contentType.sys.id === 'video';
            });
            return _context.abrupt("return", {
              data: {
                songs: songs,
                photoGallery: photoGallery,
                videos: videos
              }
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSiteContent() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("howler");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(2);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(1);

// EXTERNAL MODULE: ./components/SideBarNav.js
var SideBarNav = __webpack_require__(5);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(4);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(8);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/icons/playIcon.js


var playIcon_PlayIcon = function PlayIcon(props) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff9e1",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    className: "btn-play",
    onClick: props.onClick
  }, external_react_default.a.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3"
  }));
};

/* harmony default export */ var playIcon = (playIcon_PlayIcon);
// CONCATENATED MODULE: ./components/icons/musicIcon.js


var musicIcon_MusicIcon = function MusicIcon(props) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff9e1",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    className: "btn-open-player",
    onClick: props.onClick
  }, external_react_default.a.createElement("line", {
    x1: "8",
    y1: "6",
    x2: "21",
    y2: "6"
  }), external_react_default.a.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "21",
    y2: "12"
  }), external_react_default.a.createElement("line", {
    x1: "8",
    y1: "18",
    x2: "21",
    y2: "18"
  }), external_react_default.a.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "3",
    y2: "6"
  }), external_react_default.a.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "3",
    y2: "12"
  }), external_react_default.a.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "3",
    y2: "18"
  }));
};

/* harmony default export */ var musicIcon = (musicIcon_MusicIcon);
// CONCATENATED MODULE: ./components/icons/nextIcon.js


var nextIcon_NextIcon = function NextIcon() {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff9e1",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    className: "btn-next"
  }, external_react_default.a.createElement("polygon", {
    points: "5 4 15 12 5 20 5 4"
  }), external_react_default.a.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "19",
    y2: "19"
  }));
};

/* harmony default export */ var nextIcon = (nextIcon_NextIcon);
// CONCATENATED MODULE: ./components/icons/backIcon.js


var backIcon_BackIcon = function BackIcon(props) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff9e1",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    className: "btn-prev"
  }, external_react_default.a.createElement("polygon", {
    points: "19 20 9 12 19 4 19 20"
  }), external_react_default.a.createElement("line", {
    x1: "5",
    y1: "19",
    x2: "5",
    y2: "5"
  }));
};

/* harmony default export */ var backIcon = (backIcon_BackIcon);
// CONCATENATED MODULE: ./components/icons/pauseIcon.js


var pauseIcon_PauseIcon = function PauseIcon(props) {
  return external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff9e1",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    className: "feather feather-pause",
    onClick: props.onClick
  }, external_react_default.a.createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16"
  }), external_react_default.a.createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16"
  }));
};

/* harmony default export */ var pauseIcon = (pauseIcon_PauseIcon);
// EXTERNAL MODULE: external "howler"
var external_howler_ = __webpack_require__(9);

// CONCATENATED MODULE: ./components/MusicPlayer.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var MusicPlayer_MusicPlayer =
/*#__PURE__*/
function (_Component) {
  _inherits(MusicPlayer, _Component);

  function MusicPlayer(props) {
    var _this;

    _classCallCheck(this, MusicPlayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MusicPlayer).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "formatTime", function (secs) {
      var minutes = "0";

      if (secs >= 60) {
        minutes = "0".concat(Math.floor(secs / 60) || 0);
      }

      var seconds = secs < minutes ? secs : minutes - secs;
      return minutes + ':' + (seconds < 10 ? '0' : null) + seconds;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeProportionalWidth", function (playbackTimeline, time, duration) {
      var playbackWidth = playbackTimeline.offsetWidth;
      var ratio = time / duration;
      return "".concat(ratio);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startTimer", function (_ref) {
      var progress = _ref.progress,
          playbackTimeline = _ref.playbackTimeline,
          progressBall = _ref.progressBall,
          startTime = _ref.startTime,
          endTime = _ref.endTime;
      var count = 0;

      _this.setState({
        playing: true,
        time: _this.state.time,
        start: _this.state.time
      });

      _this.timer = setInterval(function () {
        return _this.setState({
          time: count++
        }, function () {
          var currentProgress = _this.computeProportionalWidth(playbackTimeline, _this.state.time, _this.state.currentTrack.sound.duration()); // progress.style.width = `${currentProgress}%`


          progressBall.style.marginLeft = "".concat(currentProgress, "%");
        });
      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stopTimer", function () {
      _this.setState({
        playing: false
      });

      clearInterval(_this.timer);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetTimer", function () {
      _this.setState({
        time: 0,
        playing: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "playCurrentTrack", function (e) {
      e.preventDefault();
      var currentTrack = _this.state.currentTrack;

      if (currentTrack) {
        currentTrack.sound.play();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "makeCurrentTrack", function (track) {
      var currentTrack = _this.state.currentTrack;

      if (currentTrack) {
        currentTrack.sound.stop();
      }

      _this.setState({
        currentTrack: track
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextSong", function () {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "previousSong", function () {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pause", function (e) {
      e.preventDefault();
      var currentTrack = _this.state.currentTrack;

      if (currentTrack) {
        currentTrack.sound.pause();
      }
    });

    _this.state = {
      currentIndex: 0,
      playing: false,
      tracks: [],
      currentTrack: null,
      time: 0,
      start: 0
    };
    return _this;
  }

  _createClass(MusicPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elements = {
        progress: document.querySelector('.slider_progress'),
        playbackTimeline: document.querySelector('.playback_timeline_slider'),
        progressBall: document.querySelector('.slider_handle'),
        startTime: document.querySelector('.playback_timeline_start-time'),
        endTime: document.querySelector('.playback_timeline_end-time')
      };
      var self = this;
      var howlLoadedSongs = this.props.songs.map(function (song) {
        var sound = new external_howler_["Howl"]({
          src: [song.fields.trackUrl.fields.file.url],
          onplay: function onplay(arg) {
            self.startTimer(elements);
          },
          onend: function onend() {
            self.stopTimer();
            self.resetTimer();
          },
          onpause: function onpause() {
            self.stopTimer();
          },
          onstop: function onstop() {
            self.stopTimer();
            self.resetTimer();
          }
        });
        return _objectSpread({}, song, {
          sound: sound
        });
      });
      this.setState({
        tracks: howlLoadedSongs,
        currentTrack: howlLoadedSongs[this.state.currentIndex]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentTrack = this.state.currentTrack ? this.state.currentTrack : this.props.currentTrack;
      return external_react_default.a.createElement(external_react_["Fragment"], null, currentTrack ? external_react_default.a.createElement("div", {
        className: "mini-player"
      }, external_react_default.a.createElement("div", {
        className: "track_info_wrapper"
      }, external_react_default.a.createElement("div", {
        className: "track_info"
      }, external_react_default.a.createElement("div", {
        className: "thumb",
        style: {
          backgroundImage: "url(".concat(currentTrack ? currentTrack.fields.featuredImage.fields.file.url : this.props.currentTrack.fields.featuredImage.fields.file.url, ")")
        }
      }), external_react_default.a.createElement("div", {
        className: "info"
      }, external_react_default.a.createElement("div", {
        className: "title"
      }, currentTrack.fields.title), external_react_default.a.createElement("div", {
        className: "artist"
      }, "Pye Luis")))), external_react_default.a.createElement("div", {
        className: "mini-player_btn_wrapper"
      }, external_react_default.a.createElement(backIcon, null), this.state.playing ? external_react_default.a.createElement(pauseIcon, {
        onClick: this.pause
      }) : external_react_default.a.createElement(playIcon, {
        onClick: this.playCurrentTrack
      }), external_react_default.a.createElement(nextIcon, null), external_react_default.a.createElement(musicIcon, {
        onClick: this.props.toggleFullPlayer
      }))) : null, external_react_default.a.createElement("div", {
        className: "player",
        id: "player"
      }, external_react_default.a.createElement("div", {
        className: "playback_wrapper"
      }, external_react_default.a.createElement("div", {
        className: "playback_blur"
      }), external_react_default.a.createElement("div", {
        className: "playback_thumb",
        style: {
          backgroundImage: "url(".concat(currentTrack ? currentTrack.fields.featuredImage.fields.file.url : null, ")")
        }
      }), external_react_default.a.createElement("div", {
        className: "playback_info"
      }, external_react_default.a.createElement("div", {
        className: "title"
      }, currentTrack ? currentTrack.fields.title : null), external_react_default.a.createElement("div", {
        className: "artist"
      }, "Pye Luis")), external_react_default.a.createElement("div", {
        className: "playback_btn_wrapper"
      }, external_react_default.a.createElement(backIcon, null), external_react_default.a.createElement("div", {
        className: "btn-switch"
      }, this.state.playing ? external_react_default.a.createElement(pauseIcon, {
        onClick: this.pause
      }) : external_react_default.a.createElement(playIcon, {
        onClick: this.playCurrentTrack
      })), external_react_default.a.createElement(nextIcon, null)), external_react_default.a.createElement("div", {
        className: "playback_timeline"
      }, external_react_default.a.createElement("div", {
        className: "playback_timeline_start-time"
      }, this.formatTime(this.state.time)), external_react_default.a.createElement("div", {
        className: "playback_timeline_slider"
      }, external_react_default.a.createElement("div", {
        className: "slider_base"
      }), external_react_default.a.createElement("div", {
        className: "slider_progress"
      }), external_react_default.a.createElement("div", {
        className: "slider_handle"
      })), external_react_default.a.createElement("div", {
        className: "playback_timeline_end-time"
      }, this.state.currentTrack ? this.formatTime(Math.round(this.state.currentTrack.sound.duration())) : null))), external_react_default.a.createElement("div", {
        className: "list_wrapper"
      }, external_react_default.a.createElement("ul", {
        className: "list"
      }, this.state.tracks ? this.state.tracks.map(function (song, i) {
        return external_react_default.a.createElement("li", {
          className: "list_item selected",
          key: i,
          onClick: _this2.makeCurrentTrack.bind(_this2, song)
        }, external_react_default.a.createElement("div", {
          className: "thumb",
          style: {
            backgroundImage: "url(".concat(song.fields.featuredImage.fields.file.url, ")")
          }
        }), external_react_default.a.createElement("div", {
          className: "info"
        }, external_react_default.a.createElement("div", {
          className: "title"
        }, song.fields.title), external_react_default.a.createElement("div", {
          className: "artist"
        }, "Pye Luis")));
      }) : null))));
    }
  }]);

  return MusicPlayer;
}(external_react_["Component"]);

/* harmony default export */ var components_MusicPlayer = (MusicPlayer_MusicPlayer);
// EXTERNAL MODULE: ./components/style.css
var style = __webpack_require__(16);

// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/index.js


function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var pages_Home =
/*#__PURE__*/
function (_Component) {
  pages_inherits(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    pages_classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = pages_possibleConstructorReturn(this, (_getPrototypeOf2 = pages_getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "state", {
      menuOpen: false,
      fullPlayerOpen: false,
      curationOpen: false,
      currentTrack: false,
      tracks: [],
      currentIndex: 0
    });

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "openMenu", function (e) {
      var menuOpen = _this.state.menuOpen;

      if (!menuOpen) {
        external_gsap_["TweenMax"].to('.dim', 0.5, {
          opacity: 1,
          display: 'block',
          ease: external_gsap_["Power2"].easeInOut
        });
        external_gsap_["TweenMax"].fromTo('.nav', 0.5, {
          xPercent: -100
        }, {
          xPercent: 0,
          display: 'block',
          ease: external_gsap_["Expo"].easeOut
        });
        external_gsap_["TweenMax"].staggerFrom('.nav li', 0.5, {
          opacity: 0,
          y: 20,
          ease: external_gsap_["Power2"].easeInOut
        }, 0.1);

        _this.setState({
          menuOpen: true
        });
      } else {
        external_gsap_["TweenMax"].to('.dim', 0.5, {
          opacity: 0,
          display: 'none',
          ease: external_gsap_["Power2"].easeInOut
        });
        external_gsap_["TweenMax"].to('.nav', 0.5, {
          xPercent: -100,
          display: 'none',
          ease: external_gsap_["Expo"].easeOut
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

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "toggleFullPlayer", function () {
      var fullPlayerOpen = _this.state.fullPlayerOpen;

      if (!fullPlayerOpen) {
        external_gsap_["TweenMax"].to('.dim', 0.5, {
          opacity: 1,
          display: 'block',
          ease: external_gsap_["Power2"].easeInOut
        });
        external_gsap_["TweenMax"].fromTo('#player', 0.5, {
          xPercent: 100
        }, {
          xPercent: 0,
          display: 'block',
          ease: external_gsap_["Expo"].easeOut
        });
        external_gsap_["TweenMax"].to('.mini-player', 0.5, {
          x: 50,
          ease: external_gsap_["Expo"].easeOut
        });
      }
    });

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "handleDim", function () {
      external_gsap_["TweenMax"].to('.dim', 0.5, {
        opacity: 0,
        display: 'none',
        ease: external_gsap_["Power2"].easeInOut
      });
      external_gsap_["TweenMax"].to('#player', 0.5, {
        xPercent: 100,
        display: 'none',
        ease: external_gsap_["Expo"].easeOut
      });
      external_gsap_["TweenMax"].to('.nav', 0.5, {
        xPercent: -100,
        display: 'none',
        ease: external_gsap_["Power2"].easeInOut
      });
      external_gsap_["TweenMax"].to('.mini-player', 0.5, {
        x: 0,
        ease: external_gsap_["Expo"].easeOut
      });
    });

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "revealPlayButton", function () {
      external_gsap_["TweenMax"].to('.main-btn_wrapper', 0.5, {
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        scale: 1,
        ease: Elastic.easeOut.config(1, 0.75)
      }), external_gsap_["TweenMax"].to('.line', 0.5, {
        css: {
          scaleY: 0.6,
          transformOrigin: 'center center'
        },
        ease: external_gsap_["Expo"].easeOut
      });
    });

    return _this;
  }

  pages_createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      localStorage.setItem('appCache', JSON.stringify(data));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$data = this.props.data,
          songs = _this$props$data.songs,
          videos = _this$props$data.videos,
          photoGallery = _this$props$data.photoGallery;
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Pye Luis"), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        key: "viewport"
      }), external_react_default.a.createElement("link", {
        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      })), external_react_default.a.createElement("div", {
        className: "wrapper"
      }, external_react_default.a.createElement("div", {
        className: "wave-container"
      }, external_react_default.a.createElement("div", {
        className: "wave -one"
      }), external_react_default.a.createElement("div", {
        className: "wave -two"
      }), external_react_default.a.createElement("div", {
        className: "wave -three"
      })), external_react_default.a.createElement("div", {
        className: "line"
      }), external_react_default.a.createElement("div", {
        className: "text-wrap",
        onClick: this.toggleGallery
      }, external_react_default.a.createElement("div", {
        className: "text",
        onMouseEnter: this.revealPlayButton
      }, "Pye Luis", external_react_default.a.createElement("div", {
        className: "main-btn_wrapper"
      }, external_react_default.a.createElement("img", {
        src: "../static/icons/play.svg",
        alt: "",
        className: "main-btn"
      })))), external_react_default.a.createElement(Header["a" /* Header */], {
        openMenu: this.openMenu
      }), external_react_default.a.createElement(SideBarNav["a" /* default */], null), external_react_default.a.createElement("div", {
        className: "dim",
        onClick: this.handleDim
      }), external_react_default.a.createElement(components_MusicPlayer, {
        toggleFullPlayer: this.toggleFullPlayer,
        songs: songs
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var req;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return Object(api["a" /* getSiteContent */])();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
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
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ })
/******/ ]);