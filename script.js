// timer code 
var timeleft = 10;
var downloadTimer = setInterval(function(){
    if(timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Finished";
}   else {
        document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
} 
    timeleft -= 1;
}, 1000);