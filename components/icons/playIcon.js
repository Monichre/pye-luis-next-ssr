const PlayIcon = props => {
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
      className='btn-play'
      onClick={props.onClick}
    >
      <polygon points='5 3 19 12 5 21 5 3' />
    </svg>
  )
}

export default PlayIcon
