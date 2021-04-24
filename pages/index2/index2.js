var count = 0;
var app = getApp()
Page({
  data: {
    show: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['选择课程类型', '团课', 'vip', '私教'], //下拉列表的数据
    index: 0, //选择的下拉列表下标
    // 课程类型
    index4: 0,
    course: ['团课', 'vip', '私教'],
    courseText: '选择课程类型',
    // 日期
    date: '2021-04-21',
    dateStart: '2020-4-21',
    dataEnd: '2022-4-21',
    dateButton: '日期选择',
    // 时间
    time: '09:00',
    timeText: '时间选择',
    // 课时
    index2: 0,
    array: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110', '120'],
    arrayText: '课时选择',
    // 老师
    index3: 0,
    teacher: ['Angel', 'Cikey', 'Fairy', 'Aviel', 'Vikey', 'Michelle', 'Yuri'],
    teacherText: '选择老师',
    // 打分
    stars: [0, 1, 2, 3, 4],
    normalSrc: '/pages/img/stars2.png',
    selectedSrc: '/pages/img/stars1.png',
    key: 0, //评分
    status: '',
    // 会员卡限制

    items: [{
        value: '1',
        name: '一次体验卡'
      },
      {
        value: '2',
        name: '99元活动月卡'
      },
      {
        value: '3',
        name: '普拉提大器械10次卡'
      },
      {
        value: '4',
        name: '普拉提大器械单次卡'
      },
      {
        value: '5',
        name: '半年卡'
      },
      {
        value: '6',
        name: '半年100次卡'
      }
    ],
    // 展开折叠
    selectedFlag: [false, false, false, false],
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '发布课程',
    })
    console.log(options.status)
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
    console.log(this.data.index)
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
      dateButton: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value,
      timeText: e.detail.value,
    })
  },
  bindPickerChange: function (e) {
    // console.log(e.detail.value)
    // if(e.detail.value == 0) {
    //   this.data.arrayText= e.detail.value;
    // }
    switch (e.detail.value) {
      case '0':
        this.setData({
          arrayText: '10'
        })
        break;
      case '1':
        this.setData({
          arrayText: '20'
        })
        break;
      case '2':
        this.setData({
          arrayText: '30'
        })
        break;
      case '3':
        this.setData({
          arrayText: '40'
        })
        break;
      case '4':
        this.setData({
          arrayText: '50'
        })
        break;
      case '5':
        this.setData({
          arrayText: '60'
        })
        break;
      case '6':
        this.setData({
          arrayText: '70'
        })
        break;
      case '7':
        this.setData({
          arrayText: '80'
        })
        break;
      case '8':
        this.setData({
          arrayText: '90'
        })
        break;
      case '9':
        this.setData({
          arrayText: '100'
        })
        break;
      case '10':
        this.setData({
          arrayText: '110'
        })
        break;
      case '11':
        this.setData({
          arrayText: '120'
        })
        break;
    }
  },
  bindPickerChange2: function (e) {
    // console.log(e.detail.value)
    // if(e.detail.value == 0) {
    //   this.data.arrayText= e.detail.value;
    // }
    switch (e.detail.value) {
      case '0':
        this.setData({
          teacherText: 'Angel'
        })
        break;
      case '1':
        this.setData({
          teacherText: 'Cikey'
        })
        break;
      case '2':
        this.setData({
          teacherText: 'Fairy'
        })
        break;
      case '3':
        this.setData({
          teacherText: 'Aviel'
        })
        break;
      case '4':
        this.setData({
          teacherText: 'Vikey'
        })
        break;
      case '5':
        this.setData({
          teacherText: 'Michelle'
        })
        break;
      case '6':
        this.setData({
          teacherText: 'Yuri'
        })
        break;
    }
  },
  bindPickerChange3: function (e) {
    switch (e.detail.value) {
      case '0':
        this.setData({
          courseText: '团课'
        })
        break;
      case '1':
        this.setData({
          courseText: 'vip'
        })
        break;
      case '2':
        this.setData({
          courseText: '私教'
        })
        break;
    }
  },
  // 打分
  select: function (e) {
    var key = e.currentTarget.dataset.key
    count = key
    this.setData({
      key: key
    })
    console.log("难度",key)
  },
  // 复选框
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
  },
  // 展开折叠选择  
  changeToggle: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.selectedFlag[index]) {
      this.data.selectedFlag[index] = false;
    } else {
      this.data.selectedFlag[index] = true;
    }

    this.setData({
      selectedFlag: this.data.selectedFlag
    })
  },
})