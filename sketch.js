

var city;
var hero;
var obstacle1,obstacle2,obstacle3,obstacle4;
var web,web1,web2,web3,web4,web5,web6;
var ground;
var boss;
var bomb1,bomb2,bomb3;
var gameOver;

function preload(){
  cityImage = loadImage("jungle.jpg")
  heroImage = loadImage("hero2.gif")
  webImage = loadImage("web1.gif")
  web1Image = loadImage("web1.gif")
  web2Image = loadImage("web1.gif")
  web3Image = loadImage("web1.gif")
  web4Image = loadImage("web1.gif")
 bossImage = loadImage("boss.gif")
 bomb1Image = loadImage("bomb.gif")
 bomb2Image = loadImage("bomb.gif");
gameOverImage = loadImage("gameOver.gif");
 

  

  

  obstacle1Image = loadImage("obstacle2.gif")
  obstacle2Image = loadImage("jax.gif")
  obstacle3Image = loadImage("obstacle2.gif")
  obstacle4Image = loadImage("jax.gif")
  
 
}

function setup(){
  createCanvas(1200,600)

  city = createSprite(220,200,20,200)
  city.addImage(cityImage)
  
  city.velocityX = 0.5;

  hero = createSprite(100,450,20,10)
  hero.addImage(heroImage)

  hero.scale = 0.3;

 
  

  obstacle1 = createSprite(900,430,20,10)
  obstacle1.addImage(obstacle1Image)
  obstacle1.scale = 1;
  obstacle1.velocityX = -1;

  obstacle2 = createSprite(900,430,20,10)
  obstacle2.addImage(obstacle2Image)
  obstacle2.scale = 0.8
  obstacle2.velocityX = -1.5;

  obstacle3 = createSprite(900,430,20,10)
  obstacle3.addImage(obstacle1Image)
  obstacle3.scale = 1;
  obstacle3.velocityX = -1.75;

  obstacle4 = createSprite(900,430,20,10)
  obstacle4.addImage(obstacle2Image)
  obstacle4.scale = 0.8
  obstacle4.velocityX = -2;

  boss = createSprite(1100,350,20,10)
  boss.addImage(bossImage)
  boss.scale = 0.7
 
  boss.visible = false;

  bomb1 = createSprite(1100,200,20,10)
  bomb1.addImage(bomb1Image)
  bomb1.scale = 0.5
  bomb1.velocityX = -3;
  bomb1.visible = false;

  bomb2 = createSprite(1100,350,20,10)
  bomb2.addImage(bomb2Image)
  bomb2.velocityX = -2;
  bomb2.scale = 0.5
 
  bomb2.visible = false;

ground = createSprite(100,500,1600,10)
ground.visible = false;

 web = createSprite(400,430,20,10)
 web.addImage(webImage)
 web.scale = 0.1;
 web.visible = false; 
 
 web1 = createSprite(400,430,20,10)
 web1.addImage(web1Image)
 web1.scale = 0.1;
 web1.visible = false; 

 web2 = createSprite(400,430,20,10)
 web2.addImage(web2Image)
 web2.scale = 0.1;
 web2.visible = false; 

 web3 = createSprite(400,430,20,10)
 web3.addImage(webImage)
 web3.scale = 0.1;
 web3.visible = false; 

 web4 = createSprite(700,350,20,10)
 web4.addImage(web4Image)
 web4.scale = 0.4;
 web4.visible = false; 

gameOver = createSprite(600,200,20,10)
gameOver.addImage(gameOverImage)
 gameOver.scale = 0.6;
 gameOver.visible = false; 
}

function draw(){
  background(255)
  
  
  if (keyIsDown(LEFT_ARROW)) {
    hero.velocityY = -2;
  
}
if (keyIsDown(RIGHT_ARROW)) {
    hero.velocityX = 2;
}
if (keyIsDown(UP_ARROW)) {
  hero.velocityY = 2;
}


hero.collide(ground)





if (keyDown("space")&& web.y>270) {
  web.velocityX = 4;
  web1.velocityX = 5;
  web2.velocityX = 6;
  web3.velocityX = 7;

  web.visible = true;
  web1.visible = true;
  web2.visible = true;
  web3.visible = true;
 
}
if (keyDown("enter")&& web.y>270) {
  web1.velocityX = 0;
 
  
  obstacle2.velocityX = 0;

  web.visible = true;
  web1.visible = true;

}
if (keyDown("ctrl")&& web.y>270) {
 
  web.velocityX = 0;
  obstacle1.velocityX = 0;
  

  web.visible = true;
  web1.visible = true;
  web2.visible = true;
  web3.visible = true;
}

if (keyDown("alt")&& web.y>270) {
 
  web2.velocityX = 0;
  obstacle3.velocityX = 0;
  

  web.visible = true;
  web1.visible = true;
  web2.visible = true;
  web3.visible = true;
}
if (keyDown("shift")&& web.y>270) {
 
  web3.velocityX = 0;
  obstacle4.velocityX = 0;
  

  web.visible = true;
  web1.visible = true;
  web2.visible = true;
  web3.visible = true;
}
if(web3.isTouching(obstacle4)){
  web.visible = false;
  web1.visible = false;
  web2.visible = false;
  web3.visible = false;
  obstacle1.visible = false;
  obstacle2.visible = false;
  obstacle3.visible = false;
  obstacle4.visible = false;
  hero.visible = true;
  boss.visible = true;
  bomb1.visible = true;
  bomb2.visible = true;
}

if(web4.isTouching(boss)){
  hero.velocityX = 0;
  city.velocityX = 0;
  
  web4.visible = true;
  gameOver.visible = true;
  hero.visible = true;
  boss.visible = true;
  


}

if (keyDown("delete")&& web.y>270) {
 
  

  web4.visible = true;
  web4.velocityX = 5;
    
  }

if (keyDown("enter")&& web.y>270) {
 
  

  web4.visible = true;
  web4.velocityX = 0;
    
  }
  drawSprites();
}




