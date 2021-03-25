function myCreate(p) {
  function F() {}
  F.prototype = p
  return new F()
}