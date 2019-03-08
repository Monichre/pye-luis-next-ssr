import React, { Fragment, Component } from 'react'
import { Header } from '../components/Header'
import SideBarNav from '../components/SideBarNav'
import { TweenMax, Power2, Expo } from 'gsap'

import '../components/gallery.css'

import { getSiteContent } from '../lib/api'

class Gallery extends Component {
  state = {
    menuOpen: false
  }

  static async getInitialProps ({ req }) {
    return await getSiteContent()
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

    // // ===== If Nav is open	and in Curation page
    // else if($('.nav').css("display") == "block" && $('#curator').css("display") == "block"){
    // 	TweenMax.to(".dim", 0.5, {opacity: 0, display: 'none', ease: Power2.easeInOut});
    // 	TweenMax.to(".nav", 0.5, {xPercent: -100, display:'none', ease: Expo.easeOut});
    // 	// $('.logo-text').css({'opacity': '1', 'display': 'block'});
  }

  render () {
    const {
      photoGallery: {
        fields: { photos }
      }
    } = this.props.data

    return (
      <div className='gallery-page'>
        <Header openMenu={null} />
        <section className='content-holder'>
          <div className='content'>
            <h1>Pye Luis Gallery</h1>
            <p>Peep This</p>
            <form action='#'>
              <div className='label'>
                <input
                  className='input'
                  autocomplete='off'
                  placeholder='Your e-mail to join'
                  type='email'
                />
                <input className='submit' type='submit' value='➤' />
              </div>
            </form>
          </div>
        </section>
        <SideBarNav />
        <section className='grid-holder'>
          <div className='grid masonry'>
            <div className='close-detail-view' />

            {photos && photos.length
              ? photos.map((photo, i) => (
                <div className='masonry__item middle'>
                  <figure>
                    <figcaption>#{i + 1}</figcaption>
                    <div className='content'>
                      <h2>{photo.fields.file.title}</h2>
                    </div>
                    <div
                      className='background'
                      style={{
                        backgroundImage: `url(${photo.fields.file.url})`
                      }}
                    />
                    <div className='detail'>
                      <span className='icon' />
                      <span className='circles'>
                        <div className='circle circle1'>
                          <span>||</span>
                        </div>
                        <div className='circle circle2'>
                          <span>➤</span>
                        </div>
                      </span>
                    </div>
                  </figure>
                </div>
              ))
              : null}
          </div>
        </section>
      </div>
    )
  }
}

export default Gallery

/*
{
  /* <div className='masonry__item small'>
              <figure>
                <figcaption>#1</figcaption>
                <div className='content'>
                  <h2>Rainy Window</h2>
                </div>
                <div
                  className='background'
                  // style='background-image: url(assets/img/img-1.jpeg);'
                />
                <div className='detail'>
                  <span className='icon' />
                  <span className='circles'>
                    <div className='circle circle1'>
                      <span>FREE</span>
                    </div>
                    <div className='circle circle2'>
                      <span>➤</span>
                    </div>
                  </span>
                </div>
              </figure>
            </div>

;<div className='masonry__item big'>
  <figure>
    <figcaption>#3</figcaption>
    <div className='content'>
      <h2>Rainy Window</h2>
    </div>
    <div
      className='background'
      // style='background-image: url(assets/img/img-3.jpeg);'
    />
    <div className='detail'>
      <span className='icon' />
      <span className='circles'>
        <div className='circle circle1'>
          <span>FREE</span>
        </div>
        <div className='circle circle2'>
          <span>➤</span>
        </div>
      </span>
    </div>
  </figure>
</div>

*/
