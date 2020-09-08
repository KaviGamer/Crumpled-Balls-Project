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
	//Create the Bodies Here
	Engine.run(engine);
	paper = new Paper(150,380);
	ground = new Ground(400,690,800,20);
	log1 = new Log1(500,625,10,100);
	log2 = new Log2(600,675,200,10);
	log3 = new Log3(700,625,10,100);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-150});

}
}