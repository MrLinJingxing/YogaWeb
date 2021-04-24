Page({
  data: {
    array: [
      {index: 3, course: '总课程'},
      {index: 3, course: '团课课程'},
      {index: 0, course: 'vip课程'},
      {index: 0, course: '私教课程'},
    ],
    array2: ['教练','课程','课程名称','上课时间'],
    array3: [
      {teacher: 'Angel', courseType: '团课', courseName: '普提拉器械-初中班', classTime: '2021-04-23 09:00'},
      {teacher: 'Angel', courseType: '团课', courseName: '普提拉器械-初中班', classTime: '上课时间'},
      {teacher: 'Angel', courseType: '团课', courseName: '普提拉器械-初中班', classTime: '上课时间'},
      
    ]

  },
  onLoad: function (options) {
    wx:wx.setNavigationBarTitle({
      title: '课时统计',
    })
  },
})