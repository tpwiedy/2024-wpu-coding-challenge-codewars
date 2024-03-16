//WPU Coding Challenge 2024
// 22/366
//  https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// Cara 1
// function removeExclamationMarks(s) {
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== '!') {
//       result += s[i];
//     }
//   }

//   return result;
// }

// Cara 2
function removeExclamationMarks(s) {
  return s.split('!').join('')
}
console.log(removeExclamationMarks('Hello World!'));
