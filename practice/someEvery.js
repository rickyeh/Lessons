var a = [ [1, 2, 3], [1, 3, 5], [2, 4, 6] ];

// function that returns true if one is all odd

function isAnyAllOdd(array) {
  return array.some(function(currArray) {
    return currArray.every(function(currNum) {
      return (currNum % 2 === 1);
    });
  });
}

// console.log(isAnyAllOdd(a));

// return true if all of the arrays have at least one even

// function isAllAnyEven(array) {
//   return array.every(function(currArray) {
//     return currArray.some(function(currNum) {
//       return (currNum % 2 === 0);
//     });
//   });
// }

console.log(isAllAnyEven(a));

function some(array, callback) {
  return array.reduce(function(prev, curr) {
    return prev || callback(curr);
  }, false);
}

function every(array, callback) {
  return array.reduce(function(prev, curr) {
    return prev && callback(curr);
  }, true);
}

function isAllAnyEven(array) {
  return array.every(currArray =>
                     currArray.some(currNum =>
                                    currNum % 2 === 0 ));
}