const searchStrings = () => {

  console.log('>>> SEARCH STRINGS:');

  let string = 'my mom told me your dog ate charlie\'s homework';

  console.log( string.startsWith('my') );
  console.log( string.endsWith('homework') );
  console.log( string.startsWith('your') );
  console.log( string.includes('dog ') );
}

export default searchStrings; 