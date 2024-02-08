//// WPU Coding Challenge 2024
// 12/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// Cara 1
// function arrayPlusArray(arr1, arr2) {
//   let total = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     total += arr1[i];
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     total += arr2[i];
//   }
//   return total;
// }

// Cara 2
/*
arguments sebagai array iterator.
arguments[0] mengambil parameter pertama yaitu arr1
*/
// function arrayPlusArray(arr1, arr2) {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       total += arguments[i][j];
//     }
//   }
//   return total;
// }

// Cara 3
/*
Menggunakan function reduce(untuk menghasilkan nilai dari sebuah array)
Didalam reduce terdapat 2 parameter yaitu accumulator (acc) dan current(curr)
- accumulator  => adalah parameter pertama dari fungsi callback, ini diperlukan reduce sebagai inisial dari nilai reduce yang akan ditampilkan. paratemer ini juga sebagai akumulasi nilai-nilai setiap element array.
- currentValue => adalah nilai tiap element array sumber atau nilai aray yang akan diberlakukan kedalam fungsi reduce
- initialValue => dapat digunakan sebagai parameter pertama pada fungsi callback, jika intialValue tidak di deklarasikan, maka secara otomatis reduce akan mengambil element pertama pada array kemudian menjadikannya sebagai initial value

https://iqbaliqbaliqbal931.medium.com/penggunaan-reduce-pada-javascript-f43ad01fbda
*/
// function arrayPlusArray(arr1, arr2) {
//   return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
// }


// Cara 4
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
