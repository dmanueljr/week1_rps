

function startup() {
//  alert("startup called!");
    yesButton.addEventListener("click", getPlayerName);
    noButton.addEventListener("click", noGame);
}

function noGame() {
    document.getElementById('messageDisplay').innerHTML = "Alright. Maybe next time!";
    noButton.style.display = "none";
    yesButton.style.display = "none";
}

function getPlayerName() {
    newPlayer.style.display = "block";
    message.style.display = "none";
    document.getElementById('submitText').addEventListener("click", submitName);
}

function submitName() {
    var pN = document.getElementById('inputText').value || "you";
    document.getElementById('playerName').innerHTML = pN;
    document.getElementById('inputName').style.display = "none";
    document.getElementById('compName').innerHTML = getCompName();
    announce.innerHTML = "Ready? First to 5 wins the game. Choose your move wisely!";
    banner.style.display = "block";
    mainView.style.display = "block";
    gameOn();
}

function getCompName() {
    var compNames = ["The Hulk", "Spiderman", "Superman", "The Joker", "Thor", "Mario", "Luigi", "Bowser", "Creeper", "The Lorax", "Cinderella", "Maleficent", "Enderman", "Chika", "Freddy", "Bonnie", "Mangle", "Foxy", "Chuckie"];
        var pick = Math.floor(Math.random() * compNames.length);
        var namePicker = compNames[pick];
        return namePicker;
}

function gameOn() {
    leftPick.innerHTML = "waiting..";
    rightPick.innerHTML = "waiting..";
    pickRock.addEventListener("click", function() { setPick(this.id); });
    pickPaper.addEventListener("click", function() { setPick(this.id); });
    pickScissors.addEventListener("click", function() { setPick(this.id); });
}

function setPick(clickedId) {
    var pP = clickedId;
    rightPick.innerHTML = pP;
    playerMove = pP;
    leftPick.innerHTML = "waiting..";
    document.getElementById('comp').style.backgroundColor = "#f4f4f4";
    document.getElementById('comp').style.color = "#323232";
    document.getElementById('player').style.backgroundColor = "#f4f4f4";
    document.getElementById('player').style.color = "#323232";
    //  alert(playerMove);
    if (pP == 'rock') {
        pickRock.style.backgroundColor = "#ff7f00";
        pickPaper.style.backgroundColor = "#d3d3d3";
        pickScissors.style.backgroundColor = "#d3d3d3";
    } else if (pP == 'paper') {
            pickRock.style.backgroundColor = "#d3d3d3";
            pickPaper.style.backgroundColor = "#ff7f00";
            pickScissors.style.backgroundColor = "#d3d3d3";
    } else {
            pickRock.style.backgroundColor = "#d3d3d3";
            pickPaper.style.backgroundColor = "#d3d3d3";
            pickScissors.style.backgroundColor = "#ff7f00";
    }
    playButton.style.backgroundColor = "#00b359";
    playButton.addEventListener("click", playGame);
}

function playGame() {
//  alert(playerMove);
    leftPick.innerHTML = getCompMove();
    computerMove = leftPick.innerHTML;
    var winner = getWinner(playerMove, computerMove);
    playToFive(winner);
//  alert(winner);
}

function getCompMove() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getWinner(pMove, cMove) {
//  alert(computerMove);
//  alert(playerMove);
    var winner;
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
    }
//  alert(winner);
    return winner;
}

function playToFive(x) {
    if (playerWins < 5 && computerWins < 5) {
        if (x == 'player') {
            playerWins += 1;
            announce.innerHTML = "You win!";
            document.getElementById('player').style.backgroundColor = "#00b359";
            document.getElementById('player').style.color = "#ffffff";
            document.getElementById('comp').style.backgroundColor = "#ff0000";
            document.getElementById('comp').style.color = "#ffffff";
            if (playerWins == 5) {
//              announce.innerHTML = "You win the game!";
                banner.style.display = "none";
                mainView.style.display = "none";
                document.getElementById('finalMessage').style.display = "block";
                document.getElementById('winner').innerHTML = "Congratulations! You win the game!";
                document.getElementsByTagName('body')[0].style.backgroundColor = "#00b359";
            }
        } else if (x == 'computer') {
            computerWins += 1;
            cN = (document.getElementById('compName').innerHTML + " wins!")
            cNw = ("Sorry! " + document.getElementById('compName').innerHTML + " wins the game!")
            announce.innerHTML = cN;
            document.getElementById('comp').style.backgroundColor = "#00b359";
            document.getElementById('comp').style.color = "#ffffff";
            document.getElementById('player').style.backgroundColor = "#ff0000";
            document.getElementById('player').style.color = "#ffffff";
            if (computerWins == 5) {
//              announce.innerHTML = cNw;
                banner.style.display = "none";
                mainView.style.display = "none";
                document.getElementById('finalMessage').style.display = "block";
                document.getElementById('winner').innerHTML = cNw;
                document.getElementsByTagName('body')[0].style.backgroundColor = "#ff0000";
            }
        } else {
            announce.innerHTML = "It's a tie. No one wins!";
            document.getElementById('comp').style.backgroundColor = "#f4f4f4";
            document.getElementById('comp').style.color = "#323232";
            document.getElementById('player').style.backgroundColor = "#f4f4f4";
            document.getElementById('player').style.color = "#323232";
        }
        pickRock.style.backgroundColor = "#ff7f00";
        pickPaper.style.backgroundColor = "#ff7f00";
        pickScissors.style.backgroundColor = "#ff7f00";
        playButton.style.backgroundColor = "#d3d3d3";
    }
    document.getElementById('playerScore').innerHTML = playerWins;
    document.getElementById('compScore').innerHTML = computerWins;
}







window.addEventListener("load", startup);

var playerWins = 0;
var computerWins = 0;    
noButton = document.getElementById('messageButton1');
yesButton = document.getElementById('messageButton2');
banner = document.getElementById('top');
mainView = document.getElementById('game');
message = document.getElementById('message');
newPlayer = document.getElementById('inputName');
leftPick = document.getElementById('compPick');
rightPick = document.getElementById('playerPick');
go = document.getElementById('play')
announce = document.getElementById('resultMessage');
pickRock = document.getElementById('rock');
pickPaper = document.getElementById('paper');
pickScissors = document.getElementById('scissors');
playButton = document.getElementById('play')

playerMove = "";
computerMove = "";