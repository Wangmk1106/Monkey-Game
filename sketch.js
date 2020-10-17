//i didn't know how to add gravity for the monkey so when you press the space bar it will keep going upwards

var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
monkey_running=           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage= loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png");
 
}



function setup() {
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  monkey.velocityY=monkey.velocityY +0.5;
  
  bananaGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
background("lightblue");
  
  if(keyDown("space")){
    monkey.velocityY=-11;
    
  }
  
  if (ground.x < 0){
  ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime="+survivalTime,100,50);
  
  drawSprites();
  food();
  obstacles();
}

function food(){
  if(frameCount%80===0){
  banana=createSprite(200,random,30,30);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.velocityX=-4;
  banana.scale=0.1;
    
  banana.lifetime=80;
    
  banana.depth=-1;
    
  bananaGroup.add(banana);

  }
  
}

function obstacles(){
  if(frameCount%300===9){
    obstacle=createSprite(400,330,10,40);
    obstacle.velocityX=-4;
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=80;
    obstacle.scale=0.1;
    
    obstacleGroup.add(obstacle);
  }
}


