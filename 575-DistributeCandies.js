var distributeCandies = function(candies) {
    const total = candies.length;
    let candyHash = {};

    candies.forEach(num => {

      if(candyHash[num]) {
        candyHash[num] = candyHash[num] +1;
      } else {
        candyHash[num] = 1;
      }
    });

    const keyLength = Object.keys(candyHash).length;
    const cLength = candies.length/2;
    if (keyLength <= cLength) {
        return keyLength;
    } else {
        return cLength;
    }
}
