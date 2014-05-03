// Ex 6.1

// Write a function countZeroes, which takes an array of 
// numbers as its argument and returns the amount of zeroes 
// that occur in it. Use reduce.

// Then, write the higher-order function count, which 
// takes an array and a test function as arguments, and 
// returns the amount of elements in the array for which 
// the test function returned true. Re-implement countZeroes 
// using this function.

//helper function used in REDUCE
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

//helper function used in COUNTZEROES
function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

//function we create
function countZeroes(numbers){
	
	//define the function counter we will pass to reduce
	//counter returns the sum of the variable TOTAL which
	//is passed to it and (1,0) depending on whether
	//ELEMENT is a 0. if ELEMENT == 0, then it adds 1 to TOTAL
	function counter(total, element){
		return total + (element === 0 ? 1 : 0);
	}
	
	//return the result of using counter on every
	//number in 'numbers' array with initial total = 0
	return reduce(counter, 0, numbers);
}

console.log(countZeroes([1,2,3,0,5,0,9,7,0]));