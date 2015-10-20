var arr = [1, 2, 3];

console.log(arr);

function multiplyByTwo(num){
  return num * 2;
}

function differenceTen(num) {
  //return difference from 10, always positive
  
  if (num <= 10) {
    return 10 - num;
  } else {
    return num - 10;
  }
}

function map(arr, callback) {
  // iterate through the array, take each element, pass it to the callback
  // output will be stored into a new array and returned 
  
  var newArray = [];
  
  for (var i = 0; i < arr.length ; i++) {
    newArray.push(callback(arr[i]));
  }
  
  return newArray;
}

function every(arr, callback) {
  // Iterate through array, pass it into callback which will return t or false
  // If they all return true, return true, else return false
  
  return arr.reduce(function(prev, curr, index, array) {
    
    if (!(callback(curr) && prev)) {
      return false;
    } else {
      return true;
    }
  }, true);
}

function fncCallback(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(every(arr, fncCallback));
