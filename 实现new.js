// https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript
// https://2ality.com/2014/01/new-operator.html

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function() {
  console.log("hello");
}

function myNew(func) {
  // 1. 首先创建一个空对象
  var o = {};
  // 2. 将空对象的原型赋值为构造函数的原型
  o.__proto__ = func.prototype;
  // 3. 更改构造器函数内部this，将其指向新创建的空对象
  var res = func.apply(o, Array.prototype.slice.call(arguments, 1));
  // 4. 构造函数返回值如果为对象，则返回
  if ((typeof res === "object" || typeof res === "function") && res !== null) {
      return res;
  }
  // 5. 否则返回o
  return o;
}

function myNew2(Constr, ...args) {
  const obj = Object.create(Constr.prototype)
  const result = Constr.apply(obj, args)
  if (typeof result === 'object' && result !== null)
      return result
  return obj
}

// var p = new Person('john', 11)
// p.sayName()

var p = myNew(Person, "tom", 22);
console.log(p.name);
p.sayName();
