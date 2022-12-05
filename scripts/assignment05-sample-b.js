/*
grab some HTML elements
*/ 
const output        = document.getElementById("output");

/*
PART 1a 
Class Card defined in Card.js
*/
/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/
output.innerHTML += "<h2>Part 1: Card Object</h2>";
//instantiate  a new card object providing appropriate parameter values
let aCard = new Card("Queen", 10, "Heart");
output.innerHTML += `<p>Before we build the full Deck of Cards, a single example, demonstration Card object has been created:<br> <strong> ${aCard.describeSelf()}</strong></p>`;


/*
PART 2a 
Class Deck defined in Deck.js

PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/
output.innerHTML += "<h2>Part 2: Deck Object Containing Card Objects</h2>";
output.innerHTML += "<p>Instantiate a Deck Object and let it's constructor create 52 Card Objects. Then shuffle() the Deck.</p>";
output.innerHTML += "<p>Have the Deck describeSelf() and dealCard(). Display the Card dealt. Again have the Deck describeSelf(), dealCard(), and display the next Card dealt.</p>";
const myDeckOfCards = new Deck();

//invoke and display the Deck function describeSelf() here...
output.innerHTML += `<p>${myDeckOfCards.describeSelf()}</p>`;

//randomize the cards in the deck 
myDeckOfCards.shuffle();

//take the next card from the deck
myCard = myDeckOfCards.dealCard();
output.innerHTML += `<p>You've been dealt a <br>${myCard.describeSelf()}</p>`;

//invoke and display the Deck function describeSelf() AGAIN here...
output.innerHTML += `<p>${myDeckOfCards.describeSelf()}</p>`;

//take the next card from the deck
myCard = myDeckOfCards.dealCard();
output.innerHTML += `<p>You've been dealt a <br>${myCard.describeSelf()}</p>`;

//invoke and display the Deck function describeSelf() AGAIN here...
output.innerHTML += `<p>${myDeckOfCards.describeSelf()}</p>`;


/*
PART 3a 
Class Player defined in Player.js

PART 3b
Instantiate Two Player OBJECTs
and deal five cards to each
*/
output.innerHTML += "<h2>Part 3: Player Objects Using a Deck Object and several Cards</h2>";
output.innerHTML += "<p>Begin with instantiating a fresh new Deck Object and giving it a shuffle()</p>";
output.innerHTML += "<p>Now instantiating a few Player Objects and dealing them five cards each...</p>";
//instantiate a few Player objects
const player01 = new Player("jill");
const player02 = new Player("joe");
const player03 = new Player("jane");

//get a 'fresh' Deck of cards
const deckOfCards = new Deck();

//in this game players will get 5 cards each
const cardsPerHand = 5;

//randomize the cards in the deck 
deckOfCards.shuffle();

//deal five cards to each player
//alternate the cards dealt from player01 to player02, etc 
//to replicate how a dealer would distribute the Cards
for( let cardsDealt = 0; cardsDealt < cardsPerHand; cardsDealt++){
    //draw a Card from the Deck
    const drawnCard = deckOfCards.dealCard();
    //add the Card to a Player's hand
    player01.drawCard(drawnCard);

    //or do both the above steps in one instruction
    player02.drawCard( deckOfCards.dealCard() );
    player03.drawCard( deckOfCards.dealCard() );
}

//show the player's hands
output.innerHTML += player01.describeSelf();
output.innerHTML += player02.describeSelf();
output.innerHTML += player03.describeSelf();