import { BONUSES } from '../model/game-model';
import { countScores } from '../utils/count-scores';
import AbstractView from './abstract-view';
import Utils from '../utils/utils';

class StatsView extends AbstractView {
  constructor(state){
    super();
    this.state = state;
    this.answersStatsTemplate = Utils.answersStatsNode(this.state);
  }

  get template() {
    let fast_counter = this.state.answers.filter(e => e === `fast`).length;
    let slow_counter = this.state.answers.filter(e => e === `slow`).length;
    let correct_counter = this.state.answers.filter(e => e === `correct`).length;
    let answers_correct_total_counter =  correct_counter + fast_counter + slow_counter;
    let lives_counter = this.state.lives;
    let totalScores = countScores(this.state);

    // if( totalScores === -1 ){
    //   totalScores = `FAIL`;
    // }
    let total_result = totalScores > 0 ? `Победа!` : `Поражение :(`

    let resultTemplate = `
    <section class="result">
      <h2 class="result__title">${total_result}</h2>
      <table class="result__table">
        <tr>
          <td colspan="2">
            ${this.answersStatsTemplate}
          </td>
          <td class="result__points">× ${BONUSES['correct']}</td>
          <td class="result__total">${BONUSES['correct'] * answers_correct_total_counter}</td>
        </tr>`;

    if(fast_counter > 0){
      resultTemplate +=
      `<tr>
         <td></td>
         <td class="result__extra">Бонус за скорость:</td>
         <td class="result__extra">${fast_counter} <span class="stats__result stats__result--fast"></span></td>
         <td class="result__points">× ${BONUSES['fast']}</td>
         <td class="result__total">${BONUSES['fast'] * fast_counter}</td>
       </tr>`;
    }
    if(lives_counter > 0){
      resultTemplate +=
        `<tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${lives_counter} <span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">× ${BONUSES['lives']}</td>
          <td class="result__total">${BONUSES['lives'] * lives_counter}</td>
        </tr>`;
    }
    if(slow_counter > 0){
      resultTemplate +=
        `<tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${slow_counter} <span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">× ${BONUSES['slow']}</td>
          <td class="result__total">${BONUSES['slow'] * slow_counter}</td>
        </tr>`;
    }
    resultTemplate +=
        `<tr>
          <td colspan="5" class="result__total  result__total--final">${totalScores}</td>
        </tr>
      </table>
    </section>`;

    return resultTemplate;
  }
};

export default StatsView;
