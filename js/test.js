

function startup() {
//	alert("startup called!");
	yesButton.addEventListener("click", getPlayerName);
	noButton.addEventListener("click", noGame);
}

function getPlayerName() {
	newPlayer.style.display = "block";
	intro.style.display = "none";
	document.getElementById('submitText').addEventListener("click", submitName); 
}

function submitName() {
	var pN = document.getElementById('inputText').value || "you";
    document.getElementById('playerName').innerHTML = pN;
    document.getElementById('inputName').style.display = "none";
    document.getElementById('compName').innerHTML = getCompName();
	gameOn();
}

function gameOn() {
	announce.innerHTML = "Ready? First to 5 wins the game. Choose your move wisely!";
	banner.style.display = "block";
	mainView.style.display = "block";
	setGame();
}

function setGame() {
	leftPick.innerHTML = "waiting..";
	rightPick.innerHTML = "waiting..";
	pickRock.addEventListener("click", function() { setPick(this.id); });
	pickPaper.addEventListener("click", function() { setPick(this.id); });
	pickScissors.addEventListener("click", function() { setPick(this.id); });
}

function noGame() {
	document.getElementById('messageDisplay').innerHTML = "Alright. Maybe next time!";
	noButton.style.display = "none";
	yesButton.style.display = "none";
}

function getCompName() {
	var compNames = ["The Hulk", "Spiderman", "Superman", "The Joker", "Thor", "Mario", "Luigi", "Bowser", "Creeper", "The Lorax", "Cinderella", "Maleficent", "Enderman", "Chika", "Freddy", "Bonnie", "Mangle", "Foxy", "Chuckie"];
		var pick = Math.floor(Math.random() * compNames.length);
		var namePicker = compNames[pick];
		return namePicker;
}

function setPick(clickedId) {
	var pP = clickedId;
	rightPick.innerHTML = pP;
	if (pP == 'rock') {
		pickPaper.style.backgroundColor = "#d3d3d3";
		pickScissors.style.backgroundColor = "#d3d3d3";
	} else if (pP == 'paper') {
			pickRock.style.backgroundColor = "#d3d3d3";
			pickScissors.style.backgroundColor = "#d3d3d3";
	} else {
			pickRock.style.backgroundColor = "#d3d3d3";
			pickPaper.style.backgroundColor = "#d3d3d3";
	}
	playButton.style.backgroundColor = "#00b359";
	playButton.addEventListener("click", playGame);
}

function playGame() {
	leftPick.innerHTML = getCompMove();
	alert('game is played!');
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


window.addEventListener("load", startup);

noButton = document.getElementById('messageButton1');
yesButton = document.getElementById('messageButton2');
banner = document.getElementById('top');
mainView = document.getElementById('game');
intro = document.getElementById('message');
newPlayer = document.getElementById('inputName');
leftPick = document.getElementById('compPick');
rightPick = document.getElementById('playerPick');
go = document.getElementById('play')
announce = document.getElementById('resultMessage');
pickRock = document.getElementById('rock');
pickPaper = document.getElementById('paper');
pickScissors = document.getElementById('scissors');
playButton = document.getElementById('play')










