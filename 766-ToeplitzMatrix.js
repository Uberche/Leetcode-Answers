var isToeplitzMatrix = function(matrix) {
const rowL = matrix[0].length;
const colL = matrix.length;
let toe = true;

let y = 0;

for (let i=0;i<colL;i++) {
  if (i===0) {
    matrix[0].map((num,ind) => {
      checkToe(num, ind+1, i+1);
    });
  } else {
    checkToe(matrix[i][0],1,i+1)
  }
  
  function checkToe(val, rowI, colI) {
    while (colI < colL && rowI < rowL) {
      if(val !== matrix[colI][rowI]) toe = false;
      colI++;
      rowI++;
    }
  }
}

return toe;

};
