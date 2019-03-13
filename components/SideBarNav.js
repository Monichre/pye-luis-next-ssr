import Link from 'next/link'

const SideBarNav = () => {
  return (
    <div className='nav'>
      <ul className='nav_main'>
        <li className='nav_link'>
          <Link href='/'>
          <a>Home</a>
          </Link>
        </li>

        <li className='nav_link'>
          <Link href='/gallery'>
          <a>Gallery</a>
          </Link>
        </li>
        <li>
          <a
            className='nav_link'
            target='_blank'
            rel='noopener'
            href='https://www.facebook.com/pyeluisofficial/'
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            className='nav_link'
            target='_blank'
            rel='noopener'
            href='https://www.instagram.com/pyeluisofficial/'
          >
            Instagram
          </a>
        </li>
      </ul>
      <div className='nav_divider' />
      <ul className='nav_sub'>
        <li>
          <a
            className='nav_link'
            target='_blank'
            rel='noopener'
            href='https://devatadaun.bandcamp.com/'
          >
            Pytch Records
          </a>
        </li>
        <li>
          <a
            className='nav_link'
            target='_blank'
            rel='noopener'
            href='https://pytchrecords.bandcamp.com/album/pye-luis'
          >
            Pye Luis Bandcamp
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBarNav
