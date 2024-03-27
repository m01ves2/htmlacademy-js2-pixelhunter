import AbstractView from "./abstract-view";

class ModalErrorView extends AbstractView {
  constructor(errorMsg) {
    super();
    this.errorMsg = errorMsg;
  }

  get template() {
    return `
      <section class="modal">
        <div class="modal__inner">
          <h2 class="modal__title">Произошла ошибка!</h2>
          <p class="modal__text modal__text--error">Ошибка: ${this.errorMsg}. Пожалуйста, перезагрузите страницу.</p>
        </div>
      </section>
    `;
  }
};

export default ModalErrorView;
