var calPoints = function(ops) {
  let out = [];
  ops.map(item => {
    const ind = ops.indexOf(item);
    switch (item) {
      case "+":
        out.push(parseInt(out[out.length-1],10)+parseInt(out[out.length-2],10));
        break;
      case "C":
        out.pop();
        break;
      case "D":
        out.push(out[out.length-1]*2);
        break;
      default:
        out.push(item);
    }
  });
  
  function findNum(arr) {
    if (!isNaN(arr[arr.length-1])) {
      return arr[arr.length-1];
    } else {
      return findNum(arr.slice(0,arr.length-1));
    }
  }
  
  const thisOne = out.reduce((a,b) => {
    return a+parseInt(b,10);
  }, 0);
  
  return thisOne;
};
