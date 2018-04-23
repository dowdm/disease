 class Player {

  constructor(name, role,) {
    this.name = name;
    this.role = role;
    this.slowSpread = 0;
    this.knowledge = 0;
  }

  slowDisease (disease) {
    disease.infectedNew -= this.slowSpread;
  }
  makeCure (disease) {
    disease.cure += this.slowSpread;
  }

  useKnowledge (disease) {
    if (disease.infectedTerminal > this.knowledge){
    disease.infectedTerminal -= this.knowledge;
    } else {
      let message = "There aren't enough terminally ill people";
      return message;
    }
  }

  playerSpin() {
    this.slowSpread = Math.floor(Math.random() * (5-1) + 1);
    return this.slowSpread;
  }

  knowledgeSpin() {
    this.knowledge = Math.floor(Math.random() * (5-1) + 1);
    return this.knowledge;
  }
}
 export { Player };
