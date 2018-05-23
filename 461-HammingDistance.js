
let ham = 0;
let xStr = x.toString();
let yStr = y.toString();
let xLen = xStr.length;
let yLen = yStr.length;

if (xLen > yLen) {
  let dif = xLen - yLen;
  while (dif > 0) {
    yStr = "0" + yStr;
    dif--;
}
} else {
  let dif = yLen - xLen;
  while (dif > 0) {
    xStr = "0" + xStr;
    dif--;
}
}

for (let i = 0, len = xStr.length; i < len; i++) {
  
  if (xStr[i] !== yStr[i]) {
    ham++;
  }
}

console.log(ham);
