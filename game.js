
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCd86U1AGJvh4wVqRV6V-Z4YCDqBKLsqeE",
    authDomain: "rps-firebase-5b1a7.firebaseapp.com",
    databaseURL: "https://rps-firebase-5b1a7.firebaseio.com",
    storageBucket: "rps-firebase-5b1a7.appspot.com",
    messagingSenderId: "956605917884"
  };
  firebase.initializeApp(config);
 
 // Create a variable to reference the database
 var database= firebase.database();


 //Initial Values
 var player= "";

//variable assigning number of players
 
 //need to make an object with two appended arrays
  $(document).on("click", "#start", function() {

	player = $('#player').val().trim();


	database.ref().set({

		player: player,
			stats:	{	
					 wins: 0,
					 losses: 0,
					 ties: 0,
					} 	
	});


	$('#playerName').append(player);
	console.log(player)
})




var wins = 0;
var losses = 0;
var ties = 0;
var currentChoice;


//array contnaining player choices
var choices = ["rock", "paper", "scissors"];

//function used to display game onload
function displayGame(){
	var formHtml= ' ';
	for (var i = 0; i < choices.length; i++){
		formHtml += '<div><input type="submit" name="option" value="' + choices[i] + '" id="option' + i + '"></div>'
		$('#playerChoices').html(formHtml);
		$('#playerChoices2').html(formHtml);
	}
}

//function to determine which choice is the winner
function runGame(){
	var p1c = ' ';
	var p2c = ' ';







}


$(document).ready(function() {
	displayGame();
	

})



// ///
//put most of stuff into database 

// Databse Stuff:
// have a current storageBucket

// Players Object
// 	Player 1  ===parent
// 		-wins ===children (childAdded)
// 		-losses
// 		-ties
// 	Player 2 
// 		-wins
// 		-losses
// 		-ties4

//chat ====parent --childAdded onChildAdded snapshot of messages---> add to database