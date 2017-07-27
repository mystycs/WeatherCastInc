angular
  .module('WeatherCastApp')
  .controller('HistoryCtrl', ['$scope', '$http', 'Auth', 'HistoryLookupService', function($scope, $http, Auth, HistoryLookupService) {
    Auth.currentUser().then(function(user) {
      HistoryLookupService
        .HistoryLookup(user.id)
        .then(function(response) {
          $scope.history = response
        });
    });
  }]);
