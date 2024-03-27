import { GAME_TYPE } from "./game-settings";

const Server2Game_TypeMap = {
  "two-of-two": GAME_TYPE.TWO_OF_TWO,
  "tinder-like": GAME_TYPE.TINDER_LIKE,
  "one-of-three": GAME_TYPE.ONE_OF_THREE,
};

const Server2Game_AnswerMap = {
  "painting" : "paint",
  "photo" : "photo",
}

const adaptServerData = (data) => data.map( (level) => preprocessLevel(level) );

const preprocessLevel = (level) => {
  let answers = level.answers;
  let options_conv =  answers.map( (answer, index, arr) => {
      return {
        src: answer.image.url,
        answer: Server2Game_AnswerMap[answer.type],
        alt: 'Option ' + index,
        name: 'question' + index,
      }
    }
  );

  return {
    task: level.question,
    type: Server2Game_TypeMap[level.type],
    options: options_conv
  };
};

export default adaptServerData;
