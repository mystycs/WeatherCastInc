angular
  .module('WeatherCastApp')
  .service('HistoryLookupService', ['$http', 'Auth', function($http, Auth) {
    this.HistoryLookup = function(userid) {
      var historyLookupAPI = "/history?user_id="

      historyLookupAPI = historyLookupAPI + userid;

      return $http({
        method: 'GET',
        url: historyLookupAPI,
        responseType: 'json'

      }).then(function successCallback(response) {
        return response.data
      }, function errorCallback(response) {
        alert(response.data.message)
      });
    }
  }]);
