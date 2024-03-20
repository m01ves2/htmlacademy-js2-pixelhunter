import AbstractScreen from "./abstract-screen";

import HeaderView from "../views/header-view";
import Application from "../application";
import RulesView from "../views/rules-view";
export default class IntroScreen extends AbstractScreen{
  constructor(){
    super();

    this.header = new HeaderView();
    this.header.onClick = () => Application.showIntro();
    this.content = new RulesView();
    this.content.onSubmit = (playerName) => Application.showGame(playerName);
  }
};
