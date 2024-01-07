
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let jj = new Animal("dog",4);
console.log(jj.name+" "+jj.legCount);
console.log(jj.describe());


