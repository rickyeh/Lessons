function hello2() {
  console.log("Hello 2 :" + api2.incReturn());
}

var api2 = (function() {
  var x = 0;
  
  return {
    incReturn: function() {
      return ++x;
    }
  };
})();