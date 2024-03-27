import { levels } from '../data/game-data';
import { initialState } from '../data/game-settings';

// export let getLevel = (state) => this.gameData[state.level_id];

class GameModel {
  constructor(gameData, playerName) {
    this.gameData = gameData;
    this.playerName = playerName;
    this.restart();
  }

  get state() {
    return this._state;
  }

  getLevel(level_id) {
    return this.gameData[level_id];
  }

  getCurrentLevel(){
    return this.getLevel(this.state.level_id);
  }

  hasNextLevel() {
    return this._state.level_id < this.gameData.length - 1;
  }

  goNextLevel() {
    this._state.level_id++;
  }

  isDead() {
    return this._state.lives <= 0;
  }

  restart() {
    this._state = structuredClone(initialState); //clone initial state
  }

  tick() {
    this._state.time++;
  }

  resetTimer() {
    this.state.time = 0;
  }
}

export default GameModel;
