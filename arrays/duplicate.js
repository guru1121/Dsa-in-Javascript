const array= ['Q', 'A', 'C', 'Q', 'Z', 'Y', 'Z'];

let newArr = [];

// by for loop 
for(let i=0; i<array.length; i++){
    let duplicate = false;
    for(let j=0; j< newArr.length; j++){
        if(array[i]=== newArr[j]){
            duplicate= true;
        }
    }
    if(!duplicate){
        newArr.push(array[i]);
    }
}
 console.log(newArr, "by for loop");

for(let i = 0; i< array.length; i++){
    if(!newArr.includes(array[i])){
        newArr.push(array[i]);
    }
}
 console.log(newArr, "by includes");

newArr = [...new Set(array)];
console.log(newArr, "by use of rest and set");