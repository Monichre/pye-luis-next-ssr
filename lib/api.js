import * as Contentful from 'contentful'
const CONTENTFUL_SPACE_ID = 'aft70ikgwtvx'
const CONTENTFUL_ACCESS_TOKEN =
  '4e75a8b58a058563c5644162137d97c12e26b371e81afdd28388f6018aa69bc4'

export const getSiteContent = async () => {
  const CMS = Contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN
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
