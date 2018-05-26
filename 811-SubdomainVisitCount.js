var subdomainVisits = function(cpdomains) {
let arr = [];

for (let i = 0, len = cpdomains.length; i < len; i++) {
  let arrArr = cpdomains[i].split(' ');
  function addShrink(funcArr) { 
    let push = true;
    for (let p = 0, len = arr.length; p < len; p++) {
      if(arr[p].includes(funcArr[1])) {
        arr[p][0] = +arr[p][0] + +funcArr[0];
        push = false;
      }
    }
    if(push) arr.push(funcArr);
    
    const ind = funcArr[1].indexOf('.');
    if(ind<0) {
      return;
    }
    let newArry = [funcArr[0], funcArr[1].substring(ind+1)];
    addShrink(newArry);
  }
  addShrink(arrArr);
  arrJ = arr.map(item => {
    return item[0] + " " + item[1];
  });
}

return arrJ;
};
