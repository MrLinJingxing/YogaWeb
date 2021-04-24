const app = getApp()
const pinyin = require("./pinyin")
/*
const wordTitle = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
*/
const words = [
  // 在"#"后面添加单词对象
  {
    title: "#",
    content: []
  },
  {
    title: "A",
    content: []
  },
  {
    title: "B",
    content: []
  },
  {
    title: "C",
    content: []
  },
  {
    title: "D",
    content: []
  },
  {
    title: "E",
    content: []
  },
  {
    title: "F",
    content: []
  },
  {
    title: "G",
    content: []
  },
  {
    title: "H",
    content: []
  },
  {
    title: "I",
    content: []
  },
  {
    title: "J",
    content: []
  },
  {
    title: "K",
    content: []
  },
  {
    title: "L",
    content: []
  },
  {
    title: "M",
    content: []
  },
  {
    title: "N",
    content: []
  },
  {
    title: "O",
    content: []
  },
  {
    title: "P",
    content: []
  },
  {
    title: "Q",
    content: []
  },
  {
    title: "R",
    content: []
  },
  {
    title: "S",
    content: []
  },
  {
    title: "T",
    content: []
  },
  {
    title: "U",
    content: []
  },
  {
    title: "V",
    content: []
  },
  {
    title: "W",
    content: []
  },
  {
    title: "X",
    content: []
  },
  {
    title: "Y",
    content: []
  },
  {
    title: "Z",
    content: []
  }
]

export function getSplitData(date) {
  if (app.globalData.wordsplit_cache && app.globalData.wordsplit_words != null) {
    return app.globalData.wordsplit_words
  }
  _clear()
  date.forEach(obj => {
    _addWordToContent(pinyin.getFirst(obj.word), obj)
  })
  if (app.globalData.wordsplit_cache) {
    app.globalData.wordsplit_words = words
  }
  return words
}

export function refreshCache(date) {
  _clearCache()
  date.forEach(obj => {
    _addWordToContent(pinyin.getFirst(obj.word), obj)
  })
  app.globalData.wordsplit_words = words
}

export function isCache() {
  return app.globalData.wordsplit_cache
}

export function setCache(bool) {
  app.globalData.wordsplit_cache = bool
}

function _addWordToContent(first, objTemp) {
  var wordObj = _getWordObj(first)
  wordObj.content.push(objTemp)
}

function _clearCache() {
  if (app.globalData.wordsplit_words != null) {
    for (var i = 0; i < app.globalData.wordsplit_words.length; ++i) {
      app.globalData.wordsplit_words[i].content = []
    }
  }
}

function _clear() {
  if (words != null) {
    for (var i = 0; i < words.length; ++i) {
      words[i].content = []
    }
  }
}

function _getWordObj(first) {
  var other = words[0]
  for (var i = 0; i < words.length; ++i) {
    var item = words[i]
    if (item.title === first) {
      other = item
      break
    }
  }
  return other
}

export function getWordObj(first,words) {
  var other = words[0]
  for (var i = 0; i < words.length; ++i) {
    var item = words[i]
    if (item.title === first) {
      other = item
      break
    }
  }
  return other
}