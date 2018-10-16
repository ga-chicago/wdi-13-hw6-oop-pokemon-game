	//Let's make a pokemon game


const drawPile = [
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


const trainer1 = {
	name: 'Eggbert',
	hand: [],
	score: 0,
	round: 0
};

const trainer2 =  {
	name: 'Computer',
	hand: [],
	score: 0,
	round: 0
};

const game = {

	drawCard (player) {
		let cardIndex = Math.floor(Math.random() * drawPile.length);
		player.hand.push(drawPile[cardIndex]);
		drawPile.splice([cardIndex], 1);
	},

	dealHand (player) {
		this.drawCard(player);
		this.drawCard(player);
		this.drawCard(player);
		return player.hand;
	},

	startGame () {
		console.log('The computer has challenged you to a Pokemon Battle!');
		
		do {
			this.dealHand(trainer1);
			this.dealHand(trainer2);

			let roundWinner = this.round();
			console.log(roundWinner)

				if (trainer1 === roundWinner) {
					console.log('Nice battling! You win this round.');
					trainer1.round++;
				} if (trainer2 === roundWinner) {
					console.log("Looks like the computer won this round - but it's not over yet!");
				trainer2.round++;
				}	
				// console.log(trainer1);
				// console.log(trainer2);
		} while (drawPile.length > 0); 

			if (trainer1.round > trainer2.round) {
				console.log('You won! Consider yourself a Pokemon Master.')
			} if (trainer1.round < trainer2.round) {
				console.log("You're out of usable Pokemon! Better hurry back to the Pokemon Center...")
			}
	},


//		issue start text: 'The computer has challenged you to a battle!'
//		for (i = 3; i > 0; i--) {
//			this.round(trainer1, trainer2)
//				if (roundWinner === trainer1) {
//					cl('Nice battling - you win this round!')
//					trainer1.round++;
//				} else {
//							cl('All your pokemon are KO'd - looks like your opponent wins this round.');
//							trainer2.round++
//						}
//				trainer1.score = 0;
//				trainer2.score = 0;
//		}; 
//			if (trainer1.round > trainer2.round) {
//				cl('You won!')
//			} else {
//				cl('You have no pokemon left that can battle! better get back to the pokemon center')
//			}

		
	round () {
		// this.dealHand(trainer1);
		// this.dealHand(trainer2);
		let yourHand = trainer1.hand;
		let compHand = trainer2.hand;
		do {
		// let i = yourHand.length
		// while(i >= 1) {
			console.log(yourHand);
			console.log(compHand);
			let card1 = null;
			let chooseCard = null; 

			if (yourHand.length === 3) { 
				chooseCard = prompt('Which Pokemon would you like to send out? Type ' + yourHand[0].name + ', ' + yourHand[1].name + ', or ' + yourHand[2].name + '?');
			} if (yourHand.length === 2) {
				chooseCard = prompt('Which Pokemon would you like to send out? Type ' + yourHand[0].name + ' or ' + yourHand[1].name + '?');
			} if (yourHand.length === 1) {
				chooseCard = prompt('Your last Pokemon is ' + yourHand[0].name + '. Type its name to send it out!');
			}

			for (i = 0; i < yourHand.length; i ++) {
				if (chooseCard === yourHand[i].name) {
					card1 = yourHand[i];
					yourHand.splice([i], 1);
				} 
			}; 
			let card2Index = Math.floor(Math.random() * compHand.length);
			let card2 = compHand[card2Index];
			compHand.splice([card2Index], 1)

			console.log(card1);
			console.log(card2);

			let winner = this.battle(card1, card2);

			console.log(winner);

			if (winner === card1) {
				console.log('Nice! Your ' + card1.name + ' defeated the enemy ' + card2.name + '. Keep up the good work!');
				trainer1.score++;
			} else {
				console.log('Uh oh! The enemy ' + card2.name + ' defeated your ' + card1.name + '. Hang in there!');
				trainer2.score++;
			}

			console.log(trainer1);
			console.log(trainer2);
		} while (yourHand.length > 0); 	
			if (trainer1.score > trainer2.score) {
					return trainer1;
				} else {
					return trainer2;
				}	
	},
			
		// };
		//battle(yourHand,compHand);
//			if winner = trainer1 {
//				console.log(`Woohoo! Your ${card1.name} KO'd your opponent's ${card2.name}.`);	
//				trainer1.score++
//			} else if {
//						console.log(`Oh no! Your opponent's ${card2.name} KO'd your ${card1.name}. Hang in there!`);
//				trainer2.score++
//					}
		
//		round: (trainer1,trainer2) => {
//		cl (trainer1.hand)
//		prompt: which card would you like to choose?
//		let card1 = response
//		let card2 = trainer2.hand[enemylogic()]
//		battle(card1, card2);
//}

	battle (card1, card2) {
		let winner = null;
		if (card1.damage > card2.damage) {
			winner = card1
		} if (card1.damage < card2.damage) {
			winner = card2
		} if (card1.damage === card2.damage) {
			winner = card2
		}
		// console.log(winner.name + ' won the battle!');
		return winner;
	}
};


game.startGame();


//		
//	}



//		drawHand(trainer1)
//		drawhand(trainer2)
//}


// 	battle (pokemon1, pokemon2) {

// 		if (pokemon1.damage > pokemon2.damage) {
// 			console.log(`It's super effective! Your ${pokemon1.name} KOed the opponent's ${pokemon2.name}.`);
// 			this.trainer1.score += 1;
// 		} 	
// 		if (pokemon2.damage > pokemon1.damage) {
// 			console.log(`Oh no! Your opponent's ${pokemon2.name} KOed your ${pokemon1.name}...`);
// 			this.trainer2.score += 1; 
// 			} 
// 		if (pokemon1.damage === pokemon2.damage) {
// 			console.log(`It's a draw! We'll flip a coin and award 1 point at random.`);
// 			let coinFlip = [Math.floor(Math.random() * 2)];
// 			if (coinFlip === 2) {
// 				this.trainer1.score += 1;
// 			} else {
// 				this.trainer2.score += 1;
// 			}
// 		}
// 	},

// 	round () {

// 		this.dealHand(this.trainer1.hand);
// 		this.dealHand(this.trainer2.hand);

// 		console.log (this.trainer1.hand);
// 		console.log(this.trainer2.hand);

// 		let card1 = this.trainer1.hand[Math.floor(Math.random() * this.trainer1.hand.length)];
// 		let card2 = this.trainer2.hand[Math.floor(Math.random() * this.trainer2.hand.length)];
// 		this.battle(card1, card2);
// 		console.log (`Your score in this round is ${this.trainer1.score}, and you've won ${this.trainer1.round} rounds. The computer's score is ${this.trainer2.score}, and it's won ${this.trainer2.round} round.`)

// 	},

// 	start () {
// 		console.log(`${this.trainer2.name} challenged you to a battle!`)
// 		this.round()
// 		for (let i = this.drawPile.length; i > 0; i--) {
// 			for (let i = this.trainer1.hand.length; i > 0; i--) {
// 				this.round()
// 			} 
// 				if (this.trainer1.score > this.trainer2.score) {
// 					this.trainer1.round += 1; 
// 				} 
// 					if (this.trainer1.score < this.trainer2.score) {
// 						this.trainer2.round += 1;
// 					}
// 		} if (this.trainer1.round > this.trainer2.round) {
// 			console.log("You defeated the computer! You're a Pokemon Master now!")
// 		} if (this.trainer1.round < this.trainer2.round) {
// 			console.log("You have no Pokemon left who can battle! Better scurry back to the Pokemon Center")
// 		}
// 	}
// };

// console.log(game.start());



//	

// 	round () { //I think I sort of put the cart before the horse here... gonna try a diff approach
// 		this.dealHand(this.trainer1.hand);
// 		this.dealHand(this.trainer2.hand);
	
// 		for (let i = this.trainer1.hand.length; i > 0; i--) {
// 		// while (this.trainer1.hand > 0) {		

// 				let answer = 0;
// 				let card1 = [];
// 				let card2 = [];
			

// 				if (this.trainer1.hand.length = 3) {
// 					ans = this.handPrompt1(this.trainer1);
// 					if (ans === 1) {
// 						card1.push(this.trainer1.hand[0]);
// 						answer += 0;
// 					} 
// 						if (ans === 2) {
// 							card1.push(this.trainer1.hand[1]);
// 							answer += 1;
// 						}
// 							if (ans === 3) {
// 								card1.push(this.trainer1.hand[2]);
// 								answer += 3;
// 							}


// 					// ans1 = this.handPrompt1(this.trainer1);
// 					// answer += parseInt(ans1); //this system doesn't work...lskdjflaskdjfasl
// 				}

// 				if (this.trainer1.hand.length = 2) {
// 					ans = this.handPrompt2(this.trainer1);
// 					if (ans === 1) {
// 						card1.push(this.trainer1.hand[0]);
// 						answer += 0;
// 					} 
// 						if (ans === 2) {
// 							card1.push(this.trainer1.hand[1]);
// 							answer += 1;
// 						}

// 				}

// 				if (this.trainer1.hand.length = 1) {
// 					ans = this.handPrompt3(this.trainer1);
// 						if (ans === "Y") {
// 						card1.push(this.trainer1.hand[0]);
// 						answer += 0;
// 					} else {
// 						console.log('Fine then, be a quitter')
// 					}
// 				}

// 				let trainer1Index = answer;
// 				let trainer2Index = Math.floor(Math.random() * this.trainer2.hand.length);

// 				// card1.push(this.trainer1.hand[trainer1Index]);
// 				this.trainer1.hand.splice([trainer1Index], 1);
// 				// console.log(this.trainer1.hand)
// 				// console.log(card1);

// 				card2.push(this.trainer2.hand[trainer2Index]);
// 				this.trainer2.hand.splice([trainer2Index], 1);
// 				// console.log(this.trainer2.hand)
// 				// console.log(card2);

// 				this.battle(card1[0], card2[0]); 


// 				card1.pop();
// 				card2.pop();
// 			}
// 			// card2 += this.trainer2.hand[Math.floor(Math.random() * this.trainer2.hand.length)];
// 			// this.battle(card1, card2); 
// 			// card1 = null;
// 			// card2 = null; // don't need this?
			
// 			// if (this.trainer1.hand.length === 2) {
// 			// 	this.handPrompt2(this.trainer1);
// 			// 	let answer = this.handPrompt2();
// 			// 	if (answer === 1) {
// 			// 		card1.push(this.trainer1.hand[0]);
// 			// 		this.trainer1.hand.splice(0, 1);
// 			// 	} 
// 			// 		if (answer === 2) {
// 			// 			card1.push(this.trainer1.hand[1]);
// 			// 			this.trainer1.hand.splice(1, 1);
// 			// 		}
// 			// card2 += this.trainer2.hand[Math.floor(Math.random() * this.trainer2.hand.length)];			
// 			// this.battle(card1, card2);
// 			// let card1 = null;
// 			// let card2 = null; 

// 	//generate enemy card
// 	//call battle method/call battle method

// 			// }
// 			// if (this.trainer.hand.length === 1) {
// 			// 	this.handPrompt3(this.trainer1);
// 			// 	let answer = handPrompt3();
// 			// 	if (answer === 'Y') {
// 			// 		card1.push(this.trainer1.hand[0]);
// 			// 		this.trainer1.hand.pop();
// 			// 	} else {
// 			// 		console.log('Fine then, be a quitter.')
// 			// 	}
// 			// }
// 			// card2.push(this.trainer2.hand[trainer2Index]);
// 			// this.battle(card1[0], card2[0]); 
// 			// pop.card1;
// 	// 		// pop.card2;
// 	// 	}
// 	// },



// 	// playRound () {
// 	// 	for (let i = player1hand.length; i > 0; i--) {
			
// 		}

// 	// },


// 	// start () {
// //		
// //
// //

//NOTES:

//  player1hand =[];
//  player2hand =[];
// 	playfield ??
//  discard =[];

//game object {

// these are properties:

//	dealCards method = () => {
// 		generate 3 random values
//		use them to select three cards from cards array and push them to player1hand array
//		repeat process for player2hand array (loop?);
		//console.log(player1hand[]);
//};

// 	pickCard1 method = () => {
//		would this even need to be a method? not sure
// 		either takes input to pick a card or one is picked randomly - either way from player1hand
// 		I know how to do that, don't really need to pseudo it out further at this point
//}

// 	pickCard2 method = () => {
//		randomly select a card from player2hand	
//}
	
//	play method = (card1, card2) => {
//		callback pickCard1
//		
//}
//		






//}