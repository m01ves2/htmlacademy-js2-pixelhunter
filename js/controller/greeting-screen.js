import AbstractScreen from "./abstract-screen";

import HeaderView from "../views/header-view";
import GreetingView from "../views/greeting-view";
import Application from "../application";
export default class GreetingScreen extends AbstractScreen{
  constructor(){
    super();

    this.header = new HeaderView();
    this.content = new GreetingView();
    this.content.onClick = () => Application.showRules();
  }
};
