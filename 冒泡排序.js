// 冒泡排序

// 参考：
// Slides：https://cs.slides.com/colt_steele/elementary-sorting-algorithms
// 可视化：https://visualgo.net/en/sorting


function bubbleSort (arr) {
  var noSwaps
  for (var i = arr.length; i > 0; i--) {
      noSwaps = true
      for (var j = 0; j < i - 1; j++) {
          if (arr[j] > arr[j+1]) {
              var temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
              noSwaps = false
          }
      }

      if (!noSwaps) break
  }

  return arr
}

bubbleSort([0, 20, 5, 9, 8, 23])