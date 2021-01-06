var player, villager, i1, i2, i3, i4;
var bg, bow, potion, sword, bomb;

function preload(){
  bg = loadImage('images/bg.png');
  villager = loadImage('images/Villager.png');
  bow = loadImage('images/Bow.png');
  potion = loadImage('images/Potion.png');
  sword = loadImage('images/Sword.png');
  bomb = loadImage('images/Bomb.png');
}

function setup() {
  createCanvas(displayWidth-20, displayHeight-20);
  player = createSprite(200, displayHeight/2, 50, 50);
  player.addImage(villager);
  player.scale = 0.8;
  i1 = createSprite(400, 150, 20, 20);
  i1.addImage(bomb);
  i1.scale = 1.5;
  i2 = createSprite(400, 350, 20, 20);
  i2.addImage(potion);
  i2.scale= 1.5;
  i3 = createSprite(400, 550, 20, 20);
  i3.addImage(bow);
  i3.scale = 1.5;
  i4 = createSprite(400, 750, 20, 20);
  i4.addImage(sword);
  i4.scale = 1.5;
}

function draw() {
  background(bg);  
  drawSprites();
}