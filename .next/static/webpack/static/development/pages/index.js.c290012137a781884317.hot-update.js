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
        var sound = new howler__WEBPACK_IMPORTED_MODULE_6__["Howl"]({
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, currentTrack ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mini-player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track_info_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "track_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "thumb",
        style: {
          backgroundImage: "url(".concat(currentTrack ? currentTrack.fields.featuredImage.fields.file.url : this.props.currentTrack.fields.featuredImage.fields.file.url, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, currentTrack.fields.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Pye Luis")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mini-player_btn_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_backIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), this.state.playing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_pauseIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: this.pause,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_playIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: this.playCurrentTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_nextIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_musicIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onClick: this.props.toggleFullPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "player",
        id: "player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_blur",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_thumb",
        style: {
          backgroundImage: "url(".concat(currentTrack ? currentTrack.fields.featuredImage.fields.file.url : null, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, currentTrack ? currentTrack.fields.title : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "artist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Pye Luis")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_btn_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_backIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, this.state.playing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_pauseIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: this.pause,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_playIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: this.playCurrentTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_nextIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_timeline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_timeline_start-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, this.formatTime(this.state.time)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_timeline_slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider_base",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider_progress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "slider_handle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "playback_timeline_end-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, this.state.currentTrack ? this.formatTime(Math.round(this.state.currentTrack.sound.duration())) : null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list_wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, this.state.tracks ? this.state.tracks.map(function (song, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "list_item selected",
          key: i,
          onClick: _this2.makeCurrentTrack.bind(_this2, song),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "thumb",
          style: {
            backgroundImage: "url(".concat(song.fields.featuredImage.fields.file.url, ")")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, song.fields.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "artist",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, "Pye Luis")));
      }) : null))));
    }
  }]);

  return MusicPlayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MusicPlayer);

/***/ })

})
//# sourceMappingURL=index.js.c290012137a781884317.hot-update.js.map