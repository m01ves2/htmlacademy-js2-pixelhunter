import IntroScreen from './controller/intro-screen.js';
import GreetingScreen from './controller/greeting-screen.js';
import RulesScreen from './controller/rules-screen.js';
import GameScreen from './controller/game-screen.js';
import GameModel from './model/game-model.js';
import StatsScreen from './controller/stats-screen.js';
import Utils from './utils/utils.js';
// class-Router, which manages all Screens (Presenters/Controllers)

//Intro -> Greeting -> rules -> game -> stats
export default class Application {
  static showIntro(){
    const introScreen = new IntroScreen();
    Utils.changeView(introScreen.element)
  }

  static showGreeting(){
    const greetingScreen = new GreetingScreen();
    Utils.changeView(greetingScreen.element)
  }

  static showRules(){
    const rulesScreen = new RulesScreen();
    Utils.changeView(rulesScreen.element)
  }

  static showGame(playerName){
    const gameScreen = new GameScreen(new GameModel(playerName));
    Utils.changeView(gameScreen.element)
    gameScreen.startGame();
  }

  static showStats(model){
    const statsScreen = new StatsScreen(model.state);
    Utils.changeView(statsScreen.element);
  }
};
