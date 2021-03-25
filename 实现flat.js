{

  var arr = [1, 2, [1, 2, 2], [3, 4, 5, ['a'], 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
  
  // 编写一个程序将数组扁平化并去除其中重复部分数据，最终得到一个升序且不重复的数组
  
  function flat1(arr) {
      if (!arr.find(v=>Array.isArray(v)))
          return arr
  
      return arr.reduce((acc,v)=>{
          return acc.concat(Array.isArray(v) ? flat(v) : v)
      }, [])
  }
  
  
  function flat(arr, d) {
      return d > 0 ? arr.reduce((acc,v)=>{
          return acc.concat(Array.isArray(v) ? flat(v, d - 1) : v)
      }, []) : arr.slice()
  }
  
  flat(arr, 6)
  
  }
  