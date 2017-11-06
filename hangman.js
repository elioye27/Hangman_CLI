var inquirer = require ("inquirer");

function Word(dog, cat, rat){
	this.dog = dog;
	this.cat = cat;
	this.rat = rat;
	

}

var wordInPlay = ["d","o","g"];
var lettersOfTheWord = [];
var matchedLetter = [];
var guessedLetters = [];
var guessesLeft = 0;
var bol = false;

var count = 0;

// for (i = 0; i < wordInPlay.length; i++) {
// 	console.log(wordInPlay[i]);
// }


var getLetter = function (letter) {
	// console.log(matchedLetter);
	// // console.log(guessedLetters);
	// console.log(wordInPlay);
	

	if (count < 5){
		inquirer.prompt({
			name: "letter",
			message: "Guess a letter!"
		}). then(function(answers){
			guessedLetters.push(answers.letter);
			if(answers.letter == "d") {
				
				console.log("CORRECT!!!");
				matchedLetter.push(answers.letter);
			}
			else if(answers.letter == "o") {
				
				console.log("CORRECT!!!");
				matchedLetter.push(answers.letter);
			}
			
			else if(answers.letter == "g") {
				console.log("CORRECT!!!");
				matchedLetter.push(answers.letter);
			}
			else{
				console.log("INCORRECT!!!");
			}

			if (matchedLetter == wordInPlay) {
					return (count = 0);
					console.log("You got it!!!");
			}
			else{
				count++;
			}

			getLetter(count);


		})
	}
}

getLetter(count);



