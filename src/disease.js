class Disease {

  constructor(name) {
    this.name = name;
    this.spreadRate = 1;
    this.infectedNew = 0;
    this.infectedSick = 0;
    this.infectedTerminal = 0;
    this.infectedDead = 0;
  }

  diseaseSpread() {
    if (this.infectedDead >= 100) {
      return "Game Over, everyone died.";
    } else {
      setInterval(() => {
        // debugger;
        this.infectedDead += this.infectedTerminal;
        this.infectedTerminal = this.infectedSick;
        this.infectedSick = this.infectedNew;
        this.infectedNew = this.spreadRate * 4;
        console.log(this);
      }, 20000);
    }
  }

  spreadRateIncrease() {
    setInterval(() => {
      this.spreadRate++;
    }, 60000);
  }
}



export { Disease };
