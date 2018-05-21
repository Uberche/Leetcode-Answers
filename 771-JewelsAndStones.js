let total = 0;
let jArr = J.split('');
let sArr = S.split('');
jArr.forEach((jewel) => {
    sArr.forEach((stone) => {
        if (stone === jewel) {
            total++;
        }
    })
})

return total;

// Example Input: Input: J = "aA", S = "aAAbbbb"
