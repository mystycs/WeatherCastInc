  angular
    .module('WeatherCastApp')
    .service('GoogleLocationService', ['$http', function($http) {
        this.searchLocation = function(searchCriteria) {
          var GoogleLocationSearch = "https://maps.googleapis.com/maps/api/geocode/json?address="

          GoogleLocationSearch = GoogleLocationSearch + searchCriteria;

          return $http({
            method: 'GET',
            url: GoogleLocationSearch,
            responseType: 'json'

          }).then(function successCallback(response) {
            return response.data.results[0].geometry.location
          }, function errorCallback(response) {
            alert(response.data.message)
          });
        }
        }]);
