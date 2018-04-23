 class Player {

  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.slowSpread = 0;
    this.knowledge = 0;
    this.turnValue = ""
  }

  playerRole() {
    if (this.role === "researcher") {
      this.knowledge = 4;
      this.slowSpread = 1;
    } else if (this.role === "doctor") {
      this.knowledge = 3;
      this.slowSpread = 2;
    } else if (this.role === "medic") {
      this.knowledge = 2;
      this.slowSpread = 3;
    } else {
      this.knowledge = 1;
      this.slowSpread = 4;
    }
  }

  playerSpin() {
    let spin = Math.floor(Math.random() * (5-1) + 1);
    if (this.turnValue === "Slow the spread"){
      return this.slowSpread = spin;
    } else if (this.turnValue === "Apply to knowledge"){
      return this.knowledge = spin;
    } else

  }

 }
