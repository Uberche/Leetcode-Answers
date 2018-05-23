// 657
let moves = "UDLRRRUU"
let inputArr = moves.toLowerCase().split('');
let hash = {
  u: 1,
  d: -1,
  l: -1,
  r: 1
};
let vert = 0;
let horz = 0;

inputArr.forEach((dir) => {
  switch (dir) {
    case "u":
      vert += hash.u;
      break;
    case "d":
      vert += hash.d;
      break;
    case "l":
      horz += hash.l;
      break;
    case "r":
      horz += hash.r;
      break;
  }
});

if (vert === 0 && horz === 0) ? return true: return false;
