// components/scoreView/scoreView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rating:{
      type:Number,
      value:0     
    },
    starSize:{
      type:Number,
      value:20
    },
    starFontSize:{
      type:Number,
      value:20
    }
  },

  observers:{
    "rating": function (){      
      this.scoreFun()
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },


  lifetimes: {
    attached: function () {
      this.scoreFun()
    }
  },




  /**
   * 组件的方法列表
   */
  methods: {

    //评分的核心函数
    scoreFun:function(){
      var rating = this.properties.rating
      var ratInt = parseInt(rating);
      var rate1 = parseInt(ratInt / 2)
      var rate2 = ratInt % 2
      var rate3 = 5 - rate1 - rate2
      var rateTxt =
        (rating == 0 || !rating)
          ? "未评分"
          : rating.toFixed(1)
      this.setData({
        rate1: rate1,
        rate2: rate2,
        rate3: rate3,
        rateTxt: rateTxt
      })
    }



  }

})
