

// Arrays for movies, countries and sports//
var letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var sportArr = ['cricket', 'badminton', 'rowing', 'curling' ];
var countryArr = ['ethiopia', 'mauritius', 'swaziland', 'kazakhstan'];
var movieArr = ['transformers', 'ironman', 'godzilla', 'alien', 'titanic', 'supergirl', 'moonlight', 'dunkirk', 'arrival', 'zootopia'];
var imagesArr = ['assets/images/hang11.png', 'assets/images/hang10.png', 'assets/images/hang9.png', 'assets/images/hang8.png', 'assets/images/hang7.png', 'assets/images/hang6.png', 'assets/images/hang5.png', 'assets/images/hang4.png', 'assets/images/hang3.png', 'assets/images/hang2.png', 'assets/images/hang1.png'];
var guesses = imagesArr.length - 1;
var guessArr = [];
var remainingLetters;
var randWord;
var ansArr = [];
var wins = 0;
var loss = 0;
// Function for random word picker from array//
function randomWord(array) {
	randWord = array[Math.floor(Math.random() * array.length)];
	//var ansArr = [];
	remainingLetters = randWord.length;
	for (var i = 0; i < randWord.length; i++) {
		ansArr[i] = "_";
		document.getElementById("word").innerHTML = ansArr.join(" ");

};
};

//Function to reset the game//
// function reset() {
// 	document.getElementById("hangmanpic").src = imagesArr[10];
// 	for (var g = 0; g < 10; g++) {
// 	guessArr[g] = " ";
// 		};
// 	document.getElementById("word").innerHTML = "Word: ______________";
// 	//guesses = 10;
// 	document.getElementById("remGuesses").innerHTML = "Guesses Remaining: " + (guesses);
// 	game();
//};




function game() {
	alert("You have 10 guesses left before you are HUNG ! only LETTERS are allowed. Click GO HOME to exit the game if you are scared or OK to continue playing...Good Luck !");
	document.getElementById("hangmanpic").src = imagesArr[10];
	for (var g = 0; g < imagesArr.length; g++) {
	guessArr[g] = " ";
		};
	//document.getElementById("word").innerHTML = "Word: ______________";
	guesses = 10;
}

	var guessArr = [];
		for (var g = 0; g < 10; g++) {
		guessArr[g] = " ";
		};
	//var guesses = imagesArr.length - 1;
	
				document.onkeyup = function (event) {
  				var j = String.fromCharCode(event.keyCode).toLowerCase();
	 			
	 		
			
			if (guesses > 0 && remainingLetters > 0) {

alert("you picked " + j);
				// for (var c = 0; c < letterArr.length; c++) {
				// 	if (letterArr[c] = j) {

	 		 	if (randWord.indexOf(j) === -1) {
	 			guessArr.push(j);
	 			document.getElementById("letGuessed").innerHTML ="Letters Already Guessed: " + guessArr.join(" ");
	 			guesses--;
	 			var pic = guesses;
	 			document.getElementById("hangmanpic").src = imagesArr[pic];
	 			document.getElementById("remGuesses").innerHTML = "Guesses Remaining: " + (guesses);
	 			
	 		
	 			} else if (guesses === 0) {
	 			alert("YOU LOST !!");
	 			

	 		} else if (guesses > 0 && remainingLetters === 0) {
	 			alert("YOU WON - YOU ROCK !!");




	 		} else {
						for (var i = 0; i < randWord.length; i++) {
						if (randWord[i] === j) {
							ansArr[i] = j;
							remainingLetters--;
							document.getElementById("word").innerHTML = ansArr.join(" ");
				} 
				
						//alert(remainingLetters + " Letters remaining");
				}
				}				
				
				}}
	 		 
	 		
	 			
	 		


document.getElementById("movies").addEventListener("click", movFunction);
document.getElementById("countries").addEventListener("click", cntryFunction);
document.getElementById("sports").addEventListener("click", sportFunction);


 function movFunction() {
 	// reset();
 	randomWord(movieArr);
	game();
 };

 function cntryFunction() {
 	// reset();
 	randomWord(countryArr);
 	game();
 };

function sportFunction() {
	// reset(),
 	randomWord(sportArr);
 	game();
 };
 






//document.onkeyup = function (event) {
  				//var j = String.fromCharCode(event.keyCode).toLowerCase();
	 			//alert("you picked " + j);





// document.getElementById("movies").addEventListener("click", movFunction);

//  function movFunction() {
// var movWord = movieArr[Math.floor(Math.random() * movieArr.length)];
// document.getElementById("hangmanpic").src = imagesArr[10];

 	
//document.getElementById("letGuessed").innerHTML = guessArr.join(" ");



 	//alert("You have 10 guesses left before you are HUNG ! only LETTERS are allowed. Click GO HOME to exit the game if you are scared or OK to continue playing...Good Luck !");
	

	// var ansArr = [];
	// for (var i = 0; i < movWord.length; i++) {
	// 	ansArr[i] = "_";
	// 	document.getElementById("word").innerHTML = ansArr.join(" ");
	// 	}		

		// var guessArr = [];
		// for (var g = 0; g < 10; g++) {
		// guessArr[g] = " ";
		// //document.getElementById("letGuessed").innerHTML = guessArr.join(" ");
		// }		
	
		// var remainingLetters = movWord.length;
		// if (remainingLetters > 0) {
			
		// 	alert("Please pick a letter");
		// 	alert("You have 10 guesses left");
			
		// 	var guesses = 10;
			

		// 	if (guesses > 0) {

			
			
		// 	document.onkeyup = function (event) {
  // 			var j = String.fromCharCode(event.keyCode).toLowerCase();
	 // 		alert("you picked " + j);

	 // 		//if (remainingLetters === 0) {
	 // 			//alert("YOU WON!!!!!");

	 // 		//}
	 // 		if (remainingLetters === 0) {
	 // 			alert("YOU  WON !!");
	 // 			movFunction();
	 // 			return;
	 // 		} else {

	 // 		if (guesses === 0) {

	 // 			document.getElementById("hangmanpic").src = imagesArr[0];

	 // 			alert("YOU LOST BUDDY !!");
	 // 			 document.getElementById("hangmanpic").src = imagesArr[0];
	 // 			movFunction();
	 // 			return;

	 // 		} else if(guesses > 0) {
	 // 			//var guessArr = [12];

	 // 		if (movWord.indexOf(j) === -1) {
	 // 			guessArr.push(j);
	 // 			document.getElementById("letGuessed").innerHTML ="Letters Already Guessed: " + guessArr.join(" ");
	 // 			guesses--;
	 // 			var pic = guesses;
	 // 			document.getElementById("hangmanpic").src = imagesArr[pic];
	 // 			document.getElementById("remGuesses").innerHTML = "Guesses Remaining: " + (guesses);
	 // 			//document.getElementById("letGuessed").innerHTML = "Letters Already Guessed: " + guessArr.join();
	 // 			//alert("Guesses left " + guesses);
	 		
	 // 		} else {
		// 				for (var i = 0; i < movWord.length; i++) {
		// 				if (movWord[i] === j) {
		// 					ansArr[i] = j;
		// 					remainingLetters--;
		// 					document.getElementById("word").innerHTML = ansArr.join(" ");
		// 					} 
		// 				}
		// 				alert(remainingLetters + " Letters remaining");
		// 				} 
		// 				}				
		// 			}}
		// 			} 
		// 		 } 
							
		// 	}
					


