var a1,a2,a3;

function preload(){
  a1 = loadImage("imagens/arv.png");
  a2 = loadImage("imagens/c.png");
  //a3 = loadImage("imagens/tree.png")
} 

function setup(){
  createCanvas(500,500);
  
  



}

function draw(){
  background("green");
  
    gerarObstaculos();
    drawSprites();
  
}

function gerarObstaculos(){
  if (frameCount % 10 === 0){
    var obstaculo = createSprite(400,165,10,40);
    var obstaculo1 = createSprite(60,165,10,40);
   obstaculo.velocityY = -6;
   obstaculo1.velocityY = -6;
   
    
     // //gerar obstáculos aleatórios
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstaculo.addImage(a1);
               break;
       case 2: obstaculo.addImage(a2);
               break;
       
      
        default: break;
     }

     var rand1 = Math.round(random(1,2));
      switch(rand1) {
        case 1: obstaculo1.addImage(a1);
           break;
        case 2: obstaculo1.addImage(a2);
            break;
       
        default: break;
      }
    
     //atribuir escala e tempo de duração ao obstáculo         
     obstaculo.scale = 0.2;
     obstaculo1.scale = 0.2;
     obstaculo.lifetime = 300;
    
   
  }
 }
 
