import { request } from 'utils/request'
// 轮播图
export function getBanner() {
  return request({
    url: '/banner?type=1'
  })
}

// 推荐歌单
export function recommendList(params) {
  return request({
    url: '/top/playlist',
    params: {
      order: params.order,
      limit: params.limit,
      offset: params.offset,
      cat: params.cat
    }
  })
}