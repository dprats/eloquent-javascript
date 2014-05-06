//EX 8.1

// The points on the grid will be represented by objects 
// again. In chapter 7 we used three functions, point, 
// addPoints, and samePoint to work with points. This time, 
// we will use a constructor and two methods. Write the 
// constructor Point, which takes two arguments, the x and y 
// coordinates of the point, and produces an object with x 
// and y properties. Give the prototype of this constructor 
// a method add, which takes another point as argument and 
// returns a new point whose x and y are the sum of the x 
// and y of the two given points. Also add a method isEqualTo, 
// which takes a point and returns a boolean indicating whether 
// the this point refers to the same coordinates as the given 
// point.

// Apart from the two methods, the x and y properties are 
// also part of the interface of this type of objects: Code 
// which uses point objects may freely retrieve and modify x 
// and y.

//SOLUTION

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

//Write the constructor Point, which takes two arguments, 
// the x and y coordinates of the point, and produces an 
// object with x and y properties


var Point = function(x,y){
	this.x = x;
	this.y = y;
};

 // Give the prototype of this constructor a method add, 
 // which takes another point as argument and returns 
 // a new point whose x and y are the sum of the x and y 
 // of the two given points. 

Point.prototype.add = function(p){
	return new Point(this.x + p.x, this.y + p.y);
}

//Also add a method isEqualTo, which takes a point and 
// returns a boolean indicating whether the this point 
// refers to the same coordinates as the given point.

Point.prototype.isEqualTo = function(p){
	return (this.x == p.x && this.y == p.y);
}

//method to return the properties of an object
Object.prototype.properties = function(){
	var result =[];
	for (var property in this){
		if (this.hasOwnProperty(property)){
			result.push(property);
		}
	}
	return result;
}

//calling the function

var z = (new Point(1,5)).add(new Point(2,4));
console.log(z.properties());










