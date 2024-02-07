import greetingElement from '../blocks/greeting';

const changeScreen = (element) => {
  const mainElement = document.querySelector(`#main`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);

  const backButton = element.querySelector(`.back`);
  if (backButton) {
    backButton.addEventListener(`click`, function (evt) {
      changeScreen(greetingElement);
    });
  }
};

export default changeScreen;
