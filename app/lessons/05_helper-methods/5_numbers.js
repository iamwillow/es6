const numbers = () => {

  console.log('>>> NUMBERS:');

  {
    let addToCart = (item, number) => {
      return Number.isFinite(number);
    }

    console.log( addToCart('shirt', 2) );
    console.log( addToCart('shirt', 'infinity') );
    console.log( addToCart('shirt', 2.5) );
  }

  console.log('----------');

  {
    let addToCart = (item, number) => {
      return Number.isSafeInteger(number);
    }

    console.log( addToCart('shirt', 2) );
    console.log( addToCart('shirt', 'infinity') );
    console.log( addToCart('shirt', 2.5) );
  }
  
}

export default numbers;