const array = [1,2,3,4,5,6];
const aArray= [1,2,3,4,5,6];

for(let i=0;i<2; i++){
    aArray.unshift(aArray.pop())
    array.push(array.shift());
}

console.log( 'anticloclwise rotate:' ,array);
console.log('clockwise rotate:',aArray);
