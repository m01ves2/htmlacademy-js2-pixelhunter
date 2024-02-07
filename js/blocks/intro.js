import changeScreen from '../utils/change-screen';
import render from '../utils/render';
import greetingElement from './greeting';

const introText = `
<section class="intro">
<button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>
`;
const introElement = render(introText);

const asteriskButton = introElement.querySelector(`.intro__asterisk`);
asteriskButton.addEventListener(`click`, function(evt){
  changeScreen(greetingElement);
});

export default introElement;
