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


  console.log(gamePattern);
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
  //  equalArrays(gamePattern, userClickedPattern);
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

    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
  //  equalArrays(gamePattern, userClickedPattern);
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

    $("body").on("touchstart", function() {
       nextSequence();
       newGame();
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
      //  equalArrays(gamePattern, userClickedPattern);
      });
    });

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

          console.log(userClickedPattern);
          checkAnswer(userClickedPattern.length - 1);
        //  equalArrays(gamePattern, userClickedPattern);
        });
    $("body").off("keydown");
    });

  }
}

/*function eqaulArrays(arr1, arr2) {
  var convert1 = arr1.toString();
  var convert2 = arr2.toString();
 if (arr1.toString() === arr2.toString() && (arr1.length === arr2.length) ) {
    setTimeout(nextSequence, 600);
    if (convert2.length === convert1.length && (convert2 === convert2)) {
      nextSequence();
    //console.log(arr1);
    //console.log(arr2);
  } else {
    roundLost.play();

  }
};*/

function newGame() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;

  //$(" h1#level-title").removeClass("game-over-spacing");


}

function h1LevelChange() {
  var newLevel = level++;
  $("#level-title").text("Level " + newLevel);
}

/*function nextLevel() {
  h1LevelChange();
  nextSequence();
  currentSquareID.delay(999).fadeOut(150).fadeIn(150);

  console.log(nextSequence());
}*/
