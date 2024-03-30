// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

let s = "Let's take LeetCode contest";
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// let s = "Mr Ding";
// Output: "rM gniD"

var reverseWords = function (s) {
  let words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ").toString();
};
console.log(reverseWords(s));
