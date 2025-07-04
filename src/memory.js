class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards) return undefined;
    for (let i=this.cards.length-1; i>=1; i--){
      const j =Math.floor(Math.random()*(i+1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked +=1;
    if(card1.name === card2.name) {
      this.pairsGuessed += 1;
      return true;
    }
      return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2){
      return true;
    }
    return false;

  }
}
