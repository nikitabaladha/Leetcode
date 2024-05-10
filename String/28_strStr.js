let haystack = "sadbutsad";
let needle = "sad";
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// let haystack = "leetcode";
// let needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
console.log(strStr(haystack, needle));
