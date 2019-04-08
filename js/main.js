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
        let audio = getElementById("clip3");
        audio.play();
    }
    noise = true;
    bottomLeft.style.background = "#FFF176";
}

function four() {
    if (noise){
    let audio = getElementById("clip4");
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
        playerOrder.push(2);
        check();
        thre();
        if(!win){
            setTimeout(function(){
                clearColor();
            }, 300);
        }
    }
});

bottomRight.addEventListener("click", function(){
    if (on){
        playerOrder.push(3);
        check();
        four();
        if (!win){
            setTimeout(function(){
                clearColor();
            }, 300);
        }
    }
});