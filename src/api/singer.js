import { request } from 'utils/request'

//请求歌手数据
export function getSingers(data) {
  return request({
    url: '/artist/list',
    params: {
      type: data.type,
      area: data.area,
      initial: data.initial
    }
  })
}

// 请求歌手详情数据
export function getSingerDetail(singerId) {
  return request({
    url: '/artists?id='+ singerId,
  })
}
