let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
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