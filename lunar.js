// world
function world() {
  push();
  noStroke();
  fill(208, 213, 255);
  rect(1, 1, 1000, 1000);

  fill(145, 219, 119);
  rect(-5, 399, 250, 800);

  fill(145, 219, 119);
  rect(450, 399, 4000, 500);

  fill(22, 73, 149);
  rect(670, 211, 140, 200);

  fill(0, 0, 0, 50);
  ellipse(560, 450, 180, 50);
  pop();

  push();
  noStroke();
  translate(480, -150);
  scale(4);
  fill(254, 10, 10);
  triangle(42.2, 93.5, 64.4, 53.4, 87.1, 93.5);
  pop();
}

// groke
function groke(x, y, rotation) {
  push();
  translate(x, y);
  rotate(rotation);
  noStroke();
  fill(185, 185, 185);
  rect(75, 50, 150, 150);

  fill(250, 247, 247);
  ellipse(109, 90, 45);
  fill(250, 247, 247);
  ellipse(185, 90, 45);

  fill(0, 0, 0);
  ellipse(115, 95, 8);

  fill(0, 0, 0);
  ellipse(192, 95, 8);
  pop();

  push();
  noStroke();
  translate(x + 7, y - 20);
  rotate(rotation);
  scale(2.2);
  fill(96, 95, 160);
  triangle(42.2, 93.5, 64.4, 53.4, 87.1, 93.5);
  pop();
}

let x = 100;
let y = 100;
let rotation = 0;
let speed = 0;

function draw() {
  world(1, 1);
  groke(x, y, rotation);

  x = x + speed;
  y = y + speed;

  if (keyIsDown(38)) {
    speed = 5;
  } else if (keyIsDown(40)) {
    speed = -5;
  } else {
    speed = 0;
  }
  if (keyIsDown(37)) {
    rotation = rotation - 0.05;
  } else if (keyIsDown(39)) {
    rotation = rotation + 0.05;
  }
}
