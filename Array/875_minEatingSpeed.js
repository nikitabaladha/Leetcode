// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:

let piles = [3, 6, 7, 11];
let h = 8;
// Output: 4
// Example 2:

// let  piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// let piles = [30,11,23,4,20], h = 6
// Output: 23

var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles); // The maximum possible eating speed

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canEatAll(piles, h, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// Helper function to check if Koko can eat all bananas with given speed
const canEatAll = function (piles, h, k) {
  let hoursNeeded = 0;

  for (let pile of piles) {
    hoursNeeded += Math.ceil(pile / k);
  }

  return hoursNeeded <= h;
};

console.log(minEatingSpeed(piles, h));

// ========================Javacode=========================
// class Solution {
//   public int minEatingSpeed(int[] piles, int h) {
//       int left = 1;
//       int right = findMax(piles); // The maximum possible eating speed

//       while (left < right) {
//           int mid = left + (right - left) / 2;

//           if (canEatAll(piles, h, mid)) {
//               right = mid;
//           } else {
//               left = mid + 1;
//           }
//       }

//       return left;
//   }

//   // Helper function to find the maximum element in an array
//   private int findMax(int[] piles) {
//       int max = Integer.MIN_VALUE;
//       for (int pile : piles) {
//           max = Math.max(max, pile);
//       }
//       return max;
//   }

//   // Helper function to check if Koko can eat all bananas with given speed
//   private boolean canEatAll(int[] piles, int h, int k) {
//       int hoursNeeded = 0;

//       for (int pile : piles) {
//           hoursNeeded += Math.ceil((double) pile / k);
//       }

//       return hoursNeeded <= h;
//   }
// }
