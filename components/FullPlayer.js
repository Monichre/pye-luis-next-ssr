const FullPlayer = () => {
  return (
    <div className='player' id='player'>
      <div className='playback_wrapper'>
        <div className='playback_blur' />
        <div className='playback_thumb' />
        <div className='playback_info'>
          <div className='title'>Friday Comes</div>
          <div className='artist'>Early</div>
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
          <li className='list_item selected'>
            <div className='thumb' />
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb' />
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb' />
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb' />
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb' />
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb' />
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb' />
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
          <li className='list_item'>
            <div className='thumb' />
            <div className='info'>
              <div className='title'>Friday Comes</div>
              <div className='artist'>Early</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FullPlayer
