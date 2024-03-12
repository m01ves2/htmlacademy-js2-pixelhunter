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
    if (!this.element) {
      this.element = this.render();
      this.bind();
    }
    return this.element;
  }

  render() {
    let newNode = document.createElement(`div`);
    newNode.innerHTML = this.template;
    return newNode;
  }

  bind() {
  }
};

export default AbstractView;
