import appendNodeToMain from '../utils/append-node';
import createNodeFromTemplate from '../utils/create-node';
import statsTotalTemplate from './stats-total-template';
import { GAME_TYPE } from '../data/game-data';
import { levels } from '../data/game-data';

import getGameTemplate from "./game-template";
import { setAnswerStatus } from "../utils/count-scores"

const gameRender = (state) => {
  let cur_level = levels[state.level_id];

  let gameElement = createNodeFromTemplate(getGameTemplate(cur_level, state));
  appendNodeToMain(gameElement);

  const game__options = document.querySelectorAll('.game__option');

  switch (cur_level.type) {
    case GAME_TYPE.CHOOSE_TYPE_FOR_TWO:
    case GAME_TYPE.CHOSE_TYPE_FOR_ONE:
      [...game__options].forEach(go => {
        go.addEventListener(`click`, function () {
          let radioButtonsChecked = document.querySelectorAll('.game__option input:checked');

          if (radioButtonsChecked.length == game__options.length) { //выбран Ответ для каждой из картинок
            let answers = [];
            [...radioButtonsChecked].forEach(e => answers.push(e.value));
            setAnswerStatus(answers, state);

            goNextLevel(state);
          }
        });
      });
      break;

    // case GAME_TYPE.CHOSE_TYPE_FOR_ONE:
    //   break;

    case GAME_TYPE.CHOOSE_FROM_SET:
      [...game__options].forEach( (go, index, array) => {
        go.addEventListener(`click`, function () {
          let answers = [`photo`, `photo`, `photo`];
          answers[index] = `paint`;
          setAnswerStatus(answers, state);

          goNextLevel(state);
        });
      });
      break;
  }
}

const goNextLevel = (state) => {
  if (state.level_id < levels.length - 1 && state.lives > 0) {
    state.level_id++;
    gameRender(state);
  }
  else {
    let statsResultElement = createNodeFromTemplate(statsTotalTemplate(state));
    appendNodeToMain(statsResultElement);
  }
}

export default gameRender;
