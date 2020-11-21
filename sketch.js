var dog,dogIMG;
var treat,treatIMG,treatGroup;
var obstacle,obstacleIMG,obstacleGroup;
var bg,bgIMG;
var ground;
var score;


function preload()
{
  dogIMG = loadImage("Dog.png");
  treatIMG = loadImage("dogTreat.png");
  obstacleIMG = loadImage("log.png");
  bgIMG = loadImage("bg.jpg");
	
}

function setup() {

  createCanvas(400, 400);
  
  bg = createSprite(200,200,400,400);
  bg.addImage("bg.jpg",bgIMG);
  bg.velocityX = -2;
  bg.x = bg.width /2;
  
  
  dog = createSprite(60,350,20,20);
  dog.addImage("Dog.PNG", dogIMG);
  dog.scale = 0.2;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX = -4;
  ground.visible = false;
  
  score = 0;
  
  treatGroup = new Group();
  
  obstacleGroup = new Group();
  
}


function draw() {
  
  background(0);
  
  if(bg.x<0){
    bg.x = bg.width /2;
  }
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
      dog.velocityY = -12 ;
    }
    
  dog.velocityY = dog.velocityY + 0.8;
    
  dog.collide(ground);
  
  
  treat();
  

  obstacle();
  
  
  if(treatGroup.isTouching(dog)){
    treatGroup.destroyEach();
    score = score + 2;
  }
  drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,250,50);
 
}

function treat(){
  if(World.frameCount % 80 === 0){
      treat = createSprite(400,200,20,20);
      
      treat.y = random(120,200);
      
      treat.addImage("dogTreat.png",treatIMG);
      treat.scale = 0.05;
      
      treat.velocityX = -3;
      
      treat.lifetime = 200;                                                 
      
      treatGroup.add(treat);    
    
  }
}

function obstacle(){
  if (World.frameCount % 300 === 0) {
      obstacle = createSprite(400,320,20,20);
      
      obstacle.addImage("obstacle",obstacleIMG);
      obstacle.scale = 0.15; 
      
      obstacle.velocityX = -3;
      
      obstacle.lifetime = 200;                                                 
      
      obstacleGroup.add(obstacle);
    
  }
}





