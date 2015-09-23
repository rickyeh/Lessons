var fs = require('fs');

module.exports = function (path, extension, callback) {
    fs.readdir(path, callbackFnc);

    function callbackFnc(err, list) {
        if (err) {
            callback(err, list);
            return;
        }
        
        var filteredFiles = [];

        for (var i = 0; i<list.length; i++) {
            var fileName = list[i];
            
            if (fileName.indexOf('.' + extension) > -1 ) {
                filteredFiles.push(fileName);
            }
        }
        callback(null, filteredFiles);
    }
};

