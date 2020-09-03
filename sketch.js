var bullet,bullet2,bullet3,wall;
var speed,weight,thickness;
var pic;

function preload(){
   pic = loadImage("js/pic.jpg");

}

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52); 
  thickness=random(22,83);

  bullet = createSprite(40,60,40,10);
  bullet.velocityX = speed;
  bullet.shapeColor="black";
  bullet2 = createSprite(40,216,40,10);
  bullet2.velocityX = speed;
  bullet2.shapeColor="black";
  bullet3 = createSprite(40,367,40,10);
  bullet3.velocityX = speed;
  bullet3.shapeColor="black";

  wall = createSprite(1110,200,thickness,1150);
  wall.shapeColor="black";
  

  
}

function draw() {
  background(pic);  
   
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;

  var damage=0.5 * weight * speed * speed/(thickness *thickness);
  
  if(damage>10){
    wall.shapeColor=color(255);
  }
   if(damage<10){
     wall.shapeColor=color(255);
   }
 }
 if(hasCollided(bullet2,wall)){
  bullet2.velocityX=0;

  var damage=0.5 * weight * speed * speed/(thickness *thickness);
  
  if(damage>10){
    wall.shapeColor=color(255);
  }
   if(damage<10){
     wall.shapeColor=color(255);
   }
 }
 if(hasCollided(bullet3,wall)){
  bullet3.velocityX=0;

  var damage=0.5 * weight * speed * speed/(thickness *thickness);
  
  if(damage>10){
    wall.shapeColor=color(255);
  }
   if(damage<10){
     wall.shapeColor=color(255);
   }
 }
 drawSprites();
}

  
  

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }

  return false;
}
function hasCollided(bullet2,wall){
  bullet2RightEdge=bullet2.x +bullet2.width;
  wallLeftEdge=wall.x;

  if(bullet2RightEdge>=wallLeftEdge){
    return true
  }

  return false;
}
function hasCollided(bullet3,wall){
  bullet3RightEdge=bullet3.x +bullet3.width;
  wallLeftEdge=wall.x;

  if(bullet3RightEdge>=wallLeftEdge){
    return true
  }

  return false;
}