var fs = require('fs');

fs.readFile(process.argv[2], function(err,buffer){
	if (err) throw err;
	//to convert a Buffer object to a string
	var fileString = buffer.toString();
	//split the file
	var newLines = fileString.split('\n');

	console.log(newLines.length - 1);
});

//Official solution
    // var fs = require('fs')
    // var file = process.argv[2]
    
    // fs.readFile(file, function (err, contents) {
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   var lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })