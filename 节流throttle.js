function throttle(fn, delay) {
  var last = 0
  return function(...args) {
      var now = new Date().getTime()
      if (now - last < delay) {
          return
      }
      last = now
      fn.call(this, ...args)
  }
}


function throttle (fn, wait) {
  var last = 0

  return function (...args) {
      var context = this
      var now = Date.now()
      if (now - last < wait) return
      last = now

      fn.call(context, ...args)
  }
}


function throttle(fn, wait, immediate = true) {
let last = 0;

return function (...args) {
  const context = this;
  const now = Date.now();
  if (!last && immediate === false) last = now;
  if (now - last < wait) return;
  last = now;

  fn.call(context, ...args);
};
}