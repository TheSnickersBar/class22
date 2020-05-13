const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground, ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,375,400,33,ground_options);
  World.add(world,ground);
  console.log(ground);

  var ball_options = {
    restitution: 1.04
  }
  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  fill("white");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);

  
 
}