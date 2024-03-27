import IntroScreen from './controller/intro-screen.js';
import GreetingScreen from './controller/greeting-screen.js';
import RulesScreen from './controller/rules-screen.js';
import GameScreen from './controller/game-screen.js';
import GameModel from './model/game-model.js';
import StatsScreen from './controller/stats-screen.js';
import SplashScreen from './views/splash-view.js';
import ErrorScreen from './controller/error-screen.js';
import RecordsScreen from './controller/records-screen.js';
import Utils from './utils/utils.js';

import Loader from './utils/loader.js';
import gameFetchData from './data/game-fetch-data.js';
import records from './data/game-records.js';

import adaptServerData from './data/data-adapter.js';

// class-Router, which manages all Screens (Presenters/Controllers)

//Intro -> Greeting -> rules -> game -> stats

let gameData;
let recordData;

export default class Application {

  static start(){
    const splashScreen = new SplashScreen();
    Utils.changeView(splashScreen.element);
    splashScreen.startAnimation();

    //right now this server doesn't work, so I still have to use mock data :(
    // Loader.loadData().
    //   then((data) => gameData = data ).
    //   then(Application.showIntro).
    //   catch(Application.showError).
    //   then(splashScreen.stopAnimation);

    gameData = adaptServerData(gameFetchData);
    Application.showIntro();
  }

  static showRecords(model){

    // Loader.saveResults(model.state, model.playerName).
    //   then(() => Loader.loadResults(model.playerName)).
    //   then((data) => Utils.changeView( (new RecordsScreen(data)).element ) ).
    //   catch(Application.showError);

     //right now this server doesn't work, so I still have to use mock data :(
    recordData = records;
    recordData.playerName = model.playerName;
    const recordsScreen = new RecordsScreen(recordData);
    Utils.changeView(recordsScreen.element);
  }

  static showIntro(){
    const introScreen = new IntroScreen();
    Utils.changeView(introScreen.element);
  }

  static showGreeting(){
    const greetingScreen = new GreetingScreen();
    Utils.changeView(greetingScreen.element);
  }

  static showRules(){
    const rulesScreen = new RulesScreen();
    Utils.changeView(rulesScreen.element);
  }

  static showGame(playerName){
    let gameModel = new GameModel( gameData, playerName );
    const gameScreen = new GameScreen(gameModel);
    Utils.changeView(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(model){
    const statsScreen = new StatsScreen(model);
    Utils.changeView(statsScreen.element);
  }

  static showError(errorMsg){
    const errorScreen = new ErrorScreen(errorMsg);
    Utils.changeView(errorScreen.element);
  }
};
