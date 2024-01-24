// WPU Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// Cara 1

// function grow(x) {
//   let result = 1;

//   for (let i = 0; i < x.length; i++) {
//     result *= x[i];
//   }

//   return result;
// }

// Cara 2
const grow = (x) => x.reduce((a, b) => a * b);

console.log(grow([1, 2, 3]));
