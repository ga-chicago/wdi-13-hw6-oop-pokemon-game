// console.log('it is working')


// I am going to need a player object, 
const player = {
	name: 'Eggburt',
	pPoints: 0,
	pCards: [],
	pPlayedCards: [],
	pDiscardPile: [],
	// pCardDiscard(){
	// 	this.pDiscardPile.push(this.pPlayedCards)
	// 	this.pPlayedCards.splice(1, 0)
	// 	return this.pDiscardPile
	// }
}

// I'm going to need computer player object, 
const computer = {
	name: 'Computer',
	cPoints: 0,
	cCards: [],
	cPlayedCards: [],
	cDiscardPile: [],
}

// I will need to track what cards are in play and what cards have been used, 
const pPlayCard =() => {
		// I need to randomly select a card and then play it, but also put the
		// played card into the played cards array
		let pCardIndex = Math.floor(Math.random() * player.pCards.length)
		let pPlayCard = player.pCards[pCardIndex]
		player.pCards.splice(pCardIndex, 1)
		player.pPlayedCards.push(pPlayCard)
		console.log(`${player.name} has played ${pPlayCard.name} `);
		return pPlayCard;
	}
const cPlayCard = () => {
		// I need to randomly select a card and then play it, but also put the
		// played card into the played cards array
		let cCardIndex = Math.floor(Math.random() * computer.cCards.length)
		let cPlayCard = computer.cCards[cCardIndex]
		computer.cCards.splice(cCardIndex, 1)
		computer.cPlayedCards.push(cPlayCard)
		console.log(`${computer.name} has played ${cPlayCard.name}`);
		return cPlayCard
	}

// This function deals the cards to the player and computer and removes 
// the cards that were dealt from the deck



let deck = [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
]

// I am going to need a game board object, 

const dealCards = () => {
	// if(player.pCards = 0 && computer.cCards = 0)
	for(let i = 0; i < 3; i++){
		let index = Math.floor(Math.random() * deck.length);
		let card = deck[index]
		deck.splice(index, 1)
		player.pCards.push(card);

		let index2 = Math.floor(Math.random() * deck.length);
		let card2 = deck[index2]
		deck.splice(index2, 1)
		computer.cCards.push(card2);
		}
		console.log(`${player.name} was dealt ${player.pCards[0].name}, ${player.pCards[1].name}, and ${player.pCards[2].name}!`)
		console.log(`${computer.name} was dealt ${computer.cCards[0].name}, ${computer.cCards[1].name}, and ${computer.cCards[2].name}!`)
	}

const andFight = () => {

	if(player.pPlayedCards[0].damage === computer.cPlayedCards[0].damage) {
		console.log("It's a tie! No points are awarded!")
	} else if(player.pPlayedCards[0].damage > computer.cPlayedCards[0].damage) {
		player.pPoints += 1;
		console.log(player.name + "'s " + player.pPlayedCards[0].name + " has defeated " + computer.cPlayedCards[0].name + "!")
		console.log(player.name + " has earned " + player.pPoints + "!")
	} else if(computer.cPlayedCards[0].damage > player.pPlayedCards[0].damage) {
		computer.cPoints += 1;
		console.log(computer.name + "'s " + computer.cPlayedCards[0].name + " has defeated " + player.pPlayedCards[0].name + "!")
		console.log(computer.name + " has earned " + computer.cPoints + "!");
	}
	// console.log(player.pPoints)
}

const clearCards = () => {
	player.pDiscardPile.push(player.pPlayedCards);
	player.pPlayedCards.pop();
	for(let i = 0; i <= player.pCards.length; i++){
		player.pCards.pop()
	}
	computer.cDiscardPile.push(computer.cPlayedCards);
	computer.cPlayedCards.pop();
	for(let i = 0; i <= computer.cCards.length; i++){
		computer.cCards.pop()
	}
}

const determineWinner = () =>{
	if(player.pPoints === computer.cPoints){
		console.log("It's a tie! Sorry not sorry!");
	} else if (player.pPoints > computer.cPoints) {
		console.log(player.name + " has defeated the evil computer!!");
	} else {
		console.log("You lost to a computer bro...");
	}
}	

// I will need to log the current score after each round
	// Score will include the number of wins the player has
	// and how many the computer has
	// Whoever has the most wins after three rounds wins
const gameFunction = () => {
	for(let i = 1; i < 4; i++){
		console.log(` ********* Round ${i} ********* `);
		dealCards();
		pPlayCard();
		cPlayCard();
		andFight();
		clearCards();
		console.log(`${player.name} has ${player.pPoints}! ${computer.name} has ${computer.cPoints}`);
	}
	determineWinner();
}

gameFunction();

// dealCards();
// player.pPlayCard()
// computer.cPlayCard()
// // console.log(player.pPlayCard())
// // console.log(computer.cPlayCard())

// andFight();
// player.pCardDiscard();

// console.log(player.pPlayedCards)
// I need to move the else statement to the top so it doesn't say someone won
// when there is a tie.



	// if(player.pPoints > computer.cPoints){
	// 	console.log(player.name + " has won the round!");
	// } else {
	// 	console.log(computer.name + " has won the round!");
	// }


// console.log(player.playerCards);

// console.log(computer.computerCards);

// console.log(deck);


// console.log(computer.computerPlayCard());






