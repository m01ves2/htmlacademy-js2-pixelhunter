import createNodeFromTemplate from '../utils/create-node';
import appendNodeToMain from '../utils/append-node';

import statsElement from './stats';

import { initialState } from './game-data';
import headerTemplate from './header-template';
import statsTemplate from './stats-template';

const gameTemplate = `
${headerTemplate(initialState)}
<section class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">

    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>

    <div class="game__option  game__option--selected">
      <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
    </div>

    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
    </div>

  </form>
  ${statsTemplate}
</section>`;

const game3Element = createNodeFromTemplate(gameTemplate);

const gameOptionElements = game3Element.querySelectorAll(`.game__option`);
for (let i = 0; i < gameOptionElements.length; i++) {
  gameOptionElements[i].addEventListener(`click`, function (evt) {
    appendNodeToMain(statsElement);
  });
}

export default game3Element;
