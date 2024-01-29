// WPU Coding Challenge 2024
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

//  Cara 1
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   // TODO
//   if (distanceToPump / mpg <= fuelLeft) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Cara 2
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / mpg <= fuelLeft;
// }

// Cara 3
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump / mpg <= fuelLeft;

console.log(zeroFuel(50, 25, 2));

// 25 miles per galons
// nearest 50 miles
// 2 galons left
