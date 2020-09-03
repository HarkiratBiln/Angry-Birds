const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var bird1;
var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,500,50,50);
    box2 = new Box(400,500,50,50);
    box3 = new Box(200,400,50,50);
    box4 = new Box(400,400,50,50);
    box5 = new Box(300,250,50,50);

    ground = new Ground(400,height,800,20)

    pig1 = new Pig(300,500);
    pig2 = new Pig(300,400);

    bird1 = new Bird(550,200);

    log1 = new Log(300,450,300,PI/2);
    log2 = new Log(300,350,300,PI/2);
    log3 = new Log(250,200,100,PI/7);
    log4 = new Log(370,200,100,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}