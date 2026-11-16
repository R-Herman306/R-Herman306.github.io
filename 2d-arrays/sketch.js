// 2D Arrays and Grids
// Ryley Herman
// October 29, 2026
//
//See how fast you can make all squares black   
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global variables and constants
const SQUARE_DIMENSIONS = 10;
let grid;
let cellSize;
let timer = 0;  

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
}

//Draw loop with needed functions
function draw() {
  background(220);
  showGrid();
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

