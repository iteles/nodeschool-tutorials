var fs = require('fs');
var path = require('path');

//Print list of files in a given directory filtered by the extension name given in the 2nd argument
var directory = process.argv[2];	
var ext = process.argv[3];

//process.argv[2] is the directory path and list is an array of file names)
fs.readdir(directory, function(err, list){
	if (err) throw err;

	for(var i=0; i<list.length; i++){

		var currentFileName = list[i];

		//The ext variable was returning the extension without the '.', so this had to be added
		//in to match path.extname(file) which returns the extension with the '.'
		if (path.extname(currentFileName) === '.'+ext){
		console.log(currentFileName);
		}
	}

});

//nodeschool solution
 // var fs = require('fs')
 //    var path = require('path')
    
 //    fs.readdir(process.argv[2], function (err, list) {
 //      list.forEach(function (file) {
 //        if (path.extname(file) === '.' + process.argv[3])
 //          console.log(file)
 //      })
 //    })
