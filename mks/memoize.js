function memoize(func) {
  
  var cache = {};
  
  var wrapper = function() {

    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    
//  var key = args.join('_');
    var key = JSON.stringify(args)
    
    if (cache.hasOwnProperty(key)) {
      console.log('found!');
      return cache[key];
    }
    
    var result = func.apply(null, args);   
    
    
    console.log(key);
    
    cache[key] = result;
    console.log(JSON.stringify(cache));

    
    return result;
  }; 
  
  
  return wrapper;
  
  // return a new func. Does same thing as passed in func, but also caches results
}

function fib(n) {
//   console.log('Fib : ' + n);
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

function sum(a, b, c) {
  return a + b + c;
}

//console.log(fib(5));

var mfib = memoize(fib);

// console.log(mfib(10));

var mSum = memoize(sum);

console.log(mSum(10, 2, 3));
// console.log(mSum(10, 2, 3));