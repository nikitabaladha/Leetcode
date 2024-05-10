// let image = [
//   [1, 1, 0],
//   [1, 0, 1],
//   [0, 0, 0],
// ];
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

let image = [
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
];
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i] = image[i].reverse();

    for (let j = 0; j < image[i].length; j++) {
      image[i][j] = 1 - image[i][j];
    }
  }

  return image;
};
console.log(flipAndInvertImage(image));

// var flipAndInvertImage = function(image) {
//     return image.map(item => item.reverse().map(num => num === 0 ? 1: 0))

// };
