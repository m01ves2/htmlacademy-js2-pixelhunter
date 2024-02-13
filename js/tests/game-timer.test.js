import {assert} from 'chai';
import gameTimer from '../utils/game-timer';

const sayHello = () => {
  return `hello`;
};
const mockTimer = new gameTimer(30000, sayHello);
const mockTimer2 = new gameTimer(0, sayHello);

describe(`gameTimer() function`, () => {
  it(`set time to 30 000 ms`, () => {
    assert.equal(30000, mockTimer.time);
  });
  it(`decrement time on tick()`, () => {
    assert.equal(29999, mockTimer.tick());
  });
  it(`trigger callback if time = 0`, () => {
    assert.equal(`hello`, mockTimer2.tick());
  });
});
