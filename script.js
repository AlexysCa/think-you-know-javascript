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

// timer code 
var timeleft = 60;
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
    document.getElementById("button").innerHTML = "Let the games begin!";
}