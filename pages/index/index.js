//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
    if (app.globalData.userInfo) {

      wx.redirectTo({
        url: '../choice/choice'
      });
      // this.setData({
      //   userInfo: app.globalData.userInfo,
      //   hasUserInfo: true
      // })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        wx.redirectTo({
          url: '../choice/choice'
        });
        // this.setData({
        //   userInfo: res.userInfo,
        //   hasUserInfo: true
        // })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      // wx.getUserInfo({
      //   success: res => {
      //     app.globalData.userInfo = res.userInfo
      //     wx.redirectTo({
      //       url: '../choice/choice'
      //     });
      //     // this.setData({
      //     //   userInfo: res.userInfo,
      //     //   hasUserInfo: true
      //     // })
      //   }
      // })
      // wx.redirectTo({
      //   url: '../index/index'
      // });
    }
  },
  getUserInfo: function(e) {
    if(e.detail.userInfo){
      app.globalData.userInfo = e.detail.userInfo;
      wx.redirectTo({
        url: '../choice/choice'
      });
    }
    // this.setData({
    //   userInfo: e.detail.userInfo,
    //   hasUserInfo: true
    // })
  },
})
