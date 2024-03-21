import {levels} from '../data/game-data';
import {initialState} from '../data/game-settings';

export let getLevel = (state) => levels[state.level_id];

class GameModel {
  constructor(playerName){
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return this._state;
  }

  hasNextLevel() {
    return this._state.level_id < levels.length - 1;
  }

  goNextLevel() {
    this._state.level_id++;
  }

  isDead(){
    return this._state.lives <= 0;
  }

  restart() {
    this._state = structuredClone(initialState); //clone initial state
  }

  tick(){
    this._state.time++;
  }

  resetTimer(){
    this.state.time = 0;
  }
}

export default GameModel;
