import {changeScreen} from './utils';
import greetingElement from './greeting';

// const mainElement = document.querySelector(`#main`);
const backButton = document.querySelector(`.back`);

if(backButton){
  backButton.addEventListener(`click`, function(evt){
    changeScreen(greetingElement);
  });
}

export default backButton;
