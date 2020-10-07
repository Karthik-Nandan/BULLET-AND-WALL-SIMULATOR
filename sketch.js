var bullet, wall, thickness, speed, weight , bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(0,195,50,05);
  bullet.shapeColor="white";
  thickness=Math.round(random(22, 83));
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor=color(80,80,80);
  wall.debug=true;
  }

function draw() {
  background("black");  
  text("SPEED:"  +bullet.velocityX, 500, 40 );
  text("WEIGHT:"  +weight, 700, 40 );

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10){
     wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
     wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
  function hasCollided(bullet,wall){
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge =wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    } else{
    return false;
    }
  }
   



