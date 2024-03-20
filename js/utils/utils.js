export default class Utils {
  static changeView(node) {
    const documentMainNode = document.querySelector(`#main`);
    documentMainNode.innerHTML = ``;
    documentMainNode.appendChild(node);
  }

  static appendNode(node) {
    const documentMainNode = document.querySelector(`#main`);
    documentMainNode.appendChild(node);
  }

  static removeNode(node) {
    const documentMainNode = document.querySelector(`#main`);
    documentMainNode.removeChild(node);
  }

  static answersStatsNode(state) {
    return `<ul class="stats">` + state.answers.map(e => `<li class="stats__result stats__result--${e}"></li>`).join(``) + `</ul>`;
  }

  static resize(frame, given) {
    let ratioWidth = given.width / frame.width;
    let ratioHeight = given.height / frame.height;
    let actual = {};

    if (ratioWidth >= ratioHeight) {
      actual.width = frame.width;
      actual.height = given.height / ratioWidth;
    }
    else {
      actual.height = frame.height;
      actual.width = given.width / ratioHeight;
    }
    return actual;
  }
}
