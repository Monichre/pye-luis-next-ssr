import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export class Thumb extends Component {
  state = { fullScreen: false, playVideo: false }

  toggleFullScreen = () => {
    const { item } = this.props
    if (item.isVideo) {
      this.setState(prevState => ({
        playVideo: !this.state.playVideo
      }))
    }
    this.setState(prevState => ({
      fullScreen: !prevState.fullScreen
    }))
  }

  render () {
    const { item } = this.props
    return item.isVideo ? (
      <ReactPlayer
        url={item.fields.file.url}
        playing={this.state.playVideo}
        controls={true}
        className='thumb'
      />
    ) : (
      <div className='thumb'>
        <img
          data-href={
            item.fields.file.url + '?w=2000&h=2000&fm=jpg&fl=progressive'
          }
          src={item.fields.file.url + '?w=300&h=300&fm=jpg&fl=progressive'}
        />
      </div>
    )
  }
}
