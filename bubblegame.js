let hitButton = document.getElementById("hits");
let startButton = document.querySelector(".start-game");
let panelSpace = document.querySelector(".panel");
let scoreSpace = document.getElementById("score");
let timerSpace = document.getElementById("timer");
var timer = 6;
var score = 0;
let randomNumber = Math.floor(Math.random()*10)
console.log(randomNumber);

startButton.addEventListener("click", function(){
        runTimer();
        hitChange() 
        makeBubble(); 

})
function hitChange() {
    randomNumber = Math.floor(Math.random() * 10);
    hitButton.value = randomNumber;
}

function makeBubble() {
    var bubbles = "";

    for (var i = 0; i < 128; i++) {
        var rn = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${rn}</div>`;
    }
    panelSpace.innerHTML = bubbles;

    // Allow clicking on bubbles only when the timer is running
    if (timer > 0) {
        panelSpace.addEventListener("click", bubbleClickHandler);
    } else {
        endGame();
    }
}

function runTimer() {
    timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            timerSpace.value = timer;
        } else {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

makeBubble()
runTimer();


function bubbleClickHandler(e) {
    if (hitButton.value == e.target.innerHTML) {
        score += 10;
        scoreSpace.value = score;
        makeBubble();
        hitChange();
    }
}

function endGame() {
    // Disable clicking on bubbles when the game ends
    panelSpace.removeEventListener("click", bubbleClickHandler);

    // Optionally, you can display a message or perform other end-of-game actions
    console.log("Game Over! Your score: " + score);
}
