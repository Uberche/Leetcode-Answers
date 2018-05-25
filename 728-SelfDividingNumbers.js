const left  = 1;
const right = 36;

let selfDividingNumbers = function(left, right) {
  let arr = [];
  
  function isIt(num){
    return num.toString().split('').every((dig) => {
      if(dig === 0 || num%dig !== 0) {
        return false;
      }
      return true;
    });
  }
  for (let i=left; i<=right; i++) {
    if(isIt(i)) {
      arr.push(i);
    }
  }
  
  console.log(arr);
}
selfDividingNumbers(left, right);
