var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var roundLost = new Audio("./sounds/wrong.mp3");

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * buttonColors.length);
  var randomChosenColor = buttonColors[randomNumber];
  var currentSquareID = $("#" + randomChosenColor);
  var currentSound = new Audio("./sounds/" + randomChosenColor + ".mp3");

  gamePattern.push(randomChosenColor);
  currentSquareID.fadeOut(150).fadeIn(150);
  currentSound.play();

  h1LevelChange();

}

$("body").on("touchstart", function() {
   nextSequence();
   h1LevelChange();
  $("body").off("touchstart");
  $(".btn").on("click", function(event) {
    var selectedID = event.target.id;
    var userSelection = ("#" + selectedID);
    var userSound = new Audio("./sounds/" + selectedID + ".mp3");

    $(userSelection).addClass("pressed");
    setTimeout(function() {
    $(userSelection).removeClass("pressed")}, 100);


    userClickedPattern.push(selectedID);
    userSound.play();

    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
  });
});


$("body").on("keydown", function() {
   nextSequence();
   h1LevelChange();
  $("body").off("keydown");
  $(".btn").on("click", function(event) {
    var selectedID = event.target.id;
    var userSelection = ("#" + selectedID);
    var userSound = new Audio("./sounds/" + selectedID + ".mp3");

    $(userSelection).addClass("pressed");
    setTimeout(function() {
    $(userSelection).removeClass("pressed")}, 100);


    userClickedPattern.push(selectedID);
    userSound.play();

    checkAnswer(userClickedPattern.length - 1);
  });
});



function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel] ) {
    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(nextSequence, 600);
    }
  } else {
    roundLost.play();

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);


    $(".btn").off("click");
    $(" h1#level-title").addClass("game-over-spacing");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    $("body").on("keydown", function() {
        newGame();
        h1LevelChange();
        nextSequence();
        $(".btn").on("click", function(event) {
          var selectedID = event.target.id;
          var userSelection = ("#" + selectedID);
          var userSound = new Audio("./sounds/" + selectedID + ".mp3");

        $(userSelection).addClass("pressed");
        setTimeout(function() {
          $(userSelection).removeClass("pressed")}, 100);

          userClickedPattern.push(selectedID);
          userSound.play();

          checkAnswer(userClickedPattern.length - 1);
        });
    $("body").off("keydown");
    });

    $("body").on("touchstart", function() {
        newGame();
        h1LevelChange();
        nextSequence();
        $(".btn").on("click", function(event) {
          var selectedID = event.target.id;
          var userSelection = ("#" + selectedID);
          var userSound = new Audio("./sounds/" + selectedID + ".mp3");

          $(userSelection).addClass("pressed");
          setTimeout(function() {
            $(userSelection).removeClass("pressed")}, 100);


            userClickedPattern.push(selectedID);
            userSound.play();

            checkAnswer(userClickedPattern.length - 1);
        });
    $("body").off("touchstart");
    });


  }
}

function newGame() {
  gamePattern = [];
  level = 0;
}

function h1LevelChange() {
  var newLevel = level++;
  $("#level-title").text("Level " + newLevel);
}
