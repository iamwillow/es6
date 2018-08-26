import Animal from './animal';

class Lion extends Animal {
  constructor(name, type, sound, status) {
    super(name, type, sound);
    this.status = status;
  }

  intro() {
    console.log(`I am ${this.name} the ${this.status} ${this.type}. Hear me ${this.sound.toUpperCase()}!`);
  }
}

const kingdom = () => {
  let mufasa = new Lion('Mufasa', 'lion', 'roar', 'king');
  mufasa.intro();
  console.log(mufasa);

  let zazu = new Animal('Zazu', 'Red-Billed Hornbill', 'cah');
  zazu.intro();
  console.log(zazu);
}

export default kingdom;
