var boardDOMElement = document.getElementById("board");

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
var drawTextDOMElement = document.getElementById("draw-text");
var resetDOMElement = document.getElementById("reset-game");
// var symbol1DOMElement = document.getElementById("symbol1");
// var symbol2DOMElement = document.getElementById("symbol2");
// var symbol3DOMElement = document.getElementById("symbol3");
// var symbol4DOMElement = document.getElementById("symbol4");
// var symbol5DOMElement = document.getElementById("symbol5");
// var symbol6DOMElement = document.getElementById("symbol6");
// var symbol7DOMElement = document.getElementById("symbol7");
// var symbol8DOMElement = document.getElementById("symbol8");
// var symbol9DOMElement = document.getElementById("symbol9");
var symbol1 = document.createElement("h1");
var symbol2 = document.createElement("h1");
var symbol3 = document.createElement("h1");
var symbol4 = document.createElement("h1");
var symbol5 = document.createElement("h1");
var symbol6 = document.createElement("h1");
var symbol7 = document.createElement("h1");
var symbol8 = document.createElement("h1");
var symbol9 = document.createElement("h1");

var currentPlayerDOMElement = document.getElementById("current-player");

var xScoreDOMElement = document.getElementById("x-score");
var oScoreDOMElement = document.getElementById("o-score");
var xScoreCounter = 0;
var oScoreCounter = 0;
var xScoreNumber = document.createElement("span");
var oScoreNumber = document.createElement("span");

var winColor = "#CC6600";

var switchPlayer = false;
var winner = false;

var currentPlayerText = document.createElement("h3");

window.onload = function(){
  // current player
  currentPlayerText.textContent = "X";
  currentPlayerDOMElement.appendChild(currentPlayerText);
  // score
  xScoreNumber.textContent = xScoreCounter;
  oScoreNumber.textContent = oScoreCounter;
  xScoreDOMElement.appendChild(xScoreNumber);
  oScoreDOMElement.appendChild(oScoreNumber);
}

square1DOMElement.addEventListener("click", function(){
  // debugger;
  console.log("SQ 1 clicked...");
  symbol1 = document.createElement("h1");
  symbol1.setAttribute("id", "symbol1");
  var xPosition = 0;
  var yPosition = 0;
  if (switchPlayer === false) {
    var player = "X";
    displayCurrentPlayer("O");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square1DOMElement, symbol1);
    switchPlayer = true;
  }else {
    var player = "O";
    displayCurrentPlayer("X");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square1DOMElement, symbol1);
    switchPlayer = false;
  }
})

square2DOMElement.addEventListener("click", function(){
  symbol2 = document.createElement("h1");
  symbol2.setAttribute("id", "symbol2");
  var xPosition = 0;
  var yPosition = 1;
  if (switchPlayer === false) {
    var player = "X";
    displayCurrentPlayer("O");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square2DOMElement, symbol2);
    switchPlayer = true;
  }else {
    var player = "O";
    displayCurrentPlayer("X");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square2DOMElement, symbol2);
    switchPlayer = false;
  }
})

square3DOMElement.addEventListener("click", function(){
  symbol3 = document.createElement("h1");
  symbol3.setAttribute("id", "symbol3");
  var xPosition = 0;
  var yPosition = 2;
  if (switchPlayer === false) {
    var player = "X";
    displayCurrentPlayer("O");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square3DOMElement, symbol3);
    switchPlayer = true;
  }else {
    var player = "O";
    displayCurrentPlayer("X");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square3DOMElement, symbol3);
    switchPlayer = false;
  }
})

square4DOMElement.addEventListener("click", function(){
  symbol4 = document.createElement("h1");
  symbol4.setAttribute("id", "symbol4");
  var xPosition = 1;
  var yPosition = 0;
  if (switchPlayer === false) {
    var player = "X";
    displayCurrentPlayer("O");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square4DOMElement, symbol4);
    switchPlayer = true;
  }else {
    var player = "O";
    displayCurrentPlayer("X");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square4DOMElement, symbol4);
    switchPlayer = false;
  }
})

square5DOMElement.addEventListener("click", function(){
  symbol5 = document.createElement("h1");
  symbol5.setAttribute("id", "symbol5");
  var xPosition = 1;
  var yPosition = 1;
  if (switchPlayer === false) {
    var player = "X";
    displayCurrentPlayer("O");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square5DOMElement, symbol5);
    switchPlayer = true;
  }else {
    var player = "O";
    displayCurrentPlayer("X");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square5DOMElement, symbol5);
    switchPlayer = false;
  }
})

square6DOMElement.addEventListener("click", function(){
  symbol6 = document.createElement("h1");
  symbol6.setAttribute("id", "symbol6");
  var xPosition = 1;
  var yPosition = 2;
  if (switchPlayer === false) {
    var player = "X";
    displayCurrentPlayer("O");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square6DOMElement, symbol6);
    switchPlayer = true;
  }else {
    var player = "O";
    displayCurrentPlayer("X");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square6DOMElement, symbol6);
    switchPlayer = false;
  }
})

square7DOMElement.addEventListener("click", function(){
  symbol7 = document.createElement("h1");
  symbol7.setAttribute("id", "symbol7");
  var xPosition = 2;
  var yPosition = 0;
  if (switchPlayer === false) {
    var player = "X";
    displayCurrentPlayer("O");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square7DOMElement, symbol7);
    switchPlayer = true;
  }else {
    var player = "O";
    displayCurrentPlayer("X");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square7DOMElement, symbol7);
    switchPlayer = false;
  }
})

square8DOMElement.addEventListener("click", function(){
  symbol8 = document.createElement("h1");
  symbol8.setAttribute("id", "symbol8");
  var xPosition = 2;
  var yPosition = 1;
  if (switchPlayer === false) {
    var player = "X";
    displayCurrentPlayer("O");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square8DOMElement, symbol8);
    switchPlayer = true;
  }else {
    var player = "O";
    displayCurrentPlayer("X");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square8DOMElement, symbol8);
    switchPlayer = false;
  }
})

square9DOMElement.addEventListener("click", function(){
  symbol9 = document.createElement("h1");
  symbol9.setAttribute("id", "symbol9");
  var xPosition = 2;
  var yPosition = 2;
  if (switchPlayer === false) {
    var player = "X";
    displayCurrentPlayer("O");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square9DOMElement, symbol9);
    switchPlayer = true;
  }else {
    var player = "O";
    displayCurrentPlayer("X");
    play(player, xPosition, yPosition);
    isWinner(winner, player, xPosition, yPosition, square9DOMElement, symbol9);
    switchPlayer = false;
  }
})


function isWinner(winner, player, xPosition, yPosition, squareDOMElement, symbol){
  if (winner === true) {
    // change the symbol colorsymbol.textContent = player;
    symbol.textContent = player;
    symbol.style.color = winColor;
    squareDOMElement.appendChild(symbol);
    squareDOMElement.style.pointerEvents = 'none';
    // set winner text
    var winText = document.createElement("h1");
    winText.textContent = "Player -" + player + "- Wins!!";
    winText.style.color = winColor;
    var symbolWin = board[xPosition][yPosition];
    winTextDOMElement.appendChild(winText);
    boardDOMElement.style.pointerEvents = 'none';
    displayScore(player);
  }else {
    symbol.textContent = player;
    squareDOMElement.appendChild(symbol);
    squareDOMElement.style.pointerEvents = 'none';
  }
}

function paintSymbolWinner (symbol){
  switch (symbol) {
    case "symbol1":
      symbol1.style.color = winColor;
      break;
    case "symbol2":
      symbol2.style.color = winColor;
      break;
    case "symbol3":
      symbol3.style.color = winColor;
      break;
    case "symbol4":
      symbol4.style.color = winColor;
      break;
    case "symbol5":
      symbol5.style.color = winColor;
      break;
    case "symbol6":
      symbol6.style.color = winColor;
      break;
    case "symbol7":
      symbol7.style.color = winColor;
      break;
    case "symbol8":
      symbol8.style.color = winColor;
      break;
    case "symbol9":
      symbol9.style.color = winColor;
      break;
  }
}

function checkIfDraw(){
  if (movesCounter === 9 && winner === false) {
    var drawText = document.createElement("h1");
    drawText.textContent = "Draw!";
    drawText.style.color = winColor;
    drawTextDOMElement.appendChild(drawText);
  }
}

function displayCurrentPlayer(player){
  currentPlayerDOMElement.removeChild(currentPlayerText);
  currentPlayerText = document.createElement("h3");
  currentPlayerText.textContent = player;
  currentPlayerDOMElement.appendChild(currentPlayerText);
}

function displayScore(player){
  if (player === "X") {
    xScoreCounter++;
    xScoreDOMElement.removeChild(xScoreNumber);
    xScoreNumber = document.createElement("span");
    xScoreNumber.textContent = xScoreCounter;
    xScoreDOMElement.appendChild(xScoreNumber);
  }else if (player === "O") {
    oScoreCounter++;
    oScoreDOMElement.removeChild(oScoreNumber);
    oScoreNumber = document.createElement("span");
    oScoreNumber.textContent = oScoreCounter;
    oScoreDOMElement.appendChild(oScoreNumber);
  }
}

// Button reset game
resetDOMElement.addEventListener("click", function(){
  resetGame();
})

function resetGame(){
  console.log("Reseting...");
  // debugger;
  // square1DOMElement.removeChild(symbol1);
  square1DOMElement.innerHTML = "";
  square2DOMElement.innerHTML = "";
  square3DOMElement.innerHTML = "";
  square4DOMElement.innerHTML = "";
  square5DOMElement.innerHTML = "";
  square6DOMElement.innerHTML = "";
  square7DOMElement.innerHTML = "";
  square8DOMElement.innerHTML = "";
  square9DOMElement.innerHTML = "";
  winTextDOMElement.innerHTML = "";
  drawTextDOMElement.innerHTML = "";
  // location.reload();

  // Enable pointerEvents
  square1DOMElement.style.pointerEvents = "all";
  square2DOMElement.style.pointerEvents = "all";
  square3DOMElement.style.pointerEvents = "all";
  square4DOMElement.style.pointerEvents = "all";
  square5DOMElement.style.pointerEvents = "all";
  square6DOMElement.style.pointerEvents = "all";
  square7DOMElement.style.pointerEvents = "all";
  square8DOMElement.style.pointerEvents = "all";
  square9DOMElement.style.pointerEvents = "all";
  boardDOMElement.style.pointerEvents = "all";
  boardDOMElement

  board = new Array([" "," "," "], [" "," "," "], [" "," "," "]);
  p1TotalMovs = 0;
  p2TotalMovs = 0;
  movesCounter = 0;
  switchPlayer = false;
  winner = false;
}
