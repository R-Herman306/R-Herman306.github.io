// 2D Arrays and Grids
// Ryley Herman
// October 29, 2026
//
//See how fast you can make all squares black   
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const SQUARE_DIMENSIONS = 10;
let grid;
let cellSize;

//Setup function that holds grid size and displays grid
async function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height) {
    cellSize = width / SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height / SQUARE_DIMENSIONS;
  }
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


function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  toggleCell(x,y);
}


function toggleCell(x,y) {
  if(grid[y][x] === 1) {
    grid[y][x] = 0;
  }

  else if (grid [y][x] === 0) {
    grid[y][x] = 1;
  }
}

