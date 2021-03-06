var bg,bgi,squirrel,squirrel_animation,rock,rock1Img,rock2Img,rock3Img,rock4Img,ig;
var gameState = "play"
var heart1,heart2,heart3,heartImg;
var heart = 0


function preload(){
  bgi = loadImage("track.jpg")
  squirrel_animation = loadAnimation("W1-removebg-preview.png","W2-removebg-preview.png","W3-removebg-preview.png","W4-removebg-preview.png")
  
  rock1Img = loadImage("r1-removebg-preview.png")
  rock2Img =loadImage("r2-removebg-preview.png")
  rock3Img = loadImage("r3-removebg-preview.png")

  heartImg = loadImage("heart.png")
  nutimg = loadImage("nut-removebg-preview")
}

function setup(){
  createCanvas(600,500)
  bg = createSprite(300,200)
  bg.addImage(bgi)
  bg.velocityX = -5
  bg.scale = 4
  ig = createSprite(250,485,600,5)
  ig.visible = false;
  
  
  squirrel = createSprite(50,380)
  squirrel.addAnimation("squirrel",squirrel_animation)
  squirrel.scale = 0.5
   
rockGroup = new Group();

  heart1 = createSprite(30,30,5,5)
  heart1.visible = true;
  heart1.addImage(heartImg)
  heart1.scale = 0.07
  heart2 = createSprite(50,30,5,5)
  heart2.visible = true;
  heart2.addImage(heartImg)
  heart2.scale = 0.07
  heart3 = createSprite(70,30,5,5)
  heart3 .visible = true;
  heart3.addImage(heartImg)
  heart3.scale = 0.07
 
      
}

function draw(){
  background("white")
  
  if(gameState === "play"){
      if(bg.x < 200){
        bg.x = width/2
      }
       squirrel.collide(ig);
      if(keyDown("space")&& squirrel.y >= 100) {
         squirrel.velocityY = -12;
    
       }
      //add gravity
      squirrel.velocityY = squirrel.velocityY + 0.8
      
      rocks(); 
      
      

      if(heart > 3){
        gameState = "end"
      }
        
    nuts();


  }

 if(gameState === "end"){
   console.log("gameOver")

 }
 
  drawSprites();
}

function rocks(){
  if(frameCount % 180 === 0){
    rock = createSprite(400,450)
    rock.velocityX = -5
    rock.debug= true    
    squirrel.debug= true                     
    rock.scale = 0.3
    
    rockGroup.add(rock)


     switch(Math.round(random(1,3))){
      case 1:rock.addImage(rock1Img)
        break;
      case 2:rock.addImage(rock2Img)
        break;
      case 3:  rock.addImage(rock3Img)
    break;
    default: break;

           }
    
           
           if(rock.isTouching(squirrel)){
            heart = heart + 1 
          }
           if(heart === 1){
             heart1.visible = false
           }
           if(heart === 2){
            heart2.visible = false
          }
          if(heart === 3){
            heart3.visible = false
          }


  }
  
  
}

function nuts(){

  if(frameCount % 120 === 0 ){

    nut = createSprite(300,300,10,10)
    nut.addImage(nutimg)
    nut.x = Math.round(random(100,500))
    nut.y = Math.round(random(100,500))




  }








}






