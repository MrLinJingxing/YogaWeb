const wordsplit = require("../../utils/wordsplit")
const pinyin = require("../../utils/pinyin")
Component({
  properties: {
    // MOD 必须填写，单词表
    words: {
      type: Object,
      value: {}
    },
    // MOD 是否隐藏空字母
    hideEmpty: {
      type: Boolean,
      value: false
    },
    // MOD 搜索框提示文字
    searchPlaceHolder: {
      type: String,
      value: "搜索"
    },
    // MOD 点击条目跳转到的路径
    navigateTo: {
      type: String,
      value: null
    }
  },
  data: {
    searchText: "",
    currentWordHref: "",
    isSearchFocus: false,
    scrollViewId: "_",
    /* 
      NOTICE 搜索结果保存在searchWordsObj对象
      searchWordsObj：{
        title: 首字母,
        content: {
          word: 文字内容
        }
      }
     */
    searchWordsObj: {}
  },
  methods: {
    // 搜索框文本改变监听
    _searchChange(e) {
      var text = e.detail.value
      if (text.length != 0) {
        var wordsObj = wordsplit.getWordObj(pinyin.getFirst(text), this.data.words)
        var tempSearchObj = new Array()
        for (var i = 0; i < wordsObj.content.length; ++i) {
          var wordObj = wordsObj.content[i]
          if (wordObj.word.length >= text.length) {
            var flag = true
            for (var j = 1; j < text.length; ++j) {
              if (pinyin.getFirst(wordObj.word.charAt(j)) !== pinyin.getFirst(text[j])) {
                flag = false
                break
              }
            }
            if (flag) {
              tempSearchObj.push(wordObj)
            }
          }
        }
        this.setData({
          searchWordsObj: {
            title: wordsObj.title,
            content: tempSearchObj
          }
        })
      } else {
        this.setData({
          searchWordsObj: {}
        })
      }
    },
    _searchCloseTap(e) {
      this.setData({
        searchText: "",
        searchWordsObj: {}
      })
    },
    _searchFocusEvent(e) {
      var focus = false;
      var placeholder = "搜索"
      if (e.type === 'focus') {
        focus = true
        placeholder = null
      }
      this.setData({
        isSearchFocus: focus,
        searchPlaceHolder: placeholder,
      })
    },
    _wordInfoTap(e) {
      var tapId = e.currentTarget.id
      var args = tapId.split("-")
      var target = null
      var loopWords = this.data.words
      if (args[0] === "href_search") {
        loopWords = new Array(this.data.searchWordsObj)
      }
      for (var i = 0; i <= loopWords.length; ++i) {
        if (args[1] === loopWords[i].title) {
          target = loopWords[i].content[args[2]]
          break
        }
      }
      if (target != null) {
        this.triggerEvent('InfoTap', {
          info: target
        })
      }
      if (this.data.navigateTo != null) {
        wx.navigateTo({
          url: this.data.navigateTo,
          data: {
            info: target
          }
        })
      }
    },
    _sideBarWordTap(e) {
      var href = "href-" + e.currentTarget.dataset.word
      if (href !== this.data.currentWordHref) {
        this.setData({
          currentWordHref: href,
          scrollViewId: href
        })
      }
    }
  },
  lifetimes: {
    attached() {
      if(this.data.words != null && this.data.words.length != 0){
        this.setData({
          words: wordsplit.getSplitData(this.data.words)
        })
      }
    }
  }
})