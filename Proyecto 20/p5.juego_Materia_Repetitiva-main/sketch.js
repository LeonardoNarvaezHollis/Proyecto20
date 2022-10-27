var bath;
var brush;
var eat;
var gym;
var move
var sleep;
var backgroundImg,astronaut;
var edges;

function preload(){
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadAnimation("brush.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png","gym1","gym2.png");
  move = loadAnimation("move.png","move1.png");
  sleep = loadAnimation("sleep.png");
  backgroundImg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300, 230);
  astronaut.addAnimation("Sleeping", sleepImg);
  astronaut.scale = 0.1;
}

function draw() {
  background(backgroundImg)
  drawSprites();

  textSize(20);
  fill("white");
  text("instrucciones:  ", 20,35);
  textSize(15);
  text("Flecha hacia arriba = Cepillarse", 20,55);  
  text("Flecha hacia abajo = Ejercitarse", 20,70);  
  text("Flecha hacia la izquierda = Comer", 20,85);  
  text("Flecha hacia la derecha = Bañarse", 20,100);  
  text("Tecla M = Moverse", 20,115);  


  edges= createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gymming", gym);
    astronaut.changeAnimation("Gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Eating", eat);
    astronaut.changeAnimation("Eating");
    astronaut.y = 350;
    astronaut.x = 150;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Bathing", bath);
    astronaut.changeAnimation("Bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("Moving", move);
    astronaut.changeAnimation("Moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
  
}




