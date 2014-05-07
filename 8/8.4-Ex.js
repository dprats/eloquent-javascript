//EX 8.4

// In the expression bind(testArray.push, testArray) 
// the name testArray still occurs twice. Can you 
// design a function method, which allows you to 
// bind an object to one of its methods without naming 
// the object twice?

function bind(func, object) {
  return function(){
    return func.apply(object, arguments);
  };
}

var testArray = [];
var pushTest = bind(testArray.push, testArray);
pushTest("A");
pushTest("B");
show(testArray);

//SOLUTION

//design a function "method", which allows you to bind 
//an object to one of its methods without naming the 
//object twice?

function method(obj,func){
	return function(){
		return obj[func].apply(obj,arguments);
	};
}
