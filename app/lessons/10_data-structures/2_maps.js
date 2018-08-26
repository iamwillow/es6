const maps = () => {
  console.log("MAPS:");

  let numArray = [[1, "fish"], [2, "fish"], ["red", "fish"], ["blue", "fish"]];
  let valMap = new Map(numArray);

  for (let [key, value] of valMap.entries()){
    console.log(`${key} ${value}`);
  }



  let string = "supercalifragilisticexpialidocious";

  let lettersMap = new Map();
  for (let i=0; i<string.length; i++){
    let letter = string[i];
    if (!lettersMap.has(letter)){
      lettersMap.set(letter, 1);
    } else {
      lettersMap.set(letter, lettersMap.get(letter) + 1);
    }
  } 
  console.log(lettersMap); 


  // tip: don't update all objects with maps
  // maps are most useful for:
  //  -- need keys beyond just strings
  //  -- key/value pairs are often added/removed/updated
}

export default maps;