import AbstractScreen from "./abstract-screen";

import HeaderView from "../views/header-view";
import Application from "../application";
import StatsView from "../views/stats-view";
export default class StatsScreen extends AbstractScreen{
  constructor(state){
    super();

    this.header = new HeaderView();
    this.header.onClick = () => Application.showIntro();
    this.content = new StatsView(state);
  }
};
