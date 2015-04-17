// array1 and array2 are arrays of numbers
// return a zipped array that alternates items from array1 and array2 (starting with the first item of array1)
function zip(array1, array2) {

    // Declare new array to be returned
    var newArray = [];

    // loop, from first element, to last
    // Print First number from array 1,  then same index from array 2
    // Increment, repeat until no more elements in longer array
    // If there is no more elements, check other array for elements.
    //      If neither have more elements, return the array.

    var totalLength = array1.length + array2.length;

    for (var i = 0; newArray.length < totalLength; i++) {
        if (array1[i] !== undefined) {
            newArray.push(array1[i]);
        }
        if (array2[i] !== undefined) {
            newArray.push(array2[i]);
        }
    }

    console.log(newArray);
    return newArray;
}

zip([10, 4, 19, 2], [3, 1, 1, 23]); // returns [10,3,4,1,19,1,2,23]
zip([11, 33, 10, 5], [0, 4]); // returns [11,0,33,4,10,5]

// try to handle edge cases!