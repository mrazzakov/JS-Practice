
var hit = ['A7', 'B7', 'C7', 'D2', 'D3', 'D4', 'D5', 'A3', 'B3'];
var hitSuccess = new Array(hit.length).fill(false);
var selected;

function checkSuccess(hitsuccess) {
  return hitsuccess === true;
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

  console.log(hitSuccess[2]);
  if(hitSuccess.every(checkSuccess) && hitSuccess.length === hit.length) {
    alert("You Won!");
  }
}
