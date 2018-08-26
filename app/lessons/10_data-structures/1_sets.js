const sets = () => {
  console.log("SETS:");
  
  let numbers = [1, 2, 3, 4, 12];
  let a = new Set(numbers);
  a.add(5);
  a.add("hello");
  a.add({x: 50, y: 60});
 
  for (let x of a.values()){
    console.log(x);
  }
  
  console.log(a.has(5));
}

export default sets;