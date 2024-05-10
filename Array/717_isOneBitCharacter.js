// let bits = [1, 0, 0];
// Output: true
// Explanation: The only way to decode it is two-bit character and one-bit character.
// So the last character is one-bit character.

// let bits = [1, 1, 1, 0];
// Output: false
// Explanation: The only way to decode it is two-bit character and two-bit character.
// So the last character is not one-bit character.

// let bits = [0];
// Output: true

let bits = [1, 1, 0];
// Output: true

var isOneBitCharacter = function (bits) {
  let count = 0;
  for (let i = bits.length - 2; i >= 0; i--) {
    if (bits[i] === 0) break;
    count++;
  }
  return (count & 1) === 0;
};
console.log(isOneBitCharacter(bits));
