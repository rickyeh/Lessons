// Create an array
// Create an object

var array = [1, 2, 3, 4, 5];

var obj = {
    name: 'Bob',
    age: 30,
    sex: 'M',
    birthdate: ['Jan', 20, 1980]
};

// // Print out the array
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// // Print out the object
// for (var prop in obj) {
//     console.log(prop + ' : ' + obj[prop]);
// }

function print(collection) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    } else {
        for (var prop in obj) {
            console.log(prop + ' : ' + obj[prop]);
        }
    }
}

function log(arg) {
    console.log(arg);
}

function double(arg) {
    return arg * 2;
}

function forEach(array, callback) {
    for (var i = 0; i < array.length ; i++) {
        callback(array[i]);
    }
}

function map(array, callback) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }

    return result;
}

function reduce(array, callback) {

}

function filter(array, callback) {
    var result;
}
