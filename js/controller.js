var board = new Array([" "," "," "], [" "," "," "], [" "," "," "]);

// player X total moves
var p1TotalMovs = 0;
// player O total moves
var p2TotalMovs = 0;

var movesCounter = 0;

function play(player, xPosition, yPosition){
  // set the player move into the board position
  console.log("playing...");
  board[xPosition][yPosition] = player;
  movesCounter++;
  var currentSquare = getSquare(xPosition, yPosition);
  if (player === "X") {
    p1TotalMovs++;
    if (p1TotalMovs >= 3) {
      checkPlay(currentSquare, player, xPosition, yPosition);
    }
  }else if (player === "O") {
    p2TotalMovs++;
    if (p2TotalMovs >= 3) {
      checkPlay(currentSquare, player, xPosition, yPosition);
    }
  }
}

function checkPlay(currentSquare, player, xPosition, yPosition) {
  switch (currentSquare) {
    case "square1":
      checkIfWinSq1(player, xPosition, yPosition);
      break;
    case "square2":
      checkIfWinSq2(player, xPosition, yPosition);
      break;
    case "square3":
      checkIfWinSq3(player, xPosition, yPosition);
      break;
    case "square4":
      checkIfWinSq4(player, xPosition, yPosition);
      break;
    case "square5":
      checkIfWinSq5(player, xPosition, yPosition);
      break;
    case "square6":
      checkIfWinSq6(player, xPosition, yPosition);
      break;
    case "square7":
      checkIfWinSq7(player, xPosition, yPosition);
      break;
    case "square8":
      checkIfWinSq8(player, xPosition, yPosition);
      break;
    case "square9":
      checkIfWinSq9(player, xPosition, yPosition);
      break;
    //default:
  }
}

function checkIfWinSq1(player, xPosition, yPosition){
  // 0, 0
  console.log("checking square 1...");
  if ((board[xPosition][yPosition] === board[1][0] && board[xPosition][yPosition] === board[2][0])) {
    winner = true;
    paintSymbolWinner("symbol4");
    paintSymbolWinner("symbol7");
  }else if ((board[xPosition][yPosition] === board[1][1] && board[xPosition][yPosition] === board[2][2])) {
    winner = true;
    paintSymbolWinner("symbol5");
    paintSymbolWinner("symbol9");
  }else if ((board[xPosition][yPosition] === board[0][1] && board[xPosition][yPosition] === board[0][2])) {
    winner = true;
    paintSymbolWinner("symbol2");
    paintSymbolWinner("symbol3");
  }
  checkIfDraw();
}

function checkIfWinSq2(player, xPosition, yPosition){
  // 0, 1
  console.log("checking square 2...");
  if ((board[xPosition][yPosition] === board[1][1] && board[xPosition][yPosition] === board[2][1])) {
    winner = true;
    paintSymbolWinner("symbol5");
    paintSymbolWinner("symbol8");
  }else if ((board[xPosition][yPosition] === board[0][0] && board[xPosition][yPosition] === board[0][2])) {
    winner = true;
    paintSymbolWinner("symbol1");
    paintSymbolWinner("symbol3");
  }
  checkIfDraw();
}

function checkIfWinSq3(player, xPosition, yPosition){
  // 0, 2
  console.log("checking square 3...");
  if ((board[xPosition][yPosition] === board[0][0] && board[xPosition][yPosition] === board[0][1])) {
    winner = true;
    paintSymbolWinner("symbol1");
    paintSymbolWinner("symbol2");
  }else if ((board[xPosition][yPosition] === board[2][2] && board[xPosition][yPosition] === board[1][2])) {
    winner = true;
    paintSymbolWinner("symbol9");
    paintSymbolWinner("symbol6");
  }else if ((board[xPosition][yPosition] === board[2][0] && board[xPosition][yPosition] === board[1][1])) {
    winner = true;
    paintSymbolWinner("symbol7");
    paintSymbolWinner("symbol5");
  }
  checkIfDraw();
}

function checkIfWinSq4(player, xPosition, yPosition){
  // 1, 0
  console.log("checking square 4...");
  if ((board[xPosition][yPosition] === board[1][1] && board[xPosition][yPosition] === board[1][2])) {
    winner = true;
    paintSymbolWinner("symbol5");
    paintSymbolWinner("symbol6");
  }else if ((board[xPosition][yPosition] === board[0][0] && board[xPosition][yPosition] === board[2][0])) {
    winner = true;
    paintSymbolWinner("symbol1");
    paintSymbolWinner("symbol7");
  }
  checkIfDraw();
}

function checkIfWinSq5(player, xPosition, yPosition){
  // 1, 1
  console.log("checking square 5...");
  if ((board[xPosition][yPosition] === board[1][0] && board[xPosition][yPosition] === board[1][2])) {
    winner = true;
    paintSymbolWinner("symbol4");
    paintSymbolWinner("symbol6");
  }else if ((board[xPosition][yPosition] === board[0][1] && board[xPosition][yPosition] === board[2][1])) {
    winner = true;
    paintSymbolWinner("symbol2");
    paintSymbolWinner("symbol8");
  }else if ((board[xPosition][yPosition] === board[0][0] && board[xPosition][yPosition] === board[2][2])) {
    winner = true;
    paintSymbolWinner("symbol1");
    paintSymbolWinner("symbol9");
  }else if ((board[xPosition][yPosition] === board[2][0] && board[xPosition][yPosition] === board[0][2])) {
    winner = true;
    paintSymbolWinner("symbol7");
    paintSymbolWinner("symbol3");
  }
  checkIfDraw();
}

function checkIfWinSq6(player, xPosition, yPosition){
  // 1, 2
  console.log("checking square 6...");
  if ((board[xPosition][yPosition] === board[1][0] && board[xPosition][yPosition] === board[1][1])) {
    winner = true;
    paintSymbolWinner("symbol4");
    paintSymbolWinner("symbol5");
  }else if ((board[xPosition][yPosition] === board[2][2] && board[xPosition][yPosition] === board[0][2])) {
    winner = true;
    paintSymbolWinner("symbol9");
    paintSymbolWinner("symbol3");
  }
  checkIfDraw();
}

function checkIfWinSq7(player, xPosition, yPosition){
  // 2, 0
  console.log("checking square 7...");
  if ((board[xPosition][yPosition] === board[2][2] && board[xPosition][yPosition] === board[2][1])) {
    winner = true;
    paintSymbolWinner("symbol9");
    paintSymbolWinner("symbol8");
  }else if ((board[xPosition][yPosition] === board[0][0] && board[xPosition][yPosition] === board[1][0])) {
    winner = true;
    paintSymbolWinner("symbol1");
    paintSymbolWinner("symbol4");
  }else if ((board[xPosition][yPosition] === board[1][1] && board[xPosition][yPosition] === board[0][2])) {
    winner = true;
    paintSymbolWinner("symbol5");
    paintSymbolWinner("symbol3");
  }
  checkIfDraw();
}

function checkIfWinSq8(player, xPosition, yPosition){
  // 2, 1
  console.log("checking square 8...");
  if ((board[xPosition][yPosition] === board[2][0] && board[xPosition][yPosition] === board[2][2])) {
    winner = true;
    paintSymbolWinner("symbol7");
    paintSymbolWinner("symbol9");
  }else if ((board[xPosition][yPosition] === board[1][1] && board[xPosition][yPosition] === board[0][1])) {
    winner = true;
    paintSymbolWinner("symbol5");
    paintSymbolWinner("symbol2");
  }
  checkIfDraw();
}

function checkIfWinSq9(player, xPosition, yPosition){
  // 2, 2
  console.log("checking square 9...");
  if ((board[xPosition][yPosition] === board[2][0] && board[xPosition][yPosition] === board[2][1])) {
    winner = true;
    paintSymbolWinner("symbol7");
    paintSymbolWinner("symbol8");
  }else if ((board[xPosition][yPosition] === board[0][0] && board[xPosition][yPosition] === board[1][1])) {
    winner = true;
    paintSymbolWinner("symbol1");
    paintSymbolWinner("symbol5");
  }else if ((board[xPosition][yPosition] === board[1][2] && board[xPosition][yPosition] === board[0][2])) {
    winner = true;
    paintSymbolWinner("symbol6");
    paintSymbolWinner("symbol3");
  }
  checkIfDraw();
}

function getSquare(xPosition, yPosition){
  if (xPosition === 0 && yPosition === 0) {
    return "square1";
  }else if (xPosition === 0 && yPosition === 1) {
    return "square2";
  }else if (xPosition === 0 && yPosition === 2) {
    return "square3";
  }else if (xPosition === 1 && yPosition === 0) {
    return "square4";
  }else if (xPosition === 1 && yPosition === 1) {
    return "square5";
  }else if (xPosition === 1 && yPosition === 2) {
    return "square6";
  }else if (xPosition === 2 && yPosition === 0) {
    return "square7";
  }else if (xPosition === 2 && yPosition === 1) {
    return "square8";
  }else if (xPosition === 2 && yPosition === 2) {
    return "square9";
  }
}
