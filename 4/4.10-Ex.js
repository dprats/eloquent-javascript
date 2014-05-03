//EX 4.10

// Extend the range function from exercise 4.2 to take a 
// second, optional argument. If only one argument is given, 
// it behaves as earlier and produces a range from 0 to the 
// given number. If two arguments are given, the first 
// indicates the start of the range, the second the end.

function range(num,end){

	var arr = [];
	//if we have only one argument, act as previously defined
	if (arguments.length <2){
		for (var i =0; i <=num; i++){
			arr.push(i);
		}
	} else {
		//if we have two arguments...
		for (var j = num; j <= end; j++){
			arr.push(j);
		}
	}
	return arr;
}

console.log(range(5,10));