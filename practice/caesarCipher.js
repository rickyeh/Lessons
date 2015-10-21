// Caesar cipher
// Z wrap to A

// str.charCodeAt(index);
// String.fromCharCode(int,int,int);

// A - 65
// Z - 90
// a - 97
// z - 122

function rot(str, num) {
  var arr = str.split('');
  
  // Convert String letters in array to char codes
  //   for(var i = 0; i < arr.length; i++) {
  //     arr[i] = arr[i].charCodeAt(0);
  //   }
  //
  //   arr = arr.map(function(element) {
  //     return element.charCodeAt(0);
  //   });
  
  arr = arr.map( element => element.charCodeAt(0) );
  
  // Increment character codes by num
  //   for(var i = 0; i < arr.length; i++) {
  //     var curr = arr[i];
  //     if (curr >= 97 && curr <= 122) {  // Lower Case
  //       arr[i] = rotateChar(curr, num, 97, 122);
  //     } else if (curr >= 65 && curr <= 90) {  // Upper Case
  //       arr[i] = rotateChar(curr, num, 65, 90);
  //     }
  //   }
  
  arr = arr.map(function(curr) {
    if (curr >= 97 && curr <= 122) {  // Lower Case
      curr = rotateChar(curr, num, 97, 122);
    } else if (curr >= 65 && curr <= 90) {  // Upper Case
      curr = rotateChar(curr, num, 65, 90);
    }
    return curr;
  });
  
  // Convert char codes back to string
  //   for(var i = 0; i < arr.length; i++) {
  //     arr[i] = String.fromCharCode(arr[i]);
  //   }
  //   arr = arr.map(function(element) {
  //     return String.fromCharCode(element);
  //   });
  
  arr = arr.map(element => String.fromCharCode(element));
  
  return arr.join('');
}

function rotateChar(charCode, inc, min, max) {
//   var rotatedChar = charCode + inc;

//   if (rotatedChar > max) {
//     return rotatedChar - 26;
//   } else if (rotatedChar < min) {
//     return rotatedChar + 26;
//   } else {
//     return rotatedChar;
//   }
  var char = charCode - min;
  char = char + inc;
  char = ((char % 26) + 26 ) % 26;  // Handle mod for neg nums
  return char + min;
}

console.log(rot('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', -3));
console.log(rot("QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD", 55));