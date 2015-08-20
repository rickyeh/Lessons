// TODO: Add num 2 support. 

function add(num1Str, num2Str) {

    var parse = function(value) {
        return parseInt(value);
    };

    var num1Array = num1Str.split('');
    var num2Array = num2Str.split('');

    num1Array = num1Array.map(parse);
    num2Array = num2Array.map(parse);


    var currIndex = num1Array.length - 1;
    var done = false;

    while (!done) {
        num1Array[currIndex]++;
        var newValue = num1Array[currIndex];

        if (newValue >= 10) {
            num1Array[currIndex] = newValue % 10;
            currIndex--;

            // If we carry past the first digit, add a new digit
            if (currIndex < 0) {  
                num1Array.unshift(1);
                done = true;
            }
        } else {
            done = true;
        }
    }

    var result = num1Array.join('');
    console.log(result);

    return result
}


add('123', '1');
add('129', '1');
add('199', '1');
add('9999999999999599999999999999999', '1');
add('9', '1');


// Turn them into numbers
// Ex.  123 = [1, 2, 3]