//// WPU Coding Challenge 2024
// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// Cara 1

// function sumArray(array) {
//   if (array == null || array.length <= 2) return 0;

//   const sorted = array.sort((a, b) => a - b);
//   let result = 0;
//   for (i = 1; i < sorted.length - 1; i++) {
//     result += sorted[i];
//   }
//   return result;
// }

// Cara 2
// function sumArray(array) {
//   if (array == null || array.length <= 2) return 0;

//   return array
//     .sort((a, b) => a - b) //diurutakan dari yang terkecil sampai terbesar
//     .slice(1, -1) //eliminasi array index pertama (1) dan index terahir(-1)
//     .reduce((acc, curr) => acc + curr); //mengakumulasikan sisa array
// }

// Cara 3
// function sumArray(array) {
//   return array == null || array.length <= 2
//     ? 0
//     : array
//         .sort((a, b) => a - b) //diurutakan dari yang terkecil sampai terbesar
//         .slice(1, -1) //eliminasi array index pertama (1) dan index terahir(-1)
//         .reduce((acc, curr) => acc + curr); //mengakumulasikan sisa array
// }

// Cara 4
// const sumArray = (array) =>
//   array === null || array.length <= 2
//     ? 0
//     : array
//         .sort((a, b) => a - b) //diurutakan dari yang terkecil sampai terbesar
//         .slice(1, -1) //eliminasi array index pertama (1) dan index terahir(-1)
//         .reduce((acc, curr) => acc + curr); //mengakumulasikan sisa array

// Cara 5

const sumArray = (array) =>
  array //apabila array terdapat nilainya
  ? array //masuk ke pengecekan
        .sort((a, b) => a - b) //diurutakan dari yang terkecil sampai terbesar
        .slice(1, -1) //eliminasi array index pertama (1) dan index terahir(-1)
        .reduce((acc, curr) => acc + curr) //mengakumulasikan sisa array
        : 0; //Kalau tidak ada nilainya maka kembalikan 0

console.log(sumArray([6, 2, 1, 8, 10]));
