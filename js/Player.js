class Player {

    constructor(){
    
    
    
    }
    
    getCount(){
       var playerCountref=database.ref('playerCount') ;
      playerCountref.on("value", function(data){
        playerCount=data.val();
       })
    }
    
    updateCount(count){          //update(1)
    
       database.ref('/').update({
         playerCount:count     //gameState:1
       })
    }

    
    update(name){               //update(string)

        var playerIndex=   "player" + playerCount ;    //  = player1  , player2 , player3
        database.ref(playerIndex).set({
            name:name 
        })
    }
    
    
    
    }