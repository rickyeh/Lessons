var array = [];

for(var i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 100));
}

// Loop the array, compare index with index + 1
// IF order is incorrect, fix it
// 

function bubble(arr) {
  var isSorted = false;
  
  while (!isSorted) {
    isSorted = true;

    for(var i = 0; i < arr.length - 1; i++) {
      var curr = arr[i];
      var next = arr[i+1];
          
      if (curr > next) {
        var temp = curr;
        arr[i] = next;
        arr[i+1] = temp;

        isSorted = false;
      } 
    }
  }
}

bubble(array);

console.log(array);

