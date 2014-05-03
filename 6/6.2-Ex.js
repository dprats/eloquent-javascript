//Ex 6.2

// Write a function processParagraph that, when given a 
// paragraph string as its argument, checks whether this 
// paragraph is a header. If it is, it strips off the '%' 
// characters and counts their number. Then, it returns 
// an object with two properties, content, which contains 
// the text inside the paragraph, and type, which contains 
// the tag that this paragraph must be wrapped in, "p" for 
// regular paragraphs, "h1" for headers with one '%', and 
// "hX" for headers with X '%' characters.

// Remember that strings have a charAt method that can 
// be used to look at a specific character inside them.

//SOLUTION

//we use fs so we can read the file from 
//http://eloquentjavascript.net/chapter6.html
var fs = require('fs');

//Read the file
var recluseFile = fs.readFileSync('./recluse.txt', 'utf8');

//split the file into an array of paragraph strings
//so we can test the processParagraph function to see if it
//behaves as intended
var paragraphs = recluseFile.split('\n');

var x = '%%%hello';

function processParagraph(str){
	//counter for all the % signs
	var percentages = 0;
	var tag = '';

		//check if this paragraph string is a header
		//if it is, strip off the '%' characters
		//and count their number and remove the '%'' chars 
		while(str.indexOf('%') != -1){
			str = str.replace('%','');
			percentages++;
		}

		//create a tag that is p for 0 '%' characters,
		//h1 for 1 '%', and hX for X '%' characters
		tag = (percentages >0)? ('h'+percentages):p;

		//return an object with two properties: content & type
		return obj={content: str, type: tag};	
}

console.log(processParagraph(x));
