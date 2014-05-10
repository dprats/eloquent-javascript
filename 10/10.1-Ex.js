//EX 10.1

//Write a regular expression that matches a date in 
//the format "XX/XX/XXXX", where the Xs are digits. 
//Test it against the string "born 15/11/2003 (mother 
//Spot): White Fang".

//SOLUTION

var str = "born 15/11/2003 (mother Spot): White Fang";

console.log(str.search(/\d\d\/\d\d\/\d\d/));