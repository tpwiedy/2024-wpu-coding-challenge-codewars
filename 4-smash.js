// WPU Coding Challenge 2024
// 4/366
//https://www.codewars.com/kata/53dc23c68a0c93699800041d

// Cara 1
// function smash(words) {
//   return words.join(' ');
// }

// Cara 2
// const smash = (words) => words.join(' ');
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

// Cara 3
function smash(words) {
  let result = '';
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i != words.length - 1) result += ' ';
  }
  return result;
}

console.log(smash(['hello', 'world', 'this', 'is', 'great']));
