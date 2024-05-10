let nums = [3, 1, 2, 4];
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// let nums = [0];
// Output: [0]

var sortArrayByParity = function (nums) {
  let evenArray = [];
  let oddArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenArray.push(nums[i]);
    } else {
      oddArray.push(nums[i]);
    }
  }

  let newArray = evenArray.concat(oddArray);
  return newArray;
};
console.log(sortArrayByParity(nums));
