var bird;
var pipes = [];
var score = 0;

function preload() {
    //img = loadImage('static/kario.png');
    img = loadImage('static/vertti_paa.png');
}

function setup() {
 img.resize(80, 80);
  if(windowWidth > windowHeight) {
      createCanvas(windowHeight, windowHeight);
  } else {
      createCanvas(windowWidth, windowWidth);
  }
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  bird.show();
  bird.update();

  if (frameCount % 100 == 0) {
      pipes.push(new Pipe());
  }

  for (var i = pipes.length-1; i >= 0; i--){
      pipes[i].show();
      pipes[i].update();

      if (pipes[i].hits(bird)) {
          this.score = 0;
      }

      if (pipes[i].ofscreen()) {
          //this.score++;
          pipes.splice(0, 1);
      }

      if (pipes[i].x+pipes[i].w < bird.x) {
          this.score++;
      }
  }
  textSize(32);
  text(this.score, 10, 40);
  fill(0, 255, 0);
}

function keyPressed() {
    if (key == ' ') {
        bird.lift();
    }
}

function touchStarted() {
    bird.lift();
}
