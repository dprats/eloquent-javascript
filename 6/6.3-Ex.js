//Ex 6.3

// Build a function splitParagraph which, given a 
// paragraph string, returns an array of paragraph 
// fragments. Think of a good way to represent the 
// fragments.

// The method indexOf, which searches for a character 
// or sub-string in a string and returns its position, 
// or -1 if not found, will probably be useful in some 
// way here.

// This is a tricky algorithm, and there are many 
// not-quite-correct or way-too-long ways to describe 
// it. If you run into problems, just think about it 
// for a minute. Try to write inner functions that 
// 	perform the smaller actions that make up the algorithm.

//SOLUTION

//MAIN FUNCTIONS

function splitParagraph(text){

	var fragments = [];

	while( text != ''){
		if (text.charAt(0) == "*"){
			fragments.push({type: 'emphasized',
											content: text.slice(1,takeUpTo('*',text))});
			//modify text so we remove the string we just stored
			//we add 1 because we want to remove the string added
			//PLUS the character at the end which may be } or *
			text = text.slice(takeUpTo('*',text)+1);
		} else if (text.charAt(0) == "{"){
			fragments.push({type: 'footnote',
											content: text.slice(1,takeUpTo('}',text))});
			//modify text so we remove the string we just stored
			text = text.slice(takeUpTo('}',text)+1);
		} else {
			fragments.push({type: 'normal',
											content: text.slice(0,takeNormal(text))});
			//modify text so we remove the string we just stored
			text = text.slice(takeNormal(text));
		}
	}

	return fragments;
}

//HELPER FUNCTIONS

//return array with index of where char first 
//appears within TEXT
function takeUpTo(character,text){

	//find first instance of matching closing character
	var closing = (character == '*')? '*':'}';
	//note we start the search at index =1, not 0
	//that is because chracater could be * at index 0
	var end = text.indexOf(closing,1);
	//return the index of closing character
	return end;
}

//function takes all the normal text UNTIL it hits a special character
//returns index  index of when normal text ends

function takeNormal(text){

	//find the index of the first special character
	//iterate over the entire text until it finds a
	//'*' or '{' character
	var end = Math.max(text.indexOf('*'),text.indexOf('{'));
	
	//if both equal -1, then no special characters found
	if (end != -1){
		//if the maximum is greater than -1, then at least one
		//special character was found. Since we we want the first
		//instance of that character, we want the minimum of the
		//two which does NOT equal -1
		end = (Math.min(text.indexOf('*'),text.indexOf('{')) != -1)?
					//return minimum of both, if they are not -1
					Math.min(text.indexOf('*'),text.indexOf('{')):
					//return the maximum of both if any are -1
					Math.max(text.indexOf('*'),text.indexOf('{'));
	} else {
		//if end == -1, then no special characters were found,
		//so we return the total length of the string
		end = text.length;
	}

	//return index 
	return end;
}

//CALLING FUNCTIONS


//we run two small tests to make sure it works
var y = "Lan{gua}g*ggggg*e";
var x = 'hello*this*';

console.log(splitParagraph(y));
console.log(splitParagraph(x));
