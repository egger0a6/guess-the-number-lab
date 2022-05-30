const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  prevGuesses: [],
  totGuesses: 0,
  getGuess: function() {
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)

    while(true) {
      guess = parseInt(guess);
      if(!isNaN(guess) && guess >= this.smallestNum && guess <= this.biggestNum) {
        break;
      }
      else {
        guess = prompt(`Please enter a valid number between ${this.smallestNum} and ${this.biggestNum}`)
      }
    }

    return guess;
  }, 
  render: function(guess) {
    if (guess === this.secretNum) {
      alert(`Congrats! You guessed the number in ${this.totGuesses} guesses!`);
      return true;
    }
    else {
      alert(`Sorry. Your guess is too ${(guess > this.secretNum) ? "high" : "low"}. Previous guesses: ${this.prevGuesses.join(", ").trim()}.`);
      return false;
    }
  },
  updateRange: function(guess) {
    if (guess < this.secretNum) {
      this.smallestNum = guess;
    }
    else {
      this.biggestNum = guess;
    }
  },
  initializeGame: function() {
      while(true) {
        // assign this.smallestNumber a valid integer from user input
        this.smallestNum = prompt("Enter the smallest number.");
        while(true) {
          this.smallestNum = parseInt(this.smallestNum);
          if (!isNaN(this.smallestNum)) {
            break;
          }
          this.smallestNum = prompt("Enter a valid smallest number.");
        }
        // assign this.biggestNumber a valid integer from user input
        this.biggestNum = prompt("Enter the biggest number.");
        while(true) {
          this.biggestNum = parseInt(this.biggestNum);
          if (!isNaN(this.biggestNum)) {
            break;
          }
          this.biggestNum = prompt("Enter a valid biggest number.");
        }

        if (this.smallestNum < this.biggestNum) {
          break;
        }
        else {
          alert(`Invalid range. The smallest number cannot be larger than the biggest number. Please enter numbers for a valid range.`);
        }
      }

      // Get a random secret number from the range
      this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
  },
  play: function() {
    this.initializeGame();

    let gameOver = false;
    while (!gameOver) {
      let guess = this.getGuess();
      this.totGuesses++;
      this.prevGuesses.push(guess);
      gameOver = this.render(guess);
      this.updateRange(guess);
    }
  },
}

game.play();