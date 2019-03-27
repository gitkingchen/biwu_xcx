// pages/choice/choice.js

import { $wuxDialog,$wuxToast } from '../../components/index';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:0,
    myAvatar:'',
    myName:'',
    items:[
      {
        'title':'简单（每题10分）',
        'score':10,
        'num':0,
        'type':'easy'
      },
      {
        'title':'中等（每题20分）',
        'score':20,
        'num':0,
        'type':'medium'
      },
      {
        'title':'困难（每题30分）',
        'score':30,
        'num':0,
        'type':'hard'
      }
    ],
  },
  minus:function(e){
    var curNum = parseInt(e.target.dataset.num);
    var curIndex = parseInt(e.target.dataset.index);
    
    if(curNum == 0){
      return;
    }

    curNum--;

    this.setItems(curIndex,curNum);
  },

  setItems:function(curIndex,curNum){
    this.data.items[curIndex].num = curNum;
    this.sum();

    this.setData({
      items:this.data.items
    })
  },

  plus:function(e){
    var curNum = parseInt(e.target.dataset.num);
    var curIndex = parseInt(e.target.dataset.index);
    
    if(this.data.total + parseInt(this.data.items[curIndex].score) > 100){
      return;
    }

    curNum++;
    this.setItems(curIndex,curNum);
    
  },
  sum:function(){
    this.data.total = this.data.items.reduce((acc,cur)=>{
      return acc + cur.num*cur.score;
    },0);

    this.setData({
      total:this.data.total
    })
  },

  startFn:function(){
    var self = this;
    if(this.data.total != 100){
      $wuxToast().show({
          type: 'error',
          duration: 2000,
          color: '#fff',
          text: '必须够100分才可以作答！',
          success: () => {}
      });
      return;
    }

    var easyNum = self.data.items[0].num;
    var mediumNum = self.data.items[1].num;
    var hardNum = self.data.items[2].num;

    $wuxDialog().confirm({
        resetOnClose: true,
        closable: false,
        maskClosable:false,
        title: '提示',
        content: '你选了'+ ('简单：'+easyNum+'道，') + ('中等：'+mediumNum+'道，') + ('困难：'+hardNum+'道，') +'是否开始答题？',
        confirmText:'是',
        cancelText:'否',
        onConfirm(e) {
            wx.redirectTo({
              url: '../answer/answer?easy='+easyNum+'&medium='+mediumNum+'&hard='+hardNum
            });
        },
        onCancel(e) {},
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        myAvatar:app.globalData.userInfo.avatarUrl,
        myName:app.globalData.userInfo.nickName
      });
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