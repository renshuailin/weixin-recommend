// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    secArr:null,
    hisArr:null,
    iptKey:null
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var histroy=wx.getStorageSync("histroy");
    var key=options.key;
    this.setData({
      iptKey: key
    })
    if (histroy){
      this.setData({
        hisArr: histroy.reverse().slice(0,8)
      })
    }

  },

  // 获取搜索内容
  onMyIpt:function(e){
    // 判读输入框中是否存在数据
    if(!e.detail){
      this.setData({
        secArr:null,
        hisArr:null
      })
      return;
    }

    var resData=e.detail.resData;
    this.setData({
      secArr: resData
    })
  },

  //点击跳转到详情并且记录缓存
  onTapItem:function(e){    
    var eid=e.currentTarget.dataset.id;
    var etitle = e.currentTarget.dataset.title; 
    wx.navigateTo({
      url: '/pages/shows/shows?id=' + eid,
    })
    var hisArr = wx.getStorageSync("histroy");
    for(var i=0; i<hisArr.length; i++){
      if(hisArr[i].id == eid){
        return;
      }
    }
    
    if (!hisArr){
      hisArr=[];
    }      
    hisArr.push({ id: eid, title: etitle})        
    wx.setStorageSync("histroy", hisArr)    
  },

  onRemoveHis:function(){
    wx.removeStorageSync("histroy");
    this.setData({
      hisArr:null
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