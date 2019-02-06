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
      currentTrack: null
    }
  }

  formatTime = secs => {
    var minutes = Math.floor(secs / 60) || 0
    var seconds = secs - minutes * 60 || 0

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  componentDidMount () {
    const progress = document.querySelector('.slider_progress')
    const progressBall = document.querySelector('.slider_handle')
    const timer = document.querySelector('.playback_timeline_end-time')
    const self = this
    const howlLoadedSongs = this.props.songs.map(song => {
      const sound = new Howl({
        src: [song.fields.trackUrl.fields.file.url],
        onplay: arg => {
          let count = 0
          const timerInterval = setInterval(() => {
            count++

            progress.style.width = `${count}%`
            progressBall.style.left = `${count}px`
          }, 1000)

          self.setState(
            {
              playing: true
            },
            () => {
              timer.innerHTML = `${self.formatTime(
                Math.round(self.state.currentTrack.sound.duration())
              )}`
            }
          )
        },
        onend: function () {
          self.setState({
            playing: false
          })
        },
        onpause: function () {
          self.setState({
            playing: false
          })
        },
        onstop: function () {
          self.setState({
            playing: false
          })
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
              <i className='btn-prev fa fa-step-backward' aria-hidden='true' />
              <div className='btn-switch'>
                <i className='btn-play fa fa-play' aria-hidden='true' />
                <i className='btn-pause fa fa-pause' aria-hidden='true' />
              </div>
              <i className='btn-next fa fa-step-forward' aria-hidden='true' />
            </div>
            <div className='playback_timeline'>
              <div className='playback_timeline_start-time'>00:00</div>
              <div className='playback_timeline_slider'>
                <div className='slider_base' />
                <div className='slider_progress' />
                <div className='slider_handle' />
              </div>
              <div className='playback_timeline_end-time'>03:11</div>
            </div>
          </div>
          <div className='list_wrapper'>
            <ul className='list'>
              {this.props.songs.map((song, i) => (
                <li className='list_item selected' key={i}>
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
              ))}
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default MusicPlayer
