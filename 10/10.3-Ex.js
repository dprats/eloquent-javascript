//10.3

//Re-write the function extractDate that we wrote in 
//chapter 4. When given a string, this function looks 
//for something that follows the date format we saw 
//earlier. If it can find such a date, it puts the 
//values into a Date object. Otherwise, it throws an 
//exception. Make it accept dates in which the day or 
//month are written with only one digit.

function extractDate(str){
	var found = str.match(/(\d\d?)\/(\d\d?)\/(\d{4})/);
	if (found == null){
		throw new Error('no date found in ' + str);
	}	
	return new Date(+found[3],+found[2]-1,+found[1]);
}

console.log(extractDate("born 5/2/2007 (mother Noog): Long-ear Johnson"));