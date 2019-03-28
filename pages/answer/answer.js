// pages/answer/answer.js

import { $wuxDialog,$wuxToast,$wuxLoading } from '../../components/index';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     myAvatar:'',
     scrollTop: 0,
     isHiddenFinish:true,
     topics:[],
     easyCount:'',
     mediumCount:'',
     hardCount:'',
  },
  onPageScroll(e){
      this.setData({
          scrollTop: e.scrollTop,
      })
  },
  finishFn(){
    var self = this;
    $wuxDialog().confirm({
        resetOnClose: true,
        closable: false,
        maskClosable:false,
        title: '提示',
        content: '是否确认完成？',
        confirmText:'是',
        cancelText:'否',
        onConfirm(e) {

          wx.request({
            url: 'http://jc.zhangli.me/api/topic/finish',
            //url: 'http://127.0.0.1:8181/api/topic/finish',
            method:'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data:{
              avatarUrl:app.globalData.userInfo.avatarUrl,
              nickName:app.globalData.userInfo.nickName,
              easyCount:self.data.easyCount,
              mediumCount:self.data.mediumCount,
              hardCount:self.data.hardCount,
            },
            success(res) {
              
                if(res.data.errno == 0){
                    $wuxToast().show({
                        type: 'success',
                        duration: 5000,
                        color: '#fff',
                        text: '已提交，请休息一下~',
                        success: () => {}
                    });
                }else{
                    $wuxToast().show({
                        type: 'error',
                        duration: 2000,
                        color: '#fff',
                        text: res.data.errmsg,
                        success: () => {}
                    });
                }
             
            }
          })
        },
        onCancel(e) {},
    });
    //ajax
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
    if(!app.globalData.userInfo){
        wx.redirectTo({
          url: '../index/index'
        });
    }else{
      this.setData({
        myAvatar:app.globalData.userInfo.avatarUrl
      });
    }

    this.data.easyCount = options.easy;
    this.data.mediumCount = options.medium;
    this.data.hardCount = options.hard;
    var self = this;
    this.$wuxLoading = $wuxLoading();
    this.$wuxLoading.show({
        text: '数据加载中',
    });
    wx.request({
      url: 'http://jc.zhangli.me/api/topic/choice',
      //url: 'http://127.0.0.1:8181/api/topic/choice',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        easyCount:self.data.easyCount,
        mediumCount:self.data.mediumCount,
        hardCount:self.data.hardCount
      },
      success(res) {
        setTimeout(function(){
          self.$wuxLoading.hide();
        
          if(res.data.errno == 0){
            self.setData({
              isHiddenFinish:false,
              topics:res.data.data
            })
          }else{
              $wuxToast().show({
                  type: 'error',
                  duration: 2000,
                  color: '#fff',
                  text: '网络错误',
                  success: () => {}
              });
          }
        },1000);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //console.log('ready')
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})