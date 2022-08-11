
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_option =  {
		isStatic: false,
		restitution:0.3,
		friction :0,
		density: 1.2
	}

		groundObj = new ground(width/2,670,width,20);
		leftSide = new ground(1100,600,20,120);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	this.body = Bodies.rectangle(x,y,w,y,opitions);
	this.w =w ;
	this.y = y;
	World.add(World.this.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
 
}

function KeyPressed(){
	if (KeyCode===UP_ARROW){
		Matter.ball.applyForce(ball,ball.position,{x:85,y:-85});
		
	}
}



