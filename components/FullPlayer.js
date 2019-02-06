import React, { Component, Fragment } from 'react'
import PlayIcon from './icons/playIcon'
import MusicIcon from './icons/musicIcon'
import NextIcon from './icons/nextIcon'
import BackIcon from './icons/backIcon'
import { Howl, Howler } from 'howler'

class MusicPlayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      playing: false,
      tracks: [],
      currentTrack: null
    }
  }
  componentWillMount () {
    this.setState({
      currentTrack: this.props.currentTrack
    })
  }

  playCurrentTrack = e => {
    e.preventDefault()
    alert('im licking')
    const { currentTrack } = this.state
    console.log(currentTrack)
    if (currentTrack) {
      const sound = new Howl({
        src: [currentTrack.fields.trackUrl.fields.file.url]
      })

      sound.play()
    }
  }
  render () {
    const { currentTrack } = this.state
    return (
      <Fragment>
        <div className='mini-player'>
          <div className='track_info_wrapper'>
            <div className='track_info'>
              <div
                className='thumb'
                style={{
                  backgroundImage: `url(${
                    currentTrack
                      ? currentTrack.fields.featuredImage.fields.file.url
                      : this.props.currentTrack.fields.featuredImage.fields.file
                        .url
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
            <PlayIcon onClick={this.playCurrentTrack} />
            <NextIcon />
            <MusicIcon onClick={this.props.toggleFullPlayer} />
          </div>
        </div>

        <div className='player' id='player'>
          <div className='playback_wrapper'>
            <div className='playback_blur' />
            <div
              className='playback_thumb'
              style={{
                backgroundImage: `url(${
                  initialSong.fields.featuredImage.fields.file.url
                })`
              }}
            />
            <div className='playback_info'>
              <div className='title'>{initialSong.fields.title}</div>
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
              <div className='playback_timeline_start-time'>00:31</div>
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
              {props.songs.map(song => (
                <li className='list_item selected'>
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

export default FullPlayer
