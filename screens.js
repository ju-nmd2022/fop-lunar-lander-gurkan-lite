//which level are we on
var level;

//size of our rectangle
var rectSize;

//a boolean variable to turn some "lights on"
var turnLightsOn;

//a variable that will let us change the color of the end text;
var endFill;

function setup() {
  createCanvas(900, 900);
  level = 0;

  rectSize = 50;

  turnLightsOn = false;

  endFill = "white";
}

function draw() {
  background(154, 195, 208);

  if (level == 0) {
    fill(endFill);
    textSize(20);
    textFont("times new roman");
    text("We need to help the Groke over to the moomin-house", 160, 250);
    text("To activate the game, press S", 250, 300);
  }

  //playing the game
  else if (level == 1) {
    fill("red");
    rect(mouseX, mouseY, rectSize, rectSize);

    //if the mouse leaves the window once you have started, you lose the game
    if (
      mouseX + rectSize > 400 ||
      mouseX < rectSize / 2 ||
      mouseY + rectSize > 400 ||
      mouseY < 0
    ) {
      console.log("you lose");
      level = 99;
    }

    if (turnLightsOn) {
      fill("green");
      ellipse(20, 50, 20, 20);
      ellipse(70, 50, 20, 20);
      ellipse(120, 50, 20, 20);
      ellipse(170, 50, 20, 20);
    }
  } else if (level == 99) {
    fill(endFill);
    textSize(50);
    text("Game Over", 90, 150);
    fill("black");
    textSize(30);
    text("Press 'R' to restart", 80, 200);
  }
}

function keyPressed() {
  if (key == "s") {
    //start the game,
    if (level == 0) {
      level = 1;
    }

    //if we have lost the game, reset the game for any "starting" conditions
    else if (level == 99) {
      level = 0;
      rectSize = 50;
      turnLightsOn = false;
      endFill = "white";
    }
  }

  if (keyCode === UP_ARROW) {
    if (level == 1) {
      rectSize += 5;
    } else {
      rectSize = 50;
    }
  }

  if (key == "d") {
    //if we are in the first level
    if (level == 1) {
      //turn the lights on
      turnLightsOn = !turnLightsOn;
    }

    //change the color at the game over screen to a random value
    else if (level == 99) {
      var r = random(0, 255);
      var g = random(0, 255);
      var b = random(0, 255);

      endFill = color(random(255), random(255), random(255));
    }
  }
}
