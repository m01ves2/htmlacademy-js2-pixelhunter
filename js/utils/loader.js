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
    return window.fetch(`${SERVER_URL}/questions`).then(this.checkStatus).then(this.toJSON).then(adaptServerData);
  }

  static loadResults(playerName = DEFAULT_NAME){
    return window.fetch(`${SERVER_URL}/stats/:${appId}-:${playerName}`).then(this.checkStatus).then(this.toJSON);
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
    return window.fetch(`${SERVER_URL}/stats/:${appId}-:${playerName}`, requestSettings).then(this.checkStatus);
  }
}
