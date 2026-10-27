// Arrays and Object Notaion Project
// Ryley
// Oct 7
//
// Extra for Experts:
// Collected a prompt from user and the answers affected in game states

//Global Variables\\

//Ground Globals
let groundX = 0;
let groundY;
let groundWidth;
let groundHeight = 50;

//User Globals
let playerBodyX = 5;
let playerBodyY;
let user;
let state = "menu"

//Gravity Globals
let velocityY = 0;
let gravity = 0.5;

//Killbox Globals
let spikeX;
let spikeY;
let hit = false;
let spikeHeights = [];

//State Screens Globals
let buttonX;
let buttonY;
let buttonWidth = 300;
let buttonHeight = 75;
let mouseStart = false;
let mouseDeath = false;
let dingSound;
let deathSound; 
 
//Setup function that checks variables once and runs player info
async function setup() {
  createCanvas(windowWidth, windowHeight);

  playerInfo();

  groundY = windowHeight - groundHeight;
  groundWidth = windowWidth;
  playerBodyY = groundY - groundHeight;

  dingSound = await loadSound("ding.wav");
  deathSound = await loadSound("deathBell.wav");

  for(let spikeX = 150; spikeX <= windowWidth - 325; spikeX += 150) {
    spikeHeights.push(random(7,150));
  }
}

//Draw Function that checks the state as well as calls the functions
function draw() {
  background(220);
  if(state === "play") {
    ground();
    player();
    basicMovement();
    displayUsername();
    jump();
    updatePlayer();
    killBlock();
    playerDead();
  }

  else if(state === "menu") {
    startScreen();
  }

  else if(state === "death") {
    deathScreen();
  }
}

//Creates the Ground
function ground() {
  fill("Green");
  rect(groundX, groundY,groundWidth,groundHeight);
}

//Takes username from player input and picks the player colour
function playerInfo() {
  user =  {
    name: undefined, 
    playerColour: undefined,
    speed: 5,
    jumpHeight: -15,
  };

  user.name = prompt("Whats your Username?");
  user.playerColour = prompt("What colour would you like?");
}

//makes the player
function player() {
  fill(user.playerColour);
  rect(playerBodyX,playerBodyY,50,50);
}

//Creates player movement
function basicMovement() {
  if ((keyIsDown("a") || keyIsDown("A")) && playerBodyX >= 0) {
    playerBodyX -= user.speed;
    }
  
  
  if((keyIsDown("d") || keyIsDown("D")) && playerBodyX <= windowWidth - 50) {
    playerBodyX += user.speed;
     
  }
}

//Creates username above player head
function displayUsername () {
  fill("black");
  textSize(12);
  text(user.name, playerBodyX + 15,playerBodyY - 10);
}

//Creates Jumping Mechanic
function jump() {
  if (keyIsDown("w") && playerBodyY === groundY - groundHeight) {
    velocityY = user.jumpHeight;
  }
  
}

//Updates player when the Jump function happens
function updatePlayer() {
  if(playerBodyY !== groundY - groundHeight) {
    velocityY += gravity;
  }
  
  playerBodyY += velocityY;

  if(playerBodyY >= groundY - groundHeight) {
    playerBodyY = groundY - groundHeight;
    velocityY = 0;
  }
}

//Makes killboxes that the player has to hop over
function killBlock () {
  fill("red");

  let i = 0;
  
  for(let spikeX = 150; spikeX <= windowWidth - 325; spikeX += 150) {
    let spikeHeight = spikeHeights[i]; 
    let spikeY = groundY - spikeHeight
    rect(spikeX, spikeY, 50, spikeHeight);

    i++;

  }
}

//Checks collsion from players and killboxes 
function playerDead() {
  let i = 0;

  for(let spikeX = 150; spikeX <= windowWidth - 325; spikeX += 150) {
    let spikeHeight = spikeHeights[i]; 
    let spikeY = groundY - spikeHeight

  hit = collideRectRect(playerBodyX,playerBodyY,50,50, spikeX, spikeY, 50, spikeHeight);

  if(hit) {
    state = "death"
    deathSound.play();
    }
    i++
 } 
}

//Creates the start screen as well as takes care of state change
function startScreen() {
  if(state === "menu") {

    buttonX = width/2 - 160;
    buttonY = height/2;
  
    textSize(50);
    fill("black");
    text("Welcome" + " " + user.name + "!", windowWidth/2 - 175, 200);
    
    fill("black")
    rect(buttonX,buttonY,buttonWidth,buttonHeight)
    
    fill("white");
    text("PLAY!",windowWidth/2 - 85, height/2 + 50);
  
    mouseStart = collidePointRect(mouseX, mouseY,buttonX,buttonY,buttonWidth,buttonHeight);
  
    if(mouseIsPressed === true && mouseStart) {
     dingSound.play();
      
      state = "play";
    }
  }
}

//Projects a deaths screen upon collsion with scary red rectangles
function deathScreen() {
  if(state === "death") {
    textSize(65);
    fill("red");
    text("You Died!", width/2-150, height/4);

    fill("black");
    rect(buttonX,buttonY,buttonWidth,buttonHeight);

    fill("white");
    textSize(50);
    text("Return",windowWidth/2 - 85, height/2 +50); 

    mouseDeath = collidePointRect(mouseX,mouseY, buttonX,buttonY,buttonWidth,buttonHeight);

    if(mouseIsPressed === true && mouseDeath) {
      dingSound.play();

      playerBodyX = 5
      playerBodyY = groundY - groundHeight;
      velocityY = 0;
  
      state = "play";
    }
  }
}
