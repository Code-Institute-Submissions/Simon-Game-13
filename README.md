# SIMON GAME
I have decided to create the Simon Game for my second project, were I can use the skills I have learned and implement the knowledge I have gained so far.
Based on the classic physical game, I have created an online version of it with the help of HTML, CSS, Bootstrap and JavaScript, making it interactive and very enjoyable to play. With its design close to the physical and original game, enhances the user experience attracting more players by being accessible on the web to a larger audience.

#### ABOUT THE GAME
The device has four coloured buttons, each producing a particular tone when it is pressed or activated by the device. A round in the game consists of the device lighting up one or more buttons in a random order, after which the player must reproduce that order by pressing the buttons. As the game progresses, the number of buttons to be pressed increases. [Read more](https://en.wikipedia.org/wiki/Simon_(game)#Gameplay).

## UX
Prior to coding the game, I made some mockups so I can see what design, style, layout to use, in order to enhance the UX. These wireframes are attached to my Github repository so they can easily be view and accessed easily. 
The game itself has a short instructions button and is structured into five functional sections, each playing an important part of the game. We have a middle section focusing on all the commands allowing the player to turn on the game,  start it, activate the strict mode, being able to see on a small display the games messages like the round number, if the player has pressed the wrong sequence or if he had win the game.
Being an online version of the popular game Simon and making in accessible to a larger audience, the purpose of this was indeed to reach out to more players. As so many things these days are online based, creating this game for the online communities makes it easier to access and play whenever the user wishes.

## FEATURES
*	GAME FUNCTIONALITY - Firstly, I have defined the variables that I would be using for this project. All of them have been used in my code to make the game work.
Having the first step done, I have started to create functions in the relevant order as a user would start to play the game and this would be, by turning the game ON for the game to power-up, implementing a STRICT mode that the user can activate, increasing the level of difficulty, or deactivate it to play in a normal level of difficulty, pressing the START button for the game to start with round one.  With a function of LAST, the game help out the player by repeating the last sequence of colours that lit so he can see the sequence again.

*	THE FUNCTIONS
The ```function play()``` starts the game by the computer having the first turn, lighting-up the first colour of the four randomly through the ```order.push(Math.random() * 4``` to which an extra colour will be added randomly for every round.
The ```gameTurn()``` has been created to help with the games functionality defining the four flashes distancing them apart by s time interval.
The functions ```one(), two(), three(), four()``` have been coded to pull the sounds and coluor change for each specific round, for the player to see what he needs to replicate in movements. Once the game has made its moves the colour would clear to their defaults.
Adding the ```addEventListeners``` method for each section of the game had to be implemented to help with the games functionality. As well as ```check()``` function, which checks if the player has pressed the colours in the same sequence as the game showed them. If it is true, than the game proceeds to the next round. If it`s not true, the game repeats the last sequence. If the strict mode is on and the player presses the wrong colour, the game will start from the beginning without repeating the last sequence.
Reaching the last round, through the ```winGame()``` function, the game checks if all the rounds have been completed successfully. If it has than a message of “WIN!!!” will display on the small screen of the game to inform the player he has completed the last round and won the game.
####	Features left to implement
As another feature idea left to be implemented I thought about a “LAST” button, where per example the player reaching Level 5 he wants to see again the sequence of that Level before inputting his, simply by pressing the “LAST” button  the game will do just that.

## TECHNOLOGIES USED
I have started this project with a few mockups made in the popular and easy to use wireframe *Balsamiq Mockups 3*. After deciding which mockup I will go with I have started with building the structure of the game in **HTML** step by step and section by section. Applying styles to the game`s structure through **CSS** makes the game livelier giving it a shape and a form and getting it ready to go through its functionality development. For this I have used **JavaScript**, creating all the variables and functions for the game to work flawlessly. For making the game responsive on different platforms I reached out using **Bootstrap**. 

## TESTING
The game has regularly been tested after each function to make sure it works in perfect order. Some functions had to be re-written to make the code work better without any errors. After finishing coding, I have tested it on different platforms like two laptops, two desktops, an iPhone, a Samsung mobile phone and two iPads as well as having it tested by a few colleagues through Slack main channel and private messages. Testing has completed successfully returning a fully working rate of 100%, from all people. As well as physical testing and check, I have also tested and checked it through Google Chrome Developer Tools returning no error and working perfectly fine.
All the main buttons working in perfect order, with all their settings applied to, all four “colour” buttons changing their colours when their turn is up like they should. The rule applied to the strict button works fine and the game acts to it by restarting itself when the player gets the order wrong. Having completed the game, the winning message appears in the right parameters of the small display.
The game is fully responsive on different platforms and all testing complete resulting in 100% functionality.
Apart from typing errors from my behalf, I have not had any bugs in the system.

## DEPLOYMENT
Having the possibility to work on the project freely and with my own preferred APIs, I have chosen to upload all my files to my GitHub through the normal “browser upload” method. I find it easier and quick, being more production having more time to concentrate on the actual coding. The live website is also hosted on Git and can be accessed by clicking [here](https://stanciudorin.github.io/Simon-Game/).
