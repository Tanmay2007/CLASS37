var backgroundImage
var gameState=0;
var playerCount=0;
var database;
var form,player,game;
var allPlayers;

function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game=new Game();
  game.getState()
  game.start()
}

function draw(){
  console.log(playerCount)
  
  if(playerCount===4){
    game.update(1)
  }

  if(gameState===1){
    clear()
    game.play()
  }
}
