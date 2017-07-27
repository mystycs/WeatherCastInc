angular
  .module('WeatherCastApp')
  .config( ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('history', {
        url: '/history',
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        onEnter: ['Auth', '$state', function(Auth, $state) {
          Auth.currentUser().then(function() {
            $state.go('home')
          })
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        onEnter: ['Auth', '$state', function(Auth, $state) {
          Auth.currentUser().then(function() {
            $state.go('home')
          })
        }]
      })
    $urlRouterProvider.otherwise('/home')
  }])
