// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// Example 1:

let s = "loveleetcode";
let c = "e";
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
// The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.
// Example 2:

// let s = "aaab";
// let  c = "b";
// Output: [3,2,1,0]

var shortestToChar = function (S, C) {
  const charOfC = [];
  const sol = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      charOfC.push(i);
    }
  }

  for (let i = 0; i < S.length; i++) {
    const distance = Math.min(...charOfC.map((n) => Math.abs(n - i)));
    sol.push(distance);
  }

  return sol;
};

console.log(shortestToChar(s, c));

// var shortestToChar = function(s, c) {
//     let len = s.length;
//     let dist = Array(len).fill(len);

//     for(let i = 0; i < len; i++){
//         if(s.charAt(i) == c){
//             for(let j = 0; j < len; j++){
//                 dist[j] = Math.min(dist[j], Math.abs(i - j));
//             }
//         }
//     }

//     return dist;
// };
