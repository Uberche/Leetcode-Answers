"use strict";

const words = ["gin", "zen", "gig", "msg"]
const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const alph =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const morseObj = morse.reduce(function(morseObj, field, index) {
    morseObj[alph[index]] = field;
    return morseObj;
}, {});

let morseArr; 

morseArr = words.map((word, i) => {
  let wArr = word.split('');
  let code = []; 
  wArr.forEach((lett) => {
    for (var key in morseObj) {
      if (lett === key) {
        code.push(morseObj[key]);
      }
    }
  })
  return code;
})

let wordArr = [];  
let arrJoined = [];
for (var i = 0, len = morseArr.length; i < len; i++) {
  arrJoined.push(morseArr[i].join(''));
}

arrJoined.filter((word) => {
  if (!wordArr.includes(word)) {
    wordArr.push(word);
  }
}); 

console.log(wordArr.length);
