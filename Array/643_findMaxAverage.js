let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// let nums = [5]:
// let k = 1;
// Output: 5.00000

var findMaxAverage = function (nums, k) {
  // init sum
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  // slide window
  let maxSum = sum;
  let startIndex = 0;
  let endIndex = k;
  while (endIndex < nums.length) {
    sum -= nums[startIndex];
    startIndex++;

    sum += nums[endIndex];
    endIndex++;

    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};
console.log(findMaxAverage(nums, k));
