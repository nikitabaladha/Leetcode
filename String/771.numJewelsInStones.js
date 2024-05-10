let jewels = "aA";
let stones = "aAAbbbb";
// Output: 3

// let jewels = "z";
// let stones = "ZZ";
// Output: 0

// let jewels = "ebd";
// let stones = "bbb";
// Output:3;

var numJewelsInStones = function (jewels, stones) {
  var count = 0;
  for (var i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) count++;
  }
  return count;
};

// -----------------------------------------------------------
var numJewelsInStones = function (jewels, stones) {
  const set = new Set(jewels.split(""));
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) {
      //   console.log(stonesArr, jewels[i]);
      count++;
    }
  }
  return count;
};
console.log(numJewelsInStones(jewels, stones));
