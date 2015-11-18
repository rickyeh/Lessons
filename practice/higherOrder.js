var a = [1, 2, 3, 4, 5];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

var b = a.map(function(curr) {
  return curr * curr;
});

var c = a.reduce(function(prev, curr) {
  return prev + curr;  
});

// FOREACH
function forEach(obj, callback) {
  for (var k in obj) {
    callback(obj[k]);
  }
}

// MAP
function mapObj(obj, callback) {
  var result = {};
  
  for (var key in obj) {
    result[key] = callback(obj[key]);
  }
  return result;
}

// REDUCE
function reduceObj(obj, callback, init) {
  var result = init;
  
  for (var k in obj) {
    result = callback(result, obj[k]);
  }
  return result;
}

function reduceArr(arr, callback, init) {
  var result = init;
  
  for (var i = 0; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }
  return result;
}

// FILTER
function filter(obj, callback) {
  var resultObj = {};
  
  for (var k in obj) {
    if(callback(obj[k])){
      resultObj[k] = obj[k];
    }
  }
  
  return resultObj;
}

// EVERY
function every(obj, callback) {
  var prev = true;
  
  for (var k in obj) {
    if(callback(obj[k]) && prev) {
      prev = callback(obj[k]);
    } else {
      return false;
    }
  }

  return prev;
}

// SOME
function some(obj, callback) {
  
  for (var k in obj) {
    if(callback(obj[k])) {
      return true;
    }
  }
  return false;
}


// COPY USING MAP
function copy(obj) {
  return mapObj(obj, function(curr) {
    return curr;
  });
}

// SQUARE USING MAP
function square(obj) {
  return mapObj(obj, function(curr) {
    return curr * curr;
  });
}

var d = reduceObj(obj, function(result, curr) {
  return result * curr;
}, 1);



