// -task 1-
// 1)
// let zminy = document.getElementById("test").innerHTML = "Last";
// 2)
// let zminy2 = document.getElementsByTagName("div")[0].innerHTML = "Last"; 

// -task 2-

// let dog = document.getElementsByClassName("image")[0].src ="cat.jpeg"

// -task 3-
// let add_text = document.querySelectorAll("#text p");
// for (let i =0; i < add_text.length; i++) {
//   console.log("Selector text " + i + ": " + add_text[i].innerHTML);
// }


// -task 4-

// -task 5-
let change_h1 = document.getElementsByTagName("h1");
for (let i=0; i<change_h1.length; i++) {
change_h1[i].style.fontSize = '40px';
change_h1[i].style.backgroundColor = '#68de7c';
  }

 document.getElementById('myDiv').children[0].style.fontWeight = "700";
 document.getElementById('myDiv').children[1].style.color = "red";
 document.getElementById('myDiv').children[2].style.textDecoration = "underline";
 document.getElementById('myDiv').children[3].style.fontStyle = "italic";
 document.getElementById('myList').style.listStyle = "none";
 document.getElementById('myList').style.display = "inline-flex";

// -task 6-
let message1 = prompt("please, enter your first message");
let message2 = prompt("please, enter your first message");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
input1.value = message1;
input2.value = message2;

let input1_change = input1.value;
let input2_change = input2.value;
input1.value = input2_change;
input2.value = input1_change;


// -task 7-
