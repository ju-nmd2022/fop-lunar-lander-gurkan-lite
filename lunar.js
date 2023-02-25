// world
function world() {
  push();
  noStroke();
  fill(208, 213, 255);
  rect(1, 1, 1000, 1000);

  fill(145, 219, 119);
  rect(-5, 399, 250, 800);

  fill(145, 219, 119);
  rect(450, 399, 400, 500);

  fill(22, 73, 149);
  rect(670, 211, 500, 200);

  fill(254, 10, 10);
  triangle(650, 130, 700, 230, 750, 130);

  fill(0, 0, 0, 50);
  ellipse(560, 450, 150, 50);
  pop();
}

// groke
// function groke(x, y) {
//   push();
//   translate(x, y);
//   noStroke();
//   fill(200, 205, 233);
//   rect(75, 50, 150, 150);
// }

function draw() {
  world(1, 1);
}
