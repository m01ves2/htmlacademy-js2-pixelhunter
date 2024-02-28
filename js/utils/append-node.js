import greetingElement from '../blocks/greeting';

const appendNodeToMain = (element) => {
  const mainElement = document.querySelector(`#main`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);

  const backButton = element.querySelector(`.back`);
  if (backButton) {
    backButton.addEventListener(`click`, function (evt) {
      appendNodeToMain(greetingElement);
    });
  }
};

export default appendNodeToMain;
