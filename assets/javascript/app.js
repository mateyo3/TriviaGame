$(document).ready(function(){

// Questions Array
var questionsArray = [{
	// Question A
	questionA: "What is 1+1?",
	// Property Answer 1
	answer1: "Two",
	// Property Answer 2
	answer2: "Four",
	// Property Answer 3
	answer3: "Six",
	// Property Answer 4
	answer4: "Eight",
	},

	// Question B
	{
	questionB: "What is 2+2?",
	// Property Answer 1
	answer1: "Two",
	// Property Answer 2
	answer2: "Four",
	// Property Answer 3
	answer3: "Six",
	// Property Answer 4
	answer4: "Eight",
	},	

	// Question C
	{
	questionC: "What is 3+3?",
	// Property Answer 1
	answer1: "Two",
	// Property Answer 2
	answer2: "Four",
	// Property Answer 3
	answer3: "Six",
	// Property Answer 4
	answer4: "Eight",
	},

	// Question D
	{
	questionD: "What is 4+4?",
	// Property Answer 1
	answer1: "Two",
	// Property Answer 2
	answer2: "Four",
	// Property Answer 3
	answer3: "Six",
	// Property Answer 4
	answer4: "Eight",	
}];		
console.log(questionsArray);

// randomize questions

//display questions in HTML
$(".question-and-answer").append(questionsArray[0].questionA);
console.log(questionsArray[0].questionA)

$(".question-and-answer").append(questionsArray[1].questionB);
console.log(questionsArray[1].questionB)

$(".question-and-answer").append(questionsArray[2].questionC);
console.log(questionsArray[2].questionC)

$(".question-and-answer").append(questionsArray[3].questionD);
console.log(questionsArray[3].questionD)
//if Questions 1
	//then properties get displayed as radio buttons

//if Questions 2
	//then properties get displayed as radio buttons

//if Questions 3
	//then properties get displayed as radio buttons

//if Questions 4
	//then properties get displayed as radio buttons


//Global variables
var correct = 0;
	incorrect = 0;
	unanswered = 0;
	countdown = 5;
	
var timer;
	clearInterval;
//set timer interval
function run(){
	timer = setInterval(decrement, 1000);
	console.log(timer);
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
      clearInterval(timer);
    }

run();
// stop();



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



// var questionOne = "What is 2 + 2?"
// $("#questionOne").html(questionOne);
// console.log("The question is: " + questionOne);

// var choicesArray = ["Two", "Three", "Four", "Five"];
// console.log(choicesArray);

// //randomize multiple choice questions
// function randomChoice1() {
// 	var random = choicesArray[Math.floor(Math.random() * choicesArray.length)];
// 	console.log(random)
// }

// randomChoice1();

// //make radio buttons
// var answers = "button"
// $(".choice1").text(answers);

// // var selValue = $( 'input[name=rbnNumber]:checked' ).val();

// var question

// // $("#question").html("<p>QuestionOne?<p>");


});

