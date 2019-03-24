// pages/time/time.js

import { $wuxCountDown } from '../../components/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timePoint = new $wuxCountDown({
        date: '2019-03-24 23:45:10',
        render(date) {
            const years = this.leadingZeros(date.years, 4) + ' 年 '
            const days = this.leadingZeros(date.days, 2) + ' 天 '
            const hours = this.leadingZeros(date.hours, 2) + ' 时 '
            const min = this.leadingZeros(date.min, 2) + ' 分 '
            const sec = this.leadingZeros(date.sec, 2) + ' 秒 '

            this.setData({
                timePoint: days + hours + min + sec,
            })
        },
        onEnd(){
          wx.redirectTo({
            url: '../choice/choice'
          });
        }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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