var bg,bgImg;
var player, shooterImg, shooter_shooting;

function preload() {
bgImage = loadImage("assets/bg.jpeg")
shooterImg = loadImage("assets/shooter_2.png")
shooter_shooting = loadImage("assets/shooter_3.png")
}

function setup()   {
createCanvas(windowWidth, windowHeight)
bg = createSprite(630,370, 600, 40)
bg.addImage(bgImage)
bg.scale = 1.0
player = createSprite(300, 450, 50, 50)
player.addImage(shooterImg)
player.scale = 0.7
}

function draw() {





drawSprites()
}