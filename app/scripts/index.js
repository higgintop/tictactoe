'use strict'

var fb = new Firebase('https://tictactoecohort8.firebaseio.com/');

var player = 'X';
var gameState;

$('td').on('click', function(event) {
	
	// get data about cell clicked
	var myClass = $(this).attr("class").split('-');
	var row = myClass[1];
	var col = myClass[2];

	// is that space free?
	// does it have a class of .x or .o yet?
	var boardSpace = $(event.target);
	if (boardSpace.hasClass('.x') || boardSpace.hasClass('.o')){
		alert('invalid move');
	}
	else {
		if(player === 'X') {
			$(boardSpace).addClass('.x');
			boardSpace.css( "background-color", "red" );
			// update the referee
			gameState = referee(player, row, col);
			// check gameState for win, tie, or inPlay
			player = 'O';
		}
		else if (player === 'O') {
			boardSpace.addClass('.o');
			boardSpace.css( "background-color", "blue" );
			gameState = referee(player, row, col);
			// check gameState for win, tie, or inPlay
		    player = 'X';
		}
	}
});





function referee(player, row, col) {

	
}