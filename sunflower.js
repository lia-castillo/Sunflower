
function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas(600, 600);
  
}

function draw() { 
  background (0, 204, 0);
  //petals
  fill(255, 255, 26);
  circle(160, 160, 100);
  fill(255, 255, 26);
  circle(150, 220, 100);
  fill(255, 255, 26);
  circle(190, 270, 100);
 fill(255, 255, 26);
  circle(250, 270, 100);
 fill(255, 255, 26);
  circle(290, 220, 100);
  fill(255, 255, 26);
  circle(280, 160,100);
  fill(255, 255, 26);
  circle(220, 140, 95);
  //center
  fill(179, 60, 0);
  circle(220, 200,100);
}