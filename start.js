let state = "start";

// world
function world() {
  push();
  noStroke();
  //   sky
  fill(200, 220, 255);
  rect(1, 1, 1000, 1000);

  //   first green grass
  fill(145, 219, 119);
  rect(-5, 399, 250, 800);

  //   second green grass
  fill(145, 219, 119);
  rect(450, 399, 4000, 500);

  //   Black space
  fill(0, 0, 0, 90);
  rect(245, 490, 205, 80);

  // blue moomin house
  fill(22, 73, 149);
  rect(670, 200, 140, 250);
  // Yellow window
  fill(238, 198, 31);
  rect(760, 240, 30, 60);

  //   door
  fill(255, 255, 255);
  rect(720, 380, 40, 70);

  //   landing place
  fill(0, 0, 0, 50);
  ellipse(560, 450, 150, 50);
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
  scale(0.5);

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
  translate(x + 10, y - 4);
  rotate(rotation);
  fill(96, 95, 160);
  triangle(42.2, 93.5, 64.4, 53.4, 87.1, 93.5);
  pop();
}

let x = 150;
let y = 100;
let rotation = 0;
let speed = 0;

let grokeY = 30;
let velocity = 1;
let acceleration = 0.2;

let isGameActive = true;
let gameState = "start";

acceleration = 0.1;

function draw() {
  world(1, 1);
  groke(x - 130, grokeY, rotation);

  x = x + Math.cos(rotation) * speed;
  y = y + Math.sin(rotation) * speed;

  if (isGameActive) {
    grokeY = grokeY + velocity;
    velocity = velocity + acceleration;

    if (keyIsPressed && key == " ") {
      velocity = velocity - 0.4;
    }

    if (grokeY > 350) {
      isGameActive = false;
    }
  }

  if (keyIsDown(39)) {
    speed = 5;
  } else if (keyIsDown(37)) {
    speed = -5;
  } else {
    speed = 0;
  }
  //   if (keyIsDown(38)) {
  //     rotation = rotation - 0.01;
  //   } else if (keyIsDown(40)) {
  //     rotation = rotation + 0.01;
  //   } Rotation may not be necessary for this game
}

function StartGame() {
  background(154, 195, 208);
  fill(255, 255, 255);
  textSize(20);
  textFont("times new roman");
  text("We need to help the Groke over to the moomin-house", 160, 220);
  text("Controll him with the spacebar and right/left keys", 190, 245);

  fill(80, 0, 100, 80);
  text("Make sure to land in the circle!", 255, 300);

  fill(30, 30, 30);
  text("To activate the game, press SPACE", 240, 330);

  //   console.log("startscreen is active");
}

function gamePlay() {
  console.log(state);
  world(1, 1);
  groke(x - 130, grokeY, rotation);

  x = x + Math.cos(rotation) * speed;
  y = y + Math.sin(rotation) * speed;

  if (isGameActive) {
    grokeY = grokeY + velocity;
    velocity = velocity + acceleration;

    if (keyIsPressed && key == " ") {
      velocity = velocity - 0.4;
    }

    if (grokeY > 350) {
      isGameActive = false;
    }
  }

  if (keyIsDown(39)) {
    speed = 5;
  } else if (keyIsDown(37)) {
    speed = -5;
  } else {
    speed = 0;
  }
}

function draw() {
  if (state === "start") {
    StartGame();
  } else if (state === "game") {
    gamePlay();
  } else if (state === "win") {
    WinScreen();
  } else if (state === "lose") {
    LoseScreen();
  }
}
function keyPressed() {
  console.log(keyCode);
  if (state === "start" && keyCode === 32) {
    state = "game";
  } else if (state === "lose" && keyCode === 32) {
    state = "game";
    // console.log("game");
  } else if (state === "win" && keyCode === 32) {
    state = "game";
  }
}
// if (manY >= 460 && speed > 3) {
//     console.log("lose");
//     speed = 1;
//     acceleration = 0.2;

//     state = "lose";
//     manY = 100;
//     // Basically att den faller för fort du förlorar
//   } else if (manY >= 460 && speed < 3) {
//     speed = 1;
//     acceleration = 0.2;

//     state = "win";
//     manY = 100;
//     // console.log("win"); den faller tillräckligt snabbt, du vinner
//   }
