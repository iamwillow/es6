class Animal {
  constructor(a, b, c) {
    this.name = a;
    this.type = b;
    this.sound = c;
  }

  intro() {
    console.log(`I am ${this.name} the ${this.type}. Hear me ${this.sound.toUpperCase()}!`);
  }
}

export default Animal;