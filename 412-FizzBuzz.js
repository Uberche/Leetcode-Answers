
var fizzBuzz = function(n) {
    let retA = [];
    
    for (let i=1; i<=n; i++) {
        if(i%15===0) {
            retA.push('FizzBuzz');
        } else if (i%5===0) {
            retA.push('Buzz');
        } else if(i%3===0) {
            retA.push('Fizz');
        } else {
            retA.push(i.toString());
        }
    }
    return retA;
};
