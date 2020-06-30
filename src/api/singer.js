import { request } from 'utils/request'

//请求歌手数据
export function getSingers(data) {
  return request({
    url: '/artist/list',
    params: {
      type: data.type?data.type:'-1',
      area: data.area?data.area:'-1',
      initial: data.initial
    }
  })
}
