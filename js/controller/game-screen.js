import AbstractScreen from './abstract-screen';
import { GAME_TYPE} from '../data/game-settings';
import HeaderView from '../views/header-view';
import Application from '../application';
import { getLevel } from '../model/game-model';
import GameOneOfThreeView from '../views/game-one-of-three-view';
import GameTnderLikeView from '../views/game-tinder-like-view';
import GameTwoOfTwoView from '../views/game-two-of-two-view';
import ModalErrorView from '../views/modal-error-view';
import { setAnswerStatus } from '../utils/count-scores';

class GameScreen extends AbstractScreen  {
  constructor(gameModel){
    super();
    this._timer = null;
    this.gameModel = gameModel;
    this.header = new HeaderView(this.gameModel.state);
    this.header.onClick = () => Application.showIntro(); //TODO подтверждение через модальное окно modal-confirm-view
    this.content = this._getGameContent();
  }

  _tick(){
    this._updateHeader();
    this.gameModel.tick();
    this._timer = setTimeout(() => this._tick(), 1000);
  }

  _resetTimer(){
    if(this._timer){
      clearTimeout(this._timer);
      this.gameModel.resetTimer();
    }
  }

  startGame(){
    //answerHandler
    this.content.onAnswer = (answers) => {
      setAnswerStatus(answers, this.gameModel.state);

      if( !this.gameModel.isDead() && this.gameModel.hasNextLevel()){
        this.goNextLevel();
      }
      else{
        this.doGameOver();
      }
    };

    this._resetTimer();
    this._tick();
  }

  doGameOver(){
    //if levels are off or we lost - show stats screen
    Application.showStats(this.gameModel);
  }

  goNextLevel() {
    this.gameModel.goNextLevel();
    this._updateHeader();
    let content = this._getGameContent();
    this._changeContentView(content);
    this.startGame();
  }

  _updateHeader(){
    const header = new HeaderView(this.gameModel.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
    this.header.onClick = () => Application.showIntro();
  }

  _changeContentView(content){
    this.root.replaceChild(content.element, this.content.element);
    // this.root.removeChild(this.content.element);
    // this.root.appendChild(content.element);
    this.content = content;
  }

  _getGameContent(){
    let level = getLevel(this.gameModel.state);
    let gameType = level.type;
    let content = null;
    switch(gameType){
      case GAME_TYPE.TWO_OF_TWO:
        content =  new GameTwoOfTwoView(this.gameModel.state, level);
        break;
      case GAME_TYPE.TINDER_LIKE:
        content =  new GameTnderLikeView(this.gameModel.state, level);
        break;
      case GAME_TYPE.ONE_OF_THREE:
        content =  new GameOneOfThreeView(this.gameModel.state, level);
        break;
      default:
        content = new ModalErrorView();
        break;
    }
    return content;
  }

};

export default GameScreen;
