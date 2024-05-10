let nums = [4, 2, 5, 7];
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// let nums = [2,3];
// Output: [2,3]

var sortArrayByParityII = function (nums) {
  let evenArray = [];
  let oddArray = [];
  let acceptedArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenArray.push(nums[i]);
    } else {
      oddArray.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      acceptedArray.push(evenArray.pop());
    } else {
      acceptedArray.push(oddArray.pop());
    }
  }

  return acceptedArray;
};

console.log(sortArrayByParityII(nums));
