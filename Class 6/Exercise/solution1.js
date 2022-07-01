// Code your anonymous function here:
let practice = function(myArg){
	if (typeof myArg === "number"){
	  return myArg * 3;
	} else if (typeof myArg === "string") {
	  return "ARRR!";
	} else {
	  return myArg;
	}
 }
 
 
 // Complete the map method here:
 let arr = ['Elocution', 21, 'Clean teeth', 100, '', true];
 console.log(arr.map(practice));