var movingRect, fixedRect;

function setup() {
  createCanvas(1200,400);
  fixedRect=createSprite(400, 200, 60, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  movingRect=createSprite(200, 200, 80, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  
 box1=createSprite(400, 100, 60, 50);
 box1.shapeColor="green";
  box1.debug=true;

box2=createSprite(200, 100, 60, 50);
 box2.shapeColor="green";
  box2.debug=true;
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
 // console.log(movingRect.x-fixedRect.x);
  if(isTouching(movingRect,box2)){
     movingRect.shapeColor="red";
    box2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    box2.shapeColor="green";
  }
  drawSprites();
}

