let s = "abc";
let t = "ahbgdc";
// Output: true

// s = "axc";
// let t = "ahbgdc";
// Output: false

var isSubsequence = function (s, t) {
  let i = 0;
  if (s === t) return true;
  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) i++;
    if (i === s.length) return true;
  }
  return false;
};
console.log(isSubsequence(s, t));
