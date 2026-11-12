// Project Title
// Your Name
// Date
// Window.setinterval demo, change colour of circle every .5 secomds
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theColour;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  changeColour();

  //Call change colour function once every half second
  window.setInterval(changeColour, 500);
}

function draw() {
  background(220);
  fill(theColour);
  circle(width/2, height/2, 400);
}

function changeColour() {
  theColour = color(random(255), random(255), random(255));
}