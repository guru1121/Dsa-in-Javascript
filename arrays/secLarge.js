const array = [10, 5, 20, 40, 24, 29, 29, 15, 12];

//  let newArr = array.sort((a,b)=> b -a);

//  console.log(newArr);

 const secLarge = (arr) =>{
    if(arr.length<2){
        return 'size is less for finding second large';
    }
  
    let arr2 = [];
    for(let i =0; i< arr.length; i++){
        let isDupl= false;
        for(let j= 0; j< arr2-1; j++ ){
            if(arr[i] === arr2[j]){
                isDupl= true;
                break;
            }
        }
        if(!isDupl){
            arr2.push(arr[i])
        }
    }

    arr2.sort((a,b)=> b -a);
    return arr2[1];
 }

 console.log(secLarge(array));

 console.log(array.length);