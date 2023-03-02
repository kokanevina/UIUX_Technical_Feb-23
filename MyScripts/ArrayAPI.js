
// declaring array in javascript

let array1=[34,25,612,78];

let array2=new Array(3);
console.log(array2);
array2.push(34);
console.log(array2);
array2[0]=2;
array2[1]=22;
array2[2]=12;
console.log(array2);



let array3=new Array();
console.log(array3);
array3.push(34,12,13,45);
console.log(array3);



let array4=new Array(4,5);
console.log(array4.length);

let array5=new Array('hari','pari','pooja');
console.log(array5.length);

// Array API
// push : add the element from back of the array

array5.forEach(name=>console.log(name));
array5.push("pavan");
console.log(array5);
array5[1]="ram";
console.log(array5);

// pop : deletes the element from back of the array : LIFO

let popped=array5.pop();
console.log("Popped:"+popped);
console.log(array5);
array5.push("suman",'Prakash','Guru','Karuna','Kalpesh')
console.log(array5);
//arrays are mutable : same array gets modified

// slice
let slicedArray=array5.slice(2,6);
console.log(slicedArray);
console.log(array5);
console.log("with negative indexes");
slicedArray=array5.slice(1,-2);
console.log(slicedArray);
console.log(array5);

console.log("with negative indexes...");
slicedArray=array5.slice(-3,-4);
console.log(slicedArray);
console.log(array5);
console.log("with start index...");
slicedArray=array5.slice(5);  // end index will be end of original array
console.log(slicedArray);
console.log(array5);
console.log("with -ve start index...");
slicedArray=array5.slice(-6);  // end index will be end of original array
console.log(slicedArray);
console.log(array5);

// splice
console.log("to delete range of elements");
let deletedelems=array5.splice(3,1);
console.log(deletedelems);
console.log(array5);
console.log("only start index");
deletedelems=array5.splice(3); // deletes till end of the array
console.log(deletedelems);
console.log(array5);

array5.push('karan','Karuna','kiran');
console.log(array5);
deletedelems=array5.splice(-3,2);
console.log(deletedelems);
console.log(array5);

numArray=[1,2,3,4,5,6,7,8,9,10];
console.log(numArray);
numArray.splice(3,3,11,12);
console.log(numArray);
// if count=number of replacing element then elements same as count will be replaced
// if count<number of replacing elements then count will not be considered, elements will
// be replaced according to number of elements passed
// if count <number of elements then, elements will be replaced to match the count and
// further elements will be deleted

// sort
array5=['airoli','vashi','Ghansoli','Trubhe','rabale'];
console.log(array5);
array5.sort();
console.log(array5);

numArray=[20,11,34,25,2, 111, 6, 626,66,12,14];
console.log(numArray);
numArray.sort();
console.log(numArray);
numArray.sort(  (a,b)=>a-b   )
console.log(numArray);
