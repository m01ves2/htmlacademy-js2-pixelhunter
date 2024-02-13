import IngameTimer from './game-timer';

let gameTimer = new IngameTimer(30000); // На ответ игроку дается 30 сек

export const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: gameTimer.time,
});

export const changeLevel = (game, level) => {
  if(typeof level !== `number`){
    throw new Error(`Level should be of type number`);
  }

  if(level < 0){
    throw new Error(`Level should be positive number`);
  }

  const newGame = Object.assign({}, game, {level});
  return newGame.level;
};

export const setLives = (game, lives) => {
  if(typeof lives !== `number`){
    throw new Error(`lives should be of type number`);
  }

  if(lives < 0){
    throw new Error(`lives should be positive number`);
  }

  const newGame = Object.assign({}, game, {lives});
  return newGame.lives;
};
