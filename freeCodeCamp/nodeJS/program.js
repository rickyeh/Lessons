var params = process.argv;

var sum = 0;

for( var i = 2; i < params.length; i++) {
    sum += parseInt(params[i]);
}

console.log(sum);