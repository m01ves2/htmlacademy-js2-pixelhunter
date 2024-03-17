import IntroScreen from './controller/intro-screen.js';
import GreetingScreen from './controller/greeting-screen.js';
import RulesScreen from './controller/rules-screen.js';
import GameScreen from './controller/game-screen.js';
import GameModel from './model/game-model.js';
import StatsScreen from './controller/stats-screen.js';
// class-Router, which manages all Screens (Presenters/Controllers)

const main = document.querySelector(`main`);
const changeView = (element) => {
  main.innerHTML = ``;
  main.appendChild(element);
}

export default class Application {
  static showIntro(){
    const introScreen = new IntroScreen();
    changeView(introScreen.element)
  }

  static showGreeting(){
    const greetingScreen = new GreetingScreen();
    changeView(greetingScreen.element)
  }

  static showRules(){
    const rulesScreen = new RulesScreen();
    changeView(rulesScreen.element)
  }

  static showGame(model){
    const gameScreen = new GameScreen(new GameModel(playerName));
    changeView(gameScreen.element)
    gameScreen.startGame();
  }

  static showStats(model){
    const statsScreen = new StatsScreen(model.state);
    changeView(statsScreen.element)
  }
};
