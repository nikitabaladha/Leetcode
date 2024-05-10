// Example 1:

// let s = "egg",
//   t = "add";
// Output: true
// Example 2:

// let s = "foo", let t = "bar"
// Output: false
// Example 3:

// let s = "paper", let t = "title"
// Output: true

let s = "bbaaba";
let t = "aabbcb";
// Output: false

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (sMap.has(charS) && sMap.get(charS) !== charT) ||
      (tMap.has(charT) && tMap.get(charT) !== charS)
    ) {
      return false;
    }

    sMap.set(charS, charT);
    tMap.set(charT, charS);
  }

  return true;
};

console.log(isIsomorphic(s, t));

// =============================Javacode====================================

// import java.util.HashMap;
// import java.util.Map;

// public class Solution {
//     public boolean isIsomorphic(String s, String t) {
//         if (s.length() != t.length()) {
//             return false;
//         }

//         Map<Character, Character> sMap = new HashMap<>();
//         Map<Character, Character> tMap = new HashMap<>();

//         for (int i = 0; i < s.length(); i++) {
//             char charS = s.charAt(i);
//             char charT = t.charAt(i);

//             if ((sMap.containsKey(charS) && sMap.get(charS) != charT) ||
//                 (tMap.containsKey(charT) && tMap.get(charT) != charS)) {
//                 return false;
//             }

//             sMap.put(charS, charT);
//             tMap.put(charT, charS);
//         }

//         return true;
//     }

//     public static void main(String[] args) {
//         Solution solution = new Solution();

//         // Example usage
//         String s = "bbbaaaba";
//         String t = "aaabbbba";
//         System.out.println(solution.isIsomorphic(s, t)); // Output: false
//     }
// }
