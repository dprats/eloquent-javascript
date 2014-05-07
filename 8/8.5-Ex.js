//EX 8.5

// When asking a bug to act, we must pass it an object 
// with information about its current surroundings. This 
// object will use the direction names we saw earlier 
// ("n", "ne", etcetera) as property names. Each property 
// holds a string of one character, as returned by 
// characterFromElement, indicating what the bug can 
// see in that direction.

// Add a method listSurroundings to the Terrarium 
// prototype. It takes one argument, the point at which 
// the bug is currently standing, and returns an object 
// with information about the surroundings of that point. 
// When the point is at the edge of the grid, use "#" for 
// the directions that go outside of the grid, so the bug 
// will not try to move there.

// Hint: Do not write out all the directions, use the 
// each method on the directions dictionary.

//SOLUTION


Terrarium.prototype.listSurroundings = function(p){
	//declare object with info about surroundings
	var surroundings = {};
	//declare the grid by using 'this' Terrarrium as context
	var grid = this.grid;
	//iterate over all the directions possible
	//(note 'directions' and its helpers are declared below this function)
	directions.each(function(name,direction){

		var newPoint = p.add(direction);
		//if the new point is inside the grid...
		if (grid.isInside(newPoint)){ 
			//... we add the new point to surroundings object
			surroundings[name] = characterFromElement(newPoint);

		} else {
			//..else we make the new point be a wall
			surroundings[name] = '#';
		}

	});
	return surroundings;
}

//declaring the Dictionary so we can use the 'each' method
//on the dictionary


function Dictionary(startValues) {
  this.values = startValues || {};
}

var directions = new Dictionary(
  {"n":  new Point( 0, -1),
   "ne": new Point( 1, -1),
   "e":  new Point( 1,  0),
   "se": new Point( 1,  1),
   "s":  new Point( 0,  1),
   "sw": new Point(-1,  1),
   "w":  new Point(-1,  0),
   "nw": new Point(-1, -1)});

Dictionary.prototype.each = function(action) {
  forEachIn(this.values, action);
};


//HELPER FUNCTIONS

// 1. generic helper functions

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

//2. Point-related function

var Point = function(x,y){
	this.x = x;
	this.y = y;
};

Point.prototype.add = function(p){
	return new Point(this.x + p.x, this.y + p.y);
}

Point.prototype.isEqualTo = function(p){
	return (this.x == p.x && this.y == p.y);
}

//2. Terrarium-related function

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

var wall = {};

wall.character = "#";

//create a stupid bug
function StupidBug() {};

StupidBug.prototype.character = "o";
