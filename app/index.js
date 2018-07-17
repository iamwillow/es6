// LOCAL vs GLOBAL SCOPE

let limit = 100; // global scope

{
  let limit = 10; // local scope
  console.log(`backstage limit ${limit}`);
}

console.log(`total limit ${limit}`);

// ------ //
// ------ //
// ------ //

// another example of LOCAL vs GLOBAL SCOPE

function hello() {
  let message = "hello";
  console.log(message);
}

function greeting() {
  let message = "how are you?";
  console.log(message);
}

hello();
greeting();

// ------ //
// ------ //
// ------ //

// SPREAD OPERATOR for arrays and objects 

let a = [20, 30, 40];
let b = [10, ...a, 50];
console.log(b); 

let c = ['Donna', "Eric", "Frank"];
let d = ['Alice', 'Bob', 'Carl', ...c];
console.log(d);

function collect(...e) {
  console.log(e);
}

collect('a', 'b', 'c');

collect(
  {
    name: 'susan',
    gender: 'female'
  },
  {
    name: 'tony',
    gender: 'male'
  }
)