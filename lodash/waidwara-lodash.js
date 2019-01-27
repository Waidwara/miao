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
  concat: function(Addary,ary){
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
        return undefined
      }else{
        return array[n]
      }  
    }
    else{
      if(array.length+n<0){
        return undefined
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
    for(var i=array.length-1;i>=0;i--){
      result.push(array[i])
    }
    return result
  },
  sortedIndexOf:function(array,value){
    for(var i=0;i<array.length;i++){
      if(array[i]==value){
        return i
      }
    }
  },
  sortedLastIndex:function(array,value){
    for(var i=array.length-1;i>=0;i--){
      if(array[i]==value){
        return i+1
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
    if(array.length-n<=0){
      return array
    }
    else{
      for(var i=array.length-n;i<array.length;i++){
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
  flatten:function(ary){
    var result=[]
    for(var item of ary){
      if(Array.isArray(item)){
        for(var val of item){
          result.push(val)
        }
      }
      else{
        result.push(item)
    }
  }
  return result
},
  flattenDeep:function(ary){
    var result=[]
    for(var item of ary){
      if(Array.isArray(item)){
        result.push(...flattenDeep(item))
      }
      else{
        result.push(item)
      }
    }
    return result
  },
  flattenDepth:function(ary,depth=1){
    if(depth==0){
      return ary.slice()
    }
    return ary.reduce((result,item) => {
      if(Array.isArray(item)){
        result.push(...flattenDepth(item,depth -1))
      }
      else{
        result.push(item)
      }
      return result
    },[])
  },
  every:function(ary,test){
    for(var i=0;i<ary.length;i++){
      if(!test(ary[i],i,ary)){
        return false
      }
    }
    return true
  },
  some:function(ary,test){
    for(var i=0;i<ary.length;i++){
      if(test(ary[i],i,ary)){
        return true
      }
    }
    return false
  },
  groupBy:function(ary,predicate){
    var result={}
    for(var i=0;i<ary.length;i++){
      var key = predicate(ary[i],i,ary)
        if(key in result){
          result[key].push(ary[i])
        }
        else{
          result[key] =[ary[i]] 
        }
    }
    return result
  },
  mapValues:function(obj,mapper){
    var result={}
    for(var key in obj){
      var val=obj[key]
      result[key]=mapper(val)
    }
    return result
  },
  isArray:function(value){
    return Object.prototype.toString.call(value)==='[object Array]'
  },
  isBoolean:function(value){
    return Object.prototype.toString.call(value)==='[object Boolean]'
  },
  isNumber:function(value){
    return Object.prototype.toString.call(value)==='[object Number]'
  },
  isObject:function(value){
    return Object.prototype.toString.call(value)==='[object Object]'
  },
  isString:function(value){
    return Object.prototype.toString.call(value)==='[object String]'
  },
  isFunction:function(value){
    return Object.prototype.toString.call(value)==='[object Function]'
  },
  forOwn:function(obj,action){
    var hasOwn = Object.prototype.hasOwnProperty
    for(var prop in a){
      if(hasOwn.call(a,prop)){
        action(a[prop] , prop , a)
      }
    }
  }
}
