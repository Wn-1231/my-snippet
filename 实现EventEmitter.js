{
  // https://www.codeproject.com/Articles/1277373/Code-Your-Own-Event-Emitter-in-Node-js-A-Step-by-s
  
  class EventEmitter {
      constructor () {
          this.listeners = {}
      }
  
      on (name, cb) {
          if (!this.listeners[name]) this.listeners[name] = []
  
          this.listeners[name].push(cb)
  
          return this
      }
  
      emit(name, ...args) {
          this.listeners[name].forEach(cb => {
              cb(...args)
          })
      }
  
      off (name, cb) {
          let lis = this.listeners[name]
          for (let i = 0; i < lis.length; i++) {
              if (lis[i] === cb) {
                  lis.splice(i, 1)
                  break
              }
          }
          return this
      }
  }
  
  const eventEmitter = new EventEmitter()
  
  const add = function (a, b) {
      console.log(`${a} + ${b} = ${a + b}`)
  }
  
  const sub = function (a, b) {
      console.log(`${a} - ${b} = ${a - b}`)
  }
  
  eventEmitter.on('calc', add)
  eventEmitter.on('calc', sub)
  
  // eventEmitter.off('calc', add)
  eventEmitter.emit('calc', 1, 2)
  
  
  
  
  
  
  
  }