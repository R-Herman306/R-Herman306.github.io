// Perlin Noise Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let time = 0;
let deltaTime = 0.01;


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let x = noise(time) * width;
  let y = noise(time +1 ) * height;
  circle(x,y, 50);

  time += deltaTime;
  
}
