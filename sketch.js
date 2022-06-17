
var trex ,trex_running;
function preload(){
  //precargar 
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  trex= createSprite(50,160,20,50)
  trex.addAnimation("corriendo", trex_running);
  trex.scale=0.4

  //crear sprite del t-rex.
 
}

function draw(){
  background(230)
  drawSprites();
  if(keyDown("space")){
    trex.velocityY= -5;
  }
  trex.velocityY=trex.velocityY+0.5; 
  // velocidad negativa  - arriba
  //velocidad positiva - abajo 

  // -5
  // -4
  //-3
  //-2
  //-1
  //0
  //1
  //2
  //3
  edges= createEdgeSprites();
  trex.collide(edges);
}
