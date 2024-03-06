import {initialState} from '../data/game-data';

const gameStateTemplate = (state) =>
`<div class="game__timer">${state.time}</div>
 <div class="game__lives">
   ${new Array(initialState.lives - state.lives)
     .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
     .join(``)}
   ${new Array(state.lives)
     .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
     .join(``)}
 </div>`;

export default gameStateTemplate;