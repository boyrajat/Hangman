

// Arrays for movies, countries and sports//
var letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var sportArr = ['cricket', 'badminton', 'rowing', 'curling' ];
var countryArr = ['ethiopia', 'mauritius', 'swaziland', 'kazakhstan'];
var movieArr = ['transformers', 'ironman', 'godzilla', 'alien', 'titanic', 'supergirl', 'moonlight', 'dunkirk', 'arrival', 'zootopia'];
var imagesArr = ['assets/images/hang11.png', 'assets/images/hang10.png', 'assets/images/hang9.png', 'assets/images/hang8.png', 'assets/images/hang7.png', 'assets/images/hang6.png', 'assets/images/hang5.png', 'assets/images/hang4.png', 'assets/images/hang3.png', 'assets/images/hang2.png', 'assets/images/hang1.png'];

function randomWord(array) {
	randWord = array[Math.floor(Math.random() * array.length)];
	//return randWord;
}

var wins = 0;
var loss = 0;

document.getElementById("movies").addEventListener("click", movFunction);
document.getElementById("sports").addEventListener("click", sportFunction);
document.getElementById("countries").addEventListener("click", cntryFunction);

function movFunction() {
	randomWord(movieArr);
	game();
}

function sportFunction() {
	randomWord(sportArr);
	game();
}

function cntryFunction() {
	randomWord(countryArr);
	game();
}



function game() {
// var movieArr = ['transformers', 'ironman', 'godzilla', 'alien', 'titanic', 'supergirl', 'moonlight', 'dunkirk', 'arrival', 'zootopia'];
// var imagesArr = ['assets/images/hang11.png', 'assets/images/hang10.png', 'assets/images/hang9.png', 'assets/images/hang8.png', 'assets/images/hang7.png', 'assets/images/hang6.png', 'assets/images/hang5.png', 'assets/images/hang4.png', 'assets/images/hang3.png', 'assets/images/hang2.png', 'assets/images/hang1.png'];
// var movWord = movieArr[Math.floor(Math.random() * movieArr.length)];
document.getElementById("hangmanpic").src = imagesArr[10];
var guesses = 10;
var guessArr = [];
	for (var g = 0; g < 9; g++) {
		guessArr[g] = " ";
		document.getElementById("letGuessed").innerHTML = "Letters Already Guessed: " + guessArr.join(" ");
		document.getElementById("remGuesses").innerHTML = "Guesses Remaining: " + (guesses);
		}		
 	
alert("You have 10 guesses left before you are HUNG ! only LETTERS are allowed. Click GO HOME to exit the game if you are scared or OK to continue playing...Good Luck !");
	
var ansArr = [];
	for (var i = 0; i < randWord.length; i++) {
		ansArr[i] = "_";
		document.getElementById("word").innerHTML = ansArr.join(" ");
		}		
	
		var remainingLetters = randWord.length;
		if (remainingLetters > 0) {
			
			alert("Please pick a letter");
			alert("You have 10 guesses left");
			
			
			//if (guesses > 0) {
			if (remainingLetters > 0 && guesses > 0 ) {
						
			document.onkeyup = function (event) {
  			var j = String.fromCharCode(event.keyCode).toLowerCase();
	 		
	 		if (letterArr.indexOf(j) === -1) {
	 			alert("ONLY LETTERS ALLOWED - THIS IS INVALID INPUT - TRY AGAIN");

	 		} else if (remainingLetters === 0) {
	 			alert("YOU  WON !!");
	 			wins++;
	 			document.getElementById("wins").innerHTML = "Wins: " + wins;
	 			document.getElementById("hangmanpic").src = imagesArr[0];
	 			movFunction();
	 			return;
	 		} else if (guesses === 0) {

	 			document.getElementById("hangmanpic").src = imagesArr[0];

	 			alert("YOU LOST BUDDY !!");
	 			
	 			loss++;
	 			document.getElementById("losses").innerHTML = "Losses: " + loss;
	 			 document.getElementById("hangmanpic").src = imagesArr[0];
	 			movFunction();
	 			return;

	 		} else if(guesses > 0) {
	 			

	 			alert("you picked " + j);
	 			
	 			if (randWord.indexOf(j) === -1) {
	 				guessArr.push(j);
	 				document.getElementById("letGuessed").innerHTML ="Letters Already Guessed: " + guessArr.join(" ");
	 				guesses--;
	 				var pic = guesses;
	 				document.getElementById("hangmanpic").src = imagesArr[pic];
	 				document.getElementById("remGuesses").innerHTML = "Guesses Remaining: " + (guesses);
	 			
	 		
	 		} else {
						for (var i = 0; i < randWord.length; i++) {
						if (randWord[i] === j) {
							ansArr[i] = j;
							remainingLetters--;
							document.getElementById("word").innerHTML = ansArr.join(" ");
							alert("You're getting closer.....only " + remainingLetters + " letters to guess");
							} 
							//alert(remainingLetters + " Letters remaining");
						}
						//alert(remainingLetters + " Letters remaining");
						} 
					}				
				}
			} 
		 } 
							
	}
					



