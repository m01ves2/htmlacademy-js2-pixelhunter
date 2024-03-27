import AbstractScreen from "./abstract-screen";

import HeaderView from "../views/header-view";
import ModalErrorView from "../views/modal-error-view";

export default class ErrorScreen extends AbstractScreen{
  constructor(errorMsg){
    super();
    this.content = new ModalErrorView(errorMsg);
  }
};
