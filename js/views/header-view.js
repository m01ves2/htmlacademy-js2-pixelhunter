import AbstractView from './abstract-view';
import {initialState} from '../data/game-settings';

class HeaderView extends AbstractView {
  constructor(state){
    super();
    this.state = state;
  }

  get template(){
    let buttonBackTemplate = `
      <button class="back">
        <span class="visually-hidden">Вернуться к началу</span>
        <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
          <use xlink:href="img/sprite.svg#arrow-left"></use>
        </svg>
        <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
          <use xlink:href="img/sprite.svg#logo-small"></use>
        </svg>
      </button>
    `;

    let stateTemplate = ``;
    if( this.state ){ //state is defined just for *game views*
      stateTemplate = `
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

    return `
      <header class="header">
        ${buttonBackTemplate}
        ${stateTemplate}
      </header>
    `;
  }

  bind() {
    this.element.querySelector(`.back`).addEventListener(`click`, () => {
      this.onClick();
    });
  }

  onClick(){
  }
}

export default HeaderView;
