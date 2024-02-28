import appendNodeToMain from '../utils/append-node';
import createNodeFromTemplate from '../utils/create-node';

import game3Element from './game-3';

import { initialState } from './game-data';
import headerTemplate from './header-template';
import statsTemplate from './stats-template';

const gameTemplate = `
${headerTemplate(initialState)}
<section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>

    <form class="game__content  game__content--wide">

      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>

     </form>
    ${statsTemplate}
  </section>`;

const game2Element = createNodeFromTemplate(gameTemplate);

const answerElements = game2Element.querySelectorAll(`.game__answer`);
for (let i = 0; i < answerElements.length; i++) {
  answerElements[i].addEventListener(`change`, function (evt) {
    appendNodeToMain(game3Element);
  });
}


export default game2Element;
