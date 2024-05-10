// There are n cars going to the same destination along a one-lane road. The destination is target miles away.

// You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

// A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

// A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

// If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

// Return the number of car fleets that will arrive at the destination.

// Example 1:

let target = 12;
let position = [10, 8, 0, 5, 3];
let speed = [2, 4, 1, 1, 3];
// Output: 3
// Explanation:
// The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
// The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
// The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
// Note that no other cars meet these fleets before the destination, so the answer is 3.
// Example 2:

// let target = 10;
// let position = [3];
// let speed = [3];
// Output: 1
// Explanation: There is only one car, hence there is only one fleet.
// Example 3:

// let target = 100;
// let position = [0,2,4];
// let speed = [4, 2, 1];
// Output: 1
// Explanation:
// The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
// Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.

var carFleet = function (target, position, speed) {
  const n = position.length;
  const cars = [];

  for (let i = 0; i < n; i++) {
    cars.push({
      position: position[i],
      timeToReach: (target - position[i]) / speed[i],
    });
  }

  cars.sort((a, b) => b.position - a.position); // Sort by starting position in descending order
  //   console.log(cars);
  let fleets = 0;
  let currFleetTime = 0;

  for (let i = 0; i < n; i++) {
    if (cars[i].timeToReach > currFleetTime) {
      // This car forms a new fleet
      fleets++;
      currFleetTime = cars[i].timeToReach;
    }
  }

  return fleets;
};

console.log(carFleet(target, position, speed));

// ====================================In ascending order=============================

// var carFleet = function(target, position, speed) {
//     const n = position.length;
//     const cars = [];

//     for (let i = 0; i < n; i++) {
//         cars.push({ position: position[i], timeToReach: (target - position[i]) / speed[i] });
//     }

//     cars.sort((a, b) => a.position - b.position); // Sort by starting position in ascending order

//     let fleets = 0;
//     let currFleetTime = 0;

//     for (let i = n - 1; i >= 0; i--) {
//         if (cars[i].timeToReach > currFleetTime) {
//             // This car forms a new fleet
//             fleets++;
//             currFleetTime = cars[i].timeToReach;
//         }
//     }

//     return fleets;
// };

// console.log(carFleet(target, position, speed));
