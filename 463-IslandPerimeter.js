var islandPerimeter = function(grid) {
    const rowLength = grid[0].length;
    const colLength= grid.length;
    let steps = 0;

    grid.map((item,ind) => {
      item.map((cell,i) => {
        if(!grid[ind][i]) {
          return;
        } else {
          if (!grid[ind][i+1]) {
            steps +=1;
          }
          if (!grid[ind][i-1]) {
            steps +=1;
          }
          if ((ind+1 > grid.length-1) || !grid[ind+1][i]) {
            steps +=1;
          }
          if (ind-1 <0 || !grid[ind-1][i]) {
            steps +=1;
          }
        }
      });
    });
    return steps;
};
