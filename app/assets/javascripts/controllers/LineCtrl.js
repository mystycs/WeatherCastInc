angular
  .module("WeatherCastApp")
  .controller("LineCtrl", ['$scope', 'DarkSkyForecastService', function($scope, DarkSkyForecastService) {
    $scope.$on('weatherData::changed', function(evt, data) {
      $scope.dateLastYear = new Date();
      $scope.dateLastYear.setDate($scope.dateLastYear.getDate() - 365);
      $scope.dateLastYear = ($scope.dateLastYear / 1000 | 0)

      DarkSkyForecastService
        .searchForecast($scope.lat, $scope.long, $scope.dateLastYear)
        .then(function(response) {
          $scope.temperatureData = []
          $scope.humidityData = []
          $scope.windData = []
          $scope.labels = []
          for (var i = 0; i < 24; i++) {
            $scope.labels.push(new Date(response.hourly.data[i].time * 1000).toLocaleTimeString());
            $scope.temperatureData.push(Math.round(response.hourly.data[i].temperature));
            $scope.humidityData.push(response.hourly.data[i].humidity * 100);
            $scope.windData.push(Math.round(response.hourly.data[i].windSpeed));
          }
        });

      $scope.datasetOverride = [{
        yAxisID: 'y-axis-1'
      }];
      $scope.options = {
        scales: {
          yAxes: [{
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          }]
        },
        animation: {
          duration: 2000
        }
      };
    });
  }]);
