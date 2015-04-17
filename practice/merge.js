// array1 and array2 contain numbers
// they are pre-sorted ascending (low to high)
// return a merged array that is also sorted ascending (low to high)
function merge(array1, array2) {
    // Declare new array to be returned
    var newArray = [];

    var totalLength = array1.length + array2.length;

    var a1Counter = 0;
    var a2Counter = 0;

    while (newArray.length < totalLength) {

        if (array1[a1Counter] <= array2[a2Counter] || array2[a2Counter] === undefined) {
            newArray.push(array1[a1Counter]);
            a1Counter++;
        } else {
            newArray.push(array2[a2Counter]);
            a2Counter++;
        }

    }

    console.log(newArray);
    return newArray;
}


merge([1, 4, 9, 23], [3, 14, 21, 28]); // returns [1,3,4,9,14,21,23,28]
merge([1, 2, 3, 10, 15], [0, 4]); // returns [0,1,2,3,4,10,15]

// try to handle edge cases!