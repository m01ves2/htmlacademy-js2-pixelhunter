import {initialState} from '../data/game-data';
import AbstractView from "./abstract-view";

class GameStateView extends AbstractView {
  constructor(state){
    super();
    this.state = state;
  }

  get template() {
    return `
      <div class="game__timer">${this.state.time}</div>
        <div class="game__lives">
        ${new Array(initialState.lives - this.state.lives)
          .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
          .join(``)}
        ${new Array(this.state.lives)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
          .join(``)}
      </div>
    `;
  }
};

export default GameStateView;
