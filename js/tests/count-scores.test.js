import { assert } from 'chai';
import { countScores } from '../utils/count-scores';
import {initialState} from '../data/game-settings';

//RESULT_STATE = [ `wrong`, `correct`, `slow`, `fast`, `unknown`, ]
const generateMockData = function (answersCounter, correctCounter, slowCounter, fastCounter, wrongCounter) {
  let answersArray = [];
  let unknownCounter = answersCounter - (correctCounter + slowCounter + fastCounter + wrongCounter);

  let state = Object.assign({}, initialState, {answers: answersArray});
  if(wrongCounter > 3){
    wrongCounter = 3;
  }
  state.lives -= wrongCounter;

  if( unknownCounter < 0 ){
    return -1;
  }

  for(let  i = 0; i < correctCounter; i++){
    answersArray.push(`correct`);
  }

  for(let  i = 0; i < slowCounter; i++){
    answersArray.push(`slow`);
  }

  for(let  i = 0; i < fastCounter; i++){
    answersArray.push(`fast`);
  }

  for(let  i = 0; i < wrongCounter; i++){
    answersArray.push(`wrong`);
  }

  for(let  i = 0; i < unknownCounter; i++){
    answersArray.push(`unknown`);
  }

  return state;
}


describe(`countScores()  function tests`, () => {
  describe(`incorrect or invalid parameters`, () => {
    it(`should return -1 when the answersArray has less then 10 elements`, () => {
      let state = generateMockData(9, 2, 1, 1, 1);
      assert.equal(-1, countScores(state));
    });
  });

  describe(`valid parameters, checking results`, () => {
    it(`should return 1150 pts if 10 answers are valid and livesLeftCounter = 3`, () => {
      let state = generateMockData(10, 10, 0, 0, 0);
      assert.equal(1150, countScores(state));
    });
    it(`should return 0 pts if 0 answers are valid and livesLeftCounter = 0`, () => {
      let state = generateMockData(10, 0, 0, 0, 3);
      assert.equal(0, countScores(state));
    });
  });
});
