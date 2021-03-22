//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

//var engine, world;
var ground,platform;
//var  slingShot;
var box1,box2;
var box3,box4;
var box5,box6;

function preload() {
  backgroundImg = loadImage("abstract-violet-pixel-rain-background_23-2148362568");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  //engine = Engine.create();
    //world = engine.world;
    strokeweight(4);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    
    box1 = new Box(200,300,20,100);
    box2 = new Box(200,280,80,70);
    box3 = new Box(180,100,80,70);
    box4 = new Box(280,250,80,70);
    box5 = new Box(260,240,80,70);
    box6 = new Box(230,235,80,70);
}

function draw() {
  background(255,255,255);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ground.display();
  platform.display();

  
}



    

    
    
