console.log("up and running");
// You are going to create a simple card game in which a player will be able to battle the autoplayer. The game will deal 3 cards (each of which has a damage value) to the player and three cards to the autoplayer. The player will choose a card, and the computer will randomly choose a card, and whichever's card has the highest value will win the point. A round is finished once this has happened three times.
// Need to create a player object, autoPlayer object, game object, cards object
// Play method in game object
// ===> which should:
// randomly deal 3 cards to player ===> put into playerCards array
// randomly deal 3 cards to autoPlayer ==> put into autoPlayerCards array
// player gets to choose card => use window.prompt to get player's answer
// autoPlayer randomly gets card from autoPlayerCards array
// cards get compared insde compareCards function in game object
// winner has points increase by 1
// when all cards gone, game is over

// EXAMPLE GAMEPLAY
// There are 10 Pokemon cards in the deck
// Eggbert (the player) is dealt three random cards from the deck
// The computer is dealt three random cards from the deck
// Eggbert chooses a card and plays it! It has a damage of 10.
// The computer randomly chooses a card and plays it! It has a damage of 8.
// Eggbert wins!
// The score is displayed:

// Score: Eggbert: 1, Computer: 0
// Rounds Won: Eggbert: 0, Computer: 0
// They do this again two more times. The round ends.

// The score is displayed. The rounds won are displayed.

// The game object
// For each part, think about:

// The game should be able to:
// keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section) **cardsAvailable array 
// know what cards have been played **cardsPlayed array
// know how many cards are left to be played/dealt overall **length of cardsAvailable array
// track points for both the player and the computer Note: Points are determined by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
// track rounds let rounds = 0; rounds += 1
// track number of rounds won for both player and computer roundsWon += 1
// automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// determine the winner of each play
// stop once there are no cards left or not enough to deal 3 to each the player and computer
// 
// The player object
// The player should be able to:
// see their stats: their points and how many rounds they've won.
// see what cards they have been dealt/see what cards are left in their hand
// pick a card from the hand that has been dealt to them (thereby playing this card agaist the computer's card). The round ends once this has happened 3 times.
// receive new cards given to them by the game each round.
// see the cards that they have played in the past.

// create deck object
const deck = [
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
];

// create player object
const player = {
	name: "Jin Yang",
	cards: [],
	score: 0,
	roundsWon: 0,
	cardPlayed: {}

}
let cardsAvailable = deck;
// create computer object
const computer = {
  name: "IBM Watson",
	cards: [],
	score: 0,
	roundsWon: 0,
	cardPlayed: {}
}
let round = 1;
// create game object
const game = {
	// round: 1
  // create roundTracker method to keep track of rounds
  // create scoreTracker method to keep track of score each round
  // deal mathod
  // compare cards method
  // method for deciding who is winner after all the cards are gone. compare points
  // 
  // WHAT DO WE WANT TO HAPPEN
	deal() {
		// player.cardPlayed = {};
		// computer.cardPlayed = {};
		for(let i = 0; i < 3; i++) {
			let cardIndex = Math.floor(Math.random()*cardsAvailable.length);
			player.cards[i] = cardsAvailable[cardIndex];
			cardsAvailable.splice(cardIndex, 1);
		}
		for(let i = 0; i < 3; i++) {
			let card = Math.floor(Math.random()*cardsAvailable.length);
			computer.cards[i] = cardsAvailable[card];
			cardsAvailable.splice(card, 1);
		}
	},
  compareCards() {
    for(let i = 1; i <=3; i++){
    let computerCard = Math.floor(Math.random()*computer.cards.length);
    computer.cardPlayed = computer.cards[computerCard];
    computer.cards.splice(computerCard, 1);

    // need to change this to user input
    let playerCard = Math.floor(Math.random()*player.cards.length);
    player.cardPlayed = player.cards[playerCard];
    player.cards.splice(playerCard, 1);

    // compare the cards played to adjust score and log messages. at least just to check if this is working
    console.log(`${player.name} played ${player.cardPlayed.name} against ${computer.name}'s ${computer.cardPlayed.name}`)
    if(player.cardPlayed.damage > computer.cardPlayed.damage) {
      player.score += 1;
      console.log(`${player.name} wins!`);
    } else if(computer.cardPlayed.damage > player.cardPlayed.damage) {
      computer.score +=1;
      console.log(`AWWW, ${computer.name} won.`);
    } else {
      console.log("I do declare that it's a tie!!");
    }
  }
 },
  trackScore() {
    console.log(`The score is ${player.name} ${player.score}, ${computer.name} ${computer.score}`)
},
  trackRound() {
    round += 1;
    if(cardsAvailable.length > 0) {
    console.log(`Round finished, onto round ${round}`);
  }
},
  giveWinner() {
    if(player.score > computer.score) {
      console.log(`${player.name} wins! It is his incubator now`)
    } else if (computer.score > player.score) {
      console.log(`${computer.name} is the winner! Damn you, ${computer.name}`);
    } else {
      console.log(`WHAT??? IT'S A TIE. REMATCH.`)
    }
  },
	play() {
		// Need to track rounds to know when to end game
		// while(game.rounds <= 3){
    // 1.Deal cards
    // 2.Compare cards
    // 3.Update score after each battle (we go through the battle phase 3 times before we go to next round)
    // 4.Display score after each round
    // 5.Move onto next round
    // 6. Once cards available = 0, the game is over
    // 7. Whoever has more points is winner, otherwise it's a tie. REMATCH
    console.log("GOTTA CATCH 'EM ALL duhduhduhduh")
    while(cardsAvailable.length > 0) {
    console.log(`ROUND ${round}!!!!`);
    this.deal();
    this.compareCards();
    this.trackScore();
    this.trackRound();
  }
    this.giveWinner();
  }
}
// }

game.play();

