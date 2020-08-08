var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1000,400);
  bullet=createSprite(50, 200, 20, 20);
  bullet.shapeColor="grey";
  speed=random(223,330);
  weight=random(30,52);
  bullet.velocityX=speed;
  thickness=random(22,83);
  wall=createSprite(800,200,thickness,height/2);
  wall.shapeColor="grey";
}

function draw() {
  background(0); 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    if(damage>10){
   wall.shapeColor="red";
   
  }
  
    if(damage<10){
  
      wall.shapeColor="green";
    }
}
  

drawSprites();
}


