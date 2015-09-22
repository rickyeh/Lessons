module.exports = function listDirectory(pathName, filterExtension, callback) {

}

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

