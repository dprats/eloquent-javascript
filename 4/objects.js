//The operator in can be used to test whether an object has a certain property. 
//It produces a boolean.
var chineseBox = {};

chineseBox.content = chineseBox;
console.log('content' in chineseBox);
console.log('content' in chineseBox.content);
