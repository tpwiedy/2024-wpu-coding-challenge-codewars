//// WPU Coding Challenge 2024
// 17/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// Cara 1
// const areaOrPerimeter = function (l, w) {
//   if (l === w) return l * w;
//   else return (l + w) * 2;
// };

// Cara 2
const areaOrPerimeter = (l, w) => (l === w ? l * w : (l + w) * 2);

console.log(areaOrPerimeter(6, 10));
