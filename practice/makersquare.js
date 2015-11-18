each([1,2,3], print)
//1
//2
//3

each({a:1, b:2}, print);
//1
//2

//Array.isArray()

function each(collection, callback){
        
    // IF IT'S AN ARRAY
    if (Array.isArray(collection) {
        for (var i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {  // IT'S AN OBJECT
        for (var k in collection) {
        callback(collection[k]);
      }
    }
}

reduce([1,2,3,4,5], function(total, val){return total + val;}, 5);
//20

var myObject = {kia: ‘sweet’, adrian:’awesome’, interviewing:’mega’};
reduce(myObject, function(total, val){return total + ‘ ‘ + val;}, ‘Hi ‘);
//Hi sweet awesome mega


function reduce(collection, accumulator, startValue){
    //write reduce body here
  var result = startValue;
  
  each(collection, function(curr) {
    result = accumulator(result, curr);
  });
  
  return result;
}

hist("aaabcddef");
//{a:3, b:1, c:1, d:2, e:1, f:1}


function hist(str) {
    var result = {};
    var currStr;
  
    for (var i = 0; str.length; i++) {
      currStr = str[i];

      if (result[currStr]) {
          result[currStr]++;
      } else {
          result[currStr] = 1;
      }
  }

    return result;
}

// "aabb" ==> true (you can rearrange it as "abba")
// "aabbc" ==> true "abcba"
// "aabbcd" ==> false
// "aabbccc" ==> true "abcccba"

// If over 1 odd, false
function isPalingram(str) {
  var totalOdd = 0;
  var histObj = hist(str);
  
  var oddCharCount = reduce(histObj, function(totalOdd, curr) {
    if (curr % 2 == 1) {
        totalOdd++;
    }
    return totalOdd;
  }, 0);
  
  if (oddCharCount > 1) {
    return false;
  } else {
    return true;
  }
}

