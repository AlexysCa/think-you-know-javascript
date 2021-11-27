// questions for quiz
var questions = [
    {
        title: "The condition in an if / else statement is enclosed within what?",
        choices: [ "quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Commonly used data types do not include what?",
        choices: [ "strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "What is the tool used during development and debugging tat is useful for printing content?",
        choices: [ "Javascript", "terminal", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "What do arrays in Javascript store?",
        choices: [ "numbers and strings", "others arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "What is an example of camel casing?",
        choices: [ "thisisAnExample", "ThisIsAnExample", "thisIsanexample", "thisIsAnExample"],
        answer: "thisIsAnExample"
    },
    {
        title: "What is used to enclose string values when assigning variables?",
        choices: [ "commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
]

// variables 
var score = 0;
var questionIndex = 0;
var questionsSection = document.querySelector("#questionsSection");
var currentBody = document.querySelector("#currentBody");
var ulChoices = document.createElement("ul");
var penalty = 10;
var timeleft = 60;
var secondsLeft = 55;

// timer code 
var downloadTimer = setInterval(function(){
    if(timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Finished";
}   else {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
} 
    timeleft -= 1;
}, 1000);

// button code
function theButton() {
    document.getElementById("button").innerHTML = begin(questionIndex);
}

// begins putting questions on web page
function begin(questionIndex) {
    questionsSection.innerHTML = "";
    ulChoices.innerHTML = "";
// for loop to go through questions in array
    for (var i = 0; i < questions.length; i++) {
        var seenQuestions = questions[questionIndex].title;
        var seenChoices = questions[questionIndex].choices;
        questionsSection.textContent = seenQuestions;
    }
    seenChoices.forEach(function (newList) {
        var listChoice = document.createElement("li");
        listChoice.textContent = newList;
        questionsSection.appendChild(ulChoices);
        ulChoices.appendChild(listChoice);
        listChoice.addEventListener("click", (compare));
    })
}
function compare(event) {
    var userSelection = event.target;

    if (userSelection.matches("li")) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");

    if (userSelection.textContent == questions[questionIndex].answer) {
        score++;
        newDiv.textContent = "CORRECT! The answer is " + questions[questionIndex].answer;
    } else {
        var secondsLeft = (secondsLeft - penalty);
        newDiv.textContent = "WRONG! The correct answer is " + questions[questionIndex].answer;
    }

}
    questionIndex++;

    if (questionIndex >= questions.length) {
        allDone();
        newDiv.textContent = "You reached the end of the quiz!" + " " + "You got " + score + "/" + questions.length + " Correct!";
    } else {
        begin(questionIndex);
    }
    questionsSection.appendChild(newDiv);
}

// should show last page when done
function allDone() {
    questionsSection.innerHTML = "";
    currentBody.innerHTML = "";

// creates new heading
    var newH1 = document.createElement("h1");
    newH1.setAttribute("id", "newH1");
    newH1.textContent = "All done!"

    questionsSection.appendChild(newH1);

// creates new paragraph
    var newP = document.createElement("p");
    newP.setAttribute("id", "newP",);

    questionsSection.appendChild(newP)

if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var newP2 = document.createElement("p");
    clearInterval(secondsLeft);
    newP.textContent = "Your final score is " + timeRemaining;

    questionsSection.appendChild(newP2);
}


   


   
}