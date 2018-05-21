    let newArr = [];
    A.forEach((item, i) => {
        item.reverse();
        newArr[i] = item.map((bi) => {
            return (bi) ? 0 : 1;
        })
    })
    return newArr;
    
    //Example Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
