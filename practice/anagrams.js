function isAnagram(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    s1 = s1.replace(/\s/g, '');
    s2 = s2.replace(/\s/g, '');

    var a1 = s1.split('');
    var a2 = s2.split('');

    a1.sort();
    a2.sort();

    s1 = a1.join('');
    s2 = a2.join('');

    return (s1 === s2);
}

function countLetters(s) {

    s = s.toLowerCase();

    var array = [];

    for (var i = 0; i < 26; i++) {
        array.push(0);
    }

    for (var i = 0; i < s.length; i++) {
        var letterIndex = s.charCodeAt(i) - 97; // 97 is lower case a
        array[letterIndex]++;
    }

    console.log(array);

    return array;
}

countLetters('abcdeASDFSDFf');


// console.log(isAnagram('abc', 'CBA'));
// console.log(isAnagram('abcefg', 'CfBeAg'));
// console.log(isAnagram('aaa', 'a'));

// console.log(isAnagram('dict io    nary', 'inr   oa d city'));

// Anagrams are the same length if ignores spaces
// Same count of each letter

// Solution 1

// 0. Make all lowercase 
// 1. Make two arrays out of the strings - use string.split()
// 2. Iterate through each string counting each letter.
// 3. Create an object that will store the letter and it's count
// 4. Do for both arrays.
// 5. Compare the objects

// Solution 2

// 0. Make all lowercase 
// 1. Make two arrays out of the strings - use string.split()
// 2. Order the arrays with array.sort
// 3. Rejoin each array into strings
// 4. Compare the string