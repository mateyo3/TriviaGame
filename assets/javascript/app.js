$(document).ready(function(){

//variables
var correct = 0;
	incorrect = 0;
	unanswered = 0;
	countdown = 60;
	

// Questions Array
var questionsArray = [{
	// Question 1
	name: "firstQuestion",
	question: "What is 1+1?",
	correct: "Two",
	},

	// Question 2
	{
	name: "secondQuestion",
	question: "What is 2+2?",
	correct: "Four",
	},	

	// Question 3
	{
	name: "thirdQuestion",
	question: "What is 3+3?",
	correct: "Six",
	},

	// Question 4
	{
	name: "fourthQuestion",
	question: "What is 4+4?",
	correct: "Eight",	
}];		
console.log(questionsArray);

var question0 = ["two", "four", "six", "eight"];



//timer
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

		$("#timer").html("<h2>Time's Up!</h2>");
		console.log("Time is up!")

	//show results page
	$(".results-panel").show();
	$(".question-and-answer").hide();
	$("#done").hide();
	$(".remaining").hide();

	
	}
}

//Stops timer
function stop() {
      clearInterval(timer);
    }




//display questions in HTML
for (i = 0; i < questionsArray.length; i++) {
		
	var q = $("<div class='col-md-9 question' id='"+ questionsArray[i].name +"'></div><br><br>")

	q.text(questionsArray[i].question);
		console.log(questionsArray[i].question);

	$(".question-and-answer").append(q);

	//create radio buttons
	for (k = 0; k < question0.length; k++) {
	console.log(question0[k]);

	var a = $("<div class='col-md-9'>" + "<input type='radio' name='" + question0[k] + "' value='" + question0[k] +"' >" + question0[k] + "</div>");

	// $("<div id='"+ question0[k] +"'></div>").append(a);
	$("#"+ questionsArray[i].name).append(a);
	}
}



//Identify correct answers and add to correct count or incorrect count


//psuedo code
//if answer to question 1 is "Two"
	//then, increase correct count by one

// if ('#Two').prop("checked", true) {
// 	correct++;
// 	console.log(correct);


//if answer to question 2 is "Four"
	//then, increase correct count by one

// if ('#Four').prop("checked", true) {
// 	correct++;
// 	console.log(correct);


//if answer to question 3 is "Six"
	//then, increase correct count by one

// if ('#Six').prop("checked", true) {
// 	correct++;
// 	console.log(correct);


//if answer to question 4 is "Eight"
	//then, increase correct count by one

// if ('#Eight').prop("checked", true) {
// 	correct++;
// 	console.log(correct);
// } 

//else, increase incorrect count by one
//	else {
// 	incorrect++;
// 	console.log(incorrect);
// 	}



//BUTTON FUNCTIONALITY

$(".question-and-answer").hide();
$("#done").hide();

//click START button to load questions and start timer
$("#start").on("click", function(){
	$(".question-and-answer").show();
	run();
	$("#start").hide();
	$("#done").show();
});


//click DONE to hide questions and show results
$(".results-panel").hide();

$("#done").on("click", function(){
	stop();
	$(".results-panel").show('show');
	$(".question-and-answer").hide();
	$("#start").hide();
	$("#done").hide();
});


//CALCULATE correct and incorrect
//if correct answer is selected in radio button under appropriate question
	//then correct++;
//else
	//incorrect++;

//CALCULATE unanswered questions
	//unanswered - (correct + incorrect);


//DISPLAY results in html div
	var r = $("<div></div>")
		$(".results").append("<h1>Results</h1>")
	//$("#results").append(correct)
		$(".results").append("<div>" + "correct: " + correct + "</div>");
	//$("#results").append(incorrect)
		$(".results").append("<div>" + "incorrect: " + incorrect + "</div>");
	//$("#results").append(unanswered)
		$(".results").append("<div>" + "unanswered: " + unanswered + "</div>");

});

