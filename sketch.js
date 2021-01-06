var bullet,wall;

var speed,weight;

function setup() {
  createCanvas(1500,400);

  speed=random(55,90);
  weight=random(400,1500);

  bullet=createSprite(50, 400, 20, 10);
  bullet.valocityX = speed;
 bullet.shapeColor="grey";

 wall=createSprite(1300,200,60 ,height/2);
 wall.shapeColour="grey";
}

function draw() {
  background(255,255,255); 
  
  bullet.x=World.mouseX;
  bullet.y=World.mouseY;

  if(bullet.x-wall.x<=wall.width/2+bullet.width/2
    && wall.x-bullet.x<=wall.width/2+bullet.width/2
    && bullet.y-wall.y<=wall.height/2+bullet.height/2
    && wall.y-car.y<=wall.height/2+bullet.height/2 )
    {bullet.shapeColor="green"
    bullet.shapeColor="yellow"
    bullet.shapeColor="red"}
  
      else{
        bullet.shapeColor="grey";
      }

  drawSprites();
}