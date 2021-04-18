Page({
  data: {
    currentTab: 0,
    tabs:[
      {
        name:"团课",
      },{
        name:"vip",
      },{
        name:"私教",
      },
    ]
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '我的课程',
    })
  },
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
})