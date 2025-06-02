const array = [ 0,0,0,2,3,4,6];

for(let i =0; i<=array.length; i++){
    if(array[i]===0){
        array.push(array.shift());
    }
}
console.log(array);