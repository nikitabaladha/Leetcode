// let score = [5, 4, 3, 2, 1];
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
// Example 2:

let score = [10, 3, 8, 9, 4];
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

var findRelativeRanks = function (score) {
  let sorted = Array.from(score).sort((a, b) => b - a);
  console.log(sorted);
  return score.map((n, index) => {
    if (n === sorted[0]) return "Gold Medal";
    if (n === sorted[1]) return "Silver Medal";
    if (n === sorted[2]) return "Bronze Medal";

    return String(sorted.indexOf(n) + 1);
  });
};
console.log(findRelativeRanks(score));
