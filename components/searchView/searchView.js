// components/searchView/searchView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    onSearch:{
      type:Boolean,
      value:true
    },
    isIptVlu:{
      type:String,
      value:''
    }
  },

  observers: {
    "isIptVlu": function () {
      this.onBindIpt()
    }

  },
  

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBindIpt:function(e){
      if(!e){
        var vlu = this.properties.isIptVlu
      }else{
        var vlu=e.detail.value;
      }

      if(!vlu){
        this.triggerEvent("myIpt", null)
        return;
      }

      wx.request({
        url: 'https://ku.qingnian8.com/wxsearch.php',
        data:{
          keyword: vlu
        },
        success:(res)=>{
          for(var i=0; i<res.data.length; i++){
            res.data[i].rating 
            = 
            !res.data[i].rating 
            ? '未评分' 
            : Number(res.data[i].rating).toFixed(1)
          }
          var detail = { "resData": res.data}
          this.triggerEvent("myIpt", detail)
        }
      })
      
      
    }
  }
})
