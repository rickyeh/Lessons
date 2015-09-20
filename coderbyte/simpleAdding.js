function SimpleAdding(num) {
    var sum = 0;

    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// keep this function call here 
SimpleAdding(readline());