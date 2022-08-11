class CrewCandidate {
  constructor(name, mass, scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(score) {
    this.scores.push(score);
    return;
  }

  average() {
    let sum = 0;
    for (let i=0; i<this.scores.length; i++){
      sum += this.scores[i];
    }
    let avg = Math.round(sum/this.scores.length*10)/10;
    return avg;
  }

  status() {
    let avg = this.average();
    if (avg >= 90) {
      return "Accepted";
    } else if (avg >= 80) {
      return "Reserve";
    } else if (avg >= 70) {
      return "Probationary";
    } else {
      return "Rejected";
    }
  }

}


let bear = new CrewCandidate('Bubba', 135, [88, 85, 90]);
let falcon = new CrewCandidate('Malia', 1.5, [93, 88, 97]);
let glad = new CrewCandidate('Glad', 225, [75, 78, 62]);
