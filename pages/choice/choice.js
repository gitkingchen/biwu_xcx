// pages/choice/choice.js

import { $wuxDialog,$wuxToast } from '../../components/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isConfirm:false
  },

  startFn:function(){
    var self = this;
    $wuxDialog().confirm({
        resetOnClose: true,
        closable: false,
        maskClosable:false,
        title: '提示',
        content: '你选了XXXXXXX,是否开始答题？',
        confirmText:'是',
        cancelText:'否',
        onConfirm(e) {
          self.setData({
            isConfirm:true
          },function(){
            setTimeout(()=>{
              wx.redirectTo({
                url: '../answer/answer'
              });
            },2000);
          });
          // setArrived({
          //   order_id:row.target.dataset.item.wash_order_id
          // })
          // .then(data =>{
          //   if(data.error_code == '0000'){
              
            // }else{
            //   $wuxToast().show({
            //       type: 'error',
            //       duration: 2000,
            //       color: '#fff',
            //       text: data.error_msg,
            //       success: () => {}
            //   });
            // }
            
          //})     
        },
        onCancel(e) {},
    });
    console.log('start')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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