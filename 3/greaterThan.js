// CHAPTER 3

// Write a function greaterThan, which takes one argument, 
// a number, and returns a function that represents a test.
//  When this returned function is called with a single 
//  number as argument, it returns a boolean: true if the 
//  given number is greater than the number that was used 
//  to create the test function, and false otherwise.

function greaterThan(num){
	return function(a){
		return (a > num);
	}
}