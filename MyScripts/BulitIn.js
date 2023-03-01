

function greatestSal(ar){
    let temp=ar[0];  
    for(let ele of ar){
        if(ele>temp)
            temp=ele;
    } 
    return temp;
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

// find
console.log("find.....");
salaryArray=[19000,67000,34000,89000,56000,54000,23000];
// find 1st salary which is greater than 50000
let resultSal=salaryArray.find( sal=>sal>50000 ); // returns single value as a result
console.log(resultSal);

let resultSalaries=salaryArray.filter( sal=>sal>50000 ); // array as a result
console.log(resultSalaries);


console.log("Name filter.....");
let nameArray=['Hari','Pari','Pavan','pooja','kiran','Kumar','Sanavi','Pritam'];

let nameswithP=nameArray.filter( name=> name.toLowerCase().startsWith('p'));
console.log(nameswithP);

let namewithP=nameArray.find( name=> name.toLowerCase().startsWith('p'));
console.log(namewithP);

let largestSal=Math.max(67890,34222,45000,89000);
console.log(largestSal);

largestSal=Math.max(...salaryArray);
console.log(largestSal);

let smallestSal=Math.min(...salaryArray);
console.log(smallestSal);

console.log("map...");
let ageArray=[1,2,3,4,5,6];

let mappedArray=ageArray.map(age=>age*2);

console.log(ageArray);
console.log(mappedArray);

console.log("sum of array elements: reduce");

let sumofages=ageArray.reduce(  (acc,age)=>acc+age );
console.log(sumofages);

// extra 10 should be added in sum of array elements
// acc=10 (initital value)

let initialValue=12;

let sumofages1=ageArray.reduce(  (acc,age)=>acc+age, initialValue);
console.log(sumofages1);

console.log("reduce.....");
salaryArray=[19000,67000,34000,89000,56000,54000,23000];
let resultSal1=salaryArray.reduce( 
    (acc,sal)=>{         
        if(sal>acc)
           acc=sal;
           return acc;
       } 
    ); 
console.log(resultSal1);
nameArray=['Hari','Pari','Pavan','pooja','kiran','Kumar','Sanavi','Pritam'];
let contactValue=nameArray.reduce((acc,name)=>acc+name);
console.log(contactValue);



nameArray.push('Prabhu');
console.log(nameArray);
let lastele=nameArray.pop(); //LIFO // delete last elements, we can not delete it with index
console.log(lastele);
console.log(nameArray);
let sliceArray=nameArray.slice(0,4);
console.log(sliceArray);
let newArray=nameArray.splice(5,1); // delete the elements from particular index and returns deleted elements as new array
//original array now will be changed
console.log(newArray); // deleted elements
console.log(nameArray); // changed array after deleting elements