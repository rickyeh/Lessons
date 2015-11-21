var database = [];

function fib(n) {
    console.log();

    // If the number has been cached, return it.
    if (database[n]) {
        console.log('Found Cached');
        console.log(database[n]);
        return database[n];
    } else if (n === 0) {
        console.log('Initial Calcuation');
        database.push(0);
        console.log(database);
        console.log(0);
        return 0;
    }

    // Else, find the highest cached number, and start fib loop from there
    var maxIndex = database.length - 1;

    // Array is not empty
    if (maxIndex > 0) {
        console.log('Lookup');

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
    } else {
        console.log('Fresh');

        var answer = 1;
        var prevAnswer = 1;
        var prevPrevAnswer = 0;

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
}

fib(0);
fib(1);
fib(2);
fib(5);
fib(7);
fib(9);