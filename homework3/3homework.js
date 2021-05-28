// - task 1 -

// let masyv = [2, 3, 4, 5];
// let res = 1;
// for (let i = 0; i < masyv.length; i++) {
//     res *= masyv[i];
// }
// console.log(res);
// 
// res = 1;
// let count = 0;
// while (count < masyv.length) {
//     res *= masyv[count];
//     count++
// }
// console.log(res);
// 
// 
//  - task 2 -

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0 ) {
//         console.log(i + ' is even');
//     }
//     else {
//     console.log(i + ' is odd');
// }
// }

  //  - task 3 -

// function randArray(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * 500); 
//   }
//   console.log (randArray());


  //  - task 4 -
//   function raiseToDegree(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
//     return result;
//   }

//   let x = prompt('введіть число?', '');
//   let n = prompt('введіть степінь числа', '');
  
//   if (n < 1) {
//     alert(`Степінь ${n} не підтримується, введіть будь ласка натуральне число`);
//   } 
//   else {
//     alert( raiseToDegree(x, n) );
//    } 

// - task 5 -

// function findMin() {
// 	for (let i = 0; i < arguments.length; i++) {
//       if (arguments[i] < 0){
// 				console.log(arguments[i]);
// }
// }
// }
// findMin(12, 14, 4, -4, 0.2);
  
// - task 6 -

// function findUnique (arr) {
// 	let result = [];
//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
// 		else {
// 			return false;
// 		}
//   }
//   return true;
// }
// let strings = [1, 2, 3, 5, 3];
// console.log( findUnique(strings) );
// let strings2 = [1, 2, 3, 5, 11];
// console.log( findUnique(strings2) );

// - task 7 -

// function lastElem(arr, len = 1) {
//   return arr.slice(-len);
// }

// console.log(lastElem([3, 4, 10, -5]));     
// console.log(lastElem([3, 4, 10, -5], 2));   
// console.log(lastElem([3, 4, 10, -5], 8));   


// - task 8 -

// function upperString(str) {
// 	if (!str) return str;
// 	return str[0].toUpperCase() + str.slice(1);
// }

// const str = 'i love java script';
// let arr = str.split(' ');
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
// 	arr[i] = upperString(arr[i]);
// }
// let new_str = arr.join (' ');
//   console.log(new_str);

