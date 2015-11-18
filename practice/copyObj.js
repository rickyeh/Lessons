var a = {
  name: 'jim',
  age: '30',
  jump: function() {
    console.log(this.name + ' jumps');
  },
  wallet: {
    cards: 1,
    cash: 50 
  }
};

// COPY OBJECT
function copy(a) {
  var b = {};
  a.__visited = true;
  for (var key in a) {
    if (key === '__visited') {
      continue;
    }
    
    var val = a[key];
    if (typeof val === 'object' && !val.__visited) {
      b[key] = copy(val);
    } else {
      b[key] = val;
    }
  }
  delete a.__visited;
  
  return b;
}

var b = copy(a);
var c = copy(b);

// Print out Object
// console.log('Object B : ');
// for (var key in b) {
//   console.log(key + ' : ' + b[key]);
// }

// CHECK IF OBJECT CONTENTS ARE EQUAL
function isEqual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  for (var key in a) {
    if (typeof a[key] === 'object') {
      if (!isEqual(a[key], b[key])) {
        return false;
      }
    } else if (a[key] !== b[key]) {
      return false;
    }
  }
  
  for (key in b) {
    if (typeof b[key] === 'object') {
      if (!isEqual(b[key], a[key])) {
        return false;
      }
    } else if (b[key] !== a[key]) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(a,c));