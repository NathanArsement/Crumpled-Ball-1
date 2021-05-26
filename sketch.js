
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, grd, dustbinBottom, dustbinLeft, dustbinRight;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;
	grd = new ground(400, 175, 800, 10);
	ball = new paper(100, 150, 15);
	
	dustbinBottom = new dustbin(700, 160, 50, 10);
	dustbinLeft = new dustbin(675, 140, 10, 50);
	dustbinRight = new dustbin(725, 140, 10, 50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  grd.display();
  ball.display();
  dustbinBottom.display();
  dustbinLeft.display();
  dustbinRight.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:36, y:-35});
	}
}

