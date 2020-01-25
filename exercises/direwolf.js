class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name
    this.home = home
    this.size = size
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }

  protect(stark) {
    if((this.home === stark.location) && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark)
      stark.safe = !stark.safe
      this.huntsWhiteWalkers = !this.huntsWhiteWalkers
    }
  }

  leave(stark) {
    this.starksToProtect.shift()
    stark.safe = !stark.safe
    this.huntsWhiteWalkers = !this.huntsWhiteWalkers
  }
}

module.exports = Direwolf;
