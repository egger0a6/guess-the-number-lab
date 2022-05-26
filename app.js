const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  totGuesses: 0,
  getGuess: function() {
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)

    while(true) {
      guess = parseInt(guess);
      if(guess !== NaN && guess >= this.smallestNum && guess <= this.biggestNum) {
        break;
      }
      else {
        guess = prompt(`Please enter a valid number between ${this.smallestNum} and ${this.biggestNum}`)
      }
    }

    return guess;
  }, 
  render: function(guess) {
    if (guess === secretNum) {
      alert(`Congrats! You guessed the number in ${this.totGuesses} guesses!`)
    }
    else {
      alert(`Sorry. Your guess is too ${(guess >= this.secretNum) ? "high" : "low"}. Previous guesses: ${this.prevGuesses.join(", ").trim()}.`)
    }
  },
  updateRange: function() {

  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    let guess = this.getGuess();
    this.prevGuesses.push(guess);
    this.totGuesses++;

    if(this.render(guess));
  },
}

game.play();
console.log(game.prevGuesses);