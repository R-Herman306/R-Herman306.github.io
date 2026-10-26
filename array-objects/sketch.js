// Arrays and Object Notaion Project
// Ryley
// Oct 7
//
// Extra for Experts:
// Collected a prompt from user and the answers affected in game states
let groundX = 0;
let groundY;
let groundWidth;
let groundHeight = 50;

let playerBodyX = 5;
let playerBodyY;
let user;

let velocityY = 0;
let gravity = 0.5;

let stepSound;

let spikeX;
let spikeY;
let spikeHeight;

let theRect = [];





//Basic Setup Function
async function setup() {
  createCanvas(windowWidth, windowHeight);
  playerInfo();
  groundY = windowHeight - groundHeight;
  groundWidth = windowWidth;
  playerBodyY = groundY - groundHeight;
  stepSound = await loadSound("steps.wav");
  spikeHeight = random(3,120);
}

//Basic Draw Function
function draw() {
  background(220);
  ground();
  player();
  basicMovement();
  displayUsername();
  jump();
  updatePlayer();
  killBlock();
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
    if(!stepSound.isPlaying) {
      stepSound.loop();

    }
  }
  
  if((keyIsDown("d") || keyIsDown("D")) && playerBodyX <= windowWidth - 50) {
    playerBodyX += user.speed;
    if(!stepSound.isPlaying) {
      stepSound.loop();
    }
    
  }
}

//Creates username above player head
function displayUsername () {
  fill("black");
  text(user.name, playerBodyX + 17,playerBodyY - 10);
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
  spikeX = 150;
  spikeY = groundY - spikeHeight;
  fill("red");
  
  for(let spikeX = 150; spikeX <= windowWidth - 400; spikeX += 150) {
    rect(spikeX, spikeY, 50, spikeHeight);

  }
}

//Checks collsion from players and killboxes

