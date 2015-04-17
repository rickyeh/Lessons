
var a1 = ['zero', 'one', 'two', 'three', 'four', 'five'];
var a2 = [0, 1, 2, 3, 4, 5];
var a3 = [0, 2, 4, 4, 2, 0];  // Palindrome Example
var a4 = [0, 2, 3, 4, 2, 0];  // Not a palindrome example

// 1. Creates a new array that is reverse of existing array
function reverseArray(array) {
    var reversedArray = [];
    array.forEach(function (value, index, arr) {
        reversedArray.unshift(value);
    });
    return reversedArray;
}

// 2. Adds up all numbers in an array
function sumArray(array) {
    var sum = 0;

    array.forEach(function (value, index, arr) {
        sum = sum + value;
    });

    return sum;
}

// 3. Checks if array is a palindrome

function isPalindrome(array) {
    return array.every(function (currItem, i, arr) {
        return currItem === arr[arr.length - 1 - i];
    });
}

console.log('The reverse of a1 is : ' + reverseArray(a1));
console.log('The sum of a2 is : ' + sumArray(a2));
console.log('Is array3 a palindrome? ' + isPalindrome(a3));
console.log('Is array4 a palindrome? ' + isPalindrome(a4));

