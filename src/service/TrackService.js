import ApiManager from './ApiManager';
import AuthService from './AuthService';

class TrackService {
  getAllTracks() {
    return ApiManager.get('/allTrackes');
  }

  pause(trackId) {
    return ApiManager.post(`/tracks/pause`, {
      trackId,
      userId: AuthService.user.id,
    });
  }

  skip(trackId) {
    return ApiManager.post(`/tracks/skip`, {
      trackId,
      userId: AuthService.user.id,
    });
  }
}

// Singleton ApiManager
const Singleton = (function () {
  let instance = null;

  function createInstance() {
    return new TrackService();
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
