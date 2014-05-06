//EX 8.2

// We will also need to go over all the elements of the 
// grid, to find the bugs we need to move, or to convert 
// the whole thing to a string. To make this easy, we can 
// use a higher-order function that takes an action as its 
// argument. Add the method each to the prototype of Grid, 
// which takes a function of two arguments as its argument. 
// It calls this function for every point on the grid, 
// giving it the point object for that point as its first 
// argument, and the value that is on the grid at that point 
// as second argument.

// ¶ Go over the points starting at 0,0, one row at a 
// time, so that 1,0 is handled before 0,1. This will make 
// it easier to write the toString function of the terrarium 
// later. (Hint: Put a for loop for the x coordinate inside 
// 	a loop for the y coordinate.)

// ¶ It is advisable not to muck about in the cells property 
// of the grid object directly, but use valueAt to get at 
// the values. This way, if we decide (for some reason) to 
// use a different method for storing the values, we only 
// have to rewrite valueAt and setValueAt, and the other 
// methods can stay untouched.

//SOLUTION

//GRID HELPER FUNCTIONS

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


 // Add the method each to the prototype of Grid, which 
 // takes a function of two arguments as its argument. 
 // It calls this function for every point on the grid, 
 // giving it the point object for that point as its first 
 // argument, and the value that is on the grid at that 
 // point as second argument.

 Grid.prototype.each = function(action){

 	//call this function for every point in the grid
 	for (var x = 0; x < this.width; x++){
 		for (var y = 0; y < this.height; y++){
 			var point = new Point(x,y);
 			action(point, this.valueAt(point));
 		}
 	}
};

//TESTING SOLUTION

var test = new Grid(3,2);

test.setValueAt((new Point(1,0)), '#');
console.log(test.valueAt(new Point(1,0)));

test.setValueAt((new Point(1,1)), 'o');

test.each(function(point,value){
	console.log(point.x + "," + point.y +': ' + value);
});

module.exports = Grid;


