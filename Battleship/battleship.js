var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

//Main logic
while(!isSunk) {
  guess = prompt("Ready, Aim, Fire! (enter a number from 0-6):");
  if(guess < 0 || guess > 6) {
    alert("Please Enter A Valid Number!");
  } else {
    guesses++;
  }
  if(guess == location1 || guess == location2 || guess == location3) {
    hits++;
    alert("Hit!")
    if(hits > 2) {
        alert("You Sank My Battleship!");
        isSunk = true;
    }
  }
  else
    alert("Miss!")
}
alert("Number of Guesses: " + guesses);
