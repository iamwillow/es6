const functions = () => {


console.log('>>> FUNCTIONS:');

function functionDeclaration() {
  console.log('this is a function declaration / non-anonymous');
  //function declaration: uses "function" in place of "let"
}
functionDeclaration();

let anonymousFunction = function() {
  console.log('this is a function expression / anonymous');
  // this function is anonymous
  // this function does not have a name like the one above
}
anonymousFunction();

let arrowFunction = () => {
  console.log('this is an arrow function');
}
arrowFunction();


console.log('>>> HELPER FUNCTIONS:');
console.log('maps');


}


export default functions;