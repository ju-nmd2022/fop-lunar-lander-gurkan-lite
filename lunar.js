// world
function world() {
  push();
  noStroke();
  //   sky
  fill(208, 213, 255);
  rect(1, 1, 1000, 1000);

  //   first green grass
  fill(145, 219, 119);
  rect(-5, 399, 250, 800);

  //   second green grass
  fill(145, 219, 119);
  rect(450, 399, 4000, 500);

  // blue moomin house
  fill(22, 73, 149);
  rect(670, 211, 140, 200);

  //   landing place
  fill(0, 0, 0, 50);
  ellipse(560, 450, 180, 50);
  pop();

  //   roof of house
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

  //   body
  fill(185, 185, 185);
  rect(75, 50, 150, 150);

  //   background eyes
  fill(252, 253, 195);
  ellipse(109, 90, 45);
  fill(252, 253, 195);
  ellipse(185, 90, 45);

  //   pupils
  fill(0, 0, 0);
  ellipse(115, 95, 8);
  fill(0, 0, 0);
  ellipse(192, 95, 8);
  pop();

  //   triangle mouth
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

let grokeY = 100;
let velocity = 1;
let acceleration = 0.2;

let isGameActive = true;

acceleration = 0.1;

function draw() {
  world(1, 1);
  groke(x, grokeY, rotation);

  x = x + Math.cos(rotation) * speed;
  y = y + Math.sin(rotation) * speed;

  if (isGameActive) {
    grokeY = grokeY + velocity;
    velocity = velocity + acceleration;

    if (mouseIsPressed) {
      velocity = velocity - 0.2;
    }

    if (grokeY > 200) {
      isGameActive = false;
    }
  }

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
