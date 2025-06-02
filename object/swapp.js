const original = { a: 'A', b: 'B', c: 'C' };

const swapped = {};

for(let key in original){
    const value = original[key];
    swapped[value] = key;
}
console.log(swapped);