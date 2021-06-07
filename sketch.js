const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var car1IMG,car2IMG;
var car1, car2;
var line;

function preload()
{
  car1IMG = loadImage("images/car1.png");
  car2IMG = loadImage("images/car2.png");
}

function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight)

  engine = Engine.create();
  world = engine.world;

  car1 = createSprite(400, 650, 50, 50);
  car1.addImage(car1IMG)
  car1.scale = 0.5;

  car2 = createSprite(1300, 650, 50, 50);
  car2.addImage(car2IMG)
  car2.scale = 1;

  track = new Track(windowWidth/2, -windowHeight*6, windowWidth, windowHeight*14);

  line = createSprite(windowWidth/2, -windowHeight*12.6, windowWidth, 20);
  line.visible = false;
}

function draw() 
{
  background("grey")

  if(keyDown(UP_ARROW))
  {
    car1.position.y = car1.position.y - 50;
    car2.velocityY = -49;
    camera.x = windowWidth/2;
    camera.y = car1.position.y;
  }

  if(car1.isTouching(line))
  {
    alert("Game Over " + "You Win", 100, 200)
  }

  if(car2.isTouching(line))
  {
    alert("Game Over " + "You Lost", 100, 200)
    car2.velocityY = 0;
  }

  Engine.update(engine)

  track.display();

  drawSprites();
}