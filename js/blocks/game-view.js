import { GAME_TYPE } from '../data/game-data';
import AbstractView from './abstract-view';
import { setAnswerStatus } from '../utils/count-scores';
//TODO

class GameView extends AbstractView {
  constructor(state, level, buttonBackView, gameStateView, statsView) {
    super();
    this.state = state;
    this.level = level;
    this.buttonBackView = buttonBackView;
    this.gameStateView = gameStateView;
    this.statsView = statsView;
  }

  get template() {
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

      [GAME_TYPE.CHOSE_TYPE_FOR_ONE]: (level) =>
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

    return `
      <header class="header">
        ${this.buttonBackView.template}
        ${this.gameStateView.template}
      </header>
      <section class="game">
        ${gameContentTemplates[level.type](level)}
        ${this.statsView.template}
      </section>`;
  }

  bind(){
    let cur_level = levels[state.level_id];
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

              // goNextLevel(state);
              this.onAnswer();
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

            // goNextLevel(state);
            this.onAnswer();
          });
        });
        break;
    }
  }

  onAnswer(){
  }
};

export default GameView;
