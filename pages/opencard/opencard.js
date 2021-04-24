// pages/opencard/opencard.js
Page({
  data: {
    clear: '/pages/img/clear.png',
    isClear1: false,
    va1: "",

    isClear2: false,
    va2: "",

    isClear3: false,
    va3: "",

    isClear4: false,
    va4: "",

    isClear5: false,
    va5: "",
    
    items: [{
      value: '1',
      name: '团课'
    },
    {
      value: '2',
      name: 'vip'
    },
    {
      value: '3',
      name: '私教'
    }
  ],
  items2: [{
    value: '1',
    name: '体验卡'
  },
  {
    value: '2',
    name: '周卡'
  },
  {
    value: '3',
    name: '月卡'
  },
  {
    value: '4',
    name: '90天卡'
  },
  {
    value: '5',
    name: '季卡'
  },
  {
    value: '6',
    name: '半年卡'
  },
  {
    value: '7',
    name: '年卡'
  }
],
  // 展开折叠
  selectedFlag: [false, false, false, false],
  show: false,
  selectData: ['选择课程类型', '团课', 'vip', '私教'],
  index: 0,
  selectedFlag2: [false, false, false, false],
  show2: false,
  selectData2: ['选择课程类型', '团课', 'vip', '私教'],
  index2: 0,
  // 箭头
  bottom: '/pages/img/bottom.png',
  top: '/pages/img/top.png',
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '会员发卡',
    })
  },
  obtain1: function (e) {
    var value = e.detail.value
    if (value != "") {
      this.setData({
        isClear1: true
      })
    } else {
      this.setData({
        isClear1: false
      })
    }
  },
  clear1: function () {
    this.setData({
      va1: "",
      isClear1: false
    })
  },
  obtain2: function (e) {
    var value = e.detail.value
    if (value != "") {
      this.setData({
        isClear2: true
      })
    } else {
      this.setData({
        isClear2: false
      })
    }
  },
  clear2: function () {
    this.setData({
      va2: "",
      isClear2: false
    })
  },
  obtain3: function (e) {
    var value = e.detail.value
    if (value != "") {
      this.setData({
        isClear3: true
      })
    } else {
      this.setData({
        isClear3: false
      })
    }
  },
  clear3: function () {
    this.setData({
      va3: "",
      isClear3: false
    })
  },
  obtain4: function (e) {
    var value = e.detail.value
    if (value != "") {
      this.setData({
        isClear4: true
      })
    } else {
      this.setData({
        isClear4: false
      })
    }
  },
  clear4: function () {
    this.setData({
      va4: "",
      isClear4: false
    })
  },
  obtain5: function (e) {
    var value = e.detail.value
    if (value != "") {
      this.setData({
        isClear5: true
      })
    } else {
      this.setData({
        isClear5: false
      })
    }
  },
  clear5: function () {
    this.setData({
      va5: "",
      isClear5: false
    })
  },
  Cancel() {
    this.setData({
      inputValue: ''
    })
  },

  // 复选框
  checkboxChange(e) {
    console.log('会员类型：', e.detail.value)

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
  // 复选框2
  checkboxChange2(e) {
    console.log('期限卡：', e.detail.value)

    const items = this.data.items2
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
  // 展开折叠选择  2
  changeToggle2: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.selectedFlag2[index]) {
      this.data.selectedFlag2[index] = false;
    } else {
      this.data.selectedFlag2[index] = true;
    }

    this.setData({
      selectedFlag2: this.data.selectedFlag2
    })
  },
  gotorecord: function () {
    wx.navigateTo({
      url: '/pages/opencard/record',
    })
  }
})