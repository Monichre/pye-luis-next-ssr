import React from 'react'

export const Header = ({ openMenu }) => {
  return (
    <div className='header'>
      <div className='burger-wrapper' onClick={openMenu}>
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
