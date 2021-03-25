{


  // Promise.race
  
  function asyncOperation (time) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (time === 1000) reject('error')
  //             throw new Error(`error on ${time}`)
  
              resolve(time)
          }, time)
      })   
  }
  
  Promise.myRace = function (promises) {
      return new Promise((resolve, reject) => {
          for (promise of promises) {
  //         console.log(promise)
              promise.then(resolve).catch(reject)
          }  
      })
  }
  
  // const promises = Promise.race([asyncOperation(1000), asyncOperation(2000)])
  const promises = Promise.myRace([asyncOperation(1000), asyncOperation(2000)])
  promises.then(res => {
      console.log(res)
  }).catch(err => {
      console.error('err')
  })
  
  
  
  }