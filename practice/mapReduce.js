var array = [['hello', 'world'], ['cat', 'dog', 'bird'], ['who', 'are'], ['new', 'york'], ['add', 'library']];

// var sum = 0;

// for (var i = 0; i < array.length ; i++) {
//   sum = sum + array[i].length;
// }

// console.log(sum);

// map and reduce

// var arrayOfWordCounts = array.map(function(curr) {
//   return curr.length;
// });

// var sum = arrayOfWordCounts.reduce(function(prev, curr) {
//   return prev + curr;
// });

// console.log(sum);

var result = array.reduce(
  (finalArray, currArray) => finalArray.concat(currArray),
  []);

console.log(result.sort());


self executing anon funcs

