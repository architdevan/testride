var balloon;
var database;
var position;

var balloonPosition = database.ref('balloon/height');
balloonPosition.on("value", readPosition, showError);


function preload() {
  LoadImage("backgroundImage");
}  

function setup() {
  createCanvas(500,500);
  Balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("Hot AirBalloon" ,balloonImage1);
}

function draw() {
  backgroundImage(background);  
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10;
  }   
    else if(keyDown(DOWN_ARROW)){
      balloon.y = balloon.y +10;
  }              
  
 textSize(10);
 fill(red);
stroke() 

function updateHeight(x,y){
  database.ref('balloon/height').set({
   'x': height.x + x,
   'y': height.y + y
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the database");
}

if(keyDown(DOWN_ARROW)){
  updateHeight(0,+10);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale =balloon.scale +0.01;
}

if(keyDown(UP_ARROW)){
  updateHeight(0,-10);
  balloon.addAnimation("hotAirBalloon",balloonImage2);
  balloon.scale =balloon.scale -0.01;
}

if(keyDown(DOWN_ARROW)){
  updateHeight(0,+10);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale =balloon.scale +0.01;
}  
  


  
  
  drawSprites();
}