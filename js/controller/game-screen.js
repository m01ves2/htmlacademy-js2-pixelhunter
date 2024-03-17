// import GameModel from '../model/game-model';
import {initialState} from '../data/game-data';
import HeaderView from '../views/header-view';
import Application from '../application';

class GameScreen {
  constructor(gameModel){
    this.gameModel = gameModel;
    this.header = new HeaderView(this.gameModel.state);
    this.content = null; //in future - one of game-*-view, depends on current level. Type of [AbstractView]

    this._timer = null;
  }

  get element(){
    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    return this.root;
  }

  _tick(){
    this.gameModel.tick();
    this.updateHeader();
    this._timer = setTimeout(() => this._tick(), 1000);
  }

  startGame(){
    this.changeLevel();
    this._tick();
  }

  stopGame(){
    clearInterval(this._timer);
  }

  restartGame(){
    //TODO
  }

  exit(){
    Application.showStats(this.gameModel); //TODO
  }

  updateHeader(state){
    const header = new HeaderView(this.gameModel.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeLevel() {
    //TODO
  }

  _changeContentView(view){
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }
};

export default GameScreen;
