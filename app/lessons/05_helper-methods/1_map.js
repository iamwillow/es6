const mapping = () => {

  console.log('>>> MAPPING:');

  let values = [20, 30, 40];

  {
    let double = (n) => {
      return n*2;
    }

    let doubled = values.map(double);
    // this is called a "callback"
    // as it calls on every element in the array

    console.log(doubled);
  }

  {
    let doubled = values.map((n) => {
      return n*2;
    });
    console.log(doubled);
  }

  {
    let doubled = values.map((n) => n*2);
    console.log(doubled);
  }

}

export default mapping;