class Sphinx {
  constructor() {
    this.riddles = []
    this.heroesEaten = 0
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if(this.riddles.length === 4) {
      this.riddles.shift()
    }
  }

  attemptAnswer(answer) {
    const solution = this.riddles.find(element => element.answer === answer)
    if(solution === undefined) {
      this.heroesEaten++
    } else {
      this.riddles.splice(this.riddles.indexOf(solution), 1)
      if (this.riddles.length === 0) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${solution.answer}\"???`
      } else {
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    }
  }
}

module.exports = Sphinx;
