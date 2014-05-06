//EX 8.3

// Now we can use the each method of the Grid object to 
// build up a string. But to make the result readable, 
// it would be nice to have a newline at the end of every 
// row. The x coordinate of the positions on the grid can 
// be used to determine when the end of a line is reached. 
// Add a method toString to the Terrarium prototype, which 
// takes no arguments and returns a string that, when given 
// to print, shows a nice two-dimensional view of the 
// terrarium.

//SOLUTION

//GRID HELPER FUNCTIONS

var thePlan =  
	
	["############################",
   "#      #    #      o      ##",
   "#                          #",
   "#          #####           #",
   "##         #   #    ##     #",
   "###           ##     #     #",
   "#           ###      #     #",
   "#   ####                   #",
   "#   ##       o             #",
   "# o  #         o       ### #",
   "#    #                     #",
   "############################"];

function Grid(width, height) {
  this.width = width;
  this.height = height;
  this.cells = new Array(width * height);
}

function Point(x,y){
	this.x = x;
	this.y = y;
}

Grid.prototype.valueAt = function(point) {
  return this.cells[point.y * this.width + point.x];
};

Grid.prototype.setValueAt = function(point, value) {
  this.cells[point.y * this.width + point.x] = value;
};

Grid.prototype.isInside = function(point) {
  return point.x >= 0 && point.y >= 0 &&
         point.x < this.width && point.y < this.height;
};

Grid.prototype.moveValue = function(from, to) {
  this.setValueAt(to, this.valueAt(from));
  this.setValueAt(from, undefined);
};

Grid.prototype.each = function(action){

 	//call this function for every point in the grid
 	for (var x = 0; x < this.width; x++){
 		for (var y = 0; y < this.height; y++){
 			var point = new Point(x,y);
 			action(point, this.valueAt(point));
 		}
 	}
};

var wall = {};
wall.character = "#";
StupidBug.prototype.character = "o";

function Terrarium(plan) {
  var grid = new Grid(plan[0].length, plan.length);
  console.log('new terrarium has dimensions: %s * %s',plan[0].length,plan.length)
  for (var y = 0; y < plan.length; y++) {
    var line = plan[y];
    for (var x = 0; x < line.length; x++) {
      grid.setValueAt(new Point(x, y),
                      elementFromCharacter(line.charAt(x)));
    }
  }
  this.grid = grid;
}

function elementFromCharacter(character) {
  if (character == " "){
  	// console.log('space found');
    return undefined;
  }
  else if (character == "#"){
  	// console.log('Wall found!');
    return wall;
  }
  	
  else if (character == "o"){
  	// console.log('bug found!');
    return new StupidBug();
  }
}

function characterFromElement(element) {
  if (element == undefined)
    return " ";
  else
    return element.character;
}

//create a stupid bug
function StupidBug() {};


//SOLUTION

//Add a method toString to the Terrarium prototype, 
// which takes no arguments and returns a string that, 
// when given to print, shows a nice two-dimensional 
// view of the terrarium.

Terrarium.prototype.toString = function(){

	var characters = [];
	var endOfLine = this.grid.width -1;

	//iterate over all the points in the grid within
	//the terrarium. add each value to the characters array
	//if we are at the end of the line, then add a newline
	//character
	this.grid.each(function(point,value){
		// console.log('value at point:(%s,%s) = %s', point.x,point.y, characterFromElement(value));
		// console.log(characterFromElement(value));
		characters.push(characterFromElement(value));
		if (point.x == endOfLine) characters.push('\n');
	});

	//return a string of all characters joined
	return characters.join('');
}


//TESTING

console.log(thePlan);
var terrarium = new Terrarium(thePlan);
console.log(terrarium.toString());
