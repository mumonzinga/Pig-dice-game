var player = function(name, score, turn){
  this.name = name;
  this.score = score;
  this.turn = turn;
}
function Turn(player) {
  this.total = 0;
  this.randNumber = 0;
  this.player = player;
};
Turn.prototype.diceRoller = function(player1, player2) {
  var randNumber = Math.ceil(Math.random() * 6) + 1;
  this.total += randNumber;

  if (randNumber === 1) {
      this.total = 0;
      this.endTurn(player1, player2);

      return randNumber;
  } else {
      this.randNumber += randNumber;
      return randNumber;
  };
};

var player1 = {};
var player2 = {};

var dice = 0;
var totalScore= 0;
var roll = function(){
  dice = Math.floor(Math.random()*6) + 1;
  if (dice != 1){
    totalScore += dice
  } else {
    totalScore = 0;
    change();
  }
}


var winner = function(){
  if (gOne.score >= 100){
    alert( gOne.name + "  WINS ")

     $("#roll").prop("disabled", true);
     $("#hold").prop("disabled", true);
  } else if (player.score >= 100){
    alert("!!!" + gTwo.name + "  WINS !!!")

    $("#roll").prop("disabled", true);
    $("#hold").prop("disabled", true);
}
}

function start(){
  var fName=document.getElementById("one").value;
  var sName=document.getElementById("two").value;
  document.getElementById("gamerOne").innerHTML=fName;
  document.getElementById("gamerTwo").innerHTML=sName;
}


//UI LOGIC
$(document).ready(function(){
  $(".entry").submit(function(event){
    event.preventDefault();
    var gOneName = $("#one").val();
    var gTwoName = $("#two").val();
    $("#gOne").text(playerOneName);
    $("#gTwo").text(playerTwoName);
    $(".print").hide();
    $("#game").fadeIn();

    $("button#dice").click(function(){
      roll();
      $("#round-total").text(totalScore);
    })

    $("button#hold").click(function(){
      if (gOne.turn == "enabled") {
        gOne.addScore();
        $("#score-one").text(playerOneName.score);
        winner();
        change();
      } else if (gTwo.turn == "enabled"){
        gTwo.addScore();
        $("#score-two").text(playerTwoName.score);
        winner();
        change();
      }
      totalScore = 0;
      $("#round-total").text(roundTotal);
    })
  })
});
