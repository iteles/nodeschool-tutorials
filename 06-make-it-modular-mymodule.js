var fs = require('fs');
var path = require('path');

//Print list of files in a given directory filtered by the extension name given in the 2nd argument
//var directory = process.argv[2];	
//var ext = process.argv[3];
var resultsArray=[];
var currentFileName;


function FileReader (directory, extension, callback){

	fs.readdir(directory, function(err, list){
	if (err) return callback(err);

	for(var i=0; i<list.length; i++){
		currentFileName = list[i];
		if (path.extname(currentFileName) === '.'+extension){
		//using the push() method ensures that resultsArray remains an array and not a string!
		resultsArray.push(currentFileName);
		}
	}

	return callback(null, resultsArray);
});
}

module.exports = FileReader;

/* Solution:
    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }

*/