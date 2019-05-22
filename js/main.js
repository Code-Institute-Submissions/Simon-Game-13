let order = []; //variable that keeps track of the order of the lights flashing
let playerOrder = []; //the order that the player is pressing the lights in
let flash; //the number of flashes
let count; //keep track of what count/level we are at
let good; //boolean showing if the player has pressed the right colours or not
let compTurn; //boolean keeps track of the computer`s or player`s turn
let intervalId; //sets the interval
let strict = false; //keeps track if the strict button has been pressed (starts false/not pressed)
let noise = true; //to make the noise per colour
let on = false; //the game starts as turned off; player needs to turn it on
let win; //tracks if the player has won the game or not

/*
    defining my querySelectors for referencing some HTML elements in Javascript
*/

const turnCounter = document.querySelector("#count");
const topLeft = document.querySelector("#top-left");
const topRight = document.querySelector("#top-right");
const bottomLeft = document.querySelector("#bottom-left");
const bottomRight = document.querySelector("#bottom-right");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");
const strictButton = document.querySelector("#strict");

/*
    adding click EventListener to the onButton to start functioning when it is pressed
*/

onButton.addEventListener("click", function(){
    if (on === false){
        on = true;
        turnCounter.innerHTML = "-";
        onButton.innerHTML = "OFF";
        onButton.style.background = "#4CAF50";
    }
    else{
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId);
        onButton.innerHTML = "ON";
        startButton.style.display = "block";
        onButton.style.background = "#f44336";
    }
});

/*
    adding click EventListener to the strictButton to start functioning when it is pressed
*/

strictButton.addEventListener("click", function(){
    if (strict === false){
        strict = true;
        strictButton.style.background = "#4CAF50";
    }
    else{
        strict = false;
        strictButton.style.background = "#f44336";
    }
});

/*
    adding click EventListener to the startButton to start functioning when it is pressed
*/

startButton.addEventListener("click", function(){
    if (on || win){
        play();
        startButton.style.display = "none";
    }
});

/*
     defining the play() function that plays the game
*/

function play(){
    win = false;
    order = [];
    playerOrder=[];
    flash = 0;
    intervalId = 0;
    count = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (let i = 0; i < 10; i++){
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 900);
}
/*
    gameTurn() function make the game to function step by step
*/
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
            if(order[flash] === 1) {
                one();
            }
            if(order[flash] === 2) {
                two();
            }
            if(order[flash] === 3) {
                three();
            }
            if(order[flash] === 4) {
                four();
            }
            flash++;
        }, 200);
    }
}

/*
    creating the functions for all four flashing colours
*/
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

/*
     defining the function that clears the colours that flashed in functions one() to four()
     and re-instates them to their standard colours
*/
function clearColor(){
    topLeft.style.backgroundColor = "#4CAF50";
    topRight.style.backgroundColor = "#f44336";
    bottomLeft.style.backgroundColor = "#FFEB3B";
    bottomRight.style.backgroundColor = "#2196F3";
}

/*
    function that  lights the colour once pressed
*/
function flashColor(){
    topLeft.style.backgroundColor = "#81C784";
    topRight.style.backgroundColor = "#FF8A65";
    bottomLeft.style.backgroundColor = "#FFF176";
    bottomRight.style.backgroundColor = "#4FC3F7";
}

/*
     programming the functions so the player can show that he knows what colour lit up by click the four colors
*/

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

/*
     creating the check() function to check if the player has pressed the correct colours in the correct order
*/

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

/*
    creating the winGame() function that defines what the game does if the player reaches the last round and wins tha game
*/

function winGame(){
    flashColor();
    turnCounter.innerHTML = "WIN!!!";
    on = false;
    win = true;
}