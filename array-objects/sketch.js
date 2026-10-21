// Arrays and Object Notaion Project
// Ryley
// Oct 7
//
// Extra for Experts:
// Collected a prompt from user and the answers affected in game states
let shared;
let groundX = 0;
let groundY;
let groundWidth;
let groundHeight = 50;

let playerBodyX = 5;
let playerBodyY;
let user;



//Basic Setup Function
async function setup() {
  createCanvas(windowWidth, windowHeight);
  //await partyConnect("wss://demoserver.p5party.org", "array-objects");
  //shared = await partyLoadMyShared("shared", {playerBodyX, playerBodyY,username,playerColour});
  playerInfo();
  groundY = windowHeight - groundHeight;
  groundWidth = windowWidth;
  playerBodyY = groundY - groundHeight;
}

//Basic Draw Function
function draw() {
  background(220);
  // playerInfo();
  ground();
  player();
  basicMovement();
  displayUsername();
  // jump();
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
    jumpHeight: 25,
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
  if (keyIsDown("a") || keyIsDown("A")) {
    playerBodyX -= user.speed;
  }
  if(keyIsDown("d") || keyIsDown("D")) {
    playerBodyX += user.speed;
  }
}

//Creates username above player head
function displayUsername () {
  fill("black");
  text(user.name, playerBodyX + 17,playerBodyY - 10);
}

//Creates Jumping Mechanic
function jump() {
  if((keyIsPressed("w") || keyIsPressed("W")) && playerBodyY === groundY - groundHeight) {
    playerBodyY += user.jumpHeight;

    if (playerBodyY >= groundY - groundHeight - user.jumpHeight) {
      while(playerBodyY !== groundY-groundHeight) {
        playerBodyY -= 1;
      }
    }
  }
}
