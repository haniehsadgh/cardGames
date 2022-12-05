
/*
PART 3a
DEFINE A Player OBJECT
*/
class Player{

    constructor( name ){
        //all players have names
        this.name   = name;
        //each player will hold zero or more Card objects
        //in their hand
        //default begins with an empty array (no Cards in the hand)
        this.hand   =   [];
    }
    //add a Card to the Player's hand
    drawCard( card ){
        //ensure this is a Card object before adding it to the hand
        if( card instanceof Card){
            //push() a Card onto the 'hand' array
            this.hand.push( card );
        }        
    }
    //return a string describing status of this Card
    describeSelf(){
        //introduce the Player by name        
        //instead of simple text response
        //build an more semantic,
        //better styled way of showing a Player's info to HTML        
        let string = `<h2><img src="images/${this.name}.jpg" class="profile">${this.name}:</h2>`;
        //list all the Cards in the hand
        string += "<ul class='hand'>";
        this.hand.forEach(function(card){
            //let each Card describe itself 
            string+= `<li>${card.describeSelf()}</li>`;
        });
        string += "</ul>";
        return string;
    }
}
