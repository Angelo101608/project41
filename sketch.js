
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boySprite;
//boyIMG
var treeSprite;
//treeIMG
var stone
function preload()
{
	 //boyIMG=loadImage("Plucking+mangoes//boy.png");
	// treeIMG=loadImage("Plucking+mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);
	
	stone=createSprite(100,100,50,50);	

	boySprite=createSprite(100,680,50,100);
	//boySprite.addImage(boyIMG);

	treeSprite=createSprite(550,660,50,200);
	//treeSprite.addImage(treeIMG);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//stone1 = new Stone(100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  //stone1.display();
    
  drawSprites();
 
}


