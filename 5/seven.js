//Using an exceptions to denote when a goal has been completed

var FoundSeven = [];

function hasSevenTruths(object){
	var counted = 0;

	function count(object){
		for (var name in object){
			if (obj[name] === true){
				counted++;
				if (counted == 7){
					throw FoundSeven;
				}
			} else if (typeof object[name] == 'object'){
				count(obj[name]);
			}
		}
	}

	try {
		count(object);
		return false;
	}

	catch (exeption){
		if (exception != FoundSeven){
			throw exception;
		}
		return true;
	}

}

