var square1DOMElement = document.getElementById("square1");
var square2DOMElement = document.getElementById("square2");
var square3DOMElement = document.getElementById("square3");
var square4DOMElement = document.getElementById("square4");
var square5DOMElement = document.getElementById("square5");
var square6DOMElement = document.getElementById("square6");
var square7DOMElement = document.getElementById("square7");
var square8DOMElement = document.getElementById("square8");
var square9DOMElement = document.getElementById("square9");
var winTextDOMElement = document.getElementById("win-text");

var switchPlayer = false;
var winner = false;

square1DOMElement.addEventListener("click", function(){
  var xPosition = 0;
  var yPosition = 0;
  var symbol = document.createElement("h1");
  if (switchPlayer === false) {
    var player = "X";
    symbol.textContent = player;
    play(player, xPosition, yPosition);
    switchPlayer = true;
    square1DOMElement.appendChild(symbol);
    square1DOMElement.disabled = true;
    square1DOMElement.style.pointerEvents = 'none';
  }else {
    var player = "O";
    symbol.textContent = player;
    play(player, xPosition, yPosition);
    switchPlayer = false;
    square1DOMElement.appendChild(symbol);
    square1DOMElement.style.pointerEvents = 'none';
  }
  // if there is a winner, display text
  if (winner === true) {
    var winText = document.createElement("h1");
    winText.textContent = "Player " + player + " Wins!!";
    winTextDOMElement.appendChild(winText);
  }
})

square2DOMElement.addEventListener("click", function(){
  var xPosition = 0;
  var yPosition = 1;
  var symbol = document.createElement("h1");
  if (switchPlayer === false) {
    var player = "X";
    symbol.textContent = player;
    // call function play
    play(player, xPosition, yPosition);
    switchPlayer = true;
    square2DOMElement.appendChild(symbol);
    square2DOMElement.style.pointerEvents = 'none';
  }else {
    var player = "O";
    symbol.textContent = player;
    play(player, xPosition, yPosition);
    switchPlayer = false;
    square2DOMElement.appendChild(symbol);
    square2DOMElement.style.pointerEvents = 'none';
  }
  // if there is a winner, display text
  if (winner === true) {
    var winText = document.createElement("h1");
    winText.textContent = "Player " + player + " Wins!!";
    winTextDOMElement.appendChild(winText);
  }
})

square3DOMElement.addEventListener("click", function(){
  var xPosition = 0;
  var yPosition = 2;
  var symbol = document.createElement("h1");
  if (switchPlayer === false) {
    var player = "X";
    symbol.textContent = player;
    // call function play
    play(player, xPosition, yPosition);
    switchPlayer = true;
    square3DOMElement.appendChild(symbol);
    square3DOMElement.style.pointerEvents = 'none';
  }else {
    var player = "O";
    symbol.textContent = player;
    play(player, xPosition, yPosition);
    switchPlayer = false;
    square3DOMElement.appendChild(symbol);
    square3DOMElement.style.pointerEvents = 'none';
  }
  // if there is a winner, display text
  if (winner === true) {
    var winText = document.createElement("h1");
    winText.textContent = "Player " + player + " Wins!!";
    winTextDOMElement.appendChild(winText);
  }
})

square4DOMElement.addEventListener("click", function(){
  var xPosition = 1;
  var yPosition = 0;
  var symbol = document.createElement("h1");
  if (switchPlayer === false) {
    var player = "X";
    symbol.textContent = player;
    // call function play
    play(player, xPosition, yPosition);
    switchPlayer = true;
    square4DOMElement.appendChild(symbol);
    square4DOMElement.style.pointerEvents = 'none';
  }else {
    var player = "O";
    symbol.textContent = player;
    play(player, xPosition, yPosition);
    switchPlayer = false;
    square4DOMElement.appendChild(symbol);
    square4DOMElement.style.pointerEvents = 'none';
  }
  // if there is a winner, display text
  if (winner === true) {
    var winText = document.createElement("h1");
    winText.textContent = "Player " + player + " Wins!!";
    winTextDOMElement.appendChild(winText);
  }
})

square5DOMElement.addEventListener("click", function(){
  var xPosition = 1;
  var yPosition = 1;
  var symbol = document.createElement("h1");
  if (switchPlayer === false) {
    var player = "X";
    symbol.textContent = player;
    // call function play
    play(player, xPosition, yPosition);
    switchPlayer = true;
    square5DOMElement.appendChild(symbol);
    square5DOMElement.style.pointerEvents = 'none';
  }else {
    var player = "O";
    symbol.textContent = player;
    play(player, xPosition, yPosition);
    switchPlayer = false;
    square5DOMElement.appendChild(symbol);
    square5DOMElement.style.pointerEvents = 'none';
  }
  // if there is a winner, display text
  if (winner === true) {
    var winText = document.createElement("h1");
    winText.textContent = "Player " + player + " Wins!!";
    winTextDOMElement.appendChild(winText);
  }
})

square6DOMElement.addEventListener("click", function(){
  var xPosition = 1;
  var yPosition = 2;
  var symbol = document.createElement("h1");
  if (switchPlayer === false) {
    var player = "X";
    symbol.textContent = player;
    // call function play
    play(player, xPosition, yPosition);
    switchPlayer = true;
    square6DOMElement.appendChild(symbol);
    square6DOMElement.style.pointerEvents = 'none';
  }else {
    var player = "O";
    symbol.textContent = player;
    play(player, xPosition, yPosition);
    switchPlayer = false;
    square6DOMElement.appendChild(symbol);
    square6DOMElement.style.pointerEvents = 'none';
  }
  // if there is a winner, display text
  if (winner === true) {
    var winText = document.createElement("h1");
    winText.textContent = "Player " + player + " Wins!!";
    winTextDOMElement.appendChild(winText);
  }
})

square7DOMElement.addEventListener("click", function(){
  var xPosition = 2;
  var yPosition = 0;
  var symbol = document.createElement("h1");
  if (switchPlayer === false) {
    var player = "X";
    symbol.textContent = player;
    // call function play
    play(player, xPosition, yPosition);
    switchPlayer = true;
    square7DOMElement.appendChild(symbol);
    square7DOMElement.style.pointerEvents = 'none';
  }else {
    var player = "O";
    symbol.textContent = player;
    play(player, xPosition, yPosition);
    switchPlayer = false;
    square7DOMElement.appendChild(symbol);
    square7DOMElement.style.pointerEvents = 'none';
  }
  // if there is a winner, display text
  if (winner === true) {
    var winText = document.createElement("h1");
    winText.textContent = "Player " + player + " Wins!!";
    winTextDOMElement.appendChild(winText);
  }
})

square8DOMElement.addEventListener("click", function(){
  var xPosition = 2;
  var yPosition = 1;
  var symbol = document.createElement("h1");
  if (switchPlayer === false) {
    var player = "X";
    symbol.textContent = player;
    // call function play
    play(player, xPosition, yPosition);
    switchPlayer = true;
    square8DOMElement.appendChild(symbol);
    square8DOMElement.style.pointerEvents = 'none';
  }else {
    var player = "O";
    symbol.textContent = player;
    play(player, xPosition, yPosition);
    switchPlayer = false;
    square8DOMElement.appendChild(symbol);
    square8DOMElement.style.pointerEvents = 'none';
  }
  // if there is a winner, display text
  if (winner === true) {
    var winText = document.createElement("h1");
    winText.textContent = "Player " + player + " Wins!!";
    winTextDOMElement.appendChild(winText);
  }
})

square9DOMElement.addEventListener("click", function(){
  var xPosition = 2;
  var yPosition = 2;
  var symbol = document.createElement("h1");
  if (switchPlayer === false) {
    var player = "X";
    symbol.textContent = player;
    // call function play
    play(player, xPosition, yPosition);
    switchPlayer = true;
    square9DOMElement.appendChild(symbol);
    square9DOMElement.style.pointerEvents = 'none';
  }else {
    var player = "O";
    symbol.textContent = player;
    play(player, xPosition, yPosition);
    switchPlayer = false;
    square9DOMElement.appendChild(symbol);
    square9DOMElement.style.pointerEvents = 'none';
  }
  // if there is a winner, display text
  if (winner === true) {
    var winText = document.createElement("h1");
    winText.textContent = "Player " + player + " Wins!!";
    winTextDOMElement.appendChild(winText);
  }
})
