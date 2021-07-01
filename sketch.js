var bg,form,system,code,security,changeCave;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  changeCave = loadImage("aladdin_cave2.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, displayWidth/2,displayHeight-1050);
// add code for changing the background to the treasure background
fill("lightgreen")
textSize(25);
text("Quiz By Creators",displayWidth/2,displayHeight-900)
  if(score === 3) {
    clear()
    background(changeCave)
    fill("black")
    textSize(40);
    text("Quiz Solved!",250, 200);
  }

  drawSprites()
  

}