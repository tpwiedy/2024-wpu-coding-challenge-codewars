// WPU Coding Challenge 2024
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// Cara 1

// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }

//   return z;
// }

// Cara 2
// function countBy(x, n) {
//   return [...Array(n)].map((el, i) => (i + 1) * x);
// }

// Cara 3
const countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x);

console.log(countBy(2, 1));
