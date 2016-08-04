var x = 220;
var y =200;
var v= 2;
var vy=1;

function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas(600, 600);
}

function draw() { 
  background (128, 212, 255);
 //stem
  stroke(0, 204, 0);
  line( x, y, 220, 400);
  //petals
  stroke(0, 0, 0);
  fill(255, 255, 26);
  circle(x-60, y-40, 100);
  fill(255, 255, 26);
  circle(x-70, y+20, 100);
  fill(255, 255, 26);
  circle(x-30, y+70, 100);
 fill(255, 255, 26);
  circle(x+30, y+70, 100);
 fill(255, 255, 26);
  circle(x+70, y+20, 100);
  fill(255, 255, 26);
  circle(x+60, y-40,100);
  fill(255, 255, 26);
  circle(x, y-60, 95);
  //center
  fill(179, 60, 0);
  circle(x, y,100);
  //wind
  x= x+v;
  y=y+vy;
  if (x>450){
    v=-v;
    vy=-vy;
  }
  if (x<20){
    v=-v;
    vy=-vy;
  }
  if(x==220){
    vy=-vy;
  }
  
}