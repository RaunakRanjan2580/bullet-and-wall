var bullet;
var wall;
var speed;
var weigh;
var thickness;
var damage ;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color("80,80,80");  

  bullet = createSprite(10,200,50,05);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  
}

function draw() {
  background("gray");  

  if(hasCollided(bullet,wall)){
    
    bullet = velocityX = 0;               
    damage = 0.5 * weight * speed * speed/thickness * thickness * thickness ;

    if(damage>10){
      wall.shapeColor = ("green");
    }

    if(damage<10){
      wall.shapeColor = ("red");
    }

  }

    drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false;
}