Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgPicUrl:"",
    kuxuanArr:[],
    lingganArr:[],
    dianshangArr:[],
    shizhanArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //获取海报的图片内容
    this.getBanner()


    //获取灵感创意内容
    this.getDatas(14,(res)=>{            
      this.setData({
        lingganArr:res
      })
    })


    //获取电商酷站内容   
    this.getDatas(5,(res)=>{
      this.setData({
        dianshangArr: res
      })
    })


    //获取酷炫网站内容
    this.getDatas(8,(res)=>{
      this.setData({
        kuxuanArr: res
      })
    })

    //获取实用网站内容
    this.getDatas(4, (res) => {
      this.setData({
        shizhanArr: res
      })
    })


  },


  getDatas:function(c=14,resDatas){

    wx.request({
      url: 'https://ku.qingnian8.com/wxList.php',
      data: {
        num: 6,
        cid: c
      },
      success: (res) => {        
        return resDatas(res.data);        
      }
    })
  },




  getBanner:function(){
    wx.request({
      url: 'https://ku.qingnian8.com/wxList.php',
      data: {
        num: 9,
        tejian: true
      },
      success: (res) => {
        this.setData({
          bannerArr: res.data
        })
      }

    })

  },

  barChange:function(e){    
    var picUrl=e.detail.currentItemId
    this.setData({
      bgPicUrl:picUrl
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