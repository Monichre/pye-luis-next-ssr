import React, { Component, Fragment } from 'react'
import PlayIcon from './icons/playIcon'
import MusicIcon from './icons/musicIcon'
import NextIcon from './icons/nextIcon'
import BackIcon from './icons/backIcon'
import PauseIcon from './icons/pauseIcon'
import { Howl, Howler } from 'howler'

class MusicPlayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentIndex: 0,
      playing: false,
      tracks: [],
      currentTrack: null,
      time: 0,
      start: 0
    }
  }

  formatTime = secs => {
    let minutes = `0`
    if (secs >= 60) {
      minutes = `0${Math.floor(secs / 60) || 0}`
    }

    let seconds = secs < minutes ? secs : minutes - secs

    return minutes + ':' + (seconds < 10 ? '0' : null) + seconds
  }

  computeProportionalWidth = (playbackTimeline, time, duration) => {
    const playbackWidth = playbackTimeline.offsetWidth
    const ratio = time / duration
    return `${ratio}`
  }

  startTimer = ({
    progress,
    playbackTimeline,
    progressBall,
    startTime,
    endTime
  }) => {
    let count = 0
    this.setState({
      playing: true,
      time: this.state.time,
      start: this.state.time
    })
    this.timer = setInterval(
      () =>
        this.setState(
          {
            time: count++
          },
          () => {
            const currentProgress = this.computeProportionalWidth(
              playbackTimeline,
              this.state.time,
              this.state.currentTrack.sound.duration()
            )
            // progress.style.width = `${currentProgress}%`
            progressBall.style.marginLeft = `${currentProgress}%`
          }
        ),
      1000
    )
  }

  stopTimer = () => {
    this.setState({ playing: false })
    clearInterval(this.timer)
  }
  resetTimer = () => {
    this.setState({ time: 0, playing: false })
  }

  componentDidMount () {
    const elements = {
      progress: document.querySelector('.slider_progress'),
      playbackTimeline: document.querySelector('.playback_timeline_slider'),
      progressBall: document.querySelector('.slider_handle'),
      startTime: document.querySelector('.playback_timeline_start-time'),
      endTime: document.querySelector('.playback_timeline_end-time')
    }

    const self = this
    const howlLoadedSongs = this.props.songs.map(song => {
      const sound = new Howl({
        src: [song.fields.trackUrl.fields.file.url],
        onplay: arg => {
          self.startTimer(elements)
        },
        onend: function () {
          self.stopTimer()
          self.resetTimer()
        },
        onpause: function () {
          self.stopTimer()
        },
        onstop: function () {
          self.stopTimer()
          self.resetTimer()
        }
      })
      return {
        ...song,
        sound: sound
      }
    })

    this.setState({
      tracks: howlLoadedSongs,
      currentTrack: howlLoadedSongs[this.state.currentIndex]
    })
  }

  playCurrentTrack = e => {
    e.preventDefault()
    const { currentTrack } = this.state

    if (currentTrack) {
      currentTrack.sound.play()
    }
  }
  
  makeCurrentTrack = (track) => {
    const { currentTrack } = this.state
    if (currentTrack) {
      currentTrack.sound.stop()
    }
    this.setState({
      currentTrack: track
    })
  }
  nextSong = () => {}
  previousSong = () => {}
  pause = e => {
    e.preventDefault()
    const { currentTrack } = this.state

    if (currentTrack) {
      currentTrack.sound.pause()
    }
  }
  render () {
    const currentTrack = this.state.currentTrack
      ? this.state.currentTrack
      : this.props.currentTrack
    return (
      <Fragment>
        {currentTrack ? (
          <div className='mini-player'>
            <div className='track_info_wrapper'>
              <div className='track_info'>
                <div
                  className='thumb'
                  style={{
                    backgroundImage: `url(${
                      currentTrack
                        ? currentTrack.fields.featuredImage.fields.file.url
                        : this.props.currentTrack.fields.featuredImage.fields
                          .file.url
                    })`
                  }}
                />
                <div className='info'>
                  <div className='title'>{currentTrack.fields.title}</div>
                  <div className='artist'>Pye Luis</div>
                </div>
              </div>
            </div>
            <div className='mini-player_btn_wrapper'>
              <BackIcon />
              {this.state.playing ? (
                <PauseIcon onClick={this.pause} />
              ) : (
                <PlayIcon onClick={this.playCurrentTrack} />
              )}

              <NextIcon />
              <MusicIcon onClick={this.props.toggleFullPlayer} />
            </div>
          </div>
        ) : null}

        <div className='player' id='player'>
          <div className='playback_wrapper'>
            <div className='playback_blur' />
            <div
              className='playback_thumb'
              style={{
                backgroundImage: `url(${
                  currentTrack
                    ? currentTrack.fields.featuredImage.fields.file.url
                    : null
                })`
              }}
            />
            <div className='playback_info'>
              <div className='title'>
                {currentTrack ? currentTrack.fields.title : null}
              </div>
              <div className='artist'>Pye Luis</div>
            </div>
            <div className='playback_btn_wrapper'>
              <BackIcon />
              <div className='btn-switch'>
                {this.state.playing ? (
                  <PauseIcon onClick={this.pause} />
                ) : (
                  <PlayIcon onClick={this.playCurrentTrack} />
                )}
              </div>
              <NextIcon />
            </div>
            <div className='playback_timeline'>
              <div className='playback_timeline_start-time'>
                {this.formatTime(this.state.time)}
              </div>
              <div className='playback_timeline_slider'>
                <div className='slider_base' />
                <div className='slider_progress' />
                <div className='slider_handle' />
              </div>
              <div className='playback_timeline_end-time'>
                {this.state.currentTrack
                  ? this.formatTime(
                    Math.round(this.state.currentTrack.sound.duration())
                  )
                  : null}
              </div>
            </div>
          </div>
          <div className='list_wrapper'>
            <ul className='list'>
              {this.state.tracks ? this.state.tracks.map((song, i) => (
                <li className='list_item selected' key={i} onClick={this.makeCurrentTrack.bind(this, song)}>
                  <div
                    className='thumb'
                    style={{
                      backgroundImage: `url(${
                        song.fields.featuredImage.fields.file.url
                      })`
                    }}
                  />
                  <div className='info'>
                    <div className='title'>{song.fields.title}</div>
                    <div className='artist'>Pye Luis</div>
                  </div>
                </li>
              )) : null}
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default MusicPlayer
