var obsTop1, obsTop2;
var obsBottom1,obsBottom2,obsBottom3;
var balloonImg, balloon;
var bgImg, bg;
var gameOverImg; 
var restartImg;
var jumpSound;
var dieSound;
var topGround, bottomGround;


function preload(){
    obsTop1 = loadImage("assets/obsTop1.png");
    obsTop2 = loadImage("assets/obsTop2.png");

    obsBottom1 = loadImage("assets/obsBottom1.png");
    obsBottom2 = loadImage("assets/obsBottom2.png");
    obsBottom3 = loadImage("assets/obsBottom3.png");

    bgImg = loadImage("assets/bg.png")
    
    balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

    gameOverImg = loadImage("assets/gameOver.png");
    restartImg = loadImage("assets/restart.png");

    jumpSound = loadSound("assets/jump.mp3");
    dieSound = loadSound("assets/die.mp3");
}

function setup(){

    createCanvas(800,600);
    bg = createSprite(165,485);
    bg.addImage(bgImg);
    bg.scale = 1.2;

    balloon = createSprite(100,200);
    balloon.addAnimation("balloon", balloonImg);   
    balloon.scale = 0.3;

    topGround = createSprite(400,10, 800, 10);
    topGround.visible = false;
    bottomGround = createSprite(400, 590, 800,10);
    bottomGround.visible = false;

}

function draw(){

    drawSprites();
}