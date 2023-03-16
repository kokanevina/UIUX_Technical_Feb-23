
let fnameNode=document.getElementById('fname');
let err1Node=document.getElementById('error1');

let ageNode=document.getElementById('age');
let err2Node=document.getElementById('error2');

let mailNode=document.getElementById('emailid');
let err3Node=document.getElementById('error3');

let passNode=document.getElementById('password');
let err4Node=document.getElementById('error4');

let cpassNode=document.getElementById('confirmpass');
let err5Node=document.getElementById('error5');

let emptyField="This field is required";

let namePattern= new RegExp("^[A-Za-z]*$");
let passwordPattern=new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$');

function validate1(){
    err1Node.innerHTML="";
    let firstName=fnameNode.value;
    if(firstName==''){
        err1Node.innerHTML=emptyField;
        return false;
    }
    else if(!namePattern.test(firstName)){
        err1Node.innerHTML="Name should have only characters";
        return false;
    }
    else{
        return true;
    }
}

function validate2(){
    err2Node.innerHTML="";
    let age=ageNode.value;
    if(age==''){
        err2Node.innerHTML=emptyField;
        return false;
    }
    else if(age<20 || age>50){
        err2Node.innerHTML="Age should be between 20 to 50";
        return false;
    }
    else{
        return true;
    }
}


function validate3(){
    err3Node.innerHTML="";
    let emailId=mailNode.value;
    if(emailId==''){
        err3Node.innerHTML=emptyField;
        return false;
    }
    else if(!emailId.includes('@') || emailId.endsWith('@')){
        err3Node.innerHTML="Please enter valid email id";
        return false;
    }
    else{
        return true;
    }
}


function validate4(){
    err4Node.innerHTML="";
    let pass=passNode.value;
    //console.log(passwordPattern.test(pass));
    if(pass==''){
        err4Node.innerHTML=emptyField;
        return false;
    }
    else if(!passwordPattern.test(pass)){
        err4Node.innerHTML="Password should have atleast one 1. small letter, 2. big letter, 3. digit, 4. symbol(). and it should be 6 to 12 chars long";
        return false;
    }
    else{
        return true;
    }
}
function validate5(){
    err5Node.innerHTML="";
    let confirmPass=cpassNode.value;
    let pass=passNode.value;
    //console.log(passwordPattern.test(pass));
    if(confirmPass==''){
        err5Node.innerHTML=emptyField;
        return false;
    }
    else if(confirmPass!=pass){
        err5Node.innerHTML="Password should match";
        return false;
    }
    else{
        return true;
    }
}
function  validateAll(){
    // if all fields are valid then function should return true
    // else function should return false
    let r1=validate1();  //T
    let r2=validate2();   //T
    let r3=validate3();  //T
    let r4=validate4();  //T
    let r5=validate5(); //T
    return (r1 && r2 && r3 && r4 && r5) ; //T
}

let checkNode=document.getElementById('passshow');
function showPassword(){
    if(checkNode.checked){
        passNode.type="text";
        cpassNode.type="text";
    }
    else{
        passNode.type="password";
        cpassNode.type="password";
    }
}