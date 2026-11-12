// Project Title
// Your Name
// Date
// Make something happen after a set amount of time
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let message = "Coming Soon...";


async function setup() {
  createCanvas(windowWidth, windowHeight);

  // run new message function after 3 seconds
  window.setTimeout(newMessage, 3000);

  textAlign(CENTER, CENTER);
  textSize(50);
}

function draw() {
  background(220);
  text(message, width/2, height/2);
}

function newMessage() {
  message = "It's here!!!";
}