// n! = n * (n-1) * (n-2) * (n-3) * (n-4) ...1
// (n-1)! = (n-1) * (n-2) * (n-3) * (n-4)...1

function factorial(n) {

    var answer = 1;

    for (var i = 1; i <= n; i++) {
        answer = answer * i;
        console.log("i = " + i );
        console.log("Current answer = " + answer);
    }
    return answer;
}

// var answer = factorial(5);
// console.log(answer);


function factorialRecursive(n) {
    console.log(n);
    
    if (n === 1) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}

answer = factorialRecursive(5);
console.log("Recursion Answer: " + answer);