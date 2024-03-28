import adaptServerData from '../data/data-adapter.js';

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const DEFAULT_NAME = `player`;
const appId = 22101985;

export default class Loader {
  static checkStatus(response){
    if(response.status >= 200 && response.status < 300){
      return response;
    }
    else {
      throw new Error(`${response.status} : ${response.statusText}`);
    }
  }

  static toJSON(response){
    return response.json()
  }

  static loadData(){
    //1.Promise notation
    // return window.fetch(`${SERVER_URL}/questions`).then(this.checkStatus).then(this.toJSON).then(adaptServerData);

    //2.async method notation
    return this.loadDataAsync();
  }

  static async loadDataAsync(){
    const response = await window.fetch(`${SERVER_URL}/questions`);
    const responseChecked = await this.checkStatus(response);
    const responseJSON = await this.toJSON(responseChecked);
    return adaptServerData(responseJSON);
  }

  static loadResults(playerName = DEFAULT_NAME){
    //1.Promise notation
    //return window.fetch(`${SERVER_URL}/stats/:${appId}-:${playerName}`).then(this.checkStatus).then(this.toJSON);

    //2.async method notation
    return this.loadResultsAsync(playerName);
  }

  static async loadResultsAsync(playerName = DEFAULT_NAME){
    const response = await window.fetch(`${SERVER_URL}/stats/:${appId}-:${playerName}`);
    const responseChecked = await this.checkStatus(response);
    return this.toJSON(responseChecked);
  }

  static saveResults(data, playerName = DEFAULT_NAME){
    let date = Date.now();
    data = Object.assign({playerName, date}, data );
    const requestSettings = {
      body: JSON.stringify(data),
      Headers: {
        'Content-type': `application/json`
      },
      method: `POST`
    };

    //1.Promise notation
    // return window.fetch(`${SERVER_URL}/stats/:${appId}-:${playerName}`, requestSettings).then(this.checkStatus);

    //2.async method notation
    return this.saveResultsAsync(data, playerName);
  }

  static async saveResultsAsync(data, playerName = DEFAULT_NAME){
    let date = Date.now();
    data = Object.assign({playerName, date}, data );
    const requestSettings = {
      body: JSON.stringify(data),
      Headers: {
        'Content-type': `application/json`
      },
      method: `POST`
    };

    const response = await window.fetch(`${SERVER_URL}/stats/:${appId}-:${playerName}`, requestSettings);
    return this.checkStatus(response);
  }
}
