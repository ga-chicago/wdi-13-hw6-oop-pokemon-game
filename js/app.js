const cardPool = [
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

//Player battles autoplayer
//Game deals three cards to each player
//Player chooses card, computer randomly chooses card
//Player with higher damage value wins point
//First player with three point wins

//Game object
  //Properties
  //Methods
    //Deal deck of 10 random cards
    //Deal player 3 top cards
    //Deal computer 3 top cards
    //Choose random card for computer
    //Record damage of computer card and player card
    //Reset decks/hands without resetting rounds

//Player object
  //Properties
  //Methods
    //Choose and play card
    //See stats: points and rounds won

const game = {
  tempCardPool: [
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
        ],
  deck: [],
  playerHand: [],
  compHand: [],
  playerCardPlayed: {},
  compCardPlayed: {},
  playerScore: 0,
  compScore: 0,
  totalScore: 0,
  playerRoundWins: 0,
  compRoundWins: 0,
  round: 0,
  dealDeck () {
    deck = [];
    for(let i = 0; i < 18; i++) {
      let cardSelectionNum = Math.floor(Math.random()*game.tempCardPool.length);
      //console.log(cardSelectionNum);
      //console.log(tempCardPool[cardSelectionNum]);
      game.deck.push(game.tempCardPool[cardSelectionNum]);
      //console.log(deck);
      game.tempCardPool.splice(cardSelectionNum,1);
      //console.log(tempCardPool);
    }
  },
  dealPlayerHand () {
    game.playerHand = [];
    for(let i = 0; i < 3; i++) {
      //console.log(i);
      //console.log(deck[i]);
      game.playerHand.push(game.deck[i]);
      //console.log(playerHand);
      game.deck.splice(0,1);
      //console.log(deck);
    }
  },
  dealCompHand () {
    game.compHand = [];
    for(let i = 0; i < 3; i++) {
      game.compHand.push(game.deck[i]);
      game.deck.splice(0,1);
    }
  },
  playCompCard () {
    compCardPlayed = game.compHand[0];
    game.compHand.splice(0,1);
    console.log("Computer played " + compCardPlayed.name + ": " + compCardPlayed.damage + " damage.");
  },
  battlePrompt() {
    console.log("Look at your hand and input the number of the Pokemon you wish to play by typing 'player.playCard([your card's number])' and hitting 'enter'.");
  },
  battle() {
    game.playCompCard();
    if(playerCardPlayed.damage > compCardPlayed.damage) {
      this.playerScore += 1;
      this.totalScore += 1;
      console.log("Eggbert's " + playerCardPlayed.name + " defeated computer's " + compCardPlayed.name + "!");
    } else if(compCardPlayed.damage > playerCardPlayed.damage) {
      this.compScore += 1;
      this.totalScore += 1;
      console.log("Computer's " + compCardPlayed.name + " defeated Eggbert's " + playerCardPlayed.name + "!");
    } else {
      console.log("Eggbert's " + playerCardPlayed.name + " tied computer's " + compCardPlayed.name + "!");
      this.totalScore += 1;
    }
    console.log("Score: Eggbert: " + this.playerScore + ", Computer: " + this.compScore);
    if(this.totalScore < 3) {
      console.log("Rounds Won: Eggbert: " + this.playerRoundWins + ", Computer: " + this.compRoundWins);
    }
    if(this.totalScore === 3) {
      if(this.playerScore > this.compScore) {
        this.playerRoundWins += 1;
        console.log("Eggbert wins the round!");
      } else if(this.compScore > this.playerScore) {
        this.compRoundWins += 1;
        console.log("Computer wins the round!");
      } else {
        console.log("The round was a tie!");
      }
      this.playerScore = 0;
      this.compScore = 0;
      console.log("Rounds Won: Eggbert: " + this.playerRoundWins + ", Computer: " + this.compRoundWins);
      console.log("To begin a new round, type 'game.startRound()' and hit 'enter'");
      if(this.round === 3) {
        console.log("The game is over! Final score: Eggbert: " + this.playerRoundWins + "; Computer: " + this.compRoundWins);
        if(this.playerRoundWins > this.compRoundWins) {
          console.log("Eggbert wins!");
        } else if(this.compRoundWins > this.playerRoundWins) {
          console.log("Computer wins!");
        } else {
          console.log("The game is a tie!");
        }
      }
    } else {
      player.showHand();
      game.battlePrompt();
    }
  },
  startRound() {
    game.totalScore = 0;
    game.round += 1;
    if(game.deck.length === 0) {
      this.dealDeck();
    };
    this.dealPlayerHand();
    player.showHand();
    this.dealCompHand();
    this.battlePrompt();
  }
}

const player = {
  showHand() {
    console.log("This is your hand:");
    console.log(game.playerHand);
  },
  playCard(cardNum) {
    playerCardPlayed = game.playerHand[cardNum];
    game.playerHand.splice(cardNum,1);
    console.log("Eggbert played " + playerCardPlayed.name + ": " + playerCardPlayed.damage + " damage.");
    game.battle();
  }
}

game.startRound();

//Nearly everything works, but for some reason the computer's hand in the last round (round 3) only contains 2 defined objects, causing the game to end inconclusively...unsure what's causing this.







