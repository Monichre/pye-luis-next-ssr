import React, { Fragment, Component } from 'react'
import { TweenMax, Power2, Expo } from 'gsap'
import SideBarNav from '../components/SideBarNav'
import MiniPlayer from '../components/MiniPlayer'
import Curation from '../components/Curation'
import '../static/style.css'
import Head from 'next/head'
import FullPlayer from '../components/FullPlayer'
// import { getCmsContent } from '../lib/api'
import * as Contentful from 'contentful'

const CONTENTFUL_SPACE_ID = 'aft70ikgwtvx'
const CONTENTFUL_ACCESS_TOKEN =
  '4e75a8b58a058563c5644162137d97c12e26b371e81afdd28388f6018aa69bc4'

class Home extends Component {
  state = {
    menuOpen: false,
    fullPlayerOpen: false,
    curationOpen: false
  }

  static async getInitialProps ({ req }) {
    const CMS = Contentful.createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_ACCESS_TOKEN
    })

    const { items } = await CMS.getEntries()
    const songs = items.filter(item => item.sys.contentType.sys.id === 'song')

    return {
      data: {
        songs: songs
      }
    }
  }

  componentDidMount () {
    console.log(this.props)

    // this.getData()
  }

  openMenu = e => {
    console.log(e)
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

    // // ===== If Nav is open	and in Curation page
    // else if($('.nav').css("display") == "block" && $('#curator').css("display") == "block"){
    // 	TweenMax.to(".dim", 0.5, {opacity: 0, display: 'none', ease: Power2.easeInOut});
    // 	TweenMax.to(".nav", 0.5, {xPercent: -100, display:'none', ease: Expo.easeOut});
    // 	// $('.logo-text').css({'opacity': '1', 'display': 'block'});
  }

  toggleFullPlayer = () => {
    const { fullPlayerOpen } = this.state

    if (!fullPlayerOpen) {
      TweenMax.to('.dim', 0.5, {
        opacity: 1,
        display: 'block',
        ease: Power2.easeInOut
      })
      TweenMax.fromTo(
        '#player',
        0.5,
        { xPercent: 100 },
        { xPercent: 0, display: 'block', ease: Expo.easeOut }
      )
      TweenMax.to('.mini-player', 0.5, { x: 50, ease: Expo.easeOut })
    }
  }

  handleDim = () => {
    TweenMax.to('.dim', 0.5, {
      opacity: 0,
      display: 'none',
      ease: Power2.easeInOut
    })
    TweenMax.to('#player', 0.5, {
      xPercent: 100,
      display: 'none',
      ease: Expo.easeOut
    })
    TweenMax.to('.nav', 0.5, {
      xPercent: -100,
      display: 'none',
      ease: Power2.easeInOut
    })
    TweenMax.to('.mini-player', 0.5, { x: 0, ease: Expo.easeOut })
  }

  toggleCuration = () => {
    const { curationOpen } = this.state
    const curationAnim = new TimelineMax({})
    const curator = document.getElementById('curator')
    const backButton = document.querySelector('.back_btn')
    const curatorWrapper = document.querySelector(
      '#curator .curator_title_wrapper'
    )
    const curatorList = document.querySelector('.curator_list')
    const logo = document.querySelector('.logo-text')
    const textWrap = document.querySelectorAll('.line, .text')
    // const textLogo = document.querySelector('.text-wrap .text')
    const waves = document.querySelector('.wave-container')

    if (!curationOpen) {
      // Hide
      logo.style.display = 'none'
      curationAnim.to(
        textWrap,
        0.5,
        { display: 'none', opacity: 0, y: -20, ease: Power2.easeInOut },
        0
      ),
      // Background down
      curationAnim.to(waves, 1, { yPercent: 30, ease: Power2.easeInOut }, 0),
      // Show
      (curator.style.display = 'block'),
      curationAnim.fromTo(
        backButton,
        0.8,
        { x: 15 },
        { display: 'flex', opacity: 1, x: 0, ease: Power2.easeInOut },
        1
      ),
      curationAnim.fromTo(
        curatorWrapper,
        0.8,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, ease: Power2.easeInOut },
        1
      ),
      curationAnim.fromTo(
        curatorList,
        0.8,
        { opacity: 0, display: 'none', x: 30 },
        { opacity: 1, x: 0, display: 'block', ease: Power2.easeInOut },
        1.2
      )
    }
  }

  revealPlayButton = () => {
    TweenMax.to('.main-btn_wrapper', 0.5, {
      opacity: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      scale: 1,
      ease: Elastic.easeOut.config(1, 0.75)
    }),
    TweenMax.to('.line', 0.5, {
      css: { scaleY: 0.6, transformOrigin: 'center center' },
      ease: Expo.easeOut
    })

    // TweenMax.to('.main-btn_wrapper', 0.5, {opacity: 0, display: 'none', scale: 0, ease: Elastic.easeOut.config(1, 0.75)}),
    // TweenMax.to('.line', 0.5, {css: { scaleY: 1, transformOrigin: "center center" }, ease: Expo.easeOut})
  }

  render () {
    const { songs } = this.props.data
    return (
      <Fragment>
        <Head>
          <title>Pye Luis</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
            key='viewport'
          />
          <link href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
        </Head>

        <div className='wrapper'>
          <div className='wave-container'>
            <div className='wave -one' />
            <div className='wave -two' />
            <div className='wave -three' />
          </div>
          <div className='line' />
          <div className='text-wrap' onClick={this.toggleCuration}>
            <div className='text' onMouseEnter={this.revealPlayButton}>
              <span>P</span>
              <span>Y</span>
              <span>E</span>
              <span>L</span>
              <span>U</span>
              <span>I</span>
              <span>S</span>
              <div className='main-btn_wrapper'>
                <img
                  src='../static/icons/play.svg'
                  alt=''
                  className='main-btn'
                />
              </div>
            </div>
          </div>

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

          <SideBarNav />
          <MiniPlayer toggleFullPlayer={this.toggleFullPlayer} />

          <div className='dim' onClick={this.handleDim} />

          <FullPlayer songs={songs} />
          <Curation songs={songs} />
        </div>
      </Fragment>
    )
  }
}

export default Home
