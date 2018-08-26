function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => `I'm ${this.name} from ${this.house}.`;
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");

// expernally adding a KEY to a prototype:
Wizard.prototype.pet_name;
harry.pet_name = "Hedwig";

//externally adding a METHOD to a prototype:

// Wizard.prototype.petInfo = () => {
//   return `My pet is ${this.pet_name} the ${this.pet}`;
  
// }
// console.log( harry.petInfo() );

// the above does not work, because external arrow functions to not 
// create a local "this" to reference
// arrow functions work inside the prototype becuase there is
// a parent "this" to refer to.

Wizard.prototype.petInfo = function() {
  return `My pet is ${this.pet_name} the ${this.pet}.`;
}

export {Wizard, harry};