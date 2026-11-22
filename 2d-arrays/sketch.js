// 2D Arrays and Grids
// Ryley Herman
// October 29, 2026
//
//See how fast you can make all squares black   
//
// Extra for Experts:
// - Played with CSS of the website to change text sizes and change lettering to be bold

//GLOBAL VARIABLES AND CONSTANTS

//Grid Variables
const SQUARE_DIMENSIONS = 10;
let grid;
let cellSize;

//Timer Variables
let timerNumber;
let finishedTime;
let timer;
let filled;
let timerDone = false;

//Description
let gameDescription;
let record;

//Setup function that holds grid size and displays grid
async function setup() {
  if (width < height) {
    cellSize = windowWidth * 0.85 / SQUARE_DIMENSIONS;
  }
  else {
    cellSize = windowHeight * 0.85 / SQUARE_DIMENSIONS;
  }

  let canvas = createCanvas( SQUARE_DIMENSIONS * cellSize , SQUARE_DIMENSIONS * cellSize);
  canvas.parent('container');

  grid = randomizeGrid(SQUARE_DIMENSIONS, SQUARE_DIMENSIONS);

  //Text for displaying timer
  timer = createP(`${timerNumber}`);
  timer.position(100, 50);
  timer.style('font-size', '50px');

  //Text for game description
  gameDescription = createP("Race your friends to fill all squares black!");
  gameDescription.position(100,250 );

  //Text for personal record
  record = createP("Personal record time is 14.20")
  record.position(100,270);
  record.style('font-size', '20px');
  record.style('font-weight', 'bold');
}

//Draw loop with needed functions
function draw() {
  background(220);
  showGrid();
  timeToFinish();
  displayTimer();
  retry();
}

// Displays grid with the variable dimensions
function showGrid() {
  for (let y = 0; y < SQUARE_DIMENSIONS; y++) {
    for (let x = 0; x < SQUARE_DIMENSIONS; x++) {
      if (grid[y][x] === 1) {
        fill('black');
      }
      else if (grid[y][x] === 0) {
        fill('white');
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

//Function used to randomly place black and white squares
function randomizeGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}

// Calculates where the mosue is and handles changing of colours
function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  
  toggleCell(x,y);
}

// Changes squares from black to white
function toggleCell(x,y) {
  if(grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  else if (grid [y][x] === 0) {
    grid[y][x] = 1;
  }
}

//Checks each box on the grid to ensure there all black
function countingColors() {
  for(let rows of grid) {
    for(let cols of rows) {
      if(cols === 0) {
        return false;
      }
    }
  }
  return true;
  playing = false;
}

//Sets timer to millis and stop timer when grid is all black
function timeToFinish() {
  filled = countingColors();
  if (!filled && !timerDone) {
    timerNumber = round(millis() / 1000, 2); 
  }
  else {
    finishedTime = timerNumber;
    timerDone = true;
  }
}

//Displays the timer in the corner
function displayTimer() {
  fill("white");
  timer.html(`${timerNumber}`);
  if(timerDone) {
    timerNumber = finishedTime;
  }
}

//Switch up the grid and reset timer
function retry() {
  if(keyIsDown('r')) {
    randomizeGrid();
    
  }
}
