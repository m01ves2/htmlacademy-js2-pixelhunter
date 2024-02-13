export const ANSWER_TIME_LIMIT = {
  FAST: 5,
  SLOW: 15
};

export const countScores = function (answersArray, livesLeftCounter) {
  let scores = 0;
  if (answersArray.length < 10) {
    return -1;
  }
  if (typeof livesLeftCounter !== `number`) {
    return -1;
  }
  if( livesLeftCounter < 0){
    return -1;
  }

  answersArray.forEach(element => {
    if (element.isValid) {
      scores += 100;
      if (element.time <= ANSWER_TIME_LIMIT.FAST) {
        scores += 50;
      }

      if (element.time >= ANSWER_TIME_LIMIT.SLOW) {
        scores -= 50;
      }
    }
  });
  scores += livesLeftCounter * 50;

  return scores;
};
