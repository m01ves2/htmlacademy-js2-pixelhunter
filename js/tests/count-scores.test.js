// import { assert } from 'chai';
// import { ANSWER_TIME_LIMIT, countScores } from '../utils/count-scores';

// const generateMockData = function (numberOfElements, numberOfValid, numberOfSlowAnswers, numberOfFastAnswers) {
//   let answersArray = [];
//   let numberOfValidLeft = numberOfValid;
//   let numberOfSlowAnswersLeft = numberOfSlowAnswers;
//   let numberOfFastAnswersLeft = numberOfFastAnswers;

//   for (let i = 0; i < numberOfElements; i++) {
//     let el = {};
//     el.isValid = numberOfValidLeft-- > 0 ? true : false;

//     //TODO think about DRY here. make more oprimized generating method
//     if (Math.round(Math.random()) == 0) {
//       if (numberOfFastAnswersLeft-- > 0) {
//         el.time = Math.floor(Math.random() * ANSWER_TIME_LIMIT.FAST);
//       }
//       else if (numberOfSlowAnswersLeft-- > 0) {
//         el.time = Math.floor(ANSWER_TIME_LIMIT.SLOW + Math.random() * 100);
//       }
//       else {
//         el.time = Math.floor(ANSWER_TIME_LIMIT.FAST + Math.random() * (ANSWER_TIME_LIMIT.SLOW - ANSWER_TIME_LIMIT.FAST));
//       }
//     }
//     else {
//       if (numberOfSlowAnswersLeft-- > 0) {
//         el.time = Math.floor(ANSWER_TIME_LIMIT.SLOW + Math.random() * 100);
//       }
//       else if (numberOfFastAnswersLeft-- > 0) {
//         el.time = Math.floor(Math.random() * ANSWER_TIME_LIMIT.FAST);
//       }
//       else {
//         el.time = Math.floor(ANSWER_TIME_LIMIT.FAST + Math.random() * (ANSWER_TIME_LIMIT.SLOW - ANSWER_TIME_LIMIT.FAST));
//       }
//     }
//     answersArray.push(el)
//   };

//   return answersArray;
// }


// describe(`countScores()  function tests`, () => {
//   describe(`incorrect or invalid parameters`, () => {
//     it(`should return -1 when the answersArray has less then 10 elements`, () => {
//       let answersArray = generateMockData(3, 2, 1, 1);
//       let livesLeftCounter = 3;
//       assert.equal(-1, countScores(answersArray, livesLeftCounter));
//     });
//     it(`should return -1 if livesLeftCounter is invalid`, () => {
//       let answersArray = generateMockData(10, 0, 5, 5);
//       assert.equal(-1, countScores(answersArray, null));
//       assert.equal(-1, countScores(answersArray, undefined));
//       assert.equal(-1, countScores(answersArray, `dfsgds`));
//     });
//   });

//   describe(`valid parameters, checking results`, () => {
//     it(`should return 1150 pts if 10 answers are valid and livesLeftCounter = 3`, () => {
//       let answersArray = generateMockData(10, 10, 5, 5);
//       let livesLeftCounter = 3;
//       assert.equal(1150, countScores(answersArray, livesLeftCounter));
//     });
//     it(`should return 0 pts if 0 answers are valid and livesLeftCounter = 0`, () => {
//       let answersArray = generateMockData(10, 0, 5, 5);
//       let livesLeftCounter = 0;
//       assert.equal(0, countScores(answersArray, livesLeftCounter));
//     });
//   });
// });
