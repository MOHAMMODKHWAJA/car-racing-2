var gameState=0;
var playerCount, database, form, player, game;

function setup(){
  createCanvas(500,500);
  database = firebase.database();
 // console.log(database);
  //createCanvas(500,500);

  game=new Game();
  game.getState();
  game.start();

}

function draw(){
  //background("white");
  
  
}

