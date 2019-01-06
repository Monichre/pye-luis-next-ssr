// import * as Contentful from 'contentful'
const Contentful = require('contentful')
const fs = require('fs')
const path = require('path')

const CONTENTFUL_SPACE_ID = 'aft70ikgwtvx'
const CONTENTFUL_ACCESS_TOKEN =
  '4e75a8b58a058563c5644162137d97c12e26b371e81afdd28388f6018aa69bc4'

const getCmsContent = async () => {
  const cms = Contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN
  })

  await cms
    .getEntries()
    .then(response => {
      console.log(response.items)

      fs.writeFileSync(
        path.join(__dirname, '..', 'data', 'data.json'),
        JSON.stringify(response.items)
      )

      return true
      // const CONTENT = {}

      // CONTENT.songs = response.items.filter(
      //   item => item.sys.contentType.sys.id === 'song'
      // )
      // CONTENT.albums = response.items.filter(
      //   item => item.sys.contentType.sys.id === 'album'
      // )
      // CONTENT.videos = response.items.filter(
      //   item => item.sys.contentType.sys.id === 'video'
      // )
      // CONTENT.sections = response.items.filter(
      //   item =>
      //     item.sys.contentType.sys.id === 'section' &&
      //     item.fields.sectionTitle !== 'Photography'
      // )
      // CONTENT.photography = response.items.find(
      //   item => item.fields.sectionTitle === 'Photography'
      // )

      // return CONTENT
    })
    .catch(err => console.log(err))
  //   return CMS_CONTENT
  return true
}

getCmsContent()
