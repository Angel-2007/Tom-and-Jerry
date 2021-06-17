var bgImg;
var cat, catImg1, catimg2, catimg3;
var mouseImg1, mouseimg2, mouseimg3, mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png");
    mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseing3 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(200, 600, 10, 10);
    mouse.addAnimation("mouse", mouseImg1);
    mouse.scale = 0.1;

    cat = createSprite(870, 600, 10, 10);
    cat.addAnimation("cat",catImg1);
    cat.scale = 0.1;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("eat", catimg3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("eat")
        mouse.addAnimation("eaten", mouseimg3);
        mouse.scale = 0.05;
        mouse.changeAnimation("eaten");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -2;
    cat.addAnimation("move", catimg2);
    cat.changeAnimation("move");
    mouse.addAnimation("mouseTeasing", mouseimg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
    
  }

}
