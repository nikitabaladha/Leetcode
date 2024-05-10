let nums = [2, 1, 2];
// Output: 5
// Explanation: You can form a triangle with three side lengths: 1, 2, and 2.

// let nums = [1,2,1,10]
// Output: 0
// Explanation:
// You cannot use the side lengths 1, 1, and 2 to form a triangle.
// You cannot use the side lengths 1, 1, and 10 to form a triangle.
// You cannot use the side lengths 1, 2, and 10 to form a triangle.
// As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.

// Triangle inequality theorem: the sum of the lengths of any two sides of a triangle is
//  always greater than the length of the third side.

var largestPerimeter = function (nums) {
  let sortedNums = nums.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] < sortedNums[i + 1] + sortedNums[i + 2]) {
      return sortedNums[i] + sortedNums[i + 1] + sortedNums[i + 2];
    }
  }

  return 0;
};
console.log(largestPerimeter(nums));
