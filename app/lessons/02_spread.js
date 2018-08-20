const spread = () => {
  console.log('>>> SPREAD OPERATOR:');

  // example 1
  {
    let a = [20, 30, 40];
    let b = [10, ...a, 50];
    console.log(b);
  }

  // example 2
  {
    let a = ['Donna', "Eric", "Frank"];
    let b = ['Alice', 'Bob', 'Carl', ...a];
    console.log(b);
  }

  // example 3
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
}

export default spread;