// ________________________VARIANTI-1___________________________

let playerOne = prompt(
  "Player 1, enter rock, paper, or scissors:"
).toLowerCase();
let playerTwo = prompt(
  "Player 2, enter rock, paper, or scissors:"
).toLowerCase();
function rockPaperScissors(player1, player2) {
  if (
    (player1 === "rock" && player2 === "rock") ||
    (player1 === "paper" && player2 === "paper") ||
    (player1 === "scissors" && player2 === "scissors")
  ) {
    return "ეს თამაში დასრულდა თანაბრად";
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "გაიმარჯვა პირველმა მოთამაშემ";
  } else if (
    (player1 === "scissors" && player2 === "rock") ||
    (player1 === "paper" && player2 === "scissors") ||
    (player1 === "rock" && player2 === "paper")
  ) {
    return "გაიმარჯვა მეორე მოთამაშემ";
  } else {
    return "გამოყენებულიგაქვთ არასწორი სიმბოლოები სცადეთ თავიდან";
  }
}
console.log(rockPaperScissors(playerOne, playerTwo));
// ________________________VARIANTI-2___________________________
// let playerOne = prompt(
//   "Player 1, enter rock, paper, or scissors:"
// ).toLowerCase();
// let playerTwo = prompt(
//   "Player 2, enter rock, paper, or scissors:"
// ).toLowerCase();
// function rockPaperScissors(player1, player2) {
//   if (player1 === "rock" && player2 === "paper") {
//     return " გაიმარჯვა მეორე მოთამაშემ";
//   } else if (player2 === "rock" && player1 === "paper") {
//     return " გაიმარჯვა პირველმა მოთამაშემ";
//   } else if (player1 === "scissors" && player2 === "paper") {
//     return " გაიმარჯვა პირველმა მოთამაშემ";
//   } else if (player2 === "scissors" && player1 === "paper") {
//     return " გაიმარჯვა მეორე მოთამაშემ";
//   } else if (player1 === "rock" && player2 === "scissors") {
//     return "გაიმარჯვა პირველმა მოთამაშემ";
//   } else if (player2 === "rock" && player1 === "scissors") {
//     return " გაიმარჯვა მეორე მოთამაშემ";
//   } else {
//     return "თქვენი თამაში დასრულდა თანაბრად";
//   }
// }
// console.log(rockPaperScissors(playerOne, playerTwo));
