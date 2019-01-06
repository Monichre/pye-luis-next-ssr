const MiniPlayer = props => {
  return (
    <div className='mini-player'>
      <div className='track_info_wrapper'>
        <div className='track_info'>
          <div className='thumb' />
          <div className='info'>
            <div className='title'>Friday Comes</div>
            <div className='artist'>Early</div>
          </div>
        </div>
      </div>
      <div className='mini-player_btn_wrapper'>
        <img src='../static/icons/skip-back.svg' className='btn-prev' />
        <img src='../static/icons/play.svg' className='btn-play' />
        <img src='../static/icons/skip-forward.svg' className='btn-next' />
        <img
          src='../static/icons/music.svg'
          className='btn-open-player'
          onClick={props.toggleFullPlayer}
        />
      </div>
    </div>
  )
}

export default MiniPlayer
