//Ex4.1

// The solution for the cat problem talks about a 'set' 
// of names. A set is a collection of values in which no 
// value may occur more than once. If names are strings, 
// can you think of a way to use an object to represent a 
// set of names?

// Show how a name can be added to this set, how one 
// can be removed, and how you can check whether a name 
// occurs in it.

//SOLUTION

//declare an empty object 
var names = {};
//to add a name, add a property to the object
names['jimmy'] = true;
//to check if a name occurs in it
console.log('jimmy' in names);
//to remove a name
delete names['jimmy'];
//to check if a name occurs in it
console.log('jimmy' in names);