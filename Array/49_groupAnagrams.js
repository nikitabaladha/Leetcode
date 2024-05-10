// Example 1:

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function (strs) {
  // Create a map to store anagrams
  const anagramMap = new Map();

  // Iterate through each string in the array
  for (const str of strs) {
    // Sort the characters of the string to get a signature
    const signature = str.split("").sort().join("");

    // If the signature is not in the map, add it with an empty array as the value
    if (!anagramMap.has(signature)) {
      anagramMap.set(signature, []);
    }

    // Push the original string to the array associated with the signature
    anagramMap.get(signature).push(str);
  }

  // Convert the map values to an array to get the final result
  const result = Array.from(anagramMap.values());

  return result;
};

console.log(groupAnagrams(strs));

// =================================Javacode================================

// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.HashMap;
// import java.util.List;
// import java.util.Map;

// public class Solution {
//     public List<List<String>> groupAnagrams(String[] strs) {
//         // Create a map to store anagrams
//         Map<String, List<String>> anagramMap = new HashMap<>();

//         // Iterate through each string in the array
//         for (String str : strs) {
//             // Sort the characters of the string to get a signature
//             char[] charArray = str.toCharArray();
//             Arrays.sort(charArray);
//             String signature = new String(charArray);

//             // If the signature is not in the map, add it with an empty list as the value
//             if (!anagramMap.containsKey(signature)) {
//                 anagramMap.put(signature, new ArrayList<>());
//             }

//             // Add the original string to the list associated with the signature
//             anagramMap.get(signature).add(str);
//         }

//         // Convert the map values to a list to get the final result
//         List<List<String>> result = new ArrayList<>(anagramMap.values());

//         return result;
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();

//         String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
//         System.out.println(solution.groupAnagrams(strs));

//         // You can test with other examples as well
//     }
// }
