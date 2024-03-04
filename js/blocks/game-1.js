import appendNodeToMain from '../utils/append-node';
import createNodeFromTemplate from '../utils/create-node';

import game2Element from './game-2';

import headerTemplate from './header-template';
import { initialState } from '../data/game-data';
import statsTemplate from './stats-template';

const gameTemplate = `
${headerTemplate(initialState)}
<section class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">

      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>

      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>

    </form>
    ${statsTemplate(initialState)}
</section>`;

const game1Element = createNodeFromTemplate(gameTemplate);

const radioButtons = game1Element.querySelectorAll(`input[type=radio]`);

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener(`change`, function (evt) {
    if ((radioButtons[0].checked || radioButtons[1].checked) &&
      (radioButtons[2].checked || radioButtons[3].checked)) {
      appendNodeToMain(game2Element);
    }
  });
}

export default game1Element;
