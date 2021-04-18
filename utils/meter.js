const rate = wx.getSystemInfoSync().windowWidth / 750

export function rpx2px(rpx) {
  return rpx * rate
}