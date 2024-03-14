import appendNodeToMain from '../utils/append-node';
import createNodeFromTemplate from '../utils/create-node';
import { GAME_TYPE } from '../data/game-data';
import { levels } from '../data/game-data';

const gameRender = (state) => {
  // let cur_level = levels[state.level_id];

  // let gameElement = createNodeFromTemplate(getGameTemplate(cur_level, state));
  // appendNodeToMain(gameElement);

  // const game__options = document.querySelectorAll('.game__option');
}

const goNextLevel = (state) => {
  // if (state.level_id < levels.length - 1 && state.lives > 0) {
  //   state.level_id++;
  //   gameRender(state);
  // }
  // else {
  //   let statsResultElement = createNodeFromTemplate(statsTotalTemplate(state));
  //   appendNodeToMain(statsResultElement);
  // }
}

export default gameRender;
