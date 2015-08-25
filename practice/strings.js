
function removeVowels1(string) {
    string = string.split('a').join('');
    string = string.split('e').join('');
    string = string.split('i').join('');
    string = string.split('o').join('');
    string = string.split('u').join('');

    return string;
}

function removeVowels2(string) {
    return string.split(/[aeiou]/).join('');
}

var s = 'The quick brown fox helped the old lady cross the angled street.';

var newString = removeVowels2(s);

console.log(newString);