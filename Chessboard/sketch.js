function setup() {
  // Make the largest square we can...
  if (windowWidth < windowHeight) {
    createCanvas(windowHeight, windowHeight);

  }
  else {
    createCanvas(windowWidth,windowWidth);
  }
}

function draw() {
  background(220);
  chessBoard();
}

let colour = "black";

function chessBoard() {
  for(let x = 0; x < width; x += width/8) {
    if(colour === "black"){
      colour = "white";
    }
    else if(colour === "white") {
      colour = "black";
    }
    for(let y = 0; y < height; y += height/8) {
      fill(colour);
      rect(x,y, width/8,height/8);
      if (colour === "black") {
        colour = "white";
      }
      else if (colour === "white") {
        colour = "black";
      }
    }
  }
}