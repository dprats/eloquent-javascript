//Ex. 4.4

// Write a function called startsWith that takes two 
// arguments, both strings. It returns true when the 
// first argument starts with the characters in the 
// second argument, and false otherwise.

function startsWith(str1, str2){
	return (str1.slice(0,str2.length) == str2);
}

console.log(startsWith('amazon','ama'));