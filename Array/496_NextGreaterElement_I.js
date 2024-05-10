let nums1 = [4, 1, 2];

let nums2 = [1, 2, 3, 4];

// Output: [-1,2,3]

// var nextGreaterElement = function (nums1, nums2) {
//   let newArray = [];
//   for (let i = 0; i < nums2.length; i++) {
//     for (let j = 0; j < nums1.length; j++) {
//       if (nums1[i] == nums2[j]) {
//         if (nums2[j + 1] > nums2[j]) {
//           newArray.push(nums2[j + 1]);
//         }
//         if (nums2[j] == nums2.length - 1) {
//           newArray.push(-1);
//         } else newArray.push(-1);
//       }
//     }
//   }
//   return newArray;
// };
// console.log(nextGreaterElement(nums1, nums2));

// var nextGreaterElement = function(nums1, nums2) {
//   let newArray = [];

// for(let i = 0; i< nums1.length; i++) {

// const indexInNum2 = nums2.indexOf(nums1[i]);

// if(indexInNum2 < 0 || nums2.length === indexInNum2 + 1) newArray.push(-1);

// else if(nums2[indexInNum2 + 1] < nums1[i]) newArray.push(-1);

// else newArray.push(nums2[indexInNum2 + 1]);

// }

// return newArray;
// };
