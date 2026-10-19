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
let playerSpeed = 5;

let username = prompt("Whats your username?");
let playerColour = prompt("Chose a colour");

//Basic Setup Function
async function setup() {
  createCanvas(windowWidth, windowHeight);
  // await partyConnect("wss://demoserver.p5party.org", "array-objects");
  // shared = await partyLoadMyShared("shared", {playerBodyX, playerBodyY,username,playerColour});
  groundY = windowHeight - groundHeight;
  groundWidth = windowWidth;
  playerBodyY = groundY - groundHeight;
}

//Basic Draw Function
function draw() {
  background(220);
  ground();
  player();
  movement();
}

//Creates the Ground
function ground() {
  fill("Green");
  rect(groundX, groundY,groundWidth,groundHeight);
}

//Takes username from player input and picks the player colour
function playerInfo() {
  user =  {
    name: '${username}', 
    playerColour: '${playerColour}',
  };
}

//makes the player
function player() {
  fill(playerColour);
  rect(playerBodyX,playerBodyY,50,50);
}

//Creates player movement
function movement() {
  if (keyIsDown("a") || keyIsDown("A")) {
    playerBodyX -= playerSpeed;
  }
  if(keyIsDown("d") || keyIsDown("D")) {
    playerBodyX += playerSpeed;
  }

}

//Creates username above player head
