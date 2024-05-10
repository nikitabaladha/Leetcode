let strs = ["flower", "flow", "flight"];
// Output: "fl"

// let strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let output = "";
  const firstString = strs[0];

  for (let i = 0; i <= firstString.length; i++) {
    let prefix;
    if (i === 0) prefix = firstString[i];
    else prefix = firstString.slice(0, i);

    for (let j = 0; j < strs.length; j++) {
      if (strs[j].indexOf(prefix) !== 0) {
        return output;
      }
    }
    output = prefix;
  }
  return output;
};
console.log(longestCommonPrefix(strs));

// ============================Better implementation=====================================
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  const result = [];
  const firstStr = [...strs[0]];

  for (const letter of firstStr) {
    if (strs.every((str) => str.startsWith(letter))) {
      result.push(letter);
      strs = strs.map((str) => str.slice(1)); // Use slice to remove the matched prefix
    } else {
      break; // Exit the loop when a mismatch is found
    }
  }

  return result.join("");
};

// =================================Javacode================================================

// public class Solution {
//   // The main method to find the longest common prefix
//   public String longestCommonPrefix(String[] strs) {
//       // Check if the input array is empty
//       if (strs.length == 0) {
//           return "";
//       }

//       // StringBuilder is used to efficiently build strings
//       StringBuilder result = new StringBuilder();

//       // Convert the first string in the array to a character array
//       char[] firstStr = strs[0].toCharArray();

//       // Iterate through each character of the first string
//       for (char letter : firstStr) {
//           // Check if the current letter is a common prefix for all strings
//           if (startsWithAll(strs, letter)) {
//               // If it is, append the letter to the result
//               result.append(letter);

//               // Update the array of strings by removing the matched prefix
//               strs = removePrefix(strs);
//           } else {
//               // If a mismatch is found, exit the loop
//               break;
//           }
//       }

//       // Convert the StringBuilder to a String and return the result
//       return result.toString();
//   }

//   // Helper method to check if a given letter is a common prefix for all strings
//   private boolean startsWithAll(String[] strs, char letter) {
//       for (String str : strs) {
//           // Check if each string starts with the current letter
//           if (!str.startsWith(String.valueOf(letter))) {
//               return false;
//           }
//       }
//       // If all strings start with the letter, return true
//       return true;
//   }

//   // Helper method to remove the matched prefix from all strings
//   private String[] removePrefix(String[] strs) {
//       for (int i = 0; i < strs.length; i++) {
//           // Remove the first character from each string
//           strs[i] = strs[i].substring(1);
//       }
//       // Return the updated array of strings
//       return strs;
//   }

//   // Example usage in the main method
//   public static void main(String[] args) {
//       // Example input
//       String[] strings = {"flower", "flow", "flight"};

//       // Create an instance of the Solution class
//       Solution solution = new Solution();

//       // Call the longestCommonPrefix method with the example input
//       String result = solution.longestCommonPrefix(strings);

//       // Print the result
//       System.out.println(result); // Output: "fl"
//   }
// }
