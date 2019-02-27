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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

module.exports = require("react-flip-toolkit");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("howler");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
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

// CONCATENATED MODULE: ./components/SideBarNav.js


var SideBarNav_SideBarNav = function SideBarNav() {
  return external_react_default.a.createElement("div", {
    className: "nav"
  }, external_react_default.a.createElement("ul", {
    className: "nav_main"
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: "nav_link",
    target: "_blank",
    rel: "noopener",
    href: "https://www.facebook.com/pyeluisofficial/"
  }, "Facebook")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: "nav_link",
    target: "_blank",
    rel: "noopener",
    href: "https://www.instagram.com/pyeluisofficial/"
  }, "Instagram"))), external_react_default.a.createElement("div", {
    className: "nav_divider"
  }), external_react_default.a.createElement("ul", {
    className: "nav_sub"
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: "nav_link",
    target: "_blank",
    rel: "noopener",
    href: "https://devatadaun.bandcamp.com/"
  }, "Pytch Records")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: "nav_link",
    target: "_blank",
    rel: "noopener",
    href: "https://pytchrecords.bandcamp.com/album/pye-luis"
  }, "Pye Luis Bandcamp"))));
};

/* harmony default export */ var components_SideBarNav = (SideBarNav_SideBarNav);
// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(4);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);

// EXTERNAL MODULE: external "react-flip-toolkit"
var external_react_flip_toolkit_ = __webpack_require__(3);

// CONCATENATED MODULE: ./components/AnimatedItem.js
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




var AnimatedItem_AnimatedItem =
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
      return external_react_default.a.createElement(external_react_flip_toolkit_["Flipper"], {
        flipKey: this.state.fullScreen
      }, external_react_default.a.createElement(external_react_flip_toolkit_["Flipped"], {
        flipId: "square"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundImage: this.state.fullScreen ? "url(".concat(item.fields.file.url, ")") : 'none'
        },
        className: this.state.fullScreen ? 'full-screen-item item' : 'item',
        onClick: this.toggleFullScreen
      }, item.isVideo ? external_react_default.a.createElement(external_react_player_default.a, {
        url: item.fields.file.url,
        playing: this.state.playVideo,
        controls: this.state.playVideo,
        className: "thumb"
      }) : external_react_default.a.createElement("div", {
        className: "thumb"
      }, external_react_default.a.createElement("img", {
        "data-href": item.fields.file.url + '?w=2000&h=2000&fm=jpg&fl=progressive',
        src: item.fields.file.url + '?w=300&h=300&fm=jpg&fl=progressive'
      })))));
    }
  }]);

  return AnimatedItem;
}(external_react_["Component"]);
// CONCATENATED MODULE: ./components/Gallery.js


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var Gallery_Gallery = function Gallery(_ref) {
  var photoGallery = _ref.photoGallery,
      videos = _ref.videos,
      toggleGallery = _ref.toggleGallery;

  var _videos = videos.map(function (video) {
    video.fields.file.isVideo = true;
    return video.fields.file;
  });

  var items = [].concat(_toConsumableArray(_videos), _toConsumableArray(photoGallery.fields.photos));
  return external_react_default.a.createElement("div", {
    className: "page",
    id: "curator"
  }, external_react_default.a.createElement("div", {
    className: "curator_title_wrapper"
  }, external_react_default.a.createElement("span", null, "PL"), external_react_default.a.createElement("div", {
    className: "curator_line"
  }), external_react_default.a.createElement("div", {
    className: "curator_title"
  }, "Gallery"), external_react_default.a.createElement("div", {
    className: "curator_line"
  }), external_react_default.a.createElement("span", null, "Count em")), external_react_default.a.createElement("div", {
    className: "curator_list_content_desc",
    onClick: toggleGallery
  }, "Hide Gallery"), external_react_default.a.createElement("div", {
    className: "curator_list"
  }, external_react_default.a.createElement("div", {
    className: "curator_list_content"
  }, external_react_default.a.createElement("div", {
    className: "connect_btn_wrapper item"
  }, external_react_default.a.createElement("div", {
    className: "connect_btn"
  }, external_react_default.a.createElement("div", {
    className: "connect_btn_text"
  }, "View On ", external_react_default.a.createElement("br", null), "Youtube"))), items.map(function (item) {
    return external_react_default.a.createElement(AnimatedItem_AnimatedItem, {
      item: item
    });
  }))));
};

/* harmony default export */ var components_Gallery = (Gallery_Gallery);
/*
;<div className='info'>
  <div className='name'>{item.fields.title}</div>
</div>

*/
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
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
var external_howler_ = __webpack_require__(6);

// CONCATENATED MODULE: ./components/MusicPlayer.js
function MusicPlayer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MusicPlayer_typeof = function _typeof(obj) { return typeof obj; }; } else { MusicPlayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MusicPlayer_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { MusicPlayer_defineProperty(target, key, source[key]); }); } return target; }

function MusicPlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MusicPlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MusicPlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) MusicPlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) MusicPlayer_defineProperties(Constructor, staticProps); return Constructor; }

function MusicPlayer_possibleConstructorReturn(self, call) { if (call && (MusicPlayer_typeof(call) === "object" || typeof call === "function")) { return call; } return MusicPlayer_assertThisInitialized(self); }

function MusicPlayer_getPrototypeOf(o) { MusicPlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MusicPlayer_getPrototypeOf(o); }

function MusicPlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MusicPlayer_setPrototypeOf(subClass, superClass); }

function MusicPlayer_setPrototypeOf(o, p) { MusicPlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MusicPlayer_setPrototypeOf(o, p); }

function MusicPlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MusicPlayer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var MusicPlayer_MusicPlayer =
/*#__PURE__*/
function (_Component) {
  MusicPlayer_inherits(MusicPlayer, _Component);

  function MusicPlayer(props) {
    var _this;

    MusicPlayer_classCallCheck(this, MusicPlayer);

    _this = MusicPlayer_possibleConstructorReturn(this, MusicPlayer_getPrototypeOf(MusicPlayer).call(this, props));

    MusicPlayer_defineProperty(MusicPlayer_assertThisInitialized(MusicPlayer_assertThisInitialized(_this)), "formatTime", function (secs) {
      var minutes = "0";

      if (secs >= 60) {
        minutes = "0".concat(Math.floor(secs / 60) || 0);
      }

      var seconds = secs < minutes ? secs : minutes - secs;
      return minutes + ':' + (seconds < 10 ? '0' : null) + seconds;
    });

    MusicPlayer_defineProperty(MusicPlayer_assertThisInitialized(MusicPlayer_assertThisInitialized(_this)), "computeProportionalWidth", function (playbackTimeline, time, duration) {
      var playbackWidth = playbackTimeline.offsetWidth;
      var ratio = time / duration;
      return "".concat(ratio);
    });

    MusicPlayer_defineProperty(MusicPlayer_assertThisInitialized(MusicPlayer_assertThisInitialized(_this)), "startTimer", function (_ref) {
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

    MusicPlayer_defineProperty(MusicPlayer_assertThisInitialized(MusicPlayer_assertThisInitialized(_this)), "stopTimer", function () {
      _this.setState({
        playing: false
      });

      clearInterval(_this.timer);
    });

    MusicPlayer_defineProperty(MusicPlayer_assertThisInitialized(MusicPlayer_assertThisInitialized(_this)), "resetTimer", function () {
      _this.setState({
        time: 0,
        playing: false
      });
    });

    MusicPlayer_defineProperty(MusicPlayer_assertThisInitialized(MusicPlayer_assertThisInitialized(_this)), "playCurrentTrack", function (e) {
      e.preventDefault();
      var currentTrack = _this.state.currentTrack;

      if (currentTrack) {
        currentTrack.sound.play();
      }
    });

    MusicPlayer_defineProperty(MusicPlayer_assertThisInitialized(MusicPlayer_assertThisInitialized(_this)), "makeCurrentTrack", function (track) {
      var currentTrack = _this.state.currentTrack;

      if (currentTrack) {
        currentTrack.sound.stop();
      }

      _this.setState({
        currentTrack: track
      });
    });

    MusicPlayer_defineProperty(MusicPlayer_assertThisInitialized(MusicPlayer_assertThisInitialized(_this)), "nextSong", function () {});

    MusicPlayer_defineProperty(MusicPlayer_assertThisInitialized(MusicPlayer_assertThisInitialized(_this)), "previousSong", function () {});

    MusicPlayer_defineProperty(MusicPlayer_assertThisInitialized(MusicPlayer_assertThisInitialized(_this)), "pause", function (e) {
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

  MusicPlayer_createClass(MusicPlayer, [{
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
// EXTERNAL MODULE: external "contentful"
var external_contentful_ = __webpack_require__(7);

// EXTERNAL MODULE: ./components/style.css
var style = __webpack_require__(11);

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









var CONTENTFUL_SPACE_ID = 'aft70ikgwtvx';
var CONTENTFUL_ACCESS_TOKEN = '4e75a8b58a058563c5644162137d97c12e26b371e81afdd28388f6018aa69bc4';

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

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "toggleGallery", function () {
      var curationOpen = _this.state.curationOpen;
      var curationAnim = new TimelineMax({});
      var curator = document.getElementById('curator');
      var backButton = document.querySelector('.back_btn');
      var backButtonText = document.querySelector('.back_btn .text');
      var curatorWrapper = document.querySelector('#curator .curator_title_wrapper');
      var curatorList = document.querySelector('.curator_list');
      var logo = document.querySelector('.logo-text');
      var textWrap = document.querySelector('.line'); // const textLogo = document.querySelector('.text-wrap .text')

      var waves = document.querySelector('.wave-container');
      var miniplayerButtons = Array.from(document.querySelectorAll('.mini-player_btn_wrapper svg'));

      if (!curationOpen) {
        // Hide
        logo.style.display = 'none';
        miniplayerButtons.forEach(function (button) {
          return button.classList.toggle('black');
        });
        curationAnim.to(textWrap, 0.5, {
          display: 'none',
          opacity: 0,
          y: -20,
          ease: external_gsap_["Power2"].easeInOut
        }, 0), // Background down
        curationAnim.to(waves, 1, {
          yPercent: 30,
          ease: external_gsap_["Power2"].easeInOut
        }, 0), // Show
        curator.style.display = 'block', curationAnim.fromTo(backButton, 0.8, {
          x: 15
        }, {
          display: 'flex',
          opacity: 1,
          x: 0,
          ease: external_gsap_["Power2"].easeInOut
        }, 1), curationAnim.fromTo(backButtonText, 0.8, {
          x: 15
        }, {
          display: 'flex',
          opacity: 1,
          x: 0,
          ease: external_gsap_["Power2"].easeInOut
        }, 1), curationAnim.fromTo(curatorWrapper, 0.8, {
          opacity: 0,
          x: 30
        }, {
          opacity: 1,
          x: 0,
          ease: external_gsap_["Power2"].easeInOut
        }, 1), curationAnim.fromTo(curatorList, 0.8, {
          opacity: 0,
          display: 'none',
          x: 30
        }, {
          opacity: 1,
          x: 0,
          display: 'block',
          ease: external_gsap_["Power2"].easeInOut
        }, 1.2);

        _this.setState({
          curationOpen: !_this.state.curationOpen
        });
      } else {
        var mainToHome = new TimelineMax({}); // Hide

        mainToHome.fromTo(document.querySelector('.curator_title_wrapper'), 0.5, {
          opacity: 1,
          x: 0
        }, {
          opacity: 0,
          x: 30,
          ease: external_gsap_["Power2"].easeInOut
        }, 0.2), mainToHome.fromTo(document.querySelector('.curator_list'), 0.5, {
          opacity: 1,
          display: 'block',
          x: 0
        }, {
          opacity: 0,
          x: 30,
          display: 'none',
          ease: external_gsap_["Power2"].easeInOut
        }, 0.5), mainToHome.to(document.querySelector('.back_btn'), 0.5, {
          display: 'none',
          opacity: 0,
          x: 15,
          ease: external_gsap_["Power2"].easeInOut
        }, 0.5), mainToHome.to(document.querySelector('#curator'), 0, {
          display: 'none',
          ease: external_gsap_["Power2"].easeInOut
        }, 1), // Background Up
        mainToHome.to(waves, 1, {
          yPercent: 0,
          ease: external_gsap_["Power2"].easeInOut
        }, 1), // 	Show
        mainToHome.to(textWrap, 0.5, {
          display: 'flex',
          opacity: 1,
          y: 0,
          ease: external_gsap_["Power2"].easeInOut
        }, 1.2), mainToHome.to(document.querySelector('.logo-text'), 0.5, {
          display: 'block',
          opacity: 1,
          y: 0,
          ease: external_gsap_["Power2"].easeInOut
        }, 1.2), // 	Force to redraw by using y translate
        mainToHome.fromTo(document.querySelector('.text-wrap .text'), 0.1, {
          y: 0.1,
          position: 'absolute'
        }, {
          y: 0,
          position: 'relative',
          ease: external_gsap_["Power2"].easeInOut
        }, 1.3); // $('.text-wrap .text').css('position', 'relative');
      }
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
      }); // TweenMax.to('.main-btn_wrapper', 0.5, {opacity: 0, display: 'none', scale: 0, ease: Elastic.easeOut.config(1, 0.75)}),
      // TweenMax.to('.line', 0.5, {css: { scaleY: 1, transformOrigin: "center center" }, ease: Expo.easeOut})
    });

    return _this;
  }

  pages_createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var songs = this.props.data.songs;
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
      })))), external_react_default.a.createElement("div", {
        className: "header"
      }, external_react_default.a.createElement("div", {
        className: "burger-wrapper",
        onClick: this.openMenu
      }, external_react_default.a.createElement("div", {
        className: "burger"
      })), external_react_default.a.createElement("div", {
        className: "logo-text"
      }, "PL's Playlist"), external_react_default.a.createElement("div", {
        className: "back_btn",
        onClick: this.toggleGallery
      }, external_react_default.a.createElement("div", {
        className: "circle"
      }), external_react_default.a.createElement("div", {
        className: "text"
      }, "Back"))), external_react_default.a.createElement(components_SideBarNav, null), external_react_default.a.createElement("div", {
        className: "dim",
        onClick: this.handleDim
      }), external_react_default.a.createElement(components_MusicPlayer, {
        toggleFullPlayer: this.toggleFullPlayer,
        songs: songs
      }), external_react_default.a.createElement(components_Gallery, {
        videos: videos,
        toggleGallery: this.toggleGallery,
        photoGallery: photoGallery
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var req, CMS, _ref2, items, songs, photoGallery, videos;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                CMS = external_contentful_["createClient"]({
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

              case 10:
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