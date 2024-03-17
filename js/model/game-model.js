import {levels, answers as answersStat} from '../data/game-data';


//TODO changeLevel(), die(), tick() in game.js

export const BONUSES = {
  'fast': 50,
  'slow': -50,
  'correct': 100,
  'wrong': 0,
  'lives': 50,
}

export const GAME_TYPE = {
  CHOOSE_TYPE_FOR_TWO: 0,
  CHOSE_TYPE_FOR_ONE: 1,
  CHOOSE_FROM_SET: 2,
};


// export const RESULT_STATE = [ `wrong`, `correct`, `slow`, `fast`, `unknown`, ];

export const initialState = Object.freeze({ //initial state of our game
  level_id: 0,
  lives: 3,
  time: 0,
  answers: answersStat
});

let getLevel = (state) => levels[state.level_id];

class GameModel {
  constructor(playerName){
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
  }

  hasNextLevel() {
    return getLevel(this._state.level_id + 1) !== void 0; //???
  }

  nextLevel() {
    this._state = changeLevel(this._state, this._state.level_id + 1);
  }

  getCurrentLevel() {
    return getLevel(this._state);
  }

  die(){
    this._state = die(this._state);
  }

  isDead(){
    return this._state.lives <= 0;
  }

  restart() {
    this._state = structuredClone(initialState); //clone initial state
  }

  tick(){
    // this._state = Object.assign({}, this._state, {time: this._state.time + 1});
    this._state.time++;
  }

}

export default GameModel;
