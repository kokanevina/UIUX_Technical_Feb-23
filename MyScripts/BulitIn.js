

function greatestSal(ar){
    let greater=ar[0];
   
    for(let ele of ar){
        if(ele>greater)
            greater=ele;
    }
   
    return greater;
}

let salaryArray=[19000,67000,34000,89000,56000,54000,23000];
let gt=greatestSal(salaryArray);
console.log(gt);
// find

// filter