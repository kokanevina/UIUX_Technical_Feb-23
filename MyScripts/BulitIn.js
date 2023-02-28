

function greatestSal(ar){
    let greater=ar[0];
   
    for(let ele of ar){
        if(ele>greater)
            greater=ele;
    }
   
    return greater;
}

let salaryArray=[19000,67000,34000,89000,56000,54000,23000]; //6 7-1
let gt=greatestSal(salaryArray);
console.log(gt);

for(let j=0;j<=salaryArray.length-1;j++){
    console.log(j+"  "+salaryArray[j]);
}
console.log("Backward.....");
for(let j=salaryArray.length-1;j>=0;j--)
    console.log(j+"  "+salaryArray[j]);
console.log("Alternate....");
for(let j=0;j<=salaryArray.length-1;j+=2)
    console.log(j+"  "+salaryArray[j]);
console.log("Start....");
for(let j=3;j<=salaryArray.length-1;j++)
        console.log(j+"  "+salaryArray[j]); 

console.log("for of loop");
// doest not take index value, bydefault starts with 0
//bydefault ends at end index
//only in fwd direction

for(let j of salaryArray)
    console.log(j);
console.log("Test logic...");
for(let salary of salaryArray)
    console.log(salary); 
    // scope of salary variable ended
  //  console.log(salary+5000); // error

// what will be the ouput of above code
console.log("Test logic...");
for(let salary of salaryArray){
    console.log(salary); 
    console.log(salary+5000);
}


//forEach method
console.log("forEach....");
salaryArray.forEach(    sl=>console.log(sl)     );
console.log("forEach....");
salaryArray.forEach(    (sal,index)=>console.log(sal+"   "+index)     );

console.log("forEach....");
salaryArray.forEach(    (sal,index,ar)=>console.log(sal+"   "+index+"  "+ar)     );