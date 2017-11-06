HW - { Hangman_CLI HW #9}

Github: https://github.com/elioye27/Hangman_CLI

This app will be built through the command line which allows you to play hangman in the command line.

Technologies Used
* Node JS
* NPM Packages 
* GitHub to back-up the project
* Constructor functions

Challenges
I had a lot of challenges with building this app. Took me about 24 hours to get the little code.

Code:
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



var getLetter = function (letter) {
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
