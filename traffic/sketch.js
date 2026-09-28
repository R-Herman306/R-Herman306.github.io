// Traffic Light Starter Code
// Ryley
// Sept 28 2026

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis





let state = "green";
let greenTime = 3000;
let redTime = 3200;
let yellowTime = 2000;
let lastSwitch = 0;





async function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  lightUp();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}


function lightUp() {
  if (state === "green") {
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50);
    if(millis() >= greenTime + lastSwitch) {
      lastSwitch += millis();
      state = "yellow";
    }
    
  }

  if (state === "yellow") {
    fill("yellow");
    ellipse(width/2, height/2, 50, 50);
    if(millis() >= yellowTime + lastSwitch) {
      lastSwitch += millis();
      state = "red";
      
    }

  }

  if (state === "red") {
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50);
    if (millis() >= redTime  + lastSwitch) {
      lastSwitch += millis();
      state = "green";
    }
  }

}