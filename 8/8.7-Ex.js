//Ex 8.7

//Create a LichenEater creature. It starts with an energy 
// of 10, and behaves in the following way:

//    - When it has an energy of 30 or more, and there is 
				// room  near it, it reproduces.
// 		- Otherwise, if there are lichen nearby, it eats a 
//			random one.
// 		-	Otherwise, if there is space to move, it moves into a 
// 			random nearby empty square.
// 		- Otherwise, it waits.

// Use findDirections and randomElement to check the 
//surroundings and to pick directions. Give the 
//lichen-eater "c" as its character (pac-man).

//SOLUTION

function LichenEater(){
	this.energy = 10;
}

LichenEater.prototype.character = 'c';

creatureTypes.register(LichenEater);

LichenEater.prototype.act = function(surroundings){
	var emptySpace = findDirections(surroundings, ' ');
	var lichens = findDirections(surroundings, '*');
	if (this.energy >= 30 && emptySpace.length > 0){

		return {type: 'reproduce', direction: randomElement(emptySpace)};
	
	//...otherwise if there are lichen nearby...
	} else if (lichens.length > 0){
		return {type:'eat', direction: randomElement(lichens)};
	//.. if space to move, it moves to a random space
	} else if (emptySpace.length > 0){
		return {type: 'move', direction: randomElement(emptySpace)};
	//otherwise it waits...
	} else {
		return {type: 'wait'};
	}

}

function findDirection(surroundings, wanted){
	var found = [];
	directions.each(function(name){
		if (surroundings[name] == wanted){
			found.push(name);
		}
	});
	return found;
}

function randomElement(arr){
	if (arr.length == 0){throw new Error('array has no length');};
	var index = Math.floor(Math.random()*arr.length);
	return arr[index];
}