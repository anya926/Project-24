
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball1 = new Paper(100,350,20);
	dustbin1 = new Dustbin(600,600,200,20);
	dustbin2 = new Dustbin(500,575,20,70);
	dustbin3= new Dustbin(700,575,20,70);
	ground1= new Ground(400,620,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  paperball1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:40,y:-40});

	}
}



