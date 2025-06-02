const string = "aaabbbaaa";

let rev = '';

for(let i= string.length-1; i>=0; i--){
     rev+= string[i]
}

console.log(rev);
if(rev === string){
  ispalindrome = true;
  return console.log('string is palindrome');
}else{
    return console.log("string is not palindrome");
}

console.log(rev);