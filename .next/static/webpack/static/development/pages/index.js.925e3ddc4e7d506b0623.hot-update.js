webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MusicPlayer.js":
/*!***********************************!*\
  !*** ./components/MusicPlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_playIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/playIcon */ "./components/icons/playIcon.js");
/* harmony import */ var _icons_musicIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/musicIcon */ "./components/icons/musicIcon.js");
/* harmony import */ var _icons_nextIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/nextIcon */ "./components/icons/nextIcon.js");
/* harmony import */ var _icons_backIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/backIcon */ "./components/icons/backIcon.js");
/* harmony import */ var _icons_pauseIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/pauseIcon */ "./components/icons/pauseIcon.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/Liam/Desktop/pye-luis-next-ssr/components/MusicPlayer.js";

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









var MusicPlayer =
/*#__PURE__*/
function (_Component) {
  _inherits(MusicPlayer, _Component);

  function MusicPlayer(props) {
    var _this;

    _classCallCheck(this, MusicPlayer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MusicPlayer).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "playCurrentTrack", function (e) {
      e.preventDefault();
      var currentTrack = _this.state.currentTrack;

      if (currentTrack) {
        currentTrack.sound.play();
      }
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
      currentTrack: null
    };
    return _this;
  }

  _createClass(MusicPlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var progress = document.querySelector('.slider_progress');
      var timer = document.querySelector('.playback_timeline_start-time');
      var self = this;
      var howlLoadedSongs = this.props.songs.map(function (song) {
        var sound = new howler__WEBPACK_IMPORTED_MODULE_6__["Howl"]({
          src: [song.fields.trackUrl.fields.file.url],
          onplay: function onplay(arg) {
            var count = 0;
            var timerInterval = setInterval(function () {
              count++;
              timer.innerHTML = "00:".concat(count);
              progress.left = "".concat(count, "px");
            }, 1000);
            self.setState({
              playing: true
            }, function () {
              console.log(_this2.state.currentTrack.sound);
              console.log(_this2.state.currentTrack.sound.duration());
            });
          },
          onend: function onend() {
            self.setState({
              playing: false
            });
          },
          onpause: function onpause() {
            self.setState({
              playing: false
            });
          },
          onstop: function onstop() {
            self.setState({
              playing: false
            });
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
      var currentTrack = this.state.currentTrack ? this.state.currentTrack : this.props.currentTrack;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, currentTrack ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mini-player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track_info_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "thumb",
        style: {
          backgroundImage: "url(".concat(currentTrack ? currentTrack.fields.featuredImage.fields.file.url : this.props.currentTrack.fields.featuredImage.fields.file.url, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, currentTrack.fields.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Pye Luis")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mini-player_btn_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_backIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), this.state.playing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_pauseIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: this.pause,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_playIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: this.playCurrentTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_nextIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_musicIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onClick: this.props.toggleFullPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "player",
        id: "player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_blur",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_thumb",
        style: {
          backgroundImage: "url(".concat(currentTrack ? currentTrack.fields.featuredImage.fields.file.url : null, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, currentTrack ? currentTrack.fields.title : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Pye Luis")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_btn_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "btn-prev fa fa-step-backward",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "btn-play fa fa-play",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "btn-pause fa fa-pause",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "btn-next fa fa-step-forward",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_timeline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_timeline_start-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "00:00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_timeline_slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider_base",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider_progress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider_handle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_timeline_end-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "03:11"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, this.props.songs.map(function (song, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "list_item selected",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "thumb",
          style: {
            backgroundImage: "url(".concat(song.fields.featuredImage.fields.file.url, ")")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, song.fields.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "artist",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, "Pye Luis")));
      })))));
    }
  }]);

  return MusicPlayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MusicPlayer);

/***/ })

})
//# sourceMappingURL=index.js.925e3ddc4e7d506b0623.hot-update.js.map