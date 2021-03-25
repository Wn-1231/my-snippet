// 打印数据
// 难度：*
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
  console.log('script start');
  setTimeout(function() {
      console.log('setTimeout')
  }, 0)
  new Promise(function() {
      console.log('promise1')
  }).then(function() {
      console.log('promise2')
  })
  console.log('script end')
}

async1()


/**
new Promise(function() {
  console.log('promise1')
}).then(function() {
  console.log('promise2')
})
*/


// async1 start
// async2
// script start
// promise1
// script end

/**

micro tasks

console.log('async1 end');


*/

/**

macro tasks

function(){
  console.log('setTimeout')
}


*/
