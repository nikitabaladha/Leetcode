let deck = [1, 2, 3, 4, 4, 3, 2, 1];
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

// let deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.

var hasGroupsSizeX = function (deck) {
  const counter = {};

  // Count occurrences of each card in the deck
  deck.forEach((ele) => {
    if (counter[ele]) {
      counter[ele] += 1;
    } else {
      counter[ele] = 1;
    }
  });

  // Find the greatest common divisor
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Initialize with the count of the first card
  let result = counter[Object.keys(counter)[0]];

  // Iterate over the counts of each card and find the GCD
  for (let key in counter) {
    result = gcd(result, counter[key]);
  }

  // If the GCD is greater than or equal to 2, return true; otherwise, return false
  return result >= 2;
};

console.log(hasGroupsSizeX(deck));
