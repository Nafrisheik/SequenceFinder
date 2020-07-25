var seq = [];
var test = [];

function clickme(number) {
  test.push(parseInt(number));
  //   console.log("node1");
  console.log(seq, test);
  if (JSON.stringify(test) == JSON.stringify(seq)) {
    startgame();
  } else {
    alert("Game over");
    location.reload();
  }
}

function startgame() {
  var newnumber = randomRange();
  console.log(newnumber);
  seq.push(newnumber);

  document.getElementById(`${newnumber}`).style.backgroundColor = "yellow";
  setTimeout(function () {
    document.getElementById(`${newnumber}`).style.backgroundColor = "cyan";
  }, 2000);
}

function randomRange() {
  return Math.floor(Math.random() * 4 + 1);
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
