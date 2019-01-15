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
    return result
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
    if(fromIndex<0){
      return -1
    }
    for(var i=fromIndex;i>=0;i--){
      if(array[i]==value){
        return i
      }
    }
  },
  nth:function(array,n=0){
    if(n>=0){
      if(n>array.length-1){
        return -1
      }else{
        return array[i]
      }  
    }
    else{
      if(array.length+n<0){
        return -1
      }
      else{
        return array[array.length+n]
      }
      
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
  },
  reverse:function(array){
    var result=[]
    for(var i=array.length;i>=0;i--){
      result.push(array[i])
    }
    return result
  },
  sortedIndex:function(array,value){
    if(array[0]>value){
      return 0
    }
    else if(array[array.length-1]<value){
      return array.length
    }
    else{
      for(var i=0;i<array.length;i++){
        if(array[i]<=value&&value<array[i+1]){
          return i+1
        }
      }
    }
    
  },
  sortedIndexOf:function(array,value){
    for(var i=0;i<array.length;i++){
      if(array[i]==value){
        return i
      }
    }
  },
  sortedLastIndex:function(array,value){
    for(var i=array.length;i>=0;i--){
      if(array[i]==value){
        return i
      }
    }
  },
  tail:function(array){
    var result=[]
    for(var i=1;i<array.length;i++){
      result.push(array[i])
    }
    return result
  },
  take:function(array,n=1){
    var result=[]
    if(n>=array.length){
      return array
    }
    else{
      for(var i=0;i<n;i++){
      result.push(array[i])
      }
      return result
    }  
  },
  takeRight:function(array,n=1){
    var result=[]
    if(array.length-1-n<0){
      return array
    }
    else{
      for(var i=array.length-1;i>array.length-1-n;i--){
      result.push(array[i])
    }
    return result
    } 
  },
  add:function(augend,addend){
    return augend+addend
  },
  ceil:function(number,precision=0){
    
  },
  divide:function(dividend,divisor){
    return dividend/divisor
  },
  max:function(array){
    if(!array){
      return undefined
    }
    else{
      for(var i=1;i<array.length;i++){
        if(array[0]<array[i]){
          array[0]=array[i]
        }
      }
      return array[0]
    }
  },
  mean:function(array){
    var sum=0
    for(var i=0;i<array.length;i++){
      sum=sum+array[i]
    }
    return sum/array.length
  },
  min:function(array){
    if(!array){
      return undefined
    }
    else{
      for(var i=1;i<array.length;i++){
        if(array[0]>array[i]){
          array[0]=array[i]
        }
      }
      return array[0]
    }
  },
  multiply:function(multiplier,multiplicand){
    return multiplier*multiplicand
  },
  subtract:function(minuend, subtrahend){
    return minuend-subtrahend
  },
  sum:function(array){
    var sum=0
    for(var i=0;i<array.length;i++){
      sum=sum+array[i]
    }
    return sum
  },
}
