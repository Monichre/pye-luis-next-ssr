// import { Thumb } from './Thumb'

// const Gallery = ({ photoGallery, videos, toggleGallery }) => {
//   const _videos = videos.map(video => {
//     video.fields.file.isVideo = true
//     return video.fields.file
//   })
//   const items = [..._videos, ...photoGallery.fields.photos]
//   return (
//     <div className='page' id='curator'>
//       <div className='curator_title_wrapper'>
//         <span>PL</span>
//         <div className='curator_line' />
//         <div className='curator_title'>Gallery</div>
//         <div className='curator_line' />
//         <span>Count em</span>
//       </div>

//       <div className='curator_list_content_desc' onClick={toggleGallery}>
//         Hide Gallery
//       </div>
//       <div className='curator_list'>
//         <div className='curator_list_content'>
//           <div className='connect_btn_wrapper item'>
//             <div className='connect_btn'>
//               <div className='connect_btn_text'>
//                 View On <br />
//                 Youtube
//               </div>
//             </div>
//           </div>

//           {items.map(item => {
//             return <Thumb item={item} />
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Gallery

// /*
// ;<div className='info'>
//   <div className='name'>{item.fields.title}</div>
// </div>

// */
