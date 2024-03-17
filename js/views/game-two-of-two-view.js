import AbstractView from './abstract-view';
import { setAnswerStatus } from '../utils/count-scores';
import getStatsNode from '../utils/get-stats-node';

class GameView extends AbstractView {
  constructor(state, level, statsViewTemplate) {
    super();
    this.state = state;
    this.level = level;
    this.statsViewTemplate = getStatsNode(this.state);
  }

  get template() {
    const gameTemplate = `
      <p class="game__task">${this.level.task}</p>
      <form class="game__content">
         <div class="game__option">
           <img src="${this.level.options[0].src}" alt="${this.level.options[0].alt}" width="468" height="458">
           <label class="game__answer game__answer--photo">
             <input class="visually-hidden" name="${this.level.options[0].name}" type="radio" value="photo">
             <span>Фото</span>
           </label>
           <label class="game__answer game__answer--paint">
             <input class="visually-hidden" name="${this.level.options[0].name}" type="radio" value="paint">
             <span>Рисунок</span>
           </label>
         </div>
         <div class="game__option">
           <img src="${this.level.options[1].src}" alt="${this.level.options[1].alt}" width="468" height="458">
           <label class="game__answer  game__answer--photo">
             <input class="visually-hidden" name="${this.level.options[1].name}" type="radio" value="photo">
             <span>Фото</span>
           </label>
           <label class="game__answer  game__answer--paint">
             <input class="visually-hidden" name="${this.level.options[1].name}" type="radio" value="paint">
             <span>Рисунок</span>
           </label>s
         </div>
      </form>`;

    return `
      <section class="game">
        ${gameTemplate}
        ${this.statsViewTemplate}
      </section>`;
  }

  bind() {
    const form = this.element.querySelector(`form`);
    const inputs = form.querySelectorAll(`input`);
    const checkFormInputs = (evt) => {
      let answers = [...inputs].filter((el) => el.checked);
      if (answers.length === 2) {
        setAnswerStatus(answers, state);
        this.onAnswer();
      }
    };
    form.addEventListener(`click`, checkFormInputs);

  }

  onAnswer() {
  }
};

export default GameView;
