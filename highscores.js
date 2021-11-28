var highScore = document.querySelector("#highscores");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#back");

// clears scores 
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});
// pulls info from local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var highScoreList = document.createElement("li");
        highScoreList.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(highScoreList); 
    }
}
// moves user back to main index page
goBack.addEventListener("click", function(){
    window.location.replace("./index.html");
})