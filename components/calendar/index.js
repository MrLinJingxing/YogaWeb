const util = require("../../utils/util")
const meter = require("../../utils/meter")
const query = wx.createSelectorQuery()
Component({
  properties: {
    daysLength: {
      type: Number,
      value: 7
    },
    fixedWeek: {
      type: Boolean,
      vale: false
    }
  },
  data: {
    dates:[],
    dayWidth: 0,
    _selectedMoonIndex: 0,
    _selectedDayIndex: 0
  },
  methods: {
    _initCalendar() {
      var date = this.data.fixedWeek?this._fiexdWeek(new Date()):new Date();
      this.setData({
        dayWidth: meter.rpx2px(750 / this.data.daysLength) - 4
      })
      this._fixedCalendar(date,this.data.daysLength,date.getFullYear(),date.getMonth())
      this._calendarDayChange(0,0)
    },
    _fixedCalendar(now,haveDays,year,moon) {
      var totalDays = new Date(year,moon + 1,0).getDate()
      var nowDay = now.getDate()
      if(nowDay+haveDays <= totalDays) {
        var days=new Array(haveDays)
        var checked = new Array(haveDays)
        for(var i=0;i<haveDays;++i){
          days[i]={day: nowDay+i,checked: false}
        }
        this.setData({
          dates:this.data.dates.concat(
            {
              moon: moon+1==13?1:moon+1,
              days: days
            }
          )
        })
      } else if(haveDays > 0){
        var doDays = totalDays - nowDay;
        var days=new Array(doDays)
        var checked = new Array(doDays)
        for(var i=0;i<=doDays;++i){
          days[i]={day: nowDay+i,checked: false}
        }
        this.setData({
          dates:this.data.dates.concat(
            {
              moon: moon+1==13?1:moon+1,
              days: days,
            }
          )
        })
        if(now.getMonth == 11){
          this._fixedCalendar(new Date(year+1,0,1),haveDays - doDays - 1,year+1,0)
        } else {
          this._fixedCalendar(new Date(year,moon+1,1),haveDays - doDays - 1,year,moon+1)
        }
      }
    },
    _fiexdWeek(now){
      var weekDay = now.getDay()
      if(weekDay != 1) {
        var newDate = new Date(now.setDate(now.getDate() - weekDay + 1))
        return newDate
      }
      return now
    },
    _calendarDayChange(moonIndex, dayIndex) {
      this.data.dates[this.data._selectedMoonIndex].days[this.data._selectedDayIndex].checked = false
      this.data.dates[moonIndex].days[dayIndex].checked = true
      this.setData({
        _selectedMoonIndex: moonIndex,
        _selectedDayIndex: dayIndex,
        dates: this.data.dates
      })
      var date = new Date(new Date().getFullYear(),this.data.dates[moonIndex].moon-1,this.data.dates[moonIndex].days[dayIndex].day)
      this.triggerEvent('DayChange', {
        date: date
      })
    },
    _calendarDayTap(e) {
      var moonIndex = e.currentTarget.dataset.moonIndex
      var dayIndex = e.currentTarget.dataset.dayIndex
      this._calendarDayChange(moonIndex, dayIndex)
    }
  },
  lifetimes: {
    attached() {
      this._initCalendar()
    }
  }
});