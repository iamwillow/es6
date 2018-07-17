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

{
  let a = [20, 30, 40];
  let b = [10, ...a, 50];
  console.log(b);
}

{
  let a = ['Donna', "Eric", "Frank"];
  let b = ['Alice', 'Bob', 'Carl', ...a];
  console.log(b);
}

{
  function collect(...a) {
    console.log(a);
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
}


// ------ //
// ------ //
// ------ //

// DESTRUCTURING 

// destructuring arrays
{
  let a = [4, 5, 6];
  let first = a[0];
  let second = a[1];
  console.log(`${first}, ${second}`);
}

{
  let a = [4, 5, 6];
  let [first, second] = a;
  console.log(`${first}, ${second}`);
}

// destructuring objects
{
  let lion = { name: 'mufasa', kids: 1};
  let name = lion.name;
  let kids = lion.kids;
  console.log(name, kids);
}

{
  let lion = { name: 'mufasa', kids: 1};
  let {name, kids} = lion;
  console.log(name, kids);
}

{
  let lion = { name: 'mufasa', kids: {name: 'simba'}};
  let {name, kids} = lion;
  console.log(name, kids);
}


// An error that may arise
// Problem: {name, kids} is understood as a coding block
{
  // let lion = { name: 'mufasa', kids: 1};
  // let name, kids;
  // {name, kids} = lion;
  // console.log(name, kids);
} 

// Solution:
{
  let lion = { name: 'mufasa', kids: 1};
  let name, kids;
  ({name, kids} = lion);
  console.log(name, kids);
}


// ------ //
// ------ //
// ------ //