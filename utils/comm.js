var getStr=function(str='',len){
  if(str.length>len){
    return str.slice(0,len)+"..."
  }else{
    return str
  }
}


module.exports={
  getStr: getStr
}

