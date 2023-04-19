//The form is in its own js file as running it with the other code broke it.
var formElement = document.forms['quizForm'];

formElement.onsubmit = function submitAnswers(){
	var total = 5;
	var score = 0;
	
	// Get User Input
	var q1 = document.forms["quizForm"]["q1"].value,
	    q2 = document.forms["quizForm"]["q2"].value,
	    q3 = document.forms["quizForm"]["q3"].value,
	    q4 = document.forms["quizForm"]["q4"].value,
	    q5 = document.forms["quizForm"]["q5"].value;
	
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) === null || eval('q'+i) === ''){
			alert('You missed question '+ i);
			return false;
		}
	}
	
	// Set Correct Answers
	var answers = ["b","a","d","c","d"];
	
	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) === answers[i - 1]){
			score++;
		}
	}
	
	// Display Results
	var results = document.getElementById('results');
	if(score < 5){
		results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	}
	else{
		results.innerHTML = '<h3>Congratulations! You scored 5 out of 5! You win nothing!</h3>';
	}
	
	return false;
}

//ChatGPT generated code to make stars, with a few changes
for (var i = 0; i < 200; i++) {
	var star = document.createElement("div");
	var time = Math.random() + 1;
	star.classList.add("star");
	star.style.left = Math.random() * window.innerWidth + "px";
	star.style.top = Math.random() * window.innerHeight + "px";
	star.style.setProperty('--animation-time', time +'s');//my changes to chatGPT code- randomized star flicker duration
	document.body.appendChild(star);
}