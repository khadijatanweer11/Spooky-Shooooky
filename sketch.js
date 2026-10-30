let ghost;
let score = 0;
let duration = 30;
let startTime;
let state = 'start';
let spawnEvery = 60;

function setup() {
  createCanvas(480, 360);
  spawnGhost();
}

function draw() {
  background(69, 20, 69);
  fill(255, 255, 143)
  ellipse(390, 90, 60, 60)
  noStroke()
  fill(242, 114, 10)
  rect(0, 60, 480)
  fill(163, 41, 143)
  rect(0, 120, 480)
  fill(16, 19, 71)
  rect(0, 180, 480)
  fill(130, 39, 77)
  rect(0, 240, 480)
  fill(128, 0, 32)
  rect(0, 300, 480)
  fill(128, 0, 32)
  if (state === 'start') {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(30);
    text('Warning! DO NOT CLICK', width / 2, height / 2);
    return;
  }

  if (state === 'over') {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(30);
    text('You Lost :(\nScore: ' + score + '\nDo not click to retry', width / 2, height / 2);
    return;
  }
   let elapsed = (millis() - startTime) / 1000;
  let timeLeft = max(0, duration - elapsed);
  if (timeLeft <= 0) {
    state = 'over';
    return;
  }
   if (frameCount % spawnEvery === 0) spawnGhost();
  drawGhost(ghost.x, ghost.y);

  textAlign(LEFT, TOP);
  fill(255);
  textSize(22);
  text('Score: ' + score, 12, 10);
  textAlign(RIGHT, TOP);
  text('Time: ' + ceil(timeLeft), width - 12, 10);
}

function mousePressed() {
  if (state === 'start' || state === 'over') {
    state = 'play';
    score = 0;
    startTime = millis();
    spawnGhost();
    return;
  }
  if (dist(mouseX, mouseY, ghost.x, ghost.y) < 30) {
    score++;
    spawnGhost();
  }
}

function spawnGhost() {
  ghost = { x: random(40, width - 40), y: random(40, height - 40) };
}

function drawGhost(x, y) {
  noStroke();
  fill(236, 88, 0);
  ellipse(x, y, 80, 80);
  fill(20);
  ellipse(x - 12, y - 5, 10);
  ellipse(x + 12, y - 5, 10);
}

  