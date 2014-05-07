var zaphod = {name: 'zaphod', age: 42};
var marvin = {name: 'Marvin', age: 420000000000};

var sayHello = function(){
	console.log('Hello, ' + this.name);
}

var sayGoodbye = function(){
	console.log('Goodbye, ' + this.name);
}

// sayHello();
// sayGoodbye();

// sayHello.call(zaphod);
// sayHello.apply(zaphod);

var say = function(greeting){
	console.log(greeting + ', ' + this.name);
}


say.call(zaphod,'hello');
// say.call(marvin,'hello');

var update = function(name, age, size){
	this.name = name;
	this.age = age;
	this.size = size;
}

update.call(zaphod, 'joe', 24, '1M');
console.log(zaphod);
say.call(zaphod,"hello");

var dispatch = function(person, method, args){
	method.apply(person, args);
}

dispatch('zaphod',say,['Hello']);
// dispatch.call('marvin',update,['jim', 34, '3M']);
