const arr = [1, 3, 10, 4, 8, 9];


let max = arr[0] ;
let min = arr[0] ;

let maxI;
for(let i=0; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
        maxI= i
       
    }
    if(min > arr[i]){
        min = arr[i];
    }
}

console.log(max);
console.log(min);
console.log(maxI);