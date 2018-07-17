const scope = () => {
  console.log('>>> LOCAL AND GLOBAL SCOPE:');



// example 1
let limit = 100; // global scope

{
  let limit = 10; // local scope
  console.log(`backstage limit ${limit}`);
}

console.log(`total limit ${limit}`);



// example 2

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



}

export default scope;