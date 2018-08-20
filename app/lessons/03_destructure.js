const destructure = () => {
  console.log('>>> DESTRUCTURING:');

  // destructuring ARRAYS
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

  // destructuring OBJECTS
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

  // Solution: add ()
  {
    let lion = { name: 'mufasa', kids: 1};
    let name, kids;
    ({name, kids} = lion);
    console.log(name, kids);
  }
}

export default destructure;
