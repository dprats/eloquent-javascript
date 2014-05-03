//Ex 4.7

// The thing that extractMother does can be expressed in a 
// more general way. Write a function 'between' that takes 
// three arguments, all of which are strings. It will 
// return the part of the first argument that occurs 
// between the patterns given by the second and the third 
// arguments.

// So between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")") 
// gives "Spot".

// between("bu ] boo [ bah ] gzz", "[ ", " ]") returns "bah".

// To make that second test work, it can be useful to know 
// that indexOf can be given a second, optional parameter 
// that specifies at which point it should start searching.

function between(str1, str2,str3){

	//find the index within str1 of the last character of str2
	var indexToStartSearch = str1.indexOf(str2)+ str2.length;
	//find the index within str1 of the first character of str3 AFTER str2
	var indexToEndSearch = str1.indexOf(str3,indexToStartSearch);
	
	var stringBetween = str1.slice(indexToStartSearch,indexToEndSearch);

	return stringBetween;
}

console.log(between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")"));