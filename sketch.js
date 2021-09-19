var gameState = 0
var score = 0
var playerFinal


function preload()

{
run = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png",);
run1=loadAnimation("Rambogun4.png","Rambogun3.png")
bgImg = loadImage("B2jpg.jpg")
bg2Img = loadImage("B3.jpg")
enemyImg = loadImage("enemy.png")
gun = loadAnimation("Rambogun1.png", "Rambogun2.png", "Rambogun3.png", "Rambogun4.png")
bulletImg = loadImage("bullet.png")
gun2 = loadImage("RamboFInal.png")
gun3 = loadImage("Rambogun4.png")
}


function setup()
{
createCanvas(900,600)

enemyGroup = new Group()
player = new Group()
bulletGroup = new Group()
playerFinalGroup = new Group()

bg = createSprite(0, 250, 1000, 700)
bg.addImage(bgImg)
bg.scale = 2.5
  
pla = createSprite (350, 500,100,100)
pla.addAnimation("running",run)
pla.scale = 0.7
player.add(pla)

pla2 = createSprite(pla.x, pla.y, 100, 100)
pla2.addAnimation("gunnning", gun)
pla2.scale = 0.7
pla2.visible = false
player.add(pla2)
  
  
ground = createSprite(450, 610, 600, 10)
ground.visible = false

playerFinal = createSprite(450, 500, 100, 100)
playerFinal.visible = false


}

function draw(){
  //background(0)
  pla.collide(ground)
  
  
if(gameState === 0){
  bg.velocityX = -5
  if(bg.x< 100){
    bg.x = 600
  }




if(keyDown(UP_ARROW)){
  pla.velocityY = -10
}
pla.velocityY = pla.velocityY + 0.8

  
  Enemy()
  
  
  if (keyCode === 32){
   // pla.changeImage(gun)
    pla2.visible = true
    pla.visible = false
    pla2.x = pla.x
    pla2.y = pla.y
    bg.velocityX = 0
    createBullet()
    
  }
  else{
    pla.visible = true
    pla2.visible = false
  }
  
}
else{
  background(bg2Img)
  player.destroyEach()
  Enemy2()
  playerFinalFunction()
  //bg.changeAnimation("bg2",bg2Img)
  
}
  
drawSprites()
  scoreBoard()
}
function Enemy(){
  if(frameCount%170=== 0){
  enemy = createSprite(Math.round(random(1000, 800)), 500, 100, 100)
  enemy.addImage(enemyImg)
  enemy.scale = 0.8
  enemy.velocityX = -4
  enemyGroup.add(enemy)
  //enemyGroup.lifetime = -100
  //enemy.debug = true
  }
  /*if(pla.isTouching(enemyGroup)|| pla2.isTouching(enemyGroup)){
    enemyGroup.destroyEach()
    player.destroyEach()
    console.log("Game Over")
    
  } */

  if(bulletGroup.isTouching(enemyGroup)){
      enemyGroup.destroyEach()
      console.log("enemy killed")
  }
  
  
}
function createBullet() {
  var bullet = createSprite(pla2.x + 70,pla2.y - 35, 60, 10);
  bullet.addImage(bulletImg);
  
  bullet.velocityX = 4;
  bullet.lifetime = 100; 
  bullet.scale = 0.05;
  bulletGroup.add(bullet)
 // bullet.debug = true
}
function scoreBoard(){
  textSize(25)
  fill("white")
  text("Distance :"+ score + "m", 700, 40)
  if (frameCount%10 === 0){
    score+=1
  
    console.log(score)
  }
  if(score >= 20){
    gameState = 1
    textSize(50)
    fill("white")
    text("Welcome to the next Level", 350, 300)
    
  }

}
function Enemy2(){
  if(frameCount%(120/2) === 0 ){
  enemy2 = createSprite(Math.round(random(1000, 800)), 500, 100, 100)
  enemy2.addImage(enemyImg)
  enemy2.scale = 0.8
  enemy2.velocityX = -4
  enemyGroup.add(enemy2)
  //enemyGroup.lifetime = -100
  //enemy.debug = true
  }
  /*if(pla.isTouching(enemyGroup)|| pla2.isTouching(enemyGroup)){
    enemyGroup.destroyEach()
    player.destroyEach()
    console.log("Game Over")
    
  } */

  /*if(bulletGroup.isTouching(enemyGroup)){
      enemyGroup.destroyEach()
      console.log("enemy killed")
  }
  */
  }
  function playerFinalFunction(){
    if (gameState === 1){
      playerFinal.visible = true
      playerFinal.addImage(gun3)
      playerFinal.scale = 0.7
      playerFinalGroup.add(playerFinal)
      console.log("Welcome")
      if(keyDown(LEFT_ARROW)){
        playerFinal.x = playerFinal.x - 10
        playerFinal.addImage(gun3)
      }
      else if (keyDown(RIGHT_ARROW)){
        playerFinal.x = playerFinal.x + 10
        playerFinal.changeImage(gun2)
      }
      if (keyCode === 32){
        
         createBullet()
         
       }
     }
  }
  //    var enemy
      // switch(variable){
        // case 1:enemy = 0, 250
        //case 1: enemy.x = Math.round(random(0, 250))
      //}