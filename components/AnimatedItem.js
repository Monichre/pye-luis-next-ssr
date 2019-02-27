import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import { Flipper, Flipped } from 'react-flip-toolkit'

export class AnimatedItem extends Component {
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
    return (
      <Flipper flipKey={this.state.fullScreen}>
        <Flipped flipId='square'>
          <div
            style={{
              backgroundImage: this.state.fullScreen
                ? `url(${item.fields.file.url})`
                : 'none'
            }}
            className={this.state.fullScreen ? 'full-screen-item item' : 'item'}
            onClick={this.toggleFullScreen}
          >
            {item.isVideo ? (
              <ReactPlayer
                url={item.fields.file.url}
                playing={this.state.playVideo}
                controls={this.state.playVideo}
                className='thumb'
              />
            ) : (
              <div className='thumb'>
                <img
                  data-href={
                    item.fields.file.url +
                    '?w=2000&h=2000&fm=jpg&fl=progressive'
                  }
                  src={
                    item.fields.file.url + '?w=300&h=300&fm=jpg&fl=progressive'
                  }
                />
              </div>
            )}
          </div>
        </Flipped>
      </Flipper>
    )
  }
}
