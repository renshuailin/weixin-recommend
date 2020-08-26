// pages/lists/lists.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var cid = options.cid;
    this.getDatas(cid,14)
  },
  getDatas:function(c=14,n=9){
    wx.request({
      url: 'https://ku.qingnian8.com/wxList.php',
      data:{
        cid:c,
        num:n
      },
      success:(res)=>{
        this.setData({
          dataArr:res.data
        })
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