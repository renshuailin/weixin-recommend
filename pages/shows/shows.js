// pages/shows/shows.js
const WxParse = require('../../wxParse/wxParse.js');
Page({


  /**
   * 页面的初始数据
   */
  data: {
    itemObj:null,
    onShow:false,
    id:""
  },


  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    this.setData({
      id:id
    })
    this.getShowItem(id);   

    // stor = {
    //   111:false,
    //   222:true,
    //   333:false,
    //   444:true
    // }

    var stor= wx.getStorageSync("stor");
    if (stor){
      var storId = stor[id];
      this.setData({
        onShow: storId
      })
    }else{
      var stor={};
      stor[id]=false;
      wx.setStorageSync("stor", stor)
    }
    

  },

  onTapZan:function(){
    var id=this.data.id;
    var stor = wx.getStorageSync("stor");
    var storId = stor[id];
    storId = !storId;
    stor[id] = storId;
    wx.setStorageSync("stor", stor);
    this.setData({
      onShow: storId
    })

    


  },

  

  getShowItem:function(i=104){

    wx.request({
      url: 'https://ku.qingnian8.com/wx_show.php',
      data:{
        id:i
      },
      success:(res)=>{
        console.log(res);
        WxParse.wxParse('article', 'html', res.data.content, this, 5);       
        var { companyColor, companyList, inspiration, kubiaoxian, kucolor, kuhangye, seobiaoxian, seocolor, seohangye}=res.data
        var tapArr=[];
        tapArr = tapArr.concat(
          companyColor.split(","),
          companyList.split(","),
          inspiration.split(","),
          kubiaoxian.split(","), 
          kucolor.split(","), 
          kuhangye.split(","), 
          seobiaoxian.split(","), 
          seocolor.split(","), 
          seohangye.split(",")
        ) 
        
        
        res.data.tapArr = tapArr

        this.setData({
          itemObj:res.data
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