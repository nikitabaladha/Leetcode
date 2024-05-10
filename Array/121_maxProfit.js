"strict";
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

let prices = [7, 1, 5, 3, 6, 4];
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// let prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  let buyPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) buyPrice = prices[i];
    else {
      let currentProfit = prices[i] - buyPrice;
      if (currentProfit > profit) profit = currentProfit;
    }
  }
  return profit;
};
console.log(maxProfit(prices));

// var maxProfit = function (prices) {
//   // At the beginning, the minimum price is the first price
//   let buyPrice = prices[0]; // 1

//   // At the beginning, the minimum profit is zero
//   let profit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     // If the current price is less, update the buyPrice
//     if (prices[i] < buyPrice) {
//       buyPrice = prices[i];
//     } else {
//       // Else check if we can get a better profit
//       const currentProfit = prices[i] - buyPrice;
//       profit = Math.max(currentProfit, profit);
//       //profit = 5
//     }
//   }

//   return profit;
// };
// console.log(maxProfit(prices));

// =================================================================
// var maxProfit = function (prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else if (prices[i] - minPrice > maxProfit) {
//       maxProfit = prices[i] - minPrice;
//     }
//   }

//   return maxProfit;
// };

// console.log(maxProfit(prices));

// ============================================Javacode=================================================

// class Solution {

//     public int maxProfit(int[] prices) {
//         int minPrice = Integer.MAX_VALUE;
//         int maxProfit = 0;

//         for (int i = 0; i < prices.length; i++) {
//             if (prices[i] < minPrice) {
//                 minPrice = prices[i];
//             } else if (prices[i] - minPrice > maxProfit) {
//                 maxProfit = prices[i] - minPrice;
//             }
//         }

//         return maxProfit;
//     }
// }
