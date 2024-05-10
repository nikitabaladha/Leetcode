let s = "aba";
// Output: true

// let s = "abca";
// Output: true
// Explanation: You could delete the character 'c'.

// let s = "abc";
// Output: false

var validPalindrome = function (s) {
  let isPal = function (s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return isPal(s, left + 1, right) || isPal(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};

console.log(validPalindrome(s));
