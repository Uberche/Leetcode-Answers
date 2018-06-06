/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(' ');

    const newArr = arr.map(item => {
      let wordArr = item.split('');
      wordArr.reverse();
      return wordArr.join('');
    });

    return newArr.join(' ');
};
