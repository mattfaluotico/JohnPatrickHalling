;'use strict'

var app = angular.module('johnpatrickhalling', [
  'ngRoute',
  'johnpatrickhalling.content',
  'duScroll'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .otherwise({redirectTo: '/'});
}]);
