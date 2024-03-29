import AbstractView from './abstract-view';
import Utils from '../utils/utils';

class GameTnderLikeView extends AbstractView {
  constructor(state, level) {
    super();
    this.level = level;
    this.answersStatsTemplate = Utils.answersStatsNode(state);
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
        ${this.answersStatsTemplate}
      </section>`;
  }

  bind() {
    const form = this.element.querySelector(`form`);
    const inputs = form.querySelectorAll(`input`);
    [...inputs].forEach( (input) => {
      input.addEventListener('click', (evt) => {
        let answers = [...inputs].filter((el) => el.checked).map( (e) => e.value);
        this.onAnswer(answers);
      });
    });
  }

  onAnswer(answers) {
  }
};

export default GameTnderLikeView;
