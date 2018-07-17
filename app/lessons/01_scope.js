// LOCAL vs GLOBAL SCOPE

const scope = () => {
  let limit = 100; // global scope

  {
    let limit = 10; // local scope
    console.log(`backstage limit ${limit}`);
  }
  
  console.log(`total limit ${limit}`);

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
}

export default scope;