var path;
var pathImg;
var boy;
var boyAnimation;
var leftBoundary;
var rightBoundary;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyAnimation = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200, 200);
  path.addImage("path", pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(200, 300, 50, 50);
  boy.addAnimation("boy", boyAnimation);
  boy.scale = 0.05;

  leftBoundary = createSprite(40, 200, 10, 400);
  leftBoundary.visible = false;

  rightBoundary = createSprite(367, 200, 10, 400);
  rightBoundary.visible = false;
}

function draw() {
  background(0);

  if(path.y > 400) {
    path.y = height/2;
  }

  if(boy.x < 40) {
    boy.x = 35;
  }

  boy.x = World.mouseX;

  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  drawSprites();
}
