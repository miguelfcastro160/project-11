var shipImag
var seaImag
var seaSprite
var shipSprite


function preload() {
  seaImag = loadImage("sea.png")
  shipImag = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup() {
  createCanvas(400, 400);

  seaSprite = createSprite(400,200);
  seaSprite.addImage(seaImag);
  seaSprite.scale = 0.3
  shipSprite = createSprite(130,200);
  shipSprite.addAnimation("navigation", shipImag);
  shipSprite.scale=0.15;
  shipSprite.velocityX=3
}

function draw() {
  background("blue");
  
  if (seaImag.x < 0) {
    seaImag.x = sea.witdh / 2
  }

  drawSprites();
}
