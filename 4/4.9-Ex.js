//Ex 4.9

// Write a function oldestCat which, given an object 
// containing cats as its argument, returns the name of 
// the oldest living cat.

function oldestCat(obj){
	var oldest = null;
	//iterate over all the names in the object
	for (var name in obj){
		var cat = obj[name];
		//if the cat is alive and born before the 
		//currently-oldest cat...
		if (!('death' in cat) && cat.birth < oldest.birth){
			oldest = cat;
		}
	}

	//return the name of the oldest cat if the cat is not null
	return (oldest)? oldest.name:null;
}

var x = 

console.log(oldestCat(x));