import React, { Fragment, Component } from 'react'
import { TweenMax, Power2, Expo } from 'gsap'
import SideBarNav from '../components/SideBarNav'

export class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  openMenu = e => {
    const { menuOpen } = this.state

    if (!menuOpen) {
      TweenMax.to('.dim', 0.5, {
        opacity: 1,
        display: 'block',
        ease: Power2.easeInOut
      })
      TweenMax.fromTo(
        '.nav',
        0.5,
        { xPercent: -100 },
        { xPercent: 0, display: 'block', ease: Expo.easeOut }
      )
      TweenMax.staggerFrom(
        '.nav li',
        0.5,
        { opacity: 0, y: 20, ease: Power2.easeInOut },
        0.1
      )
      this.setState({
        menuOpen: true
      })
    } else {
      TweenMax.to('.dim', 0.5, {
        opacity: 0,
        display: 'none',
        ease: Power2.easeInOut
      })
      TweenMax.to('.nav', 0.5, {
        xPercent: -100,
        display: 'none',
        ease: Expo.easeOut
      })
      this.setState({
        menuOpen: false
      })
    }
  }

  render () {
    return (
      <div className='header'>
        <div className='burger-wrapper' onClick={this.openMenu}>
          <div className='burger' />
        </div>
        <div className='logo-text'>PL's Playlist</div>
        <div className='back_btn'>
          <div className='circle' />
          <div className='text'>Back</div>
        </div>
      </div>
    )
  }
}
