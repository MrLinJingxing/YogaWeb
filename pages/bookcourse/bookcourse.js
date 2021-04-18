// pages/bookcourse/bookcourse.js
Page({
  data: {
    index:0,
    currentTab: 0,
    courses:[{
      name: "全部",
    },
    {
      name: "团课",
    }, {
      name: "vip",
    }, {
      name: "私教",
    }],
    allCourses: [
      {
        name: "团课",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "团课 纤体瑜伽",
        time: "09 : 00",
        teacher: "Angel",
        difficulty: 1
      }, {
        name: "vip",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "vip 纤体瑜伽",
        time: "09 : 00",
        teacher: "Angel",
        difficulty: 2
      }, {
        name: "私教",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "私教 纤体瑜伽",
        time: "09 : 00",
        teacher: "Angel",
        difficulty: 3
      }
    ],
    League: [
      {
        name: "团课",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "团课 纤体瑜伽",
        time: "09 : 00",
        teacher: "Angel",
        difficulty: 1
      }
    ],
    vip: [
      {
        name: "vip",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "vip 纤体瑜伽",
        time: "09 : 00",
        teacher: "Angel",
        difficulty: 2
      }
    ],
    Private: [
      {
        name: "私教",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "私教 纤体瑜伽",
        time: "09 : 00",
        teacher: "Angel",
        difficulty: 3
      }
    ]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '预约课程',
    })
  },
  dateChange(e) {
    // console.log(e)
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
  details: function (e) {
    wx.navigateTo({
      url: '/pages/coursedetails/coursedetails',
    })
  }
})