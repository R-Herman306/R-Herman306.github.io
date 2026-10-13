// Arrays and Object Notaion Project
// Ryley
// Oct 7
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Function to make the server for online play
function preload() {
  partyConnect(
    "wss://demoserver.p5party.org",
    "array-objects"
  );

}

//Basic Setup Function
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

//Basic Draw Function
function draw() {
  background(220);
}
