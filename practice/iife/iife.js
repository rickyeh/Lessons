function hello1() {
  console.log("Hello 1 :" + api1.incReturn());
}

var api1 = (function() {
  var x = 0;

  return {
    incReturn: function() {
      return ++x;
    }
  };
})();