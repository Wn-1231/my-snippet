let data = {
  price: 5,
  quantity: 2,
};

let target = null;

class Dep {
  constructor() {
      this.subscribes = [];
  }
  depend() {
      if (target && !this.subscribes.includes(target)) {
          this.subscribes.push(target);
      }
  }
  notify() {
      this.subscribes.forEach(sub=>sub());
  }
}

Object.keys(data).forEach(key=>{
  let internalValue = data[key];

  const dep = new Dep();

  Object.defineProperty(data, key, {
      get() {
          dep.depend();
          return internalValue;
      },
      set(newVal) {
          internalValue = newVal;
          dep.notify();
      },
  });
});

function watcher(myFunc) {
  target = myFunc;
  target();
  target = null;
}

watcher(()=>{
  data.total = data.price * data.quantity;
});
