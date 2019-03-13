import React, { Fragment, Component } from 'react'
import { Header } from '../components/Header'
import SideBarNav from '../components/SideBarNav'
import { TweenMax, Power2, Expo } from 'gsap'
import { GalleryGrid } from '../components/GalleryGrid'

import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  EmailIcon
} from 'react-share'

import '../components/gallery.css'

import { getSiteContent } from '../lib/api'

class Gallery extends Component {
  state = {
    menuOpen: false
  }

  static async getInitialProps ({ req }) {
    return await getSiteContent()
  }

  render () {
    const {
      photoGallery: {
        fields: { photos }
      }
    } = this.props.data

    return (
      <Fragment>
        <Header />
        <div className='gallery-page'>
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
              <FacebookShareButton url={'http://localhost:3000/gallery'}>
                <FacebookIcon />
              </FacebookShareButton>
              <TwitterShareButton url={'http://localhost:3000/gallery'}>
                <TwitterIcon />
              </TwitterShareButton>
              <RedditShareButton url={'http://localhost:3000/gallery'}>
                <RedditIcon />
              </RedditShareButton>
              <EmailShareButton url={'http://localhost:3000/gallery'}>
                <EmailIcon />
              </EmailShareButton>
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
                          backgroundImage: `url(${
                            photo.fields.file.url
                          }?h=200&w=200)`
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
      </Fragment>
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
