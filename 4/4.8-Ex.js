//Ex 4.8

// The formatDate function used by catInfo does not add a 
// zero before the month and the day part when these are 
// only one digit long. Write a new version that does this.

function formatDate(date) {


	if (date.getDate() < 10){
		var day = '0'+ date.getDate();
	}

	if(date.getMonth() + 1 < 10){
		var month = '0'+ (date.getMonth() +1);
	}

  return day + "/" + month +
         "/" + date.getFullYear();
}

var x = new Date(2000, 0, 1);
console.log(formatDate(x));

