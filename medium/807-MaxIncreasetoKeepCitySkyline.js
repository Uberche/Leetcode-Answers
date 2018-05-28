var maxIncreaseKeepingSkyline = function(grid) {
    let rowH = [];
    let colH = [];
    let newGrid = [[],[],[],[]];
    let total = 0;

    grid.forEach((item, ind) => {
      //rowH
      let high;
      high = item.reduce((a, b) => {
        return Math.max(a, b) ;
      });
      rowH.push(high);
      //colH
      for (let i=0, len=item.length; i<len; i++) {
        if(!colH[i] || item[i]>colH[i]) colH[i] = item[i]; 
      }

    });
    // console.log(rowH);
    for(let p=0, len=colH.length; p<len; p++){
      for(let q=0, len=rowH.length; q<len; q++){
        let lowNum;
        let gridNum = grid[p][q];
        // (rowH[q]<colH[p]) ? newGrid[q].push(rowH[q]) : newGrid[q].push(rowH[q]);
        (rowH[q]<colH[p]) ? lowNum = rowH[q] : lowNum = colH[p];
        total += lowNum - gridNum;
      }
    }

    return total;
};
