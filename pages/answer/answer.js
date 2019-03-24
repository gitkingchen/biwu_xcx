// pages/answer/answer.js

import { $wuxDialog,$wuxToast } from '../../components/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
     scrollTop: 0,
     topics:[
      {
        type:'简单（每题10分）',
        list:[
          'node',
          'es5'
        ]
      },
      {
        type:'中等（每题20分）',
        list:[
          'ajax',
          'es6'
        ]
      },
      {
        type:'困难（每题30分）',
        list:[
          'reg',
          '算法'
        ]
      }
     ]
  },
  onPageScroll(e){
      console.log('onPageScroll', e.scrollTop)
      this.setData({
          scrollTop: e.scrollTop,
      })
  },
  finishFn(){
    $wuxDialog().confirm({
        resetOnClose: true,
        closable: false,
        maskClosable:false,
        title: '提示',
        content: '是否确认完成？',
        confirmText:'是',
        cancelText:'否',
        onConfirm(e) {
          // setArrived({
          //   order_id:row.target.dataset.item.wash_order_id
          // })
          // .then(data =>{
          //   if(data.error_code == '0000'){
              $wuxToast().show({
                  type: 'success',
                  duration: 5000,
                  color: '#fff',
                  text: '获取最新答完题的状态（比如请稍微休息一下哦~，还有一人未答完/您是最后提交的，请继续努力哦~）',
                  success: () => {}
              });
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
    //ajax
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