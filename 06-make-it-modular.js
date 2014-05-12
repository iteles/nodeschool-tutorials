 var mymodule = require('./06mymodule.js')
//mymodule is now a function you can call

var directory = process.argv[2];	
var ext = process.argv[3];


var results = mymodule(directory, ext, function(err, list){
    if (err){
    	console.log('An error was found');
    	//return callback(err); 
    } // early return

    // ... no error, continue doing cool things with `data`

    // all went well, call callback with `null` for the error argument
    for(var i=0; i<list.length; i++){
 	console.log(list[i]);
	}

})
/* Solution
    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)
    
      list.forEach(function (file) {
        console.log(file)
      })
    })

*/