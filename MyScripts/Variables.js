// dynamically typed language
var num=67;  // number
document.write(num);
document.write("<br>");
console.log(num);
console.log(typeof num);
num=78.9; //number
document.write(num);
document.write("<br>");
console.log(num);
console.log(typeof num);
num="hello"; // string
document.write(num);
document.write("<br>");
console.log(num);
console.log(typeof num);
num=true; // boolean
document.write(num);
console.log(num);
console.log(typeof num);


// statically typed language
/*
int num=45;
num=67.9; // compiler error
*/

var college="DKTE";
var college="TKIT";

// var type variables can be redeclared

let company="NEO";
 company="SOFT";
// let  type variables can not be redeclared

const pie=3.142;
pie=3.14;
// once assigned, const type variable's value can not be changed