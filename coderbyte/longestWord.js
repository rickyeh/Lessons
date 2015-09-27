function findLongestWord(string) {
    var longestWord;

    var wordArray = string.split(' ');

    longestWord = wordArray[0];

    for (var i = 0; i < wordArray.length - 1 ; i++) {
        if(longestWord.length < wordArray[i+1].length) {
            longestWord = wordArray[i+1];
        }
    }

    return longestWord;
}

console.log(findLongestWord('aafda bd cdfdd se s  s '));