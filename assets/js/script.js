
// var sportArr = ['Cricket', 'Badminton', 'Rowing', 'Curling' ];
// var countryArr = ['Ethiopia', 'Mauritius', 'Swaziland', 'Kazakhstan'];
// var letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var movieArr = ['transformers', 'ironman', 'godzilla', 'alien', 'titanic', 'supergirl', 'moonlight', 'dunkirk', 'arrival', 'zootopia'];
var imagesArr = ['assets/images/hang11.png', 'assets/images/hang10.png', 'assets/images/hang9.png', 'assets/images/hang8.png', 'assets/images/hang7.png', 'assets/images/hang6.png', 'assets/images/hang5.png', 'assets/images/hang4.png', 'assets/images/hang3.png', 'assets/images/hang2.png', 'assets/images/hang1.png'];

document.getElementById("movies").addEventListener("click", movFunction);

 function movFunction() {
 	alert("You have 10 guesses left before you are HUNG ! only LETTERS are allowed. Click GO HOME to exit the game if you are scared or OK to continue playing...Good Luck !");
	
	var movWord = movieArr[Math.floor(Math.random() * movieArr.length)];

	var ansArr = [];
	for (var i = 0; i < movWord.length; i++) {
		ansArr[i] = "_";
		document.getElementById("word").innerHTML = ansArr.join(" ");
		}		
	
		var remainingLetters = movWord.length;
		if (remainingLetters > 0) {
			
			alert("Please pick a letter");
			
			var guesses = 10;
			

			if (guesses > 0) {

			alert("You have 10 guesses left");
			
			document.onkeyup = function (event) {
  			var j = String.fromCharCode(event.keyCode).toLowerCase();
	 		alert("you picked " + j);

	 		
	 		if (guesses === 0) {

	 			alert("YOU LOST BUDDY !!");


	 		} else if(guesses > 0) {


	 		if (movWord.indexOf(j) === -1) {
	 			guesses--;
	 			var pic = guesses;
	 			document.getElementById("hangmanpic").src = imagesArr[pic];
	 			alert("Guesses left " + guesses);
	 		} else {
						for (var i = 0; i < movWord.length; i++) {
						if (movWord[i] === j) {
							ansArr[i] = j;
							remainingLetters--;
							document.getElementById("word").innerHTML = ansArr.join(" ");
							} 
						}
						alert(remainingLetters + " Letters remaining");
						} 
						}				
					}
					} 
				 } 
							
			}
					





