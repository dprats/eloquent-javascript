//EX 10.2

//Write a pattern that matches e-mail addresses. For 
//simplicity, assume that the parts before and after 
//the @ can contain only alphanumeric characters and 
//the characters . and - (dot and dash), while the last 
//part of the address, the country code after the last 
//dot, may only contain alphanumeric characters, and 
//must be two or three characters long.

var email = /\b[\w\.-]+@[\w.-]+\.\w{2,3}\b/;
// var email = /\b[\w\.-]+@[\w\.-]+\.\w{2,3}\b/;

console.log(email.test("kenny@test.net"));