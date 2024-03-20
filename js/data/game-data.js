export const GAME_TYPE = {
  TWO_OF_TWO: 0,
  TINDER_LIKE: 1,
  ONE_OF_THREE: 2,
};


export const levels = [
  {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    type: GAME_TYPE.TWO_OF_TWO,
    options: [
      {
        src: `https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg`,
        alt: `Option 1`,
        name: `question1`,
        answer: `paint`,
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        name: `question2`,
        alt: `Option 2`,
        answer: 'photo',
      },
    ],
  },
  {
    task: `Угадай, фото или рисунок?`,
    type: GAME_TYPE.TINDER_LIKE,
    options: [
      {
        src: `http://placehold.it/468x458`,
        name: `question1`,
        alt: `Option 1`,
        answer: 'paint',
      },
    ],
  },
  {
    task: `Найдите рисунок среди изображений`,
    type: GAME_TYPE.ONE_OF_THREE,
    options: [
      {
        src: `https://i.pinimg.com/originals/aa/8c/64/aa8c643686154915d49238dc15118eae.jpg`,
        name: `Option 1`,
        alt: `Option 1`,
        answer: `paint`,
      },
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        name: `Option 2`,
        alt: `Option 2`,
        answer: `photo`,
      },
      {
        src: `https://static.wixstatic.com/media/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg/v1/fill/w_304,h_455,al_c,q_80,usm_0.66_1.00_0.01/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg`,
        name: `Option 3`,
        alt: `Option 3`,
        answer: `photo`,
      },
    ],
  },
];
