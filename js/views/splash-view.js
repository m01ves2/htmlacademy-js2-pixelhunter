import AbstractView from "./abstract-view";

class SplashScreen extends AbstractView {
  constructor(){
    super();

    this.cursor = 0;
    this.symbolSeq = `|/-|/-\\`;
  }

  get template(){
    return `<div></div>`;
  }

  startAnimation(){
    this.cursor = ++this.cursor >= this.symbolSeq.length ? 0 : this.cursor;
    this.element.textContent = this.symbolSeq[this.cursor];
    this.timeout = setTimeout( () => this.startAnimation(), 100 );
  }

  stopAnimation(){
    clearTimeout(this.timeout);
  }
};

export default SplashScreen;
