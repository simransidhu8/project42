var Engine = Matter.Engine;
var World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var maxDrops = 100;
var drops;

function preload(){
}

function setup(){
   createCanvas(600, 800);

  umbrella = new Umbrella();

   for(var i = 0; i < maxDrops; i++){
    drops.push(new createDrop(random(0, 400), random(0, 400)));
   }
}

function draw(){
    background(0);
    drops.display();
}   

