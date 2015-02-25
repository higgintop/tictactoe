/* jshint jquery: true */

'use strict';

function referee(x, y, player, gameState) {
var fb = new Firebase('https://tictactoecohort8.firebaseio.com/');
  var xParm = parseInt(x);
  var yParm = parseInt(y);
  var player;
  var gameState;
  var moveNumber;

function postMove(x, y, player, gamestate) {
  fb.push({x,y: player});
  e.preventDefault();
  moveNumber++;
  if (moveNumber >=5){
  gameState = winLoseTie();
    if (moveNumber < 0){newGame()};
  };
};

function newGame() {
  fb.push({["b","b","b"],["b","b","b"],["b","b","b"]});
  moveNumber = 0;
}

function winLoseTie() {
  var gameWLT = "In play";

  if (moveNumber = 9){
    gameWLT = "Tie";
  };

  fb.get(uuid);

  if (whoWins("X") != ''){
    return gameWLT;
  }
  else {
    if (whoWins("O") != ''){
      return gameWLT;
    }
  }

  return gameWLT;
}


function whoWins(player){
  var gameWLT77 = '';

  if (tictactoe[0,0] === player){
    if(tictactoe[1,1] === player)
      if(tictactoe[2,2] === player){
          moveNumber = -1;
          return player + " wins";
      }
    }
  }

  if (tictactoe[0,0] === player){
    if(tictactoe[0,1] === player){
      if(tictactoe[0,2] === player){
        moveNumber = -1;
        return player + " wins";
      }
    }
  }

  if (tictactoe[1,0] === player){
    if(tictactoe[1,1] === player){
      if(tictactoe[1,2] === player){
        moveNumber = -1;
        return player + " wins";
      }
    }
  }

  if (tictactoe[2,0] === player){
    if(tictactoe[2,1] === player){
      if(tictactoe[2,2] === player){
        moveNumber = -1;
        return player + " wins";
      }
    }
  }

  if (tictactoe[2,0] === player){
    if(tictactoe[1,1] === player){
      if(tictactoe[0,2] === player){
        moveNumber = -1;
        return player + " wins";
      }
    }
  }

  if (tictactoe[0,0] === player){
    if(tictactoe[1,0] === player){
      if(tictactoe[2,0] === player){
        moveNumber = -1;
        return player + " wins";
      }
    }
  }

  if (tictactoe[0,1] === player){
    if(tictactoe[1,1] === player){
      if(tictactoe[2,1] === player){
        moveNumber = -1;
        return player + " wins";
      }
    }
  }

  if (tictactoe[0,2] === player){
    if(tictactoe[1,2] === player){
      if(tictactoe[2,2] === player){
        moveNumber = -1;
        return player + " wins";
      }
    }
  }
  return gameWLT77;
}
