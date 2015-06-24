;'use strict'

var app = angular.module('johnpatrickhalling', [
  'ngRoute',
  'johnpatrickhalling.blog',
  'johnpatrickhalling.content'
]);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'ContentController'
    })
    .when('/updates', {
      templateUrl: 'views/blog.html',
      controller: 'BlogController'
    })
    .when('/updates/:postID', {
      templateUrl: 'views/blog.html',
      controller: 'BlogController'
    })
    .otherwise({redirectTo: '/'});
});
