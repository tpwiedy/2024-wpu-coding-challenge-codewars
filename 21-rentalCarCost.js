//WPU Coding Challenge 2024
// 21/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// Cara 1
// function rentalCarCost(d) {
//   let diskon = 0;
// if (d >= 3) {
//   diskon = 20;
// }
// if (d >= 7) {
//   diskon = 50;
// }
// return d * 40 - diskon;
// }

// Cara 2
// const rentalCarCost = (d) => {
//   let diskon = 0;
//   if (d >= 3) {
//     diskon = 20;
//   }
//   if (d >= 7) {
//     diskon = 50;
//   }
//   return d * 40 - diskon;
// };

// Cara 3
const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);

console.log(rentalCarCost(2));
console.log(rentalCarCost(4));
console.log(rentalCarCost(10));
