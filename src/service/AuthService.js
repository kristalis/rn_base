import ApiManager from './ApiManager';
class AuthService {
  user = null;
  login(user) {
    // return ApiManager.axios.post('http://127.0.0.1:5000//api/login', user);

    return fetch(`http://localhost:5000/api/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(({user}) => {
        console.log(user);
        this.user = user;
      });
  }
}

// Singleton ApiManager
const Singleton = (function () {
  let instance = null;

  function createInstance() {
    return new AuthService();
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
