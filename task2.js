const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// Calculate total in one line using array method reduce
// const calculateAverage = (scores) => {
//     const total = scores.reduce((acc, score) => acc + score, 0);
//     return total / scores.length;
// }

// Function to calculate average score
const calculateAverage = (scores) => {
  let sum = 0;
  for (var i = 0; i < 3; i++) {
    sum += scores[i];
  }
  return sum / 3;
};

const checkWinner = (dolphinsScores, koalasScores) => {
  const dolphinsAverage = calculateAverage(dolphinsScores);
  const koalasAverage = calculateAverage(koalasScores);

  if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
    console.log("Dolphins win!");
  } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
    console.log("Koalas win!");
  } else if (
    dolphinsAverage >= 100 &&
    koalasAverage >= 100 &&
    dolphinsAverage === koalasAverage
  ) {
    console.log("It's a draw!");
  } else {
    console.log("No team wins the trophy!");
  }
};

const print = () => {
  console.log("Data 1:");
  checkWinner(dolphinsScores1, koalasScores1);

  console.log("\nBonus 1:");
  checkWinner(dolphinsScoresBonus1, koalasScoresBonus1);

  console.log("\nBonus 2:");
  checkWinner(dolphinsScoresBonus2, koalasScoresBonus2);
};

const btn = document.getElementById("btn1");
btn.addEventListener("click", print);
const div = document.getElementById("demo");
const div1 = document.getElementById("demo1");
div.innerText =
  dolphinsScores1 + "\n" + dolphinsScoresBonus1 + "\n" + dolphinsScoresBonus2;
div1.innerText =
  koalasScores1 + "\n" + koalasScoresBonus1 + "\n" + koalasScoresBonus2;
