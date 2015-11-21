var database = [0, 1, 1];

function fib(n) {
    console.log();

    // If the number has been cached, return it.
    if (database[n] !== undefined) {
        console.log('Cached');
        console.log(database[n]);
        return database[n];
    }

    // Else, find the highest cached number, and start fib loop from there
    var maxIndex = database.length - 1;

    // Array is not empty
    var answer;
    var prevAnswer = database[maxIndex];
    var prevPrevAnswer = (database[maxIndex - 1]);

    for (var i = database.length; i <= n; i++) {
        answer = prevAnswer + prevPrevAnswer;

        prevPrevAnswer = prevAnswer;
        prevAnswer = answer;

        if (database[i] === undefined) {
            database.push(answer);
        }
    }
    console.log(database);

    console.log(answer);
    return answer;

}

fib(100);
fib(1);
fib(2);
fib(9);
fib(8);
fib(10);
