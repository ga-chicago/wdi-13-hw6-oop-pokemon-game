console.log("JS RUNNING");

const cards = [
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



// BUILD THE DECK that will be changeable and not affect the cards array


// GAME PREP /////

//// Create players
// Properties: 
// Rounds won
// Cards drawn
// Cards left in hand
// Card in play
// Cards played in past


// CARD DRAW /////

// Eggbert draws 3
// CARDS LEAVE DECK

// PC draws 3 
// CARDS LEAVE DECK

// Show Eggbert cards in hand
// Show PC cards in hand


// START ROUND /////

// prompt Eggbert to choose a card in hand and puts it in play

// Card is gone from hand 

// prompt PC to choose a card in hand and put it in play

// Card is gone from PC hand

// If Eggbert card damage > PC card damage, Eggbert score++
// Else if Eggbert card damage < PC card damage, PC score++
// Else "ROUND [i] It's a tie!"

// END ROUND /////


// CLEAR both cards in play




// MAKE A DECK WITH ALL CARDS

const deck = [];

for (let i = 0; i < cards.length; i++) {
	deck.push(cards[i]);
}
// console.log(deck); // TEST

// Now deck has all the cards and CAN BE MODIFIED


// CREATE PLAYERS

const eggbert = {
	name: 'Eggbert',
	roundWon: 0,
	cardsDrawn: [],
	cardInPlay: [],
	cardsPastPlayed:[], // round 3 = 3
}

const pockito = {
	name: 'The Computer',
	roundWon: 0,
	cardsDrawn: [],
	cardInPlay: [],
	cardsPastPlayed:[], // round 3 = 3
}



// CARD DRAW

const drawPhase = () => {

	console.log("--> DRAW PHASE <--");

	// Loop1 for Eggbert
	for (let i = 0; i < 3; i++) {
		let randNum = Math.floor(Math.random() * deck.length);
		eggbert.cardsDrawn.push(deck[randNum]);
		deck.splice(randNum, 1);
	}
	console.log(`${eggbert.name} has drawn a ${eggbert.cardsDrawn[0].name} (dmg: ${eggbert.cardsDrawn[0].damage}), a ${eggbert.cardsDrawn[1].name} (dmg: ${eggbert.cardsDrawn[1].damage}), and a ${eggbert.cardsDrawn[2].name} (dmg: ${eggbert.cardsDrawn[2].damage}).`);
	// console.log(eggbert.cardsDrawn); // TEST

	// Loop2 for pockito
	for (let i = 0; i < 3; i++) {
		let randNum = Math.floor(Math.random() * deck.length);
		pockito.cardsDrawn.push(deck[randNum]);
		deck.splice(randNum, 1);

	}
	console.log(`${pockito.name} has drawn a ${pockito.cardsDrawn[0].name} (dmg: ${pockito.cardsDrawn[0].damage}), a ${pockito.cardsDrawn[1].name} (dmg: ${pockito.cardsDrawn[1].damage}), and a ${pockito.cardsDrawn[2].name} (dmg: ${pockito.cardsDrawn[2].damage}).`);
	// console.log(pockito.cardsDrawn); // TEST

	// PUT CARDS IN HAND
	console.log(`Number of cards left in deck: ${deck.length}`);
}

// drawPhase(); // TEST



// // PICK RANDOM CARDS TO FIGHT EACH OTHER (LATER PROMPT EGGBERT TO CHOOSE)
// // pick card from cardsDrawn and put them into

// const attackPhase = () => {
	
// 	console.log("--> ATTACK PHASE <--");

// 	// random card in play for eggbert
// 	for (let i = 0; i < 1; i++) {
// 		let randNum = Math.floor(Math.random() * eggbert.cardsDrawn.length);
// 		eggbert.cardInPlay.push(eggbert.cardsDrawn[randNum]);
// 		eggbert.cardsPastPlayed.push(eggbert.cardsDrawn[randNum]);
// 		eggbert.cardsDrawn.splice(randNum, 1);
// 	}
// 	console.log(`${eggbert.name} put a ${eggbert.cardInPlay[0].name} (dmg: ${eggbert.cardInPlay[0].damage}) in play!`);
// 	// console.log(eggbert.cardInPlay); // TEST
	
// 	// random card in play for pockito
// 	for (let i = 0; i < 1; i++) {
// 		let randNum = Math.floor(Math.random() * pockito.cardsDrawn.length);
// 		pockito.cardInPlay.push(pockito.cardsDrawn[randNum]);
// 		pockito.cardsPastPlayed.push(pockito.cardsDrawn[randNum]);
// 		pockito.cardsDrawn.splice(randNum, 1);
// 	}
// 	console.log(`${pockito.name} put a ${pockito.cardInPlay[0].name} (dmg: ${pockito.cardInPlay[0].damage}) in play!`);
// 	// console.log(pockito.cardInPlay); // TEST
// }

// // attackPhase(); // TEST


// // DAMAGE PHASE
// // Compare damage from the two cards and give points where reward is needed!

// const damagePhase = () => {

// 	if (eggbert.cardInPlay[0].damage > pockito.cardInPlay[0].damage) {
// 		eggbert.roundWon++;
// 		console.log(`${eggbert.name} won this round!`);
// 	} else if (eggbert.cardInPlay[0].damage < pockito.cardInPlay[0].damage) {
// 		pockito.roundWon++;
// 		console.log(`${pockito.name} won this round!`);
// 	} else {
// 		console.log('It\'s a draw!');
// 	}
// 	// Keep track of scores:
// 	console.log(`SCORE: ${eggbert.name}: ${eggbert.roundWon}, ${pockito.name}: ${pockito.roundWon}.`);
// 	console.log(` `);	
// }

// // damagePhase(); // TEST



// // INITIALIZE AND CLEANUP


// const game = () => {

// 	// GAME HAS THREE ROUNDS
// 	for (let i = 1; i <= 3; i++){

// 		console.log(`-----> ROUND ${i} <-----`);
// 		// Players draw
// 		drawPhase();
// 		// Players chose and attack
// 		attackPhase();
// 		// Damage compared, points allocated
// 		damagePhase();

// 		// Players discard their hands, clean up hands (cardsDrawn) and board (cards in play)
// 		eggbert.cardsDrawn = [];
// 		pockito.cardsDrawn = [];

// 		eggbert.cardInPlay = [];
// 		pockito.cardInPlay = [];

// 	}

// 		// console.log(eggbert.cardsPastPlayed); // TEST
// 		// console.log(pockito.cardsPastPlayed); // TEST


// }


// game();






























