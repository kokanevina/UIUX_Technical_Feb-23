

// normal functions : named functions
// annoymous functions : no named functions
// arrow functions : compact annonymous functions
addFun();
addFun();
function addFun(){
    let num1=67; let num2=78;
    let result=num1+num2;
    console.log("Result is :"+result);
}

addFun1();  
addFun1(23); 
addFun1(45,78); 

function addFun1(){
    console.log("addFun1 with no arguments");
}

function addFun1(num1,num2){  // getting called
    console.log(num1);
    console.log(num2);
    let result=num1+num2;
    console.log("Addition of 2 numbers is :"+result);
} 
let arr1=[56,"Hello",true,67,89,"Hi"];
let arr2=[56,34,78,90,123,45,45];
let arr3=arr2; // arr3 is just another reference to arr2
 let arr4=[...arr2];  // values from arr2 are copied in arr4, arr4 is new array
 console.log(arr2);
 console.log(arr4);
 arr2.push(90);  // arr2 is changed after copy
 console.log(arr2);
 console.log(arr4);
 console.log(arr3);  
 let arr5=[...arr1,...arr2];
 // display arr5

//  var type variables declared anywhere inside function,  always have functional scope
// let type variables delclared inside function, always have block scope where they are declared


function addFun2(...ar){
console.log(ar);
let sum=0;
    for(let i=0;i<ar.length;i++){
        sum=sum+ar[i];
    }// scope of i ended here
   // console.log("i="+i); //Uncaught ReferenceError: i is not defined
    // now replace let i with var i and see the difference
    return sum;
} // scope of sum ended here


let r1=addFun2();
console.log("Addition is :"+r1);
let r2=addFun2(23);
console.log("Addition is :"+r2);
let r3=addFun2(45,34);
console.log("Addition is :"+r3);
let r4=addFun2(67,89,90);
console.log("Addition is :"+r4);
let r5=addFun2(1,2,3,4,5);
console.log("Addition is :"+r5);
addFun2(67,89,90,90);
addFun2(5,4,5,4,5,6,3,2,1);

// annonymous function
let subFun = function(...ar){
    let diff=ar[0];
    for(let i=1;i<ar.length;i++){
        diff=diff-ar[i];
    }
    return diff;
}

let resdif1=subFun(45,23);
document.write(resdif1+"<br>");
let resdif2=subFun(10,5,3,8,3);
document.write(resdif2);

let cubeFun=function(ele){
     console.log("Element is :"+ele);
     console.log("Cube is :"+(ele*ele*ele));
}
// no name, no functon keyword, fat arrow => between parenthesis and body

let arrowFun1=(ele)=>{
    console.log("Element is :"+ele);
    console.log("Cube is :"+(ele*ele*ele));
}

// if arrow function accepts only one parameter then () are optional

 arrowFun1=ele=>{
    console.log("Element is :"+ele);
    console.log("Cube is :"+(ele*ele*ele));
}

//if arrow function has single statement in body then {} are optional
arrowFun1=ele=>console.log("Cube is :"+(ele*ele*ele));

// if arrow function has single return statement in body then {} are optional and return keyword must not be used
// body automatically returns the result

arrowFun1=ele=>{
   return (ele*ele*ele);
}

arrowFun1=ele=>ele*ele*ele;

let cubeResult=arrowFun1(3);
 console.log("Cube is:"+cubeResult);