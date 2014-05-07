
function clone(object) {
  function OneShotConstructor(){}
  OneShotConstructor.prototype = object;
  return new OneShotConstructor();
}

Object.prototype.inherit = function(baseConstructor){
	this.prototype = clone(baseConstructor.prototype);
	this.prototype.constructor = this;
}

Object.prototype.method = function(name, func){
	this.prototype[name] = func;
}

//constructor
function StrangeArray(){};

//StrangeArray.prototype = clone(Array);
//	clone(Array) => new Array
//StrangeArray.prototype.constructor = StrangeArray;
StrangeArray.inherit(Array);

StrangeArray.method('push', function(value){
	//apply Array.push on StrangeArray with argument = value
	Array.prototype.push.call(this, value);
	//Push again (StrangeArray is weird)
	Array.prototype.push.call(this, value+1);
});

var strange = new StrangeArray();
console.log(strange);
strange.push(4);
console.log(strange);
strange.push(6);
console.log(strange);

