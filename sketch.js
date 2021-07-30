
let ship, moving_ship;
let sea, sea_water, sea2;
function preload(){
moving_ship=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_water=loadImage("sea.png");
}

function setup(){
  
  createCanvas(600,400);
 sea2=createSprite(600,250,600,400);
 sea2.addImage(sea_water);
 sea2.scale=0.3;
  sea=createSprite(650,250,600,400);
  sea.addImage(sea_water);
 // sea.width=2;
  sea.scale="0.3";
  sea.velocityX=-5;
  ship=createSprite(250,200,500,60);
  ship.addAnimation("running", moving_ship);
  ship.scale="0.3";
  edges = createEdgeSprites();
}

function draw() {
  background("skyblue");
 /* if(sea.x==-35){
  sea.x=650;
  }
  if(sea.x==-35){
  sea2.velocityX=-5;
  }*/
  if(sea.x < 0){
    sea.x = sea.width/6;
  }
 // if(sea2.x < 0){
   // sea2.x = sea.width/13;
  //}
 
  drawSprites();
}