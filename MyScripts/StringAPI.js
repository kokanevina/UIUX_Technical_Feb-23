let arr=['h','e','l','l','o'];

let s1='hello';

let s2=new String();
let s3=new String('hello');

let s4=s1;
let s5=new String(s4);

console.log("s1:"+s1);
console.log("s4:"+s4);
let concats=s1+'welcome';
console.log(s1);
console.log(concats);
s1=s1+' neosoft';
console.log(s1);
console.log(s4);

const companyName="Neosoft";

let cname=companyName+" Rabale"
console.log(cname);
console.log(s5);

console.log(companyName.length);

let upstring=companyName.toUpperCase();
console.log(companyName);
console.log(upstring);
// toLowerCase

let b=companyName.startsWith('neo');
console.log(b);

let b1=companyName.toLowerCase().startsWith('neo');
console.log(b1);
console.log(companyName);

// endsWith

console.log(companyName.concat(' Dadar'));


let slogan="Vande Mataram";
console.log(slogan);
let sub1=slogan.slice(1,6);  // +ve, -ve 
console.log(sub1);
// check with negative values

let sub2=slogan.substring(1,6); // +ve
console.log(sub2);

let sub3=slogan.substring(-2) // 0
console.log(sub3);
let sub4=slogan.substring(-2,-5); //0,0
console.log(sub4);
let sub5=slogan.substring(-2,4); //0,4
console.log(sub5);

let nation1='India';
let nation2='iNdia';

console.log(nation1==nation2);
console.log(nation1.toLowerCase()==nation2.toLowerCase());
console.log(nation1);

// check further API functions
