const filters = () => {

  console.log('>>> FILTERS:');

  {
    let scores = [7, 9, 34, 19, 10, 22];

    let highScoresMap = scores.map((n) => n > 15);

    let highScores = scores.filter((n) => n > 15);

    console.log(highScoresMap);
    console.log(highScores);
  }
}

export default filters;