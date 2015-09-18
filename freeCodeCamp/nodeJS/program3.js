var fs = require('fs');

var filePath = process.argv[2];
var filterExtension = process.argv[3];

function callbackFnc(err, list){
    if (err) {
        throw err;
    }

    for(var i = 0; i<list.length; i++){
        if(list[i].indexOf('.' + filterExtension) > -1 ) {
            console.log(list[i]);
        }
    }
}

fs.readdir(filePath, callbackFnc);