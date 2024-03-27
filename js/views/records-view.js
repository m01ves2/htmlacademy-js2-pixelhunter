import AbstractView from './abstract-view';
import Utils from '../utils/utils';
import { initialState } from '../data/game-settings';

// Example of record
// {
//   date: 1234567567898, // Date of creation ms
//   answers: ['correct', 'wrong', 'fast', 'wrong', 'correct', 'wrong', 'wrong'], // statistics
//   lives: 0 // lives left
// },

class RecordsView extends AbstractView {
  constructor(data) {
    super();

    this.data = data; //Got from Server
    this.playerName = data.playerName;
  }

  get template() {

    let resultTemplate = `
    <section class="result">
      <h2 class="result__title">${this.playerName}</h2>
      <table class="result__table">`;

      this.data.forEach( (record, index, array) => {
        let answersStatsTemplate = Utils.answersStatsNode(record);
        resultTemplate += `
          <tr>
            <td class="result__extra">${index}.</td>
            <td class="result__extra">${new Date(record.date).toDateString()}</td>
            <td colspan="2" class="result__extra">
              <div class="game__lives">
                ${new Array(initialState.lives - record.lives)
                  .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
                  .join(``)}
                ${new Array(record.lives)
                  .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
                  .join(``)}
              </div>
            </td>
            <td colspan="2">
              ${answersStatsTemplate}
            </td>
          </tr> `;
    });

    resultTemplate += `
      </table>
    </section>`;

    return resultTemplate;
  }
};

export default RecordsView;
