let aliceSizes = [1, 1];
let bobSizes = [2, 2];
// Output: [1,2]

// let aliceSizes = [1,2];
// let bobSizes = [2,3]
// Output: [1,2]

// let aliceSizes = [2];
// let bobSizes = [1,3]
// Output: [2,3]

var fairCandySwap = function (aliceSizes, bobSizes) {
  let sumOfAliceSizes = 0;
  for (let i = 0; i < aliceSizes.length; i++) {
    sumOfAliceSizes += aliceSizes[i];
  }

  let sumOfBobSizes = 0;
  for (let i = 0; i < bobSizes.length; i++) {
    sumOfBobSizes += bobSizes[i];
  }

  const targetSum = (sumOfAliceSizes + sumOfBobSizes) / 2;

  for (let i = 0; i < aliceSizes.length; i++) {
    const targetBobSize = targetSum - (sumOfAliceSizes - aliceSizes[i]);
    if (bobSizes.includes(targetBobSize)) {
      return [aliceSizes[i], targetBobSize];
    }
  }
};

console.log(fairCandySwap(aliceSizes, bobSizes));
