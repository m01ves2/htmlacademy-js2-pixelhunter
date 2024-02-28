const RESULT_STATE = {
  WRONG: 0,
  CORRECT: 1,
  SLOW: 2,
  FAST: 3,
  UNKNOWN: 4,
};

const GAME_TYPE = {
  CHOOSE_PICTURE_TYPE: 0,
  CHOOSE_FROM_SET: 1,
};

export const initialState = { //initial state of our game
  level: 1,
  lives: 3,
  time: 0,
  answers: [
    RESULT_STATE.UNKNOWN,
    RESULT_STATE.UNKNOWN,
    RESULT_STATE.UNKNOWN,
    RESULT_STATE.UNKNOWN,
    RESULT_STATE.UNKNOWN,
    RESULT_STATE.UNKNOWN,
    RESULT_STATE.UNKNOWN,
    RESULT_STATE.UNKNOWN,
    RESULT_STATE.UNKNOWN,
    RESULT_STATE.UNKNOWN,
  ],
};

export const level = [
  {
    game__task: `Угадайте для каждого изображения фото или рисунок?`,
    game__type: GAME_TYPE.CHOOSE_PICTURE_TYPE,
    game__option: [
      {
        img: `http://placehold.it/468x458`,
        name: `question1`,
        answer: {
          'photo': true,
          'paint': false,
        },
      },
      {
        img: `http://placehold.it/468x458`,
        name: `question2`,
        answer: {
          'photo': false,
          'paint': true
        },
      },
    ],
  },
  {
    game__task: `Угадай, фото или рисунок?`,
    game__type: GAME_TYPE.CHOOSE_PICTURE_TYPE,
    game__option: [
      {
        img: `http://placehold.it/468x458`,
        name: `question1`,
        answer: {
          'photo': true,
          'paint': false
        },
      },
    ],
  },
  {
    game__task: `Найдите рисунок среди изображений`,
    game__type: GAME_TYPE.CHOOSE_FROM_SET,
    game__option: [
      {
        img: `http://placehold.it/304x455`,
        answer: true,
      },
      {
        img: `http://placehold.it/304x455`,
        answer: false,
      },
      {
        img: `http://placehold.it/304x455`,
        answer: false,
      },
    ],
  },
];
