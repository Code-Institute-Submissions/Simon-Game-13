# [SIMON GAME](https://stanciudorin.github.io/Simon-Game/)
I have decided to create the Simon Game for my second project, were I can use the skills I have learned and implement the knowledge I have gained so far.
Based on the classic physical game, I have created an online version of it with the help of HTML, CSS, Bootstrap and JavaScript, making it interactive and very enjoyable to play. With its design close to the physical and original game, enhances the user experience attracting more players by being accessible on the web to a larger audience.

#### ABOUT THE GAME
The device has four coloured buttons, each producing a particular tone when it is pressed or activated by the device. A round in the game consists of the device lighting up one or more buttons in a random order, after which the player must reproduce that order by pressing the buttons. As the game progresses, the number of buttons to be pressed increases. [Read more](https://en.wikipedia.org/wiki/Simon_(game)#Gameplay).

## UX
Prior to coding the game, I made some mockups so I can see what design, style, layout to use, in order to enhance the UX. The final [wireframe](https://github.com/stanciudorin/Simon-Game/blob/master/Simon-Game%20Mockup.JPG) is attached to my Github repository so it can easily be view and accessed.

The game itself has a short instructions button feature and is structured into five functional sections, each playing an important part of the game.
* We have a centre section focusing on all the commands allowing the player to turn on the game, start it, activate the strict mode, being able to see on a small display the games messages like the round number, if the player has pressed the wrong sequence or if he had win the game.
* top-left corner, where the green colour button is positioned;
* top-right corner, where the red color button is situated;
* bottom-left, where the yellow colour button has been put;
* bottom-right, where the last button with a color of blue, has been placed.

Being an online version of the popular game Simon and making in accessible to a larger audience, the purpose of this was indeed to reach out to more players. As so many things these days are online based, creating this game for the online communities makes it easier to access and play whenever the user wishes.

This game is for:
  * people who wish to stimulate their brain;
  * people who find playing an online game helps the relax and distress;
  * people who genuinely like playing games in their spare time.

## FEATURES

#### GAME FUNCTIONALITY

Firstly, I have defined the variables that I would be using for this project. All of them have been used in my code to make the game work.

Having the first step done, I have started to create functions in the relevant order as a user would start to play the game and this would be, by turning the game ON for the game to power-up, implementing a STRICT mode that the user can activate, increasing the level of difficulty, or deactivate it to play in a normal level of difficulty, pressing the START button for the game to start with round one.

#### THE FUNCTIONS
1. The ```function play()``` starts the game by the computer having the first turn, lighting-up the first colour of the four randomly through the ```order.push(Math.random() * 4``` to which an extra colour will be added randomly for every round.
2.  The ```gameTurn()``` has been created to help with the games functionality defining the four flashes distancing them apart by s time interval.
3. The functions ```one(), two(), three(), four()``` have been coded to pull the sounds and color change for each specific round, for the player to see what he needs to replicate in movements. Once the game has made its moves the colour would clear to their defaults.
4. Adding the ```addEventListeners``` method for each section of the game had to be implemented to help with the games functionality. As well as ```check()``` function, which checks if the player has pressed the colours in the same sequence as the game showed them. If it is true, than the game proceeds to the next round. If it is not true, the game repeats the last sequence. If the strict mode is on and the player presses the wrong colour, the game will start from the beginning without repeating the last sequence.
5. Reaching the last round, through the ```winGame()``` function, the game checks if all the rounds have been completed successfully. If it has than a message of “WIN!!!” will display on the small screen of the game to inform the player he has completed the last round and won the game.

#### EXISTING FEATURES
  * Instructions button: pressing it, displays the rules of the game and how it should be played;
  * ON button: by pressing this button the game powers on meaning that the game comes to life;
  * START button: pressing this button the game starts with round one, continuing with the following rounds if the player clicks the correct colors;
  * STRICT button: actvating this, will increase the games difficulty, meaning that the game will start from beginning if the player presses the incorrect colour sequence;
  * Four different colored buttons aspecting the game, making it functional in its play.

#### FEATURES LEFT TO IMPLEMENT
As another feature idea left to be implemented I thought about a “LAST” button, where per example the player reaching Level 5 he wants to see again the sequence of that Level before inputting his, simply by pressing the “LAST” button  the game will do just that.

## TECHNOLOGIES USED
* [Balsamiq Mockups 3](https://balsamiq.com/wireframes/desktop/): I have started this project with a few mockups made in the popular and easy to use wireframe Balsamiq Mockups 3;
* [HTML](https://html.com/): After deciding which mockup I will go with I have started with building the structure of the game in HTML step by step and section by section;
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Applying styles to the games structure through CSS makes the game livelier giving it a shape and a form and getting it ready to go through its functionality development;
* [BootstrapCDN](https://www.bootstrapcdn.com/) the project uses **Bootstrap 4** to simplify the structure of the website and make the website responsive easily and efficiently.
* [JavaScript](https://www.javascript.com/)For the functionality of the game I have used JavaScript, creating all the variables and functions for the game to work flawlessly;
* [Google Fonts](https://fonts.google.com/) for styling the projects fonts;
* [JQuery](https://jquery.com/) for building the instructions pop-up tab.

## TESTING
The game has regularly been tested by myself after each function was codded to make sure it works in perfect order. Some functions had to be re-written to make the code work better without any errors. After finishing coding, I have tested it on different platforms and through different methods:
* testing through hardware: two laptops, two desktop PCs, an iPhone, a Samsung mobile phone and two iPads to check its responsiveness;
* testing through people: the game has been tested by a few [Code Institute](https://codeinstitute.net/) students through the Slack main channels and private messages;
  * this was done by clicking all buttons in the order that someone would play the game:
     * ON > START > FLASHING COLOR
     * ON > STRICT > START > FLASHING COLOR
  * Clicking all buttons on a totally random way to check what the game does. This proved that the game was built correctly and will not do anything until it is being turned on;
  * clicking the instruction button, succesfully resulting in the list of instructions to pop-up.
* Code testing through:
  * [W3C Markup Validation](https://validator.w3.org/) to check the validity of the websites CSS code;
  * [W3C CSS validation](https://jigsaw.w3.org/css-validator/) to check the validity of the websites CSS code;
  * [Esprima](http://esprima.org/demo/validate.html) to check the validity of the websites Javascript code;


#### TESTING CONCLUSIONS
Testing has completed successfully returning a fully working rate of 100%, from all people. As well as physical testing and check, I have also tested and checked it through Google Chrome Developer Tools returning no error and working perfectly fine.
All the main buttons working in perfect order, with all their settings applied to, all four “colour” buttons changing their colours when their turn is up like they should. The rule applied to the strict button works fine and the game acts to it by restarting itself when the player gets the order wrong. Having completed the game, the winning message appears in the right parameters of the small display.
The game is fully responsive on different platforms and all testing complete resulting in 100% functionality.
Apart from typing errors from my behalf, I have not had any bugs in the system.

## DEPLOYMENT
Having the possibility to work on the project freely and with my own preferred APIs, I have chosen developed it using the InteliJ Webstorm, committed to Git and pushed to GitHub using the Git Bash software.

I find it easier and quicker, being more production having more time to concentrate on the actual coding.

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/stanciudorin/Simon-Game), the following steps were taken:

1. Log into GitHub;
2. From the list of repositories on the screen, select stanciudorin/Simon-Game;
3. From the menu items near the top of the page, select **Settings**;
4. Scroll down to the **GitHub Pages** section;
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**;
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed;
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

#### How to run this project locally
  To clone this project from GitHub:

1. Follow this link to the [Project GitHub repository](https://github.com/stanciudorin/Simon-Game).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type ``` git clone ```, and then paste the URL you copied in Step 3.
``` git clone https://github.com/USERNAME/REPOSITORY ```
7. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://help.github.com/en/articles/cloning-a-repository).

The live website is also hosted on Git and can be accessed by clicking [here](https://stanciudorin.github.io/Simon-Game/).

## CREDITS

#### CONTENT DESIGN
* The improved design of the game has been made fully by me, having studdied the original version of the phisycal game;
* All text, colors, buttons shapes, fonts also chosen by myself in trying to obtain a refreshed and more modern aspect of the game.

#### MEDIA
* The four sounds were researched by myself and downloaded to my local machine for implementing them into my code.

#### CODE
* The entire project has been codded by me, through the knowledge I have accumulated from the course. I have also done a lot of extra studying, having followed other websites and youtube lessons.

#### Acknowledgements
* I received inspiration for this project while studying the physical game and trying to structure and design it through HTML and CSS and making it work and function through JavaScript.
* Having had my video sessions with my mentor Simen Daehlin, we have discussed what I had in mynd from the begining of this project, how I would like to make it look and function. What features I would like it to have and how to deploy it.