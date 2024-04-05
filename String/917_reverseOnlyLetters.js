// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Example 1:

let s = "ab-cd";
// Output: "dc-ba"
// Example 2:

// let s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// let s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

var reverseOnlyLetters = function (s) {
  const isLetter = (char) => /[a-zA-Z]/.test(char);

  let arr = s.split("");

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (isLetter(arr[start]) && isLetter(arr[end])) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start++;
      end--;
    } else if (!isLetter(arr[start])) {
      start++;
    } else if (!isLetter(arr[end])) {
      end--;
    }
  }
  return arr.join("");
};

console.log(reverseOnlyLetters(s));
