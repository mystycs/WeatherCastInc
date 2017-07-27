angular
  .module('WeatherCastApp')
  .service('HistorySaveService', ['$http', function($http) {
    this.saveLocation = function(user_id, lat, long, address) {
      var data = {
        user_id: user_id,
        lat: lat,
        long: long,
        address: address
      }
      $http.post('/history', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
    }

}]);
