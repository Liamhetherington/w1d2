var diceNums = Number(process.argv[2]);
var diceRoll = [];

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) +min;
}

function rollDice() {
  for (var i = 1; i <= diceNums; i++) {
    diceRoll.push(randomInt(7, 1));
  }

  console.log("Rolled " + diceNums + " dice: " + diceRoll.join(', '));
}

rollDice();
