import gameStateTemplate from './game-state-template';
import buttonBackTemplate from './button-back-template';
import statsTemplate from './stats-template';

import { GAME_TYPE } from '../data/game-data';

const gameContentTemplates = {
  [GAME_TYPE.CHOOSE_TYPE_FOR_TWO]: (level) =>
  `<p class="game__task">${level.task}</p>
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
    </form>`,

  [GAME_TYPE.CHOSE_TYPE_FOR_ONE] : (level) =>
  `<p class="game__task">${level.task}</p>
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
   </form>`,

  [GAME_TYPE.CHOOSE_FROM_SET]: (level) =>
  `<p class="game__task">${level.task}</p>
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
   </form>`,
};

const getGameTemplate = (level, state) =>
  `<header class="header">
    ${buttonBackTemplate}
    ${gameStateTemplate(state)}
  </header>
  <section class="game">
    ${gameContentTemplates[level.type](level)}
    ${statsTemplate(state)}
  </section>`;

export default getGameTemplate;
