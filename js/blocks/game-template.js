import { initialState } from '../data/game-data';

import headerTemplate from './header-template';
import statsTemplate from './stats-template';

import { GAME_TYPE } from '../data/game-data';

const gameTemplates = {
  [GAME_TYPE.CHOOSE_TYPE_FOR_TWO]: (level) =>
    `${headerTemplate(initialState)}
  <section class="game">
      <p class="game__task">${level.task}</p>
      <form class="game__content">
        <div class="game__option">
          <img src="${level.options[0].src}" alt="${level.options[0].alt}" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="${level.options[0].name}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="${level.options[0].name}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${level.options[1].src}" alt="${level.options[1].alt}" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="${level.options[1].name}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input class="visually-hidden" name="${level.options[1].name}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>s
        </div>
      </form>
      ${statsTemplate(initialState)}
  </section>`,

  [GAME_TYPE.CHOSE_TYPE_FOR_ONE] : (level) =>
`${headerTemplate(initialState)}
<section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${level.options[0].src}" alt="${level.options[0].alt}" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="${level.options[0].name}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="${level.options[0].name}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
     </form>
     ${statsTemplate(initialState)}
  </section>`,

  [GAME_TYPE.CHOOSE_FROM_SET]: (level) =>
  `${headerTemplate(initialState)}
  <section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${level.options[0].src}" alt="${level.options[0].alt}" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${level.options[1].src}" alt="${level.options[1].alt}" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${level.options[2].src}" alt="${level.options[2].alt}" width="304" height="455">
      </div>
    </form>
    ${statsTemplate(initialState)}
  </section>`,
};

const getGameTemplate = (level) => {
  return gameTemplates[level.type](level);
};

export default getGameTemplate;
