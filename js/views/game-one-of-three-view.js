import AbstractView from './abstract-view';
import Utils from '../utils/utils';

class GameOneOfThreeView extends AbstractView {
  constructor(state, level) {
    super();
    this.level = level;
    this.answersStatsTemplate = Utils.answersStatsNode(state);
  }

  get template() {
    let options_answers = this.level.options.map((e) => e.answer);
    //correct_subtype = `paint` if question: Find `paint` between `photo`'s
    //correct_subtype = `photo` if question: Find `photo` between `paint`'s
    this.correct_subtype = options_answers.filter((e) => e === `paint`).length < options_answers.filter((e) => e === `photo`).length ? `paint` : `photo`;
    this.wrong_subtype = this.correct_subtype === `paint` ? `photo` : `paint`;

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
    const form = this.element.querySelector(`form`);
    const game__options = form.querySelectorAll('.game__option');

    [...game__options].forEach((go, index, array) => {
      let idx = index;
      go.addEventListener(`click`, () => {

        let answers = new Array(array.length).fill(this.wrong_subtype);
        answers[idx] = this.correct_subtype;

        this.onAnswer(answers);
      });
    });
  }

  onAnswer(answers) {
  }
};

export default GameOneOfThreeView;
