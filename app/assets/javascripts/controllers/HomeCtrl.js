angular
  .module('WeatherCastApp')
  .controller('HomeCtrl', ['$scope', '$http', 'Auth', 'HistorySaveService', 'GoogleLocationService', 'DarkSkyForecastService', function($scope, $http, Auth, HistorySaveService, GoogleLocationService, DarkSkyForecastService) {
    $scope.$on('googlelocation::changed', function(evt, data) {
      $scope.address = data
      GoogleLocationService
        .searchLocation(data)
        .then(function(response) {
          $scope.lat = response.lat
          $scope.long = response.lng
          DarkSkyForecastService
            .searchForecast(response.lat, response.lng)
            .then(function(response) {
              $scope.weather = response;
              $scope.$broadcast('weatherData::changed');
            });
          if (Auth.isAuthenticated() == true) {
            HistorySaveService
              .saveLocation(Auth._currentUser.id, response.lat, response.lng, data)
          }
        });
    });

    var options = {
      enableHighAccuracy: true
    };

    navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.lat = pos.coords.latitude
        $scope.long = pos.coords.longitude
        DarkSkyForecastService
          .searchForecast(pos.coords.latitude, pos.coords.longitude)
          .then(function(response) {
            $scope.weather = response;
            $scope.$broadcast('weatherData::changed');
          });
      },
      function(error) {
        alert('Unable to get location: ' + error.message);
      }, options);
  }]);
