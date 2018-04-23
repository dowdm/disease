class Disease {

  constructor(name) {
    this.name = name;
    this.spreadRate = 1;
    this.infectedNew = 0;
    this.infectedSick = 0;
    this.infectedTerminal = 0;
    this.infectedDead = 0;
    this.cure = 0;
  }
diseaseSpread(){
    if (this.infectedDead >= 100) {
      return "Game Over, everyone died.";
    } else if (this.cure >= 100) {
      return "You found the cure!";
    } else {
      setInterval(() => {
        this.infectedDead += this.infectedTerminal;
        this.infectedTerminal = this.infectedSick;
        this.infectedSick = this.infectedNew;
        this.infectedNew = this.spreadRate * 4;
      }, 20000);
    }
  }

  spreadRateIncrease() {
    setInterval(() => {
      this.spreadRate++;
    }, 60000);
  }

//   diseaseSlow(number){
//     let that = this;
//     return function(){
//       that.infectedTerminal -= number;
//       return `The possible death rate has been reduced by ${amount}%.`
//     }
//   }
//   // disease.doctorSlow = diseaseSlow(player.slowSpread);
}



export { Disease };
