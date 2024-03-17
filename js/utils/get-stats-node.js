getStatsNode = (state) => `
    <ul class="stats">` +
      state.answers.map(e => `<li class="stats__result stats__result--${e}"></li>`).join(``) +
    `</ul>`;

export default getStatsNode;
