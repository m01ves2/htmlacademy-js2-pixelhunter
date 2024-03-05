import appendNodeToMain from '../utils/append-node';
import createNodeFromTemplate from '../utils/create-node';
// import game1Element from './game-1';
import { initialState } from '../data/game-data';
import gameRender from './game-render';
import buttonBackTemplate from '../blocks/button-back-template';

const rulesText = `
<header class="header">
${buttonBackTemplate}
</header>
<section class="rules">
<h2 class="rules__title">Правила</h2>
<ul class="rules__description">
  <li>Угадай 10 раз для каждого изображения фото
    <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
    <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
  <li>Фотографиями или рисунками могут быть оба изображения.</li>
  <li>На каждую попытку отводится 30 секунд.</li>
  <li>Ошибиться можно не более 3 раз.</li>
</ul>
<p class="rules__ready">Готовы?</p>
<form class="rules__form">
  <input class="rules__input" type="text" placeholder="Ваше Имя">
  <button class="rules__button  continue" type="submit" disabled>Go!</button>
</form>
</section>`;

const rulesElement = createNodeFromTemplate(rulesText);

const rulesButton = rulesElement.querySelector(`.rules__button`);
const rulesInput = rulesElement.querySelector(`.rules__input`);
rulesInput.addEventListener(`change`, function(evt){
  if(rulesInput.value.length > 0){
    rulesButton.disabled = false;
  }
  else {
    rulesButton.disabled = true;
  }
});

rulesButton.addEventListener(`click`, function(evt){
  let state = structuredClone(initialState); //deep clone
  gameRender(state);
});

export default rulesElement;
