import AbstractScreen from "./abstract-screen";

import HeaderView from "../views/header-view";
import IntroView from "../views/intro-view";
import Application from "../application";
export default class IntroScreen extends AbstractScreen{
  constructor(){
    super();

    this.header = null;
    this.content = new IntroView();
    this.content.onClick = () => Application.showGreeting();
  }
};
