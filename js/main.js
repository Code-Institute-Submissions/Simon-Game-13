let order = [];
let playerOrder = [];
let flash;
let count;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;
let last;

const turnCounter = document.querySelector("#count");
const topLeft = document.querySelector("#top-left");
const topRight = document.querySelector("#top-right");
const bottomLeft = document.querySelector("#bottom-left");
const bottomRight = document.querySelector("#bottom-right");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");
const strictButton = document.querySelector("#strict");
const lastButton = document.querySelector("#last");

onButton.addEventListener("click", function(){
    if (on === false){
        on = true;
        turnCounter.innerHTML = "-";
        onButton.innerHTML = "OFF";
    }
    else{
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
        onButton.innerHTML = "ON";
        startButton.style.display = "block";
    }
});

strictButton.addEventListener("click", function(){
    if (strictButton.click === true){
        strict = true;
        strictButton.innerHTML = "STRICT ON";
    }
    else{
        strict = false;
        strictButton.innerHTML = "STRICT";
    }
});

startButton.addEventListener("click", function(){
    if (on || win){
        play();
        startButton.style.display = "none";
    }
});

function play(){
    win = false;
    order = [];
    playerOrder=[];
    flash = 0;
    intervalId = 0;
    count = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (var i = 0; i < 10; i++){
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 900);
}

function gameTurn(){
    on = false;
    if (flash === count){
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn){
        clearColor();
        setTimeout(function(){
            if(order[flash] === 1) one();
            if(order[flash] === 2) two();
            if(order[flash] === 3) three();
            if(order[flash] === 4) four();
            flash++;
        }, 300);
    }
}

function one(){
    if (noise){
        let audio = document.getElementById("clip1");
        audio.play();
    }
    noise = true;
    topLeft.style.background = "#81C784";
}

function two(){
    if (noise){
        let audio = document.getElementById("clip2");
        audio.play();
    }
    noise = true;
    topRight.style.background = "#FF8A65";
}

function three(){
    if (noise){
        let audio = document.getElementById("clip3");
        audio.play();
    }
    noise = true;
    bottomLeft.style.background = "#FFF176";
}

function four() {
    if (noise){
    let audio = document.getElementById("clip4");
    audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "#4FC3F7";
}

function clearColor(){
    topLeft.style.backgroundColor = "#4CAF50";
    topRight.style.backgroundColor = "#f44336";
    bottomLeft.style.backgroundColor = "#FFEB3B";
    bottomRight.style.backgroundColor = "#2196F3";
}

function flashColor(){
    topLeft.style.backgroundColor = "#81C784";
    topRight.style.backgroundColor = "#FF8A65";
    bottomLeft.style.backgroundColor = "#FFF176";
    bottomRight.style.backgroundColor = "#4FC3F7";
}

topLeft.addEventListener("click", function(){
    if (on){
        playerOrder.push(1);
        check();
        one();
        if (!win){
            setTimeout(function(){
                clearColor();
            }, 300);
        }
    }
});

topRight.addEventListener("click", function(){
    if (on){
        playerOrder.push(2);
        check();
        two();
        if(!win){
            setTimeout(function(){
                clearColor();
            }, 300);
        }
    }
});

bottomLeft.addEventListener("click", function(){
    if (on){
        playerOrder.push(3);
        check();
        three();
        if(!win){
            setTimeout(function(){
                clearColor();
            }, 300);
        }
    }
});

bottomRight.addEventListener("click", function(){
    if (on){
        playerOrder.push(4);
        check();
        four();
        if (!win){
            setTimeout(function(){
                clearColor();
            }, 300);
        }
    }
});

function check(){
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        good = false;

    if (playerOrder.length === 10 && good){
        winGame();
    }

    if (good === false){
        flashColor();
        turnCounter.innerHTML = "NO!!!";
        setTimeout(function(){
            turnCounter.innerHTML = count;
            clearColor();

            if (strict){
                play();
            }
            else {
                compTurn = true;
                flash = 0;
                playerOrder = [];
                good = true;
                intervalId = setInterval(gameTurn, 800);
            }
        }, 800);
    }
    noise = false;

    if (count === playerOrder.length && good && !win){
        count++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = count;
        intervalId = setInterval(gameTurn, 800);
    }
}

function winGame(){
    flashColor();
    turnCounter.innerHTML = "WIN!!!";
    on = false;
    win = true;
}

lastButton.addEventListener("click", function() {
    check();
});