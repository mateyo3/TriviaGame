$(document).ready(function(){

// Questions Array
var questionsArray = [{
	// Question A
	question: "What is 1+1?",
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
	question: "What is 2+2?",
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
	question: "What is 3+3?",
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
	question: "What is 4+4?",
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

var question0 = ["two", "four", "six", "eight"];


// randomize questions

//display questions in HTML



for (i = 0; i < questionsArray.length; i++) {
	console.log(questionsArray[i]);
	
	var q = $("<div></div>");

	q.addClass("question");

	q.text(questionsArray[i].question);

	$(".question-and-answer").append(q);
}

//create radio buttons
for (k = 0; k < question0.length; k++) {
	console.log(question0[k]);

	var a = $("<span>" + "<input type='radio' name='q0' value='" + question0[k] +"' >" + question0[k] + "</span>");

	// a.addClass("button");

	// a.text(question0[k]);

	$(".question-and-answer").append(a);
}

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
		$("#timer").html("<h2>Time's Up!</h2>");
		console.log("Time is up!")
	}
}

//Stops timer
function stop() {
      clearInterval(timer);
    }

run();
// stop();



//reset function
function reset() {
	var correct = 0;
		incorrect = 0;
		unanswered = 0;
}




	// if (questionsArray[i] === [questionsArray.question]) {
	// 	for (i = 0; i < question0.length; i++){
	// 		console.log(question0);

	// 		$("<input type='radio' name='answer' value='"+ question0 + "' >" )


	// 		$(".question-and-answer").append(q);
	// 	}
	// }

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

//display questions in html
// $(".question-and-answer").append("<div>"+questionsArray[0].questionA+"</div>");
// console.log(questionsArray[0].questionA)

// $(".question-and-answer").append("<div>"+questionsArray[1].questionB+"</div>");
// console.log(questionsArray[1].questionB)

// $(".question-and-answer").append("<div>"+questionsArray[2].questionC+"</div>");
// console.log(questionsArray[2].questionC)

// $(".question-and-answer").append("<div>"+questionsArray[3].questionD+"</div>");
// console.log(questionsArray[3].questionD)



});

