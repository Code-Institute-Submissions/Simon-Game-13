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

const turnCounter = document.querySelector("#count");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");
const strictButton = document.querySelector("#strict");
const lastbutton = document.querySelector("#last");

onButton.addEventListener("click", function(){
    if (onButton.click === true){
        on = true;
        turnCounter.innerHTML = "-";
    }
    else{
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
    }
});

strictButton.addEventListener("click", function(){
    if (strictButton.click === true){
        strict = true;
    }
    else{
        strict = false;
    }
});

startButton.addEventListener("click", function(){
    if (on || win){
        play();
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
        order.push(Math.floor(math.random() * 4) + 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 900);
}

function gameTurn(){
    on = false;
    if (flash === turn){
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