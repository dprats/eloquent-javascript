var config = {
	writable: true,
	enumerable: true,
	configurable: true
};

var defineProperty = function(obj, name, value){
	config.value = value;
	Object.defineProperty(obj, name, config);
}

var man = Object.create(null);
defineProperty(man,'sex','male');

var joe = Object.create(man);

defineProperty(joe, 'firstname', 'Joe');
defineProperty(joe, 'lastname', 'Jones');

var person = Object.create(null);

defineProperty(person, 'fullname', function(){
	return this.firstName + ' ' + this.lastName;
});

var man = Object.create(person);
defineProperty(man, 'sex', 'male');

console.log(joe);
console.log(Object.getPrototypeOf(joe));