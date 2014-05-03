//4.3

// split and join are not precisely each other's inverse. 
// string.split(x).join(x) always produces the original 
// value, but array.join(x).split(x) does not. Can you give 
// an example of an array where .join(" ").split(" ") 
// produces a different value?


//array != array.join(" ").split(" ")
var words2 = ['cities', 'of', 'the', 'interior amazon'];
console.log(words2);
var y = words2.join(' ').split(' ');
console.log(y);


