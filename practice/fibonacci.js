// fib = 1 , 1 , 2 , 3 , 5, 8
// fib(n) = fib(n-1) + fib(n-2)

function fibLoop(n) {

    var answer = 1;
    var prevAnswer = 1;     
    var prevPrevAnswer = 0; 

    for (var i = 0; i < n; i++) {
        answer = prevAnswer + prevPrevAnswer;

        prevPrevAnswer = prevAnswer;
        prevAnswer = answer;
    }

    console.log(answer);

    return answer;
}

// fibLoop(0);
// fibLoop(1);
// fibLoop(2);
// fibLoop(3);
// fibLoop(4);
// fibLoop(5);
// fibLoop(6);
// fibLoop(7);

function fibRecursive(n, depth) {
    var total;
    if (n === 0) {
        total = 1;
    } else if (n === 1) {
        total = 1;
    } else {
        total = fibRecursive(n-1, depth+1) + fibRecursive(n-2, depth+1);
    }
    console.log(Array(depth+1).join('|   ') + total);
    return total;
}

fibRecursive(10,0);