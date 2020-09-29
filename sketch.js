var dog, happyDog;
var database;
var food, foodStock;
var dog, happyDog;
var dogImg, happyDogImg;

function preload() {
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  dog = createSprite(250, 250, 30, 30);
  happyDog = createSprite(250, 250, 30, 30);
  dog.addImage(dogImg);


  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}

function draw() {
  createCanvas(500, 500);
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(food);
    dog.addImage(happyDogImg);

  }

  drawSprites();
  Text("Press the up arrow to feed the dog milk!", 250, 10);
}

function readStock(data) {
  food = data.val();
}

function writeStock(x) {
  database.ref('/').update({
    Food: x
  })
}