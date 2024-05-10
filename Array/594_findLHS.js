// let nums = [1, 3, 2, 2, 5, 2, 3, 7];

// [2,4,3,3,6,3,4,8];
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

// let nums = [1, 2, 3, 4];
// Output: 2

let nums = [1, 1, 1, 1];
// Output: 0

const findLHS = function (nums) {
  let map = new Map();
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const val = map.get(nums[i]);

    if (val) map.set(nums[i], val + 1);
    else map.set(nums[i], 1);
  }

  for (let i = 0; i < nums.length; i++) {
    const nextVal = map.get(nums[i] + 1);

    if (nextVal) {
      const curVal = map.get(nums[i]);
      if (curVal + nextVal > max) max = curVal + nextVal;
    }
  }

  return max;
};
console.log(findLHS(nums));
