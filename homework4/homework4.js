// ---task 1---
// function calcRectangleArea(width, height) {
//     let square = width * height;
//     if(!width) {
//         throw new Error("not a number");
//     }
//     else if(!height) {
//         throw new Error("not a number too");
//     }
//     return square;
// }

// try {
//     let side1 = +prompt("enter width", "");
//     let side2 = +prompt("enter hight", "");
//     let result = calcRectangleArea(side1, side2);
//     console.log(result);
// }
// catch (exception) {
//     alert(exception.message);
// }

// ---task 2---

// function checkAge(age) {
//   let accessWatch = "You can watch to the movie!";
//     if(!age) {
//         throw new Error("The field is empty! Please enter your age");
//     } else if(age < 14) {
//         throw new Error("Sorry, you are too young");
//     }
//     return accessWatch;
// }

// try {
//     let age = +prompt("Please, enter your age", "");
//     let result = checkAge(age);
//     console.log(result);
// }
// catch (exception) {
// console.log(exception)
// }



// Task 3

// class MonthException {
//     constructor (message) {
//         this.name = 'MonthException';
//     }
// }

// function showMonthName(month) {
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// if (month < 1 || month > 12) {
//     throw new MonthException ('Incorrect month number');
// }
//     return months[month - 1];
// }

//     console.log(showMonthName(5));
//     console.log(showMonthName(13));


// task 4

