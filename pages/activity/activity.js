// pages/bookcourse/bookcourse.js
var app = getApp();
Page({
  data: {
    // 页面切换页片
    queueSize: 0,
    index:0,
    currentTab: 0,
    courses:[{
      name: "进行中",
    },
    {
      name: "未开始",
    }, {
      name: "已过期",
    }],
    // 进行中
    inProgress: [
      {title: '12天变形记，秒杀年卡',url: 'http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg',cardName: '活动年卡',cardTime: '12个月',Price: '2880'}
    ],
    // 未开始
    notStarted: [],
    // 已过期
    expired: [],
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '活动列表',
    })
    this.setData({
      allCourses: app.globalData.allCourses,
      League: app.globalData.League,
      vip: app.globalData.vip,
      Private: app.globalData.Private
    })
  },
  dateChange(e) {
    console.log(e.detail.date)
  },
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current,
      index: e.detail.current
    });
  },
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
        index: e.target.dataset.current
      })
    }
  },
  gotoAddActivity: function() {
    wx.navigateTo({
      url: '/pages/addActivity/addActivity',
    })
  }
})