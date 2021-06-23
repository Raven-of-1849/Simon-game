var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * buttonColors.length);
  console.log(randomNumber);
  var randomChosenColor2 = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor2);
  console.log(gamePattern);
  console.log($("#" + gamePattern));
}



nextSequence();
