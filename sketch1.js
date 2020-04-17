const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1400,20);
    ground1 = new Ground(700,200,200,20)

  //  platform = new Ground(150,305,300,370);

    box1 = new Box(700,380,20,20);
    box1.shapeColor="Blue";
    box2 = new Box(720,380,20,20);
   //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    box3 = new Box(740,380,20,20);
    box4 = new Box(760,380,20,20);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(710,360,20,20);
    box6 = new Box(730,360,20,20);
    box7 = new Box(750,360,20,20);
    box8 = new Box(720,340,20,20);
    box9 = new Box(740,340,20,20);
    box10 = new Box(730,320,20,20);
    box11 = new Box(730,190,20,20);
    box12 = new Box(750,190,20,20);
    box13= new Box(770,190,20,20);
    box14 = new Box(760,160,20,20);
    box15= new Box(740,160,20,20);
    box16 = new Box(750,130,20,20);
    
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
    slingshot = new Slingshot(bird.body,{x:200,y:100});
}

function draw(){
    background(155);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    //fill(255, 204, 0);
    box1.display();
    fill("blue");
    box2.display();
    ground.display();
    ground1.display();
   // pig1.display();
   // log1.display(); 

    box3.display();
    box4.display();
   // pig3.display();
    //log3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    //  log4.display();
    //log5.display();

   // platform.display();
    bird.display();
   slingshot.display();    
}
