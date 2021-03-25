{

  const jack = {
      firstName: 'jack',
      greet(greeting='Hey', flag='.') {
          console.log(`${greeting} ${this.firstName}${flag}`)
      }
  }
  
  const michael = {
      firstName: 'michael'
  }
  
  Function.prototype.myBind1 = function(context) {
      const fn = this
      const prefixArgs = Array.prototype.slice.call(arguments, 1)
      return function() {
          const suffixArgs = Array.prototype.slice.call(arguments)
          const args = prefixArgs.concat(suffixArgs)
          fn.apply(context, args)
      }
  }
  
  Function.prototype.myBind = function(context, ...prefixArgs) {
      const fn = this
      return function(...suffixArgs) {
          fn.apply(context, [...prefixArgs, ...suffixArgs])
      }
  }
  
  const g = jack.greet.myBind(michael, 'hi')
  g('!')
  
  
  }