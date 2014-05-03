//EX 4.5
// Can you write a function catNames that takes a paragraph 
// as an argument and returns an array of names?

// Strings have an indexOf method that can be used to 
// find the (first) position of a character or sub-string 
// within that string. Also, when slice is given only one 
// argument, it will return the part of the string from 
// the given position all the way to the end.

// It can be helpful to use the console to 'explore' 
// functions. For example, type "foo: bar".indexOf(":") 
// and see what you get.

function catNames(par){
	//start with the colon
	var index = par.indexOf(':');
	var arr = par.slice(index+2).split(', ');
	return arr;
}

var x = "born: jamie, cercei, tyrion, sansa";

console.log(catNames(x));