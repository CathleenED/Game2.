 var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var PLAY=1;
var END=0;
var gamestate=1;
var endImg
var gameOver
var man,manImg
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("Carrot.png");
  diamondsImg = loadImage("Salad..png");
  jwelleryImg = loadImage("Egg..png");
  swordImg = loadImage("Burger.png");
  endImg =loadAnimation("gameOver.png");
manImg=loadAnimation('1.png','2.png','3.png','4.png','5.png')
  
}

function setup(){
  
  createCanvas(displayWidth,displayHeight);
// Moving background
path=createSprite(displayWidth/2,displayHeight/2);
path.addImage(pathImg);
path.velocityY = 4;

//man=createSprite(displayWidth/2,displayHeight/2)
//man.addAnimation("Over",manImg)

//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
  
cashG=new Group();

diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {
if (gamestate === PLAY) {
  

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ) {
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
  

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
       treasureCollection = treasureCollection+150;
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
     treasureCollection = treasureCollection+100; 
    }
    else if(swordGroup.isTouching(boy)){
      treasureCollection=treasureCollection-40
    }  
    
    
  
/*
  else {
  if(swordGroup.isTouching(boy)) {
    gamestate=END
    boy.addAnimation("SahilRunning",endImg);
    boy.x=200
    boy.y=200
    boy.scale=0.6
    cashG.destroyEach();
     cashG.setVelocityYEach(0);
     diamondsG.destroyEach();
     diamondsG.setVelocityYEach(0);
     jwelleryG.destroyEach();
     jwelleryG.setVelocityYEach(0);
     swordGroup.destroyEach();
     swordGroup.setVelocityYEach(0);
  }
  }*/
  drawSprites();
  textSize(20);
  fill(255);
  text("Health level: "+ treasureCollection,150,30);

}
}
function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.3;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.3;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
