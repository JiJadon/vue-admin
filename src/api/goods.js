import request from '@/utils/request'

export default {
  GoodsSkuList() {
    return request({
      url: `/goods/list`,
      method: 'get'
    })
  },
  GoodsSkuImg(id) {
    return request({
      url: `/goods/imgs/${id}`,
      method: 'get'
    })
  },
  disable(id) {
    return request({
      url: `/goods/disable/${id}`,
      method: 'put'
    })
  },
  enable(id) {
    return request({
      url: `/goods/enable/${id}`,
      method: 'put'
    })
  }
}

