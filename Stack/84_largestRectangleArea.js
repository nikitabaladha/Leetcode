// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:
let heights = [2, 1, 5, 6, 2, 3];
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Example 2:
// let heights = [2,4]
// Output: 4

var largestRectangleArea = function (heights) {
  if (!heights || heights.length === 0) {
    return 0;
  }

  let lb = new Array(heights.length).fill(-1);
  let st = [];
  st.push(0);
  for (let i = 1; i < heights.length; i++) {
    while (st.length > 0 && heights[i] <= heights[st[st.length - 1]]) {
      st.pop();
    }
    lb[i] = st.length === 0 ? -1 : st[st.length - 1];
    st.push(i);
  }
  let rb = new Array(heights.length).fill(heights.length);
  st = [];
  st.push(heights.length - 1);
  for (let i = heights.length - 2; i >= 0; i--) {
    while (st.length > 0 && heights[i] <= heights[st[st.length - 1]]) {
      st.pop();
    }
    rb[i] = st.length === 0 ? heights.length : st[st.length - 1];
    st.push(i);
  }

  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let width = rb[i] - lb[i] - 1;
    let area = heights[i] * width;
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
};

console.log(largestRectangleArea(heights));
