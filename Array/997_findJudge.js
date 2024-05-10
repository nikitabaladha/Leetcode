// let n = 2;
// let trust = [[1, 2]];
// Output: 2

// let n = 3;
// let trust = [
//   [1, 3],
//   [2, 3],
// ];
// Output: 3;

// let n = 3;
// let trust = [
//   [1, 3],
//   [2, 3],
//   [3, 1],
// ];
// Output: -1

let n = 4;
trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];
// Output: 3;

var findJudge = function (n, trust) {
  // Step 1: Create an array to represent the trust count for each person
  let trustCount = new Array(n + 1).fill(0);

  // Step 2: Iterate through the trust array to update trust counts
  for (let i = 0; i < trust.length; i++) {
    trustCount[trust[i][0]]--; // Decrease trust count for the person who trusts
    trustCount[trust[i][1]]++; // Increase trust count for the person being trusted
  }

  // Step 3: Iterate through the trust count array to find the judge
  for (let i = 1; i <= n; i++) {
    if (trustCount[i] === n - 1) {
      return i; // This person is the judge
    }
  }

  // Step 4: If no judge is found, return -1
  return -1;
};

console.log(findJudge(n, trust));
