Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    course: [{
        id: 1,
        name: '课程管理'
      },
      {
        id: 2,
        name: '会员管理'
      },
      {
        id: 3,
        name: '课时统计'
      },
      {
        id: 4,
        name: '会员发卡'
      },
      {
        id: 5,
        name: '营业统计'
      },
      {
        id: 6,
        name: '活动管理'
      },
      {
        id: 7,
        name: '短信管理'
      },
      {
        id: 8,
        name: ''
      },
      {
        id: 9,
        name: ''
      },
    ]
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '管理页面',
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getindex(e) {
    var id = e.currentTarget.dataset.index
    console.log(id)
    switch (id) {
      case 1:
        wx: wx.navigateTo({
          url: '/pages/index2/index2',
        })
        break;
      case 2:
        wx: wx.navigateTo({
          url: '/pages/member/member',
        })
        break;
      case 3:
        wx: wx.navigateTo({
          url: '/pages/classHour/classHour',
        })
        break;
      case 4:
        wx: wx.navigateTo({
          url: '/pages/opencard/opencard',
        })
        break;
      case 5:
        wx: wx.navigateTo({
          url: '/pages/classHour/classHour',
        })
        break;
      case 6:
        wx: wx.navigateTo({
          url: '/pages/activity/activity',
        })
        break;
      case 7:
        wx: wx.navigateTo({
          url: '/pages/classHour/classHour',
        })
        break;
      case 8:
        wx: wx.navigateTo({
          url: '',
        })
        break;
      case 9:
        wx: wx.navigateTo({
          url: '',
        })
        break;
    }
  }
})