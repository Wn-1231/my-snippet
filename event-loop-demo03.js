{

  setTimeout(function () {
    console.log('timeout1');
  }, 1000);
  
  console.log('start');
  
  Promise.resolve().then(function () {
    console.log('promise1');
    Promise.resolve().then(function () {
      console.log('promise2');
    });
    setTimeout(function () {
      Promise.resolve().then(function () {
        console.log('promise3');
      });
      console.log('timeout2')
    }, 0);
  });
  
  console.log('done');
  
  
  // function () {
  //   console.log('promise1');
  //   Promise.resolve().then(function () {
  //     console.log('promise2');
  //   });
  //   setTimeout(function () {
  //     Promise.resolve().then(function () {
  //       console.log('promise3');
  //     });
  //     console.log('timeout2')
  //   }, 0);
  // });
  
  // function () {
  //     Promise.resolve().then(function () {
  //       console.log('promise3');
  //     });
  //     console.log('timeout2')
  //   }
  
  /**
  
  start
  done
  promise1
  promise2
  timeout2
  promise3
  timeout1
  
  */
  
  
  
  /**
  
  micro tasks
  
  function () {
        console.log('promise3');
      }
  
  */
  
  
  /**
  
  macro tasks
  
  function () {
    console.log('timeout1');
  }
  
  */
  
  
  
  
  
  }