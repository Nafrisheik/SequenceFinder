var seq = [];
var test = [];
var score =0;
function disablequads(){
  var n = document.getElementsByClassName('circle')
for(var i=0;i<n.length;i++){
   n[i].disabled = true;
}
}
disablequads();
function clickme(number) {
  score+=100;
  test.push(parseInt(number));
  if (seq[test.length - 1] != test[test.length - 1]) {
    alert("game over, Your score is",score);
    test = [];
    seq = [];
    console.log(score);
    document.getElementById("btn").disabled = false;
    return;
  }
  if (seq.length == test.length) {
    if (JSON.stringify(seq) == JSON.stringify(test)) {
      console.log(seq, test);
      test = [];
      startgame();
    } else {
      alert("game over");
      test = [];
      seq = [];
      document.getElementById("btn").disabled = false;
    }
  }
}

function startgame() {
  document.getElementById("btn").disabled = true;
  var newnumber = randomRange();
  seq.push(newnumber);
  document.getElementById(`${newnumber}`).style.backgroundColor = "yellow";
  // setTimeout(function () {
  //   document.getElementById(`${newnumber}`).style.backgroundColor = "yellow";
  // }, 5000);
  // document.getElementById(`${newnumber}`).style.backgroundColor = "yellow";
  setTimeout(function () {
    document.getElementById(`${newnumber}`).style.backgroundColor = "cyan";
  }, 1000);
}

function randomRange() {
  return Math.floor(Math.random() * 4 + 1);
}

function reset() {
  seq = [];
  test = [];
  document.getElementById("btn").disabled = false;
}

// document.getElementById("node1").onclick = function () {
//   test.push(1);
//   console.log("node1");
//   if (JSON.stringify(test) == JSON.stringify(seq)) {
//     startgame();
//   } else {
//     prompt("Game over");
//     location.reload();
//   }
// };
// document.getElementById("node2").onclick = function () {
//   test.push(1);
//   if (JSON.stringify(test) == JSON.stringify(seq)) {
//     startgame();
//   } else {
//     prompt("Game over");
//     location.reload();
//   }
// };
// document.getElementById("node3").onclick = function () {
//   test.push(1);
//   if (JSON.stringify(test) == JSON.stringify(seq)) {
//     startgame();
//   } else {
//     prompt("Game over");
//     location.reload();
//   }
// };
// document.getElementById("node4").onclick = function () {
//   test.push(1);
//   if (JSON.stringify(test) == JSON.stringify(seq)) {
//     startgame();
//   } else {
//     prompt("Game over");
//     location.reload();
//   }
// };
