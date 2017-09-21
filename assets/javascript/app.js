$(document).ready(function(){

//Global variables
var correct = 0;
	incorrect = 0;
	unanswered = 0;
	countdown = 5;
	
var interValID;
	clearInterval;
//set timer interval
function run(){
	interValID = setInterval(decrement, 1000);
	console.log(interValID);
}

//Decrement function
function decrement() {
	countdown--;
	console.log(countdown);
	//display timer
	$("#timer").html("<h2>"+ countdown + "</h2>");

	//gets to zero
	if (countdown === 0){
		stop();

		//go to end page
		
		console.log("Time is up!")
	}
}

//Stops timer
function stop() {
      clearInterval(interValId);
    }

// run();



// function timeUp() {
//   console.log("done");
//   $("#timer").append("<h2>Time's Up!</h2>");
//   console.log("time is up");
// }

//reset function
function reset() {
	var correct = 0;
		incorrect = 0;
		unanswered = 0;
}



var questionOne = "What is 2 + 2?"
$("#questionOne").html(questionOne);
console.log("The question is: " + questionOne);

var choicesArray = ["Two", "Three", "Four", "Five"];
console.log(choicesArray);

//randomize multiple choice questions
function randomChoice1() {
	var random = choicesArray[Math.floor(Math.random() * choicesArray.length)];
	console.log(random)
}

randomChoice1();

//make radio buttons
var answers = "button"
$(".choice1").text(answers);

// var selValue = $( 'input[name=rbnNumber]:checked' ).val();

var question

// $("#question").html("<p>QuestionOne?<p>");


});

// Questions Array
	// Question 1 object
		// Property Answer 1
		// Property Answer 2
		// Property Answer 3
		// Property Answer 4

	// Question 2 object
		// Property Answer 1
		// Property Answer 2
		// Property Answer 3
		// Property Answer 4

	// Question 3 object
		// Property Answer 1
		// Property Answer 2
		// Property Answer 3
		// Property Answer 4

	// Question 4 object
		// Property Answer 1
		// Property Answer 2
		// Property Answer 3
		// Property Answer 4

// randomize questions
//display questions in HTML

//if Questions 1
	//then properties get displayed as radio buttons

//if Questions 2
	//then properties get displayed as radio buttons

//if Questions 3
	//then properties get displayed as radio buttons

//if Questions 4
	//then properties get displayed as radio buttons