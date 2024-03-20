// import { assert } from 'chai';
// import { INITIAL_GAME, changeLevel, setLives } from '../utils/game-data';

// describe(`changeLevel() function`, () => {

//   describe(`Check changeLevel() function results with valid params`, () => {
//     it(`should update level of the game`, () => {
//       assert.equal(changeLevel(INITIAL_GAME, 1), 1);
//       assert.equal(changeLevel(INITIAL_GAME, 2), 2);
//       assert.equal(changeLevel(INITIAL_GAME, 10), 10);
//       assert.equal(changeLevel(INITIAL_GAME, 102), 102);
//     });
//   });

//   describe(`Check changeLevel() function results with invalid parameters`, () => {
//     it(`should not allow set negative level values`, () => {
//       assert.throws(() => changeLevel(INITIAL_GAME, -1));
//     });
//   });

//   describe(`Check changeLevel() function results with incorrect parameters`, () => {
//     it(`should not allow set null level values`, () => {
//       assert.throws(() => changeLevel(INITIAL_GAME, null));
//     });
//     it(`should not allow set undefined level values`, () => {
//       assert.throws(() => changeLevel(INITIAL_GAME, undefined));
//     });
//   });

//   describe(`Check Initial Game Status`, () => {
//     it(`Game Starts With 3 lives, level 0, 30000 time`, () => {
//       assert.equal(0, INITIAL_GAME.level);
//       assert.equal(3, INITIAL_GAME.lives);
//       assert.equal(30000, INITIAL_GAME.time);
//     });
//   });

// });


// describe(`setLives() function`, () => {

//   describe(`Check changeLives() function results with valid params`, () => {
//     it(`should update player's lives`, () => {
//       assert.equal(setLives(INITIAL_GAME, 3), 3);
//       assert.equal(setLives(INITIAL_GAME, 2), 2);
//       assert.equal(setLives(INITIAL_GAME, 1), 1);
//       assert.equal(setLives(INITIAL_GAME, 0), 0);
//     });
//   });

//   describe(`Check setLives() function results with invalid parameters`, () => {
//     it(`should not allow set negative lives values`, () => {
//       assert.throws(() => setLives(INITIAL_GAME, -1));
//     });
//   });

//   describe(`Check setLives() function results with incorrect parameters`, () => {
//     it(`should not allow set null lives values`, () => {
//       assert.throws(() => setLives(INITIAL_GAME, null));
//     });
//     it(`should not allow set undefined lives values`, () => {
//       assert.throws(() => setLives(INITIAL_GAME, undefined));
//     });
//   });

// });
