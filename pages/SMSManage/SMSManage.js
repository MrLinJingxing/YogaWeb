Page({
  data: {
    isChecked1: true,
    isChecked2: true,
    isChecked3: true,
    isChecked4: true,
    isChecked5: true,
    isChecked6: true,
    isChecked7: true,
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '短信管理',
    })
  },
  switchChange: function (e) {

    this.setData({
      isChecked1: e.detail.value
    })
    console.log("预约成功提醒",this.data.isChecked1)
  },
  switchChange2: function (e) {

    this.setData({
      isChecked2: e.detail.value
    })
    console.log("取消成功提醒",this.data.isChecked2)
  },
  switchChange3: function (e) {

    this.setData({
      isChecked3: e.detail.value
    })
    console.log("开课前提醒",this.data.isChecked3)
  },
  switchChange4: function (e) {

    this.setData({
      isChecked4: e.detail.value
    })
    console.log("签到提醒",this.data.isChecked4)
  },
  switchChange5: function (e) {

    this.setData({
      isChecked5: e.detail.value
    })
    console.log("预约排队成功提醒",this.data.isChecked5)
  },
  switchChange6: function (e) {

    this.setData({
      isChecked6: e.detail.value
    })
    console.log("课程人数不足取消课程提醒",this.data.isChecked6)
  },
  switchChange7: function (e) {

    this.setData({
      isChecked7: e.detail.value
    })
    console.log("停课自动取消预约提醒",this.data.isChecked7)
  }
})