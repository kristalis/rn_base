

const BASE_URL = 'http://localhost:3001';

class Api {
  constructor() {}

  async get(url, params = null) {
    try {
      return fetch(BASE_URL + url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      }).then(response => response.json());
    } catch (e) {
      alert('e');
      return e;
    }
  }

  async post(url, body) {
    console.log('url', body);
    return fetch(BASE_URL + url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    }).then(response => response.json());
  }
}

// Singleton ApiManager
const Singleton = (function () {
  let instance = null;

  function createInstance() {
    return new Api();
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
        instance.isInitialized = true;
      }
      return instance;
    },
  };
})();

export default Singleton.getInstance();
