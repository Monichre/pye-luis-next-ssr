const SideBarNav = () => {
  return (
    <div className='nav'>
      <ul className='nav_main'>
        <li>
          <a className='nav_link'>Home </a>
        </li>
        <li>
          <a className='nav_link'>Music</a>
        </li>
        <li>
          <a className='nav_link'>Videos</a>
        </li>
        <li>
          <a className='nav_link'>PL's Mix</a>
        </li>
      </ul>
      <div className='nav_divider' />
      <ul className='nav_sub'>
        <li>
          <a className='nav_link' href=''>
            About
          </a>
        </li>
        <li>
          <a className='nav_link' href=''>
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBarNav
