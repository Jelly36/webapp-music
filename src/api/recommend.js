import { request } from 'utils/request'
// 轮播图
export function getBanner() {
  return request({
    url: '/banner?type=1'
  })
}

// 推荐歌单
export function recommendList(data) {
  return request({
    url: '/personalized',
    params: {
      limit:data
    }
  })
}
// 推荐新音乐
export function recommendNewSong() {
  return request({
    url: '/personalized/newsong',
  })
}