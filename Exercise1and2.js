//Exercise 1
//console.log("HELLO WORLD");

//Exercise 2
//console.log("running");
var total = 0; 

for(var i=2; i<process.argv.length; i++){
	//console.log("inside for loop");
	currentArg = Number(process.argv[i]); 
	total += currentArg;
}
console.log(total);