import AbstractView from "./abstract-view";

class StatsView extends AbstractView {
  constructor(){
    super();
  }

  get template(){
    return `
      <ul class="stats">` +
        state.answers.map(e => `<li class="stats__result stats__result--${e}"></li>`).join(``) +
      `</ul>`;
  }
};

export default StatsView;
