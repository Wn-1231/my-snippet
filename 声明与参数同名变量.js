var foo = {
  n: 1
};

(function(foo) {
  // 相当于已经声明了 let foo
  // 如果使用 let 重新声明会报错
  console.log(foo.n);
  foo.n = 3;
  var foo = {
      n: 2
  };
  console.log(foo.n);
}
)(foo);

console.log(foo.n);
