class Centaur {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.cranky = false
    this.standing = true
    this.layingDown = false
    this.crankyCounter = 0
  }

  shoot(){
    if(!this.cranky && this.standing){
      this.incrementCrankiness()
      return 'Twang!!!'
    } else {
      return 'NO!'
    }
  }

  run(){
    if(!this.cranky && this.standing){
      this.incrementCrankiness()
      return 'Clop clop clop clop!!!'
    } else {
      return 'NO!'
    }
  }

  incrementCrankiness() {
    this.crankyCounter === 2 ? this.cranky = true : this.crankyCounter++
  }

  layDown(){
    this.standing = !this.standing
    this.layingDown = !this.layingDown
  }

  standUp(){
    this.standing = !this.standing
    this.layingDown = !this.layingDown
  }

  sleep(){
    if(this.layingDown){
      this.cranky = !this.cranky
      return 'ZZZZ'
    } else {
      return 'NO!'
    }
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = !this.cranky
    } else {
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur;
