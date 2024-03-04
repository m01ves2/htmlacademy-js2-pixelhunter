import appendNodeToMain from '../utils/append-node';
import createNodeFromTemplate from '../utils/create-node';
import statsTemplate from './stats';
import { GAME_TYPE } from '../data/game-data';
import { levels } from '../data/game-data';

import getGameTemplate from "./game-template";

const gameRender = (state) => {
  let cur_level = levels[state.level_id];

  let gameElement = createNodeFromTemplate(getGameTemplate(cur_level));
  appendNodeToMain(gameElement);

  const game__options = document.querySelectorAll(`.game__option`);

  gameElement.addEventListener(`click`, function (evt) {
    if (state.level_id < levels.length - 1) {
      let newState = Object.assign({}, state, { level_id: state.level_id + 1 });
      gameRender(newState);
    }
    else {
      appendNodeToMain(statsTemplate);
    }
  });
  //TODO добавить обработчики события *выбраны ответы*
  // для игры типа: CHOOSE_PICTURE_TYPE - событие, что к каждой картинке выбрано что то
  // для игры типа: CHOOSE_FROM_SET - событие, что выбрана одна из картинок
  //TODO переход к следующему уровню игры, если они не закончились
  //TODO если уровни игры закончились - переход к экрану статистики

  // if (cur_level.game__type == GAME_TYPE.CHOOSE_PICTURE_TYPE) {

  //   document.addEventListener(`click`, function (evt) {

  //   });
  // }
  // else if (cur_level.game__type == GAME_TYPE.CHOOSE_FROM_SET) {

  //   document.addEventListener(`click`, function (evt) {

  //   });
  // }
}

export default gameRender;
