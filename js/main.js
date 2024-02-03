'use strict';

const keyCodeMap = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

const mainElement = document.querySelector(`#main`);
const templateElements = document.querySelectorAll(`template`);
const controlsText = `<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
</style>
<button class="arrows__btn"><-</button>
<button class="arrows__btn">-></button>
</div>
`;

let currentScreenId = 0; // текущий отображаемый экран

const showScreen = () => {
  if (currentScreenId >= 0 && currentScreenId <= templateElements.length - 1) {
    let screenElement = templateElements[currentScreenId].content.cloneNode(true);
    mainElement.replaceChildren();
    mainElement.appendChild(screenElement);
  }
};

const setScreen = (id) => {

  if (id < 0) {
    id = 0;
  }

  if (id > templateElements.length - 1) {
    id = templateElements.length - 1;
  }

  currentScreenId = id;
  showScreen();

};

document.body.addEventListener(`keydown`, function (evt) {
  switch (evt.keyCode) {
    case keyCodeMap.LEFT_ARROW:
      setScreen(--currentScreenId);
      break;
    case keyCodeMap.RIGHT_ARROW:
      setScreen(++currentScreenId);
      break;
    default:
      break;
  }
});

let addControlsElement = () => {
  // const template = document.createElement(`template`);
  // template.innerHTML = controlsText;
  // document.body.append(template.content);

  document.body.insertAdjacentHTML(`beforeEnd`, controlsText);

  const buttonWrap = document.body.querySelector(`.arrows__wrap`);
  const arrowsButtons = document.body.querySelectorAll(`.arrows__btn`);

  buttonWrap.addEventListener(`click`, function (evt) {
    switch (evt.target) {
      case arrowsButtons[0]:
        setScreen(--currentScreenId);
        break;
      case arrowsButtons[1]:
        setScreen(++currentScreenId);
        break;
      default: break;
    }
  });
};

addControlsElement();
// Показывает экран `greeting` согласно ТЗ
showScreen();
