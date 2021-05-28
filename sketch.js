var backgrd,bacgroundIMG;
var boy,boyIMG;
var mother,motherIMG;
var utensil1,utensil2,utensil3,utensil4,utensil5,utensil1IMG,utensil2IMG,utensil3IMG,utensil4IMG,utensil5IMG;
var furniture1,furniture2,furniture3,furniture4,furniture1IMG,furniture2IMG,furniture3IMG,furniture4IMG,furniture5,furniture5IMG;

function preload(){
backgroundImg=loadAnimation("interior.jpg","beadroom.jpg","kitchen.png","verenda.jpg","dining room.jpg");
boyIMG=loadAnimation("boy1.PNG","boy2.png","boy3.png","boy4.png");
motherIMG=loadImage("mother.png");
utensil1IMG=loadImage("utensil1.png");
utensil2IMG=loadImage("utensil2.png");
utensil3IMG=loadImage("utensil3.png");
utensil4IMG=loadImage("utensil4.png");
utensil5IMG=loadImage("utensil5.png");
furniture1IMG=loadImage("furniture1.png");
furniture2IMG=loadImage("furniture2.png");
furniture3IMG=loadImage("furniture3.png");
furniture4IMG=loadImage("furniture4.png");
furniture5IMG=loadImage("furniture_5.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight - 300);
  backgrd=createSprite(displayWidth/2,displayHeight/2,width,height);
  backgrd.addAnimation("backgrnd",backgroundImg);
  backgrd.velocityX = -0.01;
  backgrd.scale=(3.0);
  boy=createSprite(displayWidth/2,displayHeight-500);
  boy.addAnimation("boy",boyIMG);
  mother=createSprite(200,displayHeight-450);
  mother.addImage(motherIMG);
  mother.scale=(1.2);
}

function draw() {
  background(0);
  if(keyDown("space")) {
  }
  spawnUtensils();
  spawnfurniture();
  drawSprites();

}
function spawnUtensils(){
  if(frameCount % 100 ===0 ){
 
  utensil=createSprite(200,displayHeight-450);
  utensil.velocityX = 10;
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: utensil.addImage(utensil1IMG);
              break;
      case 2: utensil.addImage(utensil2IMG);
              break;
      case 3: utensil.addImage(utensil3IMG);
              break;
      case 4: utensil.addImage(utensil4IMG);
              break;
      case 5: utensil.addImage(utensil5IMG);
              break;
      default: break;
    }
    utensil.lifetime = 400;
  }
}

function spawnfurniture(){
  if(frameCount % 200 ===0 ){
 
  furniture=createSprite(width,displayHeight-450);
  furniture.velocityX = -10;
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: furniture.addImage(furniture1IMG);
              break;
      case 2: furniture.addImage(furniture2IMG);
              break;
      case 3: furniture.addImage(furniture3IMG);
              break;
      case 4: furniture.addImage(furniture4IMG);
              break;
      case 5: furniture.addImage(furniture5IMG);
              break;
      default: break;
    }
    furniture.lifetime = 400;
  }
}