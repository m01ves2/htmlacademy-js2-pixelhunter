class AbstractScreen {
  constructor(){
    this.content = null;
    this.header = null;
    this.root = null;
  }

  get element(){
    if(!this.root){
      this.root = document.createElement(`div`);

      if(this.header){
        this.root.appendChild(this.header.element);
      }

      if(this.content){
        this.root.appendChild(this.content.element);
      }
    }
    return this.root;
  }
};

export default AbstractScreen;
