
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papper
var dustbin

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbin= new Dustbin(400,284,100,40);
  	papper= new Papper(320,210,50,50);
	  
	  Engine.run(engine);
  
}


function draw() {
  background(0);
  
  


  papper.display();
  dustbin.display();
  
  function keyPressed(){
  if(keyCode === UP_ARROW){

	Matter.body.applyForce(papperObject.body,papperObject.body.position,{x:85,y:-85});
  }
  drawSprites();
  }
}



