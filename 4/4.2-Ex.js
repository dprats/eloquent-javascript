//EX 4.2

//Write a function range that takes one argument, a positive
//number, and returns an array containing all numbers from 
//0 up to and including the given number.

//An empty array can be created by simply typing []. Also 
//remember that adding properties to an object, and thus 
//also to an array, can be done by assigning them a value 
//with the = operator. The length property is automatically 
//updated when elements are added.

function range(num){
	var arr = [];
	for (var i =0; i <=num; i++){
		arr.push(i);
	}
	return arr;
}

console.log(range(4));