// let nums = [1, 2, 2, 4];
// Output: [2,3]

let nums = [1, 1];
// Output: [1,2]

// let nums = [2, 2];
// Output: [2,1]

var findErrorNums = function (nums) {
  const map = {};
  for (let i = 1; i <= nums.length; i++) {
    map[i] = true;
  }

  let dup;
  let lost;

  for (let n of nums) {
    if (n in map) {
      delete map[n];
    } else {
      dup = n;
    }
  }

  lost = Number(Object.keys(map)[0]);

  return [dup, lost];
};
console.log(findErrorNums(nums));
