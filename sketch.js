
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1 = new roof (400,200,300,75)
bob5= new bob (700,100,75)
rope5 = new rope (bob5.body,roof1.body,20,25)

bob4 = new bob (600,100,75)
rope4 = new rope (bob4.body,roof1.body,-40,30)
bob3 = new bob (600,100,75)
rope3 = new rope (bob3.body,roof1.body,-65,25)
bob2 = new bob (0,100,75)
rope2 = new rope (bob2.body,roof1.body,-100,10)	
bob1= new bob (0,100,75)
rope1 = new rope (bob1.body,roof1.body,-85,10)

	
	
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background("white");
 roof1.display() 
  bob1.display()
 rope1.display() 
 bob2.display()
 rope2.display()
 bob3.display()
 rope3.display()
 bob4.display()
 rope4.display()
 bob5.display()
 rope5.display()
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 drawSprites();



 
}



