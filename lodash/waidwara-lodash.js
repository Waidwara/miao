var waidwara = {
  chunk: function chunk(ary, size = 1) {
    var result = []
    for(var i = 0; i< ary.length; i=i+size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },
  compact: function(ary) {
    var result = []
    for(var item of ary) {
      if (item) {
        result.push(item)
      }
    }
    return result
  },
  compact: function(Addary,ary){
    var result=[]
    for(var i=0;i<Addary,length;i++){
      result.push(Addary[i])
    }
    for(var i=0;i<ary.length;i++){
      result.push(ary[i])
    }
    return result
  },
  difference:function(array,ary){
    var result=[]
    for(var i=0;i<array.length;i++){
      for(var j=0;j<ary.length;j++){
        if(array[i]!=ary[j]){
          result.push(array[i])
        }
      }
    }
    return result
  },
  drop:function(array,size=1){
    var result=[]
    for(var i=size;i<array.length;i++){
      result.push(array[i])
    }
    return result 
  },
  dropRight:function(array,size=1){
    var result=[]
    for(var i=0;i<array.length-size;i++){
      result.push(array[i])
    }
    return result
  }
}
