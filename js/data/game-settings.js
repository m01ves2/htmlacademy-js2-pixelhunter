export const GAME_TYPE = {
  TWO_OF_TWO: 0,
  TINDER_LIKE: 1,
  ONE_OF_THREE: 2,
};

export const BONUSES = {
  'fast': 50,
  'slow': -50,
  'correct': 100,
  'wrong': 0,
  'lives': 50,
}

// export const RESULT_STATE = [ `wrong`, `correct`, `slow`, `fast`, `unknown`, ];
export const initialState = Object.freeze({ //initial state of our game
  level_id: 0,
  lives: 3,
  time: 0,
  answers: [
    `unknown`,
    `unknown`,
    `unknown`,
    `unknown`,
    `unknown`,
    `unknown`,
    `unknown`,
    `unknown`,
    `unknown`,
    `unknown`,
   ]
});
