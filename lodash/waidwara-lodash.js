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
  comcat: function(Addary,ary){
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
      
    return result
  }
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
  },
  fill:function(array,value,start=0,end=array.length){
    for(var i=start;i<end;i++){
      array[i]=value
    }
    return array
  },
  head:function(array){
    if(!array){
      return undefined
    }
    return array[0]
  },
  initial:function(array){
    var result=[]
    for(var i=0;i<array.length-1;i++){
      result.push(array[i])
    }
    return array
  },
  indexOf:function(array,value,fromIndex=0){
    for(var i=fromIndex;i<array.length;i++){
      if(array[i]==value){
        return i
      }
    }
  },
  join:function(array,separator=","){
    var result=''
    for(var i=0;i<array.length-1;i++){
      result=result+array[i]+separator
    }
    result=result+array[array.length-1]
    return result
  },
  last:function(array){
    return array[array.length-1]
  },
  lastIndexOf:function(array,value,fromIndex=array.length-1){
    for(var i=fromIndex;i>=0;i--){
      if(array[i]==value){
        return i
      }
    }
  },
  nth:function(array,n=0){
    if(n>=0){
      return array[i]
    }
    else{
      return array[array.length-n]
    }
  },
  pull:function(array,...values){
    var result=[]
    for(var i=0;i<array.length;i++){
      for(var j=0;j<values.length;j++){
        if(array[i]!=values[j]){
        result.push(array[i])
        }
      }  
    }
    return result
  }
}
