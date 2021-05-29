class Game {

constructor(){



}

getState(){
   var gameStateref=database.ref('gameState') ;
   gameStateref.on("value", function(data){
      gameState=data.val();
   })
}

update(state){          //update(1) number

   database.ref('/').update({
      gameState: state     //gameState:1
   })
}

start(){
    if (gameState=0){
       player=new Player();
      player.getCount();
       form=new Form();
       form.display();
        
    }
}

}