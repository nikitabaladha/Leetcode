let s = "ababab";
// Output:

// var repeatedSubstringPattern = function (s) {
//   if (s.length <= 3) return false;
//   console.log(s.length);
//   let start = 0;
//   let end = s.length;
//   //   if (i % 3 === 0 && i % 5 === 0)
//   let middle = Math.floor((start + end) / 2);
//   let part1 = [];
//   let part2 = [];
//   if (s.length % 2 === 0 || s.length % 3 === 0) {
//     for (let i = start; i < middle; i++) {
//       part1.push(s[i]);
//     }
//     for (let i = middle; i < end; i++) {
//       part2.push(s[i]);
//     }
//   }

//   return JSON.stringify(part1) == JSON.stringify(part2);
// };

// console.log(repeatedSubstringPattern(s));

// var repeatedSubstringPattern = function (s, count) {
//     if(s.length === 2) return s[0] === s[1];
//   if (count === undefined) count = Math.round(s.length / 2);
//   if (count <= 0) return false;

//   let str = "";
//   let finalString = "";

//   for (let i = 0; i < s.length; i++) {
//     if (s.length - 1 === i) {
//       str += s[i];
//       if (finalString === str) return true;
//       if (count > 0) return repeatedSubstringPattern(s, count - 1);
//       else return false;
//     }

//     if (str.length !== count) {
//       str += s[i];
//     } else if (!finalString) {
//       finalString = str;
//       str = "";
//       str = s[i];
//     } else if(finalString && finalString == str) str = s[i];
//   }
// };

// console.log(repeatedSubstringPattern(s));

var repeatedSubstringPattern = function (s) {
  return s.repeat(2).slice(1, -1).includes(s);
};
console.log(repeatedSubstringPattern(s));
