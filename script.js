let playerOne = prompt(
  "Player 1, enter rock, paper, or scissors:"
).toLowerCase();
let playerTwo = prompt(
  "Player 2, enter rock, paper, or scissors:"
).toLowerCase();
function rockPaperScissors(player1, player2) {
  if (player1 === "rock" && player2 === "paper") {
    return " გაიმარჯვა მეორე მოთამაშემ";
  } else if (player2 === "rock" && player1 === "paper") {
    return " გაიმარჯვა პირველმა მოთამაშემ";
  } else if (player1 === "scissors" && player2 === "paper") {
    return " გაიმარჯვა პირველმა მოთამაშემ";
  } else if (player2 === "scissors" && player1 === "paper") {
    return " გაიმარჯვა მეორე მოთამაშემ";
  } else if (player1 === "rock" && player2 === "scissors") {
    return "გაიმარჯვა პირველმა მოთამაშემ";
  } else if (player2 === "rock" && player1 === "scissors") {
    return " გაიმარჯვა მეორე მოთამაშემ";
  } else {
    return "თქვენი თამაში დასრულდა თანაბრად";
  }
}
console.log(rockPaperScissors(playerOne, playerTwo));
