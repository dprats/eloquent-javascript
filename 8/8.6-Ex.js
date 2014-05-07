//Ex 8.6

//Create a bug type called DrunkBug which tries to move 
//in a random direction every turn, never mind whether 
//there is a wall there. Remember the Math.random trick 
//from chapter 7.

//SOLUTION

//SOLUTION 1

//Create a construnctor
function DrunkBug(){
	//place all the direction possibilities in an array
	var directions = [];
	for (var d in bugDirection){
		directions.push(d);
	}
	//choose one randomly and make it the direction
	//of the constructed bug
	var index = Math.floor(Math.random()*directions.length);
	this.direction = bugDirection[index];
}

DrunkBug.prototype.act = function(surroundings){

	return {type: 'move', direction: this.direction};
};

//SOLUTION 2 (Suggested by Author)

//Author suggested to turn separate the logic as much as possible

//add all the dictionary properties to an array
//return the array
Dictionary.prototype.names = function(){
	var names = [];
	this.each(function(name, value){names.push(name);});
	return names;
}

//return a random element from any array
function randomElement(arr){
	if (arr.length == 0){throw new Error("Array is empty");}
	var index = Math.floor(Math.random()*arr.length);
	return arr[index];
}

//create the bug

function DrunkBug(){};

DrunkBug.prototype.act = function(surroundings){
	return {type:'move', 
					direction: randomElement(bugDirection.names);
					};
};
DrunkBug.prototype.character = '~';

//HELPER FUNCTIONS

function Dictionary(startValues) {
  this.values = startValues || {};
}

var bugDirection = new Dictionary(
  {"n":  new Point( 0, -1),
   "ne": new Point( 1, -1),
   "e":  new Point( 1,  0),
   "se": new Point( 1,  1),
   "s":  new Point( 0,  1),
   "sw": new Point(-1,  1),
   "w":  new Point(-1,  0),
   "nw": new Point(-1, -1)});