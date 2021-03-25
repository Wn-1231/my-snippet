// https://cs.slides.com/colt_steele/tries-21#/8/0/2

function binarySearch (arr, elem) {
  var start = 0
  var end = arr.length - 1
  var middle = Math.floor((start + end) / 2)

  while (arr[middle] !== elem) {
      if (elem < arr[middle]) {
          end = middle - 1
      } else {
          start = middle + 1
      }
      middle = Math.floor((start + end) / 2)
  }

  return middle
}

binarySearch([1,2,3,4,5,6,7,8,9], 3)