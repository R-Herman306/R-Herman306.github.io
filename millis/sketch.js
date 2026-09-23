// Millis Demo
// Ryley Herman
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let waitTime = 2000;
let lastSwapTime = 0;
let state = "red";

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawBackground();
  swapStateIfNeeded();
  

}


function swapStateIfNeeded() {
  if(millis() > lastSwapTime + waitTime) {
    lastSwapTime = millis();
    if (state === "red") {
      state = "black"
    }
    else if (state === "black") {
      state = "red"
    }
  }
}



function drawBackground() {
  if ( state === "black") {
    background("black");

  }
  else if(state === "red") {
    background("red");
  }
}