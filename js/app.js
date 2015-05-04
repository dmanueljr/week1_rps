
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    switch (playerMove) {
        case 'rock':
            if (computerMove == 'rock') {
                winner = 'tie';
            } else if (computerMove == 'paper') {
                winner = 'computer';
            } else if (computerMove == 'scissors') {
                winner = 'player';
            }
        break;
        case 'paper':
             if (computerMove == 'rock') {
                winner = 'player';
            } else if (computerMove == 'paper') {
               winner = 'tie';
            } else if (computerMove == 'scissors') {
                winner = 'computer';
            }
        break;
        case 'scissors':
            if (computerMove == 'rock') {
                winner = 'computer';
            } else if (computerMove == 'paper') {
                winner = 'player';
            } else if (computerMove == 'scissors') {
                winner = 'tie';
            }
        break;
        default:
            winner = 'Sorry, that is not a valid move. Please try again.';
        break;
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5){
        if (getWinner('player')) {
            playerWins += 1;
            console.log('Player chose ' + playerMove + 'while Computer chose ' + computerMove + '. Player wins!');
            console.log('The score is currently ' + 'player: ' + playerWins + 'to ' + 'computer: ' + computerWins);
        } else if (getWinner('computer')) {
            computerWins += 1;
            console.log('Player chose ' + playerMove + 'while Computer chose ' + computerMove + '. Computer wins!');
            console.log('The score is currently ' + 'player: ' + playerWins + 'to ' + 'computer: ' + computerWins);
        } else if (getWinner('tie')) {
            console.log('Player chose ' + playerMove + 'while Computer chose ' + computerMove + '. No one wins.');
            console.log('The score is currently ' + 'player: ' + playerWins + 'to ' + 'computer: ' + computerWins);
        } else {
            console.log('Ooops! Invalid move - please try again!');
        }
    } 
    if (playerWins > computerWins) {
        console.log ('Player wins the game!');
    } else {
            console.log ('Computer wins the game!');
    } 
    return [playerWins, computerWins];
}
