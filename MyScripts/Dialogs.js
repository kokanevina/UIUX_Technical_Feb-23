
window.alert("45");
let showAlert=()=>window.alert("Hurry up!!.. only few seats left...");
showAlert();

let confirmation=window.confirm("Are you sure? U want to submit ur exam??");
console.log(confirmation);
if(confirmation)
    window.alert("Okay! your exam is submitted");
else
    window.alert("Okay! you can continue with exam");


function add(num1,num2){
    return num1 + num2;
}
let n1=parseFloat(window.prompt("Enter first number"));
console.log(n1);
console.log( typeof n1);
let n2=parseFloat(window.prompt("Enter second number"));
console.log(n2);
console.log( typeof n2);
let res=add(n1,n2);
console.log("Addition is: "+res);
window.alert("Addition is:"+res);
//window.prompt();
//window.confirm();

