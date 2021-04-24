// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    // 全局变量 全部课程
    allCourses: [
      {
        coursesID: 'TOO1',
        name: "团课",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "纤体瑜伽",
        time: "09 : 00",
        closTime: "10 : 00",
        teacher: "Angel",
        addr: "分店",
        difficulty: 1,
        maxPeople: 10,
        minPeople: 3,
        peopleNum: 4
      }, {
        coursesID: 'VOO1',
        name: "vip",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "纤体瑜伽",
        time: "09 : 00",
        closTime: "10 : 00",
        teacher: "Angel",
        addr: "分店",
        difficulty: 2,
        maxPeople: 10,
        minPeople: 3,
        peopleNum: 8
      }, {
        coursesID: 'SOO1',
        name: "私教",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "纤体瑜伽",
        time: "09 : 00",
        closTime: "10 : 00",
        teacher: "Angel",
        addr: "分店",
        difficulty: 3,
        maxPeople: 10,
        minPeople: 3,
        peopleNum: 5
      }
    ],

    // 全局变量 团课
    League: [
      {
        coursesID: 'TOO1',
        name: "团课",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "纤体瑜伽",
        time: "09 : 00",
        closTime: "10 : 00",
        teacher: "Angel",
        addr: "分店",
        difficulty: 1,
        maxPeople: 10,
        minPeople: 3,
        peopleNum: 4
      }
    ],

    // vip课程
    vip: [
      {
        coursesID: 'VOO1',
        name: "vip",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "纤体瑜伽",
        time: "09 : 00",
        closTime: "10 : 00",
        teacher: "Angel",
        addr: "分店",
        difficulty: 2,
        maxPeople: 10,
        minPeople: 3,
        peopleNum: 8
      }
    ],

    // 私教课程
    Private: [
      {
        coursesID: 'SOO1',
        name: "私教",
        URL: "http://353976.s81i.faiusr.com/2/108/AFEIuM0VEAIYACDevPHdBSig05HBAjCyBTj8AkBs.jpg",
        title: "纤体瑜伽",
        time: "09 : 00",
        closTime: "10 : 00",
        teacher: "Angel",
        addr: "分店",
        difficulty: 3,
        maxPeople: 10,
        minPeople: 3,
        peopleNum: 5
      }
    ]
  }
})
