//Ex 4.6

//"died 27/04/2006: Black Leclère"

// The date part is always in the exact same place of a 
// paragraph. How convenient. Write a function extractDate 
// that takes such a paragraph as its argument, extracts 
// the date, and returns it as a date object.

function extractDate(par){
	var colon = par.indexOf(":");
	var dateArray = par.slice(5,colon).split('/'); 
	//we offset the month variable dateArray[1] minus 1
	//because months are indexed 0-11, not 1-12
	var date = new Date(+dateArray[2],+dateArray[1]-1,+dateArray[0]);
	return date;
}

console.log(extractDate("died 27/04/2006: Black Leclère"));