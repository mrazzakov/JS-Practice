
var hit = ['A7', 'B7', 'C7', 'D2', 'D3', 'D4', 'D5', 'A3', 'B3'];
var hitSuccess = [false];
var selected;
//Main logic
// while(!isSunk) {
//   guess = prompt("Ready, Aim, Fire! (enter a number from 0-6):");
//   if(guess < 0 || guess > 6) {
//     alert("Please Enter A Valid Number!");
//   } else {
//     guesses++;
//   }
//   if(guess == location1 || guess == location2 || guess == location3) {
//     selectButtons++;
//     alert("selectButton!")
//     if(selectButtons > 2) {
//         alert("You Sank My Battleship!");
//         isSunk = true;
//     }
//   }
//   else
//     alert("Miss!")
// }
// alert("Number of Guesses: " + guesses);
function checkSuccess(hitsuccess) {
  return hitSuccess === true;
}

function selectButton(id) {
  console.log(id);
  if(hit.includes(id)) {
    hitSuccess[hit.indexOf(id)] = true;
    console.log(hitSuccess);
    document.getElementById(id).style.backgroundColor = "#ff0000";
  }
  else {
    document.getElementById(id).style.backgroundColor = "#000000";
  }

  console.log(hit.length);
  console.log(hitSuccess.every(checkSuccess));
  if(hitSuccess.every(checkSuccess)) {
    console.log("you win");
  }
}
