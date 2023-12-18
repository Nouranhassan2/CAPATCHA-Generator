var span = document.querySelector(".text");
var inputEl = document.querySelector("input");
var result = "";

function getCapatchaAgain() {
  var chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];
  for (var i = 0; i <= 6; i++) {
    result += chars[Math.trunc(Math.random() * chars.length)];
    span.innerHTML = result;
  }
}
function checkCapatcha() {
  var inputValue = inputEl.value;
  if (inputValue === result) {
    window.alert("congratulation");
  } else {
    window.alert("try again");
  }
}
