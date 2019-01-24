const FullPlayer = props => {
  const initialSong = props.songs[0]
  return (
    <div className='player' id='player'>
      <div className='playback_wrapper'>
        <div className='playback_blur' />
        <div
          className='playback_thumb'
          style={{
            backgroundImage: `url(${
              initialSong.fields.featuredImage.fields.file.url
            })`
          }}
        />
        <div className='playback_info'>
          <div className='title'>{initialSong.fields.title}</div>
          <div className='artist'>Pye Luis</div>
        </div>
        <div className='playback_btn_wrapper'>
          <i className='btn-prev fa fa-step-backward' aria-hidden='true' />
          <div className='btn-switch'>
            <i className='btn-play fa fa-play' aria-hidden='true' />
            <i className='btn-pause fa fa-pause' aria-hidden='true' />
          </div>
          <i className='btn-next fa fa-step-forward' aria-hidden='true' />
        </div>
        <div className='playback_timeline'>
          <div className='playback_timeline_start-time'>00:31</div>
          <div className='playback_timeline_slider'>
            <div className='slider_base' />
            <div className='slider_progress' />
            <div className='slider_handle' />
          </div>
          <div className='playback_timeline_end-time'>03:11</div>
        </div>
      </div>
      <div className='list_wrapper'>
        <ul className='list'>
          {props.songs.map(song => (
            <li className='list_item selected'>
              <div
                className='thumb'
                style={{
                  backgroundImage: `url(${
                    song.fields.featuredImage.fields.file.url
                  })`
                }}
              />
              <div className='info'>
                <div className='title'>{song.fields.title}</div>
                <div className='artist'>Pye Luis</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FullPlayer
