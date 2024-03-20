class AbstractView {

  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Not implemented in base class!`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  render() {
    let newNode = document.createElement(`div`);
    newNode.innerHTML = this.template;
    return newNode;
  }

  bind() {
    // bind handlers if required
  }
};

export default AbstractView;
