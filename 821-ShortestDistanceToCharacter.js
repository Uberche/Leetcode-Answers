var shortestToChar = function(S, C) {
    let arr = [];

    for (let i=0, len=S.length; i<len; i++) {
      if (S[i]===C) {
        for (let p=0; p<len; p++) {
          const dif = Math.abs(i-p);

          if(arr[p] === undefined) arr.push(dif);
          if(arr[p]>dif) arr[p] = dif;
        }
      }
    }
    return arr;
};
