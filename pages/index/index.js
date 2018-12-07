//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articleList: [
      {
        id:1,
        name:'name1'
      },
      {
        id:2,
        name:'name1'
      },
      {
        id:3,
        name:'name1'
      },
      {
        id:4,
        name:'name1'
      },
      {
        id:5,
        name:'name1'
      },
      {
        id:6,
        name:'name1'
      }
    ],
  },
  onLoad: function() {

  },
  toDetail(e){   
    wx.navigateTo({
      url: '/pages/index/detail/detail?viewId='+e.currentTarget.dataset.viewitem.id  
    })
  }
})