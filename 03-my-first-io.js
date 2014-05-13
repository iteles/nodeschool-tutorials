var fs = require('fs');

//readFileSync method will return a Buffer object containing the complete contents of the file.
var buffer = fs.readFileSync(process.argv[2]);

//to convert a Buffer object to a string
var fileString = buffer.toString();

//split the file
var newLines = fileString.split('\n');

console.log(newLines.length - 1);
