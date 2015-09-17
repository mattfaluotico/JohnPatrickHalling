;'use strict'

var app = angular.module('johnpatrickhalling', [
  'ngRoute',
  'johnpatrickhalling.blog',
  'johnpatrickhalling.content'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'Home'
    })
    .when('/updates/:postID', {
      templateUrl: 'views/blog.html',
      controller: 'BlogController'
    })
    .otherwise({redirectTo: '/'});
}]);

