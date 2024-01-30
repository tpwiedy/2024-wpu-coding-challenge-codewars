// WPU Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// Cara 1

// function DNAtoRNA(dna) {
//   let rna = '';

//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === 'T') {
//       rna += 'U';
//     } else {
//       rna += dna[i];
//     }
//   }

//   return rna;ss
// }

// Cara 2

// const DNAtoRNA = (dna) => {
//   let rna = '';
//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i] === 'T' ? 'U' : dna[i];
//   }

//   return rna;
// };

// Cara 3
// const DNAtoRNA = (dna) => {
//   return dna.split('').map((el) => (el === 'T' ? 'U' : el)).join('');
// };

// Cara 4
// const DNAtoRNA = (dna) => dna.split('').map((el) => (el === 'T' ? 'U' : el)).join('')

// Cara 5
// const DNAtoRNA = (dna) => dna.replaceAll('T', 'U');

// Cara 6
const DNAtoRNA = (dna) => dna.split('T').join('U');

console.log(DNAtoRNA('GCAT'));
