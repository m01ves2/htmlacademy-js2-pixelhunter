import {levels} from '../data/game-data';
import {initialState} from '../data/game-settings';

export let getLevel = (state) => levels[state.level_id];

class GameModel {
  constructor(playerName){
    this.playerName = playerName;
    // this._state = null;
    this.restart();
  }

  get state() {
    return this._state;
  }

  hasNextLevel() {
    // let nextLEvel = getLevel(this._state[level_id + 1]);
    // return getLevel(this._state.[level_id + 1]) !== void 0; //???

    return this._state.level_id < levels.length - 1;
  }

  goNextLevel() {
    //this._state = changeLevel(this._state, this._state.level_id + 1);
    //TODO
    this._state.level_id++;
  }

  // die(){
  //   //TODO
  //   this._state = die(this._state);
  // }

  isDead(){
    return this._state.lives <= 0;
  }

  restart() {
    this._state = structuredClone(initialState); //clone initial state
  }

  tick(){
    // this._state = Object.assign({}, this._state, {time: this._state.time + 1});
    this._state.time++;
    // this._state = tick(this._state);
  }

}

export default GameModel;
