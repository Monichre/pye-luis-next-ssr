const PauseIcon = props => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#fff9e1'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className='feather feather-pause'
      onClick={props.onClick}
    >
      <rect x='6' y='4' width='4' height='16' />
      <rect x='14' y='4' width='4' height='16' />
    </svg>
  )
}

export default PauseIcon
