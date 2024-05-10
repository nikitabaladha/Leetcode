// Example 1:

// let flowerbed = [1, 0, 0, 0, 1];
// let n = 1;
// Output: true

let flowerbed = [0,0,1,0,0];
let n = 1;
// Output: false

var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    let previousVal = flowerbed[i - 1];
    let nextVal = flowerbed[i + 1];
    let current = flowerbed[i];
    if (!current && !previousVal && !nextVal) {
      if (!n) return true;
      flowerbed[i] = 1;
      n = n - 1;
    }
  }

  return !n;
};
console.log(canPlaceFlowers(flowerbed, n));
