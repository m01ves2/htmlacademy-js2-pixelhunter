import AbstractView from './abstract-view';
import Utils from '../utils/utils';

class GameOneOfThreeView extends AbstractView {
  constructor(state, level) {
    super();
    // this.state = state;
    this.level = level;
    this.answersStatsTemplate = Utils.answersStatsNode(state);
  }

  get template() {
    const gameTemplate = `
      <p class="game__task">${this.level.task}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${this.level.options[0].src}" alt="${this.level.options[0].alt}" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${this.level.options[1].src}" alt="${this.level.options[1].alt}" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${this.level.options[2].src}" alt="${this.level.options[2].alt}" width="304" height="455">
        </div>
      </form>`;

    return `
      <section class="game">
        ${gameTemplate}
        ${this.answersStatsTemplate}
      </section>`;
  }

  bind() {
    const game__options = document.querySelectorAll('.game__option');

    [...game__options].forEach((go, index, array) => {
      go.addEventListener(`click`, function () {
        let answers = [`photo`, `photo`, `photo`];
        answers[index] = `paint`;
        this.onAnswer(answers);
      });
    });
  }

  onAnswer(answers) {
  }
};

export default GameOneOfThreeView;
