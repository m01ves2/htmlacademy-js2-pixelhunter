import AbstractScreen from "./abstract-screen";

import HeaderView from "../views/header-view";
import Application from "../application";
import RecordsView from "../views/records-view";

export default class RecordsScreen extends AbstractScreen{
  constructor(data){
    super();

    this.header = new HeaderView();
    this.header.onClick = () => Application.showIntro();
    this.content = new RecordsView(data);
  }
};
