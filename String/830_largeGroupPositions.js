let s = "abbxxxxzzy";
// Output: [[3,6]]
// Explanation: "xxxx" is the only large group with start index 3 and end index 6.

// let  s = "abc"
// Output: []
// Explanation: We have groups "a", "b", and "c", none of which are large groups.

// let s = "abcdddeeeeaabbbcd";
// Output: [[3,5],[6,9],[12,14]]
// Explanation: The large groups are "ddd", "eeee", and "bbb".

var largeGroupPositions = function (s) {
  let result = [];
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      if (i - start >= 2) result.push([start, i]);
      start = i + 1;
    }
  }

  return result;
};

console.log(largeGroupPositions(s));

// var largeGroupPositions = function (s) {
//   let result = [];
//   let i = 0;

//   while (i < s.length) {
//     let start = i;

//     while (i < s.length && s[i] === s[start]) {
//       i++;
//     }

//     if (i - start >= 3) {
//       result.push([start, i - 1]);
//     }
//   }

//   return result;
// };
