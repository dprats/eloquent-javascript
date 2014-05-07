//Ex 8.8

// Find a way to modify the LichenEater to be more 
// likely to survive. Do not cheat ― this.energy += 100 
// is cheating. If you rewrite the constructor, do not 
// forget to re-register it in the creatureTypes 
// dictionary, or the terrarium will continue to use 
// the old constructor.

LichenEater.prototype.act = function(surroundings){
	var emptySpace = findDirections(' ');
	var lichens = findDirections('*');

	if (this.energy >= 30 && emptySpace.length >0){
		return {type: 'reproduce', direction: randomElement(lichen)};
	}


}