//Ex 4.11

// You may remember this line of code from the introduction:

// print(sum(range(1, 10)));

// We have range now. All we need to make this line work 
// is a sum function. This function takes an array of 
// numbers, and returns their sum. Write it, it should be 
// easy.

function sum(arr){
	var sum = 0;
	for (var i=0; i< arr.length; i++){
		sum += arr[i];
	}
	return sum;
}