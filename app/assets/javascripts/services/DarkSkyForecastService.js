  angular
    .module('WeatherCastApp')
    .service('DarkSkyForecastService', ['$http', function($http) {
      this.searchForecast = function(lat, long, time) {
        var DarkSkyForecast = "https://api.darksky.net/forecast/"
        var DS_API_KEY = "7edb1e8383b2215411b2675a6f097840"

        DarkSkyForecast = DarkSkyForecast + DS_API_KEY + "/" + lat + "," + long;

        if (time) {
          DarkSkyForecast = DarkSkyForecast + "," + time
        }

        return $http({
          method: 'jsonp',
          url: DarkSkyForecast,
          params: {
            format: 'jsonp',
            callback: 'JSON_CALLBACK'
          }
        }).then(function successCallback(response) {
          return response.data
        }, function errorCallback(response) {
          alert(response.data.message)
        });
      }
    }]);
