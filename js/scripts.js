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

var player =  {
  rno: function (number) {
    this.number = number;
  }
  addp: function (points) {
    this.score += points;
  }
};
var Turn ={
  points: 0
  aplayer: function (player) {
    this.player = player;

  }
  roll function () {
    die = Object.create(Die);
    roll = die.roll();
    if (roll === 1) {
      this.over = true;
      this.points = 0;
    } else {
      this.points += roll;
    }
    return roll;
  }
  hold function () {
    this.player.addp();
    this.over = true;
  }
};

Die = {
  roll function () {
    return Math.ceil(Math.random()*6);
  }

};
Play={

}
  }

  }
$("button#roll").click

function dice(value) {
  this.value = value;
  this.roll = function(roll)  {

  }
  this.printDie = function (printDie) {
  }



}
function () {
  die = Math.ceil(Math.random()*6)+1;
  return die;
}

}


function printDie() {
  this.roll();

  die1 = document.getElementById('die1');
  die2 = document.getElementByTd('die2');
  die1.innerHTML = die1.value;
  die2.innerHTML = die2.value;
}
