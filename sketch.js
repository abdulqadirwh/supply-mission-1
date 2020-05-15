const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, package;
var heli;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    var package_options = {
     restitution:0.5        
    }
    
    heli = Bodies.rectangle(200,100,50,50,ground_options);

    package = Bodies.circle(200,100,20,package_options);
    World.add(world,package);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(package.position.x,package.position.y,20,20);
    rect(heli.position.x,heli.position.y,50,50);
}