import ReactPlayer from 'react-player'

const Gallery = ({ photoGallery, videos }) => {
  const _videos = videos.map(video => {
    video.fields.file.isVideo = true
    return video.fields.file
  })
  const items = [..._videos, ...photoGallery.fields.photos]
  return (
    <div className='page' id='curator'>
      <div className='curator_title_wrapper'>
        <span>PL</span>
        <div className='curator_line' />
        <div className='curator_title'>Gallery</div>
        <div className='curator_line' />
        <span>Count em</span>
      </div>
      <div className='curator_list'>
        <div className='curator_list_content'>
          <div className='connect_btn_wrapper item'>
            <div className='connect_btn'>
              <div className='connect_btn_text'>
                View On <br />
                Youtube
              </div>
            </div>
          </div>
          <div className='curator_list_content_desc'>Or Play Here</div>
          {items.map(item => {
            console.log(item)
            return (
              <div className='item'>
                {item.isVideo ? (
                  <ReactPlayer url={item.fields.file.url} className='thumb' />
                ) : (
                  <div className='thumb'>
                    <img src={item.fields.file.url + '?w=400&h=400'} />
                  </div>
                )}

                <div className='info'>
                  <div className='name'>{item.fields.title}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Gallery
