const arrayA = [1,2,3,4];

const arrayB = [ 5,6,7,8];
const combined =[];
for(let i=0; i<arrayA.length; i++){
      combined.push(arrayA[i]);
}
for(let i=0; i<arrayB.length; i++){
      combined.push(arrayB[i]);
}
console.log('by for loop',combined);

// by rush operator

const mergeArray = [...arrayA, ...arrayB];

console.log('By rush operator',mergeArray);