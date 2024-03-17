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
    const gameTemplate =   `
    <p class="game__task">${this.level.task}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${this.level.options[0].src}" alt="${this.level.options[0].alt}" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="${this.level.options[0].name}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="${this.level.options[0].name}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
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

    const checkFormInput = (evt) => {
      let answers = [...inputs].filter((el) => el.checked);
      setAnswerStatus(answers, state);
      this.onAnswer();
    };

    form.addEventListener(`click`, checkFormInput);
  }

  onAnswer() {
  }
};

export default GameView;
