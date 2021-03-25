{

  var arr = [1,2,3,4,1,2]
  
  
  // Set
  function dedulicate (arr) {
      return [...new Set(arr)]
  }
  
  // for of
  function dedulicate2 (arr) {
      var tempArr = []
  
      for (var v of arr) {
          if (!tempArr.includes(v)) tempArr.push(v)
      }
  
      return tempArr
  }
  
  // reduce
  
  function dedulicate3 (arr) {
      return arr.reduce((acc, v) => {
          if (!acc.includes(v)) {
              acc.push(v)
          }
  
          return acc
      }, [])
  }
  
  // filter
  
  function dedulicate4 (arr) {
      return arr.filter((v, i) => {
          return arr.indexOf(v) === i
      })
  }
  
  console.log(dedulicate4(arr))
  
  
  
  }