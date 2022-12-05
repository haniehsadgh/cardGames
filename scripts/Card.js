/*
PART 1a
DEFINE A Card OBJECT
*/
class Card{
    //each card must have values for
    // face, value, suit
    //for example:
    // "Queen", 10, "Diamond"
    constructor( face, value, suit){
        //the three aspects of a playing card
        this.face   = face;
        this.value  = value;
        this.suit   = suit;    
    }
    //return a string describing status of this Card
    describeSelf(){
        //instead of text response...
        //  return `${this.face} of ${this.suit}s. Value: ${this.value}`;
        //build an appropriate image,
        return `<img class="card" src="images/cards/${this.face}_of_${this.suit}s.svg" alt="${this.face} of ${this.suit}s. Value: ${this.value}">`;                
    }
}