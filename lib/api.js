import * as Contentful from 'contentful'

export const getSiteContent = async () => {
  const CMS = Contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const { items } = await CMS.getEntries()
  const songs = items.filter(item => item.sys.contentType.sys.id === 'song')
  const photoGallery = items.filter(
    item => item.sys.contentType.sys.id === 'photo'
  )[0]
  const videos = items.filter(item => item.sys.contentType.sys.id === 'video')

  return {
    data: {
      songs: songs,
      photoGallery: photoGallery,
      videos: videos
    }
  }
}
