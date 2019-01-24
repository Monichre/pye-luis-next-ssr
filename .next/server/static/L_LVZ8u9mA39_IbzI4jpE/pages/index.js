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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
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
    className: "nav_link"
  }, "Home ")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: "nav_link"
  }, "Music")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: "nav_link"
  }, "Videos")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: "nav_link"
  }, "PL's Mix"))), external_react_default.a.createElement("div", {
    className: "nav_divider"
  }), external_react_default.a.createElement("ul", {
    className: "nav_sub"
  }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: "nav_link",
    href: ""
  }, "About")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    className: "nav_link",
    href: ""
  }, "Contact"))));
};

/* harmony default export */ var components_SideBarNav = (SideBarNav_SideBarNav);
// CONCATENATED MODULE: ./components/MiniPlayer.js


var MiniPlayer_MiniPlayer = function MiniPlayer(props) {
  return external_react_default.a.createElement("div", {
    className: "mini-player"
  }, external_react_default.a.createElement("div", {
    className: "track_info_wrapper"
  }, external_react_default.a.createElement("div", {
    className: "track_info"
  }, external_react_default.a.createElement("div", {
    className: "thumb"
  }), external_react_default.a.createElement("div", {
    className: "info"
  }, external_react_default.a.createElement("div", {
    className: "title"
  }, "Friday Comes"), external_react_default.a.createElement("div", {
    className: "artist"
  }, "Early")))), external_react_default.a.createElement("div", {
    className: "mini-player_btn_wrapper"
  }, external_react_default.a.createElement("img", {
    src: "../static/icons/skip-back.svg",
    className: "btn-prev"
  }), external_react_default.a.createElement("img", {
    src: "../static/icons/play.svg",
    className: "btn-play"
  }), external_react_default.a.createElement("img", {
    src: "../static/icons/skip-forward.svg",
    className: "btn-next"
  }), external_react_default.a.createElement("img", {
    src: "../static/icons/music.svg",
    className: "btn-open-player",
    onClick: props.toggleFullPlayer
  })));
};

/* harmony default export */ var components_MiniPlayer = (MiniPlayer_MiniPlayer);
// CONCATENATED MODULE: ./components/Curation.js


var Curation_Curation = function Curation() {
  return external_react_default.a.createElement("div", {
    className: "page",
    id: "curator"
  }, external_react_default.a.createElement("div", {
    className: "curator_title_wrapper"
  }, external_react_default.a.createElement("span", null, "LP"), external_react_default.a.createElement("div", {
    className: "curator_line"
  }), external_react_default.a.createElement("div", {
    className: "curator_title"
  }, "Curation"), external_react_default.a.createElement("div", {
    className: "curator_line"
  }), external_react_default.a.createElement("span", null, "14")), external_react_default.a.createElement("div", {
    className: "curator_list"
  }, external_react_default.a.createElement("div", {
    className: "curator_list_content"
  }, external_react_default.a.createElement("div", {
    className: "connect_btn_wrapper item"
  }, external_react_default.a.createElement("div", {
    className: "connect_btn"
  }, external_react_default.a.createElement("div", {
    className: "connect_btn_text"
  }, "Connect ", external_react_default.a.createElement("br", null), "SoundCloud"))), external_react_default.a.createElement("div", {
    className: "curator_list_content_desc"
  }, "Or Select ", external_react_default.a.createElement("br", null), "a Listener of ", external_react_default.a.createElement("br", null), "L.P."), external_react_default.a.createElement("div", {
    className: "item"
  }, external_react_default.a.createElement("div", {
    className: "thumb"
  }), external_react_default.a.createElement("div", {
    className: "info"
  }, external_react_default.a.createElement("div", {
    className: "name"
  }, "Fantasy"), external_react_default.a.createElement("div", {
    className: "desc"
  }, "Sam"))), external_react_default.a.createElement("div", {
    className: "item"
  }, external_react_default.a.createElement("div", {
    className: "thumb"
  }), external_react_default.a.createElement("div", {
    className: "info"
  }, external_react_default.a.createElement("div", {
    className: "name"
  }, "Fantasy"), external_react_default.a.createElement("div", {
    className: "desc"
  }, "Sam"))), external_react_default.a.createElement("div", {
    className: "item"
  }, external_react_default.a.createElement("div", {
    className: "thumb"
  }), external_react_default.a.createElement("div", {
    className: "info"
  }, external_react_default.a.createElement("div", {
    className: "name"
  }, "Fantasy"), external_react_default.a.createElement("div", {
    className: "desc"
  }, "Sam"))), external_react_default.a.createElement("div", {
    className: "item"
  }, external_react_default.a.createElement("div", {
    className: "thumb"
  }), external_react_default.a.createElement("div", {
    className: "info"
  }, external_react_default.a.createElement("div", {
    className: "name"
  }, "Fantasy"), external_react_default.a.createElement("div", {
    className: "desc"
  }, "Sam"))), external_react_default.a.createElement("div", {
    className: "item"
  }, external_react_default.a.createElement("div", {
    className: "thumb"
  }), external_react_default.a.createElement("div", {
    className: "info"
  }, external_react_default.a.createElement("div", {
    className: "name"
  }, "Fantasy"), external_react_default.a.createElement("div", {
    className: "desc"
  }, "Sam"))), external_react_default.a.createElement("div", {
    className: "item"
  }, external_react_default.a.createElement("div", {
    className: "thumb"
  }), external_react_default.a.createElement("div", {
    className: "info"
  }, external_react_default.a.createElement("div", {
    className: "name"
  }, "Fantasy"), external_react_default.a.createElement("div", {
    className: "desc"
  }, "Sam"))))));
};

/* harmony default export */ var components_Curation = (Curation_Curation);
// EXTERNAL MODULE: ./static/style.css
var style = __webpack_require__(8);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/FullPlayer.js


var FullPlayer_FullPlayer = function FullPlayer(props) {
  var initialSong = props.songs[0];
  return external_react_default.a.createElement("div", {
    className: "player",
    id: "player"
  }, external_react_default.a.createElement("div", {
    className: "playback_wrapper"
  }, external_react_default.a.createElement("div", {
    className: "playback_blur"
  }), external_react_default.a.createElement("div", {
    className: "playback_thumb",
    style: {
      backgroundImage: "url(".concat(initialSong.fields.featuredImage.fields.file.url, ")")
    }
  }), external_react_default.a.createElement("div", {
    className: "playback_info"
  }, external_react_default.a.createElement("div", {
    className: "title"
  }, initialSong.fields.title), external_react_default.a.createElement("div", {
    className: "artist"
  }, "Pye Luis")), external_react_default.a.createElement("div", {
    className: "playback_btn_wrapper"
  }, external_react_default.a.createElement("i", {
    className: "btn-prev fa fa-step-backward",
    "aria-hidden": "true"
  }), external_react_default.a.createElement("div", {
    className: "btn-switch"
  }, external_react_default.a.createElement("i", {
    className: "btn-play fa fa-play",
    "aria-hidden": "true"
  }), external_react_default.a.createElement("i", {
    className: "btn-pause fa fa-pause",
    "aria-hidden": "true"
  })), external_react_default.a.createElement("i", {
    className: "btn-next fa fa-step-forward",
    "aria-hidden": "true"
  })), external_react_default.a.createElement("div", {
    className: "playback_timeline"
  }, external_react_default.a.createElement("div", {
    className: "playback_timeline_start-time"
  }, "00:31"), external_react_default.a.createElement("div", {
    className: "playback_timeline_slider"
  }, external_react_default.a.createElement("div", {
    className: "slider_base"
  }), external_react_default.a.createElement("div", {
    className: "slider_progress"
  }), external_react_default.a.createElement("div", {
    className: "slider_handle"
  })), external_react_default.a.createElement("div", {
    className: "playback_timeline_end-time"
  }, "03:11"))), external_react_default.a.createElement("div", {
    className: "list_wrapper"
  }, external_react_default.a.createElement("ul", {
    className: "list"
  }, props.songs.map(function (song) {
    return external_react_default.a.createElement("li", {
      className: "list_item selected"
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
  }))));
};

/* harmony default export */ var components_FullPlayer = (FullPlayer_FullPlayer);
// EXTERNAL MODULE: external "contentful"
var external_contentful_ = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.js


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

var pages_Home =
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleFullPlayer", function () {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDim", function () {
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
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "revealPlayButton", function () {
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

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props); // this.getData()
    }
  }, {
    key: "render",
    value: function render() {
      var songs = this.props.data.songs;
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
        onClick: this.toggleCuration
      }, external_react_default.a.createElement("div", {
        className: "text",
        onMouseEnter: this.revealPlayButton
      }, external_react_default.a.createElement("span", null, "P"), external_react_default.a.createElement("span", null, "Y"), external_react_default.a.createElement("span", null, "E"), external_react_default.a.createElement("span", null, "L"), external_react_default.a.createElement("span", null, "U"), external_react_default.a.createElement("span", null, "I"), external_react_default.a.createElement("span", null, "S"), external_react_default.a.createElement("div", {
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
        className: "back_btn"
      }, external_react_default.a.createElement("div", {
        className: "circle"
      }), external_react_default.a.createElement("div", {
        className: "text"
      }, "Back"))), external_react_default.a.createElement(components_SideBarNav, null), external_react_default.a.createElement(components_MiniPlayer, {
        toggleFullPlayer: this.toggleFullPlayer
      }), external_react_default.a.createElement("div", {
        className: "dim",
        onClick: this.handleDim
      }), external_react_default.a.createElement(components_FullPlayer, {
        songs: songs
      }), external_react_default.a.createElement(components_Curation, {
        songs: songs
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var req, CMS, _ref2, items, songs;

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
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ })
/******/ ]);