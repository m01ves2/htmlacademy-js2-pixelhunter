import { levels } from '../data/game-data';
import { BONUSES } from '../model/game-model';

const ANSWER_TIME_LIMIT = {
  FAST: 5,
  SLOW: 15
};

export const countScores = function (state) {
  let answersArray = state.answers;
  let livesLeftCounter = state.lives;
  let scores = 0;
  if (answersArray.length < 10) {
    return -1;s
  }
  if (typeof livesLeftCounter !== `number`) {
    return -1;
  }

  if( livesLeftCounter <= 0){
    return -1;
  }

  answersArray.forEach(element => {
    if (element != 'unknown' && element != 'wrong') {
      scores += BONUSES['correct'];

      if(element === 'fast'){
        scores += BONUSES['fast'];
      }
      else if(element === 'slow'){
        scores += BONUSES['slow'];
      }
    }
  });
  scores += livesLeftCounter * 50;

  return scores;
};

export const setAnswerStatus = function(answers, state){

  let level = levels[state.level_id];
  let right_answers = level.options.map(e => e.answer);
  let time = state.time;

  let status = `correct`;

  for(let i = 0; i < answers.length; i++){
    if(answers[i] !== right_answers[i]){
      status = `wrong`;
      state.lives--;
      break;
    }
  }

  if( status == `correct` && time <=  ANSWER_TIME_LIMIT.FAST){
    status = `fast`;
  }
  else if( status == `correct` && time >= ANSWER_TIME_LIMIT.SLOW){
    status = `slow`;
  }

  state.answers[state.level_id] = status;
}
