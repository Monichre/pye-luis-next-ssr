import React, { useState, useRef } from 'react'
import { render } from 'react-dom'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`

export function GalleryGrid ({ photos }) {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink' }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? photos : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / photos.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6
  ])

  return (
    <>
      {photos.map((photo, i) => (
        <div
          className='masonry__item middle'
          style={{ ...rest, width: size, height: size }}
          onClick={() => set(open => !open)}
        >
          <figure>
            <figcaption>#{i + 1}</figcaption>
            <div className='content'>
              <h2>{photo.fields.file.title}</h2>
            </div>
            <div
              className='background'
              style={{
                backgroundImage: `url(${photo.fields.file.url}?h=200&w=200)`
              }}
            />
            <Item key={i} />
            {/* style={{ ...props, background: item.css }}/ */}
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
      ))}
    </>
  )
}

export default GalleryGrid
