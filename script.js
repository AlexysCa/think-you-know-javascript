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
var currentTimer = document.querySelector("#currentTimer")
var timer = document.querySelector("#button");
var penalty = 10;
var holdInterval = 0;
var secondsLeft = 76;

// timer code 
timer.addEventListener("click", function (){
    if (holdInterval === 0) {
        holdInterval = setInterval(function(){
        secondsLeft--;
        currentTimer.textContent = "Time: " + secondsLeft;
    
    if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
        currentTimer.textContent = "Time is up!";
             }
        }, 1000);
    }
    begin(questionIndex);
})

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
        newDiv.textContent = "CORRECT!";
    } else {
        secondsLeft = secondsLeft - penalty;
        newDiv.textContent = "WRONG!";
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
    clearInterval(holdInterval);
    newP.textContent = "Your final score is " + timeRemaining;

    questionsSection.appendChild(newP2);
}

var label = document.createElement("label");
label.setAttribute("id", "createlabel");
label.textContent = "Enter your initials: ";

questionsSection.appendChild(label);

var userInput =  document.createElement("input");
userInput.setAttribute("type", "text");
userInput.setAttribute("id", "initials");
userInput.textContent = "";

questionsSection.appendChild(userInput);

var userSumbit = document.createElement("button");
userSumbit.setAttribute("type", "submit");
userSumbit.setAttribute("id", "Submit");
userSumbit.textContent = "Submit";

questionsSection.appendChild(userSumbit);

// captures users entered initals
userSumbit.addEventListener("click", function() {
    var initials = userInput.value;

    if (initials === null) {
        window.alert("Enter your initals to save your score!");
    } else {
        var userScore = {
            initials: initials,
            score: timeRemaining,
        }
        window.alert(timeRemaining + " is your final score!");
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(userScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);

        window.location.replace("./indexhighscores.html");
    }
}) 
}