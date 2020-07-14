export default class Song{
  constructor({id, name, singer, album, image, duration}){
    this.id = id
    this.name = name
    this.singer = singer
    this.album = album
    this.image = image
    this.duration = duration
  }
}
export function createSong(musicData) {
  return new Song({
    id :musicData.id,
    name: musicData.name,
    singer: musicData.ar[0].name,
    album: musicData.al.name,
    image: musicData.al.picUrl,
    duration: musicData.dt
  })
}